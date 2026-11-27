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

- **Page blocks (29):** upstream offers 27 page blocks plus 3 internal previews for the React Aria base (`aria-nova` style). The Radix (`radix-nova`) and Base UI (`base-nova`) styles offer the same 30. `preview-03` is an empty stub (it renders “Preview 03”), so it isn't listed here. All 27 page blocks and `preview` use components we have; `preview-02` needs `QrCode`. `dashboard-01`'s draggable table rows use DataTable's `onReorder`, added in `@graftwork/ui` 2.9.0.
- **Chart blocks (70):** upstream offers these for the Radix base only (`new-york-v4`). They don't exist in the `aria-nova` registry. They are Recharts examples in a card. All 70 are built with `BarChart`, `LineChart`, `AreaChart`, `PieChart`, `RadialChart` and `RadarChart`.
- **Figma:** all 74 `@graftwork/ui` components are in the Graftwork Design System library. The Figma library has all six charts, with their options, so "Missing in Figma" matches "Missing in code" for charts.

### Build batches

| Batch | Category | Blocks | Built | Parked | Notes |
| --- | --- | --- | --- | --- | --- |
| 1 (pilot) | Login | 5 | 5 | 0 | No missing components |
| 2 | Sign-up | 5 | 5 | 0 | No missing components |
| 3 | Sidebar | 16 | 16 | 0 | No missing components |
| 4 | Charts | 70 | 70 | 0 | Ten bar charts with `BarChart`, seven line charts with `LineChart` and eight area charts with `AreaChart` (`@graftwork/ui` 2.6.0); eleven pie charts with `PieChart`, six radial charts with `RadialChart` and eleven radar charts with `RadarChart` (2.7.0); the last seventeen, including nine tooltip examples, with the chart options added in 2.8.0 |
| 5 | Dashboard and upstream previews | 3 | 2 | 1 | `dashboard-01` with DataTable row reordering (`@graftwork/ui` 2.9.0) and `preview`. `preview-02` is parked until `QrCode` is released |

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
| `chart-area-axes` | Charts | A stacked area chart with a value axis. | Card, AreaChart | — | — | 4 | Built | [chart-area-axes](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-4849) |
| `chart-area-default` | Charts | An area chart with one series. | Card, AreaChart | — | — | 4 | Built | [chart-area-default](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-3266) |
| `chart-area-gradient` | Charts | A stacked area chart with gradient fills. | Card, AreaChart | — | — | 4 | Built | [chart-area-gradient](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-7470) |
| `chart-area-icons` | Charts | A stacked area chart with icons in the legend. | Card, AreaChart | — | — | 4 | Built | [chart-area-icons](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-7648) |
| `chart-area-interactive` | Charts | A stacked area chart of daily figures with a time-range control. | Card, AreaChart | — | — | 4 | Built | [chart-area-interactive](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-5899) |
| `chart-area-legend` | Charts | A stacked area chart with a legend. | Card, AreaChart | — | — | 4 | Built | [chart-area-legend](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-4524) |
| `chart-area-linear` | Charts | An area chart with straight lines between points. | Card, LineChart | — | — | 4 | Built | [chart-area-linear](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-3577) |
| `chart-area-stacked` | Charts | An area chart with two stacked series. | Card, AreaChart | — | — | 4 | Built | [chart-area-stacked](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-4199) |
| `chart-area-stacked-expand` | Charts | An area chart showing each series' share of the total. | Card, AreaChart | — | — | 4 | Built | [chart-area-stacked-expand](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-5174) |
| `chart-area-step` | Charts | An area chart drawn as steps. | Card, AreaChart | — | — | 4 | Built | [chart-area-step](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-3888) |
| `chart-bar-active` | Charts | A bar chart with a highlighted (active) bar. | Card, BarChart | — | — | 4 | Built | [chart-bar-active](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-4111) |
| `chart-bar-default` | Charts | A bar chart with one series. | BarChart, Card | — | — | 4 | Built | [chart-bar-default](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=15-326) |
| `chart-bar-horizontal` | Charts | A bar chart with horizontal bars. | Card, BarChart | — | — | 4 | Built | [chart-bar-horizontal](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-4745) |
| `chart-bar-interactive` | Charts | A bar chart with a control to switch series. | BarChart, Card, ToggleGroup | — | — | 4 | Built | [chart-bar-interactive](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=15-878) |
| `chart-bar-label` | Charts | A bar chart with value labels on bars. | Card, BarChart | — | — | 4 | Built | [chart-bar-label](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-5091) |
| `chart-bar-label-custom` | Charts | A bar chart with custom labels inside bars. | Card, BarChart | — | — | 4 | Built | [chart-bar-label-custom](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-5437) |
| `chart-bar-mixed` | Charts | A bar chart with a different colour per bar. | Card, BarChart | — | — | 4 | Built | [chart-bar-mixed](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-5747) |
| `chart-bar-multiple` | Charts | A bar chart with two series side by side. | BarChart, Card | — | — | 4 | Built | [chart-bar-multiple](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=15-534) |
| `chart-bar-negative` | Charts | A bar chart with negative values with their own colour. | Card, BarChart | — | — | 4 | Built | [chart-bar-negative](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-6492) |
| `chart-bar-stacked` | Charts | A bar chart with stacked series. | Card, BarChart | — | — | 4 | Built | [chart-bar-stacked](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-6805) |
| `chart-line-default` | Charts | A line chart with one series. | Card, LineChart | — | — | 4 | Built | [chart-line-default](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-1383) |
| `chart-line-dots` | Charts | A line chart with a dot on each point. | Card, LineChart | — | — | 4 | Built | [chart-line-dots](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-2596) |
| `chart-line-dots-colors` | Charts | A line chart with a colour for each point. | Card, LineChart | — | — | 4 | Built | [chart-line-dots-colors](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-7820) |
| `chart-line-dots-custom` | Charts | A line chart with icons as point markers. | Card, LineChart | — | — | 4 | Built | [chart-line-dots-custom](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-8001) |
| `chart-line-interactive` | Charts | A line chart of daily figures with a control to switch series. | Card, LineChart | — | — | 4 | Built | [chart-line-interactive](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-5598) |
| `chart-line-label` | Charts | A line chart with each point's value. | Card, LineChart | — | — | 4 | Built | [chart-line-label](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-2919) |
| `chart-line-label-custom` | Charts | A line chart with category names on its points. | Card, LineChart | — | — | 4 | Built | [chart-line-label-custom](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-8179) |
| `chart-line-linear` | Charts | A line chart with straight lines between points. | Card, LineChart | — | — | 4 | Built | [chart-line-linear](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-1685) |
| `chart-line-multiple` | Charts | A line chart with two series. | Card, LineChart | — | — | 4 | Built | [chart-line-multiple](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-2283) |
| `chart-line-step` | Charts | A line chart drawn as steps. | Card, LineChart | — | — | 4 | Built | [chart-line-step](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=28-1984) |
| `chart-pie-donut` | Charts | A pie chart example (donut). | Card, PieChart | — | — | 4 | Built | [chart-pie-donut](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-7725) |
| `chart-pie-donut-active` | Charts | A pie chart example (donut active). | Card, PieChart | — | — | 4 | Built | [chart-pie-donut-active](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-8024) |
| `chart-pie-donut-text` | Charts | A pie chart example (donut text). | Card, PieChart | — | — | 4 | Built | [chart-pie-donut-text](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-8316) |
| `chart-pie-interactive` | Charts | A donut chart with a control to highlight a month. | Card, PieChart, Select | — | — | 4 | Built | [chart-pie-interactive](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-10375) |
| `chart-pie-label` | Charts | A pie chart example (label). | Card, PieChart | — | — | 4 | Built | [chart-pie-label](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-8608) |
| `chart-pie-label-custom` | Charts | A pie chart example (label custom). | Card, PieChart | — | — | 4 | Built | [chart-pie-label-custom](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-8910) |
| `chart-pie-label-list` | Charts | A pie chart example (label list). | Card, PieChart | — | — | 4 | Built | [chart-pie-label-list](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-9205) |
| `chart-pie-legend` | Charts | A pie chart example (legend). | Card, PieChart | — | — | 4 | Built | [chart-pie-legend](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-9507) |
| `chart-pie-separator-none` | Charts | A pie chart example (separator none). | Card, PieChart | — | — | 4 | Built | [chart-pie-separator-none](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-9790) |
| `chart-pie-simple` | Charts | A pie chart example (simple). | Card, PieChart | — | — | 4 | Built | [chart-pie-simple](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-7435) |
| `chart-pie-stacked` | Charts | A pie chart example (stacked). | Card, PieChart | — | — | 4 | Built | [chart-pie-stacked](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-10073) |
| `chart-radar-default` | Charts | A radar chart example (default). | Card, RadarChart | — | — | 4 | Built | [chart-radar-default](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-12737) |
| `chart-radar-dots` | Charts | A radar chart example (dots). | Card, RadarChart | — | — | 4 | Built | [chart-radar-dots](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-13060) |
| `chart-radar-grid-circle` | Charts | A radar chart example (grid circle). | Card, RadarChart | — | — | 4 | Built | [chart-radar-grid-circle](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-14362) |
| `chart-radar-grid-circle-fill` | Charts | A radar chart example (grid circle fill). | Card, RadarChart | — | — | 4 | Built | [chart-radar-grid-circle-fill](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-14685) |
| `chart-radar-grid-circle-no-lines` | Charts | A radar chart example (grid circle no lines). | Card, RadarChart | — | — | 4 | Built | [chart-radar-grid-circle-no-lines](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-15001) |
| `chart-radar-grid-custom` | Charts | A radar chart example (grid custom). | Card, RadarChart | — | — | 4 | Built | [chart-radar-grid-custom](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-15317) |
| `chart-radar-grid-fill` | Charts | A radar chart example (grid fill). | Card, RadarChart | — | — | 4 | Built | [chart-radar-grid-fill](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-15633) |
| `chart-radar-grid-none` | Charts | A radar chart example (grid none). | Card, RadarChart | — | — | 4 | Built | [chart-radar-grid-none](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-15949) |
| `chart-radar-icons` | Charts | A radar chart with icons in the legend. | Card, RadarChart | — | — | 4 | Built | [chart-radar-icons](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-8357) |
| `chart-radar-label-custom` | Charts | A radar chart with each series' value on its axis labels. | Card, RadarChart | — | — | 4 | Built | [chart-radar-label-custom](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-8538) |
| `chart-radar-legend` | Charts | A radar chart example (legend). | Card, RadarChart | — | — | 4 | Built | [chart-radar-legend](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-14046) |
| `chart-radar-lines-only` | Charts | A radar chart example (lines only). | Card, RadarChart | — | — | 4 | Built | [chart-radar-lines-only](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-13735) |
| `chart-radar-multiple` | Charts | A radar chart example (multiple). | Card, RadarChart | — | — | 4 | Built | [chart-radar-multiple](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-13419) |
| `chart-radar-radius` | Charts | A radar chart with a value scale along one radius. | Card, RadarChart | — | — | 4 | Built | [chart-radar-radius](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-8716) |
| `chart-radial-grid` | Charts | A radial chart example (grid). | Card, RadialChart | — | — | 4 | Built | [chart-radial-grid](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-11687) |
| `chart-radial-label` | Charts | A radial chart example (label). | Card, RadialChart | — | — | 4 | Built | [chart-radial-label](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-11379) |
| `chart-radial-shape` | Charts | A radial chart example (shape). | Card, RadialChart | — | — | 4 | Built | [chart-radial-shape](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-12227) |
| `chart-radial-simple` | Charts | A radial chart example (simple). | Card, RadialChart | — | — | 4 | Built | [chart-radial-simple](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-11083) |
| `chart-radial-stacked` | Charts | A radial chart example (stacked). | Card, RadialChart | — | — | 4 | Built | [chart-radial-stacked](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-12471) |
| `chart-radial-text` | Charts | A radial chart example (text). | Card, RadialChart | — | — | 4 | Built | [chart-radial-text](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=49-11976) |
| `chart-tooltip-advanced` | Charts | A stacked bar chart whose tooltip has units and a total. | Card, BarChart | — | — | 4 | Built | [chart-tooltip-advanced](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-8894) |
| `chart-tooltip-default` | Charts | A stacked bar chart with the default tooltip. | Card, BarChart | — | — | 4 | Built | [chart-tooltip-default](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-9114) |
| `chart-tooltip-formatter` | Charts | A stacked bar chart whose values carry a unit. | Card, BarChart | — | — | 4 | Built | [chart-tooltip-formatter](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-9331) |
| `chart-tooltip-icons` | Charts | A stacked bar chart with icons in the tooltip and legend. | Card, BarChart | — | — | 4 | Built | [chart-tooltip-icons](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-9548) |
| `chart-tooltip-indicator-line` | Charts | A stacked bar chart whose tooltip marks each row with a line. | Card, BarChart | — | — | 4 | Built | [chart-tooltip-indicator-line](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-9765) |
| `chart-tooltip-indicator-none` | Charts | A stacked bar chart whose tooltip has no row markers. | Card, BarChart | — | — | 4 | Built | [chart-tooltip-indicator-none](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-9982) |
| `chart-tooltip-label-custom` | Charts | A stacked bar chart whose tooltip heading is a formatted date. | Card, BarChart | — | — | 4 | Built | [chart-tooltip-label-custom](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-10199) |
| `chart-tooltip-label-formatter` | Charts | A stacked bar chart with formatted dates. | Card, BarChart | — | — | 4 | Built | [chart-tooltip-label-formatter](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-10416) |
| `chart-tooltip-label-none` | Charts | A stacked bar chart whose tooltip has no heading or markers. | Card, BarChart | — | — | 4 | Built | [chart-tooltip-label-none](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=56-10633) |
| `dashboard-01` | Dashboard | A dashboard with a sidebar, summary cards, an interactive area chart and a data table. | AreaChart, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, DataTable, Drawer, DropdownMenu, Input, Label, Select, Separator, Sheet, Sidebar, Tabs, Toast, ToggleGroup | — | — | 5 | Built | [dashboard-01](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=59-493) |
| `preview` | Upstream previews | A wall of example cards that shows the theme at a glance: forms, charts, empty states and more. | Alert, AlertDialog, AreaChart, Avatar, Badge, BarChart, Button, ButtonGroup, Card, Checkbox, Dialog, DropdownMenu, Empty, Input, InputGroup, Item, Kbd, NativeSelect, PieChart, Progress, RadioGroup, Select, Separator, Skeleton, Slider, Spinner, Switch, Table, Tabs, Textarea, ToggleGroup, Tooltip | — | — | 5 | Built | [preview](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks?node-id=79-4821) |
| `preview-02` | Upstream previews | Upstream’s second theme preview: a grid of component examples, including a QR code. | — | QrCode | QrCode | 5 | Parked | — |

