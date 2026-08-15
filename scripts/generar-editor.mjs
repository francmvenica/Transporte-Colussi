/**
 * Genera tools/editor-mapa.html, el editor visual del mapa de troncales.
 *
 * PARA QUE SIRVE
 * Franco revisa el mapa con el cliente y siempre salen correcciones de trazado.
 * Explicarlas por escrito es lento y ambiguo ("la ruta que sale abajo de Curuzú").
 * Con el editor las marca haciendo clic sobre el mapa real y me devuelve un texto
 * con los waypoints, que es exactamente lo que necesita `generar-rutas.mjs`.
 *
 * POR QUE MARCA WAYPOINTS Y NO DIBUJA LA LINEA
 * Porque la regla del proyecto es que ninguna traza se dibuja a ojo. El editor
 * toma los puntos que marca Franco, los rutea contra OSRM en vivo y le muestra el
 * camino real por carretera. Lo que exporta son los waypoints, no el dibujo.
 *
 * POR QUE SE GENERA Y NO ES UN HTML SUELTO
 * Para que el editor muestre SIEMPRE el estado real del mapa. Los datos se embeben
 * en el archivo (un HTML abierto con file:// no puede hacer fetch de un .json
 * hermano, lo bloquea CORS).
 *
 * OJO: vive en tools/, NO en public/. Si estuviera en public/ se publicaria con el
 * sitio.
 *
 * USO: node scripts/generar-editor.mjs   -> escribe tools/editor-mapa.html
 */

import { readFileSync, writeFileSync } from 'node:fs';

const PLANTILLA = 'tools/editor-mapa.plantilla.html';
const SALIDA = 'tools/editor-mapa.html';

// --- rutas ---------------------------------------------------------------
const rutasSrc = readFileSync('src/config/rutas-troncales.ts', 'utf8');
const rutas = {};
{
  const re = /^\s*(\w+)\s*:\s*(\[\[.*?\]\])\s*,?\s*$/gm;
  let m;
  while ((m = re.exec(rutasSrc)) !== null) rutas[m[1]] = JSON.parse(m[2]);
}

// --- pines ---------------------------------------------------------------
const mapaSrc = readFileSync('src/components/CoverageMap.astro', 'utf8');
const pines = [];
{
  const re = /\{\s*name:\s*"([^"]+)"\s*,\s*role:\s*"([^"]+)"\s*,\s*coords:\s*\[\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\]/g;
  let m;
  while ((m = re.exec(mapaSrc)) !== null) {
    pines.push({ nombre: m[1], rol: m[2], coords: [Number(m[3]), Number(m[4])] });
  }
}

const datos = JSON.stringify({ rutas, pines });
const html = readFileSync(PLANTILLA, 'utf8').replace('__DATOS__', datos);
writeFileSync(SALIDA, html, 'utf8');

const puntos = Object.values(rutas).reduce((s, p) => s + p.length, 0);
console.log(`${SALIDA}`);
console.log(`  ${Object.keys(rutas).length} corredores · ${puntos} puntos · ${pines.length} pines`);
console.log(`  ${(html.length / 1024).toFixed(0)} KB`);
