import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ARTICLES, NAV } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SubscribeForm } from "./subscribe-form";
import { useTheme } from "./theme-provider";

type Overlay = "menu" | "search" | "subscribe" | null;

function todayLabel() {
  const raw = new Date().toLocaleDateString("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Santiago",
  });
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [query, setQuery] = useState("");
  const logo = theme === "dark" ? "/brand/logo-light.png" : "/brand/logo-dark.png";

  useEffect(() => {
    document.body.style.overflow = overlay ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlay]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOverlay(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOverlay(null);
  }, [pathname]);

  const hits = query.trim()
    ? ARTICLES.filter((a) => {
        const q = query.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.dek.toLowerCase().includes(q) ||
          a.rubric.toLowerCase().includes(q) ||
          a.byline.toLowerCase().includes(q)
        );
      })
    : ARTICLES;

  return (
    <header className="bg-bg">
      <div className="border-b border-border">
        <div className="page-wrap grid h-12 grid-cols-[1fr_auto_1fr] items-center md:h-14">
          <div className="flex items-center justify-start">
            <button
              type="button"
              className="flex size-11 items-center justify-center text-fg"
              aria-label={overlay === "menu" ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOverlay(overlay === "menu" ? null : "menu")}
            >
              {overlay === "menu" ? <X className="size-5" strokeWidth={1.6} /> : <Menu className="size-5" strokeWidth={1.6} />}
            </button>
          </div>

          <p className="font-body text-center text-[0.78rem] italic text-fg md:text-[0.92rem]">
            {todayLabel()}
          </p>

          <div className="flex items-center justify-end gap-3 md:gap-5">
            <button
              type="button"
              onClick={() => setOverlay(overlay === "search" ? null : "search")}
              className="util-link inline-flex items-center gap-1.5"
              aria-label="Buscar"
            >
              <Search className="size-4" strokeWidth={1.7} />
              <span className="hidden md:inline">Buscar</span>
            </button>
            <button
              type="button"
              onClick={() => setOverlay("subscribe")}
              className="util-link hidden md:inline"
            >
              Iniciar sesión
            </button>
            <button type="button" onClick={() => setOverlay("subscribe")} className="pill">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <div className={cn("page-wrap", isHome ? "py-4 md:py-5" : "py-3 md:py-4")}>
        <Link to="/" className="block" onClick={() => setOverlay(null)}>
          <img
            src={logo}
            alt="el politarca"
            className={isHome ? "masthead-logo" : "masthead-logo masthead-logo--compact"}
          />
        </Link>
      </div>

      {overlay ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-bg">
          <div className="border-b border-border">
            <div className="page-wrap grid h-12 grid-cols-[1fr_auto_1fr] items-center md:h-14">
              <button
                type="button"
                className="flex size-11 items-center justify-start text-fg"
                aria-label="Cerrar"
                onClick={() => setOverlay(null)}
              >
                <X className="size-5" strokeWidth={1.6} />
              </button>
              <Link to="/" onClick={() => setOverlay(null)}>
                <img src={logo} alt="el politarca" className="h-7 w-auto md:h-8" />
              </Link>
              <div className="flex justify-end">
                <button type="button" className="pill" onClick={() => setOverlay("subscribe")}>
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          <div className="page-wrap py-10 md:py-16">
            {overlay === "menu" ? (
              <nav className="mx-auto max-w-xl">
                <ul className="flex flex-col">
                  {NAV.map((item) => (
                    <li key={item.to} className="border-b border-border">
                      <Link
                        to={item.to}
                        onClick={() => setOverlay(null)}
                        className="flex min-h-16 items-center font-display text-3xl font-medium tracking-[-0.02em] text-fg md:text-4xl"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-col gap-4 font-ui text-sm text-fg">
                  <button
                    type="button"
                    className="text-left hover:opacity-70"
                    onClick={() => setOverlay("search")}
                  >
                    Buscar en el archivo
                  </button>
                  <button type="button" className="text-left hover:opacity-70" onClick={toggle}>
                    {theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                  </button>
                  <Link
                    to="/balance"
                    onClick={() => setOverlay(null)}
                    className="text-left hover:opacity-70"
                  >
                    Balance de Poder
                  </Link>
                  <button
                    type="button"
                    className="text-left hover:opacity-70"
                    onClick={() => setOverlay("subscribe")}
                  >
                    El Despacho
                  </button>
                  <Link
                    to="/nosotros"
                    onClick={() => setOverlay(null)}
                    className="text-left hover:opacity-70"
                  >
                    Manifiesto
                  </Link>
                </div>
              </nav>
            ) : null}

            {overlay === "search" ? (
              <div className="mx-auto max-w-2xl">
                <label htmlFor="site-search" className="sr-only">
                  Buscar
                </label>
                <input
                  id="site-search"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar en Politarca"
                  className="w-full border-b border-fg bg-transparent py-3 font-display text-2xl text-fg outline-none placeholder:text-subtle md:text-3xl"
                />
                <ul className="mt-8 flex flex-col gap-8">
                  {hits.map((a) => (
                    <li key={a.slug}>
                      <p className="rubric">{a.rubric}</p>
                      <Link
                        to="/piezas/$slug"
                        params={{ slug: a.slug }}
                        onClick={() => setOverlay(null)}
                        className="hed-mix hed-link mt-1 block"
                      >
                        {a.title}
                      </Link>
                      <p className="byline mt-1">Por {a.byline}</p>
                    </li>
                  ))}
                  {hits.length === 0 ? (
                    <li className="font-body italic text-subtle">Sin resultados.</li>
                  ) : null}
                </ul>
              </div>
            ) : null}

            {overlay === "subscribe" ? (
              <div className="mx-auto max-w-md text-center">
                <p className="rubric">El Despacho</p>
                <h2 className="mt-3 font-display text-3xl font-medium md:text-4xl">
                  Tres veces por semana. Voz de la casa.
                </h2>
                <p className="dek mx-auto mt-4 max-w-sm">
                  Tres temas, tres párrafos, una recomendación. Martes, jueves y sábado.
                </p>
                <SubscribeForm id="sub-email" />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
