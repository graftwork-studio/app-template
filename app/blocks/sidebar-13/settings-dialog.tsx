"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@graftwork/ui";
import {
  BellIcon,
  CheckIcon,
  GlobeIcon,
  HomeIcon,
  KeyboardIcon,
  LinkIcon,
  LockIcon,
  MenuIcon,
  MessageCircleIcon,
  PaintbrushIcon,
  Settings2Icon,
  VideoIcon,
} from "lucide-react";

const nav = [
  { name: "Notifications", icon: BellIcon },
  { name: "Navigation", icon: MenuIcon },
  { name: "Home", icon: HomeIcon },
  { name: "Appearance", icon: PaintbrushIcon },
  { name: "Messages and media", icon: MessageCircleIcon },
  { name: "Language and region", icon: GlobeIcon },
  { name: "Accessibility", icon: KeyboardIcon },
  { name: "Mark as read", icon: CheckIcon },
  { name: "Audio and video", icon: VideoIcon },
  { name: "Connected accounts", icon: LinkIcon },
  { name: "Privacy and visibility", icon: LockIcon },
  { name: "Advanced", icon: Settings2Icon },
];

const slug = (title: string) => "#" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function SettingsDialog() {
  return (
    <Dialog>
      <Button size="sm">Open settings</Button>
      <DialogContent size="lg" className="overflow-hidden p-0 md:max-w-3xl">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">Change your settings here.</DialogDescription>
        <SidebarProvider keyboardShortcut={false} className="min-h-0 items-start">
          <Sidebar collapsible="none" aria-label="Settings sections" className="hidden md:flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton href={slug(item.name)} isActive={item.name === "Messages and media"}>
                          <item.icon aria-hidden />
                          <span>{item.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset elementType="div" className="flex h-120 flex-1 flex-col overflow-hidden">
            <div className="flex h-16 shrink-0 items-center gap-2 px-4">
              <Breadcrumb>
                <BreadcrumbItem href="#settings" className="hidden md:flex">
                  Settings
                </BreadcrumbItem>
                <BreadcrumbItem>Messages and media</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div aria-hidden className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
              {Array.from({ length: 10 }, (_, index) => (
                <div key={index} className="aspect-video max-w-3xl rounded-xl bg-surface-subtle" />
              ))}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}
