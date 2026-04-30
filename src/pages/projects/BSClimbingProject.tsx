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
          Fullstack Side Project
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
          Klatreblokker som passer hånden din — fra mål til ferdig 3D-printet tak
        </p>
        <div
          className="flex flex-wrap justify-center gap-6 text-sm max-md:gap-4 max-md:text-xs"
          style={{ color: colors.mutedLight }}
        >
          <span>
            <strong style={{ color: colors.chalk }}>År</strong> 2026
          </span>
          <span>
            <strong style={{ color: colors.chalk }}>Stack</strong> React · Supabase · Stripe
          </span>
          <span>
            <strong style={{ color: colors.chalk }}>AI</strong> Claude Code · Codex
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
              Standardtak er laget for gjennomsnittshender
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: colors.muted }}>
              Klatreblokker og stepper-tak kommer i faste størrelser. Men ingen hender er like
              — bredde på fingre, høydeforskjeller mellom knokene og gripedybde varierer mye fra person til person.
            </p>
            <p className="text-base leading-relaxed" style={{ color: colors.muted }}>
              For nybegynnere og erfarne klatrere med avvikende håndgeometri betyr dette suboptimale
              tak som kan gi unødvendig belastning. Problemet finnes, men ingen hadde laget en løsning
              som lot brukeren ta mål og få et tak spesialsydd til sin hånd.
            </p>
          </div>
          <div className="relative">
            <img
              src={`${basePath}/why-custom-action.jpg`}
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
          Mål fingrene dine. Vi lager resten.
        </h2>

        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
          <div>
            <img
              src={`${basePath}/why-custom-product.jpg`}
              alt="Ferdig 3D-printet klatreblokk"
              className="w-full rounded-2xl object-cover mb-6"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
          <div>
            <p className="text-base leading-relaxed mb-6" style={{ color: colors.muted }}>
              Konfiguratoren lar deg taste inn bredde og høydeforskjell per finger — pekefinger,
              langfinger, ringfinger og lillefinger. Basert på input genererer systemet et
              skreddersydd parametrisk blokk med 3D-preview i sanntid.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: colors.muted }}>
              Etter betaling via Stripe eksporteres parameterne automatisk som en Fusion 360-kompatibel
              CSV. Filen lastes ned, importeres i Fusion og modellen genereres — klar for 3D-print.
            </p>

            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={`${basePath}/finger-width.jpg`}
                  alt="Måling av fingerbredde"
                  className="w-full object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="text-xs mt-2" style={{ color: colors.mutedLight }}>Mål fingerbredde</p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={`${basePath}/height-differences.jpg`}
                  alt="Måling av høydeforskjell"
                  className="w-full object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="text-xs mt-2" style={{ color: colors.mutedLight }}>Mål høydeforskjell</p>
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
      title: "Konfigurer",
      description:
        "Skriv inn mål for alle fire fingre. 3D-preview oppdateres i sanntid mens du justerer. React + Three.js.",
    },
    {
      number: "02",
      title: "Betal",
      description:
        "Checkout-flyten validerer priser server-side via Supabase edge functions og Stripe. Kunden får ordrebekreftelse på e-post.",
    },
    {
      number: "03",
      title: "Produser",
      description:
        "Fusion 360 CSV-fil genereres automatisk med produksjonsnummer. Importér, kjør parametrisk modell, 3D-print.",
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
          Fra nettleser til 3D-printer
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

function AISection() {
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
              AI-drevet utvikling
            </p>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: colors.chalk,
              }}
            >
              Claude Code og Codex som utviklingsteam
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: colors.mutedLight }}>
              Hele prosjektet ble bygget med Claude Code og GitHub Copilot/Codex som primære
              utviklingsverktøy. I stedet for å separere agent-arbeidet ble det satt opp et
              felles planleggingsrom i <code style={{ color: colors.terracottaLight }}>docs/plans/</code> —
              et delt workspace der begge agenter kunne lese, skrive og koordinere arbeid.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: colors.mutedLight }}>
              Mønsteret som emergerte: Claude planla arkitektur og datamodell, Codex implementerte.
              Resultatet var dokumentert i prosjektet som{" "}
              <em style={{ color: colors.chalk }}>"Fusjon av Codex-plan og Claude-plan — datamodell fra Codex, implementasjonsstruktur fra Claude."</em>
            </p>
            <p className="text-base leading-relaxed" style={{ color: colors.mutedLight }}>
              Governance-dokumenter i <code style={{ color: colors.terracottaLight }}>docs/ops/agent-governance.md</code> definerte
              hvordan agenter og mennesker tok beslutninger, løste konflikter og håndterte
              sikkerhetsgrenser — tilsvarende et team-charter.
            </p>
          </div>

          <div className="relative">
            <img
              src={`${basePath}/hero-product.jpg`}
              alt="BS Climbing produkt"
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
                Workflow
              </p>
              <p className="text-sm" style={{ color: colors.chalk }}>
                Human → Claude Code → Codex → Human → Deploy
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
    "React 18", "TypeScript", "Vite", "Tailwind CSS",
    "Three.js", "Supabase", "Stripe", "Fusion 360",
    "Claude Code", "GitHub Copilot / Codex", "Vitest",
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
          Tech-stack
        </p>
        <h2
          className="text-center mb-12 leading-tight"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: colors.slate,
          }}
        >
          Verktøykassen
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
            Prosjektet er live og åpent for bestilling
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
            { label: "AI-utvikling", id: "utvikling" },
            { label: "Tech", id: "tech" },
            { label: "bsclimbing.no", href: "https://bsclimbing.no" },
          ]}
        />
        <ProblemSection />
        <SolutionSection />
        <FlowSection />
        <AISection />
        <TechSection />
      </main>
    </SiteLayout>
  );
}
