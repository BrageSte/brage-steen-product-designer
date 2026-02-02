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
    { label: "Rolle", value: project.role },
    { label: "År", value: project.year },
    { label: "Type", value: project.category },
    { label: "Leveranser", value: ["Materialutforskning", "Prototyper"] },
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
                  Seaweed-prosjektet undersøker potensialet i tang som
                  råmateriale for produktdesign.
                </p>
                <p className="text-body text-muted-foreground">
                  Gjennom eksperimentering med ulike bearbeidingsmetoder
                  utforsket jeg materialets egenskaper og muligheter for
                  bærekraftig produktutvikling.
                </p>
              </div>

              {/* Material exploration */}
              <div className="space-y-6">
                <h2 className="text-display-md">Materialutforskning</h2>
                <p className="text-body text-muted-foreground">
                  Tang har unike egenskaper som gjør det interessant for
                  produktdesign: det er fornybart, biologisk nedbrytbart, og kan
                  bearbeides på flere måter.
                </p>
                <ImageWithFallback
                  src="/images/seaweed/material.jpg"
                  alt="Materialutforskning"
                  aspectRatio="video"
                  className="rounded-lg"
                />
              </div>

              {/* Process */}
              <div className="space-y-6">
                <h2 className="text-display-md">Prosess</h2>
                <p className="text-body text-muted-foreground">
                  Prosjektet innebar innsamling, tørking, maling og forming av
                  tang til ulike former og strukturer. Hver metode ga ulike
                  resultater i tekstur, styrke og utseende.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ImageWithFallback
                    src="/images/seaweed/process-1.jpg"
                    alt="Bearbeidingsprosess"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/seaweed/process-2.jpg"
                    alt="Resultater"
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
                      Naturlige materialer krever en annen tilnærming enn
                      industrielle
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Eksperimentering avdekker muligheter som teori ikke kan
                      forutse
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Bærekraft handler like mye om materialvalg som om
                      produksjonsmetode
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

export default Seaweed;
