"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@graftwork/ui";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import { Brand } from "./brand";

export function AppSidebar() {
  return (
    <Sidebar aria-label="Main" variant="inset">
      <SidebarHeader>
        <Brand title="Your app" subtitle="Enterprise" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavProjects />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
