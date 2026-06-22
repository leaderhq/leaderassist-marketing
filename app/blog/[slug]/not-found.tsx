import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-zinc-900">
      <h1 className="text-3xl font-extrabold tracking-tight text-brand-navy">
        Post not found
      </h1>
      <p className="mt-3 text-zinc-500">
        That article doesn&apos;t exist — but our blog is coming soon.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white transition hover:brightness-110"
      >
        ← Back to LeaderCal
      </Link>
    </div>
  );
}
