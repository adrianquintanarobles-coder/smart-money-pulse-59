export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[360px] animate-float-y">
      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-neon/20 via-transparent to-electric/20 blur-3xl" />
      <div className="rounded-[2.5rem] border border-border bg-surface p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        <div className="rounded-[2rem] bg-background overflow-hidden">
          {/* Telegram header */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-3 bg-card/60">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neon to-electric grid place-items-center text-background font-display text-sm font-bold">SM</div>
            <div className="leading-tight">
              <div className="text-sm text-foreground font-display">Smart Money Tracker</div>
              <div className="text-[10px] text-neon flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-dot" /> online
              </div>
            </div>
          </div>
          {/* Chat */}
          <div className="p-3 space-y-2">
            <div className="rounded-2xl rounded-tl-sm bg-card border border-border p-3.5 text-[11.5px] leading-relaxed">
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-neon">🐋 SMART MONEY ALERT</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-neon/15 text-neon border border-neon/30 font-display">VIP</span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="space-y-1.5 text-foreground/90">
                <div><span className="text-muted-foreground">Market:</span> Will BTC exceed $120K before July?</div>
                <div>💰 <span className="text-muted-foreground">Position:</span> <span className="text-foreground">$4,200 on YES</span></div>
                <div>📈 <span className="text-muted-foreground">Wallet ROI:</span> <span className="text-neon">+312%</span> (23 trades) · WR: <span className="text-neon">78%</span></div>
                <div>⚡ <span className="text-muted-foreground">Confidence:</span> <span className="text-amber-score font-display">87/100</span></div>
                <div>🔵 Entry: <span className="text-foreground">0.34¢</span> · Now: <span className="text-neon">0.41¢ ▲</span></div>
                <div className="rounded-md bg-background/60 border border-border p-2 mt-2">
                  <div className="text-electric text-[10px] font-display mb-0.5">🧠 AI ANALYSIS</div>
                  <div className="text-foreground/80 italic">"Institutional accumulation tied to ETF approval expectations."</div>
                </div>
                <div className="text-[10px] text-muted-foreground">📰 "BlackRock files for BTC options" — Bloomberg</div>
                <button className="mt-2 w-full rounded-lg bg-electric/15 border border-electric/40 text-electric py-1.5 text-[11px] font-display hover:bg-electric/25 transition">
                  View on Polymarket →
                </button>
              </div>
            </div>
            <div className="text-center text-[9px] text-muted-foreground pt-1">delivered · 12:04</div>
          </div>
        </div>
      </div>
    </div>
  );
}
