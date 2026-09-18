# RAKN LABS

Landing oficial de **RAKN LABS**, estudio independiente de videojuegos.

El protagonista es **Blazeball**. RAKN LABS es la marca que lo presenta.

- Web: [raknlabs.vercel.app](https://raknlabs.vercel.app)
- Repo: [github.com/raknlabs/raknlabswebsite](https://github.com/raknlabs/raknlabswebsite)

Stack: Next.js, TypeScript, Tailwind CSS. Lista para Vercel.

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

Todo el contenido editable vive en:

`lib/siteConfig.ts`

Ahí cambias el título de Blazeball, tagline, género, plataformas, noticias, redes y futuros juegos.

### Logo

- `public/images/rakn-labs-logo.png`
- `public/images/rakn-labs-logo-mark.png` (navbar / footer)

### Key art de Blazeball

Coloca el artwork con estos nombres:

- `public/images/game-hero.webp` — hero a pantalla completa
- `public/images/game-logo.webp` — logo de Blazeball
- `public/images/game-01.webp` — cover / featured
- `public/images/game-trailer-cover.webp` — cover del trailer
- `public/images/game-screenshot-01.webp` … `04.webp`

Si un archivo no existe, la web usa un placeholder cinematográfico.

### Nombre y copy del juego

En `featuredGame` y en el primer ítem de `games`:

- `title` → `BLAZEBALL`
- `tagline`
- `description`
- `genre`
- `releaseStatus`

### Redes y plataformas

- `socialLinks`: pega las URLs reales. Vacío = icono visible, sin enlace inventado.
- `featuredGame.platforms`: `visible: true` + `href` para mostrar Steam, Play, App Store, etc.

### Trailer

En `featuredGame.trailer`:

- YouTube: `provider: "youtube"` + `youtubeId`
- Vimeo: `provider: "vimeo"` + `vimeoId`
- MP4: `provider: "mp4"` + `mp4Src`

### Añadir otro juego

Añade un objeto a `games` y su imagen en `public/images/`.

## Despliegue en Vercel

1. En [vercel.com](https://vercel.com) → Add New Project.
2. Importa `raknlabs/raknlabswebsite`.
3. Framework: Next.js.
4. Environment variable: `NEXT_PUBLIC_SITE_URL` = `https://raknlabs.vercel.app`
5. Deploy. El proyecto quedará en `raknlabs.vercel.app`.

No hace falta backend ni base de datos.
