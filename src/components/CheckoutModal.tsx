import { useState } from "react";
import { X, Shield, Zap, Check, Star, Loader2 } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STRIPE_PUBLISHABLE_KEY = "pk_test_51TNTEALQKsHvzszR9gZKZ7XZWlMaKEXaSdm6ucep108pFmpe8NgmiI3es0XHpqadPB05BtpEEgUa07feRbEiWaxu00uECdB1yD";
const PRICE_ID = "price_1TPlswLbIeIY3uS5asHz9g5V";
const API_URL = import.meta.env.VITE_API_URL || "https://polymarket-bot-production-5124.up.railway.app";

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    try {
      // Create Stripe Checkout Session via our Flask API
      const res = await fetch(`${API_URL}/api/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price_id: PRICE_ID }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await res.json();
      
      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (e: any) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="relative w-full max-w-md rounded-3xl border border-neon/30 bg-card shadow-[0_0_80px_rgba(0,255,136,0.12)] p-8 overflow-hidden">
        
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

        {error && (
          <div className="mb-4 rounded-xl bg-loss/10 border border-loss/30 px-4 py-3 text-sm text-loss text-center">
            {error}
          </div>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="btn-gradient-cta w-full rounded-xl font-display font-bold text-lg py-4 hover:scale-[1.02] transition-transform duration-300 mb-4 shadow-[0_0_25px_rgba(0,255,136,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Redirecting to payment...
            </>
          ) : (
            "Start Free Trial →"
          )}
        </button>

        <p className="text-center text-xs text-muted-foreground mb-6 font-display">
          Powered by Stripe · Card, Apple Pay & Google Pay accepted
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