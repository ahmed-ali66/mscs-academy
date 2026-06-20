/**
 * App-level loading state — shown while route segments are loading.
 */
export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Spinning astrolabe */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className="anim-astrolabe mx-auto mb-4"
          aria-hidden
        >
          <circle cx="32" cy="32" r="28" fill="none" stroke="#0F5C5E" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="20" fill="none" stroke="#7C5B2E" strokeWidth="0.8" strokeDasharray="2 3" />
          <line x1="32" y1="4" x2="32" y2="12" stroke="#0F5C5E" strokeWidth="1.5" />
          <line x1="32" y1="52" x2="32" y2="60" stroke="#0F5C5E" strokeWidth="1.5" />
          <line x1="4" y1="32" x2="12" y2="32" stroke="#0F5C5E" strokeWidth="1.5" />
          <line x1="52" y1="32" x2="60" y2="32" stroke="#0F5C5E" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="3" fill="#B08D3C" />
        </svg>
        <p className="text-[var(--muted-foreground)]" style={{ fontFamily: "var(--font-serif)" }}>
          Loading…
        </p>
      </div>
    </main>
  );
}
