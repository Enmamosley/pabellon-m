# Pabellón M

Sitio web de **Pabellón M**, un desarrollo contemporáneo en Monterrey que reúne negocios, entretenimiento, comercios y servicios en un solo espacio.

🔗 **[Ver sitio en vivo](https://enmamosley.github.io/pabellon-m/)**

## Sobre el proyecto

Réplica del sitio original [pabellonm.com](https://www.pabellonm.com/) construida con Astro y contenido estático extraído del sitio Webflow original. Incluye animaciones GSAP con ScrollTrigger que reproducen las interacciones originales.

## Tecnologías

- **[Astro](https://astro.build/)** v6 — Framework de generación estática
- **[Tailwind CSS](https://tailwindcss.com/)** v4 — Utilidades CSS junto con clases custom del diseño Webflow
- **[GSAP](https://gsap.com/)** + ScrollTrigger + SplitType — Animaciones de scroll
- **GitHub Pages** — Hosting con deploy automático via GitHub Actions

## Estructura

```
src/
├── components/       # Nav, Footer
├── data/
│   ├── directorio/   # 30 negocios (JSON individuales)
│   └── *.json        # Datos de cada página (home, nosotros, contacto, etc.)
├── layouts/          # Layout principal
├── pages/            # 7 páginas
├── styles/           # CSS global con design tokens de Webflow
└── utils/            # Utilidad de mapeo de imágenes CDN → local
public/
├── fonts/            # Uniform Regular & Bold (OTF)
└── images/           # 141 imágenes locales
```

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Hero, marquee de marcas, secciones de servicios, CTA |
| `/nosotros` | Historia del proyecto, animaciones de scroll (layout484 + layout518) |
| `/directorio` | Directorio de los 30 negocios con imágenes y datos |
| `/mapa` | Planos interactivos por nivel (9 pisos) |
| `/informes` | Servicios disponibles (espacios, locales, comercios) |
| `/contacto` | Formulario y datos de contacto |
| `/legal/aviso-de-privacidad` | Aviso de privacidad |

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Deploy

El sitio se despliega automáticamente en GitHub Pages al hacer push a `master`. El workflow está en `.github/workflows/deploy.yml`.
