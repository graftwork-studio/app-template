/**
 * Every block upstream offered when the inventory was taken (24 November 2026),
 * from the shadcn/ui registry: the aria-nova style for page blocks, and the
 * new-york-v4 style for chart blocks, which upstream offers for the Radix base
 * only. See BLOCKS.md.
 *
 * The completeness test checks that every block here is either built or parked
 * in registry.ts once its batch is done. Don't edit this list by hand to make a
 * block disappear: park it in registry.ts with a reason instead.
 */

export type InventoryCategory = "Login" | "Sign-up" | "Sidebar" | "Charts" | "Dashboard" | "Upstream previews";

export type InventoryBlock = {
  /** The upstream block id, which is also our block id and Figma component name. */
  id: string;
  category: InventoryCategory;
  description: string;
  /** The @graftwork/ui components it needs. */
  components: string[];
  /** Components or features @graftwork/ui doesn't have yet. */
  missingCode: string[];
  /** Components missing from the Graftwork Design System Figma library. */
  missingFigma: string[];
  /** Which base upstream offers it for: "aria" (ours) or "radix" only. */
  upstreamBase: "aria" | "radix";
  /** The build batch. Batches are built in order. */
  batch: 1 | 2 | 3 | 4 | 5;
};

/** Batches whose blocks must all be built or parked. Raise it as each batch lands. */
export const COMPLETED_BATCHES: ReadonlySet<InventoryBlock["batch"]> = new Set<InventoryBlock["batch"]>([1, 2, 3, 4, 5]);

