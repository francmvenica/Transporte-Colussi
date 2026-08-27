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
// 🔴 EL TEXTO DE MANTENIMIENTO SALE DE UN DICTADO DE ROMUALDO, NO SE INVENTA.
// Está en la transcripción del 11/08, en la misma charla donde aprobó las
// pestañas. Franco decidió pulirlo en vez de publicarlo literal (ver la nota
// sobre `MAINTENANCE_COPY`, que conserva el original), pero el mensaje es suyo:
// esto no se redacta de cero.
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
  { id: 'mantenimiento', label: 'Mantenimiento Preventivo' },
  { id: 'trafico', label: 'Sala de Control y Tráfico' },
];

// REDACCIÓN SOBRE EL DICTADO DE ROMUALDO DEL 11/08, pulida por decisión de
// Franco (27/08): mismo mensaje, registro más profesional, menos literal.
//
// 📌 El dictado original, que es la fuente y lo que él espera leer:
//   "Nuestras unidades están atendidas por el que más sabe de camiones, que es
//   el fabricante. Además de nuestro control diario, las unidades se verifican y
//   se revisan preventivamente en el taller de la concesionaria IVECO, que es
//   quien más sabe de la marca."
//
// 🔴 LAS CUATRO COSAS QUE NO SE PUEDEN PERDER AL TOCAR ESTE TEXTO, porque son el
// mensaje y no el estilo:
//   1. El argumento de venta es que **el que más sabe de camiones es el
//      fabricante**. Sin eso, la frase deja de decir algo y pasa a ser relleno.
//   2. **El control diario es propio.** Dato que no está en ningún otro archivo
//      del proyecto y que salió solo de esta transcripción.
//   3. El taller de la concesionaria **REFUERZA ese control, no lo reemplaza**.
//      Romualdo lo aclaró aparte: "nosotros también lo revisamos, pero además
//      reforzamos nuestro control en los talleres del concesionario". Si el
//      texto queda diciendo que el mantenimiento lo hace el concesionario y
//      punto, está mal.
//   4. **IVECO se nombra**, y lo pidió él.
//
// Qué se cambió y por qué: la construcción "el que más sabe de…" aparecía dos
// veces en tres renglones, y "se verifican y se revisan" es la misma idea dicha
// dos veces. Quedó una sola vez cada una.
//
// ⚠️ Franco asumió el riesgo de que Romualdo note que su dictado no está
// textual. Si lo objeta, se repone el original de arriba tal cual.
// 📐 El dictado se REPARTE entre título y párrafo, no se repite en los dos. La
// maqueta de referencia del 27/08 ponía la primera frase como título y después
// el párrafo entero abajo, empezando otra vez por esa misma frase: el lector la
// leía dos veces seguidas.
export const MAINTENANCE_HEADLINE = {
  texto: 'El mantenimiento, en manos de quien más sabe de camiones: ',
  destacado: 'el fabricante.',
};

export const MAINTENANCE_COPY =
  'Al control diario que hacemos en la empresa se suma la revisión preventiva en el taller de la concesionaria IVECO, con el respaldo técnico de la marca.';

