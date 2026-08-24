import { createFileRoute } from "@tanstack/react-router";
import { NewsletterBand } from "@/components/newsletter";
import { STANDARDS } from "@/lib/content";

export const Route = createFileRoute("/nosotros")({
  component: Nosotros,
  head: () => ({
    meta: [{ title: "Nosotros — Politarca" }],
  }),
});

function Nosotros() {
  return (
    <main>
      <header className="page-wrap max-w-[760px] pt-8 md:pt-12">
        <p className="rubric">Manifiesto</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          Evidencia sobre el poder.
        </h1>
        <p className="dek mt-5 text-xl leading-snug">
          Periodismo de datos e investigación. Políticas públicas, gobernanza y regulación.
        </p>
      </header>

      <section className="page-wrap max-w-[680px] py-12">
        <div className="space-y-5 font-body text-[1.125rem] leading-[1.65] text-fg">
          <p>
            Politarca es un medio de periodismo de datos e investigación centrado en políticas
            públicas, gobernanza y regulación.
          </p>
          <p>
            Operamos con un estándar neutral —liberal de derecha objetivo— y con alta densidad
            estadística. Nuestra reputación se construye para resistir el escrutinio institucional:
            cada cifra tiene fuente verificable, cada método es reproducible, cada conclusión está
            abierta a refutación.
          </p>
          <p>
            No producimos narrativa. Producimos evidencia. Existimos para que quienes diseñan
            reglas, quienes las aplican y quienes las vigilan dispongan de un instrumento de alta
            fidelidad.
          </p>
          <p>
            Nuestra audiencia principal no es el público general. Son los que diseñan, ejecutan,
            auditan o padecen las reglas: reguladores, legisladores, boards, estudios jurídicos,
            think tanks, inversionistas institucionales y académicos.
          </p>
          <p>
            Cada pieza que publicamos está construida para resistir el escrutinio de una consulta
            formal. Los datasets son descargables. Las fuentes son citables. Las limitaciones
            metodológicas se declaran.
          </p>
          <p>Politarca no vende indignación. Entrega evidencia.</p>
        </div>
      </section>

      <section id="estandares" className="border-t border-border">
        <div className="page-wrap max-w-[680px] py-16">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em]">Estándares editoriales</h2>
          <ul className="mt-8 space-y-5">
            {STANDARDS.map((s) => (
              <li key={s} className="font-body text-[1.05rem] leading-relaxed text-fg">
                {s}
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-display text-2xl font-medium">Tono de voz</h3>
          <p className="mt-4 font-body leading-relaxed text-fg">
            Preferimos “el análisis muestra” a “es inaceptable”. Usamos números exactos y contexto
            histórico o comparado. Oraciones densas pero legibles. Ironía seca permitida;
            indignación moral, no.
          </p>

          <h3 className="mt-10 font-display text-2xl font-medium">Consultas institucionales</h3>
          <p className="mt-4 font-body leading-relaxed text-fg">
            Politarca está diseñado como fuente citable. Datasets, aclaraciones metodológicas o
            briefings privados de alto nivel:{" "}
            <a href="mailto:institutional@politarca.com" className="text-accent italic">
              institutional@politarca.com
            </a>
            .
          </p>
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
