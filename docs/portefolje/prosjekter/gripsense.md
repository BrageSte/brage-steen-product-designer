# GripSense – pågående hovedcase

Tilbake til [hovedplanen](../../../PLANS.md). Prioritet: J3; ønsket første prosjekt når casen er klar.

## Hva casen skal vise

Hvordan Brage utvikler et fysisk og digitalt produkt gjennom prototyper, observasjon og
kritiske valg. Vis hånd, kontaktflate, brukssituasjon og forståelig tilbakemelding i appen.
PCB og kode kan forklare et designvalg, men skal ikke dominere inngangen.

Arbeidsutkast til ingress: «Et pågående prosjekt som utforsker hvordan fysisk måleutstyr
og et digitalt grensesnitt kan gjøre last under klatrerelaterte grep lettere å undersøke.»
Dette er et tekstutkast, ikke en godkjent produktpåstand.

## Dokumentert nå

Gjeldende prosjektgrunnlag er lest på nytt 2026-10-24. Roadmap fra 23. oktober og
AGENTS.md beskriver første Rev E-kort med fire celler, Rev E-firmware og USB-overføring.
Kalibrering, mekanisk krysstale og fysisk målevalidering står fortsatt åpne. BLE/iPhone
og batteridrift står i neste utprøving. Eldre README/valideringstekst om oppstart uten fingre
er ikke brukt som nyeste status. Appbilder viser grensesnitt, ikke bekreftet måleintegrasjon.
`PRODUCT_SCOPE.md` og `ROADMAP.md` sier fortsatt at treningsverktøy kontra måleinstrument og
første målgruppe undersøkes.

J3-utkastet finnes på `/prosjekter/gripsense` på egen gren. Det er utelatt fra forsideutvalget
og sitemap, og har noindex mens fysisk dokumentasjon og personlig rolle avklares.
Dette er ikke adgangskontroll: ruten og repoet er offentlige i en publisert preview.

## Plan

- [ ] Åpne med et godt bilde av fysisk prototype i sammenheng, med revisjon/dato i bildetekst.
- [x] Beskriv behovet som undersøkes og hvem som er aktuelle brukere; skill målgruppehypotese fra dokumentert bruk.
- [ ] Vis to–tre iterasjoner: problem/observasjon → designendring → hva neste prototype lærte deg.
- [x] Velg én digital arbeidsflyt, for eksempel koble til → se last → lagre/forstå resultat.
- [x] Merk simulering, gammel maskinvare og appdemo eksplisitt. Bruk korte opptak/skjermbilder
  som arbeidsgiveren kan forstå uten en fysisk enhet eller Bluetooth-tilgang.
- [x] Avslutt med «Dette fungerer nå» og «Dette undersøker jeg videre», datert.
- [ ] Forklar egen rolle og eventuelle bidrag fra andre. AI nevnes som et verktøy i arbeidsprosessen.

## Påstandsgrenser

Ikke påstå validert fingerstyrke, nøyaktig fingerfordeling, skadeforebygging, klinisk nytte
eller treningseffekt. Kanallast er ikke automatisk individuell fingerkraft. Interesse fra
klatrere/fysioterapeuter er ikke klinisk validering. Gamle tester og bilder skal beholde
revisjonsidentiteten sin. Lånte faglige resultater må ikke bli egne dokumenterte resultater.

## Materiale

Finnes: produktgrunnlag, beslutningslogg, mekanikk/CAD, brandfiler og appskjermbilder.
`_innboks/prosjekter/gripsense/` har foreløpig bare notatspørsmål og beskjed om å hente fra GripSense-repoet.
Fysisk foto ble ikke funnet i de avgrensede kildemappene. CAD-konsept 05 brukes tydelig merket
som konstruksjonsidé. Nye tomme appvisninger er tatt lokalt 2026-10-24, uten enhet/persondata.
Velg eller hent: fysisk oversiktsfoto, detalj av kontakt/grep, tre tydelige prototypestadier,
og én kort gjennomgang av relevant appflyt. Gamle skjermbilder kontrolleres mot dagens status.

## Avklar med Brage

Hvilke tre valg best viser designarbeidet? Hva lærte du faktisk av bruk eller fysisk testing?
Hvilke bilder viser dagens prototype? Svarene skal gjøre casen konkret, ikke presse frem en suksesshistorie.

## Ferdig når

- [ ] Pågående status og valideringsgrenser fremgår uten at leseren må lete.
- [ ] Brages eget designarbeid er lett å forstå i bilder og korte tekster.
- [ ] Alle produkt-/målepåstander er sjekket mot gjeldende prosjektgrunnlag.
- [ ] Mediene fungerer uten maskinvare; demoens innhold fungerer også som stillbilder.
- [ ] Ingen personlige måledata, private profiler eller interne hemmeligheter er publisert.

## J3 – gjennomført lokalt 2026-10-24

Bygg, TypeScript, fem enhetstester og lint uten feil består. Sju nettleserkontrollgrupper
består på 1440/390 px: metadata/noindex, bilder, H1, sidescroll, ankre, direkte lenke,
refresh, historikk, 200 % tekst, fullstørrelsesbilder og neste prosjekt.
Tre publiseringsbilder er nettklare og uten EXIF. Se [J3-arbeidsloggen](../implementering/j3-2026-10-24.md).
