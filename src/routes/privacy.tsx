import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-5 sm:px-8 py-20 max-w-3xl">
        <h1 className="font-display text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: April 2026</p>

        {[
          { title: "1. What We Collect", text: "When you subscribe via Whop, we receive your name, email address and Telegram username. Payment information is processed by Whop — we never see your card details. When you interact with our Telegram bot, we store your Telegram chat ID and command history." },
          { title: "2. How We Use Your Data", text: "We use your data exclusively to provide and manage your VIP subscription, send you trading signals via Telegram, respond to your bot commands, and notify you of account changes. We do not sell, rent or share your personal data with third parties." },
          { title: "3. Data Storage", text: "Your data is stored in a secure PostgreSQL database hosted on Railway (EU servers). We retain your data for as long as your subscription is active, plus 30 days after cancellation." },
          { title: "4. Third-Party Services", text: "We use Whop for payment processing, Telegram for signal delivery, Railway for server hosting, and Cloudflare for website hosting. Each has their own privacy policy." },
          { title: "5. Your Rights (GDPR)", text: "If you are based in the EU/EEA, you have the right to access, correct or delete your personal data, object to processing, and request data portability. Contact us via Telegram to exercise these rights." },
          { title: "6. Cookies", text: "Our website uses no tracking cookies. We only use essential cookies required for the site to function." },
          { title: "7. Contact", text: "For privacy-related questions contact us via Telegram." },
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