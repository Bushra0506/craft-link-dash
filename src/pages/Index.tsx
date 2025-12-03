import { Link } from "react-router-dom";
import { User, Building2, Info, ArrowRight } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-bounce-gentle inline-block mb-4">
            <span className="text-6xl">🔗</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Worker Connect
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-2">
            A Digital Bridge for the Textile Workforce
          </p>
          <p className="text-lg opacity-80 max-w-xl mx-auto">
            Simple. Visual. Connecting workers and employers.
          </p>
        </div>
      </section>

      {/* Main Actions */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link to="/worker" className="block">
            <IconButton
              icon={User}
              label="Worker Login"
              variant="primary"
              size="lg"
              className="w-full h-full min-h-[180px]"
            />
          </Link>
          
          <Link to="/employer" className="block">
            <IconButton
              icon={Building2}
              label="Employer Login"
              variant="secondary"
              size="lg"
              className="w-full h-full min-h-[180px]"
            />
          </Link>
          
          <Link to="/about" className="block">
            <IconButton
              icon={Info}
              label="About"
              variant="accent"
              size="lg"
              className="w-full h-full min-h-[180px]"
            />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card-friendly text-center animate-fade-in">
            <div className="text-5xl mb-4">👤</div>
            <h3 className="font-bold text-lg mb-2">Create Profile</h3>
            <p className="text-muted-foreground">
              Add your photo and select your skills using simple icons
            </p>
          </div>
          
          <div className="card-friendly text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-5xl mb-4">🟢</div>
            <h3 className="font-bold text-lg mb-2">Set Availability</h3>
            <p className="text-muted-foreground">
              One button to show you're ready for work
            </p>
          </div>
          
          <div className="card-friendly text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-5xl mb-4">📞</div>
            <h3 className="font-bold text-lg mb-2">Get Connected</h3>
            <p className="text-muted-foreground">
              Employers call you directly - no middlemen
            </p>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="card-friendly max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="text-6xl md:text-7xl">🏭👷‍♂️👷‍♀️</div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold mb-2">
                Connecting Textile Factories with Skilled Workers
              </h3>
              <p className="text-muted-foreground mb-4">
                Join thousands of workers and employers already using Worker Connect
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            🔗 Worker Connect © 2024 — Made for textile workers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
