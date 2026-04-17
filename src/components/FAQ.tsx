import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    q: "¿Es realmente gratis el canal básico?",
    a: "Sí, el canal Free es 100% gratuito y permanente. Recibirás señales de $50 a $500 con enlaces directos a Polymarket sin ningún coste.",
  },
  {
    q: "¿Cómo sé que las señales son reales y no inventadas?",
    a: "Nuestro sistema de Auto-Resolución consulta la API de Polymarket cuando cada mercado se cierra y marca automáticamente cada señal como WIN o LOSS. Usa el comando /resultados en el bot para ver el historial completo.",
  },
  {
    q: "¿Qué es el Confidence Score?",
    a: "Es un algoritmo propio (0-100) que puntúa la fiabilidad de cada señal en base al historial del wallet, liquidez del mercado, tamaño de la posición y contexto de noticias. Señales por encima de 75 tienen históricamente mayor tasa de acierto.",
  },
  {
    q: "¿Puedo cancelar el VIP cuando quiera?",
    a: "Sí, sin permanencia ni penalización. Cancelas desde Telegram en cualquier momento.",
  },
  {
    q: "¿Con qué frecuencia llegan señales?",
    a: "El bot escanea Polymarket cada 5 segundos. En días de alta actividad de mercado recibirás entre 5 y 15 señales VIP. En días tranquilos, entre 1 y 3.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="Preguntas frecuentes" />

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
