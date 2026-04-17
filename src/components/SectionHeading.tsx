import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  eyebrowAccessory?: ReactNode;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, eyebrowAccessory, title, subtitle, align = "center" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-8 md:mb-10`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="font-display text-xs uppercase tracking-[0.2em] text-neon">{eyebrow}</span>
          {eyebrowAccessory}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
