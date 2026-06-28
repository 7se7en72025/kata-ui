import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LiquidMetal } from "@/components/liquid-metal";

describe("LiquidMetal", () => {
  it("renders without crashing", () => {
    const { container } = render(<LiquidMetal />);
    expect(container.firstChild).toBeDefined();
  });
});
