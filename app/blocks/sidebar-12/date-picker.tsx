"use client";

import { Calendar, SidebarGroup, SidebarGroupContent } from "@graftwork/ui";
import { parseDate } from "@internationalized/date";

/** A fixed sample date, so the block looks the same every day. Use today's date in your app. */
export function DatePicker() {
  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent className="flex justify-center">
        <Calendar aria-label="Date" defaultValue={parseDate("2026-10-12")} />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
