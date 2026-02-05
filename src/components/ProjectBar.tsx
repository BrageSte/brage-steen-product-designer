interface ProjectLink {
  label: string;
  id?: string;      // For anchor links (scrolls to section)
  href?: string;    // For external links (opens page)
  primary?: boolean; // Style as primary action button
}

interface ProjectBarProps {
  title: string;
  sections: ProjectLink[];
}

export default function ProjectBar({ title, sections }: ProjectBarProps) {
  return (
    <div className="sticky top-[72px] z-[1500] bg-[rgba(250,249,247,0.96)] border-b border-[rgba(26,26,26,0.12)] backdrop-blur-[10px]">
      <div className="min-h-[56px] max-w-[1200px] mx-auto px-8 py-2 flex items-center justify-between gap-6 flex-wrap max-md:px-6">
        <div className="flex items-center gap-4 flex-wrap">
          <span
            className="text-base text-[#1a1a1a]"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {title}
          </span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <nav
            className="flex flex-wrap items-center gap-4 text-xs tracking-[0.16em] uppercase"
            role="navigation"
            aria-label="Prosjektmeny"
          >
            {sections.map((section) => {
              const linkHref = section.href || `#${section.id}`;
              const isExternal = !!section.href;

              if (section.primary) {
                return (
                  <a
                    key={section.label}
                    href={linkHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1a1a1a] text-white hover:opacity-90 transition-opacity"
                  >
                    {section.label}
                    {isExternal && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </a>
                );
              }

              return (
                <a
                  key={section.label}
                  href={linkHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="text-[rgba(26,26,26,0.6)] hover:text-[#1a1a1a] transition-colors"
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
