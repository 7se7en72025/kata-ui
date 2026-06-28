"use client";

import React from "react";

const defaultTools = [
  { name: "React", version: "18" },
  { name: "Next.js", version: "14" },
  { name: "Tailwind CSS", version: "3" },
  { name: "TypeScript", version: "5" },
  { name: "Vercel", version: null },
];

interface TechLogosProps {
  tools?: { name: string; version?: string | null }[];
  title?: string;
}

export function TechLogos({ tools, title }: TechLogosProps) {
  const items = tools ?? defaultTools;
  return (
    <section
      style={{
        padding: "64px 0",
        position: "relative",
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      {title && (
        <h3
          style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 600,
            lineHeight: "1.2",
            color: "#fafafa",
            fontFamily: "inherit",
            marginBottom: 40,
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>
      )}

      <div style={{ overflow: "hidden" }}>
        <div className="tech-marquee">
          {[...items, ...items].map((tool, i) => (
            <div key={i} className="tech-item">
              <span className="tech-name">{tool.name}</span>
              {tool.version && <span className="tech-version">{tool.version}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
