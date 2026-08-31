#!/usr/bin/env python3
"""Download Wikimedia originals for the second bank, then render NY plates."""
from __future__ import annotations

import json
import ssl
import urllib.parse
import urllib.request
from pathlib import Path

SRC = Path("/tmp/wm2")
SRC.mkdir(parents=True, exist_ok=True)
UA = "PolitarcaBot/1.0 (editorial; politarca.com)"
CTX = ssl.create_default_context()

# Preferred Commons filenames, then search fallbacks.
JOBS = [
    ("brasil-vota", ["Congresso_Nacional_do_Brasil.jpg", "National Congress of Brazil"], "cover"),
    ("las-cortes-que-quedaron", ["Palacio_de_Justicia_de_Chile.JPG", "Supreme Court of Mexico"], "cover"),
    ("conglomerado-combustible", ["Gas station Brazil", "Petrobras station"], "cover"),
    ("el-fin-de-los-partidos", ["Hemiciclo Palacio Legislativo Mexico", "Chamber of Deputies Brazil empty"], "cover"),
    ("la-bomba-que-todos-oyen", ["Ancianos plaza América Latina", "Elderly people park Santiago"], "cover"),
    ("matriz-limpia-luz-cara", ["Itaipu Dam aerial", "High voltage power lines Chile"], "cover"),
    ("escondida-le-gano-a-chile", ["Minera Escondida", "Escondida mine Chile"], "cover"),
    ("cinco-anos-y-medio-de-tramites", ["Santiago de Chile skyline", "Construction Santiago Chile"], "cover"),
    ("el-ano-en-que-asia-nos-paso", ["Port of Shanghai containers", "Yangshan Deep Water Port"], "cover"),
    ("brasil-teraflops", ["Supercomputer cluster", "Data center servers"], "cover"),
    ("el-dia-despues-venezuela", ["Palacio de Miraflores Caracas", "Miraflores Palace"], "cover"),
    ("el-uno-por-ciento", ["US dollar banknotes", "Money transfer remittances"], "cover"),
    ("colombia-dejo-de-medir-cocaina", ["Capitolio Nacional Colombia", "Congreso de Colombia Bogotá"], "cover"),
    ("envejecio-antes-de-enriquecerse", ["Parque Forestal Santiago", "Plaza de Armas Santiago Chile"], "cover"),
    ("ocho-de-cada-diez", ["Empty classroom", "Escuela rural América Latina"], "cover"),
    ("ciento-cincuenta-y-tres-horas", ["Lima Peru traffic", "Panamericana Lima congestion"], "cover"),
    ("doce-anos-y-cuatro-meses", ["Constitución de Chile libro", "Palacio Pereira Santiago"], "cover"),
    ("redes-nadie-lo-ha-medido", ["Newspaper newsroom desks", "Redacción periódico"], "cover"),
    ("contrapunto-legalizar-drogas", ["Palacio Legislativo Uruguay", "Montevideo Palacio Legislativo"], "cover"),
    ("contrapunto-estado-de-bienestar", ["Caixa Econômica Federal", "Social security office"], "cover"),
]


def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=40) as r:
        return r.read()


def file_url(title: str) -> str | None:
    if not title.lower().endswith((".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp")):
        return None
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "titles": title if title.startswith("File:") else f"File:{title.replace(' ', '_')}",
            "prop": "imageinfo",
            "iiprop": "url|size|mime",
            "iiurlwidth": 2000,
            "format": "json",
        }
    )
    data = json.loads(get("https://commons.wikimedia.org/w/api.php?" + q))
    pages = data.get("query", {}).get("pages", {})
    for p in pages.values():
        info = (p.get("imageinfo") or [None])[0]
        if not info:
            continue
        return info.get("thumburl") or info.get("url")
    return None


def search_url(query: str) -> str | None:
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "generator": "search",
            "gsrsearch": query,
            "gsrnamespace": 6,
            "gsrlimit": 8,
            "prop": "imageinfo",
            "iiprop": "url|size|mime",
            "iiurlwidth": 2000,
            "format": "json",
        }
    )
    data = json.loads(get("https://commons.wikimedia.org/w/api.php?" + q))
    pages = data.get("query", {}).get("pages", {})
    best = None
    for p in pages.values():
        info = (p.get("imageinfo") or [None])[0]
        if not info:
            continue
        mime = str(info.get("mime") or "")
        if not mime.startswith("image/") or "svg" in mime:
            continue
        url = info.get("thumburl") or info.get("url")
        size = int(info.get("size") or 0)
        if url and (best is None or size > best[0]):
            best = (size, url, p.get("title"))
    return best[1] if best else None


def download(slug: str, queries: list[str]) -> Path | None:
    dest = SRC / f"{slug}.jpg"
    if dest.exists() and dest.stat().st_size > 8000:
        print("have", dest.name, dest.stat().st_size)
        return dest
    url = None
    for q in queries:
        try:
            url = file_url(q) or search_url(q)
        except Exception as e:
            print("err", slug, q, e)
            url = None
        if url:
            break
    if not url:
        print("NO URL", slug)
        return None
    try:
        blob = get(url)
    except Exception as e:
        print("GET fail", slug, e)
        return None
    if len(blob) < 4000:
        print("tiny", slug, len(blob))
        return None
    dest.write_bytes(blob)
    print("dl", dest.name, len(blob), url[:80])
    return dest


if __name__ == "__main__":
    ok = 0
    for slug, queries, _ in JOBS:
        if download(slug, queries):
            ok += 1
    print("downloaded", ok, "/", len(JOBS))
