"use client";

import { AppShell, AppShellContent, AppShellHeader, Breadcrumb, BreadcrumbItem, SidebarTrigger } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";

/*
 * sidebar-14: a sidebar on the right.
 * Rebuilt from shadcn/ui's sidebar-14 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the navigation, people and content are placeholders to replace.
 */

export default function Block() {
  return (
    <AppShell sidebarEnd={<AppSidebar />}>
      <AppShellHeader showTrigger={false} actions={<SidebarTrigger className="rotate-180" />}>
        <Breadcrumb>
          <BreadcrumbItem href="#building-your-app" className="hidden md:flex">
            Building your app
          </BreadcrumbItem>
          <BreadcrumbItem>Data fetching</BreadcrumbItem>
        </Breadcrumb>
      </AppShellHeader>
      <AppShellContent>
        <h1 className="text-2xl leading-heading font-semibold">Data fetching</h1>
        <div aria-hidden className="min-h-96 flex-1 rounded-xl bg-surface-subtle" />
      </AppShellContent>
    </AppShell>
  );
}
