// Specs de flota. Fuente: brief de la empresa (2026-07-26).
// Antigüedad: historial completo para que nadie la "corrija" de nuevo — el brief
// original decía 5 años, Romualdo corrigió a 7 el 14/07 ("5 es muy mentiroso"),
// y el cliente confirmó 6 el 27/07. Vale el último dato: 6 años.
export interface FleetSpec {
  label: string;
  value: string;
}

export const FLEET_SPECS: FleetSpec[] = [
  {
    label: 'Semirremolques',
    value:
      'Capacidad de 28 y 30 pallets (14,50 m / 15,30 m). Curtain Sider / barandas volcables con trabas para contenedor.',
  },
  {
    label: 'Unidades Tractoras',
    value: '320 / 330 / 380 / 410 / 420 CV. Distintas potencias para cada servicio.',
  },
  {
    label: 'Gestión de la Flota',
    value: 'Optimización en tiempo real y monitoreo satelital 24/7 desde nuestro centro de tráfico propio.',
  },
  {
    label: 'Antigüedad Promedio',
    value: '6 años. Renovación constante.',
  },
];
