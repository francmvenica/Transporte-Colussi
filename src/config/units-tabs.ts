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
// 🔴 EL TEXTO DE MANTENIMIENTO LO DICTÓ ROMUALDO, NO SE REDACTA. Está en la
// transcripción del 11/08, en la misma charla donde aprobó las pestañas, y va
// palabra por palabra: es su voz y está aprobado por definición.
//
// ⚠️ Se escribió uno inventado el 27/08 y hubo que tirarlo. El dictado llevaba
// dos semanas en la minuta de Notion sin bajar a ningún archivo del proyecto:
// `estado-construccion.md` avisaba que el sketch de Antigravity no servía como
// fuente de texto, pero no decía que hubiera un texto del cliente esperando.
// **Antes de redactar para este sitio se busca en las transcripciones.**
//
// 🔴 IVECO SE NOMBRA, Y LO PIDIÓ ÉL. El 27/08 se había decidido escribir "taller
// oficial de la marca" para no afirmar por escrito un vínculo con la red oficial
// que nadie había confirmado (el criterio con el que Polivias salió del sitio).
// El dictado lo desmiente: Romualdo dice "el taller de la concesionaria IVECO" y
// además es su argumento de venta, "el que más sabe de camiones es el
// fabricante". Cuidarlo de nombrar a IVECO era cuidarlo de algo que quiere decir.
//
// 🔑 Y trae un dato que no estaba en ningún archivo del proyecto: HACEN CONTROL
// DIARIO PROPIO. El taller de la concesionaria refuerza ese control, no lo
// reemplaza — "nosotros también lo revisamos, pero además reforzamos nuestro
// control en los talleres del concesionario de la marca". No borrar ese "además
// de nuestro control diario": es la mitad del mensaje.
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

// DICTADO TEXTUAL DE ROMUALDO, 11/08. No se reescribe ni se "mejora": lo único
// que se hizo fue unir las dos frases con las que lo dijo. Vende lo que él quiso
// vender, que es cumplimiento — "antes de que se rompa, ya estoy" (08/08).
export const MAINTENANCE_COPY =
  'Nuestras unidades están atendidas por el que más sabe de camiones, que es el fabricante. Además de nuestro control diario, las unidades se verifican y se revisan preventivamente en el taller de la concesionaria IVECO, que es quien más sabe de la marca.';

// 🔴 LAS DOS FOTOS DE ESTA PESTAÑA NO LLEVAN PIE. No es un olvido de maquetación:
// es la única forma de que la del lavado pueda estar acá sin mentir.
//
// 1. **El lavadero NO es de la empresa** (dato de Franco, 27/08). El 27/08 esta
//    pestaña llegó a decir "equipo de lavado automático propio", deducido de que
//    la foto mostraba un camión de ellos. Nadie lo había verificado y era falso.
//    Es el mismo error que la playa cubierta, donde Romualdo tuvo que aclarar
//    "pero no es nuestra". **Ningún texto de acá afirma propiedad de nada.**
// 2. **"Limpieza" es una palabra que él bajó del sitio** el 11/08 leyendo la
//    spec en voz alta: "la limpieza no. Se entiende que está limpio; es como
//    decir «me baño todos los días»". Sin pie de foto, el sitio no la usa.
//
// ⚠️ Y AUN ASÍ LA FOTO VA, porque la pidió él. 07/08, textual: "te pasé una foto
// de la limpieza de las unidades (…) En la parte de mantenimiento. Cuando
// hablamos de mantenimiento preventivo, hablamos de la limpieza. Esta foto está
// muy buena para el mantenimiento". Mostrarla es su pedido; describirla era
// invento nuestro. **Si alguien la ve sin pie y cree que falta algo, esto es por
// qué está así.**

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
