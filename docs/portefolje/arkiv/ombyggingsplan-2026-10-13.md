> HISTORIKK. Erstattet av [gjeldende plan](../../../PLANS.md) 2026-10-22. Ikke bruk gamle Astro-faser som arbeidsordre.

# PLANS — Ombygging av bragesteen.no

Levende plan for ombyggingen av porteføljen. Dette dokumentet er **kilden til sannhet** for
hva som skal gjøres, hva som er besluttet og hvor vi står. Oppdater «Fremdrift» og
«Beslutningslogg» fortløpende — en plan som ikke er oppdatert er feil.

Startet: 2026-10-13

**Status 2026-10-22:** Den eksisterende Vite/React-porteføljen fungerer på Cloudflare og
ligger fortsatt i produksjon. Brage har avvist det visuelle uttrykket i dagens Astro-utkast;
det skal ikke publiseres. Anbefalt neste steg er målrettede forbedringer av den eksisterende
siden for jobbsøking. Eventuell videre Astro-ombygging må avklares på nytt.

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

### To nivåer: utvalgte prosjekter + «Mer arbeid» (besluttet 2026-10-13)

Brage har mer å vise enn seks prosjektsider rommer. Derfor:

1. **Utvalgte prosjekter** — de seks over, med full prosjektside fra malen.
2. **Mer arbeid** — korte oppføringer under prosjektene på forsiden: bilde, 2–3 setninger,
   rolle, år og evt. lenke. Ingen egen side (kan få det senere). Kandidater:
   - Harkokt — nettside, logo m.m. for kokk Markus Dybwad (`~/Documents/Markus Jobb`)
   - Kaia Tel Han Kai — «samskapingsfestival» med 300 deltakere, medgründer og ko-festivalsjef (2020–2022)
   - Looping AS — frilans tjenestedesign: kontrollsystem for produktflåten til Algeco/Modulaire (2021)
   - Flere etter hvert (samme innholdsmodell med `niva: kort`)
3. **Om meg** — erfaring som tidslinje (murer, Gneis, TT Meat, lærerassistent osv.) med kort
   kobling til hva hver erfaring ga som designer.

Innholdsmodellen får feltet `niva: case | kort`.

## 5. Teknisk retning (besluttet)

- **Rammeverk:** Produksjon kjører Vite + React + Tailwind. Astro var valgt til ombyggingen,
  men dagens utkast er ikke godkjent for publisering (2026-10-22). Teknisk rammeverk alene
  avgjør ikke det visuelle uttrykket; videre ombygging avklares før den gjenopptas.
- **Hosting:** Cloudflare Workers med statiske filer (Cloudflares nye standard i stedet for
  Pages), koblet til GitHub via Workers Builds. Konfig i `wrangler.jsonc`. Push til `main` =
  produksjon, andre grener = forhåndsvisnings-URL.
- **DNS:** Domenet er registrert hos Domeneshop, men sonen er aktiv hos Cloudflare med
  aragorn/elsa.ns.cloudflare.com. `bragesteen.no` og `www.bragesteen.no` er begge aktive
  Custom Domains på produksjonsworkeren, med aktive TLS-sertifikater. Kun to Worker-styrte
  DNS-poster finnes; Lovable-A-posten er borte. Verifisert 2026-10-22 via API, DNS og HTTPS.
