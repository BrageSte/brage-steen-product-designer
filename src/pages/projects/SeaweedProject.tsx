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

// Hero Section
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
          Material Research Project
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
          Seaweed
          <span
            className="block italic"
            style={{
              fontSize: "0.6em",
              color: colors.sand,
            }}
          >
            Ting av Tang
          </span>
        </h1>
        <p
          className="text-lg max-w-[500px] mx-auto mb-12 max-md:mb-8 max-md:text-base"
          style={{ color: colors.sand }}
        >
          Exploring seaweed as a material for product concepts through hands-on
          experiments.
        </p>
        <div className="flex flex-wrap gap-12 justify-center text-sm max-md:flex-col max-md:gap-6">
          {[
            { label: "Team", value: "Brage Steen, Thomas Rokstad, Ly Nguyen" },
            { label: "Brage's contribution", value: "Developing test methods" },
            { label: "Duration", value: "11 Weeks" },
            { label: "Year", value: "2019" },
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

      {/* Scroll indicator - positioned above waves */}
      <div
        className="absolute bottom-[190px] max-md:static max-md:translate-x-0 max-md:mt-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] z-10"
        style={{ color: colors.sand }}
      >
        SCROLL
        <span
          className="w-px h-10"
          style={{
            background: `linear-gradient(to bottom, ${colors.sand}, transparent)`,
          }}
        />
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

// Overview Section
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
            The Challenge
          </p>
          <h2
            className="mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              maxWidth: "800px",
            }}
          >
            Can we develop a material from seaweed that can be used to design
            simple products?
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: colors.oceanMid, maxWidth: "700px" }}
          >
            The team explored whether seaweed could be processed into a material
            for simple product concepts. The experiments documented challenges
            with drying, cracking and shrinkage; they did not establish
            environmental or commercial performance.
          </p>
        </div>
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "4/5", borderRadius: "0 100px 0 100px" }}
        >
          <img
            src={`${basePath}/overview.png`}
            alt="Seaweed material research"
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

