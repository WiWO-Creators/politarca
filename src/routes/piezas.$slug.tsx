import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArticleBody } from "@/components/article-body";
import { ArticleChart } from "@/components/charts";
import { ArticleGeo, EnBreve } from "@/components/geo-blocks";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { StoryKicker, StoryTease } from "@/components/story-tease";
import { getArticle, getSection, otherArticles, type ArticleBlock } from "@/lib/content";
import { getGeo } from "@/lib/geo";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/piezas/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Pieza — el politarca" }] };
    const { article } = loaderData;
    const geo = getGeo(article);
    const section = getSection(article.section);
    return pageHead({
      title: `${article.title} | Politarca`,
      description: `${article.country}. ${article.dek}`,
      path: `/piezas/${article.slug}`,
      image: article.image,
      type: "article",
      published: article.date,
      modified: article.date,
      section: section.name,
      tags: geo.tags,
      ogTitle: geo.ogTitle,
      ogDescription: geo.ogDescription,
    });
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <main className="page-wrap py-24 text-center">
      <p className="rubric">Archivo</p>
      <h1 className="mt-3 font-display text-3xl">Pieza no encontrada</h1>
      <Link to="/piezas" className="mt-6 inline-block font-body italic text-accent">
        Volver al archivo
      </Link>
    </main>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const more = otherArticles(article.slug).slice(0, 3);
  const section = getSection(article.section);
  const geo = getGeo(article);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: section.name, path: section.path },
    { name: article.country, path: section.path },
    { name: article.title, path: `/piezas/${article.slug}` },
  ];

  return (
    <main>
      <JsonLd data={articleJsonLd({
        title: article.title,
        description: article.dek,
        path: `/piezas/${article.slug}`,
        image: article.image,
        date: article.date,
        author: article.byline,
        section: section.name,
        country: article.country,
      })} />
      {geo.faqs.length ? <JsonLd data={faqJsonLd(geo.faqs)} /> : null}
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <Breadcrumbs
        items={[
          { name: "Inicio", to: "/" },
          { name: section.name, to: section.path },
          { name: article.country },
          { name: article.rubric },
        ]}
      />

      <header className="page-wrap max-w-[760px] pb-6 pt-2 md:pt-4">
        <StoryKicker article={article} />
        <h1 className="mt-3 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-fg md:text-[2.75rem]">
          {article.title}
        </h1>
        <p className="dek mt-5 text-xl leading-snug md:text-[1.35rem]">{article.dek}</p>
        <p className="byline mt-6">
          Por {article.byline}
          <span className="not-italic text-subtle">
            {" "}
            · Publicado {article.dateLabel} · Actualizado {article.dateLabel}
          </span>
        </p>
      </header>

      <figure className="page-wrap max-w-[920px] py-2">
        <img
          src={article.image}
          alt={geo.alt}
          className="story-photo story-photo--article"
          loading="eager"
          decoding="async"
        />
        <figcaption className="mt-3 font-ui text-xs leading-relaxed text-subtle">
          {geo.alt} {article.country} · {section.name} · {article.readMin} min de lectura
        </figcaption>
      </figure>

      <article className="article-prose page-wrap max-w-[680px] pb-16 pt-8">
        <EnBreve items={geo.tldr} />
        {article.markdown ? (
          <ArticleBody markdown={article.markdown} dropcap />
        ) : (
          (article.body ?? []).map((block, i) => (
            <Block key={i} block={block} first={i === 0} />
          ))
        )}
        {article.sources ? (
          <aside className="my-12">
            <p className="rubric mb-3">Fuentes</p>
            <p className="font-body text-[0.95rem] leading-relaxed text-muted">{article.sources}</p>
          </aside>
        ) : null}
        {article.editNote ? (
          <aside className="mb-8">
            <p className="rubric mb-3">Nota de edición</p>
            <p className="font-body text-[0.95rem] leading-relaxed text-muted">{article.editNote}</p>
          </aside>
        ) : null}
        <ArticleGeo article={article} more={more} />
        <p className="mt-14 font-ui text-xs leading-relaxed text-subtle">
          Politarca es un medio liberal de centroderecha que reporta el poder en América Latina.
          Conflictos de interés: la dirección declara no tener relación comercial con las
          instituciones cubiertas en esta pieza.
          <br />
          Cita: {article.byline} ({article.date.slice(0, 4)}). “{article.title}”. Politarca.{" "}
          {article.country}.
        </p>
      </article>

      {more.length ? (
        <section className="border-t border-border">
          <div className="page-wrap py-14">
            <h2 className="mix-title mb-10">Más de Politarca</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((a) => (
                <StoryTease key={a.slug} article={a} size="mix" />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

function Block({ block, first }: { block: ArticleBlock; first: boolean }) {
  switch (block.type) {
    case "p":
      return (
        <p className={first ? "dropcap text-[1.125rem] leading-[1.65] text-fg" : "text-[1.125rem] leading-[1.65] text-fg"}>
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="mb-4 mt-12 font-display text-[1.65rem] font-semibold tracking-[-0.02em] text-fg">
          {block.text}
        </h2>
      );
    case "pullquote":
      return (
        <blockquote className="my-12 font-display text-[1.65rem] font-medium italic leading-snug tracking-[-0.02em] text-fg md:text-3xl">
          {block.text}
        </blockquote>
      );
    case "stat":
      return (
        <aside className="my-10 border-y border-border py-8">
          <p className="font-display text-5xl font-semibold tracking-[-0.03em] tabular text-fg">
            {block.value}
          </p>
          <p className="dek mt-3 max-w-xl">{block.caption}</p>
          <p className="mt-4 font-ui text-xs text-subtle">{block.source}</p>
        </aside>
      );
    case "chart":
      return <ArticleChart id={block.id} />;
    case "methodology":
      return (
        <aside className="my-12">
          <p className="rubric mb-3">Metodología</p>
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mb-3 font-body text-[0.95rem] leading-relaxed text-muted last:mb-0">
              {p}
            </p>
          ))}
        </aside>
      );
    default:
      return null;
  }
}
