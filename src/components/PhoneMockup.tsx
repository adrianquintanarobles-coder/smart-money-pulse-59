import { CheckCheck } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="mx-auto w-[320px] sm:w-[340px] relative mt-10 mb-8">
      {/* Brillo de fondo sutil */}
      <div className="absolute inset-0 bg-neon/15 blur-[80px] -z-10 rounded-full" />

      {/* Marco del Teléfono */}
      <div className="relative rounded-[2.5rem] border-[6px] border-[#101010] bg-[#0e1621] shadow-2xl overflow-hidden h-[580px] flex flex-col">
        
        {/* Notch (Cámara superior) */}
        <div className="absolute top-0 inset-x-0 h-6 bg-[#101010] rounded-b-3xl w-[40%] mx-auto z-20" />

        {/* Cabecera de Telegram */}
        <div className="bg-[#17212b] px-4 pt-8 pb-3 flex items-center gap-3 border-b border-black/20 z-10 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon to-electric flex items-center justify-center font-display font-bold text-background">
            SM
          </div>
          <div>
            <h3 className="text-white font-semibold text-[15px] leading-tight">Smart Money Tracker VIP</h3>
            <p className="text-[#798e9d] text-[12px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" /> online
            </p>
          </div>
        </div>

        {/* Área del Chat de Telegram */}
        <div className="flex-1 p-3 flex flex-col justify-end gap-3 bg-[#0e1621] pb-6 relative">
          
          {/* Mensaje Anterior (Falso historial para llenar la pantalla de forma realista) */}
          <div className="bg-[#182533] rounded-2xl rounded-tl-sm p-3 max-w-[85%] opacity-50">
            <p className="text-[#e4e4e6] text-[13px] mb-1">✅ <strong>WIN DETECTADO</strong></p>
            <p className="text-[#e4e4e6] text-[13px]">El Oráculo cerró posición en Fed Rate Cuts.</p>
            <p className="text-neon text-[13px] font-bold mt-1">+142% ROI</p>
            <div className="flex justify-end items-center gap-1 mt-1 text-[#798e9d] text-[10px]">
              14:20 <CheckCheck className="w-3 h-3 text-[#58abff]" />
            </div>
          </div>

          {/* Mensaje Principal (Textos exactos de tu captura) */}
          <div className="bg-[#182533] rounded-2xl rounded-tl-sm p-4 shadow-md text-[13.5px] text-[#e4e4e6] leading-relaxed relative w-[95%]">
            
            <p className="font-bold text-white mb-3">📉 DIVERGENCIA DETECTADA 📉</p>
            
            <p className="mb-3">🏷️ <strong>La Sombra</strong> compró pero el precio bajó</p>
            
            <div className="space-y-1.5 mb-4">
              <p>📋 <strong>Mercado:</strong> Indian Premier League: Lucknow Super Giants vs Rajasthan Royals</p>
              <p>🎯 <strong>Posición:</strong> BUY → Rajasthan Royals</p>
              <p>💰 <strong>USD invertido:</strong> $504.54</p>
              <p>📊 <strong>Precio entrada:</strong> 65.0%</p>
              <p>📉 <strong>Precio actual:</strong> <span className="text-[#ff5959]">46.5% (-18.5%)</span></p>
            </div>
            
            <p className="italic text-[#8b9bb4]">
              El mercado no ha seguido a la ballena — posible ineficiencia o entrada temprana.
            </p>
            
            {/* Metadatos Telegram (Hora y check azul) */}
            <div className="flex justify-end items-center gap-1 mt-2 text-[#798e9d] text-[10px]">
              18:40 <CheckCheck className="w-3 h-3 text-[#58abff]" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}