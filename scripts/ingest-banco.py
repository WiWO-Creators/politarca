#!/usr/bin/env python3
"""Parse POLITARCA launch bank into src/lib/banco.ts."""
from __future__ import annotations

import json
import re
from pathlib import Path

SRC = Path("/workspace/attachments/pasted-text.txt")
OUT = Path("/workspace/src/lib/banco.ts")

META = {
    1: dict(
        slug="el-estado-que-no-existe",
        section="biblioteca",
        format="ensayo",
        rubric="El Ensayo",
        country="América Latina",
        date="2026-08-24",
        dateLabel="24 de agosto de 2026",
        byline="Biblioteca Politarca",
        image="/photos/library.jpg",
        featured=True,
        alt="Biblioteca con estantes de historia intelectual. El Ensayo de Politarca sobre capacidad estatal.",
        ogTitle="El Estado que no existe",
        ogDescription="América Latina. La derecha discutió el tamaño del Estado. El problema nunca fue ese.",
        tags=["capacidad estatal", "América Latina", "Alberdi", "Banco Mundial"],
    ),
    2: dict(
        slug="manual-ecuador-dolarizacion",
        section="biblioteca",
        format="archivo",
        rubric="El Archivo",
        country="Ecuador",
        date="2026-08-22",
        dateLabel="22 de agosto de 2026",
        byline="Biblioteca Politarca",
        image="/photos/archive.jpg",
        alt="Documento de archivo con sello. El Archivo: la dolarización ecuatoriana de 2000.",
        ogTitle="El manual que Ecuador escribió sin querer",
        ogDescription="Ecuador, 2000. Dolarizó un país a doce días de caer el presidente. Lo que enseña no es la tasa.",
        tags=["Ecuador", "dolarización", "Argentina", "Mahuad"],
    ),
    3: dict(
        slug="bukele-vara-liberal",
        section="polis",
        format="pieza",
        rubric="La Polis",
        country="El Salvador",
        date="2026-08-23",
        dateLabel="23 de agosto de 2026",
        byline="Redacción Politarca",
        image="/photos/congress-santiago.jpg",
        alt="Edificio legislativo. La Polis mide a Bukele con la vara liberal, no con el aplauso.",
        ogTitle="Bukele, medido con la vara liberal",
        ogDescription="El Salvador: 105 homicidios por cien mil a 1,3. También la cárcel más llena del mundo.",
        tags=["El Salvador", "Bukele", "homicidios", "régimen de excepción"],
    ),
    4: dict(
        slug="quien-paga-el-estado",
        section="erario",
        format="pieza",
        rubric="El Erario",
        country="América Latina",
        date="2026-08-21",
        dateLabel="21 de agosto de 2026",
        byline="El Erario",
        image="/photos/office.jpg",
        alt="Mesa de trabajo institucional. Quién paga el Estado en América Latina: el IVA, no la renta.",
        ogTitle="Quién paga el Estado en América Latina",
        ogDescription="El IVA recauda tres veces más que la renta personal. Lo paga una señora que compra fideos.",
        tags=["IVA", "renta personal", "CEPAL", "clase media"],
    ),
    5: dict(
        slug="alberdi-contra-los-libertarios",
        section="biblioteca",
        format="ensayo",
        rubric="El Ensayo",
        country="Argentina",
        date="2026-08-20",
        dateLabel="20 de agosto de 2026",
        byline="Biblioteca Politarca",
        image="/photos/lawbooks.jpg",
        alt="Libros de derecho argentino. Alberdi contra los libertarios.",
        ogTitle="Alberdi contra los libertarios",
        ogDescription="Argentina. Gobernar es poblar no dice lo que se cita. Él ya pidió que dejaran de hacerlo.",
        tags=["Alberdi", "Argentina", "Milei", "Bases"],
    ),
    6: dict(
        slug="contrapunto-cerrar-la-frontera",
        section="agora",
        format="contrapunto",
        rubric="El Contrapunto",
        country="América Latina",
        date="2026-08-19",
        dateLabel="19 de agosto de 2026",
        byline="El Ágora",
        image="/photos/gavel.jpg",
        alt="Mazo sobre un escritorio. El Contrapunto: ¿debe un gobierno liberal cerrar la frontera?",
        ogTitle="¿Debe un gobierno liberal cerrar la frontera?",
        ogDescription="Dos firmas. El Darién ahora corre de norte a sur. Chile, Colombia, Perú.",
        tags=["migración", "Darién", "Chile", "Venezuela"],
    ),
    7: dict(
        slug="catorce",
        section="erario",
        format="numeros",
        rubric="Números que mandan",
        country="América Latina",
        date="2026-08-18",
        dateLabel="18 de agosto de 2026",
        byline="El Erario",
        image="/photos/contracts.jpg",
        alt="Contratos comerciales. Números que mandan: el 14% del comercio latinoamericano es intrarregional.",
        ogTitle="14: lo que América Latina se vende a sí misma",
        ogDescription="Catorce por ciento, y bajando. CEPAL, 4 de agosto de 2026.",
        tags=["CEPAL", "Mercosur", "comercio intrarregional"],
    ),
    8: dict(
        slug="china-no-compro-america-latina",
        section="frontera",
        format="pieza",
        rubric="Frontera",
        country="Perú",
        date="2026-08-17",
        dateLabel="17 de agosto de 2026",
        byline="Corresponsalía Politarca",
        image="/photos/desk.jpg",
        alt="Escritorio de trabajo sobre un expediente. Chancay, Perú: el puerto chino y la jurisdicción del Estado.",
        ogTitle="China no compró América Latina. La conectó",
        ogDescription="Perú. Chancay, redes eléctricas, cables. Un préstamo vence; un puerto opera treinta años.",
        tags=["China", "Chancay", "Perú", "Chile"],
    ),
    9: dict(
        slug="informalidad-mercado-laboral",
        section="erario",
        format="pieza",
        rubric="El Erario",
        country="América Latina",
        date="2026-08-16",
        dateLabel="16 de agosto de 2026",
        byline="El Erario",
        image="/photos/office.jpg",
        alt="Oficina de trabajo. La informalidad no es una anomalía: es el mercado laboral latinoamericano.",
        ogTitle="La informalidad no es un problema del mercado laboral",
        ogDescription="OIT, agosto 2026: 47,4% informal. Ulyssea (AER 2018) ordena las tres explicaciones.",
        tags=["informalidad", "OIT", "Colombia", "Brasil"],
    ),
    10: dict(
        slug="la-iglesia-que-si-llega",
        section="vida-comun",
        format="carta",
        rubric="Vida común",
        country="Guatemala",
        date="2026-08-15",
        dateLabel="15 de agosto de 2026",
        byline="Crónica Politarca",
        image="/photos/library.jpg",
        alt="Estantería de una sala común. Vida común: la iglesia evangélica que llega donde el Estado no.",
        ogTitle="La iglesia que sí llega",
        ogDescription="Guatemala: 6.000 internos pentecostales, 1.500 en la cárcel de máxima. Pew 2026.",
        tags=["Guatemala", "evangélicos", "Pew", "Brasil"],
    ),
}


