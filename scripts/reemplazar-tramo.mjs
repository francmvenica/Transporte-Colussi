/**
 * Reemplaza UNA VENTANA de vertices dentro de un corredor ya existente,
 * sin regenerar el resto de la linea.
 *
 * POR QUE NO SE REGENERA EL CORREDOR ENTERO
 * Los corredores largos (BA -> Clorinda son 788 puntos) atraviesan decisiones que
 * ya se tomaron y se validaron con el cliente. Regenerarlos completos por arreglar
 * 20 km puede mover tramos que nadie reviso. Se corta, se rutea el pedazo y se
 * vuelve a coser.
 *
 * COMO EMPALMA SIN COSTURA
 * Los extremos del tramo nuevo son VERTICES EXISTENTES de la linea vieja, no
 * coordenadas nuevas: se rutea desde puntos[desde] hasta puntos[hasta] y el
 * resultado se injerta en el medio. Asi la union no tiene saltos.
 *
 * USO
 *   node scripts/reemplazar-tramo.mjs <clave> <desde> <hasta> [lat,lon] [lat,lon] ...
 *
 * Los [lat,lon] opcionales son waypoints intermedios que obligan al ruteo a pasar
 * por donde tiene que pasar. Sin ellos OSRM elige la ruta mas rapida, que es
 * justamente como el troncal a Iguazu termino cruzando a Paraguay.
 *
 * Imprime la linea completa lista para pegar; con --escribir la aplica al archivo.
 */

const OSRM = 'https://router.project-osrm.org/route/v1/driving/';
const TOLERANCIA = 0.0002;
const DECIMALES = 5;
const ARCHIVO = 'src/config/rutas-troncales.ts';

import { readFileSync, writeFileSync } from 'node:fs';

function distanciaPerpendicular(p, a, b) {
  const [py, px] = p, [ay, ax] = a, [by, bx] = b;
  const dx = bx - ax, dy = by - ay;
  if (dx === 0 && dy === 0) return Math.hypot(px - ax, py - ay);
  const t = ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy);
  const tc = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + tc * dx), py - (ay + tc * dy));
}

function rdp(puntos, tol) {
  if (puntos.length < 3) return puntos;
  let maxD = 0, idx = 0;
  for (let i = 1; i < puntos.length - 1; i++) {
    const d = distanciaPerpendicular(puntos[i], puntos[0], puntos[puntos.length - 1]);
    if (d > maxD) { maxD = d; idx = i; }
  }
  if (maxD > tol) {
    return rdp(puntos.slice(0, idx + 1), tol).slice(0, -1).concat(rdp(puntos.slice(idx), tol));
  }
  return [puntos[0], puntos[puntos.length - 1]];
}

const [clave, desdeStr, hastaStr, ...resto] = process.argv.slice(2);
const escribir = resto.includes('--escribir');
const intermedios = resto
  .filter((a) => !a.startsWith('--'))
  .map((a) => a.split(',').map(Number));

const desde = Number(desdeStr), hasta = Number(hastaStr);
if (!clave || Number.isNaN(desde) || Number.isNaN(hasta)) {
  console.error('uso: node scripts/reemplazar-tramo.mjs <clave> <desde> <hasta> [lat,lon]... [--escribir]');
  process.exit(1);
}

const src = readFileSync(ARCHIVO, 'utf8');
const re = new RegExp(`^\\s*${clave}\\s*:\\s*(\\[\\[.*?\\]\\])\\s*,?\\s*$`, 'm');
const match = src.match(re);
if (!match) { console.error(`no encontre la clave ${clave}`); process.exit(1); }

const puntos = JSON.parse(match[1]);
if (hasta <= desde || hasta >= puntos.length) {
  console.error(`indices fuera de rango (la linea tiene ${puntos.length} puntos)`);
  process.exit(1);
}

const wps = [puntos[desde], ...intermedios, puntos[hasta]];
const coords = wps.map(([lat, lon]) => `${lon},${lat}`).join(';');
const res = await fetch(`${OSRM}${coords}?overview=full&geometries=geojson`);
const json = await res.json();
if (json.code !== 'Ok') { console.error(`OSRM: ${json.code}`); process.exit(1); }

const crudo = json.routes[0].geometry.coordinates.map(([lon, lat]) => [lat, lon]);
const tramo = rdp(crudo, TOLERANCIA).map(([lat, lon]) => [
  Number(lat.toFixed(DECIMALES)),
  Number(lon.toFixed(DECIMALES)),
]);

// Se injerta SIN repetir los vertices de corte: el tramo nuevo ya arranca y
// termina en ellos.
const salida = [...puntos.slice(0, desde), ...tramo, ...puntos.slice(hasta + 1)];

console.error(`// ${clave}: ventana ${desde}-${hasta} (${hasta - desde + 1} pts) -> ${tramo.length} pts`);
console.error(`// tramo ruteado: ${(json.routes[0].distance / 1000).toFixed(1)} km`);
console.error(`// total de la linea: ${puntos.length} -> ${salida.length} puntos`);

const linea = `  ${clave}: ${JSON.stringify(salida)},`;
if (escribir) {
  writeFileSync(ARCHIVO, src.replace(re, linea), 'utf8');
  console.error('// escrito en ' + ARCHIVO);
} else {
  console.log(linea);
}
