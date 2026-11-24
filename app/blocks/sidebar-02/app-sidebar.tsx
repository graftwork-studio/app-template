"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@graftwork/ui";
import { ChevronRightIcon } from "lucide-react";
import { SearchForm } from "./search-form";
import { VersionSwitcher } from "./version-switcher";
import { docs, slug } from "./docs";

export function AppSidebar() {
  return (
    <Sidebar aria-label="Documentation">
      <SidebarHeader>
        <VersionSwitcher />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {docs.map((section) => (
          <Collapsible key={section.title} defaultExpanded className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel
                elementType={CollapsibleTrigger}
                className="w-full text-sm text-text-default hover:bg-action-ghost-bg-hover"
              >
                {section.title}
                <ChevronRightIcon
                  aria-hidden
                  className="ms-auto size-4 transition-transform duration-(--gw-motion-duration-fast) group-data-expanded/collapsible:rotate-90"
                />
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton href={slug(item.title)} isActive={item.isActive}>
                          {item.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
