// Preguntas frecuentes orientadas a consultas reales (baseline GEO 2026-07-25/26)
// + la base de la guía del cliente. Todo el contenido está grounded en datos confirmados.
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question:
      '¿Hacen transporte de cargas desde Buenos Aires a Formosa, Chaco, Santa Fe, Misiones y Corrientes?',
    answer:
      'Sí. Cubrimos los principales corredores desde Buenos Aires hacia el NEA: Chaco, Formosa, Corrientes, Misiones y norte de Santa Fe, con eje sobre la Ruta Nacional 11.',
  },
  {
    question: '¿Transportan contenedores desde el NEA hacia el puerto de Buenos Aires?',
    answer:
      'Sí. Operamos con semirremolques de barandas volcables y trabas para contenedor ISO, conectando el NEA con Buenos Aires.',
  },
  {
    question: '¿Son una empresa de transporte de carga completa con flota propia?',
    answer:
      'Sí. Trabajamos con flota 100% propia, con semirremolques curtain sider y de barandas volcables, y monitoreo satelital 24/7 desde nuestro centro de tráfico.',
  },
  {
    question: '¿Tienen base o depósito en Fontana, Resistencia o el norte de Santa Fe?',
    answer:
      'Sí. Nuestra casa central está en Guadalupe Norte (norte de Santa Fe, sobre la RN 11) y nuestro centro de distribución (CDNoreste) está en Fontana, Chaco, junto al Gran Resistencia.',
  },
  {
    question: '¿Transportan contenedores?',
    answer:
      'Sí, con semirremolques de barandas volcables y trabas específicas para sujeción de contenedores ISO.',
  },
  {
    question: '¿Operan transporte internacional?',
    answer:
      'Sí, a Brasil (en alianza operativa con Polivias) y a Paraguay, con experiencia en fibra de algodón.',
  },
  {
    question: '¿Qué tipo de cargas y para qué industrias trabajan?',
    answer:
      'Cargas generales, secas y paletizadas, y contenedores. Trabajamos para industrias de consumo masivo, alimentos, yerba mate, papel y tissue, y madera.',
  },
  {
    question: '¿Cómo hago una cotización?',
    answer:
      'Escribinos por WhatsApp o al correo de tráfico contándonos qué necesitás transportar, y te respondemos con el detalle de tu carga.',
  },
];
