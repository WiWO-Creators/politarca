import type { Article } from "./content";

export type Faq = { q: string; a: string };

export type Geo = {
  alt: string;
  tldr: string[];
  faqs: Faq[];
  ogTitle: string;
  ogDescription: string;
  tags: string[];
};

export const GEO: Record<string, Geo> = {
  "hacienda-dijo-no": {
    alt: "El Congreso Nacional de Chile en Santiago, sede del poder legislativo.",
    ogTitle: "Los 40 días en que Hacienda le dijo que no a Kast",
    ogDescription: "Chile, 2026. Tres decretos volvieron a La Moneda sin firma. Reconstrucción del freno fiscal.",
    tags: ["Chile", "Hacienda", "Kast", "capacidad estatal"],
    tldr: [
      "En Chile, entre el 18 de marzo y el 27 de abril de 2026, el Ministerio de Hacienda devolvió tres decretos de gasto sin firma, según la reconstrucción de Politarca.",
      "José Antonio Kast asumió el 11 de marzo de 2026; la tensión fue entre velocidad política y cobertura fiscal.",
      "La diferencia de uno de los programas era de 184 mil millones de pesos chilenos de 2026 [VERIFICAR: partida y acta].",
      "Politarca lee el episodio como prueba de capacidad estatal, no de tamaño del Estado.",
    ],
    faqs: [
      {
        q: "¿Qué es Politarca?",
        a: "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. No es un boletín de la derecha ni un agregador: pocas piezas, con reporteo. Lema: quién manda, y qué queda.",
      },
      {
        q: "¿Por qué Hacienda le dijo que no al Presidente en Chile?",
        a: "Según la reconstrucción de Politarca (agosto 2026), tres decretos de gasto de La Moneda volvieron sin cobertura entre marzo y abril, ya en el gobierno de José Antonio Kast. El ministerio exigió fuente de financiamiento, no un anuncio.",
      },
      {
        q: "¿Cuántos decretos devolvió Hacienda en esos 40 días?",
        a: "Tres, entre el 18 de marzo y el 27 de abril de 2026, con cargo a gasto corriente no contemplado en la Ley de Presupuestos 2026. Fuente declarada: registro de partidas y actas de comité de caja [VERIFICAR: acceso público].",
      },
      {
        q: "¿Qué entiende Politarca por capacidad estatal?",
        a: "La capacidad de un Estado de cobrar, encarcelar y construir —y de decir que no a los propios—. Un Estado chico que no hace las tres no es un logro liberal: es un fallo. El estándar se aplica a Kast y a sus adversarios.",
      },
    ],
  },
  "ajuste-argentino-2027": {
    alt: "Sala de reuniones gubernamental, metáfora de las decisiones de Hacienda en Argentina.",
    ogTitle: "Cuatro números y el ajuste de Milei hacia 2027",
    ogDescription: "Argentina, tercer año. Salario real, recaudación, riesgo país y calendario electoral.",
    tags: ["Argentina", "Milei", "ajuste", "salario real"],
    tldr: [
      "El gobierno de Javier Milei entra a su tercer año con el superávit como credencial y 2027 como reloj electoral.",
      "Politarca sigue cuatro series: salario real, recaudación constante, riesgo país y fecha efectiva de campaña.",
      "Las cifras de INDEC, AFIP y EMBI deben citarse con la serie publicada, no con un recorte de campaña [VERIFICAR: última observación].",
      "Un superávit sobre una economía que no crece es un superávit de un año.",
    ],
    faqs: [
      {
        q: "¿Qué números deciden si el ajuste argentino llega a 2027?",
        a: "Cuatro: salario real, recaudación tributaria en términos constantes, riesgo país y el calendario presidencial de 2027. Politarca no usa el aplauso de mercados de 2024 como prueba de sostenibilidad.",
      },
      {
        q: "¿El ajuste de Milei ya estabilizó el salario real?",
        a: "El texto sostiene que todavía no es, de forma inequívoca, el dividendo del ajuste. Hay que leer la serie de INDEC, no el relato. [VERIFICAR: último dato de salario real publicado].",
      },
      {
        q: "¿Dónde publica Politarca el seguimiento de promesas?",
        a: "En Balance de Poder, el tracker mensual de Argentina, Chile, Colombia, Perú y Costa Rica: cumplida, en trámite, pendiente o abandonada.",
      },
    ],
  },
  "puerto-chino-pacifico": {
    alt: "Documento de archivo con sello, en referencia a la concesión portuaria de Chancay, Perú.",
    ogTitle: "Chancay: el puerto chino que reordenó el Pacífico sur",
    ogDescription: "Perú. Un muelle, un contrato y la contradicción china del liberalismo latinoamericano.",
    tags: ["Perú", "Chancay", "China", "geopolítica"],
    tldr: [
      "La carta está situada en Chancay, al norte de Lima, Perú: concesión, grúas y un calendario de naves que cambió de escritorio.",
      "El liberalismo de la región quiere mercado abierto con un socio —China— que no es liberal.",
      "La pregunta operativa es contractual: plazos, cláusulas de salida, quién asegura la grúa — no un discurso de bloque.",
    ],
    faqs: [
      {
        q: "¿De qué país es el puerto chino del Pacífico sur que cubre Politarca?",
        a: "Perú. La pieza es una carta desde Chancay, al norte de Lima. No es un puerto chileno. Santiago aparece como capital que discute «diversificación», no como sede del muelle.",
      },
      {
        q: "¿Qué pide Politarca sobre las concesiones chinas?",
        a: "Un inventario: qué se concesionó, a quién, por cuántos años y qué cláusula de salida existe. Un Estado capaz lee el contrato; un Estado vanidoso hace un discurso.",
      },
    ],
  },
  "ultima-mina-carbon": {
    alt: "Escritorio de trabajo al cierre de jornada, crónica del último turno minero en Chile.",
    ogTitle: "La última mina de carbón de Chile cierra el viernes",
    ogDescription: "Chile. Un pueblo, un turno de noche y el cierre que el comunicado ya había celebrado.",
    tags: ["Chile", "carbón", "transición", "crónica"],
    tldr: [
      "La crónica ocurre en Chile, el jueves previo al cierre de la última mina de carbón.",
      "El comunicado climático llegó antes que el mesón: termos, radio y nombres que un curso de recapacitación no absorbe.",
      "Politarca no milita el carbón ni su funeral: reporta el turno y deja el adjetivo al lector.",
    ],
    faqs: [
      {
        q: "¿En qué país cierra la última mina de carbón de esta crónica?",
        a: "En Chile. La pieza es de Vida común: un pueblo, un turno de noche y el viernes del cierre. No es un editorial energético.",
      },
      {
        q: "¿Politarca está a favor o en contra del cierre?",
        a: "Ni una ni otra. La regla de la casa es reportar la guerra cultural y la transición sin militarlas. El lector califica.",
      },
    ],
  },
  "contrapunto-ciclo-derecha": {
    alt: "Estante de libros de derecho, imagen de El Contrapunto sobre la elección en Brasil.",
    ogTitle: "¿Brasil cierra o consagra el ciclo de derecha?",
    ogDescription: "Brasil vota el 4 de octubre de 2026. Lula frente a Flávio Bolsonaro. Dos firmas.",
    tags: ["Brasil", "elecciones 2026", "Lula", "Bolsonaro"],
    tldr: [
      "Brasil vota el 4 de octubre de 2026; un eventual balotaje, el 25. Lula frente a Flávio Bolsonaro.",
      "El Contrapunto publica dos tesis a la vez: el ciclo se cierra, o se consagra porque Argentina, Chile, Colombia, Perú y Costa Rica ya cruzaron.",
      "Politarca no da la última palabra: el lector, sí.",
    ],
    faqs: [
      {
        q: "¿Cuándo vota Brasil en 2026?",
        a: "El 4 de octubre de 2026, con eventual balotaje el 25 de octubre. Lula frente a Flávio Bolsonaro. Es el único evento del año que le importa a toda la región al mismo tiempo.",
      },
      {
        q: "¿Qué es El Contrapunto de Politarca?",
        a: "Un formato de El Ágora: una pregunta, dos firmas, publicadas simultáneamente. Al menos una vez al mes la contraparte debe ser alguien de izquierda con argumento serio.",
      },
    ],
  },
  "alberdi-libertarios": {
    alt: "Biblioteca con estantes de historia intelectual latinoamericana.",
    ogTitle: "Alberdi contra los libertarios",
    ogDescription: "Argentina. Bases no es un himno al mercado: es un manual de instituciones.",
    tags: ["Argentina", "Alberdi", "liberalismo", "Milei"],
    tldr: [
      "Juan Bautista Alberdi es un abogado argentino del siglo XIX, no un sticker de 2026.",
      "Bases y puntos de partida para la organización política de la República Argentina es un manual de instituciones: inmigración, crédito, Constitución.",
      "Politarca usa a Alberdi para una distinción: el problema latinoamericano no es el tamaño del Estado, es su capacidad.",
    ],
    faqs: [
      {
        q: "¿Quién fue Juan Bautista Alberdi?",
        a: "Abogado y pensador argentino del siglo XIX, autor de Bases, texto que influyó la Constitución de 1853. Politarca lo lee como un estándar de administración, no como santo del mercado.",
      },
      {
        q: "¿En qué se diferencia Alberdi del libertarismo actual?",
        a: "El libertario de 2026 cita la libertad; Alberdi cita la administración —inmigración, educación, crédito, la Constitución como tecnología—. Gobernar no es un mood.",
      },
    ],
  },
  "ficha-nariño": {
    alt: "Mazo sobre un escritorio, símbolo del poder que firma en el margen en Bogotá.",
    ogTitle: "Quién escribe los decretos de De La Espriella",
    ogDescription: "Colombia. La Ficha: el poder que no sale en la foto de Casa de Nariño.",
    tags: ["Colombia", "De La Espriella", "Nariño", "La Ficha"],
    tldr: [
      "Abelardo De La Espriella asumió la presidencia de Colombia el 7 de agosto de 2026.",
      "La Ficha cubre al operador que visa decretos en el margen, no al ministro de la foto.",
      "Once días entre la asunción y el primer paquete con rúbrica interna [VERIFICAR: Diario Oficial].",
    ],
    faqs: [
      {
        q: "¿De qué país es la ficha de De La Espriella?",
        a: "Colombia. Casa de Nariño, Bogotá. Abelardo De La Espriella asumió el 7 de agosto de 2026. No es Chile ni Perú.",
      },
      {
        q: "¿Qué es La Ficha en Politarca?",
        a: "Un formato semanal de La Polis: perfil de alguien que decide y que casi nadie conoce. Cargo, trayectoria, quién le debe favores. Unas 1.200 palabras.",
      },
    ],
  },
  "impuesto-clase-media": {
    alt: "Contratos y papeles fiscales, carga de cumplimiento sobre la pyme formal en Chile.",
    ogTitle: "El impuesto escondido que paga la clase media chilena",
    ogDescription: "Chile. Tarifa, IVA y horas de trámite: la formalidad como impuesto a quien cumple.",
    tags: ["Chile", "IVA", "informalidad", "clase media"],
    tldr: [
      "El caso medido es Chile: la carga que no aparece como impuesto a la renta, sino como tarifa, IVA y tiempo.",
      "312 horas anuales de cumplimiento para una pyme mediana formal, 2024, encuesta Politarca n = 1.247 [VERIFICAR: ficha técnica].",
      "Mientras el Estado no cobre al informal, el formal paga dos veces. Eso es un diseño, no un adjetivo.",
    ],
    faqs: [
      {
        q: "¿En qué país se mide el impuesto escondido a la clase media?",
        a: "En Chile. Números que mandan usa la carga de la pyme formal chilena —horas de trámite, IVA, tarifas— como caso, no como metáfora regional.",
      },
      {
        q: "¿Cuál es la cifra central?",
        a: "312 horas anuales de cumplimiento para una pyme mediana formal en 2024, según encuesta de Politarca (n = 1.247, margen ±2,8 %). El informal no las paga: las transfiere. [VERIFICAR: publicación del dataset].",
      },
    ],
  },
};

