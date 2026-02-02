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
    { label: "Rolle", value: project.role },
    { label: "År", value: project.year },
    { label: "Type", value: project.category },
    { label: "Verktøy", value: ["Fusion 360", "3D-printing"] },
    {
      label: "Leveranser",
      value: ["CAD-modell", "Fysiske prototyper", "Tekniske tegninger"],
    },
  ];

  return (
    <Layout>
      <CaseHero
        title={project.title}
        subtitle={project.description}
        category={project.category}
        year={project.year}
        role={project.role}
        coverImage={project.coverImage}
      />

      <Section>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main content */}
            <div className="space-y-16">
              {/* Mobile sidebar */}
              <CaseSidebar items={caseMetaItems} className="lg:hidden" />

              {/* Overview */}
              <div className="space-y-6">
                <h2 className="text-display-md">Oversikt</h2>
                <p className="text-body-lg text-muted-foreground">
                  Dette prosjektet utforsker design av et sammenleggbart headset
                  for pendlere og kontorbruk, med fokus på industriell
                  produksjon.
                </p>
                <p className="text-body text-muted-foreground">
                  Gjennom rask prototyping og iterasjon testet jeg hvordan form,
                  passform og ergonomi fungerer i virkeligheten – ikke bare på
                  skjermen.
                </p>
              </div>

              {/* Problem */}
              <div className="space-y-6">
                <h2 className="text-display-md">Problemet</h2>
                <p className="text-body text-muted-foreground">
                  Headset må balansere flere motstridende krav: komfort,
                  stabilitet, vekt og trykkfordeling. Små beslutninger om form
                  har stor innvirkning på langvarig bruk.
                </p>
                <ImageWithFallback
                  src="/images/headset/sketches.jpg"
                  alt="Tidlige skisser"
                  aspectRatio="video"
                  className="rounded-lg"
                />
              </div>

              {/* Design Approach */}
              <div className="space-y-6">
                <h2 className="text-display-md">Designtilnærming</h2>
                <p className="text-body text-muted-foreground">
                  Prosessen startet med skissering og utforskning av ulike
                  formspråk. I CAD fokuserte jeg på kontaktpunktene: hodebøyle,
                  øreputer og trykksonene mellom dem.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ImageWithFallback
                    src="/images/headset/cad-1.jpg"
                    alt="CAD-modellering"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/headset/cad-2.jpg"
                    alt="CAD-detaljer"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Prototyping */}
              <div className="space-y-6">
                <h2 className="text-display-md">Prototyping og iterasjon</h2>
                <p className="text-body text-muted-foreground">
                  Fysisk prototyping avslørte problemer som ikke var synlige på
                  skjermen. Jeg itererte på hodebøylens geometri og ørekoppenes
                  form basert på passform, balanse og trykk.
                </p>
                <ImageWithFallback
                  src="/images/headset/prototype.jpg"
                  alt="3D-printet prototype"
                  aspectRatio="video"
                  className="rounded-lg"
                />
              </div>

              {/* Final Design */}
              <div className="space-y-6">
                <h2 className="text-display-md">Endelig design</h2>
                <p className="text-body text-muted-foreground">
                  Det endelige headsetet balanserer visuell identitet med
                  ergonomi og produksjonsvennlighet. Alle deler er designet for
                  sprøytestøping i polyetylen-plast.
                </p>
                <ImageWithFallback
                  src="/images/headset/final.jpg"
                  alt="Endelig design"
                  aspectRatio="video"
                  className="rounded-lg"
                />
              </div>

              {/* 3D Model CTA */}
              {project.links.model3d && (
                <div className="p-8 bg-card rounded-lg">
                  <h3 className="text-display-sm mb-4">Utforsk 3D-modellen</h3>
                  <p className="text-body text-muted-foreground mb-6">
                    Se den interaktive 3D-modellen i Autodesk Fusion 360.
                  </p>
                  <a
                    href={project.links.model3d}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
                  >
                    Åpne 3D-modell
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              )}

              {/* Reflection */}
              <div className="space-y-6">
                <h2 className="text-display-md">Refleksjon</h2>
                <ul className="space-y-4 text-body text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Fysisk prototyping avslører det CAD ikke kan – spesielt
                      for produkter som skal føles godt over tid
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Produksjonskrav former designet – å designe for
                      sprøytestøping er et designparameter
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Forenkling er en ferdighet – de beste løsningene er ofte
                      enklere enn de første ideene
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
