export type SectionId =
  | "polis"
  | "erario"
  | "frontera"
  | "vida-comun"
  | "agora"
  | "biblioteca";

export type FormatId =
  | "pieza"
  | "ficha"
  | "contrapunto"
  | "numeros"
  | "carta"
  | "entrevista"
  | "archivo"
  | "ensayo";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "pullquote"; text: string }
  | { type: "stat"; value: string; caption: string; source: string }
  | { type: "chart"; id: "stock" | "hours" | "emitters" | "regions" }
  | { type: "methodology"; paragraphs: string[] };

export type Article = {
  slug: string;
  title: string;
  dek: string;
  section: SectionId;
  format: FormatId;
  rubric: string;
  country: string;
  date: string;
  dateLabel: string;
  readMin: number;
  byline: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  body: ArticleBlock[];
};

export type Section = {
  id: SectionId;
  path: "/polis" | "/erario" | "/frontera" | "/vida-comun" | "/agora" | "/biblioteca";
  name: string;
  kicker: string;
  dek: string;
};

export const SECTIONS: Section[] = [
  {
    id: "polis",
    path: "/polis",
    name: "La Polis",
    kicker: "El poder y sus instituciones",
    dek: "Cómo se toman las decisiones: quién las toma, con qué información, bajo qué presión.",
  },
  {
    id: "erario",
    path: "/erario",
    name: "El Erario",
    kicker: "La economía como decisión política",
    dek: "Quién paga, quién recibe, quién decide y con qué costo político.",
  },
  {
    id: "frontera",
    path: "/frontera",
    name: "Frontera",
    kicker: "Latinoamérica en el mundo",
    dek: "Geopolítica desde la región, no sobre la región.",
  },
  {
    id: "vida-comun",
    path: "/vida-comun",
    name: "Vida común",
    kicker: "Sociedad, costumbres, crónica",
    dek: "Personas, lugares, una semana. Lo que convierte a un medio en revista.",
  },
  {
    id: "agora",
    path: "/agora",
    name: "El Ágora",
    kicker: "Debate, contrapunto, cartas",
    dek: "El liberalismo como procedimiento, no como decorado.",
  },
  {
    id: "biblioteca",
    path: "/biblioteca",
    name: "Biblioteca",
    kicker: "Ideas, libros, historia intelectual",
    dek: "Baja frecuencia, alto prestigio. Una idea, cuatro semanas.",
  },
];

export const TAGLINE = "Quién manda, y qué queda.";

export const STOCK_SERIES = [
  { year: 2010, stock: 3810, rate: 92 },
  { year: 2014, stock: 4340, rate: 130 },
  { year: 2018, stock: 5020, rate: 275 },
  { year: 2021, stock: 5895, rate: 355 },
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
  { region: "Otras", share: 36, electoral: 0.27 },
];

