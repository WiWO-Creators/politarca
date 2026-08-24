import { BANCO } from "./banco";

export type SectionId =
  | "polis"
  | "erario"
  | "frontera"
  | "vida-comun"
  | "agora"
  | "biblioteca";

export type FormatId =
  | "pieza"
  | "ficha"
  | "contrapunto"
  | "numeros"
  | "carta"
  | "entrevista"
  | "archivo"
  | "ensayo";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "pullquote"; text: string }
  | { type: "stat"; value: string; caption: string; source: string }
  | { type: "chart"; id: "stock" | "hours" | "emitters" | "regions" }
  | { type: "methodology"; paragraphs: string[] };

export type Faq = { q: string; a: string };

export type Article = {
  slug: string;
  title: string;
  dek: string;
  section: SectionId;
  format: FormatId;
  rubric: string;
  country: string;
  date: string;
  dateLabel: string;
  readMin: number;
  byline: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  markdown?: string;
  sources?: string;
  editNote?: string;
  alt?: string;
  ogTitle?: string;
  ogDescription?: string;
  tags?: string[];
  tldr?: string[];
  faqs?: Faq[];
  body?: ArticleBlock[];
};

export type BancoArticle = Article;

export type Section = {
  id: SectionId;
  path: "/polis" | "/erario" | "/frontera" | "/vida-comun" | "/agora" | "/biblioteca";
  name: string;
  kicker: string;
  dek: string;
};

export const SECTIONS: Section[] = [
  {
    id: "polis",
    path: "/polis",
    name: "La Polis",
    kicker: "El poder y sus instituciones",
    dek: "Cómo se toman las decisiones: quién las toma, con qué información, bajo qué presión.",
  },
  {
    id: "erario",
    path: "/erario",
    name: "El Erario",
    kicker: "La economía como decisión política",
    dek: "Quién paga, quién recibe, quién decide y con qué costo político.",
  },
  {
    id: "frontera",
    path: "/frontera",
    name: "Frontera",
    kicker: "Latinoamérica en el mundo",
    dek: "Geopolítica desde la región, no sobre la región.",
  },
  {
    id: "vida-comun",
    path: "/vida-comun",
    name: "Vida común",
    kicker: "Sociedad, costumbres, crónica",
    dek: "Personas, lugares, una semana. Lo que convierte a un medio en revista.",
  },
  {
    id: "agora",
    path: "/agora",
    name: "El Ágora",
    kicker: "Debate, contrapunto, cartas",
    dek: "El liberalismo como procedimiento, no como decorado.",
  },
  {
    id: "biblioteca",
    path: "/biblioteca",
    name: "Biblioteca",
    kicker: "Ideas, libros, historia intelectual",
    dek: "Baja frecuencia, alto prestigio. Una idea, cuatro semanas.",
  },
];

export const TAGLINE = "Quién manda, y qué queda.";

export const STOCK_SERIES = [
  { year: 2010, stock: 3810, rate: 92 },
  { year: 2014, stock: 4340, rate: 130 },
  { year: 2018, stock: 5020, rate: 275 },
  { year: 2021, stock: 5895, rate: 355 },
  { year: 2024, stock: 6525, rate: 135 },
  { year: 2025, stock: 6641, rate: 116 },
];

export const EMITTERS = [
  { name: "Minsal", share: 18 },
  { name: "SMA", share: 17 },
  { name: "Dir. Trabajo", share: 16 },
  { name: "CMF", share: 9 },
  { name: "MINVU", share: 8 },
  { name: "Otros 22", share: 32 },
];

export const HOURS_SERIES = [
  { year: 2015, hours: 187 },
  { year: 2017, hours: 214 },
  { year: 2019, hours: 248 },
  { year: 2021, hours: 281 },
  { year: 2023, hours: 301 },
  { year: 2024, hours: 312 },
];

export const REGION_SPEND = [
  { region: "Metropolitana", share: 28, electoral: 0.41 },
  { region: "Valparaíso", share: 11, electoral: 0.36 },
  { region: "Biobío", share: 10, electoral: 0.33 },
  { region: "Los Lagos", share: 8, electoral: 0.29 },
  { region: "Maule", share: 7, electoral: 0.38 },
  { region: "Otras", share: 36, electoral: 0.27 },
];

