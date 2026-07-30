// Corredores con lenguaje origen→destino, legible por buscadores y motores generativos.
// Ciudades de destino: mapa oficial de rutas troncales de la empresa
// (Temp/Colussi-material/Troncales/rutasmapa.jpg), cruzado y confirmado el 2026-07-27.
// Dar el destino con nombre de ciudad (no solo la provincia) es lo que un buscador
// puede matchear contra una búsqueda real ("transporte a Resistencia", no "transporte
// al NEA").
//
// 🔴 LOCALIDADES ACTUALIZADAS EL 30/07 con las que dictó Romualdo el 29/07. El
// pedido de él era explícito y era para la IA: "agregarle toda la ruta (…) que
// después te lo lea". Dictó 18 localidades; Franco puso el límite de 4-5 por
// corredor ("tampoco puedo poner tanto ruido acá") y el criterio de corte que
// se aplicó es CABECERA + MOVIMIENTO REAL, no tamaño de la ciudad: entran las
// que él marcó como de mucho movimiento ("ahí, Quitilipi y Sáenz Peña, hay
// mucho movimiento").
//
// ⚠️ QUEDARON AFUERA, dictadas pero recortadas: Las Breñas, Pinedo y Gancedo
// (corredor Chaco) y Apóstoles (Misiones). No están "olvidadas" — se sacaron a
// propósito por el límite de ruido. Si el cliente las reclama, entran acá y en
// la descripción del corredor, que es el texto que leen los motores.
//
// "Casa central" pasó a "OFICINAS CENTRALES" en el corredor de Santa Fe: en
// Guadalupe Norte no hay depósito, es oficina — corrección explícita de
// Romualdo ("acá no tenemos nada (…) no tenemos un depósito").
export interface Corridor {
  title: string;
  description: string;
  cities: string[];
}

export const CORRIDORS: Corridor[] = [
  {
    title: 'Buenos Aires – Formosa',
    description:
      'Transporte de cargas generales y contenedores desde Buenos Aires hacia Formosa y Clorinda —paso fronterizo hacia Paraguay, con extensión a Asunción—, con unidades conectadas a nuestro centro de tráfico durante todo el trayecto.',
    cities: ['Formosa', 'Clorinda', 'Asunción'],
  },
  {
    title: 'Buenos Aires – Chaco',
    description:
      'Cargas completas y contenedores desde Buenos Aires hacia Resistencia, Presidencia Roque Sáenz Peña, Quitilipi, Villa Ángela y Charata, con centro de distribución propio (CDNoreste) en Fontana.',
    cities: ['Resistencia', 'Presidencia Roque Sáenz Peña', 'Quitilipi', 'Villa Ángela', 'Charata'],
  },
  {
    title: 'Buenos Aires – Santa Fe',
    description:
      'Distribución y cargas generales entre Buenos Aires y Reconquista, en el norte de Santa Fe, con oficinas centrales sobre la Ruta Nacional 11 en Guadalupe Norte.',
    cities: ['Reconquista'],
  },
  {
    title: 'Buenos Aires – Misiones',
    description:
      'Transporte de contenedores y cargas generales desde Buenos Aires hacia Posadas, Eldorado, Oberá y Puerto Iguazú, dentro de nuestra cobertura regular del NEA.',
    cities: ['Posadas', 'Eldorado', 'Puerto Iguazú', 'Oberá'],
  },
  {
    title: 'Buenos Aires – Corrientes',
    description:
      'Cargas generales y contenedores desde Buenos Aires hacia la ciudad de Corrientes, Goya, Curuzú Cuatiá y Paso de los Libres —paso fronterizo hacia Brasil—, conectando con nuestro centro de distribución en Fontana, Chaco.',
    cities: ['Corrientes', 'Goya', 'Curuzú Cuatiá', 'Paso de los Libres'],
  },
  {
    title: 'Internacional: Brasil y Paraguay',
    description:
      'Transporte internacional de cargas al Mercosur por dos pasos fronterizos: Clorinda hacia Paraguay, con extensión a Asunción, y Paso de los Libres hacia Brasil, con extensión a Uruguaiana. Operamos con alianzas operativas con empresas de los dos países.',
    cities: ['Clorinda → Paraguay', 'Paso de los Libres → Brasil', 'Uruguaiana'],
  },
];
