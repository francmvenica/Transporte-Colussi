/**
 * Auditoria del mapa de cobertura. Solo LEE, no toca nada.
 *
 * QUE CHEQUEA
 *  1. Que cada pin de CoverageMap.astro caiga sobre alguna traza. Un pin lejos de
 *     toda linea se ve como un error de dibujo (le paso a Oberá y a Eldorado).
 *  2. Que ninguna traza se meta en Paraguay o Brasil.
 *
 * POR QUE LOS TESTIGOS SON CIUDADES DEL INTERIOR Y NO LAS DE FRONTERA
 * Encarnacion, Ciudad del Este y Uruguaiana son ciudades GEMELAS: estan enfrente
 * de Posadas, Puerto Iguazu y Paso de los Libres, cruzando el rio. Una traza
 * correcta que termine en la ciudad argentina SIEMPRE va a tener a la gemela a
 * pocos km, asi que usarlas como testigo da falsos positivos. Las del interior
 * (Hohenau, Obligado, Alegrete) solo quedan cerca si la linea efectivamente
 * cruzo la frontera.
 *
 * Esto no es teorico: el troncal a Iguazu estuvo dos semanas cruzando a Paraguay
 * porque se ruteo con dos extremos y nadie lo midio.
 *
 * USO: node scripts/auditar-mapa.mjs
 * Sale con codigo 1 si algo no pasa.
 */

import { readFileSync } from 'node:fs';

const UMBRAL_PIN_KM = 2;
const UMBRAL_FRONTERA_KM = 15;

// Pines que estan lejos de toda traza A PROPOSITO y no hay que "arreglar".
// El valor es la distancia medida el 14/08, para que se note si empeora.
const EXCEPCIONES = {
  // Fontana es el CD Noreste: una SEDE, no un nodo de paso de un corredor. Las
  // troncales llegan a Resistencia (a 0,09 km) y Fontana queda ~4 km al noroeste,
  // asi que la linea no lo toca y esta bien que no lo toque. La coordenada esta
  // confirmada contra Nominatim el 14/08: da exactamente la que ya estaba en el
  // codigo. A zoom 6, que es como abre el mapa, 2,5 km es menos de un pixel.
  // NO mover el pin: el pin esta bien.
  Fontana: 2.6,
};

const R = 6371;
const t = (x) => (x * Math.PI) / 180;
const dist = (a, b) => {
  const dl = t(b[0] - a[0]), dg = t(b[1] - a[1]);
  const h = Math.sin(dl / 2) ** 2 + Math.cos(t(a[0])) * Math.cos(t(b[0])) * Math.sin(dg / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

// --- datos ---------------------------------------------------------------

const rutasSrc = readFileSync('src/config/rutas-troncales.ts', 'utf8');
const RUTAS = {};
{
  const re = /^\s*(\w+)\s*:\s*(\[\[.*?\]\])\s*,?\s*$/gm;
  let m;
  while ((m = re.exec(rutasSrc)) !== null) RUTAS[m[1]] = JSON.parse(m[2]);
}

const mapaSrc = readFileSync('src/components/CoverageMap.astro', 'utf8');
const PINES = [];
{
  const re = /\{\s*name:\s*"([^"]+)"\s*,\s*role:\s*"([^"]+)"\s*,\s*coords:\s*\[\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\]/g;
  let m;
  while ((m = re.exec(mapaSrc)) !== null) {
    PINES.push({ nombre: m[1], rol: m[2], coords: [Number(m[3]), Number(m[4])] });
  }
}

// Ciudades del INTERIOR de Paraguay y Brasil. Ver la nota de arriba sobre por que
// no se usan las gemelas de frontera.
//
// GEMELAS QUE NO HAY QUE PONER ACA (las tres dieron falso positivo el 14/08):
//   Encarnacion (PY)     esta enfrente de Posadas
//   Ciudad del Este (PY) enfrente de Puerto Iguazu
//   Uruguaiana (BR)      enfrente de Paso de los Libres
//   Itaqui (BR)          enfrente de Alvear, a 3,2 km — el corredor de la RN 14
//                        pasa a 1,06 km de Alvear, que es lo correcto, y arrastra
//                        a Itaqui a 4,3 km sin haber cruzado nada
const EXTRANJERO = {
  'Hohenau (PY)': [-27.0833, -55.7],
  'Obligado (PY)': [-27.05, -55.6333],
  'Natalio (PY)': [-26.75, -55.2],
  'Santa Rita (PY)': [-25.8, -55.0833],
  'Alegrete (BR)': [-29.783, -55.791],
  'Quarai (BR)': [-30.388, -56.451],
  'Santiago (BR)': [-29.1917, -54.8672],
};

// --- 1. pines ------------------------------------------------------------

console.log(`PINES  (${PINES.length})  umbral ${UMBRAL_PIN_KM} km\n`);
const colgados = [];
for (const pin of PINES) {
  let mejor = Infinity, cual = '';
  for (const [k, pts] of Object.entries(RUTAS)) {
    for (const q of pts) {
      const d = dist(pin.coords, q);
      if (d < mejor) { mejor = d; cual = k; }
    }
  }
  const tolerado = EXCEPCIONES[pin.nombre];
  const pasa = mejor <= UMBRAL_PIN_KM || (tolerado !== undefined && mejor <= tolerado + 0.5);
  if (!pasa) colgados.push({ ...pin, km: mejor, cual });
  const marca = tolerado !== undefined ? 'ok* ' : pasa ? 'ok  ' : 'LEJOS';
  console.log(
    `  ${marca} ${pin.nombre.padEnd(22)} ${mejor.toFixed(2).padStart(7)} km  ${cual}`
  );
}

// --- 2. fronteras --------------------------------------------------------

console.log(`\nFRONTERAS  umbral ${UMBRAL_FRONTERA_KM} km\n`);
const invasiones = [];
for (const [nombre, coord] of Object.entries(EXTRANJERO)) {
  let mejor = Infinity, cual = '';
  for (const [k, pts] of Object.entries(RUTAS)) {
    for (const q of pts) {
      const d = dist(coord, q);
      if (d < mejor) { mejor = d; cual = k; }
    }
  }
  const pasa = mejor > UMBRAL_FRONTERA_KM;
  if (!pasa) invasiones.push({ nombre, km: mejor, cual });
  console.log(
    `  ${pasa ? 'ok  ' : 'CERCA'} ${nombre.padEnd(22)} ${mejor.toFixed(1).padStart(7)} km  ${cual}`
  );
}

// --- resumen -------------------------------------------------------------

const total = Object.values(RUTAS).reduce((s, p) => s + p.length, 0);
console.log(`\n${Object.keys(RUTAS).length} corredores · ${total} puntos · ${PINES.length} pines`);

if (colgados.length) {
  console.log(`\nPINES LEJOS DE TODA TRAZA (${colgados.length}):`);
  for (const c of colgados) console.log(`  ${c.nombre}: ${c.km.toFixed(1)} km de ${c.cual}`);
}
if (invasiones.length) {
  console.log(`\nTRAZAS QUE SE ACERCAN AL EXTERIOR (${invasiones.length}):`);
  for (const i of invasiones) console.log(`  ${i.nombre}: ${i.km.toFixed(1)} km — ${i.cual}`);
}
if (!colgados.length && !invasiones.length) console.log('\nTodo pasa.');
process.exit(colgados.length || invasiones.length ? 1 : 0);
