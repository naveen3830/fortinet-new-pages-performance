
import React, { useState, useMemo } from 'react';
import { PagePerformance } from '../types';
import { ChevronsUpDown, ArrowUp, ArrowDown, CheckCircle, XCircle, Signal } from './lucide-react';
import { theme, fortinetColors } from './fortinetTheme';

interface TableProps {
  data: PagePerformance[];
}

type SortKey = keyof PagePerformance | 'latestRank' | 'latestTraffic';
type SortDirection = 'asc' | 'desc';

const getLatestValue = (values: (number | null)[], defaultValue: number) => {
    for (let i = values.length - 1; i >= 0; i--) {
        const value = values[i];
        if (value !== null) return value;
    }
    return defaultValue;
};

const getTrend = (values: (number | null)[]) => {
    let last: number | null = null;
    let prev: number | null = null;

    for (let i = values.length - 1; i >= 0; i--) {
        const current = values[i];
        if (current !== null) {
            if (last === null) {
                last = current;
            } else {
                prev = current;
                break;
            }
        }
    }
    
    if (last === null || prev === null) return 0;
    // Special case for rank: 101 is "not ranking", so any rank is an improvement.
    // However, this component is generic for trend now.
    if (last < prev) return 1; // Improved
    if (last > prev) return -1; // Declined
    return 0; // No change
};


const PerformanceTable: React.FC<TableProps> = ({ data }) => {
  const [sortKey, setSortKey] = useState<SortKey>('latestTraffic');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      let valA, valB;

      if (sortKey === 'latestRank') {
        valA = getLatestValue(a.ranks, 101);
        valB = getLatestValue(b.ranks, 101);
      } else if (sortKey === 'latestTraffic') {
        valA = getLatestValue(a.traffic, 0);
        valB = getLatestValue(b.traffic, 0);
      } else {
        valA = a[sortKey as keyof PagePerformance];
        valB = b[sortKey as keyof PagePerformance];
      }

      if (valA === null || valA === undefined) return 1;
      if (valB === null || valB === undefined) return -1;

      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortDirection]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDirection(key === 'latestTraffic' ? 'desc' : 'asc');
    }
  };

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) return <ChevronsUpDown className="w-4 h-4 ml-2" style={{ color: '#989898' }} />;
    return sortDirection === 'asc' ? <ArrowUp className="w-4 h-4 ml-2" style={{ color: theme.heading }} /> : <ArrowDown className="w-4 h-4 ml-2" style={{ color: theme.heading }} />;
  };
  
  const TrendIndicator: React.FC<{trend: number, invertColor?: boolean}> = ({trend, invertColor}) => {
      if (trend === 0) return <span style={{ color: '#989898' }} title="No change">-</span>;
      const isImprovement = invertColor ? trend === -1 : trend === 1;
      if (isImprovement) return <span title="Improved"><ArrowUp className="w-5 h-5" style={{ color: fortinetColors.tintsAndShades.green.shade40 }} /></span>
      return <span title="Declined"><ArrowDown className="w-5 h-5" style={{ color: fortinetColors.primary.red }} /></span>
  }

  return (
     <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md" style={{ border: `1px solid ${theme.border}` }}>
        <h3 className="text-lg font-semibold mb-4" style={{ color: theme.heading }}>Detailed Page Performance ({data.length} items)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left" style={{ color: theme.text }}>
            <thead className="text-xs uppercase" style={{ color: '#646464', backgroundColor: '#FFFBE5' }}>
              <tr>
                <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('keyword')}>
                  <div className="flex items-center">Keyword <SortIcon columnKey="keyword" /></div>
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('latestTraffic')}>
                   <div className="flex items-center">Traffic <SortIcon columnKey="latestTraffic" /></div>
                </th>
                <th scope="col" className="px-6 py-3 text-center">Traffic Trend</th>
                <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('latestRank')}>
                   <div className="flex items-center">Rank <SortIcon columnKey="latestRank" /></div>
                </th>
                <th scope="col" className="px-6 py-3 text-center">Rank Trend</th>
                <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('category')}>
                   <div className="flex items-center">Category <SortIcon columnKey="category" /></div>
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer text-center" onClick={() => handleSort('aiOverview')}>
                   <div className="flex items-center justify-center">AI Overview <SortIcon columnKey="aiOverview" /></div>
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer text-center" onClick={() => handleSort('indexingStatus')}>
                   <div className="flex items-center justify-center">Indexed <SortIcon columnKey="indexingStatus" /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map(item => {
                const latestRank = getLatestValue(item.ranks, 101);
                const rankTrend = getTrend(item.ranks);
                const latestTraffic = getLatestValue(item.traffic, 0);
                const trafficTrend = getTrend(item.traffic);

                return (
                  <tr key={item.id} className="bg-white border-b hover:bg-gray-50" style={{ borderColor: '#E0E0E0' }}>
                    <td className="px-6 py-4 font-medium" style={{ color: theme.heading }}>{item.keyword}</td>
                    <td className="px-6 py-4 font-bold" style={{ color: theme.heading }}>{latestTraffic.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center"><TrendIndicator trend={trafficTrend} /></td>
                    <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${latestRank <= 10 ? '' : latestRank <= 20 ? '' : latestRank <= 100 ? '' : ''}`} style={{
                            backgroundColor: latestRank <= 10 ? '#E7F7F2' : latestRank <= 20 ? '#FFFBE5' : latestRank <= 100 ? '#E1F0FA' : '#F1F7F9',
                            color: latestRank <= 10 ? theme.tintsAndShades.green.shade40 : latestRank <= 20 ? theme.primary.yellow : latestRank <= 100 ? theme.primary.blue : '#989898'
                        }}>
                            {latestRank > 100 ? 'N/A' : latestRank}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-center"><TrendIndicator trend={rankTrend} invertColor={true} /></td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4 text-center">
                        {item.aiOverview ? <CheckCircle className="w-5 h-5 inline-block" style={{ color: theme.chart.series4 }} /> : <XCircle className="w-5 h-5 inline-block" style={{ color: '#B6B6B6' }} />}
                    </td>
                    <td className="px-6 py-4 text-center">
                        {item.indexingStatus ? <Signal className="w-5 h-5 inline-block" style={{ color: theme.tintsAndShades.green.shade40 }} /> : <XCircle className="w-5 h-5 inline-block" style={{ color: theme.primary.red }} />}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
     </div>
  );
};

export default PerformanceTable;