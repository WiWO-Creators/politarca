import { createFileRoute } from "@tanstack/react-router";
import { TRACKER, type PromiseStatus } from "@/lib/content";

export const Route = createFileRoute("/balance")({
  component: Balance,
  head: () => ({
    meta: [{ title: "Balance de Poder — el politarca" }],
  }),
});

const LABEL: Record<PromiseStatus, string> = {
  cumplida: "Cumplida",
  tramite: "En trámite",
  pendiente: "Pendiente",
  abandonada: "Abandonada",
};

function Balance() {
  return (
    <main>
      <header className="page-wrap pb-10 pt-10 md:pt-14">
        <p className="rubric">La Polis</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          Balance de Poder
        </h1>
        <p className="dek mt-4 max-w-2xl text-lg">
          Tracker de promesas. Cinco gobiernos de la ola. Cumplida, en trámite, pendiente,
          abandonada. El activo que mejora con el tiempo.
        </p>
        <p className="mt-3 font-ui text-xs text-subtle">Actualización: 24 de agosto de 2026.</p>
      </header>

      <section className="page-wrap space-y-14 pb-20">
        {TRACKER.map((g) => (
          <article key={g.country} className="border-t border-border pt-8">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em]">{g.country}</h2>
            <p className="dek mt-2">
              {g.leader} · desde {g.since}
            </p>
            <p className="mt-2 font-body italic text-muted">{g.note}</p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {g.items.map((item) => (
                <li key={item.promise} className="grid gap-2 py-5 md:grid-cols-[8rem_1fr]">
                  <p className="rubric md:pt-0.5">{LABEL[item.status]}</p>
                  <div>
                    <p className="font-display text-xl leading-snug">{item.promise}</p>
                    <p className="dek-mix mt-1">{item.update}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
