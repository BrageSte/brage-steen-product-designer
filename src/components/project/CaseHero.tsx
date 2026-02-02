import ImageWithFallback from "@/components/ui/ImageWithFallback";
import TagPill from "@/components/ui/TagPill";

interface CaseHeroProps {
  title: string;
  subtitle?: string;
  category: string;
  year: string;
  role: string;
  coverImage: string;
}

const CaseHero = ({
  title,
  subtitle,
  category,
  year,
  role,
  coverImage,
}: CaseHeroProps) => {
  return (
    <section className="section-spacing-sm">
      <div className="container-wide">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <TagPill label={category} />
          <span className="text-sm text-muted-foreground">{year}</span>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{role}</span>
        </div>

        {/* Title */}
        <h1 className="text-display-xl mb-4">{title}</h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-body-lg text-muted-foreground max-w-3xl mb-12">
            {subtitle}
          </p>
        )}

        {/* Hero image */}
        <div className="mt-8">
          <ImageWithFallback
            src={coverImage}
            alt={title}
            aspectRatio="video"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseHero;