## How blocks differ from upstream

- **Weekly bars:** `chart-bar-interactive` charts 13 weekly totals instead of upstream's 91 daily bars, because BarChart labelled every bar and 91 labels overlap. Since 2.7.0, `labels="none"` allows the daily version.
- **Four colours:** upstream's mixed, active, pie and radial blocks show five browsers. Charts have four series colours, so these blocks show four categories. `PieChart` combines anything beyond four slices into "Other", and `RadialChart` shows the table instead of more than four rings.
- **Gaps between marks:** slices, rings and stacked segments are always separated by a 2px gap in the surface colour, because neighbouring chart colours aren't 3:1 against each other. `chart-pie-separator-none` therefore has the gap too.
- **Labels on the surface:** names and values never sit directly on a fill. `chart-pie-label-list` and `chart-radial-label` put names outside the slices or beside each ring, and `chart-bar-label-custom` puts month names on a surface-coloured chip inside each bar.
- **Highlights:** a highlighted bar gets a ring and a highlighted slice is drawn larger, so the highlight isn't colour alone. The table row says "(highlighted)". `chart-pie-interactive` charts four months and picks the highlighted one with a labelled `Select`.
- **Radial targets and tracks:** upstream's `chart-radial-text` and `-shape` draw a fixed arc on a background track. Here the arc is the value against a target (`max`), and there's no track, because a ring ending against one wouldn't meet 3:1. `chart-radial-grid` has no grid.
- **Radar grids:** the grid is dashed and drawn in `chart.axis` at 3:1. Upstream's filled grids (`chart-radar-grid-fill`, `-grid-circle-fill`) and custom grids (`-grid-custom`, `-grid-circle-no-lines`) use the nearest RadarChart grid.
- **Negative bars:** `chart-bar-negative` labels bars with their value, not the month, and names months on the axis. Negative bars use the second chart colour and its stripes.
- **Daily line and area charts:** `chart-line-interactive` and `chart-area-interactive` chart 91 days of smooth, fixed sample figures, so screenshots are stable. `chart-area-interactive`'s time range is a labelled `Select`, and its areas have a flat 40% fill instead of upstream's gradient.
- **Legends and axes:** `LineChart` and `AreaChart` always show a legend above the chart and a value axis. `chart-area-legend` and `chart-area-axes` therefore match `chart-area-stacked` apart from their copy; upstream's legend sits below the chart, and its default area charts hide the value axis.
- **Curves:** upstream's smooth lines use Recharts' `natural` curve, which can overshoot the data. `curve="smooth"` uses `monotone`, which never does.
- **Headings:** every block has one `h1`. Upstream's sidebar blocks have none, so each now has a visible page heading above its placeholder content.
- **Labels:** search fields have visible labels; upstream hides them.
- **Lists:** upstream's file tree (`sidebar-11`) puts buttons straight into lists; each row is now a list item.
- **Random data:** `sidebar-09` shuffled its messages at random; it now rotates them in a fixed order, so screenshots are stable. `sidebar-12` and `sidebar-15` show a fixed date (12 October 2026) for the same reason.
- **Widths:** `sidebar-09` sets its 22rem width through the `--sidebar-width` variable with a class, because `style` attributes aren't allowed.
- **Calendars:** the calendar lists in `sidebar-12` and `sidebar-15` use Checkbox, so each calendar's on/off state is announced.
- **Dashboard table:** `dashboard-01`'s rows reorder with DataTable's `onReorder` (React Aria drag and drop, so it works from the keyboard too), and its columns can't be sorted while reordering is on. Upstream edits Target, Limit and Reviewer inside the table; here they're read-only in the table and edited in each section's drawer, because inputs inside a grid fight its arrow keys and need visible labels. Rows per page and first and last page buttons are left out: DataTable pages with `Pagination`. The view tabs wrap on narrow screens instead of becoming a `Select`, and the time range is always a `Select`, not a toggle group. The summary cards' label is a small heading and the figure is text, rather than the figure being the heading.
- **Preview layout:** upstream lays `preview` out on a fixed 3000px canvas that scrolls sideways. Here the cards flow into as many 20rem columns as fit, in upstream's order, down to one column at 320px. Upstream shows the UI elements card twice (once per breakpoint); it appears once here. Its `AssignIssue` and `BarVisualizer` cards are imported but never shown, so they're left out.
- **Preview content:** the theme cards show Graftwork's own tokens and font instead of upstream's style picker. Product names, photos and people became neutral placeholders: a workspace instead of a code host's, an image placeholder, initials instead of profile photos. Prices are in pounds and dates are British. The live waveform card draws a fixed waveform and doesn't use the microphone, so screenshots are stable. The chart cards use the chart's own title and written summary as the card heading, and every input, radio, checkbox and switch has a visible label. The `preview` block's files share `app/blocks/preview/` with the `/blocks/preview/[id]` route.
- **Passwords:** upstream's `signup-03` and `signup-04` put the password and its confirmation side by side, with one shared hint under both that isn't linked to either field. They're stacked here, each with its own linked hint.

