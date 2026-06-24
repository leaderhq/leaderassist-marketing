import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { AiChatMock } from './_marketing/mocks';
import { MarketingIcon, type MarketingIconName } from './_marketing/icons';

const SITE_URL = 'https://leaderassist.io';
const APP_URL = 'https://assist.leaderhq.io';

const ASSIST_PHRASES = [
  'for the whole Suite.',
  'for every follow-up.',
  'for your busiest days.',
  'that never drops a ball.',
  'that just gets it done.',
] as const;

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'LeaderAssist — AI Assistant for Leaders',
  description:
    'One chat that drafts your follow-ups, books your calls, and runs your busywork across every Leader app — so you can focus on people, not tools.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'LeaderAssist',
    title: 'LeaderAssist — Your AI assistant for the whole Suite.',
    description:
      'One chat that drafts your follow-ups, books your calls, and runs your busywork across every Leader app — so you can focus on people, not tools.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeaderAssist — Your AI assistant for the whole Suite.',
    description:
      'One chat that drafts your follow-ups, books your calls, and runs your busywork across every Leader app — so you can focus on people, not tools.',
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
      <SiteNav
        productSuffix="Assist"
        links={NAV_LINKS}
        ctaLabel="Get Started Free"
        ctaHref={`${APP_URL}/signup`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        <Hero />
        <TrustBand />
        <FeaturesGrid />
        <DataAwareSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <PricingSection />
        <FinalCta />
      </main>
      <SiteFooter
        productSuffix="Assist"
        columns={FOOTER_COLUMNS}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden style={{ background: 'radial-gradient(80% 520px at 50% -10%, color-mix(in srgb, #06163E 9%, transparent), transparent)' }} />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 md:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-12">
        <FadeIn>
          <TypewriterHeadline
            staticPrefix="Your AI assistant"
            phrases={ASSIST_PHRASES}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            One chat that drafts your follow-ups, books your calls, and runs your busywork across every Leader app — so you can focus on people, not tools.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href={`${APP_URL}/signup`} className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:w-auto">
              Try LeaderAssist free
            </a>
            <Link href="/how-it-works" className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green">
              See how it works →
            </Link>
          </div>
          <p className="mt-5 text-sm text-zinc-500">
            Free to start. No credit card required.{' '}
            <strong className="font-semibold text-zinc-700">Works across the whole Leader Suite.</strong>
          </p>
        </FadeIn>
        <FadeIn delay={120} className="flex justify-center lg:justify-end">
          <AiChatMock />
        </FadeIn>
      </div>
    </section>
  );
}

const TRUST_ORGS = ['Summit', 'Northwind', 'Apex', 'Vertex', 'Beacon'];

