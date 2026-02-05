import SiteLayout from "@/components/SiteLayout";

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
      className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden"
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
          className="text-xs uppercase tracking-[0.3em] mb-8"
          style={{ color: colors.accent }}
        >
          Material Research Project
        </p>
        <h1
          className="mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(4rem, 12vw, 10rem)",
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
          className="text-lg max-w-[500px] mx-auto mb-12"
          style={{ color: colors.sand }}
        >
          Exploring the potential of kelp as a sustainable material for product
          design and manufacturing.
        </p>
        <div className="flex flex-wrap gap-12 justify-center text-sm max-md:flex-col max-md:gap-6">
          {[
            { label: "Team", value: "Brage Steen, Thomas Rokstad, Ly Nguyen" },
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

      {/* Scroll indicator */}
      <div
        className="absolute bottom-[180px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] animate-bounce"
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
      <div className="absolute bottom-0 left-0 right-0 h-[150px] overflow-hidden">
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
            className="text-lg leading-relaxed mb-4"
            style={{ color: colors.oceanMid, maxWidth: "700px" }}
          >
            In today's society, finding alternative resources to replace
            materials that harm the environment is a growing challenge.
            Materials like plastic, concrete, and aluminum are often
            non-recyclable and non-biodegradable.
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ color: colors.oceanMid, maxWidth: "700px" }}
          >
            Norway aims to produce 20 million tons of seaweed by 2050, creating
            values of approximately 40 billion NOK. With this project, we wanted
            to explore the possibilities of using seaweed as a physical material
            that could contribute positively to the green shift.
          </p>
        </div>
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "4/5", borderRadius: "0 100px 0 100px" }}
        >
          <img
            src="https://bragesteen.wordpress.com/wp-content/uploads/2025/05/fooodruewyrh12-copy.png?w=1024"
            alt="Seaweed material research"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
      title: "Historical Use",
      desc: "In the 18th-19th centuries, seaweed was burned to produce ash for glass production and soap manufacturing. The ash was exported primarily to England and Scotland.",
    },
    {
      title: "Environmental Benefits",
      desc: "Seaweed consumes CO2 during growth, produces oxygen, and acts as a filter for the ocean—absorbing nitrogen, heavy metals, and pollution from fish farms.",
    },
    {
      title: "Future Potential",
      desc: "Norway's long coastline offers near-perfect conditions for seaweed production. The Norwegian Institute for Water Research believes seaweed farming could become the next major industry.",
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
      desc: "The seaweed was ground before cooking, then boiled for 3 hours with sodium carbonate (1 tbsp per 100ml water) to extract alginate and create a workable paste.",
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
      className="py-32 px-8 md:px-16"
      style={{ background: colors.sandLight }}
    >
      <div className="max-w-[1140px] mx-auto">
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
    { src: "https://bragesteen.wordpress.com/wp-content/uploads/2025/05/img_20190911_140238.jpg?w=768", alt: "Seaweed collection" },
    { src: "https://bragesteen.wordpress.com/wp-content/uploads/2025/05/img_20191021_124215.jpg?w=1024", alt: "Material processing" },
    { src: "https://bragesteen.wordpress.com/wp-content/uploads/2025/05/dsc_0720.jpg?w=575", alt: "Lab work" },
    { src: "https://bragesteen.wordpress.com/wp-content/uploads/2025/05/img_0660.jpg?w=768", alt: "Material testing" },
    { src: "https://bragesteen.wordpress.com/wp-content/uploads/2025/05/img_20190904_122137.jpg?w=1024", alt: "Research process" },
    { src: "https://bragesteen.wordpress.com/wp-content/uploads/2025/05/skjermbilde-2019-10-29-kl.-17.04.33.png?w=1024", alt: "Material samples" },
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
          We produced over 90 material samples, testing different combinations
          for strength, texture, smell, and appearance. Each was evaluated on a
          scale of 1-5 by a focus group.
        </p>

        <div className="grid grid-cols-6 gap-4 mt-16 max-lg:grid-cols-3 max-md:grid-cols-2">
          {images.map((img, i) => {
            const colSpan =
              i === 0
                ? "col-span-2 row-span-2 max-lg:col-span-2 max-lg:row-span-1 max-md:col-span-1"
                : i === 3
                ? "col-span-2 max-lg:col-span-1"
                : "";
            return (
              <div
                key={img.src}
                className={`${colSpan} aspect-square relative overflow-hidden rounded-lg cursor-pointer group`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(to top, rgba(10, 22, 40, 0.7) 0%, transparent 50%)`,
                  }}
                />
              </div>
            );
          })}
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
      title: "Takeaway Packaging",
      desc: "A biodegradable alternative to cardboard packaging for food delivery services. The material breaks down naturally if it ends up in nature, while limiting CO2 emissions during production. Could be used for services like Foodora and other delivery platforms.",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    },
    {
      num: "02",
      title: "Restaurant Servingware",
      desc: "The material becomes hard enough for serving, and the organic shrinking during drying creates unique, wave-like edges reminiscent of seaweed in its natural form. Perfect for high-end seafood restaurants where it enhances the dining experience with subtle ocean scents and tactile qualities.",
      image: "https://bragesteen.wordpress.com/wp-content/uploads/2025/05/servering-2-1.png",
    },
    {
      num: "03",
      title: "Biodegradable Plant Pots",
      desc: "A sustainable alternative to plastic pots that can be planted directly in the soil. The seaweed-based container decomposes and acts as fertilizer for the plant. The inside could be waxed to maintain moisture while still allowing decomposition from the outside.",
      image: "https://bragesteen.wordpress.com/wp-content/uploads/2025/05/blomsterpotte1.png?w=768",
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
          Three concepts for seaweed-based products
        </h2>

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
  const stats = [
    { value: "90+", label: "Material samples tested" },
    { value: "4", label: "Seaweed species used" },
    { value: "50%", label: "Typical shrinkage rate" },
    { value: "15t", label: "Pressure tolerance in tests" },
  ];

  return (
    <section className="py-32 px-8 md:px-16 pt-4" style={{ background: colors.foam }}>
      <div className="max-w-[1140px] mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start max-lg:grid-cols-1">
          <div className="flex flex-col gap-8 md:sticky md:top-[148px]">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-lg" style={{ background: colors.sandLight }}>
                <p
                  className="leading-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "3rem",
                    color: colors.kelpDark,
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-sm mt-2" style={{ color: colors.oceanMid }}>
                  {stat.label}
                </p>
              </div>
            ))}
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
              The biggest challenge was drying the seaweed mass without cracking.
              Seaweed holds moisture extremely well, making the drying process
              take 4-5 days. Combined with significant shrinkage (up to 50%),
              this made controlling the final form very difficult.
            </p>
            <p className="mb-6" style={{ color: colors.oceanMid }}>
              Sugar kelp and sawtooth kelp produced the strongest, most
              homogeneous materials. Adding oat juice to the mixture created
              surprisingly hard results—small dried pieces withstood 15 tons of
              pressure without breaking.
            </p>

            <h3
              className="text-3xl mb-4 mt-8"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: colors.oceanDeep,
              }}
            >
              Material Cost Projection
            </h3>
            <p className="mb-6" style={{ color: colors.oceanMid }}>
              Current cost: 8-16 NOK per kg of dried seaweed. By 2050, this is
              projected to drop to 2-4 NOK per kg. Material cost per product
              (100-500g seaweed) ranges from 0.8-4 NOK per unit, making it
              economically viable for disposable applications.
            </p>

            <h3
              className="text-3xl mb-4 mt-8"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: colors.oceanDeep,
              }}
            >
              Best Practices Discovered
            </h3>
            <p style={{ color: colors.oceanMid }}>
              Grinding seaweed before cooking extracts more alginate. Sodium
              carbonate produces better results than vinegar without adding odor.
              Plaster molds work best for drying as they absorb moisture while
              allowing the material to shrink naturally.
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
          className="text-2xl leading-relaxed italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: colors.sand,
          }}
        >
          "Seaweed has fascinating properties and we believe it can be utilized
          in many different contexts. While we didn't fully solve the challenge
          we set for ourselves, the material's extreme hardness and durability
          show real promise for future development with more time and
          specialized expertise."
        </p>
      </div>
    </section>
  );
}

// Main Component
export default function SeaweedProject() {
  return (
    <SiteLayout>
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
