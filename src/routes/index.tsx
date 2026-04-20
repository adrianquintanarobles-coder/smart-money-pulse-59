import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { LiveBadge } from "@/components/LiveBadge";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Counter } from "@/components/Counter";
import { SectionHeading } from "@/components/SectionHeading";
import { Navbar } from "@/components/Navbar";
import { SignalTicker } from "@/components/SignalTicker";
import { FAQ } from "@/components/FAQ";
import { CheckoutModal } from "@/components/CheckoutModal";
import { Filter, Brain, ShieldCheck, Gauge, Check, X, Zap, Link as LinkIcon, Target } from "lucide-react";

export const TG_FREE = "https://t.me/+BYejWJEm0SI4MmE0";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Polymarket Smart Money Tracker v3.6 — Follow the Whales" },
      { name: "description", content: "Real-time Polymarket Smart Money alerts every 5 seconds. Filtered by verified ROI, win streaks, AI analysis. Free Telegram channel + VIP whale signals." },
      { property: "og:title", content: "Polymarket Smart Money Tracker v3.6" },
      { property: "og:description", content: "Stop guessing. Follow the whales. Real-time Smart Money alerts on Polymarket." },
    ],
  }),
});

function Index() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar onUpgradeClick={() => setCheckoutOpen(true)} />
      <div id="top" />
      <Hero onUpgradeClick={() => setCheckoutOpen(true)} />
      <Features />
      <DashboardPreview />
      <LiveStats />
      <Pricing onUpgradeClick={() => setCheckoutOpen(true)} />
      <Transparency />
      <FAQ />
      <FinalCTA onUpgradeClick={() => setCheckoutOpen(true)} />
      <Footer />
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </main>
  );
}

/* ── HERO ─────────────────────────────────────────────── */
function Hero({ onUpgradeClick }: { onUpgradeClick: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 dot-grid opacity-30" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,color-mix(in_oklab,var(--neon)_18%,transparent),transparent_70%)]" />
      <div className="container mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-20 sm:pb-32">
        <div className="max-w-4xl mx-auto text-center stagger">
          <div className="flex justify-center"><LiveBadge /></div>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Stop Guessing.<br />
            <span className="text-gradient-cta">Follow the Whales.</span>
          </h1>
          <p className="mt-5 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time Smart Money alerts filtered by verified ROI, win streaks &amp; AI analysis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a href={TG_FREE} target="_blank" rel="noopener noreferrer"
              className="btn-neon-border inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-display text-sm sm:text-base font-semibold w-full sm:w-auto">
              Join Free on Telegram <span aria-hidden>→</span>
            </a>
           <a href="#pricing"
  className="inline-flex items-center justify-center gap-2 rounded-xl border border-electric/40 bg-electric/5 hover:bg-electric/10 text-electric px-6 py-3.5 font-display text-sm sm:text-base transition w-full sm:w-auto">
  See VIP Features <span aria-hidden>↓</span>
</a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-neon" /> Track record auto-audited</span>
            <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-neon" /> Powered by Claude AI</span>
            <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-neon" /> Filters verified wallets only</span>
          </div>
        </div>
        <div className="mt-14 sm:mt-16 -mx-5 sm:-mx-8">
          <SignalTicker />
        </div>
      </div>
    </section>
  );
}

