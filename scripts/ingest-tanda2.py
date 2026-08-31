#!/usr/bin/env python3
"""Parse POLITARCA second bank (pieces 11–30) into src/lib/banco-tanda2.ts."""
from __future__ import annotations

import json
import re
from pathlib import Path

SRC = Path("/workspace/attachments/pasted-text.txt")
OUT = Path("/workspace/src/lib/banco-tanda2.ts")

META = {
    11: dict(
        slug="brasil-vota",
        section="polis",
        format="pieza",
        rubric="La Polis",
        country="Brasil",
        date="2026-08-30",
        dateLabel="30 de agosto de 2026",
        byline="Redacción Politarca",
        tags=["Brasil", "Lula", "Flávio Bolsonaro", "elección 2026"],
        ogTitle="Brasil vota. La región es la que se juega algo",
        ogDescription="Brasil, 4 de octubre. Si gana Flávio, hay ola. Si gana Lula, perdía el que gobernaba.",
        alt="Congreso Nacional de Brasilia. La Polis cubre la presidencial brasileña desde afuera.",
    ),
    12: dict(
        slug="las-cortes-que-quedaron",
        section="polis",
        format="pieza",
        rubric="La Polis",
        country="América Latina",
        date="2026-08-29",
        dateLabel="29 de agosto de 2026",
        byline="Redacción Politarca",
        tags=["poder judicial", "Argentina", "México", "El Salvador"],
        ogTitle="Las cortes que quedaron",
        ogDescription="Tres métodos para intervenir la justicia. Uno de esos gobiernos es de izquierda.",
        alt="Palacio de justicia. La Polis: cómo se interviene un tribunal en América Latina.",
    ),
    13: dict(
        slug="conglomerado-combustible",
        section="polis",
        format="pieza",
        rubric="La Polis",
        country="Brasil",
        date="2026-08-28",
        dateLabel="28 de agosto de 2026",
        byline="Redacción Politarca",
        tags=["crimen organizado", "combustible", "Brasil", "PCC"],
        ogTitle="Ya no es un cartel. Es un conglomerado",
        ogDescription="Brasil. Nueve mil seiscientos millones de dólares. No era droga: era combustible.",
        alt="Estación de servicio. La Polis: el crimen que se parece a una empresa.",
    ),
    14: dict(
        slug="el-fin-de-los-partidos",
        section="polis",
        format="pieza",
        rubric="La Polis",
        country="América Latina",
        date="2026-08-27",
        dateLabel="27 de agosto de 2026",
        byline="Redacción Politarca",
        tags=["partidos", "legisladores", "representación", "América Latina"],
        ogTitle="El fin de los partidos",
        ogDescription="Siete de cada diez legisladores latinoamericanos son nuevos en cada elección.",
        alt="Hemiciclo vacío. La Polis: la crisis de representación que nadie está midiendo.",
    ),
    15: dict(
        slug="la-bomba-que-todos-oyen",
        section="erario",
        format="pieza",
        rubric="El Erario",
        country="América Latina",
        date="2026-08-26",
        dateLabel="26 de agosto de 2026",
        byline="El Erario",
        tags=["pensiones", "envejecimiento", "informalidad", "CEPAL"],
        ogTitle="La bomba que todos oyen",
        ogDescription="220 millones de mayores de sesenta en 2060. Dos tercios de los trabajadores no cotizan.",
        alt="Cola en una oficina previsional. El Erario: la vejez sin cotización.",
    ),
    16: dict(
        slug="matriz-limpia-luz-cara",
        section="erario",
        format="pieza",
        rubric="El Erario",
        country="Chile",
        date="2026-08-25",
        dateLabel="25 de agosto de 2026",
        byline="El Erario",
        tags=["electricidad", "Chile", "tarifas", "renovables"],
        ogTitle="La matriz más limpia del mundo y la luz más cara",
        ogDescription="Chile. El 65% de la electricidad regional es limpia. Un hogar chileno paga más que uno estadounidense.",
        alt="Líneas de alta tensión. El Erario: generar limpio no barató la cuenta.",
    ),
    17: dict(
        slug="escondida-le-gano-a-chile",
        section="erario",
        format="pieza",
        rubric="El Erario",
        country="Chile",
        date="2026-08-24",
        dateLabel="24 de agosto de 2026",
        byline="El Erario",
        tags=["cobre", "litio", "Codelco", "Escondida"],
        ogTitle="Escondida le ganó a Chile",
        ogDescription="Chile. Una mina privada produjo más cobre que toda la estatal. El litio cayó 86%.",
        alt="Rajo minero en el desierto. El Erario: el cobre que ya no manda como antes.",
    ),
    18: dict(
        slug="cinco-anos-y-medio-de-tramites",
        section="erario",
        format="pieza",
        rubric="El Erario",
        country="Chile",
        date="2026-08-23",
        dateLabel="23 de agosto de 2026",
        byline="El Erario",
        tags=["permisos", "Chile", "vivienda", "tramitación"],
        ogTitle="Cinco años y medio de trámites",
        ogDescription="Chile. Un proyecto inmobiliario pasó de 1.298 días a 2.001. Eso es el precio de la vivienda.",
        alt="Obra detenida en Santiago. El Erario: el permiso como política de vivienda.",
    ),
    19: dict(
        slug="el-ano-en-que-asia-nos-paso",
        section="erario",
        format="pieza",
        rubric="El Erario",
        country="América Latina",
        date="2026-08-22",
        dateLabel="22 de agosto de 2026",
        byline="El Erario",
        tags=["productividad", "Asia", "convergencia", "PIB per cápita"],
        ogTitle="El año en que Asia nos pasó",
        ogDescription="En 1960 un latinoamericano producía tres veces lo que un asiático oriental. En 2010 se cruzaron.",
        alt="Puerto de contenedores. El Erario: el cruce con Asia oriental que ya ocurrió.",
    ),
    20: dict(
        slug="brasil-teraflops",
        section="erario",
        format="numeros",
        rubric="Números que mandan",
        country="Brasil",
        date="2026-08-21",
        dateLabel="21 de agosto de 2026",
        byline="El Erario",
        tags=["inteligencia artificial", "Brasil", "inversión", "computación"],
        ogTitle="Brasil tiene casi nueve de cada diez teraflops",
        ogDescription="América Latina es el 6,6% del PIB mundial y recibe el 1,12% de la inversión global en IA.",
        alt="Sala de servidores. Números que mandan: el cómputo de la región cabe en Brasil.",
    ),
    21: dict(
        slug="el-dia-despues-venezuela",
        section="frontera",
        format="pieza",
        rubric="Frontera",
        country="Venezuela",
        date="2026-08-20",
        dateLabel="20 de agosto de 2026",
        byline="Corresponsalía Politarca",
        tags=["Venezuela", "Maduro", "transición", "FMI"],
        ogTitle="El día después llegó, y no era una transición",
        ogDescription="Venezuela. Ocho meses después de la captura de Maduro: inflación 387% y deuda que no cuadra.",
        alt="Palacio de Miraflores. Frontera: el día después que no fue transición.",
    ),
    22: dict(
        slug="el-uno-por-ciento",
        section="frontera",
        format="pieza",
        rubric="Frontera",
        country="América Latina",
        date="2026-08-19",
        dateLabel="19 de agosto de 2026",
        byline="Corresponsalía Politarca",
        tags=["remesas", "Estados Unidos", "impuesto", "migración"],
        ogTitle="El uno por ciento",
        ogDescription="Estados Unidos gravó las remesas en enero de 2026. Es la política hemisférica que menos se discute.",
        alt="Giro de dinero. Frontera: el impuesto a las remesas que llega a la familia.",
    ),
    23: dict(
        slug="colombia-dejo-de-medir-cocaina",
        section="frontera",
        format="pieza",
        rubric="Frontera",
        country="Colombia",
        date="2026-08-18",
        dateLabel="18 de agosto de 2026",
        byline="Corresponsalía Politarca",
        tags=["Colombia", "coca", "UNODC", "drogas"],
        ogTitle="El país que produce más cocaína dejó de medir cuánta produce",
        ogDescription="Colombia. Naciones Unidas retiró el indicador de producción potencial. Eso es el hecho.",
        alt="Capitolio Nacional, Bogotá. Frontera: la cifra que Naciones Unidas dejó de publicar.",
    ),
    24: dict(
        slug="envejecio-antes-de-enriquecerse",
        section="vida-comun",
        format="carta",
        rubric="Vida común",
        country="América Latina",
        date="2026-08-17",
        dateLabel="17 de agosto de 2026",
        byline="Crónica Politarca",
        tags=["fecundidad", "Chile", "demografía", "envejecimiento"],
        ogTitle="El continente que envejeció antes de enriquecerse",
        ogDescription="Chile, 2025: menos de un hijo por mujer. Asia oriental envejeció más rápido; acá, más pobre.",
        alt="Plaza con bancos vacíos. Vida común: la transición demográfica que no era la más rápida.",
    ),
    25: dict(
        slug="ocho-de-cada-diez",
        section="vida-comun",
        format="pieza",
        rubric="Vida común",
        country="América Latina",
        date="2026-08-16",
        dateLabel="16 de agosto de 2026",
        byline="Crónica Politarca",
        tags=["educación", "pobreza de aprendizaje", "Banco Mundial"],
        ogTitle="Ocho de cada diez",
        ogDescription="Niños de diez años que no comprenden un texto simple. Antes de la pandemia eran cinco.",
        alt="Aula vacía. Vida común: la pobreza de aprendizaje que la pandemia no inventó.",
    ),
    26: dict(
        slug="ciento-cincuenta-y-tres-horas",
        section="vida-comun",
        format="pieza",
        rubric="Vida común",
        country="Perú",
        date="2026-08-15",
        dateLabel="15 de agosto de 2026",
        byline="Crónica Politarca",
        tags=["Lima", "transporte", "congestionamiento", "Perú"],
        ogTitle="Ciento cincuenta y tres horas",
        ogDescription="Perú. Un limeño pierde 153 horas al año en hora punta. No son los autos: hay 182 por mil habitantes.",
        alt="Autopista limeña. Vida común: el tiempo que se queda sentado, sin moverse.",
    ),
    27: dict(
        slug="doce-anos-y-cuatro-meses",
        section="biblioteca",
        format="archivo",
        rubric="El Archivo",
        country="América Latina",
        date="2026-08-14",
        dateLabel="14 de agosto de 2026",
        byline="Biblioteca Politarca",
        tags=["constituciones", "Chile", "Ecuador", "Colombia"],
        ogTitle="Doce años y cuatro meses",
        ogDescription="Lo que dura, en promedio, una constitución latinoamericana. En Europa occidental, treinta y dos.",
        alt="Texto constitucional. El Archivo: el único proceso que duró fue el que nadie controló.",
    ),
    28: dict(
        slug="redes-nadie-lo-ha-medido",
        section="biblioteca",
        format="ensayo",
        rubric="El Ensayo",
        country="América Latina",
        date="2026-08-13",
        dateLabel="13 de agosto de 2026",
        byline="Biblioteca Politarca",
        tags=["redes sociales", "populismo", "evidencia", "elecciones"],
        ogTitle="Todo el mundo sabe que las redes ganaron. Nadie lo ha medido",
        ogDescription="No hay un estudio empírico verificable que una redes y voto populista en América Latina.",
        alt="Redacción con pantallas apagadas. El Ensayo: la afirmación más repetida no tiene paper.",
    ),
    29: dict(
        slug="contrapunto-legalizar-drogas",
        section="agora",
        format="contrapunto",
        rubric="El Contrapunto",
        country="América Latina",
        date="2026-08-12",
        dateLabel="12 de agosto de 2026",
        byline="El Ágora",
        tags=["drogas", "Uruguay", "Portugal", "Oregón", "Colombia"],
        ogTitle="¿Hay que legalizar las drogas?",
        ogDescription="Dos columnas. Uruguay, Portugal, Oregón. Ninguna es la posición de Politarca.",
        alt="Balanza sobre un escritorio. El Contrapunto: legalizar, o no.",
    ),
    30: dict(
        slug="contrapunto-estado-de-bienestar",
        section="agora",
        format="contrapunto",
        rubric="El Contrapunto",
        country="América Latina",
        date="2026-08-11",
        dateLabel="11 de agosto de 2026",
        byline="El Ágora",
        tags=["Estado de bienestar", "Bolsa Família", "Gini", "informalidad"],
        ogTitle="¿Debe la derecha aceptar el Estado de bienestar?",
        ogDescription="Dos columnas. Bolsa Família mide; el Gini regional no se parece al europeo.",
        alt="Ventanilla de un programa social. El Contrapunto: el seguro del mercado, o no.",
    ),
}


