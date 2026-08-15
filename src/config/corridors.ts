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
//
// 🔴 2ª RONDA (08/08):
//   · GOBERNADOR VIRASORO entra al corredor de Corrientes (ciudades + texto).
//     Geolocalizado contra Nominatim (no a ojo): -28.0529, -56.0184 — el
//     mismo pin se sumó a CoverageMap.astro.
//   · "CARGAS COMPLETAS" SE REDUNDA EN LOS SEIS CORREDORES, pedido explícito
//     y literal: "Siempre cargas completas. 'Distribución de cargas generales
//     completas', ponele. Siempre redundarlo nuevamente, todo." Buenos
//     Aires–Chaco ya decía "Cargas completas y contenedores" y no se tocó —es
//     el ejemplo que el propio cliente aprobó sin saberlo—; los otros cinco
//     se alinearon agregando "completas" (o "generales completas", como pidió
//     él mismo) donde faltaba. No cambia la decisión de que "cargas
//     completas" quede FUERA de la meta description y del JSON-LD: ahí es un
//     pedido aparte y explícito, no una regla general para todo el sitio.
export interface Corridor {
  title: string;
  description: string;
  cities: string[];
}

export const CORRIDORS: Corridor[] = [
  {
    title: 'Buenos Aires – Formosa',
    description:
      'Transporte de cargas generales completas y contenedores desde Buenos Aires hacia Formosa y Clorinda —paso fronterizo hacia Paraguay, con extensión a Asunción—, con unidades conectadas a nuestro centro de tráfico durante todo el trayecto.',
    cities: ['Formosa', 'Clorinda', 'Asunción'],
  },
  {
    title: 'Buenos Aires – Chaco',
    description:
      'Cargas completas y contenedores desde Buenos Aires hacia Resistencia, Presidencia Roque Sáenz Peña, Quitilipi, Villa Ángela y Charata, con centro de distribución propio (CD NEA) en Fontana.',
    cities: ['Resistencia', 'Presidencia Roque Sáenz Peña', 'Quitilipi', 'Villa Ángela', 'Charata'],
  },
  {
    title: 'Buenos Aires – Santa Fe',
    description:
      'Distribución de cargas generales completas entre Buenos Aires y Reconquista, en el norte de Santa Fe, con oficinas centrales sobre la Ruta Nacional 11 en Guadalupe Norte.',
    cities: ['Reconquista'],
  },
  {
    title: 'Buenos Aires – Misiones',
    description:
      'Transporte de contenedores y cargas generales completas desde Buenos Aires hacia Posadas, Eldorado, Oberá y Puerto Iguazú, dentro de nuestra cobertura regular del NEA.',
    cities: ['Posadas', 'Eldorado', 'Puerto Iguazú', 'Oberá'],
  },
  {
    title: 'Buenos Aires – Corrientes',
    description:
      'Cargas generales completas y contenedores desde Buenos Aires hacia la ciudad de Corrientes, Goya, Curuzú Cuatiá, Gobernador Virasoro y Paso de los Libres —paso fronterizo hacia Brasil—, conectando con nuestro centro de distribución en Fontana, Chaco.',
    cities: ['Corrientes', 'Goya', 'Curuzú Cuatiá', 'Gobernador Virasoro', 'Paso de los Libres'],
  },
  {
    title: 'Internacional: Brasil y Paraguay',
    description:
      // 🔴 REESCRITO EL 11/08 con el texto que dictó Franco, palabra por palabra.
      // Resuelve las cuatro objeciones que Romualdo hizo en la reunión sobre una
      // sola frase:
      //   1. "Brasil y Paraguay NO son el Mercosur, es una parte del Mercosur" →
      //      sale "al Mercosur". ⚠️ SOLO DE ACÁ: la palabra sigue en otros 8
      //      lugares del sitio a propósito (decisión de Franco del 11/08). Él
      //      objetó este texto, no el término en todo el sitio. NO completar el
      //      barrido creyendo que quedó a medias.
      //   2. "Vamos a cualquier parte de Paraguay y de Brasil" → salen las dos
      //      "extensiones" (Asunción y Uruguaiana).
      //   3. "Si un cliente nos pide por otros pasos, también podemos. Yo no me
      //      encasillaría" → sale el "por dos pasos fronterizos". Los pasos
      //      siguen nombrados en `cities` de abajo, que es lo que él mismo
      //      ofreció conservar; lo que se elimina es la afirmación de que son
      //      esos DOS y nada más.
      //   4. "Operamos con alianzas operativas" es redundante → "Tenemos".
      'Transporte internacional de cargas completas. Tenemos alianzas operativas con empresas de los dos países.',
    cities: ['Clorinda → Paraguay', 'Paso de los Libres → Brasil', 'Uruguaiana'],
  },
];