## Parked blocks

A parked block can't be built from `@graftwork/ui` yet. Its registry entry has `status: "parked"` and a `reason`, and the gallery lists it separately. It gets no Figma component until it's built.

| Blocks | What's missing | Where it would be added |
| --- | --- | --- |
| `preview-02` | `QrCode`, for its “QR connect” card | `@graftwork/ui`: design-system #101 |

## Figma file

[Graftwork Blocks](https://www.figma.com/design/prmltYKyND4F2ioUj2oqtb/Graftwork-Blocks) has a `Blocks: read me` page, then one page per category. Each block is one component set named after its id, with a `breakpoint` property (`desktop` 1280, `tablet` 768, `mobile` 320), text properties for its headings and `show…` booleans for optional parts. Blocks are built by script from instances of the Graftwork Design System components, with every colour, radius, font size and most spacing bound to its variables. Themes come from the `Graftwork colour` modes.

Known differences from the code:

- **Card:** the library's Card holds text only, so a block's card is a frame bound to the same variables as Card (`surface/raised`, `border/default`, `radius/xl`, `space/md`), with `CardHeader` and `CardContent` layers.
- **Spacing without a token:** the code's 20px form gap (`gap-5`) and 40px page padding (`md:p-10`) come from Tailwind's numeric scale, which has no matching `space` variable, so Figma uses the raw values.
- **Input text size:** below 768px the code's inputs use 16px text so iOS doesn't zoom in. The Figma Input is always 14px.
- **Status message:** each form's empty `role="status"` line, used for announcements, isn't drawn.
- **Charts:** chart blocks use instances of the library charts, which show each chart's sample data rather than the block's figures, and their plots are a fixed width, so at 320px the card crops them. Their titles, summaries and options are set to match the code. `highlight` and `showTotal` are booleans in Figma (see the Figma table in `CLAUDE.md`).
- **Preview columns:** CSS columns rebalance `preview`'s cards at every width. Figma has no columns layout, so each breakpoint splits the cards into three, two or one fixed columns in the same order.
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
