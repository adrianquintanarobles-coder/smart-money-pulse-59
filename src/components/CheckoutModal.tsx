import { X, Shield, Zap, Star } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-neon/30 bg-card shadow-[0_0_60px_rgba(0,255,136,0.1)] p-8">
        <button onClick={onClose} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition">
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="text-3xl mb-2">🐋</div>
          <h2 className="font-display text-2xl font-bold text-foreground">Upgrade to VIP</h2>
          <p className="mt-1 text-sm text-muted-foreground">Instant access via Telegram</p>
        </div>

        <div className="rounded-xl border border-neon/20 bg-neon/5 p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-foreground">$15</span>
                <span className="text-muted-foreground text-sm">/ month</span>
              </div>
              <p className="text-xs text-amber-score mt-1">🔥 Launch price — cancel anytime</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground line-through">$35/mo</div>
              <div className="text-xs font-bold text-neon bg-neon/10 px-2 py-0.5 rounded mt-1">SAVE 57%</div>
            </div>
          </div>
        </div>

        <a
          href="https://whop.com/PolyWhales"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient-cta w-full block text-center rounded-xl font-display font-bold text-lg py-4 hover:scale-[1.02] transition-transform duration-300 mb-4 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
        >
          Pay & Get Instant Access →
        </a>

        <p className="text-center text-xs text-muted-foreground mb-6">
          Powered by Whop · Tarjeta, PayPal & crypto · Acceso instantáneo
        </p>

        <div className="space-y-2.5 border-t border-border pt-5">
          {[
            "🐋 Whale signals $500+ (verified wallets)",
            "⚡ Confidence Score 0–100",
            "🧠 Claude AI Reasoning Reports",
            "🏛️ Institutional Consensus Alerts",
            "🔄 Contrarian Whale Alerts",
            "📊 /resultados Full Audit Record",
            "🌙 Nightly Summary & Weekly Ranking",
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-neon">✓</span> {f}
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-neon" /> Secure</span>
          <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-electric" /> Instant access</span>
          <span className="flex items-center gap-1"><X className="w-3 h-3" /> Cancel anytime</span>
        </div>
      </div>
    </div>
  );
}
