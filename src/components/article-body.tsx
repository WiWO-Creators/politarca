import type { ReactNode } from "react";

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

function isTable(block: string) {
  const lines = block.trim().split("\n");
  return lines.length >= 2 && lines[0].includes("|") && lines[1].includes("---");
}

function Table({ block }: { block: string }) {
  const lines = block
    .trim()
    .split("\n")
    .filter((l) => l.trim() && !/^\|?\s*-+\s*\|/.test(l));
  const rows = lines.map((l) =>
    l
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim()),
  );
  const [head, ...body] = rows;
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
          {body.map((row, i) => (
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

function List({ block, ordered }: { block: string; ordered: boolean }) {
  const items = block
    .trim()
    .split("\n")
    .map((l) => l.replace(/^\s*(?:[-*]|\d+\.)\s+/, ""));
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="my-6 space-y-2 pl-5 font-body text-[1.125rem] leading-[1.65] text-fg">
      {items.map((item) => (
        <li key={item.slice(0, 48)} className="pl-1">
          {inline(item)}
        </li>
      ))}
    </Tag>
  );
}

export function ArticleBody({ markdown, dropcap }: { markdown: string; dropcap?: boolean }) {
  const blocks = markdown
    .trim()
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  let firstP = true;
  return (
    <>
      {blocks.map((block, i) => {
        if (block === "---") {
          return <hr key={i} className="my-10 border-border" />;
        }
        if (isTable(block)) return <Table key={i} block={block} />;
        if (/^#{2,3} /.test(block)) {
          const text = block.replace(/^#{2,3} /, "");
          return (
            <h2
              key={i}
              className="mb-4 mt-12 font-display text-[1.65rem] font-semibold tracking-[-0.02em] text-fg"
            >
              {inline(text)}
            </h2>
          );
        }
        if (block.startsWith(">")) {
          const text = block
            .split("\n")
            .map((l) => l.replace(/^>\s?/, ""))
            .join(" ");
          return (
            <blockquote
              key={i}
              className="my-12 font-display text-[1.45rem] font-medium italic leading-snug tracking-[-0.02em] text-fg md:text-[1.75rem]"
            >
              {inline(text)}
            </blockquote>
          );
        }
        if (/^[-*] /.test(block) || /^\d+\. /.test(block)) {
          return <List key={i} block={block} ordered={/^\d+\. /.test(block)} />;
        }
        const isFirst = dropcap && firstP;
        firstP = false;
        return (
          <p
            key={i}
            className={
              isFirst
                ? "dropcap text-[1.125rem] leading-[1.65] text-fg"
                : "text-[1.125rem] leading-[1.65] text-fg"
            }
          >
            {inline(block.replace(/\n/g, " "))}
          </p>
        );
      })}
    </>
  );
}
