import type { ReactNode } from "react";
import { SiteShell } from "../../site-shell";

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
