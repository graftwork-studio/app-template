"use client";

import { Breadcrumb, BreadcrumbItem, Separator, SidebarInset, SidebarProvider, SidebarTrigger } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";

/*
 * sidebar-09: collapsible nested sidebars.
 * Rebuilt from shadcn/ui's sidebar-09 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the folders, messages, people and content are placeholders to replace.
 * The sidebar is 22rem wide, set on the Sidebar through its --sidebar-width variable.
 */

export default function Block() {
  return (
    <SidebarProvider className="[&_[data-slot=sidebar]]:[--sidebar-width:22rem]">
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex shrink-0 items-center gap-2 border-b border-border-default bg-surface-default p-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="me-2 h-4 self-center" />
          <Breadcrumb>
            <BreadcrumbItem href="#all-inboxes" className="hidden md:flex">
              All inboxes
            </BreadcrumbItem>
            <BreadcrumbItem>Inbox</BreadcrumbItem>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1 className="text-2xl leading-heading font-semibold">Inbox</h1>
          <div aria-hidden className="flex flex-col gap-4">
            {Array.from({ length: 24 }, (_, index) => (
              <div key={index} className="aspect-video h-12 w-full rounded-lg bg-surface-subtle" />
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
