interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-10 md:mb-14`}>
      {eyebrow && (
        <div className="font-display text-xs uppercase tracking-[0.2em] text-neon mb-3">{eyebrow}</div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
