"use client";

export default function AdminError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-ink px-6 py-24 text-off-white">
      <div className="mx-auto max-w-lg text-center">
        <p className="type-display text-4xl">Something Went Wrong</p>
        <p className="mt-4 font-body text-silver">
          {error.message.includes("database connection")
            ? "The database isn't connected yet. Set DATABASE_URL in your environment (see db/schema.sql)."
            : "Couldn't load this page. Try again, or check the server logs."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full border border-off-white/30 px-8 py-4 font-body text-sm font-semibold tracking-[0.15em] uppercase hover:border-off-white"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
