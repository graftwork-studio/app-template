"use client";

import {
  Avatar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSection,
  DropdownMenuSeparator,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@graftwork/ui";
import { BadgeCheckIcon, BellIcon, ChevronsUpDownIcon, CreditCardIcon, LogOutIcon, SparklesIcon } from "lucide-react";

/** Sample person. Replace it with the signed-in user. */
const user = { name: "Sam Taylor", email: "sam@example.com" };

export function NavUser() {
  const { isMobile } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton size="lg">
            <Avatar name={user.name} size="sm" decorative />
            <span className="grid flex-1 text-start text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </span>
            <ChevronsUpDownIcon aria-hidden className="ms-auto" />
          </SidebarMenuButton>
          <DropdownMenuContent aria-label="Account" placement={isMobile ? "bottom end" : "right bottom"}>
            <DropdownMenuSection title={user.email}>
              <DropdownMenuItem id="upgrade" textValue="Upgrade your plan">
                <SparklesIcon aria-hidden />
                Upgrade your plan
              </DropdownMenuItem>
            </DropdownMenuSection>
            <DropdownMenuSeparator />
            <DropdownMenuItem id="account" textValue="Account">
              <BadgeCheckIcon aria-hidden />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem id="billing" textValue="Billing">
              <CreditCardIcon aria-hidden />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem id="notifications" textValue="Notifications">
              <BellIcon aria-hidden />
              Notifications
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem id="log-out" textValue="Log out">
              <LogOutIcon aria-hidden />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
