"use client";

import { Breadcrumb, BreadcrumbItem, Separator, SidebarInset, SidebarProvider, SidebarTrigger } from "@graftwork/ui";
import { NavActions } from "./nav-actions";
import { SidebarLeft } from "./sidebar-left";

/*
 * sidebar-10: a sidebar with a popover of page actions.
 * Rebuilt from shadcn/ui's sidebar-10 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the pages, people and content are placeholders to replace.
 */

export default function Block() {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="me-2 h-4 self-center" />
          <Breadcrumb>
            <BreadcrumbItem>Project management and task tracking</BreadcrumbItem>
          </Breadcrumb>
          <div className="ms-auto">
            <NavActions />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
          <h1 className="mx-auto w-full max-w-3xl text-2xl leading-heading font-semibold">
            Project management and task tracking
          </h1>
          <div aria-hidden className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-surface-subtle" />
          <div aria-hidden className="mx-auto min-h-96 w-full max-w-3xl flex-1 rounded-xl bg-surface-subtle" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
