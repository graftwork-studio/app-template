"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, PieChart, Select, SelectItem } from "@graftwork/ui";
import { useState } from "react";

/*
 * chart-pie-interactive: a donut chart with a control to highlight a month.
 * Rebuilt from shadcn/ui's chart-pie-interactive block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the figures are placeholders to replace.
 * Upstream charts five months; PieChart draws up to four slices. The chosen month is drawn
 * larger, its table row says "(highlighted)", and the total in the middle is that month's.
 */

type Row = { month: string; desktop: number };

const data: [Row, ...Row[]] = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 173 },
];

export default function ChartPieInteractive() {
  const [month, setMonth] = useState("January");
  const selected = data.find((row) => row.month === month) ?? data[0];
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl leading-heading font-semibold">Analytics</h1>
      <Card>
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1">
            <CardTitle>Desktop visitors</CardTitle>
            <CardDescription>January to April 2026.</CardDescription>
          </div>
          <Select
            label="Month"
            className="sm:w-48"
            selectedKey={month}
            onSelectionChange={(key) => {
              if (key !== null) setMonth(String(key));
            }}
          >
            {data.map((row) => (
              <SelectItem key={row.month} id={row.month}>
                {row.month}
              </SelectItem>
            ))}
          </Select>
        </CardHeader>
        <CardContent>
          <PieChart
            title={`Desktop visitors: ${selected.month} highlighted`}
            summary={`${selected.month} brought ${selected.desktop} of the 901 desktop visitors from January to April.`}
            data={data}
            categoryKey="month"
            series={[{ key: "desktop", label: "Desktop" }]}
            variant="donut"
            highlight={selected.month}
            headingLevel={3}
          />
        </CardContent>
      </Card>
    </main>
  );
}
