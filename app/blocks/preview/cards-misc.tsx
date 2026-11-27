"use client";

import {
  Alert,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSection,
  DropdownMenuSeparator,
  Empty,
  Input,
  InputGroup,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
  Kbd,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Separator,
  Skeleton,
  Slider,
  Spinner,
  Switch,
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
  Tooltip,
  TooltipContent,
} from "@graftwork/ui";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  CloudUploadIcon,
  ContainerIcon,
  CopyIcon,
  DownloadIcon,
  EllipsisIcon,
  ImageIcon,
  InfoIcon,
  LoaderCircleIcon,
  MinusIcon,
  MonitorIcon,
  PlusIcon,
  SearchIcon,
  ServerIcon,
  SettingsIcon,
  ShareIcon,
  ShoppingBagIcon,
  TrashIcon,
  ZapIcon,
} from "lucide-react";
import * as React from "react";

/** Everything else: theme, content and empty-state cards. Sample only: replace the copy with your own. */

const swatches = [
  ["surface-default", "bg-surface-default"],
  ["text-default", "bg-text-default"],
  ["action-primary", "bg-action-primary-bg"],
  ["action-secondary", "bg-action-secondary-bg"],
  ["surface-subtle", "bg-surface-subtle"],
  ["focus-ring", "bg-focus-ring"],
  ["border-default", "bg-border-default"],
  ["chart-series-1", "bg-chart-series-1"],
  ["chart-series-2", "bg-chart-series-2"],
  ["chart-series-3", "bg-chart-series-3"],
  ["chart-series-4", "bg-chart-series-4"],
  ["border-input", "bg-border-input"],
] as const;

