"use client";

import { Navbar } from "@/components/navbar";
import { ResizablePanels } from "@/components/resizable-panels";
import { DocsSidebar } from "@/components/docs-sidebar";
import { DocsToc } from "@/components/docs-toc";

const tocItems = [
  { label: "Overview", href: "#overview" },
  { label: "Preview", href: "#preview" },
  { label: "Installation", href: "#installation" },
  { label: "Usage", href: "#usage" },
  { label: "Props", href: "#props" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="theme-bg" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 1, paddingTop: 52, display: "flex", flexDirection: "column", minHeight: 0 }}>
        <ResizablePanels
          defaultLeftWidth={240}
          left={<DocsSidebar />}
        >
          <div style={{ padding: "32px 40px", maxWidth: 900, marginRight: 220 }}>
            {children}
          </div>
        </ResizablePanels>
      </div>

      {/* Fixed right TOC panel */}
      <div
        style={{
          position: "fixed",
          top: 52,
          right: 0,
          width: 200,
          bottom: 0,
          zIndex: 5,
        }}
      >
        <DocsToc items={tocItems} />
      </div>
    </main>
  );
}
