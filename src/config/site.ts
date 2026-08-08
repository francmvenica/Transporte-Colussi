export interface Sede {
  name: string;
  address: string;
  email: string;
  phone: string;
  phoneRaw: string;
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
  // 🔴 LOS TRES FIJOS SALIERON DEL SITIO EL 08/08 (498191, 545990 y 4460475) —
  // esto REVIERTE la decisión del 30-31/07 de abajo, que fijaba el 498191 como
  // principal "porque es el pintado en las lonas". Ese argumento se cayó por
  // un hecho nuevo, no por capricho: Romualdo está cambiando las lonas ("en
  // las lonas ya estoy cambiando todo… son lonas viejas") y pidió todo el
  // contacto por WhatsApp ("vamos todos a WhatsApp, la línea fija ya fue").
  // Quedan dos celulares, los dos con icono de WhatsApp al lado (pedido
  // explícito): el de Leticia (tráfico, Guadalupe Norte) y el de María (CD
  // Noreste, Fontana) — ver `sedes` más abajo.
  //
  // 🔴 EL FORMATO NO SE HEREDA DEL QUE HABÍA. `03482-XXXXXX` es válido para un
  // fijo e IMPOSIBLE de marcar para un celular (le falta el `9`/`15`). Los dos
  // números nuevos van en E.164 CON EL 9 (`+549...`): sin él, el `tel:` cae en
  // rango de fijo y el click-to-call falla en el teléfono de quien lo toca.
  //
  // `contact` es el general de la empresa (Footer + JSON-LD Organization). Usa
  // el de Leticia/tráfico — mismo criterio que ya regía antes (mirror de
  // Casa Central), solo que ahora apunta a un celular, no a un fijo.
  contact: {
    email: 'trafico@transportecolussi.com.ar',
    phone: '+54 9 3482 558666',
    phoneRaw: '+5493482558666',
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
      // Celular de Leticia (tráfico) — YA era el WhatsApp del sitio desde el
      // 27/07 (ver `whatsapp.number` abajo) y Romualdo lo validó en la reunión
      // del 07/08 al preguntar a dónde iba el link ("perfecto, ese está
      // bien"). Ahora se publica TAMBIÉN como teléfono, no solo como WhatsApp.
      phone: '+54 9 3482 558666',
      phoneRaw: '+5493482558666',
    },
    {
      name: 'CD Noreste',
      address: 'Calle 31 Nº770, Fontana, Chaco',
      email: 'cdnoreste@transportecolussi.com.ar',
      // Celular de María, pasado por Franco el 08/08. ⚠️ A CONFIRMAR: el
      // prefijo 3482 es de Guadalupe Norte/Reconquista, no de Fontana (que
      // sería 0362) — puede ser una línea santafesina que conserva trabajando
      // en Chaco, pero es un dato de contacto: si está mal, un cliente marca
      // al vacío. Confirmar con Romualdo o Mariela.
      phone: '+54 9 3482 617565',
      phoneRaw: '+5493482617565',
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
