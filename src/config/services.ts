export interface Service {
  icon: string; // Lucide icon name
  title: string;
  /** Linea corta visible en la card. Resume el servicio sin abrir el detalle. */
  summary: string;
  /** Detalle tecnico. Va plegado en un <details>, pero se renderiza siempre en
   *  el HTML (oculto por CSS, nunca por JS) para que los crawlers lo lean. */
  description: string;
}

// Los titulos son los que pidio el cliente de forma explicita (Juan Manuel,
// 27/07): llevan la palabra completa que la gente busca ("Transporte de
// contenedores", no "Contenedores"). No acortarlos por razones de layout.
export const SERVICES: Service[] = [
  {
    icon: 'Truck',
    title: 'Transporte de Cargas Generales',
    summary:
      'Carga seca y paletizada por todo el NEA y las rutas troncales del país.',
    description:
      'Semirremolques curtain sider con capacidad de 28 y 30 pallets, monitoreo satelital 24/7 y conexión permanente con nuestro centro de tráfico.',
  },
  {
    icon: 'Container',
    title: 'Transporte de Contenedores',
    summary: 'Contenedores ISO entre Buenos Aires y todo el NEA.',
    description:
      'Semirremolques de barandas volcables con trabas específicas para la sujeción de contenedores ISO.',
  },
  {
    icon: 'Package',
    title: 'Logística y distribución (NEA)',
    summary:
      'Distribución en Chaco, Formosa, Corrientes, Misiones y norte de Santa Fe.',
    description:
      'Apoyada en una base de cross-docking propia en Fontana, Chaco, que articula con la casa central de Guadalupe Norte.',
  },
  {
    icon: 'Globe',
    title: 'Transporte Internacional, Brasil y Paraguay',
    summary: 'Rutas al Mercosur hacia Brasil y Paraguay.',
    description:
      'Brasil en alianza operativa con Polivias, y Paraguay, con experiencia en fibra de algodón.',
  },
];
