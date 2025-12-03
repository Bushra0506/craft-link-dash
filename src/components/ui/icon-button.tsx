import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  variant?: "default" | "primary" | "secondary" | "accent" | "available" | "unavailable";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

const variantStyles = {
  default: "bg-card border-border hover:border-primary/50",
  primary: "bg-primary text-primary-foreground border-primary hover:bg-primary/90 shadow-button",
  secondary: "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/90",
  accent: "bg-accent text-accent-foreground border-accent hover:bg-accent/90",
  available: "bg-available text-primary-foreground border-available hover:bg-available/90",
  unavailable: "bg-unavailable text-primary-foreground border-unavailable hover:bg-unavailable/90",
};

const sizeStyles = {
  sm: "p-4 gap-2",
  md: "p-6 gap-3",
  lg: "p-8 gap-4",
};

const iconSizes = {
  sm: 28,
  md: 40,
  lg: 56,
};

export function IconButton({
  icon: Icon,
  label,
  onClick,
  variant = "default",
  size = "md",
  className,
  disabled = false,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border-2 transition-all duration-300",
        "hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-ring/30",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <Icon size={iconSizes[size]} strokeWidth={2} />
      <span className={cn(
        "font-bold text-center leading-tight",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg"
      )}>
        {label}
      </span>
    </button>
  );
}
