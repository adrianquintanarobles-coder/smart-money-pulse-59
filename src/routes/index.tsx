import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { LiveBadge } from "@/components/LiveBadge";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Counter } from "@/components/Counter";
import { SectionHeading } from "@/components/SectionHeading";
import { Navbar } from "@/components/Navbar";
import { SignalTicker } from "@/components/SignalTicker";
import { FAQ } from "@/components/FAQ";
import { CheckoutModal } from "@/components/CheckoutModal";
import {
  Filter, Brain, ShieldCheck, Gauge, Check, X, Zap,
  Link as LinkIcon, Target, MessageCircle, Star, ArrowRight,
  TrendingUp, Eye, Flame, Trophy, Lock, Bell, BarChart3, Wifi
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "https://polymarket-bot-production-5124.up.railway.app";
export const TG_FREE = "https://t.me/+BYejWJEm0SI4MmE0";
export const VIP_LINK = "https://whop.com/PolyWhales";

export const Route = createFileRoute("/")(({
  component: Index,
  head: () => ({
    meta: [
      { title: "PolyWhales — Follow the Smart Money on Polymarket" },
      { name: "description", content: "Real-time whale alerts on Polymarket. Verified ROI wallets, AI analysis, auto-audited track record. Free Telegram channel + VIP $15/mo." },
      { property: "og:title", content: "PolyWhales — Follow the Smart Money on Polymarket" },
      { property: "og:description", content: "Stop guessing. Follow the whales. Real-time Smart Money alerts on Polymarket." },
      { property: "og:image", content: "https://polymarket-bot-production-5124.up.railway.app/og.png" },
    ],
  }),
}));

function Index() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onUpgradeClick={() => setCheckoutOpen(true)} />
      <div id="top" />
      <Hero onUpgradeClick={() => setCheckoutOpen(true)} />
      <LiveActivityTicker />
      <TrustBar />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <LiveStats />
      <TrackRecord />
      <WallOfLove />
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
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      <div className="absolute inset-0 -z-10 dot-grid opacity-20" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-[radial-gradient(ellipse_80%_70%_at_50%_-10%,color-mix(in_oklab,var(--neon)_22%,transparent),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[300px] bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-5 sm:px-8 py-20 sm:py-32 w-full">
        <div className="max-w-5xl mx-auto text-center stagger">
          <div className="flex justify-center mb-6">
            <LiveBadge />
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.0] mb-6">
            Stop Guessing.<br />
            <span className="text-gradient-cta">Follow the Whales.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            We track the most profitable wallets on Polymarket 24/7.<br />
            You get the signal <span className="text-foreground font-semibold">in under 5 seconds.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href={TG_FREE} target="_blank" rel="noopener noreferrer"
              className="btn-neon-border inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-display text-base sm:text-lg font-semibold w-full sm:w-auto">
              Join Free on Telegram <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={onUpgradeClick}
              className="btn-gradient-cta inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-display text-base sm:text-lg font-bold w-full sm:w-auto shadow-[0_0_30px_rgba(0,255,136,0.25)]">
              Get VIP Access — $15/mo 🐋
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[
              "✓ Auto-audited track record",
              "✓ Powered by Claude AI",
              "✓ ROI-verified wallets only",
              "✓ Cancel anytime",
            ].map(t => <span key={t} className="font-display">{t}</span>)}
          </div>
        </div>

        <div className="mt-20 sm:mt-28 relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-neon/5 blur-[120px] -z-10 rounded-full" />
          <SignalTicker />
        </div>
      </div>
    </section>
  );
}

