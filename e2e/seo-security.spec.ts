import { test, expect } from "@playwright/test";

test.describe("SEO & Meta", () => {
  test("homepage has correct meta description", async ({ page }) => {
    await page.goto("/");
    const description = await page.getAttribute('meta[name="description"]', "content");
    expect(description).toBeTruthy();
    expect(description?.length).toBeGreaterThan(10);
  });

  test("homepage has og:title", async ({ page }) => {
    await page.goto("/");
    const ogTitle = await page.getAttribute('meta[property="og:title"]', "content");
    expect(ogTitle).toBeTruthy();
  });

  test("homepage has og:description", async ({ page }) => {
    await page.goto("/");
    const ogDesc = await page.getAttribute('meta[property="og:description"]', "content");
    expect(ogDesc).toBeTruthy();
  });

  test("homepage has viewport meta", async ({ page }) => {
    await page.goto("/");
    const viewport = await page.getAttribute('meta[name="viewport"]', "content");
    expect(viewport).toBeTruthy();
  });
});

test.describe("Security Headers", () => {
  test("has X-Content-Type-Options header", async ({ page }) => {
    const response = await page.goto("/");
    const header = response?.headers()["x-content-type-options"];
    expect(header).toBe("nosniff");
  });

  test("has X-Frame-Options header", async ({ page }) => {
    const response = await page.goto("/");
    const header = response?.headers()["x-frame-options"];
    expect(header).toBe("DENY");
  });

  test("has Referrer-Policy header", async ({ page }) => {
    const response = await page.goto("/");
    const header = response?.headers()["referrer-policy"];
    expect(header).toBeTruthy();
  });
});

test.describe("Static Assets", () => {
  test("favicon loads", async ({ page }) => {
    const response = await page.goto("/favicon.svg");
    expect(response?.status()).toBe(200);
  });

  test("manifest.json loads", async ({ page }) => {
    const response = await page.goto("/manifest.json");
    expect(response?.status()).toBe(200);
  });
});
