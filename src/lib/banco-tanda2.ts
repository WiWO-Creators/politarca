import type { WiwoSiteArticle } from "@wiwo/contract";

/**
 * Responsabilidad: la segunda tanda del archivo editorial.
 * Usado por: lib/content.ts, que la mezcla con BANCO para armar ARTICLES.
 * NO hace: no traduce ni ordena; el orden de la portada lo decide content.ts.
 *
 * Se guarda en la forma del CONTRATO, igual que BANCO. Las piezas llegaron
 * escritas en el modelo propio del sitio y se convirtieron con
 * parseMarkdownBlocks, el mismo convertidor del contrato con el que se paso el
 * resto del archivo: el cuerpo queda en bloques y lo propio de politarca
 * —formato, rubrica, pais, fuentes— vive en `extra`.
 */
export const TANDA2: WiwoSiteArticle[] = [
  {
    "id": "brasil-vota",
    "title": "Brasil vota. La región es la que se juega algo.",
    "summary": "El 4 de octubre no se decide solo el gobierno de Brasil. Se decide si el giro a la derecha latinoamericano fue una ola o una coincidencia.",
    "section": {
      "id": "polis",
      "label": "La Polis"
    },
    "author": {
      "name": "Redacción Politarca"
    },
    "publishedAt": "2026-08-30",
    "updatedAt": "2026-08-30",
    "readingMinutes": 8,
    "image": {
      "url": "/photos/plates/brasil-vota.jpg",
      "alt": "Congreso Nacional de Brasilia. La Polis cubre la presidencial brasileña desde afuera."
    },
    "tags": [
      "Brasil",
      "Lula",
      "Flávio Bolsonaro",
      "elección 2026"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "En este momento, el hombre cuya condena organiza la política brasileña está en prisión domiciliaria en Brasilia, sin poder votar, sin poder ser votado, sin redes sociales ni siquiera por interpósita persona, y con las visitas políticas prohibidas hasta después de octubre."
        },
        {
          "type": "paragraph",
          "text": "Jair Bolsonaro fue condenado el 11 de septiembre de 2025 por la Primera Sala del Supremo Tribunal Federal, por cuatro votos contra uno, a veintisiete años y tres meses de prisión por organización criminal armada, tentativa de abolición violenta del Estado democrático de derecho y golpe de Estado. El 25 de noviembre el proceso quedó firme. El 22 de noviembre había sido detenido preventivamente. El 24 de marzo de 2026 se le concedió prisión domiciliaria humanitaria por una bronconeumonía; el 3 de julio se prorrogó por tiempo indeterminado. El 17 de julio se le endurecieron las restricciones después de que escribiera una carta apoyando la candidatura de su hijo."
        },
        {
          "type": "paragraph",
          "text": "Ese hijo, Flávio Bolsonaro, es el candidato del Partido Liberal a la presidencia de Brasil. Su fórmula la completa Alfredo Gaspar. Enfrenta, en la que sería su cuarta victoria, a Luiz Inácio Lula da Silva, ochenta años, en tratamiento oncológico preventivo desde mayo, con Geraldo Alckmin como vicepresidente."
        },
        {
          "type": "paragraph",
          "text": "Trece candidatos se registraron. Solo dos importan."
        },
        {
          "type": "heading",
          "text": "I. Lo que dicen las encuestas, y lo que dice el margen"
        },
        {
          "type": "paragraph",
          "text": "Las cuatro mediciones de agosto coinciden en el sentido y discrepan en la magnitud, que es exactamente donde está el interés."
        },
        {
          "type": "table",
          "head": [
            "Encuestadora",
            "Primera vuelta",
            "Segunda vuelta"
          ],
          "rows": [
            [
              "Datafolha (18-20 ago)",
              "Lula 39 – Flávio 32",
              "Lula 47 – Flávio 43"
            ],
            [
              "Genial/Quaest (10-13 ago)",
              "Lula 38 – Flávio 31",
              "Lula 43 – Flávio 40"
            ],
            [
              "AtlasIntel (22-27 jul)",
              "Lula 44,9 – Flávio 35,8",
              "Lula 49,2 – Flávio 42,9"
            ],
            [
              "BTG/Nexus (21-23 ago)",
              "Lula 41 – Flávio 37",
              "Lula 46 – Flávio 45"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Lula gana en las cuatro. En ninguna gana cómodo. En la de BTG/Nexus, la más reciente, la diferencia en segunda vuelta es de un punto, dentro del margen de error de dos."
        },
        {
          "type": "paragraph",
          "text": "Hay un dato de esa misma medición que merece más atención que los porcentajes: **el 80% de los encuestados dice tener su voto decidido, un récord de la serie**. Faltan seis semanas para la primera vuelta y la campaña ya casi no tiene a quién convencer. En una elección así, lo que decide no es el debate: es la movilización y el error."
        },
        {
          "type": "paragraph",
          "text": "El otro dato relevante es el rechazo. AtlasIntel mide un 52,9% de rechazo a Flávio Bolsonaro. Más de la mitad del electorado declara que no lo votaría en ninguna circunstancia. Es un techo, y es el activo principal de la candidatura de Lula."
        },
        {
          "type": "heading",
          "text": "II. La economía no está donde debería para el oficialismo"
        },
        {
          "type": "paragraph",
          "text": "Aquí está la paradoja que hace de esta elección algo distinto a un referéndum sobre el bolsonarismo."
        },
        {
          "type": "paragraph",
          "text": "Los números macroeconómicos brasileños son, en la superficie, buenos. El PIB creció 1,1% en el primer trimestre de 2026 respecto del anterior y 1,8% interanual. El desempleo cayó a **5,4% en el segundo trimestre**, uno de los niveles más bajos de la serie. La inflación acumulada del año hasta julio fue de 3,44%, con 4,44% en doce meses. El Copom recortó la Selic al 14% el 5 de agosto, cuarta reducción consecutiva de un ciclo iniciado en marzo. En julio, el gobierno central registró un superávit primario de 10.800 millones de reales cuando el mercado esperaba un déficit de 5.500 millones."
        },
        {
          "type": "paragraph",
          "text": "Y aun así, la aprobación de Lula está en 46% contra 48% de desaprobación según Quaest, y 49 contra 48 según Datafolha. Un gobierno con desempleo en mínimos, inflación dentro de la banda superior de la meta y tasas bajando debería estar mejor. No lo está."
        },
        {
          "type": "paragraph",
          "text": "La explicación está en un solo número. **La deuda bruta del gobierno general llegó al 81,9% del PIB en junio de 2026, el nivel más alto desde 2021**, equivalente a 10,8 billones de reales. Ha subido 10,2 puntos porcentuales del PIB en tres años y medio de gobierno. Los intereses nominales pagados solo en junio fueron de 110.700 millones de reales, contra 61.000 millones en junio de 2025: subieron más de un 80% en doce meses."
        },
        {
          "type": "paragraph",
          "text": "Brasil está creciendo con la tarjeta de crédito, y una parte considerable de su electorado lo intuye aunque no lo formule así. El Fondo Monetario, en su consulta del Artículo IV concluida el 20 de julio, recomendó medidas fiscales \"más agresivas\" para poner la deuda en trayectoria descendente. Es una recomendación que ningún candidato va a asumir en campaña, y que quien gane tendrá sobre el escritorio el 2 de enero."
        },
        {
          "type": "heading",
          "text": "III. Lo que se elige además, y por qué importa más"
        },
        {
          "type": "paragraph",
          "text": "Se eligen 513 diputados federales, 54 senadores —dos tercios del Senado— y 27 gobernaciones. Y ahí está el verdadero problema institucional brasileño, que ningún resultado presidencial resuelve."
        },
        {
          "type": "paragraph",
          "text": "**El Congreso Nacional llega a esta elección con veintidós partidos representados** entre sus 594 miembros —513 diputados y 81 senadores—. El PL tiene 113 diputados; el PT, 73. El mayor bloque legislativo —União Brasil, PP, PSD, Republicanos, MDB, la federación PSDB-Cidadania y Podemos— reúne 273 diputados, más del 53% de la Cámara, y no responde ni a Lula ni a Bolsonaro."
        },
        {
          "type": "paragraph",
          "text": "Ese bloque, que la prensa brasileña llama Centrão y que no es un partido sino un mercado, es quien gobierna Brasil en la práctica. Cualquiera que gane en octubre tendrá que comprarle mayorías artículo por artículo. Y el precio de esas mayorías —enmiendas parlamentarias, cargos, recursos— es una parte no menor de por qué la deuda subió diez puntos del PIB."
        },
        {
          "type": "paragraph",
          "text": "Un liberal que mire Brasil debería preocuparse menos por quién ocupa el Planalto y más por esto: **un sistema donde el presidente no puede gobernar sin comprar apoyo, y donde el precio del apoyo es fiscal**. Eso no lo cambia una elección. Lo cambiaría una reforma política que nadie propone porque los veintidós partidos que tendrían que aprobarla existen gracias al sistema actual."
        },
        {
          "type": "heading",
          "text": "IV. Por qué esto le importa a la región"
        },
        {
          "type": "paragraph",
          "text": "Aquí está la razón por la que Politarca cubre esta elección desde afuera y no como corresponsalía."
        },
        {
          "type": "paragraph",
          "text": "A agosto de 2026, la derecha gobierna Argentina, Chile, Colombia, Perú, Ecuador, Costa Rica y El Salvador. Brasil es el último país grande de Sudamérica donde no ganó. La lectura dominante —\"América Latina giró a la derecha\"— tiene un problema empírico: cada caso se explica por una elección nacional específica con causas locales. Seguridad en Ecuador y Perú. Inflación en Argentina. Fatiga con el gobierno saliente en Chile y Colombia."
        },
        {
          "type": "paragraph",
          "text": "Si Flávio Bolsonaro gana, la tesis de la ola se refuerza y el bolsonarismo demuestra que sobrevive a la inhabilitación de su fundador, lo que sería un dato notable sobre la naturaleza del fenómeno: dejaría de ser un liderazgo personal para volverse una identidad política transferible."
        },
        {
          "type": "paragraph",
          "text": "Si gana Lula, la tesis se rompe. Y entonces lo que hay que explicar no es un giro continental sino una sucesión de derrotas de gobiernos en ejercicio, que es una explicación mucho más aburrida y probablemente mucho más correcta: **en América Latina, desde la pandemia, pierde el que gobierna.**"
        },
        {
          "type": "paragraph",
          "text": "Hay además consecuencias materiales concretas."
        },
        {
          "type": "paragraph",
          "text": "**Comercio.** Brasil exportó a China 58.300 millones de dólares en el primer semestre de 2026, un récord: el **31,6% de todas sus exportaciones**, casi el triple de lo que va a Estados Unidos. Su superávit bilateral con China, 19.800 millones, equivale al 47% de todo el superávit comercial brasileño con el mundo. Un gobierno alineado con Washington tendría que administrar esa dependencia, no simplemente denunciarla."
        },
        {
          "type": "paragraph",
          "text": "**Aranceles.** En julio de 2025, Estados Unidos impuso a Brasil un arancel del 50% invocando explícitamente el juicio a Bolsonaro. La Corte Suprema estadounidense anuló esa medida en febrero de 2026 por violar los límites legales a la imposición unilateral de aranceles. En junio se propusieron nuevos gravámenes del 25%, y el 23 de julio Brasil quedó incluido en el arancel del 12,5% por trabajo forzado que alcanzó a dieciocho países de la región. La relación comercial más importante del hemisferio se está administrando por decreto y litigio."
        },
        {
          "type": "paragraph",
          "text": "**Mercosur.** El acuerdo con la Unión Europea entró en aplicación provisional el 1 de mayo de 2026, tras veintiséis años de negociación. Más del 80% de las exportaciones brasileñas a Europa pasaron a arancel cero de inmediato. Su componente político sigue pendiente ante el Tribunal de Justicia de la UE, con un plazo que puede llegar a dos años. Brasil es el socio que sostiene ese acuerdo; sin su empuje, el bloque no lo firma."
        },
        {
          "type": "heading",
          "text": "V. La pregunta que ninguno de los dos contesta"
        },
        {
          "type": "paragraph",
          "text": "Brasil crece 2% y debe 82% de su producto. Tiene el desempleo más bajo en años y una deuda que sube diez puntos del PIB por período presidencial. Comercia un tercio de sus exportaciones con China mientras negocia aranceles con Estados Unidos por vía judicial. Y su Congreso tiene veintidós partidos, ninguno con incentivo para arreglar nada de eso."
        },
        {
          "type": "paragraph",
          "text": "Ninguno de los dos candidatos ha explicado cómo estabiliza la deuda sin romper el pacto con el Centrão que le da mayoría. No es una omisión de campaña: es que nadie sabe cómo hacerlo."
        },
        {
          "type": "paragraph",
          "text": "El 4 de octubre, Brasil va a elegir presidente. La pregunta que decide su próxima década se la va a hacer el mercado de bonos el 2 de enero."
        }
      ]
    },
    "seo": {
      "title": "Brasil vota. La región es la que se juega algo",
      "description": "Brasil, 4 de octubre. Si gana Flávio, hay ola. Si gana Lula, perdía el que gobernaba.",
      "tldr": [
        "En este momento, el hombre cuya condena organiza la política brasileña está en prisión domiciliaria en Brasilia, sin poder votar, sin poder ser votado, sin redes sociales ni siquiera por interpósita persona, y con las visitas políticas prohibidas hasta después de octubre.",
        "Jair Bolsonaro fue condenado el 11 de septiembre de 2025 por la Primera Sala del Supremo Tribunal Federal, por cuatro votos contra uno, a veintisiete años y tres meses de prisión por organización criminal armada, tentativa de abolición violenta del Estado democrático de…",
        "Ese hijo, Flávio Bolsonaro, es el candidato del Partido Liberal a la presidencia de Brasil. Su fórmula la completa Alfredo Gaspar. Enfrenta, en la que sería su cuarta victoria, a Luiz Inácio Lula da Silva, ochenta años, en tratamiento oncológico preventivo desde mayo, con…",
        "Las cuatro mediciones de agosto coinciden en el sentido y discrepan en la magnitud, que es exactamente donde está el interés."
      ],
      "faq": [
        {
          "question": "¿De qué país es «Brasil vota. La región es la que se juega algo.»?",
          "answer": "La pieza está situada en Brasil. El 4 de octubre no se decide solo el gobierno de Brasil. Se decide si el giro a la derecha latinoamericano fue una ola o una coincidencia."
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
      "country": "Brasil",
      "excerpt": "En este momento, el hombre cuya condena organiza la política brasileña está en prisión domiciliaria en Brasilia, sin poder votar, sin poder ser votado, sin redes sociales ni siquiera por interpósita persona, y con las…",
      "sources": "Agência Brasil y STF sobre la Ação Penal 2668 y la condena del 11/09/2025 · Agência Pública sobre el trânsito em julgado (25/11/2025) · NODAL sobre la prisión domiciliaria y sus prórrogas · Datafolha (BR-04496/2026), Genial/Quaest (BR-06773/2026), AtlasIntel (BR-08602/2026) y BTG/Nexus (BR-09028/2026) · IBGE (PIB 1T2026, IPCA julio 2026, PNAD Contínua 2T2026) · Copom/Banco Central do Brasil, reunión del 5/08/2026 · Banco Central do Brasil, estadísticas fiscales de junio de 2026, vía Poder360 · Tesouro Nacional, resultado primario de julio de 2026 · FMI, comunicado PR 26/257 (23/07/2026) · TSE sobre cargos en disputa · Conselho Empresarial Brasil-China, primer semestre 2026, vía Exame · Agência Brasil sobre la entrada en vigor del acuerdo Mercosur-UE.",
      "editNote": "Nota de edición: las fuentes secundarias consultadas presentan versiones parcialmente inconsistentes del estado arancelario vigente entre Estados Unidos y Brasil, incluida la fecha exacta de la anulación judicial y la base legal residual. Antes de publicar cualquier cifra arancelaria específica conviene verificarla contra el Federal Register o el USTR. No se cita cifra del FMI para el crecimiento brasileño de 2026 porque no pudo confirmarse contra el documento original."
    }
  },
  {
    "id": "las-cortes-que-quedaron",
    "title": "Las cortes que quedaron",
    "summary": "Los gobiernos latinoamericanos aprendieron, en los últimos cinco años, tres métodos distintos para intervenir sus poderes judiciales. Uno de esos gobiernos es de izquierda, y eso hace más fuerte el argumento, no más débil.",
    "section": {
      "id": "polis",
      "label": "La Polis"
    },
    "author": {
      "name": "Redacción Politarca"
    },
    "publishedAt": "2026-08-29",
    "updatedAt": "2026-08-29",
    "readingMinutes": 9,
    "image": {
      "url": "/photos/plates/las-cortes-que-quedaron.jpg",
      "alt": "Palacio de justicia. La Polis: cómo se interviene un tribunal en América Latina."
    },
    "tags": [
      "poder judicial",
      "Argentina",
      "México",
      "El Salvador"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Empecemos por un dato que no admite lectura partidaria."
        },
        {
          "type": "paragraph",
          "text": "El Rule of Law Index del World Justice Project, edición 2025, mide 143 países. En **el 68% de ellos el Estado de derecho retrocedió** respecto del año anterior, frente al 57% de la edición previa. Los límites judiciales al poder del gobierno cayeron en el 61% de los países; los controles legislativos al ejecutivo, también en el 61%; la auditoría independiente, en el 63%."
        },
        {
          "type": "paragraph",
          "text": "América Latina promedia **0,51 sobre 1**, y lleva catorce años de descensos casi ininterrumpidos desde 2011. Uruguay encabeza con 0,72, puesto 23 del mundo. México obtiene 0,40, puesto 121, y cayó 2,8% en un año. Venezuela cierra el índice global por sexta edición consecutiva con 0,26."
        },
        {
          "type": "paragraph",
          "text": "Esto no empezó con la derecha. Pero la derecha llegó al gobierno prometiendo arreglarlo, y conviene mirar qué está haciendo."
        },
        {
          "type": "heading",
          "text": "I. Método uno: el decreto (Argentina)"
        },
        {
          "type": "paragraph",
          "text": "La Corte Suprema argentina tiene cinco cargos y **tres jueces**. Las dos vacantes vienen de la salida de Elena Highton de Nolasco en 2021 y de la renuncia de Juan Carlos Maqueda a fines de 2024."
        },
        {
          "type": "paragraph",
          "text": "En febrero de 2025 el gobierno nombró en comisión, por decreto, a Ariel Lijo y a Manuel García-Mansilla. El 3 de abril el Senado los rechazó en votación formal: **Lijo, 27 a favor y 43 en contra; García-Mansilla, 20 a favor y 51 en contra**. Ambos necesitaban dos tercios. Fue la primera vez que el Senado argentino rechaza pliegos para la Corte mediante votación explícita. García-Mansilla, que había asumido por decreto antes de la votación, renunció."
        },
        {
          "type": "paragraph",
          "text": "Diecisiete meses después, las dos vacantes siguen sin cubrir. Y en junio de 2026 el gobierno reformó, por decreto, el procedimiento previo al Senado. La norma redactada por el ministro de Justicia **elimina la etapa de impugnaciones ciudadanas**, traslada la publicidad de las postulaciones del Boletín Oficial al sitio del Ministerio, acorta a cinco días el plazo para presentar declaraciones patrimoniales y **suprime las recomendaciones de considerar equilibrio de género, especialidad y representación regional**."
        },
        {
          "type": "paragraph",
          "text": "Los requisitos constitucionales —audiencia pública en el Senado, dos tercios— no cambiaron, y conviene decirlo: el decreto no viola la Constitución. Lo que hace es reducir el escrutinio público previo a una designación vitalicia sobre el tribunal que controla al Poder Ejecutivo. Un gobierno que se define por la desconfianza hacia el poder discrecional resolvió que, en este caso, menos escrutinio es mejor."
        },
        {
          "type": "paragraph",
          "text": "Mientras tanto, en el escalón de abajo, el Consejo de la Magistratura tenía en febrero de 2026 **157 vacantes judiciales por cubrir** y 78 concursos en trámite. Elevó al Ejecutivo **19 ternas en 2025, frente a 96 en 2024**. Unas treinta investigaciones disciplinarias contra jueces prescriben este año."
        },
        {
          "type": "heading",
          "text": "II. Método dos: la elección (México)"
        },
        {
          "type": "paragraph",
          "text": "Conviene decir de entrada lo que hace a este caso especialmente pertinente: **lo hizo un gobierno de izquierda**. La reforma judicial mexicana es obra de Morena, no de la derecha. Si el argumento de esta nota fuera partidario, este caso sobraría; como no lo es, es el que más pesa."
        },
        {
          "type": "paragraph",
          "text": "El 1 de junio de 2025, México hizo algo que ningún país había hecho a esa escala: eligió a sus jueces por voto popular. **2.681 cargos**, entre ellos los nueve ministros de una Suprema Corte reducida de once a nueve por la reforma constitucional de septiembre de 2024, 881 cargos del Poder Judicial federal y alrededor de 1.800 cargos locales en diecinueve estados."
        },
        {
          "type": "paragraph",
          "text": "El Instituto Nacional Electoral estimó, por muestreo estadístico representativo, una participación de **entre 12,57% y 13,32%** de la lista nominal. Alrededor de trece millones de votos sobre casi cien millones de electores registrados."
        },
        {
          "type": "paragraph",
          "text": "Hugo Aguilar ganó la presidencia de la Corte con poco más de seis millones de votos. El Tribunal Electoral validó los resultados el 20 de agosto; el INE cerró el proceso el 18 de septiembre señalando la desproporción entre el número de observadores desplegados y la participación efectiva."
        },
        {
          "type": "paragraph",
          "text": "El argumento a favor de la elección judicial es serio y merece enunciarse bien: los jueces ejercen poder político y no rinden cuentas a nadie; la designación por cooptación entre pares reproduce castas; el voto ciudadano es la única legitimación democrática disponible. No es un argumento absurdo."
        },
        {
          "type": "paragraph",
          "text": "El problema es empírico. Con el 13% de participación, un ministro de la Corte mexicana fue elegido por una fracción del electorado menor que la que elige a cualquier alcalde. Y las críticas documentadas —insuficiente información sobre perfiles y propuestas, diseño de boleta impracticable— apuntan todas al mismo punto: **el votante no tenía cómo saber a quién estaba votando**. Una legitimidad que se obtiene con 13% de participación y sin información sobre los candidatos no es más democrática que la designación. Es solo menos trazable."
        },
        {
          "type": "paragraph",
          "text": "México repetirá el ejercicio en 2027. Su puntaje en el Rule of Law Index cayó 2,8% en el último año, la segunda mayor caída de la región."
        },
        {
          "type": "heading",
          "text": "III. Método tres: la mayoría (El Salvador, y lo que enseñó)"
        },
        {
          "type": "paragraph",
          "text": "El caso salvadoreño ya está descrito en estas páginas, pero conviene volver sobre él porque es el manual que los demás consultan."
        },
        {
          "type": "paragraph",
          "text": "El 1 de mayo de 2021, en su sesión inaugural, la Asamblea Legislativa controlada por Nuevas Ideas destituyó a los magistrados de la Sala de lo Constitucional de la Corte Suprema y al fiscal general Raúl Melara. El 3 de septiembre de ese mismo año, la Sala reintegrada habilitó la reelección presidencial inmediata, que la Constitución prohibía."
        },
        {
          "type": "paragraph",
          "text": "Cuatro meses entre el cambio de tribunal y el cambio de doctrina. Ese es el dato que hace del caso un manual: demuestra que no hace falta reformar la Constitución si se puede cambiar a quienes la interpretan."
        },
        {
          "type": "paragraph",
          "text": "Perú ofrece la variante caótica del mismo fenómeno. La fiscal de la Nación Delia Espinoza fue suspendida por seis meses por la Junta Nacional de Justicia el 20 de septiembre de 2025. El 22 de octubre el Poder Judicial ordenó reponerla y la JNJ se negó a cumplir el fallo. En diciembre el Congreso le impuso una inhabilitación de diez años; en enero de 2026 la JNJ la destituyó; en mayo el Congreso le impuso una segunda inhabilitación y, el 28 de ese mes, un tribunal ordenó reincorporarla. El Tribunal Constitucional otorgó entonces una medida cautelar a la JNJ suspendiendo la resolución judicial de reposición. El 25 de agosto de 2026, la JNJ evaluaba **dos nuevos pedidos de destitución** en su contra."
        },
        {
          "type": "paragraph",
          "text": "No hay aquí una captura ordenada. Hay tres instituciones dictándose órdenes contradictorias durante un año, sobre el cargo que dirige la persecución penal del Estado peruano."
        },
        {
          "type": "heading",
          "text": "IV. El caso que complica el argumento"
        },
        {
          "type": "paragraph",
          "text": "Sería cómodo terminar aquí. Pero hay un país donde el problema tiene el signo contrario, y omitirlo sería exactamente el tipo de selección que este medio se comprometió a no hacer."
        },
        {
          "type": "paragraph",
          "text": "En Brasil, el Supremo Tribunal Federal juzgó y condenó a un expresidente por golpe de Estado. La causa se resolvió en la Primera Sala —cinco de los once ministros—, por cuatro votos contra uno, con el ministro Luiz Fux abriendo divergencia y absolviendo a Bolsonaro y a cinco coacusados. El condenado alegó que el STF alteró las reglas del foro privilegiado específicamente para retener su juzgamiento; el ministro Flávio Dino respondió que Bolsonaro \"no puede escoger quién debe juzgarlo\"."
        },
        {
          "type": "paragraph",
          "text": "El análisis del V-Dem Democracy Report 2026 aplicado a Brasil describe la expansión del rol del STF —vía investigaciones de oficio y medidas preventivas— como una \"reconfiguración silenciosa, aunque peligrosa, de los límites operativos del sistema\". El mismo informe clasifica a Brasil como caso de reversión de una autocratización reciente, con una recuperación \"parcial y frágil\", y ubica a Argentina, México, Perú, El Salvador y Nicaragua en deterioro."
        },
        {
          "type": "paragraph",
          "text": "Un tribunal que condena un intento de golpe está haciendo su trabajo. Un tribunal que amplía sus propias competencias para hacerlo está creando un precedente que no controla. Las dos cosas pueden ser ciertas a la vez, y en Brasil lo son."
        },
        {
          "type": "heading",
          "text": "V. El país que no hizo nada, y lo que eso sugiere"
        },
        {
          "type": "paragraph",
          "text": "Chile es el contrapunto útil, y por una razón inesperada."
        },
        {
          "type": "paragraph",
          "text": "El caso Audios —la trama de tráfico de influencias y corrupción judicial que estalló en 2024— **removió a cuatro ministros del Poder Judicial**. El Senado destituyó a la ministra de la Corte Suprema Ángela Vivanco el 16 de octubre de 2024 y al ministro Antonio Ulloa el 10 de noviembre de 2025. La fiscalía cerró la investigación el 16 de enero de 2026 y acusó a diez personas el 28; pide catorce años de cárcel para el abogado Luis Hermosilla por los delitos que le imputa —presuntos delitos tributarios, lavado de activos y cohecho—. La causa no tiene sentencia. El Colegio de Abogados lo expulsó el 23 de junio de 2026."
        },
        {
          "type": "paragraph",
          "text": "De esa crisis salió un proyecto de ley que crea un Consejo de Nombramientos Judiciales, aprobado por la Cámara de Diputados el 21 de julio de 2025. A junio de 2026 sigue en segundo trámite en la Comisión de Constitución del Senado, en audiencias, con divergencias sin resolver sobre si los tres poderes del Estado participarán en el nombramiento de ministros de la Corte Suprema."
        },
        {
          "type": "paragraph",
          "text": "Y aquí está el hallazgo, con la salvedad que corresponde. En el balance legislativo de los primeros cien días del gobierno de Kast —marzo a junio de 2026, 106 sesiones parlamentarias—, **no hemos localizado ninguna iniciativa propia en materia de nombramientos judiciales, reorganización de tribunales ni reforma estructural del Poder Judicial**. La agenda registrada es seguridad, migración, reforma tributaria y ajuste fiscal. La fuente es un agregador automatizado y antes de publicar conviene cotejarlo contra el sistema de tramitación de la Cámara y el Senado, y consultar al Ministerio de Justicia."
        },
        {
          "type": "paragraph",
          "text": "Se puede leer de dos maneras. La generosa: el gobierno decidió no meter mano en la justicia, que es lo que un liberal debería querer. La otra: la reforma de nombramientos judiciales más importante en décadas se tramita en el Senado sin que el Ejecutivo haya fijado posición pública sobre ella."
        },
        {
          "type": "paragraph",
          "text": "Ambas lecturas describen la misma inacción. Cuál sea la correcta se sabrá el día en que un tribunal chileno falle contra el gobierno."
        },
        {
          "type": "heading",
          "text": "VI. Lo que un liberal tiene que sostener aquí"
        },
        {
          "type": "paragraph",
          "text": "La independencia judicial es incómoda por diseño. Su función es que a veces el gobierno pierda."
        },
        {
          "type": "paragraph",
          "text": "Eso significa que la prueba de si un gobierno la respeta nunca es lo que dice cuando el tribunal le da la razón. Es lo que hace cuando se la quita. Y por eso conviene mirar juntas las tres técnicas descritas: designar por decreto acortando el escrutinio, someter a los jueces a elección popular con 13% de participación, o cambiar el tribunal por mayoría legislativa. **No son equivalentes en gravedad** —el decreto argentino es legal y la sesión salvadoreña de mayo de 2021 fue una purga—, pero apuntan en la misma dirección: **todas empujan a la judicatura hacia la condición de cargo político, y un cargo político no puede controlar al poder político.**"
        },
        {
          "type": "paragraph",
          "text": "La derecha latinoamericana tuvo razón en denunciar la captura judicial que encontró. Está en camino de perder ese argumento, no por lo que dice sino por lo que está haciendo con las cortes que heredó. Y la izquierda mexicana, que hizo la reforma más radical de todas, no tiene ninguna autoridad para señalarlo."
        }
      ]
    },
    "seo": {
      "title": "Las cortes que quedaron",
      "description": "Tres métodos para intervenir la justicia. Uno de esos gobiernos es de izquierda.",
      "tldr": [
        "El Rule of Law Index del World Justice Project, edición 2025, mide 143 países. En el 68% de ellos el Estado de derecho retrocedió respecto del año anterior, frente al 57% de la edición previa. Los límites judiciales al poder del gobierno cayeron en el 61% de los países; los…",
        "América Latina promedia 0,51 sobre 1, y lleva catorce años de descensos casi ininterrumpidos desde 2011. Uruguay encabeza con 0,72, puesto 23 del mundo. México obtiene 0,40, puesto 121, y cayó 2,8% en un año. Venezuela cierra el índice global por sexta edición consecutiva con…",
        "Esto no empezó con la derecha. Pero la derecha llegó al gobierno prometiendo arreglarlo, y conviene mirar qué está haciendo.",
        "La Corte Suprema argentina tiene cinco cargos y tres jueces. Las dos vacantes vienen de la salida de Elena Highton de Nolasco en 2021 y de la renuncia de Juan Carlos Maqueda a fines de 2024."
      ],
      "faq": [
        {
          "question": "¿De qué país es «Las cortes que quedaron»?",
          "answer": "La pieza está situada en América Latina. Los gobiernos latinoamericanos aprendieron, en los últimos cinco años, tres métodos distintos para intervenir sus poderes judiciales. Uno de esos gobiernos es de izquierda, y eso hace más fuerte el argumento, no más débil."
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
      "country": "América Latina",
      "excerpt": "El Rule of Law Index del World Justice Project, edición 2025, mide 143 países. En el 68% de ellos el Estado de derecho retrocedió respecto del año anterior, frente al 57% de la edición previa. Los límites judiciales al…",
      "sources": "World Justice Project, *Rule of Law Index 2025* (publicado el 28/10/2025) · V-Dem Institute, *Democracy Report 2026*, y su análisis sobre Brasil en I·CONnect (14/05/2026) · Infobae y Ámbito sobre los nombramientos por decreto y la votación del Senado argentino del 3/04/2025 · Infobae y elDiarioAR sobre la reforma del proceso de selección (junio 2026) · Infobae sobre el Consejo de la Magistratura (febrero y junio de 2026) · INE de México, comunicado del 2/06/2025 sobre participación en la elección judicial; IMER Noticias y Proceso sobre el balance del proceso · SWI/AFP y France 24 sobre la destitución de magistrados salvadoreños del 1/05/2021 y la habilitación de la reelección del 3/09/2021 · Infobae, La República y Tribunal Constitucional del Perú sobre el caso Espinoza · Agência Brasil y STF sobre la Ação Penal 2668 · Emol, El Mostrador, CIPER y El Dínamo sobre el caso Audios · Senado de Chile sobre el estado del proyecto de Consejo de Nombramientos Judiciales · Parlamento.ai sobre el balance legislativo de los primeros cien días del gobierno de Kast.",
      "editNote": "Vacíos declarados: no se publican los puntajes numéricos país por país del V-Dem 2026 porque no pudieron extraerse del informe original. Las cifras que circulan sobre el número de votos en la Asamblea salvadoreña de mayo de 2021 y sobre los jueces retirados por la ley de agosto de 2021 no pudieron confirmarse con fuente primaria y se omiten. Las denuncias sobre distribución de guías de voto en la elección judicial mexicana no pudieron verificarse y no se incluyen."
    }
  },
  {
    "id": "conglomerado-combustible",
    "title": "Ya no es un cartel. Es un conglomerado.",
    "summary": "En agosto de 2025, la policía brasileña desarmó un esquema de nueve mil seiscientos millones de dólares. No era de droga. Era de combustible.",
    "section": {
      "id": "polis",
      "label": "La Polis"
    },
    "author": {
      "name": "Redacción Politarca"
    },
    "publishedAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "readingMinutes": 9,
    "image": {
      "url": "/photos/plates/conglomerado-combustible.jpg",
      "alt": "Estación de servicio. La Polis: el crimen que se parece a una empresa."
    },
    "tags": [
      "crimen organizado",
      "combustible",
      "Brasil",
      "PCC"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "La Operación Carbono Oculto se ejecutó el 28 de agosto de 2025 con mil cuatrocientos agentes. Cuarenta y dos de sus objetivos estaban en la Faria Lima, el distrito financiero de São Paulo."
        },
        {
          "type": "paragraph",
          "text": "Lo que encontró: **más de mil estaciones de servicio** controladas en diez estados, mil seiscientos camiones, cuatro usinas de alcohol. Un esquema con un volumen estimado en **9.600 millones de dólares** y una evasión fiscal de entre 1.400 y 1.600 millones. Una sola *fintech* movió 8.500 millones. Cuarenta fondos de inversión, con un patrimonio conjunto de 5.500 millones, aparecen en la estructura que describe la investigación; nada en ella permite afirmar que sus administradores conocieran el origen de los fondos. El dinero circulaba por \"bancos paralelos\" montados sobre cuentas bolsillo y más de diez mil novecientos depósitos en efectivo."
        },
        {
          "type": "paragraph",
          "text": "Según la investigación policial, detrás estaba el Primeiro Comando da Capital."
        },
        {
          "type": "paragraph",
          "text": "Ese es el punto de esta nota, y es el que la cobertura policial de la región casi nunca hace: **el crimen organizado latinoamericano dejó de ser un negocio de droga hace tiempo**. Sigue vendiendo droga, igual que Amazon sigue vendiendo libros. Pero su rentabilidad, su capacidad de captura del Estado y su riesgo sistémico ya están en otra parte."
        },
        {
          "type": "heading",
          "text": "I. El tamaño"
        },
        {
          "type": "paragraph",
          "text": "El Instituto Igarapé publicó en julio de 2026 una estimación que conviene tener a mano: **el PCC tiene entre treinta mil y cuarenta mil integrantes; el Comando Vermelho, entre veinte mil y treinta mil**. En su ranking de amenazas criminales en las Américas, los dos ocupan los primeros dos lugares, por delante del Cártel Jalisco Nueva Generación."
        },
        {
          "type": "paragraph",
          "text": "El organigrama que la Policía Civil de São Paulo reconstruyó en 2026 describe una estructura de catorce \"sintonías\" —sectores funcionales— con cerca de noventa líderes, de los cuales cincuenta y dos estarían presos y treinta y seis en libertad. La cúpula, la Sintonia Final, tendría quince integrantes y **solo uno en libertad**. La misma reconstrucción identifica a Marcos Willians Herbas Camacho, \"Marcola\", como conductor de la organización desde prisión desde 1999."
        },
        {
          "type": "paragraph",
          "text": "Esa investigación atribuye además a la cúpula la expulsión de tres miembros que desafiaron a Marcola en 2024, y una sentencia de muerte interna en su contra. Una organización de treinta mil personas que resuelve una disputa de sucesión sin fracturarse, con su líder encarcelado hace veintisiete años, no es una banda. Es una institución."
        },
        {
          "type": "heading",
          "text": "II. Las líneas de negocio"
        },
        {
          "type": "paragraph",
          "text": "**Combustible.** Ver la operación de agosto de 2025. El atractivo es evidente: márgenes altos, volumen enorme, y un producto que se mezcla, se adultera y se factura falsamente sin que nadie lo note."
        },
        {
          "type": "paragraph",
          "text": "**Oro.** Es probablemente la mayor historia económica no contada de la región. El Instituto Peruano de Economía proyectó exportaciones de oro ilegal peruano por **entre 12.000 y 12.500 millones de dólares en 2025**, más de un 60% por encima de 2024, equivalentes a entre 105 y 115 toneladas métricas. La cifra confirmada después superó las cien toneladas. **Casi la mitad del oro ilegal que sale de Sudamérica se extrae en Perú.** En 2025, la minería ilegal de oro superó en valor a la formal."
        },
        {
          "type": "paragraph",
          "text": "Y el destino cambió: India y Emiratos Árabes Unidos reciben hoy alrededor de la mitad de los envíos peruanos, cuando en 2014 dominaban Suiza, Estados Unidos y Canadá. El oro no cambió de mineral. Cambió de aduana, hacia jurisdicciones con menores estándares de verificación de origen."
        },
        {
          "type": "paragraph",
          "text": "El costo ambiental está medido: la contaminación por mercurio en Laberinto, Madre de Dios, supera hasta ocho mil veces los umbrales de la Organización Mundial de la Salud."
        },
        {
          "type": "paragraph",
          "text": "**Extorsión.** Es el negocio que más rápido crece, y el que más directamente destruye la economía formal."
        },
        {
          "type": "table",
          "head": [
            "País",
            "Dato",
            "Período"
          ],
          "rows": [
            [
              "**Perú**",
              "25.196 denuncias, +20% interanual",
              "2025"
            ],
            [
              "Perú",
              "Más de 12.000 denuncias",
              "1er semestre 2026"
            ],
            [
              "**Ecuador**",
              "5.485 alertas al ECU 911, +35% interanual",
              "ene–8 jul 2026"
            ],
            [
              "**Colombia**",
              "2.914 casos, el nivel más alto desde 2015",
              "1er trimestre 2026"
            ],
            [
              "**Chile**",
              "De 31 a 322 denuncias en cuatro años",
              "2021–2025"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "En Perú, sesenta y nueve conductores y cinco cobradores de transporte público fueron asesinados en su trabajo durante 2025, y alrededor del 80% de las empresas de transporte admite pagar unos treinta mil soles mensuales. Un estudio de junio de 2026 encontró que bodegas y pequeños negocios peruanos destinan **hasta el 10% de sus ingresos a seguridad**."
        },
        {
          "type": "paragraph",
          "text": "En Chile, la subdirectora de Crimen Organizado de la Fiscalía declaró en abril de 2026 que el secuestro extorsivo supera los ochocientos casos anuales y que \"el delito se instaló en Chile\". El Global Organized Crime Index 2025 le asigna a Chile 5,00 puntos en extorsión y cobro de protección, medio punto más que dos años antes."
        },
        {
          "type": "paragraph",
          "text": "Conviene una salvedad honesta: las reformas legales chilenas de 2023 ampliaron la definición de extorsión, lo que explica una parte del salto en los registros. Y en Perú las cifras de 2026 son internamente contradictorias —la policía reportó 512 denuncias en enero, \"casi la mitad que en 2025\", y más de doce mil en el semestre—. Cualquier serie peruana de 2026 debería pedirse consolidada al Ministerio del Interior antes de graficarse."
        },
        {
          "type": "paragraph",
          "text": "**Puertos.** Ecuador incautó **214,53 toneladas de droga en 2025**, un 27,2% menos que el récord de 294,61 toneladas de 2024. Es decir, entre 210 y 295 toneladas en los dos últimos años, lo que lo sitúa como tercer país del mundo en volumen de incautación. Las terminales de Guayaquil manejan el 85% de la carga nacional; de las 31,4 toneladas incautadas en puertos en 2025, 27,4 fueron en la provincia del Guayas."
        },
        {
          "type": "paragraph",
          "text": "El método documentado: ocultar cocaína en islotes del Golfo de Guayaquil y traspasarla a buques mercantes en alta mar o adherida al casco, eludiendo el control portuario por completo. Los Lobos, Los Lagartos, Los Tiguerones y Los Choneros se disputan el golfo y reclutan pobladores y pescadores. La respuesta incluye un grupo policial con veinte buzos para inspeccionar cascos, y un centro de inteligencia que la Unión Europea abrió en Guayaquil en enero de 2026."
        },
        {
          "type": "heading",
          "text": "III. Lo que esto significa institucionalmente"
        },
        {
          "type": "paragraph",
          "text": "Una organización que controla mil estaciones de servicio, mueve 8.500 millones por una *fintech* y aparece en cuarenta fondos de inversión no necesita corromper policías. Necesita contadores, abogados y reguladores distraídos."
        },
        {
          "type": "paragraph",
          "text": "Ahí está el cambio que la política de seguridad latinoamericana no ha registrado. Toda la arquitectura de respuesta —militarización, megacárceles, estados de excepción, incautaciones espectaculares— está diseñada contra un enemigo que porta armas y ocupa territorio. Y ese enemigo existe, y mata. Pero el que decide si el crimen organizado gana o pierde es el que abre cuentas."
        },
        {
          "type": "paragraph",
          "text": "El informe de tipologías del GAFILAT identifica los cuatro sectores más vulnerables de la región en este orden: **banca, automotor, inmobiliario y servicios notariales**. Ninguno se combate con un traslado de reclusos."
        },
        {
          "type": "paragraph",
          "text": "Y conviene aquí una advertencia que va contra el interés narrativo de esta nota: **no existe una estimación oficial y actualizada del volumen del lavado de activos en América Latina**. La cifra que circula —entre 2% y 5% del PIB mundial— es una estimación del Fondo Monetario de los años noventa que nunca se actualizó metodológicamente. Las cifras que sí están documentadas por el GAFILAT, unos 210.000 millones de dólares anuales en contrabando y 236.000 millones en trata de personas, miden delitos precedentes, no lavado. Publicar un número de lavado regional como dato duro sería inventarlo."
        },
        {
          "type": "heading",
          "text": "IV. Rosario, y por qué las cifras importan"
        },
        {
          "type": "paragraph",
          "text": "El caso argentino ilustra a la vez lo que funciona y lo difícil que es saberlo."
        },
        {
          "type": "paragraph",
          "text": "La ciudad de Rosario registró **287 homicidios en 2022**, una tasa de 22,1 por cien mil: récord desde el inicio de la serie en 2014, con cerca del 90% cometidos con arma de fuego y el 72% vinculados a organizaciones criminales. En 2024 fueron 91, tasa de 6,75. En 2025 subieron a 116, tasa de 8,5."
        },
        {
          "type": "paragraph",
          "text": "El gobierno de Santa Fe informó que en el primer semestre de 2026 el departamento Rosario registró **45 homicidios, frente a 150 en el mismo período de 2023**, y lo describió como el registro más bajo desde que la provincia mide violencia."
        },
        {
          "type": "paragraph",
          "text": "Es, con casi cualquier lectura, una mejora real y grande. Pero hay que decir dos cosas, y la primera obliga a no publicar todavía la caída porcentual."
        },
        {
          "type": "paragraph",
          "text": "La primera es metodológica y vale para toda la cobertura de seguridad de la región: **las series de Rosario circulan con al menos tres universos distintos** —ciudad, departamento y provincia— y con diferencias entre el Observatorio de Seguridad Pública provincial y el Ministerio de Seguridad nacional. El informe anual del observatorio reporta para el departamento Rosario 185 en 2022, **169 en 2023**, 106 en 2024 y 115 en 2025. Ese dato anual no reconcilia con los 150 homicidios que la provincia atribuye al primer semestre de 2023 en el mismo universo: implicaría diecinueve en el segundo semestre, lo que es implausible. **Por eso no publicamos aquí la caída porcentual**, y pedimos la serie semestral consolidada al Observatorio antes de hacerlo. Cualquiera puede armar la narrativa que prefiera eligiendo el universo. Nosotros no lo hacemos."
        },
        {
          "type": "paragraph",
          "text": "La segunda es que el 7 de enero de 2026 el gobierno disolvió, por resolución, el Grupo Especial Antinarcotráfico de Rosario, alegando \"cumplimiento de objetivos\", y absorbió sus funciones en una estructura mayor. Es la decisión más arriesgada de toda la política de seguridad argentina reciente, y se tomó cuando la curva de homicidios de la ciudad ya había subido un 27% en 2025."
        },
        {
          "type": "paragraph",
          "text": "Bajar homicidios es difícil. Mantenerlos bajos es más difícil, y menos fotogénico."
        },
        {
          "type": "heading",
          "text": "V. El precio de mirar donde no está"
        },
        {
          "type": "paragraph",
          "text": "Ninguna de las cifras de esta nota es secreta. Están en informes públicos de la policía brasileña, del Instituto Peruano de Economía, del Igarapé, del GAFILAT y de los gobiernos de Ecuador y Santa Fe. El problema no es de información: es de encuadre."
        },
        {
          "type": "paragraph",
          "text": "Mientras la política de seguridad de la región se organice alrededor de la imagen del delincuente armado, va a seguir ganando operaciones y perdiendo la guerra. La Operación Contenção del 28 de octubre de 2025 en Río de Janeiro dejó **entre 122 y 132 muertos** —122 según la policía, 128 a 132 según la Defensoría Pública—, con dos mil quinientos agentes desplegados y 133 detenidos, de los cuales, según Reuters, **solo cinco estaban en la lista de sesenta y nueve buscados**. Una encuesta de AtlasIntel encontró que el 87,6% de los residentes de favelas la apoyó. El gobernador la calificó de éxito."
        },
        {
          "type": "paragraph",
          "text": "Ese mismo año, mil cuatrocientos agentes desarmaron una red de nueve mil seiscientos millones de dólares en el sector de combustibles sin disparar un tiro."
        },
        {
          "type": "paragraph",
          "text": "Una de las dos operaciones salió en todos los noticieros del mundo. La otra es la que le cuesta dinero al PCC."
        }
      ]
    },
    "seo": {
      "title": "Ya no es un cartel. Es un conglomerado",
      "description": "Brasil. Nueve mil seiscientos millones de dólares. No era droga: era combustible.",
      "tldr": [
        "La Operación Carbono Oculto se ejecutó el 28 de agosto de 2025 con mil cuatrocientos agentes. Cuarenta y dos de sus objetivos estaban en la Faria Lima, el distrito financiero de São Paulo.",
        "Lo que encontró: más de mil estaciones de servicio controladas en diez estados, mil seiscientos camiones, cuatro usinas de alcohol. Un esquema con un volumen estimado en 9.600 millones de dólares y una evasión fiscal de entre 1.400 y 1.600 millones. Una sola fintech movió…",
        "Según la investigación policial, detrás estaba el Primeiro Comando da Capital.",
        "Ese es el punto de esta nota, y es el que la cobertura policial de la región casi nunca hace: el crimen organizado latinoamericano dejó de ser un negocio de droga hace tiempo. Sigue vendiendo droga, igual que Amazon sigue vendiendo libros. Pero su rentabilidad, su capacidad…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «Ya no es un cartel. Es un conglomerado.»?",
          "answer": "La pieza está situada en Brasil. En agosto de 2025, la policía brasileña desarmó un esquema de nueve mil seiscientos millones de dólares. No era de droga. Era de combustible."
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
      "country": "Brasil",
      "excerpt": "La Operación Carbono Oculto se ejecutó el 28 de agosto de 2025 con mil cuatrocientos agentes. Cuarenta y dos de sus objetivos estaban en la Faria Lima, el distrito financiero de São Paulo.",
      "sources": "Le Monde Diplomatique Brasil sobre la Operación Carbono Oculto (28/08/2025) · Instituto Igarapé, estudio publicado el 15/07/2026, vía Band · Policía Civil de São Paulo, organigrama del PCC, vía Gazeta do Povo y CNN Brasil · Instituto Peruano de Economía y El Comercio sobre exportaciones de oro ilegal; La República (08/06/2026) sobre el peso regional peruano · Infobae y Willax sobre denuncias de extorsión en Perú; Primicias sobre alertas en Ecuador; El Colombiano (17/04/2026) con datos del Ministerio de Defensa de Colombia; CIPER y Pauta sobre Chile · Primicias sobre incautaciones ecuatorianas 2025; Infobae/EFE (10/04/2026) sobre el Golfo de Guayaquil · GAFILAT, *Informe de Tipologías Regionales de LA/FT 2025*, vía UIAF Colombia e Infolaft · Observatorio de Seguridad Pública de Santa Fe, La Capital y Gobierno de Santa Fe (02/07/2026) sobre Rosario; Infobae (07/01/2026) sobre la disolución del grupo especial · Reuters y AtlasIntel sobre la Operación Contenção.",
      "editNote": "Vacíos declarados: no existe estimación oficial actualizada del volumen de lavado de activos en América Latina y no se publica ninguna. No se obtuvieron estimaciones datadas de minería ilegal de oro para Colombia, Venezuela y Brasil, ni una cuantificación del narcomenudeo rosarino; no se estiman. Las cifras de muertos de la Operación Contenção deben cotejarse contra el reporte de la Defensoría Pública del Estado de Río de Janeiro antes de publicar."
    }
  },
  {
    "id": "el-fin-de-los-partidos",
    "title": "El fin de los partidos",
    "summary": "Siete de cada diez legisladores latinoamericanos son nuevos en cada elección. Ese dato explica más sobre la región que cualquier encuesta.",
    "section": {
      "id": "polis",
      "label": "La Polis"
    },
    "author": {
      "name": "Redacción Politarca"
    },
    "publishedAt": "2026-08-27",
    "updatedAt": "2026-08-27",
    "readingMinutes": 7,
    "image": {
      "url": "/photos/plates/el-fin-de-los-partidos.jpg",
      "alt": "Hemiciclo vacío. La Polis: la crisis de representación que nadie está midiendo."
    },
    "tags": [
      "partidos",
      "legisladores",
      "representación",
      "América Latina"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Hay una investigación publicada en diciembre de 2025 que debería ser el punto de partida de cualquier conversación sobre la política latinoamericana, y que casi nadie ha citado."
        },
        {
          "type": "paragraph",
          "text": "Karel Kouba y Michael Weiss construyeron una base de datos codificando manualmente a **todos los legisladores electos de América Latina desde 1985**: 204 elecciones a lo largo de treinta y ocho años. Su hallazgo central es que las tasas de renovación legislativa en la región son **extremadamente altas: alrededor del 70% en promedio**, muy por encima de las de otras democracias."
        },
        {
          "type": "paragraph",
          "text": "Siete de cada diez. En cada elección. Durante cuatro décadas."
        },
        {
          "type": "paragraph",
          "text": "Detengámonos en lo que eso significa en la práctica. Un congreso latinoamericano promedio, el día que se instala, tiene a siete de cada diez de sus miembros aprendiendo el reglamento. Nadie recuerda la ley que se discutió hace dos períodos ni por qué fracasó. Nadie tiene relación de largo plazo con la burocracia que debe fiscalizar. Nadie acumula especialización en presupuesto, defensa o salud. Y nadie tiene incentivo para invertir en construir una reputación legislativa, porque no va a estar ahí para cobrarla."
        },
        {
          "type": "paragraph",
          "text": "Eso no es un déficit de calidad de los políticos. Es un diseño."
        },
        {
          "type": "heading",
          "text": "I. Lo que produce la rotación"
        },
        {
          "type": "paragraph",
          "text": "Los autores identifican los factores institucionales que correlacionan con mayores tasas de renovación: **límites a la reelección, elecciones escalonadas y duración de los mandatos**. Es decir, tres reglas que América Latina adoptó deliberadamente, y por buenas razones."
        },
        {
          "type": "paragraph",
          "text": "Los límites a la reelección son la marca de nacimiento del constitucionalismo latinoamericano. Se escribieron contra el caudillo que se perpetúa, y funcionaron: la región tiene, en efecto, menos hombres fuertes vitalicios de los que tendría sin ellos. Pero se extendieron del Ejecutivo al Legislativo, donde el problema que resuelven es mucho menor y el costo que imponen es mucho mayor."
        },
        {
          "type": "paragraph",
          "text": "Un diputado que no puede repostularse no tiene por qué responderle a nadie, porque no va a volver a pedirle el voto. Su horizonte es el cargo siguiente, que se lo da el partido o el gobernador de turno, no el elector. La reelección indefinida legislativa tiene problemas conocidos —incumbencia, clientelismo, captura—, pero al menos ata al legislador a alguien. Su prohibición lo desata de todos."
        },
        {
          "type": "heading",
          "text": "II. La consecuencia visible: fragmentación"
        },
        {
          "type": "paragraph",
          "text": "Los números disponibles de fragmentación no son los que idealmente querríamos —volveré sobre eso—, pero los que hay alcanzan."
        },
        {
          "type": "paragraph",
          "text": "**Brasil** llega a la elección de octubre con **veintidós partidos representados** en un Congreso de 594 miembros. El PL, el más grande, tiene 113 diputados: apenas por encima del 22% de la Cámara. El bloque que efectivamente gobierna —siete partidos sin identidad programática común— reúne 273 diputados y no responde a ninguno de los dos candidatos presidenciales con opción."
        },
        {
          "type": "paragraph",
          "text": "**Chile** eligió en noviembre de 2025 una Cámara de Diputados donde ninguna coalición tiene mayoría: Unidad por Chile 61 escaños, Cambio por Chile 42, Chile Grande y Unido 34, el Partido de la Gente 14, tres para verdes, regionalistas y humanistas, y un independiente. Un presidente electo con el 58% del voto en balotaje gobierna con una Cámara donde su coalición tiene 42 de 155 escaños."
        },
        {
          "type": "paragraph",
          "text": "**Perú**, en cambio, ofrece la versión contraria del mismo problema: solo **seis partidos superaron la valla del 5%** para el Congreso bicameral 2026-2031, después de una elección en la que compitieron muchos más. Una valla alta no produjo un sistema de partidos: produjo seis etiquetas que sobrevivieron a una elección, sin garantía de sobrevivir a la siguiente."
        },
        {
          "type": "heading",
          "text": "III. Lo que no sabemos, y por qué importa decirlo"
        },
        {
          "type": "paragraph",
          "text": "Aquí este medio tiene que hacer algo poco habitual en una nota de análisis político: declarar que el indicador estándar no está disponible."
        },
        {
          "type": "paragraph",
          "text": "La medida académica canónica de fragmentación es el Número Efectivo de Partidos, el índice de Laakso-Taagepera. **No existe una serie publicada y actualizada del NEP para los congresos latinoamericanos.** La única serie académica localizable, de Manuel Alcántara Sáez, cubre el período 1979-2003 y tiene veintidós años. Da, para referencia histórica: Brasil 7,06; Ecuador 5,86; Chile 5,05; Bolivia 4,45."
        },
        {
          "type": "paragraph",
          "text": "Lo mismo pasa con la volatilidad electoral. La serie de la OCDE que usa el índice de Pedersen llega hasta 2017. La de Alcántara, para 1979-2003, situaba a Perú en 42,38 —la más alta de la región— y a Bolivia en 38,03, frente a Uruguay en 11,37."
        },
        {
          "type": "paragraph",
          "text": "Y hay una tercera ausencia, que es la que más nos costó aceptar. Quisimos contar cuántos presidentes latinoamericanos electos desde 2018 provenían de partidos fundados en los cinco años previos a su elección. **No existe ese conteo publicado.** Producirlo requiere definir el universo, verificar la fecha de registro de cada vehículo partidario y contar: es decir, generar un dato original. Podemos hacerlo, y probablemente lo hagamos, pero entonces será un cálculo de esta casa y llevará esa etiqueta. No un hecho tomado prestado."
        },
        {
          "type": "paragraph",
          "text": "Que los tres indicadores más importantes para entender la crisis de representación latinoamericana estén desactualizados entre ocho y veintidós años no es un detalle académico. **Es una parte del problema.** Nadie está midiendo sistemáticamente lo que le está pasando a la política de la región."
        },
        {
          "type": "heading",
          "text": "IV. El dato que sí está fresco, y es el peor"
        },
        {
          "type": "paragraph",
          "text": "Latinobarómetro 2024, sobre 19.214 entrevistas cara a cara en diecisiete países entre agosto y octubre de ese año:"
        },
        {
          "type": "paragraph",
          "text": "**La confianza de los latinoamericanos en los partidos políticos es del 17%.**"
        },
        {
          "type": "paragraph",
          "text": "Uruguay encabeza con 36%; México 30%; República Dominicana 28%. En el otro extremo, Colombia y Perú: **9%**."
        },
        {
          "type": "paragraph",
          "text": "El informe incluye una sección titulada \"Se agotan los partidos políticos\". Y el indicador complementario es más elocuente que el de confianza: la cercanía declarada a algún partido llega al 62% en Uruguay, 56% en República Dominicana y 51% en México. Fuera de esos tres, se desploma."
        },
        {
          "type": "paragraph",
          "text": "Nótese qué tienen en común Uruguay, México y República Dominicana. No es la ideología: son un país gobernado por la centroderecha, otro por la izquierda y otro por el centro. Los tres tienen, además, **sistemas de partidos con décadas de vida que sobrevivieron a varias alternancias** —aunque el caso mexicano matiza la observación, porque su partido de gobierno tiene poco más de una década—. Con tres casos no hay una regla; hay una hipótesis que vale la pena mirar: que la confianza en los partidos dependa menos de que gobierne el que uno prefiere que de que siga existiendo la próxima vez."
        },
        {
          "type": "heading",
          "text": "V. Qué reemplaza a los partidos"
        },
        {
          "type": "paragraph",
          "text": "Lo que llena el vacío ya lo sabemos, porque está gobernando."
        },
        {
          "type": "paragraph",
          "text": "Los presidentes latinoamericanos de la última década llegaron, en su mayoría, con vehículos electorales personales: estructuras creadas para una candidatura, sin militancia, sin historia, sin órgano de disciplina interna y sin capacidad de sobrevivir a su fundador. Funcionan extraordinariamente bien para ganar una elección y no sirven absolutamente para nada después."
        },
        {
          "type": "paragraph",
          "text": "Los partidos efímeros probablemente agravan la renovación del 70%, aunque conviene no atribuirles el fenómeno: el estudio de Kouba y Weiss lo explica principalmente por reglas institucionales y su serie arranca en 1985, mucho antes de que los vehículos personalistas fueran dominantes."
        },
        {
          "type": "paragraph",
          "text": "El costo aparece en dos lugares."
        },
        {
          "type": "paragraph",
          "text": "**En el Congreso.** Un presidente sin partido no tiene bancada propia. Tiene que comprar mayorías, y el precio se paga en cargos, en obra pública dirigida y en enmiendas presupuestarias. Brasil es el caso extremo y documentado: su deuda bruta subió diez puntos del PIB en tres años y medio, en buena parte por el costo de mantener una coalición que no comparte programa."
        },
        {
          "type": "paragraph",
          "text": "**En la sucesión.** Un partido es, entre otras cosas, un mecanismo para que una idea sobreviva a la persona que la trajo. Sin partido, cada elección vuelve a empezar de cero, y la política se convierte en una sucesión de fundaciones."
        },
        {
          "type": "heading",
          "text": "VI. La incomodidad para la derecha"
        },
        {
          "type": "paragraph",
          "text": "Esto le incumbe especialmente a la nueva derecha latinoamericana, por una razón que a sus dirigentes no les va a gustar."
        },
        {
          "type": "paragraph",
          "text": "La derecha regional actual llegó al poder, casi en todas partes, con estructuras nuevas y personalistas, denunciando a la \"casta\" partidaria. El diagnóstico era en buena medida correcto: los partidos tradicionales estaban capturados, envejecidos y desconectados. Pero el remedio —vehículos electorales sin institución detrás— reproduce y agrava exactamente el problema que el conservadurismo, en cualquier tradición, debería querer resolver."
        },
        {
          "type": "paragraph",
          "text": "Porque un partido es una institución conservadora por definición: acumula memoria, forma cuadros, disciplina impulsos y transmite doctrina entre generaciones. Es el mecanismo por el cual una idea política sobrevive a la persona que la trajo. Una derecha que no construye partidos no está haciendo política conservadora. Está haciendo política de personalidad, que es la forma que el caudillismo latinoamericano ha tomado siempre."
        },
        {
          "type": "paragraph",
          "text": "Milei, Bukele, Kast, Noboa, De La Espriella: cada uno llegó con una etiqueta joven. La pregunta que ninguno ha contestado —y que decide si el ciclo actual deja algo o no— es qué queda de sus ideas el día que ellos no estén."
        },
        {
          "type": "paragraph",
          "text": "En una región donde siete de cada diez legisladores se renuevan cada elección, la respuesta por defecto es: nada."
        }
      ]
    },
    "seo": {
      "title": "El fin de los partidos",
      "description": "Siete de cada diez legisladores latinoamericanos son nuevos en cada elección.",
      "tldr": [
        "Hay una investigación publicada en diciembre de 2025 que debería ser el punto de partida de cualquier conversación sobre la política latinoamericana, y que casi nadie ha citado.",
        "Karel Kouba y Michael Weiss construyeron una base de datos codificando manualmente a todos los legisladores electos de América Latina desde 1985: 204 elecciones a lo largo de treinta y ocho años. Su hallazgo central es que las tasas de renovación legislativa en la región son…",
        "Siete de cada diez. En cada elección. Durante cuatro décadas.",
        "Detengámonos en lo que eso significa en la práctica. Un congreso latinoamericano promedio, el día que se instala, tiene a siete de cada diez de sus miembros aprendiendo el reglamento. Nadie recuerda la ley que se discutió hace dos períodos ni por qué fracasó. Nadie tiene…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «El fin de los partidos»?",
          "answer": "La pieza está situada en América Latina. Siete de cada diez legisladores latinoamericanos son nuevos en cada elección. Ese dato explica más sobre la región que cualquier encuesta."
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
      "country": "América Latina",
      "excerpt": "Hay una investigación publicada en diciembre de 2025 que debería ser el punto de partida de cualquier conversación sobre la política latinoamericana, y que casi nadie ha citado.",
      "sources": "Karel Kouba y Michael Weiss, \"Renovación legislativa en América Latina: construcción de una nueva base de datos y análisis de su evolución temporal\", *Revista Mexicana de Derecho Electoral*, 4 de diciembre de 2025 (DOI 10.22201/iij.24487910e.2025.23.20445), sobre 204 elecciones entre 1985 y 2023 · Corporación Latinobarómetro, *Informe 2024: La democracia resiliente* (19.214 entrevistas, 17 países, agosto-octubre de 2024) · Forças Terrestres (30/07/2026) sobre la composición del Congreso brasileño · Servel y cobertura de las elecciones parlamentarias chilenas de noviembre de 2025 · Exitosa (abril 2026) sobre los partidos que superaron la valla en Perú · Manuel Alcántara Sáez (2004), reproducido por CIDOB, para las series históricas de número efectivo de partidos y volatilidad · OCDE, *Perspectivas económicas de América Latina 2021*, para la serie de volatilidad de Pedersen 1998-2017.",
      "editNote": "Vacíos declarados, y son el punto de la nota: no existe una serie publicada y actualizada del Número Efectivo de Partidos para los congresos latinoamericanos; la última es de 2004 y cubre hasta 2003. No existen cifras de volatilidad electoral regional posteriores a 2017. No existe un conteo publicado de presidentes electos desde 2018 provenientes de partidos fundados en los cinco años previos; si esta casa lo produce, irá etiquetado como elaboración propia. Las tasas de renovación desagregadas por país del estudio de Kouba y Weiss están en su base de datos abierta y no se reproducen aquí sin extraerlas."
    }
  },
  {
    "id": "la-bomba-que-todos-oyen",
    "title": "La bomba que todos oyen",
    "summary": "América Latina tendrá 220 millones de personas mayores de sesenta años en 2060, casi un tercio de su población. Dos tercios de su población en edad de trabajar no cotizan a nada.",
    "section": {
      "id": "erario",
      "label": "El Erario"
    },
    "author": {
      "name": "El Erario"
    },
    "publishedAt": "2026-08-26",
    "updatedAt": "2026-08-26",
    "readingMinutes": 7,
    "image": {
      "url": "/photos/plates/la-bomba-que-todos-oyen.jpg",
      "alt": "Cola en una oficina previsional. El Erario: la vejez sin cotización."
    },
    "tags": [
      "pensiones",
      "envejecimiento",
      "informalidad",
      "CEPAL"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Hay dos números que, puestos uno al lado del otro, describen el mayor problema fiscal latinoamericano de las próximas tres décadas, y que casi nunca se publican juntos."
        },
        {
          "type": "paragraph",
          "text": "El primero: en 2022 había en América Latina y el Caribe **88,6 millones de personas de sesenta años o más, el 13,4% de la población**. En 1950 eran 8,7 millones, el 5,2%. Para 2060, según CEPAL, serán **220 millones: cerca del 30%**."
        },
        {
          "type": "paragraph",
          "text": "El segundo, que ya apareció en estas páginas y conviene repetir: **solo el 31% de la población latinoamericana en edad de trabajar cotiza activamente a un sistema de pensiones**. Medido sobre el empleo total, alrededor del 47%. En Perú, el 29%."
        },
        {
          "type": "paragraph",
          "text": "Los dos datos describen el mismo hecho visto desde extremos opuestos del tiempo. La región va a tener, en una generación, la estructura demográfica de un país desarrollado y la base contributiva de uno pobre."
        },
        {
          "type": "paragraph",
          "text": "Nadie está reformando para eso. Cuatro países han hecho algo, y vale la pena ver qué."
        },
        {
          "type": "heading",
          "text": "I. Chile: la reforma que sí se aprobó"
        },
        {
          "type": "paragraph",
          "text": "Después de doce años de intentos fallidos, Chile aprobó la Ley 21.735."
        },
        {
          "type": "paragraph",
          "text": "El mecanismo central es una **cotización adicional del empleador de hasta 8,5% de la remuneración imponible**, que hasta ahora no existía: el sistema chileno se financiaba casi exclusivamente con el 10% que aporta el trabajador. Se implementa por tramos:"
        },
        {
          "type": "table",
          "head": [
            "Período",
            "Cotización adicional del empleador"
          ],
          "rows": [
            [
              "Agosto 2025 – agosto 2026",
              "**1%** (0,1% a cuenta individual, 0,9% al Seguro Social)"
            ],
            [
              "Agosto 2026 – agosto 2027",
              "**3,5%**"
            ],
            [
              "Desde agosto 2033",
              "**8,5%**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Ese 0,9% inicial financia, entre otras cosas, una Compensación por Expectativa de Vida para mujeres: un reconocimiento explícito de que un sistema de capitalización individual que divide el mismo fondo por más años de vida esperada produce pensiones menores para ellas."
        },
        {
          "type": "paragraph",
          "text": "El resultado proyectado ya se registra en las mediciones internacionales. La tasa de reemplazo neta de Chile para un trabajador de ingreso promedio, según sucesivas ediciones de *Pensions at a Glance* de la OCDE, pasó de 38,5% para hombres y 35,4% para mujeres en la edición de 2021, a 45,7% y 43,0% en la de 2023, a **61,3% y 61,1% en la edición de 2025**. Chile subió del puesto 34 al 19 entre 38 países, y quedó a menos de dos puntos del promedio de la OCDE."
        },
        {
          "type": "paragraph",
          "text": "Es la reforma previsional más significativa de la región en veinte años, y merece decirse con claridad: la aprobó un gobierno de izquierda con votos de derecha, y su elemento decisivo —introducir cotización patronal en un sistema de capitalización individual— es exactamente lo que la derecha chilena resistió durante dos décadas y terminó votando."
        },
        {
          "type": "heading",
          "text": "II. Colombia: aprobada, viva y todavía en disputa"
        },
        {
          "type": "paragraph",
          "text": "La Ley 2381 de 2024 rediseña el sistema colombiano en pilares. Su rasgo central: las cotizaciones **hasta 2,3 salarios mínimos van a Colpensiones**, el administrador público, y solo el excedente va a una administradora privada. Las mujeres con setecientas cincuenta semanas cotizadas y los hombres con novecientas se mantienen bajo las reglas anteriores."
        },
        {
          "type": "paragraph",
          "text": "El 26 de agosto de 2026, la Corte Constitucional resolvió. Declaró **exequibles más de ochenta artículos** por siete votos contra uno, y devolvió **nueve disposiciones más un artículo nuevo** a la Cámara de Representantes por vicios de procedimiento, con un plazo de treinta días hábiles desde la notificación, tras el cual la Corte revisará otra vez."
        },
        {
          "type": "paragraph",
          "text": "Ni la avaló plenamente ni la tumbó. La dejó viva en lo sustancial y condicionada a un trámite parcial. La entrada en vigencia sigue fijada para el **1 de abril de 2027**; hasta el 31 de marzo rigen las reglas actuales."
        },
        {
          "type": "paragraph",
          "text": "Un gobierno entrante que quiera revertirla —y el que asumió en agosto de 2026 llegó proponiendo justamente eso— tiene siete meses para hacerlo y una Corte que acaba de blindar ochenta artículos."
        },
        {
          "type": "heading",
          "text": "III. Brasil: el número que no cabe en el presupuesto"
        },
        {
          "type": "paragraph",
          "text": "Brasil no reformó nada desde 2019, y su situación describe el destino que espera al resto de la región si no reforma."
        },
        {
          "type": "paragraph",
          "text": "En el presupuesto federal de 2025, el gasto en Previdência **superó por primera vez el billón de reales**: 1,007 billones, un aumento nominal del 9% sobre 2024, el mayor desde 2022. Representa el **49,4% de los gastos obligatorios** sujetos al techo constitucional."
        },
        {
          "type": "paragraph",
          "text": "Casi la mitad del gasto obligatorio del Estado brasileño son pensiones. Y Brasil, con 12,6% del PIB destinado a previsión social en la última medición comparada disponible, es el país que más gasta de la región, contra un promedio regional de alrededor del 4,5%."
        },
        {
          "type": "paragraph",
          "text": "Hay que decir que esa cifra comparada es de 2015, publicada por el BID en 2021, y que no existe una actualización. Es una laguna importante en la literatura fiscal latinoamericana, y significa que la región discute reformas previsionales sin saber con precisión cuánto gasta hoy."
        },
        {
          "type": "heading",
          "text": "IV. Argentina: dónde cayó el ajuste"
        },
        {
          "type": "paragraph",
          "text": "El caso argentino es el más instructivo, porque muestra que un sistema puede ajustarse sin que nadie lo reforme."
        },
        {
          "type": "paragraph",
          "text": "Primero, la escala del problema. Según datos oficiales de mayo de 2025, **el 68,6% de las jubilaciones vigentes en Argentina fue otorgado por moratoria**: es decir, a personas que no completaron los años de aporte requeridos y accedieron mediante planes de regularización. En Formosa la proporción llega al **90,4%**; en Chaco al 86,6%; en Misiones al 83,2%. En el otro extremo, La Rioja 47,4% y la Ciudad de Buenos Aires 52,4%. En la provincia de Buenos Aires, el 72% de 1,6 millones de jubilaciones."
        },
        {
          "type": "paragraph",
          "text": "La brecha de género es reveladora: en Formosa, el 95,4% de las jubiladas accedió por moratoria, frente al 81,6% de los jubilados. Las mujeres, que cotizan menos porque trabajan más en el sector informal y en el cuidado no remunerado, dependen casi por completo del mecanismo excepcional."
        },
        {
          "type": "paragraph",
          "text": "La moratoria vigente venció el 23 de marzo de 2025 y no fue renovada."
        },
        {
          "type": "paragraph",
          "text": "Ahora, el mecanismo del ajuste. En abril de 2026, el haber mínimo argentino era de 380.319 pesos, más un bono de 70.000: un total de 450.319. **Ese bono está congelado en 70.000 pesos desde marzo de 2024.** Su poder adquisitivo cayó un 52%; para mantener su valor debería ser de 146.116 pesos."
        },
        {
          "type": "paragraph",
          "text": "El resultado es aritméticamente elegante y socialmente brutal. Los haberes por encima de la mínima, que se ajustan por fórmula y no dependen del bono, subieron **1,8% real interanual y 9,8% respecto de noviembre de 2023**. La mínima con bono cayó **8,7% respecto de noviembre de 2023** y 3,2% real interanual."
        },
        {
          "type": "paragraph",
          "text": "Es decir: **quienes cobran más recuperaron poder adquisitivo y quienes cobran menos lo perdieron**, y todo ocurrió sin una sola ley, sin debate parlamentario y sin que ningún funcionario tuviera que defender la decisión. Bastó con no actualizar un número."
        },
        {
          "type": "paragraph",
          "text": "Cualquiera puede tener una opinión sobre si el ajuste previsional argentino era necesario. Lo que no admite discusión es dónde recayó."
        },
        {
          "type": "heading",
          "text": "V. La reforma que ninguno de los cuatro hizo"
        },
        {
          "type": "paragraph",
          "text": "Chile mejoró sus tasas de reemplazo. Colombia rediseñó su arquitectura. Brasil no hizo nada. Argentina ajustó por omisión."
        },
        {
          "type": "paragraph",
          "text": "Ninguno tocó el problema de fondo, que no es el diseño del sistema sino **quién está adentro**."
        },
        {
          "type": "paragraph",
          "text": "Un sistema de reparto necesita cotizantes. Un sistema de capitalización necesita cotizantes. Un sistema mixto necesita cotizantes. Con el 31% de la población en edad de trabajar cotizando activamente, ninguna arquitectura funciona, porque todas están construidas sobre un supuesto de empleo formal masivo que en América Latina nunca existió y que no está apareciendo."
        },
        {
          "type": "paragraph",
          "text": "Y ahí está la trampa. La región ya sabe lo que pasa cuando el sistema contributivo no alcanza: aparecen las pensiones no contributivas. En 2022 las recibía el **31% de las personas de 65 años y más** —unos veinte millones—, frente al 3,4% en el año 2000. Veintiocho países de la región las tienen. Pero **más de la mitad de esas pensiones entrega montos inferiores a cien dólares mensuales, y ninguna supera los trescientos**."
        },
        {
          "type": "paragraph",
          "text": "Ese es el equilibrio hacia el que se desliza América Latina sin decidirlo: un sistema contributivo que cubre a una minoría formal y un piso no contributivo financiado con impuestos generales que paga cien dólares. No es un sistema de pensiones. Es una política de contención de la indigencia con otro nombre."
        },
        {
          "type": "paragraph",
          "text": "La discusión honesta —la que ningún gobierno de la región ha abierto— empieza por reconocer eso y preguntar cuánto está dispuesta la sociedad a pagar por un piso digno, financiado con qué impuestos y a qué edad. Es una conversación desagradable, que dura más que un período presidencial y que no da votos."
        },
        {
          "type": "paragraph",
          "text": "Faltan treinta y cuatro años para que uno de cada tres latinoamericanos tenga más de sesenta. Es aproximadamente el tiempo que la región lleva postergando esta discusión."
        }
      ]
    },
    "seo": {
      "title": "La bomba que todos oyen",
      "description": "220 millones de mayores de sesenta en 2060. Dos tercios de los trabajadores no cotizan.",
      "tldr": [
        "Hay dos números que, puestos uno al lado del otro, describen el mayor problema fiscal latinoamericano de las próximas tres décadas, y que casi nunca se publican juntos.",
        "El primero: en 2022 había en América Latina y el Caribe 88,6 millones de personas de sesenta años o más, el 13,4% de la población. En 1950 eran 8,7 millones, el 5,2%. Para 2060, según CEPAL, serán 220 millones: cerca del 30%.",
        "El segundo, que ya apareció en estas páginas y conviene repetir: solo el 31% de la población latinoamericana en edad de trabajar cotiza activamente a un sistema de pensiones. Medido sobre el empleo total, alrededor del 47%. En Perú, el 29%.",
        "Los dos datos describen el mismo hecho visto desde extremos opuestos del tiempo. La región va a tener, en una generación, la estructura demográfica de un país desarrollado y la base contributiva de uno pobre."
      ],
      "faq": [
        {
          "question": "¿De qué país es «La bomba que todos oyen»?",
          "answer": "La pieza está situada en América Latina. América Latina tendrá 220 millones de personas mayores de sesenta años en 2060, casi un tercio de su población. Dos tercios de su población en edad de trabajar no cotizan a nada."
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
      "excerpt": "Hay dos números que, puestos uno al lado del otro, describen el mayor problema fiscal latinoamericano de las próximas tres décadas, y que casi nunca se publican juntos.",
      "sources": "CEPAL, panorama del envejecimiento en América Latina y el Caribe (datos 2022 y proyección 2060) · OIT, *World Social Protection Report 2024–26* (datos 2023) y presentación de Fabio Bertranou (30/04/2026) · Ley 21.735 de Chile; Ministerio de Hacienda de Chile y Superintendencia de Seguridad Social sobre el cronograma de implementación · OCDE, *Pensions at a Glance*, ediciones 2021, 2023 y 2025, vía Emol (27/11/2025) · Ley 2381 de 2024 de Colombia y fallo de la Corte Constitucional del 26/08/2026, vía Infobae y El Colombiano · Poder360 (08/09/2024) sobre el gasto previsional en el presupuesto federal brasileño · BID, Pessino y Ter-Minassian, *Enfrentando los costos fiscales del envejecimiento poblacional en América Latina y el Caribe* (2021, datos de 2015) · La Nación (04/09/2025) sobre jubilaciones por moratoria en Argentina; Chequeado (abril 2026) sobre la evolución real de los haberes · CEPAL, *Sistemas de pensiones no contributivos en América Latina y el Caribe* (2024).",
      "editNote": "Vacíos declarados: no existe una serie actualizada de gasto público en pensiones como porcentaje del PIB por país en América Latina; el dato comparado más reciente es de 2015. No se publican tasas de reemplazo para países distintos de Chile porque no pudieron extraerse del documento original de la OCDE. No existe una estimación verificable del efecto fiscal medido de la reforma brasileña de 2019, y no se estima. La tasa de dependencia regional proyectada a 2050 y 2060 no pudo obtenerse de fuente primaria y se sustituye por la serie de población de 60 años y más, que sí está publicada."
    }
  },
  {
    "id": "matriz-limpia-luz-cara",
    "title": "La matriz más limpia del mundo y la luz más cara",
    "summary": "América Latina genera el 65% de su electricidad sin quemar nada. Un hogar chileno paga por ella más que un hogar estadounidense.",
    "section": {
      "id": "erario",
      "label": "El Erario"
    },
    "author": {
      "name": "El Erario"
    },
    "publishedAt": "2026-08-25",
    "updatedAt": "2026-08-25",
    "readingMinutes": 8,
    "image": {
      "url": "/photos/plates/matriz-limpia-luz-cara.jpg",
      "alt": "Líneas de alta tensión. El Erario: generar limpio no barató la cuenta."
    },
    "tags": [
      "electricidad",
      "Chile",
      "tarifas",
      "renovables"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "En 2025, América Latina y el Caribe generó el **65% de su electricidad con fuentes limpias**. El promedio mundial fue del 43%. La región saca veintidós puntos de ventaja al planeta en el indicador que todo el planeta dice querer mejorar."
        },
        {
          "type": "paragraph",
          "text": "El desglose, según Ember: hidroeléctrica 40%, solar y eólica 19% —por encima del 17% mundial—, y fósiles 35%, que en 2015 eran el 47%. En Chile, la solar y la eólica ya generan el 38% del total; en Uruguay, el 46%. En Brasil, la generación solar superó a la fósil por primera vez en 2025. En toda la región, solar y eólica generaron cinco veces más electricidad que el carbón. En junio de 2025, según OLADE, la generación renovable regional alcanzó un pico mensual del 71%."
        },
        {
          "type": "paragraph",
          "text": "Ahora los precios. Estos son, en dólares por kilovatio-hora, para hogares:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "Hogares",
            "Negocios"
          ],
          "rows": [
            [
              "**Uruguay**",
              "**0,252**",
              "0,124"
            ],
            [
              "**Chile**",
              "**0,218**",
              "0,161"
            ],
            [
              "Colombia",
              "0,204",
              "0,202"
            ],
            [
              "Perú",
              "0,187",
              "0,162"
            ],
            [
              "**Estados Unidos**",
              "**0,184**",
              "0,148"
            ],
            [
              "**Promedio mundial**",
              "**0,170**",
              "0,162"
            ],
            [
              "Brasil",
              "0,161",
              "0,131"
            ],
            [
              "México",
              "0,107",
              "**0,212**"
            ],
            [
              "Argentina",
              "0,080",
              "0,094"
            ],
            [
              "China",
              "0,076",
              "0,097"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Un hogar uruguayo paga por su electricidad **un 37% más que un hogar estadounidense**. Un hogar chileno, un 18% más. Ambos países están entre los que más limpio generan del continente. Con una base de datos distinta —solo residencial, a marzo de 2025—, un estudio del centro CENTRA de la Universidad Adolfo Ibáñez sitúa a Chile como el segundo país más caro de América Latina en electricidad residencial, superado solo por Guatemala. En la serie de GlobalPetrolPrices que aparece arriba, Uruguay queda por delante de Chile. Las dos mediciones no son comparables y no se promedian."
        },
        {
          "type": "paragraph",
          "text": "La pregunta obvia —¿por qué la energía más barata de producir llega tan cara al enchufe?— tiene una respuesta que no está en la generación."
        },
        {
          "type": "heading",
          "text": "I. Lo que se pierde en el camino"
        },
        {
          "type": "paragraph",
          "text": "Aquí está el dato que ordena todo lo demás, y que casi ningún debate energético latinoamericano incluye."
        },
        {
          "type": "paragraph",
          "text": "Según el BID, en las últimas tres décadas América Latina y el Caribe ha perdido, en promedio, **el 17% de la energía que genera** antes de que llegue a un cliente. Es aproximadamente **el triple del promedio de la OCDE**. **Veintidós de los veintiséis países de la región tienen pérdidas superiores al 10%**; solo cuatro están por debajo."
        },
        {
          "type": "paragraph",
          "text": "En términos absolutos, esas pérdidas superaron los **120 teravatios-hora en 2019**: el equivalente a toda la generación solar y eólica de la región ese año. Toda. Cada panel y cada aerogenerador instalado en América Latina produjeron, ese año, exactamente lo que el sistema desperdició entre la central y el medidor."
        },
        {
          "type": "paragraph",
          "text": "El costo para las distribuidoras equivale a entre el **0,19% y el 0,33% del PIB regional**, y las emisiones asociadas rondan los cinco a seis millones de toneladas de CO₂ al año. Las pérdidas llamadas \"no técnicas\" —el eufemismo sectorial para el robo de energía y la conexión clandestina— le cuestan a las distribuidoras de la región **más de 16.600 millones de dólares anuales**."
        },
        {
          "type": "paragraph",
          "text": "Ese número tiene una consecuencia directa sobre la tarifa: **la energía perdida la paga el que sí paga.**"
        },
        {
          "type": "heading",
          "text": "II. Lo que no se conecta"
        },
        {
          "type": "paragraph",
          "text": "El segundo componente del precio es la ausencia de un mercado."
        },
        {
          "type": "paragraph",
          "text": "La capacidad instalada de interconexión eléctrica en Sudamérica existe y es considerable: 3.200 MW entre Paraguay y Argentina por Yacyretá; 2.200 MW entre Argentina y Brasil por Garabí; cerca de 2.000 MW entre Argentina y Uruguay; 500 MW entre Colombia y Ecuador; 500 MW entre Brasil y Uruguay; 100 MW entre Ecuador y Perú, con un proyecto de 500 MW en contratación."
        },
        {
          "type": "paragraph",
          "text": "**El nivel promedio de utilización de esas interconexiones en el Cono Sur fue del 35,5% en 2023**, frente al 28,4% de 2022."
        },
        {
          "type": "paragraph",
          "text": "Dos tercios de la infraestructura de intercambio eléctrico ya construida en Sudamérica no se usa."
        },
        {
          "type": "paragraph",
          "text": "Y el desbalance entre lo hecho y lo pendiente es igual de elocuente: **1.679 kilómetros de líneas de interconexión operativas frente a 4.775 kilómetros en proyectos**. Las barreras que identifica OLADE no son técnicas: son una planificación nacional orientada a la autosuficiencia energética, restricciones de sincronismo entre sistemas de 50 y 60 hercios, y la ausencia de una autoridad supranacional fuera de la Comunidad Andina."
        },
        {
          "type": "paragraph",
          "text": "La consecuencia es que un país con exceso de hidroeléctrica en época de lluvias no puede vendérselo al vecino que en ese momento quema gas. Cada sistema nacional tiene que dimensionarse para su propio pico, con respaldo térmico propio, y ese respaldo —plantas que existen para operar pocos días al año— se paga en la tarifa de todos los días."
        },
        {
          "type": "heading",
          "text": "III. La factura de la sequía"
        },
        {
          "type": "paragraph",
          "text": "Que la matriz sea limpia porque es hidroeléctrica tiene una consecuencia que la región vuelve a descubrir con cada ciclo climático: **cuando no llueve, se apaga la luz**."
        },
        {
          "type": "paragraph",
          "text": "**Ecuador** entró en racionamiento eléctrico el 19 de septiembre de 2024 por crisis hidroeléctrica. **Colombia** aplicó medidas de racionamiento en abril de 2024 durante El Niño. **Chile** sufrió un apagón nacional el 25 de febrero de 2025 que dejó a más de un millón de personas sin electricidad. **Cuba**, que es un caso distinto y peor, acumuló en 2026 **seis colapsos totales de su sistema eléctrico**, el último el 3 de agosto."
        },
        {
          "type": "paragraph",
          "text": "Una matriz con 40% de hidroeléctrica es limpia y es volátil. Gestionar esa volatilidad exige exactamente las dos cosas que la región no tiene: almacenamiento y interconexión. Sin ellas, la alternativa es respaldo térmico caro y ocioso, que es lo que hay, y que es una de las razones por las que la energía limpia llega cara."
        },
        {
          "type": "heading",
          "text": "IV. Y ahora llegan los centros de datos"
        },
        {
          "type": "paragraph",
          "text": "Sobre este sistema —con 17% de pérdidas, un tercio de utilización de sus interconexiones y respaldo térmico caro— está a punto de caer una demanda que nadie planificó."
        },
        {
          "type": "paragraph",
          "text": "**Brasil superó el gigavatio de capacidad de tecnologías de la información en centros de datos** en abril de 2026: unos 300 MW más que los cuatro mercados latinoamericanos siguientes sumados. Una medición distinta sitúa la capacidad instalada regional en 1,1 GW en 2025, un 20% más que el año anterior, con tres ciudades —São Paulo, Barueri y Querétaro— concentrando el 82% del stock nuevo. Las dos cifras provienen de fuentes diferentes y probablemente miden universos distintos —capacidad de tecnologías de la información frente a capacidad instalada total—, por lo que no deben sumarse ni compararse directamente."
        },
        {
          "type": "paragraph",
          "text": "Los anuncios pendientes son de otro orden de magnitud. El proyecto de OpenAI y Sur Energy en la Patagonia argentina contempla hasta 25.000 millones de dólares y **500 MW**, con una primera fase de 100 MW en 2027. Amazon comprometió 4.000 millones para una región de nube en Chile y 5.000 millones en Querétaro. Scala anunció en Rio Grande do Sul un proyecto que arranca en 54 MW y proyecta 4,7 GW."
        },
        {
          "type": "paragraph",
          "text": "Un solo centro de datos de 500 MW consume, funcionando continuamente, más electricidad que varias ciudades intermedias de la región."
        },
        {
          "type": "paragraph",
          "text": "Esa demanda es una oportunidad real: es industria de alto valor que llega atraída, entre otras cosas, por la matriz limpia. Pero llega a un sistema que pierde el 17% de lo que genera, que no comercia con sus vecinos y que se raciona cuando no llueve. Y llega a discutir prioridad de conexión y precio con los mismos hogares que ya pagan la electricidad más cara del hemisferio."
        },
        {
          "type": "paragraph",
          "text": "Ninguna autoridad regulatoria de la región ha explicado públicamente cómo va a resolver ese conflicto. La versión optimista es que la nueva demanda financiará la inversión en redes que nunca se hizo. La otra es que competirá por una capacidad escasa y subirá la tarifa de todos."
        },
        {
          "type": "heading",
          "text": "V. Qué hay que arreglar, y no es lo que se discute"
        },
        {
          "type": "paragraph",
          "text": "El debate energético latinoamericano se libra casi por completo sobre la generación: cuánta renovable, cuánto gas, cuánta nuclear, qué subastas. Es el debate equivocado, porque la generación es lo único que la región resolvió bien."
        },
        {
          "type": "paragraph",
          "text": "Los tres problemas están aguas abajo."
        },
        {
          "type": "paragraph",
          "text": "**Las pérdidas.** Diecisiete por ciento contra un tercio de eso en la OCDE. Reducirlas a la mitad liberaría más energía que cualquier parque solar que la región pueda construir esta década, y a una fracción del costo. Requiere medidores, catastros de red, cobranza y capacidad de perseguir la conexión clandestina: es decir, capacidad estatal, otra vez."
        },
        {
          "type": "paragraph",
          "text": "**La interconexión.** Dos tercios de la capacidad instalada ociosa y casi tres veces más kilómetros proyectados que construidos. Es el único caso de integración regional donde el beneficio es inmediato, medible y no requiere ceder soberanía regulatoria: solo despachar energía cuando el vecino la necesita."
        },
        {
          "type": "paragraph",
          "text": "**La tarifa.** Este es el punto donde un liberal tiene que ser especialmente honesto, porque la respuesta incomoda a los dos lados. Congelar tarifas —que es lo que hicieron casi todos los gobiernos de la región en algún momento— no baja el precio de la energía: lo traslada al futuro. Chile lo comprobó: su tarifa actual incluye un cargo de deuda de entre el 10% y el 11% que corresponde a los años de congelamiento. La cuenta llegó igual, con intereses y con siete años de retraso."
        },
        {
          "type": "paragraph",
          "text": "Pero decir eso no equivale a decir que el precio actual sea correcto. Una tarifa que incorpora un 17% de pérdidas, respaldo térmico ocioso e interconexiones sin usar no es un precio de mercado: **es la factura de una ineficiencia con apariencia de precio de mercado.**"
        },
        {
          "type": "paragraph",
          "text": "La región no tiene un problema de energía cara. Tiene un problema de energía barata que llega cara, y esa distinción es toda la política pública que falta."
        }
      ]
    },
    "seo": {
      "title": "La matriz más limpia del mundo y la luz más cara",
      "description": "Chile. El 65% de la electricidad regional es limpia. Un hogar chileno paga más que uno estadounidense.",
      "tldr": [
        "En 2025, América Latina y el Caribe generó el 65% de su electricidad con fuentes limpias. El promedio mundial fue del 43%. La región saca veintidós puntos de ventaja al planeta en el indicador que todo el planeta dice querer mejorar.",
        "El desglose, según Ember: hidroeléctrica 40%, solar y eólica 19% —por encima del 17% mundial—, y fósiles 35%, que en 2015 eran el 47%. En Chile, la solar y la eólica ya generan el 38% del total; en Uruguay, el 46%. En Brasil, la generación solar superó a la fósil por primera…",
        "Ahora los precios. Estos son, en dólares por kilovatio-hora, para hogares:",
        "Un hogar uruguayo paga por su electricidad un 37% más que un hogar estadounidense. Un hogar chileno, un 18% más. Ambos países están entre los que más limpio generan del continente. Con una base de datos distinta —solo residencial, a marzo de 2025—, un estudio del centro…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «La matriz más limpia del mundo y la luz más cara»?",
          "answer": "La pieza está situada en Chile. América Latina genera el 65% de su electricidad sin quemar nada. Un hogar chileno paga por ella más que un hogar estadounidense."
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
      "country": "Chile",
      "excerpt": "En 2025, América Latina y el Caribe generó el 65% de su electricidad con fuentes limpias. El promedio mundial fue del 43%. La región saca veintidós puntos de ventaja al planeta en el indicador que todo el planeta dice…",
      "sources": "Ember, datos de generación eléctrica 2025 para América Latina y el Caribe, y *Global Electricity Review 2026* · OLADE, generación renovable regional de junio de 2025, y *Situación de la Integración Eléctrica en América del Sur*, Nota Técnica N°2, octubre de 2024 · GlobalPetrolPrices, precios de electricidad por país (promedio 2023-2025; promedio mundial referido al cuarto trimestre de 2025) · CENTRA, Universidad Adolfo Ibáñez, noviembre de 2025, con datos a marzo de 2025 · BID, *Pérdidas eléctricas en América Latina y el Caribe* · Econojournal (mayo 2026) sobre el costo de las pérdidas no técnicas · Coordinador Eléctrico Nacional de Chile sobre el apagón del 25/02/2025 · France 24 sobre las crisis hidroeléctricas de Ecuador y Colombia de 2024 · Infobae (03/08/2026) sobre los colapsos del sistema eléctrico cubano · BNamericas (29/04/2026) sobre la capacidad de centros de datos en Brasil; Infobae (17/08/2026) sobre capacidad regional; Data Center Dynamics (13/10/2025) sobre el proyecto de OpenAI y Sur Energy; About Amazon e InvestChile sobre las inversiones de AWS.",
      "editNote": "Vacíos declarados: no se publica la descomposición porcentual de la tarifa eléctrica —generación, transmisión, distribución, impuestos— para Chile, Brasil, Colombia y Argentina, porque no pudo obtenerse de fuente primaria. Tampoco se publica ninguna cifra de subsidios energéticos como porcentaje del PIB, por la misma razón. No existen proyecciones verificables de demanda eléctrica de centros de datos en la región a 2030 y no se estiman. Las cifras de CENTRA están originalmente expresadas en pesos chilenos y no se convierten aquí."
    }
  },
  {
    "id": "escondida-le-gano-a-chile",
    "title": "Escondida le ganó a Chile",
    "summary": "Una sola mina privada produjo en 2025 más cobre que toda la empresa estatal chilena. En el litio, el precio cayó un 86% desde el pico. La maldición de los recursos volvió, y esta vez llegó con contrato firmado.",
    "section": {
      "id": "erario",
      "label": "El Erario"
    },
    "author": {
      "name": "El Erario"
    },
    "publishedAt": "2026-08-24",
    "updatedAt": "2026-08-24",
    "readingMinutes": 8,
    "image": {
      "url": "/photos/plates/escondida-le-gano-a-chile.jpg",
      "alt": "Rajo minero en el desierto. El Erario: el cobre que ya no manda como antes."
    },
    "tags": [
      "cobre",
      "litio",
      "Codelco",
      "Escondida"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "En 2025, la mina Escondida produjo **1.345.100 toneladas de cobre**, un 5,3% más que el año anterior y su máximo desde 2007."
        },
        {
          "type": "paragraph",
          "text": "En 2025, las divisiones de Codelco —la empresa estatal más grande de América Latina, dueña de las mayores reservas de cobre del planeta— produjeron **1.334.400 toneladas**."
        },
        {
          "type": "paragraph",
          "text": "Una mina superó a una empresa. Y no fue casualidad: en el primer trimestre de 2026 Codelco registró su peor producción trimestral en al menos dos décadas, reportó una caída del 8,1% y, el 13 de agosto de 2026, **renunció formalmente a sus metas de producción para el año**."
        },
        {
          "type": "paragraph",
          "text": "Chile en conjunto produjo 5.415.200 toneladas en 2025, un 1,65% menos que en 2024. Sigue siendo, por lejos, el mayor productor mundial: el USGS estima su producción de mina 2025 en 5,3 millones de toneladas, frente a 3,2 millones del Congo y 2,7 millones de Perú, y le atribuye reservas de 180 millones de toneladas."
        },
        {
          "type": "paragraph",
          "text": "El país tiene el recurso. Lo que está perdiendo es la capacidad de extraerlo."
        },
        {
          "type": "heading",
          "text": "I. El litio, o cómo desplomarse desde un pico"
        },
        {
          "type": "paragraph",
          "text": "La historia del litio latinoamericano de los últimos cinco años se cuenta con una sola columna de números. Estos son los precios del carbonato de litio, en dólares por tonelada, según el USGS:"
        },
        {
          "type": "table",
          "head": [
            "Año",
            "Precio"
          ],
          "rows": [
            [
              "2021",
              "11.700"
            ],
            [
              "**2022**",
              "**63.700**"
            ],
            [
              "2023",
              "39.000"
            ],
            [
              "2024",
              "11.800"
            ],
            [
              "**2025**",
              "**9.000**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Una caída del **86% desde el pico de 2022**. Y nótese el detalle que suele omitirse en la cobertura: **el precio de 2025 está por debajo del de 2021**. No hubo recuperación. Después del desplome vino otro año de caída, del 24%."
        },
        {
          "type": "paragraph",
          "text": "Sobre ese fondo, la producción mundial creció un 31% en 2025, hasta 290.000 toneladas de litio contenido. Australia produjo 92.000; China, 62.000; **Chile, 56.000; Argentina, 23.000; Brasil, 12.000**."
        },
        {
          "type": "paragraph",
          "text": "Es decir: el mundo produjo un tercio más de litio en el año en que el precio tocó su nivel más bajo de la serie. Es la definición de un mercado de materias primas en fase de exceso de oferta, y es exactamente el momento del ciclo en el que los países productores toman sus peores decisiones: firman a precio de hoy contratos de treinta años, o paralizan proyectos que estarán listos justo cuando el ciclo vuelva a girar."
        },
        {
          "type": "paragraph",
          "text": "América Latina está haciendo las dos cosas al mismo tiempo, en países distintos."
        },
        {
          "type": "heading",
          "text": "II. Chile: el acuerdo que tardó 983 días"
        },
        {
          "type": "paragraph",
          "text": "Chile firmó. El acuerdo entre Codelco y SQM se cerró el 27 de diciembre de 2025, novecientos ochenta y tres días después del memorándum inicial."
        },
        {
          "type": "paragraph",
          "text": "La estructura: una sociedad llamada Nova Andino Litio, con **Codelco en 50% más una acción y SQM en 50% menos una acción**, vigente **hasta 2060**. El regulador de competencia chino aprobó la operación el 10 de noviembre de 2025, y lo hizo con una condición: **un suministro mínimo de 125.000 toneladas anuales de carbonato de litio**."
        },
        {
          "type": "paragraph",
          "text": "Vale la pena detenerse ahí. Chile firmó un acuerdo de treinta y cinco años sobre el Salar de Atacama, y una de sus condiciones de cierre —un volumen mínimo de suministro— la impuso la autoridad de competencia de un tercer país que es, a la vez, el principal comprador."
        },
        {
          "type": "paragraph",
          "text": "No es ilegal ni inusual: cualquier operación de esta escala requiere aprobación en las jurisdicciones donde las partes operan. Pero describe con precisión la posición negociadora de la región. El vendedor de la materia prima no fija el precio ni los volúmenes. Los fija quien la transforma."
        },
        {
          "type": "heading",
          "text": "III. Argentina: la brecha entre lo firmado y lo desembolsado"
        },
        {
          "type": "paragraph",
          "text": "Argentina eligió el camino del incentivo. El Régimen de Incentivo para Grandes Inversiones, creado por la Ley Bases de 2024, reduce el impuesto a las ganancias del 35% al 25%, devuelve el IVA de inmediato, elimina derechos de exportación desde el segundo año y otorga estabilidad fiscal y jurídica por treinta a cuarenta años."
        },
        {
          "type": "paragraph",
          "text": "A julio de 2026 tenía **veinte proyectos aprobados por 57.000 millones de dólares comprometidos**, con cien mil empleos proyectados entre construcción y operación. Trece de esos proyectos son mineros, cuatro de energía y renovables, dos de infraestructura de hidrocarburos y el restante de industria e infraestructura. Hay veinticinco proyectos más en evaluación, por 110.800 millones adicionales."
        },
        {
          "type": "paragraph",
          "text": "Y hay un segundo número, publicado un mes después, que hay que poner al lado del primero: **el propio Gobierno espera 7.737 millones de dólares de inversión efectiva hasta el fin del mandato presidencial**."
        },
        {
          "type": "paragraph",
          "text": "Cincuenta y siete mil millones comprometidos. Siete mil setecientos treinta y siete millones esperados."
        },
        {
          "type": "paragraph",
          "text": "La diferencia no prueba que el régimen haya fracasado: los proyectos de esta escala se desembolsan a lo largo de una década y los compromisos son a treinta o cuarenta años. Pero sí prueba que **el número que circula en los titulares no es el que va a entrar a la economía argentina en este período**, y que la distancia entre ambos es de más de siete a uno."
        },
        {
          "type": "paragraph",
          "text": "Hay proyectos reales avanzando: el parque solar El Quemado de YPF Luz, de 305 MW, opera desde diciembre de 2025; el proyecto de litio Hombre Muerto Oeste, desde abril de 2026; el oleoducto de Vaca Muerta Sur lleva más del 70% de avance. El Observatorio del RIGI, en su informe a mayo de 2026, describe un cuadro de \"proyectos aún sin aprobar, mucha concentración y poca inversión extranjera\"."
        },
        {
          "type": "paragraph",
          "text": "Un régimen de incentivos que entrega estabilidad fiscal por cuarenta años a cambio de compromisos que se cumplen a un séptimo en el corto plazo es un instrumento que hay que evaluar con los datos, no con los anuncios. En 2027 se sabrá."
        },
        {
          "type": "heading",
          "text": "IV. Bolivia: veintitrés millones de toneladas y cero producción"
        },
        {
          "type": "paragraph",
          "text": "El caso boliviano es el más elocuente y el peor entendido."
        },
        {
          "type": "paragraph",
          "text": "El USGS atribuye a Bolivia **veintitrés millones de toneladas de recursos identificados de litio** —más que Chile, que tiene trece— y la sitúa en el tercer lugar mundial de recursos, detrás de Estados Unidos y Argentina."
        },
        {
          "type": "paragraph",
          "text": "Bolivia **no aparece en la tabla de producción del USGS. Ni en la de reservas.**"
        },
        {
          "type": "paragraph",
          "text": "La explicación habitual —\"la salmuera boliviana es más difícil de procesar\", \"falta tecnología\"— es incompleta. La explicación documentada es institucional. Los contratos que Bolivia firmó con la empresa china CBC y con la rusa Uranium One Group fueron **suspendidos judicialmente el 28 de mayo de 2025** y siguen paralizados en el Tribunal Constitucional Plurinacional a julio de 2026. La impugnación no vino de una empresa competidora ni de la oposición: vino de una **acción popular de cincuenta y tres comunidades indígenas del sudoeste de Potosí**."
        },
        {
          "type": "paragraph",
          "text": "Los argumentos: falta de consulta previa conforme al Convenio 169 de la OIT, acceso al agua, y opacidad sobre los términos contractuales y los estudios de impacto ambiental."
        },
        {
          "type": "paragraph",
          "text": "La lección para el resto de la región no es que la consulta previa sea un obstáculo. Es más incómoda que eso: **un contrato firmado sin licencia social es un contrato que no se ejecuta**, y descubrirlo en tribunales tres años después cuesta más que hacer la consulta al principio. Bolivia tiene el tercer recurso de litio del mundo y una producción que el organismo geológico estadounidense no registra."
        },
        {
          "type": "heading",
          "text": "V. Perú: el 47%"
        },
        {
          "type": "paragraph",
          "text": "Perú produjo 2,7 millones de toneladas de cobre en 2025, tercero del mundo. **Tres minas —Antamina, Las Bambas y Cerro Verde— concentran el 48,4% de esa producción.**"
        },
        {
          "type": "paragraph",
          "text": "Y el dato que define su horizonte: **el 47% de los proyectos de la nueva cartera de inversión minera peruana tiene conflictos sociales**."
        },
        {
          "type": "paragraph",
          "text": "Casi la mitad de la inversión minera futura de Perú está enfrentada con la comunidad donde se ubica. No es un riesgo hipotético: es el estado actual de la cartera."
        },
        {
          "type": "heading",
          "text": "VI. Lo que un liberal tiene que decir aquí"
        },
        {
          "type": "paragraph",
          "text": "La posición cómoda sería reclamar más apertura, menos royalty y más certeza jurídica. Chile subió su carga tributaria minera con la Ley 21.591, vigente desde el 1 de enero de 2024, hasta un máximo del 46,5% para los grandes operadores. Argentina la bajó con el RIGI. Los dos países tienen problemas, y no son los mismos."
        },
        {
          "type": "paragraph",
          "text": "La posición honesta es que **el problema latinoamericano con sus minerales no está en el nivel del impuesto: está en la capacidad operativa y en la calidad institucional**, que son dos cosas distintas y ninguna se arregla moviendo una alícuota."
        },
        {
          "type": "paragraph",
          "text": "Codelco no produce menos porque pague mucho royalty; produce menos porque sus yacimientos envejecieron y las inversiones de reposición se postergaron durante dos décadas por decisiones políticas de corto plazo sobre una empresa estatal: ese es un problema de capacidad. Bolivia no produce porque sus contratos están judicializados por no haber consultado, y Perú tiene la mitad de su cartera en conflicto porque nadie construyó la institucionalidad para negociar con las comunidades antes de firmar: esos son problemas regulatorios e institucionales, y son igual de caros. Argentina, por su parte, firma compromisos por cincuenta y siete mil millones y espera desembolsos por siete mil setecientos."
        },
        {
          "type": "paragraph",
          "text": "Y ninguno de los cuatro procesa lo que extrae. Es probablemente el hecho más caro de la economía latinoamericana contemporánea, y aquí hay que reconocer un límite de esta nota: **no existe una cifra pública y verificable de qué porcentaje del litio y el cobre latinoamericanos se procesa en la región**, ni una estimación creíble del valor agregado que se pierde. Lo único documentado por CEPAL es cualitativo: América Latina es una de las mayores productoras de cobre de mina del mundo y **su capacidad de fundición y refinación se ha reducido**."
        },
        {
          "type": "paragraph",
          "text": "Que no exista esa cifra es, en sí mismo, el dato. La región discute desde hace un siglo si debería industrializar sus recursos y no ha construido la estadística básica para saber cuánto le cuesta no hacerlo."
        },
        {
          "type": "paragraph",
          "text": "Mientras tanto, el precio del litio cayó un 86%, el del cobre marcó un récord de 4,80 dólares la libra, y quien decide qué se hace con ambos está a diecinueve mil kilómetros."
        }
      ]
    },
    "seo": {
      "title": "Escondida le ganó a Chile",
      "description": "Chile. Una mina privada produjo más cobre que toda la estatal. El litio cayó 86%.",
      "tldr": [
        "En 2025, la mina Escondida produjo 1.345.100 toneladas de cobre, un 5,3% más que el año anterior y su máximo desde 2007.",
        "En 2025, las divisiones de Codelco —la empresa estatal más grande de América Latina, dueña de las mayores reservas de cobre del planeta— produjeron 1.334.400 toneladas.",
        "Una mina superó a una empresa. Y no fue casualidad: en el primer trimestre de 2026 Codelco registró su peor producción trimestral en al menos dos décadas, reportó una caída del 8,1% y, el 13 de agosto de 2026, renunció formalmente a sus metas de producción para el año.",
        "Chile en conjunto produjo 5.415.200 toneladas en 2025, un 1,65% menos que en 2024. Sigue siendo, por lejos, el mayor productor mundial: el USGS estima su producción de mina 2025 en 5,3 millones de toneladas, frente a 3,2 millones del Congo y 2,7 millones de Perú, y le…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «Escondida le ganó a Chile»?",
          "answer": "La pieza está situada en Chile. Una sola mina privada produjo en 2025 más cobre que toda la empresa estatal chilena. En el litio, el precio cayó un 86% desde el pico. La maldición de los recursos volvió, y esta vez llegó con contrato firmado."
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
      "country": "Chile",
      "excerpt": "En 2025, la mina Escondida produjo 1.345.100 toneladas de cobre, un 5,3% más que el año anterior y su máximo desde 2007.",
      "sources": "U.S. Geological Survey, *Mineral Commodity Summaries 2026*, capítulos de litio y cobre · Cochilco y Diario Financiero sobre la producción chilena de cobre en 2025 · La Tercera, Codelco, Contraloría General de la República y Ministerio de Economía de Chile sobre el acuerdo Codelco-SQM y su cierre el 27/12/2025 · La Tercera, NODAL y BioBioChile sobre la producción de Codelco en 2026 · Ley 21.591 de Chile · Infobae (11/07/2026) sobre el estado del RIGI y (27/08/2026) sobre la inversión efectiva esperada; Observatorio del RIGI, informe a mayo de 2026 · Infobae (28/05/2025) y Opinión Bolivia (12/07/2026) sobre la suspensión judicial de los contratos de litio bolivianos · Ojo Público sobre conflictividad social en la cartera minera peruana; Minería en Línea (julio 2026) sobre la concentración de la producción de cobre · CEPAL sobre capacidad de fundición y refinación regional.",
      "editNote": "Notas de edición. Las cifras de producción de litio de Chile y Argentina para 2024 requieren corrección manual al extraerse del PDF del USGS; las publicadas aquí fueron verificadas contra el total mundial y son consistentes, pero conviene cotejarlas contra el documento original. No se publica el monto recaudado por el royalty minero chileno, ni la producción de litio de la estatal boliviana YLB, ni el valor de los proyectos mineros paralizados en Perú: ninguno pudo obtenerse de fuente primaria y no se estiman. No existe cifra verificable del porcentaje de litio y cobre latinoamericanos procesado en la región, y así se declara en el texto."
    }
  },
  {
    "id": "cinco-anos-y-medio-de-tramites",
    "title": "Cinco años y medio de trámites",
    "summary": "En 2018, sacar adelante un proyecto inmobiliario en Chile tomaba 1.298 días. En 2025 toma 2.001. Ese número explica más sobre el precio de la vivienda que cualquier discusión sobre tasas de interés.",
    "section": {
      "id": "erario",
      "label": "El Erario"
    },
    "author": {
      "name": "El Erario"
    },
    "publishedAt": "2026-08-23",
    "updatedAt": "2026-08-23",
    "readingMinutes": 9,
    "image": {
      "url": "/photos/plates/cinco-anos-y-medio-de-tramites.jpg",
      "alt": "Obra detenida en Santiago. El Erario: el permiso como política de vivienda."
    },
    "tags": [
      "permisos",
      "Chile",
      "vivienda",
      "tramitación"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Hay una cifra chilena que debería estar en el centro de la discusión habitacional de toda América Latina, y que casi nadie cita fuera del gremio inmobiliario."
        },
        {
          "type": "paragraph",
          "text": "Según el Ranking de Trámites Pro Vivienda, elaborado sobre más de mil doscientos cincuenta proyectos y más de dos mil cuatrocientos trámites municipales, el tiempo total de tramitación de un proyecto inmobiliario en Chile —desde el anteproyecto hasta la recepción final— pasó de **1.298 días en 2018 a 2.001 días en 2025**. Setecientos tres días más en siete años. Cinco años y medio para poder entregar una vivienda."
        },
        {
          "type": "paragraph",
          "text": "Dentro de la Región Metropolitana la dispersión es brutal: la comuna más rápida, Renca, tramita en 311 días; la más lenta, Conchalí, en 837."
        },
        {
          "type": "paragraph",
          "text": "El costo está estimado: los retrasos de aprobación elevan el precio final de la vivienda alrededor de un **10% en promedio**, unos doce millones de pesos adicionales en una propiedad de tres mil unidades de fomento."
        },
        {
          "type": "paragraph",
          "text": "Un país donde construir una vivienda toma cinco años y medio de permisos no tiene un problema de oferta insuficiente. Tiene un problema de oferta prohibida."
        },
        {
          "type": "heading",
          "text": "I. El precio, en años de vida"
        },
        {
          "type": "paragraph",
          "text": "La medida más honesta de accesibilidad habitacional no es el precio ni la tasa: es cuántos años de ingreso familiar cuesta una vivienda."
        },
        {
          "type": "paragraph",
          "text": "En Chile, el Índice de Acceso a la Vivienda de la Cámara Chilena de la Construcción pasó de **3,9 años de ingreso en 2009 a 11,4 años en 2024**. En quince años, el precio de una casa se triplicó respecto de lo que gana quien la compra."
        },
        {
          "type": "paragraph",
          "text": "Los índices comparados de ciudad a ciudad son metodológicamente frágiles —la única base disponible es colaborativa, alimentada por usuarios, y da para Chile 17,5 años donde la fuente gremial da 11,4—, así que conviene usarlos solo para ordenar, no para medir. Con esa advertencia, el orden que arrojan es: Santiago 16,1 años, Bogotá 15,5, Lima 14,9, Ciudad de México 14,3, São Paulo 13,3, Buenos Aires 12,7, Montevideo 11,0. Para referencia, Nueva York 11,8, Berlín 10,9, Los Ángeles 8,4."
        },
        {
          "type": "paragraph",
          "text": "Las capitales latinoamericanas son, en años de ingreso, más caras que las ciudades estadounidenses con las que sus habitantes se comparan. Y lo son con ingresos entre cuatro y ocho veces menores."
        },
        {
          "type": "paragraph",
          "text": "En precios reales, la última década no fue igual para todos. Ajustados por inflación, los precios de vivienda subieron **43,6% en Chile y 38,7% en México**, y **cayeron 13,6% en Brasil y 17,1% en Perú**. Chile es el país donde la vivienda se encareció más en términos reales, y es también el que tiene la mayor profundidad de crédito hipotecario de la región."
        },
        {
          "type": "heading",
          "text": "II. El crédito, o su ausencia"
        },
        {
          "type": "paragraph",
          "text": "Ese es el otro eje del problema, y separa a la región en dos mundos."
        },
        {
          "type": "paragraph",
          "text": "Profundidad del crédito hipotecario como porcentaje del PIB, 2025:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "Crédito hipotecario / PIB"
          ],
          "rows": [
            [
              "**Chile**",
              "**28%**"
            ],
            [
              "Brasil",
              "11%"
            ],
            [
              "México",
              "10%"
            ],
            [
              "Perú",
              "8%"
            ],
            [
              "Colombia",
              "8%"
            ],
            [
              "**Argentina**",
              "**1%**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Argentina tiene un mercado hipotecario que equivale al 1% de su producto. Es, en la práctica, un país sin crédito de largo plazo para vivienda: quien compra, paga al contado o no compra. Esa es la razón por la que el debate habitacional argentino se libra casi por entero sobre el alquiler, mientras el chileno se libra sobre la tasa."
        },
        {
          "type": "paragraph",
          "text": "Y aquí hay una advertencia que este medio debe hacer contra su propio interés narrativo: **no existe ninguna fuente que cuantifique de manera comparable qué porcentaje de hogares latinoamericanos puede acceder a un crédito hipotecario**. Es la cifra que ordenaría toda la política habitacional de la región, y no está publicada. Ni por el BID, ni por CEPAL, ni por ONU-Hábitat."
        },
        {
          "type": "heading",
          "text": "III. El déficit, y por qué no es lo que se cree"
        },
        {
          "type": "paragraph",
          "text": "El BID estima que el **45% de los hogares de América Latina y el Caribe no tiene una vivienda adecuada**. Pero el dato que importa está en la composición: según esa misma fuente, alrededor del 95% de ese déficit es **cualitativo**, no cuantitativo. La compilación por países que se cita más abajo, construida sobre estadísticas nacionales con definiciones distintas, da una proporción menor —78%—. Usamos esta última como cifra operativa por ser la que tiene desglose verificable, y señalamos que la fuente regional da un valor más alto."
        },
        {
          "type": "paragraph",
          "text": "Es decir: el problema dominante no es la falta de casas. Es que las casas existentes no tienen agua, o saneamiento, o techo firme, o título de propiedad, o están hacinadas."
        },
        {
          "type": "paragraph",
          "text": "La compilación por países más completa disponible, hecha por la asociación regional de entidades de financiamiento habitacional sobre fuentes nacionales, arroja para dieciocho países un total de 69,5 millones de hogares en déficit, de los cuales **el 78% es cualitativo**. Brasil concentra 32,7 millones, con un 81% cualitativo; México 9 millones, con 85% cualitativo; Colombia 5,2 millones, con 76%."
        },
        {
          "type": "paragraph",
          "text": "Con una advertencia importante, que la propia compilación hace: los años de referencia van de 2011 a 2022, las definiciones nacionales no están armonizadas, y ese total de 69,5 millones no es un agregado oficial de ningún organismo. Es una suma aritmética de fuentes heterogéneas. No debe presentarse como cifra regional."
        },
        {
          "type": "paragraph",
          "text": "Aun así, la dirección es clara y tiene una consecuencia política concreta: **construir vivienda nueva no resuelve el 78% del problema**. Lo resuelven agua potable, alcantarillado, mejoramiento de barrios y regularización de títulos, que son exactamente las políticas que no cortan cintas."
        },
        {
          "type": "paragraph",
          "text": "El indicador oficial de los Objetivos de Desarrollo Sostenible confirma un dato que debería alarmar: la proporción de población urbana latinoamericana viviendo en asentamientos informales cayó sostenidamente del **31,9% en 2000 al 17,75% en 2016**, y volvió a subir al **18,92% en 2022**. Dieciséis años de progreso y seis de reversión."
        },
        {
          "type": "heading",
          "text": "IV. Chile, otra vez, como laboratorio"
        },
        {
          "type": "paragraph",
          "text": "Chile merece atención no porque sea el peor caso sino porque es el mejor documentado, y porque su deterioro ocurrió con las políticas que la región suele recomendar."
        },
        {
          "type": "paragraph",
          "text": "**Las familias en campamentos pasaron de 27.000 en 2011 a 120.584 en el catastro 2024-2025**: un aumento del 156% solo desde 2019, y la cifra más alta desde 1996. Hay 1.428 campamentos. El 39,3% de las familias que viven en ellos son migrantes, proporción que llega al 63,6% en Tarapacá y al 61,5% en la Región Metropolitana."
        },
        {
          "type": "paragraph",
          "text": "Al mismo tiempo, el sector inmobiliario está en crisis: las ventas cayeron un 30% entre 2021 y 2024, y el stock sin vender llegó a unas 105.000 unidades en el tercer trimestre de 2024, de las cuales 38.000 estaban listas para entrega inmediata."
        },
        {
          "type": "paragraph",
          "text": "Ciento veinte mil familias en campamentos y treinta y ocho mil viviendas terminadas sin vender. En el mismo país, al mismo tiempo."
        },
        {
          "type": "paragraph",
          "text": "Esa coexistencia es la definición exacta de un mercado roto, y ninguna de las dos mitades se arregla con la política que se aplica a la otra. Las familias en campamentos no compran las 38.000 viviendas porque no califican para el crédito ni al precio subsidiado. Y las viviendas no se abaratan porque el 10% del precio son los cinco años y medio de trámites."
        },
        {
          "type": "paragraph",
          "text": "Hay un dato que cierra el diagnóstico y que debería ser el titular de cualquier discusión sobre productividad en la región: **la productividad total de factores del sector construcción chileno cayó 49,1% entre 1990 y 2023**. La mitad. En treinta y tres años, construir se volvió el doble de ineficiente."
        },
        {
          "type": "paragraph",
          "text": "Y en la descomposición de costos entre 2012 y 2022, los materiales e insumos subieron 50,8%, los terrenos 28,8%, y los impuestos y regulaciones 7,2%. Es decir: la regulación no es el componente más caro. Pero es el único cuyo aumento no compra nada."
        },
        {
          "type": "heading",
          "text": "V. Argentina y lo que enseña la desregulación"
        },
        {
          "type": "paragraph",
          "text": "El caso argentino es el experimento natural que la región tenía pendiente."
        },
        {
          "type": "paragraph",
          "text": "La Ley de Alquileres 27.551, que fijaba plazos mínimos de tres años y actualizaciones anuales por índice, fue derogada por decreto en diciembre de 2023. Los resultados a junio de 2026 son medibles."
        },
        {
          "type": "paragraph",
          "text": "**Oferta:** la cantidad de unidades ofrecidas en alquiler en la Ciudad de Buenos Aires equivalía en junio de 2026 a **3,4 veces el mínimo histórico de febrero de 2023**. El primer salto, a comienzos de 2024, fue del 62% mensual."
        },
        {
          "type": "paragraph",
          "text": "**Precios:** el alquiler promedio de un dos ambientes era de 860.106 pesos mensuales en junio de 2026, con un aumento interanual del 31,3% —el menor a doce meses desde noviembre de 2019—. En el primer semestre de 2026, los alquileres subieron 15,7% acumulado frente a una inflación del 17,1%: **por debajo de la inflación**."
        },
        {
          "type": "paragraph",
          "text": "En términos reales, los precios volvieron a niveles de 2021. La rentabilidad del propietario, medida trimestralmente, más que se duplicó: de 0,52% a 1,21% en monoambientes."
        },
        {
          "type": "paragraph",
          "text": "La lectura honesta es que la desregulación funcionó en el eje donde se esperaba que funcionara —la oferta volvió al mercado— y que los precios reales se moderaron después de un período de fuerte alza. La lectura honesta también incluye que medidos en dólares financieros, desde la devaluación de 2023, los alquileres subieron más del 200%, y que el ingreso de los inquilinos no acompañó ese movimiento."
        },
        {
          "type": "paragraph",
          "text": "No es un caso cerrado a favor ni en contra, y conviene resistir la tentación de cerrarlo. Es un caso donde la derogación coincidió con el retorno de la oferta y también con una estabilización macroeconómica —la inflación semestral pasó a 17,1%— que empuja en la misma dirección. Separar los dos efectos requiere un trabajo econométrico que, hasta donde sabemos, nadie ha hecho. Lo que sí ocurrió, y no es poco, es que el costo de la transición recayó sobre los inquilinos de 2024."
        },
        {
          "type": "heading",
          "text": "VI. La política que nadie hace"
        },
        {
          "type": "paragraph",
          "text": "Si el 78% del déficit es cualitativo, si construir toma cinco años y medio de permisos, si la productividad del sector cayó a la mitad en tres décadas y si no sabemos qué proporción de hogares puede acceder a una hipoteca, entonces la agenda habitacional latinoamericana está mirando el lugar equivocado."
        },
        {
          "type": "paragraph",
          "text": "Los subsidios a la demanda —el instrumento preferido de la región durante treinta años— empujan precios cuando la oferta está restringida. Es aritmética, no ideología: si el número de viviendas que se pueden construir por año está limitado por el permiso y no por el capital, entregar más poder de compra sube el precio y no la cantidad."
        },
        {
          "type": "paragraph",
          "text": "Lo que baja el precio de la vivienda es permitir construirla. Suelo disponible, densidad donde hay transporte, permisos con plazos máximos y silencio administrativo positivo. Es una agenda profundamente liberal, técnicamente aburrida, y que en Chile lleva siete años yendo en dirección contraria bajo gobiernos de los dos signos."
        },
        {
          "type": "paragraph",
          "text": "Ciento veinte mil familias chilenas viven en campamentos. Treinta y ocho mil departamentos terminados esperan comprador. Entre unas y otros hay dos mil un días de trámites."
        }
      ]
    },
    "seo": {
      "title": "Cinco años y medio de trámites",
      "description": "Chile. Un proyecto inmobiliario pasó de 1.298 días a 2.001. Eso es el precio de la vivienda.",
      "tldr": [
        "Hay una cifra chilena que debería estar en el centro de la discusión habitacional de toda América Latina, y que casi nadie cita fuera del gremio inmobiliario.",
        "Según el Ranking de Trámites Pro Vivienda, elaborado sobre más de mil doscientos cincuenta proyectos y más de dos mil cuatrocientos trámites municipales, el tiempo total de tramitación de un proyecto inmobiliario en Chile —desde el anteproyecto hasta la recepción final— pasó…",
        "Dentro de la Región Metropolitana la dispersión es brutal: la comuna más rápida, Renca, tramita en 311 días; la más lenta, Conchalí, en 837.",
        "El costo está estimado: los retrasos de aprobación elevan el precio final de la vivienda alrededor de un 10% en promedio, unos doce millones de pesos adicionales en una propiedad de tres mil unidades de fomento."
      ],
      "faq": [
        {
          "question": "¿De qué país es «Cinco años y medio de trámites»?",
          "answer": "La pieza está situada en Chile. En 2018, sacar adelante un proyecto inmobiliario en Chile tomaba 1.298 días. En 2025 toma 2.001. Ese número explica más sobre el precio de la vivienda que cualquier discusión sobre tasas de interés."
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
      "country": "Chile",
      "excerpt": "Hay una cifra chilena que debería estar en el centro de la discusión habitacional de toda América Latina, y que casi nadie cita fuera del gremio inmobiliario.",
      "sources": "Ranking de Trámites Pro Vivienda, 5ª edición, Colliers, vía Chicureo Hoy (29/05/2026) y Diario Financiero (27/07/2026) · Índice de Acceso a la Vivienda de la Cámara Chilena de la Construcción, citado en Espacio Público, *Cada vez menos accesible: el desafío chileno de la vivienda* (mayo 2025) · Numbeo, índice precio-ingreso por ciudad, consultado el 30/08/2026, con la advertencia metodológica del texto · Global Property Guide, variación real de precios de vivienda a diez años, agosto de 2026 · Deloitte Econosignal sobre profundidad del crédito hipotecario, vía Infobae (22/05/2026) · BID, declaraciones de Tatiana Gallego en el Tercer Foro de Vivienda (25/07/2024), vía EFE · UNIAPRAVI, compilación de déficit habitacional por país (septiembre 2024) · Banco Mundial y ONU-Hábitat, indicador EN.POP.SLUM.UR.ZS · TECHO-Chile y Fundación Vivienda, *Catastro Nacional de Campamentos 2024-2025* · Espacio Público (mayo 2025) sobre stock inmobiliario, costos y productividad del sector construcción · Zonaprop vía Infobae (02/07/2026) y Centro CEPA (primer trimestre de 2026) sobre el mercado de alquileres porteño.",
      "editNote": "Vacíos declarados: no existe ninguna fuente comparable que cuantifique qué porcentaje de hogares latinoamericanos puede acceder a crédito hipotecario, ni tasas hipotecarias vigentes por país en una fuente única; no se estiman. El total de 69,5 millones de hogares en déficit es una suma de fuentes nacionales no armonizadas y no un agregado oficial. Los tiempos de tramitación de permisos solo pudieron verificarse para Chile: el indicador comparado del Banco Mundial fue descontinuado tras 2020 y su sucesor no publica el equivalente."
    }
  },
  {
    "id": "el-ano-en-que-asia-nos-paso",
    "title": "El año en que Asia nos pasó",
    "summary": "En 1960, un latinoamericano promedio producía casi tres veces lo que un asiático oriental. En 2010 se cruzaron. Hoy produce dos tercios de lo que produce él.",
    "section": {
      "id": "erario",
      "label": "El Erario"
    },
    "author": {
      "name": "El Erario"
    },
    "publishedAt": "2026-08-22",
    "updatedAt": "2026-08-22",
    "readingMinutes": 7,
    "image": {
      "url": "/photos/plates/el-ano-en-que-asia-nos-paso.jpg",
      "alt": "Puerto de contenedores. El Erario: el cruce con Asia oriental que ya ocurrió."
    },
    "tags": [
      "productividad",
      "Asia",
      "convergencia",
      "PIB per cápita"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Estos son los ingresos por habitante de América Latina y el Caribe y de Asia oriental y el Pacífico, en dólares constantes de 2015, según el Banco Mundial:"
        },
        {
          "type": "table",
          "head": [
            "Año",
            "América Latina",
            "Asia oriental",
            "Relación"
          ],
          "rows": [
            [
              "1960",
              "3.336",
              "1.155",
              "**2,89 a 1**"
            ],
            [
              "1970",
              "4.369",
              "1.925",
              "2,27"
            ],
            [
              "1980",
              "6.164",
              "2.583",
              "2,39"
            ],
            [
              "1990",
              "5.780",
              "3.746",
              "1,54"
            ],
            [
              "2000",
              "6.742",
              "5.078",
              "1,33"
            ],
            [
              "**2010**",
              "**8.060**",
              "**7.877**",
              "**1,02**"
            ],
            [
              "2020",
              "7.813",
              "11.314",
              "0,69"
            ],
            [
              "**2024**",
              "**8.872**",
              "**13.295**",
              "**0,67**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "En 1960 América Latina era casi tres veces más rica que Asia oriental. En 2010 se igualaron. En 2024, un latinoamericano promedio produce **dos tercios** de lo que produce un asiático oriental."
        },
        {
          "type": "paragraph",
          "text": "En sesenta y cuatro años, el ingreso per cápita latinoamericano se multiplicó por 2,7. El asiático, por 11,5."
        },
        {
          "type": "paragraph",
          "text": "Ese es el hecho central de la economía política latinoamericana contemporánea, y es notable la poca frecuencia con que aparece en el debate público de la región. Se discuten gobiernos, ciclos, modelos y presidentes. La línea de fondo lleva seis décadas apuntando en la misma dirección, con independencia de quién gobierne."
        },
        {
          "type": "heading",
          "text": "I. No es la inversión. Es lo que se hace con ella"
        },
        {
          "type": "paragraph",
          "text": "La explicación intuitiva es que América Latina invierte poco. Es cierta y es insuficiente."
        },
        {
          "type": "paragraph",
          "text": "Formación bruta de capital como porcentaje del PIB en 2024: **América Latina 19,1%; Asia oriental y el Pacífico 34,8%; China 40,5%; Corea del Sur 30,0%**. Ahorro bruto: América Latina 16,8%; Asia oriental 37,0%."
        },
        {
          "type": "paragraph",
          "text": "La brecha es de **15,7 puntos del PIB en inversión y 20,2 puntos en ahorro**. Enorme. Pero el diagnóstico del BID en su trabajo de referencia sobre el tema es más incómodo: el rezago latinoamericano se explica principalmente por **el bajo crecimiento de la productividad, no por la insuficiencia de inversión en capital**."
        },
        {
          "type": "paragraph",
          "text": "La diferencia importa políticamente. Si el problema fuera solo inversión, la solución sería atraer capital: incentivos, estabilidad, apertura. Si el problema es productividad, el capital que llegue rendirá lo mismo que el que ya está, y el resultado será un país con más máquinas y la misma renta."
        },
        {
          "type": "paragraph",
          "text": "El Fondo Monetario documenta la trayectoria: la productividad total de factores de la región respecto de Estados Unidos alcanzó su máximo **a fines de los años setenta**, antes de la crisis de la deuda, y ha descendido de forma sostenida desde entonces. Entre 1990 y 2019, mientras los emergentes de Asia y de Europa convergían hacia la productividad estadounidense, la de América Latina se deterioró en términos relativos."
        },
        {
          "type": "paragraph",
          "text": "El dato más brutal es del informe del BID publicado el 3 de agosto de 2026: **la productividad laboral de América Latina equivale al 26% de la estadounidense**. Se necesitan casi cuatro trabajadores latinoamericanos para producir lo que produce uno en Estados Unidos."
        },
        {
          "type": "paragraph",
          "text": "Y su consecuencia sobre las personas: **el ingreso real de los trabajadores latinoamericanos creció 18% en treinta años**, aproximadamente la mitad de lo que creció en los países de la OCDE."
        },
        {
          "type": "paragraph",
          "text": "Treinta años. Dieciocho por ciento. Eso es todo lo que una generación entera de latinoamericanos ganó en poder adquisitivo."
        },
        {
          "type": "heading",
          "text": "II. La trampa, y quiénes escapan de ella"
        },
        {
          "type": "paragraph",
          "text": "El Banco Mundial dedicó su Informe sobre el Desarrollo Mundial de 2024 al problema, y el marco que ofrece es útil."
        },
        {
          "type": "paragraph",
          "text": "Ciento ocho países estaban clasificados como de ingreso medio a fines de 2023: seis mil millones de personas, el 75% de la población mundial. El punto típico de estancamiento aparece alrededor del **10% del PIB per cápita anual de Estados Unidos**, unos ocho mil dólares a valores actuales."
        },
        {
          "type": "paragraph",
          "text": "**Desde 1990, solo treinta y cuatro economías de ingreso medio lograron pasar a ingreso alto.** Y más de un tercio de ellas lo hizo gracias a la integración a la Unión Europea o a descubrimientos previos de petróleo."
        },
        {
          "type": "paragraph",
          "text": "Es decir: excluidos los que entraron a Europa y los que encontraron hidrocarburos, en treinta y cinco años poco más de veinte países del mundo salieron de la trampa por sus propios medios."
        },
        {
          "type": "paragraph",
          "text": "América Latina lleva medio siglo en el rango. Y su desempeño reciente no sugiere movimiento: la década 2015-2024 cerró con un crecimiento promedio anual del **0,9%**, lo que CEPAL llama la \"segunda década perdida\". La primera, la de los años ochenta, creció al 2% anual. **La década perdida de los ochenta creció más del doble que la de 2015-2024.**"
        },
        {
          "type": "paragraph",
          "text": "El empleo cuenta la misma historia: creció 1,3% anual entre 2014 y 2023, frente al 3,9% anual de los años setenta."
        },
        {
          "type": "heading",
          "text": "III. Los tres motores que no están"
        },
        {
          "type": "paragraph",
          "text": "Hay tres insumos que la literatura identifica como determinantes de la productividad, y en los tres América Latina está en el lugar equivocado."
        },
        {
          "type": "paragraph",
          "text": "**Investigación y desarrollo.** El gasto en I+D como porcentaje del PIB, dato de 2023: Israel 6,35%; Corea del Sur 4,94%; promedio OCDE 2,93%; China 2,58%; **Brasil 1,19%; Uruguay 0,70%; América Latina y el Caribe 0,68%**."
        },
        {
          "type": "paragraph",
          "text": "La región invierte en investigación **menos de una cuarta parte de lo que invierte la OCDE** y menos de una séptima parte de lo que invierte Corea del Sur. Brasil, que es el mejor de la región, gasta menos de la mitad del promedio OCDE."
        },
        {
          "type": "paragraph",
          "text": "**Capital humano.** Los resultados de PISA 2022 —la última aplicación publicada— sitúan al mejor país latinoamericano, Chile, en 412 puntos en matemáticas frente a 472 del promedio OCDE: **sesenta puntos de brecha**. Detrás: Uruguay 409, México 395, Perú 391, Costa Rica 385, Colombia 383, Brasil 379, Argentina 378."
        },
        {
          "type": "paragraph",
          "text": "**Escala empresarial.** Aquí conectamos con un hallazgo ya publicado en estas páginas: el 47,4% de los trabajadores latinoamericanos es informal, y las firmas informales producen alrededor del 20% del valor agregado por empleado de las formales. El BID añade el dato de estructura: **el 46% de los trabajadores latinoamericanos eran autónomos o empleados de microempresas en 2024**."
        },
        {
          "type": "paragraph",
          "text": "Casi la mitad de la fuerza laboral de la región trabaja en unidades demasiado pequeñas para especializarse, para invertir en tecnología o para exportar. No es un problema de esfuerzo. Es un problema de escala."
        },
        {
          "type": "heading",
          "text": "IV. Por qué el ciclo político no lo resuelve"
        },
        {
          "type": "paragraph",
          "text": "Aquí está la parte que incomoda a la posición desde la que escribimos."
        },
        {
          "type": "paragraph",
          "text": "La derecha latinoamericana llegó al poder con un diagnóstico razonable —Estado sobredimensionado, impuestos mal diseñados, regulación asfixiante— y un instrumento: el ajuste. El ajuste puede estabilizar una economía, y en varios países de la región hacía falta. Lo que no hace es aumentar la productividad."
        },
        {
          "type": "paragraph",
          "text": "Estabilizar es condición necesaria y no es suficiente. Un país con inflación baja, cuentas ordenadas y la misma productividad laboral del 26% de la estadounidense sigue creciendo al 1% anual, solo que sin sobresaltos."
        },
        {
          "type": "paragraph",
          "text": "Los tres insumos que sí mueven la productividad —investigación, educación, escala empresarial— comparten una propiedad que los hace políticamente inviables en América Latina: **maduran en quince o veinte años**. Ningún ciclo electoral latinoamericano dura tanto, y ningún gobierno cosecha lo que siembra en ellos."
        },
        {
          "type": "paragraph",
          "text": "De ahí que la región lleve seis décadas divergiendo con independencia del signo del gobierno. No es que las políticas hayan sido malas: es que ninguna se sostuvo el tiempo suficiente para importar."
        },
        {
          "type": "paragraph",
          "text": "Corea del Sur, que en 1960 tenía un tercio del ingreso per cápita latinoamericano, gasta hoy el 4,94% de su PIB en investigación. No llegó ahí en un período presidencial ni cambiando de modelo cada elección. Llegó haciendo lo mismo durante cuarenta años."
        },
        {
          "type": "heading",
          "text": "V. La única salida que se ve"
        },
        {
          "type": "paragraph",
          "text": "No hay atajo, y conviene decirlo en vez de vender uno."
        },
        {
          "type": "paragraph",
          "text": "Pero hay una asimetría que juega a favor de la región y que casi nadie explota. Los tres insumos que faltan son **acumulativos y de bajo costo político si se blindan institucionalmente**. Un fondo de investigación con financiamiento plurianual protegido del ciclo presupuestario. Un sistema de evaluación educativa que ningún gobierno pueda apagar cuando los resultados le incomoden. Un régimen de escala empresarial que no castigue crecer —porque hoy lo castiga: en casi todos los países de la región, pasar de micro a pequeña empresa multiplica la carga tributaria y regulatoria de golpe—."
        },
        {
          "type": "paragraph",
          "text": "Ninguna de las tres requiere gastar mucho. Las tres requieren que el gobierno siguiente no las desarme."
        },
        {
          "type": "paragraph",
          "text": "Ese es, en el fondo, el problema latinoamericano de la productividad, y es el mismo del que hablan casi todas las notas de esta serie: no es un problema de qué hacer. Es un problema de cómo hacer que dure."
        },
        {
          "type": "paragraph",
          "text": "América Latina fue, en 1960, casi tres veces más rica que Asia oriental. Hoy produce dos tercios de lo que produce ella. Nada de lo que pasó en ese medio siglo fue inevitable. Todo fue, cada vez, la decisión razonable de un gobierno con horizonte de cuatro años."
        }
      ]
    },
    "seo": {
      "title": "El año en que Asia nos pasó",
      "description": "En 1960 un latinoamericano producía tres veces lo que un asiático oriental. En 2010 se cruzaron.",
      "tldr": [
        "Estos son los ingresos por habitante de América Latina y el Caribe y de Asia oriental y el Pacífico, en dólares constantes de 2015, según el Banco Mundial:",
        "En 1960 América Latina era casi tres veces más rica que Asia oriental. En 2010 se igualaron. En 2024, un latinoamericano promedio produce dos tercios de lo que produce un asiático oriental.",
        "En sesenta y cuatro años, el ingreso per cápita latinoamericano se multiplicó por 2,7. El asiático, por 11,5.",
        "Ese es el hecho central de la economía política latinoamericana contemporánea, y es notable la poca frecuencia con que aparece en el debate público de la región. Se discuten gobiernos, ciclos, modelos y presidentes. La línea de fondo lleva seis décadas apuntando en la misma…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «El año en que Asia nos pasó»?",
          "answer": "La pieza está situada en América Latina. En 1960, un latinoamericano promedio producía casi tres veces lo que un asiático oriental. En 2010 se cruzaron. Hoy produce dos tercios de lo que produce él."
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
      "excerpt": "Estos son los ingresos por habitante de América Latina y el Caribe y de Asia oriental y el Pacífico, en dólares constantes de 2015, según el Banco Mundial:",
      "sources": "Banco Mundial, indicadores NY.GDP.PCAP.KD, NE.GDI.TOTL.ZS, NY.GNS.ICTR.ZS y GB.XPD.RSDV.GD.ZS, consultados el 30/08/2026 · BID, *La era de la productividad: cómo transformar las economías desde sus cimientos* (Carmen Pagés, ed., 2010) · BID, *Hacer que los mercados laborales funcionen: mejorar la productividad y el bienestar de los trabajadores en América Latina y el Caribe* (3 de agosto de 2026) · FMI, *La productividad en América Latina y el Caribe: tendencias recientes y el shock de la COVID-19*, estudio de referencia de *Perspectivas Económicas: Las Américas* · Banco Mundial, *Informe sobre el Desarrollo Mundial 2024: La trampa del ingreso medio* · CEPAL, declaraciones de José Manuel Salazar-Xirinachs sobre la segunda década perdida (14/08/2024) y proyecciones de crecimiento regional para 2025 y 2026 · OCDE, *PISA 2022 Results*, publicado el 5 de diciembre de 2023, vía Our World in Data · OIT, tasas de informalidad regional 2025.",
      "editNote": "Vacíos declarados: no se publica la serie numérica de productividad total de factores de América Latina relativa a Estados Unidos por período, porque no pudo obtenerse de fuente primaria; las referencias disponibles la describen cualitativamente. No se publica el desglose país por país de la brecha de productividad laboral frente a Estados Unidos, ni el listado nominal de las treinta y cuatro economías que salieron de la trampa del ingreso medio: ninguno figura en los materiales accesibles y no se estiman. La fecha exacta del estudio del FMI citado presenta una ambigüedad entre 2020 y 2022 que no pudo resolverse; conviene verificarla antes de publicar."
    }
  },
  {
    "id": "brasil-teraflops",
    "title": "Brasil tiene casi nueve de cada diez teraflops",
    "summary": "América Latina genera el 6,6% del PIB mundial, tiene el 8,8% de la población y recibe el 1,12% de la inversión global en inteligencia artificial. La pregunta no es si la región se queda atrás. Es qué tipo de atrás.",
    "section": {
      "id": "erario",
      "label": "El Erario"
    },
    "author": {
      "name": "El Erario"
    },
    "publishedAt": "2026-08-21",
    "updatedAt": "2026-08-21",
    "readingMinutes": 10,
    "image": {
      "url": "/photos/plates/brasil-teraflops.jpg",
      "alt": "Sala de servidores. Números que mandan: el cómputo de la región cabe en Brasil."
    },
    "tags": [
      "inteligencia artificial",
      "Brasil",
      "inversión",
      "computación"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Hay un dato del Índice Latinoamericano de Inteligencia Artificial, elaborado por el centro chileno CENIA junto con CEPAL, que ordena todo lo demás:"
        },
        {
          "type": "paragraph",
          "text": "**Brasil concentra cerca del 88% de la capacidad de cómputo de alto rendimiento de América Latina.** Más de 121.000 teraflops por segundo. Argentina, segundo, tiene 8.582. México, tercero, 7.235."
        },
        {
          "type": "paragraph",
          "text": "Y más de la mitad de los diecinueve países analizados **carece de infraestructura crítica de cómputo**. No poca: ninguna."
        },
        {
          "type": "paragraph",
          "text": "El segundo dato, del mismo índice: la región genera el 6,6% del producto mundial y tiene el 8,8% de la población, pero recibe el **1,12% de la inversión global en inteligencia artificial**. Ningún país latinoamericano supera el promedio mundial de inversión en IA relativa a su PIB per cápita; el promedio regional está seis veces por debajo."
        },
        {
          "type": "paragraph",
          "text": "Lo que sigue es un intento de tomar en serio esos números sin caer en las dos reacciones habituales, que son igualmente inútiles: el catastrofismo —\"la región quedará excluida\"— y el entusiasmo de folleto —\"la IA es nuestra oportunidad\"—."
        },
        {
          "type": "heading",
          "text": "I. Lo que sí está llegando"
        },
        {
          "type": "paragraph",
          "text": "Sería falso decir que no llega inversión. Está llegando, y es considerable."
        },
        {
          "type": "table",
          "head": [
            "Proyecto",
            "País",
            "Monto",
            "Capacidad"
          ],
          "rows": [
            [
              "OpenAI + Sur Energy",
              "Argentina (Patagonia)",
              "hasta US$ 25.000 M",
              "500 MW"
            ],
            [
              "AWS, región de nube",
              "Chile",
              "US$ 4.000 M",
              "—"
            ],
            [
              "AWS, Querétaro",
              "México",
              "US$ 5.000 M",
              "operativo 2º sem. 2026"
            ],
            [
              "Grupo FS",
              "Brasil",
              "US$ 1.800 M",
              "—"
            ],
            [
              "Tecto (V.tal + BTG)",
              "Brasil",
              "US$ 1.000 M",
              "200 MW"
            ],
            [
              "Scala AI City",
              "Brasil",
              "US$ 500 M",
              "54 MW inicial, 4,7 GW proyectado"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "La capacidad instalada regional de centros de datos llegó a **1,1 GW en 2025**, un 20% más que el año anterior. Brasil superó el gigavatio de capacidad de tecnologías de la información en abril de 2026, unos 300 MW más que los cuatro mercados siguientes de la región sumados. Tres ciudades —São Paulo, Barueri y Querétaro— concentran el 82% del stock nuevo."
        },
        {
          "type": "paragraph",
          "text": "Hay también inversión pública, y es reciente. México anunció en junio de 2026 la supercomputadora Coatlicue: seis mil millones de pesos, 14.480 GPUs y 314 petaflops, en un consorcio que incluye al Politécnico Nacional, al centro indio C-DAC, al Barcelona Supercomputing Center y a Nvidia. Brasil anunció el 21 de agosto de 2026 un plan federal de supercómputo por 2.300 millones de reales —unos 444 millones de dólares— repartido entre proveedores chinos y estadounidenses: una infraestructura en Río de Janeiro con Huawei e iFlytek para modelos de lenguaje a gran escala, operativa en julio de 2027, y un supercomputador en Rio Grande do Norte que aspira a entrar al top diez mundial en procesamiento de IA a fines de ese mismo año."
        },
        {
          "type": "paragraph",
          "text": "Y hay un proyecto que merece más atención de la que ha recibido: **Latam-GPT**, lanzado el 10 de febrero de 2026. Un modelo abierto de setenta mil millones de parámetros, entrenado con trescientos mil millones de tokens en variantes de español y portugués, construido por más de sesenta instituciones de quince países y más de cien profesionales, con financiamiento del ministerio de ciencia chileno, la CAF y AWS."
        },
        {
          "type": "paragraph",
          "text": "Es la primera pieza de infraestructura digital regional que América Latina construye en común desde hace mucho. Vale la pena decirlo, porque este medio ha publicado bastante sobre lo que la región no logra integrar."
        },
        {
          "type": "heading",
          "text": "II. Lo que no llega, y es lo que decide"
        },
        {
          "type": "paragraph",
          "text": "Ahora la otra columna."
        },
        {
          "type": "paragraph",
          "text": "**Talento.** Brasil y México concentran el **68% de los investigadores activos en inteligencia artificial** de la región. Cinco países —esos dos más Colombia, Chile y Argentina— generan el 90% de las publicaciones. Solo siete de diecinueve países participan en los tracks principales de las conferencias internacionales de élite, y **el 82% de los autores regionales en esas conferencias proviene de Chile y Brasil**."
        },
        {
          "type": "paragraph",
          "text": "El índice señala además que la brecha de talento respecto del promedio mundial **se ha ampliado desde 2022**, asociada a una \"fuga acelerada de especialistas\"."
        },
        {
          "type": "paragraph",
          "text": "Es el dato que ninguna inversión en hardware corrige. Un centro de datos de quinientos megavatios en la Patagonia genera empleo de construcción, ingresos por energía y capacidad de cómputo alquilable. No genera, por sí mismo, investigadores."
        },
        {
          "type": "paragraph",
          "text": "**Estrategia.** De diecinueve países, nueve tienen estrategia nacional de inteligencia artificial, tres la están desarrollando y siete no tienen hoja de ruta. Y el hallazgo del índice sobre las nueve existentes es demoledor: **la mayoría carece de presupuesto de implementación, plan de acción e indicadores de impacto**. Es decir, son documentos."
        },
        {
          "type": "paragraph",
          "text": "La excepción documentada es Brasil, con un plan 2024-2028 de veintitrés mil millones de reales y un observatorio público que reporta indicadores de ejecución."
        },
        {
          "type": "paragraph",
          "text": "**Regulación.** El mapa a 2026 es este:"
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            "**Perú** es el único país con marco plenamente regulado: la Ley 31814 con su reglamento publicado el 9 de septiembre de 2025, con clasificación de riesgo en tres categorías y cronograma de implementación.",
            "**Brasil** aprobó el proyecto 2338 en el Senado en diciembre de 2024 y lo remitió a la Cámara, donde una comisión especial de treinta y tres parlamentarios trabaja desde abril de 2025. No es ley.",
            "**Colombia** tiene un proyecto radicado en julio de 2025 que consolida trece iniciativas previas.",
            "**México** está en etapa inicial, con una iniciativa presentada en febrero de 2026.",
            "**Chile**, que lidera el índice regional y colidera Latam-GPT, no tiene ley aprobada.",
            "**Argentina** presentó sesenta y tres proyectos sobre tecnologías digitales entre enero de 2025 y febrero de 2026, sin marco integral, concentrados en modificaciones penales por deepfakes."
          ]
        },
        {
          "type": "paragraph",
          "text": "Sesenta y tres proyectos y ningún marco es una descripción bastante exacta de cómo la región legisla sobre tecnología."
        },
        {
          "type": "heading",
          "text": "III. El empleo, y por qué la estructura importa"
        },
        {
          "type": "paragraph",
          "text": "Aquí está el punto donde el análisis latinoamericano suele copiar mal el debate del norte."
        },
        {
          "type": "paragraph",
          "text": "Según el trabajo conjunto de la OIT y el Banco Mundial para la región: entre el **2% y el 5%** de los empleos latinoamericanos podrían automatizarse totalmente; entre el **26% y el 38%** están expuestos de algún modo a la inteligencia artificial generativa; y entre el **8% y el 14%** podrían **mejorar** su productividad, sobre todo en sectores urbanos, formales y de mayores ingresos."
        },
        {
          "type": "paragraph",
          "text": "El índice global de la OIT sitúa la exposición mundial en el 25% del empleo y la de los **países de altos ingresos en el 34%**."
        },
        {
          "type": "paragraph",
          "text": "Nótese que el rango regional —26% a 38%— **contiene** el 34% de los países de altos ingresos, y que las dos cifras vienen de ejercicios distintos que no son estrictamente comparables. No se puede afirmar, con eso, que la región esté menos expuesta. Lo que sí puede afirmarse es algo más específico: **la composición del empleo latinoamericano concentra la exposición en un segmento pequeño**, porque una parte enorme de ese empleo es informal, manual y de baja productividad. La inteligencia artificial generativa amenaza el trabajo administrativo, cognitivo y digitalizado, que es precisamente el que la región tiene poco."
        },
        {
          "type": "paragraph",
          "text": "Eso produce una conclusión incómoda: **el sector que la IA puede volver más productivo en América Latina es el mismo que ya es el más productivo**. Urbano, formal, de altos ingresos. Y el 47% informal queda fuera de los dos efectos: ni lo destruye ni lo mejora."
        },
        {
          "type": "paragraph",
          "text": "Si eso se cumple, la IA no reducirá el empleo latinoamericano. Ampliará la brecha entre los dos mercados laborales que ya conviven en cada país."
        },
        {
          "type": "paragraph",
          "text": "Los grupos que el propio informe identifica como de mayor riesgo dentro del sector formal son **las mujeres y los trabajadores jóvenes**, por su concentración en tareas administrativas."
        },
        {
          "type": "paragraph",
          "text": "Hay que hacer una advertencia sobre una cifra que circula mucho: la estimación de que entre el 36% y el 43% de los empleos latinoamericanos están en riesgo por automatización es de un estudio del BID **de agosto de 2018**, anterior a la IA generativa, y el propio informe la presentaba como un punto medio entre proyecciones optimistas y pesimistas. Tiene ocho años. No debería usarse como estimación actual, y aquí no se usa."
        },
        {
          "type": "heading",
          "text": "IV. Comprar no es lo mismo que construir"
        },
        {
          "type": "paragraph",
          "text": "La región usa inteligencia artificial más de lo que su tamaño sugiere. América Latina y el Caribe concentra el **14% de las visitas globales a soluciones de IA**, frente al 11% de su participación en usuarios de internet del mundo."
        },
        {
          "type": "paragraph",
          "text": "Somos, proporcionalmente, usuarios entusiastas. Y con el 1,12% de la inversión global y el 90% del cómputo regional en un solo país, no somos productores."
        },
        {
          "type": "paragraph",
          "text": "Un liberal no debería tener problema con esto en principio. Comprar tecnología que otros producen mejor es comercio, y el comercio es bueno. Chile no fabrica aviones y vuela; Uruguay no produce semiconductores y los usa."
        },
        {
          "type": "paragraph",
          "text": "Pero hay dos razones por las que este caso es distinto, y conviene enunciarlas con precisión en vez de apelar a la soberanía tecnológica, que es un eslogan."
        },
        {
          "type": "paragraph",
          "text": "**La primera es de datos.** Un modelo entrenado sin corpus regional funciona peor en español rioplatense o en portugués del nordeste, y sobre todo funciona peor en las tareas que dependen de contexto local: derecho, salud pública, educación, administración. Eso no se resuelve comprando; se resuelve construyendo corpus. Es exactamente lo que hace Latam-GPT, y es la parte del proyecto que importa más que sus parámetros."
        },
        {
          "type": "paragraph",
          "text": "**La segunda es de energía, y aquí las dos notas de esta serie se cruzan.** Los centros de datos que están llegando compiten por electricidad en una región que pierde el 17% de la energía que genera y que utiliza un tercio de sus interconexiones. Vender capacidad de cómputo a partir de una matriz limpia es un negocio real y legítimo. Pero es un negocio de *exportar electrones*, no de producir tecnología, y conviene no confundirlo. El valor agregado de un centro de datos que corre modelos ajenos se parece más al de una fundición que al de un laboratorio."
        },
        {
          "type": "paragraph",
          "text": "Un país puede prosperar exportando electricidad barata y limpia envasada en cómputo. Es una estrategia defendible. Pero es la misma estrategia que la región lleva doscientos años ejecutando con el cobre, la soja y el litio, y sabemos cómo termina cuando no se construye nada encima."
        },
        {
          "type": "heading",
          "text": "V. Lo que se puede hacer sin plata"
        },
        {
          "type": "paragraph",
          "text": "La conclusión práctica es más modesta y más alcanzable de lo que sugiere la escala del problema."
        },
        {
          "type": "paragraph",
          "text": "América Latina no va a competir en entrenamiento de modelos de frontera. Nadie fuera de tres países lo hace, y no es un fracaso regional: es la estructura del mercado."
        },
        {
          "type": "paragraph",
          "text": "Lo que sí está a su alcance, y no requiere miles de millones:"
        },
        {
          "type": "paragraph",
          "text": "**Corpus.** El activo escaso no es el cómputo: es el texto en español y portugués regionales, los registros administrativos, la jurisprudencia, los datos de salud pública. Nadie más los tiene y nadie más los va a producir. Latam-GPT probó que se pueden reunir con sesenta instituciones y sin presupuesto de superpotencia."
        },
        {
          "type": "paragraph",
          "text": "**Talento.** El 82% de los autores regionales en conferencias de élite viene de dos países, y la brecha se amplía por fuga. Retener a un investigador de inteligencia artificial cuesta una fracción de lo que cuesta un megavatio instalado, y rinde más."
        },
        {
          "type": "paragraph",
          "text": "**Reglas.** Un marco regulatorio común, o al menos compatible, entre los países de la región vale más que seis marcos nacionales incompatibles. Perú tiene ley; Brasil está por tenerla; Chile no tiene. Si cada uno legisla por su cuenta, el resultado será el que la región ya conoce en comercio: seiscientos sesenta millones de personas divididas en veinte mercados regulatorios, ninguno lo bastante grande para importarle a nadie."
        },
        {
          "type": "paragraph",
          "text": "Brasil tiene cerca del 88% del cómputo regional. Ese es un dato sobre Brasil. Que el resto se reparta entre los pocos países que tienen alguna capacidad —más de la mitad de los diecinueve evaluados no tiene ninguna— es un dato sobre por qué la región nunca ha construido nada junta."
        }
      ]
    },
    "seo": {
      "title": "Brasil tiene casi nueve de cada diez teraflops",
      "description": "América Latina es el 6,6% del PIB mundial y recibe el 1,12% de la inversión global en IA.",
      "tldr": [
        "Hay un dato del Índice Latinoamericano de Inteligencia Artificial, elaborado por el centro chileno CENIA junto con CEPAL, que ordena todo lo demás:",
        "Brasil concentra cerca del 88% de la capacidad de cómputo de alto rendimiento de América Latina. Más de 121.000 teraflops por segundo. Argentina, segundo, tiene 8.582. México, tercero, 7.235.",
        "Y más de la mitad de los diecinueve países analizados carece de infraestructura crítica de cómputo. No poca: ninguna.",
        "El segundo dato, del mismo índice: la región genera el 6,6% del producto mundial y tiene el 8,8% de la población, pero recibe el 1,12% de la inversión global en inteligencia artificial. Ningún país latinoamericano supera el promedio mundial de inversión en IA relativa a su…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «Brasil tiene casi nueve de cada diez teraflops»?",
          "answer": "La pieza está situada en Brasil. América Latina genera el 6,6% del PIB mundial, tiene el 8,8% de la población y recibe el 1,12% de la inversión global en inteligencia artificial. La pregunta no es si la región se queda atrás. Es qué tipo de atrás."
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
      "country": "Brasil",
      "excerpt": "Hay un dato del Índice Latinoamericano de Inteligencia Artificial, elaborado por el centro chileno CENIA junto con CEPAL, que ordena todo lo demás:",
      "sources": "CENIA y CEPAL, *Índice Latinoamericano de Inteligencia Artificial (ILIA) 2025*, publicado el 3 de octubre de 2025 · Data Center Dynamics (13/10/2025) sobre el proyecto de OpenAI y Sur Energy; About Amazon e InvestChile sobre AWS; TeleSemana sobre proyectos regionales de centros de datos · Infobae (17/08/2026) y BNamericas (29/04/2026) sobre capacidad instalada regional y brasileña · El Imparcial (01/06/2026) sobre la supercomputadora Coatlicue; La Nación (21/08/2026) sobre el plan federal brasileño de supercómputo · CENIA (10/02/2026) sobre el lanzamiento de Latam-GPT · Acento (21/03/2026), Universidad de los Andes y Derechos Digitales sobre el estado de la regulación de IA en la región · Ministerio de Ciencia, Tecnología e Innovación de Brasil y UNCTAD Investment Policy Monitor sobre el Plano Brasileiro de Inteligência Artificial 2024-2028 · OIT y Banco Mundial sobre exposición del empleo latinoamericano a la IA generativa (agosto de 2024); OIT, *Generative AI and Jobs: A Refined Global Index of Occupational Exposure* (20/05/2025).",
      "editNote": "Vacíos declarados: no existe una medición publicada del porcentaje del cómputo global de IA que corresponde a América Latina; el 1,12% de inversión global es el proxy disponible y no es una medida de cómputo. No se publica ninguna cifra de adopción empresarial de IA en la región porque no se encontró una encuesta con metodología transparente y publicación institucional. No se publican números absolutos de investigadores de IA ni tasas de emigración de especialistas. La cifra de 36%-43% de empleos en riesgo que circula frecuentemente es de 2018, anterior a la IA generativa, y se descarta explícitamente. Una fuente atribuye a Chile 65,28 puntos en el ILIA donde el documento original registra 70,56: se usa la cifra del documento."
    }
  },
  {
    "id": "el-dia-despues-venezuela",
    "title": "El día después llegó, y no era una transición",
    "summary": "Ocho meses después de la captura de Nicolás Maduro, Venezuela tiene una presidenta encargada del chavismo, una inflación proyectada del 387%, una deuda de unos 170.000 millones de dólares y una negociación política de la que están excluidos los dos dirigentes a quienes las actas publicadas por la oposición dan como ganadores de la última elección.",
    "section": {
      "id": "frontera",
      "label": "Frontera"
    },
    "author": {
      "name": "Corresponsalía Politarca"
    },
    "publishedAt": "2026-08-20",
    "updatedAt": "2026-08-20",
    "readingMinutes": 10,
    "image": {
      "url": "/photos/plates/el-dia-despues-venezuela.jpg",
      "alt": "Palacio de Miraflores. Frontera: el día después que no fue transición."
    },
    "tags": [
      "Venezuela",
      "Maduro",
      "transición",
      "FMI"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Según el relato coincidente de CNN en Español, Telemundo y el International Crisis Group, el 3 de enero de 2026 fuerzas estadounidenses capturaron a Nicolás Maduro en Caracas y lo trasladaron a Nueva York. En la operación, según Crisis Group, murieron alrededor de ochenta venezolanos y cubanos, y siete o más soldados estadounidenses resultaron heridos. El presidente Trump declaró ese día que Estados Unidos \"tomaría el control\" de Venezuela hasta que hubiera una transición."
        },
        {
          "type": "paragraph",
          "text": "El 5 de enero, **Delcy Rodríguez juró como presidenta encargada**. El 8 comenzaron liberaciones de presos políticos, de los que se estimaban más de ochocientos."
        },
        {
          "type": "paragraph",
          "text": "El 21 de abril, Rodríguez superó los cien días en el cargo **sin haber anunciado un cronograma de transición**."
        },
        {
          "type": "paragraph",
          "text": "El 1 de agosto de 2026 se abrió una negociación política tutelada por Estados Unidos entre la Comisión Delegada de la Asamblea Nacional de 2015 y el gobierno de Rodríguez. Es, por el conteo de la prensa venezolana, **el decimonoveno intento de diálogo** tras dieciocho procesos previos sin acuerdos sustanciales."
        },
        {
          "type": "paragraph",
          "text": "**María Corina Machado y Edmundo González están excluidos del proceso formal.** Conviene precisar quiénes son: Machado, inhabilitada, no fue candidata y ganó la primaria opositora; quien encabezó la papeleta en julio de 2024 fue González, a quien las actas publicadas por la oposición y los observadores internacionales dan como ganador, sin que ninguna autoridad electoral venezolana lo haya reconocido. Ambos declararon que no obstaculizarán ninguna iniciativa que produzca avances reales. Machado recibió el Premio Nobel de la Paz el 10 de diciembre de 2025."
        },
        {
          "type": "paragraph",
          "text": "A treinta de agosto de 2026 no existe fecha de elecciones ni calendario electoral integral."
        },
        {
          "type": "heading",
          "text": "I. Quién manda, en realidad"
        },
        {
          "type": "paragraph",
          "text": "El análisis del Crisis Group publicado el 9 de enero es el más útil disponible, y su tesis central merece atención: la estrategia estadounidense es **transaccional** —extracción de recursos sin cambio político genuino— y genera más riesgo que una transición democrática negociada."
        },
        {
          "type": "paragraph",
          "text": "Para el Crisis Group, Delcy Rodríguez tiene poder limitado y debe negociar con quienes su informe identifica como los controladores efectivos de las fuerzas de seguridad, la policía y la inteligencia: el ministro de Defensa **Vladimir Padrino López** y **Diosdado Cabello**. Sin Maduro como articulador, la coalición chavista carece de la figura que arbitraba sus facciones, y el riesgo que el informe identifica no es la resistencia organizada sino **el fraccionamiento violento**."
        },
        {
          "type": "paragraph",
          "text": "Es la lección que la región debería haber aprendido en Irak y en Libia, y que no aprendió: **quitar la cabeza de un régimen personalista no produce un vacío ordenado. Produce competencia entre quienes quedan armados.**"
        },
        {
          "type": "heading",
          "text": "II. La economía, con dos fuentes que no coinciden"
        },
        {
          "type": "paragraph",
          "text": "Los números venezolanos exigen decir de dónde viene cada uno, porque no coinciden."
        },
        {
          "type": "paragraph",
          "text": "El **Fondo Monetario Internacional**, en su informe de abril de 2026, proyecta para el año: crecimiento del **4,0%**, PIB nominal de 111.300 millones de dólares, **inflación promedio anual del 387,4%** —219,7% de fin de período—, desempleo del **35,6%**, PIB per cápita nominal de 4.140 dólares y una **ratio de deuda pública del 308,7% del PIB** —una cifra que no se deriva del PIB nominal publicado en el mismo informe y que probablemente se calcula sobre una medición distinta del producto; ver la nota de edición—."
        },
        {
          "type": "paragraph",
          "text": "El **PNUD**, en su informe macroeconómico del 12 de agosto de 2026, proyecta crecimiento del **6,5%** —incluyendo una reducción de medio punto por los terremotos de junio de 2026, cuyos daños directos estima en 6.700 millones de dólares— e inflación de alrededor del **385%**."
        },
        {
          "type": "paragraph",
          "text": "Los dos coinciden en la inflación y difieren en el crecimiento. Los dos describen la misma economía: una que crece con fuerza porque partió de un piso destruido, con precios que se multiplican por casi cinco al año."
        },
        {
          "type": "paragraph",
          "text": "La inflación de 2025 fue del **475%**."
        },
        {
          "type": "paragraph",
          "text": "**El petróleo.** Venezuela produjo en julio de 2026 **1,117 millones de barriles diarios** según las fuentes secundarias de la OPEP, y 1,2 millones según su propia comunicación al organismo. El crudo Merey promedió 71,13 dólares en julio, frente a 59,42 de promedio en 2025. Los ingresos petroleros del primer semestre rondaron los 12.772 millones de dólares."
        },
        {
          "type": "paragraph",
          "text": "El punto de comparación es el que importa: Crisis Group sitúa la producción histórica en 3,5 millones de barriles diarios; Francisco Monaldi, del Baker Institute, sitúa el pico de los años setenta en torno a los cuatro millones. Venezuela produce hoy **entre un cuarto y un tercio** de lo que llegó a producir."
        },
        {
          "type": "paragraph",
          "text": "**La deuda.** Alrededor de **170.000 millones de dólares** entre bonos impagos, préstamos bilaterales, intereses acumulados y laudos arbitrales: en torno a una vez y media el PIB nominal que reporta el propio Fondo. El 13 de mayo de 2026 la Vicepresidencia Sectorial de Economía anunció una reestructuración \"formal, integral y ordenada\" y contrató a Centerview Partners como asesor. PDVSA está en cesación de pagos desde 2017. El Banco Central dejó de publicar cifras completas de deuda en 2018, cuando reportaba unos noventa mil millones."
        },
        {
          "type": "paragraph",
          "text": "**Lo que costaría arreglarlo.** Dos estimaciones independientes: Monaldi calcula **cien mil millones de dólares** para volver al pico de cuatro millones de barriles diarios, en un proceso \"largo y complejo\". Crisis Group calcula **entre ochenta y noventa mil millones** para llegar a 2,5 millones de barriles en seis o siete años."
        },
        {
          "type": "paragraph",
          "text": "Para dimensionarlo: ExxonMobil, la mayor petrolera estadounidense, presupuesta alrededor de un tercio de esa cifra para su inversión de capital en todo el mundo."
        },
        {
          "type": "heading",
          "text": "III. Las licencias, que son la verdadera política"
        },
        {
          "type": "paragraph",
          "text": "Mientras la transición no avanza, la arquitectura de sanciones se está desmontando por piezas, y ese es el proceso real."
        },
        {
          "type": "paragraph",
          "text": "Durante 2026, la Oficina de Control de Activos Extranjeros del Tesoro estadounidense emitió una serie de licencias generales: la 46B el 29 de enero, enmendada el 13 de marzo, que autoriza levantamiento, exportación, venta, almacenamiento y transporte de petróleo con PDVSA pero **excluye exploración y producción**; la 47 el 3 de febrero, para venta de diluentes; la 48A el 10 de febrero, para bienes y servicios de exploración y distribución eléctrica; la 49A el 13 de febrero, que autoriza **negociar y firmar contratos contingentes** de nuevas inversiones sin permitir ejecutarlos; la 50A, que nombra a BP, Chevron, Eni, Maurel & Prom, Repsol y Shell; y la 52, la más amplia, que habilita el negocio integral de hidrocarburos incluidas empresas mixtas."
        },
        {
          "type": "paragraph",
          "text": "La caracterización que hace el análisis jurídico especializado es precisa: **\"no hay levantamiento general, solo autorizaciones específicas\"**. La arquitectura de sanciones permanece intacta y se abre por excepciones, una por una, negociadas."
        },
        {
          "type": "paragraph",
          "text": "Es un instrumento extraordinariamente poderoso y extraordinariamente discrecional. Cada licencia es una decisión administrativa revocable que determina qué empresa puede operar en el mayor yacimiento de crudo del hemisferio. No hay parlamento, ni tratado, ni contraparte venezolana con capacidad de negociar términos."
        },
        {
          "type": "heading",
          "text": "IV. Lo que vive un venezolano hoy"
        },
        {
          "type": "paragraph",
          "text": "Los datos son de la encuesta ENCOVI 2025 de la Universidad Católica Andrés Bello, presentada el 7 de mayo de 2026, que es la mejor fuente disponible sobre condiciones de vida en Venezuela."
        },
        {
          "type": "paragraph",
          "text": "**Pobreza de ingresos: 76,5% de los hogares, 38,5% en pobreza extrema.** Medida sobre personas: 68,5% y 31,7%. El índice de pobreza multidimensional alcanza al 55% de los hogares."
        },
        {
          "type": "paragraph",
          "text": "**Electricidad:** el 98% tiene acceso por red pública, y **el 39% de los hogares sufre interrupciones diarias**. Agua por acueducto: 78%."
        },
        {
          "type": "paragraph",
          "text": "**Salud:** el 15% de la población —unos 4,4 millones de personas— tuvo un problema de salud en los últimos treinta días. **El 37% de ellos no consultó a un médico.**"
        },
        {
          "type": "paragraph",
          "text": "**Ingresos:** el decil más rico percibe 474,5 dólares mensuales per cápita. El decil más pobre, **18,1 dólares**."
        },
        {
          "type": "paragraph",
          "text": "Y el dato que resume el país. El 1 de mayo de 2026, el gobierno interino elevó el salario mínimo integral de 190 a 240 dólares mensuales, presentándolo como la mayor modificación en años. Pero **el salario base sigue siendo de unos treinta centavos de dólar al mes**: el resto se compone de bonos. Los componentes documentados —cuarenta dólares de alimentación y ciento cincuenta de \"guerra económica\" para empleados públicos— suman el monto anterior al aumento, no el nuevo, de modo que el desglose completo de los 240 dólares no está publicado."
        },
        {
          "type": "paragraph",
          "text": "La canasta básica alimentaria para una familia de cinco personas se estima en 677 dólares mensuales según un cálculo privado citado por la prensa, y por encima de 730 según el centro de documentación de la Federación Venezolana de Maestros en abril de 2026."
        },
        {
          "type": "paragraph",
          "text": "Un salario mínimo de 240 dólares, del cual treinta centavos son salario, contra una canasta de setecientos."
        },
        {
          "type": "heading",
          "text": "V. El retorno que no ocurre"
        },
        {
          "type": "paragraph",
          "text": "Hay 8,7 millones de venezolanos fuera del país según los conteos que circulan a partir de la plataforma de coordinación regional —cifra que no pudimos verificar contra la fuente primaria y que publicamos con esa advertencia—. Alrededor del 97% está en América Latina y el Caribe. Colombia aloja 2,8 millones: es el principal país receptor del mundo."
        },
        {
          "type": "paragraph",
          "text": "La expectativa de que la caída de Maduro produciría un retorno masivo no se ha cumplido, y hay datos sobre por qué."
        },
        {
          "type": "paragraph",
          "text": "Según ENCOVI, **alrededor del 7% del total de personas emigradas ha retornado**, y el 7% de los hogares venezolanos recibió a un migrante retornado en el último año."
        },
        {
          "type": "paragraph",
          "text": "Una encuesta de ACNUR a 1.288 venezolanos en seis países, con trabajo de campo entre enero y marzo de 2026, encontró que **algo más de un tercio contempla la posibilidad de retornar**, pero solo el 9% lo consideraría dentro de un año, y **casi dos tercios no tiene intención de volver**. De quienes ya retornaron, el 80% planea quedarse."
        },
        {
          "type": "paragraph",
          "text": "El obstáculo que cita alrededor del 60% no es económico ni de seguridad: es **la falta de información fiable sobre las condiciones de retorno y la incertidumbre sobre cómo el intento afectaría su estatus legal en el país de acogida**."
        },
        {
          "type": "paragraph",
          "text": "Es un hallazgo con una implicación de política concreta y barata que ningún gobierno de la región ha adoptado: un estatus migratorio que permita ir y volver sin perderlo produciría más retornos voluntarios que cualquier plan de expulsión."
        },
        {
          "type": "heading",
          "text": "VI. Lo que un liberal tiene que decir"
        },
        {
          "type": "paragraph",
          "text": "Es tentador, desde la posición editorial de esta casa, tratar la caída de Maduro como una buena noticia sin más. Fue el fin de un régimen que destruyó una economía, encarceló opositores y forzó al éxodo a una cuarta parte de su población. Nadie va a extrañarlo."
        },
        {
          "type": "paragraph",
          "text": "Pero ocho meses después, los hechos son estos: gobierna una dirigente del mismo régimen; los dos líderes opositores a quienes las actas de la oposición y los observadores internacionales dan como ganadores de 2024 están fuera de la negociación; no hay calendario electoral; la arquitectura de sanciones se desmonta por licencias administrativas discrecionales que habilitan a petroleras específicas; y hay un anuncio —hecho en agosto de 2026, que solo pudimos rastrear hasta una columna de opinión y que por eso no publicamos como dato— sobre un acuerdo relativo a diecisiete campos petroleros estratégicos con más de cien mil millones de dólares de inversión."
        },
        {
          "type": "paragraph",
          "text": "Si esa secuencia se consolida, lo que habrá ocurrido en Venezuela no será una transición democrática. Será un cambio de administrador del recurso."
        },
        {
          "type": "paragraph",
          "text": "Y ahí está la lección que la región debería extraer, y que le incumbe especialmente a una derecha que celebró la operación: **el liberalismo no es una consecuencia automática de la caída de un autoritario**. Requiere elecciones con calendario, tribunales que fallen contra el gobierno, prensa que publique y contratos que no dependan de una licencia revocable en Washington."
        },
        {
          "type": "paragraph",
          "text": "Venezuela tiene hoy menos de lo primero que hace un año, y más de lo último."
        }
      ]
    },
    "seo": {
      "title": "El día después llegó, y no era una transición",
      "description": "Venezuela. Ocho meses después de la captura de Maduro: inflación 387% y deuda que no cuadra.",
      "tldr": [
        "Según el relato coincidente de CNN en Español, Telemundo y el International Crisis Group, el 3 de enero de 2026 fuerzas estadounidenses capturaron a Nicolás Maduro en Caracas y lo trasladaron a Nueva York. En la operación, según Crisis Group, murieron alrededor de ochenta…",
        "El 5 de enero, Delcy Rodríguez juró como presidenta encargada. El 8 comenzaron liberaciones de presos políticos, de los que se estimaban más de ochocientos.",
        "El 21 de abril, Rodríguez superó los cien días en el cargo sin haber anunciado un cronograma de transición.",
        "El 1 de agosto de 2026 se abrió una negociación política tutelada por Estados Unidos entre la Comisión Delegada de la Asamblea Nacional de 2015 y el gobierno de Rodríguez. Es, por el conteo de la prensa venezolana, el decimonoveno intento de diálogo tras dieciocho procesos…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «El día después llegó, y no era una transición»?",
          "answer": "La pieza está situada en Venezuela. Ocho meses después de la captura de Nicolás Maduro, Venezuela tiene una presidenta encargada del chavismo, una inflación proyectada del 387%, una deuda de unos 170.000 millones de dólares y una negociación política de la que están excluidos los dos dirigentes a quienes las actas publicadas por la oposición dan como ganadores de la última elección."
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
      "country": "Venezuela",
      "excerpt": "Según el relato coincidente de CNN en Español, Telemundo y el International Crisis Group, el 3 de enero de 2026 fuerzas estadounidenses capturaron a Nicolás Maduro en Caracas y lo trasladaron a Nueva York. En la…",
      "sources": "CNN Español y Telemundo sobre la captura del 3/01/2026 y la juramentación de Delcy Rodríguez del 5/01/2026 · International Crisis Group, *Venezuela after Maduro: Transaction or Transition?* (9/01/2026) · El Nacional sobre la negociación iniciada el 1/08/2026; Infobae sobre la propuesta de Machado del 29/05/2026 · NobelPrize.org sobre el Premio Nobel de la Paz 2025 · LEĜA Abogados, compilación de licencias generales de OFAC de 2026 · FMI, *World Economic Outlook* de abril de 2026, vía El Cooperante · PNUD, informe macroeconómico de Venezuela del primer semestre de 2026, vía El Nacional · OPEP, informe mensual de agosto de 2026 · Infobae, El Tiempo y CNN sobre el anuncio de reestructuración de deuda del 13/05/2026 · Francisco Monaldi (Baker Institute) vía Ámbito (5/01/2026) sobre la inversión necesaria · UCAB, *ENCOVI 2025*, presentada el 7/05/2026 · La República (1/05/2026) sobre el salario mínimo; Cendas-FVM sobre la canasta alimentaria de abril de 2026 · ACNUR, encuesta a 1.288 venezolanos en seis países, y nota de prensa del 14/04/2026 · ACNUR, *Global Trends*, datos a fin de 2025.",
      "editNote": "Notas de edición, importantes. Los hechos de enero de 2026 se verificaron exclusivamente con fuentes web coincidentes entre sí (Crisis Group, CNN, Telemundo, El Nacional, Infobae, Efecto Cocuyo); conviene contrastarlos con cable primario de agencia antes de publicar. La cifra de 8,7 millones de personas en la diáspora proviene de un titular periodístico que cita a la plataforma R4V y **no pudo verificarse contra la fuente primaria**. El anuncio de agosto de 2026 sobre diecisiete campos petroleros proviene de una columna de opinión y **no se publica como dato**. Existe una discrepancia de 1,6 millones entre la población que asume ENCOVI (28,5 millones) y la que proyecta el FMI (26,89 millones), y se señala. **La ratio de deuda del 308,7% del PIB que publica el FMI no reconcilia con los 170.000 millones de stock ni con los 111.300 millones de PIB nominal del mismo informe** —308,7% de esa base daría 343.600 millones—; se publican ambas cifras con su fuente y se advierte que no son consistentes entre sí, en vez de elegir una. No pudo verificarse el estado de salud de Edmundo González ni la recompensa ofrecida por Maduro, y no se mencionan."
    }
  },
  {
    "id": "el-uno-por-ciento",
    "title": "El uno por ciento",
    "summary": "Estados Unidos impuso en enero de 2026 un impuesto a las remesas. Es la política estadounidense hacia América Latina que menos se ha discutido y la que más gente va a afectar.",
    "section": {
      "id": "frontera",
      "label": "Frontera"
    },
    "author": {
      "name": "Corresponsalía Politarca"
    },
    "publishedAt": "2026-08-19",
    "updatedAt": "2026-08-19",
    "readingMinutes": 8,
    "image": {
      "url": "/photos/plates/el-uno-por-ciento.jpg",
      "alt": "Giro de dinero. Frontera: el impuesto a las remesas que llega a la familia."
    },
    "tags": [
      "remesas",
      "Estados Unidos",
      "impuesto",
      "migración"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Desde el 1 de enero de 2026 rige en Estados Unidos un **impuesto del 1% sobre las transferencias de dinero en efectivo al exterior**. Se aplica con independencia del estatus migratorio de quien envía: alcanza a unos veintitrés millones de residentes permanentes, catorce millones de portadores de visa y doce millones de indocumentados."
        },
        {
          "type": "paragraph",
          "text": "Es la primera vez que el gobierno federal estadounidense grava transferencias individuales de remesas."
        },
        {
          "type": "paragraph",
          "text": "La recaudación estimada es de unos **diez mil millones de dólares en diez años**: menos del 0,1% del presupuesto federal. Es decir, fiscalmente irrelevante para quien lo cobra."
        },
        {
          "type": "paragraph",
          "text": "Para quien lo paga, no. El Overseas Development Institute estima una caída de remesas de alrededor del **1,6%** como promedio regional. Las estimaciones por país que publica no se derivan aritméticamente de ese promedio —usan elasticidades distintas— y conviene no leerlas como si lo hicieran: la mayor pérdida en términos absolutos sería para **México, unos 1.500 millones de dólares anuales**, y en términos relativos para **El Salvador, un 0,6% de su PIB**."
        },
        {
          "type": "paragraph",
          "text": "Y ese 1% se suma a algo que ya existía: los migrantes latinoamericanos pagan alrededor de un **6% en comisiones** a operadores de transferencia, bancos y aplicaciones. El costo total de mandar dinero a casa ronda ahora el siete por ciento."
        },
        {
          "type": "heading",
          "text": "I. Por qué importa más de lo que parece"
        },
        {
          "type": "paragraph",
          "text": "Las remesas hacia América Latina y el Caribe alcanzaron en 2025 un récord de **174.400 millones de dólares**, según el BID. Centroamérica recibió **47.730 millones** y lideró el crecimiento. (La misma fuente reporta que la subregión concentró el 31,8% del total; ese porcentaje no se deriva de las dos cifras absolutas —47.730 sobre 174.400 es el 27,4%— y publicamos el monto, que es el dato desagregado.)"
        },
        {
          "type": "paragraph",
          "text": "Por país: México recibió 61.791 millones, con una **caída del 4,6%**. Guatemala, 25.857 millones, con un **alza del 20,2%**. República Dominicana, 11.973 millones, con un alza del 10,3%."
        },
        {
          "type": "paragraph",
          "text": "Medidas contra el tamaño de la economía, las remesas son el ingreso externo dominante de media Centroamérica: alrededor del **30% del PIB en Honduras y Nicaragua**, y **27,3% en El Salvador**, el nivel más alto en tres décadas."
        },
        {
          "type": "paragraph",
          "text": "Ningún acuerdo comercial, ninguna inversión extranjera y ningún programa de cooperación mueve esas magnitudes. Para Honduras, las remesas equivalen a casi un tercio de todo lo que el país produce."
        },
        {
          "type": "paragraph",
          "text": "Un impuesto que reduce ese flujo un 1,6% no es una medida de recaudación. Es una política de desarrollo aplicada a otros países sin consultarlos. Y los expertos citados señalan un efecto de segundo orden que debería preocupar a quien la diseñó: al reducir el ingreso familiar en origen, **podría aumentar la migración irregular**, y al encarecer el canal formal, empujar las transferencias hacia canales informales —que es exactamente lo contrario de lo que persigue cualquier política antilavado seria—."
        },
        {
          "type": "heading",
          "text": "II. Los aranceles, y una justificación nueva"
        },
        {
          "type": "paragraph",
          "text": "El 23 de julio de 2026, Estados Unidos impuso aranceles a sesenta economías del mundo por insuficiente acción contra el trabajo forzado en sus cadenas de suministro. **Dieciocho países de América Latina y el Caribe quedaron incluidos.**"
        },
        {
          "type": "table",
          "head": [
            "Arancel",
            "Países"
          ],
          "rows": [
            [
              "**10%**",
              "Argentina, Ecuador, El Salvador, Guatemala, Honduras, México, Trinidad y Tobago"
            ],
            [
              "**12,5%**",
              "Bahamas, Brasil, Chile, Colombia, Costa Rica, Guyana, Nicaragua, Perú, República Dominicana, Uruguay, Venezuela"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "La justificación oficial del Representante Comercial estadounidense es citable: **\"décadas de persuasión moral no han erradicado el trabajo forzado de las cadenas de suministro globales\"**. El proceso incluyó audiencias públicas a principios de julio."
        },
        {
          "type": "paragraph",
          "text": "Las reacciones fueron distintas y reveladoras. **México** minimizó el impacto señalando que cerca del **85% de sus exportaciones mantiene arancel cero bajo el T-MEC** y que el 10% sustituye a una tasa preexistente. **Brasil** rechazó la decisión por falta de fundamento legal y anunció acción recíproca ante la Organización Mundial del Comercio. **Chile** declaró que la medida contradice los estándares técnicos y legales que el país presentó durante la investigación."
        },
        {
          "type": "paragraph",
          "text": "Nótese lo que no tienen en común los dieciocho: ninguna práctica laboral compartida que los distinga del resto. Tampoco es la geografía: son dieciocho de los más de treinta países de la región, en una medida que alcanzó a sesenta economías del mundo."
        },
        {
          "type": "heading",
          "text": "III. Brasil, o el arancel como instrumento judicial"
        },
        {
          "type": "paragraph",
          "text": "El caso brasileño merece capítulo aparte porque establece un precedente."
        },
        {
          "type": "paragraph",
          "text": "En julio de 2025, Estados Unidos impuso a Brasil un arancel del 50% invocando explícitamente el juicio penal contra Jair Bolsonaro, que el presidente estadounidense calificó de \"cacería de brujas\". Entró en vigor el 6 de agosto de 2025. Alrededor del 45% de las exportaciones brasileñas quedó exento."
        },
        {
          "type": "paragraph",
          "text": "En **febrero de 2026, la Corte Suprema de Estados Unidos anuló la medida** por violar las leyes federales que limitan la imposición unilateral de aranceles."
        },
        {
          "type": "paragraph",
          "text": "En junio de 2026 la administración propuso nuevos gravámenes del 25%; el 16 de julio se anunciaron aranceles por prácticas comerciales \"desleales\"; el 23 de julio se sumó el 12,5% por trabajo forzado. Las pérdidas acumuladas para Brasil se estiman en 1.500 millones de dólares entre agosto y noviembre de 2025, más 1.200 millones adicionales por productos que no pudieron redireccionarse en quince de veintiún sectores."
        },
        {
          "type": "paragraph",
          "text": "La relación comercial más grande entre Estados Unidos y Sudamérica se está administrando por decreto, litigio y anuncio. Un exportador brasileño de café no puede saber hoy qué arancel pagará su embarque del mes próximo, y no porque exista una negociación en curso, sino porque la regla cambia por vías que no son las de la política comercial."
        },
        {
          "type": "heading",
          "text": "IV. El T-MEC, y la palabra que no se dijo"
        },
        {
          "type": "paragraph",
          "text": "El 1 de julio de 2026 se celebró la primera revisión conjunta del tratado entre Estados Unidos, México y Canadá. El resultado es preciso y conviene entenderlo bien, porque se ha reportado mal."
        },
        {
          "type": "paragraph",
          "text": "**Estados Unidos no confirmó la extensión del tratado en su forma actual.** Eso significa que **no se otorgó la renovación automática por dieciséis años** que el mecanismo preveía."
        },
        {
          "type": "paragraph",
          "text": "La consecuencia procesal: las revisiones conjuntas pasan a ser **anuales**."
        },
        {
          "type": "paragraph",
          "text": "Lo que no ocurrió: no hubo terminación, ni suspensión, ni cambios arancelarios automáticos. **El tratado sigue plenamente vigente hasta el 1 de julio de 2036**, con sus preferencias, reglas de origen y mecanismos de solución de controversias activos."
        },
        {
          "type": "paragraph",
          "text": "Lo que sí ocurrió: la economía más integrada del hemisferio pasó de tener certeza hasta 2042 a tener una revisión cada año. Las rondas bilaterales México-Estados Unidos se celebraron en mayo y junio, con una tercera en Ciudad de México la semana del 20 de julio. Los temas: reglas de origen automotrices e industriales, acero y aluminio, seguridad económica, agricultura, laboral, medio ambiente y compatibilidad regulatoria."
        },
        {
          "type": "paragraph",
          "text": "Para quien decide una inversión industrial a quince años en México, la diferencia entre \"vigente hasta 2036 con revisión anual\" y \"renovado hasta 2042\" es toda la diferencia."
        },
        {
          "type": "heading",
          "text": "V. Una cifra final, y lo que no permite concluir"
        },
        {
          "type": "paragraph",
          "text": "Hay una cifra que conviene poner al final, con cuidado sobre lo que dice y lo que no: **la inversión extranjera directa en América Latina creció apenas 1,7% en 2025**, según CEPAL."
        },
        {
          "type": "paragraph",
          "text": "El informe, publicado el 23 de junio de 2026, describe el contexto como de rivalidad geopolítica y competencia tecnológica intensificadas, y dedica un eje completo a las implicaciones de la política arancelaria estadounidense sobre los vínculos entre comercio e inversión en la región. Lo que **no** hace, y nosotros tampoco, es atribuir la cifra a las medidas descritas en esta nota: no es posible aislar cuánto de ese 1,7% corresponde a ellas."
        },
        {
          "type": "paragraph",
          "text": "Uno coma siete por ciento de crecimiento de un flujo que es, además, solo una fracción de la inversión total. Es poco en cualquier lectura."
        },
        {
          "type": "heading",
          "text": "VI. La conversación que la región no está teniendo"
        },
        {
          "type": "paragraph",
          "text": "Hay algo que decir sobre el método, y no es partidario."
        },
        {
          "type": "paragraph",
          "text": "Un arancel, una licencia de exportación de petróleo, un impuesto a las remesas y la no renovación de un tratado son, los cuatro, instrumentos legítimos de política exterior de un país soberano. Estados Unidos tiene derecho a usarlos. La discusión sobre si los usa bien es una discusión estadounidense."
        },
        {
          "type": "paragraph",
          "text": "La discusión latinoamericana es otra, y es esta: **la región enfrenta esos cuatro instrumentos por separado, país por país, sin ninguna coordinación, y en cada caso desde la posición negociadora más débil posible.**"
        },
        {
          "type": "paragraph",
          "text": "Dieciocho países recibieron el mismo día, por la misma causa, aranceles de dos tramos. Ninguno coordinó su respuesta con otro. México —en el tramo del 10%— señaló que casi no le afecta; Brasil y Chile —en el del 12,5%— acudieron respectivamente a la OMC y a una declaración técnica. Tres respuestas distintas a una misma decisión."
        },
        {
          "type": "paragraph",
          "text": "Y este medio ya publicó el dato que explica por qué: América Latina se vende a sí misma el 14% de lo que exporta, y esa proporción está bajando. Una región que no comercia consigo misma no tiene con qué negociar cuando la presionan desde afuera, porque no tiene alternativa que ofrecerse."
        },
        {
          "type": "paragraph",
          "text": "No hay aquí un llamado a la unidad latinoamericana, que es un género literario con doscientos años de fracasos. Hay una observación más chica y más útil: **los dieciocho países que recibieron el arancel de julio comparten un problema técnico idéntico —cómo acreditar ausencia de trabajo forzado en sus cadenas de suministro— y podrían resolverlo con un solo sistema de certificación en vez de con dieciocho.**"
        },
        {
          "type": "paragraph",
          "text": "Eso no requiere un bloque político, ni una cumbre, ni una declaración. Requiere que alguien lo proponga."
        }
      ]
    },
    "seo": {
      "title": "El uno por ciento",
      "description": "Estados Unidos gravó las remesas en enero de 2026. Es la política hemisférica que menos se discute.",
      "tldr": [
        "Desde el 1 de enero de 2026 rige en Estados Unidos un impuesto del 1% sobre las transferencias de dinero en efectivo al exterior. Se aplica con independencia del estatus migratorio de quien envía: alcanza a unos veintitrés millones de residentes permanentes, catorce millones…",
        "Es la primera vez que el gobierno federal estadounidense grava transferencias individuales de remesas.",
        "La recaudación estimada es de unos diez mil millones de dólares en diez años: menos del 0,1% del presupuesto federal. Es decir, fiscalmente irrelevante para quien lo cobra.",
        "Para quien lo paga, no. El Overseas Development Institute estima una caída de remesas de alrededor del 1,6% como promedio regional. Las estimaciones por país que publica no se derivan aritméticamente de ese promedio —usan elasticidades distintas— y conviene no leerlas como si…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «El uno por ciento»?",
          "answer": "La pieza está situada en América Latina. Estados Unidos impuso en enero de 2026 un impuesto a las remesas. Es la política estadounidense hacia América Latina que menos se ha discutido y la que más gente va a afectar."
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
      "country": "América Latina",
      "excerpt": "Desde el 1 de enero de 2026 rige en Estados Unidos un impuesto del 1% sobre las transferencias de dinero en efectivo al exterior. Se aplica con independencia del estatus migratorio de quien envía: alcanza a unos…",
      "sources": "Univision y Enlace Latino NC sobre el impuesto del 1% a las remesas vigente desde el 1/01/2026, con estimaciones del Overseas Development Institute · BID sobre remesas a América Latina y el Caribe en 2025, vía Diario El Mundo, SELA y Forbes Centroamérica; Infobae (19/02/2026 y 16/06/2026) sobre el desglose centroamericano y las remesas como porcentaje del PIB · CNN Español, vía KVIA (23-24/07/2026), sobre los aranceles por trabajo forzado y las reacciones de México, Brasil y Chile · JOTA, Poder360, Exame y CNN Brasil sobre la secuencia arancelaria con Brasil desde julio de 2025, incluida la anulación judicial de febrero de 2026 · CSENCOR (16/07/2026) sobre la revisión conjunta del T-MEC del 1/07/2026 y sus consecuencias procesales · CEPAL, *La Inversión Extranjera Directa en América Latina y el Caribe, 2026: navegando el nuevo contexto global*, publicado el 23/06/2026 · CEPAL, *Rupturas y oportunidades* (agosto de 2026), sobre comercio intrarregional.",
      "editNote": "Vacíos declarados, y uno es grave. No se publica ninguna cifra de deportaciones desde Estados Unidos hacia países latinoamericanos en 2025 o 2026: las estadísticas oficiales de ICE solo llegan al 30 de septiembre de 2024 y el portal de estadísticas del Departamento de Seguridad Nacional no fue accesible. Es la ausencia más significativa de esta nota y conviene decirlo: **la región no dispone hoy de una cifra oficial y verificable de cuánta gente está siendo deportada a sus países.** Tampoco se publican los flujos efectivos de remesas de 2026, ni el mapa arancelario país por país de 2025, ni el monto total de la IED regional: ninguno pudo verificarse. No se estiman."
    }
  },
  {
    "id": "colombia-dejo-de-medir-cocaina",
    "title": "El país que produce más cocaína del mundo dejó de medir cuánta produce",
    "summary": "Naciones Unidas retiró el indicador de producción potencial de Colombia. Es el hecho más importante de la política de drogas latinoamericana de este año, y casi nadie lo comentó.",
    "section": {
      "id": "frontera",
      "label": "Frontera"
    },
    "author": {
      "name": "Corresponsalía Politarca"
    },
    "publishedAt": "2026-08-18",
    "updatedAt": "2026-08-18",
    "readingMinutes": 7,
    "image": {
      "url": "/photos/plates/colombia-dejo-de-medir-cocaina.jpg",
      "alt": "Capitolio Nacional, Bogotá. Frontera: la cifra que Naciones Unidas dejó de publicar."
    },
    "tags": [
      "Colombia",
      "coca",
      "UNODC",
      "drogas"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "En su informe de monitoreo de cultivos de coca de Colombia correspondiente a 2024, presentado en 2026, la Oficina de Naciones Unidas contra la Droga y el Delito publicó la superficie sembrada: **261.000 hectáreas, un 3,5% más que en 2023** —el organismo publica la variación y la superficie redondeada, que no se derivan exactamente una de otra—."
        },
        {
          "type": "paragraph",
          "text": "Y **no publicó la producción potencial de cocaína**. El indicador fue retirado del informe. La explicación oficial es que la metodología de estimación está en \"fortalecimiento técnico\" y que volverá en informes futuros, con una hoja de ruta para reconstruirla."
        },
        {
          "type": "paragraph",
          "text": "Conviene entender qué significa eso. Colombia es el mayor productor de cocaína del mundo. Desde 2026, **nadie sabe cuánta produce**. Ni el gobierno colombiano, ni Naciones Unidas, ni las agencias antinarcóticos que diseñan su política sobre esa cifra."
        },
        {
          "type": "paragraph",
          "text": "No es un escándalo: es una decisión técnica defendible, tomada porque el rendimiento por hectárea cambió tanto con las nuevas variedades y prácticas que la metodología anterior dejó de ser confiable. Pero su consecuencia práctica es que **el debate global sobre política de drogas se está librando sin el número central.**"
        },
        {
          "type": "heading",
          "text": "I. Lo que sí se puede medir"
        },
        {
          "type": "paragraph",
          "text": "Los tres países andinos productores, con sus años de referencia —que no coinciden, y por eso no se pueden sumar:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "Superficie",
            "Año",
            "Variación",
            "Producción potencial"
          ],
          "rows": [
            [
              "**Colombia**",
              "261.000 ha",
              "2024",
              "+3,5%",
              "**no publicada**"
            ],
            [
              "**Perú**",
              "84.546 ha",
              "2025",
              "−5.209 ha, tercera caída consecutiva",
              "763 t de clorhidrato"
            ],
            [
              "**Bolivia**",
              "34.000 ha",
              "2024",
              "+10%",
              "hoja seca: 72.887 t, ~US$618 M"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "**Colombia** sube. Diez municipios concentran casi la mitad del cultivo. El Pacífico creció 14% y el Catatumbo 11%; Putumayo y Caquetá cayeron 14%. Y hay un dato que ordena la discusión sobre estrategia: **la erradicación manual forzosa pasó de 20.325 hectáreas en 2023 a 9.403 en 2024, una caída del 54%**."
        },
        {
          "type": "paragraph",
          "text": "**Perú** baja, y lleva tres años bajando: de 95.008 hectáreas en 2022 a 84.546 en 2025. Su producción potencial de clorhidrato pasó de 822 toneladas en 2023 a 763. El VRAEM concentra 36.196 hectáreas, el **42,8% del total nacional**, y aparecen nuevos frentes amazónicos —Tahuamanu, Cotuhé, Yaguas, Tigre, Fitzcarrald— con más de 790 hectáreas."
        },
        {
          "type": "paragraph",
          "text": "**Bolivia** sube: 34.000 hectáreas, un 54,5% por encima del límite legal de 22.000. El 57% está en Los Yungas de La Paz y el 42% en el Trópico de Cochabamba, este último con un alza del 18%. El cultivo en áreas protegidas bajó de 583 a 515 hectáreas."
        },
        {
          "type": "paragraph",
          "text": "Un país sube sin medir producción, otro baja tres años seguidos, el tercero sube por encima de su propio límite legal. Y como los años de referencia difieren y falta el dato colombiano, **no es posible construir hoy un total regional de producción potencial de cocaína**. No lo estimamos."
        },
        {
          "type": "heading",
          "text": "II. El puerto es el negocio"
        },
        {
          "type": "paragraph",
          "text": "Si la producción es difícil de medir, la salida no lo es."
        },
        {
          "type": "paragraph",
          "text": "Ecuador incautó **214,53 toneladas de droga en 2025**, un 27,2% menos que las 294,61 toneladas del récord de 2024. Entre 210 y 295 toneladas en dos años lo sitúan como tercer país del mundo en volumen de incautación."
        },
        {
          "type": "paragraph",
          "text": "Las terminales de Guayaquil manejan el **85% de la carga nacional**. De las 31,4 toneladas incautadas en puertos ecuatorianos en 2025, 27,4 fueron en la provincia del Guayas."
        },
        {
          "type": "paragraph",
          "text": "El método que documenta la agencia EFE es instructivo porque muestra que el control portuario, en el que se ha invertido más que en cualquier otra cosa, se está eludiendo por diseño: la cocaína se oculta en islotes del Golfo de Guayaquil y se traspasa a buques mercantes **en alta mar o adherida al casco**, después de que la carga pasó la inspección. Los Lobos, Los Lagartos, Los Tiguerones y Los Choneros se disputan el golfo y reclutan pobladores y pescadores."
        },
        {
          "type": "paragraph",
          "text": "La respuesta incluye un grupo policial especializado con veinte buzos para inspeccionar cascos, y un **centro de inteligencia que la Unión Europea abrió en Guayaquil en enero de 2026** para monitoreo marítimo y portuario."
        },
        {
          "type": "paragraph",
          "text": "Que sea la Unión Europea la que abre ese centro dice cuál es el destino."
        },
        {
          "type": "heading",
          "text": "III. Los grupos que se volvieron multinacionales"
        },
        {
          "type": "paragraph",
          "text": "El Instituto Igarapé publicó en julio de 2026 la estimación más rigurosa disponible: **el Primeiro Comando da Capital tiene entre treinta mil y cuarenta mil integrantes; el Comando Vermelho, entre veinte mil y treinta mil**. En su ranking de amenazas criminales de las Américas ocupan los dos primeros lugares, por delante del Cártel Jalisco Nueva Generación."
        },
        {
          "type": "paragraph",
          "text": "El estudio documenta presencia del PCC en varios países sudamericanos y conexiones operativas hacia Europa y África Occidental, con puertos estratégicos identificados en **Bélgica, Países Bajos, Alemania, Francia y España**."
        },
        {
          "type": "paragraph",
          "text": "Y documenta la diversificación: minería ilegal, extorsión, lavado, distribución de combustibles y operaciones portuarias. Es decir, una organización criminal brasileña con treinta mil personas que opera terminales, vende combustible, extrae oro y mueve dinero por sistemas financieros formales, con presencia en dos continentes."
        },
        {
          "type": "paragraph",
          "text": "Eso ya no se combate con política antidrogas. Se combate, si se combate, con supervisión financiera y aduanera."
        },
        {
          "type": "heading",
          "text": "IV. Y el mercado que se movió"
        },
        {
          "type": "paragraph",
          "text": "Aquí está el dato que cambia el sentido de todo lo anterior, y viene de Estados Unidos."
        },
        {
          "type": "paragraph",
          "text": "Las muertes por sobredosis en Estados Unidos, medidas en períodos móviles de doce meses según los datos provisionales del CDC:"
        },
        {
          "type": "table",
          "head": [
            "Doce meses terminados en",
            "Muertes totales",
            "Opioides sintéticos (proxy de fentanilo)"
          ],
          "rows": [
            [
              "Marzo 2025",
              "77.063",
              "44.642"
            ],
            [
              "Diciembre 2025",
              "70.637",
              "—"
            ],
            [
              "**Marzo 2026**",
              "**66.712**",
              "**35.423**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "**Las sobredosis totales cayeron 13,4% en un año. Las asociadas a opioides sintéticos, un 20,6%.**"
        },
        {
          "type": "paragraph",
          "text": "Es una de las mejores noticias de salud pública del hemisferio y merece decirse así, con la advertencia metodológica que el propio CDC impone: son conteos **provisionales**, marcados como subregistrados por datos incompletos, y no comparables con cifras finales. La dirección es clara; la magnitud exacta, no."
        },
        {
          "type": "paragraph",
          "text": "Ahora júntense los tres hechos. La superficie cultivada en Colombia sube. Ecuador incautó 214,5 toneladas en 2025 y 294,6 en 2024, cifras que lo ponen entre los tres mayores del mundo. Y el consumo letal en el principal mercado histórico cae más de un 13%."
        },
        {
          "type": "paragraph",
          "text": "Si se produce lo mismo o más, se sigue incautando en esa magnitud y muere menos gente en Estados Unidos, entonces **es plausible que una parte del producto esté yendo a otra parte**. Los puertos que el Igarapé identifica —Amberes, Rotterdam, Hamburgo, los del norte de Europa— y el centro de inteligencia que la Unión Europea instaló en Guayaquil apuntan todos en la misma dirección."
        },
        {
          "type": "paragraph",
          "text": "Aquí este medio debe declarar un límite, porque es grande: **no pudimos verificar cifras de incautaciones en puertos europeos, ni datos de consumo global de cocaína, ni precios por kilo en origen y destino, ni una estimación seria del valor del mercado.** Sin esas cifras, lo anterior es una inferencia razonable a partir de tres series verificadas, y no un hallazgo. Lo presentamos como lo que es."
        },
        {
          "type": "heading",
          "text": "V. La discusión que la evidencia permite"
        },
        {
          "type": "paragraph",
          "text": "Hay una conclusión que sí se sostiene con lo verificado, y es incómoda para las dos posiciones habituales."
        },
        {
          "type": "paragraph",
          "text": "**Contra los partidarios de la erradicación:** en el único año en que ambas series se pueden observar juntas, Colombia redujo su erradicación manual forzosa un 54% y su superficie cultivada subió 3,5%; Perú, con otra política, lleva tres años consecutivos de caída. Es un dato, no una demostración —la erradicación actúa con rezago, el precio también se movió y no controlamos por conflicto armado ni por sustitución voluntaria—. Pero es un dato que la política antidrogas de la región debería tener que explicar, y no lo explica."
        },
        {
          "type": "paragraph",
          "text": "**Contra los partidarios de la legalización como solución regional:** la caída de sobredosis en Estados Unidos ocurrió sin ninguna legalización de cocaína en ninguna parte, y el mercado no desapareció: se movió. Legalizar el consumo en un país receptor no elimina la renta criminal en los países productores mientras exista un mercado ilegal en otro lado. Y la diversificación documentada del PCC —combustible, oro, extorsión, puertos— sugiere que estas organizaciones ya no dependen de la renta de la cocaína lo suficiente como para desaparecer si esa renta cae."
        },
        {
          "type": "paragraph",
          "text": "Lo que sí se sostiene es más modesto y menos épico: **el negocio está en el puerto, en el sistema financiero y en la aduana, no en el cultivo**. Y la política pública latinoamericana sigue asignando la mayor parte de sus recursos a la parte del negocio que menos vale."
        },
        {
          "type": "paragraph",
          "text": "Colombia tiene 261.000 hectáreas sembradas y ya no sabe cuántas toneladas salen de ellas. Es una buena metáfora del estado de la conversación."
        }
      ]
    },
    "seo": {
      "title": "El país que produce más cocaína dejó de medir cuánta produce",
      "description": "Colombia. Naciones Unidas retiró el indicador de producción potencial. Eso es el hecho.",
      "tldr": [
        "En su informe de monitoreo de cultivos de coca de Colombia correspondiente a 2024, presentado en 2026, la Oficina de Naciones Unidas contra la Droga y el Delito publicó la superficie sembrada: 261.000 hectáreas, un 3,5% más que en 2023 —el organismo publica la variación y la…",
        "Y no publicó la producción potencial de cocaína. El indicador fue retirado del informe. La explicación oficial es que la metodología de estimación está en \"fortalecimiento técnico\" y que volverá en informes futuros, con una hoja de ruta para reconstruirla.",
        "Conviene entender qué significa eso. Colombia es el mayor productor de cocaína del mundo. Desde 2026, nadie sabe cuánta produce. Ni el gobierno colombiano, ni Naciones Unidas, ni las agencias antinarcóticos que diseñan su política sobre esa cifra.",
        "No es un escándalo: es una decisión técnica defendible, tomada porque el rendimiento por hectárea cambió tanto con las nuevas variedades y prácticas que la metodología anterior dejó de ser confiable. Pero su consecuencia práctica es que el debate global sobre política de…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «El país que produce más cocaína del mundo dejó de medir cuánta produce»?",
          "answer": "La pieza está situada en Colombia. Naciones Unidas retiró el indicador de producción potencial de Colombia. Es el hecho más importante de la política de drogas latinoamericana de este año, y casi nadie lo comentó."
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
      "country": "Colombia",
      "excerpt": "En su informe de monitoreo de cultivos de coca de Colombia correspondiente a 2024, presentado en 2026, la Oficina de Naciones Unidas contra la Droga y el Delito publicó la superficie sembrada: 261.000 hectáreas, un 3,5%…",
      "sources": "UNODC y SIMCI, informe de monitoreo de cultivos de coca de Colombia 2024, vía Ministerio de Justicia de Colombia y El Colombiano; UNODC ROCOL sobre la hoja de ruta para reconstruir la metodología de producción potencial · DEVIDA y UNODC, informe de monitoreo de Perú de junio de 2026, vía Inforegión (20/07/2026) · UNODC, informe de monitoreo de cultivos de coca en Bolivia 2024, vía Infobae (16/12/2025) · Primicias (29/12/2025) sobre incautaciones en Ecuador; Infobae/EFE (10/04/2026) sobre el Golfo de Guayaquil y el centro de inteligencia de la Unión Europea · Instituto Igarapé, estudio publicado el 15/07/2026, vía Band · CDC / National Center for Health Statistics, *Vital Statistics Rapid Release*, conteos provisionales de sobredosis, consulta directa al conjunto de datos público realizada el 30/08/2026.",
      "editNote": "Vacíos declarados, y son sustanciales. No fue posible verificar incautaciones en puertos europeos (Amberes, Rotterdam, Hamburgo, Algeciras), cifras de consumo global de cocaína, precios por kilo en origen, tránsito y destino, el valor total estimado del mercado, ni el peso de la economía de la droga en el PIB de los países productores. La hipótesis del desplazamiento del mercado hacia Europa se presenta explícitamente como inferencia a partir de tres series verificadas, no como hallazgo. Los datos de sobredosis del CDC son provisionales y el propio organismo los marca como subregistrados; los porcentajes de variación se calcularon sobre los conteos reportados, no sobre las cifras ajustadas."
    }
  },
  {
    "id": "envejecio-antes-de-enriquecerse",
    "title": "El continente que envejeció antes de enriquecerse",
    "summary": "Chile tuvo en 2025 menos de un hijo por mujer. Es la primera vez en su historia y lo sitúa entre los países de menor fecundidad del planeta, con la mitad del ingreso per cápita de los países ricos de ese grupo.",
    "section": {
      "id": "vida-comun",
      "label": "Vida común"
    },
    "author": {
      "name": "Crónica Politarca"
    },
    "publishedAt": "2026-08-17",
    "updatedAt": "2026-08-17",
    "readingMinutes": 9,
    "image": {
      "url": "/photos/plates/envejecio-antes-de-enriquecerse.jpg",
      "alt": "Plaza con bancos vacíos. Vida común: la transición demográfica que no era la más rápida."
    },
    "tags": [
      "fecundidad",
      "Chile",
      "demografía",
      "envejecimiento"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "En 1960, una mujer latinoamericana tenía en promedio **5,87 hijos**. En 2024 tiene **1,79**."
        },
        {
          "type": "paragraph",
          "text": "El nivel de reemplazo —el número necesario para que una población se mantenga estable— es 2,1. **América Latina lo cruzó hacia abajo en 2014** y está por debajo de 2,0 desde 2017. Hoy la región tiene una fecundidad **cuatro décimas por debajo del promedio mundial** de 2,19."
        },
        {
          "type": "paragraph",
          "text": "Y luego está Chile."
        },
        {
          "type": "paragraph",
          "text": "Según la serie del Banco Mundial, la tasa global de fecundidad chilena era de 1,14 en 2024. Según el **Instituto Nacional de Estadísticas de Chile**, que cuenta nacimientos en el registro civil en vez de estimarlos, en 2025 fue de **0,99: la primera vez en la historia del país que baja de un hijo por mujer**."
        },
        {
          "type": "paragraph",
          "text": "Las dos cifras son correctas y miden cosas distintas —una es una estimación demográfica suavizada, otra un registro administrativo—, y por eso conviene decir siempre cuál se está usando. Pero con el dato del registro chileno, el país entra al grupo de las fecundidades más bajas del planeta, junto a Corea del Sur (0,75), China (1,01), España (1,10), Japón (1,15) e Italia (1,18). El ingreso per cápita chileno es aproximadamente la mitad del de Corea, España, Japón o Italia; China, que está en el mismo grupo, es la otra gran economía que llegó ahí sin haberse enriquecido antes."
        },
        {
          "type": "paragraph",
          "text": "Ese es el asunto de esta nota. No que la fecundidad haya caído: eso pasó en todo el mundo. Sino que **cayó a niveles de país rico en países que no son ricos**, y que nadie en la región lo está tratando como el hecho estructural que es."
        },
        {
          "type": "heading",
          "text": "I. Los números, por país y por año"
        },
        {
          "type": "paragraph",
          "text": "Tasa global de fecundidad, serie del Banco Mundial:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "2015",
            "2020",
            "2024"
          ],
          "rows": [
            [
              "**Chile**",
              "1,74",
              "1,31",
              "**1,14**"
            ],
            [
              "Costa Rica",
              "1,80",
              "1,45",
              "**1,32**"
            ],
            [
              "Uruguay",
              "2,04",
              "1,50",
              "**1,40**"
            ],
            [
              "Cuba",
              "1,69",
              "1,49",
              "**1,45**"
            ],
            [
              "Argentina",
              "2,35",
              "1,60",
              "**1,50**"
            ],
            [
              "Brasil",
              "1,78",
              "1,65",
              "**1,61**"
            ],
            [
              "Colombia",
              "1,77",
              "1,69",
              "**1,63**"
            ],
            [
              "México",
              "2,14",
              "1,99",
              "**1,89**"
            ],
            [
              "Perú",
              "2,23",
              "2,06",
              "**1,97**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "**Ningún país de esta lista está por encima del nivel de reemplazo.** Perú, el más alto, tenía 2,23 hace nueve años."
        },
        {
          "type": "paragraph",
          "text": "En nacimientos absolutos, que es como se siente:"
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            "**Uruguay:** de 48.926 en 2015 a **28.903 en 2025**. Una caída del 40,9% en diez años. La serie completa no tiene un solo año de rebote.",
            "**Argentina:** de unos 777.000 en 2014 a **413.135 en 2024**. Cerca de un 47% menos en una década.",
            "**Chile:** de 275.916 en 1993 a **146.446 en 2025**. Un 46,9% menos.",
            "**Brasil:** 2,38 millones en 2024, un 5,8% menos que en 2023 y **el sexto descenso consecutivo**.",
            "**Colombia:** 433.678 nacimientos preliminares en 2025, la cifra más baja de la década, un 4,5% menos que en 2024 —que a su vez había caído 12,0%—. En 2008 hubo más de 715.000."
          ]
        },
        {
          "type": "paragraph",
          "text": "Argentina perdió casi la mitad de sus nacimientos en diez años. No por una guerra, ni por una epidemia, ni por una emigración masiva de mujeres en edad fértil. Por decisiones individuales tomadas de a una."
        },
        {
          "type": "heading",
          "text": "II. Lo que hay que corregir del relato"
        },
        {
          "type": "paragraph",
          "text": "Circula la idea de que América Latina completó su transición demográfica más rápido que ninguna otra región del mundo. Con los datos verificables, **eso no es exacto**, y conviene decirlo porque el error tiene consecuencias analíticas."
        },
        {
          "type": "paragraph",
          "text": "Midiendo los años transcurridos entre el primer año con seis hijos por mujer y el primero con 2,1, sobre la serie de Naciones Unidas: Costa Rica tardó **38 años**; Brasil, **40**; Colombia y México, **42**; Perú, **46**. Tailandia lo hizo en **22 años** y Corea del Sur en **24**."
        },
        {
          "type": "paragraph",
          "text": "Es decir: **Asia oriental fue más rápida que América Latina**, no al revés."
        },
        {
          "type": "paragraph",
          "text": "Y la comparación con Europa, que suele hacerse para mostrar contraste, es directamente inválida con estas series: Europa aparece ya en 2,70 en 1950 porque su transición empezó en el siglo XIX —en Francia, hacia 1830—. Calcular \"años transcurridos\" sobre una serie que empieza en 1950 daría un resultado espectacular y falso. No lo hacemos."
        },
        {
          "type": "paragraph",
          "text": "Lo distintivo de América Latina no es entonces la velocidad de la caída. Es **el nivel al que llegó y el ingreso con el que llegó**."
        },
        {
          "type": "paragraph",
          "text": "Corea del Sur, Japón, Italia y España tienen fecundidades comparables o menores que las de Chile, Uruguay o Cuba. Pero llegaron ahí después de décadas de ingreso alto, con sistemas de pensiones consolidados, cobertura de salud universal y un Estado capaz de recaudar. América Latina llegó al mismo lugar con **el 21,7% del PIB de presión tributaria, el 31% de su población activa cotizando a pensiones y el 47% del empleo en la informalidad**."
        },
        {
          "type": "paragraph",
          "text": "La expresión técnica es \"envejecer antes de enriquecerse\". Es exactamente lo que está pasando."
        },
        {
          "type": "heading",
          "text": "III. La parte buena, que es enorme y casi no se cuenta"
        },
        {
          "type": "paragraph",
          "text": "Una porción sustancial de esta caída es, sin ninguna ambigüedad, una de las mejores noticias sociales de la historia reciente de América Latina."
        },
        {
          "type": "paragraph",
          "text": "La fecundidad adolescente —nacimientos por cada mil mujeres de quince a diecinueve años— **cayó en la región de 89,2 en 1990 a 50,4 en 2024**. Pero los casos nacionales son espectaculares:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "1990",
            "2015",
            "2024",
            "Caída 2015-2024"
          ],
          "rows": [
            [
              "**Chile**",
              "69,5",
              "39,4",
              "**5,6**",
              "**−85,8%**"
            ],
            [
              "**Argentina**",
              "70,3",
              "63,9",
              "**25,6**",
              "**−59,9%**"
            ],
            [
              "Uruguay",
              "62,3",
              "55,9",
              "25,1",
              "−55,1%"
            ],
            [
              "Costa Rica",
              "91,3",
              "56,6",
              "24,8",
              "−56,2%"
            ],
            [
              "Brasil",
              "88,5",
              "61,8",
              "41,5",
              "−32,8%"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Chile pasó de 33,7 en 2016 a 5,6 en 2024. En ocho años, el embarazo adolescente chileno prácticamente desapareció."
        },
        {
          "type": "paragraph",
          "text": "Cada punto de esa caída es una adolescente que terminó el colegio, que no abandonó, que entró al mercado laboral, que decidió cuándo. Es probablemente el mayor avance en libertad individual efectiva que la región produjo en esta generación, y ocurrió casi sin que nadie lo declarara como política de Estado."
        },
        {
          "type": "paragraph",
          "text": "Cualquier discusión sobre natalidad que no empiece reconociendo esto está pidiendo, implícitamente, que vuelvan los embarazos adolescentes."
        },
        {
          "type": "heading",
          "text": "IV. Cuándo empieza a encogerse"
        },
        {
          "type": "paragraph",
          "text": "Las proyecciones de Naciones Unidas, variante media, marcan los años de máxima población:"
        },
        {
          "type": "table",
          "head": [
            "",
            "Pico",
            "Población en el pico",
            "2100"
          ],
          "rows": [
            [
              "**Cuba**",
              "**2012** (ya pasó)",
              "11,3 M",
              "5,6 M"
            ],
            [
              "**Uruguay**",
              "**2020** (ya pasó)",
              "3,4 M",
              "2,2 M"
            ],
            [
              "**Chile**",
              "**2041**",
              "20,5 M",
              "13,4 M"
            ],
            [
              "**Brasil**",
              "**2042**",
              "219,3 M",
              "163,4 M"
            ],
            [
              "Colombia",
              "2050",
              "59,4 M",
              "47,1 M"
            ],
            [
              "Argentina",
              "2050",
              "48,3 M",
              "38,3 M"
            ],
            [
              "México",
              "2058",
              "149,9 M",
              "130,2 M"
            ],
            [
              "**América Latina**",
              "**2053**",
              "**730,8 M**",
              "613,4 M"
            ],
            [
              "Mundo",
              "2084",
              "10.289 M",
              "10.180 M"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "**En Uruguay mueren más personas de las que nacen desde 2020.** Cuba lleva catorce años perdiendo población. El Instituto Nacional de Estadísticas de Chile proyecta el inicio de la caída para **2036**, cinco años antes que Naciones Unidas."
        },
        {
          "type": "paragraph",
          "text": "Y las proyecciones a 2100 son las que dan la escala: Chile pasaría de 19,8 a 13,4 millones. Brasil, de 212 a 163 millones. Cuba, de 11 a 5,6: **la mitad**."
        },
        {
          "type": "heading",
          "text": "V. Lo que esto significa, sin dramatismo"
        },
        {
          "type": "paragraph",
          "text": "Conviene ser preciso con las consecuencias, porque este es un terreno donde abunda el pánico y escasea la aritmética. Y conviene declarar un límite: **no pudimos verificar estimaciones cuantificadas del efecto de la caída de la natalidad sobre los sistemas previsionales, el mercado laboral o la demanda de vivienda y educación en la región.** Lo que sigue es la lectura de las series verificadas, no una proyección tomada de un estudio."
        },
        {
          "type": "paragraph",
          "text": "**Pensiones.** Es la consecuencia más directa y ya está descrita en estas páginas. Un sistema donde el 31% de la población en edad de trabajar cotiza y donde la población en edad de trabajar va a empezar a encogerse en veinte años no tiene un problema de diseño: tiene un problema de aritmética. Y las reformas que la región está discutiendo —Chile, Colombia— asumen implícitamente una estructura demográfica que ya no existe."
        },
        {
          "type": "paragraph",
          "text": "**Educación.** Argentina perdió el 47% de sus nacimientos en diez años. Eso significa que dentro de una década tendrá aproximadamente la mitad de los alumnos de primaria que tuvo. Es, potencialmente, la mejor noticia educativa posible: mantener el presupuesto con la mitad de los alumnos duplicaría el gasto por alumno sin agregar un peso. La salvedad importa, porque el grueso de ese presupuesto son salarios docentes: el beneficio solo aparece si se decide conservar el gasto y redirigir el ahorro de escala a calidad, en vez de recortarlo proporcionalmente, que es la respuesta previsible. Ningún ministerio de educación de la región lo está planificando."
        },
        {
          "type": "paragraph",
          "text": "**Vivienda.** La región tiene un déficit habitacional donde el 78% es cualitativo, y una demanda futura de vivienda nueva que va a caer con las cohortes. La política habitacional que construye unidades nuevas para una población que va a encogerse está resolviendo el problema de 1995."
        },
        {
          "type": "paragraph",
          "text": "**Migración.** Y esta es la consecuencia política. Una región que pierde población en edad de trabajar y que necesita cotizantes va a necesitar migrantes, en el momento exacto en que el 51,4% de sus habitantes declara que la inmigración es perjudicial y ese porcentaje llega al 80% en Perú y Ecuador."
        },
        {
          "type": "heading",
          "text": "VI. Lo que no funciona"
        },
        {
          "type": "paragraph",
          "text": "Las políticas pronatalistas son la respuesta instintiva, y hay que decir dos cosas sobre ellas."
        },
        {
          "type": "paragraph",
          "text": "La primera es que no pudimos verificar la literatura sobre su eficacia, y por lo tanto no afirmamos aquí que funcionen o que no funcionen. Es un vacío de esta nota."
        },
        {
          "type": "paragraph",
          "text": "La segunda es que, aun si funcionaran, llegarían tarde para el problema que la región tiene. Un bebé nacido por efecto de una política adoptada hoy entra al mercado laboral en 2049 y cotiza a pensiones hasta 2094. El desbalance previsional latinoamericano se materializa en los años treinta y cuarenta de este siglo."
        },
        {
          "type": "paragraph",
          "text": "Lo que sí está al alcance en ese horizonte es más modesto: **subir la tasa de cotización sobre los trabajadores que ya existen**, que es lo mismo que decir formalizar el 47% informal. Es la misma conclusión a la que llegan, por caminos distintos, las notas de esta serie sobre informalidad, sobre pensiones y sobre productividad."
        },
        {
          "type": "paragraph",
          "text": "América Latina no tiene un problema de natalidad. Tiene un problema de haber llegado a la estructura demográfica de un país rico con las instituciones de uno pobre. Eso no se arregla teniendo más hijos. Se arregla construyendo, en veinte años, lo que los países ricos construyeron en cincuenta."
        },
        {
          "type": "paragraph",
          "text": "Uruguay entierra más gente de la que bautiza desde hace seis años. Nadie en Uruguay lo ha convertido en tema de campaña."
        }
      ]
    },
    "seo": {
      "title": "El continente que envejeció antes de enriquecerse",
      "description": "Chile, 2025: menos de un hijo por mujer. Asia oriental envejeció más rápido; acá, más pobre.",
      "tldr": [
        "En 1960, una mujer latinoamericana tenía en promedio 5,87 hijos. En 2024 tiene 1,79.",
        "El nivel de reemplazo —el número necesario para que una población se mantenga estable— es 2,1. América Latina lo cruzó hacia abajo en 2014 y está por debajo de 2,0 desde 2017. Hoy la región tiene una fecundidad cuatro décimas por debajo del promedio mundial de 2,19.",
        "Según la serie del Banco Mundial, la tasa global de fecundidad chilena era de 1,14 en 2024. Según el Instituto Nacional de Estadísticas de Chile, que cuenta nacimientos en el registro civil en vez de estimarlos, en 2025 fue de 0,99: la primera vez en la historia del país que…",
        "Las dos cifras son correctas y miden cosas distintas —una es una estimación demográfica suavizada, otra un registro administrativo—, y por eso conviene decir siempre cuál se está usando. Pero con el dato del registro chileno, el país entra al grupo de las fecundidades más…"
      ],
      "faq": [
        {
          "question": "¿De qué país es «El continente que envejeció antes de enriquecerse»?",
          "answer": "La pieza está situada en América Latina. Chile tuvo en 2025 menos de un hijo por mujer. Es la primera vez en su historia y lo sitúa entre los países de menor fecundidad del planeta, con la mitad del ingreso per cápita de los países ricos de ese grupo."
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
      "country": "América Latina",
      "excerpt": "En 1960, una mujer latinoamericana tenía en promedio 5,87 hijos. En 2024 tiene 1,79.",
      "sources": "Banco Mundial, indicadores SP.DYN.TFRT.IN y SP.ADO.TFRT, consultados el 30/08/2026 · CEPAL, *Observatorio Demográfico 2025* (28/10/2025) · Instituto Nacional de Estadísticas de Chile, *Boletín Demográfico Anual Provisional de Estadísticas Vitales 2025*, difundido el 27-28/05/2026 · Ministerio de Salud de Argentina, estadísticas vitales, publicadas en enero de 2026 · DANE, estadísticas vitales preliminares 2025, publicadas el 20/03/2026 · IBGE, *Estatísticas do Registro Civil*, 10/12/2025 · Dirección Nacional de Identificación Civil e INE de Uruguay, vía cobertura del 06/01/2026 · Naciones Unidas, *World Population Prospects*, revisión 2024, vía Our World in Data · PNUD, *Informe sobre Democracia y Desarrollo 2026*, con datos de Latinobarómetro, sobre percepción de la inmigración · OIT, cobertura previsional regional.",
      "editNote": "Notas de edición. Los registros nacionales y las estimaciones de Naciones Unidas y el Banco Mundial difieren de manera significativa —Chile 0,99 frente a 1,14; Argentina 1,23 frente a 1,50— porque miden cosas distintas; en el texto se declara cuál se usa en cada caso y no se mezclan. **No se hace la comparación de velocidad de transición con Europa**, porque las series disponibles empiezan en 1950 y arrojarían un resultado falso. Las bases de 2015 para nacimientos absolutos de Argentina, Chile, Colombia y Brasil no pudieron verificarse en fuente primaria y se usan las que cada fuente reporta, con su año explícito. No se publican estimaciones cuantificadas de las consecuencias sobre pensiones, empleo, vivienda y educación, ni evidencia sobre la eficacia de las políticas pronatalistas: no pudieron verificarse y no se estiman. Una nota de prensa atribuyó a Colombia una fecundidad de 1,0 en 2025, cifra que contradice al Banco Mundial y que no se publica sin confirmación del DANE."
    }
  },
  {
    "id": "ocho-de-cada-diez",
    "title": "Ocho de cada diez",
    "summary": "Esa es la proporción de niños latinoamericanos de diez años que no puede leer y comprender un texto simple. Antes de la pandemia eran cinco de cada diez.",
    "section": {
      "id": "vida-comun",
      "label": "Vida común"
    },
    "author": {
      "name": "Crónica Politarca"
    },
    "publishedAt": "2026-08-16",
    "updatedAt": "2026-08-16",
    "readingMinutes": 8,
    "image": {
      "url": "/photos/plates/ocho-de-cada-diez.jpg",
      "alt": "Aula vacía. Vida común: la pobreza de aprendizaje que la pandemia no inventó."
    },
    "tags": [
      "educación",
      "pobreza de aprendizaje",
      "Banco Mundial"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "El Banco Mundial mide algo que llama pobreza de aprendizaje: el porcentaje de niños de diez años incapaces de leer y entender un texto breve y apropiado para su edad. No mide si van a la escuela. Mide si aprendieron a leer."
        },
        {
          "type": "paragraph",
          "text": "En América Latina y el Caribe, ese indicador era del **50,8% en 2015** y del **52,3% en 2019**. Ya era malo: uno de cada dos niños de diez años no comprendía lo que leía."
        },
        {
          "type": "paragraph",
          "text": "En la actualización de 2022, hecha junto a UNESCO y UNICEF, la cifra regional fue del **80%**."
        },
        {
          "type": "paragraph",
          "text": "Cuatro de cada cinco. La cifra global pasó del 57% al 70% en el mismo período; el sur de Asia está en 78% y África subsahariana en 89%. **América Latina, con un ingreso per cápita varias veces superior al de esas dos regiones, está más cerca de ellas que de la OCDE.**"
        },
        {
          "type": "paragraph",
          "text": "La estimación de pérdida de ingresos de por vida para la generación afectada, a nivel global, es de veintiún billones de dólares: el 17% del PIB mundial."
        },
        {
          "type": "heading",
          "text": "I. El punto de partida ya era el problema"
        },
        {
          "type": "paragraph",
          "text": "Conviene resistir la tentación de atribuirlo todo a la pandemia, porque el nivel previo era el que hacía posible el desplome."
        },
        {
          "type": "paragraph",
          "text": "Los resultados de PISA 2022 —la última aplicación publicada, difundida el 5 de diciembre de 2023— sitúan a los países latinoamericanos así, en matemáticas:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "Matemáticas",
            "Lectura",
            "Ciencias"
          ],
          "rows": [
            [
              "**Promedio OCDE**",
              "**472**",
              "**476**",
              "**485**"
            ],
            [
              "Chile",
              "412",
              "448",
              "444"
            ],
            [
              "Uruguay",
              "409",
              "430",
              "435"
            ],
            [
              "México",
              "395",
              "415",
              "410"
            ],
            [
              "Perú",
              "391",
              "408",
              "408"
            ],
            [
              "Costa Rica",
              "385",
              "415",
              "411"
            ],
            [
              "Colombia",
              "383",
              "409",
              "411"
            ],
            [
              "Brasil",
              "379",
              "410",
              "403"
            ],
            [
              "Argentina",
              "378",
              "401",
              "406"
            ],
            [
              "Panamá",
              "357",
              "392",
              "388"
            ],
            [
              "Guatemala",
              "344",
              "374",
              "373"
            ],
            [
              "El Salvador",
              "343",
              "365",
              "373"
            ],
            [
              "Rep. Dominicana",
              "339",
              "351",
              "360"
            ],
            [
              "Paraguay",
              "338",
              "373",
              "368"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "**El mejor país de América Latina está sesenta puntos por debajo del promedio de la OCDE en matemáticas.** En la escala de PISA, esa distancia equivale aproximadamente a varios años de escolaridad. Y ese mejor país, Chile, es también el que más gasta en educación privada de la región."
        },
        {
          "type": "paragraph",
          "text": "Un lector atento notará una advertencia necesaria: la tabla de resultados de PISA que circula en algunas fuentes de consulta rápida asigna a Chile 453 en matemáticas. **Esa cifra es incorrecta.** Los valores publicados aquí son los de la OCDE."
        },
        {
          "type": "heading",
          "text": "II. La otra mitad: los que ni siquiera están"
        },
        {
          "type": "paragraph",
          "text": "El indicador de aprendizaje mide a los que están en el aula. El otro problema es cuántos se van."
        },
        {
          "type": "paragraph",
          "text": "Tasas de finalización de secundaria baja, dato más reciente por país:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "%",
            "Año"
          ],
          "rows": [
            [
              "Argentina",
              "95,0",
              "2023"
            ],
            [
              "Ecuador",
              "90,5",
              "2023"
            ],
            [
              "Bolivia",
              "88,5",
              "2024"
            ],
            [
              "México",
              "86,6",
              "2024"
            ],
            [
              "Colombia",
              "83,0",
              "2022"
            ],
            [
              "Uruguay",
              "77,9",
              "2023"
            ],
            [
              "Paraguay",
              "75,5",
              "2024"
            ],
            [
              "El Salvador",
              "72,7",
              "2024"
            ],
            [
              "**Costa Rica**",
              "**61,4**",
              "2024"
            ],
            [
              "**Guatemala**",
              "**49,3**",
              "2024"
            ],
            [
              "**Honduras**",
              "**36,6**",
              "2024"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Honduras: **poco más de un tercio de sus adolescentes completa la secundaria baja**. Guatemala, menos de la mitad. El dato de Costa Rica —61,4%— contrasta tanto con su desempeño en otros indicadores sociales que conviene contrastarlo con el ministerio antes de darlo por bueno."
        },
        {
          "type": "paragraph",
          "text": "Y luego están los que quedan fuera de todo. La proporción de jóvenes de quince a veinticuatro años que **no estudia ni trabaja**:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "Total",
            "Mujeres",
            "Hombres",
            "Brecha"
          ],
          "rows": [
            [
              "Honduras (2025)",
              "29,0",
              "**41,3**",
              "15,8",
              "**+25,5**"
            ],
            [
              "Guatemala (2024)",
              "24,0",
              "**35,8**",
              "9,2",
              "**+26,6**"
            ],
            [
              "Rep. Dominicana (2025)",
              "24,7",
              "29,5",
              "19,9",
              "+9,6"
            ],
            [
              "Perú (2022)",
              "22,8",
              "25,8",
              "19,9",
              "+5,9"
            ],
            [
              "Colombia (2025)",
              "22,0",
              "29,1",
              "15,0",
              "+14,1"
            ],
            [
              "Brasil (2025)",
              "18,7",
              "22,9",
              "14,6",
              "+8,3"
            ],
            [
              "México (2025)",
              "16,2",
              "23,6",
              "8,7",
              "+14,9"
            ],
            [
              "Argentina (2025)",
              "15,2",
              "17,4",
              "13,2",
              "+4,2"
            ],
            [
              "Chile (2025)",
              "13,4",
              "14,4",
              "12,5",
              "+1,9"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "La brecha de género es sistemática: **en todos los países medidos, sin excepción, la proporción de mujeres jóvenes fuera del estudio y del trabajo supera a la de hombres**. En Guatemala la diferencia es de **26,6 puntos**; en Honduras, 25,5."
        },
        {
          "type": "paragraph",
          "text": "En Guatemala, una de cada tres mujeres jóvenes no estudia ni trabaja, contra uno de cada once hombres. La explicación es conocida y no está en las estadísticas educativas: es trabajo de cuidado no remunerado. Pero eso también significa que la política que más aumentaría la matrícula y el empleo femenino joven en Centroamérica no es educativa. Es de guarderías."
        },
        {
          "type": "heading",
          "text": "III. El dinero no es la variable"
        },
        {
          "type": "paragraph",
          "text": "Aquí es donde el análisis suele equivocarse, en las dos direcciones."
        },
        {
          "type": "paragraph",
          "text": "Gasto público en educación como porcentaje del PIB, dato reciente: **Bolivia 7,5%; Brasil 5,6%; Colombia 5,3%; Costa Rica 5,3%; promedio OCDE 5,1%; Argentina 5,0%; Chile 4,9%; Uruguay 4,8%; Perú 4,4%; México 4,1%; promedio de América Latina 3,8%; Guatemala 3,1%; Panamá 2,5%.**"
        },
        {
          "type": "paragraph",
          "text": "Bolivia, Brasil, Colombia y Costa Rica gastan en educación **más que el promedio de la OCDE** medido contra el tamaño de su economía. De los que rinden PISA —Bolivia no participa—, sus resultados en matemáticas están entre ochenta y noventa y tres puntos por debajo del promedio de la OCDE."
        },
        {
          "type": "paragraph",
          "text": "Medido por alumno, el cuadro cambia y explica por qué: el gasto por estudiante de primaria en América Latina equivalía al 15,2% del PIB per cápita, frente al 20,3% en la OCDE. Como el PIB per cápita regional es una fracción del de la OCDE, el gasto absoluto por alumno es varias veces menor."
        },
        {
          "type": "paragraph",
          "text": "Es decir: cuatro países de la región hacen un esfuerzo fiscal mayor que el de la OCDE y compran mucho menos educación con él, porque son más pobres y porque tienen más niños por adulto que paga impuestos. El promedio regional, 3,8% del PIB, está un cuarto por debajo del de la OCDE."
        },
        {
          "type": "paragraph",
          "text": "Lo cual lleva a la observación más importante de esta nota, y conecta con la anterior de esta serie. **Argentina perdió el 47% de sus nacimientos en diez años.** Dentro de una década tendrá aproximadamente la mitad de los alumnos de primaria que tuvo. Si se mantiene el presupuesto, el gasto por alumno se duplica sin agregar un peso —siempre que la decisión sea conservarlo y redirigir el ahorro de escala a calidad, y no recortarlo proporcionalmente, que es la respuesta previsible—. El caso chileno es distinto: su caída de nacimientos se repartió a lo largo de treinta y dos años y su matrícula de primaria ya absorbió la mayor parte del descenso."
        },
        {
          "type": "paragraph",
          "text": "Es la única ventana de mejora educativa gratuita que América Latina va a tener en un siglo, y se abre en aproximadamente diez años. Ningún ministerio de educación de la región está planificando para ella. La respuesta previsible, cuando llegue el momento, será cerrar escuelas y recortar presupuesto proporcionalmente, que es la decisión aritméticamente neutra y educativamente peor."
        },
        {
          "type": "heading",
          "text": "IV. Lo que no sabemos, y es mucho"
        },
        {
          "type": "paragraph",
          "text": "Este medio tiene que declarar aquí un conjunto de vacíos que son grandes y que dicen algo por sí mismos."
        },
        {
          "type": "paragraph",
          "text": "**No pudimos verificar cuántos años de aprendizaje perdió la región por la pandemia**, ni si se han recuperado. El informe conjunto del Banco Mundial, UNICEF y UNESCO existe —se llama *Dos años después: salvando a una generación*, es de junio de 2022 y se describe como la primera evaluación basada en evidencia de la catástrofe educativa latinoamericana— pero sus cifras están en un documento cuyo contenido no pudimos extraer."
        },
        {
          "type": "paragraph",
          "text": "**No pudimos verificar el porcentaje de estudiantes latinoamericanos que no alcanza el nivel básico de competencia en PISA.** La OCDE bloqueó el acceso automatizado a sus notas por país."
        },
        {
          "type": "paragraph",
          "text": "**No pudimos confirmar la fecha de publicación de PISA 2025.** El ciclo trienal sugeriría diciembre de 2026, pero eso es inferencia, no dato."
        },
        {
          "type": "paragraph",
          "text": "**No pudimos documentar el caso de Sobral**, en el estado brasileño de Ceará, que es el ejemplo más citado de mejora educativa medible en América Latina y el que cualquier discusión seria sobre política educativa regional debería incluir. No tenemos evidencia verificable sobre qué hizo ni sobre cuánto mejoró, y por eso no lo describimos."
        },
        {
          "type": "paragraph",
          "text": "Que el caso de éxito educativo más importante de la región sea difícil de documentar con fuentes primarias accesibles es, en sí mismo, parte del problema. Lo que no se documenta no se replica."
        },
        {
          "type": "heading",
          "text": "V. La conexión que nadie hace"
        },
        {
          "type": "paragraph",
          "text": "Hay una última cosa, y es la que ata esta nota con casi todas las de esta serie."
        },
        {
          "type": "paragraph",
          "text": "La informalidad laboral latinoamericana ronda el 47%. El trabajo más completo sobre sus causas —el de La Porta y Shleifer— encontró que **el 7% de los gerentes de firmas informales tiene título universitario, contra el 76% en las formales**, y concluyó que esas firmas \"son demasiado ineficientes para sobrevivir en el sector formal\"."
        },
        {
          "type": "paragraph",
          "text": "La productividad laboral de la región equivale al 26% de la estadounidense."
        },
        {
          "type": "paragraph",
          "text": "El gasto en investigación y desarrollo es del 0,68% del PIB, contra el 2,93% de la OCDE."
        },
        {
          "type": "paragraph",
          "text": "Y ocho de cada diez niños de diez años no comprenden lo que leen."
        },
        {
          "type": "paragraph",
          "text": "Los cuatro datos describen el mismo problema en cuatro momentos de una vida, y la hipótesis de que están encadenados es plausible —aunque no la hemos visto medida para la región—. Un niño que a los diez años no comprende un texto es menos probable que llegue a la universidad, que dirija una empresa formal, que investigue o que exporte. Si la cadena existe, la informalidad de 2045 se está decidiendo hoy en un aula de tercero básico."
        },
        {
          "type": "paragraph",
          "text": "Ninguna reforma tributaria, ninguna ley de empleo y ningún régimen de incentivos a la inversión toca eso. Y todos maduran antes que la única política que sí lo tocaría, que es la razón por la que ningún gobierno de la región la prioriza."
        },
        {
          "type": "paragraph",
          "text": "América Latina lleva treinta años discutiendo cómo crecer. La respuesta lleva el mismo tiempo sentada en una sala de clases, sin entender el enunciado."
        }
      ]
    },
    "seo": {
      "title": "Ocho de cada diez",
      "description": "Niños de diez años que no comprenden un texto simple. Antes de la pandemia eran cinco.",
      "tldr": [
        "El Banco Mundial mide algo que llama pobreza de aprendizaje: el porcentaje de niños de diez años incapaces de leer y entender un texto breve y apropiado para su edad. No mide si van a la escuela. Mide si aprendieron a leer.",
        "En América Latina y el Caribe, ese indicador era del 50,8% en 2015 y del 52,3% en 2019. Ya era malo: uno de cada dos niños de diez años no comprendía lo que leía.",
        "En la actualización de 2022, hecha junto a UNESCO y UNICEF, la cifra regional fue del 80%.",
        "Cuatro de cada cinco. La cifra global pasó del 57% al 70% en el mismo período; el sur de Asia está en 78% y África subsahariana en 89%. América Latina, con un ingreso per cápita varias veces superior al de esas dos regiones, está más cerca de ellas que de la OCDE."
      ],
      "faq": [
        {
          "question": "¿De qué país es «Ocho de cada diez»?",
          "answer": "La pieza está situada en América Latina. Esa es la proporción de niños latinoamericanos de diez años que no puede leer y comprender un texto simple. Antes de la pandemia eran cinco de cada diez."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "pieza",
      "rubric": "Vida común",
      "country": "América Latina",
      "excerpt": "El Banco Mundial mide algo que llama pobreza de aprendizaje: el porcentaje de niños de diez años incapaces de leer y entender un texto breve y apropiado para su edad. No mide si van a la escuela. Mide si aprendieron a…",
      "sources": "Banco Mundial, UNESCO y UNICEF, *The State of Global Learning Poverty: 2022 Update* (23/06/2022), y Banco Mundial, indicador SE.LPV.PRIM · OCDE, *PISA 2022 Results*, publicado el 5/12/2023, vía Our World in Data · Banco Mundial, indicadores SE.SEC.CMPT.LO.ZS, SL.UEM.NEET.ZS, SE.XPD.PRIM.PC.ZS y SE.XPD.TOTL.GD.ZS, consultados el 30/08/2026 · La Porta y Shleifer, \"Informality and Development\", *Journal of Economic Perspectives* 28(3), 2014 · BID, informe sobre productividad laboral y mercados de trabajo (3/08/2026) · Ministerio de Salud de Argentina e INE de Chile, estadísticas vitales.",
      "editNote": "Vacíos declarados. No se publican estimaciones de años de aprendizaje perdidos por la pandemia ni evidencia de recuperación posterior, porque las cifras del informe de referencia no pudieron extraerse. No se publica el porcentaje de estudiantes bajo el nivel básico de competencia en PISA. No se afirma la fecha de publicación de PISA 2025. No se describe el caso de Sobral por falta de evidencia verificable, pese a ser el ejemplo de mejora más citado de la región. Los datos de salarios docentes, formación y selección de profesores tampoco pudieron verificarse. La cifra de finalización de secundaria de Chile (102,3%) supera el 100% por matrícula de sobreedad, y la de Costa Rica (61,4%) contrasta con sus demás indicadores y debería contrastarse con el ministerio antes de publicarse."
    }
  },
  {
    "id": "ciento-cincuenta-y-tres-horas",
    "title": "Ciento cincuenta y tres horas",
    "summary": "Es lo que pierde al año un conductor limeño en hora punta. Casi cuatro semanas laborales, sentado, sin moverse.",
    "section": {
      "id": "vida-comun",
      "label": "Vida común"
    },
    "author": {
      "name": "Crónica Politarca"
    },
    "publishedAt": "2026-08-15",
    "updatedAt": "2026-08-15",
    "readingMinutes": 8,
    "image": {
      "url": "/photos/plates/ciento-cincuenta-y-tres-horas.jpg",
      "alt": "Autopista limeña. Vida común: el tiempo que se queda sentado, sin moverse."
    },
    "tags": [
      "Lima",
      "transporte",
      "congestionamiento",
      "Perú"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "El índice de tráfico de TomTom mide 922 ciudades del mundo. En la edición correspondiente a 2025, medido por centro urbano, la ciudad más congestionada del planeta es **Ciudad de México**: un 75,9% de congestión y una velocidad media de **17,4 kilómetros por hora**."
        },
        {
          "type": "paragraph",
          "text": "Diecisiete kilómetros por hora es, aproximadamente, la velocidad de un caballo al trote. Es también, con bastante precisión, la velocidad a la que se movían los coches de caballos en Londres a fines del siglo XIX."
        },
        {
          "type": "paragraph",
          "text": "El cuadro latinoamericano completo:"
        },
        {
          "type": "table",
          "head": [
            "Puesto mundial",
            "Ciudad",
            "Congestión",
            "Velocidad media",
            "**Horas perdidas al año**"
          ],
          "rows": [
            [
              "**1**",
              "**Ciudad de México**",
              "75,9%",
              "17,4 km/h",
              "**144 h**"
            ],
            [
              "**7**",
              "**Bogotá**",
              "69,6%",
              "18,9 km/h",
              "**120 h**"
            ],
            [
              "**9**",
              "**Lima**",
              "69,3%",
              "17,2 km/h",
              "**153 h**"
            ],
            [
              "11",
              "Medellín",
              "66,9%",
              "20,7 km/h",
              "120 h"
            ],
            [
              "13",
              "Cali",
              "65,6%",
              "20,6 km/h",
              "108 h"
            ],
            [
              "17",
              "Guadalajara",
              "63,3%",
              "21,2 km/h",
              "99 h"
            ],
            [
              "**34**",
              "**São Paulo**",
              "58,5%",
              "21,7 km/h",
              "**104 h**"
            ],
            [
              "**37**",
              "**Río de Janeiro**",
              "57,8%",
              "27,9 km/h",
              "**72 h**"
            ],
            [
              "57",
              "Curitiba",
              "54,0%",
              "20,7 km/h",
              "106 h"
            ],
            [
              "**69**",
              "**Santiago**",
              "52,4%",
              "25,1 km/h",
              "**98 h**"
            ],
            [
              "**108**",
              "**Gran Buenos Aires**",
              "48,1%",
              "19,0 km/h",
              "**99 h**"
            ],
            [
              "263",
              "Montevideo",
              "37,8%",
              "21,3 km/h",
              "66 h"
            ],
            [
              "334",
              "Brasilia",
              "34,4%",
              "36,0 km/h",
              "46 h"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Tres datos merecen subrayarse."
        },
        {
          "type": "paragraph",
          "text": "**Lima pierde más horas que Ciudad de México** —153 contra 144— pese a estar ocho puestos por debajo en congestión. Es el récord regional y probablemente uno de los peores del mundo."
        },
        {
          "type": "paragraph",
          "text": "**Bogotá es la ciudad latinoamericana que más empeoró**: subió 7,7 puntos porcentuales de congestión en un año, el mayor deterioro de la muestra regional. Ciudad de México, en cambio, mejoró 3,6 puntos."
        },
        {
          "type": "paragraph",
          "text": "Y **Brasilia**, la única ciudad grande de la región diseñada desde cero para el automóvil, circula a 36 km/h y pierde 46 horas al año. Es el doble de rápida que Ciudad de México y pierde un tercio de sus horas. Lo cual dice algo sobre planificación urbana, y también algo sobre lo que cuesta —en suelo, en distancia y en soledad— comprarla."
        },
        {
          "type": "heading",
          "text": "I. Lo que significan 153 horas"
        },
        {
          "type": "paragraph",
          "text": "Ciento cincuenta y tres horas al año en hora punta equivalen, a jornada de cuarenta horas semanales, a **casi cuatro semanas laborales completas**. Un mes de trabajo al año, sentado en un vehículo detenido."
        },
        {
          "type": "paragraph",
          "text": "Y esa cifra es solo el exceso: el tiempo perdido *por encima* de lo que tomaría el mismo trayecto sin congestión. El viaje base va aparte."
        },
        {
          "type": "paragraph",
          "text": "Multiplicado por los millones de personas que se desplazan diariamente en Lima, Bogotá o Ciudad de México, es la mayor transferencia invisible de la economía latinoamericana: horas de vida que no se cambian por dinero, ni por descanso, ni por cuidado de nadie. Se evaporan."
        },
        {
          "type": "paragraph",
          "text": "Aquí este medio debe declarar un límite importante: **no pudimos verificar el costo económico de la congestión como porcentaje del PIB para ninguna ciudad o país latinoamericano.** Es un cálculo que se hace en Europa y Estados Unidos con regularidad y que en la región no está disponible en fuente accesible. Tampoco pudimos obtener tiempos de traslado puerta a puerta —que incluirían el transporte público y la caminata, es decir, la experiencia de la mayoría— ni datos de reparto modal para ninguna ciudad de la región."
        },
        {
          "type": "paragraph",
          "text": "Lo que hay son datos de automóvil. La mayoría de los latinoamericanos que pierde esas horas no las pierde en un auto."
        },
        {
          "type": "heading",
          "text": "II. No son los autos"
        },
        {
          "type": "paragraph",
          "text": "La explicación intuitiva de la congestión es que hay demasiados vehículos. Los datos disponibles no la sostienen, y conviene mirarlos aunque estén desactualizados."
        },
        {
          "type": "paragraph",
          "text": "Vehículos registrados por cada mil habitantes —serie de la Organización Mundial de la Salud, con datos de 2015 a 2017 e incluyendo motocicletas:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "Vehículos por 1.000 hab."
          ],
          "rows": [
            [
              "Italia",
              "869"
            ],
            [
              "**Estados Unidos**",
              "**863**"
            ],
            [
              "España",
              "707"
            ],
            [
              "Uruguay",
              "693"
            ],
            [
              "Alemania",
              "684"
            ],
            [
              "Reino Unido",
              "583"
            ],
            [
              "**Argentina**",
              "**493**"
            ],
            [
              "**Brasil**",
              "**462**"
            ],
            [
              "**México**",
              "**332**"
            ],
            [
              "Colombia",
              "280"
            ],
            [
              "**Chile**",
              "**272**"
            ],
            [
              "Perú",
              "182"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "**Perú tiene 182 vehículos por cada mil habitantes. Estados Unidos tiene 863.** Y Lima pierde 153 horas al año contra las que pierde una ciudad estadounidense media."
        },
        {
          "type": "paragraph",
          "text": "México tiene 332 vehículos por mil habitantes, algo más de un tercio de la tasa estadounidense, y su capital es la ciudad más congestionada del mundo."
        },
        {
          "type": "paragraph",
          "text": "La serie es vieja e irregular —el dato de Uruguay incluye motocicletas y no es directamente comparable con el estadounidense—, y por eso no se debe usar para afirmaciones finas. Pero la magnitud del contraste sobrevive a cualquier corrección razonable: **América Latina se congestiona con una fracción de los autos que tienen los países ricos.**"
        },
        {
          "type": "paragraph",
          "text": "Si no son los autos, es lo demás: la red vial, la señalización, la ausencia de transporte público de alta capacidad, la informalidad del transporte —miles de unidades pequeñas compitiendo por pasajero en la misma calzada—, la expansión urbana que aleja la vivienda del empleo, y la inexistencia de gestión de demanda."
        },
        {
          "type": "heading",
          "text": "III. La otra cuenta, que es de vidas"
        },
        {
          "type": "paragraph",
          "text": "Hay un segundo indicador que casi nunca se pone al lado del primero, y que debería."
        },
        {
          "type": "paragraph",
          "text": "Muertes por accidentes de tránsito por cada cien mil habitantes, datos de 2019, la última serie comparable disponible:"
        },
        {
          "type": "table",
          "head": [
            "Región",
            "Muertes por 100.000"
          ],
          "rows": [
            [
              "**América Latina y el Caribe**",
              "**17,3**"
            ],
            [
              "**Mundo**",
              "**16,7**"
            ],
            [
              "Norteamérica",
              "11,9"
            ],
            [
              "OCDE",
              "8,2"
            ],
            [
              "**Unión Europea**",
              "**5,6**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "**América Latina mata en sus calles a más gente, en proporción a su población, que el promedio mundial. Y más del triple que la Unión Europea.**"
        },
        {
          "type": "paragraph",
          "text": "Por país: República Dominicana **64,6** —casi cuatro veces la media regional y un caso extremo mundial—; Guatemala 22,9; Bolivia 21,1; Ecuador 20,1; Brasil 16,0; Colombia 15,4; Chile 14,9; Costa Rica y Uruguay 14,8; Argentina 14,1; Panamá 13,9; Perú 13,6; México 12,8."
        },
        {
          "type": "paragraph",
          "text": "Súmese: una región con poco más de la mitad de los autos por habitante que Europa mata en sus calles al triple de gente. Eso no es un problema de volumen de tráfico. Es un problema de diseño vial, de fiscalización y de calidad del parque vehicular, y se resuelve con las tres cosas menos glamorosas de la política pública: badenes, cámaras y revisión técnica."
        },
        {
          "type": "heading",
          "text": "IV. Lo que no pudimos contar, y por qué importa"
        },
        {
          "type": "paragraph",
          "text": "Esta nota tiene un agujero grande y conviene nombrarlo, porque es exactamente donde estaría la parte esperanzadora."
        },
        {
          "type": "paragraph",
          "text": "**No pudimos verificar el desempeño actual de ninguno de los casos emblemáticos de transporte urbano latinoamericano.** Ni el TransMilenio de Bogotá —cuyo estado, satisfacción de usuarios y problemas son objeto de debate permanente—, ni el Metro de Santiago, ni el sistema de Curitiba, ni los teleféricos de Medellín y La Paz."
        },
        {
          "type": "paragraph",
          "text": "Son los cinco casos que el mundo mira cuando mira transporte latinoamericano. El sistema de buses de tránsito rápido, que Curitiba inventó y Bogotá escaló, es probablemente la mayor exportación de política pública que la región ha hecho: se replicó en decenas de ciudades de África y Asia. Los teleféricos de La Paz y Medellín son citados en toda la literatura de movilidad de ladera."
        },
        {
          "type": "paragraph",
          "text": "Y no hay, disponible en fuente accesible, evidencia actualizada sobre si funcionan."
        },
        {
          "type": "paragraph",
          "text": "Es un dato sobre la región. América Latina inventó una de las pocas soluciones de transporte urbano de alcance mundial y no mantiene una estadística pública accesible sobre cómo le está yendo."
        },
        {
          "type": "paragraph",
          "text": "Tampoco pudimos verificar qué porcentaje del transporte urbano regional es informal, cómo crecieron en superficie las ciudades latinoamericanas frente a su población, ni la literatura sobre el efecto del tiempo de traslado en el bienestar, la salud y la participación laboral femenina. Esta última ausencia es la más costosa, porque es exactamente la que conectaría este tema con el anterior: en Guatemala, una de cada tres mujeres jóvenes no estudia ni trabaja, y una parte de esa cifra es tiempo de traslado que no se puede pagar con el sueldo que se conseguiría al otro lado del viaje."
        },
        {
          "type": "heading",
          "text": "V. La política que sí está disponible"
        },
        {
          "type": "paragraph",
          "text": "Con lo verificable alcanza para decir tres cosas."
        },
        {
          "type": "paragraph",
          "text": "**La primera es que la congestión no se explica por el número de autos.** Perú tiene 182 vehículos por cada mil habitantes contra 863 de Estados Unidos, y Lima pierde 153 horas al año. Si la variable fuera la motorización, el ranking mundial tendría otro orden."
        },
        {
          "type": "paragraph",
          "text": "**La segunda es que el margen de mejora aparece en plazos cortos, y eso apunta a la gestión.** Ciudad de México mejoró 3,6 puntos de congestión en un año; Bogotá empeoró 7,7. Un año es un plazo demasiado corto para que lo explique la infraestructura, cuya construcción toma más tiempo que eso. Queda la operación: semaforización, restricción, gestión de la demanda. Cosas que se hacen con software y con voluntad de cobrar por un espacio vial escaso."
        },
        {
          "type": "paragraph",
          "text": "**Y la tercera es la que a un liberal le corresponde decir, aunque sea impopular.** El espacio vial urbano es un recurso escaso que en América Latina se asigna gratis. Un conductor que entra al centro de Bogotá en hora punta impone un costo a todos los demás y no paga nada por él. Es el manual del bien común mal asignado, y la solución que la teoría económica indica desde hace un siglo —cobrar por congestión— se aplica en Londres, Estocolmo, Singapur y Milán, y en ninguna ciudad latinoamericana."
        },
        {
          "type": "paragraph",
          "text": "Los argumentos en contra son conocidos y algunos son buenos: es regresivo si no hay alternativa de transporte público decente, y en la mayoría de las ciudades de la región no la hay. Pero la respuesta a eso no es no cobrar. Es cobrar y destinar lo recaudado a la alternativa, que es el diseño que varias de esas ciudades adoptaron."
        },
        {
          "type": "paragraph",
          "text": "Mientras tanto, un limeño pierde cuatro semanas de trabajo al año detenido en una calle que le regalaron."
        }
      ]
    },
    "seo": {
      "title": "Ciento cincuenta y tres horas",
      "description": "Perú. Un limeño pierde 153 horas al año en hora punta. No son los autos: hay 182 por mil habitantes.",
      "tldr": [
        "El índice de tráfico de TomTom mide 922 ciudades del mundo. En la edición correspondiente a 2025, medido por centro urbano, la ciudad más congestionada del planeta es Ciudad de México: un 75,9% de congestión y una velocidad media de 17,4 kilómetros por hora.",
        "Diecisiete kilómetros por hora es, aproximadamente, la velocidad de un caballo al trote. Es también, con bastante precisión, la velocidad a la que se movían los coches de caballos en Londres a fines del siglo XIX.",
        "Lima pierde más horas que Ciudad de México —153 contra 144— pese a estar ocho puestos por debajo en congestión. Es el récord regional y probablemente uno de los peores del mundo.",
        "Bogotá es la ciudad latinoamericana que más empeoró: subió 7,7 puntos porcentuales de congestión en un año, el mayor deterioro de la muestra regional. Ciudad de México, en cambio, mejoró 3,6 puntos."
      ],
      "faq": [
        {
          "question": "¿De qué país es «Ciento cincuenta y tres horas»?",
          "answer": "La pieza está situada en Perú. Es lo que pierde al año un conductor limeño en hora punta. Casi cuatro semanas laborales, sentado, sin moverse."
        },
        {
          "question": "¿Qué es Politarca?",
          "answer": "Politarca es un medio liberal de centroderecha, con base en Santiago, que reporta el poder en América Latina. Pocas piezas, con evidencia. Lema: quién manda, y qué queda."
        }
      ]
    },
    "extra": {
      "format": "pieza",
      "rubric": "Vida común",
      "country": "Perú",
      "excerpt": "El índice de tráfico de TomTom mide 922 ciudades del mundo. En la edición correspondiente a 2025, medido por centro urbano, la ciudad más congestionada del planeta es Ciudad de México: un 75,9% de congestión y una…",
      "sources": "TomTom Traffic Index, ranking de centro urbano sobre 922 ciudades, consultado el 30/08/2026 (edición identificada como 2025 en los metadatos de la página) · Banco Mundial y Organización Mundial de la Salud, indicadores SH.STA.TRAF.P5 (muertes por accidentes de tránsito, datos de 2019) y serie de vehículos registrados por cada mil habitantes vía Our World in Data (datos de 2015 a 2017) · Banco Mundial, indicador SL.UEM.NEET.ZS, para el dato de jóvenes fuera del estudio y el trabajo en Guatemala.",
      "editNote": "Vacíos declarados, y son varios. No se publican tiempos de traslado puerta a puerta para ninguna ciudad latinoamericana; las fuentes que los miden no fueron accesibles. No se publica el costo económico de la congestión como porcentaje del PIB para ninguna ciudad o país de la región: no existe en fuente accesible y no se estima. No se publican datos de reparto modal, de informalidad del transporte ni de expansión urbana frente a crecimiento poblacional. **No se describe el desempeño actual de TransMilenio, el Metro de Santiago, el sistema de Curitiba ni los teleféricos de Medellín y La Paz**, por ausencia de evidencia verificable; es la omisión más importante de esta nota. La serie de motorización es de 2015-2017, metodológicamente irregular, y se usa solo para un contraste de magnitud, no para afirmaciones precisas. El ranking de TomTom por área metropolitana ordena las ciudades de manera distinta; aquí se usa exclusivamente el de centro urbano y así se declara."
    }
  },
  {
    "id": "doce-anos-y-cuatro-meses",
    "title": "Doce años y cuatro meses",
    "summary": "Es lo que dura, en promedio, una constitución latinoamericana. En Europa occidental duran treinta y dos. Cinco países de la región intentaron refundarse en tres décadas; conviene ver qué quedó.",
    "section": {
      "id": "biblioteca",
      "label": "Biblioteca"
    },
    "author": {
      "name": "Biblioteca Politarca"
    },
    "publishedAt": "2026-08-14",
    "updatedAt": "2026-08-14",
    "readingMinutes": 11,
    "image": {
      "url": "/photos/plates/doce-anos-y-cuatro-meses.jpg",
      "alt": "Texto constitucional. El Archivo: el único proceso que duró fue el que nadie controló."
    },
    "tags": [
      "constituciones",
      "Chile",
      "Ecuador",
      "Colombia"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Zachary Elkins, Tom Ginsburg y James Melton reunieron todas las constituciones nacionales escritas desde 1789 y midieron cuánto vivieron. El resultado general es más desalentador de lo que uno esperaría: **la vida media de una constitución en el mundo es de diecisiete años**. La mediana es de ocho. La duración más frecuente es de **un año**."
        },
        {
          "type": "paragraph",
          "text": "Solo el 19% sigue vigente a los cincuenta años. Cerca del 7% no llega a su segundo cumpleaños."
        },
        {
          "type": "paragraph",
          "text": "Y luego está el desglose regional, que es el que nos ocupa:"
        },
        {
          "type": "table",
          "head": [
            "Región",
            "Vida media de una constitución"
          ],
          "rows": [
            [
              "Europa occidental",
              "**32 años**"
            ],
            [
              "Países de la OCDE",
              "32 años"
            ],
            [
              "Asia",
              "19 años"
            ],
            [
              "**América Latina**",
              "**12,4 años**"
            ],
            [
              "África",
              "10,2 años"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "**El 15% de las constituciones latinoamericanas y africanas muere en su primer año.**"
        },
        {
          "type": "paragraph",
          "text": "Hay además una tendencia temporal que rara vez se menciona: hasta la Primera Guerra Mundial, una constitución duraba en promedio veintiún años. Desde entonces, doce."
        },
        {
          "type": "paragraph",
          "text": "La República Dominicana ha tenido **treinta y nueve constituciones desde su independencia en 1844**, más que ningún otro país del mundo —aunque su propia historiografía advierte que la cifra engaña, porque el país promulga un texto entero cada vez que se ratifica una enmienda—. Venezuela promulgó en 1999 su **vigesimosexta**."
        },
        {
          "type": "paragraph",
          "text": "Sobre ese fondo, cinco países intentaron refundarse políticamente en las últimas tres décadas. Vale la pena revisar qué pasó en cada uno, con las cifras exactas."
        },
        {
          "type": "heading",
          "text": "I. Colombia, 1991: la que duró"
        },
        {
          "type": "paragraph",
          "text": "Empezó con un movimiento estudiantil llamado \"Todavía podemos salvar a Colombia\", surgido tras el asesinato de Luis Carlos Galán. En las legislativas de marzo de 1990 se depositó un voto extraoficial adicional —la **séptima papeleta**— pidiendo una asamblea constituyente. La Corte Suprema de Justicia validó más de dos millones de esos votos, argumentando que no cabía limitar al poder constituyente primario. En mayo de 1990, más del **86%** de los votantes aprobó convocarla."
        },
        {
          "type": "paragraph",
          "text": "La asamblea se eligió el 9 de diciembre de 1990. Setenta delegatarios: **veinticinco liberales, diecinueve de la Alianza Democrática M-19, once del Movimiento de Salvación Nacional, nueve conservadores**, dos de la Unión Cristiana, dos de la Unión Patriótica y dos indígenas. Se sumaron cuatro representantes de guerrillas desmovilizadas: dos del EPL con voz y voto, uno del PRT y uno del Quintín Lame sin voto."
        },
        {
          "type": "paragraph",
          "text": "Nótese la composición, porque es el hecho decisivo. **Ningún bloque tenía mayoría propia.** La presidencia fue compartida por tres personas de tres fuerzas distintas: Álvaro Gómez Hurtado del MSN, Antonio Navarro Wolff del M-19 y Horacio Serpa del Partido Liberal. Un conservador, un exguerrillero y un liberal presidiendo juntos."
        },
        {
          "type": "paragraph",
          "text": "Sesionó del 5 de febrero al 4 de julio de 1991: cinco meses."
        },
        {
          "type": "paragraph",
          "text": "La Constitución de 1991 sigue vigente treinta y cinco años después. Y ha sido reformada mucho: el exmagistrado Armando Novoa contabilizó **cincuenta y seis reformas**, \"alrededor de una reforma y media cada año durante estas tres décadas\", seis de ellas derivadas de los acuerdos de paz."
        },
        {
          "type": "paragraph",
          "text": "Es, con distancia, el proceso constituyente latinoamericano más exitoso de los últimos cincuenta años. Y su rasgo distintivo no fue el contenido sino el procedimiento: **nadie pudo imponer nada**."
        },
        {
          "type": "heading",
          "text": "II. Venezuela, 1999 y 2017: la que se comió a sí misma"
        },
        {
          "type": "paragraph",
          "text": "El referéndum consultivo del 25 de abril de 1999 aprobó convocar la asamblea con el **92,4%** de los votos. Pero la abstención fue del **62,35%**: de once millones de inscritos, votaron poco más de cuatro."
        },
        {
          "type": "paragraph",
          "text": "La elección de constituyentes del 25 de julio de 1999 produjo el resultado opuesto al colombiano. El Polo Patriótico obtuvo **121 de los 128 escaños de elección directa con el 65,8% de los votos**. COPEI, uno de los dos partidos que habían gobernado Venezuela durante cuarenta años, obtuvo **cero**. Acción Democrática, uno. La participación fue del 46,2%."
        },
        {
          "type": "paragraph",
          "text": "Un 65% de los votos convertido en un 95% de los escaños. Esa desproporción, producto del sistema electoral elegido, es la diferencia técnica entre Bogotá 1991 y Caracas 1999, y explica casi todo lo demás."
        },
        {
          "type": "paragraph",
          "text": "La Constitución se aprobó por referéndum el 15 de diciembre de 1999 con el **71,78%** a favor y una abstención del 55,63%."
        },
        {
          "type": "paragraph",
          "text": "Dieciocho años después, el 1 de mayo de 2017, Nicolás Maduro convocó una segunda asamblea constituyente por **decreto presidencial 2830, sin referéndum previo**. El Tribunal Supremo de Justicia lo avaló en su sentencia 378, según la cual el referéndum consultivo previo \"no era constitucionalmente necesario\"."
        },
        {
          "type": "paragraph",
          "text": "Se eligieron 545 miembros el 30 de julio de 2017. El Consejo Nacional Electoral reportó 8.089.320 votantes, un 41,53%. La oposición afirmó que votaron tres millones. **Smartmatic, la empresa que proveía el sistema de votación, declaró que las cifras oficiales superaban el conteo de su propio sistema en al menos un millón de votantes.**"
        },
        {
          "type": "paragraph",
          "text": "La asamblea se atribuyó poderes plenipotenciarios por encima de los demás poderes públicos. **Nunca presentó ni discutió una nueva Constitución.** Diosdado Cabello la disolvió el 18 de diciembre de 2020 afirmando que había cumplido \"todos sus objetivos, excepto crear una nueva Constitución\"."
        },
        {
          "type": "paragraph",
          "text": "Tres años y medio de un poder supraconstitucional que no escribió una constitución. Es la definición más limpia que existe de para qué sirve realmente una asamblea constituyente cuando quien la convoca ya tiene el poder."
        },
        {
          "type": "heading",
          "text": "III. Ecuador: dos constituciones en diez años, y un \"no\" en 2025"
        },
        {
          "type": "paragraph",
          "text": "Ecuador aprobó una constitución en 1998, redactada por una asamblea de setenta miembros —Partido Social Cristiano 22, Democracia Popular 11, Izquierda Democrática 7, Pachakutik 7— que sesionó del 20 de diciembre de 1997 al 5 de junio de 1998. Entró en vigor el 10 de agosto de 1998, **sin ratificación por referéndum**."
        },
        {
          "type": "paragraph",
          "text": "Diez años después la reemplazó. La consulta del 15 de abril de 2007 aprobó convocar una nueva asamblea con el **81,72%**. La elección del 30 de septiembre dio a Alianza PAIS \"más del 70% de los escaños\" de los 130 en juego. El texto se aprobó en Montecristi el 24 de julio de 2008 y en referéndum el 28 de septiembre con el **63,93%**."
        },
        {
          "type": "paragraph",
          "text": "La Constitución de 2008 tiene **444 artículos**, define cinco funciones del Estado —agregando la Electoral y la de Transparencia y Control Social a las tres clásicas—, consagra el *sumak kawsay* y reconoce **a la naturaleza como sujeto de derechos**."
        },
        {
          "type": "paragraph",
          "text": "Lo que le pasó después es el archivo dentro del archivo. En 2011 se enmendó por referéndum. En diciembre de 2015 se enmendó de nuevo para habilitar la **reelección presidencial indefinida**; la Corte Constitucional **invalidó esas enmiendas el 1 de agosto de 2018** por vicios de procedimiento. En febrero de 2018 un referéndum eliminó la reelección indefinida y restableció sanciones por corrupción."
        },
        {
          "type": "paragraph",
          "text": "Y el 16 de noviembre de 2025, Ecuador votó sobre convocar una nueva asamblea constituyente. **El \"No\" ganó con el 61,8% contra 38,2%**, con una participación del **80,27%** —11.186.380 votantes—. El \"No\" ganó en las cuatro preguntas del referéndum. El Consejo Nacional Electoral proclamó resultados definitivos el 1 de diciembre de 2025."
        },
        {
          "type": "paragraph",
          "text": "Un país que cambió de constitución dos veces en diez años dijo que no a hacerlo una tercera, con ocho de cada diez ciudadanos votando."
        },
        {
          "type": "heading",
          "text": "IV. Bolivia, 2006-2009: el precio del reglamento"
        },
        {
          "type": "paragraph",
          "text": "La asamblea boliviana se eligió el 2 de julio de 2006: 255 constituyentes, de los cuales el MAS obtuvo **137**. Mayoría absoluta, pero **sin los dos tercios** que el reglamento exigía para aprobar el texto."
        },
        {
          "type": "paragraph",
          "text": "Ese detalle procedimental costó tres años y tres muertos."
        },
        {
          "type": "paragraph",
          "text": "La asamblea se instaló en Sucre el 6 de agosto de 2006. **Transcurrieron nueve meses antes de que se redactara el primer artículo.** En noviembre de 2007 las sesiones se trasladaron al Liceo Militar de La Glorieta; entre el 23 y el 25 de ese mes, los enfrentamientos en torno a esas sesiones dejaron **tres muertos y cerca de trescientos heridos**."
        },
        {
          "type": "paragraph",
          "text": "El texto se aprobó finalmente en Oruro el 26 de diciembre de 2007 con 164 votos de 255."
        },
        {
          "type": "paragraph",
          "text": "El referéndum del 25 de enero de 2009 lo aprobó con el **61,43%** y una participación del **90,26%**: la mayor de la historia electoral boliviana. La Constitución define a Bolivia como Estado Unitario Social de Derecho Plurinacional Comunitario, tiene 411 artículos, reconoce autonomías indígenas y sitúa a la justicia indígena originaria campesina en igualdad jerárquica con la ordinaria."
        },
        {
          "type": "heading",
          "text": "V. Chile, 2020-2023: el país que dijo que no dos veces"
        },
        {
          "type": "paragraph",
          "text": "El caso chileno es el más reciente y el más instructivo, porque tiene dos finales."
        },
        {
          "type": "paragraph",
          "text": "**Plebiscito de entrada, 25 de octubre de 2020.** El \"Apruebo\" ganó con el **78,27%**, y la opción de Convención Constitucional —enteramente electa— sobre la mixta, con el **78,99%**. Participación: 50,9% del padrón, con voto voluntario."
        },
        {
          "type": "paragraph",
          "text": "**Elección de la Convención, 15 y 16 de mayo de 2021.** Ciento cincuenta y cinco miembros, con paridad de género obligatoria y **diecisiete escaños reservados para diez pueblos indígenas**. Vamos por Chile, la derecha, obtuvo **37 escaños con el 20,56%**. Apruebo Dignidad, 28. La Lista del Pueblo, 26. La Lista del Apruebo, 25. Independientes por una Nueva Constitución, 11, más once independientes fuera de lista."
        },
        {
          "type": "paragraph",
          "text": "**Plebiscito de salida, 4 de septiembre de 2022.** El \"Rechazo\" ganó con el **61,86%** —7.882.238 votos— contra el 38,14% del \"Apruebo\" —4.859.039—. Participación: **85,7%**, con voto obligatorio reinstaurado."
        },
        {
          "type": "paragraph",
          "text": "Nótese la distancia. El mismo país que en 2020 aprobó redactar una nueva constitución con el 78% la rechazó en 2022 con el 62%. Entre una votación y otra no cambió el país: cambió quién estaba obligado a votar, y cambió el texto que había sobre la mesa."
        },
        {
          "type": "paragraph",
          "text": "**Segundo intento.** El Consejo Constitucional se eligió el 7 de mayo de 2023: cincuenta escaños más uno supranumerario de pueblos originarios. El **Partido Republicano obtuvo 23 escaños**; Unidad para Chile, 16; Chile Seguro, 11; Todo por Chile y el Partido de la Gente, cero cada uno. Los votos nulos y blancos sumaron el **16,98%**."
        },
        {
          "type": "paragraph",
          "text": "**Plebiscito del 17 de diciembre de 2023.** El \"En contra\" ganó con el **55,76%** —6.894.287 votos— contra el 44,24% del \"A favor\" —5.470.025—."
        },
        {
          "type": "paragraph",
          "text": "Chile rechazó, con quince meses de diferencia, dos textos constitucionales escritos por convenciones dominadas por fuerzas opuestas. El primero por la izquierda, el segundo por la derecha. Los dos por márgenes de dos dígitos."
        },
        {
          "type": "heading",
          "text": "VI. Lo que el archivo sugiere, y lo que no podemos afirmar"
        },
        {
          "type": "paragraph",
          "text": "Aquí hay que ser honesto sobre un límite. **No pudimos reunir un solo estudio empírico sobre si los procesos constituyentes resuelven las crisis políticas o las prolongan.** La literatura existe —los propios Elkins, Ginsburg y Melton trabajaron sobre determinantes de durabilidad, y hay una tradición sobre reemplazo constitucional en América Latina— pero no la verificamos, y no citamos autores ni hallazgos que no hayamos comprobado."
        },
        {
          "type": "paragraph",
          "text": "Lo que sí permite decir el archivo, con las cifras verificadas, es un patrón."
        },
        {
          "type": "paragraph",
          "text": "Primero, una precisión contra la tentación de encontrar una regla: **de los cinco procesos, tres textos siguen vigentes.** Colombia lleva treinta y cinco años, Ecuador dieciocho y Bolivia diecisiete. Con cinco casos no hay patrón estadístico; hay una observación, y conviene enunciarla como tal."
        },
        {
          "type": "paragraph",
          "text": "La observación es esta. **Lo que distingue al proceso colombiano no es que su texto sobreviviera, sino que nadie impugnó su legitimidad de origen.** Los liberales tuvieron 25 escaños de 70; la presidencia fue compartida entre un conservador, un exguerrillero y un liberal; ninguna fuerza pudo imponer nada. Treinta y cinco años y cincuenta y seis reformas después, la Constitución de 1991 se reforma pero no se discute."
        },
        {
          "type": "paragraph",
          "text": "**Los procesos con supermayoría produjeron textos vigentes pero permanentemente en disputa.** Venezuela 1999: 95% de los escaños para una fuerza; la constitución resultante fue enmendada, interpretada y finalmente sobrepasada por una segunda asamblea que no escribió nada. Ecuador 2008: más del 70% de los escaños; el texto sigue en pie, pero fue enmendado, con enmiendas anuladas por la Corte y otras revertidas por referéndum. Chile 2021 y 2023: cada convención dominada por un lado; los dos textos rechazados antes de nacer."
        },
        {
          "type": "paragraph",
          "text": "**Y hay un dato reciente que va contra la intuición de buena parte de la clase dirigente.** Ecuador votó en noviembre de 2025 contra convocar una nueva asamblea, con el 61,8% y una participación del 80%. Chile rechazó dos textos, con quince meses de diferencia y desde orillas opuestas. En los tres casos más recientes, la ciudadanía dijo que no."
        },
        {
          "type": "paragraph",
          "text": "Son dos países y tres votaciones: no alcanza para afirmar que la refundación constitucional dejó de ser popular en América Latina. Alcanza para decir algo más acotado y más útil: **los dos electorados de la región que vivieron un proceso constituyente en los últimos cinco años votaron contra repetirlo**, uno de ellos dos veces."
        },
        {
          "type": "paragraph",
          "text": "Doce años y cuatro meses. Es lo que dura, en promedio, una constitución latinoamericana. La de Colombia lleva treinta y cinco, y se escribió en cinco meses por gente que no podía imponerle nada a nadie."
        }
      ]
    },
    "seo": {
      "title": "Doce años y cuatro meses",
      "description": "Lo que dura, en promedio, una constitución latinoamericana. En Europa occidental, treinta y dos.",
      "tldr": [
        "Zachary Elkins, Tom Ginsburg y James Melton reunieron todas las constituciones nacionales escritas desde 1789 y midieron cuánto vivieron. El resultado general es más desalentador de lo que uno esperaría: la vida media de una constitución en el mundo es de diecisiete años. La…",
        "Solo el 19% sigue vigente a los cincuenta años. Cerca del 7% no llega a su segundo cumpleaños.",
        "El 15% de las constituciones latinoamericanas y africanas muere en su primer año.",
        "Hay además una tendencia temporal que rara vez se menciona: hasta la Primera Guerra Mundial, una constitución duraba en promedio veintiún años. Desde entonces, doce."
      ],
      "faq": [
        {
          "question": "¿De qué país es «Doce años y cuatro meses»?",
          "answer": "La pieza está situada en América Latina. Es lo que dura, en promedio, una constitución latinoamericana. En Europa occidental duran treinta y dos. Cinco países de la región intentaron refundarse en tres décadas; conviene ver qué quedó."
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
      "country": "América Latina",
      "excerpt": "Zachary Elkins, Tom Ginsburg y James Melton reunieron todas las constituciones nacionales escritas desde 1789 y midieron cuánto vivieron. El resultado general es más desalentador de lo que uno esperaría: la vida media…",
      "sources": "Elkins, Ginsburg y Melton, Comparative Constitutions Project, \"The Lifespan of Written Constitutions\", University of Chicago Law School · Enciclopedia Banrepcultural sobre la Asamblea Nacional Constituyente de Colombia de 1991; El Nuevo Siglo (19/03/2021) con declaraciones del exmagistrado Armando Novoa sobre el número de reformas · Consejo Nacional Electoral de Venezuela y registros de los referendos de abril y diciembre de 1999 y de la elección constituyente de julio de 1999; decreto presidencial 2830 y sentencia 378 del TSJ sobre la ANC de 2017; declaración de Smartmatic sobre el conteo del 30/07/2017 · Registros de las asambleas constituyentes de Ecuador de 1997-98 y 2007-08 y de la Constitución de 2008; Corte Constitucional del Ecuador, invalidación de las enmiendas de 2015 el 1/08/2018 · Lexis Ecuador y Primicias sobre el referéndum del 16/11/2025 y la proclamación del CNE del 1/12/2025 · Registros de la Asamblea Constituyente de Bolivia de 2006 y de la Constitución de 2009 · Biblioteca del Congreso Nacional de Chile: resultados oficiales de los plebiscitos del 25/10/2020, 4/09/2022 y 17/12/2023; Servel y registros de las elecciones de convencionales de 2021 y de consejeros de 2023.",
      "editNote": "Notas de edición. La composición de la Constituyente colombiana de 1991 se toma de Banrepcultural y **no** de otras fuentes de consulta rápida, cuyo desglose suma ochenta escaños sobre setenta. **No se publican los porcentajes por lista de la elección del Consejo Constitucional chileno de 2023**: la extracción disponible es internamente incoherente con el reparto de escaños y debe verificarse en Servel antes de usarse. No se citan estudios sobre si los procesos constituyentes resuelven o prolongan las crisis políticas, porque ninguno pudo verificarse; la lectura de patrón que ofrece el texto se apoya exclusivamente en las cifras publicadas aquí y se presenta como tal. No se construye una tabla de número histórico de constituciones por país: solo pudieron verificarse los casos de República Dominicana y Venezuela."
    }
  },
  {
    "id": "redes-nadie-lo-ha-medido",
    "title": "Todo el mundo sabe que las redes ganaron la elección. Nadie lo ha medido.",
    "summary": "La afirmación más repetida de la política latinoamericana de la última década no tiene, hasta donde pudimos verificar, un solo estudio empírico serio que la sostenga en la región. Lo que sí está medido es otra cosa, y es peor.",
    "section": {
      "id": "biblioteca",
      "label": "Biblioteca"
    },
    "author": {
      "name": "Biblioteca Politarca"
    },
    "publishedAt": "2026-08-13",
    "updatedAt": "2026-08-13",
    "readingMinutes": 9,
    "image": {
      "url": "/photos/plates/redes-nadie-lo-ha-medido.jpg",
      "alt": "Redacción con pantallas apagadas. El Ensayo: la afirmación más repetida no tiene paper."
    },
    "tags": [
      "redes sociales",
      "populismo",
      "evidencia",
      "elecciones"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Empecemos por la confesión, porque de ella depende todo lo demás."
        },
        {
          "type": "paragraph",
          "text": "Nos propusimos escribir el ensayo obvio: cómo las redes sociales reconfiguraron la política latinoamericana, con la evidencia de los casos que todos citan —Bolsonaro y WhatsApp en 2018, Milei y TikTok, la maquinaria digital de Bukele, la campaña de Rodolfo Hernández en Colombia—."
        },
        {
          "type": "paragraph",
          "text": "**No encontramos la evidencia.** Ni un estudio académico empírico que mida la relación entre uso de redes sociales y voto populista o antisistema en América Latina. Ni cifras verificables de gasto en publicidad digital o alcance de esas campañas. Ni investigación sobre el peso específico de WhatsApp en la difusión política regional, más allá de una referencia periodística de 2019 sobre Brasil."
        },
        {
          "type": "paragraph",
          "text": "Puede que exista y que no hayamos dado con ella. Pero el hecho de que no aparezca al buscarla es, en sí mismo, notable: **la explicación causal más repetida de la política latinoamericana contemporánea circula sin respaldo público accesible.**"
        },
        {
          "type": "paragraph",
          "text": "Así que este ensayo trata de otra cosa: de lo que sí está medido, que resultó ser bastante más inquietante que la hipótesis original."
        },
        {
          "type": "heading",
          "text": "I. Lo que sí sabemos, y es un cambio de era"
        },
        {
          "type": "paragraph",
          "text": "El *Digital News Report* del Reuters Institute, edición de junio de 2026, contiene un hallazgo que su autor principal formuló sin adornos: por primera vez a escala global, **las plataformas son más populares como fuente de noticias que la televisión y que los sitios y aplicaciones de medios**."
        },
        {
          "type": "paragraph",
          "text": "No \"tan populares como\". Más."
        },
        {
          "type": "paragraph",
          "text": "Y la confianza global en las noticias está en el **37%**."
        },
        {
          "type": "paragraph",
          "text": "El desglose latinoamericano es peor, y su velocidad es lo alarmante. Estos son los niveles de confianza en las noticias y su variación en un solo año:"
        },
        {
          "type": "table",
          "head": [
            "País",
            "Confianza",
            "Variación anual"
          ],
          "rows": [
            [
              "Brasil",
              "36%",
              "**−6**"
            ],
            [
              "Chile",
              "34%",
              "−2"
            ],
            [
              "Perú",
              "32%",
              "**−8**"
            ],
            [
              "México",
              "31%",
              "**−5**"
            ],
            [
              "**Argentina**",
              "**26%**",
              "**−6**"
            ],
            [
              "**Colombia**",
              "**25%**",
              "**−7**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Cinco de los seis países perdieron entre cinco y ocho puntos de confianza en un año. En Colombia y Argentina, tres de cada cuatro ciudadanos no confían en las noticias que reciben."
        },
        {
          "type": "paragraph",
          "text": "Y el desplazamiento de las fuentes está documentado país por país:"
        },
        {
          "type": "paragraph",
          "text": "**Brasil.** Las redes sociales mantienen **nueve puntos de ventaja sobre la televisión** como fuente semanal de noticias. El **33% obtiene contenido de creadores o influencers** centrados en noticias. Un 13% usa semanalmente chatbots de inteligencia artificial para informarse."
        },
        {
          "type": "paragraph",
          "text": "**México.** **Dos tercios de la población (66%) usa redes sociales para informarse.** El uso semanal de televisión para noticias cayó al **34%, casi la mitad de lo que era en 2017**."
        },
        {
          "type": "paragraph",
          "text": "**Perú.** Las redes suben cinco puntos en un año y la brecha con la televisión \"continúa ampliándose\". Entre los menores de treinta y cinco años, **las redes son la fuente principal de noticias para el 49%**."
        },
        {
          "type": "paragraph",
          "text": "**Colombia.** El **35% se informa semanalmente a través de creadores o influencers**, proporción que sube al **40% entre los 18 y los 24 años**. La televisión cae cinco puntos y la prensa impresa cuatro. El **60% declara preocupación por su capacidad de distinguir información real de falsa** en internet."
        },
        {
          "type": "paragraph",
          "text": "**Argentina.** Casi ocho de cada diez se informan en línea. Solo el **43% se declara extremada o muy interesado en las noticias**. Y hay un dato que merece atención: **Luzu TV, un canal de streaming**, es citado como fuente de noticias por el 13% de los argentinos —frente al 8% del año anterior— y por el 19% de los menores de treinta y cinco."
        },
        {
          "type": "paragraph",
          "text": "**Chile.** La prensa impresa alcanzó su nivel más bajo de consumo desde 2017. YouTube se consolidó como plataforma clave y la radio sigue siendo el medio más confiable en crisis."
        },
        {
          "type": "paragraph",
          "text": "En Brasil, el acceso a noticias en papel cayó **del 50% en 2013 al 10% en 2025**. En doce años, la prensa impresa brasileña perdió cuatro de cada cinco lectores."
        },
        {
          "type": "heading",
          "text": "II. Por qué la hipótesis obvia es más débil de lo que parece"
        },
        {
          "type": "paragraph",
          "text": "Con esos datos, la tentación es cerrar el argumento: las redes desplazaron a los medios, la confianza colapsó, y por eso ganan los outsiders."
        },
        {
          "type": "paragraph",
          "text": "Pero hay tres razones para desconfiar de ese salto."
        },
        {
          "type": "paragraph",
          "text": "**La primera es de dirección causal.** La confianza en los medios latinoamericanos venía cayendo desde antes de que las redes fueran mayoritarias, y la confianza en los partidos políticos —17% regional— y en el Congreso —24%— cayó en paralelo, sin que nadie sostenga que TikTok es responsable del desprestigio del Congreso peruano. Es igual de plausible que la gente haya abandonado los medios porque dejó de creerles, y no que haya dejado de creerles porque los abandonó."
        },
        {
          "type": "paragraph",
          "text": "**La segunda es de secuencia histórica.** América Latina eligió outsiders antifiguras del sistema mucho antes de que existieran las redes sociales. Fujimori ganó en 1990. Chávez en 1998. Collor de Mello en 1989, con televisión abierta. El fenómeno que las redes supuestamente causan es más viejo que las redes."
        },
        {
          "type": "paragraph",
          "text": "**La tercera es de aritmética.** El 33% de los brasileños y el 35% de los colombianos se informan a través de creadores de contenido. Es mucho, y es transformador para la industria de los medios. Pero significa que dos tercios no lo hacen. Ninguna elección se decide con un tercio."
        },
        {
          "type": "heading",
          "text": "III. Lo que sí cambió, y es más profundo"
        },
        {
          "type": "paragraph",
          "text": "Hay un cambio real, y no es el que se suele nombrar. No es que la gente crea mentiras. Es que **dejó de existir un lugar donde discutirlas**."
        },
        {
          "type": "paragraph",
          "text": "La función política del sistema de medios del siglo XX no era informar bien —muchas veces informaba mal—. Era producir **una versión compartida de los hechos** sobre la cual discrepar. Dos personas con ideologías opuestas veían el mismo noticiero, leían el mismo titular y peleaban sobre qué significaba. La discusión era sobre la interpretación."
        },
        {
          "type": "paragraph",
          "text": "Cuando el 60% de los colombianos declara no poder distinguir información real de falsa, y cuando el 49% de los peruanos menores de treinta y cinco se informa principalmente por redes, lo que se rompe no es la calidad de la información. Es **el sustrato común**. La discusión deja de ser sobre qué significa un hecho y pasa a ser sobre si el hecho ocurrió."
        },
        {
          "type": "paragraph",
          "text": "Y ahí sí hay una consecuencia política directa, y es la que debería preocupar a un liberal más que ninguna otra: **una democracia puede funcionar con ciudadanos que discrepan profundamente. No puede funcionar con ciudadanos que habitan hechos distintos.** El desacuerdo se negocia; la realidad paralela, no."
        },
        {
          "type": "heading",
          "text": "IV. Lo que la regulación ya intentó"
        },
        {
          "type": "paragraph",
          "text": "El único episodio regulatorio de escala en la región está bien documentado y merece contarse completo, porque fija un precedente que ningún país ha discutido en serio."
        },
        {
          "type": "paragraph",
          "text": "En 2024, Brasil bloqueó X en todo su territorio."
        },
        {
          "type": "paragraph",
          "text": "La secuencia: el 6 de abril de 2024 el ministro Alexandre de Moraes, del Supremo Tribunal Federal, ordenó suspender cuentas vinculadas a los ataques del 8 de enero de 2023 en Brasilia; el dueño de la plataforma desafió públicamente la orden. El 17 de agosto X cerró su oficina en Brasil tras amenazas de arresto contra su representante legal. El 28 de agosto venció un plazo de veinticuatro horas para designar representante sin que se cumpliera. El 30 de agosto Moraes ordenó la suspensión y estableció una **multa diaria de cincuenta mil reales —unos nueve mil dólares— para los usuarios que accedieran mediante VPN**, y congeló activos de Starlink. El bloqueo entró en vigor pasada la medianoche del 31 de agosto. El 13 de septiembre Brasil incautó 18,35 millones de reales de cuentas de X y Starlink. El 8 de octubre se levantó el bloqueo, tras el pago de las multas y la designación de representante legal."
        },
        {
          "type": "paragraph",
          "text": "Un panel de cinco jueces confirmó la medida el 2 de septiembre de 2024. La base legal fue el Marco Civil da Internet de 2014. El 10 de marzo de 2026, Moraes cerró la investigación sobre el dueño de la plataforma tras invocar el Procurador General insuficiencia de pruebas."
        },
        {
          "type": "paragraph",
          "text": "Vale la pena separar dos cosas que el debate mezcla."
        },
        {
          "type": "paragraph",
          "text": "Que un Estado exija a una plataforma extranjera cumplir sus leyes y tener representación legal en su territorio es enteramente razonable, y es lo que hace la Unión Europea. **Que un juez individual multe a los ciudadanos por usar una VPN es otra cosa completamente distinta**, y es un precedente que ningún liberal debería querer: convierte al usuario en infractor por acceder a información, que es la definición exacta de censura al lector."
        },
        {
          "type": "paragraph",
          "text": "El resto de la región no ha legislado. El proyecto brasileño sobre plataformas sigue sin convertirse en ley. México y Chile no tienen marco. Y mientras tanto, el precedente que existe en América Latina no es una ley: es una orden judicial con multa a los usuarios."
        },
        {
          "type": "heading",
          "text": "V. Lo que hay que investigar, y quién debería hacerlo"
        },
        {
          "type": "paragraph",
          "text": "Este ensayo termina donde empezó, que es en una ausencia."
        },
        {
          "type": "paragraph",
          "text": "Sabemos que las plataformas superaron a la televisión. Sabemos que la confianza en las noticias cayó entre cinco y ocho puntos en un año en cinco países. Sabemos que un tercio de brasileños y colombianos se informa por creadores de contenido, y la mitad de los peruanos jóvenes por redes. Sabemos que el 60% de los colombianos no se siente capaz de distinguir lo verdadero de lo falso."
        },
        {
          "type": "paragraph",
          "text": "**No sabemos qué efecto tiene nada de eso sobre el voto.** No en América Latina, no con evidencia pública verificable."
        },
        {
          "type": "paragraph",
          "text": "Hay una literatura internacional que sugiere que el efecto de la desinformación sobre el comportamiento electoral es considerablemente menor de lo que el sentido común supone, porque quien consume desinformación suele ya estar convencido. No la citamos porque no la verificamos. Pero su existencia debería bastar para que nadie afirme lo contrario sin datos."
        },
        {
          "type": "paragraph",
          "text": "Y esa ausencia tiene una consecuencia práctica inmediata: **se está regulando sin saber**. Brasil bloqueó una plataforma entera y multó a sus usuarios sobre la base de una teoría del daño que nadie midió. Argentina presentó sesenta y tres proyectos sobre tecnologías digitales en trece meses. Ninguno de esos textos se apoya en una estimación del efecto que pretende corregir."
        },
        {
          "type": "paragraph",
          "text": "Un medio con la posición de este debería sostener dos cosas a la vez, y aquí las sostiene."
        },
        {
          "type": "paragraph",
          "text": "La primera es que la libertad de expresión no admite jueces individuales multando a lectores, y que el reflejo regulatorio latinoamericano —resolver problemas de información con derecho penal y órdenes judiciales— es predeciblemente peor que el problema."
        },
        {
          "type": "paragraph",
          "text": "La segunda es que el diagnóstico de que \"las redes lo explican todo\" es, hasta que alguien lo mida, exactamente el tipo de afirmación cómoda y sin evidencia que este medio existe para no publicar."
        },
        {
          "type": "paragraph",
          "text": "Las universidades latinoamericanas tienen los datos electorales, tienen los datos de encuestas y tienen los paneles de consumo de medios. La pregunta está formulada desde hace ocho años. Alguien debería contestarla antes de que se legisle sobre ella."
        }
      ]
    },
    "seo": {
      "title": "Todo el mundo sabe que las redes ganaron. Nadie lo ha medido",
      "description": "No hay un estudio empírico verificable que una redes y voto populista en América Latina.",
      "tldr": [
        "Empecemos por la confesión, porque de ella depende todo lo demás.",
        "Nos propusimos escribir el ensayo obvio: cómo las redes sociales reconfiguraron la política latinoamericana, con la evidencia de los casos que todos citan —Bolsonaro y WhatsApp en 2018, Milei y TikTok, la maquinaria digital de Bukele, la campaña de Rodolfo Hernández en…",
        "No encontramos la evidencia. Ni un estudio académico empírico que mida la relación entre uso de redes sociales y voto populista o antisistema en América Latina. Ni cifras verificables de gasto en publicidad digital o alcance de esas campañas. Ni investigación sobre el peso…",
        "Puede que exista y que no hayamos dado con ella. Pero el hecho de que no aparezca al buscarla es, en sí mismo, notable: la explicación causal más repetida de la política latinoamericana contemporánea circula sin respaldo público accesible."
      ],
      "faq": [
        {
          "question": "¿De qué país es «Todo el mundo sabe que las redes ganaron la elección. Nadie lo ha medido.»?",
          "answer": "La pieza está situada en América Latina. La afirmación más repetida de la política latinoamericana de la última década no tiene, hasta donde pudimos verificar, un solo estudio empírico serio que la sostenga en la región. Lo que sí está medido es otra cosa, y es peor."
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
      "excerpt": "Nos propusimos escribir el ensayo obvio: cómo las redes sociales reconfiguraron la política latinoamericana, con la evidencia de los casos que todos citan —Bolsonaro y WhatsApp en 2018, Milei y TikTok, la maquinaria…",
      "sources": "Reuters Institute for the Study of Journalism, *Digital News Report 2026* (junio de 2026) y sus páginas de país para Brasil, México, Chile, Perú, Argentina y Colombia; *Digital News Report 2025* (17/06/2025) para las series comparativas · DataReportal, *Digital 2026 Mid-Year Global Update* (datos de abril de 2026) y *Digital 2026: Brazil* (8/11/2025) · Registros del bloqueo de X en Brasil entre abril y octubre de 2024, y cierre de la investigación el 10/03/2026 · Corporación Latinobarómetro, *Informe 2024*, para confianza en partidos y Congreso · Acento (21/03/2026) sobre proyectos legislativos digitales en Argentina.",
      "editNote": "Vacíos declarados, y son el argumento de esta pieza. No se cita ningún estudio empírico que mida la relación entre uso de redes sociales y voto populista o antisistema en América Latina, porque no se encontró ninguno verificable. No se publican cifras de gasto en publicidad digital ni de alcance de las campañas de Bolsonaro, Milei, Bukele, Hernández o Kast. No se documenta el peso específico de WhatsApp en la difusión política regional: la única referencia localizada es un reportaje periodístico de 2019 sobre Brasil, y no se reproducen sus hallazgos sin verificarlos. No se cita la literatura internacional sobre el efecto real de la desinformación en el voto, pese a mencionarse su existencia, porque no se verificó. No se dispone de cifras de circulación, empleo periodístico ni publicidad para la región, más allá de los datos de consumo del Reuters Institute. No se obtuvieron cifras de Latinobarómetro sobre confianza en los medios."
    }
  },
  {
    "id": "contrapunto-legalizar-drogas",
    "title": "¿Hay que legalizar las drogas?",
    "summary": "Dos respuestas, ochocientas palabras cada una, publicadas al mismo tiempo. La pregunta llega en un año raro: las sobredosis en Estados Unidos cayeron 13% y la superficie sembrada de coca en Colombia subió.",
    "section": {
      "id": "agora",
      "label": "El Ágora"
    },
    "author": {
      "name": "El Ágora"
    },
    "publishedAt": "2026-08-12",
    "updatedAt": "2026-08-12",
    "readingMinutes": 7,
    "image": {
      "url": "/photos/plates/contrapunto-legalizar-drogas.jpg",
      "alt": "Balanza sobre un escritorio. El Contrapunto: legalizar, o no."
    },
    "tags": [
      "drogas",
      "Uruguay",
      "Portugal",
      "Oregón",
      "Colombia"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "quote",
          "text": "**Nota del editor.** Los datos verificados que enmarcan este debate: Colombia registró 261.000 hectáreas de coca en 2024, un 3,5% más, y Naciones Unidas **retiró de ese informe el indicador de producción potencial de cocaína**. Perú bajó por tercer año consecutivo, a 84.546 hectáreas. Bolivia subió 10%, a 34.000, un 54,5% por encima de su límite legal. Las muertes por sobredosis en Estados Unidos cayeron de 77.063 a 66.712 en doce meses, y las asociadas a opioides sintéticos un 20,6%. Ambas columnas trabajan sobre esos hechos."
        },
        {
          "type": "heading",
          "text": "SÍ · La prohibición ya perdió; la discusión es cómo administrar la derrota"
        },
        {
          "type": "paragraph",
          "text": "Hay una forma honesta de evaluar una política pública: mirar si cumplió su objetivo declarado. El objetivo de la prohibición era reducir la disponibilidad de drogas. Después de medio siglo, Colombia siembra 261.000 hectáreas y Naciones Unidas ya no puede decir cuánta cocaína salen de ellas."
        },
        {
          "type": "paragraph",
          "text": "Eso no es un fracaso parcial. Es la ausencia de resultado sobre la variable que la política existía para mover."
        },
        {
          "type": "paragraph",
          "text": "El argumento a favor de la regulación no es que las drogas sean buenas. Es que **la prohibición transfiere un mercado enorme a organizaciones armadas**, y que el costo de esa transferencia lo pagan los países productores en homicidios, corrupción institucional y captura territorial, mientras el beneficio del control queda en los países consumidores."
        },
        {
          "type": "paragraph",
          "text": "**Uruguay ofrece el único experimento regulatorio latinoamericano con doce años de operación.** La Ley 19.172, firmada el 23 de diciembre de 2013, no legalizó el mercado: lo estatizó parcialmente. El Estado controla producción, precios, calidad y volúmenes máximos a través de un instituto regulador, con tres vías —autocultivo de hasta seis plantas y 480 gramos anuales, clubes de membresía de quince a cuarenta y cinco socios con hasta noventa y nueve plantas, y venta en farmacias con un tope de cuarenta gramos mensuales—."
        },
        {
          "type": "paragraph",
          "text": "El resultado que importa: **para 2024, el cannabis ilícito tradicional había caído al 6,7% del mercado uruguayo**, cuando en 2014 era la fuente principal. Nueve de cada diez consumidores dejaron de financiar a un vendedor ilegal."
        },
        {
          "type": "paragraph",
          "text": "Y hay un detalle que refuta el argumento de que la regulación estatal produce un producto que nadie quiere: el contenido de THC de las variedades autorizadas subió del 3% en 2017 hasta un máximo del 20% en 2024. El regulador compitió con el mercado ilegal ajustando el producto, que es exactamente lo que se supone que hace un regulador competente."
        },
        {
          "type": "paragraph",
          "text": "**Portugal ofrece la evidencia sobre despenalización del consumo**, que es distinta de la legalización de la venta. Desde 2001, la posesión de cualquier droga es una infracción administrativa, no un delito: hasta diez días de suministro derivan a comisiones integradas por un trabajador social, un psiquiatra y un abogado, con sanciones de entre veinticinco y ciento cincuenta euros o tratamiento."
        },
        {
          "type": "paragraph",
          "text": "Los resultados medidos hasta 2012: las muertes por drogas cayeron **de 131 en 2001 a 20 en 2008**; en 2012 la tasa portuguesa era de tres por millón frente a una media europea de 17,3. Los pacientes en tratamiento sustitutivo pasaron **de 6.040 en el año 2000 a 25.808 en 2008**. Las condenas y encarcelamientos de traficantes cayeron **casi un 50% entre 2001 y 2015**."
        },
        {
          "type": "paragraph",
          "text": "Y aquí está el punto que la posición contraria suele conceder mal: **eso ocurrió sin que Portugal legalizara la venta de nada**. Despenalizar el consumo es una política de salud pública que no requiere abrir un mercado, y sus beneficios están medidos."
        },
        {
          "type": "paragraph",
          "text": "Para América Latina la conclusión es más específica que \"legalizar todo\". Es que la región asigna la mayor parte de sus recursos antidrogas a la parte del negocio que menos vale —el cultivo y el consumo minorista—, y que esos recursos rinden más en la parte que sí vale: puertos, aduanas y sistema financiero. En el único año en que ambas series pueden observarse juntas, Colombia redujo su erradicación forzosa un 54% y su superficie sembrada subió 3,5%. Es un dato, no una demostración —la erradicación actúa con rezago y el precio también se movió—, pero es un dato que medio siglo de política antidrogas debería poder explicar."
        },
        {
          "type": "paragraph",
          "text": "Un liberal que cree en mercados debería ser el primero en notar la contradicción: hemos entregado el mercado más rentable del hemisferio a quienes lo administran con violencia, y llamamos a eso control."
        },
        {
          "type": "heading",
          "text": "NO · El caso de Oregón, y por qué la evidencia no dice lo que se cree"
        },
        {
          "type": "paragraph",
          "text": "Concedo lo esencial de la columna anterior: la prohibición no redujo la oferta, el gasto está mal asignado y despenalizar el consumo tiene evidencia razonable a favor. Sobre eso hay poco que discutir."
        },
        {
          "type": "paragraph",
          "text": "Lo que no se sigue de ahí es la legalización de las drogas duras. Y hay tres razones, todas empíricas."
        },
        {
          "type": "paragraph",
          "text": "**Primera: el caso de Oregón, que ocurrió y terminó.** En noviembre de 2020, Oregón aprobó la Medida 110, que reclasificó la posesión de heroína, metanfetamina, PCP, LSD y oxicodona como infracción civil, con servicios de recuperación financiados por impuestos al cannabis. Entró en vigor el 1 de febrero de 2021. Fue la reforma de política de drogas más ambiciosa que un gobierno subnacional estadounidense haya intentado, con apoyo de las principales organizaciones reformistas."
        },
        {
          "type": "paragraph",
          "text": "**En 2024 fue derogada.** La ley HB 4002 restableció, desde el 1 de septiembre de ese año, el carácter delictivo de la posesión de drogas duras, con hasta seis meses de cárcel y posibilidad de exención si el infractor entra en tratamiento."
        },
        {
          "type": "paragraph",
          "text": "Tres años y siete meses. No la derogó una legislatura conservadora: la derogó Oregón."
        },
        {
          "type": "paragraph",
          "text": "**Segunda: Portugal no dice lo que se cita.** La fuente que documenta sus resultados advierte tres cosas que casi nunca se reproducen. Que **\"no puede establecerse con firmeza un efecto causal\"** entre la estrategia y los resultados, porque no se hicieron estudios rigurosos de implementación. Que la reducción de muertes por drogas **\"ha disminuido en años posteriores\"** y que el número está hoy \"casi en el mismo nivel que antes de que se implementara la estrategia\". Y que la prevalencia de consumo subió: el uso de drogas ilícitas alguna vez en la vida pasó **del 7,8% al 12%**, el cannabis del 7,6% al 11,7%, la heroína del 0,7% al 1,1%."
        },
        {
          "type": "paragraph",
          "text": "Hay además un dato que la conversación pública ignora por completo: las hospitalizaciones por trastornos psicóticos relacionados con cannabis en Portugal **se multiplicaron por 29,4 entre 2000 y 2015**."
        },
        {
          "type": "paragraph",
          "text": "Y una limitación mayor: la documentación disponible **no ofrece estadísticas ni evaluación posteriores a 2012**. Portugal se cita como caso cerrado con evidencia de hace catorce años."
        },
        {
          "type": "paragraph",
          "text": "**Tercera, y decisiva: el producto cambió.** Todo el marco de la legalización se construyó sobre sustancias de origen vegetal con costo de producción y logística: cocaína, cannabis, opio. El argumento de que regular el mercado le quita la renta al criminal funciona ahí."
        },
        {
          "type": "paragraph",
          "text": "El fentanilo rompe ese marco. Es sintético, se produce en cualquier laboratorio con precursores químicos, tiene una potencia por peso que hace irrelevantes la ruta y el volumen, y mata por errores de dosificación de miligramos. Un mercado legal de cocaína no compite contra un mercado ilegal de fentanilo: coexiste con él."
        },
        {
          "type": "paragraph",
          "text": "Y hay un dato que la columna anterior debería explicar: **las muertes por sobredosis en Estados Unidos cayeron 13,4% en doce meses, y las asociadas a opioides sintéticos un 20,6%**, sin que se legalizara nada en ninguna parte. La mayor mejora de salud pública en drogas de la década ocurrió bajo prohibición."
        },
        {
          "type": "paragraph",
          "text": "Que la prohibición no reduzca la oferta no significa que la legalización reduzca el daño. Son dos afirmaciones distintas, y la segunda tiene, hasta hoy, un caso derogado por sus propios votantes y un caso portugués que su propia documentación califica de no causal."
        },
        {
          "type": "paragraph",
          "text": "Reasignar recursos de la erradicación al puerto: sí. Despenalizar el consumo y tratar la adicción como salud: sí, y con urgencia. Abrir un mercado legal de drogas duras en países cuyos Estados no logran condenar a dos de cada diez homicidas: no. **Regular exige un regulador, y ese es precisamente el insumo que América Latina no tiene.**"
        }
      ]
    },
    "seo": {
      "title": "¿Hay que legalizar las drogas?",
      "description": "Dos columnas. Uruguay, Portugal, Oregón. Ninguna es la posición de Politarca.",
      "tldr": [
        "Nota del editor. Los datos verificados que enmarcan este debate: Colombia registró 261.000 hectáreas de coca en 2024, un 3,5% más, y Naciones Unidas retiró de ese informe el indicador de producción potencial de cocaína. Perú bajó por tercer año consecutivo, a 84.546…",
        "SÍ · La prohibición ya perdió; la discusión es cómo administrar la derrota",
        "Hay una forma honesta de evaluar una política pública: mirar si cumplió su objetivo declarado. El objetivo de la prohibición era reducir la disponibilidad de drogas. Después de medio siglo, Colombia siembra 261.000 hectáreas y Naciones Unidas ya no puede decir cuánta cocaína…",
        "Eso no es un fracaso parcial. Es la ausencia de resultado sobre la variable que la política existía para mover."
      ],
      "faq": [
        {
          "question": "¿De qué país es «¿Hay que legalizar las drogas?»?",
          "answer": "La pieza está situada en América Latina. Dos respuestas, ochocientas palabras cada una, publicadas al mismo tiempo. La pregunta llega en un año raro: las sobredosis en Estados Unidos cayeron 13% y la superficie sembrada de coca en Colombia subió."
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
      "excerpt": "Hay una forma honesta de evaluar una política pública: mirar si cumplió su objetivo declarado. El objetivo de la prohibición era reducir la disponibilidad de drogas. Después de medio siglo, Colombia siembra 261.000…",
      "sources": "Ley 19.172 de Uruguay (23/12/2013) y datos sobre modalidades, contenido de THC y participación del mercado ilícito · Decreto-Ley 130-A/2001 de Portugal y los resultados documentados hasta 2012, incluidas las salvedades sobre causalidad, prevalencia y hospitalizaciones · Medida 110 de Oregón (2020) y ley HB 4002 (2024), vigente desde el 1/09/2024 · UNODC y SIMCI, informe de monitoreo de cultivos de coca de Colombia 2024; DEVIDA y UNODC para Perú; UNODC para Bolivia · CDC / National Center for Health Statistics, conteos provisionales de sobredosis, consulta del 30/08/2026 · Global Commission on Drug Policy, catálogo de informes 2011-2024.",
      "editNote": "Vacíos declarados, y limitan este debate. No se publican cifras de gasto en interdicción ni de población carcelaria por delitos de drogas en países latinoamericanos: no pudieron verificarse. No se presenta evidencia comparada sobre erradicación forzada frente a desarrollo alternativo en Colombia, Perú y Bolivia, ni sobre el modelo boliviano de control social de la coca. No se documentan las posiciones de los gobiernos latinoamericanos sobre política de drogas en 2026. Las cifras de usuarios registrados del sistema uruguayo disponibles son de 2015 y no se reproducen como actuales. La documentación sobre Portugal no contiene evaluación posterior a 2012 y así se declara en el texto. Los datos de sobredosis del CDC son provisionales y el organismo los marca como subregistrados. Nota del editor: ninguna de las dos columnas representa la posición editorial de Politarca."
    }
  },
  {
    "id": "contrapunto-estado-de-bienestar",
    "title": "¿Debe la derecha latinoamericana aceptar el Estado de bienestar?",
    "summary": "Dos respuestas, ochocientas palabras cada una, publicadas al mismo tiempo. Es la pregunta que decide si el ciclo actual deja instituciones o solo deja recuerdos.",
    "section": {
      "id": "agora",
      "label": "El Ágora"
    },
    "author": {
      "name": "El Ágora"
    },
    "publishedAt": "2026-08-11",
    "updatedAt": "2026-08-11",
    "readingMinutes": 7,
    "image": {
      "url": "/photos/plates/contrapunto-estado-de-bienestar.jpg",
      "alt": "Ventanilla de un programa social. El Contrapunto: el seguro del mercado, o no."
    },
    "tags": [
      "Estado de bienestar",
      "Bolsa Família",
      "Gini",
      "informalidad"
    ],
    "featured": false,
    "rank": null,
    "body": {
      "format": "blocks",
      "blocks": [
        {
          "type": "quote",
          "text": "**Nota del editor.** El marco verificado sobre el que discuten ambas columnas: el sistema de impuestos y transferencias reduce el coeficiente de Gini en América Latina entre **2,3 y 3,1 puntos**, frente a entre 7,7 y 19 en la Unión Europea. El 47,4% del empleo regional es informal y solo el 31% de la población en edad de trabajar cotiza a pensiones. El 42,3% de la población está en la clase media y el 32,2% en la franja vulnerable, estancada hace una década. Y en 2020, **4,7 millones de personas salieron de la clase media latinoamericana; sin el programa de transferencias de emergencia de Brasil habrían sido doce millones**."
        },
        {
          "type": "heading",
          "text": "SÍ · Porque sin él, el mercado no sobrevive a la siguiente elección"
        },
        {
          "type": "paragraph",
          "text": "Empiezo por conceder lo que la columna contraria dirá con razón: el gasto social latinoamericano redistribuye poco, está mal focalizado en varios países y financia clientelas. Todo eso es cierto."
        },
        {
          "type": "paragraph",
          "text": "Y aun así, la respuesta es sí, por tres razones que no son sentimentales."
        },
        {
          "type": "paragraph",
          "text": "**La primera es que funciona, y está medido.** Bolsa Família cubrió en su punto más alto a unos doce millones de familias y a alrededor de cuarenta y cuatro millones de brasileños, con un costo cercano al 0,5% del PIB y al 2,5% del gasto público. Su impacto está documentado: la pobreza cayó un 27,7% durante el primer gobierno que lo escaló, y el programa explica aproximadamente **el 20% de toda la reducción de la desigualdad brasileña desde 2001**. El 82,4% de los beneficiarios declaró comer mejor; el gasto en alimentos subió 6% y la disponibilidad calórica 9,4% frente a hogares no beneficiarios. Un estudio de 2018 asoció la expansión de su cobertura con la reducción de tasas de suicidio entre 2004 y 2012."
        },
        {
          "type": "paragraph",
          "text": "Medio punto del PIB. Un quinto de la caída de la desigualdad de un país de doscientos millones de personas. No hay ninguna otra política pública latinoamericana con esa relación entre costo y resultado."
        },
        {
          "type": "paragraph",
          "text": "**La segunda es que la evidencia disponible no respalda el argumento del desincentivo.** La objeción clásica —las transferencias condicionadas crean dependencia y desincentivan buscar empleo— fue puesta a prueba: un estudio de 2023 encontró que **el 64% de los niños pobres inscritos en 2005 ya no participaba en el programa en 2019**. La mayoría de las familias no se quedó. El dato tiene un límite que conviene declarar: no distingue la salida por mejora de ingresos de la salida por edad o por incumplimiento de condicionalidades, y quienes tenían diez años en 2005 tenían veinticuatro en 2019."
        },
        {
          "type": "paragraph",
          "text": "Y las condicionalidades importan: asistencia escolar y vacunación, con baja definitiva tras cinco incumplimientos consecutivos, y pago a la jefa de hogar mujer. No es una renta incondicional: es un contrato entre el Estado y una familia, con obligaciones verificables de ambas partes. Cualquier conservador debería reconocer ahí su propio vocabulario."
        },
        {
          "type": "paragraph",
          "text": "**La tercera es la que decide la discusión, y es política.** En 2020, cuatro millones setecientas mil personas salieron de la clase media latinoamericana. Sin el programa de transferencias de emergencia brasileño habrían sido **doce millones**, y veinte millones los que caían en pobreza."
        },
        {
          "type": "paragraph",
          "text": "Piénsese lo que significa. Un solo programa, en un solo país, evitó que siete millones de personas perdieran su condición de clase media en un año."
        },
        {
          "type": "paragraph",
          "text": "Ahora la contrafactual política. Esos siete millones habrían votado en 2022. La región lleva veinte años demostrando que la clase media que cae vota contra el sistema que la dejó caer, y que ese voto no produce liberalismo: produce lo que produjo en Venezuela, en Bolivia y en Argentina en 2001."
        },
        {
          "type": "paragraph",
          "text": "Aquí está la lección que la derecha europea aprendió en el siglo XX y que la latinoamericana se niega a aprender: **el Estado de bienestar no es una concesión al socialismo. Es el seguro que compra la economía de mercado para sobrevivir a sus propias recesiones.** Un tercio de América Latina —el 32,2% vulnerable, estancado hace una década— vive a un despido de la pobreza. Perder el empleo aumenta en 24,8 puntos porcentuales la probabilidad de salir de la clase media."
        },
        {
          "type": "paragraph",
          "text": "Una derecha que no le ofrece nada a ese tercio está financiando, con su propia austeridad, a quien venga después."
        },
        {
          "type": "heading",
          "text": "NO · Porque lo que la región tiene no es un Estado de bienestar, y darle más dinero no lo convertirá en uno"
        },
        {
          "type": "paragraph",
          "text": "Concedo lo central de la columna anterior: las transferencias condicionadas funcionan y la evidencia de Bolsa Família es sólida. Sobre el desincentivo concedo menos de lo que se me ofrece: el 64% que salió del programa entre 2005 y 2019 incluye a quienes dejaron de ser elegibles por edad, y el dato no distingue una cosa de la otra."
        },
        {
          "type": "paragraph",
          "text": "Voy a discutir la conclusión, porque no se sigue."
        },
        {
          "type": "paragraph",
          "text": "**Primero, el dato que define todo.** El sistema de impuestos y transferencias latinoamericano reduce el Gini entre **2,3 y 3,1 puntos**. El europeo, entre 7,7 y 19. Según cómo se emparejen los extremos, entre dos veces y media y ocho veces más; alrededor de cinco veces si se comparan los puntos medios."
        },
        {
          "type": "paragraph",
          "text": "La región ya gasta. Ya transfiere. Ya tiene programas. Y el resultado agregado sobre la desigualdad es varias veces menor que el europeo. Pedir más dinero para esa máquina es pedir más combustible para un motor con una fuga."
        },
        {
          "type": "paragraph",
          "text": "**Segundo: no es un Estado de bienestar; es un piso de indigencia.** El 31% de las personas de sesenta y cinco años o más en América Latina recibe una pensión no contributiva. Suena a cobertura. Pero **más de la mitad de esas pensiones entrega menos de cien dólares mensuales, y ninguna supera los trescientos**."
        },
        {
          "type": "paragraph",
          "text": "Un sistema que le paga a un anciano cien dólares al mes no es un Estado de bienestar. Es una política de contención de la indigencia con nombre prestado. Y el problema de llamarlo Estado de bienestar es que clausura la discusión sobre construir uno de verdad."
        },
        {
          "type": "paragraph",
          "text": "**Tercero: la restricción no es de voluntad, es de base.** El 47,4% del empleo latinoamericano es informal y solo el 31% de la población en edad de trabajar cotiza. Un Estado de bienestar europeo se financia con contribuciones sobre empleo formal masivo. Aquí eso no existe, y por eso lo que se financia es con impuestos al consumo: el IVA aporta el 28,9% de la recaudación regional y el impuesto a la renta personal el 9,6%. En la OCDE la relación se invierte."
        },
        {
          "type": "paragraph",
          "text": "Es decir: **el gasto social latinoamericano se financia gravando el consumo de los mismos hogares a los que después transfiere.** Y la literatura reciente sobre incidencia fiscal rechaza expresamente la idea de que las transferencias compensen la regresividad del impuesto indirecto: el efecto, cita esa literatura, es \"mínimo o muy pequeño\"."
        },
        {
          "type": "paragraph",
          "text": "**Cuarto: la prioridad del gasto marginal.** Si un gobierno latinoamericano tiene un punto adicional del PIB para gastar, ¿dónde rinde más?"
        },
        {
          "type": "paragraph",
          "text": "Los datos de esta serie sugieren una respuesta incómoda para la columna anterior. En las Américas, **menos de dos de cada diez víctimas de homicidio producen un condenado**. Un juicio comercial toma 774 días. El 80% de los niños de diez años no comprende lo que lee. La región pierde el 17% de la energía que genera."
        },
        {
          "type": "paragraph",
          "text": "Un punto del PIB en fiscalías que condenen, en tribunales que fallen y en escuelas que enseñen a leer produce, en veinte años, un país donde la gente no necesita la transferencia. Un punto del PIB en transferencias produce, en veinte años, a la misma gente necesitando la transferencia."
        },
        {
          "type": "paragraph",
          "text": "**Y quinto: el costo del ajuste es real y hay que decirlo.** En Argentina, la pobreza pasó del 44,8% al 54,8% en el primer trimestre de 2024 —diez puntos, 24,9 millones de personas— y la pobreza entre jubilados subió del 13,2% al 30,8%: quinientos cuarenta y dos mil adultos mayores nuevos en pobreza."
        },
        {
          "type": "paragraph",
          "text": "Esas cifras son ciertas y no admiten relativización. Pero la comparación relevante no es contra el año anterior: es contra el país que produce una inflación del 200% anual, que también destruye ingresos de los pobres y que además destruye la moneda en la que se pagan las transferencias."
        },
        {
          "type": "paragraph",
          "text": "La pregunta no es si la derecha debe aceptar el Estado de bienestar. Es si debe construir el que la región nunca tuvo, en vez de financiar mejor el que tiene. **Y eso empieza por el impuesto a la renta, no por la transferencia.** El decil más rico latinoamericano paga una tasa efectiva promedio del 5,4% cuando las tasas legales van del 25% al 40%."
        },
        {
          "type": "paragraph",
          "text": "Una derecha que quiera ofrecerle algo al 32% vulnerable tiene por delante esa tarea antes que cualquier otra. Es más difícil que subir una transferencia y es la única que dura."
        }
      ]
    },
    "seo": {
      "title": "¿Debe la derecha aceptar el Estado de bienestar?",
      "description": "Dos columnas. Bolsa Família mide; el Gini regional no se parece al europeo.",
      "tldr": [
        "Nota del editor. El marco verificado sobre el que discuten ambas columnas: el sistema de impuestos y transferencias reduce el coeficiente de Gini en América Latina entre 2,3 y 3,1 puntos, frente a entre 7,7 y 19 en la Unión Europea. El 47,4% del empleo regional es informal y…",
        "SÍ · Porque sin él, el mercado no sobrevive a la siguiente elección",
        "Empiezo por conceder lo que la columna contraria dirá con razón: el gasto social latinoamericano redistribuye poco, está mal focalizado en varios países y financia clientelas. Todo eso es cierto.",
        "Y aun así, la respuesta es sí, por tres razones que no son sentimentales."
      ],
      "faq": [
        {
          "question": "¿De qué país es «¿Debe la derecha latinoamericana aceptar el Estado de bienestar?»?",
          "answer": "La pieza está situada en América Latina. Dos respuestas, ochocientas palabras cada una, publicadas al mismo tiempo. Es la pregunta que decide si el ciclo actual deja instituciones o solo deja recuerdos."
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
      "excerpt": "Empiezo por conceder lo que la columna contraria dirá con razón: el gasto social latinoamericano redistribuye poco, está mal focalizado en varios países y financia clientelas. Todo eso es cierto.",
      "sources": "Lustig, Martinez-Pabon y Pessino, \"Fiscal policy, income redistribution, and poverty reduction in Latin America\", *Oxford Open Economics* 4(S1), 2025 · \"Distributional effects of taxation in Latin America\", *Oxford Open Economics* 4(S1), 2025 · OCDE/CEPAL/BID/CIAT, *Revenue Statistics in Latin America and the Caribbean 2026* · Hanni, Martner y Podestá, *Revista CEPAL* Nº 116, sobre la tasa efectiva del decil superior · Banco Mundial, *Regional Poverty and Inequality Update: Latin America and the Caribbean* (octubre 2025) y comunicado del 24/06/2021 sobre la caída de la clase media en 2020 · Documentación sobre Bolsa Família: cobertura, costo, impactos medidos en pobreza, desigualdad, nutrición y salud, y el estudio de 2023 sobre permanencia · CEPAL, *Sistemas de pensiones no contributivos en América Latina y el Caribe* (2024) · OIT, informalidad regional 2025 y cobertura previsional · INDEC y cobertura sobre pobreza en Argentina en el primer trimestre de 2024 · UNODC, *Global Study on Homicide 2023*; Banco Mundial, indicadores de cumplimiento de contratos y pobreza de aprendizaje; BID sobre pérdidas eléctricas.",
      "editNote": "Vacíos declarados. No se publican cifras de gasto social como porcentaje del PIB por país en América Latina: la fuente regional no fue accesible y no se estiman. No se presenta evidencia sobre transferencias no condicionadas ni sobre ingreso básico, ni sobre focalización frente a universalidad en contextos de alta informalidad, ni sobre si el gasto social reduce o aumenta el apoyo al populismo. No se documentan Prospera, Chile Solidario ni Familias en Acción. Las referencias históricas a la derecha europea que aparecen en la primera columna son un argumento del columnista y no una afirmación de hecho verificada por esta redacción. No se publican datos sobre qué programas sociales concretos recortó el gobierno argentino ni sobre la evolución de la Asignación Universal por Hijo y la Tarjeta Alimentar, porque no pudieron verificarse; tampoco hay cifras de pobreza argentina posteriores a 2024 en este texto. Nota del editor: ninguna de las dos columnas representa la posición editorial de Politarca. Esta es la pregunta que la sección tres del documento fundacional identificó como la primera prueba de fuego del medio, y por eso se publica como contrapunto y no como editorial."
    }
  }
];
