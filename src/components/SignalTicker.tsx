import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

interface Signal {
  apodo: string;
  mercado: string;
  usd: number;
  prob: number;
}

const mockSignals: Signal[] = [
  { apodo: "El Oráculo", mercado: "Will Trump win 2024?", usd: 2500, prob: 75 },
  { apodo: "La Ballena Blanca", mercado: "Bitcoin above $50k by Dec?", usd: 5000, prob: 82 },
  { apodo: "El Arquitecto", mercado: "Fed rate cut in Q4?", usd: 3200, prob: 68 },
  { apodo: "El Tiburón", mercado: "Ethereum 2025 outlook", usd: 1800, prob: 71 },
  { apodo: "La Sombra", mercado: "Tech stocks rally", usd: 4100, prob: 79 },
  { apodo: "El Estratega", mercado: "Oil prices volatility", usd: 2900, prob: 73 },
];

export function SignalTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockSignals.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const signal = mockSignals[currentIndex];

  return (
    <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-gradient-to-r from-neon/5 to-electric/5">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-neon" />
          <span className="font-semibold text-sm text-neon">LIVE SIGNALS</span>
        </div>
        <span className="text-xs text-muted-foreground">
          {currentIndex + 1} / {mockSignals.length}
        </span>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Trader Alias
          </p>
          <p className="text-lg sm:text-xl font-bold text-neon">{signal.apodo}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Market
          </p>
          <p className="text-sm sm:text-base text-foreground line-clamp-2">
            {signal.mercado}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="rounded-lg bg-neon/10 border border-neon/20 p-3">
            <p className="text-xs text-muted-foreground mb-1">Amount</p>
            <p className="font-semibold text-sm text-neon">
              ${signal.usd.toLocaleString()}
            </p>
          </div>
          <div className="rounded-lg bg-electric/10 border border-electric/20 p-3">
            <p className="text-xs text-muted-foreground mb-1">Probability</p>
            <p className="font-semibold text-sm text-electric">{signal.prob}%</p>
          </div>
          <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3">
            <p className="text-xs text-muted-foreground mb-1">Confidence</p>
            <p className="font-semibold text-sm text-amber-500">85/100</p>
          </div>
        </div>

        <div className="flex gap-1 justify-center pt-4">
          {mockSignals.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex ? "bg-neon w-4" : "bg-border w-1.5"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}