/**
 * Texto de la subpagina /historia.
 *
 * ORIGEN: lo escribio **Juan Manuel Colussi** y lo mando el 2026-08-10 en un
 * Google Doc. Es el item 5 de los 8 comprometidos en el mail del 21/07, que
 * estuvo en placeholder tres semanas esperando justamente esto.
 *
 * 🔴 ES TEXTO DEL CLIENTE SOBRE SU PROPIA EMPRESA. No se "mejora" de motu
 * proprio: si algo hay que cambiar, se pide. Se le hicieron DOS ediciones, las
 * dos aprobadas por Franco antes de construir:
 *
 *   1. "un centro de distribucion en el Gran Resistencia" pasa a "en Fontana,
 *      en el Gran Resistencia". El resto del sitio nombra **Fontana** en todas
 *      partes, y el CD esta efectivamente en Fontana (Calle 31 nº 770), que es
 *      del Gran Resistencia pero NO es la ciudad de Resistencia. Confundirlas
 *      ya se corrigio una vez en el mapa (ver CoverageMap.astro). Atar las dos
 *      entidades conserva el termino de busqueda que eligio Juan Manuel sin
 *      contradecir al resto del sitio.
 *   2. "REGLA DE ORO N.° 1" pasa a "Regla de oro". El numeral implica una
 *      numero 2 que no existe en ningun material del cliente. **Si aparece,
 *      se repone el numeral.**
 *
 * ⚠️ LO QUE SE DEJO TAL CUAL AUNQUE CHIRRIE, y por que:
 *
 *   · "Nacimos, crecimos y nos desarrollamos en el NEA" — Guadalupe Norte es
 *     norte de Santa Fe, y el sitio distingue sistematicamente "el NEA **y** el
 *     norte de Santa Fe". Pero la frase **ya esta publicada textual en la home**
 *     (About.astro), viene del brief de la empresa y es voz de marca, no un dato
 *     que haga a nadie hacer algo equivocado. No se toca.
 *   · "sobre la Ruta Nacional 11" en el lead — el 07/08 Romualdo pidio sacar la
 *     RN 11 diciendo *"nuestro eje no es la ruta 11, es la ruta 14"*. Esa
 *     decision se aplico donde el sitio la declaraba **eje** (FAQ #1) y se
 *     conservo donde es **ubicacion** (FAQ #4, corredores). Aca es el origen
 *     historico: cae del lado que se queda.
 *
 * 📌 EL DATO QUE ESTE TEXTO DESBLOQUEO: "Todo empezo en el año 2000". El año de
 * fundacion se habia sacado de TODO el sitio el 29/07 (incluido el
 * `foundingDate` del JSON-LD) porque Franco no estaba seguro de la fecha. Lo
 * confirma aca el hijo del dueño por escrito, y Franco lo dio por bueno el
 * 10/08 — asi que volvio al schema. Ver Layout.astro.
 */

export const HISTORIA = {
  /** Bajada del titulo. Resume el arco entero del texto en una linea. */
  lead: 'De un camión en la Ruta Nacional 11 al Mercosur',

  /**
   * El cuerpo, en el orden que lo escribio Juan Manuel. Cada entrada es un
   * parrafo: el componente no los parte ni los junta.
   */
  parrafos: [
    'Todo empezó en el año 2000, sobre la Ruta Nacional 11, en Guadalupe Norte, Santa Fe. Un camión, una ruta y una sola forma de entender este trabajo, que no cambió en más de dos décadas: cumplir.',
    'Primero fue un camión. Después dos, después cuatro. Cada cliente que confió en nosotros nos hizo crecer, vuelta a vuelta y carga a carga, hasta pasar de un camión a una flota.',
    'Ese crecimiento nos permitió dar un paso más. Sumamos un centro de distribución en Fontana, en el Gran Resistencia, una de las plazas más importantes del corredor del NEA y los países limítrofes. Allí recibimos, almacenamos y distribuimos para las principales compañías alimenticias del país, llegando a cada rincón del norte argentino. Dejamos de ser solo una flota para convertirnos en operador logístico.',
    'Con el tiempo, las fronteras dejaron de ser un límite. Cruzamos a Paraguay y a Brasil, sosteniendo la misma palabra de siempre.',
    'Nuestra cobertura abarca todo el país, aunque nuestro principal tráfico se concentra en el corredor entre Buenos Aires y el NEA: Chaco, Formosa, Corrientes, Misiones y el norte de Santa Fe. Flota moderna, seguimiento satelital permanente y un centro de tráfico conectado a cada unidad.',
    'Queremos que cada cliente nos reconozca como la mejor empresa de transporte de la región. Se construye todos los días, escuchando al cliente, atentos a las oportunidades de mejora, respetando los compromisos y sumando soluciones a su cadena de valor. Por eso tenemos una regla de oro.',
  ],

  /**
   * El remate del texto.
   *
   * 🎨 Franco pidio (10/08) que vaya **resaltada pero no gritada**: en el Doc
   * original venia en mayusculas, negrita e italica dentro de una caja. Se
   * maqueta como cita destacada con barra roja de marca, sin mayusculas ni
   * fondo saturado.
   *
   * 🔎 Esta frase NO es nueva en el sitio: el H2 de Clientes dice "Los clientes
   * ocupan la posicion mas importante en la empresa, hacemos lo que es mejor
   * para ellos siempre", que salio del brief. La home la dice parafraseada y
   * corta; aca aparece completa y con su nombre propio. **Si alguna vez se
   * reescribe una, mirar la otra.**
   */
  reglaDeOro: {
    titulo: 'Regla de oro',
    cita: 'Hacer siempre lo que es mejor para el cliente. Pase lo que pase, cueste lo que cueste, caiga quien caiga, se gane o se pierda.',
  },

  /** Cierre de marca. Va en tres lineas para no depender de un separador. */
  cierre: {
    linea: 'Nacimos, crecimos y nos desarrollamos en el NEA.',
    tagline: 'Pasión por lo que hacemos.',
  },
} as const;
