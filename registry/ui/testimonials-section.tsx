"use client";

import React, { memo } from "react";

interface Testimonial {
  name: string;
  handle: string;
  text: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[][];
  title?: string;
  subtitle?: string;
}

const defaultTestimonials: Testimonial[][] = [
  [
    {
      name: "Zara Qadir",
      handle: "@zaraprints",
      text: "Playing around with this component library made me feel inspired to launch that side project.",
    },
    {
      name: "Fabrizio Fernandez",
      handle: "@fab3304",
      text: "Testing out the responsive design. That's the template we've all been waiting for.",
    },
    {
      name: "Felix Beaumont",
      handle: "@felixbs",
      text: "Digging into the design system. Those shadows are giving me serious design envy.",
    },
  ],
  [
    {
      name: "Esme Rothschild",
      handle: "@EsmeRothArt",
      text: "The component library is siiiiick. That graphic though. Making me feel like I'm building websites for a sci-fi movie.",
    },
    {
      name: "Darius Flynn",
      handle: "@flynnn",
      text: "Exploring the sleek UI. It's like a dark mode enthusiast's playground.",
    },
    {
      name: "Kai Nakamura",
      handle: "@KaiNakWaves",
      text: "Just made my first website with it. Its flexibility is speaking my language.",
    },
  ],
];

const TestimonialCard = memo(function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.1)",
        padding: 24,
        minWidth: 320,
        width: 400,
        height: 176,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "center", width: "100%" }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 9999,
            overflow: "hidden",
            flexShrink: 0,
            background: `linear-gradient(135deg, hsl(${testimonial.name.length * 40}, 50%, 40%) 0%, hsl(${testimonial.name.length * 60}, 40%, 25%) 100%)`,
          }}
        />
        <div>
          <div style={{ fontSize: 18, fontWeight: 600, lineHeight: "28px", color: "#fafafa" }}>
            {testimonial.name}
          </div>
          <div style={{ fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "#71717a" }}>
            {testimonial.handle}
          </div>
        </div>
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 16,
          lineHeight: "24px",
          color: "#71717a",
          fontFamily: "inherit",
        }}
      >
        {testimonial.text}
      </p>
    </div>
  );
});

function ScrollingRow({ row, reverse }: { row: Testimonial[]; reverse?: boolean }) {
  const doubled = [...row, ...row];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        className="testimonial-scroll-track"
        style={{
          display: "flex",
          gap: 24,
          width: "max-content",
          animation: `testimonial-scroll ${reverse ? "35s linear infinite reverse" : "35s linear infinite"}`,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection({
  testimonials,
  title = "Loved by designers and developers",
  subtitle = "Here's what people are saying",
}: TestimonialsSectionProps) {
  const rows = testimonials ?? defaultTestimonials;
  return (
    <section
      style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 36,
        padding: "128px 24px",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 48px)",
            fontWeight: 600,
            lineHeight: "1.1",
            fontFamily: "inherit",
            margin: 0,
            textAlign: "center",
            color: "#fafafa",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: 20,
            lineHeight: "28px",
            color: "#71717a",
            fontFamily: "inherit",
            margin: 0,
            textAlign: "center",
            maxWidth: 580,
          }}
        >
          {subtitle}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ScrollingRow row={rows[0]} />
        {rows[1] && <ScrollingRow row={rows[1]} reverse />}
      </div>
    </section>
  );
}
