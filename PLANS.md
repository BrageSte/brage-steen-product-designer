# Portefølje klar for jobbsøking

Oppdatert 2026-10-23. Dette er gjeldende plan for bragesteen.no. Nettside- og kildekontrollen
ble utført 2026-10-22; planen ble ferdigstilt og kvalitetssikret 2026-10-23.
**Retning godkjent av Brage:** behold den eksisterende Vite/React-siden og forbedre den.
Dagens Astro-design skal ikke brukes. J1 er merget i PR #25 (`95744f581d7794262d85fa4ca017f0445cbd0ca5`)
og produksjonskontrollert med 20 beståtte nettleserkontrollgrupper. J2 er implementert på
`codex/portfolio-j2-jobbsoking`; lokal QA er gjennomført. Se [arbeidsloggen for J1](docs/portefolje/implementering/j1-2026-10-23.md).

## 1. Målet og hvem vi skriver for

En arbeidsgiver skal raskt forstå at Brage er **produktdesigner med prototyping som styrke**,
og kunne følge konkrete valg fra problem og innsikt til fysisk/digital prototype og læring.
Hovedretning: produktutvikling der fysisk og digitalt møtes, med industridesign og
tjenestedesign som dokumentert bredde. Kode, elektronikk og AI omtales som verktøy.

**Brages presisering 2026-10-23:** søker produktutvikling, produktdesign og industridesign,
men også fullstack-/AI-utvikling og implementering. Styrken er «fra idé til en prototype som
fungerer på kort tid». Tilgjengelig fortløpende. Dette utvider det tidligere rollevalget;
det digitale arbeidet skal synliggjøres relevant, samtidig som produktdesigner er hovedprofilen.

**UX-strategi**

- **Målgruppe:** designleder, produktutvikler eller rekrutterer i Norge, ofte på mobil og med kort tid.
- **Viktigste behov:** se relevans, Brages eget bidrag og bevis på designarbeid før lange bakgrunnstekster.
- **Valg:** tydelig profil; få sterke prosjekter først; konkret rolle og læring; synlig CV/kontakt.
- **Største risiko:** at teknologitekst og ubekreftede resultater overskygger designkompetansen.

## 2. Hva «klar» betyr

### Første jobbsøkingsklare versjon

Søknader trenger ikke vente på alle nye prosjekter. Første leveranse bruker eksisterende
materiale og forbedrer BS Climbing, bacheloren og Headset. Seaweed beholdes etter nødvendig
faktarydding; Avfallsportalen presenteres tydelig som en senere demonstrator.

- [ ] Forsiden sier produktdesigner og viser relevant arbeid før lange forklaringer.
- [ ] Minst tre sterke prosjekter har forståelig problem, egen rolle, designvalg, prototype og læring.
- [ ] Alle synlige prosjekter har korrekte sitater/tall og tydelig skille mellom resultat, konsept og ambisjon.
- [ ] Om meg og CV gir konsistente datoer, roller og utdanningsstatus. E-post og CV er lette å finne.
- [ ] Norske introduksjoner, navigasjon, prosjekttekster og tilgjengelighetstekster er gjennomgått.
- [ ] Ingen feil i prosjektlenker, medier, hovedflyter eller tastaturnavigasjon som er nødvendige for å vurdere arbeidet.
- [ ] Direkte lenker, seksjonslenker og oppdatering virker i produksjon på desktop og mobil.
- [ ] Forhåndsvisningen er visuelt kontrollert, Brage har godkjent merge, og produksjonen er kontrollert etterpå.

### Utvidet portefølje

GripSense som et tydelig pågående hovedprosjekt, Caddy-camper og en liten «Mer arbeid»-seksjon.
Disse skal styrke porteføljen, men ikke forsinke første søknadsrunde dersom materiale mangler.

## 3. Prosjektutvalg og rekkefølge

Dette viderefører prosjektutvalget fra tidligere plan. Arbeidsrekkefølgen i seksjon 6 er
annerledes enn den endelige rekkefølgen på forsiden: reparer det som allerede ligger ute først.

