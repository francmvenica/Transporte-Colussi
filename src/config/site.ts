export interface Sede {
  name: string;
  address: string;
  email: string;
  phone: string;
  phoneRaw: string;
  /** Segundo teléfono: no todas las sedes lo tienen (ver comentario en Casa Central). */
  phoneSecondary?: string;
  phoneSecondaryRaw?: string;
}

export const SITE = {
  name: 'Transporte Colussi',
  tagline: 'Transporte de cargas a nivel nacional',
  description:
    'Transporte de cargas generales y contenedores desde Buenos Aires hacia el NEA (Chaco, Formosa, Corrientes, Misiones y norte de Santa Fe) y al Mercosur. Flota propia con monitoreo satelital 24/7.',
  url: 'https://www.transportecolussi.com.ar',
  whatsapp: {
    // Número de Leticia (tráfico), confirmado por el cliente el 27/07. Reemplaza
    // al anterior (+54 9 3482 549842), que quedó dado de baja.
    number: '5493482558666',
    message:
      'Hola Transporte Colussi, me contacto desde la web para realizar una consulta',
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },
  contact: {
    email: 'trafico@transportecolussi.com.ar',
    phone: '03482-545990',
    phoneRaw: '+543482545990',
  },
  sedes: [
    {
      name: 'Casa Central',
      // Dirección CORREGIDA 27/07: Calle 7 351, Guadalupe Norte, Santa Fe.
      // Reemplaza a "Ruta 11 Km. 814", que era un dato equivocado del brief
      // original (confirmado con el cliente). El código postal 3574 no cambia:
      // es el de la localidad, no depende de la calle.
      address: 'Calle 7 351, Guadalupe Norte, Santa Fe',
      email: 'trafico@transportecolussi.com.ar',
      phone: '03482-545990',
      phoneRaw: '+543482545990',
      // Dos teléfonos: 54-5990 es el confirmado con la dirección nueva; 498191 está
      // pintado en las unidades. Pendiente confirmar cuál es el principal.
      phoneSecondary: '03482-498191',
      phoneSecondaryRaw: '+543482498191',
    },
    {
      name: 'CD Noreste',
      address: 'Calle 31 Nº770, Fontana, Chaco',
      email: 'cdnoreste@transportecolussi.com.ar',
      phone: '0362-4460475',
      phoneRaw: '+543624460475',
    },
  ] as Sede[],
  social: {
    facebook:
      'https://www.facebook.com/Transporte-Colussi-411695562520418/',
  },
  // ⚠️ PENDIENTE (27/07): estas coordenadas (-28.938237,-59.561470) corresponden
  // a la dirección VIEJA (Ruta 11 Km. 814). Con el cambio de sede a Calle 7 351,
  // Guadalupe Norte, el mapa embebido apunta al lugar equivocado. NO inventar
  // coordenadas nuevas — falta geolocalizar la dirección nueva contra Google Maps
  // y reemplazar este embedUrl.
  maps: {
    embedUrl:
      'https://maps.google.com/maps?q=-28.938237,-59.561470&hl=es&z=15&output=embed',
  },
  // El orden de este menú tiene que seguir al orden de las secciones en
  // pages/index.astro. Si se reordena una sección, se reordena acá también.
  nav: [
    { label: 'Clientes', href: '#clientes' },
    { label: 'Servicios', href: '#soluciones' },
    { label: 'Unidades', href: '#unidades' },
    { label: 'Organización', href: '#empresa' },
    { label: 'RRHH', href: '#rrhh' },
    { label: 'Contactos', href: '#contactos' },
  ],
};
