import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const SortingGuideGigamap = () => {
  const stats = [
    {
      value: "739 kg",
      label: "Avfall per innbygger",
      desc: "Totalt avfall generert per person per år i Norge, nest høyest i Europa.",
    },
    {
      value: "60%",
      label: "Ikke resirkulert",
      desc: "Over 60% av husholdningsavfall sendes ikke til resirkulering etter avfallsanlegget.",
    },
    {
      value: "21%",
      label: "Husholdningsavfall",
      desc: "I Norge kommer 21% av alt avfall fra husholdninger – den første linjen av resirkulering.",
    },
    {
      value: "186",
      label: "Paris-avtalen",
      desc: "Land som har signert Paris-avtalen for å bekjempe klimaendringer gjennom bærekraftig praksis.",
    },
  ];

  return (
    <Layout>
      <Section animate={false}>
        <div className="container-wide">
          {/* Back link */}
          <Link
            to="/work/sorting-guide"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Tilbake til prosjektet
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-caption block mb-2">The Sorting Guide</span>
            <h1 className="text-display-xl mb-4">Gigamap: Waste in the World</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              En omfattende forskningskartlegging som utforsker de komplekse
              systemene for avfallshåndtering og resirkulering.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-display-sm mb-4">Forstå kompleksiteten</h2>
            <p className="text-body text-muted-foreground">
              For en bedre forståelse av den nåværende avfallssituasjonen
              utviklet vi et forskningskart som forklarer avfallets verden.
              Dette har gitt et grunnlag for valg gjort gjennom hele prosjektet.
            </p>
          </div>

          {/* Gigamap placeholder with CTA */}
          <div className="bg-card rounded-lg p-8 mb-12">
            <div className="aspect-video bg-secondary rounded-lg flex flex-col items-center justify-center text-center p-8">
              <ImageWithFallback
                src="/images/sorting-guide/gigamap-preview.jpg"
                alt="Gigamap visualisering"
                aspectRatio="video"
                className="rounded-lg mb-6 w-full max-w-3xl"
              />
            </div>
            <div className="text-center mt-6">
              <a
                href="https://bragesteen.wordpress.com/2025/05/28/gigamap/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                Se full Gigamap
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg p-6">
                <p className="text-3xl font-medium text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium mb-2">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* Research areas */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-sm mb-4">Nøkkelforskningsområder</h2>
            <p className="text-body text-muted-foreground">
              Gigamappen dekker flere sammenkoblede systemer inkludert
              offentlige reguleringer, bedriftsansvar, kommunal avfallsinnsamling,
              resirkuleringsanlegg og husholdningers sorteringsatferd.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default SortingGuideGigamap;