| Endelig plass | Prosjekt | Hvorfor det er med | Leveranse |
|---|---|---|---|
| 1 | [GripSense](docs/portefolje/prosjekter/gripsense.md) | Fysisk/digital produktutvikling, iterasjon og kritisk testing | Ny hovedcase, merket «Pågående». BS Climbing står først frem til denne er klar |
| 2 | [BS Climbing](docs/portefolje/prosjekter/bs-climbing.md) | Tilpasset fysisk produkt og sammenhengende tjeneste fra måling til produksjon | Omskrive eksisterende case, beholde gode bilder og uttrykk |
| 3 | [Kildesortering / bachelor](docs/portefolje/prosjekter/kildesortering.md) | Innsikt, samarbeid, systemforståelse og tjenestedesign | Norsk case med engelske originalvedlegg; tydelig hovedhistorie fra 2020 |
| – | [Avfallsportalen](docs/portefolje/prosjekter/avfallsportalen.md) | Senere utforskning av formidling og interaksjon | Egen demo, knyttet til bachelorcasen som viderearbeid fra 2026 |
| 4 | [Headset](docs/portefolje/prosjekter/headset.md) | Industridesign, mekanikk, skisser og fysiske prototyper | Norsk case med tydelig oppgavepremiss og fungerende medier |
| 5 | [Caddy-camper](docs/portefolje/prosjekter/caddy-camper.md) | Rom, praktisk problemløsning, bygging og bruk | Kort, visuelt sterk case når egen rolle og designvalg er dokumentert |
| 6 | [Seaweed / Ting av tang](docs/portefolje/prosjekter/seaweed.md) | Materialutforskning, eksperimenter og refleksjon | Kortere case med ærlige funn og dokumenterte begrensninger |

[Mer arbeid](docs/portefolje/mer-arbeid.md): Looping AS, Harkokt og Kaia Tel Han Kai som korte
oppføringer. Looping kan senere få en full case dersom det finnes materiale som kan vises.
Air PnP og Bryggr er fortsatt utelatt. Antall prosjekter er ikke et mål i seg selv.

Tilpass søknadslenken til rollen: GripSense/BS Climbing/Headset for fysisk produktutvikling;
bachelor/Looping/BS Climbing for tjenestedesign. Behold én konsistent hovedportefølje.

## 4. Språk: norsk presentasjon, engelske originaler

**Anbefaling, i tråd med tidligere språkvalg:** behold bachelorens navn «The Sorting Guide»,
men skriv introduksjon, prosjektfortelling, bildetekster og navigasjon på norsk.
Bachelorrapporten, originale skjermbilder, plakater og gigamap beholdes på engelsk.
En rapport skrevet på engelsk er ikke et krav om at hele prosjektsiden må være engelsk.

- Merk vedlegg tydelig: «Les bachelorrapporten (engelsk, PDF, 106 sider)» og oppgi faktisk filstørrelse.
- Behold direkte sitater på originalspråket. En norsk gjengivelse merkes som oversettelse;
  ikke utvid eller slå sammen sitater uten kilde.
- Bruk norsk på Headset og Seaweed, inkludert alt-tekster, galleriknapper og seksjonsmenyer.
- Originalbilder med engelsk tekst får norsk forklaring, ikke kunstig omtegnet innhold.
- Bachelorfunn og statistikk dateres til prosjektperioden. Historiske tall skal ikke fremstå som dagens status.
- Engelsk versjon vurderes først ved konkrete internasjonale søknader. Da brukes en hel,
  sammenhengende engelsk versjon eller et separat casevedlegg, ikke tilfeldig språkbytte.
- Nye adresser skal være norske. Eksisterende engelske URL-er bevares med 301 når norske
  ruter faktisk er bygget og testet. Ingen videresending til en side som ennå ikke finnes.

## 5. Felles presentasjonsstandard

Behold den gamle sidens visuelle utgangspunkt. Standardiser først navigasjon, fakta,
lesbarhet, bildebehandling og fortellingsstruktur. Prosjektbilder og særpreg kan variere.
Ingen ny total visuell retning eller rammeverksmigrering inngår.

Hver full case skal som hovedregel inneholde:

1. Tittel, kort norsk ingress, relevant bilde og status/år.
2. Brages rolle, team/samarbeidspartner og prosjektets rammer.
3. Problemet og hvem det gjaldt.
4. To–tre viktige designvalg med begrunnelse og konkrete bilder.
5. «Slik testet jeg det»: hva som faktisk ble gjort, hva som ble observert og hva som ble endret.
6. Resultat og begrensninger. Konsept, prototype og lansert produkt beskrives presist.
7. Læring og hva Brage ville gjort videre.
8. Relevant neste prosjekt og tydelig kontakt.

Seksjoner uten dokumentasjon utelates. Bruk «jeg» om eget arbeid og «vi» om teamarbeid.
Fotograf og meddesignere krediteres. Ikke fremstill en bestilling, interesse eller demonstrasjon
som bevis på produktets effekt.

