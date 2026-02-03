import './HeroOrb.css';

interface HeroOrbProps {
  variant?: 'warm' | 'cool' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function HeroOrb({
  variant = 'warm',
  size = 'lg',
  className = '',
}: HeroOrbProps) {
  return (
    <div
      className={`hero-orb hero-orb--${variant} hero-orb--${size} ${className}`}
      aria-hidden="true"
    >
      <div className="hero-orb__glow hero-orb__glow--1" />
      <div className="hero-orb__glow hero-orb__glow--2" />
      <div className="hero-orb__glow hero-orb__glow--3" />
    </div>
  );
}
