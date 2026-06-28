import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TechLogos } from "@/components/tech-logos";

describe("TechLogos", () => {
  it("renders without crashing", () => {
    const { container } = render(<TechLogos />);
    expect(container.firstChild).toBeDefined();
  });

  it("renders tool names", () => {
    render(<TechLogos />);
    // Component duplicates tools for marquee animation, so use getAllByText
    expect(screen.getAllByText("Figma").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Next.js").length).toBeGreaterThan(0);
    expect(screen.getAllByText("React.js").length).toBeGreaterThan(0);
  });
});
