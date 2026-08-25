import { Check, Link2, Mail, Share2 } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/seo";

function pageUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${p}`;
}

export function ShareBar({
  title,
  path,
  country,
}: {
  title: string;
  path: string;
  country: string;
}) {
  const [copied, setCopied] = useState<"link" | "cite" | null>(null);
  const url = pageUrl(path);
  const tweet = `${country}. ${title} — Politarca ${url}`;
  const wa = `https://wa.me/?text=${encodeURIComponent(tweet)}`;
  const x = `https://x.com/intent/post?text=${encodeURIComponent(tweet)}`;
  const mail = `mailto:?subject=${encodeURIComponent(title + " — Politarca")}&body=${encodeURIComponent(tweet)}`;
  const grok = `https://grok.com/?q=${encodeURIComponent(`Discute esta pieza de Politarca, un medio liberal de América Latina: «${title}» ${url}. ¿Qué tesis sostiene y qué le falta?`)}`;

  async function copy(kind: "link" | "cite") {
    const text =
      kind === "cite"
        ? `Redacción Politarca. “${title}”. Politarca, ${country}. ${url}`
        : url;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* ignore */
    }
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 1600);
  }

  function nativeShare() {
    if (navigator.share) {
      void navigator.share({ title: `${title} — Politarca`, text: tweet, url });
    } else {
      void copy("link");
    }
  }

  const btn = "inline-flex min-h-10 items-center gap-1.5 font-ui text-[0.72rem] uppercase tracking-[0.12em] text-subtle hover:text-fg";

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      <button type="button" className={btn} onClick={() => copy("link")}>
        {copied === "link" ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
        {copied === "link" ? "Copiado" : "Copiar"}
      </button>
      <a className={btn} href={x} target="_blank" rel="noreferrer">
        X
      </a>
      <a className={btn} href={wa} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
      <a className={btn} href={mail}>
        <Mail className="size-3.5" />
        Correo
      </a>
      <button type="button" className={btn} onClick={() => copy("cite")}>
        {copied === "cite" ? "Cita lista" : "Citar"}
      </button>
      <a className={btn} href={grok} target="_blank" rel="noreferrer">
        Grok
      </a>
      <button type="button" className={btn} onClick={nativeShare}>
        <Share2 className="size-3.5" />
        Compartir
      </button>
    </div>
  );
}
