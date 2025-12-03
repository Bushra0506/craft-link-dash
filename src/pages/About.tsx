import { NavHeader } from "@/components/layout/nav-header";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <section className="text-center mb-12 animate-fade-in">
            <span className="text-6xl mb-4 block">🔗</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              About Worker Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A Digital Bridge for the Textile Workforce
            </p>
          </section>

          {/* Problem Section */}
          <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-bold mb-6 text-center">
              😔 The Problem
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-friendly">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-3xl">👷</span> Workers Face
                </h3>
                <ul className="space-y-3">
                  {[
                    "Hard to find jobs without smartphone skills",
                    "Depend on middlemen who take commission",
                    "No way to show skills and experience",
                    "Miss opportunities due to language barriers",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="text-unavailable shrink-0 mt-0.5" size={20} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card-friendly">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-3xl">🏭</span> Factories Face
                </h3>
                <ul className="space-y-3">
                  {[
                    "Slow recruitment process delays production",
                    "Hard to verify worker skills quickly",
                    "High turnover rate wastes time",
                    "Difficult to find workers during peak season",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="text-unavailable shrink-0 mt-0.5" size={20} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h2 className="text-2xl font-bold mb-6 text-center">
              ✨ Our Solution
            </h2>
            <div className="card-friendly gradient-hero text-primary-foreground">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Simple Icon-Based Platform
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "No reading needed - just tap icons",
                      "One-button availability toggle",
                      "Visual skills and experience display",
                      "Direct call - no middlemen",
                      "Works on basic smartphones",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="shrink-0 mt-0.5" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center text-7xl">
                  📱✨🤝
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold mb-6 text-center">
              🔄 How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: "📸", title: "Create Profile", desc: "Add photo & skills" },
                { icon: "🟢", title: "Set Available", desc: "One tap to go live" },
                { icon: "🔍", title: "Get Found", desc: "Employers search you" },
                { icon: "📞", title: "Get Hired", desc: "Direct call, no fees" },
              ].map((step, i) => (
                <div key={i} className="card-friendly text-center relative">
                  <span className="text-4xl mb-3 block">{step.icon}</span>
                  <h4 className="font-bold mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                  {i < 3 && (
                    <ArrowRight 
                      className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10" 
                      size={24} 
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <div className="card-friendly bg-muted">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: "5000+", label: "Workers" },
                  { value: "500+", label: "Factories" },
                  { value: "10000+", label: "Jobs Filled" },
                  { value: "15+", label: "Cities" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl md:text-4xl font-extrabold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/worker">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 bg-primary hover:bg-primary/90">
                  👷 I'm a Worker
                </Button>
              </Link>
              <Link to="/employer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                  🏭 I'm an Employer
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            🔗 Worker Connect © 2024 — Empowering the Textile Workforce
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
