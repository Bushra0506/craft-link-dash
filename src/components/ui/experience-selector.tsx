import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ExperienceSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export function ExperienceSelector({ value, onChange }: ExperienceSelectorProps) {
  const labels = ["New", "1 Year", "2 Years", "3 Years", "Expert"];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => onChange(level)}
            className={cn(
              "p-3 rounded-xl transition-all duration-200 hover:scale-110 active:scale-95"
            )}
          >
            <Star
              size={36}
              className={cn(
                "transition-colors",
                level <= value
                  ? "fill-warning text-warning"
                  : "text-border hover:text-warning/50"
              )}
            />
          </button>
        ))}
      </div>
      <span className="text-lg font-bold text-muted-foreground">
        {labels[value - 1] || "Select Experience"}
      </span>
    </div>
  );
}
