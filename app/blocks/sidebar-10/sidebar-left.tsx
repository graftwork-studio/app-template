"use client";

import {
  Collapsible,
  CollapsibleContent,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@graftwork/ui";
import { ArrowUpRightIcon, ChevronRightIcon, EllipsisIcon, LinkIcon, PlusIcon, StarOffIcon, Trash2Icon } from "lucide-react";
import { favourites, navMain, navSecondary, slug, workspaces } from "./data";
import { TeamSwitcher } from "./team-switcher";

export function SidebarLeft() {
  const { isMobile } = useSidebar();
  return (
    <Sidebar aria-label="Pages">
      <SidebarHeader>
        <TeamSwitcher />
        <SidebarMenu>
          {navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton href={slug(item.title)} isActive={item.isActive}>
                <item.icon aria-hidden />
                <span>{item.title}</span>
              </SidebarMenuButton>
              {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Favourites</SidebarGroupLabel>
          <SidebarMenu>
            {favourites.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton href={slug(item.name)}>
                  <span aria-hidden>{item.emoji}</span>
                  <span>{item.name}</span>
                </SidebarMenuButton>
                <DropdownMenu>
                  <SidebarMenuAction showOnHover aria-label={`More options for ${item.name}`}>
                    <EllipsisIcon aria-hidden />
                  </SidebarMenuAction>
                  <DropdownMenuContent aria-label={`${item.name} options`} placement={isMobile ? "bottom end" : "right top"}>
                    <DropdownMenuItem id="unfavourite" textValue="Remove from favourites">
                      <StarOffIcon aria-hidden />
                      Remove from favourites
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem id="copy" textValue="Copy link">
                      <LinkIcon aria-hidden />
                      Copy link
                    </DropdownMenuItem>
                    <DropdownMenuItem id="open" textValue="Open in new tab">
                      <ArrowUpRightIcon aria-hidden />
                      Open in new tab
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem id="delete" variant="destructive" textValue="Delete">
                      <Trash2Icon aria-hidden />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Workspaces</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {workspaces.map((workspace) => (
                <SidebarMenuItem key={workspace.name}>
                  <Collapsible>
                    <SidebarMenuButton href={slug(workspace.name)}>
                      <span aria-hidden>{workspace.emoji}</span>
                      <span>{workspace.name}</span>
                    </SidebarMenuButton>
                    <SidebarMenuAction
                      slot="trigger"
                      aria-label={`${workspace.name} pages`}
                      className="start-2 end-auto bg-surface-subtle transition-transform duration-(--gw-motion-duration-fast) aria-expanded:rotate-90"
                      showOnHover
                    >
                      <ChevronRightIcon aria-hidden />
                    </SidebarMenuAction>
                    <SidebarMenuAction showOnHover aria-label={`Add a page to ${workspace.name}`}>
                      <PlusIcon aria-hidden />
                    </SidebarMenuAction>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {workspace.pages.map((page) => (
                          <SidebarMenuSubItem key={page}>
                            <SidebarMenuSubButton href={slug(page)}>
                              <span>{page}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton href={slug(item.title)}>
                    <item.icon aria-hidden />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
