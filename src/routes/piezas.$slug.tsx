import { createFileRoute, getRouteApi, Link, notFound } from "@tanstack/react-router";
import { ArticleBody } from "@/components/article-body";
import { Agora } from "@/components/agora";
import { ArticleGeo, EnBreve } from "@/components/geo-blocks";
import { ShareBar } from "@/components/share-bar";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { StoryKicker, StoryTease } from "@/components/story-tease";
import {
  bodyBlocks,
  country,
  editNote,
  getSection,
  longDate,
  otherArticles,
  sources,
} from "@/lib/content";
import { getArticleBySlug } from "@/lib/articles";
import { getGeo } from "@/lib/geo";
import { PLATE_CREDIT } from "@/lib/plates";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, pageHead } from "@/lib/seo";

/** Las piezas salen del loader raíz: incluyen lo que publicó el orquestador. */
const rootRoute = getRouteApi("__root__");

export const Route = createFileRoute("/piezas/$slug")({
  // Asincrono porque ahora tambien mira lo que publico el orquestador, que vive
  // en la base y no en el modulo del archivo editorial.
  loader: async ({ params }) => {
    const article = await getArticleBySlug({ data: params.slug });
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Pieza — el politarca" }] };
    const { article } = loaderData;
    const geo = getGeo(article);
    const section = getSection(article.section?.id);
    return pageHead({
      title: `${article.title} | Politarca`,
      description: `${country(article)}. ${article.summary}`,
      path: `/piezas/${article.id}`,
      image: article.image?.url,
      type: "article",
      published: article.publishedAt,
      modified: article.updatedAt,
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
  const more = otherArticles(rootRoute.useLoaderData(), article.id).slice(0, 3);
  const section = getSection(article.section?.id);
  const geo = getGeo(article);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: section.name, path: section.path },
    { name: country(article), path: section.path },
    { name: article.title, path: `/piezas/${article.id}` },
  ];

  return (
    <main>
      <JsonLd data={articleJsonLd({
        title: article.title,
        description: article.summary,
        path: `/piezas/${article.id}`,
        image: article.image?.url ?? "",
        date: article.publishedAt,
        author: article.author?.name ?? "",
        section: section.name,
        country: country(article),
      })} />
      {geo.faqs.length ? <JsonLd data={faqJsonLd(geo.faqs)} /> : null}
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <Breadcrumbs
        items={[
          { name: "Inicio", to: "/" },
          { name: section.name, to: section.path },
          { name: country(article) },
        ]}
      />

      <header className="reading-col pb-6 pt-2 md:pb-8 md:pt-8">
        <StoryKicker article={article} />
        <h1 className="mt-3 font-display text-[1.85rem] font-semibold leading-[1.14] tracking-[-0.03em] text-fg md:text-[2.85rem] md:leading-[1.12]">
          {article.title}
        </h1>
        <p className="dek mt-5 text-[1.1rem] leading-relaxed md:mt-6 md:text-[1.35rem]">{article.summary}</p>
        <p className="byline mt-5 md:mt-6">
          Por {article.author?.name}
          <span className="not-italic text-subtle">
            <span className="md:hidden"> · {longDate(article.publishedAt)} · {article.readingMinutes} min</span>
            <span className="hidden md:inline">
              {" "}
              · Publicado {longDate(article.publishedAt)} · Actualizado {longDate(article.updatedAt)} · {article.readingMinutes} min
            </span>
          </span>
        </p>
        <div className="mt-6">
          <ShareBar title={article.title} path={`/piezas/${article.id}`} country={country(article)} />
        </div>
      </header>

      <figure className="page-wrap max-w-[980px] py-3 md:py-5">
        <img
          src={article.image?.url}
          alt={geo.alt}
          className="story-photo story-photo--article bleed-photo"
          loading="eager"
          decoding="async"
        />
        <figcaption className="mt-3 font-ui text-[0.7rem] leading-relaxed text-subtle md:text-xs">
          {PLATE_CREDIT[article.id] ?? geo.alt} {country(article)} · {section.name} · {article.readingMinutes} min
        </figcaption>
      </figure>

      <article className="article-prose reading-col pb-20 pt-8 md:pt-10">
        <EnBreve items={geo.tldr} />
        <ArticleBody blocks={bodyBlocks(article)} dropcap />
        {sources(article) ? (
          <aside className="my-12">
            <p className="rubric mb-3">Fuentes</p>
            <p className="font-body text-[0.95rem] leading-relaxed text-muted">{sources(article)}</p>
          </aside>
        ) : null}
        {editNote(article) ? (
          <aside className="mb-8">
            <p className="rubric mb-3">Nota de edición</p>
            <p className="font-body text-[0.95rem] leading-relaxed text-muted">{editNote(article)}</p>
          </aside>
        ) : null}
        <div className="mt-12 border-t border-border pt-8">
          <p className="rubric mb-4">Compartir</p>
          <ShareBar title={article.title} path={`/piezas/${article.id}`} country={country(article)} />
        </div>
        <ArticleGeo article={article} more={more} />
        <Agora slug={article.id} title={article.title} country={country(article)} />
        <p className="mt-14 font-ui text-xs leading-relaxed text-subtle">
          Politarca es un medio liberal de centroderecha que reporta el poder en América Latina.
          Conflictos de interés: la dirección declara no tener relación comercial con las
          instituciones cubiertas en esta pieza.
          <br />
          Cita: {article.author?.name} ({article.publishedAt.slice(0, 4)}). “{article.title}”. Politarca.{" "}
          {country(article)}.
        </p>
      </article>

      {more.length ? (
        <section className="border-t border-border">
          <div className="page-wrap py-14">
            <h2 className="mix-title mb-8 md:mb-10">Más de Politarca</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
              {more.map((a) => (
                <StoryTease key={a.id} article={a} size="mix" />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
