export interface Service {
  icon: string; // Lucide icon name
  title: string;
  /** Linea corta visible en la card. Resume el servicio sin abrir el detalle. */
  summary: string;
  /** Detalle tecnico. Va plegado en un <details>, pero se renderiza siempre en
   *  el HTML (oculto por CSS, nunca por JS) para que los crawlers lo lean. */
  description: string;
}

// Los titulos son los que pidio el cliente de forma explicita (Juan Manuel,
// 27/07): llevan la palabra completa que la gente busca ("Transporte de
// contenedores", no "Contenedores"). No acortarlos por razones de layout.
//
// 🔴 LAS 4 DESCRIPCIONES LAS DICTO ROMUALDO EN LA REVISION DEL 29/07. No se
// "mejoran" ni se resumen: son correcciones de quien conoce la operacion, y
// varias corrigen cosas que estaban MAL, no solo incompletas.
//
//   · CARGAS GENERALES: entran baranda volcable de arco y lona, escalables y
//     los tonelajes (52,5 y 55,5 t). "Hoy todo va a esta tendencia."
//   · CONTENEDORES: SALIO "baranda volcable" — "eso no se necesita, la baranda,
//     para el contenedor". Y deja de limitarse a Buenos Aires-NEA: "cotizamos
//     contenedores desde el NEA a Salta, desde el puerto de Corrientes a Salta".
//   · LOGISTICA: el texto viejo decia que la base "articula con la casa central
//     de Guadalupe Norte", y eso es exactamente lo que corrigio: "vos no
//     articulas con la oficina. Estamos hablando de operacion: la operacion la
//     articulas con la planta de produccion del cliente". Ademas en Guadalupe
//     Norte NO hay deposito, es oficina.
//   · INTERNACIONAL: SALIO "experiencia en fibra de algodon" (vivia tambien en
//     corridors.ts y faq.ts). Entran las alianzas operativas y los rubros.
//
// ⚠️ POLIVIAS ya no se nombra en ningun lado del sitio (decision de Franco,
// 30/07): Romualdo hablo de "alianzas operativas con empresas de Brasil y
// Paraguay" en general, y nombrar a un tercero en la web de un cliente sin
// constancia de que lo autorizo es el mismo problema abierto que con los logos
// de las marcas grandes. Si se decide devolverla, son 3 lugares: aca,
// config/faq.ts y config/corridors.ts.
//
// ⚠️ ESTOS TEXTOS TIENEN ECO EN OTROS DOS ARCHIVOS. La FAQ repite casi todo lo
// de servicios y corridors.ts repite lo internacional: si se cambia una ficha
// aca y no alla, el sitio se contradice solo. Cambio en una ficha = grep en
// todo src/ por la frase vieja.
//
// 🔴 2ª RONDA (08/08) — tres de las cuatro fichas cambian:
//
//   · CARGAS GENERALES: la línea visible ahora trae TODO lo que antes solo
//     estaba en el detalle plegado (secas, paletizadas, a granel) más las
//     industrias a las que sirve (alimenticia, maderera, automotriz, química,
//     agroquímica). Decisión de Franco: queda larga pero se ve sin desplegar.
//     El detalle técnico (semirremolques, pallets, tonelajes) NO se toca.
//   · CONTENEDORES: SALE "NEA–Salta y desde el puerto de Corrientes" — mismo
//     motivo que en 29/07 pero al revés esta vez: les pidieron cotización a
//     esos destinos y TODAVÍA NO LO HACEN. Declarar un servicio que no
//     prestan. Queda "Buenos Aires–NEA, NEA–Buenos Aires y el resto del país".
//   · LOGÍSTICA: entra "Cross-docking" al frente de la línea visible. El
//     detalle se reescribe con el dictado de Romualdo: "retiramos cargas
//     consolidadas" (no "la producción"), "armamos el pedido en el corazón
//     mismo del NEA, optimizando los volúmenes y bajando costos" (no "acá").
//     🔎 Y ENTRAN LAS CAPACIDADES DEL DEPÓSITO — personal propio de picking y
//     autoelevador — porque es la ÚNICA vez en toda la reunión que el cliente
//     dijo qué necesita que el sitio le produzca: "de paso promociono mi
//     depósito, que es lo que necesito, que facture más el depósito. Para eso
//     tengo la gente para armar picking, tengo el autoelevador, tengo todo."
//     Esta ficha deja de ser "una de cuatro": es la que el cliente necesita
//     que venda. Si en el futuro hay que recortar contenido, no es candidata.
//   · INTERNACIONAL: se agrega "y cargas generales" al final del detalle.
//
// La frase de "socio estratégico" en el cierre del detalle de Logística SE
// QUEDA, aunque el concepto suba también al Hero (src/components/Hero.astro):
// en el hero es el titular, acá es el cierre del argumento de carga
// consolidada — no es la misma función, así que no es la redundancia que se
// verifica antes de borrar.
export const SERVICES: Service[] = [
  {
    icon: 'Truck',
    title: 'Transporte de Cargas Generales',
    summary:
      'Cargas generales completas, secas, paletizadas y a granel, para la industria alimenticia, maderera, automotriz, química y agroquímica.',
    description:
      'Semirremolques curtain sider y de baranda volcable de arco y lona, con capacidad de 28 y 30 pallets. Unidades escalables de 52,5 y 55,5 toneladas, con monitoreo satelital 24/7 y conexión permanente con nuestro centro de tráfico.',
  },
  {
    icon: 'Container',
    title: 'Transporte de Contenedores',
    summary:
      'Contenedores ISO: Buenos Aires–NEA, NEA–Buenos Aires y el resto del país.',
    description:
      'Semirremolques con trabas para contenedores de 20 y 40 pies, estándar y High Cube (HC).',
  },
  {
    icon: 'Package',
    title: 'Logística y distribución (NEA)',
    summary:
      'Cross-docking, picking, almacenaje y distribución en Chaco, Formosa, Corrientes, Misiones y norte de Santa Fe.',
    description:
      // Dos cambios del 11/08, dictados por Romualdo leyendo esta ficha:
      //   · SALE "y autoelevador" — "se entiende que tenés que tener un
      //     autoelevador y todo". ⚠️ Ojo: el 07/08 el autoelevador ENTRÓ a esta
      //     ficha a pedido suyo, cuando declaró que necesitaba que el depósito
      //     facturara más. No es que se arrepintió del argumento: sacó el ítem
      //     por obvio. El personal propio de picking, que es el que NO es obvio,
      //     se queda.
      //   · "socio estratégico DE LA OPERACIÓN" → "DE NUESTROS CLIENTES". Lo
      //     corrigió sobre la marcha: "no, al cliente no… ah, como socio
      //     estratégico de nuestros clientes".
      //
      // ⚠️ PENDIENTE QUE NO SE EJECUTÓ: sobre "Contamos con personal propio de
      // picking" dijo "esto va acá", señalando la pantalla. El audio no registra
      // hacia dónde apuntaba y no se mueve a ciegas. Preguntarle.
      'Base de cross-docking, picking y almacenaje en Fontana, Chaco, que articula con las plantas de producción de nuestros clientes. Retiramos cargas consolidadas desde su planta y armamos el pedido en el corazón mismo del NEA, optimizando los volúmenes y bajando costos para nuestros clientes. Contamos con personal propio de picking. Trabajamos como socio estratégico de nuestros clientes.',
  },
  {
    icon: 'Globe',
    title: 'Transporte Internacional, Brasil y Paraguay',
    summary: 'Rutas al Mercosur hacia Brasil y Paraguay.',
    description:
      'Alianzas operativas con empresas de Brasil y Paraguay. Transportamos café, chocolate, industria alimenticia, química, autopartista, de envases y cargas generales.',
  },
];
