import SiteLayout from "@/components/SiteLayout";
import ProjectBar from "@/components/ProjectBar";
import { sortingGuideSections, colors, basePath } from "./sorting-guide/navigation";

// Hero Section
function HeroSection() {
  return (
    <section
      className="min-h-screen relative flex flex-col overflow-hidden"
      style={{ background: colors.greenDeep }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${basePath}/images-153.png`}
          alt="Let's Sort This Out - Campaign mockup"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(135deg, rgba(26, 51, 41, 0.85) 0%, rgba(45, 90, 71, 0.75) 50%, rgba(26, 51, 41, 0.85) 100%)`,
        }}
      />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-8 py-24 relative z-[2]">
        <span
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider mb-10"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: colors.greenPale }}
          />
          Bachelor Project 2020
        </span>

        <h1
          className="text-white mb-2"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          The Sorting Guide
        </h1>

        <p
          className="mb-8"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            color: colors.greenPale,
            opacity: 0.9,
          }}
        >
          Kildesorteringsguiden
        </p>

        <p
          className="text-lg max-w-xl mb-12"
          style={{ color: "rgba(255,255,255,0.75)", fontWeight: 300 }}
        >
          A service design project empowering Norwegian households to recycle
          correctly through personalized guidance and smart product
          recommendations.
        </p>

        <div className="flex flex-wrap justify-center gap-16 max-md:flex-col max-md:gap-6 max-md:items-center">
          {[
            { label: "Duration", value: "Jan – May 2020" },
            { label: "Partner", value: "IKEA Norway" },
            { label: "Institution", value: "OsloMet University" },
            { label: "Discipline", value: "Service Design" },
          ].map((item) => (
            <div key={item.label} className="text-left max-md:text-center">
              <p
                className="text-[0.7rem] uppercase tracking-[1.5px] mb-1"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {item.label}
              </p>
              <p
                className="text-[0.95rem] font-medium"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="pb-8 flex flex-col items-center gap-3 relative z-[2]"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <div
          className="w-px h-[60px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  return (
    <section id="challenge" className="py-28 px-8" style={{ background: colors.warmGray }}>
      <div className="max-w-[1140px] mx-auto">
        <span
          className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4"
          style={{ color: colors.greenMain }}
        >
          The Challenge
        </span>
        <h2
          className="mb-6"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          A System Under Pressure
        </h2>
        <p className="text-lg text-gray-600 max-w-[640px] leading-relaxed">
          In the complex system of systems that is recycling, there is a major
          responsibility resting on the household's shoulders – the first line
          of recycling.
        </p>

        <div className="grid md:grid-cols-2 gap-20 mt-16 items-center max-lg:grid-cols-1 max-lg:gap-12">
          {/* Visual */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.12)" }}
            >
              <img
                src={`${basePath}/images-010.png`}
                alt="Haraldrud sorting station in Oslo"
                className="w-full block"
              />
            </div>
            {/* Floating stats */}
            <div
              className="absolute -top-5 -right-8 bg-white py-6 px-8 rounded-2xl max-lg:static max-lg:mt-4 max-lg:inline-block"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
            >
              <p
                className="leading-none"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "2.5rem",
                  color: colors.greenMain,
                }}
              >
                60%
              </p>
              <p className="text-sm text-gray-500 mt-1">
                of household waste
                <br />
                not recycled
              </p>
            </div>
            <div
              className="absolute -bottom-5 -left-8 bg-white py-6 px-8 rounded-2xl max-lg:static max-lg:mt-4 max-lg:inline-block max-lg:ml-4"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
            >
              <p
                className="leading-none"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "2.5rem",
                  color: colors.greenMain,
                }}
              >
                #2
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Norway's waste
                <br />
                per capita in Europe
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3
              className="text-3xl mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              The First Line of Recycling
            </h3>
            <p className="text-gray-600 mb-5 text-[1.05rem]">
              Most households are uneducated on the topic of recycling and not
              equipped with the resources necessary to recycle correctly. When
              sorting errors are made at the household level, it creates major
              challenges for the entire recycling process.
            </p>
            <p className="text-gray-600 text-[1.05rem]">
              Different municipalities have different systems, making it
              confusing for people who move or travel. The complexity alienates
              people from participating fully in the recycling mission.
            </p>
            <div
              className="mt-8 p-8 rounded-2xl text-white"
              style={{ background: colors.greenDeep }}
            >
              <p className="text-[0.95rem]" style={{ color: "rgba(255,255,255,0.85)" }}>
                <strong style={{ color: colors.greenPale }}>
                  Earth Overshoot Day 2019:
                </strong>{" "}
                July 29th – the day when humanity had used all the regenerative
                resources of that year. Improving recycling rates is crucial for
                a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Design Question Section
