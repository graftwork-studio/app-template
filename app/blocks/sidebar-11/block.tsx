"use client";

import { AppShell, AppShellContent, AppShellHeader, Breadcrumb, BreadcrumbItem } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";

/*
 * sidebar-11: a sidebar with a collapsible file tree.
 * Rebuilt from shadcn/ui's sidebar-11 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the files and content are placeholders to replace.
 */

export default function Block() {
  return (
    <AppShell sidebar={<AppSidebar />}>
      <AppShellHeader>
        <Breadcrumb>
          <BreadcrumbItem href="#components" className="hidden md:flex">
            components
          </BreadcrumbItem>
          <BreadcrumbItem href="#ui" className="hidden md:flex">
            ui
          </BreadcrumbItem>
          <BreadcrumbItem>button.tsx</BreadcrumbItem>
        </Breadcrumb>
      </AppShellHeader>
      <AppShellContent>
        <h1 className="text-2xl leading-heading font-semibold">button.tsx</h1>
        <div aria-hidden className="min-h-96 flex-1 rounded-xl bg-surface-subtle" />
      </AppShellContent>
    </AppShell>
  );
}
