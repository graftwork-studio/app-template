"use client";

import { Card, CardContent, CardFooter, RadialChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-radial-shape: a radial chart example (shape).
 * Rebuilt from shadcn/ui's chart-radial-shape block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Upstream draws a background track; RadialChart has none, because a ring ending against it wouldn't meet 3:1.
 */

const data = [{ month: "June", visitors: 1260 }];

export default function ChartRadialShape() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <RadialChart
            title="Visitors this month"
            summary="1,260 visitors in June, 63% of the 2,000 target."
            data={data}
            categoryKey="month"
            series={[{ key: "visitors", label: "Visitors" }]}
            totalLabel="Visitors"
            max={2000}
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <p className="flex gap-2 font-medium">
            Up 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
          </p>
          <p className="text-text-secondary">Visitors in June against a target of 2,000.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
