import { SECTIONS, type FormatId } from "@/lib/content";
import {
  WIWO_COMMON_BLOCK_TYPES,
  WIWO_CONTRACT_VERSION,
  type WiwoField,
  type WiwoManifest,
} from "@wiwo/contract";
import { canDelete, canWrite } from "@wiwo/contract/server";

/**
 * Responsabilidad: declarar qué es este sitio y qué campos pide para publicar.
 * Usado por: routes/api/wiwo/v1/manifest.ts.
 * NO hace: no serializa piezas (eso es articles.ts) ni arma la respuesta HTTP.
 *
 * Es la pieza que reemplaza a la detección de plataforma. El orquestador no
 * adivina qué es esto: pregunta y el sitio contesta.
 *
 * Las secciones se derivan de SECTIONS, así que agregar una no obliga a tocar
 * este archivo. Los formatos no tienen lista en tiempo de ejecución —FormatId es
 * solo un tipo—, así que se enumeran acá con sus etiquetas; el Record tipado
 * hace que agregar un formato al tipo y olvidarse de este archivo no compile.
 *
 * Los límites son los del sitio, medidos sobre lo publicado.
 */

/** Máximos del sitio, con margen sobre lo que ya está publicado. */
const LIMITS = {
  title: 120,
  summary: 320,
  excerpt: 280,
  imageAlt: 200,
  seoTitle: 70,
  seoDescription: 200,
} as const;

/**
 * Nombre visible de cada formato editorial.
 *
 * Es el segundo eje del sitio, además de la sección: una pieza de El Erario
 * puede ser un contrapunto o una ficha de números, y no es lo mismo.
 */
const FORMAT_LABELS: Record<FormatId, string> = {
  pieza: "Pieza",
  ficha: "Ficha",
  contrapunto: "Contrapunto",
  numeros: "Números",
  carta: "Carta",
  entrevista: "Entrevista",
  archivo: "Archivo",
  ensayo: "Ensayo",
};

/**
 * Campos que el sitio acepta al publicar.
 *
 * Las claves de los campos del núcleo son las del contrato (`summary`, no
 * `dek`); la etiqueta es la que usa este sitio. Los campos propios —formato,
 * rúbrica, país— conservan su nombre y viajan en `extra`.
 */
/**
 * Los campos que el sitio exige para aceptar una pieza.
 *
 * Se exportan porque el contrato los usa dos veces: para describir el formato en
 * el manifest y para validar una pieza que llega. Si fueran dos listas, un
 * campo agregado en una rechazaría piezas que la otra anunció como válidas.
 */
