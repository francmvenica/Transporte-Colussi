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
// 🔴 DORINKA, NO GDN — pendiente de asset, no se puede arreglar acá. Romualdo:
// "en realidad el cliente no es GDN, es Dorinka. Si yo trabajo en Dorinka y me
// pone GDN, es como que está poniendo el nombre de mi papá". El único logo que
// tenemos es el de GDN, así que el de Dorinka es un INSUMO FALTANTE: hasta que
// llegue, GDN sigue publicado y eso contradice un pedido explícito del cliente.
// No se resuelve renombrando el label: la imagen dice GDN.
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
import grupoDeNarvaez from '../assets/images/clientes/grupo-de-narvaez.png';
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
  image: ImageMetadata;
  featured: boolean;
}

export const CLIENTS: Client[] = [
  // ── Principales (12): cuadro congelado inicial + repetidos en la cinta.
  // El ORDEN de este bloque es el que se ve en el primer pantallazo, así que
  // importa. Walmart va 1º y Dorinka 2º por pedido de Romualdo — Dorinka no
  // está porque falta su logo (ver nota de arriba), así que el 2º puesto queda
  // ocupado por el que sigue hasta que el asset llegue.
  { name: 'Walmart', image: walmart, featured: true },
  { name: 'Molinos Río de la Plata', image: molinosRioDeLaPlata, featured: true },
  { name: 'Nestlé', image: nestle, featured: true },
  { name: 'Arcor', image: arcor, featured: true },
  { name: 'Establecimiento Las Marías', image: establecimientoLasMarias, featured: true },
  { name: 'Softys', image: softys, featured: true },
  { name: 'ACON TIMBER', image: aconTimber, featured: true },
  { name: 'NutriCorrientes', image: nutricorrientes, featured: true },
  { name: 'SolFrut', image: solfrut, featured: true },
  { name: 'Colven', image: colven, featured: true },
  { name: 'CHEP', image: chep, featured: true },
  { name: 'Malsa', image: malsa, featured: true }, // el corte: "hasta Malsa"
  // ── Resto: aparecen una vez en la cinta, en la misma línea que los de arriba.
  { name: 'Quilmes', image: quilmes, featured: false }, // ⚠️ a confirmar con la foto
  { name: 'Molino Cañuelas', image: molinoCanuelas, featured: false }, // ⚠️ "también puede ir arriba"
  { name: 'Aguas Danone', image: aguasDanone, featured: false }, // bajado por pedido explícito
  { name: 'Vicentin', image: vicentin, featured: false },
  { name: 'Ferrum', image: ferrum, featured: false },
  { name: 'Buyatti', image: buyatti, featured: false },
  { name: 'Grupo Cepas', image: grupoCepas, featured: false },
  { name: 'Unión Agrícola de Avellaneda', image: unionAgricolaAvellaneda, featured: false },
  { name: 'RPB Baggio', image: rpbBaggio, featured: false },
  { name: 'Grupo de Narváez', image: grupoDeNarvaez, featured: false }, // 🔴 debería ser Dorinka
  { name: 'Molinos Agro', image: molinosAgro, featured: false },
  { name: 'Fiplasto', image: fiplasto, featured: false },
  { name: 'Sanesa', image: sanesa, featured: false },
  { name: 'CEFAS', image: cefas, featured: false },
];

// Sectores atendidos (brief de la empresa, sección 4 y 9).
export const SECTORS: string[] = [
  'Consumo masivo',
  'Alimentos',
  'Yerba mate',
  'Papel y tissue',
  'Madera',
];
