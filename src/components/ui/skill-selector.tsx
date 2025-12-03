import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { id: "tailor", name: "Tailor", icon: "🧵" },
  { id: "cutter", name: "Cutter", icon: "✂️" },
  { id: "helper", name: "Helper", icon: "📏" },
  { id: "loader", name: "Loader", icon: "🚚" },
  { id: "packer", name: "Packer", icon: "📦" },
  { id: "quality", name: "Quality", icon: "✅" },
];

interface SkillSelectorProps {
  selected: string[];
  onSelect: (skills: string[]) => void;
}

export function SkillSelector({ selected, onSelect }: SkillSelectorProps) {
  const toggleSkill = (skillId: string) => {
    if (selected.includes(skillId)) {
      onSelect(selected.filter((s) => s !== skillId));
    } else {
      onSelect([...selected, skillId]);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {skills.map((skill) => {
        const isSelected = selected.includes(skill.id);
        return (
          <button
            key={skill.id}
            onClick={() => toggleSkill(skill.id)}
            className={cn(
              "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200",
              "hover:scale-105 active:scale-95",
              isSelected
                ? "bg-primary/10 border-primary text-primary"
                : "bg-card border-border hover:border-primary/50"
            )}
          >
            <span className="text-3xl mb-2">{skill.icon}</span>
            <span className="text-sm font-bold">{skill.name}</span>
            {isSelected && (
              <Check size={16} className="mt-1 text-primary" />
            )}
          </button>
        );
      })}
    </div>
  );
}
