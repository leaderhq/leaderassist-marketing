import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { CalendarBookingMock } from './_marketing/mocks';
import { MarketingIcon, type MarketingIconName } from './_marketing/icons';

const SITE_URL = 'https://leadercal.io';

// Marketing lives on leadercal.io; the app (auth, dashboard, calendar) lives
// on cal.leaderhq.io. All CTAs that take a user INTO the app must be absolute,
// or clicking "Log in" from the marketing origin 404s.
const APP_URL = 'https://cal.leaderhq.io';

const CAL_PHRASES = [
  'leaders.',
  'field leaders.',
  'fast movers.',
  'top closers.',
  'your whole team.',
] as const;

const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Smart Booking', href: '/for-teams' },
  { label: 'Solutions', href: '#' },
  { label: 'Blog', href: '/blog' },
];

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Smart Booking', href: '/for-teams' },
      { label: 'Event Types', href: '/how-it-works#event-types' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'System Status', href: 'https://leaderhq.io/status', external: true },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Sales Teams', href: '/for-teams' },
      { label: 'Executives & Board', href: '/for-conferences' },
      { label: 'Coaches & Mentors', href: '/for-conferences' },
      { label: 'Conferences & Events', href: '/for-conferences' },
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
  title: 'LeaderCal — Scheduling built for leaders',
  description:
    'Leadership booking profiles, team scheduling, custom event types, and seamless calendar sync — scheduling that works as hard as you do. No more back-and-forth.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'LeaderCal',
    title: 'LeaderCal — Scheduling built for leaders',
    description:
      'Leadership booking profiles, team scheduling, custom event types, and smart availability intelligence. Book an appointment from your card.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeaderCal — Scheduling built for leaders',
    description:
      'Leadership booking profiles, team scheduling, and smart availability — so your calendar works as hard as you do.',
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
      <SiteNav
        productSuffix="Cal"
        links={NAV_LINKS}
        ctaLabel="Get Started Free"
        ctaHref="/signup"
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        <Hero />
        <TrustBand />
        <FeaturesGrid />
        <BookFromCardSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <PricingSection />
        <FinalCta />
      </main>
      <SiteFooter
        productSuffix="Cal"
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
            staticPrefix="Scheduling built for"
            phrases={CAL_PHRASES}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            Leadership booking profiles that put your calendar in every leader's
            hands. No more back-and-forth. No more chasing availability.
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
              Works with Google &amp; Outlook.
            </strong>
          </p>
        </FadeIn>
        <FadeIn delay={120} className="flex justify-center lg:justify-end">
          <CalendarBookingMock />
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
    title: 'Leadership booking profiles.',
    body: 'Your own scheduling page — branded, shareable, and always up to date. Link it from your LeaderLeads card and let contacts book in one tap.',
    icon: 'calendar',
  },
  {
    title: 'Team scheduling.',
    body: 'Manage availability across your entire downline. Leaders, reps, and coaches all in one place — so no slot ever double-books.',
    icon: 'users',
  },
  {
    title: 'Custom event types.',
    body: 'Executive 1:1s, strategy sessions, board prep — define every meeting type once, with duration, buffer time, and instructions built in.',
    icon: 'clipboard',
  },
  {
    title: 'Embeddable widget.',
    body: "Drop your booking calendar onto any site or landing page. A single snippet — no developer needed.",
    icon: 'link',
  },
  {
    title: 'Two-way calendar sync.',
    body: 'Connects to Google Calendar and Outlook. Changes anywhere reflect everywhere — automatically, in real time.',
    icon: 'check-circle',
  },
  {
    title: 'Auto video links.',
    body: 'Zoom, Google Meet, and Teams links generated instantly with every booking. Nobody searches for a join link ever again.',
    icon: 'video',
  },
  {
    title: 'CRM hooks.',
    body: 'Push every booking straight to Salesforce or HubSpot. Contacts, notes, and meetings stay in sync without lifting a finger.',
    icon: 'building',
  },
  {
    title: 'Slack & email notifications.',
    body: 'You and your team get instant alerts — new bookings, cancellations, and reminders — wherever you live.',
    icon: 'bell',
  },
  {
    title: 'Availability intelligence.',
    body: "LeaderCal learns your patterns and protects focus time automatically. No more accidentally scheduling yourself into back-to-backs.",
    icon: 'target',
  },
  {
    title: 'Booking analytics.',
    body: "See which meeting types convert, who's booking you, and where your time actually goes. Data that makes you a better leader.",
    icon: 'bar-chart',
  },
  {
    title: 'VIP priority queue.',
    body: 'Tag key contacts as VIPs and they always see open slots — even when everyone else is blocked out.',
    icon: 'trophy',
  },
  {
    title: 'Buffer & focus time.',
    body: 'Auto-enforce travel time between meetings and block focus hours you never give away. Your calendar finally works for you.',
    icon: 'clock',
  },
];

