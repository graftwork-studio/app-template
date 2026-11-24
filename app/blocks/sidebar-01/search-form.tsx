"use client";

import { SidebarGroup, SidebarGroupContent, SidebarInput } from "@graftwork/ui";

export function SearchForm() {
  return (
    <search>
      <SidebarGroup className="py-0">
        <SidebarGroupContent>
          <SidebarInput label="Search the docs" type="search" placeholder="Find a page" />
        </SidebarGroupContent>
      </SidebarGroup>
    </search>
  );
}
