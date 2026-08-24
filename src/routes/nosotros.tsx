import { createFileRoute } from "@tanstack/react-router";
import { NewsletterBand } from "@/components/newsletter";
import { STANDARDS, TAGLINE } from "@/lib/content";

export const Route = createFileRoute("/nosotros")({
  component: Nosotros,
  head: () => ({
    meta: [{ title: "Manifiesto — el politarca" }],
  }),
});

function Nosotros() {
  return (
    <main>
      <header className="page-wrap pb-8 pt-10 md:pt-14">
        <p className="rubric">Manifiesto</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          {TAGLINE}
        </h1>
        <p className="dek mt-5 max-w-2xl text-xl">
          Un medio liberal, de centroderecha, simpático con los mercados y las instituciones
          y alérgico a los caudillos de cualquier signo.
        </p>
      </header>

      <section className="article-prose page-wrap max-w-[680px] space-y-5 pb-16 font-body text-lg leading-relaxed">
        <p>
          Politarca nace en el momento exacto en que la pregunta política de América Latina
          cambió de signo. Durante quince años el debate fue si la derecha podía ganar. Hoy
          gobierna Argentina, Chile, Colombia, Perú y Costa Rica, y Brasil vota el 4 de octubre.
          La pregunta ya no es si gana: es qué hace con el poder, y si el liberalismo sobrevive
          a su propia victoria.
        </p>
        <p>
          Ese es el hueco. Hay medios que celebran a la derecha y medios que la denuncian. Casi
          no hay uno que la edite: que le exija coherencia, rigor fiscal, respeto institucional
          y estándar intelectual desde dentro de su propia tradición. Politarca es eso.
        </p>
        <p>
          La derecha latinoamericana ganó el poder antes de ganar el argumento. Este medio existe
          para cerrar esa brecha.
        </p>
        <p>
          El liberalismo no es una facción. Es un estándar. Se aplica igual a Lula que a Milei, a
          Petro que a Kast. Un medio que solo audita al adversario no es liberal: es prensa de
          trinchera con mejor tipografía.
        </p>
        <p>
          El problema latinoamericano no es el tamaño del Estado. Es su capacidad. Un Estado chico
          que no cobra impuestos, no encarcela criminales y no construye infraestructura no es un
          logro liberal. Es un fracaso. Esa distinción es la vetada intelectual más fértil de la
          región.
        </p>
        <p>
          La política se explica por gente, no por ideología. Se reportea a los subsecretarios, a
          los operadores, a los ministros de Hacienda que nadie entrevista. La ideología llega
          después, como interpretación de hechos verificados.
        </p>
        <p>
          La ejecución imita al New Yorker más que al Wall Street Journal: pocas piezas, muy
          trabajadas, con reporteo, personajes y escena. Se compite por profundidad, no por
          velocidad. La opinión es el 30 %. El reporteo es el 70 %.
        </p>
        <p>
          Se escribe siempre para el núcleo —quien decide el lunes—; la órbita lee por encima del
          hombro. Nunca al revés.
        </p>
        <p>
          El nombre tiene dos lecturas y conviene usar ambas: el arca, un depósito de la política
          bien pensada, y el -arca de monarca y oligarca: quien manda. Un medio sobre quién manda,
          y sobre lo que queda cuando pasa.
        </p>
      </section>

      <section id="estandares" className="border-t border-border">
        <div className="page-wrap max-w-[680px] py-16">
          <p className="rubric">La casa</p>
          <h2 className="mt-3 font-display text-3xl">Diez reglas</h2>
          <ol className="mt-8 space-y-4">
            {STANDARDS.map((s, i) => (
              <li key={s} className="flex gap-4 font-body text-base leading-relaxed text-muted">
                <span className="font-display text-lg text-accent">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
