"use client";

import { Breadcrumb, BreadcrumbItem, Separator, SidebarInset, SidebarProvider, SidebarTrigger } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";

/*
 * sidebar-11: a sidebar with a collapsible file tree.
 * Rebuilt from shadcn/ui's sidebar-11 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the files and content are placeholders to replace.
 */

export default function Block() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border-default px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="me-2 h-4 self-center" />
          <Breadcrumb>
            <BreadcrumbItem href="#components" className="hidden md:flex">
              components
            </BreadcrumbItem>
            <BreadcrumbItem href="#ui" className="hidden md:flex">
              ui
            </BreadcrumbItem>
            <BreadcrumbItem>button.tsx</BreadcrumbItem>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1 className="text-2xl leading-heading font-semibold">button.tsx</h1>
          <div aria-hidden className="min-h-96 flex-1 rounded-xl bg-surface-subtle" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
