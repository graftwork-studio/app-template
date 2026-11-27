"use client";

import {
  BarChart,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Empty,
  Input,
  InputGroup,
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  Progress,
  QrCode,
  Select,
  SelectItem,
  Separator,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  ToggleGroup,
  ToggleGroupItem,
} from "@graftwork/ui";
import {
  ActivityIcon,
  ArrowLeftRightIcon,
  ArrowRightIcon,
  AudioLinesIcon,
  BellIcon,
  BookOpenIcon,
  Building2Icon,
  CircleAlertIcon,
  CircleHelpIcon,
  CreditCardIcon,
  FileChartColumnIcon,
  FileTextIcon,
  GlobeIcon,
  ImageIcon,
  LayoutDashboardIcon,
  LinkIcon,
  LockIcon,
  LockKeyholeIcon,
  MessageSquareIcon,
  PaintbrushIcon,
  PieChartIcon,
  PlusIcon,
  ShieldIcon,
  SunIcon,
  TargetIcon,
  ThermometerIcon,
  TimerIcon,
  TrendingUpIcon,
  UserIcon,
  VideoIcon,
  Volume2Icon,
  WalletIcon,
  type LucideIcon,
} from "lucide-react";
import * as React from "react";

/** Home, music and account cards. Sample only: the names, devices and figures are placeholders to replace. */

export function EmptyDistributeTrack() {
  return (
    <Card>
      <CardContent>
        <Empty
          icon={<PlusIcon />}
          title="Release a track"
          description="Upload your first master to start reaching listeners on streaming services."
          action={<Button>Create release</Button>}
        />
      </CardContent>
    </Card>
  );
}

export function EmptyConnectBank() {
  return (
    <Card>
      <CardContent>
        <Empty
          icon={<CreditCardIcon />}
          title="Connect your bank"
          description="Link a payout method to receive monthly royalty payments automatically."
          action={<Button>Set up payouts</Button>}
        />
      </CardContent>
    </Card>
  );
}

export function EmptyExploreCatalog() {
  return (
    <Card>
      <CardContent>
        <Empty
          icon={<AudioLinesIcon />}
          title="Check your catalogue"
          description="Check your recording codes, details and artwork before you go live."
          action={<Button>View catalogue</Button>}
        />
      </CardContent>
    </Card>
  );
}

export function QrConnect() {
  return (
    <Card>
      <CardContent className="flex justify-center">
        <QrCode value="https://example.com/connect/jd-4829" label="QR code to connect your phone" />
      </CardContent>
      <CardHeader className="text-center">
        <CardTitle>Scan to connect your phone</CardTitle>
        <CardDescription>
          Open the mobile app and scan this code to link your phone. Or enter code{" "}
          <span className="font-mono text-text-default">JD-4829</span> in the app.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Got it
        </Button>
      </CardFooter>
    </Card>
  );
}

export function SyncingState() {
  return (
    <Card>
      <CardContent>
        <Empty
          icon={<Spinner size="sm" label="Syncing" />}
          title="Syncing your accounts"
          description="We’re fetching your latest transactions. This usually takes a few seconds."
          action={<Button variant="secondary">Cancel</Button>}
          className="border-0"
        />
      </CardContent>
    </Card>
  );
}

