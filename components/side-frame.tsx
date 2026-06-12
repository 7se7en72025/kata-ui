"use client";

import { motion } from "framer-motion";

const SCALE_VALUES = Array.from({ length: 18 }, (_, i) => i * 50);

const VB_W = 100;
const VB_H = 1000;
const PAD_TOP = 55;
const PAD_BOT = 945;
const Y_STEP = (PAD_BOT - PAD_TOP) / (SCALE_VALUES.length - 1);

const Y_POSITIONS = SCALE_VALUES.map((_, i) => PAD_TOP + i * Y_STEP);

const MICRO_DIVS = 4;
const MICRO_TICKS = SCALE_VALUES.slice(0, -1).flatMap((_, i) =>
  Array.from({ length: MICRO_DIVS }, (_, j) => ({
    y: Y_POSITIONS[i] + ((j + 1) * Y_STEP) / (MICRO_DIVS + 1),
  }))
);

function SideRail({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  const m = (x: number) => (isLeft ? x : VB_W - x);

  const cx = m(55);
  const scaleLineX = m(26);
  const tickOuter = m(46);
  const tickInner = m(26);
  const labelX = m(82);
  const dotLineX = m(55);

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`pointer-events-none fixed inset-y-0 z-40 ${isLeft ? "left-0" : "right-0"} w-[clamp(2.25rem,5vw,4.25rem)] select-none`}
    >
      <div
        className={`absolute inset-y-0 ${isLeft ? "left-px" : "right-px"} w-px bg-gradient-to-b from-transparent via-white/[0.09] to-transparent`}
      />
      <div
        className={`absolute inset-y-0 ${isLeft ? "right-px" : "left-px"} w-px bg-gradient-to-b from-transparent via-white/[0.035] to-transparent`}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`fade-${side}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="6%" stopColor="white" stopOpacity="0.06" />
            <stop offset="50%" stopColor="white" stopOpacity="0.1" />
            <stop offset="94%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`glowEdge-${side}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.03)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <filter id={`softGlow-${side}`}>
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line
          x1={scaleLineX}
          y1="0"
          x2={scaleLineX}
          y2={VB_H}
          stroke={`url(#fade-${side})`}
          strokeWidth="0.5"
        />

        <motion.g
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.18, 0.45, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <line
            x1={dotLineX}
            y1={0}
            x2={dotLineX}
            y2={VB_H}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
            strokeDasharray="1.5 5"
          />
        </motion.g>

        {MICRO_TICKS.map((t, i) => (
          <line
            key={`mt-${i}`}
            x1={tickOuter}
            y1={t.y}
            x2={tickInner}
            y2={t.y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
          />
        ))}

        {SCALE_VALUES.map((val, i) => {
          const y = Y_POSITIONS[i];
          return (
            <motion.g
              key={val}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.025 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <line
                x1={tickOuter}
                y1={y}
                x2={tickInner}
                y2={y}
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="0.75"
              />
              <line
                x1={tickOuter - 7}
                y1={y}
                x2={tickInner}
                y2={y}
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="0.5"
              />

              <circle
                cx={cx}
                cy={y}
                r={6.5}
                fill="none"
                stroke="rgba(255,255,255,0.025)"
                strokeWidth="1.5"
              />
              <circle
                cx={cx}
                cy={y}
                r={4}
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.75"
                filter={`url(#softGlow-${side})`}
              />
              <circle
                cx={cx}
                cy={y}
                r={1}
                fill="rgba(255,255,255,0.08)"
              />

              <text
                x={labelX}
                y={y + 3}
                textAnchor={isLeft ? "start" : "end"}
                transform={`rotate(${isLeft ? -90 : 90} ${labelX} ${y + 3})`}
                fill="rgba(255,255,255,0.18)"
                fontSize="7.5"
                letterSpacing="0.08em"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                fontWeight="300"
              >
                {val}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </motion.div>
  );
}

export function SideFrame() {
  return (
    <>
      <SideRail side="left" />
      <SideRail side="right" />
    </>
  );
}
