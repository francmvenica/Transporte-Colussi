// Specs de flota. Fuente: brief de la empresa (2026-07-26), actualizado con lo
// que dictó Romualdo en la revisión del 29/07 y en la del 07/08.
//
// 🔴 ANTIGÜEDAD: CUARTA VUELTA (07/08) — historial completo para que nadie la
// "corrija" de nuevo. El brief original decía 5 años, Romualdo corrigió a 7 el
// 14/07 ("5 es muy mentiroso"), el cliente confirmó 6 el 27/07, y el 07/08
// pidió 8. Franco cerró en el punto intermedio: 7 años. Vale el último dato.
//
// 🔴 TRACTORAS (29/07): ENTRA LA 360, SALE LA 420. Quedan 320/330/360/380/410.
// Es un dato de flota real, no una lista de catálogo: si vuelve a aparecer la
// 420, está mal.
//
// 🔴 SEMIRREMOLQUES (29/07): se sumaron los ESCALABLES ("cuando teníamos esto no
// teníamos escalables, ahora sí") y los tonelajes que dio — escalable de 55,5 t
// brutas con tractor de dos ejes, otro escalable de 52,5 t, convencional 45 t.
// Y se sacó "con trabas para contenedor" de la frase de la baranda volcable:
// "eso no se necesita, la baranda, para el contenedor". La capacidad para
// contenedores vive en su propia ficha de servicio, no acá.
//
// ⛔ NI TRACTORAS NI SEMIRREMOLQUES SE TOCAN EN LA RONDA DEL 07/08. Romualdo
// propuso invertir el orden de las dos specs y se retractó solo, en la misma
// reunión: "está bien, porque esto le dice al cliente cuánto puede cargar". Si
// vuelve a aparecer la idea, ya se descartó en la mesa.
//
// 🔴 MANTENIMIENTO PREVENTIVO — 5ª SPEC, NUEVA EL 08/08, y entra ACOTADA a esta
// tarjeta de texto (NO una sección propia con fotos de taller: eso se
// descartó, mismo criterio que la galería). Vende CUMPLIMIENTO — que el
// cliente entienda que no se deja de cumplir porque se rompe un camión
// ("antes de que se rompa, ya estoy"). La pieza del dictado que hay que
// conservar sí o sí es "de todas nuestras unidades": es la garantía real, no es
// lo mismo hacer mantenimiento que hacerlo en TODA la flota.
//
// 🔴 "Y LIMPIEZA" SALIÓ EL 11/08, Y LO SACÓ EL MISMO QUE LO HABÍA PEDIDO. El
// 08/08 la limpieza entró acá justamente porque Romualdo la había metido dentro
// del concepto de mantenimiento ("cuando hablamos del mantenimiento, hablamos
// mantenimiento preventivo, hablamos de la limpieza"), y se anotó como un
// dictado recuperado que casi se pierde. Tres días después, leyendo la ficha en
// voz alta, la bajó: "la limpieza no. Se entiende que está limpio; es como
// decir «me baño todos los días»". **No se repone.** Se deja escrito el
// recorrido completo para que nadie lea el comentario viejo y la devuelva
// creyendo que se perdió otra vez.
//
// NO va en config/services.ts /
// "Nuestros Servicios": Romualdo puso el límite ("ese es el servicio a los
// clientes; después vos estás contando cosas internas") — mantenimiento y
// monitoreo son internos, no un servicio a terceros.
export interface FleetSpec {
  label: string;
  value: string;
}

export const FLEET_SPECS: FleetSpec[] = [
  {
    label: 'Semirremolques',
    value:
      'Capacidad de 28 y 30 pallets (14,50 m / 15,30 m). Curtain sider, baranda volcable de arco y lona y unidades escalables de 52,5 y 55,5 toneladas brutas (convencional, 45 t).',
  },
  {
    label: 'Unidades Tractoras',
    value: '320 / 330 / 360 / 380 / 410 CV. Distintas potencias para cada servicio.',
  },
  {
    label: 'Gestión de la Flota',
    value: 'Optimización en tiempo real y monitoreo satelital 24/7 desde nuestro centro de tráfico propio.',
  },
  {
    label: 'Antigüedad Promedio',
    value: '7 años. Renovación constante.',
  },
  {
    label: 'Mantenimiento Preventivo',
    value:
      'Hacemos mantenimiento preventivo a todas nuestras unidades, según manual del fabricante, para mayor seguridad en la operación.',
  },
];
