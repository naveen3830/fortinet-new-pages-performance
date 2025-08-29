
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { WeeklySummary } from '../types';
import { theme } from './fortinetTheme';

interface ChartProps {
  data: WeeklySummary[];
}

const AiOverviewChart: React.FC<ChartProps> = ({ data }) => {
    const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const entry = data.find(d => d.week === label);
      return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xl text-sm">
          <p className="font-bold text-gray-900">{`${label} (${entry?.dateRange})`}</p>
          {payload.map((p: any, index: number) => (
            <p key={index} style={{ color: p.color }}>{`${p.name}: ${p.value}`}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md" style={{ border: `1px solid ${theme.border}` }}>
      <h3 className="text-lg font-semibold mb-4" style={{ color: theme.heading }}>AI Overview Visibility Trend</h3>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
             <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} />
            <XAxis dataKey="week" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: '#374151' }} />
            <Line type="monotone" dataKey="aiOverviewCount" name="AI Overview Count" stroke={theme.chart.series4} strokeWidth={3} dot={{ r: 5, fill: theme.chart.series4 }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AiOverviewChart;