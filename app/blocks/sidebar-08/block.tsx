"use client";

import { Breadcrumb, BreadcrumbItem, Separator, SidebarInset, SidebarProvider, SidebarTrigger } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";

/*
 * sidebar-08: an inset sidebar with secondary navigation.
 * Rebuilt from shadcn/ui's sidebar-08 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the navigation, people and content are placeholders to replace.
 */

export default function Block() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="me-2 h-4 self-center" />
          <Breadcrumb>
            <BreadcrumbItem href="#building-your-app" className="hidden md:flex">
              Building your app
            </BreadcrumbItem>
            <BreadcrumbItem>Data fetching</BreadcrumbItem>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1 className="text-2xl leading-heading font-semibold">Data fetching</h1>
          <div aria-hidden className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-surface-subtle" />
            <div className="aspect-video rounded-xl bg-surface-subtle" />
            <div className="aspect-video rounded-xl bg-surface-subtle" />
          </div>
          <div aria-hidden className="min-h-96 flex-1 rounded-xl bg-surface-subtle" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
