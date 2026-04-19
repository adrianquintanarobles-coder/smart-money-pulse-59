import { BarChart3, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";

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
  const stats = {
    total: 247,
    aciertos: 156,
    fallos: 68,
    pendientes: 23,
    tasa_acierto: "70%",
  };

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