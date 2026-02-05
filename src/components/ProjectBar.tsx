interface ProjectLink {
  label: string;
  id?: string;      // For anchor links (scrolls to section)
  href?: string;    // For external links (opens page)
}

interface ProjectBarProps {
  title: string;
  sections: ProjectLink[];
}

// Scroll offset to account for sticky headers
const SCROLL_OFFSET = 140;

function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - SCROLL_OFFSET,
      behavior: "smooth",
    });
  }
}

export default function ProjectBar({ title, sections }: ProjectBarProps) {
  return (
    <div className="sticky top-[72px] z-[1500] bg-[rgba(250,249,247,0.96)] border-b border-[rgba(26,26,26,0.12)] backdrop-blur-[10px]">
      <div className="max-w-[1200px] mx-auto px-8 py-3 flex items-center justify-between gap-4 max-md:px-4 max-md:flex-col max-md:items-start max-md:gap-2">
        {/* Title - hidden on mobile for more space */}
        <div className="flex-shrink-0 max-md:hidden">
          <span
            className="text-base text-[#1a1a1a] whitespace-nowrap"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {title}
          </span>
        </div>

        {/* Navigation - horizontal scroll on mobile */}
        <div className="w-full md:w-auto overflow-x-auto scrollbar-hide">
          <nav
            className="flex items-center gap-4 text-xs tracking-[0.12em] uppercase whitespace-nowrap py-1"
            role="navigation"
            aria-label="Prosjektmeny"
          >
            {sections.map((section) => {
              const isExternal = !!section.href;
              const linkHref = section.href || `#${section.id}`;

              if (isExternal) {
                return (
                  <a
                    key={section.label}
                    href={linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[rgba(26,26,26,0.5)] hover:text-[#1a1a1a] transition-colors"
                  >
                    {section.label}
                    <svg className="w-2.5 h-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                );
              }

              return (
                <a
                  key={section.label}
                  href={linkHref}
                  onClick={(e) => section.id && handleAnchorClick(e, section.id)}
                  className="text-[rgba(26,26,26,0.6)] hover:text-[#1a1a1a] transition-colors"
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Hide scrollbar but keep functionality */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
