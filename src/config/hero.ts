// Fotos del carrusel del hero. Material del cliente (Temp/Colussi-material/Fotos/
// Hero seccion), ya triado a mano por Franco.
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