export function StyleOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Graftwork · Geist</CardTitle>
        <CardDescription className="text-base">
          A preview of the type and colour tokens. Every screen in this app uses them.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-6 gap-3">
          {swatches.map(([name, className]) => (
            <li key={name} className="flex flex-col items-center gap-1">
              <span aria-hidden className={`aspect-square w-full rounded-lg border border-border-default ${className}`} />
              <span className="sr-only">{name}</span>
              <span aria-hidden className="hidden max-w-full truncate font-mono text-xs text-text-secondary md:block">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function TypographySpecimen() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <p className="text-xs font-medium text-text-secondary uppercase">Geist · Geist</p>
        <h2 className="text-2xl leading-heading font-medium">Designing with rhythm and hierarchy.</h2>
        <p className="text-sm text-text-secondary">
          A strong body style keeps long-form content readable and balances the visual weight of headings.
        </p>
        <p className="text-sm text-text-secondary">
          Thoughtful spacing and cadence help paragraphs scan quickly without feeling dense.
        </p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <Button variant="secondary" className="w-full">
            Share feedback
          </Button>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share feedback</DialogTitle>
              <DialogDescription>Let us know how we can improve.</DialogDescription>
            </DialogHeader>
            <DialogBody className="flex flex-col gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <Input label="Name" placeholder="Your name" autoComplete="name" />
                <Input label="Email" type="email" placeholder="you@example.com" autoComplete="email" />
              </div>
              <Select label="Category" defaultSelectedKey="general">
                <SelectItem id="general">General</SelectItem>
                <SelectItem id="bug">Bug report</SelectItem>
                <SelectItem id="feature">Feature request</SelectItem>
                <SelectItem id="improvement">Improvement</SelectItem>
              </Select>
              <Textarea label="Message" placeholder="Tell us what’s on your mind…" rows={4} />
            </DialogBody>
            <DialogFooter>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

const icons = [
  ["Copy", CopyIcon],
  ["Alert", CircleAlertIcon],
  ["Delete", TrashIcon],
  ["Share", ShareIcon],
  ["Bag", ShoppingBagIcon],
  ["More", EllipsisIcon],
  ["Loading", LoaderCircleIcon],
  ["Add", PlusIcon],
  ["Remove", MinusIcon],
  ["Back", ArrowLeftIcon],
  ["Forward", ArrowRightIcon],
  ["Done", CheckIcon],
  ["Expand", ChevronDownIcon],
  ["Next", ChevronRightIcon],
  ["Search", SearchIcon],
  ["Settings", SettingsIcon],
] as const;

export function IconPreviewGrid() {
  return (
    <Card>
      <CardContent>
        <ul aria-label="Icons" className="grid grid-cols-8 place-items-center gap-y-4">
          {icons.map(([name, Icon]) => (
            <li key={name} className="flex size-8 items-center justify-center rounded-md border border-border-default">
              <Icon aria-hidden className="size-4 text-icon-default" />
              <span className="sr-only">{name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function UIElements() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Delete</Button>
        </div>
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Two-step verification</ItemTitle>
            <ItemDescription>Verify by email or phone.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="secondary">
              Turn on
            </Button>
          </ItemActions>
        </Item>
        <Slider label="Budget" defaultValue={500} minValue={0} maxValue={1000} step={10} />
        <InputGroup label="Name" placeholder="Search by name" endAddon={<SearchIcon aria-hidden />} />
        <Textarea label="Message" placeholder="Write a message" />
        <div className="flex flex-wrap items-start gap-x-6 gap-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge>Neutral</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <RadioGroup label="Fruit" defaultValue="apple" orientation="horizontal">
            <Radio value="apple">Apple</Radio>
            <Radio value="pear">Pear</Radio>
          </RadioGroup>
          <Checkbox defaultSelected>Remember me</Checkbox>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <AlertDialog>
            <Button variant="secondary">Alert dialog</Button>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Allow the accessory to connect?</AlertDialogTitle>
                <AlertDialogDescription>
                  Do you want to allow the USB accessory to connect to this device and your data?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button slot="close" variant="secondary">
                  Don’t allow
                </Button>
                <Button slot="close">Allow</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <ButtonGroup aria-label="Conversation">
            <Button variant="secondary">Group</Button>
            <DropdownMenu>
              <Button variant="secondary" aria-label="More conversation actions">
                <ChevronUpIcon aria-hidden />
              </Button>
              <DropdownMenuContent aria-label="Conversation actions" placement="top end">
                <DropdownMenuSection title="Quick actions">
                  <DropdownMenuItem id="mute">Mute conversation</DropdownMenuItem>
                  <DropdownMenuItem id="read">Mark as read</DropdownMenuItem>
                  <DropdownMenuItem id="block">Block user</DropdownMenuItem>
                </DropdownMenuSection>
                <DropdownMenuSeparator />
                <DropdownMenuSection title="Conversation">
                  <DropdownMenuItem id="share">Share conversation</DropdownMenuItem>
                  <DropdownMenuItem id="copy">Copy conversation</DropdownMenuItem>
                  <DropdownMenuItem id="report">Report conversation</DropdownMenuItem>
                </DropdownMenuSection>
                <DropdownMenuSeparator />
                <DropdownMenuItem id="delete" variant="destructive">
                  Delete conversation
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
          <Switch defaultSelected>Notifications</Switch>
        </div>
      </CardContent>
    </Card>
  );
}

function CloneField({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <InputGroup
      label={label}
      description={hint}
      defaultValue={value}
      isReadOnly
      endAddon={
        <Button variant="ghost" size="sm" aria-label={`Copy ${label}`}>
          <CopyIcon aria-hidden />
        </Button>
      }
    />
  );
}

export function Workspaces() {
  const [creating, setCreating] = React.useState(false);
  return (
    <Card>
      <CardContent>
        <Tabs defaultSelectedKey="cloud" className="flex flex-col gap-2">
          <TabList aria-label="Where to work">
            <Tab id="cloud">Cloud</Tab>
            <Tab id="local">Local</Tab>
          </TabList>
          <TabPanel id="cloud" className="flex flex-col gap-2">
            <Item size="sm">
              <ItemContent>
                <ItemTitle>Workspaces</ItemTitle>
                <ItemDescription>Your workspaces in the cloud</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Tooltip>
                  <Button variant="ghost" aria-label="New workspace on main">
                    <PlusIcon aria-hidden />
                  </Button>
                  <TooltipContent>New workspace on main</TooltipContent>
                </Tooltip>
                <DropdownMenu>
                  <Button variant="ghost" aria-label="Workspace options">
                    <EllipsisIcon aria-hidden />
                  </Button>
                  <DropdownMenuContent aria-label="Workspace options" placement="bottom end">
                    <DropdownMenuItem id="options">
                      <PlusIcon aria-hidden />
                      New with options…
                    </DropdownMenuItem>
                    <DropdownMenuItem id="container">
                      <ContainerIcon aria-hidden />
                      Configure container
                    </DropdownMenuItem>
                    <DropdownMenuItem id="prebuilds">
                      <ZapIcon aria-hidden />
                      Set up prebuilds
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem id="manage">
                      <ServerIcon aria-hidden />
                      Manage workspaces
                    </DropdownMenuItem>
                    <DropdownMenuItem id="share">
                      <ShareIcon aria-hidden />
                      Share link
                    </DropdownMenuItem>
                    <DropdownMenuItem id="about">
                      <InfoIcon aria-hidden />
                      About workspaces
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ItemActions>
            </Item>
            <Separator />
            <Empty
              level={3}
              icon={<ServerIcon />}
              title="No workspaces"
              description="You don’t have any workspaces with this repository checked out."
              action={
                <div className="flex flex-col items-center gap-2">
                  <Button
                    size="sm"
                    isDisabled={creating}
                    onPress={() => {
                      setCreating(true);
                      setTimeout(() => setCreating(false), 2000);
                    }}
                  >
                    {creating ? <Spinner size="sm" label="Creating workspace" /> : null}
                    Create workspace
                  </Button>
                  <a href="#workspaces" className="text-xs text-text-secondary">
                    Learn more about workspaces
                  </a>
                </div>
              }
              className="border-0"
            />
            <Separator />
            <p className="p-1.5 text-xs text-text-secondary">
              Workspace usage for this repository is paid for by <span className="font-medium">your team</span>.
            </p>
          </TabPanel>
          <TabPanel id="local" className="flex flex-col gap-2">
            <Tabs defaultSelectedKey="https" className="flex flex-col gap-2">
              <TabList aria-label="Clone with">
                <Tab id="https">HTTPS</Tab>
                <Tab id="ssh">SSH</Tab>
                <Tab id="cli">CLI</Tab>
              </TabList>
              <TabPanel id="https">
                <CloneField label="HTTPS URL" value="https://example.com/team/app.git" hint="Clone using the web URL." />
              </TabPanel>
              <TabPanel id="ssh">
                <CloneField label="SSH URL" value="git@example.com:team/app.git" hint="Use a password-protected SSH key." />
              </TabPanel>
              <TabPanel id="cli">
                <CloneField label="CLI command" value="example repo clone team/app" hint="Work fast with the command line." />
              </TabPanel>
            </Tabs>
            <Separator />
            <div className="flex flex-col items-start">
              <Button variant="ghost" size="sm">
                <MonitorIcon aria-hidden />
                Open in the desktop app
              </Button>
              <Button variant="ghost" size="sm">
                <DownloadIcon aria-hidden />
                Download ZIP
              </Button>
            </div>
          </TabPanel>
        </Tabs>
      </CardContent>
    </Card>
  );
}

const invoiceItems = [
  { item: "Design system licence", qty: 1, rate: 499 },
  { item: "Priority support", qty: 12, rate: 99 },
  { item: "Custom components", qty: 3, rate: 250 },
];
const pounds = (value: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
const subtotal = invoiceItems.reduce((sum, row) => sum + row.qty * row.rate, 0);

export function Invoice() {
  return (
    <Card>
      <CardHeader className="flex-row flex-wrap items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle>Invoice INV-2847</CardTitle>
          <CardDescription>Due 30 March 2026</CardDescription>
        </div>
        <Badge variant="warning">Pending</Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Table aria-label="Invoice items" density="compact">
          <TableHeader>
            <TableColumn isRowHeader>Item</TableColumn>
            <TableColumn className="text-right">Qty</TableColumn>
            <TableColumn className="text-right">Rate</TableColumn>
            <TableColumn className="text-right">Amount</TableColumn>
          </TableHeader>
          <TableBody items={invoiceItems.map((row) => ({ ...row, id: row.item }))}>
            {(row) => (
              <TableRow>
                <TableCell>{row.item}</TableCell>
                <TableCell className="text-right tabular-nums">{row.qty}</TableCell>
                <TableCell className="text-right tabular-nums">{pounds(row.rate)}</TableCell>
                <TableCell className="text-right tabular-nums">{pounds(row.qty * row.rate)}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 text-sm">
          <dt className="text-right text-text-secondary">Subtotal</dt>
          <dd className="text-right tabular-nums">{pounds(subtotal)}</dd>
          <dt className="text-right text-text-secondary">VAT</dt>
          <dd className="text-right tabular-nums">{pounds(0)}</dd>
          <dt className="text-right font-medium">Total due</dt>
          <dd className="text-right font-medium tabular-nums">{pounds(subtotal)}</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" size="sm">
          Download PDF
        </Button>
        <Button size="sm" className="ml-auto">
          Pay now
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Observability() {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="flex aspect-video items-center justify-center bg-surface-subtle">
        <ImageIcon aria-hidden className="size-12 text-icon-default" />
      </div>
      <CardHeader>
        <CardTitle>Insights is replacing Monitoring</CardTitle>
        <CardDescription>
          Switch to the improved way to explore your data, in plain language. Monitoring will no longer be available on the
          Pro plan from November 2026.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>
          Create query
          <PlusIcon aria-hidden />
        </Button>
        <Badge variant="warning" className="ml-auto">
          Warning
        </Badge>
      </CardFooter>
    </Card>
  );
}

export function EnvironmentVariables() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Environment variables</CardTitle>
        <CardDescription>Production · 8 variables</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="flex flex-col gap-2">
          {[
            { key: "DATABASE_URL", value: null },
            { key: "PUBLIC_API_URL", value: "https://api.example.com" },
            { key: "PAYMENTS_SECRET", value: null },
          ].map((env) => (
            <div
              key={env.key}
              className="flex flex-wrap items-center gap-2 rounded-md border border-border-default px-2.5 py-2 font-mono text-xs"
            >
              <dt className="font-medium">{env.key}</dt>
              <dd className="ml-auto text-text-secondary">
                {env.value ?? (
                  <>
                    <span aria-hidden>••••••••</span>
                    <span className="sr-only">Hidden</span>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Edit</Button>
        <Button className="ml-auto">Deploy</Button>
      </CardFooter>
    </Card>
  );
}

export function ActivateAssistant() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ship faster and safer with the review assistant</CardTitle>
        <CardDescription>
          Your use is subject to the <a href="#beta-terms">beta agreement</a> and the{" "}
          <a href="#ai-terms">AI product terms</a>.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ItemGroup className="gap-0">
          {[
            <>
              <strong>Code reviews</strong> with full context of your codebase, to catch <strong>hard-to-find</strong> bugs.
            </>,
            <>
              <strong>Code suggestions</strong> tested in a sandbox before you merge.
            </>,
            <>
              <strong>Root-cause analysis</strong> for production issues, with deployment context.{" "}
              <Badge variant="info">Needs Insights</Badge>
            </>,
          ].map((content, index) => (
            <Item key={index} size="xs" className="px-0">
              <ItemMedia className="self-start">
                <CircleCheckIcon aria-hidden className="size-5 text-icon-brand" />
              </ItemMedia>
              <ItemContent>
                <p className="text-sm text-text-secondary [&_strong]:font-medium [&_strong]:text-text-default">{content}</p>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
        <Alert>Pro teams get £100 of trial credit for 2 weeks after turning it on.</Alert>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="secondary">Cancel</Button>
        <Button>Turn on with £100 credit</Button>
      </CardFooter>
    </Card>
  );
}

export function SkeletonLoading() {
  return (
    <Card aria-busy="true">
      <CardContent className="flex flex-col gap-4">
        <span className="sr-only">Loading</span>
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </CardContent>
    </Card>
  );
}

export function NoTeamMembers() {
  return (
    <Card>
      <CardContent>
        <Empty
          icon={
            <AvatarGroup>
              <Avatar name="Alex Morgan" size="lg" decorative />
              <Avatar name="Lena Reid" size="lg" decorative />
              <Avatar name="Eli Rowe" size="lg" decorative />
            </AvatarGroup>
          }
          title="No team members"
          description="Invite your team to work together on this project."
          action={<Button size="sm">Invite members</Button>}
          className="min-h-56 [&>span:first-child]:size-auto [&>span:first-child]:bg-transparent"
        />
      </CardContent>
    </Card>
  );
}

const contributors = [
  "Alex Morgan",
  "Sam Patel",
  "Lena Reid",
  "Eli Rowe",
  "Priya Shah",
  "Tom Okafor",
  "Jo Kim",
  "Sam Rivera",
  "Ana Silva",
  "Ben Hart",
  "Cara Lowe",
  "Dev Nair",
  "Ed Price",
  "Fay Wong",
  "Gus Lee",
  "Hana Ito",
];

export function Contributors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Contributors <Badge>312</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-2">
          {contributors.map((name) => (
            <li key={name}>
              <Avatar name={name} />
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <a href="#contributors" className="text-sm">
          And 296 more contributors
        </a>
      </CardFooter>
    </Card>
  );
}

export function FileUpload() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload files</CardTitle>
        <CardDescription>Drag and drop, or browse</CardDescription>
      </CardHeader>
      <CardContent>
        <Empty
          level={3}
          icon={<CloudUploadIcon />}
          title="Drop files here"
          description="PNG, JPG or PDF, up to 10MB"
          action={<Button>Browse files</Button>}
        />
      </CardContent>
    </Card>
  );
}

export function AnomalyAlert() {
  return (
    <Card>
      <CardContent>
        <Empty
          title="Get alerts for anomalies"
          description="Monitor your projects for anomalies automatically, and get notified."
          action={<Button>Upgrade to Insights Plus</Button>}
          className="min-h-48 border-0"
        />
      </CardContent>
    </Card>
  );
}

/* A fixed sample waveform, so the card looks the same every time. Literal classes, so Tailwind generates them. */
const bars = [
  "h-[20%]", "h-[35%]", "h-[55%]", "h-[40%]", "h-[70%]", "h-[90%]", "h-[60%]", "h-[45%]", "h-[80%]", "h-[100%]",
  "h-[75%]", "h-[50%]", "h-[65%]", "h-[85%]", "h-[55%]", "h-[30%]", "h-[45%]", "h-[70%]", "h-[95%]", "h-[60%]",
  "h-[40%]", "h-[55%]", "h-[80%]", "h-[50%]", "h-[35%]", "h-[60%]", "h-[45%]", "h-[25%]", "h-[35%]", "h-[20%]",
];

export function LiveWaveform() {
  const [listening, setListening] = React.useState(false);
  const [processing, setProcessing] = React.useState(true);
  const [scrolling, setScrolling] = React.useState(false);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live audio waveform</CardTitle>
        <CardDescription>Microphone input, drawn as it arrives. This sample doesn’t use the microphone.</CardDescription>
      </CardHeader>
      <CardContent>
        <div aria-hidden className="flex h-20 items-center justify-center gap-0.5">
          {bars.map((height, index) => (
            <span key={index} className={`w-1 rounded-full bg-chart-series-2 ${height}`} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          size="sm"
          variant={listening ? "primary" : "secondary"}
          aria-pressed={listening}
          onPress={() => {
            setListening(!listening);
            if (!listening) setProcessing(false);
          }}
        >
          {listening ? "Stop" : "Start"} listening
        </Button>
        <Button
          size="sm"
          variant={processing ? "primary" : "secondary"}
          aria-pressed={processing}
          onPress={() => {
            setProcessing(!processing);
            if (!processing) setListening(false);
          }}
        >
          {processing ? "Stop" : "Start"} processing
        </Button>
        <Button size="sm" variant="secondary" onPress={() => setScrolling(!scrolling)}>
          {scrolling ? "Scrolling" : "Static"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function NotFound() {
  return (
    <Card>
      <CardContent>
        <Empty
          title="Page not found"
          description="The page you’re looking for doesn’t exist. Try searching for what you need."
          action={
            <div className="flex w-full flex-col items-center gap-2">
              <InputGroup
                label="Search pages"
                placeholder="Search pages…"
                startAddon={<SearchIcon aria-hidden />}
                endAddon={<Kbd>/</Kbd>}
                className="w-full max-w-64 text-left"
              />
              <a href="#home" className="text-sm">
                Go to the home page
              </a>
            </div>
          }
          className="min-h-72 border-0"
        />
      </CardContent>
    </Card>
  );
}

const shortcuts = [
  { label: "Search", keys: ["⌘", "K"] },
  { label: "Quick actions", keys: ["⌘", "J"] },
  { label: "New file", keys: ["⌘", "N"] },
  { label: "Save", keys: ["⌘", "S"] },
  { label: "Show or hide sidebar", keys: ["⌘", "B"] },
];

export function Shortcuts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Shortcuts</CardTitle>
      </CardHeader>
      <CardContent>
        <ItemGroup className="gap-0">
          {shortcuts.flatMap(({ label, keys }, index) => [
            ...(index > 0 ? [<ItemSeparator key={`${label}-separator`} />] : []),
            <Item key={label} size="xs" className="px-0 py-0">
              <ItemContent>
                <ItemTitle className="font-normal text-text-secondary">{label}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <span className="flex gap-1">
                  {keys.map((key) => (
                    <Kbd key={key}>{key === "⌘" ? <abbr title="Command">⌘</abbr> : key}</Kbd>
                  ))}
                </span>
              </ItemActions>
            </Item>,
          ])}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}
