"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@graftwork/ui";
import { ChevronsUpDownIcon, GalleryVerticalEndIcon } from "lucide-react";
import { useState } from "react";

const versions = ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"];

export function VersionSwitcher() {
  const [selected, setSelected] = useState("1.0.1");
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton size="lg">
            <span className="flex aspect-square size-8 items-center justify-center rounded-lg bg-action-primary-bg text-text-on-primary">
              <GalleryVerticalEndIcon aria-hidden />
            </span>
            <span className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">Documentation</span>
              <span>v{selected}</span>
            </span>
            <ChevronsUpDownIcon aria-hidden className="ms-auto" />
          </SidebarMenuButton>
          <DropdownMenuContent
            aria-label="Documentation versions"
            placement="bottom start"
            selectionMode="single"
            selectedKeys={[selected]}
            onSelectionChange={(keys) => {
              const [key] = [...keys];
              if (key !== undefined) setSelected(String(key));
            }}
          >
            {versions.map((version) => (
              <DropdownMenuItem key={version} id={version}>
                {`v${version}`}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
