import { Link } from "@tanstack/react-router";

export type Crumb = { name: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Migas de pan" className="page-wrap pb-1 pt-3 md:pb-2 md:pt-4">
      <ol className="flex items-center gap-1 overflow-x-auto whitespace-nowrap font-ui text-[0.65rem] uppercase tracking-[0.12em] text-subtle scrollbar-none md:text-[0.7rem]">
        {items.map((item, i) => (
          <li key={`${item.name}-${i}`} className="flex items-center gap-1">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {item.to ? (
              <Link to={item.to as never} className="hover:text-fg hover:opacity-80">
                {item.name}
              </Link>
            ) : (
              <span className="text-fg">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
