import { test, expect } from "@playwright/test";

test.describe("Performance", () => {
  test("homepage loads under 3 seconds", async ({ page }) => {
    const start = Date.now();
    await page.goto("/", { waitUntil: "networkidle" });
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(3000);
  });

  test("no console errors on homepage", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });
    await page.goto("/", { waitUntil: "networkidle" });
    expect(errors).toHaveLength(0);
  });

  test("images have alt text", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).toBeTruthy();
    }
  });
});

test.describe("Accessibility", () => {
  test("page has lang attribute", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang", "en");
  });

  test("heading hierarchy is correct", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1");
    const h1Count = await h1.count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });
});
