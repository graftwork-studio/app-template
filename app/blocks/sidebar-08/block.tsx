"use client";

import { AppShell, AppShellContent, AppShellHeader, Breadcrumb, BreadcrumbItem } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";

/*
 * sidebar-08: an inset sidebar with secondary navigation.
 * Rebuilt from shadcn/ui's sidebar-08 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the navigation, people and content are placeholders to replace.
 */

export default function Block() {
  return (
    <AppShell sidebar={<AppSidebar />}>
      <AppShellHeader className="border-b-0">
        <Breadcrumb>
          <BreadcrumbItem href="#building-your-app" className="hidden md:flex">
            Building your app
          </BreadcrumbItem>
          <BreadcrumbItem>Data fetching</BreadcrumbItem>
        </Breadcrumb>
      </AppShellHeader>
      <AppShellContent>
        <h1 className="text-2xl leading-heading font-semibold">Data fetching</h1>
        <div aria-hidden className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-surface-subtle" />
          <div className="aspect-video rounded-xl bg-surface-subtle" />
          <div className="aspect-video rounded-xl bg-surface-subtle" />
        </div>
        <div aria-hidden className="min-h-96 flex-1 rounded-xl bg-surface-subtle" />
      </AppShellContent>
    </AppShell>
  );
}
