"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@graftwork/ui";
import { EllipsisIcon, FolderIcon, ForwardIcon, Trash2Icon } from "lucide-react";
import { projects, slug } from "./data";

export function NavProjects() {
  const { isMobile } = useSidebar();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]/sidebar:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((project) => (
          <SidebarMenuItem key={project.name}>
            <SidebarMenuButton href={slug(project.name)}>
              <project.icon aria-hidden />
              <span>{project.name}</span>
            </SidebarMenuButton>
            <DropdownMenu>
              <SidebarMenuAction showOnHover aria-label={`More options for ${project.name}`}>
                <EllipsisIcon aria-hidden />
              </SidebarMenuAction>
              <DropdownMenuContent aria-label={`${project.name} options`} placement={isMobile ? "bottom end" : "right top"}>
                <DropdownMenuItem id="view" textValue="View project">
                  <FolderIcon aria-hidden />
                  View project
                </DropdownMenuItem>
                <DropdownMenuItem id="share" textValue="Share project">
                  <ForwardIcon aria-hidden />
                  Share project
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem id="delete" variant="destructive" textValue="Delete project">
                  <Trash2Icon aria-hidden />
                  Delete project
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton>
            <EllipsisIcon aria-hidden />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
