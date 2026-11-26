"use client";

import { Card, CardContent, CardFooter, RadarChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-radar-grid-custom: a radar chart example (grid custom).
 * Rebuilt from shadcn/ui's chart-radar-grid-custom block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Upstream customises its grid; RadarChart uses its standard dashed polygon grid.
 */

const data = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 214 },
];

export default function ChartRadarGridCustom() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <RadarChart
            title="Desktop visitors, January to June 2026"
            summary="Desktop visitors peaked at 305 in February, fell to 73 in April and recovered to 214 in June."
            data={data}
            categoryKey="month"
            series={[{ key: "desktop", label: "Desktop" }]}
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <p className="flex gap-2 font-medium">
            Up 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
          </p>
          <p className="text-text-secondary">Desktop visitors for the last 6 months.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
