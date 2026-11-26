"use client";

import { Card, CardContent, CardFooter, BarChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-tooltip-label-custom: a stacked bar chart whose tooltip heading is a formatted date.
 * Rebuilt from shadcn/ui's chart-tooltip-label-custom block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Hover or focus a column for the tooltip; upstream pins it open on the second column. Upstream heads the tooltip with a fixed label from its config; here formatCategory sets the heading, the axis and the table together.
 */

const data = [
  { date: "2026-07-13", running: 450, swimming: 300 },
  { date: "2026-07-14", running: 380, swimming: 420 },
  { date: "2026-07-15", running: 520, swimming: 120 },
  { date: "2026-07-16", running: 140, swimming: 550 },
  { date: "2026-07-17", running: 600, swimming: 350 },
  { date: "2026-07-18", running: 480, swimming: 400 },
];

/** "13 July 2026": midday, so the date is the same in every time zone. */
const longDate = (date: string) =>
  new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function ChartTooltipLabelCustom() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <BarChart
            title="Calories burned, 13 to 18 July 2026"
            summary="Running burned the most on Friday, 600 kcal, and swimming on Thursday, 550 kcal."
            data={data}
            categoryKey="date"
            series={[
              { key: "running", label: "Running" },
              { key: "swimming", label: "Swimming" },
            ]}
            stacking="stacked"
            formatCategory={longDate}
            tooltipIndicator="line"
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <p className="flex gap-2 font-medium">
            Up 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
          </p>
          <p className="text-text-secondary">Calories burned by activity, Monday to Saturday.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
