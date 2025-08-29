
import React from 'react';
import { theme, fortinetColors } from './fortinetTheme';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const MonthlyPagesChart: React.FC = () => {
    const chartData = [
        { name: 'Mar', count: 0 },
        { name: 'Apr', count: 7 },
        { name: 'May', count: 12 },
        { name: 'Jun', count: 18 },
        { name: 'Jul', count: 13 },
        { name: 'Aug', count: 5 },
    ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full" style={{ border: `1px solid ${theme.border}` }}>
      <h3 className="text-lg font-semibold mb-4" style={{ color: theme.heading }}>New Pages Published per Month</h3>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" allowDecimals={false} />
            <Tooltip
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              contentStyle={{
                backgroundColor: '#ffffff',
                borderColor: theme.border,
                borderRadius: '0.5rem',
              }}
            />
            <Legend wrapperStyle={{ color: '#374151' }} />
            <Bar dataKey="count" name="New Pages" fill={fortinetColors.primary.blue} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyPagesChart;