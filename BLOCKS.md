# Blocks

Blocks are whole page layouts (log-in pages, sidebars, dashboards) that you copy and edit to start a screen. They are rebuilt from [shadcn/ui's blocks](https://ui.shadcn.com/blocks) using only `@graftwork/ui` components and semantic tokens, and they pass the same checks as any other screen.

- **Source:** `app/blocks/<block-id>/`. Edit a block freely in your app; it's yours once the repository is created.
- **Registry:** `app/blocks/registry.ts` lists every block, built or parked. The gallery and the tests read it.
- **Gallery:** `/blocks` shows every block with width and theme controls. See [the gallery](#the-gallery).
- **Figma:** each built block is a component set of the same name in the **Graftwork Blocks** library. Enable it together with the Graftwork Design System library.

New apps get blocks through this template. Apps created earlier don't receive them automatically.

## Adding or changing a block

1. Fetch the upstream block in a scratch folder outside this repository (for example `npx shadcn@latest view <id>`, or the registry JSON at `https://ui.shadcn.com/r/styles/aria-nova/<id>.json`). Never run `shadcn add` here.
2. Rebuild it in `app/blocks/<id>/block.tsx` from `@graftwork/ui` components. A sidebar page starts from `AppShell` and a log-in or sign-up page from `AuthLayout`. Then use our components, with our prop names (see the Figma table in `CLAUDE.md`). Export the block as the file's default export and add it to `app/blocks/components.ts`.
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
| 1 (pilot) | Login | 5 | 5 | 0 | No missing components |
| 2 | Sign-up | 5 | 5 | 0 | No missing components |
| 3 | Sidebar | 16 | 16 | 0 | No missing components |
| 4 | Charts | 70 | 3 | 67 | `chart-bar-default`, `chart-bar-multiple` and `chart-bar-interactive` can be built |
| 5 | Dashboard and upstream previews | 4 | 0 | 4 | Parked |

### All blocks

| Block | Category | Description | Components | Missing in code | Missing in Figma | Batch | Status | Figma |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `login-01` | Login | A log-in form in a card. | Button, Card, Field, Input, Label | — | — | 1 | Built | [login-01](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=4-523) |
| `login-02` | Login | A two-column log-in page with a cover image. | Button, Field, Input, Label | — | — | 1 | Built | [login-02](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=5-254) |
| `login-03` | Login | A log-in card on a muted background, with other sign-in options first. | Button, Card, Field, Input, Label | — | — | 1 | Built | [login-03](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=5-459) |
| `login-04` | Login | A log-in card with the form beside an image. | Button, Card, Field, Input, Label | — | — | 1 | Built | [login-04](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=5-667) |
| `login-05` | Login | An email-only log-in page. | Button, Field, Input, Label | — | — | 1 | Built | [login-05](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=5-812) |
| `signup-01` | Sign-up | A sign-up form in a card. | Button, Card, Field, Input, Label | — | — | 2 | Built | [signup-01](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=14-204) |
| `signup-02` | Sign-up | A two-column sign-up page with a cover image. | Button, Field, Input, Label | — | — | 2 | Built | [signup-02](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=14-439) |
| `signup-03` | Sign-up | A sign-up card on a muted background. | Button, Card, Field, Input, Label | — | — | 2 | Built | [signup-03](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=14-647) |
| `signup-04` | Sign-up | A sign-up card with the form beside an image. | Button, Card, Field, Input, Label | — | — | 2 | Built | [signup-04](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=14-879) |
| `signup-05` | Sign-up | A sign-up form with other sign-up options. | Button, Field, Input, Label | — | — | 2 | Built | [signup-05](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=14-1024) |
| `sidebar-01` | Sidebar | A sidebar with navigation grouped by section. | Breadcrumb, DropdownMenu, Label, Separator, Sidebar | — | — | 3 | Built | [sidebar-01](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=16-442) |
| `sidebar-02` | Sidebar | A sidebar with collapsible sections. | Breadcrumb, DropdownMenu, Label, Separator, Sidebar | — | — | 3 | Built | [sidebar-02](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=16-826) |
| `sidebar-03` | Sidebar | A sidebar with submenus. | Breadcrumb, Sidebar | — | — | 3 | Built | [sidebar-03](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=16-1196) |
| `sidebar-04` | Sidebar | A floating sidebar with submenus. | Breadcrumb, Separator, Sidebar | — | — | 3 | Built | [sidebar-04](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=16-1566) |
| `sidebar-05` | Sidebar | A sidebar with collapsible submenus. | Breadcrumb, Collapsible, Label, Separator, Sidebar | — | — | 3 | Built | [sidebar-05](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=16-1868) |
| `sidebar-06` | Sidebar | A sidebar with submenus as dropdown menus. | Breadcrumb, Card, DropdownMenu, Separator, Sidebar | — | — | 3 | Built | [sidebar-06](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=16-2097) |
| `sidebar-07` | Sidebar | A sidebar that collapses to icons. | Avatar, Breadcrumb, Collapsible, DropdownMenu, Separator, Sidebar | — | — | 3 | Built | [sidebar-07](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=16-2405) |
| `sidebar-08` | Sidebar | An inset sidebar with secondary navigation. | Avatar, Breadcrumb, Collapsible, DropdownMenu, Separator, Sidebar | — | — | 3 | Built | [sidebar-08](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=16-2713) |
| `sidebar-09` | Sidebar | Collapsible nested sidebars. | Avatar, Breadcrumb, Collapsible, DropdownMenu, Label, Separator, Sidebar, Switch | — | — | 3 | Built | [sidebar-09](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=17-1372) |
| `sidebar-10` | Sidebar | A sidebar in a popover. | Breadcrumb, Collapsible, DropdownMenu, Popover, Separator, Sidebar | — | — | 3 | Built | [sidebar-10](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=17-1738) |
| `sidebar-11` | Sidebar | A sidebar with a collapsible file tree. | Breadcrumb, Collapsible, Separator, Sidebar | — | — | 3 | Built | [sidebar-11](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=17-2049) |
| `sidebar-12` | Sidebar | A sidebar with a calendar. | Avatar, Breadcrumb, Calendar, Collapsible, DropdownMenu, Separator, Sidebar | — | — | 3 | Built | [sidebar-12](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=17-2824) |
| `sidebar-13` | Sidebar | A sidebar in a dialog. | Breadcrumb, Button, Dialog, Sidebar | — | — | 3 | Built | [sidebar-13](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=17-3063) |
| `sidebar-14` | Sidebar | A sidebar on the right. | Breadcrumb, Sidebar | — | — | 3 | Built | [sidebar-14](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=17-3409) |
| `sidebar-15` | Sidebar | A left and a right sidebar. | Avatar, Breadcrumb, Calendar, Collapsible, DropdownMenu, Popover, Separator, Sidebar | — | — | 3 | Built | [sidebar-15](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=17-3865) |
| `sidebar-16` | Sidebar | A sidebar with a sticky site header. | Avatar, Breadcrumb, Button, Collapsible, DropdownMenu, Label, Separator, Sidebar | — | — | 3 | Built | [sidebar-16](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=17-4202) |
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
| `chart-bar-default` | Charts | A bar chart with one series. | BarChart, Card | — | — | 4 | Built | [chart-bar-default](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=15-326) |
| `chart-bar-horizontal` | Charts | A bar chart with horizontal bars. | Card, BarChart | BarChart support for horizontal bars | BarChart support for horizontal bars | 4 | Parked | — |
| `chart-bar-interactive` | Charts | A bar chart with a control to switch series. | BarChart, Card, ToggleGroup | — | — | 4 | Built | [chart-bar-interactive](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=15-878) |
| `chart-bar-label` | Charts | A bar chart with value labels on bars. | Card, BarChart | BarChart support for value labels on bars | BarChart support for value labels on bars | 4 | Parked | — |
| `chart-bar-label-custom` | Charts | A bar chart with custom labels inside bars. | Card, BarChart | BarChart support for custom labels inside bars | BarChart support for custom labels inside bars | 4 | Parked | — |
| `chart-bar-mixed` | Charts | A bar chart with a different colour per bar. | Card, BarChart | BarChart support for a different colour per bar | BarChart support for a different colour per bar | 4 | Parked | — |
| `chart-bar-multiple` | Charts | A bar chart with two series side by side. | BarChart, Card | — | — | 4 | Built | [chart-bar-multiple](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=15-534) |
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

## How blocks differ from upstream

- **Weekly bars:** `chart-bar-interactive` charts 13 weekly totals instead of upstream's 91 daily bars. BarChart labels every bar, and 91 labels overlap into an unreadable block. A BarChart option to hide value labels would allow the daily version.
- **Headings:** every block has one `h1`. Upstream's sidebar blocks have none, so each now has a visible page heading above its placeholder content.
- **Labels:** search fields have visible labels; upstream hides them.
- **Lists:** upstream's file tree (`sidebar-11`) puts buttons straight into lists; each row is now a list item.
- **Random data:** `sidebar-09` shuffled its messages at random; it now rotates them in a fixed order, so screenshots are stable. `sidebar-12` and `sidebar-15` show a fixed date (12 October 2026) for the same reason.
- **Widths:** `sidebar-09` sets its 22rem width through the `--sidebar-width` variable with a class, because `style` attributes aren't allowed.
- **Calendars:** the calendar lists in `sidebar-12` and `sidebar-15` use Checkbox, so each calendar's on/off state is announced.
- **Passwords:** upstream's `signup-03` and `signup-04` put the password and its confirmation side by side, with one shared hint under both that isn't linked to either field. They're stacked here, each with its own linked hint.

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

## Figma file

[Graftwork Blocks](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks) has a `Blocks: read me` page, then one page per category. Each block is one component set named after its id, with a `breakpoint` property (`desktop` 1280, `tablet` 768, `mobile` 320), text properties for its headings and `show…` booleans for optional parts. Blocks are built by script from instances of the Graftwork Design System components, with every colour, radius, font size and most spacing bound to its variables. Themes come from the `Graftwork colour` modes.

Known differences from the code:

- **Card:** the library's Card holds text only, so a block's card is a frame bound to the same variables as Card (`surface/raised`, `border/default`, `radius/xl`, `space/md`), with `CardHeader` and `CardContent` layers.
- **Spacing without a token:** the code's 20px form gap (`gap-5`) and 40px page padding (`md:p-10`) come from Tailwind's numeric scale, which has no matching `space` variable, so Figma uses the raw values.
- **Input text size:** below 768px the code's inputs use 16px text so iOS doesn't zoom in. The Figma Input is always 14px.
- **Status message:** each form's empty `role="status"` line, used for announcements, isn't drawn.
- **Page layouts:** in code, the sidebar blocks use `AppShell` (except `sidebar-16`) and the log-in and sign-up blocks use `AuthLayout`. In Figma they're built from frames with the same structure and layer names as those components, not from instances of them. Figma has no slots, so an instance would need its sample sidebar or form swapped out and heavily overridden. Each block's description says which layout the code uses.

## Keeping Figma in step

The code here is the source of truth. Figma is built from it.

- **When a block changes in this template,** update its component set in the Graftwork Blocks file to match (compare a screenshot of `/blocks/preview/<id>` with the Figma block at the same width and theme), then publish the library from **Assets → library icon → Publish**.
- **When a design-system release changes tokens or components,** open Graftwork Blocks after the Graftwork Design System library is published, accept the library updates, and check the blocks in Light, Dark and High contrast. Republish if anything changed.
- **When a release changes `AppShell` or `AuthLayout`,** check the blocks built on them in code (`/blocks`) and their Figma components, which follow the same structure.
- **Publishing:** Figma's publish dialog doesn't list a change that only edits a component's description. That's fine to leave: it goes out with the next change Figma does list.
- **Each component set's description** gives the block id, its path (`app/blocks/<id>`), the upstream id, and the date and `@graftwork/ui` version it was built from. Update it when you rebuild a block.

## Promotion candidates

Blocks stay in the template. Something moves into `@graftwork/ui` only when it's worth sharing across apps.

**Promoted in `@graftwork/ui` 2.5.0:**

- **AppShell** (with AppShellHeader and AppShellContent): the sidebar, sticky header with trigger and breadcrumb, and main area that repeated across the sidebar blocks. Every sidebar block uses it except `sidebar-16`, whose site header sits above the sidebar rather than inside the main area.
- **AuthLayout**: the centred, muted and split page layouts that repeated across all ten log-in and sign-up blocks, which all use it.

Both are in the Graftwork Design System Figma library.

**Still candidates:**

- **Sidebar parts:** the team or version switcher, user menu and project and secondary navigation are still copied into each sidebar block. They vary too much between blocks to share yet.
- **A site header above the sidebar** (`sidebar-16`), if a second app needs one.
