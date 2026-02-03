import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CaseHero from "@/components/project/CaseHero";
import CaseSidebar from "@/components/project/CaseSidebar";
import NextProject from "@/components/ui/NextProject";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { getProjectBySlug, projects } from "@/content/projects";

const Headset = () => {
  const project = getProjectBySlug("headset");
  const nextProject = projects.find((p) => p.slug === "seaweed");

  if (!project) return null;

  const caseMetaItems = [
    { label: "Rolle", value: "Produktdesigner" },
    { label: "Varighet", value: "4 måneder" },
    { label: "Målmarked", value: "$200–$300" },
    { label: "Produksjon", value: "100 000 enheter" },
    { label: "Materialer", value: ["Polyetylen", "Stål", "Lær"] },
    { label: "Metode", value: "Sprøytestøping" },
    { label: "Verktøy", value: ["Fusion 360", "3D-printing"] },
  ];

  const briefItems = [
    { label: "Varighet", value: "4 måneder" },
    { label: "Målmarked", value: "$200–$300" },
    { label: "Produksjon", value: "100 000 enheter" },
    { label: "Materialer", value: "Polyetylen, stål, lær" },
    { label: "Metode", value: "Sprøytestøping" },
    { label: "Verktøy", value: "Fusion 360, 3D-print" },
  ];

  return (
    <Layout>
      <CaseHero
        title="3D Printed Headset"
        subtitle="Design for industrialisering – et sammenleggbart headset for pendlere og kontorbruk, med fokus på sprøytestøping og masseproduksjon."
        category="Fysisk produkt"
        year="2021"
        role="Produktdesigner"
        coverImage="/images/headset/cover.jpg"
      />

      <Section>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main content */}
            <div className="space-y-20">
              {/* Mobile sidebar */}
              <CaseSidebar items={caseMetaItems} className="lg:hidden" />

              {/* Project Brief */}
              <div className="space-y-6">
                <span className="text-caption">01 — Oversikt</span>
                <h2 className="text-display-md">Prosjektbeskrivelse</h2>
                <p className="text-body-lg text-muted-foreground">
                  Design et pendler- og kontorvennlig headset med fokus på
                  industriell produksjon. Den sammenleggbare designen sikrer
                  portabilitet for reise og daglig bruk.
                </p>
                <p className="text-body text-muted-foreground">
                  <strong>Produksjonshensyn:</strong> Hver komponent er
                  optimalisert for sprøytestøping i plast for å sikre
                  kostnadseffektiv masseproduksjon. Dette inkluderer design av
                  deler med passende utslippsvinkler for enkel utløsning fra
                  former, reduserer produksjonsfeil og slitasje på verktøy.
                </p>

                {/* Brief grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-border mt-8">
                  {briefItems.map((item) => (
                    <div key={item.label}>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideation & Sketches */}
              <div className="space-y-6">
                <span className="text-caption">02 — Idéutvikling</span>
                <h2 className="text-display-md">Skisser og utforskning</h2>
                <p className="text-body text-muted-foreground">
                  Den innledende fasen involverte utforskning av ulike leddtyper
                  og formspråk. Et betydelig fokus ble lagt på å designe
                  headset-koppholderen, med mål om en visuelt distinkt bakdel
                  som kontrasterer med hovedformen.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <ImageWithFallback
                    src="/images/headset/sketch-1.jpg"
                    alt="Konseptskisser"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/headset/sketch-2.jpg"
                    alt="Detaljskisser"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Prototyping */}
              <div className="space-y-6">
                <span className="text-caption">03 — Prototyping</span>
                <h2 className="text-display-md">Vinkler og 3D-printing</h2>
                <p className="text-body text-muted-foreground">
                  Å perfeksjonere vinklene for både estetikk og funksjonalitet
                  var en utfordring, og krevde mange iterasjoner for å oppnå den
                  ideelle passformen. Siden headsetet er designet for
                  sprøytestøping, ble det lagt nøye vekt på utslippsvinkler for
                  å sikre jevn utløsning fra former.
                </p>
                <p className="text-body text-muted-foreground">
                  Lean prototyping-metoder var essensielle – 3D-printing
                  muliggjorde rask testing av variasjoner for å validere komfort
                  og ergonomi før designet ble ferdigstilt.
                </p>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <ImageWithFallback
                    src="/images/headset/prototype-1.jpg"
                    alt="Vinkelvarianter"
                    aspectRatio="square"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/headset/prototype-2.jpg"
                    alt="Hodebøyle-iterasjoner"
                    aspectRatio="square"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/headset/prototype-3.jpg"
                    alt="Ørekopp-prototyper"
                    aspectRatio="square"
                    className="rounded-lg"
                  />
                </div>

                <ImageWithFallback
                  src="/images/headset/complete-prototype.jpg"
                  alt="Komplett prototype"
                  aspectRatio="video"
                  className="rounded-lg mt-6"
                />
              </div>

              {/* 3D Model / Sketchfab */}
              <div className="bg-foreground text-background rounded-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  <span className="text-xs uppercase tracking-wide opacity-60">
                    04 — 3D-modell
                  </span>
                  <h2 className="text-display-md text-background mt-2 mb-4">
                    Interaktiv modell
                  </h2>
                  <p className="text-background/70 mb-6">
                    Utforsk den komplette 3D-modellen med alle komponenter.
                    Designet har modulær konstruksjon for enkel montering og
                    vedlikehold.
                  </p>
                </div>

                {/* Sketchfab embed */}
                <div className="aspect-video bg-background/10">
                  <iframe
                    title="3D Printed Headset Assembly"
                    className="w-full h-full"
                    allowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/dd8b8b2a1f0645b6b65a4f19227cc69d/embed"
                  />
                </div>

                <div className="p-4 text-center">
                  <a
                    href="https://sketchfab.com/3d-models/assembly-2-dd8b8b2a1f0645b6b65a4f19227cc69d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/60 hover:text-background transition-colors inline-flex items-center gap-1"
                  >
                    Se på Sketchfab
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Final Design */}
              <div className="space-y-6">
                <span className="text-caption">05 — Endelig design</span>
                <h2 className="text-display-md">Produksjonsklart design</h2>
                <p className="text-body text-muted-foreground">
                  Det endelige headsetet balanserer visuell identitet med
                  ergonomi og produksjonsvennlighet. Alle deler er designet for
                  sprøytestøping med 2% utslippsvinkler gjennom hele designet.
                </p>
              </div>

              {/* Full width renders */}
              <div className="-mx-6 md:-mx-8 lg:mx-0">
                <div className="bg-foreground">
                  <ImageWithFallback
                    src="/images/headset/final-render.jpg"
                    alt="Endelig headset-design"
                    aspectRatio="video"
                  />
                </div>
                <div className="grid grid-cols-2 bg-foreground">
                  <ImageWithFallback
                    src="/images/headset/detail-1.jpg"
                    alt="Frontvisning"
                    aspectRatio="square"
                  />
                  <ImageWithFallback
                    src="/images/headset/detail-2.jpg"
                    alt="Funksjonsdetaljer"
                    aspectRatio="square"
                  />
                </div>
              </div>

              {/* Technical Drawings */}
              <div className="space-y-6">
                <span className="text-caption">06 — Teknisk</span>
                <h2 className="text-display-md">Produksjonstegninger</h2>
                <p className="text-body text-muted-foreground">
                  Detaljerte tekniske tegninger med dimensjoner og toleranser
                  for alle komponenter. Designet for sprøytestøping med 2%
                  utslippsvinkler gjennom hele.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <ImageWithFallback
                    src="/images/headset/technical-exploded.jpg"
                    alt="Eksplodert monteringsvisning"
                    aspectRatio="wide"
                    className="rounded-lg bg-background border border-border"
                  />
                  <ImageWithFallback
                    src="/images/headset/technical-slider.jpg"
                    alt="Glidemekanisme"
                    aspectRatio="wide"
                    className="rounded-lg bg-background border border-border"
                  />
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
                      <strong>Fysisk prototyping avslører det CAD ikke kan</strong>{" "}
                      – spesielt for produkter som skal føles godt over tid
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      <strong>Produksjonskrav former designet</strong> – å
                      designe for sprøytestøping er ikke en begrensning, det er
                      et designparameter
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      <strong>Forenkling er en ferdighet</strong> – de beste
                      løsningene er ofte enklere enn de første ideene
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

export default Headset;
