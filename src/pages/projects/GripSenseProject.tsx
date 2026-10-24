import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import ProjectBar from "@/components/ProjectBar";
import Prosjektbilde from "@/components/Prosjektbilde";

const base = "/projects/gripsense/nett";
const sections = [
  { id: "utgangspunkt", label: "Utgangspunkt" },
  { id: "gripeflate", label: "Gripeflate" },
  { id: "grensesnitt", label: "Grensesnitt" },
  { id: "status", label: "Status" },
];

export default function GripSenseProject() {
  return <SiteLayout>
    <ProjectBar title="GripSense" sections={sections} />
    <main id="main-content" className="[overflow-wrap:anywhere]">
      <section className="bg-[#edf2f5]">
        <div className="container pt-12 animate-fade-in-up">
          <p className="eyebrow text-[#1267ae]">Produktutvikling · pågående</p>
          <h1 className="text-display-xl mt-4">GripSense</h1>
          <p className="text-body-lg mt-5 max-w-2xl">Fra fysisk gripeflate til forståelig tilbakemelding om last under et grep.</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed">Prosjektet kombinerer mekanikk, elektronikk og et digitalt grensesnitt. Målevalidering og valg av første brukssituasjon pågår.</p>
        </div>
        <figure className="mt-8 md:mt-10">
          <Prosjektbilde src={`${base}/fingerputer-konsept-05.jpg`} alt="CAD-konsept med fire fingerputer i ulike høyder og feste under gripeflatene" fetchPriority="high" className="w-full h-auto max-h-[520px] object-contain md:h-[max(180px,calc(100svh_-_500px))]" />
          <figcaption className="container py-5 text-sm text-muted-foreground">CAD-konsept 05: utskiftbare fingerputer. Illustrasjonen viser en konstruksjonsidé, ikke en ferdig fysisk prototype.</figcaption>
        </figure>
      </section>

      <section id="utgangspunkt" className="section">
        <div className="container grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
          <div><p className="eyebrow">Utgangspunkt</p><h2 className="text-display-md mt-3">Hva forteller kontakten med grepet?</h2></div>
          <div className="max-w-2xl space-y-5 text-body-lg">
            <p>GripSense utforsker hvordan last på fire kontaktflater kan presenteres slik at brukeren forstår forsøket. Hånden, måleutstyret og grensesnittet må ses i sammenheng: plasseringen på kontaktflatene påvirker hvordan informasjonen kan tolkes.</p>
            <p>Klatrere, trenere og fysioterapeuter er mulige brukere i den videre utforskningen. Hvilke konkrete oppgaver produktet bør støtte, undersøkes fortsatt.</p>
          </div>
        </div>
      </section>

      <section id="gripeflate" className="section border-t border-border">
        <div className="container">
          <p className="eyebrow">Fysisk utforming</p>
          <h2 className="text-display-md mt-3 max-w-2xl">En kontaktflate som kan endres</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-display-sm">Fra stabling til én sammenhengende pute</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">I CAD-arbeidet er stablede deler erstattet med én sammenhengende, 3D-printbar gripepute per ønsket høyde. En felles underside gir rom for å utforske forskjellige høyder, vinkler og buer med samme feste.</p>
            </div>
            <div>
              <h3 className="text-display-sm">Betjening under gripeflaten</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">Et foreløpig konsept med vippespak og innskyvbar kobling plasserer betjeningen under puten, slik at kontaktflaten kan holdes fri. Bytte av gripepute, låsing og ergonomi må prøves fysisk.</p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">Konseptgrunnlag fra oktober 2026. CAD-kontroller av mål og klaringer er gjennomført; låsing, slitasje og oppførsel under belastning er ikke fysisk validert.</p>
          <a href={`${base}/fingerputer-konsept-05.jpg`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm underline underline-offset-4">Se CAD-illustrasjonen i full størrelse</a>
        </div>
      </section>

      <section id="grensesnitt" className="section border-t border-border bg-[#edf2f5]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#1267ae]">Digital prototype</p>
            <h2 className="text-display-md mt-3">Gjør forsøket forståelig</h2>
            <p className="text-body-lg mt-5">Arbeidsflyten som utvikles går fra tilkobling og kontroll av signal til et avgrenset forsøk, deskriptiv tilbakemelding og lagring med kontekst.</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">Appen har flater for direkte visning, protokollvalg og historikk. Bildene under viser grensesnitt uten tilkoblet enhet eller personlige resultater.</p>
          </div>
          <div className="mt-10 grid max-w-3xl gap-8 sm:grid-cols-2 md:gap-12">
            <figure>
              <a href={`${base}/app-live.png`} target="_blank" rel="noopener noreferrer" aria-label="Åpne direktevisningen i full størrelse"><Prosjektbilde src={`${base}/app-live.png`} alt="GripSense-appens direktevisning uten tilkoblet måleenhet" className="w-full rounded-xl border border-border" /></a>
              <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">Direktevisning uten måleenhet, 24. oktober 2026. Nullverdier viser tom tilstand. Originalt grensesnitt på engelsk.</figcaption>
            </figure>
            <figure>
              <a href={`${base}/app-protokollvalg.png`} target="_blank" rel="noopener noreferrer" aria-label="Åpne protokollvalget i full størrelse"><Prosjektbilde src={`${base}/app-protokollvalg.png`} alt="GripSense-appens valg av protokoll for et forsøk, uten personlige måledata" className="w-full rounded-xl border border-border" /></a>
              <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">Protokollvalg uten måleenhet, 24. oktober 2026. Originalt grensesnitt på engelsk. Funksjonene dokumenterer en arbeidsflyt under utvikling.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="status" className="section border-t border-border">
        <div className="container">
          <p className="eyebrow">Status · 24. oktober 2026</p>
          <h2 className="text-display-md mt-3">Fra konsept til videre utprøving</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-display-sm">Dette er på plass</h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
                <li>Første Rev E-kort er satt opp med fire celler og overføring av signalrammer over USB.</li>
                <li>Et CAD-konsept for utskiftbare fingerputer med felles feste.</li>
                <li>Et webgrensesnitt for tilkobling, protokollvalg og visning av forsøk.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-display-sm">Dette undersøkes videre</h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
                <li>Kalibrering, påvirkning mellom kanaler og betydningen av kontaktplassering.</li>
                <li>Fysisk utprøving av gripeflater og feste, samt BLE/iPhone og batteridrift.</li>
                <li>Hvilke brukssituasjoner og beslutninger produktet bør støtte først.</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">Kanallast er ikke automatisk individuell fingerstyrke. Prosjektet har foreløpig ikke dokumentert målevaliditet, treningseffekt eller skadeforebygging.</p>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container flex flex-wrap items-center justify-between gap-6">
          <div><p className="eyebrow">Neste prosjekt</p><h2 className="text-display-md mt-3">BS Climbing</h2></div>
          <Link className="btn btn-primary" to="/prosjekter/bs-climbing">Se tilpassede klatreprodukter</Link>
        </div>
      </section>
    </main>
  </SiteLayout>;
}
