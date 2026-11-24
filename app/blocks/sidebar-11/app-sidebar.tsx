"use client";

import {
  Collapsible,
  CollapsibleContent,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@graftwork/ui";
import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";

/** Sample changes and files. Replace them with your own. */
const changes = [
  { file: "README.md", state: "M", label: "modified" },
  { file: "api/hello/route.ts", state: "U", label: "untracked" },
  { file: "app/layout.tsx", state: "M", label: "modified" },
];

type TreeItem = string | [string, ...TreeItem[]];
const tree: TreeItem[] = [
  ["app", ["api", ["hello", ["route.ts"]], "page.tsx", "layout.tsx", ["blog", ["page.tsx"]]]],
  ["components", ["ui", "button.tsx", "card.tsx"], "header.tsx", "footer.tsx"],
  ["lib", ["util.ts"]],
  ["public", "favicon.ico", "logo.svg"],
  ".gitignore",
  "app.config.ts",
  "lint.config.js",
  "package.json",
  "README.md",
];

function Tree({ item }: { item: TreeItem }) {
  const [name, ...items] = Array.isArray(item) ? item : [item];
  if (items.length === 0) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton isActive={name === "button.tsx"}>
          <FileIcon aria-hidden />
          <span>{name}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
  return (
    <SidebarMenuItem>
      <Collapsible defaultExpanded={name === "components" || name === "ui"} className="group/collapsible">
        <SidebarMenuButton slot="trigger">
          <ChevronRightIcon
            aria-hidden
            className="transition-transform duration-(--gw-motion-duration-fast) group-data-expanded/collapsible:rotate-90"
          />
          <FolderIcon aria-hidden />
          <span>{name}</span>
        </SidebarMenuButton>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((child, index) => (
              <Tree key={index} item={child} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

export function AppSidebar() {
  return (
    <Sidebar aria-label="Files">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Changes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {changes.map((item) => (
                <SidebarMenuItem key={item.file}>
                  <SidebarMenuButton>
                    <FileIcon aria-hidden />
                    <span>{item.file}</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>
                    <span aria-hidden>{item.state}</span>
                    <span className="sr-only">{item.label}</span>
                  </SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tree.map((item, index) => (
                <Tree key={index} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
