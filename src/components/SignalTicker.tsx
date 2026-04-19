import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

interface Signal {
  apodo: string;
  mercado: string;
  usd: number;
  prob: number;
  resultado?: string;
}

export function SignalTicker() {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSignals = async () => {
      try {
        const response = await fetch("https://polymarket-bot-production-5124.up.railway.app/api/signals");
        const data = await response.json();
        
        if (data.signals && data.signals.length > 0) {
          setSignals(data.signals);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching signals:", error);
        setLoading(false);
      }
    };

    fetchSignals();
    const interval = setInterval(fetchSignals, 10000); // Actualiza cada 10s
    return () => clearInterval(interval);
  }, []);

  // Rotación automática cada 5 segundos
  useEffect(() => {
    if (signals.length === 0) return;
    
    const rotationInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % signals.length);
    }, 5000);
    
    return () => clearInterval(rotationInterval);
  }, [signals.length]);

  if (loading || signals.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 text-center text-muted-foreground">
        <p>Cargando señales en vivo...</p>
      </div>
    );
  }

  const currentSignal = signals[currentIndex];
  const emojiResultado = currentSignal.resultado === "ACIERTO" ? "✅" : currentSignal.resultado === "FALLO" ? "❌" : "⏳";

  return (
    <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-gradient-to-r from-neon/5 to-electric/5">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-neon" />
          <span className="font-semibold text-sm text-neon">LIVE SIGNALS</span>
        </div>
        <span className="text-xs text-muted-foreground">
          {currentIndex + 1} / {signals.length}
        </span>
      </div>

      <div className="p-6 space-y-4">
        {/* Apodo y Mercado */}
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Trader Alias
          </p>
          <p className="text-lg sm:text-xl font-bold text-neon">{currentSignal.apodo}</p>
        </div>

        {/* Mercado */}
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Market
          </p>
          <p className="text-sm sm:text-base text-foreground line-clamp-2">
            {currentSignal.mercado}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="rounded-lg bg-neon/10 border border-neon/20 p-3">
            <p className="text-xs text-muted-foreground mb-1">Amount</p>
            <p className="font-semibold text-sm text-neon">
              ${currentSignal.usd.toLocaleString()}
            </p>
          </div>
          <div className="rounded-lg bg-electric/10 border border-electric/20 p-3">
            <p className="text-xs text-muted-foreground mb-1">Probability</p>
            <p className="font-semibold text-sm text-electric">{currentSignal.prob}%</p>
          </div>
          <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3">
            <p className="text-xs text-muted-foreground mb-1">Status</p>
            <p className="font-semibold text-sm">{emojiResultado}</p>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex gap-1 justify-center pt-4">
          {signals.slice(0, 5).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex % 5 ? "bg-neon w-4" : "bg-border w-1.5"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}