## 6. Gjennomføring – én fase, én gren og én PR

Fremtidige kodegrener opprettes fra oppdatert `main`. Planen og historikken fra Astro-grenen
skal tas med som dokumentasjon, uten å ta med den forkastede implementasjonen.
Ingen merge til `main` uten Brages ja. Omfang under er anbefalt rekkefølge; ingen frister er oppfunnet.

### Fase J1 – rett troverdighets- og funksjonsfeil

- [x] Bachelor: «67+» korrigert mot rapporten, sitatet forkortet og forventet effekt avgrenset.
- [x] Headset: produksjonsmål skilt fra faktisk produksjon; udokumentert draft-vinkel utelatt.
- [x] Seaweed: miljøpåstander avgrenset og verkstedforsøk satt i riktig kontekst.
- [x] Avfallsportalen: prototypedata merket, usikre rangeringer og feil regneeksempel fjernet.
- [x] Fragmentlenker og oppdatering lokalt kontrollert (`#model`, `#prototype`, `#reflection`).
- [x] Mobilmeny lokalt kontrollert for Tab, Escape, fokusretur, lenkevalg og historikknavigasjon.
- [x] Hele grafetiketter og Seaweeds mobilintro visuelt kontrollert.

**Ferdig:** samme scenarier som i [kontrollrapporten](docs/portefolje/kontroll/2026-10-22.md)
ble kontrollert på nytt, og påstander/sitater er sporbare. J1 ble merget i PR #25
(`95744f581d7794262d85fa4ca017f0445cbd0ca5`); 20 nettleserkontrollgrupper bestod i produksjon.

### Fase J2 – gjør eksisterende portefølje jobbsøkingsklar

Status: implementert og kontrollert lokalt på `codex/portfolio-j2-jobbsoking`. Avkrysningene
under gjelder lokal QA, bortsett fra HTTP/www som er kontrollert i produksjon.
Alle 29 kontrollgrupper består også i Cloudflare-forhåndsvisningen for kodecommit `0de429b`.
Forhåndsvisning og produksjon føres i [J2-loggen](docs/portefolje/implementering/j2-2026-10-23.md).

- [x] Spiss forside og BS Climbing mot produktdesign og prototyping.
- [x] Ferdigstill norsk bachelor- og Headset-case med personlig rolle og dokumentert læring.
- [x] Gjør Seaweed kortere og tydelig; knytt Avfallsportalen til bachelorens historie.
- [x] Ferdigstill [Om meg og CV](docs/portefolje/om-meg-og-cv.md), med en faktisk PDF-lenke.
- [x] Komprimer tunge foto/renders og gi bilder dimensjoner; behold skarpe tegninger og fullstørrelsesvedlegg.
- [x] Oppdater sidetitler, beskrivelser, absolutte delingsbilder og canonical-adresser.
- [x] Bygg og test norske ruter og nødvendige 301-er samlet. Behold fungerende gamle innganger.
- [x] Sett HTTP og `www` til den kanoniske HTTPS-adressen med sti/query bevart.
- [ ] Gjennomfør lanseringskontrollen i seksjon 8 og få Brages godkjenning av innhold/merge.

**Ferdig når:** «Første jobbsøkingsklare versjon» er kontrollert på live. Søknader kan bruke
siden mens J3/J4 fortsetter.

### Fase J3 – legg til GripSense

- [ ] Velg fysisk prototypefoto, dokumenterte iterasjoner og relevante appbilder.
- [ ] Skriv en avgrenset pågående case etter [GripSense-planen](docs/portefolje/prosjekter/gripsense.md).
- [ ] Skill nåværende maskinvare, eldre appdemo og validering som gjenstår.
- [ ] Kontroller alle måle-/treningspåstander mot prosjektets gjeldende kilder.
- [ ] Brage godkjenner egen rolle, fortellingen og det som kan vises offentlig.

**Ferdig når:** casen viser designkompetanse uten å kreve at produktet er ferdig validert.
Flytt den til første plass når teksten og dokumentasjonen er sterke nok.

### Fase J4 – bredde og vedlikehold

- [ ] Caddy-camper med krav, to–tre designvalg, brukserfaring og fotografkreditering.
- [ ] Korte oppføringer for Looping, Harkokt og festivalen der materiale/visningsrett er avklart.
- [ ] Vurder om Looping bør utvides for tjenestedesignsøknader.
- [ ] Rydd ubrukte filer og gamle preview-systemer først etter kontroll av referanser.
- [ ] Vurder eventuell full engelsk presentasjon ved faktisk behov.

