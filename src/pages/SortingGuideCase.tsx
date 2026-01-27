import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { ArrowLeft, ChevronDown, Package, BookOpen, Shield, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const SortingGuideCase = () => {
  const [summaryOpen, setSummaryOpen] = useState(false);

  const caseData = {
    role: "Produktdesigner / Lead Researcher",
    duration: "Jan 2020 – Mai 2020",
    partners: ["IKEA Norway", "Grønt Punkt"],
    tools: ["Adobe XD", "Miro", "Figma", "InDesign"],
    deliverables: ["Tjenestedesign-konsept", "Gigamap/database", "Interaktiv prototype", "Designsystem"],
  };

  const insights = [
    {
      title: "Tilgjengelighet",
      description: "Folk vil sortere, men mangler tilgang til riktig utstyr og tydelige systemer. Løsninger må møte folk der de bor – ikke forvente at de oppsøker informasjon selv.",
      icon: Package,
    },
    {
      title: "Kunnskap",
      description: "Usikkerhet om hva som kan resirkuleres og hvor det skal, fører til at mye havner i restavfall. Informasjonen finnes, men er fragmentert og vanskelig å finne.",
      icon: BookOpen,
    },
    {
      title: "Tillit",
      description: "Mange tviler på om innsatsen deres faktisk gjør en forskjell. Uten synlig resultat mister folk motivasjonen til å sortere riktig.",
      icon: Shield,
    },
  ];

  const features = [
    {
      title: "Home Recycling Builder",
      description: "Et interaktivt verktøy som hjelper brukere å bygge et tilpasset sorteringssystem basert på boligtype, plassbehov og lokale regler.",
    },
    {
      title: "Product Guide",
      description: "Filtrerbar produktkatalog med IKEA-løsninger tagget etter avfallstype, plass og pris – gjør det enkelt å finne riktig utstyr.",
    },
    {
      title: "Recycling in your area",
      description: "Lokalisert informasjon om hva som kan sorteres hvor du bor, basert på kommune og renovasjonsselskap.",
    },
    {
      title: "Tips & Tricks",
      description: "Praktiske råd for bedre sortering i hverdagen – fra oppbevaring til rengjøring av emballasje.",
    },
  ];

  const contributions = [
    "Ledet kvalitativ research med observasjon, intervjuer og designprober",
    "Fasiliterte workshops med 40+ deltakere",
    "Syntetiserte innsikt til handlingsbare designprinsipper",
    "Utviklet konsepter og interaktiv prototype",
  ];

  const reflections = [
    "Systemisk design krever at man forstår hele økosystemet – ikke bare sluttbrukeren. De beste løsningene adresserer flere interessenter samtidig.",
    "Enkelhet vinner. Komplekse problemer trenger ikke komplekse løsninger – de trenger klarhet og tilgjengelighet.",
    "Tillit bygges gjennom transparens. Brukere må forstå hvorfor handlingene deres betyr noe for å holde motivasjonen oppe.",
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
              <p className="text-sm">The Sorting Guide – hovedvisualisering</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr,320px] gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="space-y-6 opacity-0 animate-fade-in-up">
              <span className="tag">Tjenestedesign</span>
              <h1 className="text-display-lg">The Sorting Guide</h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl">
                Øker husholdningsrecycling ved å gjøre lokale regler og riktige løsninger enkle å finne
              </p>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {caseData.role}
                </span>
                <span className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {caseData.duration}
                </span>
                {caseData.partners.map((partner) => (
                  <span key={partner} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {partner}
                  </span>
                ))}
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
                    <span className="text-caption block mb-1">Partnere</span>
                    <p className="text-body-sm">{caseData.partners.join(", ")}</p>
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
                      <span className="text-caption block mb-1">Partnere</span>
                      <p className="text-body-sm">{caseData.partners.join(", ")}</p>
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
              Norske husholdninger ønsker å kildesortere, men møter et fragmentert system med lokale variasjoner, 
              uklare regler og mangel på tilpassede løsninger. The Sorting Guide er en tjenesteplattform utviklet 
              i samarbeid med IKEA Norway og Grønt Punkt som kobler lokale sorteringsregler med produkter og 
              veiledning – slik at folk faktisk kan handle på intensjonene sine.
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
            <h2 className="text-display-md mb-6">Problemstilling</h2>
            <blockquote className="border-l-4 border-accent pl-6 py-2 mb-6">
              <p className="text-body-lg italic text-foreground">
                "How can we improve household recycling by guiding people looking for recycling solutions, 
                to information and offerings based on their household needs, that leads to minimizing general waste?"
              </p>
            </blockquote>
            <p className="text-body-lg text-muted-foreground">
              Norge har ambisiøse resirkuleringsmål, men husholdningsavfall er fortsatt en utfordring. 
              Mye av det som kunne vært gjenvunnet havner i restavfall – ikke fordi folk ikke bryr seg, 
              men fordi systemet er vanskelig å navigere. Riktig sortering starter med riktig informasjon 
              og tilgang til løsninger som faktisk passer hjemmet ditt.
            </p>
          </section>

          {/* Research Image Placeholder */}
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <p className="text-lg font-medium">Research Documentation</p>
              <p className="text-sm">Observasjoner og intervjuer i felt</p>
            </div>
          </div>

          {/* Research & Workshops */}
          <section>
            <h2 className="text-display-md mb-6">Research og workshops</h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              Vi brukte en kvalitativ tilnærming med observasjon i hjemmene, dybdeintervjuer og designprober 
              for å forstå hvordan folk faktisk sorterer – og hva som stopper dem. Desktop research ga oss 
              oversikt over det fragmenterte systemet av kommunale regler og returpunkter.
            </p>
            <p className="text-body-lg text-muted-foreground mb-8">
              To sentrale workshops formet prosjektet: én med <strong>SINTEF SmartPACK</strong> (Orkla, Norgesgruppen, Bama m.fl.) 
              hvor vi fikk industriperspektiv, og én på <strong>OsloMet</strong> med ~40 deltakere fra ulike bakgrunner.
            </p>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-body font-medium">
                💡 Nøkkelfunn: Eksperter og vanlige forbrukere delte overraskende like utfordringer. 
                Barrierene var like mye sosiale og personlige som de var kunnskapsbaserte.
              </p>
            </div>
          </section>

          {/* Workshop Images */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Workshop 1</p>
                <p className="text-sm">SINTEF SmartPACK</p>
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Workshop 2</p>
                <p className="text-sm">OsloMet – 40 deltakere</p>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <section>
            <h2 className="text-display-md mb-8">Nøkkelinnsikter</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {insights.map((insight, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <insight.icon size={24} className="text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-3">{insight.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{insight.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Concepting */}
          <section>
            <h2 className="text-display-md mb-6">Konseptutvikling og kartlegging</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Basert på innsikten utviklet vi fire konseptretninger som ble testet med brukere. 
              Parallelt lagde vi detaljerte brukerreiser for å forstå hele prosessen – fra å bli 
              bevisst på sortering, til å kjøpe løsninger, til daglig bruk og navigering i systemet.
            </p>
          </section>

          {/* Concept Images Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Konsepter</p>
                <p className="text-sm">Fire konseptretninger</p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">User Journey</p>
                <p className="text-sm">Kartlegging av brukerreisen</p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Gigamap</p>
                <p className="text-sm">Systemkartlegging</p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Wireframes</p>
                <p className="text-sm">Tidlige skisser</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <section>
            <h2 className="text-display-md mb-6">Løsningen: The Sorting Guide</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              The Sorting Guide er en digital plattform som kobler tre elementer: lokale sorteringsregler, 
              IKEAs produktkatalog, og praktisk veiledning. Plattformen gjør det enkelt å finne ut hva som 
              gjelder der du bor, og hvilke løsninger som passer ditt hjem.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="grid md:grid-cols-[1fr,1.5fr] gap-6 items-center">
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-body text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <p className="text-lg font-medium">Screenshot</p>
                      <p className="text-sm">{feature.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final Solution Image */}
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <p className="text-lg font-medium">Final Design</p>
              <p className="text-sm">Komplett løsningsvisning</p>
            </div>
          </div>

          {/* Prototype CTA */}
          <section className="bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="font-display font-semibold text-xl mb-3">Utforsk prototypen</h3>
            <p className="text-body text-muted-foreground mb-6">
              Klikk deg gjennom den interaktive prototypen for å oppleve løsningen selv.
            </p>
            <a 
              href="https://bragesteen.wordpress.com/2025/05/28/bachelor-project/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              Åpne click-through prototype
              <ExternalLink size={18} />
            </a>
          </section>

          {/* Reflection */}
          <section className="pb-8">
            <h2 className="text-display-md mb-6">Refleksjon</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Dette prosjektet formet hvordan jeg tenker på design i dag:
            </p>
            <ul className="space-y-6">
              {reflections.map((reflection, index) => (
                <li key={index} className="flex gap-4">
                  <span className="font-display font-bold text-accent-foreground text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-body-lg text-muted-foreground">{reflection}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      {/* Next Project */}
      <section className="section-spacing bg-card mt-16">
        <div className="container-narrow text-center">
          <span className="text-caption block mb-4">Neste prosjekt</span>
          <h2 className="text-display-md mb-8">Headset Concept</h2>
          <Button to="/prosjekter/headset" variant="primary" size="lg" showArrow>
            Se prosjekt
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SortingGuideCase;
