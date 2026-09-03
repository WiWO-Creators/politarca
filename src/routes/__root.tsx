import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE, abs } from "@/lib/seo";
import appCss from "../styles.css?url";
import { getArticles } from "@/lib/articles";

export const Route = createRootRoute({
  // La cabecera busca entre TODAS las piezas y corre en el navegador, donde la
  // base no existe. Se cargan una vez aca y viajan hacia abajo, en vez de que
  // cada vista las pida por su cuenta.
  loader: () => getArticles(),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: SITE.name },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#ffffff" },
      { name: "color-scheme", content: "light dark" },
      { property: "og:site_name", content: SITE.brand },
      { property: "og:locale", content: SITE.locale },
      { property: "og:image", content: abs(SITE.ogImage) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500;1,6..72,600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="es" data-theme="light" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <ThemeProvider>
            <SiteHeader />
            <Outlet />
            <SiteFooter />
          </ThemeProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