def split_pieces(raw: str) -> dict[int, str]:
    parts = re.split(r"^# (\d+) · [^\n]+\n", raw, flags=re.M)
    out = {}
    i = 1
    while i < len(parts):
        num = int(parts[i])
        out[num] = parts[i + 1]
        i += 2
    return out


def first_heading(block: str, level: str) -> tuple[str, str]:
    m = re.search(rf"^{level} (.+)$", block, re.M)
    if not m:
        raise ValueError(f"missing {level}")
    title = m.group(1).strip()
    rest = block[m.end() :].lstrip("\n")
    return title, rest


def pull_tail(body: str, label: str) -> tuple[str, str | None]:
    m = re.search(rf"\n\*\*{label}[^*]*\*\*\s*", body)
    if not m:
        return body.strip(), None
    head = body[: m.start()].strip()
    tail = body[m.end() :].strip()
    return head, tail


def excerpt_of(md: str) -> str:
    for para in re.split(r"\n{2,}", md):
        t = re.sub(r"[*_>#]", "", para).strip()
        t = re.sub(r"\s+", " ", t)
        if len(t) > 80 and not t.startswith("|"):
            return t[:220].rsplit(" ", 1)[0] + "…" if len(t) > 220 else t
    return ""


def tldr_of(md: str) -> list[str]:
    items = []
    for para in re.split(r"\n{2,}", md):
        t = re.sub(r"[*_>#]", "", para).strip()
        t = re.sub(r"\s+", " ", t)
        if len(t) > 60 and not t.startswith("|") and not t.startswith("Gráfico"):
            items.append(t if len(t) < 280 else t[:277].rsplit(" ", 1)[0] + "…")
        if len(items) >= 4:
            break
    return items


