"use client";

import { Card, CardContent, CardFooter, RadialChart } from "@graftwork/ui";
import { TrendingUpIcon } from "lucide-react";

/*
 * chart-radial-stacked: a radial chart example (stacked).
 * Rebuilt from shadcn/ui's chart-radial-stacked block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * A 2px gap in the surface colour separates the segments.
 */

const data = [{ month: "January", desktop: 1260, mobile: 570 }];

export default function ChartRadialStacked() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <RadialChart
            title="Visitors by device, January 2026"
            summary="1,830 visitors in January: 1,260 on desktop and 570 on mobile."
            data={data}
            categoryKey="month"
            shape="half"
            totalLabel="Visitors"
            series={[
              { key: "desktop", label: "Desktop" },
              { key: "mobile", label: "Mobile" },
            ]}
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <p className="flex gap-2 font-medium">
            Up 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
          </p>
          <p className="text-text-secondary">Visitors by device in January.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
