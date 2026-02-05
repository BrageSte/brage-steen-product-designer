interface ProjectBarProps {
  title: string;
  sections: { id: string; label: string }[];
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
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-[rgba(26,26,26,0.6)] hover:text-[#1a1a1a] transition-colors"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
