
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { PagePerformance } from '../types';

interface ChartProps {
  data: PagePerformance[];
}

const getLatestRank = (ranks: (number | null)[]) => {
    for (let i = ranks.length - 1; i >= 0; i--) {
        if (ranks[i] !== null) return ranks[i] as number;
    }
    return 101;
};

const getRankBucket = (rank: number) => {
    if (rank <= 10) return 'Page 1';
    if (rank <= 20) return 'Page 2';
    if (rank <= 100) return 'Page 3+';
    return 'Not Ranking';
};

const CohortPerformanceChart: React.FC<ChartProps> = ({ data }) => {
    const cohortData = data.reduce((acc, page) => {
        const month = page.liveDate.split('-')[1];
        if (!month) return acc;

        if (!acc[month]) {
            acc[month] = { name: month, 'Page 1': 0, 'Page 2': 0, 'Page 3+': 0, 'Not Ranking': 0 };
        }
        
        const latestRank = getLatestRank(page.ranks);
        const bucket = getRankBucket(latestRank);
        acc[month][bucket]++;
        
        return acc;
    }, {} as Record<string, any>);

    const chartData = Object.values(cohortData);
    const monthOrder = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"];
    chartData.sort((a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Ranking by Publish Month</h3>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              contentStyle={{
                backgroundColor: '#ffffff',
                borderColor: '#e5e7eb',
                borderRadius: '0.5rem',
              }}
            />
            <Legend wrapperStyle={{ color: '#374151' }} />
            <Bar dataKey="Page 1" stackId="a" fill="#3cb17e" />
            <Bar dataKey="Page 2" stackId="a" fill="#ffb900" />
            <Bar dataKey="Page 3+" stackId="a" fill="#307fe2" />
            <Bar dataKey="Not Ranking" stackId="a" fill="#a2b2c8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CohortPerformanceChart;