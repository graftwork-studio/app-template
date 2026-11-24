"use client";

import { SettingsDialog } from "./settings-dialog";

/*
 * sidebar-13: a sidebar in a dialog.
 * Rebuilt from shadcn/ui's sidebar-13 block with @graftwork/ui. Copyright (c) 2023 shadcn. MIT licence.
 * Sample only: the settings and content are placeholders to replace.
 */

export default function Block() {
  return (
    <main className="flex h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-2xl leading-heading font-semibold">Settings</h1>
      <SettingsDialog />
    </main>
  );
}
