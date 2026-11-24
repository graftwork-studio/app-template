"use client";

import {
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
} from "@graftwork/ui";
import { ChevronRightIcon } from "lucide-react";
import { Fragment } from "react";

/** Sample calendars. Replace them with your own. */
const calendars = [
  { name: "My calendars", items: ["Personal", "Work", "Family"] },
  { name: "Favourites", items: ["Holidays", "Birthdays"] },
  { name: "Other", items: ["Travel", "Reminders", "Deadlines"] },
];

export function Calendars() {
  return (
    <>
      {calendars.map((calendar, index) => (
        <Fragment key={calendar.name}>
          <SidebarGroup className="py-0">
            <Collapsible defaultExpanded={index === 0} className="group/collapsible">
              <SidebarGroupLabel
                elementType={CollapsibleTrigger}
                className="w-full text-sm text-text-default hover:bg-action-ghost-bg-hover"
              >
                {calendar.name}
                <ChevronRightIcon
                  aria-hidden
                  className="ms-auto size-4 transition-transform duration-(--gw-motion-duration-fast) group-data-expanded/collapsible:rotate-90"
                />
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {calendar.items.map((item, itemIndex) => (
                      <SidebarMenuItem key={item} className="px-2 py-1.5">
                        <Checkbox defaultSelected={index === 0 && itemIndex < 2}>{item}</Checkbox>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
          <SidebarSeparator className="mx-0" />
        </Fragment>
      ))}
    </>
  );
}
