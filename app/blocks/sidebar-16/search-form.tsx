"use client";

import { SidebarInput } from "@graftwork/ui";

export function SearchForm({ className }: { className?: string }) {
  return (
    <search className={className}>
      <SidebarInput label="Search" type="search" placeholder="Find a page" className="flex-row items-center gap-2" />
    </search>
  );
}
