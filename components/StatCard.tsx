
import React from 'react';
import { theme, fortinetColors } from './fortinetTheme';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change }) => {
  const isPositive = change !== undefined && change > 0;
  const isNegative = change !== undefined && change < 0;
  
  return (
    <div className="p-6 rounded-xl shadow-md flex items-center space-x-4 transition-transform transform hover:scale-105 bg-white" style={{ border: `1px solid ${theme.border}` }}>
      <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFBE5' }}>
        {icon}
      </div>
      <div>
        <p className="text-sm" style={{ color: '#646464' }}>{title}</p>
        <div className="flex items-baseline space-x-2">
            <p className="text-2xl font-bold" style={{ color: theme.heading }}>{value}</p>
            {change !== undefined && change !== 0 && (
                <span className="text-sm font-semibold flex items-center" style={{ color: isPositive ? fortinetColors.tintsAndShades.green.shade40 : fortinetColors.primary.red }}>
                    {isPositive ? '▲' : '▼'} {Math.abs(change)}
                </span>
            )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
