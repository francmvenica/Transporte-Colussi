// Corredores con lenguaje origen→destino, legible por buscadores y motores generativos.
// Ciudades de destino: mapa oficial de rutas troncales de la empresa
// (Temp/Colussi-material/Troncales/rutasmapa.jpg), cruzado y confirmado el 2026-07-27.
// Dar el destino con nombre de ciudad (no solo la provincia) es lo que un buscador
// puede matchear contra una búsqueda real ("transporte a Resistencia", no "transporte
// al NEA").
export interface Corridor {
  title: string;
  description: string;
  cities: string[];
}

export const CORRIDORS: Corridor[] = [
  {
    title: 'Buenos Aires – Formosa',
    description:
      'Transporte de cargas generales y contenedores desde Buenos Aires hacia Formosa y Clorinda —paso fronterizo hacia Paraguay—, con base operativa en el NEA y unidades conectadas a nuestro centro de tráfico durante todo el trayecto.',
    cities: ['Formosa', 'Clorinda'],
  },
  {
    title: 'Buenos Aires – Chaco',
    description:
      'Cargas completas y contenedores desde Buenos Aires hacia Resistencia, Presidencia Roque Sáenz Peña, Charata y Villa Ángela, con centro de distribución propio (CDNoreste) en Fontana.',
    cities: ['Resistencia', 'Presidencia Roque Sáenz Peña', 'Charata', 'Villa Ángela'],
  },
  {
    title: 'Buenos Aires – Santa Fe',
    description:
      'Distribución y cargas generales entre Buenos Aires y Reconquista, en el norte de Santa Fe, con casa central sobre la Ruta Nacional 11 en Guadalupe Norte.',
    cities: ['Reconquista'],
  },
  {
    title: 'Buenos Aires – Misiones',
    description:
      'Transporte de contenedores y cargas generales desde Buenos Aires hacia Posadas, dentro de nuestra cobertura regular del NEA.',
    cities: ['Posadas'],
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
      'Transporte internacional de cargas al Mercosur por dos pasos fronterizos: Clorinda hacia Paraguay y Paso de los Libres hacia Brasil, con alianzas operativas con empresas de los dos países.',
    cities: ['Clorinda → Paraguay', 'Paso de los Libres → Brasil'],
  },
];
