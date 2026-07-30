// Preguntas frecuentes orientadas a consultas reales (baseline GEO 2026-07-25/26)
// + la base de la guía del cliente. Todo el contenido está grounded en datos confirmados.
//
// 🔴 ESTE ARCHIVO ES EL QUE MÁS SE OLVIDA: repite casi todos los textos de
// config/services.ts. Si se corrige una ficha de servicios y no se toca acá, el
// sitio se contradice solo — y la FAQ es justo lo que los motores generativos
// citan. Cambio en services.ts = grep de la frase vieja en todo src/.
// Aplicado el 30/07 con las correcciones dictadas por Romualdo el 29/07:
// salió "baranda volcable" de las dos respuestas de contenedores (entra "20 y
// 40 pies, estándar y High Cube"), salió "experiencia en fibra de algodón",
// salió el nombre de Polivias, y los rubros se ampliaron con los que dictó.
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
      'Sí. Operamos con semirremolques con trabas para contenedores de 20 y 40 pies, estándar y High Cube (HC), conectando el NEA con Buenos Aires. También cotizamos contenedores hacia otros destinos del país, como del NEA a Salta o desde el puerto de Corrientes.',
  },
  {
    question: '¿Son una empresa de transporte de carga completa con flota propia?',
    answer:
      'Sí. Trabajamos con flota 100% propia, con semirremolques curtain sider, de baranda volcable de arco y lona y escalables, y monitoreo satelital 24/7 desde nuestro centro de tráfico.',
  },
  {
    question: '¿Tienen base o depósito en Fontana, Resistencia o el norte de Santa Fe?',
    answer:
      'Sí. Nuestras oficinas centrales están en Guadalupe Norte, provincia de Santa Fe, sobre la Ruta Nacional 11. Nuestro centro de distribución (CD Noreste) está en Fontana, Chaco, cerca de la ciudad de Resistencia.',
  },
  {
    question: '¿Transportan contenedores?',
    answer:
      'Sí, con semirremolques con trabas específicas para contenedores de 20 y 40 pies, estándar y High Cube (HC).',
  },
  {
    question: '¿Operan transporte internacional?',
    answer:
      'Sí, a Brasil y a Paraguay, con alianzas operativas con empresas de los dos países.',
  },
  {
    question: '¿Qué tipo de cargas y para qué industrias trabajan?',
    answer:
      'Cargas generales, secas y paletizadas, y contenedores. Trabajamos para industrias de consumo masivo, alimentos, café, chocolate, yerba mate, papel y tissue, madera, química, autopartista y de envases.',
  },
  {
    question: '¿Cómo hago una cotización?',
    answer:
      'Escribinos por WhatsApp o al correo de tráfico contándonos qué necesitás transportar, y te respondemos con el detalle de tu carga.',
  },
];
