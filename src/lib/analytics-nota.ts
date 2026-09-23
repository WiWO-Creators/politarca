import { ARTICLES, country, type Article } from "./content";
import type { DimensionesDeNota } from "./analytics";

/**
 * Responsabilidad: traducir una pieza del sitio a las dimensiones con las que
 * se la mide en Google Analytics.
 * Usado por: routes/piezas.$slug.tsx.
 * NO hace: no manda nada —eso es `medirNota` en lib/analytics— ni dibuja.
 *
 * Vive aparte de lib/analytics porque aquélla arma el `<head>` y no debe cargar
 * el archivo editorial entero.
 *
 * LA DIMENSIÓN QUE JUSTIFICA TODO ES `origen`: separa lo que publicó el
 * orquestador de lo que el sitio ya traía. Para Google son todas direcciones del
 * mismo dominio.
 *
 * OJO: mandar un parámetro NO alcanza para verlo en un informe. Hay que
 * registrarlo en GA4, en Administrar → Definiciones personalizadas, con el
 * nombre exacto y alcance de evento: `nota`, `seccion`, `formato`, `pais`,
 * `firma`, `origen` y `tipo_de_pagina` (que viaja en la vista de página).
 * `minutos` va como MÉTRICA.
 */

/** Lo que se manda cuando la pieza no declara ese campo. */
const SIN_DATO = "(sin declarar)";

/** Ids del archivo del repositorio, calculados una vez. */
const IDS_DEL_ARCHIVO = new Set(ARTICLES.map((una) => una.id));

/**
 * De dónde salió una pieza: lo que no está en el archivo del repositorio llegó
 * por el orquestador. Es la unión de lib/articles.ts leída al revés.
 *
 * @param id El id de la pieza.
 */
export function origenDeLaNota(id: string): "archivo" | "orquestador" {
  return IDS_DEL_ARCHIVO.has(id) ? "archivo" : "orquestador";
}

/**
 * El formato editorial: pieza, ensayo, contrapunto, carta…
 *
 * Se lee de `extra` a mano porque el sitio no lo usa para dibujar y no tiene
 * acceso propio en lib/content.
 */
function formatoDe(article: Article): string {
  const valor = article.extra?.format;
  return typeof valor === "string" && valor ? valor : SIN_DATO;
}

/**
 * Las dimensiones de una pieza, listas para medir.
 *
 * Todos los campos van SIEMPRE, con relleno cuando faltan: en GA4 un parámetro
 * ausente desaparece del informe en vez de agruparse como «sin declarar».
 *
 * @param article La pieza, en la forma del contrato.
 */
export function dimensionesDeNota(article: Article): DimensionesDeNota {
  return {
    nota: article.id,
    // El id y no el nombre: el nombre puede cambiar de acento y partiría la
    // misma sección en dos filas.
    seccion: article.section?.id || SIN_DATO,
    formato: formatoDe(article),
    pais: country(article) || SIN_DATO,
    // La firma que se lee en pantalla.
    firma: article.author?.name || SIN_DATO,
    // Lo que la pieza DECLARA durar; cruzado con la permanencia real dice si se
    // leyó.
    minutos: article.readingMinutes ?? 0,
    origen: origenDeLaNota(article.id),
  };
}
