"use client";

import { Card, CardContent, CardFooter, BarChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-bar-mixed: a bar chart with a different colour per bar.
 * Rebuilt from shadcn/ui's chart-bar-mixed block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Upstream shows five browsers; colourBy="category" takes up to four bars, one per chart colour, each with its own pattern.
 */

const data = [
  { browser: "Browser A", visitors: 275 },
  { browser: "Browser B", visitors: 200 },
  { browser: "Browser C", visitors: 187 },
  { browser: "Other", visitors: 90 },
];

export default function ChartBarMixed() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <BarChart
            title="Visitors by browser, June 2026"
            summary="Browser A brought the most visitors, 275 of 752. Other browsers together brought 90."
            data={data}
            categoryKey="browser"
            series={[{ key: "visitors", label: "Visitors" }]}
            orientation="horizontal"
            colourBy="category"
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
