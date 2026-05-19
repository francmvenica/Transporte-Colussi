// Rutas centralizadas de imágenes.
// Para reemplazar una imagen: cambiar el archivo en src/assets/images/ manteniendo el mismo nombre.

// Astro image imports (processed by build pipeline)
import heroRuta from '../assets/images/hero-ruta.png';
import heroPuente from '../assets/images/hero-puente.png';
import heroBranded from '../assets/images/hero-branded.png';
import aboutInstalaciones from '../assets/images/about-instalaciones.png';
import flotaIveco01 from '../assets/images/flota-iveco-01.png';
import flotaRuta01 from '../assets/images/flota-ruta-01.png';
import flotaCarga01 from '../assets/images/flota-carga-01.png';

export const IMAGES = {
  hero: [
    { src: heroBranded, alt: 'Camión de Transporte Colussi con logo oficial en ruta' },
    { src: heroRuta, alt: 'Camión de Transporte Colussi en ruta nacional argentina' },
    { src: heroPuente, alt: 'Camión de carga cruzando puente sobre río' },
  ],
  about: {
    src: aboutInstalaciones,
    alt: 'Instalaciones logísticas de Transporte Colussi',
  },
  fleet: [
    { src: flotaIveco01, alt: 'Flota de camiones Colussi estacionados', label: 'Flota propia' },
    { src: flotaRuta01, alt: 'Camión Colussi en ruta al atardecer', label: 'Cobertura nacional' },
    { src: flotaCarga01, alt: 'Operación de carga en depósito logístico', label: 'Logística integrada' },
  ],
  // Logos pendientes del cliente — usar placeholders
  socialProof: {
    cnrt: '/images/placeholder-cnrt.svg',
    aseguradora1: '/images/placeholder-aseg-1.svg',
    aseguradora2: '/images/placeholder-aseg-2.svg',
    certificacion: '/images/placeholder-cert.svg',
  },
};
