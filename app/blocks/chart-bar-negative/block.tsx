"use client";

import { Card, CardContent, CardFooter, BarChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-bar-negative: a bar chart with negative values with their own colour.
 * Rebuilt from shadcn/ui's chart-bar-negative block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Upstream labels bars with the month; BarChart labels them with their value and names months on the axis. Negative bars use the second chart colour and its stripes.
 */

const data = [
  { month: "Jan", change: 186 },
  { month: "Feb", change: 205 },
  { month: "Mar", change: -207 },
  { month: "Apr", change: 173 },
  { month: "May", change: -209 },
  { month: "Jun", change: 214 },
];

export default function ChartBarNegative() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <BarChart
            title="Change in visitors, January to June 2026"
            summary="Visitors fell in March and May, by 207 and 209, and rose in the other four months."
            data={data}
            categoryKey="month"
            series={[{ key: "change", label: "Change" }]}
            negatives="distinct"
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <p className="flex gap-2 font-medium">
            Up 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
          </p>
          <p className="text-text-secondary">Month-on-month change in visitors.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
