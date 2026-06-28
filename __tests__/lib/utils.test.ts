import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn utility", () => {
  it("merges class names", () => {
    const result = cn("foo", "bar");
    expect(result).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    const result = cn("foo", false && "bar", "baz");
    expect(result).toBe("foo baz");
  });

  it("deduplicates tailwind classes", () => {
    const result = cn("p-2 p-4", "text-sm text-lg");
    expect(result).toBe("p-4 text-lg");
  });

  it("handles undefined and null", () => {
    const result = cn("foo", undefined, null, "bar");
    expect(result).toBe("foo bar");
  });

  it("handles empty input", () => {
    const result = cn();
    expect(result).toBe("");
  });
});
