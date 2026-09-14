// Clientes reales — logos entregados por Juan Manuel (2026-07-27), 26 en total.
// Reemplaza el listado provisorio de 7 nombres sin logo (brief de la empresa, 2026-07-26).
// Nombres verificados contra lo que dice cada imagen, no contra el nombre de archivo
// de origen (varios archivos venían mal nombrados o con errores de tipeo).
//
// PENDIENTE: quedó un logo sin incorporar — "g.png" del material entregado, una "G"
// estilizada sin texto ni marca reconocible. No se pudo identificar de qué empresa es.
// Preguntar a Juan Manuel antes de sumarlo (no se publica un logo con alt inventado).
//
// ─────────────────────────────────────────────────────────────────────────────
// `featured` = ES UN PRINCIPAL. Cambió de significado el 2026-07-30.
//
// ANTES era la ZONA: true = grilla estática arriba, false = cinta abajo. Esas
// dos zonas eran, literalmente, lo que el cliente pidió sacar en la revisión
// del 29/07 — Juan Manuel: "lo que más me interesa a mí es que no quede claro
// que estamos discriminando (…) que estén todos en la misma línea, pero que
// Arcor, Nestlé y Molino se vean más"; Romualdo, mirando la sección: "esto
// queda lindo, pero me dice que estos son los principales".
//
// AHORA hay UNA sola cinta con todos, y `featured` decide dos cosas:
//   1. que el cliente esté en el cuadro CONGELADO inicial (el "primer
//      pantallazo" que pidió Romualdo: "la primera imagen te deja fijado los
//      11, 12 principales"), y
//   2. que se REPITA más adelante en la cinta, separado ("repetir los
//      importantes, pero que se separe la repetición").
// Nadie queda afuera de la cinta: los no-principales aparecen una vez.
//
// EL CRITERIO DE PRINCIPAL LO DIO ROMUALDO: "los principales de hoy que nos
// dan la facturación" — factura hoy, no histórico. Por eso Aguas Danone salió
// de principales ("esto iría en el segundo").
//
// 🔴 EL ORDEN DEFINITIVO NO ESTÁ: sale de una foto que Romualdo se comprometió
// a pasar y todavía no llegó. Lo que dejó cerrado de viva voz y está aplicado
// acá: Walmart 1º y Dorinka 2º van juntos, y el corte llega "hasta Malsa".
// Lo que queda A CONFIRMAR con esa foto: si Molino Cañuelas sube ("también
// puede ir arriba", dijo) y si Quilmes es principal o no (de Quilmes no dijo
// nada — salió de principales por el criterio de facturación, no por pedido).
// Mover un cliente entre principales y resto es cambiar este booleano.
//
// ✅ DORINKA RESUELTO EL 08/08 — no hacía falta el logo. Romualdo: "en realidad
// el cliente no es GDN, es Dorinka. Si yo trabajo en Dorinka y me pone GDN, es
// como que está poniendo el nombre de mi papá". Investigado el 08/08: DORINKA
// S.R.L. es la sociedad operativa del Grupo de Narváez —la firma que compró
// Walmart Argentina en 2020 y hoy opera ChangoMás/MASonline—, y está
// registrada como marca DENOMINATIVA (solo la palabra, sin diseño gráfico).
// Escribirla con la tipografía del sitio no fabrica un activo de marca ajeno:
// ES la marca. (Dato del registro publicado en w20argentina.com, no verificado
// en el INPI; si hace falta cerrarlo, esa es la fuente oficial.)
// Por eso Dorinka entra como CELDA DE TEXTO en la cinta (campo `image`
// opcional, ver la interfaz de abajo), no como imagen. El archivo
// grupo-de-narvaez.png deja de usarse — no se borra del disco por las dudas,
// solo se saca del import.
//
// ⚠️ WALMART SE QUEDA, a propósito: Walmart y Dorinka son hoy el mismo cliente
// (las tiendas de Walmart Argentina se rebrandearon a ChangoMás tras la
// compra), y Romualdo pidió mantener los dos ("dejamos solamente Walmart…
// pero ponele Dorinka para que ellos no se sientan discriminados"). Decisión
// de Franco: se muestran ambos. Queda abierto que el logo de Walmart es de una
// marca que ya no opera en el país y está entre las que no tienen autorización
// de uso confirmada — no bloquea, es el mismo riesgo de marca de siempre.
// ─────────────────────────────────────────────────────────────────────────────
import type { ImageMetadata } from 'astro';

