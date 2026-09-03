import { getRouteApi, Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { country, NAV, rubric } from "@/lib/content";
import { SubscribeForm } from "./subscribe-form";
import { StoryKicker } from "./story-tease";
import { ThemeToggle } from "./theme-toggle";
import { nextThemeLabel, useTheme } from "./theme-provider";
import { ReadingProgress } from "./reading-progress";

/**
 * Las piezas salen del loader raiz, no de un modulo: incluyen lo que publico el
 * orquestador, que vive en la base y no en el archivo del repositorio.
 */
const rootRoute = getRouteApi("__root__");

type Overlay = "menu" | "search" | "subscribe" | null;

function todayLabel(compact = false) {
  if (compact) {
    const raw = new Date().toLocaleDateString("es-CL", {
      weekday: "short",
      day: "numeric",
      month: "short",
      timeZone: "America/Santiago",
    });
    return raw.charAt(0).toUpperCase() + raw.slice(1).replace(/\.$/, "");
  }
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
  const { theme, cycle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const here = `${pathname}`;
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

  const articles = rootRoute.useLoaderData();

  const hits = query.trim()
    ? articles.filter((a) => {
        const q = query.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          country(a).toLowerCase().includes(q) ||
          rubric(a).toLowerCase().includes(q) ||
          (a.author?.name ?? "").toLowerCase().includes(q)
        );
      })
    : articles;

  return (
    <header className="bg-bg">
      <div className="topbar border-b border-border">
        <div className="page-wrap grid h-12 grid-cols-[auto_1fr_auto] items-center gap-2 md:h-14 md:grid-cols-[1fr_auto_1fr]">
          <button
            type="button"
            className="flex size-11 shrink-0 items-center justify-center text-fg"
            aria-label={overlay === "menu" ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOverlay(overlay === "menu" ? null : "menu")}
          >
            {overlay === "menu" ? <X className="size-5" strokeWidth={1.6} /> : <Menu className="size-5" strokeWidth={1.6} />}
          </button>

          {isHome ? (
            <>
              <p className="min-w-0 truncate text-center font-body text-[0.78rem] italic text-fg md:hidden">
                {todayLabel(true)}
              </p>
              <p className="hidden text-center font-body text-[0.92rem] italic text-fg md:block">
                {todayLabel()}
              </p>
            </>
          ) : (
            <Link to="/" className="flex justify-center" onClick={() => setOverlay(null)}>
              <img src={logo} alt="el politarca" className="h-6 w-auto md:h-7" />
            </Link>
          )}

          <div className="flex items-center justify-end gap-0.5 md:gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOverlay(overlay === "search" ? null : "search")}
              className="util-link inline-flex size-11 items-center justify-center md:size-auto md:gap-1.5"
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
            <button type="button" onClick={() => setOverlay("subscribe")} className="pill text-[0.8rem] md:text-[0.875rem]">
              Suscribirse
            </button>
          </div>
        </div>
        {!isHome ? <ReadingProgress /> : null}
      </div>

      {isHome ? (
        <>
          <div className="page-wrap py-4 md:py-5">
            <Link to="/" className="block" onClick={() => setOverlay(null)}>
              <img src={logo} alt="el politarca" className="masthead-logo" />
            </Link>
          </div>
          <nav className="border-y border-border" aria-label="Secciones">
            <ul className="page-wrap nav-rail">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} data-active={here === item.to ? "true" : "false"}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/balance" data-active={here === "/balance" ? "true" : "false"}>
                  Balance
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : null}

      {overlay ? (
        <div className="overlay-sheet">
          <div className="border-b border-border">
            <div className="page-wrap grid h-12 grid-cols-[auto_1fr_auto] items-center gap-2 md:h-14">
              <button
                type="button"
                className="flex size-11 items-center justify-center text-fg"
                aria-label="Cerrar"
                onClick={() => setOverlay(null)}
              >
                <X className="size-5" strokeWidth={1.6} />
              </button>
              <Link to="/" className="flex justify-center" onClick={() => setOverlay(null)}>
                <img src={logo} alt="el politarca" className="h-6 w-auto md:h-8" />
              </Link>
              <div className="flex justify-end">
                <button type="button" className="pill text-[0.8rem]" onClick={() => setOverlay("subscribe")}>
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          <div className="page-wrap py-8 md:py-16">
            {overlay === "menu" ? (
              <nav className="mx-auto max-w-xl">
                <ul className="flex flex-col">
                  {NAV.map((item) => (
                    <li key={item.to} className="border-b border-border">
                      <Link
                        to={item.to}
                        onClick={() => setOverlay(null)}
                        className="flex min-h-14 items-center font-display text-[1.85rem] font-medium tracking-[-0.02em] text-fg md:min-h-16 md:text-4xl"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-1 font-ui text-sm text-fg">
                  <button type="button" className="min-h-11 text-left hover:opacity-70" onClick={() => setOverlay("search")}>
                    Buscar en el archivo
                  </button>
                  <button type="button" className="min-h-11 text-left hover:opacity-70" onClick={cycle}>
                    {nextThemeLabel(theme)}
                  </button>
                  <Link
                    to="/balance"
                    onClick={() => setOverlay(null)}
                    className="flex min-h-11 items-center hover:opacity-70"
                  >
                    Balance de Poder
                  </Link>
                  <button type="button" className="min-h-11 text-left hover:opacity-70" onClick={() => setOverlay("subscribe")}>
                    El Despacho
                  </button>
                  <Link
                    to="/nosotros"
                    onClick={() => setOverlay(null)}
                    className="flex min-h-11 items-center hover:opacity-70"
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
                    <li key={a.id}>
                      <StoryKicker article={a} />
                      <Link
                        to="/piezas/$slug"
                        params={{ slug: a.id }}
                        onClick={() => setOverlay(null)}
                        className="hed-mix hed-link mt-1 block"
                      >
                        {a.title}
                      </Link>
                      <p className="byline mt-1">Por {a.author?.name}</p>
                    </li>
                  ))}
                  {hits.length === 0 ? (
                    <li className="font-body italic text-subtle">Sin resultados.</li>
                  ) : null}
                </ul>
              </div>
            ) : null}

            {overlay === "subscribe" ? (
              <div className="mx-auto max-w-md px-1 text-center">
                <p className="rubric">El Despacho</p>
                <h2 className="mt-3 font-display text-[1.85rem] font-medium md:text-4xl">
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
