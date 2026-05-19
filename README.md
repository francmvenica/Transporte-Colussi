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

Listo para deploy en **Vercel** o **Netlify**. Incluye `vercel.json` configurado.

```bash
# Vercel
npx vercel

# Netlify
npx netlify deploy --build
```

## Dónde editar

| Qué | Archivo |
|---|---|
| Datos de contacto, WhatsApp, sedes | `src/config/site.ts` |
| Imágenes (rutas centralizadas) | `src/config/assets.ts` |
| Servicios (títulos, descripciones) | `src/config/services.ts` |
| Textos de secciones | Cada componente en `src/components/` |
| Meta tags (SEO) | `src/layouts/Layout.astro` |

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

- **Astro** — framework estático con islands architecture
- **React** — formulario de contacto (react-hook-form)
- **Tailwind CSS v4** — estilos utility-first
- **Framer Motion** — animaciones (disponible, no activado aún)
- **Lucide React** — iconografía (disponible)

## Estructura

```
src/
├── assets/images/    # Imágenes (procesadas por Astro)
├── components/       # Componentes Astro + React
├── config/           # Configuración centralizada
├── layouts/          # Layout base
├── pages/            # Páginas (index.astro)
└── styles/           # CSS global + Tailwind
```
