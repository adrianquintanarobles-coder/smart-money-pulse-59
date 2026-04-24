import { X, Shield, Zap, Check, Star } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="relative w-full max-w-md rounded-3xl border border-neon/30 bg-card shadow-[0_0_80px_rgba(0,255,136,0.12)] p-8 overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-neon/10 blur-3xl -z-10" />
        
        <button onClick={onClose} className="absolute right-5 top-5 text-muted-foreground hover:text-foreground transition p-1 rounded-lg hover:bg-muted">
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-7">
          <div className="text-4xl mb-3">🐋</div>
          <h2 className="font-display text-2xl font-bold">Get VIP Access</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">Instant access · Cancel anytime</p>
        </div>

        {/* Price box */}
        <div className="rounded-2xl border border-neon/20 bg-neon/5 p-5 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold">$15</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-muted-foreground line-through text-sm">$35/mo</span>
                <span className="text-xs font-bold text-neon bg-neon/10 px-2 py-0.5 rounded font-display">SAVE 57%</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-amber-score text-amber-score" />)}
              </div>
              <div className="text-xs text-amber-score font-display mt-1">🎁 3-day free trial</div>
            </div>
          </div>
        </div>

        <a
          href="https://whop.com/PolyWhales"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient-cta w-full block text-center rounded-xl font-display font-bold text-lg py-4 hover:scale-[1.02] transition-transform duration-300 mb-4 shadow-[0_0_25px_rgba(0,255,136,0.3)]"
        >
          Start Free Trial →
        </a>

        <p className="text-center text-xs text-muted-foreground mb-6 font-display">
          Powered by Whop · Card, PayPal & crypto accepted
        </p>

        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            "🐋 Whale signals $500+",
            "⚡ Confidence Score 0-100",
            "🧠 Claude AI Analysis",
            "🏛️ Consensus Alerts",
            "🔄 Contrarian Alerts",
            "📊 Full audit record",
            "🌙 Nightly summaries",
            "🐋 Whale profile cards",
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-neon text-[10px]">✓</span> {f}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-5 text-xs text-muted-foreground border-t border-border pt-5">
          <span className="flex items-center gap-1.5 font-display"><Shield className="w-3.5 h-3.5 text-neon" /> Secure</span>
          <span className="flex items-center gap-1.5 font-display"><Zap className="w-3.5 h-3.5 text-electric" /> Instant access</span>
          <span className="flex items-center gap-1.5 font-display"><X className="w-3.5 h-3.5" /> Cancel anytime</span>
        </div>
      </div>
    </div>
  );
}