export const ARTICLES: Article[] = [
  {
    slug: "hacienda-dijo-no",
    title: "Los 40 días en que Hacienda le dijo que no al Presidente",
    dek: "Chile. Entre marzo y abril, tres decretos de gasto volvieron a La Moneda sin firma. Reconstruimos las reuniones, los números y el costo político de un ministerio que decidió ser el freno.",
    section: "polis",
    format: "pieza",
    rubric: "La Polis",
    country: "Chile",
    date: "2026-08-23",
    dateLabel: "23 de agosto de 2026",
    readMin: 16,
    byline: "Redacción Politarca",
    excerpt:
      "Chile. Tres decretos volvieron sin firma. Hacienda eligió ser el freno. El Presidente, el costo.",
    image: "/photos/congress-santiago.jpg",
    featured: true,
    body: [
      {
        type: "p",
        text: "El sobre llegó a las 19:40 a un piso de Teatinos, en Santiago. No era un sobre: era un correo con tres archivos adjuntos y un renglón que el jefe de gabinete leyó dos veces. «Devuelto a firma de origen. Sin cobertura». En Chile nadie discutió el adjetivo. Discutieron el reloj. Faltaban once días para el primer Consejo de Gabinete en que el Presidente quería anunciar obra.",
      },
      {
        type: "p",
        text: "José Antonio Kast asumió el 11 de marzo. La campaña había prometido velocidad. El Ministerio de Hacienda, en cambio, prometió aritmética. Durante cuarenta días esas dos promesas no cupieron en el mismo decreto.",
      },
      {
        type: "stat",
        value: "3",
        caption: "Decretos de gasto devueltos sin firma entre el 18 de marzo y el 27 de abril de 2026.",
        source: "Registro de partidas y actas de comité de caja. Criterio: iniciativas con cargo a gasto corriente no contemplado en la Ley de Presupuestos 2026.",
      },
      {
        type: "h2",
        text: "El freno no es una ideología. Es una planilla.",
      },
      {
        type: "p",
        text: "La conversación que importa no ocurrió en cadena nacional. Ocurrió un martes, en una sala sin ventanas, con el director de Presupuestos y dos asesores que no aparecen en el organigrama público. Sobre la mesa: una ficha de una página. Arriba, el nombre del programa. Abajo, dos columnas. La de la izquierda decía «anuncio». La de la derecha, «caja». La diferencia era de 184 mil millones de pesos.",
      },
      {
        type: "pullquote",
        text: "Un Estado que no puede decir que no no es un Estado liberal. Es un Estado que firma y después improvisa.",
      },
      {
        type: "p",
        text: "El argumento de Hacienda no fue doctrinal. Fue de capacidad. Chile no tiene un problema de escasez de promesas. Tiene un problema de ejecución: programas que se anuncian, se presupuestan a medias y se diluyen en transferencias. El ministerio eligió pelear esa pelea en las primeras seis semanas, cuando el costo político de un «no» todavía se puede absorber. Más tarde, el «no» se vuelve crisis.",
      },
      {
        type: "p",
        text: "Fuentes de ambos pisos —nombradas en off, documentadas en on— coinciden en el método: cada iniciativa nueva debía traer fuente de financiamiento, no un deseo. Dos de los tres decretos reaparecieron en mayo con recorte. El tercero no reapareció.",
      },
      {
        type: "h2",
        text: "La prueba de la casa",
      },
      {
        type: "p",
        text: "La derecha latinoamericana ganó el poder antes de ganar el argumento. El argumento, en este caso, no es si el Estado debe ser chico. Es si el Estado puede decir que no a los propios. Un medio liberal que solo audita al adversario no es liberal. Este texto empieza por casa.",
      },
      {
        type: "methodology",
        paragraphs: [
          "Reconstrucción a partir de actas de comité de caja, partidas presupuestarias 2026 y entrevistas con seis funcionarios de Hacienda y La Moneda, tres de ellos autorizados a ser citados por cargo.",
          "Los montos se expresan en pesos de 2026. No se atribuyen intenciones que las fuentes no sostengan.",
        ],
      },
    ],
  },
  {
    slug: "ajuste-argentino-2027",
    title: "Los cuatro números que decidirán si el ajuste argentino sobrevive a 2027",
    dek: "Argentina. Tercer año de Milei. El laboratorio del ajuste entra en su fase política: salario real, recaudación, riesgo país y calendario electoral. Sin adjetivos.",
    section: "erario",
    format: "pieza",
    rubric: "El Erario",
    country: "Argentina",
    date: "2026-08-21",
    dateLabel: "21 de agosto de 2026",
    readMin: 14,
    byline: "Equipo de El Erario",
    excerpt:
      "Argentina. Salario real, recaudación, riesgo país y calendario. Cuatro números, una elección.",
    image: "/photos/office.jpg",
    body: [
      {
        type: "p",
        text: "En Buenos Aires se discute el relato. En las planillas se discute otra cosa. El gobierno de Javier Milei entra a su tercer año con el superávit como credencial y con 2027 como reloj. Lo que decide no es el aplauso de los mercados en 2024. Son cuatro series que, si se tuercen a la vez, no hay relato que las sostenga.",
      },
      {
        type: "stat",
        value: "4",
        caption: "Variables de control: salario real, recaudación tributaria en términos constantes, riesgo país y fecha efectiva de la campaña presidencial.",
        source: "INDEC, AFIP, EMBI. Series deflactadas.",
      },
      {
        type: "h2",
        text: "La honestidad brutal es la credencial",
      },
      {
        type: "p",
        text: "Estabilizar una economía cuesta empleo, salario y elecciones. Un medio liberal que esconda esa cuenta no es liberal: es propaganda con gráfico. El ajuste argentino se sostiene si el salario real deja de ser la variable de ajuste y pasa a ser el dividendo. Todavía no lo es de forma inequívoca.",
      },
      {
        type: "chart",
        id: "hours",
      },
      {
        type: "p",
        text: "La recaudación —no el recorte del gasto— es el número que los ministros de Hacienda miran cuando cierran la puerta. Un superávit construido sobre una economía que no crece es un superávit de un año. El riesgo país, a su vez, no es un premio moral: es el precio de no poder mentir en dólares.",
      },
      {
        type: "pullquote",
        text: "El problema no es el tamaño del Estado. Es si cobra, si encarcela y si construye. Un Estado chico que no hace las tres no es un logro. Es un fallo.",
      },
      {
        type: "p",
        text: "El cuarto número no está en el INDEC. Está en el calendario. La campaña de 2027 empieza cuando el salario deje de ser una anécdota de asado. Si esa fecha llega antes de que las otras tres series giren, el laboratorio se convierte en una elección.",
      },
      {
        type: "methodology",
        paragraphs: [
          "Series públicas de INDEC y AFIP. El gráfico de horas de cumplimiento se usa aquí como proxy de carga sobre formales — no como índice de pobreza. Limitación declarada.",
        ],
      },
    ],
  },
  {
    slug: "puerto-chino-pacifico",
    title: "El puerto chino que cambió el mapa del Pacífico sur",
    dek: "Perú. Chancay, un contrato y una contradicción: mercado abierto con un socio que no es liberal. Carta desde el litoral.",
    section: "frontera",
    format: "carta",
    rubric: "Carta desde el Pacífico",
    country: "Perú",
    date: "2026-08-18",
    dateLabel: "18 de agosto de 2026",
    readMin: 12,
    byline: "Corresponsalía Politarca",
    excerpt: "Perú. Chancay, un contrato y la contradicción china del liberalismo latinoamericano.",
    image: "/photos/archive.jpg",
    body: [
      {
        type: "p",
        text: "En Chancay, al norte de Lima, el piloto de práctico señaló el horizonte como si fuera un documento. «Ahí», dijo. No había nada que un turista reconociera como poder. Había grúas, una concesión china y un calendario de naves que ya no pasa por el mismo escritorio que hace diez años.",
      },
      {
        type: "p",
        text: "Latinoamérica discute a China como ideología. El Pacífico sur la discute como logística. Puertos, litio, 5G, votos en la ONU. El liberalismo de la región tiene aquí su contradicción más fértil: quiere mercado abierto y un socio que no es liberal.",
      },
      {
        type: "pullquote",
        text: "La región no es un tablero. Es un sujeto que firma contratos y después finge que no los leyó.",
      },
      {
        type: "p",
        text: "En Santiago, Lima y Canberra se habla de «diversificación». En el muelle se habla de calado, de tiempos de descarga y de quién asegura la grúa. La geopolítica que importa cabe en una hoja de flete.",
      },
      {
        type: "p",
        text: "Esta carta no pide un embargo ni un abrazo. Pide un inventario: qué se concesionó, a quién, por cuántos años, y qué cláusula de salida existe cuando el socio deja de ser conveniente. Un Estado capaz lee el contrato. Un Estado vanidoso hace un discurso.",
      },
    ],
  },
  {
    slug: "ultima-mina-carbon",
    title: "La última mina de carbón de Chile cierra el viernes. Fuimos el jueves.",
    dek: "Chile. Un pueblo, un turno de noche y el fin de una economía que el discurso climático ya había dado por muerta.",
    section: "vida-comun",
    format: "carta",
    rubric: "Vida común",
    country: "Chile",
    date: "2026-08-16",
    dateLabel: "16 de agosto de 2026",
    readMin: 15,
    byline: "Crónica Politarca",
    excerpt: "Chile. Un pueblo, un turno de noche y el cierre que el discurso ya había celebrado.",
    image: "/photos/desk.jpg",
    body: [
      {
        type: "p",
        text: "El casco estaba rayado con un apellido. El hombre que lo llevaba no quería foto. Quería saber si «ustedes van a escribir que esto era inevitable». Era jueves. El viernes la mina cerraba. La pregunta no era geológica.",
      },
      {
        type: "p",
        text: "Chile se despidió del carbón en comunicados mucho antes de despedirse en el mesón. El comunicado es limpio. El mesón tiene termos, una radio y una lista de nombres que el mercado laboral de la región no va a absorber con un curso de recapacitación.",
      },
      {
        type: "pullquote",
        text: "La transición energética también es una política de clase. Se nota el jueves, no en la COP.",
      },
      {
        type: "p",
        text: "Esta crónica no milita el carbón ni su funeral. Se queda una noche, cuenta el turno y deja el adjetivo para el lector. Un medio de centroderecha que no puede mirar a un pueblo minero sin un slogan no merece la sección.",
      },
      {
        type: "p",
        text: "A las cinco de la mañana el último camión salió con menos prisa de la que el titular va a sugerir. Alguien dijo «igual venían avisando». Alguien más no dijo nada. Eso también es política.",
      },
    ],
  },
  {
    slug: "contrapunto-ciclo-derecha",
    title: "¿Es Brasil el fin del ciclo de derecha o su consagración?",
    dek: "Brasil. El 4 de octubre vota el país que ordena la región. Dos firmas, una pregunta, el mismo cierre.",
    section: "agora",
    format: "contrapunto",
    rubric: "El Contrapunto",
    country: "Brasil",
    date: "2026-08-14",
    dateLabel: "14 de agosto de 2026",
    readMin: 11,
    byline: "El Ágora",
    excerpt: "Dos firmas. Una pregunta. Brasil vota el 4 de octubre.",
    image: "/photos/lawbooks.jpg",
    body: [
      {
        type: "p",
        text: "Brasil vota el 4 de octubre. Un eventual balotaje, el 25. Lula frente a Flávio Bolsonaro. El resto del continente finge que es una noticia extranjera. No lo es. Es el único evento del año que le importa a toda la región al mismo tiempo.",
      },
      {
        type: "h2",
        text: "A. El ciclo se cierra",
      },
      {
        type: "p",
        text: "La ola de derecha fue una corrección, no un régimen. Gobernó el enojo con la inflación, el crimen y la pedagogía moral de la izquierda. No gobernó una idea de Estado. Sin esa idea, el voto vuelve al que prometa alivio. Brasil, si reordena el mapa, no mata al liberalismo: revela que el liberalismo todavía no se presentó a la elección como programa, solo como humor.",
      },
      {
        type: "h2",
        text: "B. El ciclo se consagra",
      },
      {
        type: "p",
        text: "Al contrario: el dato no es Brasil. El dato es que Argentina, Chile, Colombia, Perú y Costa Rica ya cruzaron. Un país no deshace cinco. La pregunta liberal no es si la derecha «gana». Es qué hace con el poder cuando el adversario ya no es el pretexto. Si Brasil confirma la corrección, el pretexto se acaba.",
      },
      {
        type: "pullquote",
        text: "Se cita al adversario en su mejor versión. Si no se reconoce, está mal descrito.",
      },
      {
        type: "p",
        text: "Las dos firmas se publican juntas. Ninguna tiene la última palabra. El lector, sí.",
      },
    ],
  },
  {
    slug: "alberdi-libertarios",
    title: "Alberdi contra los libertarios",
    dek: "Argentina. El liberalismo latinoamericano tiene historia y casi nadie la cuenta. Una relectura de Bases para un gobierno que llegó antes que el argumento.",
    section: "biblioteca",
    format: "ensayo",
    rubric: "El Ensayo",
    country: "Argentina",
    date: "2026-08-09",
    dateLabel: "9 de agosto de 2026",
    readMin: 18,
    byline: "Biblioteca Politarca",
    excerpt: "Argentina. El siglo XIX ya había escrito el manual. El siglo XXI lo cita mal.",
    image: "/photos/library.jpg",
    body: [
      {
        type: "p",
        text: "Juan Bautista Alberdi no es un sticker. Es un abogado argentino que escribió para un país que no existía todavía y que desconfiaba del caudillo con la misma energía con que desconfiaba del sermón. Leerlo hoy, en una región donde la derecha acaba de ganar, produce un efecto incómodo: el texto no aplaude. Exige.",
      },
      {
        type: "p",
        text: "Bases y puntos de partida para la organización política de la República Argentina no es un himno al mercado. Es un manual de instituciones: inmigración, educación, crédito, la Constitución como tecnología. El libertario de 2026 cita la libertad. Alberdi cita la administración.",
      },
      {
        type: "pullquote",
        text: "Gobernar no es un mood. Es una capacidad. Alberdi lo sabía; el sticker, no.",
      },
      {
        type: "h2",
        text: "La vetada intelectual",
      },
      {
        type: "p",
        text: "La distinción más fértil de la región —y la menos trabajada— es esta: el problema no es el tamaño del Estado, es su capacidad. Un Estado que no cobra, no encarcela y no construye no es un logro liberal. Alberdi habría reconocido el diagnóstico. Habría detestado el disfraz.",
      },
      {
        type: "p",
        text: "Este ensayo no pide una reliquia. Pide un estándar. El liberalismo no es una facción. Es una vara que se aplica a Milei y a Lula, a Kast y a Petro. Quien solo la aplique al adversario no está leyendo a Alberdi. Está buscando un santo.",
      },
      {
        type: "p",
        text: "Hay una línea de Lastarria a Vargas Llosa que el medio regional ha dejado en la estantería. Politarca la saca. No para venerarla. Para discutirla con dureza, que es la única forma liberal de tener padres.",
      },
    ],
  },
  {
    slug: "ficha-nariño",
    title: "El hombre que le escribe los decretos a De La Espriella",
    dek: "Colombia. No sale en la foto. Firma en el margen. La Ficha de la semana, desde Bogotá.",
    section: "polis",
    format: "ficha",
    rubric: "La Ficha",
    country: "Colombia",
    date: "2026-08-12",
    dateLabel: "12 de agosto de 2026",
    readMin: 8,
    byline: "La Polis",
    excerpt: "Colombia. Cargo, trayectoria, quién le debe favores. El poder que no sale en la foto.",
    image: "/photos/gavel.jpg",
    body: [
      {
        type: "p",
        text: "Abelardo De La Espriella asumió el 7 de agosto en Colombia. En la foto del traspaso, en Casa de Nariño, hay ministros. En el margen de los primeros decretos hay un nombre que el cable no cita. Esta ficha es ese margen.",
      },
      {
        type: "p",
        text: "No publicamos un perfil de celebridad. Publicamos un organigrama con sangre: de dónde viene, qué estudió, a quién asciende, quién le debe un favor y qué oficina realmente escribe el texto que el Presidente lee como propio.",
      },
      {
        type: "stat",
        value: "11",
        caption: "Días entre la asunción y el primer paquete de decretos con su rúbrica de visto bueno interno.",
        source: "Diario Oficial colombiano · organigrama de Presidencia.",
      },
      {
        type: "p",
        text: "La política se explica por gente, no por ideología. La ideología llega después, como interpretación de un memo. Si el medio cubre solo al que sale en la foto, está cubriendo teatro.",
      },
    ],
  },
  {
    slug: "impuesto-clase-media",
    title: "El impuesto que nadie discute y que paga toda la clase media",
    dek: "Chile. No está en la ley de copete. Está en la tarifa, en el IVA y en el tiempo. Números que mandan.",
    section: "erario",
    format: "numeros",
    rubric: "Números que mandan",
    country: "Chile",
    date: "2026-08-15",
    dateLabel: "15 de agosto de 2026",
    readMin: 6,
    byline: "El Erario",
    excerpt: "Chile. Una cifra, un gráfico, cuatrocientas palabras. El impuesto escondido.",
    image: "/photos/contracts.jpg",
    body: [
      {
        type: "p",
        text: "En Chile, la clase media no discute el impuesto a la renta con el fervor con que discute el precio del transporte. Debería. Una parte creciente de su carga no aparece como impuesto: aparece como tarifa, como IVA encadenado, como hora perdida en un trámite que el formal no puede evitar y el informal sí.",
      },
      {
        type: "chart",
        id: "hours",
      },
      {
        type: "stat",
        value: "312",
        caption: "Horas anuales de cumplimiento para una pyme mediana formal, 2024. El informal no las paga: las transfiere.",
        source: "Encuesta de carga · n = 1.247.",
      },
      {
        type: "p",
        text: "El sesgo liberal aquí no es un adjetivo. Es una cuenta: la formalidad es un impuesto a los que cumplen. Mientras el Estado sea incapaz de cobrarle al que no está, el que está paga dos veces. Eso no es izquierda ni derecha. Es un diseño.",
      },
    ],
  },
];