function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Everything a leader needs to run their calendar.
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

/* ------------------------------------------------- Book From Card Section -- */

function BookFromCardSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: '#0d1b2e' }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            LeaderCal + LeaderLeads
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Book an appointment
            <br />
            from your card.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            When someone scans your LeaderLeads digital card, your booking
            calendar is right there. One tap — they pick a time, it lands on
            your calendar, and you both get a confirmation. No back-and-forth.
            No missed follow-ups.
          </p>
          <p className="mt-6 border-l-2 border-brand-green pl-4 text-base font-medium text-zinc-200">
            The only scheduling platform that lives inside your digital card.
            Every connection becomes a meeting opportunity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-5 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Set up your calendar →
            </a>
            <Link
              href="https://leaderleads.io"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get your LeaderLeads card
            </Link>
          </div>
        </FadeIn>

        {/* Visual — card + calendar connection graphic */}
        <FadeIn delay={120} className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
          <div className="relative w-full max-w-[320px]">
            {/* Card stub */}
            <div
              className="relative rounded-2xl p-5 shadow-xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                LeaderLeads Card
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
                  Book →
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center py-3">
              <div className="flex flex-col items-center gap-1 text-brand-green">
                <div className="h-8 w-px bg-brand-green/40" />
                <span className="text-lg leading-none">↓</span>
              </div>
            </div>

            {/* Calendar stub */}
            <div
              className="rounded-2xl p-5 shadow-xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                LeaderCal Booking
              </p>
              <p className="mt-2 text-sm font-bold text-white">Executive 1:1 — 30 min</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {['9:00 AM', '10:30 AM', '2:00 PM'].map((t, i) => (
                  <div
                    key={t}
                    className="rounded-lg py-1.5 text-center text-[10px] font-semibold"
                    style={i === 0 ? { background: '#5cb85c', color: '#fff' } : { background: 'rgba(255,255,255,0.08)', color: '#d4d4d8' }}
                  >
                    {t}
                  </div>
                ))}
              </div>
              <div
                className="mt-3 w-full rounded-xl py-2.5 text-center text-xs font-bold text-white"
                style={{ background: '#5cb85c' }}
              >
                Confirm Booking
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- How It Works -- */

interface Step {
  number: string;
  title: string;
  body: string;
  icon: MarketingIconName;
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Connect your calendar.',
    body: 'Link Google Calendar or Outlook in one click. LeaderCal reads your real availability instantly.',
    icon: 'calendar',
  },
  {
    number: '02',
    title: 'Set availability & event types.',
    body: 'Define your meeting types, working hours, buffer times, and focus blocks — once. Never again.',
    icon: 'clock',
  },
  {
    number: '03',
    title: 'Share your booking link.',
    body: 'Add it to your LeaderLeads card, email signature, or anywhere else. One link, always current.',
    icon: 'share',
  },
  {
    number: '04',
    title: 'Meetings book themselves.',
    body: 'Contacts pick a slot, fill in details, and confirm — a calendar invite lands on both sides. Done.',
    icon: 'check-circle',
  },
];

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #0d1b2e 5%, #fff)' }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Up and running in four steps.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
              Connect once. Share everywhere. Let the calendar handle the rest.
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <FadeIn
              key={step.number}
              delay={i * 80}
              className="relative rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
            >
              <p className="text-4xl font-black tracking-tighter text-brand-navy/10">
                {step.number}
              </p>
              <div className="mt-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <MarketingIcon name={step.icon} size={22} />
              </div>
              <h3 className="mt-4 text-base font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Integrations -- */

