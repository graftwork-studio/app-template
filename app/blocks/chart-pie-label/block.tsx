"use client";

import { Card, CardContent, CardFooter, PieChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-pie-label: a pie chart example (label).
 * Rebuilt from shadcn/ui's chart-pie-label block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Labels sit outside the slices without leader lines.
 */

const data = [
  { browser: "Browser A", visitors: 275 },
  { browser: "Browser B", visitors: 200 },
  { browser: "Browser C", visitors: 187 },
  { browser: "Other", visitors: 90 },
];

export default function ChartPieLabel() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <PieChart
            title="Visitors by browser, June 2026"
            summary="Browser A brought the most visitors, 275 of 752. Other browsers together brought 90."
            data={data}
            categoryKey="browser"
            series={[{ key: "visitors", label: "Visitors" }]}
            labels="values"
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <p className="flex gap-2 font-medium">
            Up 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
          </p>
          <p className="text-text-secondary">Visitors by browser in June.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
