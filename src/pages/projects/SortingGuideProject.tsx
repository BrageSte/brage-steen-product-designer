import Prosjektbilde from "@/components/Prosjektbilde";
import SiteLayout from "@/components/SiteLayout";
import ProjectBar from "@/components/ProjectBar";
import { sortingGuideSections, colors, basePath } from "./sorting-guide/navigation";
import type { ReactNode } from "react";

function SectionHeading({ eyebrow, title, children, light = false }: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-14 max-w-[760px]">
      <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4" style={{ color: light ? colors.greenPale : colors.greenMain }}>
        {eyebrow}
      </span>
      <h2 className={`mb-5 ${light ? "text-white" : "text-gray-900"}`} style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
        {title}
      </h2>
      {children && <p className={`text-lg leading-relaxed ${light ? "text-white/70" : "text-gray-600"}`}>{children}</p>}
    </div>
  );
}

function HeroSection() {
  const details = [
    { label: "Periode", value: "Januar–mai 2020" },
    { label: "Samarbeidspartner", value: "IKEA Norge" },
    { label: "Utdanning", value: "Produktdesign, OsloMet" },
    { label: "Fagområde", value: "Tjenestedesign" },
  ];

  return (
    <section className="min-h-screen relative flex flex-col overflow-hidden" style={{ background: colors.greenDeep }}>
      <div className="absolute inset-0 z-0">
        <Prosjektbilde src={`${basePath}/nett/images-153.jpg`} alt="Kampanjeutkastet «Let's Sort This Out» fra bachelorprosjektet" className="w-full h-full object-cover object-center" fetchPriority="high" decoding="async" />
      </div>
      <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, rgba(26,51,41,.88), rgba(45,90,71,.76) 50%, rgba(26,51,41,.9))" }} />
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-24 relative z-[2]">
        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider mb-8 text-white/85 border border-white/15 bg-white/10">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.greenPale }} /> Bachelorprosjekt · 2020
        </span>
        <h1 className="text-white mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(3.5rem, 10vw, 7rem)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>The Sorting Guide</h1>
        <p className="mb-8" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: colors.greenPale }}>Kildesorteringsguiden</p>
        <p className="text-lg max-w-2xl mb-12 leading-relaxed text-white/80">
          Et tjenestekonsept som utforsker hvordan personlig veiledning og produktforslag kan gjøre det enklere for norske husholdninger å sortere avfall.
        </p>
        <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 max-md:flex-col max-md:items-center">
          {details.map((item) => <div key={item.label} className="text-left max-md:text-center">
            <p className="text-[0.7rem] uppercase tracking-[1.5px] mb-1 text-white/55">{item.label}</p>
            <p className="text-[0.95rem] font-medium text-white/90">{item.value}</p>
          </div>)}
        </div>
      </div>
      <div className="pb-8 flex flex-col items-center gap-3 relative z-[2] text-white/50" aria-hidden="true">
        <span className="text-xs uppercase tracking-wider">Bla videre</span>
        <div className="w-px h-[60px] bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

function ChallengeSection() {
  return <section id="challenge" className="py-24 px-6 md:px-8" style={{ background: colors.warmGray }}>
    <div className="max-w-[1140px] mx-auto">
      <SectionHeading eyebrow="Utgangspunkt · 2020" title="Sorteringen begynner hjemme">
        Husholdningen er første ledd i kildesorteringen, men systemet kan være vanskelig å forstå og praktisere. Regler varierer mellom kommuner, og hjemmene har ulike behov og ulik plass til sorteringsløsninger.
      </SectionHeading>
      <div className="grid md:grid-cols-2 gap-14 items-center max-lg:grid-cols-1">
        <figure className="rounded-3xl overflow-hidden bg-white" style={{ boxShadow: "0 30px 70px rgba(0,0,0,.12)" }}>
          <Prosjektbilde src={`${basePath}/nett/images-010.jpg`} alt="Haraldrud avfallsanlegg i Oslo, besøkt i forbindelse med bachelorprosjektet" className="w-full block" loading="lazy" decoding="async" />
          <figcaption className="px-5 py-3 text-sm text-gray-500">Avfallssystemet sett fra et større perspektiv. Undersøkelsesmateriale fra 2020.</figcaption>
        </figure>
        <div>
          <h3 className="text-3xl mb-5" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Fra komplisert system til hverdagsvalg</h3>
          <p className="text-gray-600 mb-5 text-[1.05rem] leading-relaxed">Prosjektet undersøkte hvordan folk sorterer hjemme, hvor de finner informasjon, og hvordan løsninger og produkter kan passe inn i hverdagen. Målet var å gjøre kunnskap og praktisk veiledning lettere å finne.</p>
          <div className="mt-8 p-7 md:p-8 rounded-2xl text-white" style={{ background: colors.greenDeep }}>
            <p className="text-[0.75rem] uppercase tracking-[1.5px] mb-3" style={{ color: colors.greenPale }}>Designspørsmål · oversatt fra engelsk</p>
            <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: "'Instrument Serif', serif" }}>Hvordan kan vi veilede folk til informasjon og tilbud som passer husholdningens behov, slik at det blir enklere å sortere riktig?</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

