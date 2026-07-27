export interface Service {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: 'Truck',
    title: 'Cargas Generales',
    description:
      'Transporte de cargas generales, secas y paletizadas, por todo el NEA y las rutas troncales del país. Semirremolques curtain sider con capacidad de 28 y 30 pallets, monitoreo satelital 24/7 y conexión permanente con nuestro centro de tráfico.',
  },
  {
    icon: 'Container',
    title: 'Contenedores',
    description:
      'Transporte de contenedores ISO con semirremolques de barandas volcables y trabas específicas para su sujeción. Operamos contenedores entre Buenos Aires y todo el NEA.',
  },
  {
    icon: 'Package',
    title: 'Logística',
    description:
      'Logística y distribución en el NEA — Chaco, Formosa, Corrientes, Misiones y norte de Santa Fe — apoyada en una base de cross-docking propia en Fontana, Chaco.',
  },
  {
    icon: 'Globe',
    title: 'Internacional',
    description:
      'Transporte internacional al Mercosur: rutas a Brasil en alianza operativa con Polivias, y a Paraguay, con experiencia en fibra de algodón.',
  },
];
