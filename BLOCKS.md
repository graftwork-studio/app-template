# Blocks

Blocks are whole page layouts (log-in pages, sidebars, dashboards) that you copy and edit to start a screen. They are rebuilt from [shadcn/ui's blocks](https://ui.shadcn.com/blocks) using only `@graftwork/ui` components and semantic tokens, and they pass the same checks as any other screen.

- **Source:** `app/blocks/<block-id>/`. Edit a block freely in your app; it's yours once the repository is created.
- **Registry:** `app/blocks/registry.ts` lists every block, built or parked. The gallery and the tests read it.
- **Gallery:** `/blocks` shows every block with width and theme controls. See [the gallery](#the-gallery).
- **Figma:** each built block is a component set of the same name in the **Graftwork Blocks** library. Enable it together with the Graftwork Design System library.

New apps get blocks through this template. Apps created earlier don't receive them automatically.

## Adding or changing a block

1. Fetch the upstream block in a scratch folder outside this repository (for example `npx shadcn@latest view <id>`, or the registry JSON at `https://ui.shadcn.com/r/styles/aria-nova/<id>.json`). Never run `shadcn add` here.
2. Rebuild it in `app/blocks/<id>/block.tsx` from `@graftwork/ui` components, with our prop names (see the Figma table in `CLAUDE.md`). Export the block as the file's default export and add it to `app/blocks/components.ts`.
3. Use semantic token classes only. If an upstream class has no token equivalent, leave it out and say so in the pull request.
4. Replace the copy and sample data with neutral placeholders: no real brands, people, photos or third-party names. Provider buttons ("Continue with …") use neutral text and a generic icon, and photos become a neutral placeholder.
5. Apply the accessibility rules: visible labels, errors as text linked to the field, 24 × 24px targets, underlined links, no sideways scrolling from 320px, sticky parts clear of focus (the `scroll-padding` tokens), charts with a summary and table view, and motion that respects `prefers-reduced-motion`. Every block has one `h1`.
6. Add or update its entry in `registry.ts` (`status: "built"`), and its row below.
7. If it needs a component `@graftwork/ui` doesn't have, don't write your own: park it (`status: "parked"` with a `reason`) and list it under [Parked blocks](#parked-blocks). New components are added in `graftwork-studio/design-system`.
8. Commit visual baselines (add the `update-snapshots` label) and update its Figma component (see [Keeping Figma in step](#keeping-figma-in-step)).

## The gallery

`/blocks` lists every block from `registry.ts`, grouped by category, with search and a category filter. Each preview is a scaled-down iframe of `/blocks/preview/<id>`, which shows the block on its own at full size. The tests load that route directly.

The gallery is on in development and in the test build, and returns 404 in a production build unless `GRAFTWORK_BLOCKS_GALLERY=enabled` is set when building. `pnpm build:test` sets it.

## Inventory

Taken on 24 November 2026 from the shadcn/ui registry (CLI 4.23.0). `app/blocks/inventory.ts` holds the same list for the tests.

- **Page blocks (30):** upstream offers 27 page blocks plus 3 internal previews for the React Aria base (`aria-nova` style). The Radix (`radix-nova`) and Base UI (`base-nova`) styles offer the same 30. All 27 page blocks use components we have, apart from `dashboard-01`'s area chart and draggable table rows.
- **Chart blocks (70):** upstream offers these for the Radix base only (`new-york-v4`). They don't exist in the `aria-nova` registry. They are Recharts examples in a card, and most need chart types we don't have. Three bar charts can be built with `BarChart`.
- **Figma:** all 67 `@graftwork/ui` components are in the Graftwork Design System library (`PROGRESS.md` predates the last ten being published). The Figma library has no chart beyond BarChart, so "Missing in Figma" matches "Missing in code" for charts.

### Build batches

| Batch | Category | Blocks | Built | Parked | Notes |
| --- | --- | --- | --- | --- | --- |
| 1 (pilot) | Login | 5 | — | 0 | No missing components |
| 2 | Sign-up | 5 | — | 0 | No missing components |
| 3 | Sidebar | 16 | — | 0 | No missing components |
| 4 | Charts | 70 | — | 67 | `chart-bar-default`, `chart-bar-multiple` and `chart-bar-interactive` can be built |
| 5 | Dashboard and upstream previews | 4 | — | 4 | Parked |

### All blocks

| Block | Category | Description | Components | Missing in code | Missing in Figma | Batch | Status | Figma |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `login-01` | Login | A log-in form in a card. | Button, Card, Field, Input, Label | — | — | 1 | To build | — |
| `login-02` | Login | A two-column log-in page with a cover image. | Button, Field, Input, Label | — | — | 1 | To build | — |
| `login-03` | Login | A log-in card on a muted background, with other sign-in options first. | Button, Card, Field, Input, Label | — | — | 1 | To build | — |
| `login-04` | Login | A log-in card with the form beside an image. | Button, Card, Field, Input, Label | — | — | 1 | To build | — |
| `login-05` | Login | An email-only log-in page. | Button, Field, Input, Label | — | — | 1 | To build | — |
| `signup-01` | Sign-up | A sign-up form in a card. | Button, Card, Field, Input, Label | — | — | 2 | To build | — |
| `signup-02` | Sign-up | A two-column sign-up page with a cover image. | Button, Field, Input, Label | — | — | 2 | To build | — |
| `signup-03` | Sign-up | A sign-up card on a muted background. | Button, Card, Field, Input, Label | — | — | 2 | To build | — |
| `signup-04` | Sign-up | A sign-up card with the form beside an image. | Button, Card, Field, Input, Label | — | — | 2 | To build | — |
| `signup-05` | Sign-up | A sign-up form with other sign-up options. | Button, Field, Input, Label | — | — | 2 | To build | — |
| `sidebar-01` | Sidebar | A sidebar with navigation grouped by section. | Breadcrumb, DropdownMenu, Label, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-02` | Sidebar | A sidebar with collapsible sections. | Breadcrumb, DropdownMenu, Label, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-03` | Sidebar | A sidebar with submenus. | Breadcrumb, Sidebar | — | — | 3 | To build | — |
| `sidebar-04` | Sidebar | A floating sidebar with submenus. | Breadcrumb, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-05` | Sidebar | A sidebar with collapsible submenus. | Breadcrumb, Collapsible, Label, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-06` | Sidebar | A sidebar with submenus as dropdown menus. | Breadcrumb, Card, DropdownMenu, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-07` | Sidebar | A sidebar that collapses to icons. | Avatar, Breadcrumb, Collapsible, DropdownMenu, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-08` | Sidebar | An inset sidebar with secondary navigation. | Avatar, Breadcrumb, Collapsible, DropdownMenu, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-09` | Sidebar | Collapsible nested sidebars. | Avatar, Breadcrumb, Collapsible, DropdownMenu, Label, Separator, Sidebar, Switch | — | — | 3 | To build | — |
| `sidebar-10` | Sidebar | A sidebar in a popover. | Breadcrumb, Collapsible, DropdownMenu, Popover, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-11` | Sidebar | A sidebar with a collapsible file tree. | Breadcrumb, Collapsible, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-12` | Sidebar | A sidebar with a calendar. | Avatar, Breadcrumb, Calendar, Collapsible, DropdownMenu, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-13` | Sidebar | A sidebar in a dialog. | Breadcrumb, Button, Dialog, Sidebar | — | — | 3 | To build | — |
| `sidebar-14` | Sidebar | A sidebar on the right. | Breadcrumb, Sidebar | — | — | 3 | To build | — |
| `sidebar-15` | Sidebar | A left and a right sidebar. | Avatar, Breadcrumb, Calendar, Collapsible, DropdownMenu, Popover, Separator, Sidebar | — | — | 3 | To build | — |
| `sidebar-16` | Sidebar | A sidebar with a sticky site header. | Avatar, Breadcrumb, Button, Collapsible, DropdownMenu, Label, Separator, Sidebar | — | — | 3 | To build | — |
| `chart-area-axes` | Charts | A area chart example (axes). | Card, AreaChart | AreaChart | AreaChart | 4 | Parked | — |
| `chart-area-default` | Charts | A area chart example (default). | Card, AreaChart | AreaChart | AreaChart | 4 | Parked | — |
| `chart-area-gradient` | Charts | A area chart example (gradient). | Card, AreaChart | AreaChart | AreaChart | 4 | Parked | — |
| `chart-area-icons` | Charts | A area chart example (icons). | Card, AreaChart | AreaChart | AreaChart | 4 | Parked | — |
| `chart-area-interactive` | Charts | A area chart example (interactive). | Card, AreaChart | AreaChart | AreaChart | 4 | Parked | — |
| `chart-area-legend` | Charts | A area chart example (legend). | Card, AreaChart | AreaChart | AreaChart | 4 | Parked | — |
| `chart-area-linear` | Charts | A area chart example (linear). | Card, AreaChart | AreaChart | AreaChart | 4 | Parked | — |
| `chart-area-stacked` | Charts | A area chart example (stacked). | Card, AreaChart | AreaChart | AreaChart | 4 | Parked | — |
| `chart-area-stacked-expand` | Charts | A area chart example (stacked expand). | Card, AreaChart | AreaChart | AreaChart | 4 | Parked | — |
| `chart-area-step` | Charts | A area chart example (step). | Card, AreaChart | AreaChart | AreaChart | 4 | Parked | — |
| `chart-bar-active` | Charts | A bar chart with a highlighted (active) bar. | Card, BarChart | BarChart support for a highlighted (active) bar | BarChart support for a highlighted (active) bar | 4 | Parked | — |
| `chart-bar-default` | Charts | A bar chart with one series. | BarChart, Card | — | — | 4 | To build | — |
| `chart-bar-horizontal` | Charts | A bar chart with horizontal bars. | Card, BarChart | BarChart support for horizontal bars | BarChart support for horizontal bars | 4 | Parked | — |
| `chart-bar-interactive` | Charts | A bar chart with daily data and a control to switch series. | BarChart, Card, ToggleGroup | — | — | 4 | To build | — |
| `chart-bar-label` | Charts | A bar chart with value labels on bars. | Card, BarChart | BarChart support for value labels on bars | BarChart support for value labels on bars | 4 | Parked | — |
| `chart-bar-label-custom` | Charts | A bar chart with custom labels inside bars. | Card, BarChart | BarChart support for custom labels inside bars | BarChart support for custom labels inside bars | 4 | Parked | — |
| `chart-bar-mixed` | Charts | A bar chart with a different colour per bar. | Card, BarChart | BarChart support for a different colour per bar | BarChart support for a different colour per bar | 4 | Parked | — |
| `chart-bar-multiple` | Charts | A bar chart with two series side by side. | BarChart, Card | — | — | 4 | To build | — |
| `chart-bar-negative` | Charts | A bar chart with negative values with their own colour. | Card, BarChart | BarChart support for negative values with their own colour | BarChart support for negative values with their own colour | 4 | Parked | — |
| `chart-bar-stacked` | Charts | A bar chart with stacked series. | Card, BarChart | BarChart support for stacked series | BarChart support for stacked series | 4 | Parked | — |
| `chart-line-default` | Charts | A line chart example (default). | Card, LineChart | LineChart | LineChart | 4 | Parked | — |
| `chart-line-dots` | Charts | A line chart example (dots). | Card, LineChart | LineChart | LineChart | 4 | Parked | — |
| `chart-line-dots-colors` | Charts | A line chart example (dots colors). | Card, LineChart | LineChart | LineChart | 4 | Parked | — |
| `chart-line-dots-custom` | Charts | A line chart example (dots custom). | Card, LineChart | LineChart | LineChart | 4 | Parked | — |
| `chart-line-interactive` | Charts | A line chart example (interactive). | Card, LineChart | LineChart | LineChart | 4 | Parked | — |
| `chart-line-label` | Charts | A line chart example (label). | Card, LineChart | LineChart | LineChart | 4 | Parked | — |
| `chart-line-label-custom` | Charts | A line chart example (label custom). | Card, LineChart | LineChart | LineChart | 4 | Parked | — |
| `chart-line-linear` | Charts | A line chart example (linear). | Card, LineChart | LineChart | LineChart | 4 | Parked | — |
| `chart-line-multiple` | Charts | A line chart example (multiple). | Card, LineChart | LineChart | LineChart | 4 | Parked | — |
| `chart-line-step` | Charts | A line chart example (step). | Card, LineChart | LineChart | LineChart | 4 | Parked | — |
| `chart-pie-donut` | Charts | A pie chart example (donut). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-pie-donut-active` | Charts | A pie chart example (donut active). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-pie-donut-text` | Charts | A pie chart example (donut text). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-pie-interactive` | Charts | A pie chart example (interactive). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-pie-label` | Charts | A pie chart example (label). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-pie-label-custom` | Charts | A pie chart example (label custom). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-pie-label-list` | Charts | A pie chart example (label list). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-pie-legend` | Charts | A pie chart example (legend). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-pie-separator-none` | Charts | A pie chart example (separator none). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-pie-simple` | Charts | A pie chart example (simple). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-pie-stacked` | Charts | A pie chart example (stacked). | Card, PieChart | PieChart | PieChart | 4 | Parked | — |
| `chart-radar-default` | Charts | A radar chart example (default). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-dots` | Charts | A radar chart example (dots). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-grid-circle` | Charts | A radar chart example (grid circle). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-grid-circle-fill` | Charts | A radar chart example (grid circle fill). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-grid-circle-no-lines` | Charts | A radar chart example (grid circle no lines). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-grid-custom` | Charts | A radar chart example (grid custom). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-grid-fill` | Charts | A radar chart example (grid fill). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-grid-none` | Charts | A radar chart example (grid none). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-icons` | Charts | A radar chart example (icons). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-label-custom` | Charts | A radar chart example (label custom). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-legend` | Charts | A radar chart example (legend). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-lines-only` | Charts | A radar chart example (lines only). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-multiple` | Charts | A radar chart example (multiple). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radar-radius` | Charts | A radar chart example (radius). | Card, RadarChart | RadarChart | RadarChart | 4 | Parked | — |
| `chart-radial-grid` | Charts | A radial chart example (grid). | Card, RadialChart | RadialChart | RadialChart | 4 | Parked | — |
| `chart-radial-label` | Charts | A radial chart example (label). | Card, RadialChart | RadialChart | RadialChart | 4 | Parked | — |
| `chart-radial-shape` | Charts | A radial chart example (shape). | Card, RadialChart | RadialChart | RadialChart | 4 | Parked | — |
| `chart-radial-simple` | Charts | A radial chart example (simple). | Card, RadialChart | RadialChart | RadialChart | 4 | Parked | — |
| `chart-radial-stacked` | Charts | A radial chart example (stacked). | Card, RadialChart | RadialChart | RadialChart | 4 | Parked | — |
| `chart-radial-text` | Charts | A radial chart example (text). | Card, RadialChart | RadialChart | RadialChart | 4 | Parked | — |
| `chart-tooltip-advanced` | Charts | A chart tooltip example (advanced). | Card, BarChart | Custom chart tooltips (ChartTooltip isn’t exported) | Chart tooltip | 4 | Parked | — |
| `chart-tooltip-default` | Charts | A chart tooltip example (default). | Card, BarChart | Custom chart tooltips (ChartTooltip isn’t exported) | Chart tooltip | 4 | Parked | — |
| `chart-tooltip-formatter` | Charts | A chart tooltip example (formatter). | Card, BarChart | Custom chart tooltips (ChartTooltip isn’t exported) | Chart tooltip | 4 | Parked | — |
| `chart-tooltip-icons` | Charts | A chart tooltip example (icons). | Card, BarChart | Custom chart tooltips (ChartTooltip isn’t exported) | Chart tooltip | 4 | Parked | — |
| `chart-tooltip-indicator-line` | Charts | A chart tooltip example (indicator line). | Card, BarChart | Custom chart tooltips (ChartTooltip isn’t exported) | Chart tooltip | 4 | Parked | — |
| `chart-tooltip-indicator-none` | Charts | A chart tooltip example (indicator none). | Card, BarChart | Custom chart tooltips (ChartTooltip isn’t exported) | Chart tooltip | 4 | Parked | — |
| `chart-tooltip-label-custom` | Charts | A chart tooltip example (label custom). | Card, BarChart | Custom chart tooltips (ChartTooltip isn’t exported) | Chart tooltip | 4 | Parked | — |
| `chart-tooltip-label-formatter` | Charts | A chart tooltip example (label formatter). | Card, BarChart | Custom chart tooltips (ChartTooltip isn’t exported) | Chart tooltip | 4 | Parked | — |
| `chart-tooltip-label-none` | Charts | A chart tooltip example (label none). | Card, BarChart | Custom chart tooltips (ChartTooltip isn’t exported) | Chart tooltip | 4 | Parked | — |
| `dashboard-01` | Dashboard | A dashboard with a sidebar, summary cards, an interactive area chart and a data table. | AreaChart, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, DataTable, Drawer, DropdownMenu, Input, Label, Select, Separator, Sheet, Sidebar, Tabs, Toast, ToggleGroup | AreaChart (interactive, with a time-range control), DataTable row reordering by drag and drop | AreaChart | 5 | Parked | — |
| `preview` | Upstream previews | Upstream’s theme preview for its “create” page: a grid of component examples. | — | — | — | 5 | Parked | — |
| `preview-02` | Upstream previews | Upstream’s second theme preview: a grid of component examples, including a QR code. | — | — | — | 5 | Parked | — |
| `preview-03` | Upstream previews | An empty upstream stub (it renders “Preview 03”). | — | — | — | 5 | Parked | — |

## Parked blocks

A parked block can't be built from `@graftwork/ui` yet. Its registry entry has `status: "parked"` and a `reason`, and the gallery lists it separately. It gets no Figma component until it's built.

| Blocks | What's missing | Where it would be added |
| --- | --- | --- |
| `dashboard-01` | AreaChart (interactive, with a time-range control); DataTable row reordering by drag and drop | `@graftwork/ui` (minor) |
| 10 `chart-area-*` | AreaChart | `@graftwork/ui` (minor) |
| 10 `chart-line-*` | LineChart | `@graftwork/ui` (minor) |
| 11 `chart-pie-*` | PieChart | `@graftwork/ui` (minor) |
| 14 `chart-radar-*` | RadarChart | `@graftwork/ui` (minor) |
| 6 `chart-radial-*` | RadialChart | `@graftwork/ui` (minor) |
| 9 `chart-tooltip-*` | Custom chart tooltips: BarChart's tooltip is fixed, and the chart primitives aren't exported | `@graftwork/ui` (minor) |
| `chart-bar-active`, `-horizontal`, `-label`, `-label-custom`, `-mixed`, `-negative`, `-stacked` | BarChart options: an active bar, horizontal layout, value labels, colour per bar, negative values, stacking | `@graftwork/ui` (minor) |
| `preview`, `preview-02`, `preview-03` | Not page layouts. They are upstream's internal theme previews (`preview-03` is an empty stub, `preview-02` also needs a QR code). `ComponentShowcase` already does this job | Not planned |

Each new chart type would follow BarChart: a written summary, a "view as table" toggle, and never colour alone.

## Keeping Figma in step

The code here is the source of truth. Figma is built from it.

- **When a block changes in this template,** update its component set in the Graftwork Blocks file to match (compare a screenshot of `/blocks/preview/<id>` with the Figma block at the same width and theme), then publish the library from **Assets → library icon → Publish**.
- **When a design-system release changes tokens or components,** open Graftwork Blocks after the Graftwork Design System library is published, accept the library updates, and check the blocks in Light, Dark and High contrast. Republish if anything changed.
- **Each component set's description** gives the block id, its path (`app/blocks/<id>`), the upstream id, and the date and `@graftwork/ui` version it was built from. Update it when you rebuild a block.

## Promotion candidates

Blocks stay in the template. Something moves into `@graftwork/ui` only when two real apps need it. Candidates noticed so far:

- **App shell:** sidebar plus a header with a trigger and breadcrumb, with slots. Repeated across all 16 sidebar blocks and `dashboard-01`.
- **Auth page layout:** the centred, two-column and muted-background wrappers repeat across the login and sign-up blocks.
