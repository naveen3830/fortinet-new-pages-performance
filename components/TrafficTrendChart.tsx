
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { WeeklySummary } from '../types';
import { theme, fortinetColors } from './fortinetTheme';

interface ChartProps {
  data: WeeklySummary[];
}

const TrafficTrendChart: React.FC<ChartProps> = ({ data }) => {
    const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const entry = data.find(d => d.week === label);
      return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xl text-sm">
          <p className="font-bold text-gray-900">{`${label} (${entry?.dateRange})`}</p>
          {payload.map((p: any, index: number) => (
            <p key={index} style={{ color: p.color }}>{`${p.name}: ${p.value.toLocaleString()}`}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md" style={{ border: `1px solid ${theme.border}` }}>
      <h3 className="text-lg font-semibold mb-4" style={{ color: theme.heading }}>Total Traffic Trend</h3>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
             <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} />
            <XAxis dataKey="week" stroke="#6b7280" />
            <YAxis stroke="#6b7280" tickFormatter={(value) => new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(value as number)} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: '#374151' }} />
            <defs>
              <linearGradient id="trafficColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={fortinetColors.tintsAndShades.red.tint60} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={fortinetColors.tintsAndShades.red.tint60} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="totalTraffic" name="Total Weekly Traffic" stroke={fortinetColors.primary.red} strokeWidth={3} fillOpacity={1} fill="url(#trafficColor)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficTrendChart;