export interface Stat {
  value: string;
  label: string;
}

// Cifras confirmadas por el cliente el 27/07 (antes la sección estaba
// condicionada a "si me pasan los números"). Texto EXACTO tal como lo pasó el
// cliente — no redondear, no reformular, no completar de más.
export const STATS: Stat[] = [
  { value: '+50.000', label: 'Viajes realizados' },
  {
    value: '100%',
    label:
      'De los objetivos planteados por nuestros clientes en los últimos 10 años',
  },
  { value: '170.000 km', label: 'Recorridos por mes' },
  { value: '+25 años', label: 'En la ruta desde el año 2000' },
];
