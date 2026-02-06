import SiteLayout from "@/components/SiteLayout";
import ProjectBar from "@/components/ProjectBar";
import { sortingGuideSections, colors, basePath } from "./navigation";

export default function GigamapPage() {
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
    <SiteLayout>
      <ProjectBar
        title="The Sorting Guide"
        sections={sortingGuideSections}
      />
      <main id="main-content" className="bg-background">
        {/* Header */}
        <header
          className="text-white text-center py-24 px-8"
          style={{ background: colors.greenDeep }}
        >
          <h1
            className="mb-4"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Gigamap: Waste in the World
          </h1>
          <p
            className="text-lg max-w-[600px] mx-auto"
            style={{ opacity: 0.8 }}
          >
            A comprehensive research map exploring the complex systems of waste
            management and recycling
          </p>
        </header>

        {/* Content */}
        <div
          className="max-w-[1400px] mx-auto px-8 py-16"
          style={{ background: colors.cream }}
        >
          {/* Intro */}
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Understanding Complexity
            </h2>
            <p className="text-gray-600 text-lg">
              For a better understanding of the current waste situation, we
              developed a research map explaining the world of waste. This has
              provided a foundation for choices made throughout the project.
            </p>
          </div>

          {/* Gigamap Image Container */}
          <div
            className="bg-white rounded-3xl p-8 mb-16"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: colors.warmGray }}
            >
              {/* Gigamap PNG - placeholder for user to add image later */}
              <img
                src={`${basePath}/gigamap.png`}
                alt="Gigamap: Waste in the World - comprehensive research visualization"
                className="w-full h-auto block"
                onError={(e) => {
                  // Show placeholder if image not found
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

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-white rounded-2xl p-8"
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

          {/* Key Research Areas */}
          <div className="max-w-[800px] mx-auto text-center">
            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Key Research Areas
            </h2>
            <p className="text-gray-600 text-lg">
              The Gigamap covers multiple interconnected systems including
              government regulations, business responsibilities, municipal waste
              collection, recycling facilities, and household sorting behaviors.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="text-white text-center py-12 px-8"
          style={{ background: colors.greenDeep }}
        >
          <p>
            Part of{" "}
            <a
              href="/projects/sorting-guide"
              className="hover:underline"
              style={{ color: colors.greenPale }}
            >
              The Sorting Guide
            </a>{" "}
            bachelor project
          </p>
        </footer>
      </main>
    </SiteLayout>
  );
}
