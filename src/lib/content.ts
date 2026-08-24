export type Category =
  | "Regulación"
  | "Gobernanza"
  | "Políticas públicas"
  | "Análisis";

export type IllustrationId =
  | "layers"
  | "network"
  | "columns"
  | "flow"
  | "grid";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "pullquote"; text: string }
  | {
      type: "stat";
      value: string;
      caption: string;
      source: string;
    }
  | { type: "chart"; id: "stock" | "hours" | "emitters" | "regions" }
  | { type: "methodology"; paragraphs: string[] };

export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: Category;
  rubric: string;
  date: string;
  dateLabel: string;
  readMin: number;
  datasets: number;
  byline: string;
  excerpt: string;
  illustration: IllustrationId;
  image: string;
  featured?: boolean;
  body: ArticleBlock[];
};

export const PULSE = [
  {
    label: "Stock normativo vigente",
    value: "6.641",
    delta: "+38 % desde 2014",
    tone: "up" as const,
    source: "Contraloría · Diario Oficial",
  },
  {
    label: "Horas anuales (pyme mediana)",
    value: "312",
    delta: "+67 % vs 2015",
    tone: "up" as const,
    source: "Encuesta propia · n = 1.247",
  },
  {
    label: "Costo estimado agregado",
    value: "US$ 3,1 mil M",
    delta: "≈ 1,4 % del PIB 2024",
    tone: "neutral" as const,
    source: "Metodología OECD adaptada",
  },
  {
    label: "Posición OCDE densidad",
    value: "P72",
    delta: "Percentil 72",
    tone: "neutral" as const,
    source: "Índice compuesto propio",
  },
];

export const STOCK_SERIES = [
  { year: 2010, stock: 3810, rate: 92 },
  { year: 2011, stock: 3920, rate: 110 },
  { year: 2012, stock: 4065, rate: 145 },
  { year: 2013, stock: 4210, rate: 145 },
  { year: 2014, stock: 4340, rate: 130 },
  { year: 2015, stock: 4488, rate: 148 },
  { year: 2016, stock: 4610, rate: 122 },
  { year: 2017, stock: 4745, rate: 135 },
  { year: 2018, stock: 5020, rate: 275 },
  { year: 2019, stock: 5288, rate: 268 },
  { year: 2020, stock: 5540, rate: 252 },
  { year: 2021, stock: 5895, rate: 355 },
  { year: 2022, stock: 6180, rate: 285 },
  { year: 2023, stock: 6390, rate: 210 },
  { year: 2024, stock: 6525, rate: 135 },
  { year: 2025, stock: 6641, rate: 116 },
];

export const EMITTERS = [
  { name: "Minsal", share: 18 },
  { name: "SMA", share: 17 },
  { name: "Dir. Trabajo", share: 16 },
  { name: "CMF", share: 9 },
  { name: "MINVU", share: 8 },
  { name: "Otros 22", share: 32 },
];

export const HOURS_SERIES = [
  { year: 2015, hours: 187 },
  { year: 2017, hours: 214 },
  { year: 2019, hours: 248 },
  { year: 2021, hours: 281 },
  { year: 2023, hours: 301 },
  { year: 2024, hours: 312 },
];

export const REGION_SPEND = [
  { region: "Metropolitana", share: 28, electoral: 0.41 },
  { region: "Valparaíso", share: 11, electoral: 0.36 },
  { region: "Biobío", share: 10, electoral: 0.33 },
  { region: "Los Lagos", share: 8, electoral: 0.29 },
  { region: "Maule", share: 7, electoral: 0.38 },
  { region: "Araucanía", share: 7, electoral: 0.44 },
  { region: "O'Higgins", share: 6, electoral: 0.31 },
  { region: "Antofagasta", share: 5, electoral: 0.22 },
  { region: "Otras", share: 18, electoral: 0.27 },
];

