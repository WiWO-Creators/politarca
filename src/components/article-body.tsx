import type { ReactNode } from "react";
import type { WiwoBlock } from "@wiwo/contract";
import { ArticleChart } from "./charts";

/**
 * Responsabilidad: dibujar el cuerpo de una pieza a partir de sus bloques.
 * Usado por: routes/piezas.$slug.tsx.
 * NO hace: no interpreta el cuerpo. Los bloques llegan ya partidos desde el
 *   archivo o desde el orquestador; acá solo se les da forma.
 *
 * Antes este archivo partía Markdown al vuelo, en cada render. Ahora el corte
 * ocurre una sola vez, al escribir, y con el mismo criterio: el resultado en
 * pantalla es idéntico y el orquestador puede editar bloque a bloque en vez de
 * mandar una cadena que solo este sitio sabía leer.
 *
 * El Markdown EN LÍNEA —negrita, cursiva— sigue viviendo dentro del texto de
 * cada bloque, porque es lo que un editor produce sin pensar. Se resuelve acá.
 *
 * Los bloques se dividen en dos grupos: los COMUNES, que todo sitio wiwo
 * entiende, y los PROPIOS de politarca —la cifra destacada, el gráfico, la
 * metodología—. Que existan los segundos es el punto: el fondo es igual en todos
 * los sitios y la forma es de cada uno.
 */

/** Resuelve negrita y cursiva dentro de un texto. */
function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const token = m[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={k++}>{token.slice(2, -2)}</strong>);
    } else {
      parts.push(<em key={k++}>{token.slice(1, -1)}</em>);
    }
    last = m.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** Series que el sitio sabe dibujar. */
const SERIES = ["stock", "hours", "emitters", "regions"] as const;
type ChartId = (typeof SERIES)[number];

/** Un texto del bloque, o cadena vacía si no trae ese campo. */
function texto(block: WiwoBlock, clave = "text"): string {
  const valor = block[clave];
  return typeof valor === "string" ? valor : "";
}

/** Las cadenas de una lista dentro de un bloque. */
function cadenas(valor: unknown): string[] {
  return Array.isArray(valor) ? valor.map(String) : [];
}

function Table({ block }: { block: WiwoBlock }) {
  const head = cadenas(block.head);
  const rows = Array.isArray(block.rows) ? block.rows.map(cadenas) : [];
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-t border-border text-left font-body text-[0.95rem]">
        <thead>
          <tr className="border-b border-border">
            {head.map((c) => (
              <th key={c} className="py-2 pr-4 font-display font-medium">
                {inline(c)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border">
              {row.map((c, j) => (
                <td key={j} className="py-2 pr-4 align-top leading-relaxed">
                  {inline(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function List({ block }: { block: WiwoBlock }) {
  const items = cadenas(block.items);
  const Tag = block.ordered ? "ol" : "ul";
  return (
    <Tag className="my-6 space-y-2 pl-5 leading-[1.7] md:my-7">
      {items.map((item) => (
        <li key={item.slice(0, 48)} className="pl-1">
          {inline(item)}
        </li>
      ))}
    </Tag>
  );
}

/**
 * @param blocks El cuerpo de la pieza.
 * @param dropcap Si la primera letra del primer párrafo va capitular.
 */
export function ArticleBody({
  blocks,
  dropcap,
}: {
  blocks: WiwoBlock[];
  dropcap?: boolean;
}) {
  let firstP = true;
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "divider") {
          return <hr key={i} className="my-10 border-border" />;
        }
        if (block.type === "table") return <Table key={i} block={block} />;
        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="mb-4 mt-10 font-display text-[1.45rem] font-semibold tracking-[-0.02em] text-fg md:mb-5 md:mt-14 md:text-[1.85rem]"
            >
              {inline(texto(block))}
            </h2>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="my-8 font-display text-[1.25rem] font-medium italic leading-snug tracking-[-0.02em] text-fg md:my-12 md:text-[1.75rem]"
            >
              {inline(texto(block))}
            </blockquote>
          );
        }
        if (block.type === "list") return <List key={i} block={block} />;

        // Los bloques propios de politarca.
        if (block.type === "stat") {
          return (
            <aside key={i} className="my-10 border-y border-border py-8">
              <p className="font-display text-5xl font-semibold tracking-[-0.03em] tabular text-fg">
                {texto(block, "value")}
              </p>
              <p className="dek mt-3 max-w-xl">{texto(block, "caption")}</p>
              <p className="mt-4 font-ui text-xs text-subtle">{texto(block, "source")}</p>
            </aside>
          );
        }
        if (block.type === "chart") {
          const serie = texto(block, "series");
          return (SERIES as readonly string[]).includes(serie) ? (
            <ArticleChart key={i} id={serie as ChartId} />
          ) : null;
        }
        if (block.type === "methodology") {
          return (
            <aside key={i} className="my-12">
              <p className="rubric mb-3">Metodología</p>
              {cadenas(block.paragraphs).map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mb-3 font-body text-[0.95rem] leading-relaxed text-muted last:mb-0"
                >
                  {p}
                </p>
              ))}
            </aside>
          );
        }

        if (block.type !== "paragraph") {
          // Un bloque de un vocabulario que este sitio no dibuja se descarta en
          // vez de romper la pieza entera: el resto del cuerpo sigue legible.
          return null;
        }

        const isFirst = dropcap && firstP;
        firstP = false;
        return (
          <p key={i} className={isFirst ? "dropcap" : undefined}>
            {inline(texto(block))}
          </p>
        );
      })}
    </>
  );
}
