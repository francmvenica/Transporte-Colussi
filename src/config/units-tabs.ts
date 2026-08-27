// Pestañas de la sección Unidades (Fleet.astro).
//
// APROBADAS POR ROMUALDO EL 11/08 ("está bien, perfecto") sobre una propuesta de
// Franco. Construidas el 27/08, cuando aparecieron las dos fotos que les daban
// contenido.
//
// 🔴 ESTO REVIERTE UNA DECISIÓN DEL 08/08, Y NO ES UN DESCUIDO. Ese día se
// descartó "un bloque propio con fotos de taller" con el mismo criterio con el
// que se descartó ampliar la galería (contenido nuevo fuera de alcance). El
// 11/08 el propio cliente aprobó las pestañas, que es posterior y manda. Si
// alguien encuentra el descarte del 08/08 en `colussi-2da-ronda-correcciones.md`
// y cree que esto se coló, la respuesta está acá.
//
// 🔴 EL TALLER NO ES PROPIO Y EL TEXTO NO PUEDE DECIR QUE LO ES. Romualdo fue
// explícito: el mantenimiento se hace en el taller de la CONCESIONARIA. Por eso
// el copy dice "taller oficial de la marca" y no "nuestro taller".
//
// ⚠️ Y dice "de la marca", no "de IVECO", por decisión de Franco (27/08): las
// unidades Iveco ya se nombran en todo el sitio porque son los camiones que la
// empresa compró, pero afirmar por escrito un vínculo con la RED OFICIAL de
// Iveco es otra cosa, y nadie lo confirmó. Mismo criterio por el que Polivias
// salió del sitio entero el 30/07. Si algún día el cliente confirma la relación,
// se nombra; hasta entonces, no.
//
// 🔴 NINGÚN TEXTO DE ACÁ REPITE LAS SPECS DE `fleet.ts`. Es deliberado y hay que
// mantenerlo: los textos de este sitio ya están duplicados entre `services.ts`,
// `faq.ts` y `corridors.ts`, y cada vez que el cliente manda sacar una frase hay
// que barrer los tres archivos y encima el build. Las specs dan el DATO
// (mantenimiento según manual del fabricante, monitoreo satelital 24/7); las
// pestañas dan lo que el dato significa para el cliente. Si alguna vez estos
// textos empiezan a decir lo mismo que la spec de al lado, sobra uno de los dos.
export interface UnitTab {
  id: string;
  label: string;
}

export const UNIT_TABS: UnitTab[] = [
  { id: 'flota', label: 'Flota' },
  { id: 'mantenimiento', label: 'Mantenimiento preventivo' },
  { id: 'trafico', label: 'Sala de control y tráfico' },
];

// Vende CUMPLIMIENTO, que es lo que Romualdo pidió que se entendiera cuando
// dictó la spec el 08/08: "antes de que se rompa, ya estoy". No vende un taller.
export const MAINTENANCE_COPY =
  'Cada unidad entra a servicio antes de que aparezca la falla, en el taller oficial de la marca y con los plazos que fija el fabricante. Es lo que hace que una rotura no termine siendo una entrega que no llega.';

// 🔴 EL LAVADO HABLA DEL EQUIPO, NUNCA DEL HÁBITO, y esa distinción es todo el
// motivo por el que esta línea puede existir. El 08/08 la limpieza entró a la
// spec de mantenimiento porque el propio Romualdo la había metido ahí; el 11/08
// la bajó leyéndola en voz alta: "la limpieza no. Se entiende que está limpio;
// es como decir «me baño todos los días»". Lo que él bajó fue la AFIRMACIÓN de
// que lavan las unidades, por obvia. Mostrar la instalación es otra cosa: es un
// activo, como la fachada o la playa cubierta. Por eso este texto describe una
// máquina y no una costumbre. **Si alguna vez esta línea empieza a decir que las
// unidades se mantienen limpias, hay que borrarla: eso ya se decidió que no va.**
export const WASH_COPY =
  'Equipo de lavado automático propio, con arco de rodillos para tractora y semirremolque.';

// Aporta lo que la spec "Gestión de la Flota" no dice: QUIÉN es Tráfico para el
// cliente. El sector ya está nombrado en RRHH desde el 13/08 ("Desde el sector
// de Tráfico…"), así que el sitio no lo está inventando acá.
export const TRAFFIC_COPY =
  'El sector de Tráfico sigue cada viaje desde que la unidad sale hasta que descarga, con monitoreo satelital las 24 horas. Es a quien llama el cliente para saber dónde está su carga, y quien lo llama a él cuando algo cambia en la ruta.';

// 🔴 PLACEHOLDER VISIBLE A PROPÓSITO — Y ES BLOQUEANTE PARA PUBLICAR.
//
// La foto del centro de monitoreo no existe: es uno de los insumos que Romualdo
// debe pasar (tres operadoras de espaldas, mediodía). Franco decidió el 27/08
// construir igual las tres pestañas y dejar el hueco A LA VISTA, para que en la
// revisión conjunta funcione de recordatorio: "esto está, este hueco lo llenás
// vos".
//
// ⛔ ESO VALE SOLO PARA LA URL TEMPORAL DE REVISIÓN. El día que el sitio se
// publique en transportecolussi.com.ar, o llegó la foto, o esta pestaña sale.
// Un placeholder en el sitio productivo del cliente no es un recordatorio: es un
// sitio sin terminar.
export const TRAFFIC_PHOTO_PENDING = 'Foto del centro de monitoreo: pendiente';
