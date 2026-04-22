import { useMemo } from "react";
import { TrendingUp, Users, ArrowUpRight } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Generador de datos exponenciales (150€ -> ~14,500€)
const generateData = () => {
  let balance = 150; 
  const data = [];
  const timepoints = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8", "Sem 9", "Sem 10", "Sem 11", "Sem 12"];

  for (let i = 0; i < timepoints.length; i++) {
    // Factor de crecimiento exponencial
    const factor = 1.45 + (Math.random() * 0.1); 
    balance = i === 0 ? 150 : balance * factor;
    
    // Ajuste final para que termine en el rango deseado
    if (i === timepoints.length - 1) {
      balance = 14230 + (Math.random() * 800);
    }

    data.push({
      time: timepoints[i],
      balance: Math.round(balance),
    });
  }
  return data;
};

// Tooltip con diseño "Glassmorphism"
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0a0a0a]/90 border border-neon/40 p-4 rounded-xl shadow-[0_0_20px_rgba(0,255,136,0.2)] backdrop-blur-md">
        <p className="text-muted-foreground text-[10px] uppercase tracking-widest mb-1 font-display">{label}</p>
        <p className="text-neon font-bold text-2xl font-display">
          ${payload[0].value.toLocaleString()}
        </p>
        <div className="flex items-center gap-1 text-[10px] text-neon/80 mt-1 uppercase font-semibold">
          <ArrowUpRight className="h-3 w-3" /> Rendimiento VIP
        </div>
      </div>
    );
  }
  return null;
};

export function SignalTicker() {
  const data = useMemo(() => generateData(), []);
  const finalBalance = data[data.length - 1].balance;

  return (
    <div className="rounded-3xl border border-white/10 bg-card/30 backdrop-blur-sm overflow-hidden transition-all hover:border-neon/20 shadow-2xl">
      
      {/* Panel Superior: Información y Cifra Principal */}
      <div className="flex flex-col md:flex-row md:items-end justify-between px-8 py-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
            </span>
            <span className="font-display text-[11px] font-bold text-neon uppercase tracking-[0.3em]">
              Resultados en Tiempo Real
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
            Estrategia <span className="text-gradient-cta">Compound Whales</span>
          </h2>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
            <Users className="h-4 w-4 text-neon/60" /> Media basada en 100 carteras siguiendo señales VIP
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:text-right min-w-[200px]">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Balance Final Promedio</p>
          <div className="text-4xl font-black text-white font-display tracking-tighter">
            ${finalBalance.toLocaleString()}
            <span className="text-neon text-base ml-2 inline-block">▲</span>
          </div>
        </div>
      </div>

      {/* Área del Gráfico: Ocupa gran parte del componente */}
      <div className="px-2 pb-6 h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="neonGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ff88" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#00ff88" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            {/* Cuadrícula muy sutil */}
            <CartesianGrid strokeDasharray="5 5" stroke="#ffffff" opacity={0.03} vertical={false} />
            
            <XAxis 
              dataKey="time" 
              stroke="#444" 
              fontSize={11} 
              tickLine={false} 
              axisLine={false} 
              dy={15}
              fontFamily="var(--font-display)"
            />
            
            {/* El eje Y se oculta para un diseño más limpio (estilo TradingView) */}
            <YAxis hide={true} domain={['dataMin - 1000', 'dataMax + 1000']} />
            
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ stroke: '#00ff88', strokeWidth: 1, strokeDasharray: '5 5' }} 
            />
            
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#00ff88"
              strokeWidth={4}
              fill="url(#neonGradient)"
              // Animación de entrada
              animationDuration={2500}
              animationBegin={500}
              // Punto activo (el que brilla al pasar el ratón)
              activeDot={{ r: 8, fill: "#00ff88", stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Pie del componente */}
      <div className="bg-white/[0.03] px-8 py-4 flex items-center justify-center gap-6">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
           <div className="h-1 w-1 rounded-full bg-neon" /> Interés Compuesto
        </span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
           <div className="h-1 w-1 rounded-full bg-neon" /> Low Drawdown
        </span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
           <div className="h-1 w-1 rounded-full bg-neon" /> Whale Tracking
        </span>
      </div>
    </div>
  );
}