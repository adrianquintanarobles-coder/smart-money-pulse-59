const signals = [
  { amount: "$3,200", side: "YES", market: "Will Fed cut rates?", confidence: 84 },
  { amount: "$1,800", side: "NO", market: "ETH above $5K by June?", confidence: 71 },
  { amount: "$6,500", side: "YES", market: "BTC dominance above 60%?", confidence: 91 },
  { amount: "$2,400", side: "YES", market: "Trump approval > 50% in Q2?", confidence: 68 },
  { amount: "$4,100", side: "NO", market: "Recession declared by Sept?", confidence: 79 },
  { amount: "$5,800", side: "YES", market: "SOL above $300 by July?", confidence: 86 },
];

function Item({ s }: { s: (typeof signals)[number] }) {
  return (
    <div className="frosted inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mx-2 whitespace-nowrap font-body text-xs sm:text-sm">
      <span aria-hidden>🐋</span>
      <span className="text-neon font-display font-semibold">{s.amount}</span>
      <span className="text-muted-foreground">on</span>
      <span className={s.side === "YES" ? "text-neon" : "text-loss"}>{s.side}</span>
      <span className="text-muted-foreground">·</span>
      <span className="text-foreground">{s.market}</span>
      <span className="text-muted-foreground">·</span>
      <span className="text-amber-score font-display">Confidence {s.confidence}/100</span>
    </div>
  );
}

export function SignalTicker() {
  const loop = [...signals, ...signals];
  return (
    <div className="ticker-mask relative w-full overflow-hidden py-1">
      <div className="ticker-track flex w-max">
        {loop.map((s, i) => (
          <Item key={`a-${i}`} s={s} />
        ))}
        {loop.map((s, i) => (
          <Item key={`b-${i}`} s={s} />
        ))}
      </div>
    </div>
  );
}