// 🔴 LOS RÓTULOS DE LAS FOTOS SON DESCRIPTIVOS Y NADA MÁS. Describen lo que se ve
// en la imagen; no afirman nada sobre la operación que no esté dictado.
//
// ⚠️ LA MAQUETA DE REFERENCIA TRAÍA CUATRO TEXTOS QUE NO SE PUBLICARON, y conviene
// que quede escrito cuáles, porque son de los que vuelven:
//   1. **"Repuestos 100% Originales"** — nadie lo dijo nunca. Es una afirmación
//      sobre la operación del cliente, inventada.
//   2. **"Garantía Oficial IVECO"** — igual, y más grave: afirma una relación de
//      garantía con IVECO. Es justo lo que se decidió no afirmar sin
//      confirmación, y va más lejos que el "taller oficial" ya descartado.
//   3. **"Alistamiento & Limpieza"** — usa LIMPIEZA, la palabra que Romualdo bajó
//      del sitio el 11/08. Hay un gate que verifica que dé 0 en todo el build.
//   4. **"taller oficial homologado"** y **"inspección operativa diaria"** —
//      "homologado" es un término técnico con peso que nadie confirmó, y la
//      inspección diaria se le estaba colgando a la foto del lavado.
//
// 📌 Los puntos 1 y 2 se pueden publicar el día que Romualdo los confirme: son
// datos de su operación, no opiniones. Hasta entonces no van.
//
// 🔑 Es la segunda maqueta que llega con texto inventado adentro (la primera fue
// el sketch de Antigravity, con "taller propio" e "higiene intensiva"). **Una
// maqueta define el layout de esta sección, nunca su contenido.**
export const MAINTENANCE_PHOTOS = {
  taller: { rotulo: 'Taller Concesionaria IVECO', pie: 'Revisión preventiva con la cabina abierta' },
  lavado: { rotulo: 'Lavado automático', pie: 'Lavado de tractora y semirremolque' },
};

// 🔴 DOS RESTRICCIONES QUE MANDAN SOBRE CUALQUIER TEXTO QUE ACOMPAÑE ESTAS FOTOS,
// y sobrevivieron a que el layout cambiara dos veces el mismo día:
//
// 1. **El lavadero NO es de la empresa** (dato de Franco, 27/08). Esta pestaña
//    llegó a decir "equipo de lavado automático propio", deducido de que la foto
//    mostraba un camión de ellos. Nadie lo había verificado y era falso. Es el
//    mismo error que la playa cubierta, donde Romualdo tuvo que aclarar "pero no
//    es nuestra". **Ningún texto de acá afirma propiedad de nada.**
// 2. **"Limpieza" es una palabra que él bajó del sitio** el 11/08 leyendo la spec
//    en voz alta: "la limpieza no. Se entiende que está limpio; es como decir
//    «me baño todos los días»". Por eso el rótulo dice "Lavado automático" y no
//    "Alistamiento & Limpieza", como proponía la maqueta.
//
// ⚠️ Y LA FOTO DEL LAVADO VA PORQUE LA PIDIÓ ÉL. 07/08, textual: "te pasé una
// foto de la limpieza de las unidades (…) En la parte de mantenimiento. Cuando
// hablamos de mantenimiento preventivo, hablamos de la limpieza. Esta foto está
// muy buena para el mantenimiento."
//
// 📌 Primero se resolvió no ponerle pie a ninguna de las dos (27/08, mañana), y
// funcionaba. Al llegar la maqueta con rótulos, Franco decidió ponérselos: el
// criterio pasó a ser **describir lo que la foto muestra**, que es compatible con
// las dos restricciones de arriba. Queda escrito el camino porque el pie de foto
// de esta pestaña es donde se colaron las tres afirmaciones inventadas.
//
// ⚠️ Ojo con una decisión vecina que NO se tocó: **la galería de Flota sigue sin
// títulos sobre las fotos** (pedido de Franco del 31/07, se le eliminó hasta el
// degradado). Que estas dos lleven rótulo no reabre aquello: son secciones
// distintas y pedidos distintos.

// Aporta lo que la spec "Gestión de la Flota" no dice: QUIÉN es Tráfico para el
// cliente. El sector ya está nombrado en RRHH desde el 13/08 ("Desde el sector
// de Tráfico…"), así que el sitio no lo está inventando acá.
export const TRAFFIC_HEADLINE = {
  texto: 'Cada viaje, seguido desde que la unidad sale hasta que ',
  destacado: 'descarga.',
};

export const TRAFFIC_COPY =
  'El sector de Tráfico trabaja con monitoreo satelital las 24 horas. Es a quien llama el cliente para saber dónde está su carga, y quien lo llama a él cuando algo cambia en la ruta.';

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
