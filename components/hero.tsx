"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { LiquidMetalBadge } from "./liquid-metal";
import AnimatedButton from "./animated-button";
import GlowButton from "./glow-button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
        className="hero-grid"
        style={{
          position: "absolute",
          top: 52,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 720, position: "relative", zIndex: 1 }}>
        <LiquidMetalBadge
          metalConfig={{
            colorBack: "#1a1a1a",
            colorTint: "#444",
            speed: 0.3,
            repetition: 3,
            distortion: 0.1,
          }}
        >
          <span style={{ color: "#888" }}>MIT Licensed</span>
          <span style={{ display: "inline-block", width: 6 }} />
          <span style={{ color: "#fff", fontWeight: 500 }}>Open Source 2026</span>
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
          <span style={{ color: "#fff" }}>Form follows </span>
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px #444",
              backgroundImage: "linear-gradient(180deg, #555 0%, #222 100%)",
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
            color: "#9b8ec4",
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
