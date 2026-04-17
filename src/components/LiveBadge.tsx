export function LiveBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-3.5 py-1.5 text-xs sm:text-sm text-muted-foreground">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-60 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-neon animate-pulse-dot" />
      </span>
      <span className="text-foreground/90">LIVE</span>
      <span className="hidden sm:inline">— Scanning Polymarket every 5 seconds</span>
      <span className="sm:hidden">— Scanning every 5s</span>
    </div>
  );
}
