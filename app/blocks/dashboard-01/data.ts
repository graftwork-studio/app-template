import {
  ChartBarIcon,
  CircleHelpIcon,
  DatabaseIcon,
  FileChartColumnIcon,
  FileIcon,
  FolderIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  Settings2Icon,
  UsersIcon,
} from "lucide-react";

/** Sample navigation. Replace it with your own. */
export const navMain = [
  { title: "Dashboard", icon: LayoutDashboardIcon, isActive: true },
  { title: "Lifecycle", icon: ListIcon },
  { title: "Analytics", icon: ChartBarIcon },
  { title: "Projects", icon: FolderIcon },
  { title: "Team", icon: UsersIcon },
];

export const documents = [
  { name: "Data library", icon: DatabaseIcon },
  { name: "Reports", icon: FileChartColumnIcon },
  { name: "Writing assistant", icon: FileIcon },
];

export const navSecondary = [
  { title: "Settings", icon: Settings2Icon },
  { title: "Get help", icon: CircleHelpIcon },
  { title: "Search", icon: SearchIcon },
];

export const slug = (title: string) => "#" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const reviewers = ["Alex Morgan", "Jordan Reid", "Priya Shah", "Robin Hale", "Kit Fraser"];

export const sectionTypes = [
  "Cover page",
  "Table of contents",
  "Narrative",
  "Technical content",
  "Plain language",
  "Legal",
  "Financial",
  "Visual",
] as const;

export const statuses = ["Done", "In process"] as const;

export type Section = {
  id: string;
  header: string;
  type: (typeof sectionTypes)[number];
  status: (typeof statuses)[number];
  target: number;
  limit: number;
  /** Null until someone is assigned. */
  reviewer: string | null;
};

/** Sample sections of a proposal. Replace them with your own data. */
export const sections: Section[] = [
  { id: "1", header: "Cover page", type: "Cover page", status: "In process", target: 18, limit: 5, reviewer: "Alex Morgan" },
  { id: "2", header: "Table of contents", type: "Table of contents", status: "Done", target: 29, limit: 24, reviewer: "Alex Morgan" },
  { id: "3", header: "Executive summary", type: "Narrative", status: "Done", target: 10, limit: 13, reviewer: "Alex Morgan" },
  { id: "4", header: "Technical approach", type: "Narrative", status: "Done", target: 27, limit: 23, reviewer: "Jordan Reid" },
  { id: "5", header: "Design", type: "Narrative", status: "In process", target: 2, limit: 16, reviewer: "Jordan Reid" },
  { id: "6", header: "Capabilities", type: "Narrative", status: "In process", target: 20, limit: 8, reviewer: "Jordan Reid" },
  { id: "7", header: "Integration with existing systems", type: "Narrative", status: "In process", target: 19, limit: 21, reviewer: "Jordan Reid" },
  { id: "8", header: "Innovation and advantages", type: "Narrative", status: "Done", target: 25, limit: 26, reviewer: null },
  { id: "9", header: "Overview of the solution", type: "Technical content", status: "Done", target: 7, limit: 23, reviewer: null },
  { id: "10", header: "Algorithms and models", type: "Narrative", status: "Done", target: 30, limit: 28, reviewer: null },
  { id: "11", header: "Communication protocols", type: "Narrative", status: "Done", target: 9, limit: 31, reviewer: null },
  { id: "12", header: "Advantages over current tools", type: "Narrative", status: "Done", target: 12, limit: 0, reviewer: null },
  { id: "13", header: "Past performance", type: "Narrative", status: "Done", target: 22, limit: 33, reviewer: null },
  { id: "14", header: "Customer feedback", type: "Narrative", status: "Done", target: 15, limit: 34, reviewer: null },
  { id: "15", header: "Implementation challenges", type: "Narrative", status: "Done", target: 3, limit: 35, reviewer: null },
  { id: "16", header: "Security and data protection", type: "Narrative", status: "In process", target: 6, limit: 36, reviewer: null },
  { id: "17", header: "Scalability", type: "Narrative", status: "Done", target: 4, limit: 37, reviewer: null },
  { id: "18", header: "Cost-benefit analysis", type: "Plain language", status: "Done", target: 14, limit: 38, reviewer: null },
  { id: "19", header: "Training and onboarding", type: "Narrative", status: "Done", target: 17, limit: 39, reviewer: null },
  { id: "20", header: "Development roadmap", type: "Narrative", status: "Done", target: 11, limit: 40, reviewer: null },
  { id: "21", header: "System architecture", type: "Technical content", status: "In process", target: 24, limit: 18, reviewer: "Priya Shah" },
  { id: "22", header: "Risk management plan", type: "Narrative", status: "Done", target: 15, limit: 22, reviewer: "Robin Hale" },
  { id: "23", header: "Compliance documents", type: "Legal", status: "In process", target: 31, limit: 27, reviewer: "Kit Fraser" },
  { id: "24", header: "API documentation", type: "Technical content", status: "Done", target: 8, limit: 12, reviewer: "Priya Shah" },
];

// 91 days of sample visitors from 1 April 2026, with fixed values so the block looks the same every time.
export const visitors = Array.from({ length: 91 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 3, 1 + index));
  return {
    day: date.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" }),
    desktop: Math.round(260 + 110 * Math.sin(index / 7) + 45 * Math.sin(index / 2.3)),
    mobile: Math.round(180 + 70 * Math.sin(index / 9 + 1) + 30 * Math.sin(index / 3.1)),
  };
});

/** Six months of sample visitors for a section's drawer. */
export const monthlyVisitors = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