/* ── FEATURES ─────────────────────────────────────────── */
function Features() {
  const topFeatures = [
    { icon: Filter, tone: "neon", title: "ROI Filtering", body: "Every wallet scored by PnL / Capital at Risk across 5+ trades. No history = no signal." },
    { icon: Brain, tone: "electric", title: "AI Analysis", body: "Each VIP signal includes a 3-line institutional reasoning report with breaking news context. Powered by Claude AI." },
    { icon: Gauge, tone: "amber", title: "Confidence Score 0–100", body: "Proprietary algorithm rates each signal by wallet history, liquidity, position size and news." },
  ] as const;

  const toneStyles: Record<string, { box: string; ring: string; text: string; glow: string }> = {
    neon:     { box: "bg-neon/10",        ring: "border-neon/30",        text: "text-neon",        glow: "from-neon/10" },
    electric: { box: "bg-electric/10",    ring: "border-electric/30",    text: "text-electric",    glow: "from-electric/10" },
    amber:    { box: "bg-amber-score/10", ring: "border-amber-score/30", text: "text-amber-score", glow: "from-amber-score/10" },
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Architecture" title="Four layers of intelligence. Zero noise." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {topFeatures.map(({ icon: Icon, tone, title, body }) => {
            const t = toneStyles[tone];
            return (
              <div key={title} className="group relative rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-foreground/20 transition overflow-hidden">
                <div className={`absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br ${t.glow} to-transparent`} />
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${t.box} ${t.ring} ${t.text} mb-4`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{body}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-4 sm:mt-5 max-w-5xl mx-auto">
          <div className="group relative rounded-2xl border border-border border-l-0 bg-[color-mix(in_oklab,var(--card)_85%,var(--neon)_8%)] p-6 sm:p-8 overflow-hidden">
            <span aria-hidden className="absolute left-0 top-0 bottom-0 w-1 bg-neon shadow-[0_0_18px_0_color-mix(in_oklab,var(--neon)_70%,transparent)]" />
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-60 bg-gradient-to-br from-neon/10 via-transparent to-transparent" />
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-amber-score/40 bg-amber-score/10 text-amber-score font-display text-[10px] uppercase tracking-widest px-2.5 py-1">
              ★ Unique to us
            </span>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-neon/10 border-neon/30 text-neon mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2 pr-28 sm:pr-0">Auto-Resolution Audit</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              The only tracker that self-audits. Every signal auto-marked WIN or LOSS on market resolution.
              Run <span className="font-display text-foreground">/resultados</span> for the full record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── DASHBOARD PREVIEW ───────────────────────────────── */
function DashboardPreview() {
  const pills = [
    { icon: Zap, label: "< 5 sec latency", cls: "border-neon/30 bg-neon/5 text-neon" },
    { icon: Target, label: "87 avg confidence", cls: "border-amber-score/30 bg-amber-score/5 text-amber-score" },
    { icon: LinkIcon, label: "Direct Polymarket link", cls: "border-electric/30 bg-electric/5 text-electric" },
  ];
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Delivery" title="Intelligence delivered to your pocket." />
        <PhoneMockup />
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {pills.map(({ icon: Icon, label, cls }) => (
            <span key={label} className={`inline-flex items-center gap-2 rounded-full border ${cls} px-4 py-1.5 text-xs sm:text-sm font-display`}>
              <Icon className="h-3.5 w-3.5" /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── LIVE STATS ──────────────────────────────────────── */
function FormattedVolume({ volume }: { volume: number }) {
  if (volume >= 1000000) {
    return <>${(volume / 1000000).toFixed(2)}M</>;
  } else if (volume >= 1000) {
    return <>${(volume / 1000).toFixed(1)}k</>;
  } else {
    return <>${volume.toFixed(0)}</>;
  }
}

function LiveStats() {
  const API_URL = process.env.REACT_APP_API_URL || "https://polymarket-bot-production-5124.up.railway.app";

  const [stats, setStats] = useState<any[]>([
  { value: <Counter to={0} />, label: "Signals analyzed today" },
  { value: <Counter to={0} suffix="%" />, label: "Avg win rate · last 30 days" },
  { value: <span>&lt;5s</span>, label: "Detection latency" },
  { value: <Counter to={0} prefix="$" suffix="M" decimals={1} />, label: "Whale capital tracked today" },
]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${API_URL}/api/stats`, {
          method: 'GET',
          mode: 'cors',
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Stats obtenidas:', data);
          
          setStats([
            { 
              value: <Counter to={data.total_signals || 0} />, 
              label: "Signals analyzed today" 
            },
            { 
              value: <Counter to={Math.round((data.success_rate || 0) * 100)} suffix="%" />, 
              label: "Avg win rate · last 30 days" 
            },
            { 
              value: <span>&lt;5s</span>, 
              label: "Detection latency" 
            }, 
            { 
              value: <FormattedVolume volume={data.total_volume || 0} />, 
              label: "Whale capital tracked today" 
            },
          ]);
        }
      } catch (error) {
        console.warn('❌ Error obteniendo stats:', error);
        // Mantiene los valores por defecto
      }
    };

    fetchStats();
    
    // Refresca cada 10 segundos
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 mesh-cta opacity-15" />
      <div className="absolute inset-0 -z-10 dot-grid opacity-25" />
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Live data"
          title="The numbers speak."
          eyebrowAccessory={
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neon/30 bg-neon/10 text-neon font-display text-[10px] uppercase tracking-widest px-2 py-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon" />
              </span>
              Updated live
            </span>
          }
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="frosted rounded-2xl p-5 sm:p-7 text-center overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-neon/15 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-transparent via-neon to-transparent stat-bar-shimmer"
                  style={{ animationDelay: `${i * 0.4}s` }} />
              </div>
              <div className="font-display text-3xl sm:text-5xl font-bold text-gradient-cta tabular-nums">{s.value}</div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6 italic">
          Win rate calculated on auto-resolved markets only.
        </p>
      </div>
    </section>
  );
}