export const ARTICLES = BANCO;

export type PromiseStatus = "cumplida" | "tramite" | "pendiente" | "abandonada";

export const TRACKER = [
  {
    country: "Chile",
    leader: "José Antonio Kast",
    since: "11 de marzo de 2026",
    note: "Base de operaciones. El caso más observado de la región.",
    items: [
      { promise: "Disciplina fiscal en el primer año", status: "tramite" as PromiseStatus, update: "Hacienda devolvió tres decretos sin cobertura." },
      { promise: "Agenda de seguridad con foco en crimen organizado", status: "tramite" as PromiseStatus, update: "Cartera nombrada; indicadores, pendientes de serie comparable." },
      { promise: "Revisión de permisos sectoriales", status: "pendiente" as PromiseStatus, update: "Sin proyecto ingresado al Congreso al cierre de esta edición." },
    ],
  },
  {
    country: "Argentina",
    leader: "Javier Milei",
    since: "10 de diciembre de 2023",
    note: "Tercer año. Laboratorio del ajuste. Presidenciales en 2027.",
    items: [
      { promise: "Equilibrio fiscal", status: "tramite" as PromiseStatus, update: "Superávit como credencial; sostenibilidad, en disputa." },
      { promise: "Desinflación persistente", status: "tramite" as PromiseStatus, update: "La serie bajó; el salario real aún no es dividendo." },
      { promise: "Reforma laboral amplia", status: "pendiente" as PromiseStatus, update: "El Congreso no entregó el paquete completo." },
    ],
  },
  {
    country: "Colombia",
    leader: "Abelardo De La Espriella",
    since: "7 de agosto de 2026",
    note: "Gobierno nuevo: el mejor momento para instalar el tracker.",
    items: [
      { promise: "Orden en las rutas del crimen", status: "pendiente" as PromiseStatus, update: "Once días de gestión al cierre. Sin serie." },
      { promise: "Regla fiscal explícita", status: "pendiente" as PromiseStatus, update: "Anuncio de campaña; no hay ley." },
    ],
  },
  {
    country: "Perú",
    leader: "Keiko Fujimori",
    since: "28 de julio de 2026",
    note: "Margen mínimo en junio. Gobernabilidad frágil.",
    items: [
      { promise: "Estabilidad ministerial", status: "tramite" as PromiseStatus, update: "El margen electoral es el dato; el gabinete, la prueba." },
      { promise: "Desbloqueo de inversión minera", status: "pendiente" as PromiseStatus, update: "Sin decreto marco publicado." },
    ],
  },
  {
    country: "Costa Rica",
    leader: "Laura Fernández",
    since: "8 de mayo de 2026",
    note: "Contrapeso centroamericano. 48,53 % en primera vuelta.",
    items: [
      { promise: "Agenda de crecimiento sin aventura fiscal", status: "tramite" as PromiseStatus, update: "Primer presupuesto en discusión." },
    ],
  },
];

export const STANDARDS = [
  "Ningún texto empieza con contexto. Empieza con una persona, una escena o un número que incomode.",
  "Todo dato lleva fuente verificable. Si no se puede verificar, no se publica.",
  "La opinión va después del reporteo, nunca en su lugar.",
  "Se cita al adversario en su mejor versión.",
  "Cero adjetivos ideológicos. Se describe la conducta y el lector califica.",
  "Nombres propios siempre. Un texto solo con anónimos no se publica.",
  "Los errores se corrigen arriba, no abajo. Nota fechada y firmada.",
  "Conflictos de interés declarados en el pie de cada pieza.",
  "Ni una sola pieza de portada escrita solo desde el escritorio.",
  "Si el titular promete más que el texto, se cambia el titular.",
];

export const NAV = SECTIONS.map((s) => ({ to: s.path, label: s.name }));

export function getSection(id: SectionId) {
  return SECTIONS.find((s) => s.id === id)!;
}

export function storyKicker(article: Article) {
  return `${article.country} · ${article.rubric}`;
}

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesBySection(id: SectionId) {
  return ARTICLES.filter((a) => a.section === id);
}

export function featuredArticle() {
  return ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
}

export function otherArticles(slug?: string) {
  return ARTICLES.filter((a) => a.slug !== slug);
}
