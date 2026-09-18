# RAKN LABS

Landing page oficial del estudio de videojuegos **RAKN LABS**.

El juego es el protagonista. La marca lo presenta.

Stack: Next.js, TypeScript, Tailwind CSS. Lista para desplegar en Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:43123](http://localhost:43123).

```bash
npm run build
npm start
```

## Cómo actualizar el contenido

Todo el contenido editable vive en un solo archivo:

`lib/siteConfig.ts`

Ahí cambias el nombre del juego, tagline, género, plataformas, noticias, redes y slots de futuros juegos.

### Logo

Coloca el logo en:

`public/images/rakn-labs-logo.png`

La versión recortada para navbar/footer está en:

`public/images/rakn-labs-logo-mark.png`

### Artwork del juego

Sustituye estos archivos (mismos nombres y rutas):

- `public/images/game-hero.webp` — key art del hero (pantalla completa)
- `public/images/game-logo.webp` — logo del juego
- `public/images/game-01.webp` — artwork principal / cover
- `public/images/game-trailer-cover.webp` — cover del trailer 16:9
- `public/images/game-screenshot-01.webp` … `04.webp` — capturas
- `public/images/game-02.webp` / `game-03.webp` — futuros juegos

Si un archivo no existe, la web muestra un placeholder cinematográfico en CSS. No hace falta inventar imágenes.

### Nombre del juego

En `lib/siteConfig.ts`, objeto `featuredGame`:

- `title`
- `tagline`
- `kicker`
- `description`
- `genre`
- `releaseStatus`

Actualiza también el primer ítem de `games` para que el catálogo coincida.

### Enlaces sociales

En `siteConfig.socialLinks`, rellena `href`. Mientras esté vacío, el icono se muestra como “coming soon” y no inventa URLs.

### Plataformas

En `featuredGame.platforms`, pon `visible: true` y un `href` real para mostrar botones como Steam, Google Play o App Store. Si `visible` es `false`, el botón no se renderiza.

### Trailer

En `featuredGame.trailer`:

- YouTube: `provider: "youtube"` + `youtubeId`
- Vimeo: `provider: "vimeo"` + `vimeoId`
- MP4: `provider: "mp4"` + `mp4Src` (por ejemplo `/videos/trailer.mp4`)

### Añadir un nuevo juego

Añade un objeto a `games` en `siteConfig.ts` y coloca su imagen en `public/images/`. El primero con `featured: true` es la tarjeta grande.

### SEO

- Title y description: `app/layout.tsx` y `siteConfig`
- Open Graph: `public/images/og-image.png`
- Dominio público: variable `NEXT_PUBLIC_SITE_URL` (sin inventar uno)

## Despliegue en Vercel

1. Sube el repositorio a GitHub / GitLab / Bitbucket.
2. En [vercel.com](https://vercel.com) → Add New Project.
3. Importa el repo. Framework: Next.js (autodetectado).
4. Opcional: `NEXT_PUBLIC_SITE_URL` = `https://tu-dominio.vercel.app`
5. Deploy.

No hace falta backend ni base de datos.
