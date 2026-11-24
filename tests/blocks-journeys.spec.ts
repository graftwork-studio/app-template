import { expect, test } from "@playwright/test";
import { builtBlocks, parkedBlocks } from "../app/blocks/registry";
import { expectNoAxeViolations, waitForOverlays } from "./helpers";

// Journeys for interactive blocks, using the keyboard, plus the gallery's own controls.

// A built block missing from components.ts would quietly render a 404, which passes axe.
test("every built block's preview renders the block, with one h1", async ({ page }) => {
  for (const block of builtBlocks) {
    const response = await page.goto(`/blocks/preview/${block.id}`);
    expect(response?.status(), `${block.id} preview`).toBe(200);
    await expect(page.getByRole("heading", { level: 1 }), `${block.id} has one h1`).toHaveCount(1);
  }
});

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

// Every sidebar block with a trigger: it collapses and expands from the keyboard on
// desktop, and opens as a dialog that returns focus on mobile.
const SIDEBAR_BLOCKS = builtBlocks.filter((block) => block.category === "Sidebar" && block.id !== "sidebar-13").map((block) => block.id);

for (const id of SIDEBAR_BLOCKS) {
  test(`${id}: the sidebar toggles from the keyboard`, async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(`/blocks/preview/${id}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    const trigger = page.getByRole("button", { name: "Toggle sidebar" });
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    // Ctrl+B is the sidebar's own shortcut.
    await page.keyboard.press("Control+b");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  test(`${id}: on a phone the sidebar opens as a dialog and gives focus back`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto(`/blocks/preview/${id}`);
    const trigger = page.getByRole("button", { name: "Toggle sidebar" });
    await trigger.focus();
    await page.keyboard.press("Enter");
    const sheet = page.getByRole("dialog");
    await expect(sheet).toBeVisible();
    // Let the opening fade finish, or axe measures half-faded text.
    await waitForOverlays(page);
    await expectNoAxeViolations(page);
    await page.keyboard.press("Escape");
    await expect(sheet).toBeHidden();
    await expect(trigger).toBeFocused();
  });
}

test("sidebar-13: the settings dialog traps focus and returns it on close", async ({ page }) => {
  await page.goto("/blocks/preview/sidebar-13");
  const open = page.getByRole("button", { name: "Open settings" });
  await open.focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog", { name: "Settings" });
  await expect(dialog).toBeVisible();
  await waitForOverlays(page);
  await expect(dialog.getByRole("navigation", { name: "Settings sections" }).getByRole("link", { name: "Messages and media" })).toHaveAttribute("aria-current", "page");
  await expectNoAxeViolations(page);
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(open).toBeFocused();
});

test("sidebar-07: collapsing to icons keeps every item reachable with a tooltip", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/blocks/preview/sidebar-07");
  await page.getByRole("button", { name: "Toggle sidebar" }).click();
  const playground = page.getByRole("button", { name: "Playground" });
  await playground.focus();
  await expect(page.getByRole("tooltip", { name: "Playground" })).toBeVisible();
});

const SIGNUP_FULL = ["signup-01", "signup-02", "signup-03", "signup-04"];

for (const id of SIGNUP_FULL) {
  test(`${id}: errors are text, linked to their fields, and the form works from the keyboard`, async ({ page }) => {
    await page.goto(`/blocks/preview/${id}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    const submit = page.getByRole("button", { name: "Create account" });
    const email = page.getByRole("textbox", { name: /^Email/ });
    const password = page.getByLabel(/^Password/);
    const confirm = page.getByLabel(/^Confirm password/);

    await submit.focus();
    await page.keyboard.press("Enter");
    await expect(email).toHaveAttribute("aria-invalid", "true");
    await expect(email).toHaveAccessibleDescription(/Enter your email address\./);
    await expect(password).toHaveAccessibleDescription(/at least 8 characters/);
    await expect(confirm).toHaveAccessibleDescription(/Enter your password again\./);
    await expectNoAxeViolations(page);

    // Fill every field with the keyboard, with a confirmation that doesn't match.
    const name = page.getByRole("textbox", { name: /^Full name/ });
    if ((await name.count()) > 0) {
      await name.focus();
      await page.keyboard.type("Sam Taylor");
    }
    await email.focus();
    await page.keyboard.type("name@example.com");
    await password.focus();
    await page.keyboard.type("sample-password");
    await confirm.focus();
    await page.keyboard.type("different");
    await submit.focus();
    await page.keyboard.press("Enter");
    await expect(confirm).toHaveAccessibleDescription(/The passwords don’t match\./);

    await confirm.fill("");
    await confirm.focus();
    await page.keyboard.type("sample-password");
    await submit.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("status")).toHaveText(/sample block/);
  });
}

test("signup-05: the email-only form validates and works from the keyboard", async ({ page }) => {
  await page.goto("/blocks/preview/signup-05");
  const email = page.getByRole("textbox", { name: /^Email/ });
  await page.getByRole("button", { name: "Create account" }).focus();
  await page.keyboard.press("Enter");
  await expect(email).toHaveAccessibleDescription(/Enter your email address\./);
  await email.focus();
  await page.keyboard.type("name@example.com");
  await page.getByRole("button", { name: "Create account" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("status")).toHaveText(/sample block/);
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
