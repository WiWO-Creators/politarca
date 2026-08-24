import { createFileRoute } from "@tanstack/react-router";
import { ArticleChart } from "@/components/charts";
import { DATASETS, STOCK_SERIES } from "@/lib/content";

export const Route = createFileRoute("/datos")({
  component: Datos,
  head: () => ({
    meta: [{ title: "Datos — Politarca" }],
  }),
});

function Datos() {
  return (
    <main>
      <header className="page-wrap pt-6 md:pt-10">
        <h1 className="mix-title">Datos</h1>
        <p className="dek mx-auto mt-4 max-w-2xl text-center">
          Cada cifra que publicamos tiene un archivo detrás. Los microdatos se anonimizan. El
          código de replicación se publica.
        </p>
      </header>

      <div className="page-wrap max-w-[920px] py-10">
        <ArticleChart id="stock" />
      </div>

      <section className="page-wrap max-w-[860px] pb-20">
        <ul>
          {DATASETS.map((d, i) => (
            <li
              key={d.id}
              className={i === 0 ? "py-6" : "border-t border-border py-6"}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h2 className="hed-mix">{d.title}</h2>
                  <p className="dek-mix mt-2">{d.note}</p>
                  <p className="mt-2 font-ui text-xs text-subtle">
                    {d.rows.toLocaleString("es-CL")} filas · {d.format} · Actualizado {d.updated}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => downloadSample(d.id, d.title)}
                  className="pill shrink-0 self-start"
                >
                  Descargar
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-ui text-xs text-subtle">
          Las descargas de esta edición entregan una muestra del stock normativo. En producción se
          servirían los microdatos completos y el codebook.
        </p>
      </section>
    </main>
  );
}

function downloadSample(id: string, title: string) {
  const header = "year,stock,rate\n";
  const rows = STOCK_SERIES.map((r) => `${r.year},${r.stock},${r.rate}`).join("\n");
  const blob = new Blob([`# ${title}\n# id=${id}\n${header}${rows}\n`], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${id}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
