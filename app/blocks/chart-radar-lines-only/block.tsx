"use client";

import { Card, CardContent, CardFooter, RadarChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-radar-lines-only: a radar chart example (lines only).
 * Rebuilt from shadcn/ui's chart-radar-lines-only block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 */

const data = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

export default function ChartRadarLinesOnly() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <RadarChart
            title="Visitors by device, January to June 2026"
            summary="Desktop led every month except April, when mobile reached 190 and desktop fell to 73."
            data={data}
            categoryKey="month"
            series={[
              { key: "desktop", label: "Desktop" },
              { key: "mobile", label: "Mobile" },
            ]}
            variant="lines"
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <p className="flex gap-2 font-medium">
            Up 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
          </p>
          <p className="text-text-secondary">Visitors by device for the last 6 months.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
