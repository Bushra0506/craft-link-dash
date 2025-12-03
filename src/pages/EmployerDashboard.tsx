import { useState } from "react";
import { Search, Filter, Plus, Phone } from "lucide-react";
import { NavHeader } from "@/components/layout/nav-header";
import { WorkerCard } from "@/components/ui/worker-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const skillFilters = [
  { id: "all", name: "All", icon: "👥" },
  { id: "tailor", name: "Tailor", icon: "🧵" },
  { id: "cutter", name: "Cutter", icon: "✂️" },
  { id: "helper", name: "Helper", icon: "📏" },
  { id: "loader", name: "Loader", icon: "🚚" },
];

const mockWorkers = [
  { id: 1, name: "Rajesh Kumar", skills: ["Tailor", "Cutter"], experience: 4, available: true, location: "Surat" },
  { id: 2, name: "Priya Sharma", skills: ["Tailor"], experience: 3, available: true, location: "Ahmedabad" },
  { id: 3, name: "Amit Patel", skills: ["Loader", "Helper"], experience: 2, available: false, location: "Surat" },
  { id: 4, name: "Sunita Devi", skills: ["Cutter", "Packer"], experience: 5, available: true, location: "Vadodara" },
  { id: 5, name: "Mohit Singh", skills: ["Tailor"], experience: 1, available: true, location: "Surat" },
  { id: 6, name: "Kavita Joshi", skills: ["Quality", "Packer"], experience: 3, available: false, location: "Ahmedabad" },
];

const EmployerDashboard = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const { toast } = useToast();

  const filteredWorkers = mockWorkers.filter((worker) => {
    const matchesSkill = activeFilter === "all" || 
      worker.skills.some(s => s.toLowerCase() === activeFilter);
    const matchesAvailability = !showAvailableOnly || worker.available;
    return matchesSkill && matchesAvailability;
  });

  const handleCall = (workerName: string) => {
    toast({
      title: "📞 Calling Worker",
      description: `Connecting you to ${workerName}...`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
            🏭 Employer Dashboard
          </h1>
          <p className="text-muted-foreground">Find and hire skilled workers</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Actions */}
          <section className="card-friendly mb-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 h-14 text-lg font-bold bg-accent hover:bg-accent/90">
                <Plus size={24} className="mr-2" />
                Post New Requirement
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 h-14 text-lg font-bold"
                onClick={() => setShowAvailableOnly(!showAvailableOnly)}
              >
                <Filter size={24} className="mr-2" />
                {showAvailableOnly ? "Show All" : "Available Only"}
              </Button>
            </div>
          </section>

          {/* Skill Filters */}
          <section className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Search size={20} />
              Filter by Skill
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "px-4 py-3 rounded-xl font-bold transition-all flex items-center gap-2",
                    "hover:scale-105 active:scale-95",
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border-2 border-border hover:border-primary/50"
                  )}
                >
                  <span className="text-xl">{filter.icon}</span>
                  {filter.name}
                </button>
              ))}
            </div>
          </section>

          {/* Workers Grid */}
          <section className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">
                Available Workers ({filteredWorkers.length})
              </h2>
            </div>
            
            {filteredWorkers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWorkers.map((worker) => (
                  <WorkerCard
                    key={worker.id}
                    name={worker.name}
                    skills={worker.skills}
                    experience={worker.experience}
                    available={worker.available}
                    location={worker.location}
                    onCall={() => handleCall(worker.name)}
                  />
                ))}
              </div>
            ) : (
              <div className="card-friendly text-center py-12">
                <span className="text-5xl mb-4 block">🔍</span>
                <p className="text-lg font-bold text-muted-foreground">
                  No workers found with current filters
                </p>
                <Button
                  variant="link"
                  onClick={() => {
                    setActiveFilter("all");
                    setShowAvailableOnly(false);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </section>

          {/* Post Requirement Card */}
          <section className="mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="card-friendly bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
              <h2 className="text-xl font-bold mb-4">📋 Quick Job Post</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-card rounded-xl p-4 text-center">
                  <span className="text-3xl block mb-2">🧵</span>
                  <span className="text-sm font-bold">Need Tailors</span>
                </div>
                <div className="bg-card rounded-xl p-4 text-center">
                  <span className="text-3xl block mb-2">✂️</span>
                  <span className="text-sm font-bold">Need Cutters</span>
                </div>
                <div className="bg-card rounded-xl p-4 text-center">
                  <span className="text-3xl block mb-2">🚚</span>
                  <span className="text-sm font-bold">Need Loaders</span>
                </div>
                <div className="bg-card rounded-xl p-4 text-center">
                  <span className="text-3xl block mb-2">⚡</span>
                  <span className="text-sm font-bold">Urgent Hire</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
