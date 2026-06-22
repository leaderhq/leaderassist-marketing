import type { Metadata } from 'next';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon } from '@/app/_marketing/icons';

export const metadata: Metadata = {
  title: 'Contact — LeaderLeads',
  description:
    'Get in touch with LeaderLeads — product questions, team plans, custom pricing, and partnership inquiries. We respond within one business day.',
  alternates: { canonical: '/contact' },
};

// Marketing form posts to mailto for now — the app/auth origin handles real
// inbound on leads.leaderhq.io. Keeps this page a server component.
const SUPPORT_EMAIL = 'support@leaderhq.io';

export default function ContactPage() {
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
          className="text-center text-white"
          style={{ background: '#0d1b2e' }}
        >
          <div className="mx-auto max-w-[560px] px-4 py-20 sm:px-6 sm:py-24">
            <FadeIn>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                Get in touch.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-zinc-300">
                Questions about the product, team plans, or custom pricing — we
                respond to every message within one business day.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Send us a message
              </h2>
              <form
                action={`mailto:${SUPPORT_EMAIL}`}
                method="post"
                encType="text/plain"
                className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-7 shadow-sm"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-brand-navy"
                    >
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-brand-navy"
                    >
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-sm font-semibold text-brand-navy"
                    >
                      What&apos;s this about?
                    </label>
                    <select
                      id="contact-topic"
                      name="topic"
                      defaultValue="General question"
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                    >
                      <option>General question</option>
                      <option>Team plan inquiry</option>
                      <option>Custom pricing (50+ seats)</option>
                      <option>Technical support</option>
                      <option>Partnership opportunity</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-brand-navy"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
                  >
                    Send message →
                  </button>
                </div>
              </form>
            </FadeIn>

            <FadeIn delay={120}>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Other ways to reach us
              </h2>
              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                  <h3 className="flex items-center gap-2 text-base font-bold text-brand-navy">
                    <span className="inline-flex h-6 w-6 items-center justify-center text-brand-green">
                      <MarketingIcon name="envelope" size={20} />
                    </span>
                    Email support
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="font-medium text-brand-navy underline decoration-brand-green decoration-2 underline-offset-4 hover:text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                    <br />
                    We respond within one business day, typically faster.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                  <h3 className="flex items-center gap-2 text-base font-bold text-brand-navy">
                    <span className="inline-flex h-6 w-6 items-center justify-center text-brand-green">
                      <MarketingIcon name="building" size={20} />
                    </span>
                    Mailing address
                  </h3>
                  <address className="mt-2 not-italic leading-relaxed text-zinc-600">
                    LeaderHQ
                    <br />
                    30 N. Gould Street, Suite N
                    <br />
                    Sheridan, WY 82801
                  </address>
                </div>

                <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                  <h3 className="flex items-center gap-2 text-base font-bold text-brand-navy">
                    <span className="inline-flex h-6 w-6 items-center justify-center text-brand-green">
                      <MarketingIcon name="users" size={20} />
                    </span>
                    Large team inquiries
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">
                    For teams of 50+ seats or custom organizational pricing,
                    email{' '}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}?subject=Team%20Plan`}
                      className="font-medium text-brand-navy underline decoration-brand-green decoration-2 underline-offset-4 hover:text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
                    >
                      {SUPPORT_EMAIL}
                    </a>{' '}
                    with &ldquo;Team Plan&rdquo; in the subject line. We&apos;ll
                    respond with options specific to your organization&apos;s
                    scale.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <SiteFooter
        productSuffix="Leads"
        columns={[{"heading":"Product","links":[{"label":"How It Works","href":"/how-it-works"},{"label":"Memory Moment","href":"/memory-moment"},{"label":"Event Mode","href":"/how-it-works#event-mode"},{"label":"Pricing","href":"/pricing"},{"label":"System Status","href":"https://leaderhq.io/status"}]},{"heading":"Solutions","links":[{"label":"Network Marketing","href":"/for-network-marketing"},{"label":"Conferences & Events","href":"/for-conferences"},{"label":"Summer Sales","href":"/for-summer-sales"},{"label":"Sales Teams","href":"/for-teams"},{"label":"Blog & Resources","href":"/blog"}]},{"heading":"Company","links":[{"label":"About LeaderHQ","href":"/about"},{"label":"Contact","href":"/contact"},{"label":"Privacy Policy","href":"/privacy"},{"label":"Terms of Service","href":"/terms"},{"label":"Security & GDPR","href":"/security"}]}]}
      />
    </div>
  );
}
