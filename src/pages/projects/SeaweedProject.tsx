import Prosjektbilde from "@/components/Prosjektbilde";
import SiteLayout from "@/components/SiteLayout";
import ProjectBar from "@/components/ProjectBar";

const basePath = "/projects/seaweed";

// Color tokens matching the original design
const colors = {
  oceanDeep: "#0a1628",
  oceanMid: "#1a3a4a",
  kelpDark: "#2d4a3e",
  kelpLight: "#4a7c59",
  sand: "#d4c5a9",
  sandLight: "#f0ebe0",
  foam: "#ffffff",
  accent: "#7fb069",
};

function HeroSection() {
  return (
    <section
      className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden -mt-[120px] pt-[220px] pb-[240px] max-md:pt-[160px] max-md:pb-[200px]"
      style={{
        background: `linear-gradient(180deg, ${colors.oceanDeep} 0%, ${colors.oceanMid} 50%, ${colors.kelpDark} 100%)`,
      }}
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(74, 124, 89, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(127, 176, 105, 0.2) 0%, transparent 40%)
          `,
        }}
      />

      {/* Floating elements */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10 top-[20%] -left-[150px] animate-pulse"
        style={{ background: colors.kelpLight }}
      />
      <div
        className="absolute w-[200px] h-[200px] rounded-full opacity-10 bottom-[30%] -right-[100px] animate-pulse"
        style={{ background: colors.accent, animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="text-center z-10 px-8 animate-fade-in-up">
        <p
          className="text-xs uppercase tracking-[0.3em] mb-8 max-md:mb-4"
          style={{ color: colors.accent }}
        >
          Materialutforsking · 2019
        </p>
        <h1
          className="mb-6 max-md:mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3rem, 12vw, 10rem)",
            color: colors.foam,
            lineHeight: 0.9,
          }}
        >
          Ting av tang
          <span
            className="block italic"
            style={{
              fontSize: "0.6em",
              color: colors.sand,
            }}
          >
            Materialutforsking
          </span>
        </h1>
        <p
          className="text-lg max-w-[500px] mx-auto mb-12 max-md:mb-8 max-md:text-base"
          style={{ color: colors.sand }}
        >
          Vi undersøkte hvordan tang kunne bearbeides til et materiale for enkle produktkonsepter, og hva som skjedde når prøvene tørket.
        </p>
        <div className="flex flex-wrap gap-12 justify-center text-sm max-md:flex-col max-md:gap-6">
          {[
            { label: "Gruppe", value: "Brage Steen, Thomas Rokstad og Ly Nguyen" },
            { label: "Brages hovedansvar", value: "Utvikling av testmetoder" },
            { label: "År", value: "2019" },
          ].map((item) => (
            <span
              key={item.label}
              className="flex flex-col gap-1"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {item.label}
              <strong className="font-medium" style={{ color: colors.foam }}>
                {item.value}
              </strong>
            </span>
          ))}
        </div>
      </div>

      {/* Wave container */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] max-md:h-[120px] overflow-hidden">
        <div
          className="absolute bottom-0 -left-full w-[300%] h-full"
          style={{
            background: colors.sandLight,
            borderRadius: "100% 100% 0 0",
            animation: "wave 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 -left-full w-[300%] h-full opacity-50"
          style={{
            background: colors.sandLight,
            borderRadius: "100% 100% 0 0",
            animation: "wave 10s ease-in-out infinite",
            animationDelay: "-2s",
          }}
        />
        <div
          className="absolute bottom-0 -left-full w-[300%] h-full opacity-30"
          style={{
            background: colors.sandLight,
            borderRadius: "100% 100% 0 0",
            animation: "wave 12s ease-in-out infinite",
            animationDelay: "-4s",
          }}
        />
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(20px); }
          50% { transform: translateX(2%) translateY(0); }
        }
      `}</style>
    </section>
  );
}

