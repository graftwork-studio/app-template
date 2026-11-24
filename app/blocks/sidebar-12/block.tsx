"use client";

import { AppShell, AppShellContent, AppShellHeader, Breadcrumb, BreadcrumbItem } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";

/*
 * sidebar-12: a sidebar with a calendar.
 * Rebuilt from shadcn/ui's sidebar-12 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the calendars, people and content are placeholders to replace.
 */

export default function Block() {
  return (
    <AppShell sidebar={<AppSidebar />}>
      <AppShellHeader>
        <Breadcrumb>
          <BreadcrumbItem>October 2026</BreadcrumbItem>
        </Breadcrumb>
      </AppShellHeader>
      <AppShellContent>
        <h1 className="text-2xl leading-heading font-semibold">October 2026</h1>
        <div aria-hidden className="grid auto-rows-min grid-cols-2 gap-4 md:grid-cols-5">
          {Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="aspect-square rounded-xl bg-surface-subtle" />
          ))}
        </div>
      </AppShellContent>
    </AppShell>
  );
}
