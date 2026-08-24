import { createServerFn } from "@tanstack/react-start";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function env(name: string): string | undefined {
  const v = process.env[name]?.trim();
  return v || undefined;
}

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const email = String((input as { email?: string })?.email ?? "")
      .trim()
      .toLowerCase();
    if (!EMAIL_RE.test(email)) {
      throw new Error("Correo inválido.");
    }
    return { email };
  })
  .handler(async ({ data }) => {
    const { email } = data;
    const apiKey = env("RESEND_API_KEY");
    const from = env("NEWSLETTER_FROM") ?? "el politarca <carta@politarca.com>";
    const notify = env("NEWSLETTER_NOTIFY") ?? "consultas@politarca.com";

    if (!apiKey) {
      console.warn("[carta] suscripción sin RESEND_API_KEY:", email);
      return { ok: true as const, delivered: false };
    }

    const payload = [
      {
        from,
        to: [notify],
        subject: `Nueva suscripción — ${email}`,
        text: `${email} se suscribió a la carta semanal de el politarca.`,
      },
      {
        from,
        to: [email],
        subject: "La carta semanal de el politarca",
        text: `Quedó registrada la suscripción de ${email}.\n\nUna vez por semana: investigaciones, una nota de gobernanza y una sola cosa que leer con calma.\n\n— el politarca\nhttps://politarca.com`,
      },
    ];

    for (const body of payload) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("[carta] Resend falló", res.status, detail);
        throw new Error("No se pudo enviar. Intente de nuevo.");
      }
    }

    return { ok: true as const, delivered: true };
  });