// Background Section
function BackgroundSection() {
  const cards = [
    {
      title: "Project question",
      desc: "Could seaweed be developed into a material for simple product concepts? The team explored this through hands-on material experiments.",
    },
    {
      title: "Material experiments",
      desc: "The report describes processing, additives and drying trials, including difficulties with cracking and shrinkage.",
    },
    {
      title: "Product directions",
      desc: "The project explored packaging, servingware and plant pots as possible applications.",
    },
  ];

  return (
    <section
      className="py-32 px-8 md:px-16 relative overflow-hidden text-white"
      style={{ background: colors.oceanDeep }}
    >
      {/* Background gradient */}
      <div
        className="absolute -top-1/2 -right-[20%] w-[80%] h-[200%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(74, 124, 89, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1140px] mx-auto relative z-10">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] mb-4" style={{ color: colors.accent }}>
          Context
        </p>
        <h2
          className="mb-8 text-white"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            maxWidth: "800px",
          }}
        >
          Seaweed has deep roots in Norwegian coastal traditions
        </h2>
        <p
          className="text-lg leading-relaxed max-w-[700px]"
          style={{ color: colors.sand }}
        >
          Harvesting seaweed has long traditions along the Norwegian coast,
          serving as a supplementary industry and food source. One of Norway's
          oldest laws, the "Frostatingsloven," states that seaweed belongs to
          the farm it lies by.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-16 max-lg:grid-cols-1">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-lg transition-all duration-400 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                className="text-2xl mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: colors.sand,
                }}
              >
                {card.title}
              </h3>
              <p className="text-[0.95rem]" style={{ color: "rgba(255,255,255,0.7)" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      num: 1,
      title: "Harvesting",
      desc: "We collected seaweed ourselves and received dried sugar kelp from SES (Seaweed Energy Solutions). We primarily used Sagtang, Blæretang, Sukkertare, and Tarmgrønske.",
    },
    {
      num: 2,
      title: "Processing",
      desc: "The report describes grinding and boiling seaweed with sodium carbonate to make a workable paste; the method was part of the team's material experiments.",
    },
    {
      num: 3,
      title: "Testing Additives",
      desc: "We systematically tested organic additives like flour, rice, oat fiber, and oat juice at different ratios (20/80 to 80/20) to improve material stability.",
    },
    {
      num: 4,
      title: "Drying Methods",
      desc: "We experimented with wood molds, plaster forms, vacuum chambers, hydraulic presses, and ceramic kilns to find methods that controlled shrinkage and cracking.",
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
          backgroundImage: `url("${basePath}/seaweed-collection.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) grayscale(50%)",
        }}
      />
      <div className="max-w-[1140px] mx-auto relative z-10">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] mb-4" style={{ color: colors.kelpLight }}>
          Methodology
        </p>
        <h2
          className="mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            maxWidth: "800px",
          }}
        >
          Research & Development Process
        </h2>
        <p className="text-lg leading-relaxed max-w-[700px]" style={{ color: colors.oceanMid }}>
          We developed a systematic approach to processing seaweed, experimenting
          with different species, cooking methods, and additives to find the
          optimal material composition.
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

// Materials Gallery Section
function MaterialsSection() {
  const images = [
    { src: `${basePath}/seaweed-collection.jpg`, alt: "Seaweed collection" },
    { src: `${basePath}/material-processing.jpg`, alt: "Material processing" },
    { src: `${basePath}/lab-work.jpg`, alt: "Lab work" },
    { src: `${basePath}/material-testing.jpg`, alt: "Material testing" },
    { src: `${basePath}/research-process.jpg`, alt: "Research process" },
    { src: `${basePath}/material-samples.png`, alt: "Material samples" },
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
          Experiments
        </p>
        <h2
          className="mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            maxWidth: "800px",
          }}
        >
          Material Testing & Analysis
        </h2>
        <p className="text-lg leading-relaxed max-w-[700px]" style={{ color: colors.oceanMid }}>
          We made material samples and compared combinations for properties
          such as texture and appearance. The report also describes a focus
          group; these explorations were not standardized material testing.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-16 max-md:grid-cols-2">
          {images.map((img) => (
            <div
              key={img.src}
              className="aspect-square relative overflow-hidden rounded-xl cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
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

// Concepts Section
function ConceptsSection() {
  const concepts = [
    {
      num: "01",
      title: "Takeaway packaging concept",
      desc: "Packaging for takeaway food.",
      image: `${basePath}/takeaway.jpg`,
    },
    {
      num: "02",
      title: "Servingware concept",
      desc: "Servingware for restaurant settings.",
      image: `${basePath}/servering.png`,
    },
    {
      num: "03",
      title: "Plant pot concept",
      desc: "A plant pot for growing plants.",
      image: `${basePath}/blomsterpotte.png`,
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
          Design Applications
        </p>
        <h2
          className="mb-20 text-white"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            maxWidth: "800px",
          }}
        >
          Three seaweed-based product concepts
        </h2>
        <p className="text-lg leading-relaxed max-w-[700px] mb-12" style={{ color: colors.sand }}>
          These were concept proposals. The project did not validate the
          material for packaging, servingware or planting.
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
                  Concept {concept.num}
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
                <img
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

// Research Data Section
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
                Method
              </p>
              <p className="leading-relaxed" style={{ color: colors.oceanMid }}>
                The team prepared seaweed samples, explored additives and
                compared drying methods.
              </p>
            </div>
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] mb-4" style={{ color: colors.kelpLight }}>
              Key Findings
            </p>
            <h3
              className="text-3xl mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: colors.oceanDeep,
              }}
            >
              Challenges & Discoveries
            </h3>
            <p className="mb-6" style={{ color: colors.oceanMid }}>
              Drying the mixture proved difficult: samples cracked and shrank,
              which made it hard to control the final form.
            </p>
            <p className="mb-6" style={{ color: colors.oceanMid }}>
              In one workshop trial, small dry pieces were placed between steel
              plates in a hydraulic press. The report says the press was stopped
              at 15 tons; this was not a standardized strength test or a general
              material tolerance.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

// Reflection Section
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
          Conclusion
        </p>
        <h2
          className="mb-8 text-white"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          Looking Forward
        </h2>
        <p
          className="text-xl leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: colors.sand,
          }}
        >
          One lesson from the project: evaluate the methods and change direction
          earlier when drying, cracking and shrinkage become persistent
          obstacles.
        </p>
      </div>
    </section>
  );
}

// Main Component
const seaweedSections = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "concepts", label: "Concepts" },
  { id: "reflection", label: "Reflection" },
];

export default function SeaweedProject() {
  return (
    <SiteLayout>
      <ProjectBar
        title="Seaweed — Ting av Tang"
        sections={seaweedSections}
      />
      <main id="main-content" className="bg-background">
        <HeroSection />
        <OverviewSection />
        <BackgroundSection />
        <ProcessSection />
        <MaterialsSection />
        <ConceptsSection />
        <ResearchDataSection />
        <ReflectionSection />
      </main>
    </SiteLayout>
  );
}
