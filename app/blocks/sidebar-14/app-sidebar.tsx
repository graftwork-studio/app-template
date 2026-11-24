"use client";

import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarRail } from "@graftwork/ui";
import { docs, slug } from "./docs";

export function AppSidebar() {
  return (
    <Sidebar aria-label="Table of contents" side="right">
      <SidebarHeader>
        <p className="px-2 pt-2 text-sm font-medium">Table of contents</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {docs.map((section) => (
              <SidebarMenuItem key={section.title}>
                <SidebarMenuButton href={slug(section.title)} className="font-medium">
                  {section.title}
                </SidebarMenuButton>
                <SidebarMenuSub>
                  {section.items.map((item) => (
                    <SidebarMenuSubItem key={item.title}>
                      <SidebarMenuSubButton href={slug(item.title)} isActive={item.isActive}>
                        {item.title}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
