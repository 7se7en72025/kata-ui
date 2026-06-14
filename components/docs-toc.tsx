"use client";

import React, { useState, useEffect, useCallback } from "react";

interface TocItem {
  label: string;
  href: string;
}

interface DocsTocProps {
  items: TocItem[];
}

export function DocsToc({ items }: DocsTocProps) {
  const [activeId, setActiveId] = useState<string>("");

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, [items]);

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        padding: "24px 20px",
        borderLeft: "1px solid #1a1a1a",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#666",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 16,
          fontFamily: "inherit",
        }}
      >
        On This Page
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeId === id || (!activeId && item.href === "#overview");
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              style={{
                fontSize: 13,
                fontFamily: "inherit",
                color: isActive ? "#fff" : "#555",
                textDecoration: "none",
                padding: "4px 0 4px 12px",
                borderLeft: isActive ? "1px solid #fff" : "1px solid transparent",
                transition: "all 0.1s ease",
                lineHeight: 1.5,
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
