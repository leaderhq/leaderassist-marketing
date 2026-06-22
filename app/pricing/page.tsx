import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://leads.leaderhq.io';
const GREEN_AA = '#5cb85c';

export const metadata: Metadata = {
  title: 'Pricing — LeaderLeads',
  description:
    'Simple pricing, free where it counts. Your card and sharing are free forever — pay only for the follow-up features that close more deals.',
  alternates: { canonical: '/pricing' },
};

const LINK_CLASS = 'text-brand-green font-semibold hover:underline';

interface Plan {
  name: string;
  price: string;
  cadence: string;
  desc: string;
  features: React.ReactNode[];
  highlighted?: boolean;
  cta: string;
  ctaStyle: 'outline' | 'green' | 'dark';
}

const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    desc: 'Everything you need to show up professionally at any event.',
    features: [
      'Your card + sharing',
      <>
        <Link href="/how-it-works" className={LINK_CLASS}>
          Event Mode
        </Link>{' '}
        + full-screen QR
      </>,
      'Add to Apple/Google Wallet',
      'View contact counts',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'outline',
  },
  {
    name: 'Pro',
    price: '$8',
    cadence: '/mo · ~$6.40/mo billed yearly',
    desc: 'For serious sales pros who follow up on every single conversation.',
    features: [
      'Everything in Free',
      'Lead Inbox + instant email alerts',
      <>
        <Link href="/memory-moment" className={LINK_CLASS}>
          Memory Moment
        </Link>{' '}
        + shared photo email
      </>,
      'Remove LeaderLeads footer',
    ],
    highlighted: true,
    cta: 'Start Pro',
    ctaStyle: 'green',
  },
  {
    name: 'Team',
    price: '$5',
    cadence: '/seat/mo · 5-seat minimum',
    desc: 'For downlines, field teams, and organizations at scale.',
    features: [
      'Everything in Pro for every seat',
      'Assign seats to your downline',
      <>
        Flat{' '}
        <Link href="/for-teams" className={LINK_CLASS}>
          team roster
        </Link>{' '}
        view
      </>,
      'Team contact visibility',
    ],
    cta: 'Start a team',
    ctaStyle: 'dark',
  },
];

const FAQS = [
  {
    q: 'Is the free plan actually free forever?',
    a: 'Yes. No credit card required. No trial that expires. Your card, sharing, Event Mode, and wallet integration are free permanently. We built it this way because we believe every sales professional deserves a professional card regardless of budget — and the free plan is a real, functional tool, not a stripped preview.',
  },
  {
    q: 'What exactly is included in Memory Moment?',
    a: 'Memory Moment is a Pro feature. It lets you take a photo at the moment of connection with someone. LeaderLeads stamps it with the date, time, and location, then emails it to both you and your contact within seconds. No editing, no uploading, no extra steps from either party. It just happens in the background and shows up in both inboxes.',
  },
  {
    q: 'How does Team plan billing work?',
    a: 'The Team plan is $5 per seat per month with a 5-seat minimum ($25/month minimum). You can add or remove seats at any time — billing adjusts at the start of your next cycle. There are no per-scan fees, no usage-based surprises, and no hidden charges.',
  },
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes, at any time. Upgrade from Free to Pro instantly. Start a Team plan by purchasing seats and assigning them to team members. Downgrade or cancel at the end of your billing period. No lock-in, no penalty.',
  },
  {
    q: 'Do you offer discounts for large organizations?',
    a: 'For teams larger than 50 seats — summer sales organizations, large MLM downlines, enterprise exhibitor teams — reach out at support@leaderhq.io with "Team Plan" in the subject line. We offer custom pricing for organizations at scale.',
  },
  {
    q: 'What happens when someone on my team leaves?',
    a: "You can reassign their seat to a new team member instantly. The card updates to the new person's information. No reprinting, no wasted budget, no gap in coverage during the transition.",
  },
];

export default function PricingPage() {
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
        <PlansGrid />
        <Faqs />
        <CtaBand />
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
    <section
      className="text-white"
      style={{ background: '#0d1b2e' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Simple pricing.
            <br />
            Free where it counts.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Your card and sharing are free forever. Pay only for the follow-up
            features that close more deals.
          </p>
          <span className="mt-8 inline-block rounded-full border border-brand-green/40 bg-brand-green/15 px-4 py-2 text-sm font-bold text-brand-green">
            Save 20% with annual billing
          </span>
        </FadeIn>
      </div>
    </section>
  );
}

function PlansGrid() {
  return (
    <section
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #5cb85c 6%, #fff)' }}
    >
      <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-stretch gap-5 sm:grid-cols-3">
          {PLANS.map((plan, i) => (
            <FadeIn
              key={plan.name}
              delay={i * 80}
              className={`flex flex-col rounded-2xl border bg-white p-6 ${
                plan.highlighted
                  ? 'border-brand-green/40 shadow-md ring-1 ring-brand-green/20'
                  : 'border-zinc-100 shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <span
                  className="self-start rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                  style={{ backgroundColor: GREEN_AA }}
                >
                  Best value
                </span>
              )}
              <h3 className="mt-3 text-lg font-bold text-brand-navy">
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-brand-navy">
                  {plan.price}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">{plan.cadence}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {plan.desc}
              </p>
              <hr className="my-5 border-zinc-100" />
              <ul className="flex-1 space-y-2.5 text-sm text-zinc-600">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span style={{ color: GREEN_AA }} aria-hidden>
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${APP_URL}/login`}
                className={`mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.ctaStyle === 'green'
                    ? 'bg-brand-green text-white hover:brightness-110 focus-visible:outline-brand-navy'
                    : plan.ctaStyle === 'dark'
                      ? 'bg-brand-navy text-white hover:brightness-125 focus-visible:outline-brand-green'
                      : 'border border-brand-navy/20 bg-white text-brand-navy hover:bg-zinc-50 focus-visible:outline-brand-green'
                }`}
              >
                {plan.cta}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section className="mx-auto max-w-[720px] px-4 py-20 sm:px-6 sm:py-24">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
          Pricing questions, answered.
        </h2>
      </FadeIn>
      <dl className="mt-12 space-y-6">
        {FAQS.map((faq, i) => (
          <FadeIn
            key={faq.q}
            delay={i * 50}
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
          >
            <dt className="text-base font-bold text-brand-navy">{faq.q}</dt>
            <dd className="mt-2 leading-relaxed text-zinc-600">{faq.a}</dd>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
}

function CtaBand() {
  return (
    <section style={{ background: '#0d1b2e' }}>
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Ready to stop losing leads?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            No credit card. No time limit. Just a card that works. Your next
            event is the proof of concept.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/login`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Your Free Card
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See How It Works →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
