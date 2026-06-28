import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import GlowButton from "@/components/glow-button";

describe("GlowButton", () => {
  it("renders with text", () => {
    render(<GlowButton>Click me</GlowButton>);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("renders as button element", () => {
    render(<GlowButton>Test</GlowButton>);
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
  });

  it("applies custom className", () => {
    render(<GlowButton className="custom">Test</GlowButton>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("custom");
  });
});
