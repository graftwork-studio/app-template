"use client";

import { Card, CardContent, CardFooter, RadarChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-radar-label-custom: a radar chart with each series' value on its axis labels.
 * Rebuilt from shadcn/ui's chart-radar-label-custom block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Values sit under each month, desktop then mobile, rather than above it.
 */

const data = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function ChartRadarLabelCustom() {
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
            axisLabels="values"
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
