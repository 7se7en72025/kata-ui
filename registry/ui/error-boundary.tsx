"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "400px",
            padding: "32px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8, color: "#fafafa" }}>
            Something went wrong
          </h2>
          <p style={{ color: "#71717a", marginBottom: 16 }}>
            {this.state.error?.message || "An unexpected error occurred"}
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              background: "rgba(255,255,255,0.1)",
              color: "#fafafa",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
