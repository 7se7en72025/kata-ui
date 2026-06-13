"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { LiquidMetalBadge } from "./liquid-metal";
import AnimatedButton from "./animated-button";
import GlowButton from "./glow-button";

export function Hero() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const updateTheme = () => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute("data-theme") as "dark" | "light";
      setTheme(currentTheme || "dark");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 120px",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 52,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: theme === "dark"
            ? "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 720, position: "relative", zIndex: 1 }}>
        <LiquidMetalBadge
          metalConfig={{
            colorBack: theme === "dark" ? "#1a1a1a" : "#d4d4d4",
            colorTint: theme === "dark" ? "#444" : "#fff",
            speed: 0.3,
            repetition: 3,
            distortion: 0.1,
          }}
        >
          <span style={{ color: theme === "dark" ? "#888" : "#666" }}>MIT Licensed</span>
          <span style={{ display: "inline-block", width: 6 }} />
          <span style={{ color: theme === "dark" ? "#fff" : "#000", fontWeight: 500 }}>Open Source 2026</span>
        </LiquidMetalBadge>

        <h1
          style={{
            fontSize: "clamp(48px, 7vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: 0,
            fontFamily: "inherit",
          }}
        >
          <span style={{ color: theme === "dark" ? "#fff" : "#0d0d0d" }}>Form follows </span>
          <span
            style={{
              color: theme === "dark" ? "transparent" : "transparent",
              WebkitTextStroke: theme === "dark" ? "1.5px #444" : "0px transparent",
              backgroundImage: theme === "dark"
                ? "linear-gradient(180deg, #555 0%, #222 100%)"
                : "linear-gradient(180deg, #888 0%, #bbb 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            force.
          </span>
        </h1>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: theme === "dark" ? "#9b8ec4" : "#7a6b9e",
            fontFamily: "inherit",
            marginTop: 24,
            maxWidth: 480,
            letterSpacing: "0.01em",
          }}
        >
          Components built around motion, intention, and weight. How they move and respond matters more than how they sit on a screen.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 40,
          }}
        >
          <GlowButton onClick={() => router.push("/docs")}>
            Explore components
          </GlowButton>
          <AnimatedButton
            onClick={() => window.open("https://github.com/7se7en72025/kata-ui", "_blank")}
          >
            View GitHub
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
