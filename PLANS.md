# PLANS — Ombygging av bragesteen.no

Levende plan for ombyggingen av porteføljen. Dette dokumentet er **kilden til sannhet** for
hva som skal gjøres, hva som er besluttet og hvor vi står. Oppdater «Fremdrift» og
«Beslutningslogg» fortløpende — en plan som ikke er oppdatert er feil.

Startet: 2026-10-13

---

## 1. Mål

En samlet, ferdig portefølje på bragesteen.no som:

- presenterer Brage som **produktdesigner med prototyping som styrke**,
- er rettet mot **jobbsøking og frilans i Norge**,
- har **én felles designmal** slik at alle prosjekter henger sammen,
- er enkel å utvide: nytt prosjekt = én innholdsfil + bilder,
- hostes uten Lovable (Lovable-abonnementet er avsluttet).

## 2. Posisjonering (besluttet)

- **Tittel:** Produktdesigner.
- **Kjerne:** Jeg designer produkter — og bygger dem for å finne ut om de virker.
  Undertekst-utkast: *Industridesign · Tjenestedesign · Prototyping.*
- **Kode og elektronikk er verktøy, ikke salgsargument.** Brage søker ikke «kode- eller
  kretskortjobber». Teknikk nevnes der den hørte hjemme i prosjektet, aldri som overskrift.
  Hvert prosjekt får en seksjon «Slik testet jeg det» som viser prototypen og hva den lærte oss.
- **AI-verktøy** (Claude Code, Codex) omtales som verktøy for å bygge raskere. Brage er den
  som designer og bestemmer.
- **Drømmerolle** å skrive mot: produktutvikling/prototyping der fysisk og digitalt møtes.
  Formuleringene spisses i fase 1.

## 3. Språk (besluttet)

- Hele nettstedet på **norsk**, inkludert bachelorprosjektet.
- Originalmateriale på engelsk (bacheloroppgave-PDF, plakater, gigamap) beholdes som det er
  og lenkes/vises som vedlegg: «Les bacheloroppgaven (engelsk, PDF)».
- URL-er på norsk: `/prosjekter/...`, `/om-meg`.

## 4. Prosjekter og rekkefølge (besluttet)

Rekkefølgen følger hva Brage vil vise frem, ikke årstall.

| # | Prosjekt | Kort | Status i dag | Kilde |
|---|---|---|---|---|
| 1 | GripSense | Stort | Nytt | `~/Documents/GripSense` + innboks |
| 2 | BS Climbing | Stort | Finnes, vinkles om (produkt først, teknikk sist) | eksisterende side + innboks |
| 3 | Kildesortering (Sorting Guide 2020 → Avfallsportalen 2026) | Rutenett | To sider slås sammen til én historie | eksisterende sider + innboks |
| 4 | Headset | Rutenett | Finnes, rett budskap (designet for sprøytestøping, 3D-print = prototyper) | eksisterende side |
| 5 | Caddy-camper | Rutenett | Nytt | innboks |
| 6 | Seaweed | Rutenett | Finnes | eksisterende side |

Layout på forsiden: 2 store kort + rutenett 2 × 2. Rekkefølgen styres av feltet `rekkefolge`
i innholdsfilene og kan endres uten kodeendring.

Ikke med (besluttet): Air PnP, Bryggr.

## 5. Teknisk retning (besluttet)

- **Rammeverk:** Astro (statisk HTML per side, innebygd bildeoptimalisering, content
  collections). React kun for interaktive øyer der det trengs. Tailwind for styling.
- **Hosting:** Cloudflare Workers med statiske filer (Cloudflares nye standard i stedet for
  Pages), koblet til GitHub via Workers Builds. Konfig i `wrangler.jsonc`. Push til `main` =
  produksjon, andre grener = forhåndsvisnings-URL.
- **DNS:** bragesteen.no ligger hos Domeneshop (ns*.hyp.net) og peker i dag på Lovable
  (185.158.133.1). Navnetjenerne flyttes til Cloudflare (gratis) — nødvendig for å bruke
  rotdomenet på Cloudflare. Sjekket 2026-10-13: ingen MX- eller TXT-poster, så ingen
  e-post å flytte.
