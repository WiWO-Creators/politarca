import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StoryTease } from "@/components/story-tease";
import { getArticles } from "@/lib/articles";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/piezas/")({
  component: Archivo,
  // El archivo incluye lo publicado por el orquestador, que vive en la base.
  loader: () => getArticles(),
  head: () =>
    pageHead({
      title: "Archivo de piezas | Politarca",
      description:
        "Todas las piezas de Politarca: La Polis, El Erario, Frontera, Vida común, El Ágora y Biblioteca. Periodismo liberal en América Latina.",
      path: "/piezas",
    }),
});

function Archivo() {
  const articles = Route.useLoaderData();

  return (
    <main>
      <Breadcrumbs items={[{ name: "Inicio", to: "/" }, { name: "Archivo" }]} />
      <div className="page-wrap pb-16">
        <p className="rubric">Archivo</p>
        <h1 className="mt-3 font-display text-[1.75rem] font-semibold md:text-5xl">Piezas</h1>
        <p className="dek mt-4 max-w-2xl text-lg">
          Pocas, trabajadas. El largo se gana con reporteo, no con vueltas.
        </p>
        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <StoryTease key={a.id} article={a} />
          ))}
        </div>
      </div>
    </main>
  );
}
