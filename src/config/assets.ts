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
// ✅ EL TELÉFONO DE LAS LONAS ES 03482-498191, y coincide con el del sitio.
// Quedó anotado un rato como "hay dos números distintos" porque en un recorte
// de baja resolución el 8 de `flota-colussi-equipo-completo-lona` parecía un 2
// (un pliegue de la lona lo cruza justo al medio). **Franco lo desmintió y al
// ampliar al máximo se confirmó: dice 498191**, igual que la unidad del hero.
// Queda escrito para que nadie vuelva a "descubrir" el falso hallazgo: si una
// cifra se lee en una foto, se amplía hasta que no quede duda ANTES de anotarla.
//
// 🔧 CORREGIDO EL 08/08 — este comentario decía la relación al revés: la lona
// de `flota-colussi-curtain-sider` muestra el WhatsApp +549 3482 558666, que
// SÍ ES el que usa el sitio (site.ts, `whatsapp.number`, y desde el 08/08
// también publicado como teléfono de Casa Central). El 549842 es el que está
// DADO DE BAJA — no un canal alternativo vigente.

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
// Fotos de la pestaña de Mantenimiento (27/08). Llegaron el 29/07 y estuvieron
// cuatro semanas sueltas en Temp/Colussi-material/Imagenes Web/ mientras el
// planificador las daba por inexistentes — mismo caso que la foto del orden de
// los clientes. Si falta un insumo, primero se busca en el material entregado.
import tallerMantenimiento from '../assets/images/mantenimiento/tractoras-colussi-taller-mantenimiento.jpg';
import tunelLavado from '../assets/images/mantenimiento/tractora-colussi-tunel-lavado.jpg';

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
      // 🔴 PEDIDO DEL CLIENTE ABIERTO — ESTA FOTO SE VE RECORTADA A PROPÓSITO.
      // Romualdo, 11/08: "está cortada, habría que alejarla un poco, que se
      // vean todos los camiones". **No está cumplido**, y no por olvido.
      //
      // La causa es geométrica y ya se midió: el archivo es 1600×709 (ratio
      // 2,26) y la celda de la galería tiene ratio ~1,50, así que `object-cover`
      // recorta el 31% del ancho, un 15% de CADA lado. En esta toma la formación
      // ocupa el ancho completo de borde a borde, o sea que lo que se pierde son
      // las unidades de las dos puntas. **`object-position` no lo arregla:** solo
      // elige cuál punta se pierde.
      //
      // Se probó `object-contain` el 12/08: se veían los 13 camiones, pero la
      // foto quedaba en 384×170 dentro de una caja de 256 de alto, con bandas
      // blancas, desentonando contra las otras ocho que llenan su celda. **Franco
      // lo miró y decidió volver atrás**: prefiere la prolijidad de la grilla.
      //
      // ✅ LO QUE SÍ LO RESUELVE, y es lo que hay que conseguir: **el archivo
      // original de cámara, antes de que alguien lo recortara a panorámica.** Con
      // más cielo y más asfalto el ratio baja cerca de 1,5 y la foto llena la
      // celda entera sin perder un solo camión. Las otras dos salidas —darle dos
      // columnas, o rediseñar la galería a 4 columnas— sirven, pero cuestan la
      // simetría de las 3 filas de 3.
    },
    {
      src: curtainSider,
      alt: 'Semirremolque curtain sider de Transporte Colussi con la lona institucional de la empresa',
    },
    {
      src: centroDistribucion,
      alt: 'Unidades de Transporte Colussi bajo la playa cubierta del centro de distribución',
      // Única foto VERTICAL de la galería (más alta que ancha) dentro de una caja
      // apaisada: el recorte centrado se comía los camiones, que están en el
      // tercio inferior, y dejaba techo y cielo. Se baja el encuadre.
      position: '50% 78%',
    },
    {
      src: patioOperacion,
      alt: 'Formación de tractoras rojas de la flota propia de Transporte Colussi en el patio de operaciones',
      // 🔴 IMAGEN EDITADA, NO FOTOGRAFÍA DIRECTA (10/08). La versión original de
      // esta toma tenía tres unidades BLANCAS y una azul en el medio de la fila
      // —de terceros—, y Romualdo pidió sacarlas: "que sean rojos, no se puede
      // ver otro color acá" es regla para toda la sección de unidades, no una
      // nota al pie de esta foto. Franco la editó y pasó la versión con la fila
      // completa en rojo.
      //
      // ⚠️ LO QUE HAY QUE SABER ANTES DE REUTILIZARLA EN OTRO LADO: la edición
      // regeneró las cabinas, y con ellas el LETRERO de la marca. En el archivo
      // fuente (4780×3584) los frentes dicen "Colusgi", "Colusel" y "Coluged" en
      // vez de Colussi, y uno dice "IVECG" en vez de IVECO. **Acá no se ve** y
      // por eso se publica: la galería sirve 400/600 px (`widths` en
      // Fleet.astro) y a ese tamaño el letrero es una mancha ilegible —
      // verificado ampliando el render real, no el original. Pero si alguna vez
      // esta imagen va a un lightbox, a una impresión, a redes o a cualquier
      // uso que la muestre a más de ~800 px, el nombre del cliente aparece mal
      // escrito en sus propios camiones. En ese caso NO se usa: se pide la
      // edición sobre la foto real sin regenerar las cabinas.
      //
      // 📌 Romualdo notó además, el 14/08, que a una unidad de esta foto la
      // edición le puso un guardabarro que no le corresponde ("acá me trocharon
      // un camión"). **Franco decidió el 15/08 NO corregirlo.** No es un
      // pendiente ni una deuda: se evaluó y se descartó. Queda escrito solo para
      // que quien relea esa reunión no lo proponga de nuevo como si fuera un
      // hallazgo nuevo.
    },
  ],
  // ───────────────────────────────────────────────────────────────────────────
  // PESTAÑA DE MANTENIMIENTO (27/08). Las dos fotos tienen ORIENTACIONES
  // DISTINTAS y eso decidió el layout, no al revés: el taller es 1600×1200
  // (apaisada 4:3) y el lavado 960×1280 (VERTICAL 3:4). Puestas en dos celdas
  // iguales con `object-cover`, la vertical pierde ~40% de alto — es el mismo
  // problema medido en la 6ta foto de la galería. Por eso en Fleet.astro van con
  // ALTURA IGUAL y ancho libre según su ratio: ninguna se recorta.
  //
  // ⚠️ NINGÚN `alt` dice "nuestro taller" ni nombra un lugar. Lo primero porque
  // el taller es de la concesionaria; lo segundo por la regla de arriba (tres
  // homónimos disputando la identidad en buscadores).
  maintenance: {
    taller: {
      src: tallerMantenimiento,
      alt: 'Dos tractoras Iveco de Transporte Colussi en servicio de mantenimiento preventivo, con los capós delanteros abiertos y un mecánico trabajando sobre una de ellas',
    },
    lavado: {
      src: tunelLavado,
      alt: 'Tractora Iveco Hi-Road de Transporte Colussi ingresando al equipo de lavado automático de rodillos',
    },
  },
  // Logos pendientes del cliente — usar placeholders
  socialProof: {
    cnrt: '/images/placeholder-cnrt.svg',
    aseguradora1: '/images/placeholder-aseg-1.svg',
    aseguradora2: '/images/placeholder-aseg-2.svg',
    certificacion: '/images/placeholder-cert.svg',
  },
};
