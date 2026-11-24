"use client";

import { applyTheme, type ThemeChoice } from "@graftwork/ui";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const CHOICES: readonly ThemeChoice[] = ["system", "light", "dark", "high-contrast"];

/**
 * Lets the gallery pick a preview's theme with ?theme=. It sets data-theme on
 * <html> through applyTheme, the same mechanism ThemeToggle uses, but doesn't
 * store the choice, so a preview never changes the theme of the app around it.
 * With no ?theme=, the preview follows the stored choice or the system.
 */
export function PreviewTheme() {
  const theme = useSearchParams().get("theme");
  useEffect(() => {
    if (theme && (CHOICES as readonly string[]).includes(theme)) applyTheme(theme as ThemeChoice);
  }, [theme]);
  return null;
}
