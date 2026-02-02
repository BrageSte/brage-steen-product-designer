import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CaseHero from "@/components/project/CaseHero";
import CaseSidebar from "@/components/project/CaseSidebar";
import NextProject from "@/components/ui/NextProject";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { getProjectBySlug, projects } from "@/content/projects";

const Seaweed = () => {
  const project = getProjectBySlug("seaweed");
  const nextProject = projects.find((p) => p.slug === "crimpblock");

  if (!project) return null;

  const caseMetaItems = [
    { label: "Team", value: "Brage Steen, Thomas Rokstad, Ly Nguyen" },
    { label: "Varighet", value: "11 uker" },
    { label: "År", value: "2019" },
    { label: "Type", value: "Materialforskning" },
    {
      label: "Tangarter",
      value: ["Sagtang", "Blæretang", "Sukkertare", "Tarmgrønske"],
    },
  ];

  const processSteps = [
    {
      num: "1",
      title: "Innhøsting",
      desc: "Vi samlet tang selv og mottok tørket sukkertare fra SES (Seaweed Energy Solutions). Vi brukte primært Sagtang, Blæretang, Sukkertare og Tarmgrønske.",
    },
    {
      num: "2",
      title: "Bearbeiding",
      desc: "Tangen ble malt før koking, deretter kokt i 3 timer med natriumkarbonat (1 ss per 100ml vann) for å trekke ut alginat og skape en formbar masse.",
    },
    {
      num: "3",
      title: "Testing av tilsetninger",
      desc: "Vi testet systematisk organiske tilsetninger som mel, ris, havrefiber og havrejuice i ulike forhold (20/80 til 80/20) for å forbedre materialstabiliteten.",
    },
    {
      num: "4",
      title: "Tørkemetoder",
      desc: "Vi eksperimenterte med treformer, gipsformer, vakuumkammer, hydrauliske presser og keramikkovner for å finne metoder som kontrollerte krymping og sprekker.",
    },
  ];

  const concepts = [
    {
      num: "01",
      title: "Takeaway-emballasje",
      desc: "Et bionedbrytbart alternativ til papemballasje for matleveringstjenester. Materialet brytes ned naturlig hvis det havner i naturen, samtidig som det begrenser CO2-utslipp under produksjon.",
    },
    {
      num: "02",
      title: "Restaurant-servise",
      desc: "Materialet blir hardt nok for servering, og den organiske krympingen under tørking skaper unike, bølgelignende kanter som minner om tang i sin naturlige form. Perfekt for eksklusive sjømatrestauranter.",
    },
    {
      num: "03",
      title: "Bionedbrytbare plantepotter",
      desc: "Et bærekraftig alternativ til plastpotter som kan plantes direkte i jorden. Den tangbaserte beholderen brytes ned og fungerer som gjødsel for planten.",
    },
  ];

  const stats = [
    { value: "90+", label: "Materialprøver testet" },
    { value: "4", label: "Tangarter brukt" },
    { value: "50%", label: "Typisk krympingsrate" },
    { value: "15t", label: "Trykktoleranse i tester" },
  ];

  return (
    <Layout>
      <CaseHero
        title="Seaweed — Ting av Tang"
        subtitle="Utforsking av potensialet i tang som et bærekraftig materiale for produktdesign og produksjon."
        category="Materialforskning"
        year="2019"
        role="Produktdesigner"
        coverImage="/images/seaweed/cover.jpg"
      />

      <Section>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main content */}
            <div className="space-y-20">
              {/* Mobile sidebar */}
              <CaseSidebar items={caseMetaItems} className="lg:hidden" />

              {/* Challenge */}
              <div className="space-y-6">
                <span className="text-caption">Utfordringen</span>
                <h2 className="text-display-md">
                  Kan vi utvikle et materiale fra tang som kan brukes til å
                  designe enkle produkter?
                </h2>
                <p className="text-body-lg text-muted-foreground">
                  I dagens samfunn er det en økende utfordring å finne
                  alternative ressurser for å erstatte materialer som skader
                  miljøet. Materialer som plast, betong og aluminium er ofte
                  ikke-resirkulerbare og ikke-bionedbrytbare.
                </p>
                <p className="text-body text-muted-foreground">
                  Norge har som mål å produsere 20 millioner tonn tang innen
                  2050, og skape verdier på omtrent 40 milliarder kroner. Med
                  dette prosjektet ønsket vi å utforske mulighetene for å bruke
                  tang som et fysisk materiale som kan bidra positivt til det
                  grønne skiftet.
                </p>

                <ImageWithFallback
                  src="/images/seaweed/hero-material.jpg"
                  alt="Tangmaterialforskning"
                  aspectRatio="video"
                  className="rounded-lg mt-8"
                />
              </div>

              {/* Context */}
              <div className="space-y-6">
                <span className="text-caption">Kontekst</span>
                <h2 className="text-display-md">
                  Tang har dype røtter i norsk kysttradisjon
                </h2>
                <p className="text-body text-muted-foreground">
                  Innhøsting av tang har lange tradisjoner langs norskekysten,
                  og har tjent som tilleggsnæring og matkilde. En av Norges
                  eldste lover, «Frostatingsloven», fastslår at tang tilhører
                  gården den ligger ved.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-card rounded-lg p-6">
                    <h3 className="font-medium mb-2">Historisk bruk</h3>
                    <p className="text-sm text-muted-foreground">
                      På 1700-1800-tallet ble tang brent for å produsere aske
                      til glassproduksjon og såpefremstilling. Asken ble
                      eksportert primært til England og Skottland.
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-6">
                    <h3 className="font-medium mb-2">Miljøfordeler</h3>
                    <p className="text-sm text-muted-foreground">
                      Tang forbruker CO2 under vekst, produserer oksygen og
                      fungerer som et filter for havet – absorberer nitrogen,
                      tungmetaller og forurensning fra fiskeoppdrett.
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-6">
                    <h3 className="font-medium mb-2">Fremtidig potensial</h3>
                    <p className="text-sm text-muted-foreground">
                      Norges lange kystlinje tilbyr nærmest perfekte forhold for
                      tangproduksjon. NIVA mener tangoppdrett kan bli den neste
                      store næringen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="space-y-6">
                <span className="text-caption">Metodikk</span>
                <h2 className="text-display-md">
                  Forsknings- og utviklingsprosess
                </h2>
                <p className="text-body text-muted-foreground">
                  Vi utviklet en systematisk tilnærming til bearbeiding av tang,
                  og eksperimenterte med ulike arter, kokemetoder og
                  tilsetninger for å finne den optimale materialsammensetningen.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {processSteps.map((step) => (
                    <div key={step.num} className="bg-card rounded-lg p-6">
                      <span className="text-2xl font-medium text-muted-foreground/30 block mb-2">
                        {step.num}
                      </span>
                      <h3 className="font-medium mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials Gallery */}
              <div className="space-y-6">
                <span className="text-caption">Eksperimenter</span>
                <h2 className="text-display-md">Materialtesting og analyse</h2>
                <p className="text-body text-muted-foreground">
                  Vi produserte over 90 materialprøver, og testet ulike
                  kombinasjoner for styrke, tekstur, lukt og utseende. Hver ble
                  evaluert på en skala fra 1-5 av en fokusgruppe.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  <ImageWithFallback
                    src="/images/seaweed/process-1.jpg"
                    alt="Tanginnsamling"
                    aspectRatio="square"
                    className="rounded-lg md:col-span-2 md:row-span-2"
                  />
                  <ImageWithFallback
                    src="/images/seaweed/process-2.jpg"
                    alt="Materialbearbeiding"
                    aspectRatio="square"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/seaweed/process-3.jpg"
                    alt="Laboratoriearbeid"
                    aspectRatio="square"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/seaweed/process-4.jpg"
                    alt="Materialtesting"
                    aspectRatio="square"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/seaweed/process-5.jpg"
                    alt="Forskningsprosess"
                    aspectRatio="square"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card rounded-lg p-6">
                    <p className="text-3xl font-medium text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Concepts */}
              <div className="space-y-6">
                <span className="text-caption">Designapplikasjoner</span>
                <h2 className="text-display-md">
                  Tre konsepter for tangbaserte produkter
                </h2>

                <div className="space-y-8 mt-8">
                  {concepts.map((concept) => (
                    <div
                      key={concept.num}
                      className="grid md:grid-cols-2 gap-8 items-center p-6 bg-card rounded-lg"
                    >
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">
                          Konsept {concept.num}
                        </span>
                        <h3 className="text-xl font-medium mt-1 mb-3">
                          {concept.title}
                        </h3>
                        <p className="text-muted-foreground">{concept.desc}</p>
                      </div>
                      <ImageWithFallback
                        src={`/images/seaweed/concept-${concept.num}.jpg`}
                        alt={concept.title}
                        aspectRatio="wide"
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Findings */}
              <div className="space-y-6">
                <span className="text-caption">Nøkkelfunn</span>
                <h2 className="text-display-md">Utfordringer og oppdagelser</h2>

                <div className="space-y-6 text-body text-muted-foreground">
                  <p>
                    Den største utfordringen var å tørke tangmassen uten
                    sprekker. Tang holder på fuktighet ekstremt godt, noe som
                    gjør at tørkeprosessen tar 4-5 dager. Kombinert med
                    betydelig krymping (opptil 50%) gjorde dette det svært
                    vanskelig å kontrollere den endelige formen.
                  </p>
                  <p>
                    <strong>Sukkertare og sagtang</strong> produserte de
                    sterkeste, mest homogene materialene. Å tilsette havrejuice
                    til blandingen skapte overraskende harde resultater – små
                    tørkede biter tålte 15 tonn trykk uten å knekke.
                  </p>
                  <p>
                    <strong>Materialkostnad:</strong> Nåværende kostnad er 8-16
                    kr per kg tørket tang. Innen 2050 er dette forventet å synke
                    til 2-4 kr per kg. Materialkostnad per produkt (100-500g
                    tang) ligger på 0,8-4 kr per enhet, noe som gjør det
                    økonomisk levedyktig for engangsapplikasjoner.
                  </p>
                </div>
              </div>

              {/* Reflection */}
              <div className="bg-foreground text-background rounded-lg p-8 md:p-12">
                <span className="text-xs uppercase tracking-wide opacity-60">
                  Konklusjon
                </span>
                <h2 className="text-display-sm text-background mt-2 mb-6">
                  Veien videre
                </h2>
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-background/80">
                  "Tang har fascinerende egenskaper, og vi tror det kan brukes i
                  mange ulike sammenhenger. Selv om vi ikke fullt ut løste
                  utfordringen vi satte for oss selv, viser materialets ekstreme
                  hardhet og holdbarhet et reelt potensial for fremtidig
                  utvikling med mer tid og spesialisert ekspertise."
                </p>
              </div>
            </div>

            {/* Desktop sidebar */}
            <CaseSidebar items={caseMetaItems} className="hidden lg:block" />
          </div>
        </div>
      </Section>

      {nextProject && <NextProject project={nextProject} />}
    </Layout>
  );
};

export default Seaweed;
