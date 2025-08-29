
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { CategoryDistribution } from '../types';
import { theme } from './fortinetTheme';

interface ChartProps {
  data: CategoryDistribution[];
}

const CategoryDistributionChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full" style={{ border: `1px solid ${theme.border}` }}>
      <h3 className="text-lg font-semibold mb-4" style={{ color: theme.heading }}>Pages by Category</h3>
      <div className="w-full h-96">
        <ResponsiveContainer>
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 100, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} />
            <XAxis type="number" stroke="#6b7280" />
            <YAxis 
              type="category" 
              dataKey="name" 
              stroke="#6b7280" 
              width={100}
              tick={{ fontSize: 12 }}
              interval={0}
            />
            <Tooltip
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              contentStyle={{
                backgroundColor: '#ffffff',
                borderColor: theme.border,
                borderRadius: '0.5rem',
              }}
            />
            <Bar dataKey="count" fill={theme.chart.series4} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CategoryDistributionChart;