function TeamSection() {
  return <section id="team" className="py-24 px-6 md:px-8 bg-white">
    <div className="max-w-[1140px] mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center max-lg:grid-cols-1">
        <figure className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 35px 70px rgba(0,0,0,.1)" }}>
          <Prosjektbilde src={`${basePath}/nett/images-016.jpg`} alt="Bachelorteamet Regina von Koch og Brage Steen" className="w-full block" loading="lazy" decoding="async" />
          <figcaption className="px-5 py-3 text-sm text-gray-500">Brage Steen og Regina von Koch. Foto fra bachelorprosjektet i 2020.</figcaption>
        </figure>
        <div>
          <SectionHeading eyebrow="Team og rammer" title="Et felles bachelorprosjekt">
            Regina von Koch og jeg utviklet prosjektet sammen gjennom hele perioden. Vi delte arbeidet med undersøkelser, konseptutvikling og prototype.
          </SectionHeading>
          <p className="text-gray-600 leading-relaxed">The Sorting Guide var bacheloroppgaven vår i produktdesign ved OsloMet. IKEA Norge var hovedpartner. Vi samarbeidet også med Grønt Punkt og Loop om innsikt og tilbakemeldinger.</p>
          <div className="flex gap-8 flex-wrap mt-8">
            {[{ initials: "BS", name: "Brage Steen" }, { initials: "RK", name: "Regina von Koch" }].map((member) => <div key={member.name} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-semibold" style={{ background: colors.greenPale, color: colors.greenDeep }}>{member.initials}</div>
              <span className="font-semibold">{member.name}</span>
            </div>)}
          </div>
          <p className="mt-8 text-sm text-gray-500">Samarbeidspartnere: IKEA Norge, Grønt Punkt og Loop.</p>
          <a href="/dokumenter/the-sorting-guide-rapport.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6">Les bachelorrapporten (engelsk, PDF)</a>
          <p className="mt-2 text-sm text-gray-500">106 sider · 19,4 MB · Originalrapport fra 2020.</p>
        </div>
      </div>
    </div>
  </section>;
}

