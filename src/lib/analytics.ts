/**
 * Responsabilidad: la medición de Google Analytics del sitio — qué propiedad
 * mide, qué scripts van en el head y los eventos que se mandan a mano.
 * Usado por: routes/__root.tsx (el head), components/medicion-de-vistas.tsx (la
 *   vista de cada ruta) y routes/piezas.$slug.tsx (la lectura de una pieza).
 * NO hace: no lee estadísticas ni sabe nada de las piezas; traducir una pieza a
 *   dimensiones es lib/analytics-nota.ts.
 *
 * LA PROPIEDAD SE LEE DEL ENTORNO (`VITE_GA_MEASUREMENT_ID`) Y NO ESTÁ ESCRITA
 * ACÁ. En Vercel se carga SOLO en Production. Tres motivos:
 *
 * - Una vista previa de Vercel corre el mismo código que producción. Con el
 *   identificador en el repositorio, cada rama en revisión mandaría sus visitas
 *   a la propiedad de verdad.
 * - Apagar la medición pasa a ser vaciar un campo en Vercel, no tocar código.
 * - El desarrollo local no mide, que es lo correcto.
 *
 * Variable vacía = no se emite NINGÚN script. Como es una variable `VITE_`, se
 * fija al compilar: crearla o cambiarla exige volver a desplegar.
 *
 * Es la misma instalación que wearevander y nerd-talks; lo propio de este sitio
 * son las rutas de `tipoDePagina` y las dimensiones de la pieza.
 */

/**
 * La propiedad de GA4 que mide este sitio. Vacío = no se mide.
 *
 * Se lee con `?.` porque las pruebas cargan este módulo con Node a secas, donde
 * `import.meta.env` no existe.
 */
export const GA_MEASUREMENT_ID = (import.meta.env?.VITE_GA_MEASUREMENT_ID ?? "").trim();

/** De dónde se baja gtag.js. */
const GA_SERVE = "https://www.googletagmanager.com/gtag/js";

/** Secciones del sitio, que son páginas de navegación por el archivo. */
const SECCIONES = ["polis", "erario", "frontera", "vida-comun", "agora", "biblioteca"];

/**
 * El arranque de gtag, como lo entrega Google salvo por la vista automática.
 *
 * Va inline porque `dataLayer` y `gtag` tienen que existir ANTES de que llegue
 * gtag.js: la función encola las llamadas y el archivo las consume al cargar.
 *
 * @param id Una propiedad ya validada por `scriptsDeAnalitica`.
 */
function arranqueDeGa(id: string): string {
  return [
    "window.dataLayer = window.dataLayer || [];",
    "function gtag(){dataLayer.push(arguments);}",
    "gtag('js', new Date());",
    // `send_page_view:false` NO apaga la medición: la MUEVE. Este sitio navega
    // con Link y el documento no se recarga nunca, así que el arranque de Google
    // contaría una sola vista por visita. Todas las vistas —la primera también—
    // las manda medicion-de-vistas.tsx al cambiar la ruta; apagarla acá es lo
    // que evita contar dos veces la primera.
    `gtag('config', '${id}', { send_page_view: false });`,
  ].join("\n");
}

/**
 * Los scripts de medición para el head. Vacío cuando no hay propiedad válida.
 *
 * Se valida la FORMA y no solo que no esté vacía: una variable mal pegada —con
 * comillas, espacios o el nombre de la variable adentro— emitiría un script que
 * carga sin error y no mide nada.
 *
 * @param id Qué propiedad medir. Por omisión, la del entorno.
 * @returns El archivo de gtag y su arranque, en ese orden; o nada.
 */
export function scriptsDeAnalitica(
  id: string = GA_MEASUREMENT_ID,
): { src?: string; async?: boolean; children?: string }[] {
  const limpio = id.trim();
  if (!/^G-[A-Z0-9]+$/i.test(limpio)) return [];

  return [{ src: `${GA_SERVE}?id=${limpio}`, async: true }, { children: arranqueDeGa(limpio) }];
}

/** Lo que gtag deja colgado del navegador. No hay tipos oficiales. */
type Gtag = (...args: unknown[]) => void;

/** gtag, si está. Ausente en el servidor, sin propiedad o con un bloqueador. */
function gtag(): Gtag | null {
  const suelto = (globalThis as { gtag?: Gtag }).gtag;
  return typeof suelto === "function" ? suelto : null;
}

/**
 * Qué clase de página es, deducida de su dirección.
 *
 * Se deduce del camino y no se declara ruta por ruta para que una ruta nueva
 * quede medida aunque nadie la anote; el peor caso es que caiga en «otra».
 *
 * @param ruta El camino, sin dominio.
 */
export function tipoDePagina(ruta: string): string {
  if (ruta === "/") return "portada";
  const partes = ruta.split("/").filter(Boolean);
  const primero = partes[0] ?? "";
  if (primero === "piezas") return partes.length > 1 ? "nota" : "navegacion";
  if (SECCIONES.includes(primero)) return "navegacion";
  if (primero === "balance") return "especial";
  if (primero === "nosotros") return "institucional";
  return "otra";
}

/**
 * Una vista de página. Se manda a mano en cada cambio de ruta.
 *
 * @param ruta El camino, sin dominio.
 * @param titulo El título del documento, para que el informe se lea.
 */
export function medirVista(ruta: string, titulo: string): void {
  const enviar = gtag();
  if (!enviar) return;

  enviar("event", "page_view", {
    page_path: ruta,
    page_title: titulo,
    page_location: globalThis.location?.href,
    tipo_de_pagina: tipoDePagina(ruta),
    ...(depuracionEncendida() ? { debug_mode: true } : {}),
  });
}

/**
 * Lo que se mide de una pieza.
 *
 * `formato` y `pais` son lo propio de este archivo y los que más separan:
 * siete formatos y diez países. La rúbrica NO va porque casi siempre repite la
 * sección, y cada dimensión que no separa nada gasta una de las cincuenta que
 * da GA4.
 */
export interface DimensionesDeNota {
  nota: string;
  seccion: string;
  formato: string;
  pais: string;
  firma: string;
  minutos: number;
  /** `archivo` si es del repositorio, `orquestador` si la publicó doom. */
  origen: "archivo" | "orquestador";
}

/**
 * Mide la lectura de una pieza, con sus dimensiones editoriales.
 *
 * Va como evento propio y no dentro de la vista de página: la vista sale apenas
 * cambia la ruta y así el conteo de tráfico y el de lectura no se pisan.
 *
 * @param dimensiones Las de `dimensionesDeNota`.
 */
export function medirNota(dimensiones: DimensionesDeNota): void {
  const enviar = gtag();
  if (!enviar) return;

  enviar("event", "nota_vista", {
    ...dimensiones,
    ...(depuracionEncendida() ? { debug_mode: true } : {}),
  });
}

/**
 * True si la dirección pide modo depuración (`?ga_debug=1`), para comprobar la
 * instalación en minutos en el DebugView en vez de esperar los informes.
 */
function depuracionEncendida(): boolean {
  try {
    return new URLSearchParams(globalThis.location?.search ?? "").has("ga_debug");
  } catch {
    return false;
  }
}
