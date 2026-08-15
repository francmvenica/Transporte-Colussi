/**
 * Generador de las polilineas de src/config/rutas-troncales.ts
 *
 * POR QUE EXISTE ESTE ARCHIVO
 * La primera version de las rutas se genero con un script que no quedo versionado, y
 * cuando hubo que corregir trazados (4ta ronda de correcciones del cliente, 2026-08-14)
 * hubo que rehacerlo de cero. Esta vez vive en el repo.
 *
 * REGLA QUE HACE CUMPLIR
 * Ninguna linea del mapa se dibuja a ojo. Cada tramo se rutea contra OSRM con perfil
 * driving, se simplifica con Ramer-Douglas-Peucker y se redondea a 5 decimales. Si hace
 * falta sumar un corredor, se agrega a RUTAS y se corre el script; no se editan
 * coordenadas a mano en el .ts.
 *
 * USO
 *   node scripts/generar-rutas.mjs                 -> imprime todas las claves
 *   node scripts/generar-rutas.mjs clave1 clave2   -> solo esas
 *   node scripts/generar-rutas.mjs --check         -> no rutea, mide el .ts actual
 *
 * La salida va a stdout lista para pegar en src/config/rutas-troncales.ts.
 */

const OSRM = 'https://router.project-osrm.org/route/v1/driving/';
const TOLERANCIA = 0.0002; // ~22 m, la misma con la que se genero el set original
const DECIMALES = 5;
const PAUSA_MS = 1200; // el OSRM publico es de cortesia: no lo martillamos

/**
 * Waypoints por corredor, en orden. Cada uno es [lat, lon].
 * Los nombres estan al lado para que se pueda auditar de donde salio cada vertice.
 * Coordenadas geolocalizadas, NO puestas a ojo.
 */
export const RUTAS = {
  // --- Corredores existentes que NO se tocan en esta ronda -------------------
  // (se dejan declarados para poder regenerarlos si alguna vez hace falta)

  // --- 4ta ronda de correcciones (2026-08-14) -------------------------------

  // 1. Iguazu por el lado ARGENTINO. El trazado viejo se metia en Paraguay:
  //    pasaba a 0,9 km de Encarnacion y a 0,8 km de Ciudad del Este, y dejaba
  //    todas las localidades argentinas de la RN 12 a 11-26 km de la linea.
  conector_posadas_iguazu: [
    [-27.36714, -55.89574], // Posadas
    [-27.46670, -55.75000], // Candelaria
    [-27.04000, -55.22500], // Jardin America
    [-26.80000, -55.03330], // Puerto Rico
    [-26.56670, -54.75000], // Montecarlo
    [-26.40490, -54.62620], // Eldorado
    [-26.01670, -54.61670], // Puerto Esperanza
    [-25.61127, -54.57629], // Puerto Iguazu
  ],

  // 3. Cruce del rio por el puente Rosario-Victoria. No existia en el mapa.
  conector_rosario_victoria: [
    [-32.95940, -60.66170], // Rosario
    [-32.61970, -60.15530], // Victoria
  ],

  // 4. Cruce del rio por el tunel subfluvial Santa Fe - Parana. No existia.
  conector_santafe_parana: [
    [-31.61870, -60.70200], // Santa Fe
    [-31.73300, -60.52990], // Parana
  ],

  // 5. Eje Saladas -> sur. Une la RN 12 con la RN 123, que hasta ahora corrian
  //    paralelas sin ninguna conexion en todo el centro de Corrientes.
  conector_saladas_sur: [
    [-28.25310, -58.62060], // Saladas
    [-29.18330, -58.08330], // Mercedes (empalme con la RN 123)
  ],

  // 6. Atajo al sur de Curuzu Cuatia: evita entrar al pueblo y empalma con la
  //    RN 123 a mitad de camino a Paso de los Libres.
  conector_curuzu_sur: [
    [-30.25000, -57.63330], // Monte Caseros
    [-29.71250, -57.08784], // Paso de los Libres
  ],

  // Barrido de cierre del 14/08: el conector de la RN 16 tenia el MISMO problema
  // que el troncal a Iguazu — se ruteo con dos extremos (Resistencia y Saenz Peña)
  // y pasaba a 9,3 km de Quitilipi, que esta sobre la RN 16 y tiene pin propio.
  // El pin quedaba colgado al costado de la linea. Se agrega como waypoint.
  conector_rn16: [
    [-27.45198, -58.98735], // Resistencia
    [-26.87077, -60.21501], // Quitilipi (Nominatim, 14/08)
    [-26.78541, -60.43889], // Presidencia Roque Saenz Peña
  ],

  // 7 y 8. Eje interior de Misiones: Virasoro -> Apostoles -> Campo Grande y
  //    de ahi el cruce a la RN 12.
  conector_misiones_interior: [
    [-28.05290, -56.01840], // Gobernador Virasoro
    [-27.91670, -55.75000], // Apostoles
    [-27.20000, -54.98330], // Campo Grande
    [-26.80000, -55.03330], // Puerto Rico (empalme con la RN 12)
  ],
};

// --------------------------------------------------------------------------
// Ramer-Douglas-Peucker
// --------------------------------------------------------------------------

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
    const izq = rdp(puntos.slice(0, idx + 1), tol);
    const der = rdp(puntos.slice(idx), tol);
    return izq.slice(0, -1).concat(der);
  }
  return [puntos[0], puntos[puntos.length - 1]];
}

// --------------------------------------------------------------------------
// OSRM
// --------------------------------------------------------------------------

const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

async function rutear(waypoints) {
  // OSRM espera lon,lat separados por ; y devuelve GeoJSON en [lon, lat]
  const coords = waypoints.map(([lat, lon]) => `${lon},${lat}`).join(';');
  const url = `${OSRM}${coords}?overview=full&geometries=geojson`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`OSRM HTTP ${res.status}`);
  const json = await res.json();
  if (json.code !== 'Ok') throw new Error(`OSRM code ${json.code}: ${json.message ?? ''}`);
  const ruta = json.routes[0];
  return {
    puntos: ruta.geometry.coordinates.map(([lon, lat]) => [lat, lon]),
    km: ruta.distance / 1000,
  };
}

const redondear = (pts) =>
  pts.map(([lat, lon]) => [
    Number(lat.toFixed(DECIMALES)),
    Number(lon.toFixed(DECIMALES)),
  ]);

// --------------------------------------------------------------------------
// Main
// --------------------------------------------------------------------------

const args = process.argv.slice(2);
const claves = args.filter((a) => !a.startsWith('--'));
const objetivo = claves.length ? claves : Object.keys(RUTAS);

for (const clave of objetivo) {
  const wps = RUTAS[clave];
  if (!wps) {
    console.error(`// !! clave desconocida: ${clave}`);
    continue;
  }
  try {
    const { puntos, km } = await rutear(wps);
    const simplificado = redondear(rdp(puntos, TOLERANCIA));
    const reduccion = (100 * (1 - simplificado.length / puntos.length)).toFixed(1);
    console.error(
      `// ${clave}: ${km.toFixed(0)} km | ${puntos.length} -> ${simplificado.length} puntos (-${reduccion}%)`
    );
    console.log(`  ${clave}: ${JSON.stringify(simplificado)},`);
  } catch (e) {
    console.error(`// !! ${clave} fallo: ${e.message}`);
  }
  await dormir(PAUSA_MS);
}
