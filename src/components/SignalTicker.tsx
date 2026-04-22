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

// Generamos 90 días de datos con caída en medio y pico al final
const generateData = () => {
  const data = [];
  const days = 90;
  
  for (let i = 1; i <= days; i++) {
    // 1. Base matemática exponencial pura (de 150 a 14575)
    let val = 150 * Math.pow(14575 / 150, i / days);

    // 2. Simulamos una caída fuerte en el medio (Market Correction)
    if (i > 35 && i < 60) {
      const dipCenter = 48; 
      const distance = Math.abs(i - dipCenter);
      if (distance < 15) {
        const dipFactor = 1 - (0.3 * (1 - distance / 15));
        val *= dipFactor;
      }
    }

    // 3. Ruido diario (volatilidad ±3%)
    const noise = 1 + (Math.random() * 0.06 - 0.03);
    val *= noise;

    // 4. FORZAMOS EL FINAL: En el punto más alto
    if (i === days) val = 14575; 
    if (i === days - 1) val = 13900 + (Math.random() * 150); 

    data.push({
      day: `Day ${i}`,
      balance: Math.max(150, Math.round(val)),
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
          <Activity className="h-3 w-3" /> Cumulative Performance
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
    <div className="rounded-3xl border border-white/10 bg-card/40 backdrop-blur-md overflow-hidden transition-all hover:border-neon/30 shadow-2xl">
      
      {/* Upper Panel */}
      <div className="flex flex-col md:flex-row md:items-start justify-between px-6 sm:px-8 py-6 sm:py-8 gap-6 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            <span className="font-display text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
              Certified Backtest · 90 Days
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-electric text-gradient-cta">Compound</span> Strategy
          </h2>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-3">
            <Users className="h-4 w-4 text-electric/80" /> Average performance of 100 Whale VIP accounts
          </p>
          
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg text-xs font-display text-muted-foreground">
              <Target className="h-3.5 w-3.5 text-amber-score" /> Win Rate: <span className="text-white font-bold">84.2%</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg text-xs font-display text-muted-foreground">
              <Activity className="h-3.5 w-3.5 text-electric" /> Max Drawdown: <span className="text-white font-bold">-4.1%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end w-full md:w-auto">
          <div className="bg-[#0a0a0a]/60 border border-white/10 rounded-2xl p-4 w-full md:w-auto md:text-right shadow-inner backdrop-blur-sm">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1 flex justify-start md:justify-end items-center gap-1.5">
              Final Capital <ArrowUpRight className="h-3 w-3 text-neon" />
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

      {/* Graph Area */}
      <div className="px-0 pb-2 h-[350px] md:h-[400px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="neonGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ff88" stopOpacity={0.6} />
                <stop offset="50%" stopColor="#00ff88" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#00ff88" stopOpacity={0} />
              </linearGradient>
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
              tickFormatter={(val, i) => (i === 0 || i % 15 !== 0) ? '' : val} 
              fontFamily="var(--font-display)"
            />
            
            <YAxis hide={true} domain={['dataMin - 50', 'dataMax + 500']} />
            
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ stroke: 'rgba(0, 255, 136, 0.5)', strokeWidth: 2, strokeDasharray: '4 4' }} 
            />

            <ReferenceLine 
              y={150} 
              stroke="rgba(255,255,255,0.2)" 
              strokeDasharray="3 3" 
              label={{ 
                value: 'INITIAL CAPITAL: $150', 
                position: 'insideTopLeft', 
                fill: 'rgba(255,255,255,0.4)', 
                fontSize: 10, 
                dy: -10,
                dx: 20
              }} 
            />
            
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#00ff88"
              strokeWidth={3}
              fill="url(#neonGradient)"
              filter="url(#glow)"
              animationDuration={3000}
              animationBegin={200}
              activeDot={{ r: 7, fill: "#0a0a0a", stroke: "#00ff88", strokeWidth: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Labels */}
      <div className="bg-black/20 border-t border-white/5 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
           <div className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_5px_#00ff88]" /> Compound Interest
        </span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
           <div className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_5px_#00e5ff]" /> Risk Management
        </span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
           <div className="h-1.5 w-1.5 rounded-full bg-amber-score shadow-[0_0_5px_#ffab00]" /> Automatic Copying
        </span>
      </div>
    </div>
  );
}