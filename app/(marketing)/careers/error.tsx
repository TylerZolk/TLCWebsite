"use client";

export default function CareersError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="type-display text-4xl sm:text-5xl">Check Back Soon</p>
      <p className="mt-4 max-w-md font-body text-silver">
        We couldn&apos;t load open positions right now. Please try again in a
        moment.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full border border-off-white/30 px-8 py-4 font-body text-sm font-semibold tracking-[0.15em] uppercase hover:border-off-white"
      >
        Try Again
      </button>
    </div>
  );
}