// ═════════════════════════════════════════════════════════════════════════════
// 🔴 INTERRUPTOR DE LA CINTA DE CLIENTES: 'logos' o 'nombres'. TEMPORAL.
// ═════════════════════════════════════════════════════════════════════════════
//
// DESDE EL 14/09 LA CINTA MUESTRA NOMBRES, NO LOGOS. No hay autorización de uso
// de marca de ninguno de los clientes (Nestlé, Arcor, Walmart…), y si alguno
// objeta le cae a Romualdo. Mientras tanto cada cliente se ve escrito con el
// mismo estilo con el que ya se veía Dorinka. Decisión de Franco (14/09).
//
// ⚠️ La minuta de la recorrida del 14/09 dice que Romualdo prefería sacar la
// cinta y dejar solo el párrafo de rubros. Franco eligió la cinta de nombres
// sabiéndolo.
//
// QUÉ DISPARA LA VUELTA: Romualdo quedó a cargo de sondear a los clientes,
// empezando por Arcor ("si los principales no tienen problema, listo").
//
// ✅ CÓMO VOLVER A LOS LOGOS (nada más que esto):
//   1. Cambiar 'nombres' por 'logos' en la línea de abajo.
//   2. npm run build, y comprobar que sale igual a lo que estaba publicado:
//      node scripts/extraer-cinta.mjs --comparar
//      Tiene que dar 0 diferencias.
//   3. Merge a main.
// No hay que reponer imágenes, descomentar código ni tocar otro archivo: todo
// el modo logos (imports, visualScale, orden, posición de Dorinka) sigue vivo
// en este archivo y en SocialProof.astro.
export const CLIENTES_MODO: 'logos' | 'nombres' = 'nombres';

import nestle from '../assets/images/clientes/nestle.png';
import arcor from '../assets/images/clientes/arcor.png';
import walmart from '../assets/images/clientes/walmart.png';
import quilmes from '../assets/images/clientes/quilmes.png';
import aguasDanone from '../assets/images/clientes/aguas-danone.png';
import molinosRioDeLaPlata from '../assets/images/clientes/molinos-rio-de-la-plata.png';
import establecimientoLasMarias from '../assets/images/clientes/establecimiento-las-marias.png';
import softys from '../assets/images/clientes/softys.png';
import vicentin from '../assets/images/clientes/vicentin.png';
import chep from '../assets/images/clientes/chep.png';
import ferrum from '../assets/images/clientes/ferrum.png';
import aconTimber from '../assets/images/clientes/acon-timber.png';
import buyatti from '../assets/images/clientes/buyatti.png';
import grupoCepas from '../assets/images/clientes/grupo-cepas.png';
import unionAgricolaAvellaneda from '../assets/images/clientes/union-agricola-avellaneda.png';
import rpbBaggio from '../assets/images/clientes/rpb-baggio.png';
import molinosAgro from '../assets/images/clientes/molinos-agro.png';
import molinoCanuelas from '../assets/images/clientes/molino-canuelas.png';
import nutricorrientes from '../assets/images/clientes/nutricorrientes.png';
import solfrut from '../assets/images/clientes/solfrut.png';
import fiplasto from '../assets/images/clientes/fiplasto.png';
import colven from '../assets/images/clientes/colven.png';
import malsa from '../assets/images/clientes/malsa.png';
import sanesa from '../assets/images/clientes/sanesa.png';
import cefas from '../assets/images/clientes/cefas.png';