- **Tidligere visuelt språk (fase 2, avvist av Brage 2026-10-22):** arbeidstegningen. Kjølig kalkerpapir (#eef0ed), grafitt (#1c1f22),
  kulepenn-blå (#2340c8) til markering. Schibsted Grotesk som eneste skriftfamilie (selvhostet).
  Kjennetegn: *målestreken* (dimensjonslinje) som alltid bærer ekte informasjon (periode/mål), og
  faktaboks som *tittelfelt* fra en arbeidstegning. Bevisst unngått: krem + serif + terrakotta,
  ALL CAPS-etiketter, kort-skygger. Se `/stilguide`.

## 6. Målstruktur etter ombyggingen

### Sider

| URL | Innhold |
|---|---|
| `/` | Intro + utvalgte prosjekter + «Mer arbeid» (erstatter også `/work`) |
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
niva: case               # case = full side, kort = oppføring i «Mer arbeid»
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
- [x] Grønt bygg i Cloudflare på PR #24 (forhåndsvisning verifisert: alle prosjekter via direkte lenke, 0 ødelagte bilder)
- [x] Brage: bragesteen.no lagt til i Cloudflare, navnetjenere byttet hos Domeneshop
      (aragorn/elsa.ns.cloudflare.com). Venter på at Norid tar inn endringen
- [x] Gammel Lovable-A-post satt til «DNS only» så siden virker som før når sonen aktiveres
- [x] Merge PR #24 → `main` (med Brages ja) → produksjonsbygg grønt, verifisert på
      https://brage-steen-product-designer.brage-steen.workers.dev
- [x] Koble `bragesteen.no` + `www` som Custom Domain på Workeren (erstatter Lovable-A-posten).
      Verifisert 2026-10-22: begge aktive, DNS peker på Workeren, TLS aktivt
- [x] Lagt til `ScrollToTop` (klientnavigasjon startet ellers midt på siden)
- [x] Verifisert lokalt på produksjonsbygg (`vite preview`): klikk, direkte lenke, 0 ødelagte bilder, mobil uten horisontal scroll
- [x] Verifiser på live: alle fem prosjekter via klikk, direkte lenke og oppdatering — desktop
      (1440 px) og mobil (390 px), 2026-10-22. Ingen ødelagte bilder i hovedsidene,
      JavaScript-feil eller horisontal sidescroll i kontrollen

### Fase 1 — Hvem du er (innhold, ingen kode)

- [ ] Spisse tittel, forsidetekst og ingress for hvert prosjekt
- [ ] Ny «Om meg»-tekst (fyll ut `_innboks/cv/cv-info.md`)
- [ ] Bestemme hva CV-en skal inneholde, og om vi lager ny PDF eller bruker eksisterende

### Fase 2 — Astro-oppsett og designmal (gren `rebuild/astro`, ikke godkjent for lansering)

Brage avviste det visuelle uttrykket 2026-10-22. Punktene under dokumenterer tidligere
utført arbeid; de er ikke en godkjenning av designet eller en instruks om å publisere det.

- [x] Nytt Astro-prosjekt i repoet (Astro 7, MDX, Tailwind 4; Vite-appen og preview-systemet fjernet)
- [x] Tokens: farger, typografi, avstand, aksentfarger (`src/styles/global.css`)
- [x] Byggeklossene: Målestrek, Tittelfelt, Bilde, Bilderutenett, Innsikt, Prototyper, Demo, ProsjektKort, MerArbeid, NesteProsjekt, topp-/bunntekst
- [x] Prosjektmal + innholdsmodell (`src/content.config.ts`, `src/pages/prosjekter/[slug].astro`); Headset som pilot (utkast)
- [x] Skjult stilguide-side (`/stilguide`, noindex) som viser alle byggeklosser
- [x] Cloudflare forhåndsvisnings-URL for grenen: https://rebuild-astro-brage-steen-product-designer.brage-steen.workers.dev
      (grønt bygg og hovedside verifisert 2026-10-22)
- [x] Om meg-utkast fra CV, 404-side, `_redirects` for gamle URL-er, bildeskript (`scripts/prosesser-bilder.mjs`, `scripts/kontaktark.mjs`)

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
- [ ] Om meg + CV-PDF (uten adresse/fødselsdato) + portrett
- [ ] «Mer arbeid»: Harkokt, Kaia Tel Han Kai, Looping AS

### Fase 5 — Lansering

- [ ] `_redirects` for alle gamle URL-er
- [ ] Unik `<title>`, beskrivelse og delingsbilde per side; absolutte `og:image`-URL-er
- [ ] Sjekk mobil, tastaturnavigasjon, alt-tekster, bildestørrelser
- [ ] Avklar lanseringsløp med Brage. Dagens `rebuild/astro` skal ikke merges eller publiseres
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

### Lokale kildemapper per prosjekt

Hentes fra ved behov; **les, ikke endre**. Finnes kun på Brages Mac. Bilder prosesseres etter
reglene i AGENTS.md før de havner i repoet.

| Prosjekt | Kilde | Hva som finnes |
|---|---|---|
| GripSense | `~/Documents/GripSense` (eget repo) | README, `docs/` (beslutningslogg, pitch, brand), PCB-renders (`hardware/arkiv/PCB/fab/`), app-skjermbilder (`output/playwright/`, `output/xcode/`), logo (`docs/brand/`). Eldre: `~/Documents/Sensegrip :gammep`, `~/Documents/Krimblokk_4 fingre v*` |
| BS Climbing | `~/Documents/Klatring/bs-climbing-2` (nettsiderepo, eget designsystem) og `~/BS Climbing/app` (samme GitHub-repo) | Produktbilder (`Klatring/bilder/produkter/`), produksjonsfiler/STL/tekstur (`Klatring/produksjon/`), forskning på kraft/sensorer (`Klatring/forskning/`), butikkplakat/målestasjon (`Klatring/design/butikk/`), print-kø (`~/BS Climbing/BS_PrintQueue`) |
| Kildesortering | `~/Documents/Skole backup /BACHELOR` | IKEA-materiale, personas, service blueprint, konseptvalg, ikoner, PowerBI, prosjekttidslinje. Gigamap og prototype-skjermer også i `_innboks/` |
| Avfallsportalen | `public/embeds/avfallsportalen/` | Selve appen (statisk HTML) |
| Headset | `~/Documents/Portolfio/Headsett` + `_innboks/prosjekter/headset/kilde/` | Renders (`jadda.*`), skisser (`Untitled_Artwork*`), prototyping, tekniske tegninger |
| Seaweed | `~/Documents/Skole backup /bap3010` + `~/Documents/Portolfio/BAPD3100.TingavTANG.pdf` | Prosjektrapport, refleksjonsnotat, bilder, illustrasjoner |
| Caddy-camper | `~/Documents/Caddy the Baddie` | 24 foto av fotograf Vilde Abrahamsen (bruk avklart av Brage; krediter «Foto: Vilde Abrahamsen»), egne bilder, video (`IMG_3989.MOV`) |
| Harkokt (kort) | `~/Documents/Markus Jobb` | Logo-/artboard-filer (PNG/SVG), Stormkjøkkenet, MT Hurricane |
| Om meg / CV | `_innboks/cv/CV_BrageSteen.pdf` | Erfaring, utdanning, ferdigheter. På nettsiden: kun e-post. Nedlastbar CV-PDF kan ha telefon, men ikke adresse eller fødselsdato |

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
- 2026-10-13 — Cloudflare-oppsett gjennomgått i dashbordet. Bygg feilet pga. utdatert
  `bun.lock` (Lovable-rest) → fjernet. Forhåndsvisning krevde `"previews": {}` i
  `wrangler.jsonc` → lagt til. Preview-URL-er slått på. Bygget grønt; forhåndsvisning:
  https://fase-0-hosting-og-nodfiks-brage-steen-product-designer.brage-steen.workers.dev
  Domeneshop: navnetjenere byttet, ingen DS-poster i ny konfig (gamle DNSSEC-nøkler hos
  Norid forsvinner med endringen). Norid viste fortsatt hyp.net kl. 10.00.
- 2026-10-13 — PR #24 merget, produksjon bygget og verifisert. Custom Domain kan ikke
  legges til før Lovable-A-posten (185.158.133.1) slettes i Cloudflare-DNS; slettingen må
  Brage gjøre/godkjenne selv. Norid viste fortsatt hyp.net etter merge.
- 2026-10-13 — Fase 2 på `rebuild/astro`: Astro-oppsett, designtokens, alle byggeklosser,
  prosjektmal, stilguide, Om meg-utkast (fra CV) og Headset som pilotprosjekt (utkast, med
  `SJEKK`-kommentarer i MDX for usikre fakta). Verifisert lokalt med `wrangler dev`: alle sider,
  301 fra gamle URL-er, 404-side, mobil uten horisontal scroll.
- 2026-10-22 — Cloudflare gjennomgått med lesetilgang: sonen er aktiv, begge Custom Domains
  er koblet til `brage-steen-product-designer`, TLS-sertifikatene er aktive og gamle
  Lovable-DNS-poster er borte. Workers Builds bygger `main` automatisk med `npm run build`
  og publiserer med `npx wrangler deploy`. Siste produksjonsbygg er grønt på `03ce487`.
  Astro-grenen har også grønt forhåndsvisningsbygg på `992e04a`, men bare Headset som
  prosjektutkast. Lokal Astro-build fullførte; dette er ikke lanseringsgodkjenning.
- 2026-10-22 — Produksjon testet i nettleser på 1440 og 390 px: BS Climbing, Sorting Guide,
  Headset, Seaweed og Avfallsportalen åpner via prosjektkort, direkte lenke og oppdatering.
  Ingen ødelagte bilder i hovedsidene, JavaScript-feil eller horisontal sidescroll funnet.
  `/work/`, `/about/` og `/contact/` åpner. Mobilmenyen åpner, navigerer og lukkes etter valg;
  Avfallsportalens innebygde demo laster og går fra steg 1 til steg 2 uten horisontal
  sidescroll. Eksterne demoers fulle funksjon er ikke validert.
- 2026-10-22 — Brage avviste dagens Astro-design. Eksisterende produksjon beholdes mens
  videre retning avklares. Prioritert anbefaling for jobbsøking: vinkle BS Climbing mot
  produktdesign/prototyping fremfor Fullstack/AI, oppdatere Om meg og legge til en godkjent
  CV uten adresse/fødselsdato. Teknisk oppfølging: HTTP svarer 200 (`always_use_https` er av),
  og `www` serverer samme side uten videresending; anbefalt felles adresse er
  `https://bragesteen.no` med bevart sti og query. Cloudflare og produksjonskode er ikke endret.

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
| 2026-10-13 | To nivåer: utvalgte prosjekter + «Mer arbeid» | Mye å vise (festival, frilans tjenestedesign, Harkokt) uten å blåse opp antall prosjektsider |
| 2026-10-13 | Kun e-post synlig på nettsiden; telefon kun i nedlastbar CV | Brages valg; adresse og fødselsdato publiseres ikke |
| 2026-10-13 | Master-formulering: valgte andre muligheter; da han skulle fullføre, var det toårige løpet avsluttet | Brages egen formulering |
| 2026-10-13 | Caddy-bilder fra Vilde Abrahamsen kan brukes, krediteres | Brage har tillatelse |
| 2026-10-13 | Visuelt språk: arbeidstegningen (målestrek, tittelfelt), Schibsted Grotesk, kulepenn-blå | Spesifikt for en produktdesigner som tegner og bygger; unngår generisk portefølje-estetikk |
| 2026-10-13 | Råmateriale i `_innboks/`, ikke i git | Offentlig repo; råbilder er store og kan ha GPS/EXIF; CV kan inneholde personopplysninger |
| 2026-10-22 | Dagens Astro-utkast skal ikke publiseres; eksisterende produksjon beholdes | Brage avviste det visuelle uttrykket. Videre ombygging og rammeverksvalg avklares på nytt |

## 11. Åpne spørsmål

- Endelig tittel og forsidetekst (fase 1).
- Skal CV-en lages på nytt (f.eks. generert fra `cv-info.md`) eller bruker vi en eksisterende?
- Plassering av Caddy-camper i rekkefølgen — vurderes når bildene er inne.
- Harkokt: riktig domene/lenke (harkokt.no svarte ikke 2026-10-13), og hva Brage laget utover nettside og logo.
- Festival og Looping: finnes det bilder?
