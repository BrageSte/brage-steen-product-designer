import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";

const SortingGuidePrototype = () => {
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
            Tilbake til Sorteringsguiden
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-display-xl mb-4">Prototype</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl">
              Interaktiv prototype av Sorteringsguiden som viser brukerreisen
              fra start til ferdig sortering.
            </p>
          </div>

          {/* Embed placeholder */}
          <div className="aspect-video bg-card rounded-lg flex items-center justify-center border border-border">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Prototype embed kommer her
              </p>
              <p className="text-sm text-muted-foreground">
                (Figma / iframe placeholder)
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default SortingGuidePrototype;
