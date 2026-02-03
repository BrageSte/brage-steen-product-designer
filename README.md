# Brage Steen — Produktdesigner Portfolio

Portfolio-nettsted for Brage Steen, produktdesigner basert i Norge.

## Tech Stack

- **Vite** — Bygg og utvikling
- **React** — UI-rammeverk
- **TypeScript** — Type-sikkerhet
- **React Router** — Klient-side routing
- **CSS** — Custom design tokens (ingen Tailwind)

## Utvikling

```bash
# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev

# Bygg for produksjon
npm run build

# Forhåndsvisning av bygget
npm run preview
```

## Prosjektstruktur

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout
│   ├── HeroOrb.tsx      # Turrell-inspirert lys-effekt
│   └── ProjectCard.tsx  # Prosjektkort
├── content/
│   └── projects/        # Prosjektinnhold (TS-filer)
├── pages/               # Sidekomponenter
├── styles/
│   ├── tokens.css       # Design tokens (farger, spacing, etc.)
│   └── base.css         # Reset og grunnstiler
└── App.tsx              # Hovedapp med routing
```

## Bilder

Bilder ligger i `public/images/<prosjekt>/`. Mappestruktur:

```
public/images/
├── sorting-guide/
│   ├── thumbnail.jpg    # Kortbilde (anbefalt: 800x600)
│   ├── hero.jpg         # Hero-bilde (anbefalt: 1600x900)
│   └── *.jpg            # Galleri-bilder
├── avfallsportalen/
├── headset/
├── seaweed/
├── crimpblock/
└── og-image.jpg         # OpenGraph-bilde (1200x630)
```

### Anbefalinger for bilder

- **Format:** WebP eller JPEG
- **Hero-bilder:** Maks 1600px bredde
- **Thumbnails:** 800x600px
- **Galleri:** 1200px bredde
- **OpenGraph:** 1200x630px

### Legge til bilder

1. Legg bildene i riktig mappe under `public/images/`
2. Oppdater referansene i `src/content/projects/<slug>.ts`

Eksempel:
```typescript
gallery: [
  {
    src: '/images/sorting-guide/research-01.jpg',
    alt: 'Beskrivelse av bildet',
    caption: 'Valgfri bildetekst',
  },
],
```

## Innholdsmodell

Prosjektdata ligger i `src/content/projects/`. Hvert prosjekt har:

- **slug** — URL-vennlig ID
- **title** / **subtitle** — Tittel og undertittel
- **description** — Kort beskrivelse
- **tags** — Kategorier/emneord
- **thumbnail** / **hero** — Bilder
- **meta** — År, rolle, team, partner, etc.
- **sections** — Innholdsseksjoner (tekst, sitat, liste)
- **gallery** — Bildegalleri
- **links** — Eksterne lenker
- **subpages** — Undersider (f.eks. prototype, gigamap)

## Design-prinsipper

- **Rams-clean layout:** Funksjonelt, stramt grid, lav visuell støy
- **Turrell-inspirert:** Subtil lys/glow i hero og på hover
- **Typografi:** System stack med Helvetica-prioritet
- **Animasjon:** Subtil (8-16px), fokus på "draw-in"

## Deploy

Bygget genererer statiske filer i `dist/` som kan deployes til hvilken som helst statisk hosting (Netlify, Vercel, GitHub Pages, etc.).

```bash
npm run build
```

## Lisens

Privat repository. Alle rettigheter forbeholdt.
