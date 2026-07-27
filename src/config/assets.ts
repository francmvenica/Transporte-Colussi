// Rutas centralizadas de imágenes.
// Para reemplazar una imagen: cambiar el archivo en src/assets/images/ manteniendo el mismo nombre.
//
// Fotos reales del cliente (2026-07-27) — reemplazan los montajes de IA que traía
// el sitio. Origen: material entregado por Romualdo (Temp/Colussi-material/Fotos/),
// ya triado contra sus criterios (unidades Iveco Hi-Road de frente negro = flota
// actual; sin marcas de clientes visibles; sin semi de 3 ejes). No se sabe dónde
// fue tomada cada foto: los `alt` no mencionan ubicación.
//
// Una 4ª foto de flota (contenedores, IMG-20260506-WA0009.jpg) quedó afuera de esta
// galería: con 4 items el grid de 3 columnas de Fleet.astro deja un hueco vacío en
// la última fila. No se tocó el grid (no es parte de esta tanda). La foto queda
// disponible en Temp/Colussi-material/Fotos/ si se agrega una 4ª columna a futuro.

// Astro image imports (processed by build pipeline)
import heroCamiones from '../assets/images/hero-camiones-contenedores-ruta.jpg';
import plataformaCarga from '../assets/images/plataforma-carga-colussi.jpg';
import flotaUnidadesPatio from '../assets/images/flota-colussi-unidades-patio.jpg';
import camionSemirremolque from '../assets/images/camion-colussi-semirremolque-ruta.jpg';
import flotaPlayaManiobras from '../assets/images/flota-colussi-playa-maniobras.jpg';

export const IMAGES = {
  hero: {
    src: heroCamiones,
    alt: 'Dos camiones de Transporte Colussi transportando contenedores sobre la ruta al atardecer',
  },
  about: {
    src: plataformaCarga,
    alt: 'Unidades de Transporte Colussi en la plataforma de carga y descarga',
  },
  fleet: [
    {
      src: flotaUnidadesPatio,
      alt: 'Unidades Iveco de la flota propia de Transporte Colussi en el patio de la empresa',
      label: 'Flota propia',
    },
    {
      src: camionSemirremolque,
      alt: 'Camión de Transporte Colussi con semirremolque curtain sider en ruta',
      label: 'En ruta',
    },
    {
      src: flotaPlayaManiobras,
      alt: 'Flota de Transporte Colussi en la playa de maniobras',
      label: 'Playa de maniobras',
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
