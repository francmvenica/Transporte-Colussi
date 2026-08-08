// Videos del carrusel del hero (y sus posters).
//
// ⚠️ 4 DE LOS 5 VIDEOS SIGUEN GENERADOS POR IA (drone-pullback, iveco-container,
// iveco-lona-ruta, dos-unidades-ruta). Decisión de Franco (29/07) sabiendo lo
// que sigue, así que no re-discutirlo — pero dejarlo escrito, porque el que
// retome no lo puede adivinar mirando el código y hay cosas que conviene tener
// presentes:
//   · En "container" la patente ("01 0F07U") no tiene formato argentino.
//   · El logo de marca aparece deformado en grado variable en los cuatro.
//   · Romualdo pidió el 14/07 reemplazar las imágenes de IA del sitio viejo
//     por fotos reales. Esto va en dirección contraria a aquel pedido, y él
//     todavía no lo vio.
// Si el cliente manda sus videos institucionales —están comprometidos en el
// mail del 21/07— reemplazan a estos y el problema se termina.
//
// ✅ EL SLIDE 2 YA ES MATERIAL REAL (08/08): "curtain-sider-girasoles"
// reemplazó a "iveco-coastal" (generado por IA, con un teléfono falso pintado
// en la lona — ver el historial del gradiente en Hero.astro). Es una unidad
// real de Colussi, no un montaje. Con este cambio quedan 4 de 5 en IA, no los
// 4 de 4 que documentaba esta nota hasta ahora.
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
// 🔴 HERO_SLIDES (el carrusel de fotos de respaldo, 7 imágenes) SE ELIMINÓ EL
// 08/08: no lo importaba nada desde que el hero pasó a video (29/07), era
// config muerto con el mismo problema que el campo `badge` de abajo. Sus
// imágenes que seguían en uso como POSTER de algún video se conservan
// (flotaAtardecer, camionesContenedores, tractorasHiRoad, flotaContrapicado);
// las tres que solo vivían en HERO_SLIDES y ningún video usaba como poster
// (curtainSiderRuta, curtainSiderRipio, semiLonaPerfil) se sacaron de los
// imports. Si hace falta un carrusel de fotos de respaldo en el futuro, se
// arma de nuevo desde Temp/Colussi-material/Fotos/Hero seccion — no hay que
// recuperar código, las fotos originales siguen ahí.
//
// Pendiente del cliente, ya no atado a un teléfono específico: con los tres
// fijos fuera del sitio (ver site.ts), cualquier número viejo pintado en una
// lona de una foto o un video deja de "contradecir" al sitio — el sitio ya no
// muestra ninguno de esos fijos.

import type { ImageMetadata } from 'astro';

import flotaContrapicado from '../assets/images/hero/flota-colussi-alineada-contrapicado.jpg';
import camionesContenedores from '../assets/images/hero-camiones-contenedores-ruta.jpg';
import tractorasHiRoad from '../assets/images/hero/tractoras-iveco-hi-road-colussi.jpg';
import flotaAtardecer from '../assets/images/hero/flota-colussi-semirremolque-atardecer.jpg';
import curtainSiderGirasoles from '../assets/images/hero/colussi-curtain-sider-girasoles.jpg';

export interface HeroVideo {
  id: string;
  src: string;
  title: string;
  alt: string;
  poster: ImageMetadata;
}

export const HERO_VIDEOS: HeroVideo[] = [
  {
    id: 'drone-pullback',
    src: '/videos/hero-drone-pullback.mp4',
    title: 'Tomas Aéreas de Flota',
    alt: 'Vista aérea de un camión de Transporte Colussi en camino de montaña',
    poster: flotaAtardecer,
  },
  {
    id: 'curtain-sider-girasoles',
    src: '/videos/hero-curtain-sider-girasoles.mp4',
    title: 'Curtain Sider entre Girasoles',
    alt: 'Camión Iveco rojo de Transporte Colussi con semirremolque curtain sider de lona blanca circulando por una ruta asfaltada junto a un campo de girasoles, día nublado',
    poster: curtainSiderGirasoles,
  },
  {
    id: 'iveco-container',
    src: '/videos/hero-iveco-container.mp4',
    title: 'Transporte de Contenedores',
    alt: 'Camión Iveco rojo transportando contenedor en corredor logístico',
    poster: camionesContenedores,
  },
  {
    id: 'iveco-lona-ruta',
    src: '/videos/hero-iveco-lona-ruta.mp4',
    title: 'Semirremolque de Lona',
    alt: 'Camión de Transporte Colussi con semirremolque de lona en ruta',
    poster: tractorasHiRoad,
  },
  {
    id: 'dos-unidades-ruta',
    src: '/videos/hero-dos-unidades-ruta.mp4',
    title: 'Unidades en Ruta',
    alt: 'Dos unidades de Transporte Colussi circulando en ruta',
    poster: flotaContrapicado,
  },
];

export const HERO_VIDEO_SLIDE_MS = 8000;
