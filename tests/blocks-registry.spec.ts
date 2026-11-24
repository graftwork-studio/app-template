import { readdirSync } from "node:fs";
import path from "node:path";
import { expect, test } from "@playwright/test";
import { COMPLETED_BATCHES, inventory } from "../app/blocks/inventory";
import { blocks } from "../app/blocks/registry";

// The block registry must match the blocks in app/blocks/, and cover every
// block from the upstream inventory once its batch is done. Like the showcase
// check in the design system, this fails CI rather than letting a block go
// missing from the gallery or the tests. No browser needed.

const BLOCKS_DIR = path.join(import.meta.dirname, "..", "app", "blocks");

/** Block folders: everything in app/blocks/ except routes and private folders. */
function blockFolders() {
  return readdirSync(BLOCKS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => name !== "preview" && !name.startsWith("_") && !name.startsWith("("))
    .sort();
}

test("every block folder is in the registry as built, and every built block has a folder", () => {
  const built = blocks.filter((block) => block.status === "built").map((block) => block.id).sort();
  expect(blockFolders(), "folders in app/blocks/ vs built blocks in registry.ts").toEqual(built);
});

test("parked blocks have no folder and give a reason", () => {
  const folders = new Set(blockFolders());
  for (const block of blocks.filter((b) => b.status === "parked")) {
    expect(folders.has(block.id), `${block.id} is parked but has a folder`).toBe(false);
    expect(block.status === "parked" && block.reason.trim().length > 0, `${block.id} needs a reason`).toBe(true);
  }
});

test("every registry entry has a figma field and a unique kebab-case id", () => {
  const seen = new Set<string>();
  for (const block of blocks) {
    expect(block.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    expect(seen.has(block.id), `${block.id} is listed twice`).toBe(false);
    seen.add(block.id);
    expect(Object.hasOwn(block, "figma"), `${block.id} has no figma field (use null)`).toBe(true);
    if (block.figma !== null) expect(block.figma).toMatch(/^https:\/\/www\.figma\.com\/design\//);
  }
});

test("every inventory block in a completed batch is built or parked", () => {
  const listed = new Set(blocks.map((block) => block.id));
  const missing = inventory.filter((item) => COMPLETED_BATCHES.has(item.batch) && !listed.has(item.id)).map((item) => item.id);
  expect(missing, "blocks from the inventory that are neither built nor parked").toEqual([]);
});

test("every registry entry comes from the inventory", () => {
  const known = new Set(inventory.map((item) => item.id));
  const unknown = blocks.filter((block) => !known.has(block.upstream.id)).map((block) => block.id);
  expect(unknown, "add new upstream blocks to inventory.ts and BLOCKS.md").toEqual([]);
});
