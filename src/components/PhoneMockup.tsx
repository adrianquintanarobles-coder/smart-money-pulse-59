import { CheckCheck, ExternalLink, Brain } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="mx-auto w-[320px] sm:w-[340px] relative mt-10 mb-8">
      {/* Brillo de fondo - Más agresivo para destacar el móvil */}
      <div className="absolute inset-0 bg-neon/20 blur-[100px] -z-10 rounded-full" />

      {/* Marco del Teléfono */}
      <div className="relative rounded-[2.5rem] border-[6px] border-[#101010] bg-[#0e1621] shadow-2xl overflow-hidden h-[580px] flex flex-col hover:scale-[1.02] transition-transform duration-500">
        
        {/* Notch (Cámara superior) */}
        <div className="absolute top-0 inset-x-0 h-6 bg-[#101010] rounded-b-3xl w-[40%] mx-auto z-20" />

        {/* Cabecera de Telegram */}
        <div className="bg-[#17212b] px-4 pt-8 pb-3 flex items-center gap-3 border-b border-black/40 z-10 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon to-electric flex items-center justify-center font-display font-bold text-background shadow-[0_0_10px_rgba(0,255,136,0.3)]">
            VIP
          </div>
          <div>
            <h3 className="text-white font-bold text-[15px] leading-tight">Smart Money VIP 👑</h3>
            <p className="text-[#798e9d] text-[12px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" /> 1,240 online
            </p>
          </div>
        </div>

        {/* Área del Chat de Telegram */}
        <div className="flex-1 p-3 flex flex-col justify-end gap-3 bg-[#0e1621] pb-6 relative overflow-hidden">
          
          {/* Mensaje Anterior (Falso historial - Cierre en positivo) */}
          <div className="bg-[#182533] rounded-2xl rounded-tl-sm p-3 max-w-[85%] opacity-60">
            <p className="text-[#e4e4e6] text-[13px] mb-1">🎯 <strong>TAKE PROFIT HIT</strong></p>
            <p className="text-[#e4e4e6] text-[12px]">Señal #4892 cerrada automáticamente.</p>
            <p className="text-neon text-[13px] font-bold mt-1">Beneficio: +$1,240 (+142%)</p>
            <div className="flex justify-end items-center gap-1 mt-1 text-[#798e9d] text-[10px]">
              14:20 <CheckCheck className="w-3 h-3 text-[#58abff]" />
            </div>
          </div>

          {/* Mensaje Principal VIP (La Droga) */}
          <div className="bg-[#182533] rounded-2xl rounded-tl-sm p-4 shadow-lg border border-neon/20 text-[13.5px] text-[#e4e4e6] leading-relaxed relative w-[95%]">
            
            <p className="font-bold text-neon text-base mb-2 border-b border-neon/20 pb-2">
              🐋 ALERTA BALLENA VIP
            </p>
            
            <div className="space-y-1.5 mb-3 mt-3">
              <p>📍 <strong>Mercado:</strong> Fed Rate Cut in Q4?</p>
              <p>🎯 <strong>Posición:</strong> <span className="text-neon font-bold">BUY → YES</span></p>
              <p>💰 <strong>Capital:</strong> <span className="text-foreground font-bold">$45,200</span> <span className="text-xs text-muted-foreground">(Gran volumen)</span></p>
              <p className="flex items-center gap-2">
                ⚡ <strong>Confianza:</strong> <span className="bg-neon/10 text-neon px-2 py-0.5 rounded font-bold text-xs border border-neon/20">94/100</span>
              </p>
            </div>
            
            <div className="bg-[#0e1621] p-3 rounded-lg border border-border/50 mb-3">
              <p className="text-xs text-electric font-bold mb-1 flex items-center gap-1">
                <Brain className="w-3 h-3"/> Claude AI Analysis:
              </p>
              <p className="text-[12px] text-[#8b9bb4] italic leading-snug">
                "Esta billetera tiene un 89% win-rate en macroeconomía. Acaba de inyectar liquidez 15 mins antes de la publicación del IPC. Dinero institucional anticipando una caída de tipos."
              </p>
            </div>

            {/* Botón de acción simulado de Telegram */}
            <div className="bg-[#2b5278] hover:bg-[#346290] transition-colors cursor-pointer text-center py-2.5 rounded-xl font-bold text-white text-[13px] flex items-center justify-center gap-2 mt-2 shadow-md">
              Apostar en Polymarket <ExternalLink className="w-3.5 h-3.5" />
            </div>
            
            <div className="flex justify-between items-center mt-3 text-[#798e9d] text-[10px]">
              <span className="bg-background/50 px-2 py-0.5 rounded">Latencia: 1.2s</span>
              <span className="flex items-center gap-1">18:40 <CheckCheck className="w-3 h-3 text-[#58abff]" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}