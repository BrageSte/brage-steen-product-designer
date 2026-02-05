import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SiteLayout from "@/components/SiteLayout";

const basePath = "/projects/headset";

// Brief item component
function BriefItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </p>
      <p className="text-foreground">{value}</p>
    </div>
  );
}

// Hero Section - Full screen, edge-to-edge, NO text
function HeroSection() {
  return (
    <section className="h-screen w-full">
      <img
        src={`${basePath}/Header.png`}
        className="w-full h-full object-cover"
        alt="Exploded view of headset components"
      />
    </section>
  );
}

// Overview Section - 2-column grid
function OverviewSection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="opacity-0 animate-fade-in-up">
          <span className="text-caption">Overview</span>
          <h2 className="text-display-md mt-4 mb-6">Project Brief</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Design a commuter- and office-friendly headset with a focus on
            industrialized production. The foldable design ensures portability
            for travel and everyday use.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              Production Considerations:
            </strong>{" "}
            Every component is optimized for plastic injection molding to ensure
            cost-efficient mass production. This includes designing parts with
            appropriate draft angles to allow easy release from molds.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
            <BriefItem label="Duration" value="4 months" />
            <BriefItem label="Target" value="$200–$300" />
            <BriefItem label="Production" value="100,000 units" />
            <BriefItem label="Materials" value="Polyethylene, Steel" />
            <BriefItem label="Method" value="Injection Molding" />
            <BriefItem label="Tools" value="Fusion 360" />
          </div>
        </div>

        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <img
            src={`${basePath}/details-render.png`}
            alt="Headset detail close-up"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

// Ideation Section - Sketch grid
function IdeationSection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <span className="text-caption">01 — Ideation</span>
        <h2 className="text-display-md mt-4 mb-6">Sketches & Exploration</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          The initial phase involved exploring various joint types and form
          languages. A significant focus was placed on designing the headset cup
          holder, aiming for a visually distinct back piece.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={`${basePath}/sketch-1.png`}
            alt="Earcup concept sketches"
            className="rounded-2xl bg-white"
          />
          <img
            src={`${basePath}/sketch-2.png`}
            alt="Button and detail sketches"
            className="rounded-2xl bg-white"
          />
        </div>
      </div>
    </section>
  );
}

// Prototyping Section
function PrototypingSection() {
  const prototypeImages = [
    "prototype-2.jpg",
    "prototype-3.jpg",
    "prototype-4.jpg",
    "prototype-5.jpg",
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <span className="text-caption">02 — Prototyping</span>
        <h2 className="text-display-md mt-4 mb-6">From Digital to Physical</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Perfecting the angles for both aesthetics and functionality was a
          challenge, requiring numerous iterations to achieve the ideal fit.
          Since the headset is designed for injection molding, careful attention
          was given to draft angles. 3D printing allowed rapid testing of
          variations to validate comfort and ergonomics.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img
            src={`${basePath}/prototype-1.png`}
            alt="Testing the prototype"
            className="rounded-2xl"
          />
          <img
            src={`${basePath}/Prototype.png`}
            alt="White 3D printed prototype"
            className="rounded-2xl"
          />
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {prototypeImages.map((img) => (
              <CarouselItem key={img} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <img
                  src={`${basePath}/${img}`}
                  alt="3D printed prototype parts"
                  className="rounded-xl h-56 object-cover w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
}

// Product Showcase - WHITE background
function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <img
          src={`${basePath}/full-headset.png`}
          alt="Complete headset design"
          className="w-full"
        />
      </div>
      <div className="max-w-5xl mx-auto px-8 mt-16">
        <img
          src={`${basePath}/Functions.png`}
          alt="Headset with annotated features"
          className="w-full"
        />
      </div>
    </section>
  );
}

// 3D Model Section
function ModelSection() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-8">
        <span className="text-caption text-white/50">03 — 3D Model</span>
        <h2 className="text-display-md mt-4 mb-6">Interactive Model</h2>
        <p className="text-white/70 mb-8">
          Explore the complete 3D model with all components. The design features
          modular construction for easy assembly and serviceability.
        </p>

        <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-neutral-800">
          <iframe
            title="Headset 3D Model"
            className="absolute inset-0 w-full h-full"
            src="https://sketchfab.com/models/dd8b8b2a1f0645b6b65a4f19227cc69d/embed"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

// Technical Drawings Section
function TechnicalSection() {
  const technicalImages = [
    "Technical-drawing-1.png",
    "technical-drawing-3.png",
    "technical-drawing-4.png",
    "jadda.65.png",
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-8 mb-12">
        <span className="text-caption">04 — Technical</span>
        <h2 className="text-display-md mt-4 mb-6">Production Drawings</h2>
        <p className="text-muted-foreground">
          Detailed technical drawings with dimensions and tolerances for all
          components. Designed for injection molding with 2% draft angles
          throughout.
        </p>
      </div>

      <Carousel className="max-w-5xl mx-auto px-8">
        <CarouselContent className="-ml-4">
          {technicalImages.map((img) => (
            <CarouselItem key={img} className="pl-4 md:basis-4/5">
              <div className="bg-white border border-border rounded-2xl p-6">
                <img
                  src={`${basePath}/${img}`}
                  alt="Technical drawing"
                  className="w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}

// Main Component
export default function HeadsetProject() {
  return (
    <SiteLayout>
      <main className="bg-background">
        <HeroSection />
        <OverviewSection />
        <IdeationSection />
        <PrototypingSection />
        <ProductShowcase />
        <ModelSection />
        <TechnicalSection />
      </main>
    </SiteLayout>
  );
}
