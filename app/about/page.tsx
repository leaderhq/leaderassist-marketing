import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon } from '@/app/_marketing/icons';

export const metadata: Metadata = {
  title: 'About — LeaderLeads',
  description:
    'LeaderLeads is part of the Leader Suite — built by the people who lived the problem of losing leads at every event, expo, and door.',
  alternates: { canonical: '/about' },
};

const VALUES = [
  {
    icon: 'handshake',
    title: 'Relationships over records',
    body: "A contact list is infrastructure. A relationship is the point. Everything we build is designed to make real human connection more durable and more likely — not to replace it with data.",
  },
  {
    icon: 'bolt',
    title: 'Simple by default',
    body: "If it requires training, it won't get used. Every feature in LeaderLeads has to work for a rep who's tired, moving fast, and has 15 seconds between conversations at a full expo floor.",
  },
  {
    icon: 'gift',
    title: 'Free where it matters',
    body: 'The card is free. Sharing is free. We believe every sales professional deserves a professional tool regardless of budget — and we prove it by making the core experience genuinely free, not a crippled preview.',
  },
] as const;

export default function AboutPage() {
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
        {/* Hero */}
        <section
          className="text-white"
          style={{ background: '#0d1b2e' }}
        >
          <div className="mx-auto max-w-[820px] px-4 py-24 sm:px-6">
            <FadeIn>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                We built this because
                <br />
                we lived the problem.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                LeaderLeads is part of the Leader suite of software products — a
                set of tools built for the people who lead, sell, and build in
                the real world. Not the conference room. The conference floor,
                the expo hall, while waiting in line to pay for groceries and at
                the door.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              The story behind the product
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-600">
              Network marketing, direct sales, and event-based business
              development share one problem: the most valuable moment — the
              introduction — is almost always the worst-captured moment. You
              work hard to get to the expo. You work hard at the expo. And then
              you go home Sunday night and try to reconstruct 40 conversations
              from a pocket full of cards and a phone full of first names.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderLeads was built to close the gap between the conversation
              and the follow-up. Not with a complicated CRM that requires
              training and setup. Not with expensive NFC hardware that only
              works in specific conditions. With a free card that does the work
              you don&apos;t have time to do — and one exclusive feature, Memory
              Moment, that changes the follow-up entirely.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              We&apos;re part of the Leader Suite of software products and tools
              for leaders. LeaderLeads is where the connection happens. The rest
              of the suite is built around what happens next.
            </p>
            <div className="mt-10">
              <a
                href="https://leaderhq.io"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Visit Your Sales Command Center — LeaderHQ →
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Values */}
        <section
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #0d1b2e 4%, #fff)' }}
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

        {/* Suite CTA */}
        <section className="mx-auto max-w-[560px] px-4 py-20 text-center sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Part of the Leader Suite
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderLeads is one product in a growing suite of tools for
              leaders, sales professionals, and the organizations they build.
              Visit Your Sales Command Center — LeaderHQ to see what else we&apos;re building.
            </p>
            <a
              href="https://leaderhq.io"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-navy px-6 text-base font-semibold text-white shadow-md transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              Visit Your Sales Command Center — LeaderHQ
            </a>
          </FadeIn>
        </section>
      </main>
      <SiteFooter
        productSuffix="Leads"
        columns={[{"heading":"Product","links":[{"label":"How It Works","href":"/how-it-works"},{"label":"Memory Moment","href":"/memory-moment"},{"label":"Event Mode","href":"/how-it-works#event-mode"},{"label":"Pricing","href":"/pricing"},{"label":"System Status","href":"https://leaderhq.io/status"}]},{"heading":"Solutions","links":[{"label":"Network Marketing","href":"/for-network-marketing"},{"label":"Conferences & Events","href":"/for-conferences"},{"label":"Summer Sales","href":"/for-summer-sales"},{"label":"Sales Teams","href":"/for-teams"},{"label":"Blog & Resources","href":"/blog"}]},{"heading":"Company","links":[{"label":"About LeaderHQ","href":"/about"},{"label":"Contact","href":"/contact"},{"label":"Privacy Policy","href":"/privacy"},{"label":"Terms of Service","href":"/terms"},{"label":"Security & GDPR","href":"/security"}]}]}
      />
    </div>
  );
}
