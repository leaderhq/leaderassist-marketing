import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { TaskListMock } from './_marketing/mocks';
import { MarketingIcon, type MarketingIconName } from './_marketing/icons';

const SITE_URL = 'https://leadertask.io';
const APP_URL = 'https://task.leaderhq.io';

const TASK_PHRASES = [
  'leaders.',
  'field leaders.',
  'your whole team.',
  'top closers.',
  'fast movers.',
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
      { label: 'Executives', href: '/for-conferences' },
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
  title: 'LeaderTask — Task management built for leaders',
  description:
    'Slim team task management for the Leader Suite. Tasks born from real LeaderHQ data — never start from scratch.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'LeaderTask',
    title: 'LeaderTask — Task management built for leaders',
    description:
      'Tasks born from real LeaderHQ data. Team-wide visibility, priority tracking, and follow-up reminders so nothing slips.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeaderTask — Task management built for leaders',
    description:
      'Tasks born from real LeaderHQ data. Team-wide visibility, priority tracking, and follow-up reminders so nothing slips.',
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
      <SiteNav
        productSuffix="Task"
        links={NAV_LINKS}
        ctaLabel="Get Started Free"
        ctaHref={`${APP_URL}/signup`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        <Hero />
        <TrustBand />
        <FeaturesGrid />
        <DataBornSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <PricingSection />
        <FinalCta />
      </main>
      <SiteFooter
        productSuffix="Task"
        columns={FOOTER_COLUMNS}
      />
    </div>
  );
}

/* ----------------------------------------------------------------- Hero -- */

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
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 md:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-12">
        <FadeIn>
          <TypewriterHeadline
            staticPrefix="Tasks built for"
            phrases={TASK_PHRASES}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            Task management that starts with your real LeaderHQ data — never a
            blank page. Team-wide visibility, priority tracking, and follow-up
            reminders so nothing slips between check-ins.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:w-auto"
            >
              Get Started Free
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              See How It Works →
            </Link>
          </div>
          <p className="mt-5 text-sm text-zinc-500">
            Free to start. No credit card required.{' '}
            <strong className="font-semibold text-zinc-700">
              Works with your entire Leader Suite.
            </strong>
          </p>
        </FadeIn>
        <FadeIn delay={120} className="flex justify-center lg:justify-end">
          <TaskListMock />
        </FadeIn>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Trust Band -- */

const TRUST_ORGS = ['Summit', 'Northwind', 'Apex', 'Vertex', 'Beacon'];

