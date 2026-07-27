// Corredores con lenguaje origen→destino, legible por buscadores y motores generativos.
// Contenido basado en datos confirmados: brief de la empresa + eje RN 11
// (Rosario – Santa Fe – Resistencia – Formosa – frontera con Paraguay).
export interface Corridor {
  title: string;
  description: string;
}

export const CORRIDORS: Corridor[] = [
  {
    title: 'Buenos Aires – Formosa',
    description:
      'Transporte de cargas generales y contenedores desde Buenos Aires hacia Formosa, con base operativa en el NEA y unidades conectadas a nuestro centro de tráfico durante todo el trayecto.',
  },
  {
    title: 'Buenos Aires – Chaco',
    description:
      'Cargas completas y contenedores desde Buenos Aires hacia Resistencia y todo Chaco, con centro de distribución propio (CDNoreste) en Fontana.',
  },
  {
    title: 'Buenos Aires – Santa Fe',
    description:
      'Distribución y cargas generales entre Buenos Aires y el norte de Santa Fe, con casa central sobre la Ruta Nacional 11 en Guadalupe Norte.',
  },
  {
    title: 'Buenos Aires – Misiones',
    description:
      'Transporte de contenedores y cargas generales desde Buenos Aires hacia Misiones, dentro de nuestra cobertura regular del NEA.',
  },
  {
    title: 'Buenos Aires – Corrientes',
    description:
      'Cargas generales y contenedores desde Buenos Aires hacia Corrientes, conectando con nuestro centro de distribución en Fontana, Chaco.',
  },
  {
    title: 'Internacional: Brasil y Paraguay',
    description:
      'Transporte internacional de cargas al Mercosur. Rutas a Brasil en alianza operativa con Polivias, y a Paraguay con experiencia en fibra de algodón.',
  },
];
