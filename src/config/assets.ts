// Rutas centralizadas de imágenes.
// Para reemplazar una imagen: cambiar el archivo en src/assets/images/ manteniendo el mismo nombre.
//
// Fotos reales del cliente — reemplazan los montajes de IA que traía el sitio.
// Origen: material entregado por Romualdo y Juan Manuel, ya triado contra sus
// criterios (unidades Iveco de frente negro = flota actual; sin marcas de
// clientes visibles; sin semi de 3 ejes).
//
// ⚠️ NO se sabe dónde fue tomada cada foto, así que NINGÚN `alt` menciona
// ubicación. Es deliberado: esta empresa tiene tres homónimos disputándole la
// identidad en los buscadores, y un `alt` que afirme un lugar equivocado
// alimenta esa misma confusión.
//
// ─────────────────────────────────────────────────────────────────────────────
// GALERÍA DE UNIDADES — renovada el 2026-07-31: pasó de 3 fotos a 9.
//
// La selección la hizo FRANCO (material en Temp/Colussi-material/Imagenes Web/).
// De las 3 anteriores sobrevive solo el camión en ruta; salieron flota en patio
// y playa de maniobras. Con 9 el grid de 3 columnas cierra en 3 filas exactas:
// si se agrega o se saca una foto, la última fila queda coja.
//
// 🔴 LAS TARJETAS YA NO LLEVAN TÍTULO (pedido de Franco, 31/07). Antes cada foto
// mostraba un `label` al pasar el mouse ("Flota propia", "En ruta"). Se eliminó
// el campo entero, no solo el render, y con él el degradado oscuro del hover,
// que existía únicamente para dar contraste a ese texto. La foto se explica
// sola; la descripción sigue viva en el `alt`, que es lo que leen los
// buscadores y los lectores de pantalla.
//
// 🔴 LA FLOTA TIENE DOS TELÉFONOS DISTINTOS PINTADOS EN LAS LONAS. Verificado
// el 31/07 ampliando las fotos al máximo, no leído al pasar:
//   · hero/camion-colussi-curtain-sider-ruta-nacional → "Tel: 03482 - 498191"
//   · flota-colussi-equipo-completo-lona              → "Tel: 03482 - 492191"
// Difieren en el tercer dígito (8 vs 2) y las dos unidades están publicadas en
// el sitio: una en el hero, la otra en esta galería. El sitio muestra el 498191
// como principal, así que coincide con una de las dos.
//
// Y una tercera lona trae un WhatsApp que tampoco está en el sitio:
//   · flota-colussi-curtain-sider → "+549 3482 558666"  (el sitio usa 549842)
//
// NO se toca ninguno de los números por cuenta propia: puede que haya lonas
// viejas conviviendo con nuevas, o una mal pintada. Es pregunta para el
// cliente. Lo que no se puede seguir afirmando es que "498191 es el de las
// lonas" a secas — hay lonas que dicen otra cosa. Ver estado-construccion.md §4.

// Astro image imports (processed by build pipeline)
import heroCamiones from '../assets/images/hero-camiones-contenedores-ruta.jpg';
import fachadaColussi from '../assets/images/fachada-colussi.jpg';
import camionSemirremolque from '../assets/images/camion-colussi-semirremolque-ruta.jpg';
// ⚠️ ESTA SE IMPORTA DESDE hero/, NO SE DUPLICA. Es la MISMA foto que usa el
// cuarto video del hero como poster. Al copiarla con otro nombre, Vite —que
// deduplica por CONTENIDO, no por nombre— colapsó los dos archivos en un solo
// asset y se quedó con un nombre: el poster del hero quedó apuntando a un .jpg
// que ya no se emitía y daba 404. Un archivo, dos usos.
import tractorasNuevas from '../assets/images/hero/tractoras-iveco-hi-road-colussi.jpg';
import tractorasAlineadas from '../assets/images/flota-colussi-tractoras-alineadas.jpg';
import contenedoresPuerto from '../assets/images/flota-colussi-contenedores-puerto.jpg';
import equipoCompletoLona from '../assets/images/flota-colussi-equipo-completo-lona.jpg';
import formacionCompleta from '../assets/images/flota-colussi-formacion-completa.jpg';
import curtainSider from '../assets/images/flota-colussi-curtain-sider.jpg';
import centroDistribucion from '../assets/images/flota-colussi-centro-distribucion.jpg';
import patioOperacion from '../assets/images/flota-colussi-patio-operacion.jpg';

export const IMAGES = {
  hero: {
    src: heroCamiones,
    alt: 'Dos camiones de Transporte Colussi transportando contenedores sobre la ruta al atardecer',
  },
  // Sección Organización. Desde el 31/07 va la FACHADA de las instalaciones, que
  // reemplazó a la foto de la plataforma de carga (pedido de Franco): muestra la
  // marca aplicada al edificio y es prueba de instalación propia, que es
  // justamente lo que el texto de esa sección afirma.
  about: {
    src: fachadaColussi,
    alt: 'Fachada de las instalaciones de Transporte Colussi con el logo de la empresa sobre el frente',
  },
  fleet: [
    {
      src: tractorasNuevas,
      alt: 'Tres tractoras Iveco Hi-Road recién incorporadas a la flota propia de Transporte Colussi',
    },
    {
      src: tractorasAlineadas,
      alt: 'Cinco tractoras Iveco de la flota propia de Transporte Colussi alineadas en la playa de maniobras',
    },
    {
      src: contenedoresPuerto,
      alt: 'Equipos de Transporte Colussi con contenedores de 40 pies cargados en terminal portuaria',
    },
    {
      src: camionSemirremolque,
      alt: 'Camión de Transporte Colussi con semirremolque curtain sider en ruta',
    },
    {
      src: equipoCompletoLona,
      alt: 'Tractora Iveco 360 de Transporte Colussi con semirremolque de lona y barandas',
    },
    {
      src: formacionCompleta,
      alt: 'Formación completa de la flota de Transporte Colussi con sus semirremolques estacionados',
    },
    {
      src: curtainSider,
      alt: 'Semirremolque curtain sider de Transporte Colussi con la lona institucional de la empresa',
    },
    {
      src: centroDistribucion,
      alt: 'Unidades de Transporte Colussi bajo la playa cubierta del centro de distribución',
    },
    {
      src: patioOperacion,
      alt: 'Unidades de la flota de Transporte Colussi en el patio de operaciones',
    },
  ],
  // Logos pendientes del cliente — usar placeholders
  socialProof: {
    cnrt: '/images/placeholder-cnrt.svg',
    aseguradora1: '/images/placeholder-aseg-1.svg',
    aseguradora2: '/images/placeholder-aseg-2.svg',
    certificacion: '/images/placeholder-cert.svg',
  },
};