function UndersøkelseSection() {
  const galleryImages = [
    { src: "nett/images-044.jpg", caption: "Samskapingsøkt med prosjektpartnere", alt: "Deltakere arbeider sammen i en samskapingsøkt" },
    { src: "nett/images-030.jpg", caption: "Undersøkelse hos IKEA", alt: "Undersøkelse og observasjon i IKEA-varehus" },
    { src: "nett/images-063.jpg", caption: "Besøk i OBOS Living Lab", alt: "Prosjektgruppen besøker OBOS Living Lab" },
    { src: "nett/images-154.jpg", caption: "Kartlegging av brukerreisen", alt: "Brukerreise tegnet opp som del av bachelorprosjektet" },
    { src: "nett/images-016.jpg", caption: "Brage Steen og Regina von Koch", alt: "Prosjektteamet Brage Steen og Regina von Koch" },
    { src: "nett/images-137.jpg", caption: "Utkast til tjenesteformidling", alt: "Visuelt utkast til formidling av tjenestekonseptet" },
  ];
  return <section id="research" className="py-24 px-6 md:px-8" style={{ background: colors.cream }}>
    <div className="max-w-[1140px] mx-auto">
      <SectionHeading eyebrow="Undersøkelse · 2020" title="Se sorteringen i sammenheng">
        Vi kombinerte observasjon og intervjuer med hjemmebesøk, designprober og undersøkelser hos IKEA. Det ga oss innblikk i både sorteringen i hjemmet og informasjonen og løsningene folk møter når de leter etter hjelp.
      </SectionHeading>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-7 rounded-2xl bg-white" style={{ boxShadow: "0 12px 35px rgba(0,0,0,.06)" }}>
          <p className="leading-none mb-2" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2.5rem", color: colors.greenMain }}>5</p>
          <p className="font-semibold mb-1">hjemmebesøk</p>
          <p className="text-sm text-gray-600">Vi fulgte sorteringshverdagen i fem husholdninger, slik det er dokumentert i bachelorrapporten.</p>
        </div>
        <div className="p-7 rounded-2xl bg-white" style={{ boxShadow: "0 12px 35px rgba(0,0,0,.06)" }}>
          <p className="leading-none mb-2" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2.5rem", color: colors.greenMain }}>60</p>
          <p className="font-semibold mb-1">deltakere i to workshops</p>
          <p className="text-sm text-gray-600">27 deltakere i den første workshopen, og 30 studenter og 3 professorer i den andre.</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {galleryImages.map((img, i) => {
          const span = i === 0 ? "col-span-5 max-lg:col-span-2 max-md:col-span-1" : i === 5 ? "col-span-4 max-lg:col-span-2 max-md:col-span-1" : "col-span-3 max-lg:col-span-1";
          return <figure key={img.src} className={`${span} rounded-2xl overflow-hidden bg-white`}>
            <Prosjektbilde src={`${basePath}/${img.src}`} alt={img.alt} className="w-full h-[250px] object-cover" loading="lazy" decoding="async" />
            <figcaption className="px-4 py-3 text-sm text-gray-600">{img.caption}</figcaption>
          </figure>;
        })}
      </div>
    </div>
  </section>;
}

function InsightsSection() {
  const insights = [
    { title: "Tilgjengelighet", finding: "Plass og plassering av beholdere påvirker hvordan sortering kan organiseres hjemme.", response: "Konseptet tar utgangspunkt i husholdningens behov når det foreslår en løsning." },
    { title: "Kunnskap", finding: "Det kan være vanskelig å vite hvor og hvordan ulike materialer skal sorteres.", response: "Tjenesten samler veiledning om lokale sorteringsregler." },
    { title: "Tillit", finding: "Når systemet er vanskelig å forstå, kan det være vanskelig å se hvordan egen innsats hjelper.", response: "Konseptet prøver å gjøre informasjonen mer konkret og lettere å finne." },
  ];
  return <section id="insights" className="py-24 px-6 md:px-8 bg-white">
    <div className="max-w-[1140px] mx-auto">
      <SectionHeading eyebrow="Innsikt → designvalg" title="Tre barrierer formet konseptet">
        Gjennom å sammenstille funn fra ulike metoder identifiserte vi tre barrierer. Dette er historiske funn fra bachelorarbeidet i 2020, ikke en måling av dagens sorteringsvaner.
      </SectionHeading>
      <div className="grid md:grid-cols-3 gap-6 max-lg:grid-cols-1">
        {insights.map((item) => <article key={item.title} className="p-8 rounded-3xl" style={{ background: colors.warmGray }}>
          <span className="inline-flex w-10 h-10 rounded-full items-center justify-center text-white font-semibold mb-5" style={{ background: colors.greenMain }}>{item.title.slice(0, 1)}</span>
          <h3 className="text-2xl mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>{item.title}</h3>
          <p className="text-gray-600 text-[0.95rem] leading-relaxed mb-5">{item.finding}</p>
          <p className="pt-4 border-t border-gray-200 text-sm leading-relaxed"><strong>Designrespons:</strong> {item.response}</p>
        </article>)}
      </div>
    </div>
  </section>;
}

