"use client";

import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarRail } from "@graftwork/ui";
import { Brand } from "./brand";
import { docs, slug } from "./docs";

export function AppSidebar() {
  return (
    <Sidebar aria-label="Documentation">
      <SidebarHeader>
        <Brand subtitle="v1.0.0" />
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
