import { createFileRoute, Link } from "@tanstack/react-router";
import { StoryTease } from "@/components/story-tease";
import { ARTICLES } from "@/lib/content";

export const Route = createFileRoute("/gobernanza")({
  component: Gobernanza,
  head: () => ({
    meta: [{ title: "Gobernanza — Politarca" }],
  }),
});

function Gobernanza() {
  const pieces = ARTICLES.filter(
    (a) => a.category === "Gobernanza" || a.category === "Políticas públicas",
  );
  const [lead, ...rest] = pieces.length ? pieces : ARTICLES;

  return (
    <main>
      <header className="page-wrap pt-6 md:pt-10">
        <h1 className="mix-title">Gobernanza</h1>
        <p className="dek mx-auto mt-4 max-w-2xl text-center">
          Cómo se decide, quién decide, con qué evidencia. Instituciones, no personajes.
        </p>
      </header>

      <section className="page-wrap grid gap-10 py-10 md:grid-cols-2 md:py-12">
        <StoryTease article={lead} size="lead" heading="h2" />
        <div className="flex flex-col justify-center gap-8 border-t border-border pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          {[
            {
              t: "Reglas",
              d: "Cómo se diseñan, quién las emite, qué filtros de costo-beneficio existen — y cuáles faltan.",
            },
            {
              t: "Incentivos",
              d: "Qué premia el diseño institucional: emitir, evaluar, o esperar a la crisis mediática.",
            },
            {
              t: "Accountability",
              d: "Si el archivo se puede cruzar con el resultado de la decisión, es un instrumento. Si no, es un archivo.",
            },
          ].map((item) => (
            <div key={item.t}>
              <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-fg">{item.t}</h2>
              <p className="dek-mix mt-2">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap grid gap-10 pb-8 sm:grid-cols-2">
        {rest.map((a) => (
          <StoryTease key={a.slug} article={a} size="mix" />
        ))}
      </section>

      <p className="page-wrap pb-16 font-body italic text-subtle">
        Ver también{" "}
        <Link to="/investigaciones" className="text-fg underline decoration-border underline-offset-4 hover:decoration-fg">
          el archivo completo de investigaciones
        </Link>
        .
      </p>
    </main>
  );
}
