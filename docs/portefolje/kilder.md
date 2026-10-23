# Kilderegister for porteføljeplanen

Gjennomgått 2026-10-22. Tilbake til [hovedplanen](../../PLANS.md).
Dette registeret inneholder kildehenvisninger og avgrensninger. Råfiler, private kontaktfelt,
kundedata og måledata er ikke kopiert inn i det offentlige repoet.

## Produksjon og kode

- Live portefølje: https://bragesteen.no
- Produksjonsgrunnlag kontrollert i samtalen: `main`, commit `03ce48742b6b6100b328ad88a668ae6f4068d6e1`.
- `src/content/projects/index.ts`: fem publiserte prosjektkort og nåværende formuleringer.
- `src/pages/projects/`: eksisterende React-caser; `SiteLayout.tsx` og `ProjectBar.tsx` eier felles navigasjon.
- `public/embeds/avfallsportalen/index.html`: demonstrator og hardkodet `kommuneData`.
- `wrangler.jsonc`: eksisterende Vite-produksjon bruker statiske filer med SPA-fallback.
- [Kontrollrapport](kontroll/2026-10-22.md): observerte nettleserfunn, skjermbilder og testbegrensninger.

## Bachelor / Kildesortering

**Komplett sluttrapport, riktig kilde:**
`~/Documents/Portolfio/til claude, sammensetning /sorting-guide-portfolio 2/TheSortingGuide_Report.pdf`

106 sider, engelsk, laget mai 2020, filstørrelse 19 366 066 byte. Tekst er hentet ut;
s. 35 og 95 er også rendret og visuelt kontrollert mot sitat-/tallfunnene.

| Side | Hva den støtter | Hva den ikke beviser |
|---|---|---|
| 26 | Fem beskrevne husholdninger i hjemmebesøk | Et representativt utvalg eller målbar samfunnseffekt |
| 35 | To workshopgrupper: 27, og 30 studenter + 3 professorer | Nettsidens «67+» uten videre kilde |
| 95 | Kort, navngitt IKEA-uttalelse fra 14. mai 2020 og partnerfeedback | Den ekstra setningen på nettsiden; lansert tjeneste eller målt gjenvinningseffekt |

`~/Documents/Skole backup /BACHELOR/LEVERING/missionIKEA_Steen_Brage_vonKoch_Regina.pdf`
er en 9-siders tidlig prosjektleveranse fra januar 2020, **ikke sluttrapporten**.
Andre kilder finnes under BACHELOR: workshop, service blueprint, konseptvalg og originalillustrasjoner.
Innboksen inneholder prototypevideo og 18 PDF-er/skjermeksporter i «Last Version»; disse må
ikke forveksles med den komplette rapporten.

## Seaweed / Ting av tang

`~/Documents/Skole backup /bap3010/til inspera/BAPD3100.TingavTANG.pdf`
(og en kopi i `~/Documents/Portolfio/BAPD3100.TingavTANG.pdf`).

Målrettet tekstgjennomgang: materialprøver, tørking, fokusgruppe, konsepter og refleksjon.
S. 31 beskriver fokusgruppe med fire kandidater. S. 48 omtaler potten som fremtidskonsept.
S. 55 drøfter manglende resultater og behovet for tidligere metodeevaluering.
S. 56 beskriver pressforsøk med tørre småbiter, ikke en standardisert materialtest.
Rapportens private kontaktopplysninger skal kontrolleres før eventuell offentlig PDF-versjon.

## GripSense

Lokal rot: `~/Documents/GripSense/`. Gjennomgått:
- `AGENTS.md` og `README.md`: prosjektstatus, tillatt tolkning og kildeautoritet.
- `docs/source-of-truth/PRODUCT_SCOPE.md`: brukere, konseptomfang og grense mellom kanallast og fingerkraft.
- `docs/source-of-truth/ROADMAP.md`: aktiv Rev E-oppstart og åpne produktvalg.
- `docs/source-of-truth/VALIDATION_PLAN.md`: dokumentert oppstart uten fingre 2026-10-20 og åpne valideringsporter.
- Relevante utdrag fra `METRICS_AND_PROTOCOLS.md` og `METRIC_REGISTRY.md`: grenser for påstander.
- `docs/brand/README.md`: tilgjengelige logoer/eksporter.

Materiale finnes under `hardware/mekanikk/`, `docs/brand/`, `output/playwright/` og
`output/xcode/`. Eksisterende skjermbilder er materiale å velge fra, ikke bevis på at dagens
produktflyt eller Rev E-integrasjon er testet i denne porteføljeoppgaven.

## BS Climbing

- `_innboks/prosjekter/bs-climbing/notater.md`: Brages egne stikkord om soloprosjekt,
  iterasjoner, tekstur/materialer og kundetilbakemeldinger.
- `~/Documents/Klatring/bs-climbing-2/README.md` og `docs/context.md`: produkt-/tjenesteflyt.
  Context-filen oppgir egen eldre verifikasjonsdato; den brukes som struktur, ikke som live driftsbevis.
- Bilder og produksjonsmateriale under `~/Documents/Klatring/`; allerede publiserte bilder under `public/projects/bsclimbing/`.
- Butikkforsiden ble åpnet via porteføljens lenke. Checkout, ordre og kundedata ble ikke undersøkt.

## Headset

- `~/Documents/Portolfio/Headsett/`, inkludert `tekniske/BrageSteen_Headphones.pdf` og andre tegninger.
- `_innboks/prosjekter/headset/kilde/`: 34 PNG og 10 JPG er funnet, uten å endre originalene.
- Eksisterende React-side og publiserte bilder/Sketchfab-visning er kontrollert.
- Astro-MDX-en er et utkast med SJEKK-kommentarer, ikke en uavhengig kilde.

## Caddy, CV og mer arbeid

- `~/Documents/Caddy the Baddie/`: 24 foto med Vilde Abrahamsens filnavn, egne foto og video.
  Tidligere godkjent bruk/kreditering videreføres. Bildeutvalg og prosjekthistorie er ikke ferdig.
- `_innboks/cv/CV_BrageSteen.pdf`: relevant erfaring/utdanning er lest. CV-en støtter at Looping
  og festivalen er relevante, men dagens datoer/tilgjengelighet må avklares. Ingen private kontaktfelt er gjengitt.
- `~/Documents/Markus Jobb/`: logo-/artboardfiler og mapper som må knyttes til riktig leveranse.
- Flere `notater.md` og `cv-info.md` er tomme spørsmålsmaler. De er ikke bevis på at prosjektmaterialet
  mangler andre steder, men de gir ingen nye faktasvar.

## Regler for videre kildebruk

Bruk siste dokumenterte status. Skill egne observasjoner, prosjektets mål og dokumenterte
resultater. Ikke hent kunde-/ordre-/helse-/måledata bare for å få et imponerende porteføljetall.
Dokumenter bilders opphav, prosjektår og bidragsytere. Publiseringskopier lages separat fra originalene.
