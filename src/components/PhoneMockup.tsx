import { TrendingDown, User, Layers, Crosshair, DollarSign, Activity, AlertCircle, Zap } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="mx-auto w-[320px] sm:w-[340px] relative mt-12 mb-8">
      {/* Resplandor de fondo */}
      <div className="absolute inset-0 bg-electric/20 blur-[100px] -z-10 rounded-full" />

      {/* Marco del Teléfono */}
      <div className="relative rounded-[3rem] border-[8px] border-[#101010] bg-background shadow-2xl overflow-hidden aspect-[9/19]">
        
        {/* Notch (Isla dinámica) */}
        <div className="absolute top-0 inset-x-0 h-7 bg-[#101010] rounded-b-3xl w-[40%] mx-auto z-20" />

        {/* Fondo de pantalla del móvil */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric/10 via-background to-background" />

        {/* Contenido (Notificación VIP) */}
        <div className="relative z-10 pt-16 px-4">
          
          {/* Tarjeta de Alerta */}
          <div className="bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            
            {/* Cabecera de la alerta */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              <div className="bg-loss/20 p-1.5 rounded-md border border-loss/30">
                <TrendingDown className="w-4 h-4 text-loss" />
              </div>
              <h3 className="text-white font-display font-bold text-sm tracking-wide">
                DIVERGENCE DETECTED
              </h3>
              <Zap className="w-3.5 h-3.5 text-amber-score ml-auto fill-amber-score animate-pulse" />
            </div>

            {/* Contexto Principal */}
            <div className="flex items-start gap-2 mb-5">
              <User className="w-4 h-4 text-electric mt-0.5 shrink-0" />
              <p className="text-sm text-white leading-snug">
                <span className="font-bold text-electric">La Sombra</span> bought but price dropped
              </p>
            </div>

            {/* Cuadrícula de Datos */}
            <div className="space-y-3 mb-5">
              
              <div className="flex items-start gap-2">
                <Layers className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-display">Market</span>
                  <span className="text-xs text-white leading-tight">IPL: Lucknow Super Giants vs Rajasthan Royals</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <Crosshair className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-display">Position</span>
                    <span className="text-xs font-bold text-neon">BUY Royals</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <DollarSign className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-display">Invested</span>
                    <span className="text-xs font-bold text-white tabular-nums">$504.54</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Activity className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-display">Entry</span>
                    <span className="text-xs font-bold text-white tabular-nums">65.0%</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <TrendingDown className="w-3.5 h-3.5 text-loss mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-loss uppercase tracking-wider font-display">Current</span>
                    <span className="text-xs font-bold text-loss tabular-nums">46.5% <span className="text-[10px] font-normal">(-18.5%)</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Análisis IA */}
            <div className="bg-electric/5 border border-electric/20 rounded-xl p-3 flex gap-2.5 items-start">
              <AlertCircle className="w-4 h-4 text-electric shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground italic leading-relaxed">
                "The market hasn't followed the whale — possible inefficiency or early entry."
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}