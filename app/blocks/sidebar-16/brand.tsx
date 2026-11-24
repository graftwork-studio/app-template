import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@graftwork/ui";
import { GalleryVerticalEndIcon } from "lucide-react";

export function Brand({ title = "Your app", subtitle = "Documentation" }: { title?: string; subtitle?: string }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton href="/" size="lg">
          <span className="flex aspect-square size-8 items-center justify-center rounded-lg bg-action-primary-bg text-text-on-primary">
            <GalleryVerticalEndIcon aria-hidden />
          </span>
          <span className="grid flex-1 text-start text-sm leading-tight">
            <span className="truncate font-medium">{title}</span>
            <span className="truncate text-xs">{subtitle}</span>
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
