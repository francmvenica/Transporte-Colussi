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
  // ⚠️ `tagline` SE ELIMINÓ el 30/07. Era el eyebrow rojo del hero
  // ("Transporte de cargas a nivel nacional") y Romualdo preguntó en la revisión
  // del 29/07 si se sacaba —en el audio quedó deformado como "cámara de cargas"—;
  // Franco lo confirmó el 30/07. Se sacó también el campo y no solo el render:
  // config muerto se lee después como si hiciera algo. Si vuelve a hacer falta un
  // eyebrow en el hero, va junto con el título nuevo, que Franco está escribiendo.
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
  // 🔴 EL TELÉFONO QUE SE MUESTRA ES EL 498191 (decisión de Franco, 30/07). Es el
  // que está pintado en las lonas de los camiones, o sea el que la gente ya
  // asocia a la empresa. Cierra el pendiente "cuál teléfono es el principal",
  // que venía abierto desde el 27/07 con los dos conviviendo sin jerarquía.
  // El 545990 no se borra: sigue visible como secundario en la ficha de Casa
  // Central. Y el de WhatsApp es OTRO (el de Leticia, tráfico) y no se toca.
  contact: {
    email: 'trafico@transportecolussi.com.ar',
    phone: '03482-498191',
    phoneRaw: '+543482498191',
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
      // 🔴 INVERTIDOS EL 30/07: el principal es el 498191, el pintado en las
      // lonas. Cierra el pendiente que estaba anotado justo acá abajo desde el
      // 27/07 ("confirmar cuál es el principal"). Los dos siguen a la vista, en
      // este orden — decisión de Franco.
      phone: '03482-498191',
      phoneRaw: '+543482498191',
      phoneSecondary: '03482-545990',
      phoneSecondaryRaw: '+543482545990',
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
  // ✅ VERIFICADAS el 2026-07-31: estas coordenadas están BIEN y no hay que
  // tocarlas. Estuvieron anotadas como "de la dirección vieja (Ruta 11 Km 814)"
  // desde el 27/07, y era falso: el reverse geocoding las ubica en **Calle 7
  // nº 344, Guadalupe Norte**, o sea a **41 metros** de Calle 7 351. Misma
  // cuadra. A zoom 15 el embed muestra exactamente la sede.
  // El pendiente nació de suponer, no de medir, y sobrevivió tres días.
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
