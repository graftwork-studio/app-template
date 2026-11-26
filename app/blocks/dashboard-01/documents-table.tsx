"use client";

import {
  AreaChart,
  Badge,
  Button,
  DataTable,
  type DataTableColumn,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Input,
  Select,
  SelectItem,
  Separator,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "@graftwork/ui";
import { CircleCheckIcon, EllipsisVerticalIcon, LoaderIcon, PlusIcon, TrendingUpIcon } from "lucide-react";
import { useState } from "react";
import { monthlyVisitors, reviewers, type Section, sections, sectionTypes, statuses } from "./data";

const columns: DataTableColumn<Section>[] = [
  {
    accessorKey: "header",
    header: "Header",
    enableHiding: false,
    cell: ({ row }) => <SectionDrawer section={row.original} />,
  },
  {
    accessorKey: "type",
    header: "Section type",
    cell: ({ row }) => <Badge variant="outline">{row.original.type}</Badge>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="outline">
        {row.original.status === "Done" ? <CircleCheckIcon aria-hidden /> : <LoaderIcon aria-hidden />}
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "target",
    header: "Target",
    cell: ({ row }) => <span className="tabular-nums">{row.original.target}</span>,
  },
  {
    accessorKey: "limit",
    header: "Limit",
    cell: ({ row }) => <span className="tabular-nums">{row.original.limit}</span>,
  },
  {
    accessorKey: "reviewer",
    header: "Reviewer",
    cell: ({ row }) => (
      <span className={row.original.reviewer ? "whitespace-nowrap" : "whitespace-nowrap text-text-secondary"}>
        {row.original.reviewer ?? "Not assigned"}
      </span>
    ),
  },
  {
    id: "actions",
    // The relative wrapper keeps the hidden label inside the table's scroll area, so the page never scrolls sideways.
    header: () => (
      <span className="relative">
        <span className="sr-only">Actions</span>
      </span>
    ),
    enableHiding: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <Button variant="ghost" size="sm" aria-label={`More options for ${row.original.header}`} className="size-7 px-0">
          <EllipsisVerticalIcon aria-hidden />
        </Button>
        <DropdownMenuContent aria-label={`${row.original.header} options`} placement="bottom end">
          <DropdownMenuItem id="edit">Edit</DropdownMenuItem>
          <DropdownMenuItem id="copy">Make a copy</DropdownMenuItem>
          <DropdownMenuItem id="favourite">Favourite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem id="delete" variant="destructive">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function DocumentsTable() {
  const [rows, setRows] = useState(sections);
  return (
    <Tabs defaultSelectedKey="outline" className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <TabList aria-label="Document views" className="max-w-full flex-wrap">
          <Tab id="outline">Outline</Tab>
          <Tab id="past-performance">
            Past performance <Badge>3</Badge>
          </Tab>
          <Tab id="key-personnel">
            Key personnel <Badge>2</Badge>
          </Tab>
          <Tab id="focus-documents">Focus documents</Tab>
        </TabList>
        <Button variant="secondary">
          <PlusIcon aria-hidden />
          Add section
        </Button>
      </div>
      <TabPanel id="outline">
        <DataTable
          aria-label="Outline"
          columns={columns}
          data={rows}
          getRowId={(row) => row.id}
          selectionMode="multiple"
          onReorder={(ids) => setRows(ids.map((id) => rows.find((row) => row.id === id)!))}
        />
      </TabPanel>
      {[
        { id: "past-performance", label: "past performance" },
        { id: "key-personnel", label: "key personnel" },
        { id: "focus-documents", label: "focus documents" },
      ].map((panel) => (
        <TabPanel key={panel.id} id={panel.id}>
          <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-border-default p-6 text-center text-sm text-text-secondary">
            Add {panel.label} here.
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
}

function SectionDrawer({ section }: { section: Section }) {
  return (
    <Drawer>
      <Button variant="ghost" size="sm" className="-mx-2.5 font-normal underline underline-offset-4">
        {section.header}
      </Button>
      <DrawerContent side="right">
        {({ close }) => (
          <>
            <DrawerHeader>
              <DrawerTitle>{section.header}</DrawerTitle>
              <DrawerDescription>Showing total visitors for the last 6 months</DrawerDescription>
            </DrawerHeader>
            <DrawerBody className="flex flex-col gap-4 text-sm">
              <AreaChart
                title="Visitors by device, last 6 months"
                summary="Visitors rose from 266 in January to 354 in June, peaking at 505 in February."
                data={monthlyVisitors}
                categoryKey="month"
                formatCategory={(month) => month.slice(0, 3)}
                series={[
                  { key: "desktop", label: "Desktop" },
                  { key: "mobile", label: "Mobile" },
                ]}
              />
              <Separator />
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 font-medium">
                  Trending up by 5.2% this month <TrendingUpIcon aria-hidden className="size-4" />
                </p>
                <p className="text-text-secondary">
                  Showing total visitors for the last 6 months. Replace this with a short note about the section and what the figures
                  show.
                </p>
              </div>
              <Separator />
              <form
                id={`section-${section.id}`}
                className="flex flex-col gap-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  close();
                }}
              >
                <Input label="Header" defaultValue={section.header} />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Select label="Type" defaultSelectedKey={section.type}>
                    {sectionTypes.map((type) => (
                      <SelectItem key={type} id={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select label="Status" defaultSelectedKey={section.status}>
                    {statuses.map((status) => (
                      <SelectItem key={status} id={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input label="Target" inputMode="numeric" defaultValue={String(section.target)} />
                  <Input label="Limit" inputMode="numeric" defaultValue={String(section.limit)} />
                </div>
                <Select label="Reviewer" placeholder="Assign a reviewer" defaultSelectedKey={section.reviewer ?? undefined}>
                  {reviewers.map((reviewer) => (
                    <SelectItem key={reviewer} id={reviewer}>
                      {reviewer}
                    </SelectItem>
                  ))}
                </Select>
              </form>
            </DrawerBody>
            <DrawerFooter>
              <Button type="submit" form={`section-${section.id}`}>
                Save
              </Button>
              <Button variant="secondary" onPress={close}>
                Done
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
