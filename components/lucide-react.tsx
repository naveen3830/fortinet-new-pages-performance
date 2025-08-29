
// This file provides minimal SVG icon components to avoid a full library dependency.
// In a real project, you would `npm install lucide-react`.

import React from 'react';

const createIcon = (svgContent: React.ReactNode) => {
  const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {svgContent}
    </svg>
  );
  Icon.displayName = 'Icon';
  return Icon;
};

export const BarChart = createIcon(<line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" />);
export const Briefcase = createIcon(<rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />);
export const FileText = createIcon(<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" />);
export const Bot = createIcon(<path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />);
export const ChevronsUpDown = createIcon(<path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" />);
export const ArrowUp = createIcon(<path d="m5 12 7-7 7 7" /><path d="M12 19V5" />);
export const ArrowDown = createIcon(<path d="M12 5v14" /><path d="m19 12-7 7-7-7" />);
export const CheckCircle = createIcon(<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />);
export const XCircle = createIcon(<circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" />);
export const List = createIcon(<><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></>);
export const ChevronDown = createIcon(<path d="m6 9 6 6 6-6" />);
export const Signal = createIcon(<><path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 20V4" /></>);
export const TrendingUp = createIcon(<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>);
