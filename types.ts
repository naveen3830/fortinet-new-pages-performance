
export interface PagePerformance {
  id: number;
  keyword: string;
  category: string;
  liveDate: string;
  indexingStatus: boolean;
  ranks: (number | null)[];
  traffic: (number | null)[];
  aiOverview: boolean;
}

export interface WeeklySummary {
  week: string;
  dateRange: string;
  page1: number;
  page2: number;
  page3: number;
  page_gt_3: number;
  pos1: number;
  aiOverviewCount: number;
  totalTraffic: number;
}

export interface CategoryDistribution {
    name: string;
    count: number;
}