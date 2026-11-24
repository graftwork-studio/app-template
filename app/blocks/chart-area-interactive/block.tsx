"use client";

import { AreaChart, Card, CardContent, CardDescription, CardHeader, CardTitle, Select, SelectItem } from "@graftwork/ui";
import { useState } from "react";

/*
 * chart-area-interactive: a stacked area chart of daily figures with a time-range control.
 * Rebuilt from shadcn/ui's chart-area-interactive block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are generated placeholders to replace.
 * Upstream fills its areas with a gradient; AreaChart uses a flat 40% fill.
 */

// 91 days of sample data from 1 April 2026, with fixed values so the block looks the same every time.
const allDays = Array.from({ length: 91 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 3, 1 + index));
  return {
    day: date.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" }),
    desktop: Math.round(260 + 110 * Math.sin(index / 7) + 45 * Math.sin(index / 2.3)),
    mobile: Math.round(180 + 70 * Math.sin(index / 9 + 1) + 30 * Math.sin(index / 3.1)),
  };
});

const ranges = {
  "90d": { label: "Last 3 months", days: 90 },
  "30d": { label: "Last 30 days", days: 30 },
  "7d": { label: "Last 7 days", days: 7 },
} as const;
type RangeKey = keyof typeof ranges;

export default function ChartAreaInteractive() {
  const [range, setRange] = useState<RangeKey>("90d");
  const data = allDays.slice(-ranges[range].days);
  const totals = data.map((day) => day.desktop + day.mobile);
  const total = totals.reduce((sum, value) => sum + value, 0);
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-5xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1">
            <CardTitle>Visitors</CardTitle>
            <CardDescription>Desktop and mobile visitors a day.</CardDescription>
          </div>
          <Select
            label="Time range"
            className="sm:w-48"
            selectedKey={range}
            onSelectionChange={(key) => {
              if (key !== null) setRange(key as RangeKey);
            }}
          >
            {(Object.keys(ranges) as RangeKey[]).map((key) => (
              <SelectItem key={key} id={key}>
                {ranges[key].label}
              </SelectItem>
            ))}
          </Select>
        </CardHeader>
        <CardContent>
          <AreaChart
            title={`Visitors by device, ${ranges[range].label.toLowerCase()}`}
            summary={`${total.toLocaleString("en-GB")} visitors over ${data.length} days, between ${Math.min(...totals)} and ${Math.max(...totals)} a day. Use the table view for each day's figures.`}
            data={data}
            categoryKey="day"
            series={[
              { key: "desktop", label: "Desktop" },
              { key: "mobile", label: "Mobile" },
            ]}
          />
        </CardContent>
      </Card>
    </main>
  );
}
