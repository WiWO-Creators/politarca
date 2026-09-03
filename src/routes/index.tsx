import { createFileRoute } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { NewsletterBand } from "@/components/newsletter";
import { StoryTease } from "@/components/story-tease";
import { getArticles } from "@/lib/articles";
import { HOME_FAQS } from "@/lib/geo";
import { faqJsonLd, orgJsonLd, pageHead, websiteJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Home,
  // La portada incluye lo publicado por el orquestador, que vive en la base.
  loader: () => getArticles(),
  head: () =>
    pageHead({
      title: "Politarca — periodismo liberal en América Latina",
      description:
        "Medio liberal de centroderecha. Reporteo sobre quién manda en América Latina y qué queda. Chile, Argentina, Brasil, Colombia, Perú.",
      path: "/",
      ogTitle: "Quién manda, y qué queda",
      ogDescription: "Periodismo liberal de centroderecha sobre el poder en América Latina.",
    }),
});

function Home() {
  const [hero, ...rest] = Route.useLoaderData();
  const pair = rest.slice(0, 2);
  const mix = rest.slice(2, 6);

  return (
    <main>
      <JsonLd data={orgJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(HOME_FAQS)} />

      <section className="page-wrap pb-8 pt-3 md:pb-14 md:pt-1">
        <StoryTease article={hero} size="hero" heading="h1" />
      </section>

      <section className="page-wrap border-t border-border pb-2 pt-8 md:pb-6 md:pt-12">
        <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:gap-10">
          {pair.map((a) => (
            <StoryTease key={a.id} article={a} size="lead" heading="h2" />
          ))}
        </div>
      </section>

      <section className="page-wrap py-10 md:py-16">
        <h2 className="mix-title mb-8 md:mb-12">La mezcla de hoy</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {mix.map((a) => (
            <StoryTease key={a.id} article={a} size="mix" />
          ))}
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
