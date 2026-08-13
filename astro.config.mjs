// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// `site` es el dominio final (debe coincidir con SITE.url en src/config/site.ts):
// de ahí se derivan el sitemap, el canonical y el og:image. NO es el host actual
// de GitHub Pages — ese lo resuelve `base` abajo, que se mantiene hasta la
// migración a Cloudflare Pages (ver INFRAESTRUCTURA/web/README.md).
const site = 'https://www.transportecolussi.com.ar';

// 🔴 EL `base` DEPENDE DE DÓNDE SE BUILDEA, y por eso NO es una constante.
//
// GitHub Pages sirve el sitio en un subdirectorio (`usuario.github.io/Transporte-Colussi`),
// así que necesita ese prefijo en todas las rutas. Cloudflare Pages lo sirve en
// la RAÍZ de su dominio, donde el mismo prefijo rompe todos los links, el CSS y
// las imágenes.
//
// `CF_PAGES` la define Cloudflare Pages sola en cada build suyo: no hay que
// configurar nada a mano ni acordarse de cambiar un valor antes de deployar.
// Fuera de Cloudflare la variable no existe, así que GitHub Pages sigue
// buildeando exactamente igual que antes.
//
// ⚠️ Los dos hostings conviven a propósito durante la migración (agosto 2026):
// GitHub Pages es la URL temporal que el cliente viene revisando desde el 28/07,
// y Cloudflare Pages es donde va a vivir el sitio en el dominio propio. Cuando
// la migración cierre y el dominio esté publicado, ESTE CONDICIONAL SE BORRA y
// `base` vuelve a ser una constante en '/'.
const enCloudflarePages = process.env.CF_PAGES === '1';
const base = enCloudflarePages ? '/' : '/Transporte-Colussi';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [
    react(),
    sitemap({
      // Astro arma cada URL del sitemap como `site` + la ruta servida por ESTE
      // build, que incluye `base` (así vive hoy en GitHub Pages). El sitemap
      // tiene que reflejar el dominio final sin ese path intermedio, así que se
      // saca acá — mismo criterio que el canonical de Layout.astro.
      // ⚠️ El replace SOLO aplica cuando hay un `base` real que sacar. En
      // Cloudflare Pages `base` es '/', y hacer el replace ahí le comería la
      // barra final al dominio (`...com.ar/` -> `...com.ar`), dejando URLs
      // pegadas en el sitemap.
      serialize(item) {
        if (base !== '/') item.url = item.url.replace(`${site}${base}`, site);
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});