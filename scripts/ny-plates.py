#!/usr/bin/env python3
"""Official photos mounted as plates, with form-following New Yorker ink."""
from __future__ import annotations

import math
import random
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

OUT = Path("/workspace/public/photos/plates")
SRC = Path("/tmp/wm")
W, H = 1800, 1200
PAPER = (248, 243, 232)
MX, MY = 54, 48  # cream margin around the photo
INK = (28, 22, 18, 210)
RED = (196, 18, 0, 210)


def crop_cover(im: Image.Image, w: int, h: int) -> Image.Image:
    im = im.convert("RGB")
    scale = max(w / im.width, h / im.height)
    nw, nh = int(im.width * scale), int(im.height * scale)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    top = 0 if nh / nw > 1.12 else max(0, (nh - h) // 7)
    if top + h > nh:
        top = (nh - h) // 2
    return im.crop((left, top, left + w, top + h))


def grade(im: Image.Image) -> Image.Image:
    im = ImageEnhance.Color(im).enhance(0.58)
    im = ImageEnhance.Contrast(im).enhance(1.06)
    wash = Image.new("RGB", im.size, PAPER)
    return Image.blend(im, wash, 0.14)


def mount(src: Image.Image, mode: str) -> Image.Image:
    canvas = Image.new("RGB", (W, H), PAPER)
    iw, ih = W - 2 * MX, H - 2 * MY
    if mode == "letterbox":
        im = src.convert("RGBA")
        scale = min(iw * 0.88 / im.width, ih * 0.9 / im.height)
        nw, nh = max(1, int(im.width * scale)), max(1, int(im.height * scale))
        im = im.resize((nw, nh), Image.Resampling.LANCZOS)
        x, y = (W - nw) // 2, (H - nh) // 2
        canvas.paste(im.convert("RGB"), (x, y), im.split()[-1] if im.mode == "RGBA" else None)
        return canvas
    photo = crop_cover(src, iw, ih)
    photo = grade(photo)
    canvas.paste(photo, (MX, MY))
    return canvas


def conv(a: np.ndarray, k: np.ndarray) -> np.ndarray:
    from numpy.lib.stride_tricks import sliding_window_view
    pad = k.shape[0] // 2
    p = np.pad(a, pad, mode="edge")
    win = sliding_window_view(p, k.shape)
    return np.einsum("ijkl,kl->ij", win, k)


def field(g: np.ndarray):
    gx = np.zeros_like(g)
    gy = np.zeros_like(g)
    gx[:, 1:-1] = g[:, 2:] - g[:, :-2]
    gy[1:-1, :] = g[2:, :] - g[:-2, :]
    mag = np.hypot(gx, gy)
    ang = np.arctan2(gy, gx)
    k = np.ones((11, 11), np.float32) / 121.0
    c, s = np.cos(ang), np.sin(ang)
    ang_s = np.arctan2(conv(s, k), conv(c, k))
    return conv(mag, k), ang_s


def allow_map(g, mag, portrait: bool) -> np.ndarray:
    h, w = g.shape
    yy, xx = np.mgrid[0:h, 0:w]
    # denser toward the edges of the photo — vignette of drawing
    nx = np.abs(xx - w / 2) / (w / 2)
    ny = np.abs(yy - h / 2) / (h / 2)
    edge = np.clip(np.maximum(nx, ny) * 1.15, 0, 1)
    struct = np.clip((mag - 4) / 36, 0, 1)
    mid = np.clip(1 - np.abs(g - 120) / 120, 0, 1)
    m = (0.35 + 0.65 * edge) * (0.4 + 0.6 * struct) * (0.5 + 0.5 * mid)
    if portrait:
        cx, cy, rx, ry = w * 0.5, h * 0.40, w * 0.20, h * 0.28
        ell = ((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2
        face = np.clip((ell - 0.55) / 0.9, 0.12, 1.0)  # some lines on the face, not a blanket
        m *= face
    # no ink on the cream margin
    m[: MY + 2, :] = 0
    m[h - MY - 2 :, :] = 0
    m[:, : MX + 2] = 0
    m[:, w - MX - 2 :] = 0
    return m.astype(np.float32)


def walk(g, mag, ang, allow, n, seed, angle_off=math.pi / 2, maxlen=40):
    rng = np.random.default_rng(seed)
    h, w = g.shape
    p = allow.ravel()
    s = float(p.sum())
    if s < 1:
        return []
    idx = rng.choice(p.size, size=n, p=p / s)
    ys, xs = np.divmod(idx, w)
    strokes = []
    for x0, y0 in zip(xs.astype(float), ys.astype(float)):
        pts = []
        x, y = float(x0), float(y0)
        yi, xi = int(y0), int(x0)
        length = int(8 + min(maxlen, mag[yi, xi] * 0.5))
        sign = 1.0 if rng.random() > 0.5 else -1.0
        for _ in range(length):
            xi, yi = int(x), int(y)
            if not (4 <= xi < w - 4 and 4 <= yi < h - 4):
                break
            if allow[yi, xi] < 0.08:
                break
            a = ang[yi, xi] + angle_off * sign
            pts.append((x, y))
            x += 2.15 * math.cos(a)
            y += 2.15 * math.sin(a)
        if len(pts) > 4:
            strokes.append(pts)
    return strokes


def long_contours(mag, allow, n=24, seed=2):
    rng = random.Random(seed)
    h, w = mag.shape
    edge = (mag > np.quantile(mag, 0.94)) & (allow > 0.12)
    seen = np.zeros_like(edge)
    ys, xs = np.where(edge)
    ids = list(range(len(xs)))
    rng.shuffle(ids)
    chains = []
    nbr = ((1, 0), (0, 1), (-1, 0), (0, -1), (1, 1), (-1, 1), (1, -1), (-1, -1))
    for k in ids[:5000]:
        x, y = int(xs[k]), int(ys[k])
        if seen[y, x]:
            continue
        chain = []
        for _ in range(500):
            if not (0 <= x < w and 0 <= y < h) or seen[y, x] or not edge[y, x]:
                break
            seen[y, x] = True
            chain.append((x, y))
            step = False
            for dx, dy in nbr:
                nx, ny = x + dx, y + dy
                if 0 <= nx < w and 0 <= ny < h and edge[ny, nx] and not seen[ny, nx]:
                    x, y = nx, ny
                    step = True
                    break
            if not step:
                break
        if len(chain) > 48:
            chains.append(chain[::3])
        if len(chains) >= n:
            break
    chains.sort(key=len, reverse=True)
    return chains[:n]


def jitter(pts, amp=0.7):
    return [(x + random.uniform(-amp, amp), y + random.uniform(-amp, amp)) for x, y in pts]


def frame(draw):
    m = 22
    sides = [
        [(m + t, m + math.sin(t / 90.0) * 2.4) for t in range(0, W - 2 * m, 5)],
        [(W - m + math.sin(t / 100.0) * 2.4, m + t) for t in range(0, H - 2 * m, 5)],
        [(W - m - t, H - m + math.sin(t / 80.0) * 2.0) for t in range(0, W - 2 * m, 5)],
        [(m + math.sin(t / 95.0) * 2.4, H - m - t) for t in range(0, H - 2 * m, 5)],
    ]
    for i, side in enumerate(sides):
        if i == 1:
            side = side[: int(len(side) * 0.7)]  # unfinished
        draw.line(jitter(side, 0.6), fill=(26, 20, 16, 230), width=3, joint="curve")


def margin_hatch(draw, seed):
    """Corner clusters of parallel ink, like a cartoonist’s hatch — not scattered ticks."""
    rng = random.Random(seed)
    corners = [
        (28, 28, 0.9, 0.35),
        (W - 28, 28, math.pi - 0.9, 0.35),
        (28, H - 28, -0.9, 0.35),
        (W - 28, H - 28, math.pi + 0.9, 0.35),
    ]
    for cx, cy, ang, _ in corners:
        n = rng.randint(7, 11)
        for i in range(n):
            o = (i - n / 2) * 3.4
            x0 = cx + o * math.cos(ang + math.pi / 2)
            y0 = cy + o * math.sin(ang + math.pi / 2)
            L = rng.uniform(18, 36)
            x1 = x0 + L * math.cos(ang)
            y1 = y0 + L * math.sin(ang)
            # keep inside the cream margin band
            draw.line(jitter([(x0, y0), (x1, y1)], 0.5), fill=(26, 20, 16, 175), width=1)
    x, y = W - 38, 32
    draw.line(
        jitter([(x + 10 * math.cos(t), y + 10 * math.sin(t)) for t in [i * 0.5 for i in range(9)]], 0.4),
        fill=RED,
        width=2,
        joint="curve",
    )


def plate(src: Path, dest: Path, seed: int, mode: str):
    random.seed(seed)
    src_im = Image.open(src)
    if src.name.startswith("alberdi"):
        w0, h0 = src_im.size
        src_im = src_im.crop((int(w0 * 0.07), int(h0 * 0.02), int(w0 * 0.93), int(h0 * 0.98)))
    mounted = mount(src_im, mode)
    g = np.asarray(mounted.convert("L"), dtype=np.float32)
    mag, ang = field(g)
    portrait = mode == "portrait"
    allow = allow_map(g, mag, portrait)

    along = walk(g, mag, ang, allow, n=900 if portrait else 1300, seed=seed, angle_off=math.pi / 2)
    # true cross-hatch only in darker, structured zones
    dark = allow * np.clip((160 - g) / 90, 0, 1)
    cross = walk(g, mag, ang, dark, n=380 if portrait else 620, seed=seed + 9, angle_off=0.0, maxlen=22)
    cons = long_contours(mag, allow, n=18 if portrait else 28, seed=seed + 4)

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    for pts in along:
        d.line(jitter(pts, 0.45), fill=(24, 18, 14, 150), width=1, joint="curve")
    for pts in cross:
        d.line(jitter(pts, 0.4), fill=(24, 18, 14, 130), width=1, joint="curve")
    for pts in cons:
        d.line(jitter(pts, 0.55), fill=(20, 16, 12, 205), width=2, joint="curve")
    frame(d)
    margin_hatch(d, seed)

    out = Image.alpha_composite(mounted.convert("RGBA"), overlay).convert("RGB")
    noise = np.random.default_rng(seed).integers(0, 18, (H, W), dtype=np.uint8)
    out = Image.blend(out, Image.fromarray(noise, "L").convert("RGB"), 0.03)
    dest.parent.mkdir(parents=True, exist_ok=True)
    out.save(dest, "JPEG", quality=88, optimize=True)
    print("wrote", dest.name)


PLATES = [
    ("el-estado-que-no-existe", "moneda.jpg", 11, "cover"),
    ("manual-ecuador-dolarizacion", "carondelet.jpg", 22, "cover"),
    ("bukele-vara-liberal", "bukele.jpg", 33, "portrait"),
    ("quien-paga-el-estado", "mercado.jpg", 44, "cover"),
    ("alberdi-contra-los-libertarios", "alberdi.jpg", 55, "portrait"),
    ("contrapunto-cerrar-la-frontera", "congreso.jpg", 66, "cover"),
    ("catorce", "mercosur.png", 77, "letterbox"),
    ("china-no-compro-america-latina", "callao.jpg", 88, "cover"),
    ("informalidad-mercado-laboral", "informal.jpg", 99, "portrait"),
    ("la-iglesia-que-si-llega", "iglesia.jpg", 111, "cover"),
]

if __name__ == "__main__":
    for slug, fname, seed, mode in PLATES:
        src = SRC / fname
        if not src.exists() or src.stat().st_size < 1000:
            print("missing", src)
            continue
        plate(src, OUT / f"{slug}.jpg", seed, mode)
