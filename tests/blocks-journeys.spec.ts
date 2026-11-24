import { expect, test } from "@playwright/test";
import { builtBlocks, parkedBlocks } from "../app/blocks/registry";
import { expectNoAxeViolations } from "./helpers";

// Journeys for interactive blocks, using the keyboard, plus the gallery's own controls.

const LOGIN_BLOCKS = builtBlocks.filter((block) => block.category === "Login").map((block) => block.id);

for (const id of LOGIN_BLOCKS) {
  test(`${id}: errors are text, linked to their fields, and the form works from the keyboard`, async ({ page }) => {
    await page.goto(`/blocks/preview/${id}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);

    const email = page.getByRole("textbox", { name: /^Email/ });
    const password = page.getByLabel(/^Password/);
    const hasPassword = (await password.count()) > 0;

    // Submit the empty form from the keyboard.
    await page.getByRole("button", { name: "Log in", exact: true }).focus();
    await page.keyboard.press("Enter");
    await expect(email).toHaveAttribute("aria-invalid", "true");
    await expect(email).toHaveAccessibleDescription(/Enter your email address\./);
    if (hasPassword) await expect(password).toHaveAccessibleDescription(/Enter your password\./);
    await expectNoAxeViolations(page);

    // A badly formed address gets its own message.
    await email.focus();
    await page.keyboard.type("name");
    await page.getByRole("button", { name: "Log in", exact: true }).focus();
    await page.keyboard.press("Enter");
    await expect(email).toHaveAccessibleDescription(/correct format/);

    // Fix both fields with the keyboard and submit.
    await email.focus();
    await page.keyboard.type("@example.com");
    if (hasPassword) {
      await password.focus();
      await page.keyboard.type("sample password");
    }
    await page.getByRole("button", { name: "Log in", exact: true }).focus();
    await page.keyboard.press("Enter");
    await expect(email).not.toHaveAttribute("aria-invalid", "true");
    await expect(page.getByRole("status")).toHaveText(/sample block/);
  });
}

for (const id of ["chart-bar-default", "chart-bar-multiple", "chart-bar-interactive"]) {
  test(`${id}: the chart's data is reachable from the keyboard as a table`, async ({ page }) => {
    await page.goto(`/blocks/preview/${id}`);
    const toggle = page.getByRole("button", { name: "View as table" });
    await toggle.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("grid").getByRole("rowheader").first()).toBeVisible();
    await expect(page.getByRole("button", { name: "View as chart" })).toBeFocused();
  });
}

test("chart-bar-interactive: choosing a device charts its series", async ({ page }) => {
  await page.goto("/blocks/preview/chart-bar-interactive");
  await expect(page.getByRole("heading", { name: /^Desktop visitors/ })).toBeVisible();
  const mobile = page.getByRole("radio", { name: /^Mobile/ });
  await mobile.focus();
  await page.keyboard.press("Space");
  await expect(mobile).toBeChecked();
  await expect(page.getByRole("heading", { name: /^Mobile visitors/ })).toBeVisible();
  await expectNoAxeViolations(page);
});

test("the gallery lists every built and parked block from the registry", async ({ page }) => {
  await page.goto("/blocks");
  await expect(page.getByRole("heading", { level: 1, name: "Blocks" })).toBeVisible();
  // The first category is open, so its previews are rendered.
  const first = builtBlocks[0]!;
  await expect(page.locator(`[data-block="${first.id}"] iframe`)).toHaveAttribute("src", `/blocks/preview/${first.id}`);
  // Parked blocks are collapsed until asked for, then list every one with its reason.
  const parked = page.getByRole("button", { name: `Parked blocks (${parkedBlocks.length})` });
  await expect(parked).toHaveAttribute("aria-expanded", "false");
  await parked.focus();
  await page.keyboard.press("Enter");
  const table = page.getByRole("grid", { name: "Parked blocks" });
  await expect(table.getByRole("row")).toHaveCount(parkedBlocks.length + 1);
  await expect(table.getByRole("rowheader", { name: "dashboard-01" })).toBeVisible();
});

test("gallery search filters blocks, and width and theme change the preview", async ({ page }) => {
  await page.goto("/blocks");
  await page.getByRole("searchbox", { name: "Search blocks" }).fill("login-03");
  await expect(page.locator("[data-block]")).toHaveCount(1);

  const entry = page.locator('[data-block="login-03"]');
  await entry.getByRole("radio", { name: "320px" }).click();
  await expect(entry.locator("iframe")).toHaveAttribute("title", /at 320px/);

  await entry.getByRole("button", { name: /Theme$/ }).click();
  await page.getByRole("option", { name: "Dark" }).click();
  await expect(entry.locator("iframe")).toHaveAttribute("src", "/blocks/preview/login-03?theme=dark");
  await expect(entry.getByRole("link", { name: /full size/ })).toHaveAttribute("href", "/blocks/preview/login-03?theme=dark");
  await expect(entry.getByRole("link", { name: "Open Log in 03 in Figma" })).toHaveAttribute("href", /figma\.com\/design\//);
});

test("a preview's theme comes from ?theme= and isn't stored", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/blocks/preview/login-01?theme=high-contrast");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "high-contrast");
  expect(await page.evaluate(() => localStorage.getItem("graftwork-theme"))).toBeNull();
});
