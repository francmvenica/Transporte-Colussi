// Specs de flota. Fuente: brief de la empresa (2026-07-26), con la corrección de Romualdo
// sobre la antigüedad (14/07: "5 es muy mentiroso", son 7).
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
    value: '7 años. Renovación constante.',
  },
];
