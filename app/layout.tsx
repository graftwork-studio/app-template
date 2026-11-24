import type { Metadata } from "next";
import type { ReactNode } from "react";
import { themeScript } from "@graftwork/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "Graftwork app",
  description: "Built with the Graftwork design system.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The theme script sets data-theme before React hydrates, so the attribute can differ.
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint, so the page never flashes the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-surface-default text-text-default">{children}</body>
    </html>
  );
}
