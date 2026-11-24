"use client";

import {
  Button,
  Popover,
  PopoverContent,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@graftwork/ui";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BellIcon,
  CopyIcon,
  CornerUpLeftIcon,
  CornerUpRightIcon,
  EllipsisIcon,
  FileTextIcon,
  GalleryVerticalEndIcon,
  LineChartIcon,
  LinkIcon,
  Settings2Icon,
  StarIcon,
  Trash2Icon,
  TrashIcon,
} from "lucide-react";

const groups = [
  [
    { label: "Customise page", icon: Settings2Icon },
    { label: "Turn into wiki", icon: FileTextIcon },
  ],
  [
    { label: "Copy link", icon: LinkIcon },
    { label: "Duplicate", icon: CopyIcon },
    { label: "Move to", icon: CornerUpRightIcon },
    { label: "Move to trash", icon: Trash2Icon },
  ],
  [
    { label: "Undo", icon: CornerUpLeftIcon },
    { label: "View analytics", icon: LineChartIcon },
    { label: "Version history", icon: GalleryVerticalEndIcon },
    { label: "Show deleted pages", icon: TrashIcon },
    { label: "Notifications", icon: BellIcon },
  ],
  [
    { label: "Import", icon: ArrowUpIcon },
    { label: "Export", icon: ArrowDownIcon },
  ],
];

export function NavActions() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <p className="hidden text-text-secondary md:block">Edited 8 Oct</p>
      <Button variant="ghost" size="sm" aria-label="Add to favourites" className="w-7 px-0">
        <StarIcon aria-hidden />
      </Button>
      <Popover>
        <Button variant="ghost" size="sm" aria-label="Page actions" className="w-7 px-0">
          <EllipsisIcon aria-hidden />
        </Button>
        <PopoverContent aria-label="Page actions" placement="bottom end" className="w-56 overflow-hidden p-0">
          <Sidebar collapsible="none" aria-label="Page actions" className="w-full bg-transparent">
            <SidebarContent>
              {groups.map((group, index) => (
                <SidebarGroup key={index} className="border-b border-border-default last:border-none">
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.map((item) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton>
                            <item.icon aria-hidden />
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </div>
  );
}
