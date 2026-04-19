import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    q: "Is the free channel really free?",
    a: "Yes, the Free channel is 100% free and permanent. You'll receive signals from $50 to $500 with direct Polymarket links at no cost, forever.",
  },
  {
    q: "How do I know the signals are real and not made up?",
    a: "Our Auto-Resolution system queries the Polymarket API every time a market closes and automatically marks each signal as WIN or LOSS. Use the /resultados command in the bot to see the full verified track record.",
  },
  {
    q: "What is the Confidence Score?",
    a: "It's a proprietary algorithm (0–100) that rates each signal's reliability based on the wallet's trade history, market liquidity, position size, and news context. Signals above 75 have historically shown a higher win rate.",
  },
  {
    q: "Can I cancel VIP at any time?",
    a: "Yes, no commitment or penalty. You can cancel directly from Telegram at any time.",
  },
  {
    q: "How often do signals arrive?",
    a: "The bot scans Polymarket every 5 seconds. On high-activity days you'll receive between 5 and 15 VIP signals. On quieter days, between 1 and 3.",
  },
  {
    q: "How does the VIP payment work?",
    a: "After payment you'll receive a unique one-time invite link to join the private VIP channel. The link expires after one use and is tied to your payment confirmation.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />

        <AccordionPrimitive.Root
          type="single"
          collapsible
          defaultValue="faq-0"
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((item, i) => (
            <AccordionPrimitive.Item
              key={item.q}
              value={`faq-${i}`}
              className="group rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden transition-colors data-[state=open]:border-neon/40 data-[state=open]:bg-card"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left font-display text-sm sm:text-base text-foreground hover:text-neon transition-colors data-[state=open]:text-neon">
                  <span>{item.q}</span>
                  <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neon/30 bg-neon/10 text-neon transition-transform duration-300 group-data-[state=open]:rotate-45">
                    <Plus className="h-4 w-4" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 font-body text-sm sm:text-[15px] text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
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