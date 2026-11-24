import { expect, test } from "@playwright/test";
import { builtBlocks } from "../app/blocks/registry";
import { expectNoAxeViolations, expectNoSidewaysScroll, openInTheme, THEMES, WIDTHS } from "./helpers";

// Every built block, on its own at /blocks/preview/<id>: axe in every theme, no
// sideways scrolling, and snapshots at 320, 768 and 1280px in every theme.
// Run with the gallery on: `pnpm build:test`. The list comes from registry.ts.

for (const block of builtBlocks) {
  test.describe(block.id, () => {
    for (const theme of THEMES) {
      test(`${block.id} in ${theme.name}`, async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 900 });
        await openInTheme(page, `/blocks/preview/${block.id}`, theme);
        await expectNoAxeViolations(page);
        for (const width of WIDTHS) {
          await page.setViewportSize({ width, height: 900 });
          await expectNoSidewaysScroll(page);
          await expect(page).toHaveScreenshot(["blocks", `${block.id}--${theme.name}--${width}.png`], { fullPage: true });
        }
      });
    }
  });
}

// The gallery itself. Previews are masked: they're covered by the block tests above.
test.describe("block gallery", () => {
  for (const theme of THEMES) {
    test(`gallery has no axe violations in ${theme.name}`, async ({ page }) => {
      await openInTheme(page, "/blocks", theme);
      await expect(page.locator("[data-block]").first()).toBeVisible();
      await expectNoAxeViolations(page);
    });
  }

  test("gallery in light", async ({ page }) => {
    const light = THEMES[0];
    await page.setViewportSize({ width: 1280, height: 900 });
    await openInTheme(page, "/blocks", light);
    for (const width of WIDTHS) {
      await page.setViewportSize({ width, height: 900 });
      await expectNoSidewaysScroll(page);
      await expect(page).toHaveScreenshot(["blocks", `gallery--${light.name}--${width}.png`], {
        fullPage: true,
        mask: [page.locator("iframe")],
      });
    }
  });
});
