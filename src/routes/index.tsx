import { createFileRoute } from "@tanstack/react-router";
import { NewsletterBand } from "@/components/newsletter";
import { StoryTease } from "@/components/story-tease";
import { ARTICLES } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [hero, ...rest] = ARTICLES;
  const pair = rest.slice(0, 2);
  const mix = rest.slice(2, 6);

  return (
    <main>
      <section className="page-wrap pb-10 pt-1 md:pb-14">
        <StoryTease article={hero} size="hero" heading="h1" />
      </section>

      <section className="page-wrap border-t border-border pb-4 pt-10 md:pb-6 md:pt-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-10">
          {pair.map((a) => (
            <StoryTease key={a.slug} article={a} size="lead" heading="h2" />
          ))}
        </div>
      </section>

      <section className="page-wrap py-12 md:py-16">
        <h2 className="mix-title mb-10 md:mb-12">La mezcla de hoy</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {mix.map((a) => (
            <StoryTease key={a.slug} article={a} size="mix" />
          ))}
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
