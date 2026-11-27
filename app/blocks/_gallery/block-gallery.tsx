"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Empty,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  ToggleGroup,
  ToggleGroupItem,
  type ThemeChoice,
} from "@graftwork/ui";
import { useId, useMemo, useState } from "react";
import { type BlockCategory, type BuiltBlock, builtBlocks, parkedBlocks } from "../registry";

const WIDTHS = [320, 768, 1280] as const;
type Width = (typeof WIDTHS)[number];

const THEMES: { id: ThemeChoice; name: string }[] = [
  { id: "system", name: "System" },
  { id: "light", name: "Light" },
  { id: "dark", name: "Dark" },
  { id: "high-contrast", name: "High contrast" },
];

/*
 * Previews are iframes at the real width, scaled down to fit a box whose width
 * is fixed at each gallery breakpoint (248px, then 560px from sm, 720px from lg).
 * Tailwind needs whole class names, so each width has its own scale and height.
 * The iframe is 800px tall; the box is 800px times the scale.
 */
const FRAME: Record<Width, { box: string; frame: string }> = {
  1280: {
    box: "h-[155px] sm:h-[350px] lg:h-[450px]",
    frame: "w-[1280px] scale-[0.19375] sm:scale-[0.4375] lg:scale-[0.5625]",
  },
  768: {
    box: "h-[258px] sm:h-[583px] lg:h-[750px]",
    frame: "w-[768px] scale-[0.3229] sm:scale-[0.7292] lg:scale-[0.9375]",
  },
  320: {
    box: "h-[620px] sm:h-[800px]",
    frame: "w-[320px] scale-[0.775] sm:scale-100",
  },
};

function previewHref(id: string, theme: ThemeChoice) {
  return theme === "system" ? `/blocks/preview/${id}` : `/blocks/preview/${id}?theme=${theme}`;
}

function matches(text: string, query: string) {
  return text.toLowerCase().includes(query.trim().toLowerCase());
}

