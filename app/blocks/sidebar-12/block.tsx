"use client";

import { Breadcrumb, BreadcrumbItem, Separator, SidebarInset, SidebarProvider, SidebarTrigger } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";

/*
 * sidebar-12: a sidebar with a calendar.
 * Rebuilt from shadcn/ui's sidebar-12 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the calendars, people and content are placeholders to replace.
 */

export default function Block() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b border-border-default bg-surface-default px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="me-2 h-4 self-center" />
          <Breadcrumb>
            <BreadcrumbItem>October 2026</BreadcrumbItem>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1 className="text-2xl leading-heading font-semibold">October 2026</h1>
          <div aria-hidden className="grid auto-rows-min grid-cols-2 gap-4 md:grid-cols-5">
            {Array.from({ length: 20 }, (_, index) => (
              <div key={index} className="aspect-square rounded-xl bg-surface-subtle" />
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
