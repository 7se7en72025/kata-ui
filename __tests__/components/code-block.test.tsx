import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CodeBlock } from "@/components/code-block";

describe("CodeBlock", () => {
  it("renders code", () => {
    render(<CodeBlock code="console.log('hello')" />);
    expect(screen.getByText("console.log('hello')")).toBeDefined();
  });

  it("renders with filename", () => {
    render(<CodeBlock code="test" filename="app.tsx" />);
    expect(screen.getByText("app.tsx")).toBeDefined();
  });

  it("copy button works", async () => {
    const mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText: mockWriteText } });

    render(<CodeBlock code="test code" />);
    const copyButton = screen.getByRole("button");
    fireEvent.click(copyButton);

    expect(mockWriteText).toHaveBeenCalledWith("test code");
  });

  it("renders tabs when provided", () => {
    render(<CodeBlock code="test" tabs={["npm", "yarn", "pnpm"]} />);
    expect(screen.getByText("npm")).toBeDefined();
    expect(screen.getByText("yarn")).toBeDefined();
    expect(screen.getByText("pnpm")).toBeDefined();
  });
});
