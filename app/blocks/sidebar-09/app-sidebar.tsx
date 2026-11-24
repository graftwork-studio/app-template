"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Switch,
  useSidebar,
} from "@graftwork/ui";
import { ArchiveXIcon, CommandIcon, FileIcon, InboxIcon, SendIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { NavUser } from "./nav-user";

/** Sample folders and messages. Replace them with your own. */
const folders = [
  { title: "Inbox", icon: InboxIcon },
  { title: "Drafts", icon: FileIcon },
  { title: "Sent", icon: SendIcon },
  { title: "Junk", icon: ArchiveXIcon },
  { title: "Trash", icon: Trash2Icon },
];

const mails = [
  { name: "Alex Morgan", date: "09:34", subject: "Meeting tomorrow", teaser: "Hi team, just a reminder about our meeting tomorrow at 10am. Please come prepared with your project updates." },
  { name: "Jordan Lee", date: "Yesterday", subject: "Re: project update", teaser: "Thanks for the update. The progress looks great so far. Let's schedule a call to discuss the next steps." },
  { name: "Riley Chen", date: "2 days ago", subject: "Weekend plans", teaser: "Hey everyone! I'm thinking of organising a team outing this weekend. Would you be interested?" },
  { name: "Casey Patel", date: "2 days ago", subject: "Re: question about budget", teaser: "I've reviewed the budget numbers you sent over. Can we set up a quick call to discuss some potential adjustments?" },
  { name: "Morgan Ellis", date: "1 week ago", subject: "Important announcement", teaser: "Please join us for an all-hands meeting this Friday at 3pm. We have some exciting news to share." },
  { name: "Taylor Brooks", date: "1 week ago", subject: "Re: feedback on proposal", teaser: "Thanks for sending over the proposal. I've reviewed it and have some thoughts. Could we discuss them this week?" },
  { name: "Jamie Fox", date: "1 week ago", subject: "New project idea", teaser: "I've been brainstorming and came up with an interesting project concept. Do you have time this week to discuss it?" },
  { name: "Drew Walker", date: "1 week ago", subject: "Updated project timeline", teaser: "The project timeline has been updated. Please review the new deadlines and let me know if you have any concerns." },
  { name: "Quinn Hart", date: "1 week ago", subject: "Re: conference registration", teaser: "I've completed the registration for the conference next month. The event looks packed with useful sessions." },
  { name: "Avery Stone", date: "2 weeks ago", subject: "Team dinner", teaser: "To celebrate our recent project success, I'd like to organise a team dinner. Are you available next Friday evening?" },
];

export function AppSidebar() {
  const [active, setActive] = useState(folders[0]!);
  const { setOpen } = useSidebar();
  // A fixed rotation instead of upstream's random order, so the block looks the same every time.
  const index = folders.indexOf(active);
  const shown = mails.slice(index).concat(mails.slice(0, index)).slice(0, Math.max(5, 10 - index));

  return (
    <Sidebar aria-label="Mail" collapsible="icon" className="overflow-hidden *:data-[slot=sidebar-inner]:flex-row">
      {/* The first sidebar never collapses and stays as wide as its icons. */}
      <Sidebar collapsible="none" aria-label="Folders" className="w-[calc(var(--sidebar-width-icon)+1px)]! border-e border-border-default">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/" size="lg" className="md:h-8 md:p-0">
                <span className="flex aspect-square size-8 items-center justify-center rounded-lg bg-action-primary-bg text-text-on-primary">
                  <CommandIcon aria-hidden />
                </span>
                <span className="grid flex-1 text-start text-sm leading-tight">
                  <span className="truncate font-medium">Your app</span>
                  <span className="truncate text-xs">Enterprise</span>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {folders.map((folder) => (
                  <SidebarMenuItem key={folder.title}>
                    <SidebarMenuButton
                      tooltip={folder.title}
                      isActive={active.title === folder.title}
                      aria-pressed={active.title === folder.title}
                      onPress={() => {
                        setActive(folder);
                        setOpen(true);
                      }}
                      className="px-2.5 md:px-2"
                    >
                      <folder.icon aria-hidden />
                      <span>{folder.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
      </Sidebar>

      {/* The second sidebar fills the rest of the space. */}
      <Sidebar collapsible="none" aria-label={`${active.title} messages`} className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b border-border-default p-4">
          <div className="flex w-full items-center justify-between">
            <p className="text-md font-medium">{active.title}</p>
            <Switch>Unread only</Switch>
          </div>
          <SidebarInput label="Search messages" type="search" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              <ul className="flex flex-col">
                {shown.map((mail) => (
                  <li key={mail.name} className="border-b border-border-default last:border-b-0">
                    <a
                      href={`#${mail.name.toLowerCase().replace(/ /g, "-")}`}
                      className="focus-ring flex flex-col items-start gap-2 p-4 text-sm leading-tight text-text-default no-underline hover:bg-action-ghost-bg-hover"
                    >
                      <span className="flex w-full items-center gap-2">
                        <span>{mail.name}</span>
                        <span className="ms-auto text-xs text-text-secondary">{mail.date}</span>
                      </span>
                      <span className="font-medium underline">{mail.subject}</span>
                      <span className="line-clamp-2 text-xs text-text-secondary">{mail.teaser}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
