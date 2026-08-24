#!/usr/bin/env python3
"""Official / Wikimedia plates + handmade New Yorker ink overlay."""
from __future__ import annotations

import math
import random
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

OUT = Path("/workspace/public/photos/plates")
OUT.mkdir(parents=True, exist_ok=True)
SRC = Path("/tmp/wm")

W, H = 1800, 1200
INK = (18, 16, 14, 245)
RED = (196, 18, 0, 230)


def crop_cover(im: Image.Image, w=W, h=H) -> Image.Image:
    im = im.convert("RGB")
    scale = max(w / im.width, h / im.height)
    nw, nh = int(im.width * scale), int(im.height * scale)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    # portraits: keep the crown of the head
    top = 0 if nh / nw > 1.15 else max(0, (nh - h) // 6)
    if top + h > nh:
        top = (nh - h) // 2
    return im.crop((left, top, left + w, top + h))


def grade(im: Image.Image) -> Image.Image:
    im = ImageEnhance.Color(im).enhance(0.7)
    im = ImageEnhance.Contrast(im).enhance(1.14)
    im = ImageEnhance.Brightness(im).enhance(1.03)
    wash = Image.new("RGB", im.size, (244, 238, 226))
    return Image.blend(im, wash, 0.1)


def letterbox(im: Image.Image, w=W, h=H, paper=(246, 240, 228)) -> Image.Image:
    canvas = Image.new("RGB", (w, h), paper)
    im = im.convert("RGBA")
    scale = min((w * 0.72) / im.width, (h * 0.84) / im.height)
    nw, nh = max(1, int(im.width * scale)), max(1, int(im.height * scale))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    x, y = (w - nw) // 2, (h - nh) // 2
    rgb = im.convert("RGB")
    if im.mode == "RGBA":
        canvas.paste(rgb, (x, y), im.split()[-1])
    else:
        canvas.paste(rgb, (x, y))
    return canvas


def edge_ink(im: Image.Image, keep=0.028) -> Image.Image:
    g = im.convert("L").filter(ImageFilter.FIND_EDGES)
    g = ImageEnhance.Contrast(g).enhance(2.6)
    arr = np.asarray(g).astype(np.float32)
    thresh = np.quantile(arr, 1.0 - keep)
    mask = arr >= max(float(thresh), 80.0)
    pix = np.zeros((im.height, im.width, 4), dtype=np.uint8)
    pix[mask, 0:3] = (16, 14, 12)
    pix[mask, 3] = 210
    layer = Image.fromarray(pix, "RGBA")
    return layer.filter(ImageFilter.MaxFilter(3))


def jitter_line(draw, pts, width=2, fill=INK, amp=2.2):
    out = []
    for x, y in pts:
        out.append((x + random.uniform(-amp, amp), y + random.uniform(-amp, amp)))
    if len(out) >= 2:
        draw.line(out, fill=fill, width=width, joint="curve")


def rect_path(x0, y0, x1, y1, n=110):
    pts = []
    edges = [
        [(x0 + (x1 - x0) * t / n, y0) for t in range(n + 1)],
        [(x1, y0 + (y1 - y0) * t / n) for t in range(n + 1)],
        [(x1 - (x1 - x0) * t / n, y1) for t in range(n + 1)],
        [(x0, y1 - (y1 - y0) * t / n) for t in range(n + 1)],
    ]
    for e in edges:
        pts.extend(e)
    return pts


def hatch(draw, x, y, s=110, ang=0.7, n=16):
    for i in range(n):
        o = i * (s / n)
        x0 = x + o * math.cos(ang + 1.25)
        y0 = y + o * math.sin(ang + 1.25)
        x1 = x0 + s * math.cos(ang)
        y1 = y0 + s * math.sin(ang)
        jitter_line(draw, [(x0, y0), (x1, y1)], width=2, amp=1.6)


def gesture(draw, w, h, seed):
    rng = random.Random(seed)
    x, y = rng.uniform(w * 0.07, w * 0.18), rng.uniform(h * 0.18, h * 0.75)
    pts = [(x, y)]
    for _ in range(30):
        x += rng.uniform(16, 52)
        y += rng.uniform(-26, 26)
        pts.append((x, y))
        if x > w * 0.93:
            break
    jitter_line(draw, pts, width=3, amp=3.4)
    cx, cy = rng.uniform(w * 0.7, w * 0.9), rng.uniform(h * 0.1, h * 0.26)
    r = rng.uniform(16, 26)
    jitter_line(
        draw,
        [(cx + r * math.cos(t), cy + r * math.sin(t)) for t in [i * 0.32 for i in range(22)]],
        width=3,
        fill=RED,
        amp=1.2,
    )


def plate(src: Path, dest: Path, seed: int, mode="cover"):
    random.seed(seed)
    im = Image.open(src)
    if mode == "letterbox":
        im = letterbox(im)
        im = ImageEnhance.Color(im).enhance(0.8)
    else:
        im = crop_cover(im)
        im = grade(im)
    base = im.convert("RGBA")
    if mode != "letterbox":
        base = Image.alpha_composite(base, edge_ink(im))

    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    for k, wth in enumerate((6, 3, 2)):
        inset = 18 + k * 8
        pts = rect_path(inset, inset, W - inset, H - inset, n=120)
        jitter_line(d, pts, width=wth, amp=2.8 + k)
    hatch(d, 22, 22, s=125, ang=0.92, n=18)
    hatch(d, W - 160, H - 150, s=130, ang=-0.58, n=18)
    hatch(d, W - 150, 24, s=80, ang=1.15, n=12)
    gesture(d, W, H, seed)
    gesture(d, W, H, seed + 9)

    out = Image.alpha_composite(base, overlay).convert("RGB")
    noise = np.random.randint(0, 26, (H, W), dtype=np.uint8)
    grain = Image.fromarray(noise, "L").convert("RGB")
    out = Image.blend(out, grain, 0.04)
    dest.parent.mkdir(parents=True, exist_ok=True)
    out.save(dest, "JPEG", quality=88, optimize=True)
    print("wrote", dest, dest.stat().st_size)


PLATES = [
    ("el-estado-que-no-existe", "moneda.jpg", 11, "cover"),
    ("manual-ecuador-dolarizacion", "carondelet.jpg", 22, "cover"),
    ("bukele-vara-liberal", "bukele.jpg", 33, "cover"),
    ("quien-paga-el-estado", "mercado.jpg", 44, "cover"),
    ("alberdi-contra-los-libertarios", "alberdi.jpg", 55, "cover"),
    ("contrapunto-cerrar-la-frontera", "congreso.jpg", 66, "cover"),
    ("catorce", "mercosur.png", 77, "letterbox"),
    ("china-no-compro-america-latina", "callao.jpg", 88, "cover"),
    ("informalidad-mercado-laboral", "informal.jpg", 99, "cover"),
    ("la-iglesia-que-si-llega", "iglesia.jpg", 111, "cover"),
]


if __name__ == "__main__":
    for slug, fname, seed, mode in PLATES:
        src = SRC / fname
        if not src.exists() or src.stat().st_size < 1000:
            print("missing", src)
            continue
        plate(src, OUT / f"{slug}.jpg", seed, mode)
