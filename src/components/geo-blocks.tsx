import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/content";
import { getSection } from "@/lib/content";
import type { Faq } from "@/lib/geo";
import { getGeo } from "@/lib/geo";

export function EnBreve({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <aside className="mb-10 border-y border-border py-6">
      <p className="rubric mb-3">En breve</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.slice(0, 48)} className="font-body text-[1.05rem] leading-snug text-fg">
            {item.replace(/\s*\[VERIFICAR:[^\]]+\]/g, "")}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function FaqBlock({ faqs }: { faqs: Faq[] }) {
  if (!faqs.length) return null;
  return (
    <section className="mt-14 border-t border-border pt-10">
      <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">Preguntas</h2>
      <dl className="mt-6 space-y-6">
        {faqs.map((f) => (
          <div key={f.q}>
            <dt className="font-display text-lg font-medium leading-snug">{f.q}</dt>
            <dd className="dek mt-2">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function SeeAlso({ article, more }: { article: Article; more: Article[] }) {
  const section = getSection(article.section);
  const related = more[0];
  return (
    <nav aria-label="Enlaces internos" className="mt-10 font-ui text-sm leading-relaxed text-muted">
      <p>
        País: {article.country}. Sección:{" "}
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
              params={{ slug: related.slug }}
              className="italic text-accent hover:opacity-80"
            >
              {related.country}: {related.title}
            </Link>
            .
          </>
        ) : null}
      </p>
    </nav>
  );
}

export function ArticleGeo({ article, more }: { article: Article; more: Article[] }) {
  const geo = getGeo(article);
  return (
    <>
      <FaqBlock faqs={geo.faqs} />
      <SeeAlso article={article} more={more} />
    </>
  );
}