function OverviewSection() {
  return (
    <section
      id="overview"
      className="py-32 px-8 md:px-16"
      style={{ background: colors.sandLight }}
    >
      <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-24 items-center max-lg:grid-cols-1">
        <div>
          <p
            className="text-[0.7rem] uppercase tracking-[0.3em] mb-4"
            style={{ color: colors.kelpLight }}
          >
            Spørsmålet
          </p>
          <h2
            className="mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              maxWidth: "800px",
            }}
          >
            Kan tang bearbeides til et materiale for enkle produktkonsepter?
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: colors.oceanMid, maxWidth: "700px" }}
          >
            Vi utforsket spørsmålet gjennom materialforsøk. Prøvene var vanskelige å tørke, sprakk og krympet. Arbeidet ga læring om fremgangsmåten, men dokumenterte ikke miljøegenskaper eller kommersiell ytelse.
          </p>
        </div>
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "4/5", borderRadius: "0 100px 0 100px" }}
        >
          <Prosjektbilde
            src={`${basePath}/nett/overview.jpg`}
            alt="Tangprøver fra materialutforskningen"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              border: `1px solid ${colors.kelpLight}`,
              borderRadius: "inherit",
              opacity: 0.3,
            }}
          />
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: 1,
      title: "Prøver",
      desc: "Gruppen samlet og forberedte tangprøver til videre forsøk.",
    },
    {
      num: 2,
      title: "Bearbeiding",
      desc: "Rapporten beskriver bearbeiding av tang til en masse som kunne formes.",
    },
    {
      num: 3,
      title: "Ulike blandinger",
      desc: "Gruppen undersøkte blandinger og tilsetninger som del av materialforsøkene.",
    },
    {
      num: 4,
      title: "Tørking og form",
      desc: "Tørkingen var vanskelig å kontrollere. Prøvene sprakk og krympet, og dette påvirket valg av videre forsøk.",
    },
  ];

  return (
    <section
      id="process"
      className="py-32 px-8 md:px-16 relative overflow-hidden"
      style={{ background: colors.sandLight }}
    >
      {/* Background image placeholder - blurry/grainy effect */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("${basePath}/nett/seaweed-collection.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) grayscale(50%)",
        }}
      />
      <div className="max-w-[1140px] mx-auto relative z-10">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] mb-4" style={{ color: colors.kelpLight }}>
          Arbeidsmåte
        </p>
        <h2
          className="mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            maxWidth: "800px",
          }}
        >
          Forsøk med bearbeiding og tørking
        </h2>
        <p className="text-lg leading-relaxed max-w-[700px]" style={{ color: colors.oceanMid }}>
          Jeg hadde hovedansvar for å utvikle testmetoder. Arbeidet besto av praktiske forsøk med prøver, blandinger og tørking; det fant ikke fram til en dokumentert, optimal materialoppskrift.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16 max-lg:grid-cols-2 max-md:grid-cols-1">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-8 bg-white rounded-xl transition-all duration-400 hover:-translate-y-2 hover:shadow-xl"
              style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.05)" }}
            >
              <span
                className="absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{ background: colors.kelpLight, color: colors.foam }}
              >
                {step.num}
              </span>
              <h3
                className="text-xl mb-3 mt-2"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: colors.oceanDeep,
                }}
              >
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: colors.oceanMid }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialsSection() {
  const images = [
    { src: `${basePath}/nett/seaweed-collection.jpg`, alt: "Tang samlet til materialforsøk" },
    { src: `${basePath}/nett/material-processing.jpg`, alt: "Bearbeiding av tangprøver" },
    { src: `${basePath}/nett/lab-work.jpg`, alt: "Arbeid med prøver på verkstedet" },
    { src: `${basePath}/nett/material-testing.jpg`, alt: "Utprøving av tangbaserte prøver" },
    { src: `${basePath}/nett/research-process.jpg`, alt: "Prøver fra arbeidsprosessen" },
    { src: `${basePath}/nett/material-samples.jpg`, alt: "Ulike materialprøver" },
  ];

  return (
    <section
      className="py-32 px-8 md:px-16 pb-16"
      style={{
        background: `linear-gradient(180deg, ${colors.sandLight} 0%, ${colors.sand} 100%)`,
      }}
    >
      <div className="max-w-[1140px] mx-auto">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] mb-4" style={{ color: colors.kelpLight }}>
          Prøvene
        </p>
        <h2
          className="mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            maxWidth: "800px",
          }}
        >
          Materialprøver
        </h2>
        <p className="text-lg leading-relaxed max-w-[700px]" style={{ color: colors.oceanMid }}>
          Prøvene viste utfordringer med tørking, sprekker og krymp. Rapporten omtaler også en fokusgruppe. Forsøkene var utforskende og utgjorde ikke standardisert materialtesting.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-16 max-md:grid-cols-2">
          {images.map((img) => (
            <div
              key={img.src}
              className="aspect-square relative overflow-hidden rounded-xl"
            >
              <Prosjektbilde
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-x-0 bottom-0 flex items-end p-4"
                style={{
                  background: `linear-gradient(to top, rgba(10, 22, 40, 0.8) 0%, transparent 60%)`,
                }}
              >
                <span className="text-white text-sm font-medium">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptsSection() {
  const concepts = [
    {
      num: "01",
      title: "Emballasje til takeaway",
      desc: "Et konsept for takeaway-emballasje.",
      image: `${basePath}/nett/takeaway.jpg`,
    },
    {
      num: "02",
      title: "Serveringsprodukter",
      desc: "Et konsept for servering i restaurant.",
      image: `${basePath}/nett/servering.jpg`,
    },
    {
      num: "03",
      title: "Blomsterpotte",
      desc: "Et konsept for en blomsterpotte.",
      image: `${basePath}/nett/blomsterpotte.jpg`,
    },
  ];

  return (
    <section
      id="concepts"
      className="py-32 px-8 md:px-16 text-white"
      style={{ background: colors.kelpDark }}
    >
      <div className="max-w-[1140px] mx-auto">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] mb-4" style={{ color: colors.accent }}>
          Konsepter
        </p>
        <h2
          className="mb-20 text-white"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            maxWidth: "800px",
          }}
        >
          Tre produktkonsepter
        </h2>
        <p className="text-lg leading-relaxed max-w-[700px] mb-12" style={{ color: colors.sand }}>
          Konseptene utforsket mulige bruksområder. Prosjektet dokumenterte ikke at materialet var egnet til emballasje, serveringsprodukter eller blomsterpotter.
        </p>

        <div className="space-y-0">
          {concepts.map((concept, i) => (
            <div
              key={concept.num}
              className={`grid md:grid-cols-2 gap-24 items-center py-16 border-t border-white/10 max-lg:grid-cols-1 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
            >
              <div className="py-8" style={{ direction: "ltr" }}>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] mb-4" style={{ color: colors.accent }}>
                  Konsept {concept.num}
                </p>
                <h3
                  className="text-4xl mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: colors.sand,
                  }}
                >
                  {concept.title}
                </h3>
                <p className="text-[1.05rem] mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {concept.desc}
                </p>
              </div>
              <div
                className="overflow-hidden rounded-xl relative"
                style={{ aspectRatio: "4/3", direction: "ltr" }}
              >
                <Prosjektbilde
                  src={concept.image}
                  alt={concept.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchDataSection() {
  return (
    <section
      className="py-32 px-8 md:px-16 pt-4 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.foam} 0%, ${colors.sandLight} 100%)`,
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle, ${colors.kelpLight} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none opacity-15"
        style={{
          background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
        }}
      />
      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start max-lg:grid-cols-1">
          <div className="flex flex-col gap-8 md:sticky md:top-[148px]">
            <div className="p-6 rounded-lg" style={{ background: colors.sandLight }}>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] mb-4" style={{ color: colors.kelpLight }}>
                Forsøksramme
              </p>
              <p className="leading-relaxed" style={{ color: colors.oceanMid }}>
                Rapporten beskriver flere verkstedforsøk med små prøver. De gir ikke en standardisert materialmåling.
              </p>
            </div>
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] mb-4" style={{ color: colors.kelpLight }}>
              Observasjoner
            </p>
            <h3
              className="text-3xl mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: colors.oceanDeep,
              }}
            >
              Tørking og sprekker
            </h3>
            <p className="mb-6" style={{ color: colors.oceanMid }}>
              Prøvene sprakk og krympet under tørking. Det var vanskelig å styre sluttformen, og dette ble et sentralt problem i arbeidet.
            </p>
            <p className="mb-6" style={{ color: colors.oceanMid }}>
              I ett verkstedforsøk la gruppen små, tørre biter mellom stålplater i en hydraulisk presse. Rapporten sier at pressen ble stoppet på 15 tonn. Forsøket var avgrenset og gir ikke en standardisert styrkemåling eller generell materialgrense.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

function ReflectionSection() {
  return (
    <section
      id="reflection"
      className="py-32 px-8 md:px-16 text-center text-white"
      style={{
        background: `linear-gradient(135deg, ${colors.oceanDeep} 0%, ${colors.kelpDark} 100%)`,
      }}
    >
      <div className="max-w-[900px] mx-auto">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] mb-4" style={{ color: colors.accent }}>
          Læring
        </p>
        <h2
          className="mb-8 text-white"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          Hva vi lærte
        </h2>
        <p
          className="text-xl leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: colors.sand,
          }}
        >
          Når tørking, sprekker og krymp stadig hindret arbeidet, burde vi ha stoppet tidligere for å evaluere metodene og vurdere en ny retning.
        </p>
      </div>
    </section>
  );
}

// Main Component
const seaweedSections = [
  { id: "overview", label: "Oppgaven" },
  { id: "process", label: "Forsøk" },
  { id: "concepts", label: "Konsepter" },
  { id: "reflection", label: "Læring" },
];

export default function SeaweedProject() {
  return (
    <SiteLayout>
      <ProjectBar
        title="Ting av tang"
        sections={seaweedSections}
      />
      <main id="main-content" className="bg-background">
        <HeroSection />
        <OverviewSection />
        <ProcessSection />
        <MaterialsSection />
        <ConceptsSection />
        <ResearchDataSection />
        <ReflectionSection />
      </main>
    </SiteLayout>
  );
}
