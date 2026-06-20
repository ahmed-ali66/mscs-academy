import Link from "next/link";

export const metadata = {
  title: "Offline — MSCS Academy",
};

export default function OfflinePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background:
          "radial-gradient(at 20% 0%, rgba(74, 107, 62, 0.15) 0%, transparent 50%), radial-gradient(at 80% 100%, rgba(11, 64, 66, 0.25) 0%, transparent 50%), linear-gradient(180deg, #F6EFDD 0%, #FFFCF1 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 480,
          textAlign: "center",
          padding: "3rem 2rem",
          background: "rgba(255, 252, 241, 0.85)",
          backdropFilter: "blur(8px)",
          borderRadius: 16,
          border: "1px solid #D4C8AC",
          boxShadow: "0 24px 48px -16px rgba(31, 36, 25, 0.18)",
        }}
      >
        {/* Compass icon */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          style={{ margin: "0 auto 1.5rem", display: "block" }}
          aria-hidden
        >
          <circle cx="32" cy="32" r="28" fill="none" stroke="#0F5C5E" strokeWidth="2" />
          <circle cx="32" cy="32" r="20" fill="none" stroke="#7C5B2E" strokeWidth="1" />
          <polygon points="32,12 36,30 32,28 28,30" fill="#B5532A" />
          <polygon points="32,52 36,34 32,36 28,34" fill="#7C5B2E" />
          <circle cx="32" cy="32" r="3" fill="#B08D3C" />
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
          You&rsquo;re offline
        </h1>
        <p style={{ color: "#5E5546", marginBottom: "1.5rem", lineHeight: 1.6 }}>
          The compass has lost its bearings. Your device is offline, so we
          can&rsquo;t reach fresh lesson content. Don&rsquo;t worry — your
          progress is saved locally and will sync when you reconnect.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              background: "#0F5C5E",
              color: "#F6EFDD",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              border: "1px solid #0A4042",
            }}
          >
            Try Again
          </Link>
        </div>

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
