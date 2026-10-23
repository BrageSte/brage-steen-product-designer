# Avfallsportalen – senere interaktiv demonstrator

Tilbake til [hovedplanen](../../../PLANS.md). Prioritet: J1 tillit/funksjon, J2 innramming.
Side: https://bragesteen.no/projects/avfallsportalen
Demo: https://bragesteen.no/embeds/avfallsportalen/

## Rolle i porteføljen

Vis en senere utforskning av formidling, informasjonsstruktur og interaksjon, knyttet til
bachelorens tema. Den skal ha en kort forklaring av hvorfor Brage laget den i 2026,
hva han designet og hva han lærte. Unngå to like store prosjektkort for samme historie.
Behold demoen tilgjengelig via tydelig lenke fra bachelorcasen og eksisterende delte URL-er.

## Verifisert 2026-10-22

- Alle åtte reisesteg kan nås fremover; siste knapp åpner quizen.
- Alle ti quizspørsmål kan besvares. Riktig/feil-tilbakemelding og neste spørsmål virker.
- Ni feil + ett riktig svar gir 1/10. «Prøv igjen» går til ubesvart spørsmål 1.
- Valg av Bergen oppdaterer kommunesammenligningen og de viste verdiene.
- Dashboardet åpner, og klikk på nøkkeltall åpner detaljinnhold.

Dette verifiserer grensesnittet, ikke at tallene er sanne eller aktuelle.

## Nødvendig innholdsarbeid

- [ ] Merk som demonstrator/prototype med år og datastatus ved inngangen.
- [ ] Kartlegg hvert tall: kilde, år, definisjon og om det er observert, historisk eller illustrativt.
  Koden har en hardkodet `kommuneData`-tabell; ingen live datakilde er påvist.
- [ ] Ikke presenter en blanding av historiske tall og usikre eksempelverdier som dagens kommunestatistikk.
- [ ] Fjern «vinner»-rangeringer inntil datagrunnlag og sammenlignbarhet kan forsvares,
  eller merk hele sammenligningen tydelig som illustrasjonsdata.
- [ ] Rett «2,4 millioner tonn = 373 elefanter». Regnestykket impliserer over 6 400 tonn per
  elefant og kan ikke stå slik. Fjern eksempelet dersom grunnlaget ikke kan spores.
- [ ] Kontroller sitater/attribusjoner, inkludert formuleringen tillagt Paris-avtalen.
- [ ] La quizen lære det som faktisk dokumenteres i demonstratoren, med årstall i spørsmål som ellers blir utdaterte.
- [ ] Ikke oppdater original bachelorstatistikk uten å bevare den historiske konteksten.

## Nødvendig UX-/teknisk arbeid

- [ ] Vis navn på fanene, ikke bare emoji, og gi tydelige tilgjengelige navn.
- [ ] Flytt graftall utenfor de smaleste søylene; 19 %-søylen ble avkuttet til «%» på mobil.
- [ ] Sørg for at nytt quizspørsmål/resultat starter ved synlig overskrift og at fokus følger logisk.
- [ ] Bruk ordentlige knapper/radiovalg for svar og utvidbare kort; test Enter, Space og Tab.
- [ ] Forklar og håndter valg av samme kommune på begge sider.
- [ ] Tilby «Åpne demo i eget vindu» for å unngå dobbel rulling og små innebygde flater.
- [ ] Gi demoen et dekkende stillbilde og kort forklaring hvis innlasting feiler.

## Full akseptansetest før publisering

- [ ] Åtte steg frem/tilbake, første/siste grense, snarveier og overgang til quiz.
- [ ] Ti svar, endre svar via Forrige, resultat, omstart, nullstilt fremdrift.
- [ ] Begge kommunevelgere, lik kommune og tom/ugyldig verdi dersom mulig.
- [ ] Alle dashboarddetaljer og lesbare tall ved 390 px og 200 % zoom.
- [ ] Lys/mørk visning og eventuell lagring av valg, uten å etterlate testendringer.
- [ ] Tastatur og skjermleserprøve, samt tydelig data-/prototypemerking.

**Ferdig når:** demoen er forståelig og virker uten å fremstille usikre data som faglig fasit.
Brages designrolle og forholdet til bacheloren må være forståelig før besøkeren åpner demoen.
