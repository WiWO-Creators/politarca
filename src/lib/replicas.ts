import { createServerFn } from "@tanstack/react-start";
import { getSql } from "./db";

export type Replica = {
  id: string;
  slug: string;
  author: string;
  body: string;
  refined: boolean;
  createdAt: string;
};

const MAX = 800;

function env(name: string): string | undefined {
  const v = process.env[name]?.trim();
  return v || undefined;
}

function clean(s: string, cap: number) {
  return s.replace(/\s+/g, " ").trim().slice(0, cap);
}

function houseEdit(text: string) {
  let t = text.replace(/\s+/g, " ").trim();
  t = t.replace(/[!]{2,}/g, ".");
  t = t.replace(/\b(WTF|OMG|LMAO)\b/gi, "");
  const sentences = t.split(/(?<=[.?!])\s+/).filter(Boolean).slice(0, 6);
  t = sentences.join(" ").trim();
  if (t && !/[.?!]$/.test(t)) t += ".";
  return t.slice(0, MAX);
}

function row(r: Record<string, unknown>): Replica {
  return {
    id: String(r.id),
    slug: String(r.slug),
    author: String(r.author),
    body: String(r.body),
    refined: Number(r.refined) === 1,
    createdAt: String(r.created_at ?? ""),
  };
}

export const listReplicas = createServerFn({ method: "GET" })
  .validator((input: unknown) => ({
    slug: clean(String((input as { slug?: string })?.slug ?? ""), 120),
  }))
  .handler(async ({ data }) => {
    if (!data.slug) return [] as Replica[];
    try {
      const sql = await getSql();
      const rows = await sql.query(
        "select id, slug, author, body, refined, created_at from replicas where slug = $1 order by created_at desc limit 60",
        [data.slug],
      );
      return rows.map(row);
    } catch {
      return [] as Replica[];
    }
  });

export const postReplica = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const i = input as { slug?: string; author?: string; body?: string; refined?: boolean };
    const slug = clean(String(i.slug ?? ""), 120);
    const author = clean(String(i.author ?? ""), 80) || "Anónimo";
    const body = clean(String(i.body ?? ""), MAX);
    if (!slug) throw new Error("Falta la pieza.");
    if (body.length < 24) throw new Error("Escriba al menos una frase con argumento.");
    return { slug, author, body, refined: Boolean(i.refined) };
  })
  .handler(async ({ data }) => {
    const sql = await getSql();
    const id = crypto.randomUUID();
    await sql.query(
      "insert into replicas (id, slug, author, body, refined) values ($1, $2, $3, $4, $5)",
      [id, data.slug, data.author, data.body, data.refined ? 1 : 0],
    );
    const rows = await sql.query("select id, slug, author, body, refined, created_at from replicas where id = $1", [id]);
    return row(rows[0] ?? { id, ...data, refined: data.refined ? 1 : 0, created_at: new Date().toISOString() });
  });

export const refineReplica = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const i = input as { title?: string; country?: string; body?: string };
    const body = clean(String(i.body ?? ""), MAX);
    if (body.length < 12) throw new Error("Escriba primero la réplica.");
    return {
      title: clean(String(i.title ?? ""), 180),
      country: clean(String(i.country ?? ""), 40),
      body,
    };
  })
  .handler(async ({ data }) => {
    const key = env("XAI_API_KEY") ?? env("GROK_API_KEY");
    if (!key) {
      return { text: houseEdit(data.body), grok: false as const };
    }
    const model = env("XAI_MODEL") ?? "grok-3-mini";
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        max_tokens: 280,
        messages: [
          {
            role: "system",
            content:
              "Eres el editor de Politarca, medio liberal de centroderecha al estilo The New Yorker. Reescribes réplicas de lectores: castellano rioplatense/chileno neutro, frases cortas, voz activa, cero slogans, cero insultos, una sola tesis. Máximo 90 palabras. No inventes datos. Devuelve SOLO el texto reescrito.",
          },
          {
            role: "user",
            content: `Pieza: «${data.title}» (${data.country}).\nRéplica del lector:\n${data.body}`,
          },
        ],
      }),
    });
    if (!res.ok) {
      return { text: houseEdit(data.body), grok: false as const };
    }
    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = clean(json.choices?.[0]?.message?.content ?? "", MAX) || houseEdit(data.body);
    return { text, grok: true as const };
  });
