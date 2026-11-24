"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@graftwork/ui";
import { PlusIcon } from "lucide-react";
import { Calendars } from "./calendars";
import { DatePicker } from "./date-picker";
import { NavUser } from "./nav-user";

export function AppSidebar() {
  return (
    <Sidebar aria-label="Calendars">
      <SidebarHeader className="h-16 justify-center border-b border-border-default">
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        <Calendars />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <PlusIcon aria-hidden />
              <span>New calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
