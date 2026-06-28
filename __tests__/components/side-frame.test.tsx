import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SideFrame } from "@/components/side-frame";

describe("SideFrame", () => {
  it("renders without crashing", () => {
    const { container } = render(<SideFrame />);
    expect(container.firstChild).toBeDefined();
  });
});
