"use client";

import React from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "32px",
        textAlign: "center",
        background: "#0a0a0a",
        color: "#fafafa",
      }}
    >
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>Something went wrong</h2>
      <p style={{ color: "#71717a", marginBottom: 24, maxWidth: 500 }}>
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={reset}
        style={{
          padding: "12px 24px",
          borderRadius: 8,
          background: "linear-gradient(180deg, #fb923c 0%, #f97316 100%)",
          color: "#000",
          border: "none",
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Try again
      </button>
    </div>
  );
}