def split_pieces(raw: str) -> dict[int, str]:
    parts = re.split(r"^# (\d+) · [^\n]+\n", raw, flags=re.M)
    out: dict[int, str] = {}
    i = 1
    while i < len(parts):
        num = int(parts[i])
        out[num] = parts[i + 1]
        i += 2
    return out


def first_heading(block: str, level: str) -> tuple[str, str]:
    m = re.search(rf"^{level} (.+)$", block, re.M)
    if not m:
        raise ValueError(f"missing {level} in {block[:80]!r}")
    return m.group(1).strip(), block[m.end() :].lstrip("\n")


def excerpt_of(md: str) -> str:
    for para in re.split(r"\n{2,}", md):
        t = re.sub(r"^>\s*", "", para.strip())
        t = re.sub(r"[*_>#]", "", t).strip()
        t = re.sub(r"\s+", " ", t)
        if len(t) > 80 and not t.startswith("|") and not t.lower().startswith("nota del editor"):
            return t[:220].rsplit(" ", 1)[0] + "…" if len(t) > 220 else t
    return ""


def tldr_of(md: str) -> list[str]:
    items: list[str] = []
    for para in re.split(r"\n{2,}", md):
        t = re.sub(r"^>\s*", "", para.strip())
        t = re.sub(r"[*_>#]", "", t).strip()
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


