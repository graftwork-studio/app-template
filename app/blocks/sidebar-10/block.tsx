"use client";

import { AppShell, AppShellContent, AppShellHeader, Breadcrumb, BreadcrumbItem } from "@graftwork/ui";
import { NavActions } from "./nav-actions";
import { SidebarLeft } from "./sidebar-left";

/*
 * sidebar-10: a sidebar with a popover of page actions.
 * Rebuilt from shadcn/ui's sidebar-10 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the pages, people and content are placeholders to replace.
 */

export default function Block() {
  return (
    <AppShell sidebar={<SidebarLeft />}>
      <AppShellHeader className="border-b-0 h-14 px-3" actions={<NavActions />}>
        <Breadcrumb>
          <BreadcrumbItem>Project management and task tracking</BreadcrumbItem>
        </Breadcrumb>
      </AppShellHeader>
      <AppShellContent className="px-4 py-10">
        <h1 className="mx-auto w-full max-w-3xl text-2xl leading-heading font-semibold">
          Project management and task tracking
        </h1>
        <div aria-hidden className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-surface-subtle" />
        <div aria-hidden className="mx-auto min-h-96 w-full max-w-3xl flex-1 rounded-xl bg-surface-subtle" />
      </AppShellContent>
    </AppShell>
  );
}
