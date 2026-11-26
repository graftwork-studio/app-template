"use client";

import { Card, CardContent, CardFooter, RadialChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-radial-text: a radial chart example (text).
 * Rebuilt from shadcn/ui's chart-radial-text block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Upstream's arc is a fixed decoration; here it shows the value against a target (max). There's no background track, which wouldn't meet 3:1 where the ring ends.
 */

const data = [{ month: "June", visitors: 200 }];

export default function ChartRadialText() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <RadialChart
            title="Visitors this month"
            summary="200 visitors in June, two thirds of the 300 target."
            data={data}
            categoryKey="month"
            series={[{ key: "visitors", label: "Visitors" }]}
            totalLabel="Visitors"
            max={300}
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <p className="flex gap-2 font-medium">
            Up 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
          </p>
          <p className="text-text-secondary">Visitors in June against a target of 300.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
