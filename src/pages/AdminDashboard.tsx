import { NavHeader } from "@/components/layout/nav-header";
import { Users, Building2, Briefcase, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Workers", value: 5247, icon: Users, color: "bg-primary" },
    { label: "Total Employers", value: 523, icon: Building2, color: "bg-secondary" },
    { label: "Active Jobs", value: 1847, icon: Briefcase, color: "bg-accent" },
    { label: "Verified Profiles", value: 4102, icon: CheckCircle, color: "bg-available" },
  ];

  const pendingVerifications = [
    { name: "Rajesh Kumar", skill: "Tailor", submitted: "2 hours ago" },
    { name: "Sunita Devi", skill: "Cutter", submitted: "4 hours ago" },
    { name: "Mohit Singh", skill: "Loader", submitted: "1 day ago" },
    { name: "Priya Sharma", skill: "Helper", submitted: "1 day ago" },
  ];

  const recentActivity = [
    { action: "New worker signup", user: "Amit Patel", time: "5 min ago", type: "success" },
    { action: "Job posted", user: "ABC Textiles", time: "15 min ago", type: "info" },
    { action: "Profile verified", user: "Kavita Joshi", time: "1 hour ago", type: "success" },
    { action: "Verification pending", user: "Raju Singh", time: "2 hours ago", type: "warning" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
              🛡️ Admin Dashboard
            </h1>
            <p className="text-muted-foreground">Monitor and manage the platform</p>
          </div>

          {/* Stats Grid */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {stats.map((stat, i) => (
              <div key={i} className="card-friendly text-center">
                <div className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3",
                  stat.color
                )}>
                  <stat.icon size={28} className="text-primary-foreground" />
                </div>
                <div className="text-3xl font-extrabold text-foreground">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pending Verifications */}
            <section className="card-friendly animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock size={20} className="text-warning" />
                Pending Verifications
              </h2>
              <div className="space-y-3">
                {pendingVerifications.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border">
                        👤
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.skill} • {item.submitted}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                      Verify
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Activity */}
            <section className="card-friendly animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <AlertTriangle size={20} className="text-info" />
                Recent Activity
              </h2>
              <div className="space-y-3">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                    <div className={cn(
                      "w-3 h-3 rounded-full",
                      item.type === "success" && "bg-available",
                      item.type === "info" && "bg-info",
                      item.type === "warning" && "bg-warning"
                    )} />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{item.action}</p>
                      <p className="text-sm text-muted-foreground">{item.user} • {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Quick Stats Visual */}
          <section className="mt-8 card-friendly animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <h2 className="text-lg font-bold mb-4">📊 Platform Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-4xl mb-2">🟢</div>
                <div className="text-2xl font-bold text-available">78%</div>
                <div className="text-sm text-muted-foreground">Workers Available</div>
              </div>
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-warning">4.2</div>
                <div className="text-sm text-muted-foreground">Avg. Rating</div>
              </div>
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-4xl mb-2">📞</div>
                <div className="text-2xl font-bold text-info">342</div>
                <div className="text-sm text-muted-foreground">Calls Today</div>
              </div>
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-4xl mb-2">✅</div>
                <div className="text-2xl font-bold text-secondary">156</div>
                <div className="text-sm text-muted-foreground">Hires This Week</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
