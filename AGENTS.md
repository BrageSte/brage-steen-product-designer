# Agentinstruksjoner

Porteføljen til Brage Steen, live på https://bragesteen.no. Repoet er **offentlig** på GitHub.

## Les først

1. [PLANS.md](PLANS.md) — kilden til sannhet for ombyggingen: mål, posisjonering, beslutninger,
   faser og fremdrift. Les den før du endrer noe.
2. [_innboks/README.md](_innboks/README.md) — hvor Brage legger råmateriale.

## Status (oppdater når fasen endres)

- Ombygging pågår. Aktiv fase: **Fase 2** på gren `rebuild/astro` (fase 0 er merget; domenekobling gjenstår).
- Dagens kode: Vite + React + Tailwind (opprinnelig Lovable-mal). Erstattes av Astro i fase 2–3.
- Lovable brukes ikke lenger. Ikke legg til Lovable-avhengigheter.
- Hosting: Cloudflare Workers (statiske filer), konfig i `wrangler.jsonc`. Lokal test av
  produksjonsoppsettet: `npm run build && npx wrangler dev`.

## Arbeidsregler

- Én fase = én gren og én PR. Ikke merge eller push til `main` uten at Brage har sagt ja.
- Oppdater «Fremdrift» i PLANS.md etter hvert fullførte steg, og «Beslutningslogg» når noe
  besluttes. Kryss av sjekkpunkter når de er verifisert, ikke når koden er skrevet.
- Verifiser i nettleser (desktop og mobil) før noe markeres ferdig. For ruting: test klikk,
  direkte lenke og sideoppdatering.
- Ny beslutning som strider mot PLANS.md: spør Brage, ikke bestem selv.

## Innhold og tone

- Alt nettstedsinnhold på **norsk**. URL-er på norsk (`/prosjekter/...`, `/om-meg`).
- Brage er **produktdesigner med prototyping som styrke**. Kode og elektronikk er verktøy
  i prosjektene — aldri overskriften. Ikke skriv tekst som posisjonerer ham som utvikler eller
  elektronikkingeniør.
- AI-verktøy omtales som verktøy; Brage er den som designer og bestemmer.
- GripSense: følg GripSense-prosjektets regler for tillatt produkttekst. Ikke påstå validert
  måling, treningseffekt eller skadeforebygging.
- Ikke finn på fakta (tall, team, resultater). Mangler noe: spør eller la seksjonen stå ute.
- Personvern: kun e-post synlig på nettsiden. Aldri adresse, fødselsdato eller telefon.
- Krediter fotografer (f.eks. «Foto: Vilde Abrahamsen» på Caddy-bildene).

## Råmateriale og bilder

- Brage legger originaler i `_innboks/` (ignorert av git, finnes kun lokalt i hovedmappen
  `~/Documents/GitHub/brage-steen-product-designer/_innboks/` — ikke i worktrees eller skyøkter).
- Prosesser til web før bruk:
  - HEIC → JPG. Foto som JPG; PNG kun for tegninger/skjermbilder med skarpe linjer eller transparens.
  - Maks 2400 px på lengste side, mål < 500 kB per bilde.
  - **Fjern EXIF/GPS** (bruk `sharp`, som fjerner metadata som standard).
  - Filnavn i kebab-case som beskriver innholdet: `prototype-v2-grep.jpg`.
  - Alle bilder skal ha meningsfull alt-tekst på norsk.
- Ferdige bilder: `src/content/prosjekter/<slug>/bilder/` (etter Astro-oppsettet).
  Før det: `public/projects/<slug>/`.
- Rør aldri originalene i `_innboks/`; kopier ut og prosesser.

## Kommandoer (dagens Vite-app)

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # utdata i dist/
```

Preview-systemet (`npm run previews:*`, `.githooks/`, `previews/`-mapper) er under utfasing og
fjernes i fase 3. Ikke generer nye previews.
