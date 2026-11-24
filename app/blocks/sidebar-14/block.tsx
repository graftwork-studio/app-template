"use client";

import { Breadcrumb, BreadcrumbItem, SidebarInset, SidebarProvider, SidebarTrigger } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";

/*
 * sidebar-14: a sidebar on the right.
 * Rebuilt from shadcn/ui's sidebar-14 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the navigation, people and content are placeholders to replace.
 */

export default function Block() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 border-b border-border-default">
          <Breadcrumb>
            <BreadcrumbItem href="#building-your-app" className="hidden md:flex">
              Building your app
            </BreadcrumbItem>
            <BreadcrumbItem>Data fetching</BreadcrumbItem>
          </Breadcrumb>
          <SidebarTrigger className="ms-auto rotate-180" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1 className="text-2xl leading-heading font-semibold">Data fetching</h1>
          <div aria-hidden className="min-h-96 flex-1 rounded-xl bg-surface-subtle" />
        </div>
      </SidebarInset>
      <AppSidebar />
    </SidebarProvider>
  );
}
