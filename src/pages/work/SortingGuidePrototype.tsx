import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";

const SortingGuidePrototype = () => {
  return (
    <Layout showGlow={false}>
      <Section animate={false} className="section-spacing-sm">
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
          <div className="mb-8">
            <span className="text-caption block mb-2">The Sorting Guide</span>
            <h1 className="text-display-xl mb-4">Interaktiv Prototype</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl">
              Utforsk den interaktive prototypen som viser brukerreisen fra
              start til ferdig sorteringsveiledning.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://xd.adobe.com/view/60cd8d3c-32ed-435d-7295-8826c2431807-16fc/?fullscreen&hints=on"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              Åpne i Adobe XD
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </Section>

      {/* Prototype embed */}
      <div className="bg-foreground">
        <div className="container-full py-8">
          <div className="aspect-[16/10] rounded-lg overflow-hidden bg-background/5">
            <iframe
              src="https://xd.adobe.com/embed/60cd8d3c-32ed-435d-7295-8826c2431807-16fc/?fullscreen&hints=on"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              title="The Sorting Guide - Interaktiv prototype"
            />
          </div>
        </div>
      </div>

      <Section className="section-spacing-sm">
        <div className="container-wide">
          {/* Instructions */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-sm mb-4">Slik bruker du prototypen</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="space-y-2">
                <p className="font-medium text-foreground">Klikk for å navigere</p>
                <p>Interager med knapper og elementer for å gå videre</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Naviger mellom skjermer</p>
                <p>Bruk piltaster eller klikk for å bevege deg</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Hover for hints</p>
                <p>Hold over elementer for å se interaksjonsmuligheter</p>
              </div>
            </div>
          </div>

          {/* Mobile notice */}
          <div className="mt-12 p-6 bg-card rounded-lg text-center max-w-xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Tips:</span>{" "}
              Prototypen fungerer best på større skjermer. For beste opplevelse,
              bruk desktop eller tablet.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default SortingGuidePrototype;