export function Preferences() {
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Manage your account settings and notifications.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Select label="Default currency" defaultSelectedKey="gbp">
          <SelectItem id="gbp">GBP — Pound sterling</SelectItem>
          <SelectItem id="eur">EUR — Euro</SelectItem>
          <SelectItem id="usd">USD — US dollar</SelectItem>
          <SelectItem id="jpy">JPY — Japanese yen</SelectItem>
        </Select>
        <Separator />
        {[
          ["public-stats", "Public statistics", "Let others see your total streams and listening activity."],
          ["email-reports", "Email notifications", "Monthly royalty reports and payment updates."],
        ].map(([id, label, hint]) => (
          <div key={id} className="flex items-start justify-between gap-4">
            <p id={`${id}-hint`} className="text-sm text-text-secondary">
              {hint}
            </p>
            <Switch defaultSelected aria-describedby={`${id}-hint`} className="shrink-0">
              {label}
            </Switch>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Reset</Button>
        <Button className="ml-auto">Save preferences</Button>
      </CardFooter>
    </Card>
  );
}

const scenes = {
  cooking: { brightness: 90, warmth: 70, volume: 30, fade: 0 },
  dining: { brightness: 50, warmth: 40, volume: 20, fade: 60 },
  nightlight: { brightness: 15, warmth: 20, volume: 0, fade: 80 },
  focus: { brightness: 100, warmth: 85, volume: 0, fade: 0 },
} as const;
type Scene = keyof typeof scenes;
const controls: {
  key: keyof (typeof scenes)[Scene];
  label: string;
  icon: LucideIcon;
}[] = [
  { key: "brightness", label: "Brightness", icon: SunIcon },
  { key: "warmth", label: "Warmth", icon: ThermometerIcon },
  { key: "volume", label: "Volume", icon: Volume2Icon },
  { key: "fade", label: "Fade", icon: TimerIcon },
];

export function KitchenIsland() {
  const [enabled, setEnabled] = React.useState(true);
  const [scene, setScene] = React.useState<Scene>("cooking");
  const [values, setValues] = React.useState<Record<string, number>>({
    ...scenes.cooking,
  });
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle>Kitchen island</CardTitle>
          <CardDescription>Colour ambient lights</CardDescription>
        </div>
        <Switch isSelected={enabled} onChange={setEnabled} className="shrink-0">
          On
        </Switch>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ToggleGroup
          aria-label="Scenes"
          selectedKeys={[scene]}
          onSelectionChange={(keys) => {
            const next = Array.from(keys)[0] as Scene | undefined;
            if (!next) return;
            setScene(next);
            setValues({ ...scenes[next] });
          }}
          disallowEmptySelection
          variant="secondary"
          spacing={1}
          isDisabled={!enabled}
          className="flex-wrap"
        >
          <ToggleGroupItem id="cooking">Cooking</ToggleGroupItem>
          <ToggleGroupItem id="dining">Dining</ToggleGroupItem>
          <ToggleGroupItem id="nightlight">Night light</ToggleGroupItem>
          <ToggleGroupItem id="focus">Focus</ToggleGroupItem>
        </ToggleGroup>
        {controls.map((control) => (
          <div key={control.key} className="flex items-end gap-3">
            <control.icon aria-hidden className="mb-1.5 size-4 shrink-0 text-icon-default" />
            <Slider
              label={control.label}
              value={values[control.key] ?? 0}
              onChange={(value) => setValues((prev) => ({ ...prev, [control.key]: value }))}
              maxValue={100}
              isDisabled={!enabled}
              className="flex-1"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

type NavItem = { label: string; icon: LucideIcon; active?: boolean };

function NavCard({ label, groups }: { label: string; groups: { title: string; items: NavItem[] }[] }) {
  return (
    <Card className="overflow-hidden py-0">
      <SidebarProvider keyboardShortcut={false} className="min-h-0">
        <Sidebar collapsible="none" aria-label={label} className="w-full bg-transparent">
          <SidebarContent className="gap-0">
            {groups.map((group, index) => (
              <React.Fragment key={group.title}>
                {index > 0 ? <SidebarSeparator /> : null}
                <SidebarGroup>
                  <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton
                            href={`#${item.label.toLowerCase().replaceAll(" ", "-")}`}
                            isActive={item.active}
                          >
                            <item.icon aria-hidden />
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </React.Fragment>
            ))}
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </Card>
  );
}

export function SidebarNavOverview() {
  return (
    <NavCard
      label="Money"
      groups={[
        {
          title: "Overview",
          items: [
            { label: "Dashboard", icon: LayoutDashboardIcon, active: true },
            { label: "Transactions", icon: ArrowLeftRightIcon },
            { label: "Investments", icon: TrendingUpIcon },
            { label: "Accounts", icon: Building2Icon },
            { label: "Spending", icon: PieChartIcon },
          ],
        },
        {
          title: "Planning",
          items: [
            { label: "Goals", icon: TargetIcon },
            { label: "Budget", icon: WalletIcon },
            { label: "Reports", icon: FileChartColumnIcon },
            { label: "Documents", icon: FileTextIcon },
          ],
        },
      ]}
    />
  );
}

export function SidebarNavAccount() {
  return (
    <NavCard
      label="Settings"
      groups={[
        {
          title: "Account",
          items: [
            { label: "Profile", icon: UserIcon },
            { label: "Billing", icon: CreditCardIcon, active: true },
            { label: "Notifications", icon: BellIcon },
            { label: "Security", icon: ShieldIcon },
            { label: "Appearance", icon: PaintbrushIcon },
          ],
        },
        {
          title: "Support",
          items: [
            { label: "Help centre", icon: CircleHelpIcon },
            { label: "Contact us", icon: MessageSquareIcon },
            { label: "Documentation", icon: BookOpenIcon },
            { label: "Status", icon: ActivityIcon },
          ],
        },
      ]}
    />
  );
}

export function FrontDoor() {
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle>Front door</CardTitle>
          <CardDescription>Smart lock</CardDescription>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-text-secondary">
          Locked
          <LockIcon aria-hidden className="size-4" />
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative flex aspect-video items-center justify-center rounded-lg bg-surface-subtle">
          <VideoIcon aria-hidden className="size-10 text-icon-default" />
          <span className="sr-only">Camera feed</span>
          <Badge variant="error" className="absolute top-2 right-2">
            Live
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export function AccountAccess() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account access</CardTitle>
        <CardDescription>Update your sign-in details.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input label="Email address" type="email" defaultValue="artist@example.com" autoComplete="email" />
        <div className="flex flex-col gap-1">
          <Input label="Current password" type="password" autoComplete="current-password" />
          <a href="#forgot-password" className="self-end text-sm">
            Forgotten your password?
          </a>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button className="w-full">
          <LockKeyholeIcon aria-hidden />
          Update security
        </Button>
        <Item variant="muted" href="#danger-zone" className="w-full">
          <ItemMedia variant="icon">
            <CircleAlertIcon aria-hidden className="text-text-error" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Danger zone</ItemTitle>
            <ItemDescription>Archive your account and remove your catalogue</ItemDescription>
          </ItemContent>
          <ArrowRightIcon aria-hidden className="size-4 shrink-0" />
        </Item>
      </CardFooter>
    </Card>
  );
}

export function CoverArt() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-sm font-normal text-text-secondary uppercase">Cover art</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex aspect-square items-center justify-center rounded-lg border border-border-default">
          <ImageIcon aria-hidden className="size-10 text-icon-default" />
          <span className="sr-only">No artwork yet</span>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="secondary" className="w-full">
          Upload artwork
        </Button>
        <p className="text-center text-xs text-text-secondary">
          At least 3000 × 3000px
          <br />
          JPEG or PNG only
        </p>
      </CardFooter>
    </Card>
  );
}

export function LoadingCard() {
  return (
    <Card aria-busy="true">
      <span className="sr-only">Loading</span>
      <CardHeader className="gap-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-48" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Skeleton className="h-32 w-full rounded-lg" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-9 flex-1 rounded-md" />
          <Skeleton className="h-9 flex-1 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}

const usage = [
  { hour: "06:00", kw: 1.2 },
  { hour: "08:00", kw: 2.8 },
  { hour: "10:00", kw: 3.1 },
  { hour: "12:00", kw: 2.4 },
  { hour: "14:00", kw: 3.4 },
  { hour: "16:00", kw: 2.9 },
  { hour: "18:00", kw: 3.8 },
  { hour: "20:00", kw: 3.2 },
];

export function PowerUsage() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <BarChart
          title="Power usage, whole home"
          summary="Usage peaked at 3.8 kW at 6pm and was lowest at 1.2 kW at 6am."
          data={usage}
          categoryKey="hour"
          series={[{ key: "kw", label: "Usage" }]}
          labels="none"
          formatValue={(value) => `${value} kW`}
        />
        <Separator />
        <dl className="grid grid-cols-2 gap-4">
          {[
            ["Using now", "3.4 kW"],
            ["Solar", "+1.2 kW"],
          ].map(([term, value]) => (
            <div key={term} className="flex flex-col-reverse gap-0.5">
              <dt className="text-sm text-text-secondary">{term}</dt>
              <dd className="text-lg font-semibold tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
      <CardFooter>
        <Progress label="Battery level" value={85} className="w-full" />
      </CardFooter>
    </Card>
  );
}

/* Literal classes, so Tailwind generates them. */
const shadeHeights = [
  "h-0",
  "h-[10%]",
  "h-[20%]",
  "h-[30%]",
  "h-[40%]",
  "h-[50%]",
  "h-[60%]",
  "h-[70%]",
  "h-[80%]",
  "h-[90%]",
  "h-full",
];

export function RollerShades() {
  const [position, setPosition] = React.useState(50);
  const preset = position <= 10 ? "open" : position >= 90 ? "closed" : "half";
  return (
    <Card>
      <CardHeader>
        <CardTitle>Living room</CardTitle>
        <CardDescription>Roller blinds</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div
          aria-hidden
          className="flex h-32 flex-col overflow-hidden rounded-lg border border-border-default bg-surface-subtle"
        >
          <div
            className={`bg-chart-series-3 transition-[height] motion-reduce:transition-none ${shadeHeights[Math.round(position / 10)]}`}
          />
        </div>
        <Slider
          label="Closed"
          value={position}
          onChange={setPosition}
          maxValue={100}
          formatOptions={{ style: "percent", maximumFractionDigits: 0 }}
        />
      </CardContent>
      <CardFooter>
        <ToggleGroup
          aria-label="Presets"
          selectedKeys={[preset]}
          onSelectionChange={(keys) => {
            const next = Array.from(keys)[0];
            if (next === "open") setPosition(0);
            if (next === "half") setPosition(50);
            if (next === "closed") setPosition(100);
          }}
          variant="secondary"
          spacing={1}
          className="w-full *:flex-1"
        >
          <ToggleGroupItem id="open">Open</ToggleGroupItem>
          <ToggleGroupItem id="half">Half</ToggleGroupItem>
          <ToggleGroupItem id="closed">Closed</ToggleGroupItem>
        </ToggleGroup>
      </CardFooter>
    </Card>
  );
}

export function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Links</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <InputGroup
          label="Streaming profile"
          defaultValue="example.com/artist/3j2k"
          startAddon={<LinkIcon aria-hidden />}
        />
        <InputGroup label="Social handle" defaultValue="northwind_music" startAddon="@" />
        <InputGroup label="Audio page" placeholder="example.com/username" startAddon={<AudioLinesIcon aria-hidden />} />
        <InputGroup
          label="Website"
          placeholder="https://yoursite.com"
          startAddon={<GlobeIcon aria-hidden />}
          type="url"
        />
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="secondary">Discard</Button>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  );
}
