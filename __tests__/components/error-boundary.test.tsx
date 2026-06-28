import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ErrorBoundary } from "@/components/error-boundary";

function ThrowingComponent(): React.ReactNode {
  throw new Error("Test error");
}

describe("ErrorBoundary", () => {
  it("renders children when no error", () => {
    render(
      <ErrorBoundary>
        <div>Normal content</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText("Normal content")).toBeDefined();
  });

  it("renders fallback when error occurs", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Something went wrong")).toBeDefined();
    spy.mockRestore();
  });

  it("renders custom fallback when provided", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <ErrorBoundary fallback={<div>Custom error</div>}>
        <ThrowingComponent />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Custom error")).toBeDefined();
    spy.mockRestore();
  });

  it("shows error message", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Test error")).toBeDefined();
    spy.mockRestore();
  });

  it("retry button resets state", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    let shouldThrow = true;

    function ConditionalThrow() {
      if (shouldThrow) throw new Error("Test error");
      return <div>Recovered</div>;
    }

    const { rerender } = render(
      <ErrorBoundary>
        <ConditionalThrow />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Something went wrong")).toBeDefined();

    shouldThrow = false;
    fireEvent.click(screen.getByText("Try again"));

    rerender(
      <ErrorBoundary>
        <ConditionalThrow />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Recovered")).toBeDefined();
    spy.mockRestore();
  });
});