- **Visuelt utgangspunkt:** dagens typografi (Instrument Serif + IBM Plex Sans) og varme
  off-white bakgrunn beholdes som start og spisses i fase 2.

## 6. Målstruktur etter ombyggingen

### Sider

| URL | Innhold |
|---|---|
| `/` | Intro + alle prosjekter (erstatter også `/work`) |
| `/prosjekter/<slug>` | Prosjektside fra felles mal |
| `/om-meg` | Hvem jeg er, erfaring/CV, verktøy, kontakt |
| `/cv/brage-steen-cv.pdf` | Nedlastbar CV |
| `/embeds/...` | Frittstående interaktive demoer (Avfallsportalen m.fl.) |

Kontaktinfo ligger i bunnteksten på alle sider og på `/om-meg`.

### Videresendinger (`_redirects` i statiske filer, 301)

| Gammel | Ny |
|---|---|
| `/work`, `/work/` | `/` |
| `/about`, `/about/` | `/om-meg` |
| `/contact`, `/contact/` | `/om-meg#kontakt` |
| `/projects/bsclimbing` | `/prosjekter/bs-climbing` |
| `/projects/headset` | `/prosjekter/headset` |
| `/projects/seaweed` | `/prosjekter/seaweed` |
| `/projects/sorting-guide` | `/prosjekter/kildesortering` |
| `/projects/avfallsportalen` | `/prosjekter/kildesortering` |

### Mappestruktur (Astro)

```
src/
  content/
    prosjekter/
      <slug>/
        index.mdx          # tekst + frontmatter (se modellen under)
        bilder/            # web-klare bilder (prosessert fra _innboks)
    om-meg.mdx
  components/              # byggeklossene
  layouts/                 # sidemal + prosjektmal
  pages/                   # ruter
  styles/                  # tokens + base
public/
  cv/brage-steen-cv.pdf
  embeds/<navn>/           # frittstående HTML-demoer
  og/                      # delingsbilder
  _redirects
_innboks/                  # råmateriale fra Brage — ikke i git (se _innboks/README.md)
```

### Innholdsmodell for et prosjekt (frontmatter)

```yaml
tittel: GripSense
slug: gripsense
ingress: Én setning som brukes på kortet og øverst på siden.
periode: "2025–2026"
status: ferdig | pagaende
rekkefolge: 1
fremhevet: true            # stort kort på forsiden
disipliner: [Industridesign, Prototyping]
rolle: Hva Brage gjorde
team: [Navn, Navn]         # tom hvis solo
varighet: "4 måneder"
verktoy: [Fusion 360, 3D-print]
aksentfarge: "#c4622d"
cover: ./bilder/cover.jpg
coverAlt: Beskrivelse av coverbildet
lenker:
  - { tekst: Besøk bsclimbing.no, url: https://bsclimbing.no }
```

### Fast oppbygging av en prosjektside

1. Toppseksjon — tittel, ingress, coverbilde (aksentfarge per prosjekt)
2. Faktaboks — periode, rolle, team, varighet, verktøy
3. Utfordringen
4. Prosess — innsikt, skisser, valg
5. **Slik testet jeg det** — prototyper og hva de viste
6. Resultat
7. Min rolle (når det var et team)
8. Hva jeg lærte
9. Neste prosjekt

Seksjoner uten innhold utelates — ikke fyll med tom tekst.

### Byggeklosser (fase 2)

Toppseksjon · Faktaboks · Tekstseksjon · Bilde (enkelt, fullbredde) · Bilderutenett ·
Galleri · Innsikt/sitat · Innebygd demo (iframe/video) · Prosjektkort · Neste prosjekt ·
Header/footer.

---

## 7. Faser

Én fase = én gren og én PR. Ingenting merges til `main` uten at Brage har sagt ja.

### Fase 0 — Ny hosting og nødfiks (på dagens kode)

Mål: live-siden virker og er uavhengig av Lovable, mens vi bygger nytt.

