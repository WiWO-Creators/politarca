import type { WiwoSiteArticle } from "@wiwo/contract";

/**
 * Responsabilidad: el archivo editorial del sitio.
 * Usado por: lib/content.ts, que lo expone como ARTICLES.
 * NO hace: no traduce ni ordena. El orden en que están escritas es el orden
 *   editorial, y lib/articles.ts lo respeta.
 *
 * Las piezas se guardan en la forma del CONTRATO, no en un modelo propio. Es lo
 * que hace que no haga falta un adaptador de ida y otro de vuelta: lo que el
 * sitio muestra y lo que le entrega al orquestador son el mismo dato. Lo propio
 * de politarca —el formato, la rúbrica, el país— vive en `extra`, que es
 * exactamente para eso.
 *
 * El cuerpo va en bloques. Antes era Markdown en una cadena, y el sitio lo
 * partía al dibujar; ahora está partido de una vez, con el mismo criterio. El
 * Markdown EN LÍNEA —negrita, cursiva— sigue dentro del texto de cada bloque.
 */
export const BANCO: WiwoSiteArticle[] = [
  {
    "id": "el-estado-que-no-existe",
    "title": "El Estado que no existe",
    "summary": "La derecha latinoamericana llegó al poder discutiendo el tamaño del Estado. El problema nunca fue ese.",
    "section": {
      "id": "biblioteca",
      "label": "Biblioteca"
    },
    "author": {
      "name": "Biblioteca Politarca"
    },
    "publishedAt": "2026-08-24",
    "updatedAt": "2026-08-24",
    "readingMinutes": 9,
    "image": {
      "url": "/photos/plates/el-estado-que-no-existe.jpg",
      "alt": "Biblioteca con estantes de historia intelectual. El Ensayo de Politarca sobre capacidad estatal."
    },
    "tags": [
      "capacidad estatal",
      "América Latina",
      "Alberdi",
      "Banco Mundial"
    ],
    "featured": true,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Un empresario que hoy quiera cobrar una factura impaga ante un tribunal comercial en América Latina esperará, en promedio, setecientos setenta y cuatro días. En Corea del Sur esperará doscientos noventa. La diferencia no es de matiz: es la diferencia entre un país donde un contrato significa algo y uno donde significa una intención."
        },
        {
          "type": "paragraph",
          "text": "Corea del Sur recauda el 25,3% de su producto en impuestos. América Latina recauda el 21,7%. La distancia entre ambos es de menos de cuatro puntos, un margen que en cualquier debate presupuestario latinoamericano se resolvería en una tarde. Corea emplea al 8,6% de su fuerza laboral en el gobierno general; Chile, al 8,5%; México, al 13,6%. En la escala que la política latinoamericana pasó quince años discutiendo —¿Estado grande o Estado chico?— Corea del Sur no es un caso interesante. Está prácticamente donde estamos nosotros."
        },
        {
          "type": "paragraph",
          "text": "Y sin embargo resuelve un litigio comercial dos veces y media más rápido, y su administración pública obtiene, en el índice de eficacia gubernamental del Banco Mundial, medio punto de desviación estándar más que Chile, que es el mejor de la región."
        },
        {
          "type": "paragraph",
          "text": "Ese es el hecho que la derecha latinoamericana ganó el poder sin haber discutido."
        },
        {
          "type": "heading",
          "text": "I. La pregunta mal formulada"
        },
        {
          "type": "paragraph",
          "text": "Durante quince años, el debate político de la región se organizó alrededor de un eje: cuánto Estado. La izquierda pedía más; la derecha, menos. Ambos bandos trataban al Estado como un volumen, algo que se dilata o se contrae, y disputaban la perilla."
        },
        {
          "type": "paragraph",
          "text": "El eje era falso, y los números lo delatan con una crudeza que incomoda a los dos lados."
        },
        {
          "type": "paragraph",
          "text": "América Latina recauda 21,7% del PIB frente al 34,1% de la OCDE. La brecha es de doce puntos, y ha tardado veinticuatro años en cerrarse cinco: en el año 2000 la región recaudaba 16,8%. A ese ritmo, la convergencia fiscal con los países desarrollados llegaría alrededor de 2085. Pero el dato aislado no significa nada, porque la dispersión interna es enorme: Brasil recauda 33,7% —más que muchos países europeos— y Guatemala, 14,3%. Argentina, 27,6%. Chile, 20,5%. Perú, 16,3%."
        },
        {
          "type": "paragraph",
          "text": "Si el tamaño explicara la calidad, Brasil debería tener el mejor Estado de la región y Guatemala el peor. Guatemala, efectivamente, tiene el peor: −0,909 en el índice de eficacia gubernamental del Banco Mundial. Pero Brasil obtiene −0,224, apenas por encima de México y por debajo de Colombia, que recauda catorce puntos menos del PIB. Brasil recauda como Alemania y administra como Perú."
        },
        {
          "type": "paragraph",
          "text": "La correlación entre cuánto cobra un Estado latinoamericano y qué tan bien funciona es, en el mejor de los casos, débil. Y eso debería haber sido el punto de partida de cualquier programa liberal serio en la región. No lo fue."
        },
        {
          "type": "heading",
          "text": "II. Lo que un Estado latinoamericano no hace"
        },
        {
          "type": "paragraph",
          "text": "Vale la pena enumerar lo que un ciudadano de la región no recibe de su Estado, en el orden en que lo nota."
        },
        {
          "type": "paragraph",
          "text": "**No lo protege.** Los datos de la Oficina de Naciones Unidas contra la Droga y el Delito, sobre ochenta y dos países, son de una brutalidad estadística poco frecuente: en Europa, por cada diez víctimas de homicidio hay ocho condenados. En Asia, alrededor de seis. En las Américas, **menos de dos**. En México, la tasa de esclarecimiento de homicidios dolosos ronda el 10%: nueve de cada diez asesinatos no producen ningún responsable. En Brasil, la investigación de referencia del Consejo Nacional del Ministerio Público estimó que entre el 92% y el 95% de los homicidios quedan sin resolver."
        },
        {
          "type": "paragraph",
          "text": "Un Estado que no encarcela asesinos no es un Estado chico. Es un Estado que no existe en la única materia donde ni el liberalismo más estricto discute su monopolio."
        },
        {
          "type": "paragraph",
          "text": "**No hace cumplir sus propias reglas.** Los setecientos setenta y cuatro días del promedio regional esconden extremos: Guatemala, 1.402 días; Colombia, 1.288, con un costo del 45,8% del valor de la demanda. Cobrar judicialmente una deuda en Colombia cuesta casi la mitad de la deuda y toma tres años y medio. En la práctica, eso significa que para montos medianos el sistema judicial no está disponible. Existe en el organigrama y no en la vida económica."
        },
        {
          "type": "paragraph",
          "text": "**No deja entrar.** Abrir una empresa formal cuesta, en promedio regional, el 31,4% del ingreso per cápita y toma casi veintinueve días. En los países de altos ingresos de la OCDE cuesta el 3% y toma nueve. Diez veces más caro. En El Salvador, el 43,3% del ingreso per cápita: casi medio año de ingreso medio para tener derecho a existir legalmente."
        },
        {
          "type": "paragraph",
          "text": "**No sostiene a sus viejos.** El 58,3% de las personas por encima de la edad legal de jubilación en América Latina recibe una pensión contributiva. Y solo el 31% de la población en edad de trabajar cotiza activamente a un sistema de pensiones. Dicho de otro modo: dos tercios de los trabajadores latinoamericanos están construyendo una vejez sin ningún respaldo formal, y el Estado lo sabe desde hace décadas."
        },
        {
          "type": "paragraph",
          "text": "**No conecta.** La región invierte alrededor del 1,8% de su producto en infraestructura, según la estimación del BID; necesitaría el 3,12% para cerrar la brecha hacia 2030. CEPAL, con otra metodología y otros sectores, calcula 2,3% de inversión efectiva frente a un 6,2% necesario. Las dos cifras no son comparables —conviene no mezclarlas— pero apuntan en la misma dirección: la región invierte entre un tercio y algo más de la mitad de lo que necesita para tener puertos, rutas y redes eléctricas que funcionen."
        },
        {
          "type": "paragraph",
          "text": "Ninguno de estos cinco fracasos se corrige subiendo o bajando el gasto. Todos se corrigen construyendo capacidad: fiscalías que investiguen, jueces que fallen, registros que registren, catastros que catastren."
        },
        {
          "type": "heading",
          "text": "III. La confianza como consecuencia"
        },
        {
          "type": "paragraph",
          "text": "Hay un dato de Latinobarómetro que suele leerse como diagnóstico cultural y que en realidad es una factura."
        },
        {
          "type": "paragraph",
          "text": "En 2024, la confianza de los latinoamericanos en el Poder Judicial era del 28%. En el Congreso, del 24%. En los partidos políticos, del 17%. Son cifras que llevan tres décadas oscilando en la misma franja baja: el Congreso llegó a 38% en 1997 y a 19% en 2017; los partidos, a 30% y a 13% en los mismos años."
        },
        {
          "type": "paragraph",
          "text": "La lectura habitual es que los latinoamericanos son desconfiados. La lectura correcta es que están bien informados. Un ciudadano que sabe que en su región menos de dos de cada diez homicidios terminan en condena, y que un juicio comercial toma más de dos años, no desconfía del Poder Judicial por prejuicio: lo evalúa correctamente. La desconfianza institucional latinoamericana no es un déficit de cultura cívica. Es una medición ciudadana bastante precisa de la capacidad estatal real."
        },
        {
          "type": "paragraph",
          "text": "Eso tiene una implicación política que la derecha regional no ha querido mirar. El apoyo a la democracia en la región subió cuatro puntos en 2024, hasta el 52%, el mayor repunte en catorce años. Pero el 25% declara ser indiferente entre un régimen democrático y uno que no lo sea. Uno de cada cuatro. Esa indiferencia no se cura con discursos sobre las bondades de la libertad. Se cura con un Estado que conteste el teléfono."
        },
        {
          "type": "heading",
          "text": "IV. Por qué esto le incumbe especialmente a la derecha"
        },
        {
          "type": "paragraph",
          "text": "Un lector podría objetar, con razón, que nada de lo anterior es propiedad de una ideología. Es cierto. La izquierda latinoamericana gobernó dos décadas y tampoco construyó fiscalías que funcionaran; en varios casos, las desmanteló."
        },
        {
          "type": "paragraph",
          "text": "Pero el argumento tiene una vuelta de tuerca que sí es específicamente liberal, y es la que hace de esto un problema de la derecha y no de todos."
        },
        {
          "type": "paragraph",
          "text": "El liberalismo económico no funciona en el vacío. Funciona sobre una infraestructura institucional muy concreta: contratos que se ejecutan, propiedad que se registra, competencia que se protege, delitos que se castigan. Un mercado sin esas cuatro cosas no es un mercado libre: es un mercado donde gana el que tiene más abogados, más contactos o más armas. Y eso, en América Latina, tiene un nombre y es exactamente lo contrario de lo que la derecha dice querer."
        },
        {
          "type": "paragraph",
          "text": "Cuando un gobierno liberal reduce el Estado sin haber construido primero esas capacidades, no está liberando el mercado. Está retirando al único árbitro disponible de una cancha donde los jugadores no son parejos. El resultado predecible —y el registro histórico regional es abundante— no es competencia: es concentración."
        },
        {
          "type": "paragraph",
          "text": "Hay una segunda razón, más incómoda. Si la promesa de la derecha es que el Estado gastará menos y funcionará mejor, y a los tres años el ciudadano comprueba que gasta menos y funciona igual de mal, la conclusión que sacará no será \"hay que ajustar mejor\". Será que la promesa era falsa. Y el siguiente gobierno no será liberal."
        },
        {
          "type": "heading",
          "text": "V. Qué se hace con esto"
        },
        {
          "type": "paragraph",
          "text": "No es misterioso, y esa es la parte irritante. Los países que salieron del subdesarrollo tarde no inventaron nada exótico. Estonia abre una empresa en tres días y medio con tres procedimientos, al 1% del ingreso per cápita. Corea resuelve un contrato en doscientos noventa días con un índice de calidad procesal de 14,5 sobre 18; América Latina obtiene 8,8. Ninguna de esas dos cosas requiere un Estado grande. Requieren un Estado que haya decidido que esas dos funciones son prioritarias y las haya financiado, digitalizado y profesionalizado durante veinte años seguidos."
        },
        {
          "type": "paragraph",
          "text": "La agenda es aburrida y por eso nadie la hace: carrera civil con concursos reales y sueldos que compitan con el sector privado; interoperabilidad de registros; digitalización judicial; fiscalías especializadas con presupuesto plurianual; estadísticas públicas que nadie pueda manipular. Nada de eso da un titular. Todo eso decide si un país funciona."
        },
        {
          "type": "paragraph",
          "text": "Alberdi, que en estos días es citado por medio continente para justificar lo contrario, escribió en el *Sistema económico y rentístico* una frase que conviene tener a mano: *\"Indudablemente no puede haber gobierno gratis, ni debe haberle por ser el más caro de los gobiernos.\"* Y agregó: *\"Los sueldos crecidos pagados a la aptitud son un medio de disminuir el gasto público en empleados de hacienda.\"*"
        },
        {
          "type": "paragraph",
          "text": "No estaba defendiendo el Estado grande. Estaba diciendo algo más difícil y más útil: que un Estado barato es el más caro de todos, porque no hace lo que se le paga por hacer, y hay que pagarlo dos veces —una en impuestos y otra en guardias privados, colegios privados, clínicas privadas y abogados—."
        },
        {
          "type": "paragraph",
          "text": "La derecha latinoamericana llegó al gobierno con un mandato para reducir el Estado. Va a descubrir, si no lo ha descubierto ya, que su verdadero mandato era otro: construir uno."
        }
      ]
    },
    "seo": {
      "title": "El Estado que no existe",
      "description": "América Latina. La derecha discutió el tamaño del Estado. El problema nunca fue ese.",
      "tldr": [
        "Un empresario que hoy quiera cobrar una factura impaga ante un tribunal comercial en América Latina esperará, en promedio, setecientos setenta y cuatro días. En Corea del Sur esperará doscientos noventa. La diferencia no es de matiz: es la diferencia entre un país donde un…",
        "Corea del Sur recauda el 25,3% de su producto en impuestos. América Latina recauda el 21,7%. La distancia entre ambos es de menos de cuatro puntos, un margen que en cualquier debate presupuestario latinoamericano se resolvería en una tarde. Corea emplea al 8,6% de su fuerza…",
        "Y sin embargo resuelve un litigio comercial dos veces y media más rápido, y su administración pública obtiene, en el índice de eficacia gubernamental del Banco Mundial, medio punto de desviación estándar más que Chile, que es el mejor de la región.",
        "Ese es el hecho que la derecha latinoamericana ganó el poder sin haber discutido."
      ],
      "faq": [
        {
          "question": "¿De qué país es «El Estado que no existe»?",
          "answer": "La pieza está situada en América Latina. La derecha latinoamericana llegó al poder discutiendo el tamaño del Estado. El problema nunca fue ese."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "ensayo",
      "rubric": "El Ensayo",
      "country": "América Latina",
      "excerpt": "Un empresario que hoy quiera cobrar una factura impaga ante un tribunal comercial en América Latina esperará, en promedio, setecientos setenta y cuatro días. En Corea del Sur esperará doscientos noventa. La diferencia…",
      "sources": "OCDE/CEPAL/BID/CIAT, *Revenue Statistics in Latin America and the Caribbean 2026* (datos 2024) · Banco Mundial, *Worldwide Governance Indicators* 2025 (datos 2024) · UNODC, *Global Study on Homicide 2023* · Impunidad Cero, *Índice de Impunidad en Homicidio Doloso 2022* (México) · Consejo Nacional do Ministério Público, ENASP, *Meta 2* (Brasil), vía *Revista de Saúde Pública* · Banco Mundial, *Doing Business 2020*, indicadores \"Enforcing Contracts\" y \"Starting a Business\" (serie descontinuada; se cita como tal) · OIT, *World Social Protection Report 2024–26*, Anexo 5.3 (datos 2023) · BID, *La brecha de infraestructura en América Latina y el Caribe* · CEPAL, INFRALATAM · Corporación Latinobarómetro, *Informe 2024: La democracia resiliente* · Juan Bautista Alberdi, *Sistema económico y rentístico de la Confederación Argentina* (1854).",
      "editNote": "Nota de edición: las citas de Alberdi provienen de la edición de *Obras selectas* de 1920 digitalizada; cotejar contra impreso antes de publicar. Las cifras de *Doing Business* corresponden a una serie descontinuada por el Banco Mundial y se identifican explícitamente como tales en el texto."
    }
  },
  {
    "id": "manual-ecuador-dolarizacion",
    "title": "El manual que Ecuador escribió sin querer",
    "summary": "En enero de 2000, un presidente a doce días de caer dolarizó un país. Veintiséis años después, casi nadie en Ecuador quiere volver atrás. Lo que el experimento enseña no es lo que suele citarse.",
    "section": {
      "id": "biblioteca",
      "label": "Biblioteca"
    },
    "author": {
      "name": "Biblioteca Politarca"
    },
    "publishedAt": "2026-08-22",
    "updatedAt": "2026-08-22",
    "readingMinutes": 8,
    "image": {
      "url": "/photos/plates/manual-ecuador-dolarizacion.jpg",
      "alt": "Documento de archivo con sello. El Archivo: la dolarización ecuatoriana de 2000."
    },
    "tags": [
      "Ecuador",
      "dolarización",
      "Argentina",
      "Mahuad"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "El 9 de enero de 2000, Jamil Mahuad anunció por cadena nacional que Ecuador adoptaría el dólar estadounidense a razón de veinticinco mil sucres por unidad. Doce días después, una alianza de dirigentes indígenas y oficiales medios del Ejército lo sacó del Palacio de Carondelet. Una junta se formó y se disolvió en unas tres horas. En la madrugada del 22 de enero asumió el vicepresidente, Gustavo Noboa."
        },
        {
          "type": "paragraph",
          "text": "Lo que ocurrió después es la parte que casi nunca se cuenta: Noboa mantuvo la dolarización. La formalizó el 13 de marzo de 2000 con la Ley para la Transformación Económica del Ecuador —la \"ley trolebús\"—, publicada ese mismo día en el Registro Oficial. El sucre dejó de circular el 9 de septiembre, después de ciento dieciséis años."
        },
        {
          "type": "paragraph",
          "text": "Es decir: la medida económica más radical de la historia ecuatoriana moderna sobrevivió al derrocamiento del presidente que la tomó. Ese detalle, y no la tasa de conversión, es lo que hace del caso ecuatoriano un archivo relevante."
        },
        {
          "type": "heading",
          "text": "Cómo se llega a veinticinco mil"
        },
        {
          "type": "paragraph",
          "text": "La dolarización no fue un plan. Fue lo que quedó."
        },
        {
          "type": "paragraph",
          "text": "En diciembre de 1998 quebró Filanbanco, el banco más grande del país. El Estado ya había inyectado alrededor de mil millones de dólares a la banca privada entre agosto de 1998 y febrero de 1999. El 8 de marzo de 1999, Mahuad decretó un feriado bancario anunciado como de veinticuatro horas que duró cinco días, y congeló los depósitos. El 22 de marzo cerró el Banco del Progreso. Hacia el año 2000, alrededor del 70% de la banca privada ecuatoriana estaba quebrada o estatizada; dieciocho bancos cerraron."
        },
        {
          "type": "paragraph",
          "text": "El costo fiscal del salvataje, según la base de datos de crisis bancarias sistémicas del Fondo Monetario Internacional, fue del **21,7% del PIB** en términos brutos y del 16,3% neto. La pérdida de producto respecto de la tendencia se estimó en 25,4%. La cartera morosa llegó al 40% del total."
        },
        {
          "type": "paragraph",
          "text": "El sucre, mientras tanto, se desintegraba. Empezó 1999 alrededor de los 4.500 por dólar; terminó el año sobre los 18.000; para el 8 de enero de 2000 rondaba los 30.000. En doce meses, el sucre perdió alrededor de tres cuartas partes de su valor. Las cifras exactas varían según la fuente, lo que en sí mismo dice algo sobre el estado de las estadísticas de un país en colapso."
        },
        {
          "type": "paragraph",
          "text": "El salario mínimo mensual ecuatoriano cayó de 134 dólares en enero de 1999 a 50 en diciembre. La pobreza medida a la línea de tres dólares diarios pasó del 21,1% en 1998 al 34,1% en 2000. El coeficiente de Gini saltó de 49,6 a 58,6 en un solo año. Al menos novecientas mil personas —cerca del 15% de la fuerza laboral— emigraron entre 1998 y 2000."
        },
        {
          "type": "paragraph",
          "text": "Dolarizar, en ese contexto, no era elegir un régimen monetario. Era admitir que ya no había uno."
        },
        {
          "type": "heading",
          "text": "Los dos primeros años fueron peores"
        },
        {
          "type": "paragraph",
          "text": "Este es el dato que los partidarios de la dolarización omiten con más frecuencia, y el que un medio serio tiene que poner en primer plano."
        },
        {
          "type": "paragraph",
          "text": "La inflación anual promedio de Ecuador fue del 52,2% en 1999. En 2000, **el año de la dolarización, fue del 96,1%**. En 2001 todavía era del 37,7%. Recién en 2002 bajó a 12,5%, y en 2004 llegó al 2,7%."
        },
        {
          "type": "paragraph",
          "text": "Fijar el tipo de cambio a veinticinco mil sucres por dólar equivalió a una devaluación masiva de golpe, y los precios tardaron dos años en terminar de absorberla. Quien haya vendido dolarización como estabilidad inmediata mintió, o no leyó la serie. El régimen entregó lo que prometía —en la última década la inflación ecuatoriana ha oscilado entre el −0,3% y el 2,2%, y en julio de 2026 fue de 1,39% anual— pero la entrega tomó cuatro años y un costo social que la memoria pública ha ido borrando."
        },
        {
          "type": "heading",
          "text": "La factura del otro lado"
        },
        {
          "type": "paragraph",
          "text": "Un país dolarizado no puede devaluar. Esa frase se repite como una obviedad técnica; conviene ver cómo se paga en la práctica."
        },
        {
          "type": "paragraph",
          "text": "Cuando el precio del petróleo se derrumbó entre 2014 y 2016, Ecuador no podía ajustar por tipo de cambio. Ajustó por aranceles. El 11 de marzo de 2015, mediante la resolución 011-2015 del COMEX, impuso sobretasas de entre 5% y 45% a unas dos mil ochocientas subpartidas. Las importaciones cayeron de 26.448 millones de dólares en 2014 a 20.460 en 2015 y a 15.551 en 2016 —un desplome del 41% en dos años—. Cuando las salvaguardias se desmontaron en 2017, las importaciones rebotaron 22,4%."
        },
        {
          "type": "paragraph",
          "text": "Es un dato que debería incomodar a quienes proponen dolarizar en nombre del libre mercado: **el país sin moneda propia terminó usando el proteccionismo como sustituto de la devaluación**. No porque quisiera, sino porque era el único instrumento que le quedaba."
        },
        {
          "type": "paragraph",
          "text": "El terremoto del 16 de abril de 2016 costó 3.344 millones de dólares en reconstrucción y restó 0,7 puntos al PIB nacional. Se financió con una ley solidaria que incluyó un alza temporal del IVA, líneas contingentes de organismos multilaterales y 400 millones del FMI. En la pandemia, el PIB ecuatoriano cayó 9,25% —una de las contracciones más severas de la región— y la pobreza nacional pasó del 25% al 33%."
        },
        {
          "type": "paragraph",
          "text": "Ecuador defaulteó dos veces bajo dolarización: en 2008, por decisión política de Rafael Correa, y en 2020, cuando reestructuró 17.375 millones de dólares en bonos globales con el 97,85% de aceptación de los acreedores, reduciendo el capital en 1.540 millones y la tasa promedio del 9,2% al 5,3%."
        },
        {
          "type": "paragraph",
          "text": "La dolarización elimina el riesgo cambiario. No elimina el riesgo fiscal. Lo concentra."
        },
        {
          "type": "heading",
          "text": "Y sin embargo"
        },
        {
          "type": "paragraph",
          "text": "Ecuador hoy tiene una deuda pública de 93.391 millones de dólares, el 69% del PIB. Registró 9.216 homicidios en 2025, un máximo histórico y un alza superior al 30% sobre 2024, con una tasa de 50,9 por cada cien mil habitantes: la peor de Sudamérica. En el primer semestre de 2026 llevaba más de cuatro mil."
        },
        {
          "type": "paragraph",
          "text": "Ningún ecuatoriano con peso político propone abandonar el dólar."
        },
        {
          "type": "paragraph",
          "text": "La única encuesta con casa encuestadora identificable que pudimos verificar —Cedatos, 2015— situaba el apoyo a la dolarización en el 85%. Las cifras que circulan hoy en la prensa, entre 89% y 92%, no tienen ficha técnica atribuible y no las publicamos como dato. Pero el orden de magnitud es consistente y el comportamiento político lo confirma: en veintiséis años, con gobiernos de todos los signos, incluida una década de correísmo, nadie tocó el régimen."
        },
        {
          "type": "paragraph",
          "text": "La explicación no es económica. Es institucional, y es la lección de fondo del archivo ecuatoriano."
        },
        {
          "type": "paragraph",
          "text": "La dolarización funcionó como un **candado sobre la única palanca que la política ecuatoriana había demostrado no poder administrar**. No mejoró la calidad del Estado, no redujo la corrupción, no construyó capacidad fiscal ni resolvió la violencia. Hizo una sola cosa: retiró del alcance de los políticos el instrumento con el que históricamente habían licuado los ahorros de los ecuatorianos. Y los ecuatorianos, que lo entendieron perfectamente, la defienden desde entonces como se defiende una cerradura, no como se defiende una política."
        },
        {
          "type": "heading",
          "text": "Lo que esto dice —y lo que no dice— sobre Argentina"
        },
        {
          "type": "paragraph",
          "text": "A agosto de 2026, Argentina no está dolarizada. Rige un esquema de bandas de flotación cuyo ajuste, desde enero de este año, se indexa a la inflación mensual en lugar del *crawl* fijo del 1%. El techo de la banda estaba en 1.866 pesos y el mayorista operaba en torno a 1.497. Las reservas brutas del Banco Central superaron los cincuenta mil millones de dólares el 19 de agosto, máximo del período. La inflación de julio fue del 2,1% mensual y 33,8% interanual. El cepo sigue parcialmente vigente: persisten la prohibición de compra de divisas para atesoramiento por personas jurídicas, la restricción cruzada de noventa días con los dólares financieros y límites al giro de dividendos."
        },
        {
          "type": "paragraph",
          "text": "Es decir: el gobierno que llegó proponiendo dolarizar eligió, en los hechos, un camino distinto."
        },
        {
          "type": "paragraph",
          "text": "El archivo ecuatoriano no dice si esa decisión fue correcta. Dice tres cosas más modestas y más útiles."
        },
        {
          "type": "paragraph",
          "text": "**Primera:** la dolarización no es una política de estabilización, es una renuncia. Se adopta cuando ya no queda nada que administrar, y el costo de entrada —dos años de inflación alta y una redistribución brutal— se paga completo y por adelantado."
        },
        {
          "type": "paragraph",
          "text": "**Segunda:** no compra capacidad estatal. Ecuador es hoy el país más violento de Sudamérica y su deuda equivale a dos tercios de su producto. El dólar no arregló nada de eso, ni prometió hacerlo."
        },
        {
          "type": "paragraph",
          "text": "**Tercera, y es la que importa:** su valor real fue institucional, no monetario. Sirvió porque ató las manos de un sistema político que había demostrado no poder tener las manos libres. Cualquier país que evalúe imitarlo debería empezar por esa pregunta —¿qué palanca concreta queremos volver inalcanzable, y por qué creemos que no encontraremos otra?— y no por la tasa de conversión."
        },
        {
          "type": "paragraph",
          "text": "Ecuador escribió un manual sin proponérselo. La mayor parte de quienes lo citan solo leyeron la portada."
        }
      ]
    },
    "seo": {
      "title": "El manual que Ecuador escribió sin querer",
      "description": "Ecuador, 2000. Dolarizó un país a doce días de caer el presidente. Lo que enseña no es la tasa.",
      "tldr": [
        "El 9 de enero de 2000, Jamil Mahuad anunció por cadena nacional que Ecuador adoptaría el dólar estadounidense a razón de veinticinco mil sucres por unidad. Doce días después, una alianza de dirigentes indígenas y oficiales medios del Ejército lo sacó del Palacio de…",
        "Lo que ocurrió después es la parte que casi nunca se cuenta: Noboa mantuvo la dolarización. La formalizó el 13 de marzo de 2000 con la Ley para la Transformación Económica del Ecuador —la \"ley trolebús\"—, publicada ese mismo día en el Registro Oficial. El sucre dejó de…",
        "Es decir: la medida económica más radical de la historia ecuatoriana moderna sobrevivió al derrocamiento del presidente que la tomó. Ese detalle, y no la tasa de conversión, es lo que hace del caso ecuatoriano un archivo relevante.",
        "En diciembre de 1998 quebró Filanbanco, el banco más grande del país. El Estado ya había inyectado alrededor de mil millones de dólares a la banca privada entre agosto de 1998 y febrero de 1999. El 8 de marzo de 1999, Mahuad decretó un feriado bancario anunciado como de…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «El manual que Ecuador escribió sin querer»?",
          "answer": "La pieza está situada en Ecuador. En enero de 2000, un presidente a doce días de caer dolarizó un país. Veintiséis años después, casi nadie en Ecuador quiere volver atrás. Lo que el experimento enseña no es lo que suele citarse."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "archivo",
      "rubric": "El Archivo",
      "country": "Ecuador",
      "excerpt": "El 9 de enero de 2000, Jamil Mahuad anunció por cadena nacional que Ecuador adoptaría el dólar estadounidense a razón de veinticinco mil sucres por unidad. Doce días después, una alianza de dirigentes indígenas y…",
      "sources": "Laeven & Valencia, *Systemic Banking Crises Revisited*, FMI WP/18/206 · Ley para la Transformación Económica del Ecuador (Ley 4, Registro Oficial Suplemento 34, 13/03/2000) · Banco Mundial, indicadores FP.CPI.TOTL.ZG, NY.GDP.PCAP.KD, SI.POV.DDAY, SI.POV.GINI, BX.TRF.PWKR.DT.GD.ZS · Resolución COMEX 011-2015 y análisis en *Revista de Ciencias Sociales* (SciELO Ecuador, 2018) · Larrea, *Dolarización, crisis y pobreza en el Ecuador*, FES-ILDIS · Ministerio de Economía y Finanzas del Ecuador · INEC, julio 2026 · Primicias, El Universo y GK City para la cronología de la crisis bancaria · Cedatos (2015) para el apoyo a la dolarización · INDEC y Banco Central de la República Argentina, agosto 2026.",
      "editNote": "Nota de edición: las cotizaciones del sucre difieren entre fuentes periodísticas; antes de publicar conviene cotejar la serie oficial del Banco Central del Ecuador. Las cifras de apoyo popular superiores al 85% que circulan en prensa no tienen ficha técnica atribuible y no se publican como dato."
    }
  },
  {
    "id": "bukele-vara-liberal",
    "title": "Bukele, medido con la vara liberal",
    "summary": "El Salvador pasó de 105 homicidios por cada cien mil habitantes a 1,3. También pasó a tener la tasa de encarcelamiento más alta del mundo. Las dos cosas son ciertas y la segunda no explica la primera.",
    "section": {
      "id": "polis",
      "label": "La Polis"
    },
    "author": {
      "name": "Redacción Politarca"
    },
    "publishedAt": "2026-08-23",
    "updatedAt": "2026-08-23",
    "readingMinutes": 10,
    "image": {
      "url": "/photos/plates/bukele-vara-liberal.jpg",
      "alt": "Edificio legislativo. La Polis mide a Bukele con la vara liberal, no con el aplauso."
    },
    "tags": [
      "El Salvador",
      "Bukele",
      "homicidios",
      "régimen de excepción"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Empecemos por reconocer el hecho, porque negarlo desacredita cualquier análisis posterior."
        },
        {
          "type": "paragraph",
          "text": "En 2015, El Salvador registró 6.656 homicidios: una tasa de 105 por cada cien mil habitantes, la más alta del planeta para un país sin guerra declarada. En 2025 registró 82 homicidios, una tasa de 1,3. InSight Crime, que no es una organización complaciente con el gobierno salvadoreño, valida la cifra. Es la caída más pronunciada de violencia letal documentada en América Latina en tiempos de paz."
        },
        {
          "type": "paragraph",
          "text": "Cualquier análisis que empiece por relativizar ese número está escribiendo para los convencidos. Un salvadoreño de un barrio que hace diez años pagaba renta a una pandilla y hoy no la paga tiene una razón perfectamente racional para aprobar a su gobierno con el 93% que registra CID Gallup. No es fanatismo. Es evaluación."
        },
        {
          "type": "paragraph",
          "text": "La pregunta que sigue —la única que un medio liberal está obligado a hacer— no es si el resultado es real. Es **qué lo produjo, qué costó y si es reproducible**."
        },
        {
          "type": "heading",
          "text": "I. El costo, en cifras"
        },
        {
          "type": "paragraph",
          "text": "El régimen de excepción salvadoreño se decretó el 27 de marzo de 2022 mediante el Decreto Legislativo 333. Suspende, entre otras garantías, el derecho a ser informado del motivo de la detención y a contar con defensor desde el inicio del proceso, y extiende el plazo de detención administrativa sin control judicial de 72 horas a quince días. El 28 de julio de 2026, la Asamblea aprobó la **prórroga número cincuenta y tres**. Lo excepcional lleva más de cuatro años y cuatro meses de vigencia ininterrumpida."
        },
        {
          "type": "paragraph",
          "text": "Bajo ese régimen han sido detenidas más de noventa y dos mil personas, según el Socorro Jurídico Humanitario; más de noventa y un mil trescientas según cifras oficiales a marzo de 2026. Human Rights Watch documenta además más de tres mil niños y adolescentes detenidos."
        },
        {
          "type": "paragraph",
          "text": "En el último dato disponible del World Prison Brief —marzo de 2024— la tasa de encarcelamiento salvadoreña era de **1.659 presos por cada cien mil habitantes: la más alta del mundo**. Para dimensionarla: Cuba tiene 794, Estados Unidos 542, Panamá 522. La ocupación penitenciaria es del 162,8% de la capacidad oficial. Amnistía Internacional estima que a fines de 2024 estaba encarcelado el 1,8% de la población total y el **3,3% de la población masculina**."
        },
        {
          "type": "paragraph",
          "text": "El propio Bukele reconoció públicamente en 2024 haber detenido y liberado después a unas **ocho mil personas inocentes**. Es una cifra que el gobierno ofreció como prueba de autocorrección; leída de otro modo, es la admisión de que ocho mil personas fueron privadas de libertad sin causa por decisión de su propio gobierno."
        },
        {
          "type": "paragraph",
          "text": "El Socorro Jurídico Humanitario documenta 547 muertes bajo custodia a julio de 2026, y estima que la cifra real podría superar el millar; Human Rights Watch cuenta 458. Según el Socorro Jurídico, **el 94% de los fallecidos no tenía vínculos con pandillas**. Amnistía Internacional, tras cuatro años de monitoreo, seis visitas de documentación, ochenta y dos casos analizados y ciento nueve entrevistas, concluyó en julio de 2026 que las violaciones podrían constituir crímenes de lesa humanidad."
        },
        {
          "type": "paragraph",
          "text": "En el CECOT, la cárcel emblema, hay doscientas cincuenta y seis celdas con un promedio de ciento cincuenta y seis reclusos cada una, en literas metálicas de cuatro niveles sin colchones: **0,6 metros cuadrados por persona**, luz artificial veinticuatro horas, treinta minutos diarios fuera de la celda, sin visitas, sin llamadas, sin educación."
        },
        {
          "type": "paragraph",
          "text": "Hay una asimetría estadística que conviene nombrar con precisión, porque es el punto donde el debate suele volverse confuso. Las 547 muertes bajo custodia **no aparecen en la serie oficial de homicidios**, por definición metodológica: el conteo del gobierno excluye, según InSight Crime, los cuerpos hallados en fosas clandestinas, las personas muertas a manos de la policía y los homicidios ocurridos dentro de las cárceles. No se trata de acusar al gobierno de falsear la cifra. Se trata de decir que la cifra mide una cosa y no otra, y que la diferencia importa."
        },
        {
          "type": "heading",
          "text": "II. Lo que la cifra probablemente no explica"
        },
        {
          "type": "paragraph",
          "text": "Aquí está el problema empírico serio, y no lo plantean los organismos de derechos humanos: lo plantea la propia evidencia comparada."
        },
        {
          "type": "paragraph",
          "text": "Si el mecanismo causal de la caída de homicidios fuera el encarcelamiento masivo bajo suspensión de garantías, replicar el mecanismo debería replicar el resultado. Se ha intentado. Los resultados son los siguientes."
        },
        {
          "type": "paragraph",
          "text": "**Ecuador** decretó el 9 de enero de 2024 un \"conflicto armado interno\", ordenó a los militares neutralizar veintidós organizaciones criminales y construyó la Cárcel del Encuentro inspirada explícitamente en el CECOT. Ecuador cerró 2025 con **9.216 homicidios, un alza superior al 30% sobre 2024** y una tasa de 50,9 por cien mil. El modelo se aplicó y la violencia subió."
        },
        {
          "type": "paragraph",
          "text": "**Honduras** mantuvo un estado de excepción del 6 de diciembre de 2022 al 26 de enero de 2026 —más de tres años, más de veinticinco decretos de prórroga, 1,7 millones de operativos—. La tasa oficial bajó de 42 a 23 por cien mil, una mejora real pero muy lejos del orden de magnitud salvadoreño. Al expirar el régimen, homicidios y desapariciones repuntaron. En mayo de 2026 el propio ministro de Seguridad hondureño rechazó replicar directamente el modelo salvadoreño."
        },
        {
          "type": "paragraph",
          "text": "**Perú**, con estados de emergencia y una estrategia que la prensa local llama abiertamente bukelista, cerró 2025 con una tasa de 10,7. **Costa Rica**, que construyó una cárcel de alta seguridad a cuya primera piedra asistió Bukele en enero de 2026, cerró con 16,8. **Chile**, cuyo gobierno trasladó en agosto de 2026 a cientos de reclusos a un penal de alta seguridad anunciando que serían tratados \"al estilo Bukele\", tiene 5,4 —la tasa más baja de la región, y la tenía antes—."
        },
        {
          "type": "paragraph",
          "text": "Dos países replicaron el instrumento completo —régimen de excepción más encarcelamiento masivo— y ninguno reprodujo el resultado. Otros tres adoptaron piezas sueltas del modelo sobre situaciones que no se le parecen; el caso chileno, de hecho, tenía la tasa más baja de la región antes de copiar nada. Eso no prueba que el régimen de excepción salvadoreño no haya contribuido; prueba que **no es suficiente**, y sugiere que había en El Salvador algo más, específico, que el instrumento no captura."
        },
        {
          "type": "heading",
          "text": "III. La variable que falta"
        },
        {
          "type": "paragraph",
          "text": "Hay una hipótesis alternativa y está documentada por fuentes que no son ONG."
        },
        {
          "type": "paragraph",
          "text": "El 8 de diciembre de 2021, el Departamento del Tesoro de Estados Unidos sancionó a Osiris Luna Meza, director de Centros Penales y viceministro de Justicia y Seguridad Pública, y a Carlos Amílcar Marroquín Chica, director de la Unidad de Reconstrucción del Tejido Social. La acusación oficial: haber liderado y organizado reuniones secretas con líderes pandilleros encarcelados de la MS-13 y el Barrio 18. Según el Tesoro, las pandillas recibieron incentivos financieros para mantener bajos los homicidios y privilegios carcelarios —incluidos teléfonos móviles—; el gobierno recibió apoyo político para Nuevas Ideas en las elecciones y colaboración con las cuarentenas en zonas bajo control pandillero."
        },
        {
          "type": "paragraph",
          "text": "En mayo de 2022, El Faro publicó audios de Marroquín que indicaban que la masacre del fin de semana del 25 al 27 de marzo de 2022 —sesenta y dos homicidios solo en la jornada del sábado 26— se produjo por la ruptura de ese pacto. El régimen de excepción se decretó el 27 de marzo, con la masacre aún en curso."
        },
        {
          "type": "paragraph",
          "text": "Una investigación de ProPublica publicada en junio de 2025 documentó que la Joint Task Force Vulcan del Departamento de Justicia estadounidense sostenía la misma tesis, con llamadas interceptadas, videos y registros carcelarios reunidos por fiscales salvadoreños bajo el fiscal general Raúl Melara. El 1 de mayo de 2021, la Asamblea controlada por Bukele destituyó a Melara y a cinco magistrados de la Sala de lo Constitucional. En los siete meses siguientes, los nuevos magistrados revirtieron o frenaron seis solicitudes de extradición de líderes pandilleros. Al menos ocho funcionarios salvadoreños huyeron del país con ayuda estadounidense. En marzo y abril de 2025, ya bajo la nueva administración norteamericana, los cargos contra dos miembros de la cúpula de la MS-13 fueron desestimados invocando \"preocupaciones geopolíticas y de seguridad nacional\"; uno de ellos fue deportado a El Salvador."
        },
        {
          "type": "paragraph",
          "text": "Ninguno de estos hechos prueba, por sí solo, que el pacto explique la caída de homicidios. Pero abren una explicación alternativa de por qué el modelo no se replica: **si la variable decisiva fue una negociación con la estructura criminal, y no la política penitenciaria, entonces lo exportable era la cárcel y lo determinante era el acuerdo.** Y un acuerdo no se exporta."
        },
        {
          "type": "heading",
          "text": "IV. Lo que un liberal no puede pasar por alto"
        },
        {
          "type": "paragraph",
          "text": "Hasta aquí, un lector de derecha podría decir: los fines. Vale."
        },
        {
          "type": "paragraph",
          "text": "El problema es que el régimen de excepción no vino solo. El 31 de julio de 2025, a las 21:57, con cincuenta y siete de sesenta votos, la Asamblea Legislativa salvadoreña reformó los artículos 75, 80, 133, 152 y 154 de la Constitución. La reforma **habilita la reelección presidencial indefinida, extiende el mandato de cinco a seis años, elimina la segunda vuelta** y unifica los ciclos electorales. Entró en vigor de inmediato. El período 2024-2029 se acortó anticipadamente al 1 de junio de 2027."
        },
        {
          "type": "paragraph",
          "text": "Reelección indefinida, sin balotaje, con el 84,65% de los votos de 2024 y cincuenta y cuatro de sesenta diputados. Ese no es un debate sobre seguridad. Es la eliminación, en una sesión nocturna, de los tres mecanismos que una república usa para hacer que el poder cambie de manos."
        },
        {
          "type": "paragraph",
          "text": "Y hay un dato fiscal que suele quedar fuera. La deuda pública salvadoreña alcanzó los **34.865 millones de dólares al 30 de junio de 2026**, y superaba el 89% del PIB en el último dato de ratio disponible, noviembre de 2025. La inversión extranjera directa cayó **37,1% en 2025**, segundo año consecutivo de contracción, hasta 475 millones. El acuerdo con el FMI aprobado en febrero de 2025 —mil cuatrocientos millones a cuarenta meses— exigió, entre otras condiciones, congelar las tenencias públicas de bitcoin, salir de la billetera estatal Chivo y prohibir deuda denominada en criptoactivos; la ley que hacía del bitcoin moneda de curso legal fue derogada en enero de 2025."
        },
        {
          "type": "paragraph",
          "text": "Es decir: el país más seguro de América Latina no está atrayendo capital, debía casi el 90% de su producto a fines de 2025 y tuvo que desmontar su experimento monetario emblema para acceder a un programa del Fondo."
        },
        {
          "type": "paragraph",
          "text": "Hay un vacío que conviene señalar, porque nos incomoda a nosotros: **no existe ninguna estimación pública seria del costo fiscal directo del régimen**. El presupuesto 2026 agrega \"Seguridad Pública y Defensa Nacional\" en una sola partida de 1.037 millones de dólares, el 14,8% del total. No hay desglose de la Dirección General de Centros Penales, ni costo por recluso, ni costo de operación del CECOT. Nadie —ni gobierno, ni academia, ni *think tanks*— lo ha calculado. Encarcelar al 3,3% de los hombres de un país tiene un precio, y no sabemos cuál es."
        },
        {
          "type": "heading",
          "text": "V. La conclusión que nos toca"
        },
        {
          "type": "paragraph",
          "text": "La posición honesta no es la que ofrecen los dos bandos disponibles."
        },
        {
          "type": "paragraph",
          "text": "No es \"Bukele demostró que la mano dura funciona\", porque cinco países la aplicaron y ninguno reprodujo el resultado, y porque hay evidencia documentada de que la variable decisiva pudo ser otra."
        },
        {
          "type": "paragraph",
          "text": "Tampoco es \"Bukele es un autoritario y por lo tanto sus cifras son mentira\", porque las cifras están validadas por observadores independientes y porque decirle a un salvadoreño que su barrio no mejoró es faltarle el respeto."
        },
        {
          "type": "paragraph",
          "text": "La posición liberal es más incómoda y más precisa: **la seguridad es un bien público que el Estado debe proveer, y proveerla no requiere suspender el debido proceso durante cincuenta y dos meses ni eliminar la alternancia**. Lo primero es la obligación central del Estado, la que ni el liberalismo más estricto discute. Lo segundo es lo que un gobierno hace cuando no sabe cómo cumplir lo primero por la vía institucional, o cuando descubre que el miedo resuelto es el mejor activo electoral disponible."
        },
        {
          "type": "paragraph",
          "text": "El Salvador no le enseñó a América Latina cómo bajar los homicidios. Le enseñó algo más peligroso: que bajarlos compra permiso para casi todo lo demás."
        }
      ]
    },
    "seo": {
      "title": "Bukele, medido con la vara liberal",
      "description": "El Salvador: 105 homicidios por cien mil a 1,3. También la cárcel más llena del mundo.",
      "tldr": [
        "Empecemos por reconocer el hecho, porque negarlo desacredita cualquier análisis posterior.",
        "En 2015, El Salvador registró 6.656 homicidios: una tasa de 105 por cada cien mil habitantes, la más alta del planeta para un país sin guerra declarada. En 2025 registró 82 homicidios, una tasa de 1,3. InSight Crime, que no es una organización complaciente con el gobierno…",
        "Cualquier análisis que empiece por relativizar ese número está escribiendo para los convencidos. Un salvadoreño de un barrio que hace diez años pagaba renta a una pandilla y hoy no la paga tiene una razón perfectamente racional para aprobar a su gobierno con el 93% que…",
        "La pregunta que sigue —la única que un medio liberal está obligado a hacer— no es si el resultado es real. Es qué lo produjo, qué costó y si es reproducible."
      ],
      "faq": [
        {
          "question": "¿De qué país es «Bukele, medido con la vara liberal»?",
          "answer": "La pieza está situada en El Salvador. El Salvador pasó de 105 homicidios por cada cien mil habitantes a 1,3. También pasó a tener la tasa de encarcelamiento más alta del mundo. Las dos cosas son ciertas y la segunda no explica la primera."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "pieza",
      "rubric": "La Polis",
      "country": "El Salvador",
      "excerpt": "Empecemos por reconocer el hecho, porque negarlo desacredita cualquier análisis posterior.",
      "sources": "Fiscalía General de la República de El Salvador y Policía Nacional Civil · InSight Crime, *2025 Homicide Round-Up* · Decreto Legislativo 333 (27/03/2022) y prórroga 53 (28/07/2026), Asamblea Legislativa · World Prison Brief · Human Rights Watch, *Informe Mundial 2026* · Amnistía Internacional, *Seguridad sin derechos* (16/07/2026) · Socorro Jurídico Humanitario (15/07/2026) · U.S. Department of the Treasury, comunicado JY0519 (08/12/2021) · El Faro, audios de Carlos Marroquín (mayo 2022) · ProPublica, investigación sobre la Joint Task Force Vulcan (junio 2025) · Tribunal Supremo Electoral de El Salvador, resultados 2024 · Reforma constitucional del 31/07/2025, Asamblea Legislativa · CIDH, comunicado 156/2025 · FMI, comunicados 24/485 y 25/223 · Banco Central de Reserva de El Salvador · Presupuesto General de la Nación 2026 · CID Gallup (mayo 2026). **Vacío declarado:** no existe cifra oficial ni independiente del total de personas condenadas bajo el régimen de excepción, ni estimación pública de su costo fiscal. Ambas ausencias se señalan en el texto y no se sustituyen por estimaciones propias."
    }
  },
  {
    "id": "quien-paga-el-estado",
    "title": "Quién paga el Estado en América Latina",
    "summary": "La respuesta no es \"los ricos\" ni \"las empresas\". Es una señora que compra fideos.",
    "section": {
      "id": "erario",
      "label": "El Erario"
    },
    "author": {
      "name": "El Erario"
    },
    "publishedAt": "2026-08-21",
    "updatedAt": "2026-08-21",
    "readingMinutes": 8,
    "image": {
      "url": "/photos/plates/quien-paga-el-estado.jpg",
      "alt": "Mesa de trabajo institucional. Quién paga el Estado en América Latina: el IVA, no la renta."
    },
    "tags": [
      "IVA",
      "renta personal",
      "CEPAL",
      "clase media"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "En América Latina, el impuesto al valor agregado recauda tres veces más que el impuesto a la renta de las personas. El IVA aporta el 28,9% de todo lo que recaudan los Estados de la región; el impuesto a la renta personal, el 9,6%."
        },
        {
          "type": "paragraph",
          "text": "En la OCDE la relación se invierte: renta personal 23,7%, IVA 20,5%."
        },
        {
          "type": "paragraph",
          "text": "Ese par de cifras contiene casi todo lo que hay que saber sobre la política fiscal latinoamericana, y explica más sobre el malhumor político de la región que cualquier encuesta de aprobación. Vale la pena desarmarlas despacio, porque cada bando político tiene una razón distinta para no mirarlas."
        },
        {
          "type": "heading",
          "text": "I. El dato que ninguno de los dos lados quiere"
        },
        {
          "type": "paragraph",
          "text": "Hay una creencia compartida por la izquierda y la derecha latinoamericanas, y es falsa en ambas versiones."
        },
        {
          "type": "paragraph",
          "text": "La izquierda cree que el problema es que los ricos no pagan impuestos. La derecha cree que el problema es que el Estado cobra demasiado. Los números dicen otra cosa: **el Estado latinoamericano cobra poco y lo cobra mal, y lo cobra sobre todo al consumo de todos**."
        },
        {
          "type": "paragraph",
          "text": "América Latina recauda 6,2% del PIB por IVA. La OCDE recauda 6,8%. La diferencia es de seis décimas: en materia de impuestos al consumo, **la región ya recauda prácticamente como un país desarrollado**. Donde se abre el abismo es en la renta personal, donde la OCDE recauda 8,2% del PIB y la región, alrededor de dos."
        },
        {
          "type": "paragraph",
          "text": "La derecha que dice \"acá se pagan demasiados impuestos\" tiene razón si hablamos de lo que paga un asalariado formal cuando compra algo, y no la tiene si hablamos de la carga total: 21,7% del PIB frente al 34,1% de la OCDE."
        },
        {
          "type": "paragraph",
          "text": "La izquierda que dice \"los ricos no pagan\" tiene razón, pero por un motivo distinto al que suele invocar. Según la investigación de CEPAL sobre el potencial redistributivo de la fiscalidad regional, **la tasa efectiva que paga el decil de mayores ingresos apenas alcanza un promedio del 5,4%**, y en varios países entre el 1% y el 3% de su ingreso bruto, pese a que las tasas legales máximas se sitúan entre el 25% y el 40%. El problema no es que la tasa sea baja. Es que la base está agujereada: exenciones, rentas del capital tratadas aparte, sociedades interpuestas, y una capacidad de fiscalización que ya vimos en qué estado se encuentra."
        },
        {
          "type": "paragraph",
          "text": "El resultado combinado es que, según CEPAL, \"en la mayor parte de los países, el 90% o más del impuesto es soportado por el 20% de ingresos más elevados, mientras que el 80% de ingresos inferiores no aporta a la recaudación del tributo o lo hace en una fracción muy pequeña\". Suena progresivo. No lo es, porque ese impuesto casi no recauda: reduce el coeficiente de Gini regional en **un punto porcentual**. Es un tributo simbólico."
        },
        {
          "type": "heading",
          "text": "II. Cuánto redistribuye realmente el Estado latinoamericano"
        },
        {
          "type": "paragraph",
          "text": "Aquí está la cifra que debería estar en la primera página de cualquier programa fiscal de la región."
        },
        {
          "type": "paragraph",
          "text": "El trabajo más completo disponible —Lustig, Martinez-Pabon y Pessino, con la metodología del Commitment to Equity Institute, sobre dieciocho países latinoamericanos— mide cuántos puntos de Gini reduce el sistema de impuestos y transferencias."
        },
        {
          "type": "table",
          "head": [
            "",
            "Reducción del Gini"
          ],
          "rows": [
            [
              "Unión Europea (28 países)",
              "**7,7 a 19,0 puntos**"
            ],
            [
              "Estados Unidos",
              "6,5 a 10,2"
            ],
            [
              "Países de ingreso medio-alto fuera de la región",
              "3,3 a 8,8"
            ],
            [
              "**América Latina (18 países)**",
              "**2,3 a 3,1 puntos**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "América Latina es la región más desigual del mundo y tiene el sistema fiscal que menos hace al respecto. No un poco menos: entre tres y seis veces menos que Europa."
        },
        {
          "type": "paragraph",
          "text": "Y sobre la defensa habitual del IVA —que su regresividad se compensa con las transferencias que financia—, la literatura reciente es explícita en rechazarla. El estudio de incidencia distributiva sobre diez países de la región concluye que **los impuestos indirectos son desigualadores en todos los países analizados**, y aborda directamente el llamado *Lambert conundrum* para descartarlo: la posibilidad de que un impuesto regresivo se vuelva igualador al sumarle las transferencias es, citando la literatura especializada, \"mínima o con un efecto muy pequeño\". En Guatemala el efecto desigualador de los impuestos indirectos directamente sobrecompensa el efecto igualador de las transferencias."
        },
        {
          "type": "paragraph",
          "text": "Hay un matiz metodológico honesto que conviene declarar: si se ordena a los hogares por consumo en vez de por ingreso, el IVA resulta aproximadamente proporcional. Y la evasión —cerca del 30% del IVA, vía compras informales— alivia de hecho la carga sobre los grupos de menores ingresos. Es decir: parte de lo que salva a los pobres latinoamericanos del IVA es que no lo pagan porque compran fuera del sistema. Eso no es un argumento a favor del diseño tributario. Es un diagnóstico."
        },
        {
          "type": "heading",
          "text": "III. La factura que se paga dos veces"
        },
        {
          "type": "paragraph",
          "text": "Ahora la parte que explica la política."
        },
        {
          "type": "paragraph",
          "text": "El Estado latinoamericano recauda por consumo, en proporción a su economía, casi tanto como uno desarrollado. Y el hogar que paga ese consumo compra después, de su bolsillo, los servicios que ese Estado no le entrega."
        },
        {
          "type": "paragraph",
          "text": "**Salud.** El gasto de bolsillo representa el 29,7% del gasto total en salud en América Latina y el Caribe, frente al 13,4% en la OCDE. Más del doble. En Guatemala, el 57,2%: más de la mitad de todo el gasto sanitario del país sale directamente del bolsillo de las familias. En México, 41,2%. En Chile, 39,1%."
        },
        {
          "type": "paragraph",
          "text": "**Educación.** El 26,1% de la matrícula primaria peruana es privada; el 25,8% de la argentina; el 19,3% de la colombiana; el 19,1% de la brasileña. En Chile la cifra llega al 63,5%, aunque ahí hay que ser precisos: incluye el sector particular subvencionado, financiado con voucher estatal, y no puede leerse como gasto de bolsillo."
        },
        {
          "type": "paragraph",
          "text": "**Seguridad.** En América Latina y el Caribe hay más de dos millones cuatrocientos mil guardias privados registrados en más de dieciséis mil empresas. Brasil tiene 583.100; México, 450.000. Los ratios de guardias privados por policía documentados son de aproximadamente siete a uno en Honduras y cinco a uno en Guatemala, contra un promedio mundial de dos a uno. La seguridad, ese bien público por antonomasia, se compra al por menor."
        },
        {
          "type": "paragraph",
          "text": "Sumadas, las tres cosas dibujan el contrato social real de la región: **el ciudadano latinoamericano paga impuestos como europeo cuando compra, recibe servicios como corresponde a un Estado que recauda doce puntos menos, y cubre la diferencia con su tarjeta de crédito.**"
        },
        {
          "type": "paragraph",
          "text": "Eso no es una queja moral. Es una descripción de por qué la clase media latinoamericana vota como vota."
        },
        {
          "type": "heading",
          "text": "IV. Y esa clase media es más grande y más frágil que nunca"
        },
        {
          "type": "paragraph",
          "text": "El Banco Mundial estima que la clase media regional llegó al 42,3% de la población en 2024, con una proyección de 42,8% para el cierre de 2025: el nivel más alto de la historia. Los pobres bajaron al 25,5%. (La taxonomía del Banco Mundial define clase media como todo hogar por encima de diecisiete dólares diarios en paridad de poder adquisitivo, de modo que la categoría incluye también a los ricos.)"
        },
        {
          "type": "paragraph",
          "text": "Pero la franja intermedia —los \"vulnerables\", que ya no son pobres y todavía no son clase media— lleva **una década estancada en torno al 32%**. Un tercio de América Latina vive permanentemente a un despido de distancia de la pobreza. Y el dato causal es elocuente: perder el empleo aumenta en 24,8 puntos porcentuales la probabilidad de salir de la clase media."
        },
        {
          "type": "paragraph",
          "text": "Ya vimos lo que ese riesgo cuesta cuando se materializa. En 2020, 4,7 millones de personas salieron de la clase media latinoamericana. Sin el programa de transferencias de emergencia de Brasil, habrían sido doce millones, y veinte millones los que caían en pobreza."
        },
        {
          "type": "paragraph",
          "text": "Un tercio de la región en el borde, un Estado que redistribuye tres puntos de Gini, y un sistema tributario que cobra sobre todo cuando esa gente compra. Es difícil imaginar una arquitectura fiscal peor diseñada para producir estabilidad política."
        },
        {
          "type": "heading",
          "text": "V. Qué sigue de todo esto"
        },
        {
          "type": "paragraph",
          "text": "Si uno cree en mercados y en Estados que funcionen —que es la posición desde la que escribimos—, la conclusión no es cómoda para nadie."
        },
        {
          "type": "paragraph",
          "text": "**Para la derecha:** bajar el IVA es popular y probablemente correcto en el margen, pero no es la reforma. La reforma es ensanchar la base del impuesto a la renta, gravar las rentas del capital como se gravan las del trabajo y cerrar las exenciones que hacen que el decil superior pague 5,4% efectivo. Eso es exactamente lo que una derecha con financistas no quiere hacer, y es la prueba de fuego de si su liberalismo es un principio o una clientela."
        },
        {
          "type": "paragraph",
          "text": "**Para la izquierda:** subir tasas nominales sobre una base agujereada no recauda; produce titulares. Veinticinco años de reformas tributarias latinoamericanas movieron la presión regional de 16,8% a 21,7% del PIB. En la última década, en cambio, la participación del impuesto a la renta personal en la recaudación pasó del 9,5% al 9,6%: una décima. Lo que falta no es voluntad redistributiva. Es administración tributaria."
        },
        {
          "type": "paragraph",
          "text": "**Y para los dos:** ningún cambio en la estructura tributaria arregla el problema si el gasto sigue comprando servicios que la gente igual tiene que comprar de nuevo. Un Estado que cobra el 21,7% del PIB y obliga al ciudadano a poner de su bolsillo el 30% de su gasto en salud no tiene un problema de recaudación. Tiene un problema de entrega."
        },
        {
          "type": "paragraph",
          "text": "La pregunta \"¿quién paga el Estado en América Latina?\" tiene una respuesta técnica —el consumo de la clase media y de los pobres— y una respuesta política que es la que ordena todo lo demás: lo paga gente que no lo usa."
        }
      ]
    },
    "seo": {
      "title": "Quién paga el Estado en América Latina",
      "description": "El IVA recauda tres veces más que la renta personal. Lo paga una señora que compra fideos.",
      "tldr": [
        "En América Latina, el impuesto al valor agregado recauda tres veces más que el impuesto a la renta de las personas. El IVA aporta el 28,9% de todo lo que recaudan los Estados de la región; el impuesto a la renta personal, el 9,6%.",
        "En la OCDE la relación se invierte: renta personal 23,7%, IVA 20,5%.",
        "Ese par de cifras contiene casi todo lo que hay que saber sobre la política fiscal latinoamericana, y explica más sobre el malhumor político de la región que cualquier encuesta de aprobación. Vale la pena desarmarlas despacio, porque cada bando político tiene una razón…",
        "Hay una creencia compartida por la izquierda y la derecha latinoamericanas, y es falsa en ambas versiones."
      ],
      "faq": [
        {
          "question": "¿De qué país es «Quién paga el Estado en América Latina»?",
          "answer": "La pieza está situada en América Latina. La respuesta no es \"los ricos\" ni \"las empresas\". Es una señora que compra fideos."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "pieza",
      "rubric": "El Erario",
      "country": "América Latina",
      "excerpt": "En América Latina, el impuesto al valor agregado recauda tres veces más que el impuesto a la renta de las personas. El IVA aporta el 28,9% de todo lo que recaudan los Estados de la región; el impuesto a la renta…",
      "sources": "OCDE/CEPAL/BID/CIAT, *Revenue Statistics in Latin America and the Caribbean 2026* (datos 2024) y *Revenue Statistics 2025* (OCDE, datos 2023) · Hanni, Martner y Podestá, \"El potencial redistributivo de la fiscalidad en América Latina\", *Revista CEPAL* Nº 116 · Lustig, Martinez-Pabon y Pessino, \"Fiscal policy, income redistribution, and poverty reduction in Latin America\", *Oxford Open Economics* 4(S1), 2025 · \"Distributional effects of taxation in Latin America\", *Oxford Open Economics* 4(S1), 2025 · Banco Mundial / OMS, Global Health Expenditure Database, indicador SH.XPD.OOPC.CH.ZS · Banco Mundial / UNESCO-UIS, indicadores SE.PRM.PRIV.ZS y SE.SEC.PRIV.ZS · DCAF & UNLIREC, *Armed Private Security in Latin America and the Caribbean* · Kinosian y Bosworth, *Security for Sale*, Inter-American Dialogue · Banco Mundial, *Regional Poverty and Inequality Update: Latin America and the Caribbean* (octubre 2025) y comunicado del 24/06/2021.",
      "editNote": "Nota de edición: la cifra de recaudación del impuesto a la renta personal en ALC como porcentaje del PIB (≈2,1%) es una derivación aritmética de dos datos publicados, no un dato oficial publicado como tal; en el texto se la presenta como aproximación (\"alrededor de dos\")."
    }
  },
  {
    "id": "alberdi-contra-los-libertarios",
    "title": "Alberdi contra los libertarios",
    "summary": "Alberdi escribió un texto entero para protestar por el uso que se le estaba dando a su frase más famosa. Casi siglo y medio después, el problema es el mismo.",
    "section": {
      "id": "biblioteca",
      "label": "Biblioteca"
    },
    "author": {
      "name": "Biblioteca Politarca"
    },
    "publishedAt": "2026-08-20",
    "updatedAt": "2026-08-20",
    "readingMinutes": 9,
    "image": {
      "url": "/photos/plates/alberdi-contra-los-libertarios.jpg",
      "alt": "Libros de derecho argentino. Alberdi contra los libertarios."
    },
    "tags": [
      "Alberdi",
      "Argentina",
      "Milei",
      "Bases"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "La máxima que hoy adorna discursos, cuentas de redes sociales y leyes ómnibus en media América Latina no dice lo que se cree que dice. Ni siquiera está escrita como se la cita."
        },
        {
          "type": "paragraph",
          "text": "En *Bases y puntos de partida para la organización política de la República Argentina*, publicado en 1852, la frase aparece exactamente dos veces, ambas en el capítulo XXXI, y ambas con un calificador que la cita popular amputa. El título del capítulo es \"En América gobernar es poblar\". El cuerpo del texto dice:"
        },
        {
          "type": "quote",
          "text": "\"Es pues esencialmente económico el fin de la política constitucional y del gobierno en América. Así, en América gobernar es poblar. Definir de otro modo el gobierno, es desconocer su misión sudamericana.\""
        },
        {
          "type": "paragraph",
          "text": "Años más tarde, ya al final de su vida, Alberdi volvió sobre el asunto. Escribió unas *Páginas explicativas* cuyo propósito declarado era corregir a quienes lo citaban. El párrafo con el que abre esa sección es, para cualquiera que siga la política argentina contemporánea, casi cómico:"
        },
        {
          "type": "quote",
          "text": "\"Como se pone bajo mi nombre, a cada paso, la máxima de mi libro BASES, de que en América gobernar es poblar, estoy obligado a explicarla, para no tener que responder de acepciones y aplicaciones, que lejos de emanar de esa máxima se oponen al sentido que ella encierra y lo comprometen.\""
        },
        {
          "type": "paragraph",
          "text": "Un hombre ya al final de su vida, obligado a publicar una aclaración porque su país estaba usando su frase para decir lo contrario de lo que él había querido decir. Es un precedente exacto, y merece atención por lo que revela del original —no por la ironía."
        },
        {
          "type": "heading",
          "text": "I. Lo que Alberdi decía que significaba"
        },
        {
          "type": "paragraph",
          "text": "La aclaración de 1879 no es ambigua:"
        },
        {
          "type": "quote",
          "text": "\"Gobernar es poblar en el sentido que poblar es educar, mejorar, civilizar, enriquecer y engrandecer espontánea y rápidamente, como ha sucedido en los Estados Unidos.\""
        },
        {
          "type": "quote",
          "text": "\"¿Por qué razón he dicho que en Sud América, gobernar es poblar, y en qué sentido es esto una verdad incuestionable? —Porque poblar, repito, es instruir, educar, moralizar, mejorar la raza; es enriquecer, civilizar, fortalecer y afirmar la libertad del país.\""
        },
        {
          "type": "quote",
          "text": "\"Gobernar es poblar muy bien; pero poblar es una ciencia, y esta ciencia no es otra cosa que la economía política, que considera la población como instrumento de riqueza y elemento de prosperidad.\""
        },
        {
          "type": "paragraph",
          "text": "Instruir, educar, moralizar. La frase que hoy se invoca como programa de Estado mínimo era, en la definición de su autor, un programa de intervención estatal deliberada sobre la composición y la educación de la población."
        },
        {
          "type": "heading",
          "text": "II. Lo que proponía hacer con la plata"
        },
        {
          "type": "paragraph",
          "text": "Aquí es donde el asunto deja de ser filológico."
        },
        {
          "type": "paragraph",
          "text": "En el capítulo XV de *Bases*, discutiendo cómo financiar los ferrocarriles que consideraba indispensables para unificar el país, Alberdi escribe una instrucción que no admite lectura ambigua:"
        },
        {
          "type": "quote",
          "text": "\"Para tener ferrocarriles, abundan medios en estos países. Negociad empréstitos en el extranjero, empeñad vuestras rentas y bienes nacionales para empresas que los harán prosperar y multiplicarse. Sería pueril esperar a que las rentas ordinarias alcancen para gastos semejantes; **invertid ese orden, empezad por los gastos, y tendréis rentas.**\""
        },
        {
          "type": "paragraph",
          "text": "Empezad por los gastos. El padre intelectual de la Constitución argentina proponía endeudamiento externo deliberado, con garantía de rentas y bienes nacionales, para financiar infraestructura antes de tener con qué pagarla."
        },
        {
          "type": "paragraph",
          "text": "En el *Sistema económico y rentístico*, de 1854, la posición sobre el gasto en administración es igual de nítida:"
        },
        {
          "type": "quote",
          "text": "\"Indudablemente no puede haber gobierno gratis, ni debe haberle por ser el más caro de los gobiernos. Donde se sabe lo que es gobierno, por ejemplo, en Estados Unidos, ni los empleos concejiles o municipales son gratuitos. El sueldo es la mejor garantía contra el peculado.\""
        },
        {
          "type": "paragraph",
          "text": "Y remata, sobre la administración tributaria: *\"Los sueldos crecidos pagados a la aptitud son un medio de disminuir el gasto público en empleados de hacienda.\"*"
        },
        {
          "type": "paragraph",
          "text": "Sobre educación, el mismo libro enumera lo que el Estado debe costear: la enseñanza secundaria y superior \"dada gratuitamente en nombre de la Nación\", la dotación de colegios, bibliotecas y museos, las escuelas de artes y oficios, la venida de sabios extranjeros y los premios a las obras de utilidad. Alberdi cita aprobatoriamente el artículo constitucional que obliga a cada provincia a asegurar la educación primaria gratuita."
        },
        {
          "type": "paragraph",
          "text": "Sobre inmigración, en el capítulo de gastos de Relaciones Exteriores, propone \"instituir y sostener agentes de inmigración y colonización\" y llama a esos trabajos de propaganda \"el gasto más lucrativo y fecundo\" que la Confederación pueda hacer en su política exterior."
        },
        {
          "type": "paragraph",
          "text": "Y hay una frase que descoloca por completo cualquier lectura libertaria:"
        },
        {
          "type": "quote",
          "text": "\"La contribución es más capaz de dañar por la desproporción y desigualdad que por la exorbitancia: tan verdadero es esto, que muchos han visto en las contribuciones elevadas un estímulo a la producción más que un ataque.\""
        },
        {
          "type": "heading",
          "text": "III. El otro Alberdi, que también existe"
        },
        {
          "type": "paragraph",
          "text": "Sería deshonesto convertirlo en socialdemócrata, y esa deshonestidad sería simétrica a la que se le practica desde el otro lado."
        },
        {
          "type": "paragraph",
          "text": "El mismo *Sistema económico y rentístico* dice, sobre las obras públicas, que la Constitución \"anduvo muy acertada\" al hacerlas depender \"más bien de las facilidades estimulantes ofrecidas al espíritu particular de empresa, que de los recursos de un Erario naciente\", y sintetiza la política de obra pública en una frase de tres palabras: *\"Consiste lisa y llanamente en gastar poco.\"* En *Bases* pide para las empresas privadas de ferrocarriles \"todo el favor imaginable, sin deteneros en medios\"."
        },
        {
          "type": "paragraph",
          "text": "Alberdi quería un Estado austero en burocracia, que no fuera empresario, que concesionara antes que construir. Y simultáneamente quería que ese Estado se endeudara para tender vías, pagara sueldos altos a sus funcionarios de hacienda, financiara la universidad gratuita y sostuviera agencias de inmigración en Europa."
        },
        {
          "type": "paragraph",
          "text": "Esa combinación no cabe en ninguna de las dos casillas del debate actual. Es, si se quiere, un liberalismo de construcción de Estado: barato en su funcionamiento, ambicioso en su inversión, y explícito en que ciertas cosas —poblar, educar, conectar— no las hace el mercado solo."
        },
        {
          "type": "heading",
          "text": "IV. Las páginas que nadie cita"
        },
        {
          "type": "paragraph",
          "text": "Hay una parte de Alberdi que los libertarios no citan y los progresistas tampoco, cada uno por su motivo, y que aparece en el mismo texto donde corrige el uso de su frase:"
        },
        {
          "type": "quote",
          "text": "\"Poblar es civilizar cuando se puebla con gente civilizada, es decir, con pobladores de la Europa civilizada. Por eso he dicho en la Constitución que el gobierno debe fomentar la inmigración europea. Pero poblar no es civilizar, sino embrutecer, cuando se puebla con chinos y con indios de Asia y con negros de África.\""
        },
        {
          "type": "paragraph",
          "text": "En *Bases*, capítulo XIV: *\"Nosotros, los que nos llamamos americanos, no somos otra cosa que europeos nacidos en América. Cráneo, sangre, color, todo es de fuera.\"* Y: *\"¿Quién casaría a su hermana o a su hija con un infanzón de la Araucania, y no mil veces con un zapatero inglés?\"* Y: *\"Nosotros, europeos de raza y de civilización, somos los dueños de América.\"*"
        },
        {
          "type": "paragraph",
          "text": "Del capítulo XV, sobre la llegada del vapor al Chaco: *\"El salvaje del Chaco, apoyado en el arco de su flecha, contemplará con tristeza el curso de la formidable máquina que le intima el abandono de aquellas márgenes. Resto infeliz de la criatura primitiva: decid adiós al dominio de vuestros pasados.\"*"
        },
        {
          "type": "paragraph",
          "text": "No hay manera de citar a Alberdi como autoridad sobre política migratoria sin toparse con esto. Su idea de \"poblar\" era explícitamente jerárquica y racial, y él mismo la ratificó por escrito al final de su vida."
        },
        {
          "type": "paragraph",
          "text": "Justicia con el personaje: en el mismo texto escribió también que \"el extranjero no debe ser excluido, por malo que sea\", porque \"si se admite el derecho de excluir al malo, viene enseguida la exclusión del bueno\". Y que \"Londres y París encierran más barbarie que la Patagonia y el Chaco, si se las contempla en las capas o regiones subterráneas de su población\". El hombre era contradictorio, y esa contradicción es más interesante que cualquiera de sus dos caricaturas."
        },
        {
          "type": "heading",
          "text": "V. Por qué esto importa ahora"
        },
        {
          "type": "paragraph",
          "text": "En Argentina, la ley ómnibus del actual gobierno se llamó formalmente **Ley de Bases y Puntos de Partida para la Libertad de los Argentinos**: un calco del título de 1852. En marzo de 2026, en el Foro Económico del NOA en Tucumán, el presidente Milei lo describió como \"uno de nuestros grandes próceres de la libertad\" y \"el ideólogo de nuestra Constitución\". La Casa Rosada publicó en agosto de 2025 una efeméride oficial titulándolo \"prócer liberal\", con una cita de *Bases*: \"La patria es la libertad, es el orden, la riqueza, la civilización organizados en el suelo nativo\"."
        },
        {
          "type": "paragraph",
          "text": "La cita es exacta. La efeméride reproduce la primera mitad del párrafo. La segunda dice:"
        },
        {
          "type": "quote",
          "text": "\"Pues bien; esto se nos ha traído por Europa: es decir, Europa nos ha traído la noción del orden, la ciencia de la libertad, el arte de la riqueza, los principios de la civilización cristiana. Europa, pues, nos ha traído la patria.\""
        },
        {
          "type": "paragraph",
          "text": "El historiador Natalio Botana lo formuló con precisión en una entrevista de 2024: la lectura oficial \"no le presta atención al Alberdi propulsor de la educación pública financiada por los recursos fiscales, sino al Alberdi que habla de 'la omnipotencia del Estado'\". Y añadió una observación que vale para toda la región: \"siempre en política hay manipulación del pasado\". Patricia Kolesnicov publicó en 2026 un libro entero sobre el asunto, con un título que apunta al lugar exacto donde la apropiación se rompe: *Un presidente que sea como un rey. El Alberdi que Milei tiene en la cabeza*. Porque el Alberdi que diseñó un Ejecutivo deliberadamente fuerte incomoda a la lectura libertaria tanto como los pasajes raciales incomodan a la progresista."
        },
        {
          "type": "heading",
          "text": "VI. La lección, que no es sobre Alberdi"
        },
        {
          "type": "paragraph",
          "text": "Nada de esto es un argumento contra el actual gobierno argentino, ni contra el liberalismo. Es un argumento contra el uso de los muertos como aval."
        },
        {
          "type": "paragraph",
          "text": "Alberdi es un pensador de primer orden que escribió para un país de un millón de habitantes sin ferrocarriles, sin puertos y sin Estado, y que diseñó un programa para construir los tres. Ese programa incluía deuda externa para infraestructura, universidad gratuita, agencias estatales de inmigración, sueldos altos para funcionarios competentes y una advertencia explícita de que el gobierno barato es el más caro de todos."
        },
        {
          "type": "paragraph",
          "text": "Quien quiera hoy un Estado mínimo tiene derecho a defenderlo, y hay buenos argumentos para hacerlo. Lo que no puede es firmarlo con la letra de Alberdi."
        },
        {
          "type": "paragraph",
          "text": "Él ya escribió una vez, en vida, un texto entero para pedir que dejaran de hacerle eso."
        }
      ]
    },
    "seo": {
      "title": "Alberdi contra los libertarios",
      "description": "Argentina. Gobernar es poblar no dice lo que se cita. Él ya pidió que dejaran de hacerlo.",
      "tldr": [
        "La máxima que hoy adorna discursos, cuentas de redes sociales y leyes ómnibus en media América Latina no dice lo que se cree que dice. Ni siquiera está escrita como se la cita.",
        "En Bases y puntos de partida para la organización política de la República Argentina, publicado en 1852, la frase aparece exactamente dos veces, ambas en el capítulo XXXI, y ambas con un calificador que la cita popular amputa. El título del capítulo es \"En América gobernar es…",
        "\"Es pues esencialmente económico el fin de la política constitucional y del gobierno en América. Así, en América gobernar es poblar. Definir de otro modo el gobierno, es desconocer su misión sudamericana.\"",
        "Años más tarde, ya al final de su vida, Alberdi volvió sobre el asunto. Escribió unas Páginas explicativas cuyo propósito declarado era corregir a quienes lo citaban. El párrafo con el que abre esa sección es, para cualquiera que siga la política argentina contemporánea, casi…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «Alberdi contra los libertarios»?",
          "answer": "La pieza está situada en Argentina. Alberdi escribió un texto entero para protestar por el uso que se le estaba dando a su frase más famosa. Casi siglo y medio después, el problema es el mismo."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "ensayo",
      "rubric": "El Ensayo",
      "country": "Argentina",
      "excerpt": "La máxima que hoy adorna discursos, cuentas de redes sociales y leyes ómnibus en media América Latina no dice lo que se cree que dice. Ni siquiera está escrita como se la cita.",
      "sources": "Juan Bautista Alberdi, *Bases y puntos de partida para la organización política de la República Argentina* (1852), capítulos XIV, XV, XXX, XXXI y XXXII, texto íntegro · Alberdi, *Páginas explicativas* (1879) · Alberdi, *Sistema económico y rentístico de la Confederación Argentina* (1854) · Presidencia de la Nación Argentina, Casa Rosada: efeméride del 29/08/2025 y discurso del Foro Económico del NOA, Tucumán, 19/03/2026 · Natalio Botana, entrevista en *Rosario3*, 09/02/2024, reproducida por la Universidad Torcuato Di Tella · Patricia Kolesnicov, *Un presidente que sea como un rey. El Alberdi que Milei tiene en la cabeza*, Planeta, 2026 · Eduardo Zimmermann (Universidad de San Andrés), declaraciones en *Infobae*, 14/07/2026.",
      "editNote": "Nota de edición, importante. Las citas de *Bases* y de las *Páginas explicativas* fueron verificadas palabra por palabra contra el texto íntegro y son seguras. **El año de publicación de las *Páginas explicativas* debe fijarse contra edición impresa antes de publicar** —la literatura las data entre 1874 y 1879— y por eso el texto evita deliberadamente dar una fecha; una vez fijada, conviene incorporarla en la apertura y en el cierre. Las citas del *Sistema económico y rentístico* provienen de la edición de *Obras selectas* de 1920 digitalizada por OCR: **cotejar contra impreso antes de publicar**. Las declaraciones de Milei y de Botana provienen de extracción automática de las páginas de Casa Rosada y de UTDT respectivamente: **cotejar contra el original antes de entrecomillar**. No incluimos la frase que circula en la literatura académica sobre el costo en sangre y dinero de la Guerra del Paraguay, porque es una paráfrasis y no una cita textual de Alberdi."
    }
  },
  {
    "id": "contrapunto-cerrar-la-frontera",
    "title": "¿Debe un gobierno liberal cerrar la frontera?",
    "summary": "Dos respuestas, ochocientas palabras cada una, publicadas al mismo tiempo. La pregunta llega en un momento raro: por primera vez en una década, más gente cruza Panamá hacia el sur que hacia el norte.",
    "section": {
      "id": "agora",
      "label": "El Ágora"
    },
    "author": {
      "name": "El Ágora"
    },
    "publishedAt": "2026-08-19",
    "updatedAt": "2026-08-19",
    "readingMinutes": 7,
    "image": {
      "url": "/photos/plates/contrapunto-cerrar-la-frontera.jpg",
      "alt": "Mazo sobre un escritorio. El Contrapunto: ¿debe un gobierno liberal cerrar la frontera?"
    },
    "tags": [
      "migración",
      "Darién",
      "Chile",
      "Venezuela"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "quote",
          "text": "**Nota del editor.** En 2023, 520.085 personas cruzaron el Tapón del Darién rumbo al norte. En 2025 fueron 3.091. Entre el 1 de enero y el 2 de agosto de 2026, 324. En el mismo período de 2026, 5.393 personas hicieron el camino inverso —de norte a sur—, el 92% de ellas venezolanas, por mar desde Colón hacia el Caribe colombiano. El flujo de retorno es hoy **dieciséis veces mayor** que el de ida. Sobre ese fondo, la región discute qué hacer."
        },
        {
          "type": "heading",
          "text": "SÍ · El orden no es lo contrario de la libertad. Es su condición"
        },
        {
          "type": "paragraph",
          "text": "Hay una versión del liberalismo migratorio que confunde dos cosas distintas: la libertad de las personas para moverse y la obligación de un Estado de saber quién está dentro de sus fronteras. La primera es un principio defendible. La segunda es una función administrativa básica, y ningún país que la haya perdido la recuperó siendo generoso."
        },
        {
          "type": "paragraph",
          "text": "Chile tiene alrededor de trescientos treinta y siete mil migrantes en situación irregular. No \"indocumentados\" en el sentido burocrático: personas cuyo ingreso el Estado chileno no registró, cuya identidad no verificó y cuyos antecedentes no consultó. Eso no es una posición ideológica: es un hecho administrativo, y sus consecuencias no son abstractas."
        },
        {
          "type": "paragraph",
          "text": "El argumento liberal a favor del control no es económico. Concedo de entrada lo que la otra columna dirá: los estudios disponibles muestran que los migrantes venezolanos aportan más de lo que cuestan y delinquen menos que los nativos en proporción a su peso poblacional. Ese debate estaba saldado con los datos disponibles hasta 2019, y volveré sobre eso."
        },
        {
          "type": "paragraph",
          "text": "El argumento es institucional, y tiene tres partes."
        },
        {
          "type": "paragraph",
          "text": "**Primera: la ley que no se aplica no es ley.** Un Estado que establece requisitos de ingreso y luego regulariza masivamente a quienes no los cumplieron le enseña a todo el mundo —migrantes y ciudadanos— que las reglas escritas son sugerencias. Ese aprendizaje no se queda en la frontera. Contamina el cumplimiento tributario, el respeto a la propiedad y la disposición a obedecer sentencias. En sociedades con la fragilidad institucional latinoamericana, ese es un lujo que no podemos pagar."
        },
        {
          "type": "paragraph",
          "text": "**Segunda: el consentimiento no se puede dar por descontado.** El 51,4% de los latinoamericanos considera que la llegada de inmigrantes a su país es perjudicial. En Perú, el 80,4%. En Ecuador, el 80,2%. En Colombia —el país que más generosamente regularizó, con 2,3 millones de permisos otorgados— el 76,3%. Nótese el orden: Colombia hizo lo correcto según la evidencia económica, y su población lo rechaza en tres de cada cuatro casos."
        },
        {
          "type": "paragraph",
          "text": "Se puede responder que la opinión pública está mal informada. Es probablemente cierto. También es irrelevante como estrategia de gobierno. Una política migratoria que se sostiene contra el 76% de la ciudadanía dura exactamente hasta la siguiente elección, y su reemplazo no será una versión moderada: será el péndulo completo. Chile es la demostración. El decreto de regularización de ciento ochenta y dos mil personas que preparó el gobierno anterior fue frenado en marzo de 2026, y hoy la discusión no es cómo regularizar mejor sino cómo expulsar. **Quien no administra la migración con el consentimiento de su sociedad termina entregándosela a quien promete expulsiones.**"
        },
        {
          "type": "paragraph",
          "text": "**Tercera: hay evidencia de inflexión y hay que mirarla.** El estudio de referencia sobre migración y criminalidad —Bahar, Dooley y Selee para el Migration Policy Institute— es de 2020, con datos de 2019, y mostraba a los venezolanos claramente subrepresentados en delitos en Chile, Perú y Colombia. Pero el trabajo del CEP chileno con datos hasta 2022 encuentra que, si bien los extranjeros siguen subrepresentados en el total de condenas, su representación relativa aumenta desde 2018, y **en 2022 pasaron a estar sobrerrepresentados en condenas por homicidio**. No hay actualización comparable de los tres países con datos de 2024-2026. Quien sostiene hoy la conclusión de 2020 como si nada hubiera cambiado está citando un dato de hace siete años sobre un fenómeno que cambió de escala."
        },
        {
          "type": "paragraph",
          "text": "Nada de esto justifica la crueldad, ni las deportaciones sin debido proceso, ni el discurso que convierte a un migrante en sospechoso por serlo. Justifica algo más aburrido: fronteras que registran, sistemas que verifican, y vías legales de ingreso lo bastante amplias como para que la vía ilegal deje de ser la única disponible."
        },
        {
          "type": "paragraph",
          "text": "Un liberal serio no defiende fronteras abiertas. Defiende fronteras que funcionen, porque solo un Estado que sabe quién entra puede después darle derechos a esa persona."
        },
        {
          "type": "heading",
          "text": "NO · Cerrar la frontera es caro, ineficaz, y ahora además llega tarde"
        },
        {
          "type": "paragraph",
          "text": "Empiezo por lo mismo que concede la otra columna, porque conviene tenerlo escrito: un Estado debe saber quién está en su territorio. De acuerdo. La pregunta es qué política produce ese resultado, y ahí la evidencia es bastante inclemente con la posición restrictiva."
        },
        {
          "type": "paragraph",
          "text": "**Uno: la regularización funciona, y está medido.** El estudio del BID sobre el Permiso Especial de Permanencia colombiano —tres mil doscientos quince hogares encuestados, con seguimiento longitudinal y estimación por variables instrumentales— encontró que los migrantes regularizados, comparados con los irregulares, tienen un salario por hora 23% mayor, un ingreso mensual 15% mayor, veinte puntos porcentuales más de probabilidad de tener contrato laboral y doce puntos más de empleo formal. Su registro en el Sisbén sube cincuenta puntos; su acceso al régimen subsidiado de salud, treinta y dos. La prevalencia de ansiedad y depresión crónicas cae a la mitad."
        },
        {
          "type": "paragraph",
          "text": "Traducido: la regularización convierte trabajo informal en trabajo formal que cotiza. No es un gesto humanitario. Es política fiscal."
        },
        {
          "type": "paragraph",
          "text": "**Dos: el \"efecto llamada\" no aparece en los datos.** El mismo estudio midió la intención de permanencia a largo plazo: 91% entre los regularizados, 92% entre los irregulares. Sin diferencia significativa. El argumento de que regularizar atrae más migración —que es el eje retórico de toda la posición restrictiva— no se sostuvo cuando alguien fue a medirlo."
        },
        {
          "type": "paragraph",
          "text": "**Tres: cerrar no cierra.** Chile lanzó su Plan Escudo Fronterizo y los ingresos irregulares **subieron 53% en marzo de 2026**. Perú declaró estado de emergencia en tres distritos de Tacna en noviembre de 2025, con militares, suspensión de la inviolabilidad del domicilio y de la libertad de tránsito. Panamá lanzó la Operación Escudo de Acero en agosto de 2026 con más de seiscientos agentes. Lo que efectivamente vació el Darién no fue ninguna de esas operaciones: fue el cierre del destino final. Los flujos migratorios responden a la demanda de trabajo en el punto de llegada, no al despliegue policial en el punto de tránsito. Es una de las regularidades mejor establecidas de la literatura y cada gobierno de la región vuelve a descubrirla pagando por ella."
        },
        {
          "type": "paragraph",
          "text": "**Cuatro, y es el que cambia la conversación: el problema de 2026 no es el que estamos discutiendo.** El Darién registró trescientos veinticuatro cruces hacia el norte en siete meses. Cinco mil trescientos noventa y tres personas hicieron el camino inverso. Entre ellas, cincuenta y tres nacidas en Estados Unidos —hijos de migrantes irregulares—. Mientras tanto, una encuesta de ACNUR sobre 1.288 venezolanos en seis países encontró que algo más de un tercio contempla retornar a Venezuela, pero solo el 9% dentro de un año, y que cerca del 60% cita como obstáculo principal la falta de información fiable y **la incertidumbre sobre cómo el intento afectaría su estatus legal en el país donde vive**."
        },
        {
          "type": "paragraph",
          "text": "Ahí está el problema real, y ninguna de las políticas anunciadas en la región lo toca. Hay gente que quiere volver a su país y no lo hace porque teme que si le sale mal ya no pueda regresar al que la acogió. Un estatus migratorio que permitiera ir y volver sin perderlo produciría más retornos voluntarios que cualquier plan de expulsión, y a una fracción del costo."
        },
        {
          "type": "paragraph",
          "text": "**Cinco: la contradicción que nadie asume.** Los mismos países que rechazan la inmigración en tres de cada cuatro respuestas son países cuya población quiere emigrar en proporciones crecientes: del 21% en 2004 al 32% en 2023. Los migrantes intrarregionales pasaron de 3,7 millones en 1990 a catorce millones en 2024. América Latina no es un continente que reciba migración: es un continente que se mueve. Cada muro que levantamos contra el vecino lo levantamos contra la versión futura de nosotros mismos."
        },
        {
          "type": "paragraph",
          "text": "Que el Estado registre, verifique y controle: sí, sin reservas. Pero llamar a eso \"cerrar la frontera\" es confundir la función con la consigna. Y la consigna, medida donde se aplicó, sale cara y no funciona."
        }
      ]
    },
    "seo": {
      "title": "¿Debe un gobierno liberal cerrar la frontera?",
      "description": "Dos firmas. El Darién ahora corre de norte a sur. Chile, Colombia, Perú.",
      "tldr": [
        "Nota del editor. En 2023, 520.085 personas cruzaron el Tapón del Darién rumbo al norte. En 2025 fueron 3.091. Entre el 1 de enero y el 2 de agosto de 2026, 324. En el mismo período de 2026, 5.393 personas hicieron el camino inverso —de norte a sur—, el 92% de ellas…",
        "SÍ · El orden no es lo contrario de la libertad. Es su condición",
        "Hay una versión del liberalismo migratorio que confunde dos cosas distintas: la libertad de las personas para moverse y la obligación de un Estado de saber quién está dentro de sus fronteras. La primera es un principio defendible. La segunda es una función administrativa…",
        "Chile tiene alrededor de trescientos treinta y siete mil migrantes en situación irregular. No \"indocumentados\" en el sentido burocrático: personas cuyo ingreso el Estado chileno no registró, cuya identidad no verificó y cuyos antecedentes no consultó. Eso no es una posición…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «¿Debe un gobierno liberal cerrar la frontera?»?",
          "answer": "La pieza está situada en América Latina. Dos respuestas, ochocientas palabras cada una, publicadas al mismo tiempo. La pregunta llega en un momento raro: por primera vez en una década, más gente cruza Panamá hacia el sur que hacia el norte."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "contrapunto",
      "rubric": "El Contrapunto",
      "country": "América Latina",
      "excerpt": "Nota del editor. En 2023, 520.085 personas cruzaron el Tapón del Darién rumbo al norte. En 2025 fueron 3.091. Entre el 1 de enero y el 2 de agosto de 2026, 324. En el mismo período de 2026, 5.393 personas hicieron el…",
      "sources": "Dirección General de Migración y Servicio Nacional de Migración de Panamá, series 2021-2026 · ACNUR, encuesta a 1.288 venezolanos en seis países, trabajo de campo enero-marzo 2026, y *Global Trends* 2025 · Migración Colombia, datos de PPT al 22/07/2026 · Ibáñez, Moya, Ortega, Rodríguez Chatruc, Rozo y Urbina, *Salir de la sombra*, Monografía BID #992 · Bahar, Dooley y Selee, *Venezuelan Migration, Crime, and Misperceptions*, Migration Policy Institute / Brookings, 2020 · Vergara y Ugarte, *Inmigración y delincuencia: últimas cifras*, CEP Chile, julio 2023 · PNUD, *Informe sobre Democracia y Desarrollo 2026*, con datos de Latinobarómetro · Servicio Nacional de Migraciones de Chile · Decreto Supremo 135-2025-PCM (Perú) · DNU 366/2025 (Argentina).",
      "editNote": "Nota del editor: ambas columnas fueron escritas para ser leídas juntas y ninguna representa la posición editorial de Politarca. La sección publica un contrapunto por semana; al menos uno al mes debe tener como contraparte a alguien fuera del espectro editorial de la casa."
    }
  },
  {
    "id": "catorce",
    "title": "14",
    "summary": "El porcentaje de sus exportaciones que América Latina se vende a sí misma. Y va bajando.",
    "section": {
      "id": "erario",
      "label": "El Erario"
    },
    "author": {
      "name": "El Erario"
    },
    "publishedAt": "2026-08-18",
    "updatedAt": "2026-08-18",
    "readingMinutes": 6,
    "image": {
      "url": "/photos/plates/catorce.jpg",
      "alt": "Contratos comerciales. Números que mandan: el 14% del comercio latinoamericano es intrarregional."
    },
    "tags": [
      "CEPAL",
      "Mercosur",
      "comercio intrarregional"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Seiscientos sesenta millones de personas. El 46% de las reservas mundiales de litio, el 35% del cobre, el 28% del grafito, el 23% de las tierras raras. Idioma común en dieciocho países, frontera contigua en casi todos, husos horarios compatibles, marcos jurídicos emparentados."
        },
        {
          "type": "paragraph",
          "text": "Y **catorce por ciento**."
        },
        {
          "type": "paragraph",
          "text": "Esa es la proporción de las exportaciones latinoamericanas que tienen como destino la propia región, según el informe *Rupturas y oportunidades* que CEPAL presentó en Santiago el 4 de agosto de 2026 —producto de dieciocho meses de trabajo de una comisión que integraron, entre otros, Michelle Bachelet y Josep Borrell—. La comisión la describe como \"una de las tasas más bajas del mundo\"."
        },
        {
          "type": "paragraph",
          "text": "Lo interesante no es el nivel. Es la dirección."
        },
        {
          "type": "heading",
          "text": "El dato incómodo"
        },
        {
          "type": "paragraph",
          "text": "El BID, con otra base metodológica, mide en sus *Estimaciones de las Tendencias Comerciales* de 2026 que el coeficiente de comercio intrarregional **cayó de 13,7% en 2024 a 13,2% en 2025**. Las dos series no se suman ni se promedian: CEPAL redondea en catorce, el BID mide 13,2, y ambas apuntan a lo mismo. Y cayó en un año en que las exportaciones regionales crecieron 6,4%: Sudamérica 5,1%, Mesoamérica 7,2%, el Caribe 14,6%."
        },
        {
          "type": "paragraph",
          "text": "Es decir: la región exportó más y se integró menos. Vendió más al mundo y menos a sí misma. En años anteriores el indicador llegó a rondar el 19%."
        },
        {
          "type": "paragraph",
          "text": "El caso del Mercosur es todavía más elocuente porque es el bloque que existe precisamente para evitar esto. Según la Cancillería argentina, las exportaciones intrazona pasaron del 10,6% al 11,5% del total del bloque entre 2024 y 2025. Suena a mejora hasta que se agrega el punto de comparación: **en 2011 eran el 13%**. Treinta y cinco años después de firmarse el Tratado de Asunción, los cuatro socios comercian entre sí una proporción menor de lo que comerciaban hace quince años."
        },
        {
          "type": "heading",
          "text": "Por qué"
        },
        {
          "type": "paragraph",
          "text": "No es misterio ideológico. Son tres cosas medibles."
        },
        {
          "type": "paragraph",
          "text": "**Aranceles que siguen ahí.** El arancel externo común se acordó en Ouro Preto en diciembre de 1994, rige desde enero de 1995, y el propio bloque admite estar \"en revisión\". La rebaja general del 10% acordada en julio de 2022 excluyó, a pedido de Argentina, los sectores automotriz, textil, indumentaria, calzado, juguetes, lácteos y duraznos en conserva. En abril de 2025 los ministros acordaron ampliar las listas nacionales de excepciones en hasta cincuenta códigos arancelarios adicionales cada una. Argentina ya tenía cien productos exceptuados."
        },
        {
          "type": "paragraph",
          "text": "**Logística que no existe.** Más del 85% de la carga doméstica de la región se mueve por carretera. El índice de desempeño logístico latinoamericano promedia 2,66 sobre 5. Y el dato del BID que mejor ilustra el costo: enviar productos farmacéuticos por vía aérea a Estados Unidos cuesta, por cada diez mil kilómetros, alrededor de 0,23 dólares desde Alemania, Bélgica o China, y **más de ocho dólares desde Colombia**. Treinta y cinco veces más."
        },
        {
          "type": "paragraph",
          "text": "**Energía que no se conecta.** CEPAL estimó en enero de 2026 que existe potencial para *triplicar* el volumen actualmente intercambiado por gasoductos en América del Sur si se concretaran los proyectos de expansión ya identificados. Están identificados desde hace años."
        },
        {
          "type": "heading",
          "text": "El contraste que duele"
        },
        {
          "type": "paragraph",
          "text": "Mientras el comercio intrarregional retrocede, la región firma acuerdos hacia afuera. El acuerdo Mercosur-Unión Europea se firmó el 17 de enero de 2026, tras concluir negociaciones en diciembre de 2024, y su componente comercial interino se aplica provisionalmente **desde el 1 de mayo de 2026**. Argentina y Uruguay ratificaron el 26 de febrero; Paraguay el 4 de marzo. El componente político sigue esperando: el Parlamento Europeo suspendió su procedimiento el 21 de enero a la espera de un dictamen del Tribunal de Justicia que podría tardar hasta dos años, y cinco Estados miembros votaron en contra —Francia, Polonia, Irlanda, Austria y Hungría—."
        },
        {
          "type": "paragraph",
          "text": "La Alianza del Pacífico, por su parte, cumplió quince años en 2026 con el 99% del comercio de bienes entre sus miembros ya liberalizado. Cuatro países. Un 99% que no alcanza a mover el promedio regional."
        },
        {
          "type": "paragraph",
          "text": "Se puede leer de dos maneras. La optimista: la región se abre al mundo. La otra, que es la que sugieren los números: **América Latina encuentra más fácil negociar con Bruselas que con el país de al lado.**"
        },
        {
          "type": "paragraph",
          "text": "Catorce por ciento, y bajando. Es el precio que la región paga, todos los años, por no haberse tomado en serio su propio mercado."
        },
        {
          "type": "paragraph",
          "text": "**Gráfico sugerido:** serie del coeficiente de comercio intrarregional 2011-2025, con la línea del Mercosur superpuesta. Una sola línea descendente, sin adornos."
        }
      ]
    },
    "seo": {
      "title": "14: lo que América Latina se vende a sí misma",
      "description": "Catorce por ciento, y bajando. CEPAL, 4 de agosto de 2026.",
      "tldr": [
        "Seiscientos sesenta millones de personas. El 46% de las reservas mundiales de litio, el 35% del cobre, el 28% del grafito, el 23% de las tierras raras. Idioma común en dieciocho países, frontera contigua en casi todos, husos horarios compatibles, marcos jurídicos emparentados.",
        "Esa es la proporción de las exportaciones latinoamericanas que tienen como destino la propia región, según el informe Rupturas y oportunidades que CEPAL presentó en Santiago el 4 de agosto de 2026 —producto de dieciocho meses de trabajo de una comisión que integraron, entre…",
        "El BID, con otra base metodológica, mide en sus Estimaciones de las Tendencias Comerciales de 2026 que el coeficiente de comercio intrarregional cayó de 13,7% en 2024 a 13,2% en 2025. Las dos series no se suman ni se promedian: CEPAL redondea en catorce, el BID mide 13,2, y…",
        "Es decir: la región exportó más y se integró menos. Vendió más al mundo y menos a sí misma. En años anteriores el indicador llegó a rondar el 19%."
      ],
      "faq": [
        {
          "question": "¿De qué país es «14»?",
          "answer": "La pieza está situada en América Latina. El porcentaje de sus exportaciones que América Latina se vende a sí misma. Y va bajando."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "numeros",
      "rubric": "Números que mandan",
      "country": "América Latina",
      "excerpt": "Seiscientos sesenta millones de personas. El 46% de las reservas mundiales de litio, el 35% del cobre, el 28% del grafito, el 23% de las tierras raras. Idioma común en dieciocho países, frontera contigua en casi todos,…",
      "sources": "CEPAL, *Rupturas y oportunidades* (presentado el 04/08/2026) · BID, *Estimaciones de las Tendencias Comerciales: América Latina y el Caribe, Edición 2026* · Ministerio de Relaciones Exteriores de Argentina, *MERCOSUR: Evolución del comercio de bienes y servicios*, diciembre 2025 · Calatayud y Montes (eds.), *Logística en América Latina y el Caribe*, BID, 2021 · Banco Mundial, Logistics Performance Index · Sabbatella et al., *Integración energética en América Latina*, CEPAL, enero 2026 · Consejo de la Unión Europea, Comisión Europea (Access2Markets) y Dirección de Fiscalidad y Aduanas de la UE para el estado del acuerdo Mercosur-UE.",
      "editNote": "Nota de edición: las cifras comparativas de comercio intrarregional que suelen citarse para la Unión Europea (~60%) y Asia oriental no pudieron verificarse contra fuente primaria en el cierre de esta pieza y **fueron deliberadamente omitidas**. El argumento se construye sobre la serie propia de la región, que sí es verificable, y sobre la caracterización de CEPAL. Si se quieren incorporar comparaciones internacionales, la fuente a consultar es la matriz de comercio intrarregional de UNCTADstat o el *World Trade Statistical Review* de la OMC."
    }
  },
  {
    "id": "china-no-compro-america-latina",
    "title": "China no compró América Latina. La conectó — y ahora cobra el peaje",
    "summary": "El dinero chino cambió de forma sin que nadie lo anunciara: de préstamos por petróleo a puertos, cables, redes eléctricas y autos. Es una posición mucho más difícil de revertir, y Washington acaba de darse cuenta.",
    "section": {
      "id": "frontera",
      "label": "Frontera"
    },
    "author": {
      "name": "Corresponsalía Politarca"
    },
    "publishedAt": "2026-08-17",
    "updatedAt": "2026-08-17",
    "readingMinutes": 7,
    "image": {
      "url": "/photos/plates/china-no-compro-america-latina.jpg",
      "alt": "Escritorio de trabajo sobre un expediente. Chancay, Perú: el puerto chino y la jurisdicción del Estado."
    },
    "tags": [
      "China",
      "Chancay",
      "Perú",
      "Chile"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "El 1 de julio de 2026, una corte de apelaciones peruana revirtió un fallo de primera instancia y resolvió que el puerto de Chancay es infraestructura de uso público, y que por lo tanto el organismo regulador peruano puede \"regular, supervisar, inspeccionar y sancionar a los operadores\"."
        },
        {
          "type": "paragraph",
          "text": "El fallo de enero de 2026 que la corte revirtió había aceptado el argumento de COSCO Shipping Ports: por haber sido financiado con capital privado, el puerto no requería supervisión estatal."
        },
        {
          "type": "paragraph",
          "text": "Un puerto de mil trescientos millones de dólares, inaugurado en noviembre de 2024 con Xi Jinping conectado por videoconferencia, que reduce el tránsito marítimo a China a veintitrés días, y cuyo operador chino sostuvo durante un año y medio ante tribunales peruanos que el Estado del Perú no tenía jurisdicción sobre él."
        },
        {
          "type": "paragraph",
          "text": "Ahí está condensada la historia de la última década."
        },
        {
          "type": "heading",
          "text": "I. El dinero cambió de forma"
        },
        {
          "type": "paragraph",
          "text": "La imagen que la mayoría todavía tiene de China en América Latina corresponde a la década pasada: préstamos gigantescos respaldados por petróleo a Venezuela y Ecuador. Esa etapa terminó hace tiempo."
        },
        {
          "type": "paragraph",
          "text": "Los préstamos de los bancos estatales chinos a la región alcanzaron su pico en 2010, en torno a los treinta y cinco mil millones de dólares anuales. En 2022 fueron ochocientos sesenta y tres millones. En 2023, mil trescientos millones, repartidos en dos operaciones y un solo país: Brasil. En 2024 subieron a dos mil ochocientos millones, el mayor monto en cinco años, y aun así una fracción marginal de lo que fueron."
        },
        {
          "type": "paragraph",
          "text": "Lo que se contrajo fue el crédito soberano. Lo que se expandió fue otra cosa. Según el balance anual del Global Development Policy Center de la Universidad de Boston, en cinco años los proyectos de infraestructura crecieron 50%, la inversión en minerales de transición energética **más que se duplicó**, y la generación eólica y solar creció más de 50%."
        },
        {
          "type": "paragraph",
          "text": "Entre 2005 y 2017, minería e hidrocarburos concentraban cerca del 80% de la inversión china en la región. Hoy el dinero va a puertos, litio, redes eléctricas, cables submarinos y automóviles."
        },
        {
          "type": "paragraph",
          "text": "Es una diferencia crucial y casi nadie la nombra. Un préstamo se paga y se termina. Una red de distribución eléctrica no."
        },
        {
          "type": "heading",
          "text": "II. Lo que eso significa en concreto"
        },
        {
          "type": "paragraph",
          "text": "**Chile.** Empresas chinas controlan **dos tercios de la distribución eléctrica** del país. En Lima, la totalidad. En Brasil, alrededor del 12% de la generación y distribución."
        },
        {
          "type": "paragraph",
          "text": "**Automóviles.** En meses recientes, más del 80% de las ventas de vehículos eléctricos en Brasil fueron de marcas chinas; BYD tiene el 74% del mercado brasileño de eléctricos. Su planta de Camaçari, en Bahía, inaugurada en octubre de 2025 sobre el antiguo predio de Ford, es la mayor inversión de la compañía fuera de Asia. Great Wall Motor abrió en Iracemápolis en agosto de 2025. GAC anunció mil trescientos millones en Brasil en 2026."
        },
        {
          "type": "paragraph",
          "text": "**Litio.** CBC, filial de CATL, invertirá mil millones de dólares en plantas en Bolivia. Tianqi Lithium posee alrededor del 22% de SQM en Chile. Ganfeng opera varios proyectos en Argentina."
        },
        {
          "type": "paragraph",
          "text": "**Comercio.** El 32,7% de las exportaciones chilenas tuvo como destino China en 2025, casi el doble de la participación de Estados Unidos, que quedó en 17%. En Brasil, el 28,7%, con un superávit bilateral de 29.100 millones que equivale al **43% de todo el superávit comercial brasileño con el mundo**. En Perú, China concentra el 75,2% del valor de las exportaciones de cobre."
        },
        {
          "type": "paragraph",
          "text": "Hay una cifra que resume el conjunto y que debería preocupar más de lo que preocupa: el déficit comercial de América Latina con China alcanzó en 2024 el **1,4% del PIB regional, un récord histórico**. La región le vende materias primas —cobre sin refinar, soja, petróleo crudo, carne congelada— y le compra manufactura. Es la relación comercial que Prebisch describió en los años cincuenta, con otro socio."
        },
        {
          "type": "heading",
          "text": "III. La contradicción liberal"
        },
        {
          "type": "paragraph",
          "text": "Aquí es donde el asunto deja de ser geopolítico y se vuelve doctrinario, y donde un medio de estas convicciones tiene que ser honesto consigo mismo."
        },
        {
          "type": "paragraph",
          "text": "Chile firmó un tratado de libre comercio con China que entró en vigor en 2006 y lo amplió en 2019. Perú lo hizo en 2010, Costa Rica en 2011, Nicaragua en 2024. Ecuador ratificó el suyo en 2024. Cada uno de esos acuerdos es, en términos estrictos, una victoria del libre comercio, y quienes los firmaron los defendieron con los argumentos correctos."
        },
        {
          "type": "paragraph",
          "text": "El problema es que el socio no juega con las mismas reglas, y la región lo sabe."
        },
        {
          "type": "paragraph",
          "text": "Un liberal latinoamericano puede sostener tres posiciones ante esto, y las tres tienen costos."
        },
        {
          "type": "paragraph",
          "text": "**Puede sostener que el comercio es el comercio** y que la naturaleza política del socio es irrelevante mientras los contratos se cumplan. Es coherente. Pero entonces tiene que explicar el caso Chancay, donde el operador sostuvo ante tribunales que el Estado receptor no podía supervisarlo, y aceptar que la infraestructura crítica en manos de una empresa estatal de un régimen no liberal no es equivalente a la infraestructura en manos de una empresa privada de una democracia."
        },
        {
          "type": "paragraph",
          "text": "**Puede sostener que hay sectores estratégicos** —redes eléctricas, puertos, telecomunicaciones, cables submarinos— donde la propiedad importa y el Estado debe poder decir que no. Es sensato. Pero es exactamente el argumento que la izquierda usa para bloquear inversión extranjera, y quien lo adopte tendrá que aceptar que abrió esa puerta."
        },
        {
          "type": "paragraph",
          "text": "**Puede alinearse con Washington.** Y ahí está el problema del momento, porque Washington dejó de pedir."
        },
        {
          "type": "heading",
          "text": "IV. Lo que cambió en 2026"
        },
        {
          "type": "paragraph",
          "text": "La presión estadounidense sobre la región dejó de ser diplomática y pasó a ser operativa."
        },
        {
          "type": "paragraph",
          "text": "En **Panamá**, la Corte Suprema anuló el 30 de enero de 2026 las concesiones de dos puertos de la filial de CK Hutchison; el 10 de marzo COSCO suspendió servicios en Balboa; el 24 de marzo el reclamo por daños de la empresa superaba los dos mil millones de dólares. China respondió aumentando drásticamente las inspecciones a buques de bandera panameña. Panamá ya había abandonado la Franja y la Ruta en febrero de 2025 bajo presión estadounidense."
        },
        {
          "type": "paragraph",
          "text": "En **Uruguay**, el ministro de Economía Gabriel Oddone reveló el 24 de marzo de 2026 que Estados Unidos ejerció una presión \"inimaginable\" e \"insostenible\" para romper lazos comerciales con China."
        },
        {
          "type": "paragraph",
          "text": "En **Chile**, el entonces presidente Gabriel Boric denunció en marzo de 2026, en los últimos días de su mandato, \"amenazas explícitas\" de Estados Unidos por el proyecto de cable submarino de fibra óptica Chile-China Express; días después, el embajador estadounidense sugirió públicamente que el proyecto fracasaría."
        },
        {
          "type": "paragraph",
          "text": "En **Brasil**, el cónsul general estadounidense desalentó a empresas chinas de adquirir una concesión en el puerto de Santos, el mayor de América Latina."
        },
        {
          "type": "paragraph",
          "text": "**Colombia** impuso un arancel máximo del 35% a importaciones de acero y metalmecánica de países sin acuerdo comercial, China incluida. **México** encara una revisión del T-MEC centrada en frenar importaciones asiáticas y limitar la inversión china."
        },
        {
          "type": "paragraph",
          "text": "Y **Ecuador**, cuyo presidente declaró en marzo de 2026 que no puede distanciarse de China por ser su segundo socio comercial, resume el dilema de toda la región en una frase."
        },
        {
          "type": "heading",
          "text": "V. La posición honesta"
        },
        {
          "type": "paragraph",
          "text": "América Latina no fue comprada. Fue conectada, que es distinto y más difícil de deshacer."
        },
        {
          "type": "paragraph",
          "text": "Un préstamo vence. Un puerto opera treinta años. Una red de distribución eléctrica es un monopolio natural regulado que no cambia de manos sin una expropiación. Una flota de autobuses eléctricos define el estándar técnico de una ciudad por dos décadas. La huella china en la región no está en el balance de los bancos: está en los activos físicos que determinan cómo funciona un país todos los días."
        },
        {
          "type": "paragraph",
          "text": "Y la región enfrenta esa realidad sin haber discutido nunca, en ningún parlamento, qué activos considera estratégicos. No hay en América Latina un marco de revisión de inversión extranjera por seguridad nacional comparable al de Estados Unidos, la Unión Europea o Australia. Cada país improvisa cuando ya firmó."
        },
        {
          "type": "paragraph",
          "text": "Eso —y no la elección entre Washington y Pekín— es la conversación pendiente. Un país soberano puede decidir vender su red eléctrica a quien quiera. Lo que no puede es descubrir a quién se la vendió cuando el comprador le dice a un tribunal que no acepta ser supervisado."
        },
        {
          "type": "paragraph",
          "text": "Perú tardó dieciocho meses y dos instancias judiciales en establecer que el Estado peruano manda en el puerto peruano. Ganó. La próxima vez conviene tener la respuesta antes de firmar."
        }
      ]
    },
    "seo": {
      "title": "China no compró América Latina. La conectó",
      "description": "Perú. Chancay, redes eléctricas, cables. Un préstamo vence; un puerto opera treinta años.",
      "tldr": [
        "El 1 de julio de 2026, una corte de apelaciones peruana revirtió un fallo de primera instancia y resolvió que el puerto de Chancay es infraestructura de uso público, y que por lo tanto el organismo regulador peruano puede \"regular, supervisar, inspeccionar y sancionar a los…",
        "El fallo de enero de 2026 que la corte revirtió había aceptado el argumento de COSCO Shipping Ports: por haber sido financiado con capital privado, el puerto no requería supervisión estatal.",
        "Un puerto de mil trescientos millones de dólares, inaugurado en noviembre de 2024 con Xi Jinping conectado por videoconferencia, que reduce el tránsito marítimo a China a veintitrés días, y cuyo operador chino sostuvo durante un año y medio ante tribunales peruanos que el…",
        "La imagen que la mayoría todavía tiene de China en América Latina corresponde a la década pasada: préstamos gigantescos respaldados por petróleo a Venezuela y Ecuador. Esa etapa terminó hace tiempo."
      ],
      "faq": [
        {
          "question": "¿De qué país es «China no compró América Latina. La conectó — y ahora cobra el peaje»?",
          "answer": "La pieza está situada en Perú. El dinero chino cambió de forma sin que nadie lo anunciara: de préstamos por petróleo a puertos, cables, redes eléctricas y autos. Es una posición mucho más difícil de revertir, y Washington acaba de darse cuenta."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "pieza",
      "rubric": "Frontera",
      "country": "Perú",
      "excerpt": "El 1 de julio de 2026, una corte de apelaciones peruana revirtió un fallo de primera instancia y resolvió que el puerto de Chancay es infraestructura de uso público, y que por lo tanto el organismo regulador peruano…",
      "sources": "Rebecca Ray y Enrique Dussel Peters, *China-Latin America and the Caribbean Economic Bulletin, 2025 Edition*, Boston University Global Development Policy Center · *Chinese Loans to Latin America and the Caribbean Database*, Inter-American Dialogue y BU GDP Center · COSCO Shipping Ports, comunicado de inauguración de Chancay (14/11/2024) · *Maritime Executive*, 02/07/2026, sobre el fallo de apelaciones peruano · Yanran Xu, \"China's Green-Tech Push in Latin America Is Gaining Traction\", *Americas Quarterly*, 09/02/2026 · Council on Foreign Relations, *China in Latin America: March 2026* · AS/COA, \"China's Free-Trade Agreements in Latin America\" · Subrei, Banco Central y Aduanas de Chile, vía BioBioChile (06/03/2026) · Conselho Empresarial Brasil-China, *Comércio Brasil-China*, edición 198, enero 2026 · ProActivo (Perú), 26/02/2026, sobre exportaciones de cobre.",
      "editNote": "Nota de edición: existe una discrepancia metodológica entre la serie de comercio bilateral del Global Development Policy Center y la que publica la agencia Xinhua (que reportó superación de los 500.000 millones de dólares en 2024). Ambas se atribuyen a su fuente y no se promedian. La participación total de China en las exportaciones peruanas no pudo cerrarse contra fuente oficial única; se cita únicamente el dato verificado del cobre."
    }
  },
  {
    "id": "informalidad-mercado-laboral",
    "title": "La informalidad no es un problema del mercado laboral. Es el mercado laboral.",
    "summary": "Casi la mitad de los trabajadores latinoamericanos está fuera del sistema. Las tres explicaciones que circulan son incompletas, y hay una investigación brasileña que las ordena.",
    "section": {
      "id": "erario",
      "label": "El Erario"
    },
    "author": {
      "name": "El Erario"
    },
    "publishedAt": "2026-08-16",
    "updatedAt": "2026-08-16",
    "readingMinutes": 8,
    "image": {
      "url": "/photos/plates/informalidad-mercado-laboral.jpg",
      "alt": "Oficina de trabajo. La informalidad no es una anomalía: es el mercado laboral latinoamericano."
    },
    "tags": [
      "informalidad",
      "OIT",
      "Colombia",
      "Brasil"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "En Bolivia, el 82,2% de los trabajadores es informal. En Ecuador, el 70,1%. En Perú, el 69,8%. En Guatemala, el 66,2%; en Paraguay, el 64,3%; en Colombia, el 54,3%; en México, el 52,4%. Argentina está en 42,9%, Brasil en 35,6%, Costa Rica en 35,5%, Chile en 25,1% y Uruguay en 22,4%."
        },
        {
          "type": "paragraph",
          "text": "El promedio regional que publicó la OIT en agosto de 2026, sobre quince países, es **47,4%**."
        },
        {
          "type": "paragraph",
          "text": "Se cita habitualmente como un problema del mercado laboral, junto al desempleo o la brecha salarial. Es un error de encuadre. Con cifras así, la informalidad no es una anomalía dentro del mercado laboral latinoamericano: **es la forma predominante en la mayoría de los países de la región** y roza la mitad del empleo regional."
        },
        {
          "type": "paragraph",
          "text": "Eso cambia la pregunta. No es \"cómo reducimos la informalidad\". Es \"por qué el arreglo formal le resulta inconveniente a casi la mitad de la economía\"."
        },
        {
          "type": "heading",
          "text": "Qué significa exactamente \"informal\""
        },
        {
          "type": "paragraph",
          "text": "Conviene precisarlo porque el debate se enreda cuando no se hace."
        },
        {
          "type": "paragraph",
          "text": "La norma vigente es la Resolución I de la 21ª Conferencia Internacional de Estadísticos del Trabajo, adoptada el 20 de octubre de 2023. Su criterio central para la ocupación informal es simple: **la ausencia de cotizaciones del empleador al seguro social obligatorio**. Se complementa con la falta de reconocimiento formal de la relación laboral, la ausencia de vacaciones pagas o licencia por enfermedad, la falta de contrato escrito y la no deducción del impuesto a la renta."
        },
        {
          "type": "paragraph",
          "text": "De ahí se sigue algo que suele pasarse por alto: cuando la OIT informa que solo el 31% de la población latinoamericana en edad de trabajar cotiza activamente a un sistema de pensiones, y que el 58,3% de quienes superan la edad de jubilación recibe una pensión contributiva, **no son dos datos independientes**. Son las dos puntas de la misma cadena, medidas sobre cohortes distintas el mismo año: lo que hoy no se cotiza es la pensión que no existirá dentro de treinta años, y ya está contabilizada."
        },
        {
          "type": "heading",
          "text": "Las tres explicaciones que circulan"
        },
        {
          "type": "paragraph",
          "text": "**La explicación de la derecha: cuesta demasiado contratar formalmente.**"
        },
        {
          "type": "paragraph",
          "text": "Tiene evidencia a favor. Argentina es el caso extremo regional: la carga social total equivale al 34,6% del costo laboral del trabajador promedio, con aportes personales del 13,4% —frente a un promedio OCDE de 8,1%— y contribuciones patronales del 21,2%, contra un promedio internacional del 13,4%. Solo Austria y Francia la superan. Uruguay ronda el 22,5%; Paraguay, el 16,5%."
        },
        {
          "type": "paragraph",
          "text": "Pero el promedio regional no acompaña la tesis. En la única medición armonizada disponible para América Latina, la cuña fiscal regional era del 21,7% del costo laboral frente al 35,9% de la OCDE. **La región grava el trabajo formal considerablemente menos que los países desarrollados y tiene una informalidad varias veces mayor.** Chile, con una cuña del 7,2% en la medición OCDE de 2024, tiene una de las tasas más bajas de la región —aunque Uruguay, con una carga social bastante mayor, la tiene todavía más baja—. Y Colombia, con cuña cero para el trabajador promedio en esa misma medición tras la eliminación parcial de parafiscales que describimos más abajo, tiene 54,3%."
        },
        {
          "type": "paragraph",
          "text": "La carga importa. No basta."
        },
        {
          "type": "paragraph",
          "text": "**La explicación estructuralista: la informalidad es un síntoma de pobreza, no una elección.**"
        },
        {
          "type": "paragraph",
          "text": "También tiene evidencia, y es demoledora. Rafael La Porta y Andrei Shleifer documentaron que las firmas informales producen alrededor del **20% del valor agregado por empleado** de las formales. Y el dato que ordena todo lo demás: **el 7% de los gerentes de firmas informales tiene título universitario, contra el 76% en las formales.**"
        },
        {
          "type": "paragraph",
          "text": "Su conclusión es que las firmas informales \"son demasiado ineficientes para sobrevivir en el sector formal\", y que los experimentos de campo muestran que simplificar el registro tiene efectos mínimos sobre la formalización. No se quedan afuera por trámites. Se quedan afuera porque no aguantarían adentro."
        },
        {
          "type": "paragraph",
          "text": "**La explicación institucionalista: falta fiscalización.**"
        },
        {
          "type": "paragraph",
          "text": "El Banco Mundial identifica la calidad burocrática y el control de la corrupción entre los determinantes principales de la informalidad, y documenta que los países con informalidad por encima de la mediana recaudan entre cinco y doce puntos del PIB menos que los que están por debajo."
        },
        {
          "type": "heading",
          "text": "El trabajo que las ordena"
        },
        {
          "type": "paragraph",
          "text": "Hay una investigación que permite ponderar las tres, y es probablemente el mejor trabajo empírico disponible sobre el tema: Gabriel Ulyssea, *Firms, Informality, and Development: Theory and Evidence from Brazil*, publicado en la *American Economic Review* en agosto de 2018."
        },
        {
          "type": "paragraph",
          "text": "Su primer hallazgo desarma una intuición generalizada: **alrededor del 40% del empleo informal brasileño ocurre dentro de firmas formales.** No son empresas clandestinas. Son empresas registradas, que pagan impuestos, con trabajadores sin registrar. Cualquier política dirigida a formalizar empresas no toca a ese 40%."
        },
        {
          "type": "paragraph",
          "text": "El segundo hallazgo clasifica a las firmas informales en tres tipos, y las proporciones importan:"
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            "**48,8% de supervivencia:** no podrían sobrevivir siendo formales bajo ninguna circunstancia.",
            "**41,9% \"parásitas\":** podrían sobrevivir formales, pero eligen la informalidad porque les da ventaja de costos.",
            "**9,3% \"de Soto\":** querrían formalizarse y están bloqueadas por barreras de entrada."
          ]
        },
        {
          "type": "paragraph",
          "text": "El tercer hallazgo son las simulaciones, y son las que deberían leer los ministros de Trabajo de la región:"
        },
        {
          "type": "table",
          "head": [
            "Política",
            "Efecto"
          ],
          "rows": [
            [
              "Reducir costos de entrada",
              "Firmas informales −25 pp; **trabajadores informales prácticamente sin cambio**; producto +4,2%; productividad total de factores −6,1%"
            ],
            [
              "Reducir 20 pp el impuesto a la nómina",
              "Caída sustancial de trabajadores informales; **productividad +8,7%**; producto casi constante"
            ],
            [
              "Más fiscalización sobre firmas",
              "Firmas informales caen a 21,1%; trabajadores informales −13 pp; producto +3,2%; **bienestar −6,7%**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Tres lecciones que la política regional ignora sistemáticamente."
        },
        {
          "type": "paragraph",
          "text": "**Una:** facilitar el registro de empresas —la reforma preferida de los organismos multilaterales durante veinte años— reduce fuertemente la informalidad de firmas y deja el empleo informal prácticamente donde estaba. Cambia el estatus legal de las empresas sin cambiar la situación de los trabajadores, que es lo que importa."
        },
        {
          "type": "paragraph",
          "text": "**Dos:** bajar los impuestos al trabajo es la única de las tres políticas que sube la productividad de manera significativa."
        },
        {
          "type": "paragraph",
          "text": "**Tres:** perseguir con fiscalización reduce la informalidad y **destruye bienestar**, porque el 48,8% de supervivencia no se formaliza: desaparece, y con él, el ingreso de esos hogares."
        },
        {
          "type": "paragraph",
          "text": "En palabras del propio Ulyssea: informalidad de firmas e informalidad laboral \"no se mueven necesariamente en la misma dirección\". Es la frase que debería estar colgada en la pared de cualquier equipo que diseñe una reforma laboral en la región."
        },
        {
          "type": "heading",
          "text": "El caso que funcionó"
        },
        {
          "type": "paragraph",
          "text": "Colombia hizo, en 2012, exactamente lo que la simulación de Ulyssea sugiere."
        },
        {
          "type": "paragraph",
          "text": "La Ley 1607, implementada desde mayo de 2013, eliminó contribuciones patronales para trabajadores que ganaran menos de diez salarios mínimos: 2% del SENA, 3% del ICBF y, desde enero de 2014, 8,5% de salud. **Trece puntos y medio porcentuales de reducción.**"
        },
        {
          "type": "paragraph",
          "text": "La evaluación de Kugler, Kugler y Herrera Prada, con diferencias en diferencias sobre registros administrativos de seguridad social, midió los efectos sobre los trabajadores alcanzados:"
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            "Probabilidad de tener contrato escrito: **+8,5 puntos porcentuales**",
            "Cotización a salud y pensión: **+12,4 puntos**",
            "Cotización a pensión: +11,1 puntos",
            "Cobertura de riesgos laborales: +17,1 puntos",
            "Transición al empleo formal: **+3,5 puntos, un aumento del 15,2%**",
            "En manufactura, proporción de trabajadores permanentes: **+10 puntos**"
          ]
        },
        {
          "type": "paragraph",
          "text": "Los efectos fueron notablemente mayores en empresas pequeñas."
        },
        {
          "type": "paragraph",
          "text": "Es la evidencia causal más sólida que existe en la región sobre una reforma que redujo informalidad. Y trece años después, Colombia sigue con 54,3%. Lo que muestra el caso colombiano no es que el problema se resuelva con una ley: es que se mueve, en la dirección correcta y en la magnitud medida, cuando se ataca el precio del trabajo formal en el tramo bajo de la distribución salarial."
        },
        {
          "type": "heading",
          "text": "Lo que no sabemos, y conviene decirlo"
        },
        {
          "type": "paragraph",
          "text": "Brasil aprobó su reforma laboral en julio de 2017 y su informalidad viene cayendo desde 2022, hasta el 37,5% en el trimestre que cerró en enero de 2026, el nivel más bajo desde julio de 2020. Es tentador conectar ambas cosas. **No existe ninguna evaluación causal creíble que lo haga.** El único trabajo con método de control sintético que revisamos analiza el efecto sobre el desempleo —no sobre la informalidad— y no encuentra efecto estadísticamente significativo. El propio IBGE atribuye la caída reciente a la reducción del empleo sin registro en el sector privado y a la expansión del registro de autónomos, no a la reforma de 2017."
        },
        {
          "type": "paragraph",
          "text": "Argentina publicó la Ley 27.802 de Modernización Laboral el 6 de marzo de 2026, con un nuevo régimen indemnizatorio, un Fondo de Cese Laboral e incentivos fiscales al empleador que registre trabajadores durante el primer año. Tiene menos de seis meses. Cualquier cifra de resultado que se publique hoy es especulación, incluida la que publique el gobierno."
        },
        {
          "type": "heading",
          "text": "La conclusión que se desprende"
        },
        {
          "type": "paragraph",
          "text": "La informalidad latinoamericana tiene tres capas y cada una necesita una herramienta distinta."
        },
        {
          "type": "paragraph",
          "text": "La capa \"de Soto\" —una de cada diez firmas informales— se resuelve con trámites simples. Es la más chica y es la que veinte años de política pública atacaron."
        },
        {
          "type": "paragraph",
          "text": "La capa \"parásita\" —cuatro de cada diez— se resuelve bajando el costo relativo del trabajo formal, que es lo que hizo Colombia con resultados medidos."
        },
        {
          "type": "paragraph",
          "text": "La capa de supervivencia —casi la mitad— **no se resuelve con política laboral en absoluto**. Se resuelve con productividad, y la productividad se resuelve con educación, crédito y capacidad de gestión. El dato de La Porta y Shleifer —7% de gerentes universitarios contra 76%— dice que ese 48,8% no está afuera del sistema formal por un problema de incentivos. Está afuera porque nadie le enseñó a estar adentro."
        },
        {
          "type": "paragraph",
          "text": "Un gobierno que anuncia una reforma laboral y espera que la informalidad caiga está atacando, en el mejor de los casos, la mitad del problema. La otra mitad se llama sistema educativo, y su plazo de maduración es de veinte años. Ningún ciclo electoral latinoamericano dura tanto, y ese —no la carga patronal— es el verdadero motivo por el que este problema lleva medio siglo sin resolverse."
        }
      ]
    },
    "seo": {
      "title": "La informalidad no es un problema del mercado laboral",
      "description": "OIT, agosto 2026: 47,4% informal. Ulyssea (AER 2018) ordena las tres explicaciones.",
      "tldr": [
        "En Bolivia, el 82,2% de los trabajadores es informal. En Ecuador, el 70,1%. En Perú, el 69,8%. En Guatemala, el 66,2%; en Paraguay, el 64,3%; en Colombia, el 54,3%; en México, el 52,4%. Argentina está en 42,9%, Brasil en 35,6%, Costa Rica en 35,5%, Chile en 25,1% y Uruguay en…",
        "El promedio regional que publicó la OIT en agosto de 2026, sobre quince países, es 47,4%.",
        "Se cita habitualmente como un problema del mercado laboral, junto al desempleo o la brecha salarial. Es un error de encuadre. Con cifras así, la informalidad no es una anomalía dentro del mercado laboral latinoamericano: es la forma predominante en la mayoría de los países de…",
        "Eso cambia la pregunta. No es \"cómo reducimos la informalidad\". Es \"por qué el arreglo formal le resulta inconveniente a casi la mitad de la economía\"."
      ],
      "faq": [
        {
          "question": "¿De qué país es «La informalidad no es un problema del mercado laboral. Es el mercado laboral.»?",
          "answer": "La pieza está situada en América Latina. Casi la mitad de los trabajadores latinoamericanos está fuera del sistema. Las tres explicaciones que circulan son incompletas, y hay una investigación brasileña que las ordena."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "pieza",
      "rubric": "El Erario",
      "country": "América Latina",
      "excerpt": "En Bolivia, el 82,2% de los trabajadores es informal. En Ecuador, el 70,1%. En Perú, el 69,8%. En Guatemala, el 66,2%; en Paraguay, el 64,3%; en Colombia, el 54,3%; en México, el 52,4%. Argentina está en 42,9%, Brasil…",
      "sources": "OIT, tabla de informalidad laboral por país (agosto 2026) y *Panorama Laboral 2025 de América Latina y el Caribe* · OIT, Resolución I de la 21ª CIET (ICLS/21/2023/Res. I) · OIT, *World Social Protection Report 2024–26* · Gabriel Ulyssea, \"Firms, Informality, and Development: Theory and Evidence from Brazil\", *American Economic Review* 108(8), agosto 2018 · La Porta y Shleifer, \"Informality and Development\", *Journal of Economic Perspectives* 28(3), 2014 (NBER WP 20205) · Kugler, Kugler y Herrera Prada, *Do Payroll Tax Breaks Stimulate Formality? Evidence from Colombia's Reform*, NBER WP 23308, abril 2017 · Banco Mundial, *The Long Shadow of Informality* (Ohnsorge & Yu, eds., 2021) · Perry et al., *Informality: Exit and Exclusion*, Banco Mundial, 2007 · OCDE/BID/CIAT, *Taxing Wages in Latin America and the Caribbean 2016* · OCDE, *Taxing Wages 2025* · IARAF (Argentina) · IBGE, PNAD Contínua · Ley 27.802 (Argentina, 06/03/2026).",
      "editNote": "Nota de edición: los datos de cuña fiscal armonizados para América Latina son de 2013 —no existe edición posterior del reporte OCDE/BID/CIAT— y se identifican como tales. La tasa de informalidad de Brasil difiere entre la serie de la OIT (35,6%) y la del IBGE (37,5%) por período y armonización: no deben graficarse juntas."
    }
  },
  {
    "id": "la-iglesia-que-si-llega",
    "title": "La iglesia que sí llega",
    "summary": "En la Ciudad de Guatemala hay unos doscientos centros pentecostales de rehabilitación de adicciones, con seis mil internos. La cárcel de máxima seguridad del país tiene mil quinientos. Ninguna política pública explica eso; ninguna política pública lo mira.",
    "section": {
      "id": "vida-comun",
      "label": "Vida común"
    },
    "author": {
      "name": "Crónica Politarca"
    },
    "publishedAt": "2026-08-15",
    "updatedAt": "2026-08-15",
    "readingMinutes": 9,
    "image": {
      "url": "/photos/plates/la-iglesia-que-si-llega.jpg",
      "alt": "Estantería de una sala común. Vida común: la iglesia evangélica que llega donde el Estado no."
    },
    "tags": [
      "Guatemala",
      "evangélicos",
      "Pew",
      "Brasil"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Un adicto guatemalteco que necesite tratamiento tiene, en la práctica, dos opciones: el sistema público de salud mental, o una casa pentecostal de rehabilitación. El antropólogo Kevin Lewis O'Neill contó, en un trabajo publicado en 2020, alrededor de doscientos de estos centros en la Ciudad de Guatemala y sus alrededores, con unas seis mil personas internadas. Son instituciones exclusivamente masculinas, de reclusión informal, sostenidas económicamente por madres, hermanas y esposas que además aportan trabajo voluntario, a menudo mientras sus familiares están internados contra su voluntad."
        },
        {
          "type": "paragraph",
          "text": "O'Neill hace la comparación que corresponde: seis mil internos en centros religiosos informales, frente a mil quinientos en la cárcel de máxima seguridad del país. La proliferación, escribe, refleja la inadecuación de la infraestructura formal de tratamiento."
        },
        {
          "type": "paragraph",
          "text": "Es decir: en Guatemala, la principal institución de internamiento de personas con adicciones no es del Estado. Es evangélica, no está regulada, y nadie la diseñó."
        },
        {
          "type": "paragraph",
          "text": "Ese hecho —repetido con variantes en media región— es el asunto de esta nota. Pero antes hay que desmontar la historia que se cuenta habitualmente sobre él, porque los datos recientes no la sostienen."
        },
        {
          "type": "heading",
          "text": "I. El avance evangélico no está pasando donde creemos"
        },
        {
          "type": "paragraph",
          "text": "La narrativa dominante dice que América Latina se está volviendo evangélica. Los datos de 2024 y 2025 dicen algo más específico y más interesante."
        },
        {
          "type": "paragraph",
          "text": "Pew Research Center comparó, en un estudio publicado en enero de 2026, la composición religiosa de seis países latinoamericanos con la que había medido diez años antes. Los resultados:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "Católicos",
            "Protestantes",
            "Sin religión"
          ],
          "rows": [
            [
              "Brasil",
              "61% → **46%**",
              "26% → **29%**",
              "8% → **15%**"
            ],
            [
              "Chile",
              "64% → **46%**",
              "17% → **19%**",
              "16% → **33%**"
            ],
            [
              "Argentina",
              "71% → **58%**",
              "15% → **16%**",
              "11% → **24%**"
            ],
            [
              "Colombia",
              "79% → **60%**",
              "13% → **15%**",
              "6% → **23%**"
            ],
            [
              "México",
              "81% → **67%**",
              "9% → **9%**",
              "7% → **20%**"
            ],
            [
              "Perú",
              "76% → **67%**",
              "17% → **18%**",
              "4% → **12%**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "La conclusión textual de Pew es que \"el protestantismo se ha mantenido relativamente estable en la región\". En una década, el crecimiento evangélico en estos seis países va de cero a tres puntos porcentuales. Lo que se derrumba es el catolicismo, con caídas de nueve a diecinueve puntos. Y lo que explota son los \"sin religión\": entre siete y diecisiete puntos."
        },
        {
          "type": "paragraph",
          "text": "En **Argentina, Chile, Colombia y México ya hay más adultos sin afiliación religiosa que protestantes**. La proporción de protestantes que se identifican como pentecostales ha caído en la última década. Y no hay diferencias significativas por edad ni por género en la identificación protestante: la imagen del joven evangélico en ascenso no aparece en los datos."
        },
        {
          "type": "paragraph",
          "text": "Donde el crecimiento sí es real es en dos lugares. **Centroamérica**, donde el colapso católico fue temprano y masivo —Honduras pasó del 94% católico en 1970 al 46% en 2014; Guatemala, del 91% al 50%; El Salvador, del 93% al 50%— y donde Latinobarómetro registra hoy 43% de evangélicos en Honduras, 40% en Guatemala, 35% en El Salvador. Y **Brasil**, donde el censo del IBGE de 2022 midió 26,9% de evangélicos frente a 21,7% en 2010: cinco puntos y dos décimas de crecimiento en doce años, mientras los católicos caían casi ocho puntos hasta el 56,7%."
        },
        {
          "type": "paragraph",
          "text": "La historia correcta no es \"América Latina se vuelve evangélica\". Es: **Centroamérica y Brasil se volvieron evangélicos; el resto de Sudamérica se está secularizando; y en ambos casos el que pierde es el mismo.**"
        },
        {
          "type": "heading",
          "text": "II. Quiénes son"
        },
        {
          "type": "paragraph",
          "text": "El perfil socioeconómico es el dato que conecta todo lo demás."
        },
        {
          "type": "paragraph",
          "text": "En Chile, según la Encuesta Bicentenario UC, los evangélicos son el 25% del estrato bajo, el 14% de la clase media y el **6% de la clase alta**. Es una estratificación de clase casi perfecta."
        },
        {
          "type": "paragraph",
          "text": "En Brasil, el censo de 2022 muestra que seis de cada diez evangélicos se declaran pardos o negros —49,1% y 12% respectivamente—, mientras que entre los católicos el grupo más numeroso es el de quienes se declaran blancos, con 45,9%. Los evangélicos están sobrerrepresentados en el Norte (36,8% de la población) y el Centro-Oeste (31,4%), y son mayoría absoluta en varios municipios. El evangelismo brasileño es demográficamente más negro y más pardo que el catolicismo."
        },
        {
          "type": "paragraph",
          "text": "Pew encuentra además que en Argentina, Chile y Perú, a mayor nivel educativo, menor probabilidad de identificarse como protestante: en Argentina, 12% entre los de más educación contra 20% entre los de menos."
        },
        {
          "type": "paragraph",
          "text": "Es, en términos sociológicos, la iglesia de la periferia urbana pobre y no blanca. Exactamente la población a la que el Estado latinoamericano llega peor."
        },
        {
          "type": "heading",
          "text": "III. Por qué crece: lo que dicen los propios conversos"
        },
        {
          "type": "paragraph",
          "text": "Aquí hay que resistir la tentación de la explicación fácil, porque los datos la desmienten."
        },
        {
          "type": "paragraph",
          "text": "En su gran encuesta regional de 2014 —la última que cubrió toda América Latina, y no solo los seis países del estudio de 2026—, Pew preguntó a los ex católicos por qué se cambiaron. Las razones más citadas fueron espirituales y comunitarias: \"buscaba una conexión personal con Dios\" (entre 67% y 93% según el país), \"disfrutaba el estilo de culto\" (55% a 80%), \"quería mayor énfasis en la moralidad\" (36% a 81%). Y una que interesa especialmente: \"encontré una iglesia que ayuda más a sus miembros\", entre 41% y 68% —68% en Honduras, 67% en Nicaragua, 66% en Guatemala—."
        },
        {
          "type": "paragraph",
          "text": "En cambio, \"mejor futuro financiero\" fue señalado por entre el 4% y el 23%. Pew concluye que \"relativamente pocos ex católicos dicen que crisis o circunstancias de vida fueron razones importantes\"."
        },
        {
          "type": "paragraph",
          "text": "La lectura honesta, entonces, no es que la iglesia evangélica sustituye al Estado como proveedor de servicios. Es más sutil: **sustituye al Estado como proveedor de pertenencia**. La red de contención comunitaria pesa mucho; el cálculo material, poco."
        },
        {
          "type": "paragraph",
          "text": "Y hay un dato de la misma encuesta de 2014 que muestra que esa pertenencia se paga: qué proporción de fieles entrega un porcentaje fijo de su ingreso a su iglesia."
        },
        {
          "type": "table",
          "head": [
            "País",
            "Protestantes",
            "Católicos"
          ],
          "rows": [
            [
              "Perú",
              "**66%**",
              "12%"
            ],
            [
              "Bolivia",
              "74%",
              "35%"
            ],
            [
              "Venezuela",
              "71%",
              "18%"
            ],
            [
              "Brasil",
              "70%",
              "39%"
            ],
            [
              "Colombia",
              "69%",
              "39%"
            ],
            [
              "Argentina",
              "49%",
              "15%"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "En todos los países medidos, la brecha supera los veinte puntos."
        },
        {
          "type": "paragraph",
          "text": "Póngase ese dato junto al de la nota anterior de esta serie. CEPAL documenta que en la mayoría de los países latinoamericanos \"el 80% de ingresos inferiores no aporta a la recaudación\" del impuesto a la renta, o lo hace en una fracción muy pequeña. Es decir: **la misma población a la que el impuesto a la renta apenas alcanza —y que, como mostramos en la nota anterior de esta serie, sí paga cada vez que compra— está cotizando además voluntariamente, sin coerción y con altísima adhesión, a una institución paralela que le devuelve servicios que el Estado no le da.**"
        },
        {
          "type": "paragraph",
          "text": "Dos tercios de los evangélicos peruanos diezman. El Estado peruano recauda el 16,3% del PIB, una de las presiones tributarias más bajas de la región."
        },
        {
          "type": "paragraph",
          "text": "No es un argumento contra los impuestos. Es un dato sobre la disposición a contribuir cuando el contribuyente ve el retorno."
        },
        {
          "type": "heading",
          "text": "IV. El lado que la nota no puede omitir"
        },
        {
          "type": "paragraph",
          "text": "Sería una nota deshonesta si terminara en la contención comunitaria."
        },
        {
          "type": "paragraph",
          "text": "En diciembre de 2025, la BBC documentó la consolidación del llamado Complexo de Israel, cinco comunidades de la Zona Norte de Río de Janeiro constituidas como territorio unificado en 2020 y marcadas por una Estrella de David de neón que la policía destruyó el 11 de marzo de 2025. Según esa investigación y las causas abiertas en su contra, lo lidera Álvaro Malaquias Santa Rosa, \"Peixão\", del Terceiro Comando Puro. La investigadora Christina Vital da Cunha, de la Universidad Federal Fluminense, ha documentado cómo la iconografía neopentecostal desplazó a la simbología afrobrasileña en los murales de esas comunidades. Kristina Hinz, de la UERJ, identifica tres rasgos del TCP: menor conflicto con la policía, alianza con el Primeiro Comando da Capital y proximidad con las milicias."
        },
        {
          "type": "paragraph",
          "text": "En Ceará, al menos cuatro terreiros de umbanda fueron cerrados en Maracanaú bajo presión del mismo grupo. Y un dato que ordena la escena: **el 43,2% de los cerca de veinte mil presos de Ceará se declara evangélico.**"
        },
        {
          "type": "paragraph",
          "text": "En Guatemala, una red religiosa rehabilita adictos donde el sistema de salud no llega; en Río, otra red religiosa expulsa cultos afrobrasileños donde la policía no llega. No son la misma institución ni el mismo país. Son dos expresiones de la misma condición de fondo —capacidad organizativa real operando donde el Estado no está— y su signo depende enteramente de quién la conduzca."
        },
        {
          "type": "heading",
          "text": "V. Lo que la derecha no ha preguntado"
        },
        {
          "type": "paragraph",
          "text": "La derecha latinoamericana descubrió al electorado evangélico y lo cortejó con eficacia. En Brasil, los evangélicos votaron a Bolsonaro 59% contra 26% en la segunda vuelta de 2018, según Datafolha, mientras los católicos empataban 44-43. En 2022 ese respaldo bajó a un rango de 48% a 53% según la encuestadora, y los católicos se movieron hacia Lula. En Costa Rica, Fabricio Alvarado —cantante de música cristiana— ganó la primera vuelta de 2018 con el 24,99% tras la opinión consultiva de la Corte Interamericana sobre matrimonio igualitario, y llegó al 39,21% en el balotaje. En Guatemala, Jimmy Morales ganó en 2015 con el 67,4%. En Chile, según el análisis de Isabel Castillo y Abraham Paulsen sobre la Encuesta Bicentenario UC, José Antonio Kast obtuvo cerca de un tercio del voto evangélico en la primera vuelta de 2021, muy por encima de su promedio nacional."
        },
        {
          "type": "paragraph",
          "text": "Hay un dato que conviene tener a mano contra la narrativa de crecimiento imparable: según el criterio estricto del DIAP, **la bancada evangélica en la Cámara de Diputados brasileña bajó de 92 a 85 escaños en 2022.** La cifra de 228 parlamentarios que suele citarse corresponde a la Frente Parlamentar Evangélica, un frente de inscripción voluntaria que incluye firmantes que no son evangélicos practicantes. Son universos distintos y la diferencia importa."
        },
        {
          "type": "paragraph",
          "text": "Lo que ninguna de esas campañas hizo fue la pregunta obvia: **¿por qué estas instituciones funcionan?**"
        },
        {
          "type": "paragraph",
          "text": "Porque hay ahí una lección de diseño institucional que un liberal debería encontrar fascinante. Estas iglesias son organizaciones descentralizadas, financiadas voluntariamente por sus usuarios, con presencia física en los barrios donde nadie más tiene una oficina abierta un martes por la noche, con costos operativos bajísimos, que resuelven simultáneamente identidad, red de contactos, contención de adicciones, cuidado de niños y sentido. Ninguna agencia estatal latinoamericana logra tres de esas cosas a la vez."
        },
        {
          "type": "paragraph",
          "text": "Un gobierno que quisiera aprender algo de eso no las cortejaría electoralmente. Estudiaría su modelo de gestión, regularía sus centros de rehabilitación —donde hoy se interna a personas sin ninguna garantía—, y se preguntaría por qué una institución sin poder coercitivo cobra voluntariamente a gente que a su propio fisco se le escapa."
        },
        {
          "type": "paragraph",
          "text": "Es una pregunta menos rentable que un acto de campaña. También es la única interesante."
        }
      ]
    },
    "seo": {
      "title": "La iglesia que sí llega",
      "description": "Guatemala: 6.000 internos pentecostales, 1.500 en la cárcel de máxima. Pew 2026.",
      "tldr": [
        "Un adicto guatemalteco que necesite tratamiento tiene, en la práctica, dos opciones: el sistema público de salud mental, o una casa pentecostal de rehabilitación. El antropólogo Kevin Lewis O'Neill contó, en un trabajo publicado en 2020, alrededor de doscientos de estos…",
        "O'Neill hace la comparación que corresponde: seis mil internos en centros religiosos informales, frente a mil quinientos en la cárcel de máxima seguridad del país. La proliferación, escribe, refleja la inadecuación de la infraestructura formal de tratamiento.",
        "Es decir: en Guatemala, la principal institución de internamiento de personas con adicciones no es del Estado. Es evangélica, no está regulada, y nadie la diseñó.",
        "Ese hecho —repetido con variantes en media región— es el asunto de esta nota. Pero antes hay que desmontar la historia que se cuenta habitualmente sobre él, porque los datos recientes no la sostienen."
      ],
      "faq": [
        {
          "question": "¿De qué país es «La iglesia que sí llega»?",
          "answer": "La pieza está situada en Guatemala. En la Ciudad de Guatemala hay unos doscientos centros pentecostales de rehabilitación de adicciones, con seis mil internos. La cárcel de máxima seguridad del país tiene mil quinientos. Ninguna política pública explica eso; ninguna política pública lo mira."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "carta",
      "rubric": "Vida común",
      "country": "Guatemala",
      "excerpt": "Un adicto guatemalteco que necesite tratamiento tiene, en la práctica, dos opciones: el sistema público de salud mental, o una casa pentecostal de rehabilitación. El antropólogo Kevin Lewis O'Neill contó, en un trabajo…",
      "sources": "Kevin Lewis O'Neill, \"Home Security: Drug Rehabilitation Centres, the Devil and Domesticity in Guatemala City\", *Journal of Latin American Studies* 52(4), noviembre 2020 · Pew Research Center, *Catholicism Has Declined in Latin America Since 2013-14* (21/01/2026) y *Religion in Latin America* (13/11/2014) · IBGE, Censo Demográfico 2022, *Religiões: resultados preliminares da amostra* (junio 2025) · Corporación Latinobarómetro, Informe 2024 · Encuesta Bicentenario UC 2019, vía *The Clinic* · DIAP, *Bancadas Informais no Congresso 2023-2027* · Poder360 (28/01/2024) sobre la Frente Parlamentar Evangélica · Datafolha e Ipec, vía *Correio Braziliense* · Tribunal Supremo de Elecciones de Costa Rica, cómputo 2018 · Servel Chile, resultados 2025 · BBC News Brasil, \"A facção 'evangélica' que emerge como terceira força do crime organizado do Brasil\" (diciembre 2025), con declaraciones de Christina Vital da Cunha (UFF) y Kristina Hinz (UERJ) · CEPAL, *Revista CEPAL* Nº 116, sobre incidencia del impuesto a la renta personal.",
      "editNote": "Nota de edición: las series de Pew y Latinobarómetro arrojan cifras distintas para los mismos países por diferencias de muestra y fraseo; no deben graficarse juntas y en el texto se atribuye cada dato a su fuente. No se publica la proyección que sitúa en 2032 el cruce evangélico-católico en Brasil, porque parte de una base de 2022 que el censo posterior corrigió. No existe boca de urna por religión verificable para la segunda vuelta brasileña de 2022 ni para la chilena de 2025."
    }
  }
];
