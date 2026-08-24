import { SECTIONS, type SectionId } from "./content";

export const SITE = {
  name: "el politarca",
  brand: "Politarca",
  url: "https://www.politarca.com",
  locale: "es_CL",
  lang: "es",
  tagline: "Quién manda, y qué queda.",
  description:
    "Politarca es un medio liberal de centroderecha que reporta el poder en América Latina: quién manda, qué decide y qué queda. Pocas piezas, con evidencia.",
  keyword: "periodismo liberal Latinoamérica",
  email: "consultas@politarca.com",
  logo: "/brand/logo-dark.png",
  ogImage: "/og.jpg",
  foundingDate: "2026-08-24",
  location: "Santiago, Chile",
} as const;

export function abs(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function canonical(path: string) {
  if (path === "/") return `${SITE.url}/`;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function clip(s: string, n: number) {
  const t = s.replace(/\s+/g, " ").trim();
  if (t.length <= n) return t;
  return `${t.slice(0, n - 1).trimEnd()}…`;
}

type PageHead = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  published?: string;
  modified?: string;
  section?: string;
  tags?: string[];
  ogTitle?: string;
  ogDescription?: string;
};

export function pageHead(opts: PageHead) {
  const url = canonical(opts.path);
  const image = abs(opts.image ?? SITE.ogImage);
  const ogTitle = clip(opts.ogTitle ?? opts.title.replace(/\s*[—|]\s*el politarca$/i, "").replace(/\s*[—|]\s*Politarca$/i, ""), 60);
  const ogDescription = clip(opts.ogDescription ?? opts.description, 110);
  const title = opts.title;

  return {
    meta: [
      { title },
      { name: "description", content: clip(opts.description, 155) },
      { name: "author", content: SITE.brand },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE.brand },
      { property: "og:locale", content: SITE.locale },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: ogDescription },
      { name: "twitter:image", content: image },
      ...(opts.published
        ? [{ property: "article:published_time", content: opts.published }]
        : []),
      ...(opts.modified
        ? [{ property: "article:modified_time", content: opts.modified }]
        : []),
      ...(opts.section ? [{ property: "article:section", content: opts.section }] : []),
      ...(opts.tags ?? []).map((tag) => ({ property: "article:tag", content: tag })),
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "es", href: url },
    ],
  };
}

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: SITE.brand,
    alternateName: SITE.name,
    url: SITE.url,
    logo: abs(SITE.logo),
    image: abs(SITE.ogImage),
    description: SITE.description,
    foundingDate: SITE.foundingDate,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressCountry: "CL",
    },
    slogan: SITE.tagline,
    knowsAbout: [
      "periodismo liberal",
      "América Latina",
      "economía política",
      "capacidad estatal",
      "gobiernos de centroderecha",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.brand,
    alternateName: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "es",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
  modified?: string;
  author: string;
  section: string;
  country: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: opts.title,
    description: opts.description,
    image: [abs(opts.image), abs(SITE.ogImage)],
    datePublished: opts.date,
    dateModified: opts.modified ?? opts.date,
    author: {
      "@type": "Organization",
      name: opts.author,
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE.brand,
      logo: { "@type": "ImageObject", url: abs(SITE.logo) },
    },
    mainEntityOfPage: canonical(opts.path),
    articleSection: opts.section,
    inLanguage: "es",
    contentLocation: opts.country,
    isAccessibleForFree: true,
  };
}

export function sectionHead(id: SectionId) {
  const s = SECTIONS.find((x) => x.id === id)!;
  return pageHead({
    title: `${s.name}: ${s.kicker} | Politarca`,
    description: `${s.name}. ${s.dek} Periodismo liberal sobre el poder en América Latina.`,
    path: s.path,
    ogTitle: `${s.name}: ${s.kicker}`,
    ogDescription: s.dek,
  });
}

