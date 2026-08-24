import { useState, type FormEvent } from "react";
import { subscribeNewsletter } from "@/lib/subscribe";

export function SubscribeForm({
  id,
  cta = "Suscribirse",
}: {
  id: string;
  cta?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      await subscribeNewsletter({ data: { email } });
      const list = JSON.parse(window.localStorage.getItem("politarca-nl") ?? "[]") as string[];
      if (!list.includes(email)) list.push(email);
      window.localStorage.setItem("politarca-nl", JSON.stringify(list));
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo suscribir.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return <p className="mt-8 font-body italic">Listo. Llegará a {email}.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-sm flex-col items-stretch gap-3">
      <label className="sr-only" htmlFor={id}>
        Correo
      </label>
      <input
        id={id}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico"
        className="min-h-12 border-0 border-b border-fg bg-transparent px-0 text-center font-body text-lg text-fg outline-none placeholder:text-subtle"
      />
      <button type="submit" disabled={pending} className="pill mx-auto mt-2 min-h-11 w-fit px-8 disabled:opacity-50">
        {pending ? "Enviando…" : cta}
      </button>
      {error ? <p className="text-center font-ui text-sm text-accent">{error}</p> : null}
    </form>
  );
}