def split_tail(rest: str) -> tuple[str, str | None, str | None]:
    fuentes = None
    edit_parts: list[str] = []
    body = rest
    m = re.search(r"\n\*\*Fuentes:\*\*\s*", body)
    if m:
        tail = body[m.end() :]
        body = body[: m.start()].strip()
        vac = re.search(r"\n\*\*(Vacíos declarados[^*]*)\*\*\s*", tail)
        nota = re.search(r"\n\*\*(Nota[^*]*)\*\*\s*", tail)
        cuts = []
        if vac:
            cuts.append(vac.start())
        if nota:
            cuts.append(nota.start())
        if cuts:
            first = min(cuts)
            fuentes = tail[:first].strip()
            if vac:
                edit_parts.append((vac.group(1) + " " + (
                    tail[vac.end(): nota.start()] if nota and nota.start() > vac.start() else tail[vac.end():]
                )).strip())
            if nota:
                start = nota.end()
                end = vac.start() if vac and vac.start() > nota.start() else len(tail)
                if vac and vac.start() > nota.start():
                    end = vac.start()
                edit_parts.append((nota.group(1).strip() + " " + tail[nota.end():].strip()).strip())
        else:
            fuentes = tail.strip()
    body = re.sub(r"\n---\n", "\n\n", body).strip()
    body = re.sub(r"(?:\n---)+\s*$", "", body).strip()
    if fuentes:
        fuentes = re.sub(r"\s+", " ", fuentes.replace("\n", " ")).strip()
    edit = re.sub(r"\s+", " ", " ".join(edit_parts)).strip() if edit_parts else None
    return body, fuentes, edit


