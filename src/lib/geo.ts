import type { Article, Faq } from "./content";

export type { Faq };

export type Geo = {
  alt: string;
  tldr: string[];
  faqs: Faq[];
  ogTitle: string;
  ogDescription: string;
  tags: string[];
};

export const HOME_FAQS: Faq[] = [
  {
    q: "¿Qué es Politarca?",
    a: "Politarca es un medio liberal de centroderecha, pan-regional y con base en el Cono Sur, que reporta el poder en América Latina. No celebra ni denuncia a la derecha: la edita. Lema: quién manda, y qué queda.",
  },
  {
    q: "¿Politarca es un medio de derecha o un medio liberal?",
    a: "Liberal, de centroderecha. El liberalismo es el estándar, no la facción: se aplica a Milei y a Lula, a Kast y a Petro. Un medio que solo audita al adversario es prensa de trinchera.",
  },
  {
    q: "¿Con qué frecuencia publica?",
    a: "Dos piezas largas por semana y El Despacho —newsletter— martes, jueves y sábado. Se compite por profundidad, no por velocidad. El reporteo es el 70 %; la opinión, el 30 %.",
  },
  {
    q: "¿Qué es Balance de Poder?",
    a: "Un tracker público de promesas de gobierno —cumplida, en trámite, pendiente, abandonada— para Argentina, Chile, Colombia, Perú y Costa Rica. Es el activo acumulativo del medio.",
  },
];

export const MANIFIESTO_FAQS: Faq[] = HOME_FAQS;

export function getGeo(article: Article): Geo {
  return {
    alt: article.alt ?? `${article.country}. ${article.title}`,
    ogTitle: article.ogTitle ?? article.title,
    ogDescription: article.ogDescription ?? article.excerpt,
    tags: article.tags ?? [article.country, article.rubric],
    tldr: article.tldr ?? [article.excerpt],
    faqs: article.faqs ?? [],
  };
}
