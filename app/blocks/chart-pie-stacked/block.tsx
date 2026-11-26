"use client";

import { Card, CardContent, CardFooter, PieChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-pie-stacked: a pie chart example (stacked).
 * Rebuilt from shadcn/ui's chart-pie-stacked block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Two series draw two rings.
 */

const data = [
  { browser: "Browser A", visitors: 275, returning: 120 },
  { browser: "Browser B", visitors: 200, returning: 90 },
  { browser: "Browser C", visitors: 187, returning: 60 },
  { browser: "Other", visitors: 90, returning: 30 },
];

export default function ChartPieStacked() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <PieChart
            title="Visitors by browser, June 2026"
            summary="Browser A led for all visitors and for returning visitors, with 275 and 120."
            data={data}
            categoryKey="browser"
            series={[
              { key: "visitors", label: "Visitors" },
              { key: "returning", label: "Returning visitors" },
            ]}
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <p className="flex gap-2 font-medium">
            Up 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
          </p>
          <p className="text-text-secondary">Visitors and returning visitors by browser in June.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
