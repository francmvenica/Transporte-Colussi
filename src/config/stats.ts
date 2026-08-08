export interface Stat {
  value: string;
  label: string;
  icon: 'Flag' | 'CheckCircle' | 'Globe' | 'Calendar';
  /** Las 3 cifras cortas (número/porcentaje) usan el tamaño grande estándar
   * de la tarjeta. La de "vuelta a la tierra" es una FRASE, no un número: al
   * mismo tamaño se envuelve en 2-3 líneas y rompe el ritmo de la grilla, así
   * que su `value` usa un tamaño más chico a propósito (ver Stats.astro). */
  valueSize?: 'number' | 'phrase';
}

// Cifras confirmadas por el cliente el 27/07 (antes la sección estaba
// condicionada a "si me pasan los números"). Texto EXACTO tal como lo pasó el
// cliente en los tres casos que no se tocaron — no redondear, no reformular,
// no completar de más.
export const STATS: Stat[] = [
  { value: '+50.000', label: 'Viajes realizados', icon: 'Flag' },
  {
    value: '100%',
    label:
      'De los objetivos planteados por nuestros clientes en los últimos 10 años',
    icon: 'CheckCircle',
  },
  // 🔴 EXCEPCIÓN EXPLÍCITA a "hueco honesto > dato inventado" (regla dura del
  // proyecto, que nombra "kilómetros" en la lista de lo que no se inventa).
  // Historial de este bloque:
  //   1. El 27/07 se publicó "Una vuelta a la tierra por semana" — ajustado
  //      hacia ABAJO desde el pedido original del cliente: 170.000 km/mes son
  //      39.126 km/semana contra los 40.075 km de circunferencia terrestre, o
  //      sea el 97,6% de una vuelta, no "más de una". Se conservó el km al mes
  //      (dato verificable) como label.
  //   2. El 07/08 el cliente REVIRTIÓ eso: pidió el kilometraje anual
  //      redondeado a 3.000.000, diciendo en voz alta "vamos a inventar un
  //      número" (comparándose con un competidor que publica esa cifra con
  //      menos camiones). Franco decidió publicar el número que pide el
  //      cliente — es la excepción, y queda escrita ACÁ para que nadie la
  //      "corrija" de vuelta a 2.040.000 (170.000 × 12, la cuenta real).
  //
  // ✅ LAS DOS CIFRAS DE ESTE BLOQUE ESTÁN ATADAS, y eso es lo que hay que
  // preservar si se vuelve a tocar: con 3.000.000 km/año la cuenta da 57.692
  // km/semana = 1,44 vueltas a la tierra, así que "Una vuelta" pasaría a
  // contradecir a su propia etiqueta. Por eso "value" pasó a "Más de una
  // vuelta" a la vez que "label" pasó a los 3.000.000 anuales — si alguna vez
  // se revierte el kilometraje, hay que revertir también la vuelta, o el
  // bloque queda contradiciéndose solo.
  {
    value: 'Más de una vuelta a la tierra por semana',
    label: 'Más de 3.000.000 de km al año',
    icon: 'Globe',
    valueSize: 'phrase',
  },
  // El año de fundación salió de todo el sitio el 29/07: Franco no está seguro
  // de que sea 2000, así que no se afirma. "+25 años" es la forma segura — se
  // sostiene con cualquier fecha de arranque anterior a 2001.
  { value: '+25 años', label: 'De trayectoria', icon: 'Calendar' },
];
