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
  // El cliente pidió "Más de una vuelta a la tierra por semana". Se ajustó a
  // "Una vuelta": 170.000 km/mes son 39.126 km/semana y la circunferencia
  // terrestre es 40.075 km, o sea el 97,6% de una vuelta. Se conserva el km
  // al mes, que es el dato verificable. Marcado a Franco.
  {
    value: 'Una vuelta a la tierra por semana',
    label: 'Más de 170.000 km al mes',
    icon: 'Globe',
    valueSize: 'phrase',
  },
  // El año de fundación salió de todo el sitio el 29/07: Franco no está seguro
  // de que sea 2000, así que no se afirma. "+25 años" es la forma segura — se
  // sostiene con cualquier fecha de arranque anterior a 2001.
  { value: '+25 años', label: 'De trayectoria', icon: 'Calendar' },
];
