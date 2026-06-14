"use client";

import React, { useMemo } from "react";

interface GlitchTextProps {
  text?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  color?: string;
  size?: string;
  weight?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

let _id = 0;
const uid = () => `glt-${++_id}`;

export function GlitchText({
  text = "KATA UI",
  as: Tag = "span",
  color = "#FFD700",
  size = "4rem",
  weight = 900,
  className,
  style,
}: GlitchTextProps) {
  const id = useMemo(uid, []);

  const css = `
@import url('https://fonts.cdnfonts.com/css/doctor-glitch');

/* Glitch: horizontal slices shift left/right then snap back */
@keyframes ${id} {
  0% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
  }
  /* first glitch burst */
  2% {
    clip-path: inset(15% 0 65% 0);
    transform: translate(-4px, 0);
  }
  4% {
    clip-path: inset(60% 0 10% 0);
    transform: translate(3px, 0);
  }
  5% {
    clip-path: inset(30% 0 40% 0);
    transform: translate(-2px, 0);
  }
  6% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
  }
  /* hold */
  40% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
  }
  /* second glitch burst */
  41% {
    clip-path: inset(70% 0 5% 0);
    transform: translate(5px, 0);
  }
  42% {
    clip-path: inset(10% 0 75% 0);
    transform: translate(-3px, 0);
  }
  43% {
    clip-path: inset(45% 0 25% 0);
    transform: translate(2px, 0);
  }
  44% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
  }
  /* hold */
  75% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
  }
  /* third glitch burst */
  76% {
    clip-path: inset(25% 0 55% 0);
    transform: translate(-3px, 0);
  }
  77% {
    clip-path: inset(80% 0 0% 0);
    transform: translate(4px, 0);
  }
  78% {
    clip-path: inset(5% 0 85% 0);
    transform: translate(-2px, 0);
  }
  79% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
  }
  100% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
  }
}

.${id} {
  position: relative;
  display: inline-block;
  font-family: 'Doctor Glitch', cursive;
  font-size: ${size};
  font-weight: ${weight};
  color: ${color};
  letter-spacing: 0.04em;
  line-height: 1.1;
  text-transform: uppercase;
  white-space: nowrap;
}

.${id}::before,
.${id}::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: 'Doctor Glitch', cursive;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-transform: inherit;
  white-space: nowrap;
  color: inherit;
  pointer-events: none;
}

.${id}::before {
  animation: ${id} 3s infinite steps(1);
}

.${id}::after {
  animation: ${id} 3s infinite steps(1);
  animation-delay: 0.15s;
}

@media (prefers-reduced-motion: reduce) {
  .${id}::before,
  .${id}::after {
    animation: none;
    clip-path: none;
    transform: none;
  }
}
`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Tag
        className={`${id} ${className ?? ""}`}
        data-text={text}
        style={style}
      >
        {text}
      </Tag>
    </>
  );
}
