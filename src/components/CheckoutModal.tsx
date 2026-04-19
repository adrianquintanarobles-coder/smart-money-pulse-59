import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Crear sesión de Stripe en el backend
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          productId: "prod_UMYL22pTpPyxNF",
          priceAmount: 1500, // $15 en centavos
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { clientSecret } = await response.json();

      // Redirigir a Stripe Checkout (en la misma pestaña o nueva según prefieras)
      if (clientSecret) {
        // Opción: abrir en popup/modal
        window.location.href = clientSecret;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-neon/30 bg-card p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="font-display text-2xl font-bold text-foreground">
          🐋 Upgrade to VIP
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Get whale signals, AI analysis, and breaking news context.
        </p>

        <div className="mt-6 rounded-lg border border-neon/20 bg-neon/5 p-4">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">Price per month</span>
            <span className="text-3xl font-bold text-neon">$15</span>
          </div>
          <p className="mt-2 text-xs text-amber-score">
            🔥 Launch price — cancel anytime
          </p>
        </div>

        <form onSubmit={handleCheckout} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground placeholder-muted-foreground focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-loss/30 bg-loss/10 p-3 text-sm text-loss">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !email}
            className="btn-gradient-cta w-full rounded-lg py-3 font-display font-semibold disabled:opacity-50"
          >
            {loading ? "Processing..." : "Pay $15/month →"}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Secure payment powered by Stripe
          </p>
        </form>

        <div className="mt-6 space-y-2 border-t border-border pt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-neon">✓</span> Whale signals $500+
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-neon">✓</span> Confidence Score 0–100
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-neon">✓</span> Claude AI Analysis
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-neon">✓</span> Breaking news context
          </div>
        </div>
      </div>
    </div>
  );
}
