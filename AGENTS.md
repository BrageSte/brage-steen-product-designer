# Agentinstruksjoner

Porteføljen til Brage Steen, live på https://bragesteen.no. Repoet er **offentlig** på GitHub.

## Les først

1. [PLANS.md](PLANS.md) – gjeldende plan «Portefølje klar for jobbsøking», med prioriteringer,
   beslutninger, fremdrift og lenker til delplanene.
2. [_innboks/README.md](_innboks/README.md) – hvor råmateriale ligger.
3. Relevant delplan under `docs/portefolje/`, og kontrollrapporten ved funksjonsarbeid.

## Status

- Retning godkjent 2026-10-22: **behold og forbedre eksisterende Vite + React + Tailwind-side**.
- Fase 0/hosting er verifisert på live. Jobbsøkingsplanen er skrevet; implementeringen av
  J1–J4 er ikke startet gjennom planarbeidet.
- Dagens `rebuild/astro` er et forkastet designutkast og skal ikke merges eller publiseres.
- Kodeforbedringer starter fra oppdatert `main` i egen gren. Ikke ta med Astro-implementasjonen
  som følge av at plan eller historikk tidligere lå på den grenen.
- Produksjonscaser: `src/pages/projects/`; kortdata: `src/content/projects/index.ts`.
  Gjenbruk `SiteLayout`, `ProjectBar` og eksisterende byggeklosser/visuelt uttrykk.
- Hosting: Cloudflare Workers med statiske filer, `wrangler.jsonc`. `main` er produksjon;
  egne grener har Cloudflare-forhåndsvisning. Lovable brukes ikke lenger; ikke legg til Lovable-avhengigheter.
- Den tidligere ombyggingsplanen ligger i `docs/portefolje/arkiv/` som historikk, ikke arbeidsordre.

## Arbeidsregler

- Én fase = én gren og én PR. Ikke merge eller push til `main` uten Brages ja.
- Oppdater «Fremdrift» og «Beslutningslogg» i PLANS.md; detaljer legges i den relevante delplanen.
- Kryss av bare når punktet er verifisert. Skille mellom skrevet, lokalt testet og verifisert på live.
- Verifiser desktop og mobil. For ruting: test klikk, direkte lenke og sideoppdatering,
  også fragmenter som `#prototype`. Test medier og demoer som brukes i casen.
- Nye beslutninger som strider mot PLANS.md avklares med Brage. Planen er for forbedring
  av eksisterende side; en ny visuell totalretning eller rammeverksmigrering er ikke godkjent.
- Andre prosjektrepoer og originalmateriale leses som kilder. Ikke endre dem som del av porteføljearbeidet.

## Innhold og tone

- Nettstedspresentasjonen skal være på **norsk**. Behold originale engelske rapporter,
  skjermbilder og sitater som tydelig merkede vedlegg. Se språkvalget i PLANS.md.
- Nye URL-er er norske. Flytt eksisterende URL-er bare sammen med fungerende nye ruter og testede 301-er.
- Brage er **produktdesigner med prototyping som styrke**. Kode, elektronikk og AI er verktøy.
  Brage er den som designer og bestemmer. Ikke posisjoner ham som utvikler eller elektronikkingeniør.
- Skill mål/brief, konsept, prototype, levert produkt og dokumentert resultat.
- GripSense: les prosjektets gjeldende kildegrunnlag og påstandsregler. Ikke påstå validert
  måling, treningseffekt eller skadeforebygging. Merk eldre revisjoner og demodata presist.
- Ikke finn på tall, team, sitater, roller eller resultater. Bruk kilde, avklar eller utelat.
- Kun e-post synlig på nettsiden, også i offentlig nedlastbar CV. Ikke publiser adresse,
  fødselsdato eller telefon. Separer en eventuell privat CV-versjon fra publiseringskopien.
- Krediter meddesignere og fotografer. Caddy-bildene fra Vilde Abrahamsen krediteres «Foto: Vilde Abrahamsen».

## Råmateriale og bilder

- Originaler ligger i `_innboks/`, som er ignorert av git og bare finnes lokalt i hovedmappen
  `~/Documents/GitHub/brage-steen-product-designer/_innboks/`.
- Rør aldri originalene. Kopier ut og prosesser til web; kilderegisteret viser øvrige lokale mapper.
- HEIC → JPG. Foto som JPG; PNG for skarpe tegninger/skjermbilder eller transparens.
- Maks 2400 px på lengste side, mål <500 kB per bilde. Rapportvedlegg behandles separat
  med tydelig lenke/filstørrelse. Avklar lesbar zoomløsning for lange gigamap før ny eksport.
- Fjern EXIF/GPS med `sharp` (metadata fjernes som standard). Ikke publiser private kontaktfelt i PDF/bilder.
- Filnavn i beskrivende kebab-case og meningsfull norsk alt-tekst.
- I Vite-siden brukes `public/projects/<slug>/` for prosjektbilder og `public/cv/` for publiseringsklar CV.
- Bildeskriptene fra `rebuild/astro` kan gjenbrukes separat etter kontroll; ikke hent inn hele ombyggingen.

## Kommandoer for eksisterende Vite-side

```bash
npm install
npm run dev
npm run build
npm run build && npx wrangler dev  # lokal test av Cloudflare-oppsettet
```

Ved rene plan-/dokumentendringer: kontroller innhold, lokale lenker og `git diff --check`.
Ingen produksjonsdeploy er nødvendig for planarbeidet.
