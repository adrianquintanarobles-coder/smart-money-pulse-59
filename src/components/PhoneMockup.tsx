import { CheckCheck, ExternalLink } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="mx-auto w-[320px] sm:w-[360px] relative mt-10 mb-8">
      {/* Brillo de fondo verdecillo agresivo */}
      <div className="absolute inset-0 bg-neon/20 blur-[100px] -z-10 rounded-full" />

      {/* Marco del Teléfono - Altura ajustada a 680px (Proporción Pro Max) */}
      <div className="relative rounded-[2.5rem] border-[6px] border-[#101010] bg-[#0e1621] shadow-[0_0_40px_rgba(0,255,136,0.15)] overflow-hidden h-[680px] flex flex-col hover:scale-[1.02] transition-transform duration-500">
        
        {/* Notch (Cámara superior) */}
        <div className="absolute top-0 inset-x-0 h-6 bg-[#101010] rounded-b-3xl w-[40%] mx-auto z-20" />

        {/* Cabecera de Telegram */}
        <div className="bg-[#17212b] px-4 pt-8 pb-3 flex items-center gap-3 border-b border-black/40 z-10 shadow-sm shrink-0">
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

        {/* Área del Chat de Telegram - Sin scroll y todo compactado */}
        <div className="flex-1 p-3 flex flex-col justify-end bg-[#0e1621] pb-5 relative overflow-hidden">
          
          {/* Mensaje Principal VIP */}
          <div className="bg-[#182533] rounded-2xl rounded-tl-sm p-3.5 shadow-lg border border-neon/30 text-[12.5px] text-[#e4e4e6] leading-tight relative w-full">
            
            <p className="font-bold text-white text-[13.5px] mb-2 flex items-center gap-1.5 whitespace-nowrap">
              🐋 ALERTA VIP — BALLENA VERIFICADA
            </p>
            
            <div className="space-y-1 mb-2.5">
              <p>🏷️ <strong>Apodo:</strong> El Arquitecto</p>
              <p>📋 <strong>Mercado:</strong> Bitcoin above $100k by June?</p>
              <p>🎯 <strong>Posición:</strong> <span className="text-neon font-bold">BUY → YES</span></p>
              <p>💰 <strong>Invertido:</strong> $1,254.50 USD</p>
              <p>📊 <strong>Precio entrada:</strong> 42.0%</p>
              <p>📈 <strong>Precio ahora:</strong> <span className="text-neon font-bold">48.5% (+15.4%)</span></p>
              <p>📈 <strong>Perfil:</strong> ROI 24.2% | PnL $14,250 | 89 pos.</p>
              <p>📜 <strong>Historial:</strong> Racha de 4 wins 🔥</p>
              <p className="flex items-center gap-1">🎯 <strong>Score:</strong> <span className="bg-amber-500/20 text-amber-500 px-1 rounded font-bold text-xs">94/100 ⚡</span></p>
              <p className="text-electric">🔑 <strong>Wallet:</strong> 0x7a2...f9e4</p>
            </div>

            {/* Separador sutil */}
            <div className="h-px w-full bg-white/10 my-2" />
            
            <div className="space-y-1 mb-2.5">
              <p>📄 <strong>El Arquitecto -- Ficha</strong></p>
              <p>💰 <strong>Total invertido:</strong> $41,200</p>
              <p>🎯 <strong>Tasa de acierto:</strong> <span className="text-neon font-bold">78% (42/54)</span></p>
              <p className="truncate">📋 <strong>Mercados:</strong> BTC/USD, ETH ETF, Fed Rates</p>
              <p>⚡ <strong>Outcome frecuente:</strong> Yes</p>
            </div>

            <div className="h-px w-full bg-white/10 my-2" />

            <div className="mb-2">
              <p className="leading-snug">📰 <strong>Contexto:</strong> <em>Claude AI detecta acumulación en wallets tras la FED. Setup de altísima probabilidad.</em></p>
            </div>

            <p className="text-electric hover:underline cursor-pointer flex items-center gap-1 mb-1.5 mt-2">
              🔗 Ver mercado en Polymarket
            </p>

            {/* Rich Link Preview simulando Polymarket - Imagen reducida para ahorrar espacio */}
            <div className="rounded-lg border border-black/30 bg-[#233040] overflow-hidden flex flex-col shadow-inner">
              <div className="h-[2px] w-full bg-blue-500" />
              <div className="p-2 pb-1.5">
                <p className="text-[#58abff] text-[11px] font-semibold mb-0.5">Polymarket</p>
                <p className="font-bold text-[12px] text-white leading-tight mb-1 truncate">
                  Bitcoin above $100k by June 2026?
                </p>
                <p className="text-[10px] text-[#8b9bb4] truncate">
                  Real-time prediction market for BTC...
                </p>
              </div>
              {/* Contenedor de la imagen más bajito (h-14 en vez de h-20) */}
              <div className="h-14 w-full bg-gradient-to-r from-orange-500 to-amber-500 relative flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://polymarket.com/favicon.ico')] bg-cover bg-center" />
                 <span className="text-white font-display font-black text-xl tracking-tighter shadow-black drop-shadow-md">₿ $100k</span>
              </div>
              <div className="p-1.5 px-2 flex justify-between items-center bg-[#1c2734]">
                <span className="text-white font-bold text-[11px]">48.5% chance</span>
                <span className="text-[#8b9bb4] text-[9px] flex items-center gap-1"><ExternalLink className="w-2.5 h-2.5"/> Polymarket</span>
              </div>
            </div>
            
            {/* Hora y check */}
            <div className="flex justify-end items-center mt-2 text-[#798e9d] text-[10px]">
              <span className="flex items-center gap-1">18:42 <CheckCheck className="w-3 h-3 text-[#58abff]" /></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}