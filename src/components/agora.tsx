import { useEffect, useState } from "react";
import { listReplicas, postReplica, refineReplica, type Replica } from "@/lib/replicas";

export function Agora({
  slug,
  title,
  country,
}: {
  slug: string;
  title: string;
  country: string;
}) {
  const [items, setItems] = useState<Replica[]>([]);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [refined, setRefined] = useState(false);
  const [busy, setBusy] = useState<"load" | "refine" | "post" | null>("load");
  const [error, setError] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    listReplicas({ data: { slug } })
      .then((rows) => {
        if (live) setItems(rows);
      })
      .catch(() => {
        if (live) setItems([]);
      })
      .finally(() => {
        if (live) setBusy(null);
      });
    return () => {
      live = false;
    };
  }, [slug]);

  async function onRefine() {
    setError(null);
    setNote(null);
    setBusy("refine");
    try {
      const res = await refineReplica({ data: { title, country, body } });
      setBody(res.text);
      setRefined(true);
      setNote(res.grok ? "Grok la afinó al estándar de la casa. Revísela y publique." : "Lápiz de la casa. Sin clave de Grok; el recorte es local.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo afinar.");
    } finally {
      setBusy(null);
    }
  }

  async function onPost() {
    setError(null);
    setBusy("post");
    try {
      const row = await postReplica({
        data: { slug, author, body, refined },
      });
      setItems((prev) => [row, ...prev]);
      setBody("");
      setRefined(false);
      setNote("Publicada. El Ágora no es un muro: si no argumenta, no entra.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo publicar.");
    } finally {
      setBusy(null);
    }
  }

  const grokUrl = `https://grok.com/?q=${encodeURIComponent(
    `Lee «${title}» (${country}) en Politarca y discute la tesis, no el bando. ¿Qué sostiene y qué le falta?`,
  )}`;

  return (
    <section className="mt-16 border-t border-border pt-12">
      <p className="rubric">El Ágora</p>
      <h2 className="mt-2 font-display text-[1.65rem] font-semibold tracking-[-0.02em] md:text-[1.85rem]">
        Réplicas
      </h2>
      <p className="dek mt-3 max-w-xl">
        No es un muro. Una tesis, corta, sobre esta pieza. Grok puede afinarla al
        estándar de la casa antes de publicarla.
      </p>

      <form
        className="mt-8 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          void onPost();
        }}
      >
        <label className="block">
          <span className="sr-only">Nombre</span>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Nombre (o déjelo en blanco)"
            className="w-full border-0 border-b border-border bg-transparent py-2 font-body text-base text-fg outline-none placeholder:text-subtle"
            maxLength={80}
          />
        </label>
        <label className="block">
          <span className="sr-only">Réplica</span>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              setRefined(false);
            }}
            placeholder="Una sola tesis. Sin consigna."
            rows={5}
            maxLength={800}
            className="w-full resize-y border border-border bg-transparent px-3 py-3 font-body text-[1.05rem] leading-relaxed text-fg outline-none placeholder:text-subtle"
          />
        </label>
        <p className="font-ui text-xs text-subtle">{body.length}/800</p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => void onRefine()}
            disabled={busy !== null}
            className="util-link min-h-11 disabled:opacity-50"
          >
            {busy === "refine" ? "Afinando…" : "Afinar con Grok"}
          </button>
          <button type="submit" disabled={busy !== null} className="pill disabled:opacity-50">
            {busy === "post" ? "Publicando…" : "Publicar réplica"}
          </button>
          <a href={grokUrl} target="_blank" rel="noreferrer" className="util-link min-h-11">
            Discutir en Grok
          </a>
        </div>
        {note ? <p className="font-body text-sm italic text-muted">{note}</p> : null}
        {error ? <p className="font-ui text-sm text-accent">{error}</p> : null}
      </form>

      <ol className="mt-12 space-y-8">
        {items.map((item) => (
          <li key={item.id} className="border-t border-border pt-6">
            <p className="font-body text-[1.05rem] leading-relaxed text-fg md:text-[1.125rem]">
              {item.body}
            </p>
            <p className="byline mt-3">
              {item.author}
              {item.refined ? <span className="not-italic text-subtle"> · afinada</span> : null}
            </p>
          </li>
        ))}
        {busy !== "load" && items.length === 0 ? (
          <li className="font-body italic text-subtle">Aún no hay réplicas. La primera marca el tono.</li>
        ) : null}
      </ol>
    </section>
  );
}