export function buildFields(): WiwoField[] {
  return [
    {
      key: "title",
      label: "Título",
      type: "text",
      required: true,
      maxLength: LIMITS.title,
    },
    {
      key: "summary",
      label: "Bajada",
      type: "longtext",
      required: true,
      maxLength: LIMITS.summary,
      hint: "El párrafo que sigue al título y da la tesis de la pieza.",
    },
    {
      key: "section",
      label: "Sección",
      type: "enum",
      required: true,
      options: SECTIONS.map((section) => ({
        value: section.id,
        label: section.name,
      })),
    },
    {
      key: "format",
      label: "Formato",
      type: "enum",
      required: true,
      options: Object.entries(FORMAT_LABELS).map(([value, label]) => ({
        value,
        label,
      })),
      hint: "Segundo eje, además de la sección: qué clase de pieza es.",
    },
    {
      key: "rubric",
      label: "Rúbrica",
      type: "text",
      required: true,
      hint: 'Cómo se anuncia la pieza en portada: "El Ensayo", "El Archivo".',
    },
    {
      key: "country",
      label: "País",
      type: "text",
      required: true,
      hint: 'País o región de la pieza. "América Latina" cuando es regional.',
    },
    {
      key: "author",
      label: "Firma",
      type: "text",
      required: true,
      hint: 'Firma editorial, no una persona: "Redacción Politarca".',
    },
    {
      key: "image",
      label: "Imagen",
      type: "image",
      required: true,
      // La pista NO es solo para quien escribe: es el estilo con el que el
      // orquestador genera la imagen de este sitio. Cambiarla cambia cómo se
      // ilustra politarca, y no hay que tocar nada más.
      hint: "Fotografía documental sobria del lugar o la institución de la que trata la pieza: edificios públicos, salas, archivos, calles. Luz natural, tono contenido, sin gente reconocible ni dramatismo. Horizontal.",
    },
    {
      key: "imageAlt",
      label: "Texto alternativo de la imagen",
      type: "text",
      required: true,
      maxLength: LIMITS.imageAlt,
      hint: "Obligatorio: sin esto la pieza no es accesible.",
    },
    {
      key: "tags",
      label: "Etiquetas",
      type: "tags",
      required: true,
      itemCount: { min: 3, max: 6 },
    },
    {
      key: "readingMinutes",
      label: "Minutos de lectura",
      type: "number",
      required: true,
    },
    {
      key: "body",
      label: "Cuerpo",
      type: "blocks",
      required: true,
      hint: "Un bloque por párrafo, separados por línea en blanco. Los subtítulos van con ###, las citas con >.",
    },
    {
      key: "excerpt",
      label: "Extracto",
      type: "longtext",
      required: true,
      maxLength: LIMITS.excerpt,
      hint: "Arranque de la pieza para las tarjetas de portada.",
    },
    {
      key: "sources",
      label: "Fuentes",
      type: "longtext",
      required: true,
      hint: "Referencias separadas por ·. Cada dato del texto debe tener una.",
    },
    {
      key: "editNote",
      label: "Nota de edición",
      type: "longtext",
      required: false,
      hint: "Advertencias internas: datos a cotejar, series discontinuadas.",
    },
    {
      key: "seoTitle",
      label: "Título para buscadores",
      type: "text",
      required: false,
      maxLength: LIMITS.seoTitle,
    },
    {
      key: "seoDescription",
      label: "Descripción para buscadores",
      type: "longtext",
      required: false,
      maxLength: LIMITS.seoDescription,
    },
    {
      key: "tldr",
      label: "Lo que hay que saber",
      type: "list",
      required: false,
      itemCount: { min: 3, max: 5 },
      hint: "Hechos verificables, uno por línea.",
    },
    {
      key: "faq",
      label: "Preguntas frecuentes",
      type: "pairs",
      required: false,
      itemLabels: { key: "Pregunta", value: "Respuesta" },
      itemCount: { min: 2, max: 4 },
    },
  ];
}

/**
 * Arma el manifest del sitio.
 *
 * @param origin Origen público por el que entró la petición, para que las URLs
 *   que se emiten queden en ese mismo dominio.
 * @param articleCount Cuántas piezas va a entregar el sitio.
 * @param acceptsMedia Si el sitio puede recibir imágenes: hace falta que tenga
 *   dónde guardarlas y clave de escritura, porque subir un archivo es escribir.
 */
export function buildManifest(
  origin: string,
  articleCount: number,
  acceptsMedia: boolean,
): WiwoManifest {
  return {
    contract: WIWO_CONTRACT_VERSION,
    site: {
      name: "el politarca",
      url: origin,
      language: "es-CL",
    },
    capabilities: {
      articles: true,
      read: true,
      write: canWrite(),
      // Llega resuelto desde la ruta y no se calcula acá: quien lo sabe es
      // lib/wiwo/site.ts, que ya importa este archivo. Preguntárselo desde acá
      // cerraría un círculo entre los dos.
      media: acceptsMedia,
      // Borrar es escribir, así que depende de la misma clave. Se anuncia
      // aparte porque el orquestador no puede deducirlo de `write`: un sitio
      // con el paquete anterior acepta publicaciones y no entiende el borrado.
      delete: canDelete(),
    },
    format: {
      id: "politarca",
      label: "el politarca",
      fields: buildFields(),
      // El vocabulario común primero —es el mismo en todos los sitios wiwo— y
      // después lo propio de politarca. Esa separación es el contrato entero en
      // miniatura: el fondo se comparte, la forma no.
      blockTypes: [
        ...WIWO_COMMON_BLOCK_TYPES,
        {
          type: "stat",
          label: "Cifra",
          hint: "Un número con su leyenda y su fuente.",
        },
        {
          type: "chart",
          label: "Gráfico",
          hint: "Referencia a una serie de datos que vive en el sitio.",
        },
        {
          type: "methodology",
          label: "Metodología",
          hint: "Cómo se construyó el dato. Va al final de la pieza.",
        },
      ],
    },
    counts: { articles: articleCount },
    generatedAt: new Date().toISOString(),
  };
}
