"use client";

import { BarChart, Card, CardContent, CardDescription, CardHeader, ToggleGroup, ToggleGroupItem } from "@graftwork/ui";
import { useId, useState } from "react";

/*
 * chart-bar-interactive: a bar chart with a control to switch series.
 * Rebuilt from shadcn/ui's chart-bar-interactive block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are generated placeholders to replace.
 */

// 13 weeks of sample data from 6 April 2026, with fixed values so the block looks the same every time.
// Upstream charts 91 daily bars; BarChart labels every bar, so daily labels would overlap. Weekly totals stay readable.
const data = Array.from({ length: 13 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 3, 6 + index * 7));
  return {
    week: date.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" }),
    desktop: 1400 + ((index * 530) % 1800),
    mobile: 1100 + ((index * 370) % 1500),
  };
});

const series = {
  desktop: { label: "Desktop", total: data.reduce((sum, day) => sum + day.desktop, 0) },
  mobile: { label: "Mobile", total: data.reduce((sum, day) => sum + day.mobile, 0) },
} as const;
type SeriesKey = keyof typeof series;

export default function ChartBarInteractive() {
  const [active, setActive] = useState<SeriesKey>("desktop");
  const labelId = useId();
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
          <BarChart
            key={active}
            title={`${series[active].label} visitors a week, April to June 2026`}
            summary={`${series[active].total.toLocaleString("en-GB")} ${series[active].label.toLowerCase()} visitors over 13 weeks. Use the table view for each week's figure.`}
            data={data}
            categoryKey="week"
            series={[{ key: active, label: series[active].label }]}
          />
        </CardContent>
      </Card>
    </main>
  );
}
