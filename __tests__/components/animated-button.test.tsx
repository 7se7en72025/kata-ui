import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AnimatedButton from "@/components/animated-button";

describe("AnimatedButton", () => {
  it("renders with default text", () => {
    render(<AnimatedButton />);
    expect(screen.getByText("Browse Components")).toBeDefined();
  });

  it("renders with custom text", () => {
    render(<AnimatedButton>Custom Text</AnimatedButton>);
    expect(screen.getByText("Custom Text")).toBeDefined();
  });

  it("renders as button element", () => {
    render(<AnimatedButton>Test</AnimatedButton>);
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("applies custom className", () => {
    render(<AnimatedButton className="custom">Test</AnimatedButton>);
    expect(screen.getByRole("button").className).toContain("custom");
  });
});
