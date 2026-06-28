import { test, expect } from "@playwright/test";

test.describe("Docs", () => {
  test("docs page loads", async ({ page }) => {
    await page.goto("/docs");
    await expect(page).toHaveTitle(/Docs/);
  });

  test("sidebar navigation works", async ({ page }) => {
    await page.goto("/docs");
    const sidebar = page.locator("aside").first();
    await expect(sidebar).toBeVisible();
  });
});

test.describe("Installation Pages", () => {
  const pages = [
    "/docs/installation/nextjs",
    "/docs/installation/tailwind",
    "/docs/installation/cli",
    "/docs/installation/utilities",
  ];

  for (const url of pages) {
    test(`${url} loads`, async ({ page }) => {
      await page.goto(url);
      await expect(page.locator("main")).toBeVisible();
    });
  }
});
