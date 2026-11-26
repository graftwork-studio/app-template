"use client";

import { AppShell, AppShellContent, AppShellHeader } from "@graftwork/ui";
import { AppSidebar } from "./app-sidebar";
import { DocumentsTable } from "./documents-table";
import { SectionCards } from "./section-cards";
import { VisitorsChart } from "./visitors-chart";

/*
 * dashboard-01: a dashboard with an inset sidebar, summary cards, an interactive area chart and a
 * table of document sections whose rows can be reordered by dragging or with the keyboard.
 * Rebuilt from shadcn/ui's dashboard-01 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the navigation, people, figures and sections are placeholders to replace.
 */

export default function Block() {
  return (
    <AppShell sidebar={<AppSidebar />}>
      <AppShellHeader className="md:rounded-t-xl">
        <h1 className="text-base font-medium">Documents</h1>
      </AppShellHeader>
      <AppShellContent className="@container/main gap-4 md:gap-6">
        <SectionCards />
        <VisitorsChart />
        <DocumentsTable />
      </AppShellContent>
    </AppShell>
  );
}
