
import { PagePerformance, WeeklySummary } from '../types';

const generateTraffic = (ranks: (number|null)[]): (number|null)[] => {
    return ranks.map(rank => {
        if (rank === null) return null;
        if (rank > 100) return Math.floor(Math.random() * 5);
        if (rank > 50) return Math.floor(Math.random() * 20) + 10;
        if (rank > 20) return Math.floor(Math.random() * 100) + 50;
        if (rank > 10) return Math.floor(Math.random() * 250) + 150;
        if (rank > 3) return Math.floor(Math.random() * 800) + 400;
        return Math.floor(Math.random() * 2000) + 1000;
    });
};

// Data transcribed from the user's spreadsheet image.
// Ranks are for the 19 weeks from 'Apr 22' to 'Aug 26'.
export const pagePerformanceData: PagePerformance[] = [
    { id: 1, keyword: "Zero-Trust Architecture", category: "Network Security", liveDate: "11-Mar", indexingStatus: true, ranks: [61, 55, 48, 41, 35, 28, 21, 15, 8, 4, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 2, keyword: "Vulnerability Management", category: "General Cybersecurity", liveDate: "8-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, 5, 9, null, 76, 71, 71, 95, 96], aiOverview: false },
    { id: 3, keyword: "CASB", category: "Application Security", liveDate: "11-Mar", indexingStatus: true, ranks: [98, 90, 82, 74, 66, 58, 50, 42, 34, 26, 18, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 4, keyword: "Types of Malware", category: "General Security", liveDate: "11-Mar", indexingStatus: true, ranks: [5, 4, 4, 3, 3, 2, 2, 1, 1, null, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 5, keyword: "vulnerability disclosure", category: "General Cybersecurity", liveDate: "8-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, 50, 51, 52, 101, 92, 98, 97, 95], aiOverview: false },
    { id: 6, keyword: "OT Security", category: "Operational Technology", liveDate: "18-Mar", indexingStatus: true, ranks: [101, 93, 85, 77, 69, 61, 53, 45, 37, 29, 21, 13, 8, null, null, null, null, null, null], aiOverview: false },
    { id: 7, keyword: "What is SASE?", category: "Network Security", liveDate: "18-Mar", indexingStatus: true, ranks: [101, 94, 87, 80, 73, 66, 59, 52, 45, 38, 31, 24, 17, 9, null, null, null, null, null], aiOverview: false },
    { id: 8, keyword: "SIEM", category: "Security Operations", liveDate: "25-Mar", indexingStatus: true, ranks: [101, 94, 87, 80, 73, 66, 59, 52, 45, 35, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 9, keyword: "What is SOAR", category: "Security Operations", liveDate: "25-Mar", indexingStatus: true, ranks: [33, 29, 25, 21, 17, 13, 9, 5, null, null, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 10, keyword: "Access Control", category: "Network Security", liveDate: "01-Apr", indexingStatus: true, ranks: [98, 89, 80, 71, 62, 53, 44, 35, 26, 17, 8, null, null, null, null, null, null, null, null], aiOverview: true },
    { id: 11, keyword: "What is SD-WAN?", category: "General Technology", liveDate: "01-Apr", indexingStatus: true, ranks: [101, 94, 87, 80, 73, 66, 59, 52, 46, 40, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 12, keyword: "What is ZTNA?", category: "General Technology", liveDate: "08-Apr", indexingStatus: true, ranks: [101, 94, 87, 80, 73, 66, 59, 52, 45, 38, 31, 24, 17, 10, 6, null, null, null, null], aiOverview: true },
    { id: 13, keyword: "Cloud Security Posture Management", category: "Cloud Security", liveDate: "15-Apr", indexingStatus: true, ranks: [101, 92, 83, 74, 65, 56, 47, 38, 29, 22, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 14, keyword: "Cryptography", category: "Advanced Security", liveDate: "15-Apr", indexingStatus: true, ranks: [101, 94, 87, 80, 73, 66, 59, 50, null, null, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 15, keyword: "Ransomware Protection", category: "Security Operations", liveDate: "22-Apr", indexingStatus: true, ranks: [101, 93, 85, 77, 69, 61, 53, 45, 37, 28, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 16, keyword: "DevSecOps", category: "Application Security", liveDate: "22-Apr", indexingStatus: true, ranks: [101, 91, 81, 71, 61, 51, 41, 31, 21, 11, 7, null, null, null, null, null, null, null, null], aiOverview: true },
    { id: 17, keyword: "Firewall as a Service", category: "Network Security", liveDate: "29-Apr", indexingStatus: true, ranks: [101, 91, 81, 71, 61, 51, 41, 31, 21, 11, 6, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 18, keyword: "SOC", category: "Compliance", liveDate: "29-Apr", indexingStatus: true, ranks: [101, 95, 89, 83, 77, 71, 65, 60, null, null, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 19, keyword: "PCI DSS", category: "Compliance", liveDate: "06-May", indexingStatus: true, ranks: [null, 101, 97, 93, 89, 85, 81, 75, null, null, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 20, keyword: "Quantum Cryptography", category: "Advanced Security", liveDate: "06-May", indexingStatus: true, ranks: [null, 101, 92, 83, 74, 65, 56, 47, 40, null, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 21, keyword: "Threat Hunting", category: "Threat Intelligence", liveDate: "13-May", indexingStatus: true, ranks: [null, null, 101, 90, 79, 68, 57, 46, 33, null, null, null, null, null, null, null, null, null, null], aiOverview: true },
    { id: 22, keyword: "Endpoint Detection and Response", category: "Security Operations", liveDate: "13-May", indexingStatus: true, ranks: [null, null, 101, 91, 81, 71, 61, 51, 41, 31, 21, 11, 9, null, null, null, null, null, null], aiOverview: true },
    { id: 23, keyword: "Next Generation Firewall", category: "Network Security", liveDate: "20-May", indexingStatus: true, ranks: [null, null, null, 101, 90, 79, 68, 57, 46, 35, 24, 13, 5, null, null, null, null, null, null], aiOverview: true },
    { id: 24, keyword: "SAST", category: "Application Security", liveDate: "20-May", indexingStatus: true, ranks: [null, null, null, 101, 90, 79, 68, 57, 46, 29, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 25, keyword: "Application Security", category: "Application Security", liveDate: "28-May", indexingStatus: true, ranks: [null, null, null, null, 101, 90, 79, 68, 56, null, null, null, null, null, null, null, null, null], aiOverview: true },
    { id: 26, keyword: "Incident Response", category: "Security Operations", liveDate: "28-May", indexingStatus: true, ranks: [null, null, null, null, 101, 91, 81, 71, 61, 51, 41, 31, 21, 11, 7, null, null, null, null, null], aiOverview: true },
    { id: 27, keyword: "AI in Cybersecurity", category: "Advanced Security", liveDate: "03-Jun", indexingStatus: true, ranks: [null, null, null, null, null, 101, 85, 69, 53, 37, 21, null, null, null, null, null, null, null, null], aiOverview: true },
    { id: 28, keyword: "Homomorphic Encryption", category: "Advanced Security", liveDate: "03-Jun", indexingStatus: true, ranks: [null, null, null, null, null, 101, 95, 89, 80, null, null, null, null, null, null, null, null, null], aiOverview: false },
    { id: 29, keyword: "Intrusion Prevention System", category: "Network Security", liveDate: "10-Jun", indexingStatus: true, ranks: [null, null, null, null, null, null, 101, 87, 73, 59, 45, 31, 17, 13, null, null, null, null, null], aiOverview: false },
    { id: 30, keyword: "Secure Web Gateway", category: "Network Security", liveDate: "10-Jun", indexingStatus: true, ranks: [null, null, null, null, null, null, 101, 89, 77, 65, 53, 41, 29, 24, null, null, null, null, null], aiOverview: false },
    { id: 31, keyword: "Phishing", category: "General Security", liveDate: "17-Jun", indexingStatus: true, ranks: [null, null, null, null, null, null, null, 101, 76, 51, 26, 3, null, null, null, null, null, null, null], aiOverview: true },
    { id: 32, keyword: "Enterprise Networking", category: "Network Security", liveDate: "18-Jun", indexingStatus: true, ranks: [null, null, null, null, null, null, null, 101, 92, 81, 70, 65, 55, 43, 38, null, null, null, null], aiOverview: false },
    { id: 33, keyword: "What is LAN?", category: "General Security", liveDate: "24-Jun", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, 101, 72, 43, 16, null, null, null, null, null, null, null], aiOverview: false },
    { id: 34, keyword: "Cyber resilience", category: "General Security", liveDate: "24-Jun", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, 101, 94, 88, 76, 65, 59, 52, null, null, null, null], aiOverview: false },
    { id: 35, keyword: "Cloud Workload Protection", category: "Cloud Security", liveDate: "01-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, 101, 77, 53, 31, null, null, null, null, null, null], aiOverview: false },
    { id: 36, keyword: "Cloud Native Security", category: "Cloud Security", liveDate: "01-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, 101, 99, 98, 95, 90, 85, null, null, null, null], aiOverview: false },
    { id: 37, keyword: "Security Orchestration", category: "Security Operations", liveDate: "01-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, 101, 80, 59, 38, 18, null, null, null, null, null], aiOverview: true },
    { id: 38, keyword: "MITRE ATT&CK", category: "Threat Intelligence", liveDate: "08-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, 101, 79, 57, 35, 26, null, null, null, null], aiOverview: false },
    { id: 39, keyword: "SOC as a Service", category: "Security Operations", liveDate: "08-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, 101, 84, 67, 50, 33, 16, 10, null, null], aiOverview: true },
    { id: 40, keyword: "Router", category: "Network Security", liveDate: "08-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, 101, 85, 69, 53, 37, 21, 5, null, null], aiOverview: true },
    { id: 41, keyword: "Managed Detection and Response", category: "Security Operations", liveDate: "15-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, 101, 83, 65, 47, 29, 17, null, null], aiOverview: false },
    { id: 42, keyword: "VPN", category: "Network Security", liveDate: "15-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, 101, 88, 75, 62, 49, 36, 23, 12], aiOverview: true },
    { id: 43, keyword: "DAST", category: "Application Security", liveDate: "15-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, 101, 80, 59, 39, null, null, null, null], aiOverview: false },
    { id: 44, keyword: "Social Engineering", category: "General Security", liveDate: "22-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, 101, 75, 49, 23, null, null, null], aiOverview: true },
    { id: 45, keyword: "What is XDR?", category: "General Security", liveDate: "11-Mar", indexingStatus: true, ranks: [101, 95, 89, 83, 77, 71, 65, 59, 53, 47, 41, 35, 29, 23, 17, 11, 5, null, null], aiOverview: false },
    { id: 46, keyword: "Ruggedized Firewall", category: "Access Points", liveDate: "23-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 101, 101, 101, 101, 101], aiOverview: false },
    { id: 47, keyword: "Virtual Patching", category: "Application Security", liveDate: "23-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, null, 2, 1, 101, 101, 101, 101], aiOverview: false },
    { id: 48, keyword: "nerc cip", category: "Operational Technology", liveDate: "25-Jul", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 52, 42, 101, 52, 48], aiOverview: false },
    { id: 49, keyword: "Manufacturing OT", category: "Operational Technology", liveDate: "13-Aug", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 16, null, null], aiOverview: true },
    { id: 50, keyword: "cybersecurity platform", category: "Network Security", liveDate: "13-Aug", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 59, 48, null], aiOverview: true },
    { id: 51, keyword: "cloud security architecture", category: "Security Operations", liveDate: "13-Aug", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 20, 14, null], aiOverview: true },
    { id: 52, keyword: "cloud security best practices", category: "Security Operations", liveDate: "8-Aug", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 101, 101, null, null], aiOverview: false },
    { id: 53, keyword: "Compensating Controls", category: "General Cybersecurity", liveDate: "8-Aug", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 28, 36, null], aiOverview: true },
    { id: 54, keyword: "Signs of Malware", category: "General Security", liveDate: "19-Aug", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 94, null], aiOverview: false },
    { id: 55, keyword: "What is DDoS", category: "General Security", liveDate: "19-Aug", indexingStatus: true, ranks: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 93, null], aiOverview: true },
].map(p => ({ ...p, traffic: generateTraffic(p.ranks) }));

const weeklySummaryBase = [
    { week: 'Mar 11', dateRange: 'Mar 09 - Mar 15', page1: 0, page2: 0, page3: 0, page_gt_3: 11, pos1: 0, aiOverviewCount: 0 },
    { week: 'Apr 1', dateRange: 'Mar 30 - Apr 05', page1: 0, page2: 1, page3: 0, page_gt_3: 10, pos1: 0, aiOverviewCount: 0 },
    { week: 'Apr 22', dateRange: 'Apr 20 - Apr 26', page1: 1, page2: 1, page3: 1, page_gt_3: 8, pos1: 0, aiOverviewCount: 10 },
    { week: 'Apr 29', dateRange: 'Apr 27 - May 03', page1: 0, page2: 2, page3: 0, page_gt_3: 9, pos1: 0, aiOverviewCount: 15 },
    { week: 'May 6', dateRange: 'May 04 - May 10', page1: 1, page2: 2, page3: 0, page_gt_3: 8, pos1: 0, aiOverviewCount: 17 },
    { week: 'May 13', dateRange: 'May 11 - May 17', page1: 1, page2: 2, page3: 0, page_gt_3: 8, pos1: 1, aiOverviewCount: 11 },
    { week: 'May 20', dateRange: 'May 18 - May 24', page1: 1, page2: 2, page3: 0, page_gt_3: 14, pos1: 2, aiOverviewCount: 10 },
    { week: 'May 27', dateRange: 'May 25 - May 31', page1: 2, page2: 3, page3: 0, page_gt_3: 14, pos1: 2, aiOverviewCount: 13 },
    { week: 'Jun 3', dateRange: 'Jun 01 - Jun 07', page1: 2, page2: 3, page3: 0, page_gt_3: 16, pos1: 3, aiOverviewCount: 11 },
    { week: 'Jun 10', dateRange: 'Jun 08 - Jun 14', page1: 2, page2: 4, page3: 0, page_gt_3: 16, pos1: 3, aiOverviewCount: 10 },
    { week: 'Jun 17', dateRange: 'Jun 15 - Jun 21', page1: 5, page2: 4, page3: 0, page_gt_3: 18, pos1: 4, aiOverviewCount: 14 },
    { week: 'Jun 24', dateRange: 'Jun 22 - Jun 28', page1: 7, page2: 3, page3: 2, page_gt_3: 25, pos1: 4, aiOverviewCount: 12 },
    { week: 'Jul 1', dateRange: 'Jun 29 - Jul 05', page1: 6, page2: 7, page3: 1, page_gt_3: 23, pos1: 3, aiOverviewCount: 13 },
    { week: 'Jul 8', dateRange: 'Jul 06 - Jul 12', page1: 4, page2: 5, page3: 4, page_gt_3: 27, pos1: 5, aiOverviewCount: 11 },
    { week: 'Jul 15', dateRange: 'Jul 13 - Jul 19', page1: 12, page2: 3, page3: 6, page_gt_3: 26, pos1: 3, aiOverviewCount: 16 },
    { week: 'Jul 22', dateRange: 'Jul 20 - Jul 26', page1: 13, page2: 6, page3: 5, page_gt_3: 23, pos1: 5, aiOverviewCount: 14 },
    { week: 'Jul 29', dateRange: 'Jul 27 - Aug 02', page1: 14, page2: 5, page3: 6, page_gt_3: 25, pos1: 5, aiOverviewCount: 10 },
    { week: 'Aug 5', dateRange: 'Aug 03 - Aug 09', page1: 16, page2: 5, page3: 5, page_gt_3: 24, pos1: 5, aiOverviewCount: 11 },
    { week: 'Aug 12', dateRange: 'Aug 10 - Aug 16', page1: 16, page2: 6, page3: 5, page_gt_3: 23, pos1: 5, aiOverviewCount: 12 },
    { week: 'Aug 19', dateRange: 'Aug 17 - Aug 23', page1: 13, page2: 10, page3: 6, page_gt_3: 26, pos1: 6, aiOverviewCount: 10 },
    { week: 'Aug 26', dateRange: 'Aug 24 - Aug 30', page1: 17, page2: 6, page3: 3, page_gt_3: 29, pos1: 0, aiOverviewCount: 17 },
];

const totalOrganicTrafficData = [0, 14, 14, 13, 16, 47, 64, 112, 99, 154, 123, 162, 181, 189, 266, 287, 303, 331, 388, 458, 455];

export const weeklySummaryData: WeeklySummary[] = weeklySummaryBase.map((summary, index) => {
    return { ...summary, totalTraffic: totalOrganicTrafficData[index] ?? 0 };
});
