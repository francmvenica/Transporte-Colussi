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
export const SERVICES: Service[] = [
  {
    icon: 'Truck',
    title: 'Transporte de Cargas Generales',
    summary:
      'Cargas generales, secas y paletizadas, por las rutas nacionales troncales del país.',
    description:
      'Semirremolques curtain sider y de baranda volcable de arco y lona, con capacidad de 28 y 30 pallets. Unidades escalables de 52,5 y 55,5 toneladas, con monitoreo satelital 24/7 y conexión permanente con nuestro centro de tráfico.',
  },
  {
    icon: 'Container',
    title: 'Transporte de Contenedores',
    summary:
      'Contenedores ISO por todo el país: Buenos Aires–NEA, NEA–Salta y desde el puerto de Corrientes.',
    description:
      'Semirremolques con trabas para contenedores de 20 y 40 pies, estándar y High Cube (HC).',
  },
  {
    icon: 'Package',
    title: 'Logística y distribución (NEA)',
    summary:
      'Picking, almacenaje y distribución en Chaco, Formosa, Corrientes, Misiones y norte de Santa Fe.',
    description:
      'Base de picking y almacenaje en Fontana, Chaco, que articula con las plantas de producción de nuestros clientes: retiramos la producción desde su planta y armamos el pedido acá, con cargas consolidadas. Trabajamos como socio estratégico de la operación.',
  },
  {
    icon: 'Globe',
    title: 'Transporte Internacional, Brasil y Paraguay',
    summary: 'Rutas al Mercosur hacia Brasil y Paraguay.',
    description:
      'Alianzas operativas con empresas de Brasil y Paraguay. Transportamos café, chocolate, industria alimenticia, química, autopartista y de envases.',
  },
];
