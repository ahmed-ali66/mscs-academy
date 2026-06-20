"use client";

/**
 * App-level error boundary — catches errors thrown by route segments below.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-[var(--ink)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
          Something went wrong
        </h1>
        <p className="text-[var(--muted-foreground)] mb-6">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="btn-heritage-primary px-6 py-2.5 rounded-full"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
