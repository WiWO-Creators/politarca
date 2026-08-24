import { createFileRoute } from "@tanstack/react-router";
import { StoryTease } from "@/components/story-tease";
import { ARTICLES } from "@/lib/content";

export const Route = createFileRoute("/piezas/")({
  component: Archivo,
  head: () => ({ meta: [{ title: "Archivo — el politarca" }] }),
});

function Archivo() {
  return (
    <main className="page-wrap py-12 md:py-16">
      <p className="rubric">Archivo</p>
      <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Piezas</h1>
      <p className="dek mt-4 max-w-2xl text-lg">
        Pocas, trabajadas. El largo se gana con reporteo, no con vueltas.
      </p>
      <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((a) => (
          <StoryTease key={a.slug} article={a} />
        ))}
      </div>
    </main>
  );
}
