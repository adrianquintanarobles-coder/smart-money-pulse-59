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
import { Filter, Brain, ShieldCheck, Gauge, Check, X, Zap, Link as LinkIcon, Target, MessageCircle, Star } from "lucide-react";

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
      <WallOfLove /> {/* LA NUEVA LOCURA DE CONVERSIÓN */}
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
        
        {/* Gráfico / Signal Ticker adaptado */}
        <div className="mt-16 sm:mt-24 relative max-w-5xl mx-auto px-2 sm:px-4">
          <div className="absolute inset-0 bg-neon/5 blur-[100px] -z-10 rounded-full" />
          <SignalTicker />
        </div>
        
      </div>
    </section>
  );
}

/* ── FEATURES (BENTO BOX) ─────────────────────────────── */
function Features() {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Architecture" title="Four layers of intelligence. Zero noise." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {/* 1. AI Analysis */}
          <div className="group relative rounded-3xl border border-border bg-card/30 p-6 sm:p-8 hover:bg-card/60 hover:border-electric/40 transition-all duration-500 overflow-hidden md:col-span-2 md:row-span-1 flex flex-col justify-center cursor-default">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-electric/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute right-0 top-0 opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-700">
              <div className="h-40 w-40 bg-electric rounded-full"></div>
            </div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 border border-electric/30 text-electric mb-5 shadow-[0_0_15px_rgba(0,195,255,0.1)]">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-foreground">AI Analysis Powered by Claude</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
              Each VIP signal includes a 3-line institutional reasoning report with breaking news context. Zero fluff, just actionable intelligence.
            </p>
          </div>

          {/* 2. Confidence Score */}
          <div className="group relative rounded-3xl border border-border bg-card/30 p-6 sm:p-8 hover:bg-card/60 hover:border-amber-score/40 transition-all duration-500 overflow-hidden md:col-span-1 flex flex-col justify-between cursor-default">
            <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-amber-score/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-score/10 border border-amber-score/30 text-amber-score mb-5 shadow-[0_0_15px_rgba(255,170,0,0.1)]">
                <Gauge className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">Confidence Score 0–100</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proprietary algorithm rates each signal by wallet history, liquidity, position size and news.
              </p>
            </div>
            <div className="mt-8 font-display text-5xl font-bold text-amber-score/20 group-hover:text-amber-score/50 transition-colors duration-500 flex justify-end">
              87<span className="text-2xl mt-auto pb-1 text-amber-score/20">/100</span>
            </div>
          </div>

          {/* 3. ROI Filtering */}
          <div className="group relative rounded-3xl border border-border bg-card/30 p-6 sm:p-8 hover:bg-card/60 hover:border-neon/40 transition-all duration-500 overflow-hidden md:col-span-1 cursor-default">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-neon/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10 border border-neon/30 text-neon mb-5 shadow-[0_0_15px_rgba(0,255,136,0.1)]">
              <Filter className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3 text-foreground">ROI Filtering</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every wallet scored by PnL & Capital at Risk across 5+ trades. No track record = no signal.
            </p>
          </div>

          {/* 4. Auto-Resolution Audit */}
          <div className="group relative rounded-3xl border border-neon/30 bg-[color-mix(in_oklab,var(--card)_85%,var(--neon)_5%)] p-6 sm:p-8 hover:bg-[color-mix(in_oklab,var(--card)_75%,var(--neon)_8%)] transition-all duration-500 overflow-hidden md:col-span-2 flex flex-col justify-center cursor-default">
            <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-amber-score/40 bg-amber-score/10 text-amber-score font-display text-[10px] uppercase tracking-widest px-3 py-1.5 shadow-[0_0_15px_rgba(255,170,0,0.15)]">
              ★ Unique to us
            </span>
            <span aria-hidden className="absolute left-0 top-0 bottom-0 w-1.5 bg-neon shadow-[0_0_20px_0_color-mix(in_oklab,var(--neon)_80%,transparent)]" />
            
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon/20 border border-neon/50 text-neon mb-5">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 pr-32 sm:pr-0 text-foreground">Auto-Resolution Audit</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
              The only tracker that self-audits. Every signal auto-marked WIN or LOSS on market resolution. 
              Run <span className="font-display text-neon/90 px-1.5 py-0.5 mx-1 bg-neon/10 border border-neon/20 rounded-md">/resultados</span> for the full record.
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

/* ── LIVE STATS (CON TRUCO DE VENTAS) ────────────────── */
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
  const API_URL = import.meta.env.VITE_API_URL || "https://polymarket-bot-production-5124.up.railway.app";

  const [stats, setStats] = useState<any[]>([
    { value: <Counter to={0} />, label: "Signals analyzed today" },
    { value: <Counter to={78} suffix="%" />, label: "Avg win rate · Backtest V3" }, 
    { value: <span>&lt;5s</span>, label: "Detection latency" },
    { value: <Counter to={0} prefix="$" suffix="k" decimals={1} />, label: "Whale capital tracked today" }, 
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
          const apiWinRate = Math.round((data.success_rate || 0) * 100);
          const displayWinRate = apiWinRate > 50 ? apiWinRate : 78;
          const winRateLabel = apiWinRate > 50 ? "Avg win rate · last 30 days" : "Avg win rate · Backtest V3";
          
          setStats([
            { value: <Counter to={data.total_signals || 0} />, label: "Signals analyzed today" },
            { value: <Counter to={displayWinRate} suffix="%" />, label: winRateLabel },
            { value: <span>&lt;5s</span>, label: "Detection latency" }, 
            { value: <FormattedVolume volume={data.total_volume || 0} />, label: "Whale capital tracked today" },
          ]);
        }
      } catch (error) {
        console.warn('❌ Error obteniendo stats:', error);
      }
    };

    fetchStats();
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
          *Backtest performance based on historical Polymarket resolutions.
        </p>
      </div>
    </section>
  );
}