function QuestionSection() {
  return (
    <section
      className="py-20 px-8 text-center"
      style={{ background: colors.greenForest }}
    >
      <div className="max-w-[860px] mx-auto">
        <blockquote
          className="text-white leading-relaxed"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontStyle: "italic",
          }}
        >
          <span style={{ color: colors.greenPale, opacity: 0.5 }}>"</span>
          How can we improve household recycling by guiding people looking for
          recycling solutions, to information and offerings based on their
          household needs, that leads to minimizing general waste?
          <span style={{ color: colors.greenPale, opacity: 0.5 }}>"</span>
        </blockquote>
      </div>
    </section>
  );
}

// Research Section
function ResearchSection() {
  const methods = [
    "Home Visits",
    "Workshops",
    "Field Research",
    "User Interviews",
    "Design Probes",
    "Journey Mapping",
  ];

  const galleryImages = [
    { src: "images-044.png", caption: "Co-creation sessions with partners" },
    { src: "images-030.png", caption: "Field research at IKEA" },
    { src: "images-063.png", caption: "OBOS Living Lab visit" },
    { src: "images-154.png", caption: "User journey mapping" },
    { src: "images-016.png", caption: "The project team" },
    { src: "images-137.png", caption: "Service marketing concept" },
  ];

  return (
    <section id="research" className="py-28 px-8" style={{ background: colors.cream }}>
      <div className="max-w-[1140px] mx-auto">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-16 mb-20 items-start max-lg:grid-cols-1">
          <div className="pt-4">
            <span
              className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4"
              style={{ color: colors.greenMain }}
            >
              Research Phase
            </span>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Understanding the Complexity
            </h2>
            <p className="text-lg text-gray-600 max-w-[640px] leading-relaxed">
              The research process was conducted using a qualitative approach.
              We used observation, interviews, design probes, and desktop
              research to gain empathy and understand the complexity of the
              recycling problem.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {methods.map((method) => (
                <span
                  key={method}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: colors.greenPale, color: colors.greenDeep }}
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative bg-white p-6 rounded-2xl" style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
              <p
                className="leading-none"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "2.5rem",
                  color: colors.greenMain,
                }}
              >
                67+
              </p>
              <p className="text-sm text-gray-500 mt-1">Workshop participants</p>
            </div>
            <div className="relative bg-white p-6 rounded-2xl" style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
              <p
                className="leading-none"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "2.5rem",
                  color: colors.greenMain,
                }}
              >
                5
              </p>
              <p className="text-sm text-gray-500 mt-1">Home visits conducted</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-12 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {galleryImages.map((img, i) => {
            const colSpan =
              i === 0
                ? "col-span-5 max-lg:col-span-2 max-md:col-span-1"
                : i === 1
                ? "col-span-3 max-lg:col-span-1"
                : i === 2
                ? "col-span-4 max-lg:col-span-1"
                : i === 3
                ? "col-span-4 max-lg:col-span-1"
                : i === 4
                ? "col-span-4 max-lg:col-span-1"
                : "col-span-4 max-lg:col-span-2 max-md:col-span-1";
            return (
              <div
                key={img.src}
                className={`${colSpan} rounded-2xl overflow-hidden relative group h-[280px] max-lg:h-[220px]`}
              >
                <img
                  src={`${basePath}/${img.src}`}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,51,41,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                  <span className="text-white text-sm font-medium">
                    {img.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Insights Section
function InsightsSection() {
  const insights = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white stroke-[1.5] fill-none">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Availability",
      description:
        "The placement and availability of recycling bins directly impact recycling rates. More space and convenient placement lead to increased recycling. Space constraints in homes limit where people can place sorting solutions.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white stroke-[1.5] fill-none">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Education",
      description:
        "People lack sufficient knowledge to recycle efficiently. The complexity of the system and variety of materials confuse and alienate people, distancing them from the recycling mission.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white stroke-[1.5] fill-none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Trust",
      description:
        "Personal barriers include lack of trust in the system. When people don't understand the system, they don't believe in it. It becomes difficult to see how individual actions make a difference.",
    },
  ];

  return (
    <section id="insights" className="py-28 px-8 bg-white">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4"
            style={{ color: colors.greenMain }}
          >
            Key Findings
          </span>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Three Barriers to Recycling
          </h2>
          <p className="text-lg text-gray-600 max-w-[640px] mx-auto leading-relaxed">
            After mapping insights from research, we identified three critical
            barriers that prevent households from recycling effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-lg:grid-cols-1">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="p-10 rounded-3xl transition-all duration-400 hover:-translate-y-2 hover:shadow-xl max-lg:text-center"
              style={{ background: colors.warmGray }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 max-lg:mx-auto"
                style={{
                  background: `linear-gradient(135deg, ${colors.greenMain}, ${colors.greenForest})`,
                }}
              >
                {insight.icon}
              </div>
              <h4
                className="text-2xl mb-4"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                {insight.title}
              </h4>
              <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                {insight.description}
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
    { num: 1, title: "Research", desc: "Qualitative methods to gain empathy and map insights" },
    { num: 2, title: "Ideation", desc: "40+ ideas generated and evaluated against criteria" },
    { num: 3, title: "Prototyping", desc: "From paper wireframes to interactive Adobe XD prototype" },
    { num: 4, title: "Implementation", desc: "User testing, validation with partners, and refinement" },
  ];

  return (
    <section className="py-28 px-8 text-white" style={{ background: colors.greenDeep }}>
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-8">
          <span
            className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4"
            style={{ color: colors.greenPale }}
          >
            Design Process
          </span>
          <h2
            className="mb-6 text-white"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            From Research to Solution
          </h2>
          <p
            className="text-lg max-w-[640px] mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Our iterative design process moved through four core activities,
            continuously overlapping to refine our understanding and solution.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16 relative max-lg:grid-cols-2 max-md:grid-cols-2">
          {/* Connection line */}
          <div
            className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 max-lg:hidden"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
          {steps.map((step) => (
            <div key={step.num} className="text-center relative z-10">
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
                style={{
                  background: `linear-gradient(135deg, ${colors.greenSoft}, ${colors.greenMain})`,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1.75rem",
                }}
              >
                {step.num}
              </div>
              <h4
                className="text-lg mb-2"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  color: colors.greenPale,
                }}
              >
                {step.title}
              </h4>
              <p
                className="text-sm max-w-[180px] mx-auto"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current stroke-2 fill-none">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ),
      title: "Personalized",
      desc: "Solutions based on your specific needs",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current stroke-2 fill-none">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Local Guidelines",
      desc: "Adapted to your municipality's rules",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current stroke-2 fill-none">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      title: "Product Database",
      desc: "Curated IKEA recycling products",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current stroke-2 fill-none">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Tips & Tricks",
      desc: "Smart workarounds for easier sorting",
    },
  ];

  const featureCards = [
    {
      num: "01",
      title: "Home Recycling Builder",
      desc: "The core feature allows users to create a personalized home recycling system based on their living situation, local municipal guidelines, and available products. Enter basic details and receive a tailored setup with clear instructions.",
    },
    {
      num: "02",
      title: "Recycling in Your Area",
      desc: "A user-friendly directory providing quick access to location-specific recycling information. Simply enter your zip code to understand exactly what and how to sort in your municipality.",
    },
    {
      num: "03",
      title: "Product Guide",
      desc: "Products are tagged by waste type, with filter functions helping users quickly find items matching their specific recycling needs. No more guessing which bin works for what.",
    },
    {
      num: "04",
      title: "Tips & Tricks",
      desc: "Smart solutions and practical workarounds gathered during research to make recycling easier and more convenient for everyday life.",
    },
  ];

  return (
    <section id="solution" className="py-28 px-8" style={{ background: colors.cream }}>
      <div className="max-w-[1140px] mx-auto">
        {/* Hero */}
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-20 items-center mb-24 max-lg:grid-cols-1">
          {/* Mockup */}
          <div className="relative">
            <div
              className="bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 50px 100px rgba(0,0,0,0.15)" }}
            >
              <div
                className="flex items-center gap-2 px-5 py-4"
                style={{
                  background: colors.warmGray,
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div
                className="px-8 py-12 min-h-[380px] flex flex-col items-center justify-center text-center text-white"
                style={{ background: colors.greenMain }}
              >
                <div
                  className="text-4xl mb-2"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    letterSpacing: "1px",
                  }}
                >
                  S♻RTING
                </div>
                <div
                  className="text-base font-light uppercase tracking-[3px] mb-6"
                  style={{ color: colors.greenPale }}
                >
                  guide
                </div>
                <p
                  className="text-lg mb-8 max-w-[300px]"
                  style={{ color: colors.cream }}
                >
                  Build your perfect home recycling system
                </p>
                <a
                  href="#prototype"
                  className="inline-block px-10 py-4 bg-white rounded-lg font-semibold text-[0.95rem] transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ color: colors.greenMain }}
                >
                  Try Prototype
                </a>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span
              className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4"
              style={{ color: colors.greenMain }}
            >
              The Solution
            </span>
            <h3
              className="text-4xl mb-6"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                letterSpacing: "-0.02em",
              }}
            >
              The Sorting Guide
            </h3>
            <p className="text-gray-600 text-[1.05rem] mb-5">
              A multi-purpose service platform that serves as both a recycling
              product store and an educational tool. It brings together key
              stakeholders – IKEA, local municipalities, and users – to provide
              personalized recycling guidance.
            </p>
            <p className="text-gray-600 text-[1.05rem]">
              By incorporating education into the purchasing process of
              recycling solutions, we impact users when they're most receptive
              to learning and retaining information.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12 max-sm:grid-cols-1">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: colors.greenPale, color: colors.greenDeep }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">{f.title}</h5>
                    <p className="text-sm text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-8 max-lg:grid-cols-1">
          {featureCards.map((card) => (
            <div
              key={card.num}
              className="bg-white p-10 rounded-3xl border border-[rgba(0,0,0,0.04)] transition-all hover:-translate-y-1.5 hover:shadow-xl"
              style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.04)" }}
            >
              <p
                className="text-5xl leading-none mb-4"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  color: colors.greenPale,
                }}
              >
                {card.num}
              </p>
              <h4
                className="text-xl mb-3"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                {card.title}
              </h4>
              <p className="text-gray-600 text-[0.95rem]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Value Section
function ValueSection() {
  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white stroke-[1.5] fill-none">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      title: "For Users",
      desc: "Customized solutions that fit their home constraints, increased knowledge, and confidence in making correct sorting decisions.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white stroke-[1.5] fill-none">
          <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18" />
        </svg>
      ),
      title: "For Business",
      desc: "Higher customer satisfaction through personalized offerings, opportunity for up-selling, and strengthened brand position in sustainability.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white stroke-[1.5] fill-none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "For Environment",
      desc: "Higher recycling rates reduce waste lost in the system, increase material reuse, and lower demand for virgin products.",
    },
  ];

  return (
    <section className="py-28 px-8" style={{ background: colors.warmGray }}>
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4"
            style={{ color: colors.greenMain }}
          >
            Impact
          </span>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Creating Value Across the Chain
          </h2>
          <p className="text-lg text-gray-600 max-w-[640px] mx-auto leading-relaxed">
            By empowering the first-line of recycling with the necessary tools
            and resources, The Sorting Guide creates added value along the
            entire recycling value chain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-lg:grid-cols-1">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-10 rounded-3xl text-center"
              style={{
                background: `linear-gradient(145deg, ${colors.greenMain}, ${colors.greenForest})`,
              }}
            >
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                {v.icon}
              </div>
              <h4
                className="text-xl mb-3 text-white"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                {v.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.cream }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial integrated */}
        <div
          className="mt-16 p-10 rounded-3xl text-center"
          style={{ background: colors.greenDeep }}
        >
          <blockquote
            className="text-white mb-6 leading-relaxed"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            }}
          >
            "You are spot on. There is definitely a need for this concept. You are
            contributing to limiting the largest leakage in the recycling system."
          </blockquote>
          <div className="text-sm" style={{ color: colors.greenPale }}>
            <strong className="block text-white font-semibold mb-1">
              Kenneth Skauge
            </strong>
            Sustainability Business Partner, IKEA Norway
          </div>
        </div>
      </div>
    </section>
  );
}

