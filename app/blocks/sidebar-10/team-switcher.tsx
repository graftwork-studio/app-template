"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSection,
  DropdownMenuSeparator,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@graftwork/ui";
import { AudioWaveformIcon, ChevronsUpDownIcon, CommandIcon, GalleryVerticalEndIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

/** Sample teams. Replace them with your own. */
const teams = [
  { name: "Design team", plan: "Team plan", icon: GalleryVerticalEndIcon },
  { name: "Research", plan: "Starter plan", icon: AudioWaveformIcon },
  { name: "Operations", plan: "Free plan", icon: CommandIcon },
];

export function TeamSwitcher() {
  const { isMobile } = useSidebar();
  const [active, setActive] = useState(teams[0]!);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton size="lg">
            <span className="flex aspect-square size-8 items-center justify-center rounded-lg bg-action-primary-bg text-text-on-primary">
              <active.icon aria-hidden />
            </span>
            <span className="grid flex-1 text-start text-sm leading-tight">
              <span className="truncate font-medium">{active.name}</span>
              <span className="truncate text-xs">{active.plan}</span>
            </span>
            <ChevronsUpDownIcon aria-hidden className="ms-auto" />
          </SidebarMenuButton>
          <DropdownMenuContent
            aria-label="Teams"
            placement={isMobile ? "bottom start" : "right top"}
            onAction={(key) => {
              const team = teams.find((t) => t.name === key);
              if (team) setActive(team);
            }}
          >
            <DropdownMenuSection title="Teams">
              {teams.map((team, index) => (
                <DropdownMenuItem key={team.name} id={team.name} textValue={team.name} shortcut={`⌘${index + 1}`}>
                  <team.icon aria-hidden />
                  {team.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSection>
            <DropdownMenuSeparator />
            <DropdownMenuItem id="add-team" textValue="Add team">
              <PlusIcon aria-hidden />
              Add team
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
