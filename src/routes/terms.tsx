import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-5 sm:px-8 py-20 max-w-3xl">
        <h1 className="font-display text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: April 2026</p>

        {[
          { title: "1. Service Description", text: "PolyWhales provides real-time alerts and analysis of publicly available trading activity on Polymarket prediction markets. Our service includes a free Telegram channel and a paid VIP subscription." },
          { title: "2. Not Financial Advice", text: "All signals, alerts, analysis and content provided by PolyWhales are for informational and educational purposes only. Nothing we publish constitutes financial advice, investment advice, or a recommendation to buy or sell any asset. Always do your own research before making any financial decision." },
          { title: "3. No Guarantees", text: "Past performance of signals does not guarantee future results. Prediction markets involve significant risk of loss. We make no guarantees about the accuracy, completeness or profitability of any signal or analysis." },
          { title: "4. Subscription & Billing", text: "VIP access is billed monthly at $15 USD via Whop. A 3-day free trial is available for new subscribers. You may cancel at any time before your next billing date. No refunds are provided for partial months." },
          { title: "5. Acceptable Use", text: "You agree not to redistribute, resell or share VIP signals without our written permission, use our service for any illegal purpose, or attempt to reverse-engineer or scrape our systems." },
          { title: "6. Intellectual Property", text: "All content, branding, and signals produced by PolyWhales are our intellectual property. You may not reproduce or distribute them without permission." },
          { title: "7. Limitation of Liability", text: "PolyWhales is not liable for any financial losses incurred as a result of using our service. Our maximum liability to you is limited to the amount you paid in the last 30 days." },
          { title: "8. Contact", text: "For any questions contact us via Telegram." },
        ].map((s, i) => (
          <div key={i} className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-neon">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}