- [x] Prosjektkort bruker `<Link>` i stedet for `<a href>` (`src/components/ui/ProjectCard.tsx`)
- [x] Slett gamle statiske prosjektsider som overstyrer React-sidene:
      `public/projects/{headset,seaweed,sorting-guide}/index.html`,
      `public/projects/sorting-guide/{prototype,gigamap}.html`, `public/projects/site-nav.css`,
      `portfolio.html`
- [x] Flytt Avfallsportalen-appen til `public/embeds/avfallsportalen/` og oppdater iframe + cover-sti
- [x] Seaweed-cover: bytt WordPress-URL med lokalt bilde
- [x] Sorting Guide: gigamap (fra .ai, kontaktinfo maskert) + stor versjon; død Adobe XD-embed
      byttet med gjennomgangsvideo (20 MB, 720p) og tre skjermbilder
- [x] Flytt `public/projects/headset-pictures/` (110 MB kildebilder, ubrukt av siden) ut av
      `public/` til `_innboks/prosjekter/headset/kilde/`
- [x] Fjern `lovable-tagger` og `.lovable/`
- [x] Brage: Cloudflare-konto opprettet, repoet koblet til Workers Builds
- [x] `wrangler.jsonc` (assets fra `dist/`, SPA-fallback) — første bygg feilet uten den;
      verifisert lokalt med `wrangler dev`
- [ ] Grønt bygg i Cloudflare på PR #24
- [ ] Brage: legg bragesteen.no til i Cloudflare og bytt navnetjenere hos Domeneshop
- [x] Lagt til `ScrollToTop` (klientnavigasjon startet ellers midt på siden)
- [x] Verifisert lokalt på produksjonsbygg (`vite preview`): klikk, direkte lenke, 0 ødelagte bilder, mobil uten horisontal scroll
- [ ] Verifiser på live: alle prosjekter via klikk, direkte lenke og oppdatering — desktop og mobil

### Fase 1 — Hvem du er (innhold, ingen kode)

- [ ] Spisse tittel, forsidetekst og ingress for hvert prosjekt
- [ ] Ny «Om meg»-tekst (fyll ut `_innboks/cv/cv-info.md`)
- [ ] Bestemme hva CV-en skal inneholde, og om vi lager ny PDF eller bruker eksisterende

### Fase 2 — Astro-oppsett og designmal (gren `rebuild/astro`)

- [ ] Nytt Astro-prosjekt i repoet (erstatter Vite-appen i grenen)
- [ ] Tokens: farger, typografi, avstand, aksentfarger
- [ ] Byggeklossene i seksjon 6
- [ ] Prosjektmal + innholdsmodell (content collection med skjema)
- [ ] Skjult stilguide-side (`/_stilguide`) som viser alle byggeklosser
- [ ] Cloudflare forhåndsvisnings-URL for grenen

### Fase 3 — Flytte eksisterende prosjekter

- [ ] BS Climbing (vinkles om: produkt først)
- [ ] Kildesortering (Sorting Guide + Avfallsportalen samlet)
- [ ] Headset
- [ ] Seaweed
- [ ] Slett ubrukt: shadcn-komponenter, preview-systemet (`scripts/previews.mjs`,
      `.githooks/`, alle `previews/`-mapper), gamle `work/ about/ contact/`-oppføringer

### Fase 4 — Nytt innhold

- [ ] GripSense (følg GripSense-prosjektets egne regler for tillatt produkttekst — ikke
      påstå validert målenøyaktighet før det er dokumentert)
- [ ] Caddy-camper
- [ ] Om meg + CV-PDF + portrett

### Fase 5 — Lansering

- [ ] `_redirects` for alle gamle URL-er
- [ ] Unik `<title>`, beskrivelse og delingsbilde per side; absolutte `og:image`-URL-er
- [ ] Sjekk mobil, tastaturnavigasjon, alt-tekster, bildestørrelser
- [ ] Merge `rebuild/astro` → `main` (med Brages ja)
- [ ] Rydd gamle `claude/*`-grener på GitHub (7 stk., alle utdaterte)

---

## 8. Materiale Brage må levere

Alt legges i `_innboks/` (se `_innboks/README.md`). Ikke gi nytt navn, ikke komprimer —
originaler er best; prosesseringen gjøres i repoet.