export const inventory: readonly InventoryBlock[] = [
  { id: "login-01", category: "Login", description: "A log-in form in a card.", components: ["Button", "Card", "Field", "Input", "Label"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 1 },
  { id: "login-02", category: "Login", description: "A two-column log-in page with a cover image.", components: ["Button", "Field", "Input", "Label"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 1 },
  { id: "login-03", category: "Login", description: "A log-in card on a muted background, with other sign-in options first.", components: ["Button", "Card", "Field", "Input", "Label"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 1 },
  { id: "login-04", category: "Login", description: "A log-in card with the form beside an image.", components: ["Button", "Card", "Field", "Input", "Label"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 1 },
  { id: "login-05", category: "Login", description: "An email-only log-in page.", components: ["Button", "Field", "Input", "Label"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 1 },
  { id: "signup-01", category: "Sign-up", description: "A sign-up form in a card.", components: ["Button", "Card", "Field", "Input", "Label"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 2 },
  { id: "signup-02", category: "Sign-up", description: "A two-column sign-up page with a cover image.", components: ["Button", "Field", "Input", "Label"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 2 },
  { id: "signup-03", category: "Sign-up", description: "A sign-up card on a muted background.", components: ["Button", "Card", "Field", "Input", "Label"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 2 },
  { id: "signup-04", category: "Sign-up", description: "A sign-up card with the form beside an image.", components: ["Button", "Card", "Field", "Input", "Label"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 2 },
  { id: "signup-05", category: "Sign-up", description: "A sign-up form with other sign-up options.", components: ["Button", "Field", "Input", "Label"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 2 },
  { id: "sidebar-01", category: "Sidebar", description: "A sidebar with navigation grouped by section.", components: ["Breadcrumb", "DropdownMenu", "Label", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-02", category: "Sidebar", description: "A sidebar with collapsible sections.", components: ["Breadcrumb", "DropdownMenu", "Label", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-03", category: "Sidebar", description: "A sidebar with submenus.", components: ["Breadcrumb", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-04", category: "Sidebar", description: "A floating sidebar with submenus.", components: ["Breadcrumb", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-05", category: "Sidebar", description: "A sidebar with collapsible submenus.", components: ["Breadcrumb", "Collapsible", "Label", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-06", category: "Sidebar", description: "A sidebar with submenus as dropdown menus.", components: ["Breadcrumb", "Card", "DropdownMenu", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-07", category: "Sidebar", description: "A sidebar that collapses to icons.", components: ["Avatar", "Breadcrumb", "Collapsible", "DropdownMenu", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-08", category: "Sidebar", description: "An inset sidebar with secondary navigation.", components: ["Avatar", "Breadcrumb", "Collapsible", "DropdownMenu", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-09", category: "Sidebar", description: "Collapsible nested sidebars.", components: ["Avatar", "Breadcrumb", "Collapsible", "DropdownMenu", "Label", "Separator", "Sidebar", "Switch"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-10", category: "Sidebar", description: "A sidebar in a popover.", components: ["Breadcrumb", "Collapsible", "DropdownMenu", "Popover", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-11", category: "Sidebar", description: "A sidebar with a collapsible file tree.", components: ["Breadcrumb", "Collapsible", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-12", category: "Sidebar", description: "A sidebar with a calendar.", components: ["Avatar", "Breadcrumb", "Calendar", "Collapsible", "DropdownMenu", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-13", category: "Sidebar", description: "A sidebar in a dialog.", components: ["Breadcrumb", "Button", "Dialog", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-14", category: "Sidebar", description: "A sidebar on the right.", components: ["Breadcrumb", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-15", category: "Sidebar", description: "A left and a right sidebar.", components: ["Avatar", "Breadcrumb", "Calendar", "Collapsible", "DropdownMenu", "Popover", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "sidebar-16", category: "Sidebar", description: "A sidebar with a sticky site header.", components: ["Avatar", "Breadcrumb", "Button", "Collapsible", "DropdownMenu", "Label", "Separator", "Sidebar"], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 3 },
  { id: "chart-area-axes", category: "Charts", description: "A area chart example (axes).", components: ["Card", "AreaChart"], missingCode: ["AreaChart"], missingFigma: ["AreaChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-area-default", category: "Charts", description: "A area chart example (default).", components: ["Card", "AreaChart"], missingCode: ["AreaChart"], missingFigma: ["AreaChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-area-gradient", category: "Charts", description: "A area chart example (gradient).", components: ["Card", "AreaChart"], missingCode: ["AreaChart"], missingFigma: ["AreaChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-area-icons", category: "Charts", description: "A area chart example (icons).", components: ["Card", "AreaChart"], missingCode: ["AreaChart"], missingFigma: ["AreaChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-area-interactive", category: "Charts", description: "A area chart example (interactive).", components: ["Card", "AreaChart"], missingCode: ["AreaChart"], missingFigma: ["AreaChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-area-legend", category: "Charts", description: "A area chart example (legend).", components: ["Card", "AreaChart"], missingCode: ["AreaChart"], missingFigma: ["AreaChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-area-linear", category: "Charts", description: "A area chart example (linear).", components: ["Card", "AreaChart"], missingCode: ["AreaChart"], missingFigma: ["AreaChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-area-stacked", category: "Charts", description: "A area chart example (stacked).", components: ["Card", "AreaChart"], missingCode: ["AreaChart"], missingFigma: ["AreaChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-area-stacked-expand", category: "Charts", description: "A area chart example (stacked expand).", components: ["Card", "AreaChart"], missingCode: ["AreaChart"], missingFigma: ["AreaChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-area-step", category: "Charts", description: "A area chart example (step).", components: ["Card", "AreaChart"], missingCode: ["AreaChart"], missingFigma: ["AreaChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-bar-active", category: "Charts", description: "A bar chart with a highlighted (active) bar.", components: ["Card", "BarChart"], missingCode: ["BarChart support for a highlighted (active) bar"], missingFigma: ["BarChart support for a highlighted (active) bar"], upstreamBase: "radix", batch: 4 },
  { id: "chart-bar-default", category: "Charts", description: "A bar chart with one series.", components: ["BarChart", "Card"], missingCode: [], missingFigma: [], upstreamBase: "radix", batch: 4 },
  { id: "chart-bar-horizontal", category: "Charts", description: "A bar chart with horizontal bars.", components: ["Card", "BarChart"], missingCode: ["BarChart support for horizontal bars"], missingFigma: ["BarChart support for horizontal bars"], upstreamBase: "radix", batch: 4 },
  { id: "chart-bar-interactive", category: "Charts", description: "A bar chart with daily data and a control to switch series.", components: ["BarChart", "Card", "ToggleGroup"], missingCode: [], missingFigma: [], upstreamBase: "radix", batch: 4 },
  { id: "chart-bar-label", category: "Charts", description: "A bar chart with value labels on bars.", components: ["Card", "BarChart"], missingCode: ["BarChart support for value labels on bars"], missingFigma: ["BarChart support for value labels on bars"], upstreamBase: "radix", batch: 4 },
  { id: "chart-bar-label-custom", category: "Charts", description: "A bar chart with custom labels inside bars.", components: ["Card", "BarChart"], missingCode: ["BarChart support for custom labels inside bars"], missingFigma: ["BarChart support for custom labels inside bars"], upstreamBase: "radix", batch: 4 },
  { id: "chart-bar-mixed", category: "Charts", description: "A bar chart with a different colour per bar.", components: ["Card", "BarChart"], missingCode: ["BarChart support for a different colour per bar"], missingFigma: ["BarChart support for a different colour per bar"], upstreamBase: "radix", batch: 4 },
  { id: "chart-bar-multiple", category: "Charts", description: "A bar chart with two series side by side.", components: ["BarChart", "Card"], missingCode: [], missingFigma: [], upstreamBase: "radix", batch: 4 },
  { id: "chart-bar-negative", category: "Charts", description: "A bar chart with negative values with their own colour.", components: ["Card", "BarChart"], missingCode: ["BarChart support for negative values with their own colour"], missingFigma: ["BarChart support for negative values with their own colour"], upstreamBase: "radix", batch: 4 },
  { id: "chart-bar-stacked", category: "Charts", description: "A bar chart with stacked series.", components: ["Card", "BarChart"], missingCode: ["BarChart support for stacked series"], missingFigma: ["BarChart support for stacked series"], upstreamBase: "radix", batch: 4 },
  { id: "chart-line-default", category: "Charts", description: "A line chart example (default).", components: ["Card", "LineChart"], missingCode: ["LineChart"], missingFigma: ["LineChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-line-dots", category: "Charts", description: "A line chart example (dots).", components: ["Card", "LineChart"], missingCode: ["LineChart"], missingFigma: ["LineChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-line-dots-colors", category: "Charts", description: "A line chart example (dots colors).", components: ["Card", "LineChart"], missingCode: ["LineChart"], missingFigma: ["LineChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-line-dots-custom", category: "Charts", description: "A line chart example (dots custom).", components: ["Card", "LineChart"], missingCode: ["LineChart"], missingFigma: ["LineChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-line-interactive", category: "Charts", description: "A line chart example (interactive).", components: ["Card", "LineChart"], missingCode: ["LineChart"], missingFigma: ["LineChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-line-label", category: "Charts", description: "A line chart example (label).", components: ["Card", "LineChart"], missingCode: ["LineChart"], missingFigma: ["LineChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-line-label-custom", category: "Charts", description: "A line chart example (label custom).", components: ["Card", "LineChart"], missingCode: ["LineChart"], missingFigma: ["LineChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-line-linear", category: "Charts", description: "A line chart example (linear).", components: ["Card", "LineChart"], missingCode: ["LineChart"], missingFigma: ["LineChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-line-multiple", category: "Charts", description: "A line chart example (multiple).", components: ["Card", "LineChart"], missingCode: ["LineChart"], missingFigma: ["LineChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-line-step", category: "Charts", description: "A line chart example (step).", components: ["Card", "LineChart"], missingCode: ["LineChart"], missingFigma: ["LineChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-donut", category: "Charts", description: "A pie chart example (donut).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-donut-active", category: "Charts", description: "A pie chart example (donut active).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-donut-text", category: "Charts", description: "A pie chart example (donut text).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-interactive", category: "Charts", description: "A pie chart example (interactive).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-label", category: "Charts", description: "A pie chart example (label).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-label-custom", category: "Charts", description: "A pie chart example (label custom).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-label-list", category: "Charts", description: "A pie chart example (label list).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-legend", category: "Charts", description: "A pie chart example (legend).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-separator-none", category: "Charts", description: "A pie chart example (separator none).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-simple", category: "Charts", description: "A pie chart example (simple).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-pie-stacked", category: "Charts", description: "A pie chart example (stacked).", components: ["Card", "PieChart"], missingCode: ["PieChart"], missingFigma: ["PieChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-default", category: "Charts", description: "A radar chart example (default).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-dots", category: "Charts", description: "A radar chart example (dots).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-grid-circle", category: "Charts", description: "A radar chart example (grid circle).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-grid-circle-fill", category: "Charts", description: "A radar chart example (grid circle fill).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-grid-circle-no-lines", category: "Charts", description: "A radar chart example (grid circle no lines).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-grid-custom", category: "Charts", description: "A radar chart example (grid custom).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-grid-fill", category: "Charts", description: "A radar chart example (grid fill).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-grid-none", category: "Charts", description: "A radar chart example (grid none).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-icons", category: "Charts", description: "A radar chart example (icons).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-label-custom", category: "Charts", description: "A radar chart example (label custom).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-legend", category: "Charts", description: "A radar chart example (legend).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-lines-only", category: "Charts", description: "A radar chart example (lines only).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-multiple", category: "Charts", description: "A radar chart example (multiple).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radar-radius", category: "Charts", description: "A radar chart example (radius).", components: ["Card", "RadarChart"], missingCode: ["RadarChart"], missingFigma: ["RadarChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radial-grid", category: "Charts", description: "A radial chart example (grid).", components: ["Card", "RadialChart"], missingCode: ["RadialChart"], missingFigma: ["RadialChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radial-label", category: "Charts", description: "A radial chart example (label).", components: ["Card", "RadialChart"], missingCode: ["RadialChart"], missingFigma: ["RadialChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radial-shape", category: "Charts", description: "A radial chart example (shape).", components: ["Card", "RadialChart"], missingCode: ["RadialChart"], missingFigma: ["RadialChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radial-simple", category: "Charts", description: "A radial chart example (simple).", components: ["Card", "RadialChart"], missingCode: ["RadialChart"], missingFigma: ["RadialChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radial-stacked", category: "Charts", description: "A radial chart example (stacked).", components: ["Card", "RadialChart"], missingCode: ["RadialChart"], missingFigma: ["RadialChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-radial-text", category: "Charts", description: "A radial chart example (text).", components: ["Card", "RadialChart"], missingCode: ["RadialChart"], missingFigma: ["RadialChart"], upstreamBase: "radix", batch: 4 },
  { id: "chart-tooltip-advanced", category: "Charts", description: "A chart tooltip example (advanced).", components: ["Card", "BarChart"], missingCode: ["Custom chart tooltips (ChartTooltip isn’t exported)"], missingFigma: ["Chart tooltip"], upstreamBase: "radix", batch: 4 },
  { id: "chart-tooltip-default", category: "Charts", description: "A chart tooltip example (default).", components: ["Card", "BarChart"], missingCode: ["Custom chart tooltips (ChartTooltip isn’t exported)"], missingFigma: ["Chart tooltip"], upstreamBase: "radix", batch: 4 },
  { id: "chart-tooltip-formatter", category: "Charts", description: "A chart tooltip example (formatter).", components: ["Card", "BarChart"], missingCode: ["Custom chart tooltips (ChartTooltip isn’t exported)"], missingFigma: ["Chart tooltip"], upstreamBase: "radix", batch: 4 },
  { id: "chart-tooltip-icons", category: "Charts", description: "A chart tooltip example (icons).", components: ["Card", "BarChart"], missingCode: ["Custom chart tooltips (ChartTooltip isn’t exported)"], missingFigma: ["Chart tooltip"], upstreamBase: "radix", batch: 4 },
  { id: "chart-tooltip-indicator-line", category: "Charts", description: "A chart tooltip example (indicator line).", components: ["Card", "BarChart"], missingCode: ["Custom chart tooltips (ChartTooltip isn’t exported)"], missingFigma: ["Chart tooltip"], upstreamBase: "radix", batch: 4 },
  { id: "chart-tooltip-indicator-none", category: "Charts", description: "A chart tooltip example (indicator none).", components: ["Card", "BarChart"], missingCode: ["Custom chart tooltips (ChartTooltip isn’t exported)"], missingFigma: ["Chart tooltip"], upstreamBase: "radix", batch: 4 },
  { id: "chart-tooltip-label-custom", category: "Charts", description: "A chart tooltip example (label custom).", components: ["Card", "BarChart"], missingCode: ["Custom chart tooltips (ChartTooltip isn’t exported)"], missingFigma: ["Chart tooltip"], upstreamBase: "radix", batch: 4 },
  { id: "chart-tooltip-label-formatter", category: "Charts", description: "A chart tooltip example (label formatter).", components: ["Card", "BarChart"], missingCode: ["Custom chart tooltips (ChartTooltip isn’t exported)"], missingFigma: ["Chart tooltip"], upstreamBase: "radix", batch: 4 },
  { id: "chart-tooltip-label-none", category: "Charts", description: "A chart tooltip example (label none).", components: ["Card", "BarChart"], missingCode: ["Custom chart tooltips (ChartTooltip isn’t exported)"], missingFigma: ["Chart tooltip"], upstreamBase: "radix", batch: 4 },
  { id: "dashboard-01", category: "Dashboard", description: "A dashboard with a sidebar, summary cards, an interactive area chart and a data table.", components: ["AreaChart", "Avatar", "Badge", "Breadcrumb", "Button", "Card", "Checkbox", "DataTable", "Drawer", "DropdownMenu", "Input", "Label", "Select", "Separator", "Sheet", "Sidebar", "Tabs", "Toast", "ToggleGroup"], missingCode: ["AreaChart (interactive, with a time-range control)", "DataTable row reordering by drag and drop"], missingFigma: ["AreaChart"], upstreamBase: "aria", batch: 5 },
  { id: "preview", category: "Upstream previews", description: "Upstream’s theme preview for its “create” page: a grid of component examples.", components: [], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 5 },
  { id: "preview-02", category: "Upstream previews", description: "Upstream’s second theme preview: a grid of component examples, including a QR code.", components: [], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 5 },
  { id: "preview-03", category: "Upstream previews", description: "An empty upstream stub (it renders “Preview 03”).", components: [], missingCode: [], missingFigma: [], upstreamBase: "aria", batch: 5 },
];
