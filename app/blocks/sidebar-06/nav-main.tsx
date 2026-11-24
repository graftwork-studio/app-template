"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@graftwork/ui";
import { EllipsisIcon } from "lucide-react";
import { docs, slug } from "./docs";

export function NavMain() {
  const { isMobile } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {docs.map((section) => (
          <SidebarMenuItem key={section.title}>
            <DropdownMenu>
              <SidebarMenuButton>
                {section.title}
                <EllipsisIcon aria-hidden className="ms-auto" />
              </SidebarMenuButton>
              <DropdownMenuContent aria-label={section.title} placement={isMobile ? "bottom end" : "right top"}>
                {section.items.map((item) => (
                  <DropdownMenuItem key={item.title} id={item.title} href={slug(item.title)}>
                    {item.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
