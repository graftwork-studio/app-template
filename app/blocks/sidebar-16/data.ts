import {
  BookOpenIcon,
  BotIcon,
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PieChartIcon,
  SendIcon,
  Settings2Icon,
  SquareTerminalIcon,
} from "lucide-react";

/** Sample navigation. Replace it with your own. */
export const navMain = [
  { title: "Playground", icon: SquareTerminalIcon, isActive: true, items: ["History", "Starred", "Settings"] },
  { title: "Models", icon: BotIcon, items: ["Fast", "Balanced", "Thorough"] },
  { title: "Documentation", icon: BookOpenIcon, items: ["Introduction", "Get started", "Tutorials", "Changelog"] },
  { title: "Settings", icon: Settings2Icon, items: ["General", "Team", "Billing", "Limits"] },
];

export const projects = [
  { name: "Design engineering", icon: FrameIcon },
  { name: "Sales and marketing", icon: PieChartIcon },
  { name: "Travel", icon: MapIcon },
];

export const navSecondary = [
  { title: "Support", icon: LifeBuoyIcon },
  { title: "Feedback", icon: SendIcon },
];

export const slug = (title: string) => "#" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
