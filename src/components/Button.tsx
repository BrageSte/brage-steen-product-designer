import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  to, 
  href, 
  variant = "primary", 
  size = "default",
  showArrow = false,
  className,
  onClick 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center gap-2 font-medium transition-all duration-200 rounded-lg";
  
  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    ghost: "text-foreground hover:bg-secondary",
  };

  const sizes = {
    default: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    "group",
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight 
          size={size === "lg" ? 18 : 16} 
          className="group-hover:translate-x-1 transition-transform" 
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  );
};

export default Button;
