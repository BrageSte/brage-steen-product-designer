import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CaseHero from "@/components/project/CaseHero";
import CaseSidebar from "@/components/project/CaseSidebar";
import NextProject from "@/components/ui/NextProject";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { getProjectBySlug, projects } from "@/content/projects";

const SortingGuide = () => {
  const project = getProjectBySlug("sorting-guide");
  const nextProject = projects.find((p) => p.slug === "avfallsportalen");

  if (!project) return null;

  const caseMetaItems = [
    { label: "Rolle", value: "Tjenestedesigner" },
    { label: "Varighet", value: "Jan – Mai 2020" },
    { label: "Partner", value: "IKEA Norway" },
    { label: "Institusjon", value: "OsloMet University" },
    {
      label: "Metoder",
      value: [
        "Hjemmebesøk",
        "Workshops",
        "Feltundersøkelser",
        "Brukerintervjuer",
        "Design probes",
        "Journey mapping",
      ],
    },
    {
      label: "Leveranser",
      value: ["Tjenestedesign", "Prototype", "Gigamap", "Brukerreise"],
    },
  ];

  const insights = [
    {
      title: "Tilgjengelighet",
      description:
        "Plasseringen av kildesorteringsbeholdere påvirker direkte sorteringsgraden. Mer plass og praktisk plassering fører til økt resirkulering. Plassbegrensninger i hjemmet begrenser hvor folk kan sette sorteringsløsninger.",
    },
    {
      title: "Kunnskap",
      description:
        "Folk mangler tilstrekkelig kunnskap til å sortere effektivt. Kompleksiteten i systemet og variasjonen av materialer forvirrer og fremmedgjør folk, og distanserer dem fra resirkureringsmålet.",
    },
    {
      title: "Tillit",
      description:
        "Personlige barrierer inkluderer mangel på tillit til systemet. Når folk ikke forstår systemet, tror de ikke på det. Det blir vanskelig å se hvordan individuelle handlinger gjør en forskjell.",
    },
  ];

  return (
    <Layout>
      <CaseHero
        title="The Sorting Guide"
        subtitle="Et tjenestedesignprosjekt som hjelper norske husholdninger å sortere riktig gjennom personlig veiledning og smarte produktanbefalinger."
        category="Service Design"
        year="2020"
        role="Tjenestedesigner"
        coverImage="/images/sorting-guide/cover.jpg"
      />

      <Section>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main content */}
            <div className="space-y-20">
              {/* Mobile sidebar */}
              <CaseSidebar items={caseMetaItems} className="lg:hidden" />

              {/* Design Question */}
              <div className="bg-foreground text-background rounded-lg p-8 md:p-12">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
                  "Hvordan kan vi forbedre husholdningens kildesortering ved å
                  veilede folk som leter etter løsninger, til informasjon og
                  tilbud basert på deres behov, som fører til mindre restavfall?"
                </p>
              </div>

              {/* Problem */}
              <div className="space-y-6">
                <span className="text-caption">Utfordringen</span>
                <h2 className="text-display-md">Et system under press</h2>
                <p className="text-body-lg text-muted-foreground">
                  I det komplekse systemet av systemer som er resirkulering,
                  hviler et stort ansvar på husholdningens skuldre – den første
                  linjen av resirkulering.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <p className="text-body text-muted-foreground mb-6">
                      De fleste husholdninger har ikke tilstrekkelig kunnskap om
                      resirkulering og er ikke utstyrt med ressursene som trengs
                      for å sortere riktig. Når sorteringsfeil gjøres på
                      husholdningsnivå, skaper det store utfordringer for hele
                      resirkuleringsprosessen.
                    </p>
                    <p className="text-body text-muted-foreground">
                      Ulike kommuner har ulike systemer, noe som gjør det
                      forvirrende for folk som flytter eller reiser.
                      Kompleksiteten fremmedgjør folk fra å delta fullt ut i
                      resirkuleringsmålet.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-6">
                      <p className="text-4xl font-medium text-foreground mb-1">
                        60%
                      </p>
                      <p className="text-sm text-muted-foreground">
                        av husholdningsavfall blir ikke resirkulert
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-6">
                      <p className="text-4xl font-medium text-foreground mb-1">
                        #2
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Norges avfall per innbygger i Europa
                      </p>
                    </div>
                  </div>
                </div>

                <ImageWithFallback
                  src="/images/sorting-guide/haraldrud.jpg"
                  alt="Haraldrud sorteringsanlegg i Oslo"
                  aspectRatio="video"
                  className="rounded-lg mt-8"
                />
              </div>

              {/* Research */}
              <div className="space-y-6">
                <span className="text-caption">Research</span>
                <h2 className="text-display-md">Forstå kompleksiteten</h2>
                <p className="text-body-lg text-muted-foreground">
                  Researchen ble gjennomført med en kvalitativ tilnærming. Vi
                  brukte observasjon, intervjuer, design probes og
                  skrivebordsforskning for å få empati og forstå kompleksiteten
                  i resirkureringsproblemet.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Hjemmebesøk",
                    "Workshops",
                    "Feltundersøkelser",
                    "Brukerintervjuer",
                    "Design probes",
                    "Journey mapping",
                  ].map((method) => (
                    <span
                      key={method}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {method}
                    </span>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-card rounded-lg p-6">
                    <p className="text-4xl font-medium text-foreground mb-1">
                      67+
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Workshop-deltakere
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-6">
                    <p className="text-4xl font-medium text-foreground mb-1">
                      5
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Hjemmebesøk gjennomført
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <ImageWithFallback
                    src="/images/sorting-guide/workshop.jpg"
                    alt="Co-creation workshop"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/sorting-guide/ikea-research.jpg"
                    alt="Feltundersøkelse hos IKEA"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/sorting-guide/journey-mapping.jpg"
                    alt="Journey mapping"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Key Insights */}
              <div className="space-y-6">
                <span className="text-caption">Nøkkelinnsikter</span>
                <h2 className="text-display-md">Tre barrierer for sortering</h2>
                <p className="text-body-lg text-muted-foreground">
                  Etter å ha kartlagt innsikter fra research, identifiserte vi
                  tre kritiske barrierer som hindrer husholdninger i å sortere
                  effektivt.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {insights.map((insight) => (
                    <div
                      key={insight.title}
                      className="bg-card rounded-lg p-6 space-y-3"
                    >
                      <h3 className="text-lg font-medium">{insight.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {insight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="space-y-6">
                <span className="text-caption">Designprosess</span>
                <h2 className="text-display-md">Fra research til løsning</h2>
                <p className="text-body-lg text-muted-foreground">
                  Vår iterative designprosess gikk gjennom fire
                  kjerneaktiviteter, som kontinuerlig overlappet for å
                  forbedre vår forståelse og løsning.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {[
                    {
                      num: "1",
                      title: "Research",
                      desc: "Kvalitative metoder for empati og innsikt",
                    },
                    {
                      num: "2",
                      title: "Idéutvikling",
                      desc: "40+ idéer generert og evaluert",
                    },
                    {
                      num: "3",
                      title: "Prototyping",
                      desc: "Fra papirskisser til interaktiv prototype",
                    },
                    {
                      num: "4",
                      title: "Implementering",
                      desc: "Brukertesting og validering med partnere",
                    },
                  ].map((step) => (
                    <div
                      key={step.num}
                      className="bg-card rounded-lg p-5 relative"
                    >
                      <span className="text-3xl font-medium text-muted-foreground/30 block mb-2">
                        {step.num}
                      </span>
                      <h4 className="font-medium mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links to subpages */}
              <div className="space-y-6">
                <span className="text-caption">Utforsk mer</span>
                <h2 className="text-display-md">Prosjektleveranser</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    to="/work/sorting-guide/prototype"
                    className="group flex items-center justify-between p-6 bg-card rounded-lg hover:bg-accent transition-colors"
                  >
                    <div>
                      <h3 className="font-medium mb-1">Interaktiv prototype</h3>
                      <p className="text-sm text-muted-foreground">
                        Adobe XD prototype av løsningen
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-foreground transition-colors"
                    />
                  </Link>
                  <Link
                    to="/work/sorting-guide/gigamap"
                    className="group flex items-center justify-between p-6 bg-card rounded-lg hover:bg-accent transition-colors"
                  >
                    <div>
                      <h3 className="font-medium mb-1">Gigamap</h3>
                      <p className="text-sm text-muted-foreground">
                        Systemkartlegging av avfallslandskapet
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-foreground transition-colors"
                    />
                  </Link>
                </div>
              </div>

              {/* Solution */}
              <div className="space-y-6">
                <span className="text-caption">Løsningen</span>
                <h2 className="text-display-md">Kildesorteringsguiden</h2>
                <p className="text-body-lg text-muted-foreground">
                  En digital tjeneste som gir brukeren stedsspesifikk
                  veiledning. Ved å skrive inn postnummer får du skreddersydd
                  informasjon om hva som kan sorteres hvor i din kommune, samt
                  produktanbefalinger tilpasset din bolig.
                </p>
                <ImageWithFallback
                  src="/images/sorting-guide/solution-mockup.jpg"
                  alt="Kildesorteringsguiden løsning"
                  aspectRatio="video"
                  className="rounded-lg"
                />
              </div>

              {/* Team */}
              <div className="space-y-6">
                <span className="text-caption">Samarbeid</span>
                <h2 className="text-display-md">Prosjektpartnere</h2>
                <p className="text-body text-muted-foreground">
                  Prosjektet ble gjennomført i samarbeid med IKEA Norway og
                  støttet av OsloMet University. Teamet besto av tre
                  tjenestedesignstudenter.
                </p>
                <div className="flex flex-wrap gap-8 mt-4">
                  <span className="text-xl font-medium text-muted-foreground/50">
                    IKEA
                  </span>
                  <span className="text-xl font-medium text-muted-foreground/50">
                    Grønt Punkt
                  </span>
                  <span className="text-xl font-medium text-muted-foreground/50">
                    OsloMet
                  </span>
                </div>
              </div>

              {/* Reflection */}
              <div className="space-y-6">
                <span className="text-caption">Refleksjon</span>
                <h2 className="text-display-md">Lærdommer</h2>
                <ul className="space-y-4 text-body text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Komplekse systemer krever visuell kartlegging før man kan
                      forenkle – gigamappen var essensiell for å forstå
                      helheten
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Brukerinnsikt avslører at folk vil gjøre rett, men
                      mangler verktøyene og kunnskapen
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Lokalt tilpasset informasjon er nøkkelen til adopsjon –
                      sorteringsregler varierer dramatisk mellom kommuner
                    </span>
                  </li>
                </ul>
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

export default SortingGuide;