const INTEGRATIONS = [
  'Google Calendar',
  'Outlook',
  'Zoom',
  'Google Meet',
  'Microsoft Teams',
  'Slack',
  'Salesforce',
  'HubSpot',
  'Notion',
  'Postmark',
];

function IntegrationsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Works with everything you already use.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            Plug LeaderCal into your existing stack. No rip-and-replace.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={80}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {INTEGRATIONS.map((name) => (
            <span
              key={name}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

/* ------------------------------------------------------------ Pricing -- */

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  features: string[];
}

const TIERS: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'All the basics to get your booking calendar live.',
    cta: 'Get Started Free',
    ctaHref: `${APP_URL}/signup`,
    features: [
      'One booking page',
      'Unlimited appointments',
      'Google Calendar sync',
      'Custom event types',
      'Email confirmations',
    ],
  },
  {
    name: 'Team',
    price: '$12',
    period: '/user/mo',
    description: 'The full scheduling suite for growing teams.',
    cta: 'Start Free Trial',
    ctaHref: `${APP_URL}/signup?plan=team`,
    featured: true,
    features: [
      'Everything in Free',
      'Team scheduling dashboard',
      'Outlook & multi-calendar sync',
      'Video link auto-generation',
      'CRM integrations',
      'Slack notifications',
      'Booking analytics',
      'Priority support',
    ],
  },
  {
    name: 'Executive',
    price: '$29',
    period: '/user/mo',
    description: 'Advanced intelligence for leadership-level scheduling.',
    cta: 'Start Free Trial',
    ctaHref: `${APP_URL}/signup?plan=executive`,
    features: [
      'Everything in Team',
      'Availability intelligence',
      'VIP priority queue',
      'Buffer & focus-time rules',
      'LeaderLeads card integration',
      'Custom branding',
      'Dedicated onboarding',
      'SLA support',
    ],
  },
];

function PricingSection() {
  return (
    <section
      id="pricing"
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #0d1b2e 4%, #fff)' }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Straightforward pricing.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
              Start free. Scale with your team. No surprises.
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
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-white shadow">
                  Most popular
                </span>
              )}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500">
                  {tier.name}
                </h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-black tracking-tight text-brand-navy">
                    {tier.price}
                  </span>
                  <span className="mb-1 text-sm text-zinc-500">{tier.period}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-600">{tier.description}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <span className="mt-0.5 shrink-0 text-brand-green">
                      <MarketingIcon name="check-circle" size={16} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={tier.ctaHref}
                className={`mt-8 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-brand-green text-white shadow-md shadow-brand-green/25 hover:brightness-110 focus-visible:outline-brand-green'
                    : 'border border-brand-navy/20 bg-brand-navy/[0.04] text-brand-navy hover:bg-brand-navy/10 focus-visible:outline-brand-navy'
                }`}
              >
                {tier.cta}
              </a>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={120}>
          <p className="mt-8 text-center text-sm text-zinc-500">
            All plans include a 14-day free trial.{' '}
            <Link href="/pricing" className="font-medium text-brand-green hover:underline">
              Compare full feature list →
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Final CTA -- */

function FinalCta() {
  return (
    <section style={{ background: '#0d1b2e' }}>
      <div className="mx-auto max-w-6xl px-4 py-20 text-center md:px-6 md:py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Ready to lead your calendar?
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop chasing calendars.
            <br />
            Start leading.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            Set up your booking page in minutes. Put it on your LeaderLeads
            card. Watch meetings schedule themselves.
          </p>
          <a
            href={`${APP_URL}/signup`}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get Started Free
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
