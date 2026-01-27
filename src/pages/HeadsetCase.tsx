import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { ArrowLeft, ChevronDown, Lightbulb, Wrench, Target, ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const HeadsetCase = () => {
  const [summaryOpen, setSummaryOpen] = useState(false);

  const caseData = {
    role: "Product Designer",
    duration: "4 måneder",
    type: "Fysisk produkt / Prototyping",
    tools: ["Fusion 360", "3D-printing", "Skissering"],
    deliverables: ["CAD-modell", "Fysiske prototyper", "Tekniske tegninger"],
  };

  const contributions = [
    "Konsept- og formutvikling",
    "Ergonomisk utforskning",
    "CAD-modellering i Fusion 360",
    "Prototyping og iterasjon med 3D-printing",
  ];

  const reflections = [
    {
      title: "Fysisk prototyping avslører det CAD ikke kan",
      description: "Spesielt for produkter som skal føles godt over tid – komfort og balanse må oppleves, ikke bare visualiseres.",
    },
    {
      title: "Produksjonskrav former designet",
      description: "Å designe for sprøytestøping er ikke en begrensning, det er et designparameter som driver kreative løsninger.",
    },
    {
      title: "Forenkling er en ferdighet",
      description: "De beste løsningene er ofte enklere enn de første ideene. Det opprinnelige svivel-leddet ble erstattet med en robust, produksjonsvennlig mekanisme.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing pb-8">
        <div className="container-wide">
          <Button 
            to="/prosjekter" 
            variant="ghost" 
            className="mb-8 -ml-2 opacity-0 animate-fade-in"
          >
            <ArrowLeft size={16} />
            Alle prosjekter
          </Button>

          {/* Hero Image */}
          <div className="aspect-[21/9] bg-muted rounded-xl mb-12 flex items-center justify-center text-muted-foreground opacity-0 animate-fade-in">
            <div className="text-center">
              <p className="text-lg font-medium">Hero Image</p>
              <p className="text-sm">3D-Printed Headset – hovedvisualisering</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr,320px] gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="space-y-6 opacity-0 animate-fade-in-up">
              <span className="tag">Fysisk produkt</span>
              <h1 className="text-display-lg">3D-Printed Headset Concept</h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl">
                Utforskning av ergonomi, form og produksjonsdesign gjennom et fullskala fysisk produkt
              </p>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {caseData.role}
                </span>
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {caseData.duration}
                </span>
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {caseData.type}
                </span>
              </div>
            </div>

            {/* Sticky Sidebar - Desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-card border border-border rounded-xl p-6 space-y-6">
                <h3 className="font-display font-semibold text-lg">Case summary</h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-caption block mb-1">Rolle</span>
                    <p className="text-body-sm">{caseData.role}</p>
                  </div>
                  <div>
                    <span className="text-caption block mb-1">Varighet</span>
                    <p className="text-body-sm">{caseData.duration}</p>
                  </div>
                  <div>
                    <span className="text-caption block mb-1">Type</span>
                    <p className="text-body-sm">{caseData.type}</p>
                  </div>
                  <div>
                    <span className="text-caption block mb-1">Verktøy</span>
                    <p className="text-body-sm">{caseData.tools.join(", ")}</p>
                  </div>
                  <div>
                    <span className="text-caption block mb-1">Leveranser</span>
                    <ul className="text-body-sm space-y-1">
                      {caseData.deliverables.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Accordion Summary */}
            <div className="lg:hidden">
              <button
                onClick={() => setSummaryOpen(!summaryOpen)}
                className="w-full flex items-center justify-between bg-card border border-border rounded-xl p-4"
              >
                <span className="font-display font-semibold">Case summary</span>
                <ChevronDown 
                  size={20} 
                  className={cn(
                    "transition-transform duration-200",
                    summaryOpen && "rotate-180"
                  )} 
                />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                summaryOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              )}>
                <div className="bg-card border border-border rounded-xl p-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-caption block mb-1">Rolle</span>
                      <p className="text-body-sm">{caseData.role}</p>
                    </div>
                    <div>
                      <span className="text-caption block mb-1">Varighet</span>
                      <p className="text-body-sm">{caseData.duration}</p>
                    </div>
                    <div>
                      <span className="text-caption block mb-1">Type</span>
                      <p className="text-body-sm">{caseData.type}</p>
                    </div>
                    <div>
                      <span className="text-caption block mb-1">Verktøy</span>
                      <p className="text-body-sm">{caseData.tools.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <article className="container-narrow">
        <div className="space-y-20">
          
          {/* Overview */}
          <section className="opacity-0 animate-fade-in-up stagger-1">
            <h2 className="text-display-md mb-6">Oversikt</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Dette prosjektet utforsker design av et sammenleggbart headset for pendlere og kontorbruk, 
              med fokus på industriell produksjon. Gjennom rask prototyping og iterasjon testet jeg hvordan 
              form, passform og ergonomi fungerer i virkeligheten – ikke bare på skjermen. Målet var å designe 
              et produkt klart for sprøytestøping, med alle de begrensningene og mulighetene det medfører.
            </p>
            
            <div className="bg-secondary/50 rounded-xl p-6">
              <h3 className="font-display font-semibold mb-4">Mitt bidrag</h3>
              <ul className="space-y-2">
                {contributions.map((item, index) => (
                  <li key={index} className="flex gap-3 text-body text-muted-foreground">
                    <span className="text-accent-foreground">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Problem Statement */}
          <section>
            <h2 className="text-display-md mb-6">Problemet</h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              Headset må balansere flere motstridende krav: komfort, stabilitet, vekt og trykkfordeling. 
              Små beslutninger om form har stor innvirkning på langvarig bruk. Å designe kun digitalt er 
              utilstrekkelig for ergonomiske produkter – man må kjenne hvordan ting faktisk føles mot hodet.
            </p>
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-body font-medium">
                💡 Den største utfordringen med ergonomisk design er at komfort ikke kan måles – den må oppleves over tid.
              </p>
            </div>
          </section>

          {/* Design Approach */}
          <section>
            <h2 className="text-display-md mb-6">Designtilnærming</h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              Prosessen startet med skissering og utforskning av ulike formspråk. Jeg studerte eksisterende 
              produkter og testet konsepter for leddmekanismer, inkludert et tidlig forsøk på et 3D-svivelledd 
              som senere ble forenklet.
            </p>
            <p className="text-body-lg text-muted-foreground mb-8">
              I CAD fokuserte jeg på kontaktpunktene: hodebøyle, øreputer og trykksonene mellom dem. 
              Siden målet var sprøytestøping, måtte hver del designes med riktige utslippsvinkler og 
              materialflyt i tankene.
            </p>
          </section>

          {/* Sketches Images */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Tidlige skisser</p>
                <p className="text-sm">Formutforskning og leddmekanismer</p>
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">CAD-utforskning</p>
                <p className="text-sm">Kontaktpunkter og geometri</p>
              </div>
            </div>
          </div>

          {/* Prototyping & Iteration */}
          <section>
            <h2 className="text-display-md mb-6">Prototyping og iterasjon</h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              Fysisk prototyping avslørte problemer som ikke var synlige på skjermen. Jeg itererte på 
              hodebøylens geometri og ørekoppenes form basert på passform, balanse og trykk.
            </p>
            <p className="text-body-lg text-muted-foreground mb-8">
              Et viktig læringspunkt var å forenkle. Det opprinnelige svivel-leddet var elegant i teorien, 
              men for komplekst for produksjon. Den endelige mekanismen er enklere, mer robust, og like funksjonell.
            </p>
          </section>

          {/* Prototype Images */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Tidlig prototype</p>
                <p className="text-sm">Første 3D-printet versjon</p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Render vs. funksjon</p>
                <p className="text-sm">Sammenligning av visualisering og fysisk test</p>
              </div>
            </div>
          </div>

          {/* Final Design */}
          <section>
            <h2 className="text-display-md mb-6">Endelig design</h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              Det endelige headsetet balanserer visuell identitet med ergonomi og produksjonsvennlighet. 
              Ørekoppholderen har en kontrasterende bakdel som gir produktet et distinkt utseende. 
              Vektfordelingen er optimalisert for lange arbeidsøkter.
            </p>
            <p className="text-body-lg text-muted-foreground mb-8">
              Alle deler er designet for sprøytestøping i polyetylen-plast, med metallelementer 
              der det trengs for styrke.
            </p>
          </section>

          {/* Final Design Images */}
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground mb-8">
            <div className="text-center">
              <p className="text-lg font-medium">Eksplodert visning</p>
              <p className="text-sm">Alle komponenter og sammensetning</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Tekniske tegninger</p>
                <p className="text-sm">Mål og spesifikasjoner</p>
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Skinnemekanisme</p>
                <p className="text-sm">Justerbar hodebøyle</p>
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Endelig produkt</p>
                <p className="text-sm">Ferdig headset</p>
              </div>
            </div>
          </div>

          {/* 3D Model CTA */}
          <section className="bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="font-display font-semibold text-xl mb-3">Utforsk 3D-modellen</h3>
            <p className="text-body text-muted-foreground mb-6">
              Se den interaktive CAD-modellen i full detalj
            </p>
            <a 
              href="https://a360.co/4bEJ4bR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              Åpne 3D-modell
              <ExternalLink size={18} />
            </a>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-display-md mb-8">Refleksjon</h2>
            <div className="space-y-6">
              {reflections.map((reflection, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-semibold text-foreground">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">{reflection.title}</h3>
                      <p className="text-body text-muted-foreground">{reflection.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Next Project */}
          <section className="border-t border-border pt-12">
            <p className="text-caption mb-4">Neste prosjekt</p>
            <Link 
              to="/prosjekter/klatretak" 
              className="group flex items-center justify-between bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors"
            >
              <div>
                <h3 className="font-display font-semibold text-xl mb-1 group-hover:text-accent transition-colors">
                  Modulære 3D-printede klatretak
                </h3>
                <p className="text-body text-muted-foreground">
                  Fleksibelt system for hjemmevegg
                </p>
              </div>
              <ArrowRight size={24} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>
          </section>

        </div>
      </article>

      {/* Bottom spacing */}
      <div className="section-spacing" />
    </Layout>
  );
};

export default HeadsetCase;
