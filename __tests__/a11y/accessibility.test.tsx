import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { GlitchText } from "@/components/ui/glitch-text";
import GlowButton from "@/components/glow-button";
import { LiquidMetal } from "@/components/liquid-metal";

expect.extend(toHaveNoViolations);

describe("Accessibility", () => {
  it("GlitchText has no a11y violations", async () => {
    const { container } = render(<GlitchText text="Hello" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("GlowButton has no a11y violations", async () => {
    const { container } = render(<GlowButton>Click me</GlowButton>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("LiquidMetal has no a11y violations", async () => {
    const { container } = render(<LiquidMetal />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