def faqs_of(title: str, country: str, dek: str) -> list[dict]:
    return [
        {
            "q": f"¿De qué país es «{title}»?",
            "a": f"La pieza está situada en {country}. {dek}",
        },
        {
            "q": "¿Qué es Politarca?",
            "a": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda.",
        },
    ]


def ts_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit_article(n: int, chunk: str) -> str:
    meta = META[n]
    title, rest = first_heading(chunk, "##")
    # piece 7 title in file is "14"
    dek, rest = first_heading(rest, "###")
    rest = rest.lstrip("-").lstrip("\n")
    fuentes = None
    edit = None
    fuentes_m = re.search(r"\n\*\*Fuentes:\*\*\s*", rest)
    if fuentes_m:
        body = rest[: fuentes_m.start()].strip()
        tail = rest[fuentes_m.end() :]
        nota_m = re.search(r"\n\*\*(Nota[^*]*)\*\*\s*", tail)
        if nota_m:
            fuentes = tail[: nota_m.start()].strip()
            edit = f"{nota_m.group(1).strip()} {tail[nota_m.end():].strip()}".strip()
        else:
            fuentes = tail.strip()
    else:
        body = rest.strip()
    body = re.sub(r"\n---\n", "\n\n", body).strip()
    body = re.sub(r"(?:\n---)+\s*$", "", body).strip()
    if fuentes:
        fuentes = fuentes.replace("\n", " ").strip()
        fuentes = re.sub(r"\s+", " ", fuentes)
    if edit:
        edit = re.sub(r"\s+", " ", edit).strip()
    words = len(re.findall(r"\w+", body, flags=re.UNICODE))
    read_min = max(6, round(words / 200))
    excerpt = excerpt_of(body)
    tldr = tldr_of(body)
    faqs = faqs_of(title, meta["country"], dek)

    fields = [
        f'    slug: {ts_string(meta["slug"])}',
        f'    title: {ts_string(title)}',
        f'    dek: {ts_string(dek)}',
        f'    section: {ts_string(meta["section"])}',
        f'    format: {ts_string(meta["format"])}',
        f'    rubric: {ts_string(meta["rubric"])}',
        f'    country: {ts_string(meta["country"])}',
        f'    date: {ts_string(meta["date"])}',
        f'    dateLabel: {ts_string(meta["dateLabel"])}',
        f'    readMin: {read_min}',
        f'    byline: {ts_string(meta["byline"])}',
        f'    excerpt: {ts_string(excerpt)}',
        f'    image: {ts_string(meta["image"])}',
    ]
    if meta.get("featured"):
        fields.append("    featured: true")
    fields.append(f"    markdown: {ts_string(body)}")
    if fuentes:
        fields.append(f"    sources: {ts_string(fuentes)}")
    if edit:
        fields.append(f"    editNote: {ts_string(edit)}")
    fields.append(f"    alt: {ts_string(meta['alt'])}")
    fields.append(f"    ogTitle: {ts_string(meta['ogTitle'])}")
    fields.append(f"    ogDescription: {ts_string(meta['ogDescription'])}")
    fields.append(f"    tags: {json.dumps(meta['tags'], ensure_ascii=False)}")
    fields.append(f"    tldr: {json.dumps(tldr, ensure_ascii=False)}")
    fields.append(f"    faqs: {json.dumps(faqs, ensure_ascii=False)}")
    return "  {\n" + ",\n".join(fields) + ",\n  }"


def main() -> None:
    raw = SRC.read_text(encoding="utf-8")
    pieces = split_pieces(raw)
    missing = [n for n in META if n not in pieces]
    if missing:
        raise SystemExit(f"missing pieces {missing}; found {sorted(pieces)}")
    articles = ",\n".join(emit_article(n, pieces[n]) for n in sorted(META))
    OUT.write_text(
        "import type { BancoArticle } from \"./content\";\n\n"
        f"export const BANCO: BancoArticle[] = [\n{articles}\n];\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes) n={len(META)}")


if __name__ == "__main__":
    main()
