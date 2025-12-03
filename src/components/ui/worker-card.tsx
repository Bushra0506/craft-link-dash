import { cn } from "@/lib/utils";
import { Star, Phone, MapPin } from "lucide-react";
import { Button } from "./button";

interface WorkerCardProps {
  name: string;
  photo?: string;
  skills: string[];
  experience: number;
  available: boolean;
  location?: string;
  onCall?: () => void;
}

const skillIcons: Record<string, string> = {
  tailor: "🧵",
  cutter: "✂️",
  helper: "📏",
  loader: "🚚",
  packer: "📦",
  quality: "✅",
};

export function WorkerCard({
  name,
  photo,
  skills,
  experience,
  available,
  location,
  onCall,
}: WorkerCardProps) {
  return (
    <div className={cn(
      "card-friendly flex flex-col gap-4 animate-fade-in",
      "hover:shadow-hover transition-shadow duration-300"
    )}>
      {/* Status Badge */}
      <div className="flex justify-between items-start">
        <div className={cn(
          "px-3 py-1 rounded-full text-sm font-bold",
          available ? "bg-available/20 text-available" : "bg-unavailable/20 text-unavailable"
        )}>
          {available ? "✓ Available" : "✗ Busy"}
        </div>
      </div>

      {/* Photo & Name */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-border">
          {photo ? (
            <img src={photo} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-2xl">👤</span>
          )}
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">{name}</h3>
          {location && (
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin size={14} /> {location}
            </p>
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-muted rounded-full text-sm font-semibold flex items-center gap-1"
          >
            {skillIcons[skill.toLowerCase()] || "🔧"} {skill}
          </span>
        ))}
      </div>

      {/* Experience */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={cn(
              i < experience ? "fill-warning text-warning" : "text-border"
            )}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">
          {experience} {experience === 1 ? "year" : "years"}
        </span>
      </div>

      {/* Call Button */}
      {onCall && (
        <Button
          onClick={onCall}
          className="w-full mt-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
          size="lg"
        >
          <Phone size={20} className="mr-2" />
          Call Worker
        </Button>
      )}
    </div>
  );
}
