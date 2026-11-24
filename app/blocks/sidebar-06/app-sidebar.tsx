"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@graftwork/ui";
import { Brand } from "./brand";
import { NavMain } from "./nav-main";
import { OptInForm } from "./opt-in-form";

export function AppSidebar() {
  return (
    <Sidebar aria-label="Documentation">
      <SidebarHeader>
        <Brand subtitle="v1.0.0" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <OptInForm />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