export interface Client {
  name: string;
  /** Sin imagen = se renderiza como celda de TEXTO (ver Dorinka). Es el caso de
   *  una marca denominativa: no hay logo que reproducir porque la marca ES el
   *  nombre.
   *  ⚠️ La celda de texto NO usa `visualScale` — su tamaño es la clase de fuente
   *  en SocialProof.astro, hoy `text-2xl sm:text-4xl`. Subió desde
   *  `text-lg sm:text-xl` el 10/08 a pedido del cliente: 20px de texto al lado
   *  de logos de 64px de alto se leía como un cliente de segunda. Si algún día
   *  entra otra marca denominativa con nombre LARGO, revisar que no se corte —
   *  la celda mide un tercio del ancho de la cinta. */
  image?: ImageMetadata;
  /** Nombre que se ve en la cinta cuando CLIENTES_MODO = 'nombres' (14/09).
   *  Solo lo llevan los nombres que no entran en un tercio de la cinta al
   *  tamaño de la celda de Dorinka. La lista de texto de "Ver más clientes" y
   *  el aria-label usan siempre `name`, completo: es lo que leen los motores.
   *  En modo logos no se usa. */
  shortName?: string;
  /** Clases de TAMAÑO de letra para la cinta de nombres, en TODOS los anchos,
   *  solo para el nombre que no entra con el general (`text-xl sm:text-4xl`).
   *  Reemplaza a esas dos clases enteras. En modo logos no se usa.
   *
   *  Hoy lo lleva solo NutriCorrientes. Es una sola palabra y no se puede
   *  partir: mide ~7,4 px de ancho por cada px de letra. Decisión de Franco:
   *  achicar solo esa celda, y aceptar que se vea más chica que los otros once
   *  principales. Medido contra el ancho de la CELDA (.vlogo), el 14/09:
   *    · Celular: celda de 106 px (101 a 360). text-xs (12 px → 89 px). A 14 px
   *      medía ~104 contra 93 útiles.
   *    · 640 a 1023: celda de 181 a 219. text-2xl (24 px → ~177).
   *    · Desde 1024: celda de 240. text-3xl (30 px → ~222). A 36 px medía 266.
   *  ⚠️ A 768 la celda mide 219 y text-3xl (222) NO entra: por eso el salto va
   *  en lg y no en md.
   *
   *  También lo lleva "Molinos Río de la Plata", pero por ALTO y no por ancho:
   *  entre 640 y ~720 px, a 36 px partía en 3 renglones (130 px de alto en una
   *  fila de 96), invadía la fila de abajo y el cuadro inicial mostraba 11
   *  principales. Desde 730 entra en 2. Queda a 30 px solo entre 640 y 767
   *  (70 px de alto) y vuelve a 36 desde md. En celular sigue en text-xl, igual
   *  que el resto. Decisión de Franco (14/09).
   *
   *  🔴 EL CORTE EN DESKTOP LO ENCONTRÓ FRANCO MIRANDO EL SITIO PUBLICADO, no la
   *  verificación. Se había medido el `<p>` contra su propio ancho, y el `<p>`
   *  vive en un flex centrado que se estira al texto: la comparación da siempre
   *  igual y nunca detecta nada. Se mide el Range del texto contra `.vlogo`. */
  textoTamanos?: string;
  /** En la LISTA DE TEXTO ("Ver más clientes" y el aria-label de la cinta),
   *  este cliente va inmediatamente después del nombrado acá. No toca la cinta:
   *  el orden de la cinta sale del orden de este array, que está calculado.
   *  Hoy: Dorinka junto a Walmart (14/09, pedido de Franco mirando el sitio
   *  publicado: "Walmart, Dorinka" juntos con una coma). En la cinta ya iban
   *  pegadas por la posición calculada del 11/08; en la lista quedaban
   *  separadas por Quilmes y Molino Cañuelas, porque ahí manda el orden del
   *  array tal cual. */
  listaJuntoA?: string;
  featured: boolean;
  /** Ajuste fino de escala visual (1 = tamaño base), calibrado el 08/08 en DOS
   *  pasadas: primero con el bbox de contenido no-transparente de cada PNG
   *  (medido con Pillow, no a ojo), después verificado con
   *  `getBoundingClientRect()` sobre la cinta ya renderizada en el navegador
   *  (a 1280px) y reajustado donde el modelo de Pillow no acertó del todo —
   *  el `object-contain` real fitea el CANVAS completo, no el contenido
   *  recortado, así que el modelo es una aproximación, no el dato final.
   *  A igual caja `max-h`/`max-w`, un PNG con mucho margen interno o un
   *  aspect ratio muy angosto/muy ancho rinde un tamaño ÓPTICO distinto al de
   *  sus vecinos, que es justo lo que Romualdo señaló (CEFAS y Colven se veían
   *  grandes; Nestlé y Arcor, chicos — los cuatro quedaron entre 0.87x y 1.07x
   *  del promedio medido, prácticamente iguales). No tocar por facturación
   *  del cliente — la calibración es solo geométrica. */
  visualScale?: number;
}

