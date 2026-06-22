import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const FEATURED_POSTS: {slug: string; title: string; excerpt: string; category: string}[] = [];
const APP_URL = 'https://leads.leaderhq.io';
const GREEN_AA = '#5cb85c';

export const metadata: Metadata = {
  title: 'For Conferences & Events — LeaderLeads',
  description:
    'Work the room and actually follow up with everyone. The conference card with offline Event Mode, Memory Moment, and a lead inbox built for 40-conversation days.',
  alternates: { canonical: '/for-conferences' },
};

const STATS: { num: string; label: string; cite?: number }[] = [
  { num: '40', label: 'avg conversations at a 2-day conference' },
  { num: '24h', label: 'warm window before follow-up goes cold' },
  { num: '3X', label: 'higher response rate with a photo opener', cite: 1 },
  { num: '$0', label: 'to get started, forever' },
];

const REFERENCES = [
  {
    n: 1,
    text: 'Salesforce, "State of Sales" (multiple editions); corroborated by HubSpot sales benchmarking research. Warm, personalised outreach consistently outperforms cold contact; photo-based openers represent the high end of that range.',
  },
];

const FIX_ITEMS: { text: string; pro?: boolean }[] = [
  { text: 'Every person who scans your card enters your lead inbox with a timestamp — real-time, automatic, organized' },
  { text: 'Memory Moment photos go to both of you within seconds of the conversation happening', pro: true },
  { text: 'Sunday night triage takes 15 minutes instead of two hours because the work is already done' },
  { text: 'Monday follow-up is a process with a real list — not a puzzle assembled from scraps' },
  { text: 'Your lead list is complete. No one slips through the gap.' },
];

