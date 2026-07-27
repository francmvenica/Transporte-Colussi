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
const base = '/Transporte-Colussi';

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
      serialize(item) {
        item.url = item.url.replace(`${site}${base}`, site);
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});