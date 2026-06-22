'use client';

export default function RootError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <main className="w-full max-w-md text-center">
        <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-8">
          <h1 className="text-xl font-bold text-zinc-900">Something went wrong</h1>
          <p className="mt-2 text-sm text-zinc-500">
            We couldn&apos;t load this page. Please try again in a moment.
          </p>
          <button
            onClick={reset}
            className="mt-6 rounded-xl bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
          >
            Try again
          </button>
        </div>
        <p className="mt-6 text-xs text-zinc-400">
          Powered by <span className="font-semibold">LeaderCal</span>
        </p>
      </main>
    </div>
  );
}