export function BlockGallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlockCategory | "all">("all");
  const [parkedOpen, setParkedOpen] = useState(false);

  const categories = useMemo(() => [...new Set(builtBlocks.map((block) => block.category))], []);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(categories.slice(0, 1)));

  const inScope = (block: { id: string; title: string; description: string; category: BlockCategory }) =>
    (category === "all" || block.category === category) &&
    (query.trim() === "" || [block.id, block.title, block.description].some((text) => matches(text, query)));

  const shown = builtBlocks.filter(inScope);
  const shownParked = parkedBlocks.filter(inScope);
  const allCategories = [...new Set([...builtBlocks, ...parkedBlocks].map((block) => block.category))];

  return (
    <div className="flex flex-col gap-6">
      <search className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Search blocks" type="search" value={query} onChange={setQuery} />
        <Select
          label="Category"
          selectedKey={category}
          onSelectionChange={(key) => setCategory((key ?? "all") as BlockCategory | "all")}
        >
          <SelectItem id="all">All categories</SelectItem>
          {allCategories.map((name) => (
            <SelectItem key={name} id={name}>
              {name}
            </SelectItem>
          ))}
        </Select>
      </search>

      <p role="status" className="text-sm text-text-secondary">
        {shown.length === 1 ? "1 block" : `${shown.length} blocks`}
        {shownParked.length > 0 ? `, ${shownParked.length} parked` : null}
      </p>

      {shown.length === 0 ? (
        <Empty title="No blocks match" description="Try another search or category." />
      ) : (
        <Accordion
          allowsMultipleExpanded
          expandedKeys={expanded}
          onExpandedChange={(keys) => setExpanded(new Set([...keys].map(String)))}
        >
          {categories
            .filter((name) => shown.some((block) => block.category === name))
            .map((name) => {
              const inCategory = shown.filter((block) => block.category === name);
              return (
                <AccordionItem key={name} id={name}>
                  <AccordionTrigger level={2}>
                    {name} ({inCategory.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Previews only exist while their category is open, so the page stays light. */}
                    {expanded.has(name) ? (
                      <ul className="flex flex-col gap-6 pb-6">
                        {inCategory.map((block) => (
                          <li key={block.id}>
                            <BlockEntry block={block} />
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
        </Accordion>
      )}

      {/* Collapsed by default: the list only matters when you're looking for what's missing. Hidden when nothing is parked. */}
      {parkedBlocks.length > 0 ? (
        <Accordion
          expandedKeys={parkedOpen ? ["parked"] : []}
          onExpandedChange={(keys) => setParkedOpen(keys.size > 0)}
        >
          <AccordionItem id="parked">
            <AccordionTrigger level={2}>Parked blocks ({shownParked.length})</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3 pb-6">
                <p className="text-text-secondary">
                  These need a component or feature that the design system doesn’t have yet. BLOCKS.md says what each is
                  waiting for.
                </p>
                {parkedOpen && shownParked.length > 0 ? (
                  <Table aria-label="Parked blocks" density="compact">
                    <TableHeader>
                      <TableColumn isRowHeader>Block</TableColumn>
                      <TableColumn>Category</TableColumn>
                      <TableColumn>Why it’s parked</TableColumn>
                    </TableHeader>
                    <TableBody items={shownParked}>
                      {(block) => (
                        <TableRow id={block.id}>
                          <TableCell>{block.id}</TableCell>
                          <TableCell>{block.category}</TableCell>
                          <TableCell>{block.reason}</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                ) : null}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : null}
    </div>
  );
}

function BlockEntry({ block }: { block: BuiltBlock }) {
  const [width, setWidth] = useState<Width>(1280);
  const [theme, setTheme] = useState<ThemeChoice>("system");
  const widthLabel = useId();
  const href = previewHref(block.id, theme);
  const frame = FRAME[width];

  return (
    <Card data-block={block.id}>
      <CardHeader>
        <CardTitle level={3}>{block.title}</CardTitle>
        <CardDescription>{block.description}</CardDescription>
        <p className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
          <Badge variant="outline">{block.id}</Badge>
          Based on shadcn/ui {block.upstream.id}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex flex-col gap-2">
            <span id={widthLabel} className="text-sm font-medium">
              Width
            </span>
            <ToggleGroup
              aria-labelledby={widthLabel}
              variant="secondary"
              size="sm"
              disallowEmptySelection
              selectedKeys={[String(width)]}
              onSelectionChange={(keys) => {
                const [key] = [...keys];
                if (key !== undefined) setWidth(Number(key) as Width);
              }}
            >
              {WIDTHS.map((value) => (
                <ToggleGroupItem key={value} id={String(value)}>
                  {value}px
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          <Select
            label="Theme"
            className="w-40"
            selectedKey={theme}
            onSelectionChange={(key) => setTheme((key ?? "system") as ThemeChoice)}
          >
            {THEMES.map((option) => (
              <SelectItem key={option.id} id={option.id}>
                {option.name}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div
          className={`w-[248px] overflow-hidden rounded-lg border border-border-default bg-surface-default sm:w-[560px] lg:w-[720px] ${frame.box}`}
        >
          {/* A thumbnail: inert, so keyboard and screen reader users go to the full-size preview instead. */}
          <iframe
            key={`${width}-${theme}`}
            src={href}
            title={`Preview of ${block.title} at ${width}px`}
            loading="lazy"
            inert
            className={`h-[800px] max-w-none origin-top-left ${frame.frame}`}
          />
        </div>

        <p className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <a href={href}>
            Open {block.title} full size
            <span className="sr-only"> ({THEMES.find((t) => t.id === theme)?.name} theme)</span>
          </a>
          {block.figma ? (
            <a href={block.figma}>Open {block.title} in Figma</a>
          ) : (
            <span className="text-text-secondary">Not in Figma yet</span>
          )}
        </p>
      </CardContent>
    </Card>
  );
}
