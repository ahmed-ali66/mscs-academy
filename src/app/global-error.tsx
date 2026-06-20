"use client";

import { useEffect } from "react";

/**
 * Global error boundary — catches unhandled errors in any route segment.
 * Per Next.js 16 App Router: must be a Client Component.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console (in production, forward to Sentry)
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background:
          "radial-gradient(at 20% 0%, rgba(181, 83, 42, 0.10) 0%, transparent 50%), linear-gradient(180deg, #F6EFDD 0%, #FFFCF1 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 480,
          textAlign: "center",
          padding: "3rem 2rem",
          background: "rgba(255, 252, 241, 0.9)",
          backdropFilter: "blur(8px)",
          borderRadius: 16,
          border: "1px solid #D4C8AC",
          boxShadow: "0 24px 48px -16px rgba(31, 36, 25, 0.18)",
        }}
      >
        {/* Compass with broken needle — visual metaphor */}
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          style={{ margin: "0 auto 1.5rem", display: "block" }}
          aria-hidden
        >
          <circle cx="36" cy="36" r="32" fill="none" stroke="#0F5C5E" strokeWidth="2" />
          <circle cx="36" cy="36" r="24" fill="none" stroke="#7C5B2E" strokeWidth="0.8" strokeDasharray="2 2" />
          {/* Broken needle */}
          <line x1="36" y1="36" x2="48" y2="22" stroke="#B5532A" strokeWidth="2" strokeLinecap="round" />
          <line x1="36" y1="36" x2="28" y2="48" stroke="#7C5B2E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
          <circle cx="36" cy="36" r="3" fill="#B08D3C" />
        </svg>

        <h1
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#1F2419",
            marginBottom: "0.5rem",
          }}
        >
          Something went wrong
        </h1>
        <p style={{ color: "#5E5546", marginBottom: "1.5rem", lineHeight: 1.6 }}>
          The compass needle has slipped. We&rsquo;ve logged this error and
          our team will look into it. Your progress is safe — please try again.
        </p>

        <button
          onClick={reset}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            background: "#0F5C5E",
            color: "#F6EFDD",
            borderRadius: 8,
            border: "1px solid #0A4042",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try Again
        </button>

        {error.digest && (
          <p style={{ marginTop: "1.5rem", fontSize: "0.75rem", color: "#8B7E63", fontFamily: "monospace" }}>
            Error ID: {error.digest}
          </p>
        )}

        <p
          style={{
            marginTop: "2rem",
            fontSize: "0.75rem",
            color: "#8B7E63",
            letterSpacing: "0.05em",
          }}
        >
          MSCS ACADEMY · TEACHER-CREATED STUDY MATERIAL
        </p>
      </div>
    </main>
  );
}
