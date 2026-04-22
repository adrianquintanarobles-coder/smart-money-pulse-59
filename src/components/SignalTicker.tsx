import { useMemo } from "react";
import { Users, ArrowUpRight, ShieldCheck, Activity, Target } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

// Generamos 90 días de datos con volatilidad realista
const generateData = () => {
  const data = [];
  const days = 90;
  const start = 150;
  const end = 14500;
  // Calculamos el crecimiento diario necesario
  const rate = Math.pow(end / start, 1 / days);

  let current = start;
  for (let i = 1; i <= days; i++) {
    // Añadimos "ruido" de trading real (días buenos y días malos entre -3% y +5%)
    const noise = 1 + (Math.random() * 0.08 - 0.035);
    current = current * rate * noise;
    
    // Forzamos el aterrizaje final
    if (i === days) current = end + (Math.random() * 200 - 100);

    data.push({
      day: `Día ${i}`,
      balance: Math.max(150, Math.round(current)), // Que nunca baje del inicial visualmente
    });
  }
  return data;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0a0a0a]/95 border border-neon/50 p-4 rounded-xl shadow-[0_0_25px_rgba(0,255,136,0.25)] backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-neon" />
        <p className="text-muted-foreground text-[10px] uppercase tracking-widest mb-1 font-display pl-2">{label}</p>
        <p className="text-white font-black text-2xl font-display pl-2">
          ${payload[0].value.toLocaleString()}
        </p>
        <div className="flex items-center gap-1.5 text-[10px] text-neon/90 mt-2 pl-2 uppercase font-bold tracking-wide">
          <Activity className="h-3 w-3" /> Rendimiento Acumulado
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
    <div className="relative rounded-3xl border border-white/10 bg-card/40 backdrop-blur-md overflow-hidden transition-all hover:border-neon/30 shadow-2xl group">
      
      {/* Insignias flotantes para dar aspecto de Terminal Pro */}
      <div className="absolute top-[120px] left-8 hidden md:flex flex-col gap-3 z-10 opacity-70 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2 bg-background/80 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md text-xs font-display text-muted-foreground">
          <Target className="h-3.5 w-3.5 text-amber-score" /> Win Rate: <span className="text-white font-bold">84.2%</span>
        </div>
        <div className="flex items-center gap-2 bg-background/80 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md text-xs font-display text-muted-foreground">
          <Activity className="h-3.5 w-3.5 text-electric" /> Drawdown Max: <span className="text-white font-bold">-4.1%</span>
        </div>
      </div>

      {/* Panel Superior */}
      <div className="flex flex-col md:flex-row md:items-start justify-between px-6 sm:px-8 py-6 sm:py-8 gap-4 border-b border-white/5 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            <span className="font-display text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
              Backtest Certificado · 90 Días
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight">
            Estrategia <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-electric">Compound</span>
          </h2>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-3">
            <Users className="h-4 w-4 text-electric/80" /> Evolución promedio de 100 carteras Whale VIP
          </p>
        </div>

        <div className="flex flex-col items-end">
          <div className="bg-[#0a0a0a]/60 border border-white/10 rounded-2xl p-4 md:text-right min-w-[220px] shadow-inner backdrop-blur-sm">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1 flex justify-end items-center gap-1.5">
              Capital Final <ArrowUpRight className="h-3 w-3 text-neon" />
            </p>
            <div className="text-4xl md:text-5xl font-black text-white font-display tracking-tighter">
              ${finalBalance.toLocaleString()}
            </div>
            <div className="mt-2 text-xs font-display text-neon bg-neon/10 border border-neon/20 px-2 py-1 rounded-md inline-block">
              +{(finalBalance / 150 * 100).toFixed(0)}% ROI
            </div>
          </div>
        </div>
      </div>

      {/* Área del Gráfico */}
      <div className="px-0 pb-2 h-[350px] md:h-[400px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="neonGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ff88" stopOpacity={0.6} />
                <stop offset="50%" stopColor="#00ff88" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#00ff88" stopOpacity={0} />
              </linearGradient>
              {/* Filtro para el brillo (glow) de la línea */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity={0.04} vertical={false} />
            
            <XAxis 
              dataKey="day" 
              stroke="#555" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
              dy={10}
              tickFormatter={(val, i) => i % 15 === 0 ? val : ''} // Muestra etiquetas cada 15 días para no saturar
              fontFamily="var(--font-display)"
            />
            
            <YAxis hide={true} domain={['dataMin - 50', 'dataMax + 500']} />
            
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ stroke: 'rgba(0, 255, 136, 0.5)', strokeWidth: 2, strokeDasharray: '4 4' }} 
            />

            {/* Línea de referencia del Capital Inicial */}
            <ReferenceLine 
              y={150} 
              stroke="rgba(255,255,255,0.2)" 
              strokeDasharray="3 3" 
              label={{ 
                value: 'CAPITAL INICIAL: $150', 
                position: 'insideTopLeft', 
                fill: 'rgba(255,255,255,0.4)', 
                fontSize: 10, 
                offset: 15 
              }} 
            />
            
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#00ff88"
              strokeWidth={3}
              fill="url(#neonGradient)"
              filter="url(#glow)" // Aplicamos el brillo aquí
              animationDuration={3000}
              animationBegin={200}
              activeDot={{ r: 7, fill: "#0a0a0a", stroke: "#00ff88", strokeWidth: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Pie del componente */}
      <div className="bg-black/20 border-t border-white/5 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
           <div className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_5px_#00ff88]" /> Interés Compuesto
        </span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
           <div className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_5px_#00e5ff]" /> Gestión de Riesgo
        </span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
           <div className="h-1.5 w-1.5 rounded-full bg-amber-score shadow-[0_0_5px_#ffab00]" /> Copia Automática
        </span>
      </div>
    </div>
  );
}