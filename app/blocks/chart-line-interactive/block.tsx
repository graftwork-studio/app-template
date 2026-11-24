"use client";

import { Card, CardContent, CardDescription, CardHeader, LineChart, ToggleGroup, ToggleGroupItem } from "@graftwork/ui";
import { useId, useState } from "react";

/*
 * chart-line-interactive: a line chart of daily figures with a control to switch series.
 * Rebuilt from shadcn/ui's chart-line-interactive block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are generated placeholders to replace.
 */

// 91 days of sample data from 1 April 2026, with fixed values so the block looks the same every time.
const data = Array.from({ length: 91 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 3, 1 + index));
  return {
    day: date.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" }),
    desktop: Math.round(260 + 110 * Math.sin(index / 7) + 45 * Math.sin(index / 2.3)),
    mobile: Math.round(180 + 70 * Math.sin(index / 9 + 1) + 30 * Math.sin(index / 3.1)),
  };
});

const series = {
  desktop: { label: "Desktop", total: data.reduce((sum, day) => sum + day.desktop, 0) },
  mobile: { label: "Mobile", total: data.reduce((sum, day) => sum + day.mobile, 0) },
} as const;
type SeriesKey = keyof typeof series;

export default function ChartLineInteractive() {
  const [active, setActive] = useState<SeriesKey>("desktop");
  const labelId = useId();
  const values = data.map((day) => day[active]);
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-5xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <CardDescription id={labelId}>Total visitors for the last 3 months. Choose a device to chart.</CardDescription>
          <ToggleGroup
            aria-labelledby={labelId}
            variant="secondary"
            size="lg"
            disallowEmptySelection
            selectedKeys={[active]}
            onSelectionChange={(keys) => {
              const [key] = [...keys];
              if (key !== undefined) setActive(key as SeriesKey);
            }}
          >
            {(Object.keys(series) as SeriesKey[]).map((key) => (
              <ToggleGroupItem key={key} id={key}>
                {series[key].label}
                <span className="font-semibold tabular-nums">{series[key].total.toLocaleString("en-GB")}</span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </CardHeader>
        <CardContent>
          <LineChart
            key={active}
            title={`${series[active].label} visitors a day, April to June 2026`}
            summary={`${series[active].total.toLocaleString("en-GB")} ${series[active].label.toLowerCase()} visitors over 91 days, between ${Math.min(...values)} and ${Math.max(...values)} a day. Use the table view for each day's figure.`}
            data={data}
            categoryKey="day"
            series={[{ key: active, label: series[active].label }]}
          />
        </CardContent>
      </Card>
    </main>
  );
}