/* ── PRICING ─────────────────────────────────────────── */
function Pricing({ onUpgradeClick }: { onUpgradeClick: () => void }) {
  const free = ["Signals $50–$500", "Polymarket links", "Wallet data", "Community"];
  const freeOut = ["Whale signals", "Confidence Score", "AI Analysis", "News context"];
  const vip = [
    "Everything in Free",
    "🐋 Whale signals $500+ from verified wallets",
    "⚡ Confidence Score (0–100)",
    "🧠 AI Analysis — Claude AI",
    "📰 Breaking news context",
    "📍 Entry price vs current price",
    "/resultados full audit track record",
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Pricing" title="Free to start. VIP when you're ready." />
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">

          {/* FREE */}
          <div className="frosted rounded-2xl p-6 sm:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-xs uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2.5 py-1">FREE</span>
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-display text-5xl font-bold">$0</span>
              <span className="text-muted-foreground text-sm">forever</span>
            </div>
            <a href={TG_FREE} target="_blank" rel="noopener noreferrer"
              className="block text-center rounded-xl bg-neon text-background font-display font-semibold py-3 hover:bg-neon/90 transition mb-6">
              Join Telegram Channel →
            </a>
            <ul className="space-y-2.5 text-sm">
              {free.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-neon mt-0.5 shrink-0" /><span>{f}</span>
                </li>
              ))}
              {freeOut.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-muted-foreground/70">
                  <X className="h-4 w-4 text-loss mt-0.5 shrink-0" /><span className="line-through">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VIP */}
          <div className="relative rounded-2xl p-6 sm:p-8 flex flex-col bg-card glow-neon">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon text-background font-display text-[10px] uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
              ★ Recommended
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-xs uppercase tracking-widest text-neon border border-neon/40 bg-neon/10 rounded-full px-2.5 py-1">VIP</span>
            </div>
            <div className="mb-1">
              <span className="font-display text-sm text-muted-foreground line-through">$35/mo</span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display text-5xl font-bold text-gradient-cta">$15</span>
              <span className="text-muted-foreground text-sm">/mo</span>
            </div>
            <p className="text-xs text-amber-score mb-6">🔥 Launch price — limited spots</p>
            <button onClick={onUpgradeClick}
              className="btn-gradient-cta block text-center rounded-xl font-display font-semibold py-3 hover:opacity-95 transition mb-6">
              Upgrade to VIP →
            </button>
            <ul className="space-y-2.5 text-sm">
              {vip.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-neon mt-0.5 shrink-0" /><span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          No lock-in. Cancel anytime. Track record publicly audited.
        </p>
      </div>
    </section>
  );
}

/* ── TRANSPARENCY ────────────────────────────────────── */
function Transparency() {
  const items = [
    { win: true, date: "Nov 3, 2024", market: "Trump wins 2024?", desc: "US Presidential Election outcome — resolved on official AP call.", confidence: 91, roi: "+186%" },
    { win: true, date: "Nov 28, 2024", market: "Fed cuts Dec 2024?", desc: "FOMC December meeting rate decision — 25bps cut confirmed.", confidence: 76, roi: "+43%" },
    { win: false, date: "Jan 12, 2025", market: "ETH flips BTC Q1?", desc: "Ethereum market cap surpassing Bitcoin before April 1.", confidence: 58, roi: "-100%" },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Transparency" title="We show you the wins and the losses." />
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((it) => (
            <div key={it.market} className={`rounded-2xl border p-5 sm:p-6 bg-card flex flex-col ${it.win ? "border-neon/30" : "border-loss/30"}`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`font-display text-xs px-2 py-1 rounded-full ${it.win ? "bg-neon/15 text-neon border border-neon/30" : "bg-loss/15 text-loss border border-loss/30"}`}>
                  {it.win ? "✅ WIN" : "❌ LOSS"}
                </span>
                <span className="font-display text-[11px] text-muted-foreground">{it.date}</span>
              </div>
              <div className="text-foreground font-display mb-1.5 text-sm sm:text-base">{it.market}</div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{it.desc}</p>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">Confidence</span>
                  <span className="font-display text-xs text-amber-score">{it.confidence}/100</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted/60 overflow-hidden">
                  <div className={`h-full rounded-full ${it.confidence >= 80 ? "bg-neon" : it.confidence >= 70 ? "bg-amber-score" : "bg-loss"}`}
                    style={{ width: `${it.confidence}%` }} />
                </div>
              </div>
              <div className="mt-auto pt-3 border-t border-border/60">
                <div className={`font-display text-2xl sm:text-3xl font-bold ${it.win ? "text-neon" : "text-loss"}`}>{it.roi}</div>
                <div className="text-xs text-muted-foreground mt-0.5">ROI</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-6 max-w-2xl mx-auto">
          Low-confidence signals sometimes lose. That's why the Confidence Score exists.
        </p>
      </div>
    </section>
  );
}

/* ── FINAL CTA ───────────────────────────────────────── */
function FinalCTA({ onUpgradeClick }: { onUpgradeClick: () => void }) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 mesh-cta" />
      <div className="absolute inset-0 -z-10 dot-grid opacity-20" />
      <div className="container mx-auto px-5 sm:px-8 text-center max-w-3xl">
        <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
          The whales are <span className="text-gradient-cta">moving right now.</span>
        </h2>
        <p className="mt-5 text-base sm:text-xl text-muted-foreground">
          Every 5 seconds, our bots are watching. Are you?
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={TG_FREE} target="_blank" rel="noopener noreferrer"
            className="btn-neon-border rounded-xl px-6 py-3.5 font-display font-semibold">
            Join Free Channel on Telegram →
          </a>
          <button onClick={onUpgradeClick}
            className="btn-gradient-cta rounded-xl px-6 py-3.5 font-display font-semibold">
            Get VIP Access →
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border py-10 px-5 sm:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="font-display text-foreground">
            Smart Money Tracker <span className="text-muted-foreground">v3.6</span>
          </div>
          <div className="flex gap-5 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href={TG_FREE} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-6 max-w-2xl">
          Not financial advice. Prediction markets involve risk. Past performance does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}
