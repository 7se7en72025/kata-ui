import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/hero";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

vi.mock("next/dynamic", () => ({
  default: () => {
    const DynamicComponent = ({
      children,
    }: {
      children?: React.ReactNode;
      metalConfig?: Record<string, unknown>;
    }) => <div data-testid="liquid-metal">{children}</div>;
    DynamicComponent.displayName = "DynamicComponent";
    return DynamicComponent;
  },
}));

beforeEach(() => {
  // IntersectionObserver is not available in jsdom
  // eslint-disable-next-line
  (globalThis as any).IntersectionObserver = class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe("Hero", () => {
  it("renders without crashing", () => {
    const { container } = render(<Hero />);
    expect(container.firstChild).toBeDefined();
  });

  it("renders heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeDefined();
  });
});
