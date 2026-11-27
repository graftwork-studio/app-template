"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AreaChart,
  Badge,
  BarChart,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Combobox,
  ComboboxItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Input,
  InputGroup,
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemMedia,
  ItemTitle,
  NativeSelect,
  NativeSelectOption,
  Progress,
  Radio,
  RadioGroup,
  RadialChart,
  Select,
  SelectItem,
  Separator,
  Slider,
  Tab,
  TabList,
  TabPanel,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  Textarea,
  ToggleGroup,
  ToggleGroupItem,
} from "@graftwork/ui";
import { parseDate } from "@internationalized/date";
import {
  CalendarIcon,
  ChevronRightIcon,
  EllipsisIcon,
  GaugeIcon,
  RefreshCwIcon,
  RepeatIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import * as React from "react";

/** Money cards. Sample only: the accounts, funds, people and figures are placeholders to replace. */

const pounds = (value: number, digits = 2) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

/** A small "close" button for a card's header. */
function CloseButton({ label }: { label: string }) {
  return (
    <Button variant="ghost" size="sm" aria-label={label} className="shrink-0">
      <XIcon aria-hidden />
    </Button>
  );
}

/** A label and value on one line, as a description list row. */
function Row({
  term,
  value,
  strong = false,
  divider = false,
}: {
  term: string;
  value: string;
  strong?: boolean;
  /** A line above the row, to set a total apart. */
  divider?: boolean;
}) {
  return (
    <div className={`flex items-center justify-between gap-4 text-sm ${divider ? "border-t border-border-default pt-3" : ""}`}>
      <dt className={strong ? "font-medium" : "text-text-secondary"}>{term}</dt>
      <dd className={`tabular-nums ${strong ? "font-semibold" : "font-medium"}`}>{value}</dd>
    </div>
  );
}

const contributions = [
  { month: "Dec", amount: 800 },
  { month: "Jan", amount: 1100 },
  { month: "Feb", amount: 900 },
  { month: "Mar", amount: 1300 },
  { month: "Apr", amount: 750 },
  { month: "May", amount: 1400 },
];

export function ContributionHistory() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <BarChart
          title="Contribution history"
          summary="Monthly contributions over the last six months ranged from £750 in April to £1,400 in May."
          data={contributions}
          categoryKey="month"
          series={[{ key: "amount", label: "Contribution" }]}
          labels="none"
          formatValue={(value) => pounds(value, 0)}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Upcoming", "25 May 2026", "£1,000 scheduled"],
            ["Auto-save plan", "Accelerated", "Recurring weekly"],
          ].map(([label, value, detail]) => (
            <Item key={label} variant="muted" className="flex-col items-stretch">
              <ItemContent className="gap-1">
                <ItemDescription className="text-xs font-medium uppercase">{label}</ItemDescription>
                <p className="text-lg font-semibold">{value}</p>
                <p className="text-sm text-text-secondary">{detail}</p>
              </ItemContent>
            </Item>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View full report</Button>
      </CardFooter>
    </Card>
  );
}

const dividends = [
  { name: "Growth fund", shares: "450 shares", amount: 1842.1 },
  { name: "Index fund", shares: "112 shares", amount: 928.4 },
  { name: "Tech share", shares: "85 shares", amount: 340 },
  { name: "Property trust", shares: "320 shares", amount: 1139.5 },
];

