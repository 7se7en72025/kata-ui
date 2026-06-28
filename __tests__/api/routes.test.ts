import { describe, it, expect } from "vitest";

describe("API Route", () => {
  it("GET handler is exported", async () => {
    const route = await import("@/app/api/r/[slug]/route");
    expect(route.GET).toBeDefined();
    expect(typeof route.GET).toBe("function");
  });
});