def emit_article(n: int, chunk: str) -> str:
    meta = META[n]
    title, rest = first_heading(chunk, "##")
    dek, rest = first_heading(rest, "###")
    rest = rest.lstrip("-").lstrip("\n")
    body, fuentes, edit = split_tail(rest)
    words = len(re.findall(r"\w+", body, flags=re.UNICODE))
    read_min = max(6, round(words / 200))
    excerpt = excerpt_of(body)
    tldr = tldr_of(body)
    faqs = faqs_of(title, meta["country"], dek)
    image = f"/photos/plates/{meta['slug']}.jpg"
    fields = [
        f'    slug: {ts_string(meta["slug"])}',
        f"    title: {ts_string(title)}",
        f"    dek: {ts_string(dek)}",
        f'    section: {ts_string(meta["section"])}',
        f'    format: {ts_string(meta["format"])}',
        f'    rubric: {ts_string(meta["rubric"])}',
        f'    country: {ts_string(meta["country"])}',
        f'    date: {ts_string(meta["date"])}',
        f'    dateLabel: {ts_string(meta["dateLabel"])}',
        f"    readMin: {read_min}",
        f'    byline: {ts_string(meta["byline"])}',
        f"    excerpt: {ts_string(excerpt)}",
        f"    image: {ts_string(image)}",
        f"    markdown: {ts_string(body)}",
    ]
    if fuentes:
        fields.append(f"    sources: {ts_string(fuentes)}")
    if edit:
        fields.append(f"    editNote: {ts_string(edit)}")
    fields.append(f'    alt: {ts_string(meta["alt"])}')
    fields.append(f'    ogTitle: {ts_string(meta["ogTitle"])}')
    fields.append(f'    ogDescription: {ts_string(meta["ogDescription"])}')
    fields.append(f'    tags: {json.dumps(meta["tags"], ensure_ascii=False)}')
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
        f"export const TANDA2: BancoArticle[] = [\n{articles}\n];\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes) n={len(META)}")
    for n, p in sorted(pieces.items()):
        if n in META:
            title = re.search(r"^## (.+)$", p, re.M)
            print(n, META[n]["slug"], title.group(1) if title else "?")


if __name__ == "__main__":
    main()