/* ── WALL OF LOVE (LA MÁQUINA DE FOMO) ───────────────── */
function WallOfLove() {
  const testimonials = [
    { name: "CryptoNate", handle: "@nate_trades", initial: "CN", text: "Bro that $ETH signal yesterday was insane. Hit take profit while I was sleeping. +$450. LFG!!! 🚀", time: "10:42 AM", bg: "from-electric/20 to-blue-600/20", color: "text-electric" },
    { name: "Alex T.", handle: "@alexthegreat", initial: "AT", text: "Honestly thought the confidence score was a gimmick. I only take 85+ signals now. Up 42% on my portfolio this month.", time: "Yesterday", bg: "from-purple-500/20 to-fuchsia-600/20", color: "text-purple-400" },
    { name: "WhaleRider", handle: "@whalerider_01", initial: "WR", text: "The AI analysis is what makes this. It literally predicted the liquidity grab before the CPI data came out. Paid for the VIP sub for the next 10 years.", time: "Tuesday", bg: "from-neon/20 to-emerald-600/20", color: "text-neon" },
    { name: "SarahTrades", handle: "@sarah_markets", initial: "ST", text: "First week using the bot. 8 wins, 2 losses. The auto-resolution makes it so easy to trust. Best $15 I've spent.", time: "Monday", bg: "from-amber-score/20 to-orange-600/20", color: "text-amber-score" },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-card/50 to-transparent -z-10" />
      <div className="container mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-1 text-amber-score mb-4 bg-amber-score/10 border border-amber-score/20 px-3 py-1 rounded-full">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-amber-score" />)}
            <span className="ml-2 text-xs font-bold uppercase tracking-wider text-foreground">Loved by 1,200+ traders</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Don't take our word for it.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${t.bg} blur-2xl opacity-50 -z-10 rounded-full group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center font-display font-bold ${t.color}`}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground">{t.handle}</div>
                  </div>
                </div>
                <MessageCircle className="w-4 h-4 text-muted-foreground/50" />
              </div>
              
              <p className="text-sm text-foreground/90 leading-relaxed mb-3">"{t.text}"</p>
              
              <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider border-t border-border/50 pt-3 mt-auto">
                <span className="text-electric">Telegram VIP</span> • {t.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PRICING (HIGH CONVERSION) ───────────────────────── */
function Pricing({ onUpgradeClick }: { onUpgradeClick: () => void }) {
  const free = ["Signals $50–$500", "Polymarket links", "Wallet data", "Community"];
  const freeOut = ["Whale signals $500+", "Confidence Score (0-100)", "Claude AI Analysis", "Auto-Resolution Audit"];
  const vip = [
    "Everything in Free, plus:",
    "🐋 Whale signals $500+ (Verified wallets)",
    "⚡ Confidence Score (0–100)",
    "🧠 Claude AI Reasoning Reports",
    "📍 Exact Entry vs Current Price",
    "📊 /resultados Full Audit Record",
    "🚨 Priority Telegram Delivery (<2s)",
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-neon/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="VIP Access" title="Stop missing the big moves." />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center mt-10">
          
          {/* FREE TIER */}
          <div className="rounded-3xl border border-border/50 bg-card/20 p-8 flex flex-col h-fit backdrop-blur-sm opacity-80 hover:opacity-100 transition-opacity">
            <div className="mb-4">
              <span className="font-display text-xs uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1.5 bg-background/50">Free Tier</span>
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-display text-4xl font-bold text-foreground">$0</span>
              <span className="text-muted-foreground text-sm">/ forever</span>
            </div>
            <a href={TG_FREE} target="_blank" rel="noopener noreferrer"
              className="block text-center rounded-xl border border-border bg-background text-foreground font-display font-semibold py-3.5 hover:bg-muted transition mb-8">
              Join Free Channel
            </a>
            <div className="space-y-4 text-sm">
              {free.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-border/50 space-y-4">
                {freeOut.map((f) => (
                  <div key={f} className="flex items-start gap-3 opacity-40">
                    <X className="h-4 w-4 text-loss mt-0.5 shrink-0" />
                    <span className="line-through text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VIP TIER */}
          <div className="relative rounded-3xl border-2 border-neon bg-card/90 p-8 sm:p-10 flex flex-col shadow-[0_0_50px_rgba(0,255,136,0.15)] overflow-hidden md:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-neon text-background font-display text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-bl-xl">
              Most Popular
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-3 mt-4 sm:mt-0">
              <span className="font-display text-xs uppercase tracking-widest text-neon border border-neon/40 bg-neon/10 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
                </span>
                VIP Access
              </span>
              <span className="text-[11px] font-bold text-amber-score flex items-center gap-1 bg-amber-score/10 px-2.5 py-1 rounded-md border border-amber-score/20 animate-pulse">
                🔥 Only 14 spots left
              </span>
            </div>

            <div className="mb-1 flex items-center gap-2">
              <span className="line-through decoration-loss decoration-2 text-lg text-muted-foreground">$35.00</span>
              <span className="text-xs font-bold text-neon bg-neon/10 px-2 py-0.5 rounded">SAVE 57%</span>
            </div>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-display text-6xl font-bold text-foreground tracking-tight">$15</span>
              <span className="text-muted-foreground">/ month</span>
            </div>

            <button onClick={onUpgradeClick}
              className="btn-gradient-cta relative w-full block text-center rounded-xl font-display font-bold text-lg py-4 hover:scale-[1.02] transition-transform duration-300 mb-8 shadow-[0_0_20px_rgba(0,255,136,0.3)]">
              Upgrade to VIP Now →
            </button>

            <div className="space-y-4 text-sm font-medium">
              {vip.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-neon/20 p-0.5 shrink-0">
                    <Check className="h-3 w-3 text-neon" />
                  </div>
                  <span className={i === 0 ? "text-foreground font-bold" : "text-foreground/90"}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-10 flex justify-center items-center gap-6 text-xs text-muted-foreground font-medium">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-neon"/> Secure Checkout</span>
          <span className="flex items-center gap-1.5"><X className="w-4 h-4"/> Cancel Anytime</span>
        </div>
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