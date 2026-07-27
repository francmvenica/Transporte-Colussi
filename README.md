# Transporte Colussi — Sitio Web

Sitio web corporativo de Transporte Colussi. Transporte de cargas a nivel nacional, logística y distribución en el NEA.

## Comandos

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor de desarrollo (http://localhost:4321)
npm run build      # Build de producción
npm run preview    # Preview del build
```

## Deploy

**Interino (actual):** GitHub Actions despliega a **GitHub Pages** en cada push a `main` (`.github/workflows/deploy.yml`). El sitio se sirve bajo el path `/Transporte-Colussi` (ver `base` en `astro.config.mjs`) — **un push a `main` publica el sitio en vivo**, trabajar siempre en una rama aparte.

**Definitivo (pendiente de migración):** **Cloudflare Pages** sobre `https://www.transportecolussi.com.ar`. El `site` de `astro.config.mjs` ya apunta a ese dominio (de ahí derivan sitemap, canonical y `og:image`), pero el `base` de GitHub Pages se mantiene hasta que se ejecute la migración — no se saca antes de tiempo.

## Dónde editar

| Qué | Archivo |
|---|---|
| Datos de contacto, WhatsApp, sedes | `src/config/site.ts` |
| Imágenes (rutas centralizadas) | `src/config/assets.ts` |
| Servicios (títulos, descripciones) | `src/config/services.ts` |
| Clientes y sectores atendidos | `src/config/clients.ts` |
| Corredores / rutas (home) | `src/config/corridors.ts` |
| Preguntas frecuentes (FAQ + schema) | `src/config/faq.ts` |
| Specs de flota | `src/config/fleet.ts` |
| Texto de "Nuestra Historia" | `src/pages/historia.astro` |
| Textos de secciones | Cada componente en `src/components/` |
| Meta tags, canonical, JSON-LD (SEO/GEO) | `src/layouts/Layout.astro` |

## Multimedia pendiente de reemplazo

Las imágenes actuales fueron **generadas por IA** como versión inicial de alta calidad. Para reemplazar con fotos reales:

1. Colocar la imagen nueva en `src/assets/images/` con el **mismo nombre de archivo**
2. No hace falta cambiar código — Astro las procesa automáticamente

### Inventario de imágenes

| Archivo | Dimensiones recomendadas | Dónde aparece | Estado |
|---|---|---|---|
| `hero-ruta.png` | 1920×800px | Hero section (fondo principal) | 🤖 AI |
| `hero-puente.png` | 1920×800px | Hero (alternativo) | 🤖 AI |
| `about-instalaciones.png` | 800×600px | Sección Nosotros | 🤖 AI |
| `flota-iveco-01.png` | 600×400px | Galería Flota | 🤖 AI |
| `flota-ruta-01.png` | 600×400px | Galería Flota | 🤖 AI |
| `flota-carga-01.png` | 600×400px | Galería Flota | 🤖 AI |
| `og-image.png` | 1200×630px | Social sharing (meta og:image) | 🤖 AI |

### Logos pendientes del cliente

| Archivo | Dimensiones | Dónde aparece |
|---|---|---|
| Logo vectorial (SVG) | ~200×60px | Header, Footer |
| Logo CNRT | 200×80px | Cintillo Social Proof |
| Logo aseguradora 1 | 200×80px | Cintillo Social Proof |
| Logo aseguradora 2 | 200×80px | Cintillo Social Proof |
| Logo certificación | 200×80px | Cintillo Social Proof |

## Stack

- **Astro** — framework estático con islands architecture, con `@astrojs/sitemap` para el sitemap
- **React** (`@astrojs/react`) — integración instalada, hoy sin ninguna isla activa (el formulario de contacto se reemplazó por un CTA de WhatsApp estático). Se mantiene por si aparece una necesidad real de interactividad (carrusel, mapa, etc.)
- **Tailwind CSS v4** — estilos utility-first

## Estructura

```
src/
├── assets/images/    # Imágenes (procesadas por Astro)
├── components/       # Componentes Astro
├── config/           # Configuración centralizada
├── layouts/          # Layout base
├── pages/            # Páginas (index.astro, historia.astro)
└── styles/           # CSS global + Tailwind
```
