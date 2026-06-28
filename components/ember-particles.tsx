"use client";

import React, { useMemo } from "react";

interface EmberParticle {
  x: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  color: string;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function EmberParticles() {
  const particles = useMemo(() => {
    const count = 16;
    const left: EmberParticle[] = [];
    const right: EmberParticle[] = [];
    const colors = ["#ff4500", "#ff6b2b", "#ff8c42", "#ffb366", "#ffd700", "#ff3300"];

    for (let i = 0; i < count; i++) {
      const seed = i * 7.31;
      const p: EmberParticle = {
        x: seededRandom(seed) * 120 - 60,
        size: seededRandom(seed + 1) * 3 + 1,
        delay: seededRandom(seed + 2) * 5,
        duration: seededRandom(seed + 3) * 4 + 4,
        drift: (seededRandom(seed + 4) - 0.5) * 60,
        color: colors[Math.floor(seededRandom(seed + 5) * colors.length)],
      };
      left.push(p);
      right.push({ ...p, x: -p.x, drift: -p.drift, delay: p.delay + 0.5 });
    }
    return { left, right };
  }, []);

  return (
    <>
      <div className="ember-cluster ember-cluster--left">
        {particles.left.map((p, i) => (
          <div
            key={i}
            className="ember-dot"
            style={
              {
                left: `${50 + p.x * 0.5}%`,
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                "--d": `${p.drift}px`,
                "--del": `${p.delay}s`,
                "--dur": `${p.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <div className="ember-cluster ember-cluster--right">
        {particles.right.map((p, i) => (
          <div
            key={i}
            className="ember-dot"
            style={
              {
                left: `${50 + p.x * 0.5}%`,
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                "--d": `${p.drift}px`,
                "--del": `${p.delay}s`,
                "--dur": `${p.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
}