function SolutionSection() {
  const steps = [
    { num: "01", title: "Kartlegg behov hjemme", desc: "Brukeren beskriver husholdningen og rammene for sortering." },
    { num: "02", title: "Få en anbefaling", desc: "Konseptet foreslår en sorteringsløsning tilpasset behovene." },
    { num: "03", title: "Finn lokale regler", desc: "Veiledningen knytter løsningen til sorteringsreglene der brukeren bor." },
  ];
  return <section id="solution" className="py-24 px-6 md:px-8" style={{ background: colors.cream }}>
    <div className="max-w-[1140px] mx-auto">
      <SectionHeading eyebrow="Konsept" title="Fra behov hjemme til lokal veiledning">
        The Sorting Guide ble utformet som en tjenesteplattform som samler personlig sorteringsveiledning, lokale regler og forslag til IKEA-produkter. Dette er et konsept utviklet i bachelorprosjektet.
      </SectionHeading>
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-center max-lg:grid-cols-1">
        <div className="rounded-2xl overflow-hidden bg-white" style={{ boxShadow: "0 35px 80px rgba(0,0,0,.12)" }}>
          <div className="flex items-center gap-2 px-5 py-4" style={{ background: colors.warmGray }} aria-hidden="true"><span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/><span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/><span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/></div>
          <div className="px-8 py-12 min-h-[340px] flex flex-col items-center justify-center text-center text-white" style={{ background: colors.greenMain }}>
            <div className="text-4xl mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>S♻RTING</div>
            <div className="text-base font-light uppercase tracking-[3px] mb-6" style={{ color: colors.greenPale }}>guide</div>
            <p className="text-lg mb-8 max-w-[300px]">Bygg en sorteringsløsning for hjemmet</p>
            <a href="#prototype" className="inline-block px-8 py-3 bg-white rounded-lg font-semibold text-[0.95rem] transition-all hover:-translate-y-0.5" style={{ color: colors.greenMain }}>Se prototypegjennomgang</a>
          </div>
        </div>
        <div className="space-y-4">
          {steps.map((step) => <div key={step.num} className="flex gap-5 p-5 md:p-6 rounded-2xl bg-white" style={{ boxShadow: "0 4px 25px rgba(0,0,0,.04)" }}>
            <span className="text-3xl leading-none" style={{ fontFamily: "'Instrument Serif', serif", color: colors.greenMain }}>{step.num}</span>
            <div><h3 className="font-semibold mb-1">{step.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p></div>
          </div>)}
          <p className="text-sm text-gray-500 pt-2">IKEA-partner Kenneth Skauge ga denne tilbakemeldingen i 2020:</p>
          <blockquote className="p-6 rounded-2xl text-white" style={{ background: colors.greenDeep }}>
            <p className="text-xl leading-relaxed" style={{ fontFamily: "'Instrument Serif', serif" }}>“You are spot on. There is definitely a need for this concept.”</p>
            <footer className="mt-3 text-sm text-white/70">Kenneth Skauge, Sustainability Business Partner, IKEA Norge · sitat på engelsk</footer>
          </blockquote>
          <p className="text-sm text-gray-500">Tilbakemeldingen uttrykker vurdering av konseptets behov. Prosjektet målte ikke endringer i sorteringsgrad eller miljøeffekt.</p>
        </div>
      </div>
    </div>
  </section>;
}

function GigamapSection() {
  return <section id="gigamap" className="py-24 px-6 md:px-8" style={{ background: colors.warmGray }}>
    <div className="max-w-[1200px] mx-auto">
      <SectionHeading eyebrow="Innsiktskart · 2020" title="Gigamap: et system i flere nivåer">
        Gigamapen samler kunnskap om avfall og sortering fra et større systemperspektiv og ned til hverdagen hjemme. Den var et arbeidsverktøy for å se sammenhenger gjennom prosjektet. Originalen er på engelsk.
      </SectionHeading>
      <div className="bg-white rounded-3xl p-5 md:p-8" style={{ boxShadow: "0 20px 60px rgba(0,0,0,.08)" }}>
        <a href="/dokumenter/kildesortering-gigamap.pdf" target="_blank" rel="noopener noreferrer" className="block rounded-2xl overflow-hidden max-w-[900px] mx-auto" style={{ background: colors.warmGray }} aria-label="Åpne gigamapen som PDF i full størrelse i ny fane">
          <Prosjektbilde src={`${basePath}/nett/gigamap.jpg`} alt="Gigamap «Resource Map» på engelsk: sammenhenger mellom avfallssystemet, Norge, Oslo og sortering i hjemmet" width={1400} height={3219} className="w-full h-auto block" loading="lazy" decoding="async" />
        </a>
        <p className="text-center text-sm text-gray-500 mt-5">Gigamap fra bachelorprosjektet, 2020. Originalen er på engelsk.</p>
        <p className="text-center mt-3"><a href="/dokumenter/kildesortering-gigamap.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gray-800">Åpne gigamapen for å zoome (PDF)</a></p>
      </div>
    </div>
  </section>;
}

function PrototypeSection() {
  const screens = [
    { src: `${basePath}/nett/prototype-forside.jpg`, alt: "Prototypeforsiden med inngang til Home Recycling Builder", caption: "Prototypeforside · skjermbilde med engelsk tekst" },
    { src: `${basePath}/nett/prototype-anbefaling.jpg`, alt: "Skjermbilde av anbefalt sorteringsløsning i prototypen", caption: "Personlig anbefaling · skjermbilde med engelsk tekst" },
    { src: `${basePath}/nett/prototype-ditt-omrade.jpg`, alt: "Skjermbilde med sorteringsinformasjon for brukerens område", caption: "Sortering i ditt område · skjermbilde med engelsk tekst" },
  ];
  return <section id="prototype" className="py-24 px-6 md:px-8" style={{ background: colors.greenDeep }}>
    <div className="max-w-[1200px] mx-auto">
      <SectionHeading eyebrow="Prototype og læring" title="Gjør tjenesteflyten konkret" light>
        Vi laget en klikkbar Adobe XD-prototype for å vise hvordan brukeren kan gå fra behov i hjemmet til anbefalt løsning, lokale regler, tips og produktguide. Videoen viser en gjennomgang av prototypen; tjenesten ble ikke lansert som et ferdig produkt.
      </SectionHeading>
      <figure className="rounded-2xl overflow-hidden mx-auto bg-black" style={{ boxShadow: "0 40px 90px rgba(0,0,0,.3)" }}>
        <video src={`${basePath}/prototype-gjennomgang.mp4`} poster={`${basePath}/nett/prototype-gjennomgang-poster.jpg`} controls preload="none" playsInline className="w-full h-auto block aspect-video" aria-label="Videogjennomgang av The Sorting Guide-prototypen">
          <a href={`${basePath}/prototype-gjennomgang.mp4`}>Last ned videogjennomgangen</a>
        </video>
        <figcaption className="px-5 py-3 text-sm text-white/70">Videogjennomgang av den klikkbare prototypen · ca. 5 min 33 sek · 2020.</figcaption>
      </figure>
      <div className="grid gap-6 md:grid-cols-3 mt-9">
        {screens.map((screen) => <figure key={screen.src}>
          <Prosjektbilde src={screen.src} alt={screen.alt} width={1600} height={1000} className="w-full h-auto rounded-xl bg-white" loading="lazy" decoding="async" />
          <figcaption className="mt-3 text-sm text-white/65">{screen.caption}</figcaption>
        </figure>)}
      </div>
      <div className="mt-12 p-7 md:p-8 rounded-2xl bg-white/5 border border-white/10 max-w-[850px]">
        <h3 className="text-2xl text-white mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Læring fra arbeidet</h3>
        <p className="text-white/70 leading-relaxed">Prototypen gjorde det mulig å diskutere en samlet tjenesteflyt fra husholdningens behov til lokale regler og produktforslag. Den viste hvordan konseptet kunne henge sammen, men dokumenterte ikke at tjenesten endret sorteringsvaner.</p>
      </div>
      <div className="mt-16 pt-10 border-t border-white/15 max-w-[800px]">
        <p className="text-xs uppercase tracking-[1.5px] mb-3" style={{ color: colors.greenPale }}>Videre utforskning · 2026</p>
        <h3 className="text-3xl text-white mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>En ny utforskning av avfallsinformasjon</h3>
        <p className="text-white/70 leading-relaxed mb-5">Avfallsportalen er en separat utforskning fra 2026 av hvordan informasjon om sortering kan formidles. Den er ikke del av bachelorleveransen fra 2020.</p>
        <a href="/prosjekter/avfallsportalen" className="inline-flex items-center gap-2 text-white underline underline-offset-4 hover:text-white/80">Se Avfallsportalen <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>;
}

export default function SortingGuideProject() {
  return <SiteLayout>
    <ProjectBar title="The Sorting Guide — Kildesorteringsguiden" sections={sortingGuideSections} />
    <main id="main-content" className="bg-background">
      <HeroSection />
      <ChallengeSection />
      <TeamSection />
      <UndersøkelseSection />
      <InsightsSection />
      <SolutionSection />
      <GigamapSection />
      <PrototypeSection />
    </main>
  </SiteLayout>;
}
