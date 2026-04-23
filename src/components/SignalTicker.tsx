import { useMemo } from "react";
import { ShieldCheck, Users, Target, Activity, ArrowUpRight } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// 1. Generamos los datos simulados para 60 DÍAS
const generateData = () => {
  let balance = 150;
  const data = [];
  
  for (let i = 1; i <= 60; i++) {
    // Curva de interés compuesto (crecimiento más explosivo al final)
    // Para hacer x100 en 60 días necesitamos aprox un 8% diario compuesto.
    const baseGrowth = 1.08; 
    // Añadimos ruido para que parezca un gráfico de trading real, no una línea matemática perfecta
    const noise = (Math.random() * 0.12) - 0.04; 
    
    balance = balance * (baseGrowth + noise);
    
    // Forzamos el último día para que clave la cifra de la imagen
    if (i === 60) balance = 14575;

    data.push({
      dayNumber: i,
      dayLabel: `Day ${i}`,
      balance: Math.max(150, Math.round(balance)), // Nunca baja de 150
    });
  }
  return data;
};

// Tooltip estilo Terminal para hacer match con el diseño
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0b1015]/95 border border-white/10 p-3 rounded-lg shadow-2xl backdrop-blur-md">
        <p className="text-muted-foreground text-[11px] uppercase tracking-wider mb-1 font-display">{label}</p>
        <p className="text-white font-bold text-lg font-display">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function SignalTicker() {
  const data = useMemo(() => generateData(), []);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0a0f16] shadow-[0_0_50px_rgba(0,255,136,0.05)] overflow-hidden font-display relative">
      
      {/* ── CABECERA ── */}
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-white/5">
        
        {/* Info Izquierda */}
        <div>
          <div className="flex items-center gap-2 text-muted-foreground mb-3 text-[11px] uppercase tracking-widest font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Certified Backtest • 60 Days
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-2">
            <span className="text-[#00d2ff]">Compound</span> <span className="text-white">Strategy</span>
          </h2>
          <div className="flex items-center gap-2 text-[#8b9bb4] text-sm mb-5">
            <Users className="w-4 h-4" />
            Average performance of 100 Whale VIP accounts
          </div>

          {/* Badges */}
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white font-medium">
              <Target className="w-3.5 h-3.5 text-amber-500" />
              Win Rate: <span className="font-bold">84.2%</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white font-medium">
              <Activity className="w-3.5 h-3.5 text-[#00d2ff]" />
              Max Drawdown: <span className="font-bold">-4.1%</span>
            </div>
          </div>
        </div>

        {/* Info Derecha (Caja de capital final) */}
        <div className="bg-[#111820] border border-white/10 rounded-xl p-5 w-full sm:w-auto shadow-inner">
          <div className="flex items-center justify-between sm:justify-end gap-6 mb-1">
            <span className="text-[#8b9bb4] text-[10px] uppercase tracking-widest font-bold flex items-center gap-1">
              Final Capital <ArrowUpRight className="w-3 h-3 text-neon" />
            </span>
          </div>
          <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
            $14,575
          </div>
          <div className="inline-block px-2.5 py-1 rounded bg-neon/10 border border-neon/20 text-neon text-xs font-bold tracking-wide">
            +9717% ROI
          </div>
        </div>
      </div>

      {/* ── GRÁFICO ── */}
      <div className="relative h-[350px] w-full pt-6">
        
        {/* Etiquetas Flotantes (Cuentan la historia) */}
        <div className="absolute top-[20%] left-[15%] z-10 hidden sm:block">
          <div className="bg-[#151b23]/90 border border-white/10 rounded-lg p-3 shadow-xl backdrop-blur-sm">
            <p className="text-white font-bold text-xs mb-0.5">Phase 1: Accumulation</p>
            <p className="text-[#8b9bb4] text-[11px]">AI identifying highly profitable wallets.</p>
          </div>
          <div className="h-10 w-px bg-white/20 mx-auto mt-1" />
        </div>

        <div className="absolute top-[50%] left-[45%] z-10 hidden sm:block">
          <div className="bg-neon/10 border border-neon/30 rounded-lg p-3 shadow-[0_0_20px_rgba(0,255,136,0.1)] backdrop-blur-sm">
            <p className="text-neon font-bold text-xs mb-0.5 flex items-center gap-1">
              <Activity className="w-3 h-3"/> Phase 2: Exponential Breakout
            </p>
            <p className="text-neon/70 text-[11px]">Compounding effect multiplying gains.</p>
          </div>
        </div>

        {/* Renderizado de Recharts */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ff88" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#00ff88" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} opacity={0.5} />
            
            {/* Eje X adaptado a 60 días */}
            <XAxis 
              dataKey="dayLabel" 
              stroke="#555" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              dy={10}
              interval="preserveStartEnd"
              tickFormatter={(val) => {
                // Solo mostramos días clave para no ensuciar
                if (['Day 15', 'Day 30', 'Day 45', 'Day 60'].includes(val)) return val;
                return '';
              }}
            />
            
            <YAxis 
              stroke="#555" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              orientation="right"
              dx={10}
              tickFormatter={(value) => `$${value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value}`}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#00ff88"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorBalance)"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Etiqueta Initial Balance */}
        <div className="absolute bottom-6 left-6 text-[10px] text-neon font-bold uppercase tracking-wider hidden sm:block">
          Initial: $150
        </div>
      </div>

      {/* ── FOOTER STATS ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/5 bg-[#080d12]">
        <div className="p-5 border-b sm:border-b-0 sm:border-r border-white/5">
          <p className="text-[#8b9bb4] text-[10px] uppercase tracking-widest font-bold mb-1">Total Trades</p>
          <p className="text-white font-bold text-lg">1,240</p>
        </div>
        <div className="p-5 border-b sm:border-b-0 sm:border-r border-white/5">
          <p className="text-[#8b9bb4] text-[10px] uppercase tracking-widest font-bold mb-1">Avg. Holding Time</p>
          <p className="text-white font-bold text-lg">3.5 Hours</p>
        </div>
        <div className="p-5 border-r border-white/5">
          <p className="text-[#8b9bb4] text-[10px] uppercase tracking-widest font-bold mb-1">Profit Factor</p>
          <p className="text-white font-bold text-lg">2.4x</p>
        </div>
        <div className="p-5">
          <p className="text-[#8b9bb4] text-[10px] uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" /> Retail Benchmark
          </p>
          <p className="text-white/60 font-bold text-lg">+$214 Avg</p>
        </div>
      </div>

    </div>
  );
}