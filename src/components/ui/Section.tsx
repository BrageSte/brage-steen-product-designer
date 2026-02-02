import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

const Section = ({ children, className, id, animate = true }: SectionProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  if (!animate) {
    return (
      <section id={id} className={cn("section-spacing", className)}>
        {children}
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "section-spacing reveal",
        isVisible && "visible",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
