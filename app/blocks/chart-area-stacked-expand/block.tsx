"use client";

import { AreaChart, Card, CardContent, CardFooter } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-area-stacked-expand: an area chart showing each series' share of the total.
 * Rebuilt from shadcn/ui's chart-area-stacked-expand block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 */

const data = [
  { month: "Jan", desktop: 186, mobile: 80, other: 45 },
  { month: "Feb", desktop: 305, mobile: 200, other: 100 },
  { month: "Mar", desktop: 237, mobile: 120, other: 150 },
  { month: "Apr", desktop: 73, mobile: 190, other: 50 },
  { month: "May", desktop: 209, mobile: 130, other: 100 },
  { month: "Jun", desktop: 214, mobile: 140, other: 100 },
];

export default function ChartAreaStackedExpand() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <AreaChart
            title="Share of visitors by device, January to June 2026"
            summary="Desktop was about half of all visitors in most months, from 60% in January to 47% in June. In April it fell to 23%, and mobile rose to 61%. The table shows the visitor counts behind each share."
            data={data}
            categoryKey="month"
            series={[
              { key: "desktop", label: "Desktop" },
              { key: "mobile", label: "Mobile" },
              { key: "other", label: "Other" },
            ]}
            stacking="percent"
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <p className="flex gap-2 font-medium">
            Up 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
          </p>
          <p className="text-text-secondary">Total visitors for the last 6 months.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