// Team Section (includes Partners)
function TeamSection() {
  return (
    <section id="team" className="py-28 px-8 bg-white">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center max-lg:grid-cols-1">
          <div
            className="rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.1)" }}
          >
            <img
              src={`${basePath}/images-016.png`}
              alt="Team photo - Regina von Koch and Brage Steen"
              className="w-full block"
            />
          </div>
          <div>
            <span
              className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4"
              style={{ color: colors.greenMain }}
            >
              The Team
            </span>
            <h3
              className="text-4xl mb-6"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                letterSpacing: "-0.02em",
              }}
            >
              Designed with Purpose
            </h3>
            <p className="text-gray-600 text-[1.05rem] mb-8">
              This bachelor project was developed at Oslo Metropolitan
              University as the concluding thesis for a three-year Product
              Design education. Our shared passion for sustainability and making
              a real difference drove us to tackle the complex challenge of
              household recycling.
            </p>
            <div className="flex gap-8 flex-wrap">
              {[
                { initials: "BS", name: "Brage Steen", role: "Product Designer" },
                { initials: "RK", name: "Regina von Koch", role: "Product Designer" },
              ].map((member) => (
                <div key={member.name} className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-semibold"
                    style={{
                      background: `linear-gradient(135deg, ${colors.greenPale}, ${colors.greenSoft})`,
                      color: colors.greenDeep,
                      fontSize: "1.1rem",
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h5 className="font-semibold">{member.name}</h5>
                    <span className="text-sm text-gray-500">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners subsection */}
        <div className="mt-20 pt-16 border-t border-gray-100 text-center">
          <span
            className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4"
            style={{ color: colors.greenMain }}
          >
            In Collaboration With
          </span>
          <div className="flex justify-center gap-16 flex-wrap mt-6">
            {["IKEA", "Grønt Punkt", "Loop"].map((partner) => (
              <span
                key={partner}
                className="text-xl font-semibold opacity-40 hover:opacity-80 transition-opacity"
                style={{ color: colors.greenDeep }}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Gigamap Section
function GigamapSection() {
  const stats = [
    {
      value: "739 kg",
      title: "Waste Per Capita",
      desc: "Total waste generated per person per year in Norway, making it the second highest in Europe.",
    },
    {
      value: "60%",
      title: "Not Recycled",
      desc: "Over 60% of household waste is not sent to recycling after the waste management facility.",
    },
    {
      value: "21%",
      title: "Household Waste",
      desc: "In Norway, 21% of all waste comes from households - the first line of recycling.",
    },
    {
      value: "186",
      title: "Paris Agreement",
      desc: "Countries signed the Paris Agreement to combat climate change through sustainable practices.",
    },
  ];

  return (
    <section id="gigamap" className="py-28 px-8" style={{ background: colors.cream }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4"
            style={{ color: colors.greenMain }}
          >
            Research Visualization
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Gigamap: Waste in the World
          </h2>
          <p className="text-lg text-gray-600 max-w-[640px] mx-auto leading-relaxed">
            For a better understanding of the current waste situation, we
            developed a research map explaining the world of waste. This has
            provided a foundation for choices made throughout the project.
          </p>
        </div>

        {/* Key Insights - Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.04)" }}
            >
              <p
                className="leading-none mb-2"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "2.5rem",
                  color: colors.greenMain,
                }}
              >
                {stat.value}
              </p>
              <h4 className="font-semibold text-lg mb-2">{stat.title}</h4>
              <p className="text-gray-600 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Gigamap Image */}
        <div
          className="bg-white rounded-3xl p-6 md:p-8"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
        >
          <div className="rounded-2xl overflow-hidden" style={{ background: colors.warmGray }}>
            <img
              src={`${basePath}/gigamap.png`}
              alt="Gigamap: Waste in the World - comprehensive research visualization"
              className="w-full h-auto block"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = "flex";
              }}
            />
            {/* Fallback placeholder */}
            <div
              className="hidden flex-col items-center justify-center text-center p-12"
              style={{ aspectRatio: "16/9" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-20 h-20 mb-6"
                style={{
                  stroke: colors.greenMain,
                  strokeWidth: 1,
                  fill: "none",
                  opacity: 0.6,
                }}
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Gigamap Visualization
              </h3>
              <p className="text-gray-500 max-w-[400px]">
                The full Gigamap visualization will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Prototype Section
function PrototypeSection() {
  const ADOBE_XD_URL =
    "https://xd.adobe.com/embed/60cd8d3c-32ed-435d-7295-8826c2431807-16fc/?fullscreen&hints=on";
  const ADOBE_XD_VIEW_URL =
    "https://xd.adobe.com/view/60cd8d3c-32ed-435d-7295-8826c2431807-16fc/?fullscreen&hints=on";

  return (
    <section
      id="prototype"
      className="py-28 px-8"
      style={{ background: colors.greenDeep }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-[0.7rem] font-semibold uppercase tracking-[2px] mb-4"
            style={{ color: colors.greenPale }}
          >
            Interactive Prototype
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Try the Sorting Guide
          </h2>
          <p
            className="text-lg max-w-[640px] mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Experience the interactive prototype we developed in Adobe XD.
            Navigate through the service and see how it guides users to better
            recycling habits.
          </p>
        </div>

        {/* Desktop: iframe */}
        <div className="hidden md:block">
          <div
            className="bg-white rounded-2xl overflow-hidden mx-auto"
            style={{
              maxWidth: "1200px",
              aspectRatio: "16/10",
              boxShadow: "0 50px 100px rgba(0,0,0,0.3)",
            }}
          >
            <iframe
              src={ADOBE_XD_URL}
              title="The Sorting Guide Interactive Prototype"
              className="w-full h-full border-none"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Instructions */}
          <div className="flex justify-center gap-8 mt-8">
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke={colors.greenPale}
                strokeWidth="2"
              >
                <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
              </svg>
              Click to interact
            </div>
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke={colors.greenPale}
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke={colors.greenPale}
                strokeWidth="2"
                style={{ marginLeft: -8 }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              Navigate screens
            </div>
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke={colors.greenPale}
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              Hover for hints
            </div>
          </div>
        </div>

        {/* Mobile: Warning message */}
        <div className="block md:hidden text-center">
          <div
            className="rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <h3
              className="text-xl text-white mb-3"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Best Viewed on Desktop
            </h3>
            <p className="mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              This interactive prototype is optimized for larger screens.
            </p>
            <a
              href={ADOBE_XD_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background: colors.greenMain }}
            >
              Open in Adobe XD
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Component
export default function SortingGuideProject() {
  return (
    <SiteLayout>
      <ProjectBar
        title="The Sorting Guide — Kildesorteringsguiden"
        sections={sortingGuideSections}
      />
      <main id="main-content" className="bg-background">
        <HeroSection />
        <ProblemSection />
        <TeamSection />
        <QuestionSection />
        <ResearchSection />
        <InsightsSection />
        <ProcessSection />
        <SolutionSection />
        <ValueSection />
        <GigamapSection />
        <PrototypeSection />
      </main>
    </SiteLayout>
  );
}
