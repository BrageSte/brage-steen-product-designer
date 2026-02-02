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
    { label: "Rolle", value: project.role },
    { label: "År", value: project.year },
    { label: "Type", value: project.category },
    { label: "Samarbeidspartnere", value: ["IKEA", "Grønt Punkt Norge"] },
    {
      label: "Leveranser",
      value: ["Tjenestedesign", "Brukerreise", "Prototype", "Gigamap"],
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
                  Sorteringsguiden er et samarbeidsprosjekt med IKEA og Grønt
                  Punkt Norge som gjør kildesortering enklere gjennom en
                  brukervennlig digital løsning.
                </p>
                <p className="text-body text-muted-foreground">
                  Prosjektet kombinerer tjenestedesign, brukerinnsikt og
                  prototyping for å skape en guide som hjelper folk å sortere
                  riktig – uansett hvor i Norge de bor.
                </p>
              </div>

              {/* Problem */}
              <div className="space-y-6">
                <h2 className="text-display-md">Problemet</h2>
                <p className="text-body text-muted-foreground">
                  Kildesortering er forvirrende. Reglene varierer fra kommune
                  til kommune, og mange vet ikke hvor de skal kaste hva. Dette
                  fører til feilsortering, frustrasjon, og at verdifulle
                  ressurser går tapt.
                </p>
                <ImageWithFallback
                  src="/images/sorting-guide/problem.jpg"
                  alt="Illustrasjon av sorteringsproblemet"
                  aspectRatio="video"
                  className="rounded-lg"
                />
              </div>

              {/* Process */}
              <div className="space-y-6">
                <h2 className="text-display-md">Prosess</h2>
                <p className="text-body text-muted-foreground">
                  Vi startet med brukerundersøkelser for å forstå hvor folk
                  sliter mest. Deretter kartla vi hele avfallssystemet gjennom
                  en gigamap som visualiserer kompleksiteten i
                  sorteringslandskapet.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ImageWithFallback
                    src="/images/sorting-guide/research.jpg"
                    alt="Brukerundersøkelser"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                  <ImageWithFallback
                    src="/images/sorting-guide/mapping.jpg"
                    alt="Systemkartlegging"
                    aspectRatio="wide"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Links to subpages */}
              <div className="space-y-6">
                <h2 className="text-display-md">Utforsk mer</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    to="/work/sorting-guide/prototype"
                    className="group flex items-center justify-between p-6 bg-card rounded-lg hover:bg-accent transition-colors"
                  >
                    <div>
                      <h3 className="font-medium mb-1">Prototype</h3>
                      <p className="text-sm text-muted-foreground">
                        Interaktiv prototype av løsningen
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
                <h2 className="text-display-md">Løsningen</h2>
                <p className="text-body text-muted-foreground">
                  Sorteringsguiden er en digital tjeneste som gir brukeren
                  stedsspesifikk veiledning. Ved å skrive inn postnummer får du
                  skreddersydd informasjon om hva som kan sorteres hvor i din
                  kommune.
                </p>
                <ImageWithFallback
                  src="/images/sorting-guide/solution.jpg"
                  alt="Løsningen"
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
                      Komplekse systemer krever visuell kartlegging før man kan
                      forenkle
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Brukerinnsikt avslører at folk vil gjøre rett, men
                      mangler verktøyene
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground">•</span>
                    <span>
                      Lokalt tilpasset informasjon er nøkkelen til adopsjon
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
