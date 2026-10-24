import Prosjektbilde from "@/components/Prosjektbilde";
import SiteLayout from "@/components/SiteLayout";
import ProjectBar from "@/components/ProjectBar";

const colors = {
  chalk: "#f5f0ea",
  stone: "#e8e0d6",
  terracotta: "#c4622d",
  terracottaLight: "#e8845a",
  slate: "#1c1c1c",
  slateLight: "#2d2d2d",
  muted: "#8a8480",
  mutedLight: "#b5afa9",
};

const basePath = "/projects/bsclimbing";

function HeroSection() {
  return (
    <section
      className="min-h-[80vh] relative flex flex-col justify-center items-center overflow-hidden -mt-[120px] pt-[200px] pb-[180px] max-md:pt-[140px] max-md:pb-[140px]"
      style={{
        background: `linear-gradient(160deg, ${colors.slate} 0%, ${colors.slateLight} 40%, #3a2a20 100%)`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 75% 30%, rgba(196, 98, 45, 0.25) 0%, transparent 55%),
            radial-gradient(ellipse at 20% 80%, rgba(196, 98, 45, 0.12) 0%, transparent 45%)
          `,
        }}
      />

      <div className="text-center z-10 px-8 max-w-4xl mx-auto">
        <p
          className="text-xs uppercase tracking-[0.3em] mb-8 max-md:mb-5"
          style={{ color: colors.terracottaLight }}
        >
          Produktdesign · fysisk og digitalt
        </p>
        <h1
          className="mb-6 max-md:mb-4"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(3.5rem, 14vw, 11rem)",
            color: colors.chalk,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          BS Climbing
        </h1>
        <p
          className="text-xl max-w-[520px] mx-auto mb-14 max-md:mb-8 max-md:text-base"
          style={{ color: colors.mutedLight }}
        >
          Klatreblokker formet etter fingermål — fra fysisk prototype til digital konfigurator og produksjonsunderlag
        </p>
        <div
          className="flex flex-wrap justify-center gap-6 text-sm max-md:gap-4 max-md:text-xs"
          style={{ color: colors.mutedLight }}
        >
          <span>
            <strong style={{ color: colors.chalk }}>Periode</strong> 2025–nå
          </span>
          <span>
            <strong style={{ color: colors.chalk }}>Rolle</strong> Solo · produkt og digital løsning
          </span>
          <span>
            <strong style={{ color: colors.chalk }}>Verktøy</strong> Fusion 360 · 3D-print · kode
          </span>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-28 max-md:py-16"
      style={{ background: colors.chalk }}
    >
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-4">
        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-5"
              style={{ color: colors.terracotta }}
            >
              Problemet
            </p>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: colors.slate,
              }}
            >
              Klatreblokker med geometri tilpasset fingrene
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: colors.muted }}>
              Klatreblokker har geometri som påvirker hvordan fingrene møter produktet. Jeg ville utforske hvordan fingerbredde og høydeprofil kunne brukes til å forme en blokk etter individuelle mål.
            </p>
            <p className="text-base leading-relaxed" style={{ color: colors.muted }}>
              Oppgaven omfattet både den fysiske formen og måten brukeren registrerer målene på. Jeg arbeidet alene med produktutforming, prototyper og den digitale flyten fra måling til konfigurering.
            </p>
          </div>
          <div className="relative">
            <Prosjektbilde
              src={`${basePath}/nett/why-custom-action.jpg`}
              alt="Klatrer på vegg med stepper-tak"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section
      id="losning"
      className="py-28 max-md:py-16"
      style={{ background: colors.stone }}
    >
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-4">
        <p
          className="text-xs uppercase tracking-[0.2em] mb-5 text-center"
          style={{ color: colors.terracotta }}
        >
          Løsningen
        </p>
        <h2
          className="text-center mb-16 max-md:mb-10 leading-tight"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: colors.slate,
          }}
        >
          Mål, konfigurer og se formen
        </h2>

        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
          <div>
            <Prosjektbilde
              src={`${basePath}/nett/why-custom-product.jpg`}
              alt="Ferdig 3D-printet klatreblokk"
              className="w-full rounded-2xl object-cover mb-6"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
          <div>
            <p className="text-base leading-relaxed mb-6" style={{ color: colors.muted }}>
              Jeg utviklet en måleflyt og konfigurator der brukeren legger inn bredde og høydeprofil for pekefinger, langfinger, ringfinger og lillefinger. Målene styrer en parametrisk form som vises i en 3D-forhåndsvisning.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: colors.muted }}>
              Valgte mål blir til et produksjonsunderlag som tas videre til Fusion 360. Der brukes parameterne til å generere den fysiske modellen. Slik knyttes brukerens inndata til produktgeometrien.
            </p>

            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <div className="rounded-xl overflow-hidden">
                <Prosjektbilde
                  src={`${basePath}/nett/finger-width.jpg`}
                  alt="Måling av fingerbredde"
                  className="w-full object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="text-xs mt-2" style={{ color: colors.mutedLight }}>Mål fingerbredde</p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <Prosjektbilde
                  src={`${basePath}/nett/height-differences.jpg`}
                  alt="Måling av høydeforskjell"
                  className="w-full object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="text-xs mt-2" style={{ color: colors.mutedLight }}>Mål høydeprofil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowSection() {
  const steps = [
    {
      number: "01",
      title: "Mål og konfigurer",
      description:
        "Registrer bredde og høydeprofil for fingrene. Den parametriske formen oppdateres i 3D-forhåndsvisningen.",
    },
    {
      number: "02",
      title: "Lag produksjonsunderlag",
      description:
        "Målene eksporteres som parametere til et underlag som kan importeres i Fusion 360.",
    },
    {
      number: "03",
      title: "Form produktet",
      description:
        "Den parametriske modellen brukes videre til å lage klatreblokken med den valgte geometrien.",
    },
  ];

  return (
    <section
      className="py-28 max-md:py-16"
      style={{ background: colors.chalk }}
    >
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-4">
        <p
          className="text-xs uppercase tracking-[0.2em] mb-5 text-center"
          style={{ color: colors.terracotta }}
        >
          Flyten
        </p>
        <h2
          className="text-center mb-16 max-md:mb-10 leading-tight"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: colors.slate,
          }}
        >
          Fra fingermål til fysisk produkt
        </h2>

        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl p-8 max-md:p-6"
              style={{ background: colors.stone }}
            >
              <p
                className="text-4xl font-light mb-4"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  color: colors.terracotta,
                }}
              >
                {step.number}
              </p>
              <h3
                className="text-lg font-medium mb-3"
                style={{ color: colors.slate }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.muted }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevelopmentSection() {
  return (
    <section
      id="utvikling"
      className="py-28 max-md:py-16 relative overflow-hidden"
      style={{ background: colors.slate }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 80% 50%, rgba(196, 98, 45, 0.15) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 max-md:px-4 relative z-10">
        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-5"
              style={{ color: colors.terracottaLight }}
            >
              Utvikling og prototyper
            </p>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: colors.chalk,
              }}
            >
              Rundt 40 fysiske prototyper
            </h2>
            <p className="text-base leading-relaxed" style={{ color: colors.mutedLight }}>
              Jeg printet dem for å utforske tekstur, proporsjoner, toleranser og avrundinger. Arbeidet med den fysiske formen sto sentralt i utviklingen av klatreblokken.
            </p>
            <p className="text-base leading-relaxed mt-4" style={{ color: colors.mutedLight }}>
              Jeg koblet også produktutformingen til måleflyten og konfiguratoren. Kode og AI-verktøy støttet utviklingen av den digitale løsningen; produktets form og designbeslutninger var mine.
            </p>
          </div>

          <div className="relative">
            <Prosjektbilde
              src={`${basePath}/nett/hero-product.jpg`}
              alt="Klatreblokk utviklet for BS Climbing"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: "4/5" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-6 rounded-b-2xl"
              style={{
                background: "linear-gradient(0deg, rgba(28,28,28,0.9) 0%, transparent 100%)",
              }}
            >
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: colors.mutedLight }}>
                Fysisk prototyping
              </p>
              <p className="text-sm" style={{ color: colors.chalk }}>
                Formutforsking → 3D-print → konfigurator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechSection() {
  const tools = [
    "React", "TypeScript", "Three.js", "Supabase", "Stripe",
    "Fusion 360", "Claude Code", "Codex",
  ];

  return (
    <section
      id="tech"
      className="py-28 max-md:py-16"
      style={{ background: colors.stone }}
    >
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-4">
        <p
          className="text-xs uppercase tracking-[0.2em] mb-5 text-center"
          style={{ color: colors.terracotta }}
        >
          Verktøy
        </p>
        <h2
          className="text-center mb-12 leading-tight"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: colors.slate,
          }}
        >
          Digitale verktøy og produksjon
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-16 max-md:gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: colors.chalk,
                color: colors.slate,
                border: `1px solid rgba(28,28,28,0.1)`,
              }}
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm mb-6" style={{ color: colors.muted }}>
            Se produktet og den digitale løsningen
          </p>
          <a
            href="https://bsclimbing.no"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all hover:opacity-90"
            style={{
              background: colors.terracotta,
              color: "#fff",
            }}
          >
            Besøk bsclimbing.no
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function BSClimbingProject() {
  return (
    <SiteLayout>
      <main id="main-content">
        <HeroSection />
        <ProjectBar
          title="BS Climbing"
          sections={[
            { label: "Problemet", id: "problem" },
            { label: "Løsningen", id: "losning" },
            { label: "Prototyper", id: "utvikling" },
            { label: "Verktøy", id: "tech" },
            { label: "bsclimbing.no", href: "https://bsclimbing.no" },
          ]}
        />
        <ProblemSection />
        <SolutionSection />
        <FlowSection />
        <DevelopmentSection />
        <TechSection />
      </main>
    </SiteLayout>
  );
}
