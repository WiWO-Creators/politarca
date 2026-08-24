import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { TRACKER, type PromiseStatus } from "@/lib/content";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/balance")({
  component: Balance,
  head: () =>
    pageHead({
      title: "Balance de Poder: promesas de cinco gobiernos | Politarca",
      description:
        "Tracker de promesas en Argentina, Chile, Colombia, Perú y Costa Rica. Cumplida, en trámite, pendiente o abandonada. Actualizado agosto 2026.",
      path: "/balance",
      ogTitle: "Balance de Poder: cinco gobiernos, una vara",
      ogDescription: "Qué prometieron Kast, Milei, De La Espriella, Fujimori y Fernández. Qué cumplieron.",
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
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "La Polis", path: "/polis" },
          { name: "Balance de Poder", path: "/balance" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Inicio", to: "/" },
          { name: "La Polis", to: "/polis" },
          { name: "Balance de Poder" },
        ]}
      />
      <header className="page-wrap pb-10 pt-4 md:pt-8">
        <p className="rubric">La Polis</p>
        <h1 className="mt-3 max-w-3xl font-display text-[1.75rem] font-semibold tracking-[-0.03em] md:text-5xl">
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
            <h2 className="font-display text-[1.65rem] font-semibold tracking-[-0.02em] md:text-3xl">{g.country}</h2>
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
