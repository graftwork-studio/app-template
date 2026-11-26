import { Badge, Card, CardFooter, CardHeader, CardTitle } from "@graftwork/ui";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

/** Sample figures. Replace them with your own. */
const cards = [
  { title: "Total revenue", value: "£1,250.00", change: "+12.5%", up: true, headline: "Trending up this month", detail: "Visitors for the last 6 months" },
  { title: "New customers", value: "1,234", change: "−20%", up: false, headline: "Down 20% this period", detail: "Acquisition needs attention" },
  { title: "Active accounts", value: "45,678", change: "+12.5%", up: true, headline: "Strong user retention", detail: "Engagement exceeds targets" },
  { title: "Growth rate", value: "4.5%", change: "+4.5%", up: true, headline: "Steady performance increase", detail: "Meets growth projections" },
];

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {cards.map((card) => {
        const Trend = card.up ? TrendingUpIcon : TrendingDownIcon;
        return (
          <Card key={card.title}>
            <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-2">
              <div className="flex flex-col gap-1">
                <CardTitle className="text-sm font-normal text-text-secondary">{card.title}</CardTitle>
                <p className="text-2xl leading-heading font-semibold tabular-nums">{card.value}</p>
              </div>
              <Badge variant="outline">
                <Trend aria-hidden />
                <span className="sr-only">{card.up ? "Up" : "Down"}</span>
                {card.change}
              </Badge>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <p className="flex items-center gap-2 font-medium">
                {card.headline}
                <Trend aria-hidden className="size-4" />
              </p>
              <p className="text-text-secondary">{card.detail}</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
