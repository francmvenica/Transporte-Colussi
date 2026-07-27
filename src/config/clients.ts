// Clientes reales según el brief de la empresa (2026-07-26).
// PENDIENTE: autorización explícita de Romualdo para nombrarlos públicamente en el sitio.
// No remover ni publicar en producción sin esa confirmación.
export interface Client {
  name: string;
  sector: string;
}

export const CLIENTS: Client[] = [
  { name: 'Molinos Río de la Plata', sector: 'Agroindustria y alimentos' },
  { name: 'Nestlé', sector: 'Alimentos y bebidas' },
  { name: 'Arcor', sector: 'Alimentos y golosinas' },
  { name: 'Walmart', sector: 'Retail y distribución masiva' },
  { name: 'Las Marías', sector: 'Yerbatera (marca Taragüí)' },
  { name: 'Softys', sector: 'Higiene y cuidado personal' },
  { name: 'Maderera Acotimber', sector: 'Industria maderera' },
];

// Sectores atendidos (brief de la empresa, sección 4 y 9).
export const SECTORS: string[] = [
  'Consumo masivo',
  'Alimentos',
  'Yerba mate',
  'Papel y tissue',
  'Madera',
];