export type PromiseStatus = "cumplida" | "tramite" | "pendiente" | "abandonada";

export const TRACKER = [
  {
    country: "Chile",
    leader: "José Antonio Kast",
    since: "11 de marzo de 2026",
    note: "Base de operaciones. El caso más observado de la región.",
    items: [
      { promise: "Disciplina fiscal en el primer año", status: "tramite" as PromiseStatus, update: "Hacienda devolvió tres decretos sin cobertura." },
      { promise: "Agenda de seguridad con foco en crimen organizado", status: "tramite" as PromiseStatus, update: "Cartera nombrada; indicadores, pendientes de serie comparable." },
      { promise: "Revisión de permisos sectoriales", status: "pendiente" as PromiseStatus, update: "Sin proyecto ingresado al Congreso al cierre de esta edición." },
    ],
  },
  {
    country: "Argentina",
    leader: "Javier Milei",
    since: "10 de diciembre de 2023",
    note: "Tercer año. Laboratorio del ajuste. Presidenciales en 2027.",
    items: [
      { promise: "Equilibrio fiscal", status: "tramite" as PromiseStatus, update: "Superávit como credencial; sostenibilidad, en disputa." },
      { promise: "Desinflación persistente", status: "tramite" as PromiseStatus, update: "La serie bajó; el salario real aún no es dividendo." },
      { promise: "Reforma laboral amplia", status: "pendiente" as PromiseStatus, update: "El Congreso no entregó el paquete completo." },
    ],
  },
  {
    country: "Colombia",
    leader: "Abelardo De La Espriella",
    since: "7 de agosto de 2026",
    note: "Gobierno nuevo: el mejor momento para instalar el tracker.",
    items: [
      { promise: "Orden en las rutas del crimen", status: "pendiente" as PromiseStatus, update: "Once días de gestión al cierre. Sin serie." },
      { promise: "Regla fiscal explícita", status: "pendiente" as PromiseStatus, update: "Anuncio de campaña; no hay ley." },
    ],
  },
  {
    country: "Perú",
    leader: "Keiko Fujimori",
    since: "28 de julio de 2026",
    note: "Margen mínimo en junio. Gobernabilidad frágil.",
    items: [
      { promise: "Estabilidad ministerial", status: "tramite" as PromiseStatus, update: "El margen electoral es el dato; el gabinete, la prueba." },
      { promise: "Desbloqueo de inversión minera", status: "pendiente" as PromiseStatus, update: "Sin decreto marco publicado." },
    ],
  },
  {
    country: "Costa Rica",
    leader: "Laura Fernández",
    since: "8 de mayo de 2026",
    note: "Contrapeso centroamericano. 48,53 % en primera vuelta.",
    items: [
      { promise: "Agenda de crecimiento sin aventura fiscal", status: "tramite" as PromiseStatus, update: "Primer presupuesto en discusión." },
    ],
  },
];

