import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CaseHero from "@/components/project/CaseHero";
import CaseSidebar from "@/components/project/CaseSidebar";
import NextProject from "@/components/ui/NextProject";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { getProjectBySlug, projects } from "@/content/projects";
import AvfallsportalenDemo from "./avfallsportalen/AvfallsportalenDemo";
import GigamapViewer from "./avfallsportalen/GigamapViewer";
import { Map, Sparkles } from "lucide-react";

const Avfallsportalen = () => {
  const [showGigamap, setShowGigamap] = useState(false);
  const project = getProjectBySlug("avfallsportalen");
  const nextProject = projects.find((p) => p.slug === "headset");

  if (!project) return null;

  const caseMetaItems = [
    { label: "Rolle", value: project.role },
    { label: "År", value: project.year },
    { label: "Type", value: project.category },
    { label: "Leveranser", value: ["Tjenestedesign", "UX/UI", "Research", "Gigamap", "Prototype"] },
  ];

  return (
    <Layout>
      <CaseHero
        title={project.title}
        subtitle="En interaktiv læringsportal om avfallshåndtering og gjenvinning i Norge. Basert på omfattende research presentert gjennom en gigamap."
        category={project.category}
        year={project.year}
        role={project.role}
        coverImage={project.coverImage}
      />

      <Section>
        <div className="container-wide">
          {/* Project info at top (scrolls with content) */}
          <CaseSidebar items={caseMetaItems} />
          
          {/* Full-width content */}
          <div className="space-y-16">
            {/* Overview */}
            <div className="space-y-6">
              <h2 className="text-display-md">Oversikt</h2>
              <p className="text-body-lg text-muted-foreground">
                Avfallsportalen er et bachelorprosjekt som utforsker hvordan Norge 
                håndterer avfall – fra globale utfordringer til lokale løsninger.
              </p>
              <p className="text-body text-muted-foreground">
                Prosjektet kombinerer dyptgående research med interaktiv formidling. 
                Resultatet er en timeline-basert reise gjennom avfallssystemet, 
                en quiz for å teste kunnskapen din, og et omfattende gigamap som 
                visualiserer hele systemet.
              </p>
            </div>

            {/* Gigamap Section */}
            <div className="space-y-6">
              <h2 className="text-display-md">Gigamap</h2>
              <p className="text-body text-muted-foreground">
                Gigamappet er kjernen i prosjektet – en visuell kartlegging av hele 
                avfallssystemet i Norge. Det viser sammenhengene mellom globale 
                utfordringer, EU-direktiver, norske mål, og hvordan det påvirker 
                deg hjemme.
              </p>
              
              {/* Gigamap preview */}
              <div 
                onClick={() => setShowGigamap(true)}
                className="relative group cursor-pointer rounded-xl overflow-hidden border border-border"
              >
                <ImageWithFallback
                  src="/images/sorting-guide/gigamap-full.svg"
                  alt="Gigamap - Avfallssystemet i Norge"
                  aspectRatio="video"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold">
                    <Map size={20} />
                    Åpne i fullskjerm
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Hovedseksjoner</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Datapunkter</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <div className="text-2xl font-bold text-primary">7</div>
                  <div className="text-sm text-muted-foreground">Kommuner analysert</div>
                </div>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <h2 className="text-display-md">Interaktiv Demo</h2>
                <span className="flex items-center gap-1 text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <Sparkles size={12} />
                  Prøv selv
                </span>
              </div>
              <p className="text-body text-muted-foreground">
                Basert på dataen fra gigamappet har jeg laget en interaktiv portal 
                med en timeline-reise gjennom avfallssystemet og en quiz for å teste 
                kunnskapen din.
              </p>
              
              <AvfallsportalenDemo />
            </div>

            {/* Key Insights */}
            <div className="space-y-6">
              <h2 className="text-display-md">Nøkkelinnsikter</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="text-3xl mb-3">🌍</div>
                  <h3 className="font-semibold mb-2">Globalt problem</h3>
                  <p className="text-sm text-muted-foreground">
                    Vi bruker 1.75 jordkloder verdt av ressurser årlig. 
                    Earth Overshoot Day kommer tidligere hvert år.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="text-3xl mb-3">🇳🇴</div>
                  <h3 className="font-semibold mb-2">Norge skiller seg ut</h3>
                  <p className="text-sm text-muted-foreground">
                    739 kg avfall per person/år – nest høyest i Europa. 
                    Kun 39% materialgjenvinnes.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="text-3xl mb-3">🏭</div>
                  <h3 className="font-semibold mb-2">Systemene varierer</h3>
                  <p className="text-sm text-muted-foreground">
                    Sentralisert sortering har 86% effektivitet, 
                    mens Optibag kun oppnår 19%.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-semibold mb-2">EU-mål 2035</h3>
                  <p className="text-sm text-muted-foreground">
                    65% materialgjenvinning er målet. 
                    Med riktig teknologi er det oppnåelig.
                  </p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="space-y-6">
              <h2 className="text-display-md">Prosess</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Research & Datainnsamling</h3>
                    <p className="text-sm text-muted-foreground">
                      Omfattende research av EU-direktiver, norske lover, kommunale systemer, 
                      og brukeratferd. Intervjuer med renovasjonsselskaper og brukere.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Gigamap-utvikling</h3>
                    <p className="text-sm text-muted-foreground">
                      Visualisering av alle sammenhenger i avfallssystemet. 
                      Iterativ prosess med feedback fra veiledere og brukere.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Interaktiv Prototype</h3>
                    <p className="text-sm text-muted-foreground">
                      Utvikling av interaktiv portal med timeline, quiz og 
                      kommunesammenligning for å gjøre dataen tilgjengelig.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection */}
            <div className="space-y-6">
              <h2 className="text-display-md">Refleksjon</h2>
              <ul className="space-y-4 text-body text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>
                    Gigamapping er et kraftig verktøy for å visualisere komplekse systemer
                    og finne sammenhenger som ikke er åpenbare
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>
                    Interaktive formater gjør tung research tilgjengelig og engasjerende
                    for et bredere publikum
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>
                    Teknologivalg i avfallssystemet har enorm påvirkning på gjenvinningsgrad –
                    sentralisert sortering viser hva som er mulig
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {nextProject && <NextProject project={nextProject} />}
      
      {/* Gigamap fullscreen viewer */}
      <GigamapViewer isOpen={showGigamap} onClose={() => setShowGigamap(false)} />
    </Layout>
  );
};

export default Avfallsportalen;
