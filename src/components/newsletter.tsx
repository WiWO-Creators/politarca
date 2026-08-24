import { SubscribeForm } from "./subscribe-form";

export function NewsletterBand() {
  return (
    <section id="newsletter" className="border-t border-border">
      <div className="page-wrap py-16 text-center md:py-20">
        <p className="rubric">El Despacho</p>
        <h2 className="mx-auto mt-3 max-w-[18ch] font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
          Martes, jueves y sábado.
        </h2>
        <p className="dek mx-auto mt-4 max-w-md">
          Tres temas, tres párrafos, una recomendación. Es el producto de hábito. Siempre gratis.
        </p>
        <SubscribeForm id="nl-email" />
      </div>
    </section>
  );
}
