import { useState, useEffect, useCallback } from "react";
import SiteLayout from "@/components/SiteLayout";
import ProjectBar from "@/components/ProjectBar";
import { sortingGuideSections, colors } from "./navigation";

const ADOBE_XD_URL =
  "https://xd.adobe.com/embed/60cd8d3c-32ed-435d-7295-8826c2431807-16fc/?fullscreen&hints=on";
const ADOBE_XD_VIEW_URL =
  "https://xd.adobe.com/view/60cd8d3c-32ed-435d-7295-8826c2431807-16fc/?fullscreen&hints=on";

export default function PrototypePage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleFullscreen]);

  return (
    <SiteLayout>
      {!isFullscreen && (
        <ProjectBar title="The Sorting Guide" sections={sortingGuideSections} />
      )}
      <main
        id="main-content"
        className={`flex flex-col ${isFullscreen ? "h-screen" : "min-h-screen"}`}
        style={{ background: colors.greenDeep }}
      >
        {/* Header - hide in fullscreen */}
        {!isFullscreen && (
          <header
            className="flex items-center justify-between px-8 py-4 flex-shrink-0"
            style={{
              background: "rgba(26, 51, 41, 0.95)",
              backdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex items-center gap-4">
              <h1
                className="text-white text-xl"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontWeight: 400,
                }}
              >
                Interactive Prototype
              </h1>
              <span
                className="px-3 py-1.5 rounded-full text-[0.7rem] font-semibold uppercase tracking-wider"
                style={{ background: colors.greenMain, color: "#fff" }}
              >
                Adobe XD
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={ADOBE_XD_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
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
                Open in Adobe XD
              </a>
              <button
                onClick={toggleFullscreen}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: colors.greenMain,
                  color: "#fff",
                  border: `1px solid ${colors.greenMain}`,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
                Fullscreen
              </button>
            </div>
          </header>
        )}

        {/* Prototype Container */}
        <div
          className={`flex-1 flex items-center justify-center relative overflow-hidden ${
            isFullscreen ? "p-0" : "p-8"
          }`}
          style={{
            background: `linear-gradient(180deg, ${colors.greenDeep} 0%, #0f1f18 100%)`,
          }}
        >
          {/* Background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(61, 122, 95, 0.15) 0%, transparent 70%)",
            }}
          />

          {/* Desktop: iframe */}
          <div
            className={`w-full bg-white overflow-hidden relative z-10 max-md:hidden ${
              isFullscreen
                ? "max-w-full h-full rounded-none"
                : "max-w-[1200px] h-[80vh] max-h-[800px] rounded-2xl"
            }`}
            style={{
              boxShadow: isFullscreen
                ? "none"
                : "0 50px 100px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
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

          {/* Mobile: Warning message */}
          <div className="hidden max-md:block text-center text-white px-8 py-12">
            <h2
              className="text-2xl mb-4"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Best Viewed on Desktop
            </h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              This interactive prototype is optimized for larger screens. For
              the best experience, please view on a desktop or tablet.
            </p>
            <a
              href={ADOBE_XD_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background: colors.greenMain }}
            >
              Open in Adobe XD App
            </a>
          </div>

          {/* Instructions overlay - hide in fullscreen and on mobile */}
          {!isFullscreen && (
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 px-8 py-4 rounded-full z-10 max-md:hidden"
              style={{
                background: "rgba(26, 51, 41, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
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
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
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
                Navigate between screens
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
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
          )}
        </div>
      </main>
    </SiteLayout>
  );
}
