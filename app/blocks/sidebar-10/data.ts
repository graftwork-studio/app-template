import {
  BlocksIcon,
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  MessageCircleQuestionIcon,
  SearchIcon,
  Settings2Icon,
  SparklesIcon,
  Trash2Icon,
} from "lucide-react";

/** Sample navigation and pages. Replace them with your own. */
export const navMain = [
  { title: "Search", icon: SearchIcon },
  { title: "Ask the assistant", icon: SparklesIcon },
  { title: "Home", icon: HomeIcon, isActive: true },
  { title: "Inbox", icon: InboxIcon, badge: "10" },
];

export const favourites = [
  { name: "Project management and task tracking", emoji: "📊" },
  { name: "Family recipe collection", emoji: "🍳" },
  { name: "Fitness tracker and workout routines", emoji: "💪" },
  { name: "Book notes and reading list", emoji: "📚" },
  { name: "Garden planning and seasonal planting", emoji: "🌱" },
];

export const workspaces = [
  { name: "Personal life", emoji: "🏠", pages: ["Daily journal", "Health and wellness", "Personal growth"] },
  { name: "Professional development", emoji: "💼", pages: ["Career objectives", "Skill tracking", "Networking contacts"] },
  { name: "Creative projects", emoji: "🎨", pages: ["Writing ideas", "Art and design", "Music composition"] },
  { name: "Home management", emoji: "🏡", pages: ["Household budget", "Home maintenance", "Family calendar"] },
];

export const navSecondary = [
  { title: "Calendar", icon: CalendarIcon },
  { title: "Settings", icon: Settings2Icon },
  { title: "Templates", icon: BlocksIcon },
  { title: "Trash", icon: Trash2Icon },
  { title: "Help", icon: MessageCircleQuestionIcon },
];

export const slug = (title: string) => "#" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