export function DividendIncome() {
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle>Q2 dividend income</CardTitle>
          <CardDescription>Quarterly dividend payouts across your holdings.</CardDescription>
        </div>
        <CloseButton label="Close dividend income" />
      </CardHeader>
      <CardContent>
        <ItemGroup>
          {dividends.map((holding) => (
            <Item key={holding.name} variant="muted">
              <ItemContent>
                <ItemTitle>{holding.name}</ItemTitle>
                <ItemDescription>{holding.shares}</ItemDescription>
              </ItemContent>
              <span className="text-sm font-semibold tabular-nums">{pounds(holding.amount)}</span>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}

export function IndexInvesting() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pound-cost averaging</CardTitle>
        <CardDescription>A strategy for building wealth over time.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text-secondary">
          <a href="#over-time">Over time</a>, this smooths out the average cost of your investments. When prices drop,
          your fixed amount buys more shares. When prices rise, you buy fewer. The result is a lower average cost per
          share than investing a lump sum when prices are volatile.
        </p>
      </CardContent>
    </Card>
  );
}

const currencies = [
  ["gbp", "GBP — Pound sterling"],
  ["eur", "EUR — Euro"],
  ["usd", "USD — US dollar"],
  ["jpy", "JPY — Japanese yen"],
] as const;

export function PayoutThreshold() {
  const [amount, setAmount] = React.useState(2500);
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle>Payout threshold</CardTitle>
          <CardDescription>Set the balance you need before we send a payout.</CardDescription>
        </div>
        <CloseButton label="Close payout threshold" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Select label="Preferred currency" defaultSelectedKey="gbp">
          {currencies.map(([id, label]) => (
            <SelectItem key={id} id={id}>
              {label}
            </SelectItem>
          ))}
        </Select>
        <Slider
          label="Minimum payout"
          description="From £50 to £10,000"
          value={amount}
          onChange={setAmount}
          minValue={50}
          maxValue={10000}
          step={50}
          formatOptions={{ style: "currency", currency: "GBP" }}
        />
        <Textarea label="Notes" placeholder="Add any notes for this payout…" rows={4} />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save threshold</Button>
      </CardFooter>
    </Card>
  );
}

export function ClaimableBalance() {
  return (
    <Card>
      <CardHeader className="gap-2">
        <CardDescription>Claimable balance</CardDescription>
        <p className="text-4xl leading-heading font-semibold tabular-nums">£0.00</p>
        <Badge variant="warning" className="self-start">
          Pending setup
        </Badge>
      </CardHeader>
      <CardContent>
        <Item variant="muted" className="flex-col items-stretch">
          <dl className="flex w-full flex-col gap-3">
            <Row term="Net royalties" value="£0.00" />
            <Row term="Processing fee" value="−£0.00" />
            <Row divider term="Total ready to claim" value="£0.00" strong />
          </dl>
        </Item>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-text-secondary">
          Once your bank is connected, balances over £10.00 are paid out on the 15th of each month.
        </p>
      </CardFooter>
    </Card>
  );
}

