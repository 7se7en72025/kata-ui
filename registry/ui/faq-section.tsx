"use client";

import React, { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs?: FaqItem[];
  title?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    q: "Is this component easy to customise?",
    a: "Yes, absolutely. All components use CSS variables and Tailwind classes, making it trivial to match your brand.",
  },
  {
    q: "Is it optimized for search engines?",
    a: "Yes. The components are built with semantic HTML and follow accessibility best practices that search engines reward.",
  },
  {
    q: "How does it compare to no-code tools?",
    a: "You get full code ownership, no vendor lock-in, and the flexibility to build anything without limitations.",
  },
  {
    q: "Why not just code it myself?",
    a: "You can, but this saves you hundreds of hours with production-ready, tested components you can copy and paste.",
  },
];

function FaqItemComponent({ faq }: { faq: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 720,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "16px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#fafafa",
            fontFamily: "inherit",
            lineHeight: "24px",
            flex: 1,
          }}
        >
          {faq.q}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            flexShrink: 0,
            transition: "transform 0.2s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#fafafa"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? 200 : 0,
          transition: "max-height 0.2s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            padding: "0 0 16px",
            fontSize: 16,
            color: "#71717a",
            fontFamily: "inherit",
            lineHeight: "24px",
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export function FaqSection({ faqs, title = "Questions and Answers" }: FaqSectionProps) {
  const items = faqs ?? defaultFaqs;
  return (
    <section
      style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 48,
        padding: "128px 24px",
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
          color: "#fafafa",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {items.map((faq) => (
          <FaqItemComponent key={faq.q} faq={faq} />
        ))}
      </div>
    </section>
  );
}
