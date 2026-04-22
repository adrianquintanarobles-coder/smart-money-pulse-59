import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    q: "Why should I pay for VIP if there is a Free channel?",
    a: "The Free channel only tracks small movements ($50 to $500). VIP is where the real money is made: it alerts you of whales moving $5,000 to $100,000+. Plus, VIP includes the Claude AI reasoning report and the 0-100 Confidence Score to filter out the noise.",
  },
  {
    q: "Do I need thousands of dollars to start following these signals?",
    a: "Not at all. You can follow whale movements with as little as $10. Our algorithm filters wallets by their ROI percentage and win streaks, not just their total capital. If a whale makes a 200% profit, your $10 will make the exact same 200% profit.",
  },
  {
    q: "What happens if the bot fails or a signal loses?",
    a: "We don't hide losses. Low-confidence signals sometimes fail, which is exactly why the 0-100 Confidence Score exists. Our system auto-audits every single market upon resolution. You can type /resultados in the bot anytime to see the transparent, uncut history of wins and losses.",
  },
  {
    q: "I have never used Polymarket. Is this too advanced for me?",
    a: "No. Every single signal comes with a direct '1-Click' button. You just read the AI analysis, see the confidence score, click the button, and it takes you straight to the exact market on Polymarket. Stop guessing, just mirror.",
  },
  {
    q: "Is there a long-term contract or lock-in period?",
    a: "Zero commitment. You are paying month-to-month and can cancel your VIP subscription with a single click inside the Telegram bot. No annoying emails, no support tickets required.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading 
          eyebrow="No B.S. Answers" 
          title="Everything you need to know." 
        />

        <AccordionPrimitive.Root
          type="single"
          collapsible
          defaultValue="faq-0"
          className="max-w-3xl mx-auto space-y-4 mt-8"
        >
          {faqs.map((item, i) => (
            <AccordionPrimitive.Item
              key={i}
              value={`faq-${i}`}
              className="group rounded-2xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-300 data-[state=open]:border-neon/50 data-[state=open]:bg-card/80 data-[state=open]:shadow-[0_0_20px_rgba(0,255,136,0.05)]"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between gap-4 px-6 py-5 text-left font-display text-[15px] sm:text-lg font-semibold text-foreground hover:text-neon transition-colors data-[state=open]:text-neon">
                  <span>{item.q}</span>
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neon/30 bg-neon/10 text-neon transition-transform duration-300 group-data-[state=open]:rotate-45">
                    <Plus className="h-4 w-4" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-6 pb-6 -mt-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.a}
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  );
}