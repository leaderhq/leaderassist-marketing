import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon } from '@/app/_marketing/icons';

const APP_URL = 'https://assist.leaderhq.io';

export const metadata: Metadata = {
  title: 'About — LeaderAssist',
  description:
    'LeaderAssist is part of the Leader Suite — an AI assistant that ties every Leader app together so field leaders can stop doing admin and start focusing on people.',
  alternates: { canonical: '/about' },
};

const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'For Teams', href: '/for-teams' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'For Teams', href: '/for-teams' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'System Status', href: 'https://leaderhq.io/status', external: true },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Sales Teams', href: '/for-teams' },
      { label: 'Field Leaders', href: '/for-teams' },
      { label: 'Network Marketing', href: '/for-teams' },
      { label: 'Blog & Resources', href: '/blog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About LeaderHQ', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security & GDPR', href: '/security' },
    ],
  },
];

const VALUES = [
  {
    icon: 'handshake',
    title: 'People over process',
    body: "Leaders don't burn out from the work they love — talking to people, building teams, closing rooms. They burn out from everything around it. Every LeaderAssist feature is designed to take the admin off your plate so you can stay in the conversation.",
  },
  {
    icon: 'bolt',
    title: 'One request. Done.',
    body: 'If it takes more than a sentence to start, we didn\'t build it right. LeaderAssist is built for the leader who\'s moving fast and doesn\'t have time to learn another tool.',
  },
  {
    icon: 'gift',
    title: 'Free where it matters',
    body: 'The assistant is free to start. We believe every field leader deserves an AI that actually helps — not a watered-down demo. Start free, upgrade when you\'re ready.',
  },
] as const;

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
      <SiteNav
        productSuffix="Assist"
        links={NAV_LINKS}
        ctaLabel="Try LeaderAssist free"
        ctaHref={`${APP_URL}/signup`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        {/* Hero */}
        <section
          className="text-white"
          style={{ background: '#06163E' }}
        >
          <div className="mx-auto max-w-[820px] px-4 py-24 sm:px-6">
            <FadeIn>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                Why we built it.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                Leaders don&apos;t burn out from the work they love — talking to people, building
                teams, closing rooms. They burn out from everything around it. The follow-ups.
                The scheduling. The updates. The five tools that each want five more minutes.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              The assistant that ties it all together
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-600">
              The Leader Suite already gave field leaders best-in-class tools for leads,
              scheduling, broadcasts, and content. LeaderAssist ties them together with a
              single assistant that actually does the work — so the busywork stops being
              your second job.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              One chat. One login. It drafts your follow-ups, books your calls, schedules
              your blasts, and runs the operational load across every Leader app — so you
              can focus on the people and moments that only you can handle.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderAssist is one product in a connected family — LeaderLeads, LeaderCal,
              LeaderSend, LeaderStreams, LeaderLMS, LeaderAffiliate and more. One login
              spans the whole Suite, and LeaderAssist works across all of it. It&apos;s built
              and supported by LeaderHQ, a division of Know Freedom Technologies.
            </p>
            <div className="mt-10">
              <a
                href={`${APP_URL}/signup`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Try LeaderAssist free →
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Values */}
        <section
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #06163E 4%, #fff)' }}
        >
          <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                What we stand for
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <FadeIn
                  key={v.title}
                  delay={i * 80}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <MarketingIcon name={v.icon} size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{v.body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Where we're headed */}
        <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Where we&apos;re headed
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              The goal is simple: an assistant trustworthy enough that leaders hand off more
              and more of the operational load, and free up their attention for the things
              only they can do. We&apos;re just getting started.
            </p>
          </FadeIn>
        </section>

        {/* Suite CTA */}
        <section className="mx-auto max-w-[560px] px-4 py-20 text-center sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Part of the Leader Suite
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderAssist is one product in a growing suite of tools for leaders, sales
              professionals, and the organizations they build. Visit LeaderHQ to see
              what else we&apos;re building.
            </p>
            <a
              href="https://leaderhq.io"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-navy px-6 text-base font-semibold text-white shadow-md transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              Visit LeaderHQ →
            </a>
          </FadeIn>
        </section>
      </main>
      <SiteFooter
        productSuffix="Assist"
        columns={FOOTER_COLUMNS}
      />
    </div>
  );
}