function TrustBand() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/60">
      <div className="mx-auto max-w-5xl px-4 py-7 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Trusted by</p>
          {TRUST_ORGS.map((org) => (
            <span key={org} className="text-sm font-bold tracking-wide text-zinc-400">{org}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Feature { title: string; body: string; icon: MarketingIconName; }

const FEATURES: Feature[] = [
  { title: 'Ask in plain English.', body: '"Follow up with everyone I met Saturday." Done. No menus, no clicks — just tell it what you need.', icon: 'target' },
  { title: 'Drafts, books, and sends.', body: 'Follow-up emails, booked calls, broadcast blasts — LeaderAssist does the busywork and hands you the wins.', icon: 'bell' },
  { title: 'Works across the Suite.', body: 'One assistant for Leads, Cal, Send, Streams and the rest. It moves between your tools so you don\'t have to.', icon: 'users' },
  { title: 'Learns your rhythm.', body: 'It picks up your voice, your team, and how you work — getting sharper and more useful every day.', icon: 'trophy' },
  { title: 'Knows your data.', body: 'LeaderAssist reads your actual Leader Suite data — leads, tasks, meetings, and team activity. It answers from your context, not the internet.', icon: 'bar-chart' },
  { title: 'Prep for meetings.', body: "Ask LeaderAssist to prep you for a meeting — it pulls the contact's history, notes, and any open tasks so you walk in ready.", icon: 'calendar' },
  { title: 'Generate content.', body: 'Need a social post, a follow-up sequence, or an event announcement? LeaderAssist drafts it and can push it straight to LeaderStreams or LeaderSend.', icon: 'share' },
  { title: 'Surface who needs attention.', body: 'Ask "who needs follow-up today?" and get a ranked list pulled directly from your leads and tasks — no digging required.', icon: 'check-circle' },
  { title: 'Task creation on the fly.', body: 'Tell it what needs to happen and it creates the task — already assigned, prioritized, and due-dated. No switching apps.', icon: 'clipboard' },
  { title: 'Leader Suite SSO.', body: "One login across the whole suite. If you're signed into LeaderLeads or LeaderCal, you're already in LeaderAssist. No extra step.", icon: 'link' },
  { title: 'Coach your reps.', body: "Give it a rep's recent activity and ask for coaching notes. LeaderAssist identifies gaps and suggests specific talking points for your next call.", icon: 'building' },
  { title: 'Mobile-first.', body: 'Full AI power from your phone. Ask questions between events, draft messages on the road, and get answers wherever you are.', icon: 'clock' },
];

function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Your day, handled.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">One assistant. Four ways it gives you your time back — and then some.</p>
        </div>
      </FadeIn>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FadeIn key={f.title} delay={i * 50} className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
              <MarketingIcon name={f.icon} size={24} />
            </div>
            <h3 className="mt-4 text-base font-bold text-brand-navy">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.body}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function DataAwareSection() {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">One assistant — your whole Suite</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            You didn&apos;t sign up<br />to do admin.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Leaders don&apos;t burn out from the work they love. They burn out from everything around it — the follow-ups, the scheduling, the five tools that each want five more minutes. LeaderAssist ties the whole Suite together with one assistant that actually does the work.
          </p>
          <p className="mt-6 border-l-2 border-brand-green pl-4 text-base font-medium text-zinc-200">
            It doesn&apos;t just answer. It gets things done.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`${APP_URL}/signup`} className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-5 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Start for free →
            </a>
            <Link href="/how-it-works" className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              See how it works
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={120} className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
          <div className="relative w-full max-w-[320px] space-y-3">
            {[
              { q: "Follow up with everyone I met Saturday.", a: "On it. 14 new contacts from Saturday — 14 follow-up emails drafted, 3 demo calls booked, and reminders set for Tuesday." },
              { q: "Who should I call first today?", a: "Alex Leader — scanned 6 days ago, no follow-up task, high intent signal from your last meeting." },
              { q: "Draft a broadcast to my whole team.", a: "Done — drafted in LeaderSend. Want me to schedule it for Tuesday morning when open rates are highest?" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="rounded-xl px-4 py-3 text-xs font-medium text-white" style={{ background: 'rgba(24,98,234,0.25)', border: '1px solid rgba(24,98,234,0.4)' }}>{item.q}</div>
                <div className="rounded-xl px-4 py-3 text-xs leading-relaxed text-zinc-300" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>{item.a}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const STEPS = [
  { step: '01', title: 'Connect your suite.', body: 'Link LeaderAssist to your LeaderHQ account. Your leads, tasks, calendar, and team data are instantly available to the AI.' },
  { step: '02', title: 'Ask anything.', body: 'Type a question or a request in plain English. Who needs follow-up? Draft a message. Summarize my week. Coach me on this rep.' },
  { step: '03', title: 'Get a real answer.', body: 'LeaderAssist responds with specific, actionable answers drawn from your real data — not generic advice pulled from the internet.' },
  { step: '04', title: 'Take action instantly.', body: 'Approve a drafted message, create a task, schedule a follow-up, or push content to LeaderStreams — all without leaving the chat.' },
];

function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Ask. Get an answer. Take action.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">No dashboards to dig through. No reports to build. Just ask.</p>
        </div>
      </FadeIn>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <FadeIn key={s.step} delay={i * 80} className="relative">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-base font-black text-brand-green">{s.step}</div>
            <h3 className="text-base font-bold text-brand-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.body}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

const INTEGRATIONS = ['LeaderLeads','LeaderCal','LeaderSend','LeaderStreams','LeaderLMS','LeaderAffiliate','LeaderTask','Google Workspace','Outlook','Postmark'];

function IntegrationsSection() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/50">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">One assistant — your whole Suite.</h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-zinc-600">LeaderAssist reads from your whole Leader Suite and acts across every tool in your stack. One login. Every app.</p>
        </FadeIn>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {INTEGRATIONS.map((name, i) => (
            <FadeIn key={name} delay={i * 40}>
              <span className="inline-block rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm">{name}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIERS = [
  {
    name: 'Free', price: '$0', period: 'forever', description: 'Your AI assistant — no card required.',
    features: ['Your AI assistant','Plain-English requests','Connect one Leader app','25 actions / month','Email support'],
    cta: 'Try LeaderAssist free', href: `${APP_URL}/signup`, featured: false,
  },
  {
    name: 'Pro', price: '$12', period: '/mo (~$9.60/mo billed yearly)', description: 'Unlimited actions across the whole Suite.',
    features: ['Everything in Free','Unlimited actions','Every Leader app connected','Drafting, booking & sending','Learns your voice & rhythm','Priority support'],
    cta: 'Start Pro free', href: `${APP_URL}/signup?plan=pro`, featured: true,
  },
  {
    name: 'Team', price: '$9', period: '/seat/mo (5-seat minimum)', description: 'For the teams that run on execution.',
    features: ['Everything in Pro for every seat','Shared team context','Admin controls & roles','Manager visibility','Team broadcasts'],
    cta: 'Start Team trial', href: `${APP_URL}/signup?plan=team`, featured: false,
  },
];

function PricingSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Simple pricing. Start free.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">Start free. Upgrade when you&apos;re ready to hand off more.</p>
        </div>
      </FadeIn>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TIERS.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 80}>
            <div className={`relative flex flex-col rounded-2xl border p-8 shadow-sm h-full ${tier.featured ? 'border-brand-green shadow-brand-green/15 shadow-lg' : 'border-zinc-200 bg-white'}`} style={tier.featured ? { background: 'color-mix(in srgb, #5CAC23 5%, #fff)' } : {}}>
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-green px-4 py-1 text-xs font-bold text-white shadow">Most Popular</span>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-zinc-500">{tier.name}</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-black text-brand-navy">{tier.price}</span>
                  <span className="mb-1 text-sm text-zinc-400">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm text-zinc-600">{tier.description}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-[10px] font-bold text-brand-green">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={tier.href} className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl px-5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.featured ? 'bg-brand-green text-white shadow-md shadow-brand-green/25 hover:brightness-110 focus-visible:outline-brand-navy' : 'border border-zinc-200 bg-white text-brand-navy hover:bg-zinc-50 focus-visible:outline-brand-navy'}`}>{tier.cta}</a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-brand-navy py-20 text-center text-white md:py-24">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">Ready to get your time back?</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Meet the assistant that runs your day.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
          LeaderAssist drafts your follow-ups, books your calls, and handles the busywork — so you can focus on the people and moments that actually matter.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={`${APP_URL}/signup`} className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-brand-green/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Try LeaderAssist free
          </a>
          <Link href="/how-it-works" className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-7 text-base font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            See how it works →
          </Link>
        </div>
        <p className="mt-5 text-sm text-zinc-400">Free to start. Part of the Leader Suite.</p>
      </FadeIn>
    </section>
  );
}
