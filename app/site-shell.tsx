import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";

/** The skip link, sticky header and main column shared by the app's pages. Block previews don't use it. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="focus-ring sr-only rounded-md bg-surface-overlay px-4 py-3 text-text-link focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8">
        {children}
      </main>
    </>
  );
}
