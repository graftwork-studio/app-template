"use client";

import {
  Collapsible,
  CollapsibleContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@graftwork/ui";
import { ChevronRightIcon } from "lucide-react";
import { navMain, slug } from "./data";

/** Each item is a link, with a separate button that shows its pages. */
export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {navMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <Collapsible defaultExpanded={item.isActive}>
              <SidebarMenuButton href={slug(item.title)} tooltip={item.title}>
                <item.icon aria-hidden />
                <span>{item.title}</span>
              </SidebarMenuButton>
              <SidebarMenuAction
                slot="trigger"
                aria-label={`${item.title} pages`}
                className="transition-transform duration-(--gw-motion-duration-fast) aria-expanded:rotate-90"
              >
                <ChevronRightIcon aria-hidden />
              </SidebarMenuAction>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items.map((sub) => (
                    <SidebarMenuSubItem key={sub}>
                      <SidebarMenuSubButton href={slug(sub)}>
                        <span>{sub}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
