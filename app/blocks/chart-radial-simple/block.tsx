"use client";

import { Card, CardContent, CardFooter, RadialChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-radial-simple: a radial chart example (simple).
 * Rebuilt from shadcn/ui's chart-radial-simple block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Upstream shows five rings; RadialChart draws up to four, one per chart colour. Rings span three quarters of a circle.
 */

const data = [
  { browser: "Browser A", visitors: 275 },
  { browser: "Browser B", visitors: 200 },
  { browser: "Browser C", visitors: 187 },
  { browser: "Other", visitors: 90 },
];

export default function ChartRadialSimple() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <RadialChart
            title="Visitors by browser, June 2026"
            summary="Browser A brought the most visitors, 275 of 752. Other browsers together brought 90."
            data={data}
            categoryKey="browser"
            series={[{ key: "visitors", label: "Visitors" }]}
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
