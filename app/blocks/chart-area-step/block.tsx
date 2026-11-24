"use client";

import { AreaChart, Card, CardContent, CardFooter } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-area-step: an area chart drawn as steps.
 * Rebuilt from shadcn/ui's chart-area-step block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
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

export default function ChartAreaStep() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <AreaChart
            title="Desktop visitors, January to June 2026"
            summary="Desktop visitors peaked at 305 in February, fell to 73 in April and recovered to 214 in June."
            data={data}
            categoryKey="month"
            series={[{ key: "desktop", label: "Desktop" }]}
            curve="step"
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
