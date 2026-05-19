export const SITE = {
  name: 'Transporte Colussi',
  tagline: 'Transporte de cargas a nivel nacional',
  description:
    'Transporte de cargas generales, contenedores, logística y distribución en el NEA. Cobertura nacional con flota propia y monitoreo satelital 24/7.',
  url: 'https://www.transportecolussi.com.ar',
  whatsapp: {
    number: '5493482549842',
    message:
      'Hola Transporte Colussi, me contacto desde la web para realizar una consulta',
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },
  contact: {
    email: 'trafico@transportecolussi.com.ar',
    phone: '03482-498191',
    phoneRaw: '+543482498191',
  },
  sedes: [
    {
      name: 'Casa Central',
      address: 'Ruta 11 Km. 814, Guadalupe Norte, Santa Fe',
      email: 'trafico@transportecolussi.com.ar',
      phone: '03482-498191',
      phoneRaw: '+543482498191',
    },
    {
      name: 'CD Noreste',
      address: 'Calle 31 Nº770, Fontana, Chaco',
      email: 'cdnoreste@transportecolussi.com.ar',
      phone: '0362-4460475',
      phoneRaw: '+543624460475',
    },
  ],
  social: {
    facebook:
      'https://www.facebook.com/Transporte-Colussi-411695562520418/',
  },
  maps: {
    embedUrl:
      'https://maps.google.com/maps?q=-28.938237,-59.561470&hl=es&z=15&output=embed',
  },
  nav: [
    { label: 'Clientes', href: '#clientes' },
    { label: 'Servicios', href: '#soluciones' },
    { label: 'Organización', href: '#empresa' },
    { label: 'RRHH', href: '#rrhh' },
    { label: 'Unidades', href: '#unidades' },
    { label: 'Contactos', href: '#contactos' },
  ],
};