## 7. Materiale og avklaringer

[Kilderegisteret](docs/portefolje/kilder.md) viser hva som allerede er funnet. Det er ikke
nødvendig å samle alt på nytt. Første gjennomgang fant komplett bachelorrapport, Seaweed-rapport,
CV, Headset-materiale, GripSense-dokumentasjon og 24 krediterbare Caddy-foto.

Det viktigste Brage må avklare under innholdsarbeidet:

- Bekreftet 2026-10-23: bachelorarbeidet ble gjort sammen med Regina gjennom hele prosjektet;
  i Seaweed hadde Brage særlig ansvar for å utvikle testmetodene.
- BS Climbing: Brage bekrefter omtrent 40 printede prototyper med variasjoner i tekstur,
  proporsjoner, toleranser og avrundinger. Headset: vinkler, toleranser og proporsjoner.
  Konkrete før/etter-bilder og kundetilbakemeldinger kan fortsatt styrke casene.
- GripSense: velg to–tre konkrete endringer som kom fra prototyping/tilbakemeldinger.
- GripSense: hvilke fysiske bilder viser dagens stadium, og hvilke viser eldre revisjoner?
- Caddy: hvilke krav styrte løsningen, hva bygget du selv og hva lærte du etter bruk?
- CV: `src/content/profil.json` er oppdatert med tilgjengelighet fortløpende; BS Climbing / Steen
  Consulting (2025–nå) innen produktutvikling, design, produksjon og salg; nettbutikk med
  web-konfigurator; og øvrig arbeid, utdanning og ferdigheter. Brage har godkjent formuleringen
  «Industriell design ved NTNU, med utveksling i Creative Sustainability ved Aalto.
  Mastergraden ble ikke fullført.» Perioden august 2021–mai 2022 kommer fra den nye CV-kilden.
- Mer arbeid: hvilke kundeleveranser, bilder og resultater kan vises offentlig?

Uavklart informasjon skal ikke fylles med antakelser. Lag tekstutkast av dokumentert materiale
før Brage blir bedt om presise avklaringer. Fullstendige bakgrunnsintervjuer er ikke en forutsetning.

## 8. Lanseringskontroll

- [ ] Test forside, alle synlige prosjekter, Om meg, CV og kontakt ved klikk, direkte URL og refresh.
- [ ] Test også fragmenter, tilbake/frem og gamle URL-er med/uten avsluttende skråstrek.
- [ ] Kontroller desktop og mobil (minst 390 og 1440 px), bildeutsnitt, lesbarhet og horisontal scroll.
- [ ] Test alle gallerier, video start/pause/søk, gigamap, 3D-innlasting og tydelige reservebilder/lenker.
- [ ] Avfallsportalen: åtte steg begge veier, ti spørsmål, riktig/feil svar, forrige, resultat, omstart,
  kommunevalg, lik kommune, grafdetaljer og tema. Kilder/data kontrolleres separat fra funksjonen.
- [ ] Tastatur: synlig fokus, ingen skjulte tab-stopp, fungerende meny, gallerier og knapper.
- [ ] Redusert bevegelse, 200 % zoom, alt-tekster, én meningsfull H1 og lesbare kontraster.
- [ ] Bilder er web-klare og uten EXIF/GPS. Offentlige PDF-er og skjermbilder er gjennomgått for personopplysninger.
- [ ] CV returnerer en PDF, ikke SPA-fallback med HTTP 200. Ukjent URL gir forståelig feilside;
  håndter soft-404 korrekt når dette forbedres teknisk.
- [ ] Sidetittel/beskrivelse/delingsbilde vurderes også i levert HTML for deling og søk, ikke bare etter JavaScript.
- [ ] Bygg er grønt, korrekt gren deployet, produksjonen kontrollert og tilbakeføring til forrige Worker-versjon dokumentert.

Dette er en målrettet kvalitetssjekk, ikke en påstand om full tilgjengelighetssertifisering,
full nettbutikk-QA eller vitenskapelig validering av prosjektresultater.

## 9. Fremdrift og beslutninger

### Verifisert

