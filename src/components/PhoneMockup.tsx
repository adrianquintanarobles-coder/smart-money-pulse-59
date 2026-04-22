import { Eye } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="mx-auto max-w-[340px] md:max-w-[380px] relative group mt-8">
      {/* Glow de fondo para que el móvil destaque */}
      <div className="absolute inset-0 bg-neon/15 blur-[80px] -z-10 rounded-full transition-all duration-700 group-hover:bg-neon/25" />

      {/* Marco del Teléfono */}
      <div className="relative rounded-[2.5rem] border-[6px] border-[#101010] bg-[#0e1621] shadow-2xl overflow-hidden aspect-[9/18]">
        
        {/* Notch (Isla dinámica superior) */}
        <div className="absolute top-0 inset-x-0 h-6 bg-[#101010] rounded-b-3xl w-[40%] mx-auto z-20" />

        {/* Cabecera estilo Telegram */}
        <div className="bg-[#17212b] px-4 pt-8 pb-3 flex items-center gap-3 border-b border-black/20 shadow-md z-10 relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon to-electric flex items-center justify-center font-display font-bold text-background shadow-[0_0_10px_rgba(0,255,136,0.3)]">
            SM
          </div>
          <div>
            <h3 className="text-white font-semibold text-[15px] leading-tight">Smart Money Tracker VIP</h3>
            <p className="text-[#798e9d] text-[12px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" /> online
            </p>
          </div>
        </div>

        {/* Área del Chat de Telegram (Fondo Oscuro) */}
        <div className="p-3 relative h-full bg-[#0e1621] flex flex-col justify-end pb-8">
          
          {/* Burbuja del Mensaje VIP */}
          <div className="bg-[#182533] rounded-2xl rounded-tl-sm p-3 shadow-md text-[13px] text-[#e4e4e6] leading-relaxed border border-white/5 transform transition-all duration-500 hover:scale-[1.02]">
            
            <p className="font-bold text-white mb-2 text-[14px]">📉 DIVERGENCIA DETECTADA 📉</p>
            <p className="mb-2">🏷️ <strong>La Sombra</strong> compró pero el precio bajó</p>
            
            <div className="space-y-1 mb-3">
              <p>📋 <strong>Mercado:</strong> Indian Premier League: Lucknow Super Giants vs Rajasthan Royals</p>
              <p>🎯 <strong>Posición:</strong> BUY → Rajasthan Royals</p>
              <p>💰 <strong>USD invertido:</strong> $504.54</p>
              <p>📊 <strong>Precio entrada:</strong> 65.0%</p>
              <p>📉 <strong>Precio actual:</strong> <span className="text-[#ff5959]">46.5% (-18.5%)</span></p>
            </div>
            
            <p className="italic text-[#8b9bb4] mb-3">
              El mercado no ha seguido a la ballena — posible ineficiencia o entrada temprana.
            </p>
            
            <p className="mb-2">
              🔗 <a href="#" className="text-[#58abff] hover:underline">Ver mercado</a>
            </p>

            {/* Previsualización del enlace de Polymarket (Link Preview) */}
            <div className="border-l-[3px] border-[#d55e8d] bg-[#101921] rounded-r-lg p-2 mt-2 cursor-pointer hover:bg-[#15202b] transition">
              <p className="text-[#d55e8d] text-[11px] font-semibold mb-0.5">Polymarket</p>
              <p className="text-white font-bold text-[12px] leading-tight mb-1">
                Royals vs. Giants Odds & Predictions (Apr. 22, 2026) | Polymarket
              </p>
              <p className="text-[#8b9bb4] text-[11px] leading-snug line-clamp-2 mb-2">
                Real-time Indian Premier League trading odds for Royals vs. Giants on Apr. 22, 2026. Predict the winner and track live stats on Polymarket.
              </p>
              
              {/* Réplica de la imagen de Polymarket dividida en 2 */}
              <div className="flex h-20 rounded-md bg-white overflow-hidden border border-white/10">
                {/* Mitad Izquierda Oscura */}
                <div className="w-1/2 bg-[#0d0d1a] flex items-center justify-center relative p-2">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ff0055]/20 to-transparent" />
                  <span className="text-[11px] font-black text-white text-center z-10 leading-tight">
                    LUCKNOW SUPER GIANTS
                  </span>
                </div>
                {/* Mitad Derecha Blanca (Mini Gráfica) */}
                <div className="w-1/2 p-2 flex flex-col justify-between bg-white">
                  <div className="text-[9px] font-bold text-black leading-tight">
                    Indian Premier League: Lucknow Super Giants vs...
                  </div>
                  <div className="flex gap-1.5 mt-auto">
                    <div className="h-5 flex-1 bg-green-100 rounded text-[8px] text-green-700 flex items-center justify-center font-bold">
                      50¢
                    </div>
                    <div className="h-5 flex-1 bg-red-100 rounded text-[8px] text-red-700 flex items-center justify-center font-bold">
                      50¢
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pie del mensaje de Telegram (Ojo de visualizaciones y Hora) */}
            <div className="flex justify-end items-center gap-1.5 mt-2 text-[#798e9d] text-[10px]">
              <span>2</span>
              <Eye className="w-3 h-3" />
              <span className="ml-1">18:40</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}