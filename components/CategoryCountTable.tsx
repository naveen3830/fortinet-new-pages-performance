
import React from 'react';
import { CategoryDistribution } from '../types';
import { theme } from './fortinetTheme';

interface TableProps {
  data: CategoryDistribution[];
}

const CategoryCountTable: React.FC<TableProps> = ({ data }) => {
  const sortedData = [...data].sort((a, b) => b.count - a.count);
  const totalPages = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full" style={{ border: `1px solid ${theme.border}` }}>
      <h3 className="text-lg font-semibold mb-4" style={{ color: theme.heading }}>Pages by Category</h3>
      <div className="overflow-y-auto h-72 pr-2">
        <table className="w-full text-sm text-left" style={{ color: theme.text }}>
          <thead className="text-xs uppercase sticky top-0" style={{ color: '#646464', backgroundColor: '#FFFBE5' }}>
            <tr>
              <th scope="col" className="px-4 py-2">Category</th>
              <th scope="col" className="px-4 py-2 text-right">Pages</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: '#E0E0E0' }}>
            {sortedData.map(({ name, count }) => (
              <tr key={name}>
                <td className="px-4 py-2 font-medium" style={{ color: theme.heading }}>{name}</td>
                <td className="px-4 py-2 text-right font-bold" style={{ color: theme.heading }}>{count}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="sticky bottom-0" style={{ backgroundColor: '#FFFBE5' }}>
             <tr className="font-bold" style={{ borderTop: '1px solid #B1B3B3' }}>
                <td className="px-4 py-2" style={{ color: theme.heading }}>Total</td>
                <td className="px-4 py-2 text-right" style={{ color: theme.heading }}>{totalPages}</td>
             </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CategoryCountTable;