export const STANDARDS = [
  "Ningún texto empieza con contexto. Empieza con una persona, una escena o un número que incomode.",
  "Todo dato lleva fuente verificable. Si no se puede verificar, no se publica.",
  "La opinión va después del reporteo, nunca en su lugar.",
  "Se cita al adversario en su mejor versión.",
  "Cero adjetivos ideológicos. Se describe la conducta y el lector califica.",
  "Nombres propios siempre. Un texto solo con anónimos no se publica.",
  "Los errores se corrigen arriba, no abajo. Nota fechada y firmada.",
  "Conflictos de interés declarados en el pie de cada pieza.",
  "Ni una sola pieza de portada escrita solo desde el escritorio.",
  "Si el titular promete más que el texto, se cambia el titular.",
];

export const NAV = SECTIONS.map((s) => ({ to: s.path, label: s.name }));

export function getSection(id: SectionId) {
  return SECTIONS.find((s) => s.id === id)!;
}

export function storyKicker(article: Article) {
  return `${article.country} · ${article.rubric}`;
}

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesBySection(id: SectionId) {
  return ARTICLES.filter((a) => a.section === id);
}

export function featuredArticle() {
  return ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
}

export function otherArticles(slug?: string) {
  return ARTICLES.filter((a) => a.slug !== slug);
}
