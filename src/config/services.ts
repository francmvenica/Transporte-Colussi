export interface Service {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: 'Truck',
    title: 'Cargas Generales',
    description: 'Transporte de Cargas generales',
  },
  {
    icon: 'Container',
    title: 'Contenedores',
    description: 'Transporte de Contenedores',
  },
  {
    icon: 'Package',
    title: 'Logística',
    description: 'Logística y distribución (NEA)',
  },
  {
    icon: 'Globe',
    title: 'Internacional',
    description: 'Transporte Internacional, Brasil y Paraguay',
  },
];
