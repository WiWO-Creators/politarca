# el politarca

Periodismo de datos e investigación. Políticas públicas, gobernanza y regulación.
[politarca.com](https://politarca.com)

## Stack

TanStack Start · React 19 · Tailwind v4 · Vercel (Nitro).

Auth y base de datos van **apagadas**. El archivo editorial vive en `src/lib/content.ts`. La carta semanal sale por Resend cuando hay API key.

## Desarrollo

```bash
npm install
cp .env.example .env.local
npm run dev
```

Node 22.

## Vercel

Importar el repo: [vercel.com/new](https://vercel.com/new/clone?repository-url=https://github.com/WiWO-Creators/politarca)

1. Framework: Other / Vite. Build: `npm run build`. Node 22.
2. Variables:

| Variable | Valor |
|---|---|
| `VITE_AUTH_ENABLED` | `false` (ya va en `.env.production`) |
| `RESEND_API_KEY` | key de Resend |
| `NEWSLETTER_FROM` | `el politarca <carta@politarca.com>` |
| `NEWSLETTER_NOTIFY` | `consultas@politarca.com` |

4. Dominio: `politarca.com` y `www` → el proyecto.

**No** configurar `DATABASE_URL` ni `GROK_AUTH_*`.

## Correo

Antes de publicar la carta:

1. **Buzones** en el DNS de `politarca.com` (Google Workspace o Cloudflare Email Routing):
   - `consultas@politarca.com`
   - `institutional@politarca.com`
   - `carta@politarca.com` (remitente)
2. **Resend**: verificar el dominio (SPF, DKIM, DMARC) y pegar `RESEND_API_KEY` en Vercel.
3. Sin esa key, el formulario acepta el correo pero **no llega a nadie** — solo queda en logs.

`Iniciar sesión` no abre cuentas: es acceso a la carta, el mismo flujo de suscripción.
