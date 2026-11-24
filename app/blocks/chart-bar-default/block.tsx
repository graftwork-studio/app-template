"use client";

import { BarChart, Card, CardContent, CardFooter } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-bar-default: a bar chart with one series.
 * Rebuilt from shadcn/ui's chart-bar-default block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 */

const data = [
  { month: "Jan", visitors: 186 },
  { month: "Feb", visitors: 305 },
  { month: "Mar", visitors: 237 },
  { month: "Apr", visitors: 73 },
  { month: "May", visitors: 209 },
  { month: "Jun", visitors: 214 },
];

export default function ChartBarDefault() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <BarChart
            title="Visitors, January to June 2026"
            summary="Visitors peaked at 305 in February, fell to 73 in April and recovered to 214 in June."
            data={data}
            categoryKey="month"
            series={[{ key: "visitors", label: "Visitors" }]}
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
