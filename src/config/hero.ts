// Fotos y Videos del carrusel del hero.
//
// ⚠️ LOS 4 VIDEOS SON GENERADOS POR IA, no son tomas reales de la flota.
// Decisión de Franco (29/07) sabiendo lo que sigue, así que no re-discutirlo —
// pero dejarlo escrito, porque el que retome no lo puede adivinar mirando el
// código y hay cosas que conviene tener presentes:
//   · En el video "coastal" la lona muestra "Tul: 03482 - 499197". El teléfono
//     real es 498191 y el rótulo dice "Tul", no "Tel". Franco lo evaluó: a la
//     velocidad del plano no se alcanza a leer.
//   · En "container" la patente ("01 0F07U") no tiene formato argentino.
//   · El logo de marca aparece deformado en grado variable en los cuatro.
//   · Romualdo pidió el 14/07 reemplazar las imágenes de IA del sitio viejo
//     por fotos reales. Esto va en dirección contraria a aquel pedido, y él
//     todavía no lo vio.
// Si el cliente manda sus videos institucionales —están comprometidos en el
// mail del 21/07— reemplazan a estos y el problema se termina.
//
// Las FOTOS de HERO_SLIDES sí son material real del cliente
// (Temp/Colussi-material/Fotos/Hero seccion), triado a mano por Franco. Hoy no
// se usan en el hero (quedó con video) pero se conservan: son el respaldo si
// se vuelve atrás, y siguen siendo los posters de cada video.
//
// Reglas de este archivo:
//
// 1. Las fotos viven en src/assets/, NO en public/. En public/ Astro las sirve
//    crudas: las 7 originales sumaban 6,66 MB, con una sola de 3,8 MB. Desde
//    src/assets/ el pipeline las convierte a WebP y genera srcset.
// 2. Los `alt` NO mencionan ubicacion. No sabemos donde fue tomada cada foto y
//    no se inventa: misma regla que en assets.ts.
// 3. Las unidades son IVECO. Un handoff previo proponia un alt que decia
//    "Scania" — verificado contra las fotos, es falso.
// 4. El orden importa: el primer slide es el que ve casi todo el mundo. Va la
//    foto de flota completa, que es lo que pidio Romualdo para el arranque.
//
// Pendiente del cliente que toca a estas fotos: en las tres tomadas en ruta de
// montana se lee "Tel: 03482 - 498191" pintado en la lona, que es el telefono
// en conflicto con el 54-5990 que muestra el sitio.

import type { ImageMetadata } from 'astro';

import flotaContrapicado from '../assets/images/hero/flota-colussi-alineada-contrapicado.jpg';
import camionesContenedores from '../assets/images/hero-camiones-contenedores-ruta.jpg';
import tractorasHiRoad from '../assets/images/hero/tractoras-iveco-hi-road-colussi.jpg';
import flotaAtardecer from '../assets/images/hero/flota-colussi-semirremolque-atardecer.jpg';
import curtainSiderRuta from '../assets/images/hero/camion-colussi-curtain-sider-ruta-nacional.jpg';
import curtainSiderRipio from '../assets/images/hero/camion-colussi-curtain-sider-camino-ripio.jpg';
import semiLonaPerfil from '../assets/images/hero/semirremolque-colussi-lona-perfil.jpg';

export interface HeroSlide {
  src: ImageMetadata;
  alt: string;
  /** Calidad WebP propia. Solo para fotos que compriman mal (ver nota de abajo). */
  quality?: number;
}

export interface HeroVideo {
  id: string;
  src: string;
  title: string;
  badge: string;
  alt: string;
  poster: ImageMetadata;
}

export const HERO_VIDEOS: HeroVideo[] = [
  {
    id: 'drone-pullback',
    src: '/videos/hero-drone-pullback.mp4',
    title: 'Tomas Aéreas de Flota',
    badge: 'Video 1 de 4',
    alt: 'Vista aérea de un camión de Transporte Colussi en camino de montaña',
    poster: flotaAtardecer,
  },
  {
    id: 'iveco-coastal',
    src: '/videos/hero-iveco-coastal.mp4',
    title: 'Semirremolque en Ruta',
    badge: 'Video 2 de 4',
    alt: 'Camión tractor Iveco de Transporte Colussi con semirremolque de lona en ruta',
    poster: curtainSiderRuta,
  },
  {
    id: 'iveco-container',
    src: '/videos/hero-iveco-container.mp4',
    title: 'Transporte de Contenedores',
    badge: 'Video 3 de 4',
    alt: 'Camión Iveco rojo transportando contenedor en corredor logístico',
    poster: camionesContenedores,
  },
  // ⚠️ El `title` SALE PUBLICADO: es la etiqueta del punto de navegación y en
  // desktop se lee entera. Este slide decía "Próxima Unidad (Pendiente)" y se
  // veía en el sitio. Un nombre de slide describe lo que se ve, nunca su
  // estado interno de producción.
  {
    id: 'iveco-lona-ruta',
    src: '/videos/hero-iveco-lona-ruta.mp4',
    title: 'Semirremolque de Lona',
    badge: '',
    alt: 'Camión de Transporte Colussi con semirremolque de lona en ruta',
    poster: tractorasHiRoad,
  },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: flotaAtardecer,
    alt: 'Unidades de Transporte Colussi junto a un semirremolque de lona al atardecer',
  },
  {
    // Es la foto mas pesada del carrusel con diferencia: mucho detalle fino
    // (fila de unidades + grava + arboleda) es lo peor para WebP. Ya se recorto
    // a 16:9 para sacarle suelo. Va segunda a proposito: en el primer slot
    // bloqueaba el LCP con 800 KB.
    src: flotaContrapicado,
    alt: 'Flota de camiones Iveco de Transporte Colussi alineada en la playa de maniobras',
    quality: 52,
  },
  {
    src: camionesContenedores,
    alt: 'Dos camiones de Transporte Colussi transportando contenedores sobre la ruta al atardecer',
  },
  {
    src: tractorasHiRoad,
    alt: 'Tractoras Iveco Hi-Road de Transporte Colussi en fila',
  },
  {
    src: curtainSiderRuta,
    alt: 'Camión de Transporte Colussi con semirremolque curtain sider en ruta',
  },
  {
    src: curtainSiderRipio,
    alt: 'Camión de Transporte Colussi con semirremolque curtain sider en un camino de ripio',
  },
  {
    src: semiLonaPerfil,
    alt: 'Semirremolque de lona de Transporte Colussi visto de perfil',
  },
];

/** Milisegundos que dura cada slide. La barra de progreso se sincroniza con esto. */
export const HERO_SLIDE_MS = 6000;
export const HERO_VIDEO_SLIDE_MS = 8000;
