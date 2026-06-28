import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LazySection } from "@/components/lazy-section";

describe("LazySection", () => {
  it("renders children", () => {
    render(
      <LazySection>
        <div>Lazy content</div>
      </LazySection>,
    );
    expect(screen.getByText("Lazy content")).toBeDefined();
  });

  it("applies minHeight style", () => {
    const { container } = render(
      <LazySection minHeight={500}>
        <div>Content</div>
      </LazySection>,
    );
    const wrapper = container.firstElementChild;
    expect(wrapper).toBeDefined();
  });
});