| Hva | Hvor | Trengs i fase |
|---|---|---|
| Gigamap (høy oppløsning) fra bacheloren | `_innboks/prosjekter/kildesortering/` | 0 |
| Skjermbilder/video av Sorting Guide-prototypen (XD er død) | `_innboks/prosjekter/kildesortering/` | 0 |
| Bacheloroppgaven som PDF | `_innboks/prosjekter/kildesortering/` | 3 |
| CV-informasjon + evt. eksisterende CV | `_innboks/cv/` | 1 |
| Nye portrettbilder (valgfritt) | `_innboks/portrett/` | 4 |
| Bilder av fysiske GripSense-prototyper, testing | `_innboks/prosjekter/gripsense/` | 4 |
| Bilder av BS Climbing-blokker i bruk, måling, print | `_innboks/prosjekter/bs-climbing/` | 3 |
| Caddy-camper: før/under/etter, skisser, plantegning, el-skjema | `_innboks/prosjekter/caddy-camper/` | 4 |
| Stikkord/historie per prosjekt | `notater.md` i hver prosjektmappe | 1–4 |

---

## 9. Fremdrift

Logg med dato, nyeste nederst.

- 2026-10-13 — Gjennomgang av live-side og repo. Funn: prosjektkort laster gamle statiske
  sider med ødelagte bilder (Headset 18/18, Sorting Guide 9/9, Seaweed 9/9); Seaweed-cover
  fra WordPress ødelagt; `gigamap.png` mangler; Adobe XD-embed blank. Plan skrevet,
  dokumentasjon ryddet, `_innboks/` opprettet.
- 2026-10-13 — Fase 0 kodeendringer ferdig på gren `fase-0/hosting-og-nodfiks`. Gjenstår:
  Cloudflare Pages + DNS (Brage). Merk: gigamap-originalen hadde e-post/telefon til Brage og
  Regina nederst — maskert i nettversjonen. Video komprimert lokalt med Swift/AVFoundation
  (ffmpeg ikke installert).
- 2026-10-13 — Grenen pushet, PR #24 åpnet. Cloudflare opprettet en Worker (ikke Pages);
  bygget feilet uten konfig → lagt til `wrangler.jsonc` + `wrangler` som dev-avhengighet.
  DNS-flytting pågår (Brage).

## 10. Beslutningslogg

| Dato | Beslutning | Begrunnelse |
|---|---|---|
| 2026-10-13 | Bygge på nytt med samme innhold | Fem prosjekter med hver sin stil, duplikater og hardkodet innhold — raskere å strukturere riktig én gang |
| 2026-10-13 | Norsk språk overalt | Målgruppe: jobb og frilans i Norge; blandet språk ser uferdig ut |
| 2026-10-13 | Rekkefølge etter hva Brage vil vise, ikke år | Sterkeste prosjekter først |
| 2026-10-13 | Sorting Guide + Avfallsportalen = én historie | Samme tema, viser utvikling 2020 → 2026 |
| 2026-10-13 | GripSense og Caddy-camper med; Air PnP og Bryggr ikke | Styrker prototyping-profilen |
| 2026-10-13 | Posisjonering: produktdesigner, prototyping som styrke; kode/elektronikk er verktøy | Brage søker ikke kode-/kretskortjobber |
| 2026-10-13 | Bort fra Lovable → Astro + Cloudflare Pages | Lovable-abonnement avsluttet; Astro passer innholdsdrevet portefølje |
| 2026-10-13 | Cloudflare Workers (statiske filer) i stedet for Pages | Cloudflare satte opp Workers Builds; samme gratis hosting, konfig i `wrangler.jsonc` |
| 2026-10-13 | Råmateriale i `_innboks/`, ikke i git | Offentlig repo; råbilder er store og kan ha GPS/EXIF; CV kan inneholde personopplysninger |

## 11. Åpne spørsmål

- Endelig tittel og forsidetekst (fase 1).
- Skal CV-en lages på nytt (f.eks. generert fra `cv-info.md`) eller bruker vi en eksisterende?
- Plassering av Caddy-camper i rekkefølgen — vurderes når bildene er inne.
