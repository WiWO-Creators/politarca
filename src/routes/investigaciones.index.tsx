import { createFileRoute } from "@tanstack/react-router";
import { StoryTease } from "@/components/story-tease";
import { ARTICLES } from "@/lib/content";

export const Route = createFileRoute("/investigaciones/")({
  component: Investigaciones,
  head: () => ({
    meta: [{ title: "Investigaciones — Politarca" }],
  }),
});

function Investigaciones() {
  const [lead, ...rest] = ARTICLES;

  return (
    <main>
      <header className="page-wrap pt-6 md:pt-10">
        <h1 className="mix-title">Investigaciones</h1>
      </header>

      <section className="page-wrap grid gap-10 py-10 md:grid-cols-2 md:gap-8 md:py-12">
        <StoryTease article={lead} size="lead" heading="h2" />
        <div className="flex flex-col gap-10">
          {rest.slice(0, 2).map((a) => (
            <StoryTease key={a.slug} article={a} size="mix" />
          ))}
        </div>
      </section>

      <section className="page-wrap grid gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {rest.slice(2).map((a) => (
          <StoryTease key={a.slug} article={a} size="mix" />
        ))}
      </section>
    </main>
  );
}
