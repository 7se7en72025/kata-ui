import Link from "next/link";

export default function NotFound() {
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
      <h1 style={{ fontSize: 72, fontWeight: 800, marginBottom: 8, color: "#fb923c" }}>404</h1>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Page not found</h2>
      <p style={{ color: "#71717a", marginBottom: 24, maxWidth: 400 }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          padding: "12px 24px",
          borderRadius: 8,
          background: "linear-gradient(180deg, #fb923c 0%, #f97316 100%)",
          color: "#000",
          textDecoration: "none",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Go home
      </Link>
    </div>
  );
}
