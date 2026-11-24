"use client";

import {
  Collapsible,
  CollapsibleContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@graftwork/ui";
import { ChevronRightIcon } from "lucide-react";
import { navMain, slug } from "./data";

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {navMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <Collapsible defaultExpanded={item.isActive} className="group/collapsible">
              <SidebarMenuButton slot="trigger" tooltip={item.title}>
                <item.icon aria-hidden />
                <span>{item.title}</span>
                <ChevronRightIcon
                  aria-hidden
                  className="ms-auto transition-transform duration-(--gw-motion-duration-fast) group-data-expanded/collapsible:rotate-90"
                />
              </SidebarMenuButton>
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
