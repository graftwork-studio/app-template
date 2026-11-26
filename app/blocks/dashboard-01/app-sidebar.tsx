"use client";

import {
  Avatar,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSection,
  DropdownMenuSeparator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@graftwork/ui";
import {
  BellIcon,
  CirclePlusIcon,
  CircleUserIcon,
  CommandIcon,
  CreditCardIcon,
  EllipsisIcon,
  EllipsisVerticalIcon,
  FolderOpenIcon,
  LogOutIcon,
  MailIcon,
  Share2Icon,
  Trash2Icon,
} from "lucide-react";
import { documents, navMain, navSecondary, slug } from "./data";

/** Sample person. Replace it with the signed-in user. */
const user = { name: "Sam Taylor", email: "sam@example.com" };

export function AppSidebar() {
  return (
    <Sidebar aria-label="Main" variant="inset" collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="#home">
              <CommandIcon aria-hidden />
              <span className="text-base font-semibold">Your company</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavDocuments />
        <NavSecondary />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Button className="flex-1 justify-start">
            <CirclePlusIcon aria-hidden />
            Quick create
          </Button>
          <Button variant="secondary" aria-label="Inbox" className="size-8 px-0">
            <MailIcon aria-hidden />
          </Button>
        </div>
        <SidebarMenu>
          {navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton href={slug(item.title)} isActive={item.isActive}>
                <item.icon aria-hidden />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

function NavDocuments() {
  const { isMobile } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {documents.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton href={slug(item.name)}>
              <item.icon aria-hidden />
              <span>{item.name}</span>
            </SidebarMenuButton>
            <DropdownMenu>
              <SidebarMenuAction showOnHover aria-label={`More options for ${item.name}`}>
                <EllipsisIcon aria-hidden />
              </SidebarMenuAction>
              <DropdownMenuContent aria-label={`${item.name} options`} placement={isMobile ? "bottom end" : "right top"}>
                <DropdownMenuItem id="open" textValue="Open">
                  <FolderOpenIcon aria-hidden />
                  Open
                </DropdownMenuItem>
                <DropdownMenuItem id="share" textValue="Share">
                  <Share2Icon aria-hidden />
                  Share
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem id="delete" variant="destructive" textValue="Delete">
                  <Trash2Icon aria-hidden />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton>
            <EllipsisIcon aria-hidden />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavSecondary() {
  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupContent>
        <SidebarMenu>
          {navSecondary.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton href={slug(item.title)}>
                <item.icon aria-hidden />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

function NavUser() {
  const { isMobile } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton size="lg">
            <Avatar name={user.name} size="sm" decorative />
            <span className="grid flex-1 text-start text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs text-text-secondary">{user.email}</span>
            </span>
            <EllipsisVerticalIcon aria-hidden className="ms-auto" />
          </SidebarMenuButton>
          <DropdownMenuContent aria-label="Account" placement={isMobile ? "bottom end" : "right bottom"}>
            <DropdownMenuSection title={user.email}>
              <DropdownMenuItem id="account" textValue="Account">
                <CircleUserIcon aria-hidden />
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
            </DropdownMenuSection>
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