export const DATASETS = [
  {
    id: "stock-normativo",
    title: "Stock normativo 2010–2025",
    rows: 192_440,
    updated: "2026-08-12",
    format: "CSV · Parquet",
    note: "Catálogo consolidado Diario Oficial + Contraloría. Criterio de inclusión documentado.",
  },
  {
    id: "carga-pyme",
    title: "Horas de cumplimiento · muestra empresarial",
    rows: 1_247,
    updated: "2026-07-28",
    format: "CSV · codebook",
    note: "Encuesta estratificada por tamaño y sector. Microdatos anonimizados.",
  },
  {
    id: "emision-organismos",
    title: "Emisión neta por organismo",
    rows: 31,
    updated: "2026-08-12",
    format: "CSV",
    note: "Ponderado por alcance económico estimado de cada norma.",
  },
  {
    id: "gasto-regional",
    title: "Gasto discrecional gobiernos regionales",
    rows: 16,
    updated: "2026-06-02",
    format: "CSV · XLSX",
    note: "DIPRES + ejecución presupuestaria 2014–2025, deflactado.",
  },
  {
    id: "lobby-registros",
    title: "Audiencias Ley de Lobby 2014–2025",
    rows: 84_102,
    updated: "2026-05-19",
    format: "CSV · JSON",
    note: "Registro consolidado. Campos de sujeto pasivo, materia y recurrencia.",
  },
  {
    id: "indice-densidad",
    title: "Índice compuesto de densidad regulatoria",
    rows: 38,
    updated: "2026-08-01",
    format: "CSV",
    note: "OCDE PMR + Doing Business legacy + datos nacionales. Código de replicación.",
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "inflacion-regulatoria-chile-2014-2025",
    title: "La inflación regulatoria de Chile, 2014-2025",
    dek: "Entre 2014 y 2025 el stock de normas con impacto directo sobre la actividad empresarial creció un 38 %. El costo administrativo estimado equivale a 1,4 puntos del PIB. Reconstruimos los vectores, los organismos y los trade-offs reales.",
    category: "Regulación",
    rubric: "El Lede",
    date: "2026-08-23",
    dateLabel: "23 de agosto de 2026",
    readMin: 18,
    datasets: 11,
    byline: "Equipo de Datos de Politarca",
    excerpt:
      "El stock de normas con impacto empresarial creció 38 por ciento en once años. El costo estimado equivale a 1,4 puntos del PIB.",
    illustration: "layers",
    image: "/photos/archive.jpg",
    featured: true,
    body: [
      {
        type: "p",
        text: "En diciembre de 2013 el inventario de decretos, resoluciones y circulares con efecto regulatorio sobre empresas superaba las 4.200 piezas vigentes, según el registro consolidado de la Contraloría General de la República y el Ministerio Secretaría General de la Presidencia. Once años después la cifra supera las 5.800. El crecimiento no fue lineal: el 62 por ciento del incremento neto se concentró entre 2018 y 2022.",
      },
      {
        type: "p",
        text: "Este trabajo no pregunta si la regulación es necesaria. Pregunta cuánto hay, quién la produce, a qué velocidad y a qué costo medible. La regulación es una tecnología de gobierno. Como toda tecnología, puede volverse obsoleta, redundante o excesivamente costosa respecto de los objetivos que declara perseguir.",
      },
      {
        type: "stat",
        value: "+38 %",
        caption:
          "Crecimiento del stock de normas con impacto empresarial entre 2014 y 2025.",
        source:
          "Diario Oficial digitalizado · Contraloría. Criterio de inclusión: normas que imponen obligación, prohibición o requisito de información a sujetos privados.",
      },
      { type: "h2", text: "I. El stock y su aceleración" },
      {
        type: "p",
        text: "La aceleración se observa con claridad cuando se descompone la serie. Entre 2014 y 2017 el ritmo de creación neta se mantuvo cercano al promedio histórico de la década anterior. A partir de 2018 la tasa anual se elevó de forma sostenida. El peak se registró en 2021, coincidiendo con la respuesta regulatoria a la pandemia y con una serie de litigios que empujaron a varios organismos a emitir normas de “clarificación” o “precisión”.",
      },
      { type: "chart", id: "stock" },
      {
        type: "pullquote",
        text: "La correlación entre cambio de gobierno y tasa de emisión es débil (r = 0,21). El driver dominante parece ser la respuesta a crisis mediáticas y a litigio estratégico más que a programas de gobierno explícitos.",
      },
      { type: "h2", text: "II. Los vectores de creación" },
      {
        type: "p",
        text: "Tres organismos concentran el 51 por ciento de las nuevas normas de alto impacto: Ministerio de Salud (18 %), Superintendencia del Medio Ambiente (17 %) y Dirección del Trabajo (16 %). El resto se distribuye en un long-tail de 27 instituciones. La Superintendencia del Medio Ambiente y el Ministerio del Trabajo lideran el ranking de emisión neta cuando se pondera por el alcance económico estimado de cada norma.",
      },
      { type: "chart", id: "emitters" },
      {
        type: "p",
        text: "El patrón no es ideológico en el sentido partidario. Es procedural. Los organismos que más emiten son también, de manera consistente, los que menos publican evaluaciones de impacto ex ante o ex post. La ausencia de un filtro sistemático de costo-beneficio convierte la emisión en el camino de menor resistencia institucional.",
      },
      {
        type: "stat",
        value: "51 %",
        caption:
          "De las nuevas normas de alto impacto se originan en solo tres organismos: Minsal, SMA y Dirección del Trabajo.",
        source:
          "Clasificación propia de “alto impacto” basada en número de sujetos obligados y sector de actividad.",
      },
      { type: "h2", text: "III. Costo de cumplimiento" },
      {
        type: "p",
        text: "A partir de una encuesta estructurada aplicada a 1.247 empresas formales (diseño estratificado por tamaño y sector, margen de error ±2,8 %), el tiempo medio anual dedicado a cumplimiento regulatorio pasó de 187 horas en 2015 a 312 horas en 2024 para una pyme mediana. Valorado a costo de oportunidad del trabajo calificado —salarios medianos por categoría ocupacional según INE más overhead estimado—, el agregado nacional se sitúa en torno a los 3.100 millones de dólares, o aproximadamente 1,4 puntos del PIB de 2024.",
      },
      { type: "chart", id: "hours" },
      {
        type: "p",
        text: "El 41 por ciento de ese costo se concentra en empresas de menos de 50 trabajadores. El efecto es regresivo: las firmas grandes internalizan la carga con departamentos legales y de compliance; las pequeñas la pagan en tiempo del dueño o del contador externo.",
      },
      { type: "h2", text: "IV. Comparación internacional" },
      {
        type: "p",
        text: "Chile se ubica en el percentil 72 de densidad regulatoria entre economías de la OCDE cuando se ajusta por tamaño de economía y complejidad sectorial. El diferencial respecto a Nueva Zelanda o Dinamarca —países con niveles similares de protección ambiental y laboral— es especialmente marcado en la etapa de permisos previos. Solo Francia, Italia y Brasil muestran cargas comparables en el grupo de referencia.",
      },
      {
        type: "p",
        text: "La evidencia comparada no sugiere que “menos regulación” sea automáticamente superior. Sugiere que el diseño actual genera costos fijos elevados que penalizan de forma desproporcionada a firmas pequeñas y a nuevos entrantes. Los países que han contenido la inflación regulatoria sin sacrificar estándares lo han hecho mediante reglas de “one-in, one-out”, sunsetting obligatorio y evaluaciones de impacto ex ante con umbrales cuantitativos vinculantes.",
      },
      { type: "h2", text: "V. Implicancias para el diseño regulatorio" },
      {
        type: "p",
        text: "La regulación es una tecnología de gobierno. El dato no reemplaza el juicio político. Pero sin el dato, el juicio político opera a ciegas. Cualquier agenda de modernización del Estado que ignore el stock existente y la dinámica de creación de nuevas normas está incompleta.",
      },
      {
        type: "p",
        text: "Los hallazgos apuntan a tres fricciones institucionales concretas: (1) ausencia de un filtro de costo-beneficio con umbral cuantitativo; (2) ausencia de evaluación ex post sistemática; (3) incentivos asimétricos —el costo político de “no regular” ante una crisis mediática es inmediato; el costo de sobre-regular es difuso y diferido.",
      },
      {
        type: "methodology",
        paragraphs: [
          "Fuentes primarias: catálogo de la Contraloría General de la República, Diario Oficial digitalizado 2014-2025, registros de la Superintendencia del Medio Ambiente, Dirección del Trabajo y Comisión para el Mercado Financiero.",
          "Criterios de inclusión: normas con al menos un artículo que imponga obligación, prohibición o requisito de información a sujetos privados. Muestra empresarial: diseño estratificado, respuesta efectiva 41 %. Costeo: salarios medianos por categoría ocupacional según INE + overhead estimado. Margen de error del estimado de costo: ±18 %.",
          "Limitaciones: no incluye costo de capital ni efectos dinámicos sobre inversión. Todos los microdatos anonimizados y el código de replicación están disponibles para descarga en el Data Hub.",
        ],
      },
      { type: "h2", text: "Conclusión" },
      {
        type: "p",
        text: "La inflación regulatoria es un hecho medible. Su causa principal no parece ser ideológica sino procedural: ausencia de frenos institucionales a la emisión y ausencia de costo político por sobre-regulación. El stock creció. El costo se concentró. Los organismos que más emiten son los que menos evalúan.",
      },
      {
        type: "p",
        text: "El dato está. La decisión de qué hacer con él corresponde a quienes diseñan las reglas.",
      },
    ],
  },
  {
    slug: "captura-organismos-tecnicos",
    title: "Cómo se mide la captura en los organismos técnicos",
    dek: "Un marco empírico para detectar sesgos sistemáticos en decisiones de superintendencias y comisiones. Evidencia de tres casos 2019-2025, sin acusar y sin eludir el patrón.",
    category: "Gobernanza",
    rubric: "Informe",
    date: "2026-08-12",
    dateLabel: "12 de agosto de 2026",
    readMin: 14,
    datasets: 7,
    byline: "Equipo de Gobernanza",
    excerpt:
      "Un marco empírico para detectar sesgos sistemáticos en superintendencias y comisiones. Tres casos, 2019-2025.",
    illustration: "network",
    image: "/photos/office.jpg",
    body: [
      {
        type: "p",
        text: "La captura regulatoria rara vez se presenta como un sobre. Se presenta como una distribución: decisiones que, a lo largo de cientos de resoluciones, se desvían de manera estadísticamente detectable hacia un subconjunto de sujetos regulados. Este trabajo propone un marco para medir esa desviación y lo aplica a tres organismos técnicos chilenos entre 2019 y 2025.",
      },
      {
        type: "p",
        text: "El marco no infiere intención. Infere patrón. Distinguir ambos es la diferencia entre un reportaje y una acusación.",
      },
      {
        type: "stat",
        value: "0,34",
        caption:
          "Índice de concentración de resultados favorables en el cuartil superior de sujetos recurrentes, caso A (2019-2025).",
        source:
          "Resoluciones publicadas · índice propio 0–1. Un valor de 0,25 sería uniforme.",
      },
      { type: "h2", text: "Definición operativa" },
      {
        type: "p",
        text: "Definimos captura observable como persistencia, a lo largo de un panel de decisiones, de un residuo positivo y significativo a favor de un conjunto de sujetos después de controlar por tamaño, sector, historial de cumplimiento y complejidad del expediente. El residuo no “prueba” captura. La elimina como hipótesis nula de aleatoriedad.",
      },
      {
        type: "pullquote",
        text: "Si el residuo desaparece al introducir la variable de rotación de jefaturas, el patrón es institucional. Si persiste, es personal. En dos de tres casos, persistió.",
      },
      { type: "h2", text: "Tres organismos, tres texturas" },
      {
        type: "p",
        text: "El organismo A muestra concentración alta y estable. El B muestra concentración baja pero picos asociados a cambios de jefatura. El C no muestra residuo detectable una vez se controla por complejidad del expediente — un recordatorio útil: no todo organismo técnico está capturado, y afirmarlo sin el test es ruido.",
      },
      { type: "chart", id: "emitters" },
      {
        type: "p",
        text: "La rotación de las jefaturas técnicas —medida como meses en el cargo— correlaciona inversamente con la magnitud del residuo (r = −0,48). El hallazgo es compatible con la literatura de captura por especialización: cuanto más larga la tenencia, más densa la red informal con el regulado.",
      },
      {
        type: "methodology",
        paragraphs: [
          "Universo: resoluciones con efecto individualizable publicadas entre 2019 y 2025 en tres organismos. Controles: tamaño (log empleo), sector CIIU, historial de sanciones, duración del expediente. Errores clusterizados a nivel de sujeto. Código y microdatos anonimizados en el Data Hub.",
          "Limitación principal: no observamos lobby informal ni comunicaciones privadas. El residuo puede capturar calidad no medida del expediente. Por eso el marco se ofrece como instrumento, no como veredicto.",
        ],
      },
    ],
  },
  {
    slug: "gasto-discrecional-gobiernos-regionales",
    title: "El mapa del gasto discrecional en los gobiernos regionales",
    dek: "Dónde se decide realmente el dinero y qué correlaciones existen con ciclos electorales y redes de influencia local. Dieciséis regiones, doce años, un patrón incompleto.",
    category: "Políticas públicas",
    rubric: "Anales del gasto",
    date: "2026-08-04",
    dateLabel: "4 de agosto de 2026",
    readMin: 16,
    datasets: 14,
    byline: "Equipo de Políticas Públicas",
    excerpt:
      "Dónde se decide el dinero discrecional y qué correlaciones deja el ciclo electoral.",
    illustration: "flow",
    image: "/photos/congress-santiago.jpg",
    body: [
      {
        type: "p",
        text: "El gasto de los gobiernos regionales tiene una parte rígida —salud, educación, arrastres— y una parte que se mueve. Esa segunda parte es el objeto de este trabajo. No porque sea la mayor, sino porque es donde el diseño institucional deja espacio al criterio, y el criterio deja espacio al ciclo.",
      },
      { type: "chart", id: "regions" },
      {
        type: "stat",
        value: "+19 %",
        caption:
          "Incremento medio del gasto discrecional en el año previo a elección de gobernador, 2014-2025, deflactado.",
        source:
          "DIPRES · ejecución presupuestaria regional. Serie deflactada a pesos de 2024.",
      },
      {
        type: "pullquote",
        text: "El ciclo no aparece en todas las regiones. Aparece con más fuerza donde la competencia electoral es más estrecha y el padrón de proveedores es más concentrado.",
      },
      { type: "h2", text: "Concentración de proveedores" },
      {
        type: "p",
        text: "En seis regiones, el 10 por ciento de los proveedores concentra más del 55 por ciento del gasto discrecional adjudicado. Esa concentración no es, por sí sola, irregularidad. Es un hecho de estructura. El hecho se vuelve relevante cuando se cruza con recurrencia electoral: los mismos nombres reaparecen en ventanas preelectorales con una frecuencia que el azar no replica.",
      },
      {
        type: "p",
        text: "El diseño actual de los gobiernos regionales —autonomía relativa, fiscalización desigual, reglas de compra heredadas— produce exactamente el tipo de opacidad de baja intensidad que sobrevive a las auditorías puntuales y se revela solo en series largas.",
      },
      {
        type: "methodology",
        paragraphs: [
          "Fuentes: DIPRES, ChileCompra, SERVEL. Deflactor: IPC. “Discrecional” se define como subtítulos sin arrastre legal obligatorio ni transferencia condicionada. Código abierto en el Data Hub.",
        ],
      },
    ],
  },
  {
    slug: "tres-fallas-ley-lobby",
    title: "Tres fallas de diseño en la Ley de Lobby y su costo real",
    dek: "Diez años después: qué funciona, qué no, y cuánto cuesta la opacidad residual medida en decisiones sesgadas — no en adjetivos.",
    category: "Regulación",
    rubric: "Carta",
    date: "2026-07-28",
    dateLabel: "28 de julio de 2026",
    readMin: 12,
    datasets: 5,
    byline: "Equipo de Regulación",
    excerpt:
      "Diez años después: qué funciona, qué no, y cuánto cuesta la opacidad residual.",
    illustration: "grid",
    image: "/photos/lawbooks.jpg",
    body: [
      {
        type: "p",
        text: "La Ley de Lobby chilena resolvió un problema de visibilidad y dejó intactos tres de diseño. El registro existe. Las audiencias se publican. Lo que no se publica —y lo que el diseño no captura— es donde se concentra el costo.",
      },
      {
        type: "stat",
        value: "41 %",
        caption:
          "De las audiencias de sujetos pasivos de primer nivel omiten materia con suficiente granularidad para ser clasificadas.",
        source: "Registro de Lobby 2014-2025 · n = 84.102 audiencias.",
      },
      { type: "h2", text: "Las tres fallas" },
      {
        type: "p",
        text: "Primera: la definición de sujeto pasivo deja fuera a asesores de facto y a ventanillas técnicas donde se resuelve el detalle. Segunda: la materia se declara en campos abiertos, lo que produce un corpus ilegible para análisis sistemático. Tercera: no hay cruce obligatorio con el resultado de la decisión posterior — la audiencia queda como evento, no como input de un expediente.",
      },
      {
        type: "pullquote",
        text: "Un registro que no se puede cruzar con el output de la decisión es un archivo, no un instrumento de accountability.",
      },
      {
        type: "p",
        text: "El costo no es el de las audiencias no registradas. Es el de las decisiones que el diseño no permite auditar. Medido como residuo inexplicado en un panel de resoluciones con y sin audiencia previa, el sesgo es pequeño en media y grande en la cola.",
      },
      {
        type: "methodology",
        paragraphs: [
          "Corpus: 84.102 audiencias 2014-2025. Clasificación de materia con modelo supervisado (F1 = 0,81 sobre muestra etiquetada). Cruce con resoluciones: matching probabilístico por fecha, organismo y sujeto. Limitación: matching imperfecto en un 14 % de casos.",
        ],
      },
    ],
  },
  {
    slug: "productividad-estado-2000-2025",
    title: "Productividad del Estado: evidencia comparada 2000-2025",
    dek: "Empleo público, producto y calidad de servicio no se mueven juntos. El desacople es el dato; la causa es una hipótesis que el diseño actual no permite cerrar.",
    category: "Análisis",
    rubric: "Ensayo",
    date: "2026-07-09",
    dateLabel: "9 de julio de 2026",
    readMin: 15,
    datasets: 9,
    byline: "Equipo de Datos de Politarca",
    excerpt:
      "El empleo público creció más que la población. La calidad de servicio no acompañó.",
    illustration: "columns",
    image: "/photos/library.jpg",
    body: [
      {
        type: "p",
        text: "Entre 2000 y 2025 el empleo del gobierno general en Chile creció más rápido que la población y más rápido que el producto por ocupado del sector privado. La calidad percibida de servicios —medida por encuestas y por indicadores de tiempos de tramitación— no acompañó ese crecimiento de forma uniforme. El desacople es el hecho. Este ensayo lo documenta y se detiene antes de la moraleja.",
      },
      { type: "chart", id: "hours" },
      {
        type: "stat",
        value: "+41 %",
        caption:
          "Crecimiento del empleo de gobierno general 2000-2025, versus +22 % de la población.",
        source: "INE · DIPRES · OCDE Government at a Glance.",
      },
      {
        type: "p",
        text: "Comparado con el grupo de referencia OCDE, Chile no es un outlier de tamaño del Estado. Es un outlier de composición: alta densidad de empleo en funciones de control y baja densidad en funciones de ejecución de servicio. Esa composición predice exactamente el tipo de inflación regulatoria documentada en otra pieza de esta serie.",
      },
      {
        type: "pullquote",
        text: "Más Estado no es automáticamente más capacidad. A veces es más fricción con la misma capacidad.",
      },
      {
        type: "methodology",
        paragraphs: [
          "Series: INE, DIPRES, OCDE, Banco Mundial. Empleo de gobierno general según SNA. Calidad: tiempos de tramitación (ChileAtiende / registros sectoriales) y satisfacción (CEP, encuestas de servicio). Limitación: la calidad de servicio no tiene un índice único comparable en todo el período.",
        ],
      },
    ],
  },
  {
    slug: "el-permiso-que-nunca-llega",
    title: "El permiso que nunca llega",
    dek: "Una ventanilla, trece oficinas y el tiempo como política pública no declarada.",
    category: "Gobernanza",
    rubric: "Crónica",
    date: "2026-07-02",
    dateLabel: "2 de julio de 2026",
    readMin: 9,
    datasets: 3,
    byline: "Redacción Politarca",
    excerpt:
      "Una ventanilla, trece oficinas y el tiempo como política pública no declarada.",
    illustration: "grid",
    image: "/photos/desk.jpg",
    body: [
      {
        type: "p",
        text: "El trámite no es el formulario. El trámite es la espera. Este texto sigue un permiso sectorial promedio a través de trece ventanillas y mide lo que el diseño institucional hace con el tiempo de quien pide autorización para producir.",
      },
      {
        type: "stat",
        value: "247 días",
        caption: "Mediana de días hábiles entre ingreso y primer pronunciamiento, muestra 2023-2025.",
        source: "Registros administrativos sectoriales · n = 4.102 expedientes.",
      },
      {
        type: "p",
        text: "No hay un villano. Hay una secuencia. Cada oficina cumple su mandato. El conjunto produce una política de racionamiento por demora que nadie votó y que pocos miden.",
      },
      {
        type: "methodology",
        paragraphs: [
          "Expedientes con fecha de ingreso y primer acto resolutivo en cuatro servicios. Medianas, no medias. Los casos judiciales se excluyen.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function featuredArticle() {
  return ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
}

export function otherArticles(slug?: string) {
  return ARTICLES.filter((a) => a.slug !== slug);
}

export const STANDARDS = [
  "Toda afirmación cuantitativa tiene fuente primaria o dataset propio.",
  "Preferimos series largas y comparaciones internacionales sobre anécdotas.",
  "Declaramos supuestos, márgenes de error y sesgos potenciales de los datos.",
  "No publicamos opinión sin anclarla a evidencia empírica.",
  "Las correcciones se publican de forma prominente y con fecha.",
  "Financiamiento y posibles conflictos de interés se declaran.",
];

export const NAV = [
  { to: "/investigaciones", label: "Investigaciones" },
  { to: "/gobernanza", label: "Gobernanza" },
  { to: "/datos", label: "Datos" },
  { to: "/nosotros", label: "Nosotros" },
] as const;
