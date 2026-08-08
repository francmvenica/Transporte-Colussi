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
   *  nombre. */
  image?: ImageMetadata;
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
  // ⚠️ WALMART VA ÚLTIMO POR DECISIÓN DE FRANCO, y conviene saber que eso
  // CONTRADICE lo que dictó Romualdo en la reunión del 29/07: "Walmart y Dorinka
  // van juntos, 1º Walmart y 2º Dorinka". Se le marcó la contradicción y
  // respondió "Walmart dejalo último". No se re-litiga — pero queda anotado
  // acá para poder contrastarlo cuando llegue la foto con el orden que Romualdo
  // se comprometió a pasar, que es la que manda sobre este bloque.
  //
  // Dorinka sigue sin aparecer: falta su logo (ver nota de arriba).
  { name: 'Molinos Río de la Plata', image: molinosRioDeLaPlata, featured: true, visualScale: 1.22 },
  { name: 'Nestlé', image: nestle, featured: true, visualScale: 1.45 }, // ⚠️ chico: canvas casi cuadrado con mucho margen interno
  { name: 'Arcor', image: arcor, featured: true, visualScale: 1.45 }, // ⚠️ chico: señalado por el cliente
  { name: 'Establecimiento Las Marías', image: establecimientoLasMarias, featured: true },
  { name: 'Softys', image: softys, featured: true },
  { name: 'ACON TIMBER', image: aconTimber, featured: true },
  { name: 'NutriCorrientes', image: nutricorrientes, featured: true },
  { name: 'SolFrut', image: solfrut, featured: true, visualScale: 1.0 },
  { name: 'Colven', image: colven, featured: true, visualScale: 0.8 }, // ⚠️ grande: señalado por el cliente
  { name: 'CHEP', image: chep, featured: true, visualScale: 1.45 },
  { name: 'Malsa', image: malsa, featured: true, visualScale: 1.2 }, // el corte: "hasta Malsa"
  { name: 'Walmart', image: walmart, featured: true, visualScale: 0.84 }, // ⚠️ último por decisión de Franco, ver nota
  // ── Resto: aparecen una vez en la cinta, en la misma línea que los de arriba.
  { name: 'Quilmes', image: quilmes, featured: false }, // ⚠️ a confirmar con la foto
  { name: 'Molino Cañuelas', image: molinoCanuelas, featured: false, visualScale: 1.37 }, // ⚠️ "también puede ir arriba"
  { name: 'Aguas Danone', image: aguasDanone, featured: false, visualScale: 0.84 }, // bajado por pedido explícito
  { name: 'Vicentin', image: vicentin, featured: false, visualScale: 0.8 },
  { name: 'Ferrum', image: ferrum, featured: false, visualScale: 1.38 },
  { name: 'Buyatti', image: buyatti, featured: false, visualScale: 0.8 },
  { name: 'Grupo Cepas', image: grupoCepas, featured: false, visualScale: 1.24 },
  { name: 'Unión Agrícola de Avellaneda', image: unionAgricolaAvellaneda, featured: false },
  { name: 'RPB Baggio', image: rpbBaggio, featured: false, visualScale: 1.39 },
  { name: 'Dorinka', featured: false }, // 🔴 marca denominativa, sin logo — ver nota de arriba. Reemplaza a "Grupo de Narváez"
  { name: 'Molinos Agro', image: molinosAgro, featured: false, visualScale: 0.86 },
  { name: 'Fiplasto', image: fiplasto, featured: false, visualScale: 0.8 },
  { name: 'Sanesa', image: sanesa, featured: false, visualScale: 0.86 },
  { name: 'CEFAS', image: cefas, featured: false, visualScale: 0.8 }, // ⚠️ grande: señalado por el cliente
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
