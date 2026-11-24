"use client";

import { Breadcrumb, BreadcrumbItem, Separator, SidebarInset, SidebarProvider, SidebarTrigger } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";
import { SearchForm } from "./search-form";

/*
 * sidebar-16: a sidebar with a sticky site header.
 * Rebuilt from shadcn/ui's sidebar-16 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the navigation, people and content are placeholders to replace.
 */

export default function Block() {
  return (
    <SidebarProvider className="flex flex-col">
      <header className="sticky top-0 z-50 flex h-14 w-full items-center gap-2 border-b border-border-default bg-surface-default px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="me-2 h-4 self-center" />
        <Breadcrumb className="hidden sm:flex">
          <BreadcrumbItem href="#building-your-app">Building your app</BreadcrumbItem>
          <BreadcrumbItem>Data fetching</BreadcrumbItem>
        </Breadcrumb>
        <SearchForm className="ms-auto" />
      </header>
      <div className="flex flex-1">
        <AppSidebar />
        <SidebarInset>
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
      </div>
    </SidebarProvider>
  );
}
