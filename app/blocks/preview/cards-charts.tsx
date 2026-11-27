"use client";

import {
  AreaChart,
  Badge,
  BarChart,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
  PieChart,
  Progress,
} from "@graftwork/ui";

/** Chart and figure cards. Sample only: the figures are placeholders to replace. */

const months = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const desktopTotal = months.reduce((sum, row) => sum + row.desktop, 0);
const mobileTotal = months.reduce((sum, row) => sum + row.mobile, 0);
const mixDelta = Math.round(((desktopTotal - mobileTotal) / mobileTotal) * 100);

export function TrafficChannels() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <BarChart
          title="Traffic channels"
          summary={`Desktop brought ${desktopTotal.toLocaleString("en-GB")} visits from January to June 2026 and mobile ${mobileTotal.toLocaleString("en-GB")}. Desktop led in every month except April.`}
          data={months}
          categoryKey="month"
          series={[
            { key: "desktop", label: "Desktop" },
            { key: "mobile", label: "Mobile" },
          ]}
          labels="none"
        />
        <dl className="grid grid-cols-3 divide-x divide-border-default text-center">
          {[
            ["Desktop", desktopTotal.toLocaleString("en-GB")],
            ["Mobile", mobileTotal.toLocaleString("en-GB")],
            ["Mix difference", `+${mixDelta}%`],
          ].map(([term, value]) => (
            <div key={term} className="flex flex-col-reverse px-2">
              <dt className="text-xs text-text-secondary">{term}</dt>
              <dd className="text-sm font-medium tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View report</Button>
      </CardFooter>
    </Card>
  );
}

const browsers = [
  { browser: "Browser A", visitors: 275 },
  { browser: "Browser B", visitors: 200 },
  { browser: "Browser C", visitors: 287 },
  { browser: "Other", visitors: 173 },
];
const browserTotal = browsers.reduce((sum, row) => sum + row.visitors, 0);
const topShare = Math.round((287 / browserTotal) * 100);

export function BrowserShare() {
  return (
    <Card>
      <CardContent>
        <PieChart
          title="Browser share, January to June 2026"
          summary={`Browser C brought the most visitors, 287 of ${browserTotal}, followed by Browser A with 275.`}
          data={browsers}
          categoryKey="browser"
          series={[{ key: "visitors", label: "Visitors" }]}
          variant="donut"
          totalLabel="Visitors"
        />
      </CardContent>
      <CardFooter>
        <Progress label="Browser C" value={topShare} className="w-full" />
      </CardFooter>
    </Card>
  );
}

const sleep = [
  { hour: "22:00", deep: 0, light: 30, rem: 0 },
  { hour: "23:00", deep: 20, light: 10, rem: 0 },
  { hour: "00:00", deep: 40, light: 0, rem: 10 },
  { hour: "01:00", deep: 30, light: 5, rem: 15 },
  { hour: "02:00", deep: 10, light: 20, rem: 30 },
  { hour: "03:00", deep: 25, light: 10, rem: 20 },
  { hour: "04:00", deep: 15, light: 25, rem: 10 },
  { hour: "05:00", deep: 5, light: 35, rem: 15 },
  { hour: "06:00", deep: 0, light: 20, rem: 25 },
];

export function SleepReport() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <BarChart
          title="Sleep last night: 7h 24m"
          summary="Deep sleep peaked at midnight, REM sleep at 2am, and light sleep grew towards morning."
          data={sleep}
          categoryKey="hour"
          series={[
            { key: "deep", label: "Deep" },
            { key: "light", label: "Light" },
            { key: "rem", label: "REM" },
          ]}
          stacking="stacked"
          labels="none"
          formatValue={(value) => `${value} min`}
        />
        <dl className="grid grid-cols-4 gap-2 text-center">
          {[
            ["Deep", "2h 10m"],
            ["Light", "3h 48m"],
            ["REM", "1h 26m"],
            ["Score", "84"],
          ].map(([term, value]) => (
            <div key={term} className="flex flex-col-reverse">
              <dt className="text-xs text-text-secondary">{term}</dt>
              <dd className="text-sm font-medium tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
      <CardFooter>
        <Badge variant="outline">Good</Badge>
        <Button variant="secondary" size="sm" className="ml-auto">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Analytics() {
  return (
    <Card>
      <CardHeader className="flex-row flex-wrap items-center justify-between gap-2">
        <p className="flex items-center gap-2 text-sm text-text-secondary">
          418.2K visitors <Badge variant="success">+10%</Badge>
        </p>
        <Button variant="secondary" size="sm">
          View analytics
        </Button>
      </CardHeader>
      <CardContent>
        <AreaChart
          title="Analytics"
          summary="Visitors peaked at 305 in February, fell to 73 in April and recovered to 214 in June."
          data={months}
          categoryKey="month"
          series={[{ key: "desktop", label: "Visitors" }]}
          curve="linear"
        />
      </CardContent>
    </Card>
  );
}

export function Visitors() {
  const change = Math.round(((214 - 209) / 209) * 100);
  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <Badge variant="neutral" className="self-start">
          +{change}% on last month
        </Badge>
        <AreaChart
          title="Visitors, last 6 months"
          summary="Desktop visitors peaked at 305 in February and were 214 in June."
          data={months}
          categoryKey="month"
          series={[{ key: "desktop", label: "Desktop" }]}
          fill="gradient"
        />
      </CardContent>
    </Card>
  );
}

/* Literal classes, so Tailwind generates them. */
const week = [
  { day: "M", name: "Monday", load: 84, height: "h-[84%]" },
  { day: "T", name: "Tuesday", load: 52, height: "h-[52%]" },
  { day: "W", name: "Wednesday", load: 73, height: "h-[73%]" },
  { day: "T", name: "Thursday", load: 66, height: "h-[66%]" },
  { day: "F", name: "Friday", load: 91, height: "h-[91%]" },
  { day: "S", name: "Saturday", load: 48, height: "h-[48%]" },
  { day: "S", name: "Sunday", load: 61, height: "h-[61%]" },
];

export function WeeklyFitness() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly fitness summary</CardTitle>
        <CardDescription>Workout load by day, as a percentage of your target</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-7 gap-1.5">
          {week.map((day) => (
            <li key={day.name} className="rounded-md border border-border-default p-1.5 text-center">
              <span aria-hidden className="text-sm text-text-secondary">
                {day.day}
              </span>
              <span className="sr-only">
                {day.name}: {day.load}%
              </span>
              <div aria-hidden className="relative mt-1 h-16 overflow-hidden rounded-sm bg-surface-subtle">
                <div className={`absolute inset-x-0 bottom-0 rounded-sm bg-chart-series-3 ${day.height}`} />
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View details</Button>
      </CardFooter>
    </Card>
  );
}

const usage = [
  { name: "Edge requests", value: "£1.83K", percentage: 67 },
  { name: "Data transfer", value: "£952.51", percentage: 52 },
  { name: "Monitoring data points", value: "£901.20", percentage: 89 },
  { name: "Analytics events", value: "£603.71", percentage: 46 },
  { name: "Cache writes", value: "524.52K / 2M", percentage: 26 },
  { name: "Function duration", value: "5.11 / 1K GB-hrs", percentage: 5 },
];

const CIRCUMFERENCE = 2 * Math.PI * 42.5;

/** A small decorative gauge: the percentage is also given as text. */
function Gauge({ percentage }: { percentage: number }) {
  const filled = (percentage / 100) * CIRCUMFERENCE;
  return (
    <svg aria-hidden width="16" height="16" viewBox="0 0 100 100" fill="none" className="-rotate-90 text-icon-default">
      <circle cx="50" cy="50" r="42.5" strokeWidth="12" stroke="currentColor" className="opacity-25" />
      <circle
        cx="50"
        cy="50"
        r="42.5"
        strokeWidth="12"
        strokeLinecap="round"
        stroke="currentColor"
        strokeDasharray={`${filled} ${CIRCUMFERENCE}`}
      />
    </svg>
  );
}

export function Usage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">5 days left in this billing cycle</CardTitle>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          {usage.map((item) => (
            <Item key={item.name} href="#usage" size="xs">
              <ItemMedia>
                <Gauge percentage={item.percentage} />
              </ItemMedia>
              <ItemContent className="min-w-0">
                <ItemTitle className="truncate">
                  {item.name}
                  <span className="sr-only">, {item.percentage}% used</span>
                </ItemTitle>
              </ItemContent>
              <ItemActions>
                <span className="font-mono text-xs font-medium text-text-secondary tabular-nums">{item.value}</span>
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}
