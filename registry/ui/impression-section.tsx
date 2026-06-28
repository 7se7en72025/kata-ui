"use client";

import React from "react";

interface Feature {
  title: string;
  desc: string;
  active?: boolean;
}

interface ImpressionSectionProps {
  features?: Feature[];
  title?: string;
  subtitle?: string;
}

const defaultFeatures: Feature[] = [
  {
    title: "Choose your sections",
    desc: "Choose among 100+ components to build a landing page suited to the needs of your product.",
    active: true,
  },
  {
    title: "Add your content",
    desc: "Fill the blanks with screenshots, videos, and other content featuring your product.",
    active: false,
  },
  {
    title: "Customize",
    desc: "Make design yours in no time by changing the variables that control colors, typography, and other styles.",
    active: false,
  },
];

export function ImpressionSection({
  features,
  title = "Make the right impression",
  subtitle,
}: ImpressionSectionProps) {
  const items = features ?? defaultFeatures;
  return (
    <section
      style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 32,
        padding: "128px 24px 0",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(36px, 5vw, 48px)",
          fontWeight: 600,
          lineHeight: "1.1",
          fontFamily: "inherit",
          margin: 0,
          textAlign: "center",
          color: "#fff",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 20,
            lineHeight: "28px",
            color: "#71717a",
            fontFamily: "inherit",
            margin: 0,
            textAlign: "center",
            maxWidth: 578,
          }}
        >
          {subtitle}
        </p>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "center",
          width: "100%",
          maxWidth: 800,
          marginTop: 32,
        }}
      >
        {items.map((f) => (
          <div
            key={f.title}
            style={{
              borderRadius: 6,
              padding: "12px 20px 12px 12px",
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
              background: f.active
                ? "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)"
                : "transparent",
              border: f.active ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
              minWidth: 220,
              flex: "1 1 200px",
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: f.active ? "#fff" : "#71717a",
                  marginBottom: 2,
                }}
              >
                {f.title}
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  lineHeight: "16px",
                  color: "#71717a",
                }}
              >
                {f.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