export default function ForConferencesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl="https://cal.leaderhq.io" />
      <SiteNav
        productSuffix="Leads"
        links={[{ label: "How It Works", href: "/how-it-works" }, { label: "Memory Moment", href: "/memory-moment" }, { label: "Solutions", href: "#" }, { label: "Blog", href: "/blog" }]}
        ctaLabel="Get Your Free Card"
        ctaHref="/signup"
        loginHref="https://leads.leaderhq.io/login"
      />
      <main className="flex-1">
        <Hero />
        <ProblemFixSection />
        <EventModeBand />
        <BlogSection />
        <FinalCta />
        <ReferencesSection />
      </main>
      <SiteFooter
        productSuffix="Leads"
        columns={[{"heading":"Product","links":[{"label":"How It Works","href":"/how-it-works"},{"label":"Memory Moment","href":"/memory-moment"},{"label":"Event Mode","href":"/how-it-works#event-mode"},{"label":"Pricing","href":"/pricing"},{"label":"System Status","href":"https://leaderhq.io/status"}]},{"heading":"Solutions","links":[{"label":"Network Marketing","href":"/for-network-marketing"},{"label":"Conferences & Events","href":"/for-conferences"},{"label":"Summer Sales","href":"/for-summer-sales"},{"label":"Sales Teams","href":"/for-teams"},{"label":"Blog & Resources","href":"/blog"}]},{"heading":"Company","links":[{"label":"About LeaderHQ","href":"/about"},{"label":"Contact","href":"/contact"},{"label":"Privacy Policy","href":"/privacy"},{"label":"Terms of Service","href":"/terms"},{"label":"Security & GDPR","href":"/security"}]}]}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'radial-gradient(80% 520px at 50% -10%, color-mix(in srgb, #0d1b2e 9%, transparent), transparent)',
        }}
      />
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <FadeIn>
          <span className="inline-flex items-center rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-white">
            For Conferences &amp; Events
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-[3.4rem]">
            Work the room.
            <br />
            Follow up with everyone.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            You meet 40 people over two days. Most attendees follow up with
            four. Here&apos;s the system that makes 40 follow-ups manageable —
            and actually gets responses.
          </p>
          <ul className="mt-7 space-y-3 text-base text-zinc-700">
            {[
              { text: 'Event Mode works offline in any venue, any wifi situation.' },
              { text: 'Memory Moment creates a shared record of every key conversation.', pro: true },
              { text: 'Lead inbox organized by time — triage in minutes, not hours.' },
              { text: 'Monday follow-up with context, not cold guesswork.' },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-2">
                <span style={{ color: GREEN_AA }} aria-hidden>
                  ✓
                </span>
                <span>
                  {item.text}
                  {item.pro && (
                    <span className="ml-1.5 inline-flex items-center rounded-full bg-brand-navy px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white align-middle">
                      Pro
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <a
            href={`${APP_URL}/login`}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            Get Your Free Card
          </a>
        </FadeIn>
        <FadeIn delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-4xl font-extrabold text-brand-navy">
                  {s.num}
                  {s.cite && (
                    <sup className="ml-0.5 text-base font-semibold text-brand-green">
                      {s.cite}
                    </sup>
                  )}
                </div>
                <div className="mt-2 text-sm leading-snug text-zinc-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProblemFixSection() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            The conference
            <br />
            follow-up problem.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Sunday night on the flight home: exhausted, 12 first names saved
            imperfectly in your phone, a badge lanyard full of paper cards from
            people you can&apos;t quite picture, and no system for turning any
            of it into a Monday morning conversation.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            The warm window closes in 24 to 48 hours. By Wednesday you&apos;re
            a stranger. By Friday they&apos;ve moved on entirely.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            And if the venue ran a conference app? Monday morning you have six
            messages. Four are from people you don&apos;t recognise or recall
            meeting. The two you do remember still have to be manually entered
            into your CRM — the app doesn&apos;t talk to anything.
          </p>
        </FadeIn>
        <FadeIn delay={120}>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            The LeaderLeads fix.
          </h2>
          <ul className="mt-5 space-y-3 text-base text-zinc-700">
            {FIX_ITEMS.map((item) => (
              <li key={item.text} className="flex items-start gap-2">
                <span style={{ color: GREEN_AA }} aria-hidden>
                  ✓
                </span>
                <span className="leading-relaxed">
                  {item.text}
                  {item.pro && (
                    <span className="ml-1.5 inline-flex items-center rounded-full bg-brand-navy px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white align-middle">
                      Pro
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

function EventModeBand() {
  return (
    <section style={{ background: '#0d1b2e' }}>
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Event Mode
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Venue wifi just failed.
            <br />
            You didn&apos;t.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-zinc-300">
            Event Mode works completely offline. One tap. Full screen.
            High-contrast QR. Anyone with a phone camera can scan it from three
            feet away, in dim lighting, through a crowd. It works every time,
            no conditions attached.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`${APP_URL}/login`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Your Free Card
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-6 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              How it works →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="border-t border-zinc-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h3 className="text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">From the blog</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md"
            >
              <span className="self-start rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand-green">{post.category.replace('-', ' ')}</span>
              <h4 className="mt-3 text-lg font-bold leading-snug text-brand-navy">{post.title}</h4>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">{post.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-brand-green">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferencesSection() {
  return (
    <section className="border-t border-zinc-100 bg-zinc-50">
      <div className="mx-auto max-w-[820px] px-4 py-10 sm:px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Sources
        </p>
        <ol className="space-y-2">
          {REFERENCES.map((ref) => (
            <li key={ref.n} className="flex gap-2 text-xs leading-relaxed text-zinc-400">
              <span className="shrink-0 font-semibold text-brand-green">{ref.n}.</span>
              <span>{ref.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      className="border-t border-zinc-100"
      style={{ background: 'color-mix(in srgb, #5cb85c 6%, #fff)' }}
    >
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Your next conference is your best follow-up test.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            Show up with a system. Leave with a list. Get your card free and
            attend one event — you&apos;ll see the difference immediately.
          </p>
          <a
            href={`${APP_URL}/login`}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            Get Your Free Card
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
