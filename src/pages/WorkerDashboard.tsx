import { useState } from "react";
import { Camera, CheckCircle, XCircle, History, Star } from "lucide-react";
import { NavHeader } from "@/components/layout/nav-header";
import { SkillSelector } from "@/components/ui/skill-selector";
import { ExperienceSelector } from "@/components/ui/experience-selector";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WorkerDashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["tailor"]);
  const [experience, setExperience] = useState(3);
  const [photo, setPhoto] = useState<string | null>(null);

  const workHistory = [
    { company: "ABC Textiles", role: "Tailor", rating: 5, date: "Nov 2024" },
    { company: "XYZ Garments", role: "Cutter", rating: 4, date: "Oct 2024" },
    { company: "PQR Factory", role: "Tailor", rating: 5, date: "Sep 2024" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="container mx-auto px-4 py-6 pb-24">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
              👷 Worker Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your profile and availability</p>
          </div>

          {/* Availability Toggle */}
          <section className="card-friendly animate-fade-in">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🟢</span> Your Status
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => setIsAvailable(true)}
                className={cn(
                  "h-20 text-lg font-bold transition-all",
                  isAvailable
                    ? "bg-available hover:bg-available/90"
                    : "bg-muted text-muted-foreground hover:bg-muted"
                )}
              >
                <CheckCircle className="mr-2" size={24} />
                Available
              </Button>
              <Button
                onClick={() => setIsAvailable(false)}
                className={cn(
                  "h-20 text-lg font-bold transition-all",
                  !isAvailable
                    ? "bg-unavailable hover:bg-unavailable/90"
                    : "bg-muted text-muted-foreground hover:bg-muted"
                )}
              >
                <XCircle className="mr-2" size={24} />
                Not Available
              </Button>
            </div>
            <p className="text-center mt-4 text-muted-foreground">
              {isAvailable 
                ? "✓ Employers can see and contact you"
                : "✗ You won't receive new job requests"
              }
            </p>
          </section>

          {/* Profile Photo */}
          <section className="card-friendly animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📸</span> Your Photo
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full bg-muted border-4 border-border flex items-center justify-center overflow-hidden">
                {photo ? (
                  <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl">👤</span>
                )}
              </div>
              <Button variant="outline" className="gap-2">
                <Camera size={20} />
                Upload Photo
              </Button>
            </div>
          </section>

          {/* Skills Selection */}
          <section className="card-friendly animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🔧</span> Your Skills
            </h2>
            <p className="text-muted-foreground mb-4">Tap to select your skills</p>
            <SkillSelector selected={selectedSkills} onSelect={setSelectedSkills} />
          </section>

          {/* Experience */}
          <section className="card-friendly animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">⭐</span> Experience Level
            </h2>
            <p className="text-muted-foreground mb-4 text-center">Tap stars to set your experience</p>
            <ExperienceSelector value={experience} onChange={setExperience} />
          </section>

          {/* Work History */}
          <section className="card-friendly animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <History size={24} />
              Work History
            </h2>
            <div className="space-y-3">
              {workHistory.map((job, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted rounded-xl"
                >
                  <div>
                    <p className="font-bold text-foreground">{job.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {job.role} • {job.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(job.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-warning text-warning" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Save Button */}
          <Button className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90">
            💾 Save Profile
          </Button>
        </div>
      </main>
    </div>
  );
};

export default WorkerDashboard;