export const CLIENTS: Client[] = [
  // ── Principales (12): cuadro congelado inicial + repetidos en la cinta.
  // El ORDEN de este bloque es el que se ve en el primer pantallazo, así que
  // importa. Este orden lo definió Franco el 30/07.
  //
  // 🟢 DORINKA VUELVE A IR PEGADA A WALMART (11/08). Este bloque decía que
  // Franco había decidido "Walmart último", contradiciendo lo que Romualdo
  // dictó el 29/07 ("Walmart y Dorinka van juntos"). El 11/08 Romualdo lo
  // repitió sin que se lo preguntaran —"Dorinka iría junto con Walmart, uno es
  // sucesión del otro"— y Franco lo aprobó. **Se cumple el pedido original:**
  // Walmart cierra los destacados y Dorinka abre el resto, así que en la cinta
  // quedan una atrás de la otra. Tiene sentido de negocio: son la misma firma
  // (Dorinka S.R.L. es la sociedad operativa del Grupo de Narváez, que compró
  // Walmart Argentina en 2020).
  //
  // ══════════════════════════════════════════════════════════════════════════
  // 🔴 JERARQUÍA POR TAMAÑO — 11/08. LEER ESTO ANTES DE TOCAR UN `visualScale`.
  // ══════════════════════════════════════════════════════════════════════════
  //
  // Hasta el 10/08 el criterio era **igualar**: todos los logos con el mismo
  // peso óptico, porque el 07/08 Romualdo fue explícito ("todos iguales", nadie
  // se agranda por facturar más). **El 11/08 pidió lo contrario:** que los
  // principales se destaquen y los secundarios se achiquen. Franco se lo marcó
  // en la reunión, él contestó "tenelo en cuenta" sin cerrarlo, y **Franco
  // decidió aplicarlo igual**. No es un descuido: es la segunda vez que el
  // criterio se da vuelta.
  //
  // ⚠️ `visualScale` NO ES EL TAMAÑO PERCIBIDO: es la corrección del aire
  // interno de cada PNG. Medido el 11/08 sobre el render real (bbox no
  // transparente en `<canvas>`, alfa > 24), la mediana de área visual era 6940
  // y estos eran los extremos:
  //   · CEFAS y Buyatti tenían `0.8` y se veían en **1.01× la mediana**.
  //   · Nestlé, Arcor y CHEP tenían `1.45` y se veían en **0.71–0.74×**.
  // O sea que dos logos con escalas opuestas se veían casi iguales. **Por eso
  // los números de abajo no se eligieron a ojo ni se movieron "un poco":** cada
  // uno sale de `escalaActual × √(áreaObjetivo / áreaMedida)`, con objetivo
  // 1,20× la mediana para los destacados y 0,72× para los secundarios.
  //
  // 🔎 La percepción del cliente dio EXACTA en los cinco casos que señaló. Lo
  // más notable: dijo "UAA es más grande que Arcor" y la medición da 1,26×
  // contra 0,73× — se veía un 73% más grande. **Cuando el dueño dice que un
  // logo está chico, medí antes de discutir.**
  //
  // ⚠️ RIESGO ASUMIDO por Franco: CEFAS, Vicentin y Buyatti bajan por debajo de
  // 0,8, que era el piso de toda la cinta. Un logo mucho más chico que su vecino
  // se lee distinto de "no destacado", que es justo lo que Romualdo quería
  // evitar el 07/08 (que los clientes chicos "no se sientan discriminados").
  // **Si al verlo no cierra, el ajuste es subir el piso de los secundarios, no
  // rehacer la calibración.**
  //
  // 🔴 DOS AJUSTES A PEDIDO DE FRANCO (13/08), MIRANDO EL SITIO PUBLICADO, que
  // se apartan de la calibración de arriba y por eso quedan escritos acá:
  //   · **SolFrut baja 20%** (1.37 → 1.10). Ojo con la consecuencia: SolFrut era
  //     uno de los 10 que Romualdo mandó AGRANDAR el 11/08, y con este ajuste
  //     sale del grupo de destacados y cae dentro del pelotón. Es un cambio de
  //     criterio sobre un pedido del cliente, no un error de calibración.
  //   · **Molinos Agro sube, pero MUCHO MENOS del 20% pedido** (0.86 → 0.88), y
  //     la razón está medida: con 0.86 ya se veía en **1,17×**, o sea a la par
  //     de los diez destacados, porque la calibración del 11/08 no lo tocó. El
  //     +20% completo (1.03) lo dejaba en **1,40×: el logo más grande de toda la
  //     cinta**, un cliente NO destacado por encima de Nestlé, Arcor y Malsa.
  //     Con 0.88 queda **medido en 1,03×**: arriba del pelotón (0,72–0,99×) y
  //     debajo de los diez destacados (1,16–1,21×), que es donde corresponde un
  //     cliente que no está en esa lista. **Franco eligió esto sabiendo que el
  //     aumento sobre la escala es del 3% y no del 20% que había pedido.**
  //
  // ⚠️ **Los múltiplos de dos corridas distintas NO se comparan entre sí:** la
  // mediana se recalcula sobre el conjunto, así que al mover un logo se mueve la
  // vara. El 1,17× y el 1,40× de arriba son de la corrida anterior y el 1,03× de
  // esta. Cada corrida se lee internamente: quién está arriba de quién.
  //
  // **Un ajuste porcentual SÍ se puede aplicar directo sobre `visualScale`**,
  // aunque el número no represente el tamaño percibido: el área renderizada es
  // proporcional a la escala, así que multiplicar por 0,8 achica un 20% de
  // verdad. Lo que no se puede hacer a ojo es **fijar** un valor absoluto.
  //
  // 🔑 **Y la lección del caso Molinos Agro: un porcentaje se aplica sobre lo
  // que el logo YA mide, no sobre lo que parece medir.** Pedir "+20%" sobre algo
  // que ya estaba arriba del promedio lo dispara fuera de la escala. Antes de
  // aplicar un ajuste relativo, mirar dónde está parado ese logo en el ranking.
  { name: 'Molinos Río de la Plata', textoTamanos: 'text-xl sm:text-3xl md:text-4xl', image: molinosRioDeLaPlata, featured: true, visualScale: 1.24 }, // ↑ 1.22 · medía 1.16×
  { name: 'Nestlé', image: nestle, featured: true, visualScale: 1.88 }, // ↑ 1.45 · medía 0.71×, de los más chicos pese a la escala alta
  { name: 'Arcor', image: arcor, featured: true, visualScale: 1.86 }, // ↑ 1.45 · medía 0.73×
  { name: 'Establecimiento Las Marías', shortName: 'Las Marías', image: establecimientoLasMarias, featured: true, visualScale: 1.12 }, // ↑ sin escala · medía 0.96×
  { name: 'Softys', image: softys, featured: true, visualScale: 1.06 }, // ↑ sin escala · medía 1.07×
  { name: 'ACON TIMBER', image: aconTimber, featured: true, visualScale: 1.05 }, // ↑ sin escala · medía 1.08×
  { name: 'NutriCorrientes', textoTamanos: 'text-xs sm:text-2xl lg:text-3xl', image: nutricorrientes, featured: true, visualScale: 1.04 }, // ↑ sin escala · medía 1.10×
  { name: 'SolFrut', image: solfrut, featured: true, visualScale: 1.1 }, // ↓ 1.37 (−20%, Franco 13/08) · ver la nota de abajo: sale del grupo de destacados
  { name: 'Colven', image: colven, featured: true, visualScale: 0.8 }, // sin cambio: no está en ninguna de las dos listas
  { name: 'CHEP', image: chep, featured: true, visualScale: 1.84 }, // ↑ 1.45 · medía 0.74×
  { name: 'Malsa', image: malsa, featured: true, visualScale: 2.16 }, // ↑ 1.7 · medía 0.74×. Ver nota de abajo
  // ⚠️ MALSA ES EL CASO EXTREMO y por eso su número asusta. Su PNG tiene el
  // contenido en el 39% del alto del canvas y el resto es aire, así que
  // `object-contain` fitea el vacío. Ya venía de 1.2 → 1.7 el 10/08. Con 2.16
  // el canvas escalado desborda la celda, **pero lo que desborda es
  // transparente**: no se ve ni tapa al vecino (verificado el 10/08 y
  // re-verificado ahora). La solución de fondo sería recortar el PNG.
  { name: 'Walmart', image: walmart, featured: true, visualScale: 0.84 }, // sin cambio · cierra los destacados
  // ── Resto: aparecen una vez en la cinta, en la misma línea que los de arriba.
  //
  // 🔴 EL ORDEN DE ESTE ARRAY NO ES EL ORDEN EN PANTALLA. `SocialProof.astro`
  // reparte la lista entre **3 columnas por módulo** (la columna `col` se queda
  // con los índices col, col+3, col+6…), así que dos entradas consecutivas acá
  // terminan en columnas distintas y NO se ven juntas.
  //
  // Por eso Dorinka está TERCERA y no primera. Para que caiga pegada a Walmart
  // tiene que cumplir dos condiciones a la vez:
  //   1. Caer en la **columna 2**, que es donde está Walmart (índice 11 de los
  //      principales; 11 % 3 = 2). O sea: índice ≡ 2 (mod 3) dentro del resto.
  //   2. Ser **la primera del resto en esa columna**, porque el ciclo de cada
  //      columna arranca con sus principales y Walmart es el último de los suyos.
  // Con Dorinka en el índice 2 se cumplen las dos y queda inmediatamente
  // después de Walmart. **Si se agrega o se saca una entrada antes que ella,
  // se rompe y hay que recontar** — verificado en el DOM, no supuesto.
  // 🔴 NOMBRE DE LA SOCIEDAD, NO DE LA MARCA (14/09). Romualdo: "ese era el
  // nombre de la empresa cuando yo trabajaba, porque ahora Quilmes es una
  // marca". Corrige también el alt del logo: es la única diferencia del modo
  // logos contra lo publicado antes del 14/09.
  // ⚠️ En la cinta de nombres va "Quilmes" corto porque el completo no entra en
  // la celda. Tensión aceptada por Franco: la cinta muestra la marca que él
  // corrigió; la lista de texto lleva la sociedad.
  { name: 'Cervecería y Maltería Quilmes', shortName: 'Quilmes', image: quilmes, featured: false }, // ⚠️ a confirmar con la foto
  { name: 'Molino Cañuelas', image: molinoCanuelas, featured: false, visualScale: 1.37 }, // ⚠️ "también puede ir arriba"
  { name: 'Dorinka', listaJuntoA: 'Walmart', featured: false }, // 🟢 POSICIÓN CALCULADA (11/08) para caer pegada a Walmart — ver nota de arriba. Marca denominativa, sin logo: va como celda de texto
  { name: 'Aguas Danone', image: aguasDanone, featured: false, visualScale: 0.84 }, // bajado por pedido explícito
  { name: 'Vicentin', image: vicentin, featured: false, visualScale: 0.64 }, // ↓ 0.8 · medía 1.13× · "no es importante, ya no existe más"
  { name: 'Ferrum', image: ferrum, featured: false, visualScale: 1.38 },
  { name: 'Buyatti', image: buyatti, featured: false, visualScale: 0.68 }, // ↓ 0.8 · medía 1.01×, no 0.8
  { name: 'Grupo Cepas', image: grupoCepas, featured: false, visualScale: 1.15 },
  { name: 'Unión Agrícola de Avellaneda', shortName: 'UAA', image: unionAgricolaAvellaneda, featured: false, visualScale: 0.76 }, // ↓ sin escala · era el MÁS GRANDE (1.26×)
  { name: 'RPB Baggio', image: rpbBaggio, featured: false, visualScale: 1.29 },
  { name: 'Molinos Agro', image: molinosAgro, featured: false, visualScale: 0.88 }, // ↑ 0.86 · ver la nota de arriba: el +20% que se pidió lo dejaba PRIMERO de toda la cinta. La advertencia vieja decía "NO se toca" porque el "Molinos" que Romualdo mandó agrandar el 11/08 era Río de la Plata, que es OTRA empresa y tiene su propia línea. Sigue valiendo: son dos clientes distintos y no se confunden
  { name: 'Fiplasto', image: fiplasto, featured: false, visualScale: 0.8 },
  { name: 'Sanesa', image: sanesa, featured: false, visualScale: 0.86 },
  { name: 'CEFAS', image: cefas, featured: false, visualScale: 0.68 }, // ↓ 0.8 · medía 1.01× · "ni me calientan"
];

