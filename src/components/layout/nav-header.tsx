import { Link, useLocation } from "react-router-dom";
import { Home, User, Building2, Info, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/worker", label: "Worker", icon: User },
  { path: "/employer", label: "Employer", icon: Building2 },
  { path: "/about", label: "About", icon: Info },
  { path: "/admin", label: "Admin", icon: Shield },
];

export function NavHeader() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🔗</span>
            <span className="font-extrabold text-xl text-primary hidden sm:inline">
              Worker Connect
            </span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    "flex flex-col sm:flex-row items-center gap-1 px-3 py-2 rounded-xl transition-all",
                    "hover:bg-muted text-sm font-semibold",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
