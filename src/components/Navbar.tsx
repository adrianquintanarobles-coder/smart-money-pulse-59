import { useEffect, useRef, useState } from "react";

const TG = "https://t.me/+BYejWJEm0SI4MmE0";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY.current + 4) {
        setHidden(true);
      } else if (y < lastY.current - 4) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="border-b border-border/50 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
            </span>
            <span className="font-display text-sm sm:text-base font-bold tracking-tight text-foreground">
              SM Tracker
            </span>
          </a>

          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={TG}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
            >
              Free Channel
            </a>
            <a
              href={TG}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs sm:text-sm font-semibold rounded-lg bg-neon text-background px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-neon/90 transition shadow-[0_0_20px_-4px_color-mix(in_oklab,var(--neon)_60%,transparent)]"
            >
              VIP Access
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