export const HOME_FAQS: Faq[] = [
  {
    q: "¿Qué es Politarca?",
    a: "Politarca es un medio liberal de centroderecha, pan-regional y con base en el Cono Sur, que reporta el poder en América Latina. No celebra ni denuncia a la derecha: la edita. Lema: quién manda, y qué queda.",
  },
  {
    q: "¿Politarca es un medio de derecha o un medio liberal?",
    a: "Liberal, de centroderecha. El liberalismo es el estándar, no la facción: se aplica a Milei y a Lula, a Kast y a Petro. Un medio que solo audita al adversario es prensa de trinchera.",
  },
  {
    q: "¿Con qué frecuencia publica?",
    a: "Dos piezas largas por semana y El Despacho —newsletter— martes, jueves y sábado. Se compite por profundidad, no por velocidad. El reporteo es el 70 %; la opinión, el 30 %.",
  },
  {
    q: "¿Qué es Balance de Poder?",
    a: "Un tracker público de promesas de gobierno —cumplida, en trámite, pendiente, abandonada— para Argentina, Chile, Colombia, Perú y Costa Rica. Es el activo acumulativo del medio.",
  },
];

export const MANIFIESTO_FAQS: Faq[] = HOME_FAQS;

export function getGeo(article: Article): Geo {
  return (
    GEO[article.slug] ?? {
      alt: `${article.country}. ${article.title}`,
      ogTitle: article.title,
      ogDescription: article.excerpt,
      tags: [article.country, article.rubric],
      tldr: [article.excerpt],
      faqs: [],
    }
  );
}