// Sectores atendidos (brief de la empresa, sección 4 y 9).
// 🔴 DESDE EL 08/08 YA NO SE VEN EN LA LÍNEA VISIBLE bajo el H2 de Clientes:
// bajaron al bloque plegado (<details>), a pedido explícito de Romualdo y con
// el motivo dicho en voz alta — "para que la IA te lo tome". Siguen
// existiendo en el sitio, solo que plegados: un motor los lee igual, porque el
// pliegue es CSS, nunca JS. Ver SocialProof.astro.
// Ampliados el 30/07 con los que dictó Romualdo para el servicio internacional
// (café, chocolate, química, autopartista, envases). "Industria alimenticia"
// no se sumó aparte: ya estaba como "Alimentos".
// 🔴 "tissue" SALIÓ el 08/08 ("Papel y tissue" → "Papel"), pedido explícito de
// Romualdo sobre esta misma lista ("sacale el de tissue"). Ver también FAQ #7.
// ⚠️ Esta misma lista está hardcodeada en la respuesta de rubros de
// config/faq.ts. Si se toca una, se toca la otra.
export const SECTORS: string[] = [
  'Consumo masivo',
  'Alimentos',
  'Café',
  'Chocolate',
  'Yerba mate',
  'Papel',
  'Madera',
  'Química',
  'Autopartista',
  'Envases',
];