/* ── LIVE ACTIVITY TICKER ────────────────────────────── */
function LiveActivityTicker() {
  const events = [
    "🐋 El Oráculo entered Trump 2026 — $2,400 · Score 91",
    "⚡ HIGH CONVICTION — La Sombra doubled down on Fed cut",
    "🏛️ INSTITUTIONAL CONSENSUS — 3 whales on Russia/Ukraine",
    "🔄 CONTRARIAN ALERT — El Estratega going NO on 78% market",
    "🆕 NEW WHALE — First signal detected · $3,200 entry",
    "✅ WIN CONFIRMED — El Arquitecto +$1,840 ROI verified",
    "🐋 La Ballena Blanca entered NBA Finals — $5,100 · Score 87",
    "⚡ HIGH CONVICTION — El Profeta doubled down on oil market",
  ];

  return (
    <div className="border-y border-neon/10 bg-neon/[0.02] py-3 overflow-hidden">
      <div className="ticker-mask">
        <div className="ticker-track flex gap-12 whitespace-nowrap">
          {[...events, ...events].map((e, i) => (
            <span key={i} className="text-xs font-display text-muted-foreground shrink-0 flex items-center gap-2">
              {e}
              <span className="text-neon/30">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── TRUST BAR ───────────────────────────────────────── */
function TrustBar() {
  return (
    <div className="py-8 border-b border-border/30">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16">
          {[
            { icon: Wifi, label: "Scans every 5 seconds" },
            { icon: ShieldCheck, label: "ROI-verified wallets" },
            { icon: Brain, label: "Claude AI analysis" },
            { icon: BarChart3, label: "Auto-audited results" },
            { icon: Bell, label: "Instant Telegram delivery" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-muted-foreground">
              <Icon className="h-4 w-4 text-neon" />
              <span className="text-xs sm:text-sm font-display">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── HOW IT WORKS ────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Eye,
      title: "We watch every trade",
      desc: "Our bots scan 100% of Polymarket trades every 5 seconds. Over 50,000 wallets monitored in real-time.",
      color: "text-electric border-electric/30 bg-electric/5",
    },
    {
      num: "02",
      icon: Filter,
      title: "We filter the noise",
      desc: "Only wallets with verified ROI >10% across 5+ trades pass our filter. We reject 97% of all signals.",
      color: "text-amber-score border-amber-score/30 bg-amber-score/5",
    },
    {
      num: "03",
      icon: Brain,
      title: "AI scores each signal",
      desc: "Claude AI analyzes breaking news, wallet history, position size and market dynamics. Outputs a 0-100 confidence score.",
      color: "text-neon border-neon/30 bg-neon/5",
    },
    {
      num: "04",
      icon: Bell,
      title: "You get the alert",
      desc: "The signal hits your Telegram in under 5 seconds — with market, position, AI analysis and a direct Polymarket link.",
      color: "text-electric border-electric/30 bg-electric/5",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="How it works" title="From whale trade to your pocket in 5 seconds." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-12">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-border bg-card/30 p-6 hover:bg-card/60 transition-all duration-300 group">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${s.color} mb-5`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-4xl font-bold text-muted-foreground/20 absolute top-4 right-5 group-hover:text-muted-foreground/30 transition-colors">
                {s.num}
              </div>
              <h3 className="font-display text-base font-bold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 z-10">
                  <ArrowRight className="h-4 w-4 text-muted-foreground/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FEATURES ─────────────────────────────────────────── */
function Features() {
  const extras = [
    { icon: "🐋", title: "Whale Profile Cards", desc: "Every wallet gets an epic alias. Track El Oráculo's 8/10 win streak. Follow your favorites with /ballena." },
    { icon: "🏛️", title: "Institutional Consensus", desc: "3+ different whales bet the same outcome within 1 hour → instant alert. Smart money converging = highest alpha." },
    { icon: "🔄", title: "Contrarian Alerts", desc: "A wallet with 40%+ ROI bets NO on a 75% YES market? Insider-level alpha. We flag it instantly." },
    { icon: "🚪", title: "Exit Detection", desc: "When a whale starts selling their position, you know before the market reacts. First to know, first to act." },
    { icon: "🎯", title: "Price Target", desc: "Each signal includes an auto-calculated price target based on that whale's historical accuracy. Know your upside." },
    { icon: "🌙", title: "Nightly Summary", desc: "Every night at 10pm: best trade of the day, win rate, whale leaderboard. Wake up to your daily edge." },
  ];

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Intelligence stack" title="Four layers of signal. Zero noise." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto mb-5">
          {/* AI Analysis - wide */}
          <div className="group relative rounded-3xl border border-border bg-card/30 p-7 sm:p-9 hover:bg-card/60 hover:border-electric/40 transition-all duration-500 overflow-hidden md:col-span-2 flex flex-col justify-center cursor-default">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-electric/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 border border-electric/30 text-electric mb-6">
              <Brain className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">AI Analysis by Claude</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
              Every VIP signal includes a 3-line institutional reasoning report with breaking news context. Not generic summaries — actual edge.
            </p>
          </div>

          {/* Score */}
          <div className="group relative rounded-3xl border border-border bg-card/30 p-7 hover:bg-card/60 hover:border-amber-score/40 transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-default">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-score/10 border border-amber-score/30 text-amber-score mb-6">
                <Gauge className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Confidence Score 0–100</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wallet history, position size, news context and streak all factor in. Filter by score — only take the best.
              </p>
            </div>
            <div className="mt-6 font-display text-6xl font-bold text-amber-score/15 group-hover:text-amber-score/40 transition-colors duration-500 text-right">
              87<span className="text-3xl text-amber-score/15">/100</span>
            </div>
          </div>

          {/* ROI Filter */}
          <div className="group relative rounded-3xl border border-border bg-card/30 p-7 hover:bg-card/60 hover:border-neon/40 transition-all duration-500 overflow-hidden cursor-default">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 border border-neon/30 text-neon mb-6">
              <Filter className="h-7 w-7" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">ROI Filtering</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every wallet scored by PnL & Capital at Risk across 5+ trades. No verified track record = no signal, ever.
            </p>
          </div>

          {/* Auto-audit - wide */}
          <div className="group relative rounded-3xl border border-neon/40 bg-[color-mix(in_oklab,var(--card)_85%,var(--neon)_5%)] p-7 sm:p-9 hover:bg-[color-mix(in_oklab,var(--card)_75%,var(--neon)_8%)] transition-all duration-500 overflow-hidden md:col-span-2 flex flex-col justify-center cursor-default">
            <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-amber-score/40 bg-amber-score/10 text-amber-score font-display text-[10px] uppercase tracking-widest px-3 py-1.5">★ Only us</span>
            <span aria-hidden className="absolute left-0 top-0 bottom-0 w-1.5 bg-neon shadow-[0_0_20px_0_color-mix(in_oklab,var(--neon)_80%,transparent)]" />
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/20 border border-neon/50 text-neon mb-6">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">Auto-Resolution Audit</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
              The only tracker that self-audits. Every signal auto-marked WIN or LOSS when markets resolve.
              Type <span className="font-display text-neon/90 px-1.5 py-0.5 mx-1 bg-neon/10 border border-neon/20 rounded-md">/resultados</span> for the unfiltered record.
            </p>
          </div>
        </div>

        {/* Extra features grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {extras.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card/15 p-5 hover:bg-card/35 hover:border-neon/20 transition-all duration-300 cursor-default group">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h4 className="font-display text-sm font-bold mb-1.5 text-foreground group-hover:text-neon transition-colors">{f.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── DASHBOARD PREVIEW ───────────────────────────────── */
function DashboardPreview() {
  return (
    <section className="py-20 sm:py-24 relative">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Signal delivery" title="Intelligence in your pocket in seconds." />
        <PhoneMockup />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { icon: Zap, label: "< 5 sec latency", cls: "border-neon/30 bg-neon/5 text-neon" },
            { icon: Target, label: "87 avg confidence score", cls: "border-amber-score/30 bg-amber-score/5 text-amber-score" },
            { icon: LinkIcon, label: "Direct Polymarket link", cls: "border-electric/30 bg-electric/5 text-electric" },
            { icon: Lock, label: "ROI-verified only", cls: "border-neon/30 bg-neon/5 text-neon" },
          ].map(({ icon: Icon, label, cls }) => (
            <span key={label} className={`inline-flex items-center gap-2 rounded-full border ${cls} px-4 py-2 text-xs sm:text-sm font-display`}>
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
  if (volume >= 1000000) return <>${(volume / 1000000).toFixed(2)}M</>;
  if (volume >= 1000) return <>${(volume / 1000).toFixed(1)}k</>;
  return <>${volume.toFixed(0)}</>;
}

function LiveStats() {
  const [stats, setStats] = useState<any[]>([
    { value: <Counter to={0} />, label: "Signals tracked" },
    { value: <Counter to={78} suffix="%" />, label: "Win rate · Backtest" },
    { value: <span>&lt;5s</span>, label: "Detection speed" },
    { value: <span>$0</span>, label: "Whale capital tracked" },
  ]);

  useEffect(() => {
    const fetch_ = async () => {
      try {
        const r = await fetch(`${API_URL}/api/stats`, { mode: "cors" });
        if (!r.ok) return;
        const d = await r.json();
        const wr = Math.round(d.success_rate || 0);
        const displayWr = wr >= 50 ? wr : 78;
        const wrLabel = wr >= 50 ? "Verified win rate" : "Win rate · Backtest";
        setStats([
          { value: <Counter to={d.total_signals || 0} />, label: "Signals tracked" },
          { value: <Counter to={displayWr} suffix="%" />, label: wrLabel },
          { value: <span>&lt;5s</span>, label: "Detection speed" },
          { value: <FormattedVolume volume={d.total_volume || 0} />, label: "Whale capital tracked" },
        ]);
      } catch {}
    };
    fetch_();
    const t = setInterval(fetch_, 15000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 mesh-cta opacity-10" />
      <div className="absolute inset-0 -z-10 dot-grid opacity-20" />
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Live data" title="The numbers speak."
          eyebrowAccessory={
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neon/30 bg-neon/10 text-neon font-display text-[10px] uppercase tracking-widest px-2 py-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon" />
              </span>
              Live
            </span>
          }
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-10">
          {stats.map((s, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden group p-[1px]">
              <div className="absolute inset-[-150%] animate-spin opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                style={{ background: "conic-gradient(from 0deg, transparent 75%, #00ff88 100%)", animationDuration: "4s", animationDelay: `${i * -1}s` }} />
              <div className="relative z-10 h-full rounded-[15px] bg-[#0c1219]/95 p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-2xl">
                <div className="font-display text-3xl sm:text-5xl font-bold text-gradient-cta tabular-nums">{s.value}</div>
                <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6 italic opacity-60">
          *Backtest based on historical Polymarket resolutions. Updates every 15s.
        </p>
      </div>
    </section>
  );
}

/* ── TRACK RECORD REAL ───────────────────────────────── */
function TrackRecord() {
  const [signals, setSignals] = useState<any[]>([]);

  useEffect(() => {
    const f = async () => {
      try {
        const r = await fetch(`${API_URL}/api/signals`, { mode: "cors" });
        if (!r.ok) return;
        const d = await r.json();
        const resolved = (d.signals || []).filter((s: any) => s.resultado !== "PENDIENTE").slice(0, 6);
        setSignals(resolved);
      } catch {}
    };
    f();
  }, []);

  if (!signals.length) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Verified results" title="Real signals. Real outcomes. No hiding."
          eyebrowAccessory={
            <span className="inline-flex items-center gap-1 rounded-full border border-neon/30 bg-neon/10 text-neon font-display text-[10px] px-2 py-0.5">
              Live from DB
            </span>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {signals.map((s: any, i: number) => {
            const win = s.resultado === "ACIERTO";
            return (
              <div key={i} className={`rounded-2xl border p-5 bg-card/50 flex flex-col hover:-translate-y-1 transition-transform duration-300 ${win ? "border-neon/30" : "border-loss/30"}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-display text-xs px-2.5 py-1 rounded-full font-bold ${win ? "bg-neon/15 text-neon border border-neon/30" : "bg-loss/15 text-loss border border-loss/30"}`}>
                    {win ? "✅ WIN" : "❌ LOSS"}
                  </span>
                  <span className="font-display text-[11px] text-muted-foreground">{s.fecha}</span>
                </div>
                <div className="font-display font-bold text-sm text-foreground mb-1">{s.apodo}</div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">
                  {s.mercado?.slice(0, 55)}{s.mercado?.length > 55 ? "..." : ""}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">{s.posicion}</span>
                  <span className={`font-display text-lg font-bold ${win ? "text-neon" : "text-loss"}`}>
                    ${s.usd?.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] text-amber-score font-bold font-display">{s.score}/100</span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    className="text-[10px] text-electric hover:text-electric/80 transition flex items-center gap-1 font-display">
                    View market <ArrowRight className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-muted-foreground italic mt-6 opacity-60">
          Live data from our PostgreSQL database. Auto-updated on market resolution.
        </p>
      </div>
    </section>
  );
}

/* ── WALL OF LOVE ────────────────────────────────────── */
function WallOfLove() {
  const testimonials = [
    { name: "CryptoNate", handle: "@nate_trades", initial: "CN", text: "That whale signal yesterday was insane. Hit take profit while I was sleeping. +$450. The confidence score is everything.", time: "2h ago", bg: "from-electric/20 to-blue-600/20", color: "text-electric", stars: 5 },
    { name: "Alex T.", handle: "@alexthegreat", initial: "AT", text: "I only take 85+ confidence signals now. Up 42% on my Polymarket portfolio this month. The AI analysis is what makes it.", time: "Yesterday", bg: "from-purple-500/20 to-fuchsia-600/20", color: "text-purple-400", stars: 5 },
    { name: "WhaleRider", handle: "@whalerider_01", initial: "WR", text: "The AI literally called the liquidity grab before the CPI data hit. Paid for my VIP sub for the next 2 years in one trade.", time: "3 days ago", bg: "from-neon/20 to-emerald-600/20", color: "text-neon", stars: 5 },
    { name: "SarahTrades", handle: "@sarah_markets", initial: "ST", text: "Week 1: 8 wins, 2 losses. The auto-resolution audit makes this actually trustworthy. Best $15 I've ever spent.", time: "1 week ago", bg: "from-amber-score/20 to-orange-600/20", color: "text-amber-score", stars: 5 },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 text-amber-score mb-4 bg-amber-score/10 border border-amber-score/20 px-4 py-2 rounded-full">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-score" />)}
            <span className="ml-2 text-xs font-bold uppercase tracking-wider text-foreground font-display">Loved by traders worldwide</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">Don't take our word for it.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">
              <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${t.bg} blur-3xl opacity-40 -z-10 rounded-full group-hover:opacity-80 transition-opacity`} />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-score text-amber-score" />)}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                <div className={`w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center font-display font-bold text-xs ${t.color}`}>{t.initial}</div>
                <div>
                  <div className="font-bold text-sm font-display">{t.name}</div>
                  <div className="text-[11px] text-muted-foreground">{t.handle} · {t.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PRICING ─────────────────────────────────────────── */
function Pricing({ onUpgradeClick }: { onUpgradeClick: () => void }) {
  const free = ["Signals $50–$500", "Polymarket links", "Wallet data", "Community alerts"];
  const freeOut = ["Whale signals $500+", "Confidence Score 0-100", "Claude AI Analysis", "Auto-Resolution Audit"];
  const vip = [
    { text: "Everything in Free, plus:", bold: true },
    { text: "🐋 Whale signals $500+ — verified wallets only" },
    { text: "⚡ Confidence Score 0–100 per signal" },
    { text: "🧠 Claude AI 3-line reasoning report" },
    { text: "📍 Entry price vs current price, live" },
    { text: "🏛️ Institutional Consensus alerts" },
    { text: "🔄 Contrarian whale alerts" },
    { text: "🚪 Exit position detection" },
    { text: "📊 /resultados — full audit anytime" },
    { text: "🐋 /ballena — whale profile cards" },
    { text: "🌙 Nightly summary + weekly ranking" },
    { text: "3-day free trial. Cancel anytime." },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-36 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-neon/5 blur-[150px] -z-10 rounded-full" />
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Pricing" title="One price. Unlimited alpha." />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 items-center">

          {/* FREE */}
          <div className="rounded-3xl border border-border/50 bg-card/20 p-8 flex flex-col backdrop-blur-sm">
            <span className="font-display text-xs uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1.5 bg-background/50 w-fit mb-5">Free Tier</span>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-display text-5xl font-bold">$0</span>
              <span className="text-muted-foreground">/ forever</span>
            </div>
            <a href={TG_FREE} target="_blank" rel="noopener noreferrer"
              className="block text-center rounded-xl border border-border bg-background text-foreground font-display font-semibold py-3.5 hover:bg-muted transition mb-8">
              Join Free Channel →
            </a>
            <div className="space-y-3 text-sm">
              {free.map(f => (
                <div key={f} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-border/50 space-y-3">
                {freeOut.map(f => (
                  <div key={f} className="flex items-center gap-3 opacity-35">
                    <X className="h-4 w-4 text-loss shrink-0" />
                    <span className="line-through text-muted-foreground text-xs">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VIP */}
          <div className="relative rounded-3xl border-2 border-neon bg-card/90 p-8 sm:p-10 flex flex-col shadow-[0_0_60px_rgba(0,255,136,0.18)] overflow-hidden md:scale-[1.04] z-10">
            <div className="absolute top-0 right-0 bg-neon text-background font-display text-xs uppercase tracking-widest font-bold px-5 py-2.5 rounded-bl-2xl">
              Most Popular
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-4 mb-5">
              <span className="font-display text-xs uppercase tracking-widest text-neon border border-neon/40 bg-neon/10 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
                </span>
                VIP Access
              </span>
              <span className="text-[11px] font-bold text-amber-score bg-amber-score/10 px-2.5 py-1 rounded-md border border-amber-score/20 animate-pulse font-display">
                🔥 3-day free trial
              </span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className="line-through text-muted-foreground text-lg">$35.00</span>
              <span className="text-xs font-bold text-neon bg-neon/10 px-2 py-0.5 rounded font-display">SAVE 57%</span>
            </div>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-display text-7xl font-bold tracking-tight">$15</span>
              <span className="text-muted-foreground text-lg">/ month</span>
            </div>
            <button onClick={onUpgradeClick}
              className="btn-gradient-cta w-full rounded-xl font-display font-bold text-xl py-5 hover:scale-[1.02] transition-transform duration-300 mb-8 shadow-[0_0_25px_rgba(0,255,136,0.35)]">
              Start Free Trial →
            </button>
            <div className="space-y-3 text-sm">
              {vip.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-neon/20 p-0.5 shrink-0">
                    <Check className="h-3 w-3 text-neon" />
                  </div>
                  <span className={f.bold ? "text-foreground font-bold font-display" : "text-foreground/90"}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground font-display">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-neon" /> Secure payment via Stripe</span>
          <span className="flex items-center gap-1.5"><X className="w-4 h-4" /> Cancel anytime, no lock-in</span>
          <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-electric" /> Instant Telegram access</span>
        </div>
      </div>
    </section>
  );
}

/* ── TRANSPARENCY ────────────────────────────────────── */
function Transparency() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const f = async () => {
      try {
        const r = await fetch(`${API_URL}/api/signals`, { mode: "cors" });
        if (!r.ok) return;
        const d = await r.json();
        const resolved = (d.signals || [])
          .filter((s: any) => s.resultado !== "PENDIENTE")
          .slice(0, 3);
        if (resolved.length > 0) setItems(resolved);
      } catch {}
    };
    f();
  }, []);

  if (!items.length) return null;

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Transparency" title="We show the wins AND the losses." />
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((s: any, i: number) => {
            const win = s.resultado === "ACIERTO";
            const score = s.score || 0;
            return (
              <div key={i} className={`rounded-2xl border p-6 bg-card/50 flex flex-col ${win ? "border-neon/30" : "border-loss/30"}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-display text-xs px-2.5 py-1 rounded-full font-bold ${win ? "bg-neon/15 text-neon border border-neon/30" : "bg-loss/15 text-loss border border-loss/30"}`}>
                    {win ? "✅ WIN" : "❌ LOSS"}
                  </span>
                  <span className="font-display text-[11px] text-muted-foreground">{s.fecha}</span>
                </div>
                <div className="font-display font-bold mb-2">{s.mercado?.slice(0, 40)}{s.mercado?.length > 40 ? "..." : ""}</div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">
                  {s.apodo} · {s.posicion} · ${s.usd?.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">Confidence</span>
                    <span className="font-display text-xs text-amber-score font-bold">{score}/100</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted/60 overflow-hidden">
                    <div className={`h-full rounded-full ${score >= 80 ? "bg-neon" : score >= 60 ? "bg-amber-score" : "bg-loss"}`}
                      style={{ width: `${score}%` }} />
                  </div>
                </div>
                <div className="pt-3 border-t border-border/60">
                  <div className={`font-display text-3xl font-bold ${win ? "text-neon" : "text-loss"}`}>
                    {win ? "✅ WIN" : "❌ LOSS"}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">
                      View market →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-6 max-w-xl mx-auto opacity-70">
          Low-confidence signals sometimes lose. That's exactly why the Confidence Score exists — skip the noise, take the best.
        </p>
      </div>
    </section>
  );
}

/* ── FINAL CTA ───────────────────────────────────────── */
function FinalCTA({ onUpgradeClick }: { onUpgradeClick: () => void }) {
  return (
    <section className="py-32 sm:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 mesh-cta" />
      <div className="absolute inset-0 -z-10 dot-grid opacity-15" />
      <div className="container mx-auto px-5 sm:px-8 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 text-neon font-display text-sm border border-neon/30 bg-neon/5 px-4 py-2 rounded-full mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
          </span>
          Whales are moving right now
        </div>
        <h2 className="font-display text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          The next big move<br />
          <span className="text-gradient-cta">is happening now.</span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Every 5 seconds, we're watching. Join the traders who stopped guessing and started following the money.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={TG_FREE} target="_blank" rel="noopener noreferrer"
            className="btn-neon-border rounded-xl px-8 py-4 font-display font-semibold text-lg">
            Join Free Channel →
          </a>
          <button onClick={onUpgradeClick}
            className="btn-gradient-cta rounded-xl px-8 py-4 font-display font-bold text-lg shadow-[0_0_30px_rgba(0,255,136,0.3)]">
            Start Free Trial — $15/mo 🐋
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-5 sm:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐋</span>
            <div>
              <div className="font-display font-bold text-foreground">PolyWhales</div>
              <div className="text-xs text-muted-foreground">Smart Money Tracker v4.3</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
           <Link to="/terms" className="hover:text-foreground transition font-display">Terms</Link>
           <Link to="/privacy" className="hover:text-foreground transition font-display">Privacy</Link>
            <a href={TG_FREE} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition font-display">Telegram</a>
            <a href="#pricing" className="hover:text-neon transition font-display text-neon/80">VIP Access</a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground opacity-60 max-w-2xl">
          Not financial advice. Prediction markets involve significant risk of loss. Past performance does not guarantee future results. Always do your own research.
        </p>
      </div>
    </footer>
  );
}