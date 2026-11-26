"use client";

import { Card, CardContent, CardFooter, AreaChart } from "@graftwork/ui";
import { MonitorIcon, SmartphoneIcon, TrendingUpIcon } from "lucide-react";

/*
 * chart-area-icons: a stacked area chart with icons in the legend.
 * Rebuilt from shadcn/ui's chart-area-icons block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Upstream uses trend arrows as the series icons; these name the devices. Icons sit beside each swatch, not in place of it.
 */

const data = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

export default function ChartAreaIcons() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardContent>
          <AreaChart
            title="Visitors by device, January to June 2026"
            summary="Desktop led every month except April, when mobile reached 190 and desktop fell to 73."
            data={data}
            categoryKey="month"
            series={[
              { key: "desktop", label: "Desktop", icon: MonitorIcon },
              { key: "mobile", label: "Mobile", icon: SmartphoneIcon },
            ]}
            tooltipIndicator="line"
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
