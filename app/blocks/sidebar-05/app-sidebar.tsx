"use client";

import { Collapsible, CollapsibleContent, Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarRail } from "@graftwork/ui";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Brand } from "./brand";
import { SearchForm } from "./search-form";
import { docs, slug } from "./docs";

export function AppSidebar() {
  return (
    <Sidebar aria-label="Documentation">
      <SidebarHeader>
        <Brand subtitle="v1.0.0" />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {docs.map((section, index) => (
              <SidebarMenuItem key={section.title}>
                <Collapsible defaultExpanded={index === 1} className="group/collapsible">
                  <SidebarMenuButton slot="trigger">
                    {section.title}
                    <PlusIcon aria-hidden className="ms-auto group-data-expanded/collapsible:hidden" />
                    <MinusIcon aria-hidden className="ms-auto hidden group-data-expanded/collapsible:block" />
                  </SidebarMenuButton>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {section.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton href={slug(item.title)} isActive={item.isActive}>
                            {item.title}
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
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
