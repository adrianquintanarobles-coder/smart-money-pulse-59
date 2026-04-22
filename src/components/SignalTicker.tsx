import { useMemo } from "react";
import { TrendingUp, Users } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// 1. Generamos los datos simulados
// Crea una curva exponencial desde ~150€ hasta ~12,000€ - 15,000€
const generateData = () => {
  let balance = 150; 
  const data = [];
  const timepoints = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8", "Sem 9", "Sem 10", "Sem 11", "Sem 12"];

  for (let i = 0; i < timepoints.length; i++) {
    // Crecimiento exponencial con un poco de "ruido" para simular trading real
    const factor = 1.40 + (Math.random() * 0.15 - 0.05); 
    balance = i === 0 ? 150 : balance * factor;
    
    // Forzamos el tramo final para que acabe entre 10k y 15k
    if (i === timepoints.length - 1) {
      balance = 13500 + (Math.random() * 2000 - 1000);
    }

    data.push({
      time: timepoints[i],
      balance: Math.round(balance),
    });
  }
  return data;
};

// 2. Tooltip personalizado para mantener la estética Neon
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 border border-neon/30 p-3 rounded-lg shadow-[0_0_15px_rgba(0,255,136,0.15)] backdrop-blur-md">
        <p className="text-muted-foreground text-xs font-display mb-1">{label}</p>
        <p className="text-neon font-bold text-lg font-display">
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
    <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden shadow-lg">
      {/* Cabecera del Gráfico */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-gradient-to-r from-neon/5 to-electric/5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-neon" />
            <span className="font-semibold text-sm text-neon tracking-wide">
              PROYECCIÓN DE BENEFICIOS VIP
            </span>
          </div>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" /> Media basada en 100 carteras reales
          </p>
        </div>
        <div className="hidden sm:block text-right">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Crecimiento Promedio</p>
          <p className="text-sm font-bold text-gradient-cta">+8,400%</p>
        </div>
      </div>

      {/* Contenedor del Gráfico */}
      <div className="p-4 sm:p-6 h-[300px] sm:h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              {/* Degradado Neon bajo la línea */}
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ff88" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00ff88" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} opacity={0.4} />
            
            <XAxis 
              dataKey="time" 
              stroke="#666" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            
            <YAxis 
              stroke="#666" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value >= 1000 ? (value / 1000).toFixed(1) + 'k' : value}`}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#00ff88"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorBalance)"
              activeDot={{ r: 6, fill: "#00ff88", stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}