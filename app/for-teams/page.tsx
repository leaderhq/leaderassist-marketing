import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon, type MarketingIconName } from '../_marketing/icons';


const FEATURED_POSTS: {slug: string; title: string; excerpt: string; category: string}[] = [];
const APP_URL = 'https://leads.leaderhq.io';
const GREEN_AA = '#5cb85c';

export const metadata: Metadata = {
  title: 'For Teams — LeaderLeads',
  description:
    'One card for every rep and one real-time view of every contact your organization captures. The Team plan equips MLM downlines, D2D crews, and trade-show teams for $5/seat/month.',
  alternates: { canonical: '/for-teams' },
};

export default function ForTeamsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl="https://task.leaderhq.io" />
      <SiteNav
        productSuffix="Leads"
        links={[{ label: "How It Works", href: "/how-it-works" }, { label: "Memory Moment", href: "/memory-moment" }, { label: "Solutions", href: "#" }, { label: "Blog", href: "/blog" }]}
        ctaLabel="Get Your Free Card"
        ctaHref="/signup"
        loginHref="https://leads.leaderhq.io/login"
      />
      <main className="flex-1">
        <Hero />
        <Includes />
        <Pricing />
        <BlogSection />
        <FinalCta />
      </main>
      <SiteFooter
        productSuffix="Leads"
        columns={[{"heading":"Product","links":[{"label":"How It Works","href":"/how-it-works"},{"label":"Memory Moment","href":"/memory-moment"},{"label":"Event Mode","href":"/how-it-works#event-mode"},{"label":"Pricing","href":"/pricing"},{"label":"System Status","href":"https://leaderhq.io/status"}]},{"heading":"Solutions","links":[{"label":"Network Marketing","href":"/for-network-marketing"},{"label":"Conferences & Events","href":"/for-conferences"},{"label":"Summer Sales","href":"/for-summer-sales"},{"label":"Sales Teams","href":"/for-teams"},{"label":"Blog & Resources","href":"/blog"}]},{"heading":"Company","links":[{"label":"About LeaderHQ","href":"/about"},{"label":"Contact","href":"/contact"},{"label":"Privacy Policy","href":"/privacy"},{"label":"Terms of Service","href":"/terms"},{"label":"Security & GDPR","href":"/security"}]}]}
      />
    </div>
  );
}

/* ----------------------------------------------------------------- Hero -- */

function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: '#0d1b2e' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
            For Sales Teams
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            One card. Every rep.
            <br />
            One view of everything.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            The Team plan gives every member of your organization a professional
            LeaderLeads card — and gives leadership real-time visibility into
            every contact they make in the field.
          </p>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-md shadow-black/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start your team — $5/seat/mo
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- What's in it -- */

const TEAM_FEATURES = [
  'Everything in Pro for every seat in your organization',
  'Assign cards to every team member or downline rep instantly',
  'Flat team roster — see every contact captured across the organization',
  'Memory Moment for every rep at every event',
  'Lead inbox and instant email alerts for each team member individually',
  'Consistent, professional card design across the entire team',
  'Onboarding in 60 seconds per rep — no training, no tech support required',
  'Contact count visibility by rep for performance coaching',
];

const TEAM_FITS: { icon: MarketingIconName; title: string; body: string; proNote?: string }[] = [
  {
    icon: 'handshake',
    title: 'MLM / Direct Sales Organizations',
    body: 'Put your whole downline on LeaderLeads. Every rep shows up to every event fully equipped with Memory Moment. Every contact rolls into your team view automatically.',
    proNote: 'Memory Moment',
  },
  {
    icon: 'home',
    title: 'Summer Sales & D2D Companies',
    body: '200 reps on the doors. Real-time contact data without self-reporting. Manager visibility into field activity without a reporting system or weekly call.',
  },
  {
    icon: 'tent',
    title: 'Conference & Trade Show Teams',
    body: 'Every rep at your booth has the same card, same Event Mode, same Memory Moment capability — consistent and professional from every single interaction at the show. Individual rep QR codes or a shared company card, both are available. Memory Moment stamps exactly which rep captured each lead, when, and where. You leave the show knowing who owns which follow-up. That context doesn\'t exist anywhere else.',
    proNote: 'Memory Moment',
  },
];

function Includes() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            What the Team plan includes
          </h2>
          <ul className="mt-6 space-y-3 text-base text-zinc-700">
            {TEAM_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <span
                  className="mt-0.5 shrink-0 text-base font-bold"
                  style={{ color: GREEN_AA }}
                  aria-hidden
                >
                  ✓
                </span>
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={120}>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Built for these teams
          </h2>
          <div className="mt-6 space-y-4">
            {TEAM_FITS.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <MarketingIcon name={t.icon} size={24} />
                </div>
                <h3 className="mt-3 text-base font-bold text-brand-navy">
                  {t.title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{t.body}</p>
                {t.proNote && (
                  <p className="mt-2 text-xs text-zinc-400">
                    <span className="mr-1 inline-flex items-center rounded-full bg-brand-navy px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Pro
                    </span>
                    {t.proNote} is a Pro plan feature.
                  </p>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Pricing -- */

interface Plan {
  name: string;
  price: string;
  cadence: string;
  note?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    features: [
      'Your card + sharing',
      'Event Mode + full-screen QR',
      'Add to wallet',
      'View counts',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$8',
    cadence: '/mo',
    note: '~$6.40/mo billed yearly',
    features: [
      'Everything in Free',
      'Lead inbox + instant email alerts',
      'Memory Moment + shared email',
      'Remove the LeaderLeads footer',
    ],
    cta: 'Start Pro',
  },
  {
    name: 'Team',
    price: '$5',
    cadence: '/seat/mo',
    note: '5-seat minimum',
    features: [
      'Everything in Pro for every seat',
      'Assign seats to your downline',
      'Flat team roster',
    ],
    highlighted: true,
    cta: 'Start a team',
  },
];

function Pricing() {
  return (
    <section
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #5cb85c 6%, #fff)' }}
    >
      <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Team pricing that scales.
          </h2>
        </FadeIn>
        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-3">
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
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-brand-navy">{plan.name}</h3>
                {plan.highlighted && (
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                    style={{ backgroundColor: GREEN_AA }}
                  >
                    Best for teams
                  </span>
                )}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-brand-navy">
                  {plan.price}
                </span>
                <span className="text-sm text-zinc-400">{plan.cadence}</span>
              </div>
              {plan.note && (
                <p className="mt-1 text-xs text-zinc-500">{plan.note}</p>
              )}
              <ul className="mt-5 flex-1 space-y-2.5 text-sm text-zinc-600">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
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
                  plan.highlighted
                    ? 'bg-brand-green text-white hover:brightness-110 focus-visible:outline-brand-navy'
                    : 'bg-brand-navy text-white hover:brightness-125 focus-visible:outline-brand-green'
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

/* ------------------------------------------------------------ Final CTA -- */

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

function FinalCta() {
  return (
    <section style={{ background: '#0d1b2e' }}>
      <div className="mx-auto max-w-[1100px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Your rep will have a professional card with Memory Moment before tomorrow morning.
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your team&apos;s first card is waiting.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            Assign your first seat tonight.
          </p>
          <a
            href={`${APP_URL}/login`}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start a team
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
