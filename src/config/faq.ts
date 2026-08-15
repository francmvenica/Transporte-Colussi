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
//
// 🔴 2ª RONDA (08/08):
//   · #1: sale "con eje sobre la Ruta Nacional 11" — pedido literal de
//     Romualdo ("nuestro eje no es la ruta 11, es la ruta 14"). Las otras dos
//     menciones de la RN 11 (acá abajo en #4, y en corridors.ts) se QUEDAN:
//     son ubicación de la sede, no afirmación de eje. La Ruta 14 no se agrega
//     en ningún lado — dijo cuál NO es el eje, no pidió declarar cuál sí.
//   · #2 y #5 (las dos preguntas de contenedores) SE FUSIONAN en una sola,
//     "¿Transportan contenedores?": estaban repetidas y el cliente lo marcó
//     ("está repetido acá y acá"). Sale "del NEA a Salta o desde el puerto de
//     Corrientes" — no lo hacen todavía, mismo motivo que en services.ts.
//     "El puerto de Buenos Aires" se preservó DENTRO del cuerpo de la
//     respuesta a propósito: el título corto lo perdía, y es una de las dos
//     keywords donde el sitio ya aparecía en el baseline GEO.
//   · #7: entra "completas" y "a granel", sale "y tissue" (mismo cambio que
//     SECTORS en clients.ts).
//   · PREGUNTA NUEVA sobre paquetería/pocos pallets, inmediatamente después de
//     "¿Son una empresa de transporte de carga completa con flota propia?".
//     No salió de la reunión — Franco la aprobó porque Romualdo volvió tres
//     veces sobre gente que llama por dos pallets y hace perder tiempo. Corta
//     esa consulta antes de que exista Y le da a los motores generativos una
//     respuesta inequívoca. La redacción cierra con lo que SÍ hacen, no con
//     el "no": es una negativa a un cliente potencial.
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question:
      '¿Hacen transporte de cargas desde Buenos Aires a Formosa, Chaco, Santa Fe, Misiones y Corrientes?',
    answer:
      'Sí. Cubrimos los principales corredores desde Buenos Aires hacia el NEA: Chaco, Formosa, Corrientes, Misiones y norte de Santa Fe.',
  },
  {
    question: '¿Transportan contenedores?',
    answer:
      'Sí. Operamos con semirremolques con trabas específicas para contenedores de 20 y 40 pies, estándar y High Cube (HC), conectando el NEA con el puerto de Buenos Aires en los dos sentidos. También cotizamos contenedores hacia otros destinos del país.',
  },
  {
    question: '¿Son una empresa de transporte de carga completa con flota propia?',
    answer:
      'Sí. Trabajamos con flota 100% propia, con semirremolques curtain sider, de baranda volcable de arco y lona y escalables, y monitoreo satelital 24/7 desde nuestro centro de tráfico.',
  },
  {
    question: '¿Hacen paquetería, encomiendas o envíos de pocos pallets?',
    answer:
      'No. Trabajamos con cargas completas: cada viaje ocupa una unidad entera para un solo cliente, así que no tomamos paquetería, encomiendas ni envíos de uno o dos pallets. Sí transportamos cargas generales completas —secas, paletizadas y a granel— y contenedores de 20 y 40 pies entre Buenos Aires y el NEA. Y para clientes con volumen regular, armamos cargas consolidadas y hacemos la distribución en el NEA desde nuestro centro de distribución en Fontana, Chaco.',
  },
  {
    question: '¿Tienen base o depósito en Fontana, Resistencia o el norte de Santa Fe?',
    answer:
      'Sí. Nuestras oficinas centrales están en Guadalupe Norte, provincia de Santa Fe, sobre la Ruta Nacional 11. Nuestro centro de distribución (CD NEA) está en Fontana, Chaco, cerca de la ciudad de Resistencia.',
  },
  {
    question: '¿Operan transporte internacional?',
    answer:
      'Sí, a Brasil y a Paraguay, con alianzas operativas con empresas de los dos países.',
  },
  {
    question: '¿Qué tipo de cargas y para qué industrias trabajan?',
    answer:
      'Cargas generales completas, secas y paletizadas, a granel y contenedores. Trabajamos para industrias de consumo masivo, alimentos, café, chocolate, yerba mate, papel, madera, química, autopartista y de envases.',
  },
  {
    question: '¿Cómo hago una cotización?',
    answer:
      'Escribinos por WhatsApp o al correo de tráfico contándonos qué necesitás transportar, y te respondemos con el detalle de tu carga.',
  },
];
