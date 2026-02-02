import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CaseHero from "@/components/project/CaseHero";
import CaseSidebar from "@/components/project/CaseSidebar";
import NextProject from "@/components/ui/NextProject";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { getProjectBySlug, projects } from "@/content/projects";

const Avfallsportalen = () => {
  const project = getProjectBySlug("avfallsportalen");
  const nextProject = projects.find((p) => p.slug === "headset");

  if (!project) return null;

  const caseMetaItems = [
    { label: "Rolle", value: project.role },
    { label: "År", value: project.year },
    { label: "Type", value: project.category },
    { label: "Leveranser", value: ["Tjenestedesign", "UX/UI", "Brukerreise"] },
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
                  Avfallsportalen er et redesign av en kommunal avfallstjeneste
                  med fokus på brukervennlighet og tilgjengelighet.
                </p>
                <p className="text-body text-muted-foreground">
                  Prosjektet utforsker hvordan digitale tjenester kan gjøre
                  hverdagen enklere for innbyggere som trenger å håndtere avfall
                  og gjenvinning.
                </p>
              </div>

              {/* Problem */}
              <div className="space-y-6">
                <h2 className="text-display-md">Utfordringen</h2>
                <p className="text-body text-muted-foreground">
                  Eksisterende løsninger var fragmenterte og vanskelige å
                  navigere. Brukere måtte ofte besøke flere nettsider for å
                  finne svar på enkle spørsmål om avfallshåndtering.
                </p>
                <ImageWithFallback
                  src="/images/avfallsportalen/problem.jpg"
                  alt="Utfordringene med eksisterende løsning"
                  aspectRatio="video"
                  className="rounded-lg"
                />
              </div>

              {/* Solution */}
              <div className="space-y-6">
                <h2 className="text-display-md">Løsningen</h2>
                <p className="text-body text-muted-foreground">
                  En samlet portal som gir innbyggere enkel tilgang til all
                  informasjon om avfallshåndtering i kommunen – fra
                  hentedatoer til sorteringsveiledning.
                </p>
                <ImageWithFallback
                  src="/images/avfallsportalen/solution.jpg"
                  alt="Den nye løsningen"
                  aspectRatio="video"
                  className="rounded-lg"
                />
              </div>

              {/* Reflection */}
              <div className="space-y-6">
                <h2 className="text-display-md">Refleksjon</h2>
                <ul className="space-y-4 text-body text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Offentlige tjenester har stort forbedringspotensial
                      gjennom brukersentrert design
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Enkel tilgang til informasjon reduserer frustrasjon og
                      øker etterlevelse
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

export default Avfallsportalen;
