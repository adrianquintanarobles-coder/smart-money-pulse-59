import { useEffect, useState } from "react";
import { BarChart3, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";

interface Stats {
  total: number;
  aciertos: number;
  fallos: number;
  pendientes: number;
  tasa_acierto: string;
}

function Counter({ value, label, icon: Icon, color }: { value: string | number; label: string; icon: any; color: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 text-center">
      <div className={`flex justify-center mb-3 ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
      <p className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{value}</p>
      <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">{label}</p>
    </div>
  );
}

export function LiveStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("https://polymarket-bot-production-5124.up.railway.app/api/stats");
        const data = await response.json();
        setStats(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error);
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Actualiza cada 30s
    return () => clearInterval(interval);
  }, []);

  if (loading || !stats) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-xl border border-border bg-card/60 p-6 animate-pulse">
            <div className="h-8 bg-border/50 rounded mb-3 w-3/4 mx-auto" />
            <div className="h-4 bg-border/50 rounded w-1/2 mx-auto" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Counter
        value={stats.total}
        label="Total Signals"
        icon={BarChart3}
        color="text-neon"
      />
      <Counter
        value={stats.aciertos}
        label="Wins"
        icon={CheckCircle2}
        color="text-green-500"
      />
      <Counter
        value={stats.fallos}
        label="Losses"
        icon={AlertCircle}
        color="text-red-500"
      />
      <Counter
        value={stats.tasa_acierto}
        label="Win Rate"
        icon={TrendingUp}
        color="text-electric"
      />
    </div>
  );
}