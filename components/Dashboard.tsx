
import React, { useMemo } from 'react';
import { pagePerformanceData, weeklySummaryData } from '../data/mockData';
import KeywordTrendChart from './KeywordTrendChart';
import MonthlyPagesChart from './MonthlyPagesChart';
import TrafficTrendChart from './TrafficTrendChart';
import CategoryDistributionChart from './CategoryDistributionChart';
import CategoryCountTable from './CategoryCountTable';

const getLatestRank = (ranks: (number | null)[]) => {
    for (let i = ranks.length - 1; i >= 0; i--) {
        const rank = ranks[i];
        if (rank !== null) return rank;
    }
    return 101;
};

const getRankBucket = (rank: number) => {
    if (rank <= 10) return 'p1';
    if (rank <= 20) return 'p2';
    if (rank <= 100) return 'p3+';
    return 'none';
};

const AnalysisCard: React.FC<{title: string, icon: React.ReactNode, children: React.ReactNode}> = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div className="flex items-center text-lg font-semibold text-gray-900 mb-4">
            {icon}
            <h3 className="ml-3">{title}</h3>
        </div>
        {children}
    </div>
);

const Dashboard: React.FC = () => {
    const analytics = useMemo(() => {
        const rankCounts = { p1: 0, p2: 0, 'p3+': 0, none: 0 };
        const aiCounts = { yes: 0, no: 0 };
        
        pagePerformanceData.forEach(p => {
            const rank = getLatestRank(p.ranks);
            const bucket = getRankBucket(rank);
            rankCounts[bucket]++;
            p.aiOverview ? aiCounts.yes++ : aiCounts.no++;
        });
        
        const latestSummary = weeklySummaryData[weeklySummaryData.length - 1];
        const previousSummary = weeklySummaryData[weeklySummaryData.length - 2];

        const latestTraffic = latestSummary?.totalTraffic ?? 0;
        const previousTraffic = previousSummary?.totalTraffic ?? 0;

        const trafficChange = previousTraffic > 0
            ? ((latestTraffic - previousTraffic) / previousTraffic) * 100
            : 0;

        return { rankCounts, aiCounts, latestTraffic, trafficChange };
    }, []);

    const categoryDistributionData = [
      { name: 'Network Security', count: 7 },
      { name: 'Security Operations', count: 12 },
      { name: 'General Cybersecurity', count: 11 },
      { name: 'Application Security', count: 8 },
      { name: 'Enterprise Networking', count: 4 },
      { name: 'Operational Technology', count: 4 },
      { name: 'Secure Access Service Edge', count: 9 },
    ];
    
    return (
        <div className="space-y-6">
            {/* Analysis Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnalysisCard title="Keyword Ranking Breakdown" icon={<div className="w-1 h-4 bg-[#2cccd3] rounded-full" />}>
                   <ul className="space-y-2 text-gray-700">
                       <li className="flex justify-between"><span>Page 1 (1-10)</span><span className="font-bold text-[#3cb17e]">{analytics.rankCounts.p1}</span></li>
                       <li className="flex justify-between"><span>Page 2 (11-20)</span><span className="font-bold text-[#ffb900]">{analytics.rankCounts.p2}</span></li>
                       <li className="flex justify-between"><span>Page 3+ (21-100)</span><span className="font-bold text-[#307fe2]">{analytics.rankCounts['p3+']}</span></li>
                       <li className="flex justify-between border-t border-gray-200 mt-2 pt-2 font-semibold"><span>Total Pages</span><span className="text-gray-900">{pagePerformanceData.length}</span></li>
                   </ul>
                </AnalysisCard>
                <AnalysisCard title="AI Overview Visibility" icon={<div className="w-1 h-4 bg-[#2cccd3] rounded-full" />}>
                    <ul className="space-y-2 text-gray-700">
                       <li className="flex justify-between"><span>Visible in AI Overview</span><span className="font-bold text-[#2cccd3]">{analytics.aiCounts.yes}</span></li>
                       <li className="flex justify-between"><span>Not Visible</span><span className="font-bold text-gray-500">{analytics.aiCounts.no}</span></li>
                       <li className="flex justify-between border-t border-gray-200 mt-2 pt-2 font-semibold"><span>Total Pages</span><span className="text-gray-900">{pagePerformanceData.length}</span></li>
                    </ul>
                </AnalysisCard>
                <AnalysisCard title="Traffic Summary" icon={<div className="w-1 h-4 bg-[#2cccd3] rounded-full" />}>
                     <div className="text-gray-700">
                        <p className="text-sm">Latest Weekly Traffic</p>
                        <p className="text-3xl font-bold text-gray-900 my-2">{analytics.latestTraffic.toLocaleString()}</p>
                        <div className={`flex items-center text-sm ${analytics.trafficChange >= 0 ? 'text-[#3cb17e]' : 'text-[#da291c]'}`}>
                            {analytics.trafficChange >= 0 ? '▲' : '▼'} 
                            <span className="font-semibold ml-1">{Math.abs(analytics.trafficChange).toFixed(2)}%</span>
                            <span className="text-gray-500 ml-1"> from last week</span>
                        </div>
                        <div className="flex items-center text-sm text-[#3cb17e] mt-1">
                            ▲ 
                            <span className="font-semibold ml-1">3150%</span>
                            <span className="text-gray-500 ml-1"> overall growth</span>
                        </div>
                    </div>
                </AnalysisCard>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                <div className="lg:col-span-2"><MonthlyPagesChart /></div>
                <div className="lg:col-span-2"><CategoryDistributionChart data={categoryDistributionData} /></div>
                <div className="lg:col-span-2"><CategoryCountTable data={categoryDistributionData} /></div>
                <div className="lg:col-span-6"><KeywordTrendChart data={weeklySummaryData} /></div>
                <div className="lg:col-span-6"><TrafficTrendChart data={weeklySummaryData} /></div>
            </div>
        </div>
    );
};

export default Dashboard;