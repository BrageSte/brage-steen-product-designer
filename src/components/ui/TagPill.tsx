import { cn } from "@/lib/utils";

interface TagPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const TagPill = ({ label, active = false, onClick, className }: TagPillProps) => {
  const isClickable = !!onClick;

  const classes = cn(
    "tag-pill",
    active && "tag-pill-active",
    isClickable && "cursor-pointer",
    className
  );

  if (isClickable) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {label}
      </button>
    );
  }

  return <span className={classes}>{label}</span>;
};

export default TagPill;
