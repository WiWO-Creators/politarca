import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/content";
import { country, getSection } from "@/lib/content";

export function EnBreve({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <aside className="mb-8 border-y border-border py-5 md:mb-10 md:py-6">
      <p className="rubric mb-3">En breve</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.slice(0, 48)} className="font-body text-[1rem] leading-snug text-fg md:text-[1.05rem]">
            {item.replace(/\s*\[VERIFICAR:[^\]]+\]/g, "")}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function SeeAlso({ article, more }: { article: Article; more: Article[] }) {
  const section = getSection(article.section?.id);
  const related = more[0];
  return (
    <nav aria-label="Enlaces internos" className="mt-10 font-ui text-sm leading-relaxed text-muted">
      <p>
        País: {country(article)}. Sección:{" "}
        <Link to={section.path} className="italic text-accent hover:opacity-80">
          {section.name} — {section.kicker}
        </Link>
        . Promesas de gobierno:{" "}
        <Link to="/balance" className="italic text-accent hover:opacity-80">
          Balance de Poder, tracker de cinco gobiernos
        </Link>
        . Línea de la casa:{" "}
        <Link to="/nosotros" className="italic text-accent hover:opacity-80">
          Manifiesto de Politarca
        </Link>
        {related ? (
          <>
            . Lea también:{" "}
            <Link
              to="/piezas/$slug"
              params={{ slug: related.id }}
              className="italic text-accent hover:opacity-80"
            >
              {country(related)}: {related.title}
            </Link>
            .
          </>
        ) : null}
      </p>
    </nav>
  );
}

export function ArticleGeo({ article, more }: { article: Article; more: Article[] }) {
  return <SeeAlso article={article} more={more} />;
}