- [x] 2026-10-22: Cloudflare-sone, begge domener, TLS og automatiske produksjons-/previewbygg kontrollert.
- [x] 2026-10-22: Fem prosjektruter virker ved klikk, direkte lenke og refresh på desktop/mobil.
- [x] 2026-10-22: Utvidet funksjons- og kildekontroll utført; funn og begrensninger i kontrollrapporten.
- [x] 2026-10-22: Samlet plan, ni delplaner og kilderegister skrevet. Planen er ikke utført.
- [x] 2026-10-23: Planverket ferdigstilt på `codex/portfolio-jobbsoking-plan`, basert på `main`.
  Lokale lenker, dokumentstruktur og samsvar mellom funn og tiltak er kontrollert.
- [x] 2026-10-23: J1 implementert med tre Luna-subagenter. Bygg, fem tester, TypeScript,
  lint uten feil og 20 nettleserkontrollgrupper består lokalt. Arbeidslogg og skjermbilder lagret.
- [x] 2026-10-23: J1 merget i PR #25 (`95744f581d7794262d85fa4ca017f0445cbd0ca5`);
  20 nettleserkontrollgrupper bestod i produksjon.
- [x] 2026-10-23: J2 implementert og lokalt kontrollert på `codex/portfolio-j2-jobbsoking`: 22 hovedgrupper
  og sju mediegrupper på 1440/390 px. Bygg, fem enhetstester, TypeScript og lint uten feil består.
- [x] 2026-10-23: HTTP/www gir 301 til kanonisk HTTPS med sti/query bevart i produksjon.
- [x] 2026-10-23: J2 pushet i PR #26; Cloudflare-build er grønt, alle 29 nettleser-/mediegrupper
  består i forhåndsvisningen, og full bachelorrapport er lastet ned med identisk SHA-256.
- [ ] J2: Brages vurdering av forhåndsvisningen og godkjenning av merge, deretter produksjonskontroll.

### Beslutningslogg

| Dato | Beslutning | Grunnlag |
|---|---|---|
| 2026-10-22 | Behold eksisterende Vite/React-portefølje og forbedre den | Brage: «enig» etter anbefalingen om å beholde den gamle |
| 2026-10-22 | Dagens Astro-utkast brukes ikke | Brage avviste uttrykket; rammeverksmigrering inngår ikke i jobbsøkingsplanen |
| 2026-10-22 | Produktdesigner med prototyping som styrke videreføres | Tidligere godkjent posisjonering |
| 2026-10-22 | Planen skiller første søknadsversjon fra senere utvidelse | Anbefalt gjennomføringsrekkefølge; nyinnhold skal ikke stanse søknader |
| 2026-10-22 | Norsk prosjektpresentasjon med engelske originalvedlegg anbefales | Viderefører språkvalget fra 2026-10-13; Brage tok bachelorens språk opp på nytt |
| 2026-10-23 | Også målrette fullstack-/AI-utvikling og implementering | Brages eksplisitte presisering av roller; hovedstyrken er rask vei fra idé til fungerende prototype |
| 2026-10-23 | Bachelor var felles arbeid; Seaweed-testmetoder var Brages hovedansvar; Headset var solo, NTNU 2021, fire måneder | Bekreftet direkte av Brage, inkludert emnet Design for Industrialization |
| 2026-10-23 | CV-profilen oppdatert med BS Climbing / Steen Consulting fra 2025–nå, nåværende arbeid, tidligere erfaring, utdanning og ferdigheter; offentlig NTNU/Aalto-formulering godkjent | Kilde: `src/content/profil.json`; Brage godkjente ordlyden direkte, datoene august 2021–mai 2022 kommer fra ny CV |
| 2026-10-23 | J1 er merget og produksjonskontrollert; J2 kontrolleres på egen gren | J1 PR #25 (`95744f581d7794262d85fa4ca017f0445cbd0ca5`), 20 nettleserkontrollgrupper bestod i produksjon |
| 2026-10-23 | Behold full rapport, gigamap og video som offentlige bachelorvedlegg | Brages eksplisitte godkjenning etter gjennomgang av underskrifter og hjemmebesøk i rapporten |
| 2026-10-23 | Vis rundt 40 BS Climbing-prototyper som oppgitt omfang; beskriv utforskning av tekstur/avrundinger og Headset-vinkler/toleranser/proporsjoner | Brages direkte beskrivelse; ingen spesifikke før/etter-resultater er funnet på |

Tidligere beslutninger og gjennomført hosting-/Astro-arbeid er bevart i
[den historiske ombyggingsplanen](docs/portefolje/arkiv/ombyggingsplan-2026-10-13.md).
De gamle Astro-fasene er ikke aktive arbeidsoppgaver.
