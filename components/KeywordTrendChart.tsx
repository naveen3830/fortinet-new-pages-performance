
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { WeeklySummary } from '../types';
import { theme, fortinetColors } from './fortinetTheme';

interface ChartProps {
  data: WeeklySummary[];
}

const KeywordTrendChart: React.FC<ChartProps> = ({ data }) => {
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
    <div className="bg-white p-6 rounded-xl shadow-md h-full" style={{ border: `1px solid ${theme.border}` }}>
      <h3 className="text-lg font-semibold mb-4" style={{ color: theme.heading }}>Weekly Keyword Ranking Trends</h3>
      <div className="w-full h-96">
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} />
            <XAxis dataKey="week" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: '#374151' }} />
            <Area type="monotone" dataKey="page1" stackId="1" stroke={fortinetColors.tintsAndShades.green.shade40} fill={fortinetColors.tintsAndShades.green.tint20} fillOpacity={0.9} name="Page 1" />
            <Area type="monotone" dataKey="page2" stackId="1" stroke={fortinetColors.primary.yellow} fill={fortinetColors.tintsAndShades.yellow.tint20} fillOpacity={0.9} name="Page 2" />
            <Area type="monotone" dataKey="page3" stackId="1" stroke={fortinetColors.primary.blue} fill={fortinetColors.tintsAndShades.blue.tint20} fillOpacity={0.9} name="Page 3" />
            <Area type="monotone" dataKey="page_gt_3" stackId="1" stroke="#989898" fill="#F1F7F9" fillOpacity={0.9} name="> Page 3" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KeywordTrendChart;