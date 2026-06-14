"use client";

import dynamic from "next/dynamic";
import { SideFrame } from "@/components/side-frame";
import { StackedLogos } from "@/components/stacked-logos";

const Navbar = dynamic(() => import("@/components/navbar").then(m => ({ default: m.Navbar })), { ssr: false });
const Hero = dynamic(() => import("@/components/hero").then(m => ({ default: m.Hero })), { ssr: false });
const Footer = dynamic(() => import("@/components/footer").then(m => ({ default: m.Footer })), { ssr: false });

const techLogos = [
  [
    <span key="next" style={{ fontSize: 28, fontWeight: 700, color: "#fff", fontFamily: "sans-serif" }}>N</span>,
    <span key="tailwind" style={{ fontSize: 20, fontWeight: 700, color: "#38bdf8", fontFamily: "monospace" }}>tw</span>,
    <span key="ts" style={{ fontSize: 20, fontWeight: 700, color: "#3178c6", fontFamily: "monospace" }}>TS</span>,
    <span key="framer" style={{ fontSize: 24, fontWeight: 700, color: "#facc15", fontFamily: "monospace" }}>f</span>,
  ],
];

export default function Home() {
  return (
    <main className="min-h-[300vh] theme-bg relative">
      <Navbar />
      <SideFrame />
      <Hero />

      {/* Tech Stack */}
      <section
        style={{
          padding: "80px 120px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "#fff",
            fontFamily: "inherit",
            textAlign: "center",
            marginBottom: 48,
            letterSpacing: "-0.02em",
          }}
        >
          Tech Stack
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 0,
            maxWidth: 900,
            margin: "0 auto",
            border: "1px solid #222",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {[
            { name: "Next.js", icon: "N", color: "#fff", bg: "#000", delay: "0s" },
            { name: "Tailwind", icon: "tw", color: "#38bdf8", bg: "#0c1a2a", delay: "0.1s" },
            { name: "TypeScript", icon: "TS", color: "#3178c6", bg: "#0d1a2e", delay: "0.2s" },
            { name: "Framer", icon: "f", color: "#facc15", bg: "#1a1a00", delay: "0.3s" },
          ].map((tech, i) => (
            <div
              key={tech.name}
              className="stacked-logos__item"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "36px 20px",
                borderRight: i < 3 ? "1px solid #222" : "none",
                background: "#0a0a0a",
                animationDelay: tech.delay,
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                className="stacked-logos__glow"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 50% 50%, ${tech.color}15, transparent 70%)`,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: tech.bg,
                  border: "1px solid #333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                  marginBottom: 12,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontSize: tech.icon.length > 1 ? 18 : 24,
                    fontWeight: 700,
                    color: tech.color,
                    fontFamily: tech.name === "Next.js" ? "inherit" : "monospace",
                  }}
                >
                  {tech.icon}
                </span>
              </div>
              <span
                style={{
                  fontSize: 13,
                  color: "#888",
                  fontFamily: "inherit",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Open Source CTA */}
      <section
        style={{
          padding: "100px 120px",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#888",
            fontFamily: "inherit",
            marginBottom: 16,
          }}
        >
          MIT Licensed
        </p>

        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.1,
            fontFamily: "inherit",
            margin: 0,
          }}
        >
          <span style={{ color: "#fff" }}>100% Open Source</span>
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px #444",
              backgroundImage: "linear-gradient(180deg, #555 0%, #222 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontStyle: "italic",
            }}
          >
            and Free Forever
          </span>
        </h2>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "#888",
            fontFamily: "inherit",
            marginTop: 24,
            maxWidth: 560,
          }}
        >
          KataUI is{" "}
          <span style={{ color: "#ccc", fontWeight: 600 }}>and always will be</span>{" "}
          free and open source. Use in personal and commercial projects. Contribute,
          fork, and make it your own.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 32,
          }}
        >
          <a
            href="https://github.com/7se7en72025/kata-ui"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 8,
              background: "#fff",
              color: "#000",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "inherit",
              textDecoration: "none",
              transition: "background 0.15s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Star on GitHub
          </a>
          <a
            href="/docs"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 24px",
              borderRadius: 8,
              border: "1px solid #333",
              background: "transparent",
              color: "#ccc",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "inherit",
              textDecoration: "none",
              transition: "border-color 0.15s ease",
            }}
          >
            Read Documentation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