function TrustBand() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/60">
      <div className="mx-auto max-w-5xl px-4 py-7 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Trusted by
          </p>
          {TRUST_ORGS.map((org) => (
            <span key={org} className="text-sm font-bold tracking-wide text-zinc-400">
              {org}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Features -- */

interface Feature {
  title: string;
  body: string;
  icon: MarketingIconName;
}

const FEATURES: Feature[] = [
  {
    title: 'Data-born tasks.',
    body: 'Tasks created automatically from your real LeaderHQ data — leads, meetings, and follow-ups. Never stare at a blank task board again.',
    icon: 'target',
  },
  {
    title: 'Team-wide visibility.',
    body: 'See every task across your entire downline. Leaders, reps, and coaches all in one place — so nothing slips between check-ins.',
    icon: 'users',
  },
  {
    title: 'Priority & status.',
    body: 'Mark tasks as low, medium, or high priority. Track to-do, in progress, and done across the whole team in a single list view.',
    icon: 'bar-chart',
  },
  {
    title: 'Subtasks.',
    body: 'Break complex actions into smaller steps. Subtask progress rolls up to the parent so leaders see at a glance what\'s complete.',
    icon: 'clipboard',
  },
  {
    title: 'Assignee tracking.',
    body: 'Assign any task to a team member and track ownership clearly. No more "I thought you were doing that" moments.',
    icon: 'check-circle',
  },
  {
    title: 'Due dates & reminders.',
    body: 'Set due dates and get Postmark email reminders automatically. Critical follow-ups never fall through the cracks.',
    icon: 'clock',
  },
  {
    title: 'Comments & context.',
    body: 'Thread conversation right on the task — notes, decisions, and updates stay with the work, not buried in Slack.',
    icon: 'bell',
  },
  {
    title: 'Workspace & lists.',
    body: 'Organize by workspace (your team) and list (campaigns, events, pipelines). Structure that matches how field teams actually operate.',
    icon: 'building',
  },
  {
    title: 'Leader Suite SSO.',
    body: 'One login. If you\'re signed into LeaderLeads or LeaderCal, you\'re already in. No new password, no extra friction.',
    icon: 'link',
  },
  {
    title: 'Ingest API.',
    body: 'POST tasks from any other tool via your personal ingest key. Webhooks, Zapier, or raw API — tasks flow in from anywhere.',
    icon: 'share',
  },
  {
    title: 'Mobile-first design.',
    body: 'Built for the road. Full task management from your phone — no feature compromise on a small screen.',
    icon: 'calendar',
  },
  {
    title: 'Onboarding tour.',
    body: 'First-time setup walks you through every key feature in under two minutes. Powered by driver.js — smooth and in-brand.',
    icon: 'trophy',
  },
];

function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Everything a leader needs to run their team.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            Built for the pace of field leadership — not the pace of a nine-to-five.
          </p>
        </div>
      </FadeIn>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FadeIn
            key={f.title}
            delay={i * 50}
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
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

/* ------------------------------------------------- Data-Born Tasks Section -- */

function DataBornSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: '#0d1b2e' }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            LeaderTask + LeaderLeads
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Tasks born from
            <br />
            your real data.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            When a lead comes in through your LeaderLeads card, a follow-up
            task appears automatically — already titled, already assigned,
            already due. No copy-paste. No starting from scratch.
          </p>
          <p className="mt-6 border-l-2 border-brand-green pl-4 text-base font-medium text-zinc-200">
            The only task tool wired directly into your field-leader workflow.
            Every connection becomes an action.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-5 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start for free →
            </a>
            <Link
              href="https://leaderleads.io"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get your LeaderLeads card
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={120} className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
          <div className="relative w-full max-w-[320px]">
            <div
              className="relative rounded-2xl p-5 shadow-xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                LeaderLeads Card Scan
              </p>
              <p className="mt-2 text-base font-bold text-white">Alex Leader</p>
              <p className="text-xs text-zinc-400">VP of Sales · Summit Team</p>
              <div className="mt-4 flex gap-2">
                <div className="flex-1 rounded-lg bg-white/10 py-2 text-center text-xs font-semibold text-white">
                  Call
                </div>
                <div className="flex-1 rounded-lg bg-white/10 py-2 text-center text-xs font-semibold text-white">
                  Email
                </div>
                <div
                  className="flex-1 rounded-lg py-2 text-center text-xs font-semibold text-white"
                  style={{ background: '#5cb85c' }}
                >
                  Save
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-3">
              <div className="flex flex-col items-center gap-1 text-brand-green">
                <div className="h-8 w-px bg-brand-green/40" />
                <span className="text-lg leading-none">↓</span>
              </div>
            </div>

            <div
              className="rounded-2xl p-5 shadow-xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                Task Created Automatically
              </p>
              <p className="mt-2 text-sm font-bold text-white">Follow up with Alex Leader</p>
              <p className="mt-1 text-xs text-zinc-400">Due tomorrow · High priority · Assigned: you</p>
              <div className="mt-3 flex items-center gap-2">
                <div
                  className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{ background: 'rgba(92,184,92,0.18)', color: '#5cb85c' }}
                >
                  from LeaderLeads
                </div>
                <div
                  className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#a1a1aa' }}
                >
                  in progress
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- How It Works -- */

const STEPS = [
  {
    step: '01',
    title: 'Connect your data.',
    body: 'Link LeaderTask to your LeaderLeads and LeaderHQ account. Your leads, contacts, and activity are instantly available.',
  },
  {
    step: '02',
    title: 'Tasks appear automatically.',
    body: 'Every new lead, meeting request, or follow-up creates a task in your board — pre-filled with context from the real event.',
  },
  {
    step: '03',
    title: 'Assign & track.',
    body: 'Assign tasks to team members, set due dates, and add subtasks. Progress is visible across the whole team in real time.',
  },
  {
    step: '04',
    title: 'Close the loop.',
    body: 'Mark tasks done and watch your pipeline clear. Reminders fire automatically so nothing gets dropped between check-ins.',
  },
];

function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            From data to done in four steps.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            No manual entry. No guesswork. Just tasks that match your real workflow.
          </p>
        </div>
      </FadeIn>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <FadeIn key={s.step} delay={i * 80} className="relative">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-base font-black text-brand-green">
              {s.step}
            </div>
            <h3 className="text-base font-bold text-brand-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.body}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Integrations -- */

const INTEGRATIONS = [
  'LeaderLeads', 'LeaderCal', 'LeaderSend', 'Google Workspace',
  'Outlook', 'Slack', 'Zapier', 'Postmark', 'Salesforce', 'HubSpot',
];

function IntegrationsSection() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/50">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            Works with the tools you already use.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-zinc-600">
            Native Leader Suite integration plus the apps your team already lives in.
          </p>
        </FadeIn>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {INTEGRATIONS.map((name, i) => (
            <FadeIn key={name} delay={i * 40}>
              <span className="inline-block rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm">
                {name}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Pricing -- */

const TIERS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For solo leaders getting started.',
    features: [
      'Up to 50 tasks per month',
      '1 workspace',
      'Priority & status tracking',
      'Subtasks & comments',
      'LeaderLeads integration',
    ],
    cta: 'Start for free',
    href: `${APP_URL}/signup`,
    featured: false,
  },
  {
    name: 'Team',
    price: '$12',
    period: 'per user / mo',
    description: 'For growing field-leader teams.',
    features: [
      'Unlimited tasks',
      'Unlimited workspaces & lists',
      'Full team visibility',
      'Due-date email reminders',
      'Ingest API + webhooks',
      'All Leader Suite integrations',
    ],
    cta: 'Start Team trial',
    href: `${APP_URL}/signup?plan=team`,
    featured: true,
  },
  {
    name: 'Executive',
    price: '$29',
    period: 'per user / mo',
    description: 'For organizations that run on data.',
    features: [
      'Everything in Team',
      'Priority support',
      'Audit logs',
      'Custom ingest keys per integration',
      'SSO enforcement',
      'Dedicated onboarding',
    ],
    cta: 'Contact sales',
    href: '/contact',
    featured: false,
  },
];

function PricingSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Straightforward pricing.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            Start free. Upgrade only when your team is ready.
          </p>
        </div>
      </FadeIn>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TIERS.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 80}>
            <div
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm h-full ${
                tier.featured
                  ? 'border-brand-green shadow-brand-green/15 shadow-lg'
                  : 'border-zinc-200 bg-white'
              }`}
              style={tier.featured ? { background: 'color-mix(in srgb, #5cb85c 5%, #fff)' } : {}}
            >
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-green px-4 py-1 text-xs font-bold text-white shadow">
                    Most Popular
                  </span>
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
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-[10px] font-bold text-brand-green">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl px-5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-brand-green text-white shadow-md shadow-brand-green/25 hover:brightness-110 focus-visible:outline-brand-navy'
                    : 'border border-zinc-200 bg-white text-brand-navy hover:bg-zinc-50 focus-visible:outline-brand-navy'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Final CTA -- */

function FinalCta() {
  return (
    <section className="bg-brand-navy py-20 text-center text-white md:py-24">
      <FadeIn>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Stop dropping follow-ups.
          <br />
          Start closing the loop.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
          LeaderTask keeps your team on track — tasks born from real data,
          visible to everyone, and never forgotten.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-brand-green/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get started free
          </a>
          <Link
            href="/how-it-works"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-7 text-base font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            See how it works
          </Link>
        </div>
        <p className="mt-5 text-sm text-zinc-400">
          Free to start. Part of the Leader Suite.
        </p>
      </FadeIn>
    </section>
  );
}
