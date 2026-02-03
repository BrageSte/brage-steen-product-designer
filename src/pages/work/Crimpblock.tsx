import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CaseHero from "@/components/project/CaseHero";
import CaseSidebar from "@/components/project/CaseSidebar";
import NextProject from "@/components/ui/NextProject";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { getProjectBySlug, projects } from "@/content/projects";

const Crimpblock = () => {
  const project = getProjectBySlug("crimpblock");
  const nextProject = projects.find((p) => p.slug === "sorting-guide");

  if (!project) return null;

  const caseMetaItems = [
    { label: "Rolle", value: project.role },
    { label: "År", value: project.year },
    { label: "Type", value: project.category },
    { label: "Verktøy", value: ["Fusion 360", "3D-printing", "Testing"] },
    { label: "Status", value: "Aktiv produksjon" },
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

              {/* CTA Banner */}
              <div className="p-8 bg-foreground text-background rounded-lg">
                <h3 className="text-display-sm mb-4">Se BS Climbing</h3>
                <p className="text-background/80 mb-6">
                  Crimpblock-produktene selges gjennom BS Climbing. Besøk
                  nettbutikken for å se hele sortimentet.
                </p>
                <a
                  href="https://bsclimbing.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors"
                >
                  Se BS Climbing
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Overview */}
              <div className="space-y-6">
                <h2 className="text-display-md">Oversikt</h2>
                <p className="text-body-lg text-muted-foreground">
                  Crimpblock er et eget prosjekt der jeg designer og produserer
                  modulære klatretak ved hjelp av 3D-printing.
                </p>
                <p className="text-body text-muted-foreground">
                  Produktene er designet for hjemmetrening og kan enkelt
                  monteres på en treningsvegg eller dørramme.
                </p>
              </div>

              {/* Design */}
              <div className="space-y-6">
                <h2 className="text-display-md">Design</h2>
                <p className="text-body text-muted-foreground">
                  Takene er designet med fokus på ergonomi og treningseffekt.
                  Ulike profiler og størrelser gjør det mulig å trene spesifikke
                  grep og fingerposisioner.
                </p>
                <ImageWithFallback
                  src="/images/crimpblock/design.jpg"
                  alt="Crimpblock design"
                  aspectRatio="video"
                  className="rounded-lg"
                />
              </div>

              {/* Production */}
              <div className="space-y-6">
                <h2 className="text-display-md">Produksjon</h2>
                <p className="text-body text-muted-foreground">
                  Alle tak produseres med 3D-printing i PETG-plast, som gir god
                  styrke og holdbarhet. Hvert tak etterbehandles for å sikre god
                  overflate og grep.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ImageWithFallback
                    src="/images/crimpblock/production-1.jpg"
                    alt="Produksjonsprosess"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/crimpblock/production-2.jpg"
                    alt="Ferdige produkter"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Reflection */}
              <div className="space-y-6">
                <h2 className="text-display-md">Refleksjon</h2>
                <ul className="space-y-4 text-body text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Å gå fra design til produksjon og salg gir verdifull
                      innsikt i hele produktlivssyklusen
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      3D-printing muliggjør rask iterasjon og små serier uten
                      verktøyinvesteringer
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Brukertesting er essensielt for produkter med fysisk
                      interaksjon
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

export default Crimpblock;
