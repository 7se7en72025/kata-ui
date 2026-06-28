import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/footer";

describe("Footer", () => {
  it("renders footer element", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeDefined();
  });

  it("renders Kata UI logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText("Kata UI");
    expect(logo).toBeDefined();
  });
});