export function SavingsProgress() {
  return (
    <Card>
      <CardContent>
        <RadialChart
          title="Savings goal"
          summary="£24,000 saved of a £30,000 goal, 80%."
          data={[{ goal: "Saved", amount: 24000 }]}
          categoryKey="goal"
          series={[{ key: "amount", label: "Saved" }]}
          max={30000}
          totalLabel="80% of £30,000"
          formatValue={(value) => pounds(value, 0)}
        />
      </CardContent>
      <CardFooter>
        <dl className="flex w-full flex-col">
          {[
            ["Projected finish", "October 2026"],
            ["Monthly average", "£1,250"],
            ["Top contributor", "Auto-transfer"],
          ].map(([term, value], index) => (
            <div
              key={term}
              className={`flex items-center justify-between py-3 text-sm ${index > 0 ? "border-t border-border-default" : ""}`}
            >
              <dt className="text-text-secondary">{term}</dt>
              <dd className="font-semibold tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </CardFooter>
    </Card>
  );
}

const targets = [
  { name: "Retirement", goal: "£420,000", saved: "£273,000", percent: 65 },
  { name: "Property", goal: "£85,000", saved: "£27,200", percent: 32 },
];

export function SavingsTargets() {
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle>Savings targets</CardTitle>
          <CardDescription>Active milestones for 2026</CardDescription>
        </div>
        <Button variant="secondary" size="sm">
          New goal
        </Button>
      </CardHeader>
      <CardContent>
        <ItemGroup className="gap-3">
          {targets.map((target) => (
            <Item key={target.name} variant="muted" className="flex-col items-stretch">
              <ItemContent className="gap-3">
                <p className="text-3xl font-semibold tabular-nums">{target.goal}</p>
                <Progress label={target.name} value={target.percent} />
              </ItemContent>
              <ItemFooter>
                <span className="text-sm text-text-secondary">{target.percent}% achieved</span>
                <span className="text-sm font-medium tabular-nums">{target.saved}</span>
              </ItemFooter>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
      <CardFooter>
        <p className="w-full text-center text-sm text-text-secondary">You haven’t met your targets for this year.</p>
      </CardFooter>
    </Card>
  );
}

export function BuyInvestment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buy an investment</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <InputGroup label="Amount to invest" defaultValue="1,000.00" startAddon="£" inputMode="decimal" />
        <NativeSelect
          label="Order type"
          defaultValue="market"
          description="Market orders are placed at the current price."
        >
          <NativeSelectOption value="market">Market order</NativeSelectOption>
          <NativeSelectOption value="limit">Limit order</NativeSelectOption>
          <NativeSelectOption value="stop">Stop order</NativeSelectOption>
        </NativeSelect>
        <dl className="flex flex-col gap-2">
          <Row term="Estimated shares" value="1.95" />
          <Row term="Buying power" value="£12,450.00" />
        </dl>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button className="w-full">Review order</Button>
        <p className="text-center text-sm text-text-secondary">
          Trades usually go through within minutes while the market is open.
        </p>
      </CardFooter>
    </Card>
  );
}

const transactions = [
  {
    id: "coffee",
    merchant: "Corner café",
    category: "Food and drink",
    date: "Today, 10:24",
    amount: "−£6.50",
  },
  {
    id: "groceries",
    merchant: "Grocer",
    category: "Groceries",
    date: "Yesterday",
    amount: "−£142.30",
  },
  {
    id: "payout",
    merchant: "Client payout",
    category: "Income",
    date: "12 Oct",
    amount: "+£4,200.00",
  },
  {
    id: "streaming",
    merchant: "Streaming service",
    category: "Subscriptions",
    date: "10 Oct",
    amount: "−£15.99",
  },
  {
    id: "fuel",
    merchant: "Petrol station",
    category: "Transport",
    date: "9 Oct",
    amount: "−£58.20",
  },
];

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle>Recent transactions</CardTitle>
          <CardDescription>Your latest account activity.</CardDescription>
        </div>
        <Button variant="secondary" size="sm">
          View all
        </Button>
      </CardHeader>
      <CardContent>
        <Table aria-label="Recent transactions" density="compact">
          <TableHeader>
            <TableColumn isRowHeader>Merchant</TableColumn>
            <TableColumn className="text-right">Amount</TableColumn>
            <TableColumn>
              <span className="sr-only">Actions</span>
            </TableColumn>
          </TableHeader>
          <TableBody items={transactions}>
            {(row) => (
              <TableRow>
                <TableCell>
                  <span className="flex flex-col">
                    <span className="font-medium">{row.merchant}</span>
                    <span className="text-xs text-text-secondary">
                      {row.category} · {row.date}
                    </span>
                  </span>
                </TableCell>
                <TableCell className="text-right font-semibold tabular-nums">{row.amount}</TableCell>
                <TableCell className="w-10">
                  <DropdownMenu>
                    <Button variant="ghost" size="sm" aria-label={`${row.merchant} options`}>
                      <EllipsisIcon aria-hidden />
                    </Button>
                    <DropdownMenuContent aria-label={`${row.merchant} options`} placement="bottom end">
                      <DropdownMenuItem id="details">View details</DropdownMenuItem>
                      <DropdownMenuItem id="note">Add note</DropdownMenuItem>
                      <DropdownMenuItem id="categorise">Categorise</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem id="dispute">Dispute</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

const paymentLinks = [
  {
    icon: GaugeIcon,
    title: "Change transfer limit",
    description: "Adjust how much you can send from your balance.",
  },
  {
    icon: CalendarIcon,
    title: "Scheduled transfers",
    description: "Set up a transfer to send at a later date.",
  },
  {
    icon: RepeatIcon,
    title: "Direct Debits",
    description: "Set up and manage regular payments.",
  },
  {
    icon: RefreshCwIcon,
    title: "Recurring card payments",
    description: "Manage your repeated card payments.",
  },
];

export function Payments() {
  return (
    <Card>
      <CardHeader className="gap-3">
        <Breadcrumb aria-label="Payments breadcrumb">
          <BreadcrumbItem href="#home">Home</BreadcrumbItem>
          <BreadcrumbItem href="#account">Account</BreadcrumbItem>
          <BreadcrumbItem>Payments</BreadcrumbItem>
        </Breadcrumb>
        <CardTitle>Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          {paymentLinks.map((link) => (
            <Item key={link.title} variant="muted" href={`#${link.title.toLowerCase().replaceAll(" ", "-")}`}>
              <ItemMedia variant="icon">
                <link.icon aria-hidden />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{link.title}</ItemTitle>
                <ItemDescription>{link.description}</ItemDescription>
              </ItemContent>
              <ChevronRightIcon aria-hidden className="size-4 shrink-0 text-icon-default" />
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}

const holdings = [
  {
    ticker: "GRW",
    name: "Global growth fund",
    type: "Fund",
    added: "Jan 2021",
    shares: "112",
    value: "£48,230.40",
  },
  {
    ticker: "DIV",
    name: "Dividend income fund",
    type: "Fund",
    added: "Mar 2022",
    shares: "450",
    value: "£26,033.79",
  },
  {
    ticker: "TEC",
    name: "Tech share",
    type: "Share",
    added: "Nov 2020",
    shares: "85",
    value: "£18,488.90",
  },
  {
    ticker: "PRP",
    name: "Property trust",
    type: "Trust",
    added: "Jun 2023",
    shares: "320",
    value: "£15,136.59",
  },
];

export function Holdings() {
  return (
    <Card>
      <CardHeader className="gap-3">
        <CardTitle>Holdings</CardTitle>
        <InputGroup
          label="Search holdings"
          placeholder="Search holdings or tickers…"
          startAddon={<SearchIcon aria-hidden />}
        />
        <ToggleGroup aria-label="Holding type" defaultSelectedKeys={["fund"]} variant="secondary" spacing={1}>
          <ToggleGroupItem id="share">Shares</ToggleGroupItem>
          <ToggleGroupItem id="fund">Funds</ToggleGroupItem>
          <ToggleGroupItem id="trust">Trusts</ToggleGroupItem>
        </ToggleGroup>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          {holdings.map((holding) => (
            <Item key={holding.ticker} variant="muted" className="flex-wrap">
              <ItemMedia>
                <span className="flex size-12 items-center justify-center rounded-lg border border-border-default text-sm font-semibold">
                  {holding.ticker}
                </span>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{holding.name}</ItemTitle>
                <ItemDescription className="text-xs">
                  {holding.shares} shares · {holding.added}
                </ItemDescription>
              </ItemContent>
              <div className="flex shrink-0 items-center gap-4">
                <Badge variant="outline">{holding.type}</Badge>
                <p className="flex flex-col items-end">
                  <span className="text-xs text-text-secondary">Value</span>
                  <span className="font-medium tabular-nums">{holding.value}</span>
                </p>
              </div>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}

const activity = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
  (month, index) => ({
    month,
    amount: [40, 55, 35, 60, 45, 50, 65, 40, 55, 70, 45, 80][index] ?? 0,
  }),
);

export function CardOverview() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card>
        <CardContent className="flex flex-col gap-1">
          <CardDescription>Card balance</CardDescription>
          <p className="text-2xl font-semibold tabular-nums">£12.94</p>
          <CardDescription className="tabular-nums">£11,337.06 available</CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex h-full flex-col justify-between gap-3">
          <div className="flex flex-col gap-1">
            <CardDescription>Payment due</CardDescription>
            <p className="text-2xl font-semibold">1 Apr</p>
          </div>
          <Button variant="secondary" size="sm" className="w-full">
            Pay early
          </Button>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardContent className="flex flex-col gap-2">
          <Badge variant="neutral" className="self-start">
            +£0.25 daily cashback
          </Badge>
          <BarChart
            title="Yearly activity"
            summary="Card spending was highest in December and lowest in March."
            data={activity}
            categoryKey="month"
            series={[{ key: "amount", label: "Activity" }]}
            labels="none"
            formatCategory={(month) => month.slice(0, 1)}
            formatValue={(value) => pounds(value, 0)}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export function TransferFunds() {
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle>Transfer money</CardTitle>
          <CardDescription>Move money between your accounts.</CardDescription>
        </div>
        <CloseButton label="Close transfer" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <InputGroup label="Amount to transfer" defaultValue="1,200.00" startAddon="£" inputMode="decimal" />
        <Select label="From" defaultSelectedKey="current">
          <SelectItem id="current">Current account (··8402) — £12,450.00</SelectItem>
          <SelectItem id="business">Business (··7731) — £8,920.00</SelectItem>
        </Select>
        <Select label="To" defaultSelectedKey="savings">
          <SelectItem id="savings">Easy-access savings (··1192) — £42,100.00</SelectItem>
          <SelectItem id="isa">Stocks and shares ISA (··3349) — £18,200.00</SelectItem>
        </Select>
        <Item variant="muted" className="flex-col items-stretch">
          <dl className="flex w-full flex-col gap-3">
            <Row term="Estimated arrival" value="Today, 14 Apr" />
            <Row divider term="Fee" value="£0.00" />
            <Row divider term="Total" value="£1,200.00" strong />
          </dl>
        </Item>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Confirm transfer</Button>
      </CardFooter>
    </Card>
  );
}

export function ReceivingMethod() {
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardDescription>Payout preferences</CardDescription>
          <CardTitle>How you’re paid</CardTitle>
        </div>
        <CloseButton label="Close payout preferences" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input label="Account holder name" defaultValue="Northwind Music Ltd" autoComplete="name" />
        <RadioGroup label="Receiving method" defaultValue="bank">
          <Radio value="bank">Bank transfer (sort code and account number)</Radio>
          <Radio value="wallet">Digital wallet (instant payout)</Radio>
        </RadioGroup>
        <Input label="Account number" placeholder="12345678" inputMode="numeric" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" isDisabled>
          Save payout settings
        </Button>
      </CardFooter>
    </Card>
  );
}

export function UpcomingPayments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming payments</CardTitle>
        <CardDescription>Select a date to see scheduled payments.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Item variant="outline" className="justify-center">
          <Calendar aria-label="Payment date" defaultValue={parseDate("2026-04-15")} />
        </Item>
        <ItemGroup>
          {[
            ["Streaming subscription", "15 Apr 2026", "£19.99"],
            ["Rent", "1 Apr 2026", "£2,400.00"],
            ["Car insurance", "22 Apr 2026", "£186.00"],
          ].map(([title, date, amount]) => (
            <Item key={title} variant="muted">
              <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{date}</ItemDescription>
              </ItemContent>
              <Badge variant="neutral">{amount}</Badge>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}

const funds = ["GRW", "DIV", "TEC", "PRP", "BND", "EMG", "SML"];
const prices: Record<string, number[]> = {
  GRW: [412, 438, 395, 450, 420, 462],
  TEC: [185, 210, 172, 198, 178, 215],
};
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export function StockPerformance() {
  const [ticker, setTicker] = React.useState("GRW");
  const values = prices[ticker] ?? [100, 118, 95, 125, 108, 130];
  const data = months.map((month, index) => ({
    month,
    price: values[index] ?? 0,
  }));
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <Combobox
          label="Ticker"
          placeholder="Search tickers…"
          emptyMessage="No tickers found."
          selectedKey={ticker}
          onSelectionChange={(key) => {
            if (key !== null) setTicker(String(key));
          }}
        >
          {funds.map((fund) => (
            <ComboboxItem key={fund} id={fund}>
              {fund}
            </ComboboxItem>
          ))}
        </Combobox>
        <Separator />
        <AreaChart
          title={`${ticker} price, January to June 2026`}
          summary={`${ticker} ranged from ${pounds(Math.min(...values), 0)} to ${pounds(Math.max(...values), 0)} over six months.`}
          data={data}
          categoryKey="month"
          series={[{ key: "price", label: "Price" }]}
          fill="gradient"
          formatValue={(value) => pounds(value, 0)}
        />
      </CardContent>
    </Card>
  );
}

export function NewMilestone() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Set a new milestone</CardTitle>
        <CardDescription>Choose a target and we’ll help you pace your savings.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input label="Goal name" placeholder="For example, a new car or a house deposit" />
        <div className="grid grid-cols-2 gap-3">
          <InputGroup label="Target amount" defaultValue="15,000" startAddon="£" inputMode="decimal" />
          <Input label="Target date" defaultValue="Dec 2026" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Create goal</Button>
        <Button variant="secondary" className="w-full">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  );
}

const notifications = [
  {
    id: "transactions",
    label: "Transaction alerts",
    description: "Deposits, withdrawals and transfers.",
  },
  {
    id: "security",
    label: "Security alerts",
    description: "Sign-in attempts and account changes.",
  },
  {
    id: "goals",
    label: "Goal milestones",
    description: "Updates at 25%, 50%, 75% and 100%.",
  },
  {
    id: "market",
    label: "Market updates",
    description: "A daily portfolio summary and price alerts.",
  },
];

export function NotificationSettings() {
  const [selected, setSelected] = React.useState<string[]>(["transactions", "security"]);
  const all = selected.length === notifications.length;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose what you want to hear about.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Checkbox
          isSelected={all}
          isIndeterminate={!all && selected.length > 0}
          onChange={(value) => setSelected(value ? notifications.map((n) => n.id) : [])}
        >
          Select all
        </Checkbox>
        {notifications.map((n) => (
          <div key={n.id} className="flex flex-col gap-1">
            <Checkbox
              isSelected={selected.includes(n.id)}
              onChange={(value) => setSelected((prev) => (value ? [...prev, n.id] : prev.filter((id) => id !== n.id)))}
              aria-describedby={`notify-${n.id}-hint`}
            >
              {n.label}
            </Checkbox>
            <p id={`notify-${n.id}-hint`} className="pl-6 text-sm text-text-secondary">
              {n.description}
            </p>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save preferences</Button>
      </CardFooter>
    </Card>
  );
}

const faqs = {
  general: [
    [
      "How secure is my financial data?",
      "We encrypt your data in transit and at rest, and never store your bank sign-in details.",
    ],
    ["How do I connect my bank accounts?", "Go to Settings, then Linked accounts, and search for your bank."],
    ["Can I export my data for tax?", "Yes. Go to Reports, then Tax export, to download a CSV or PDF summary."],
  ],
  billing: [
    [
      "What’s the difference between Basic and Pro?",
      "Basic covers budgets, goals and up to 3 linked accounts. Pro adds unlimited accounts and dividend tracking.",
    ],
    [
      "How do I cancel?",
      "Go to Settings, then Billing, then Manage plan. You keep access until the end of the billing period.",
    ],
    ["Is there a free trial?", "Yes. Every new account starts with a 14-day Pro trial. No card needed."],
  ],
  goals: [
    ["How do I set up a goal?", "Select New goal on the Savings targets card, then choose an amount and a date."],
    ["Can I track several goals?", "Yes. Pro accounts can track unlimited goals; Basic accounts up to 3."],
    ["How are monthly amounts worked out?", "We divide what’s left by the months until your target date."],
  ],
} as const;

export function Faq() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultSelectedKey="general" className="flex flex-col gap-2">
          <TabList aria-label="Question topics">
            <Tab id="general">General</Tab>
            <Tab id="billing">Billing</Tab>
            <Tab id="goals">Goals</Tab>
          </TabList>
          {(Object.keys(faqs) as (keyof typeof faqs)[]).map((topic) => (
            <TabPanel key={topic} id={topic}>
              <Accordion>
                {faqs[topic].map(([question, answer], index) => (
                  <AccordionItem key={question} id={`${topic}-${index}`}>
                    <AccordionTrigger level={3}>{question}</AccordionTrigger>
                    <AccordionContent>{answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
          ))}
        </Tabs>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="secondary" className="w-full">
          Contact support
        </Button>
        <a href="#learn-more" className="text-sm">
          Learn more
        </a>
      </CardFooter>
    </Card>
  );
}
