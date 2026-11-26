"use client";

import { AreaChart, Card, CardContent, CardDescription, CardHeader, CardTitle, Select, SelectItem } from "@graftwork/ui";
import { useState } from "react";
import { visitors } from "./data";

const ranges = {
  "90d": { label: "Last 3 months", days: 90 },
  "30d": { label: "Last 30 days", days: 30 },
  "7d": { label: "Last 7 days", days: 7 },
} as const;
type RangeKey = keyof typeof ranges;

export function VisitorsChart() {
  const [range, setRange] = useState<RangeKey>("90d");
  const data = visitors.slice(-ranges[range].days);
  const totals = data.map((day) => day.desktop + day.mobile);
  const total = totals.reduce((sum, value) => sum + value, 0);
  return (
    <Card>
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-1">
          <CardTitle>Total visitors</CardTitle>
          <CardDescription>Total for the {ranges[range].label.toLowerCase()}</CardDescription>
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
          fill="gradient"
          series={[
            { key: "desktop", label: "Desktop" },
            { key: "mobile", label: "Mobile" },
          ]}
        />
      </CardContent>
    </Card>
  );
}
