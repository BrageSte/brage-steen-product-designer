import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const SortingGuideGigamap = () => {
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
            <h1 className="text-display-xl mb-4">Gigamap</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl">
              En visuell kartlegging av hele avfallssystemet – fra
              husholdningen til gjenvinning og deponi.
            </p>
          </div>

          {/* Large image */}
          <div className="space-y-8">
            <ImageWithFallback
              src="/images/sorting-guide/gigamap.jpg"
              alt="Gigamap over avfallssystemet"
              aspectRatio="video"
              className="rounded-lg"
            />

            <div className="max-w-2xl space-y-4">
              <h2 className="text-display-sm">Om gigamappen</h2>
              <p className="text-body text-muted-foreground">
                Gigamappen visualiserer alle aktører, systemer og
                berøringspunkter i avfallshåndteringen. Den hjalp oss å
                identifisere hvor i systemet folk mister oversikten, og hvor
                informasjonsbehovet er størst.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default SortingGuideGigamap;
