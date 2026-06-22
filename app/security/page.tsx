import type { Metadata } from 'next';
import { SuiteBar, SiteNav, SiteFooter } from '@leader/marketing-ui';

export const metadata: Metadata = {
  title: 'Security & GDPR — LeaderLeads',
  description:
    'How LeaderLeads protects your data, your GDPR rights as a data subject, and how to exercise them.',
  alternates: { canonical: '/security' },
};

const LAST_UPDATED = 'June 2026';

export default function SecurityPage() {
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
        <article className="mx-auto max-w-[720px] px-4 py-12 sm:px-6 sm:py-16">
          <header className="mb-10 border-b border-zinc-100 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Security &amp; GDPR
            </h1>
            <p className="mt-3 text-sm text-zinc-500">Last updated: {LAST_UPDATED}</p>
            <p className="mt-4 rounded-lg bg-zinc-50 px-4 py-3 text-sm leading-relaxed text-zinc-600">
              This page covers how we protect your data technically and operationally, and
              your rights under the General Data Protection Regulation (GDPR). For a full
              description of what data we collect and why, see our{' '}
              <a href="/privacy" className="font-medium text-brand-green hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </header>

          <div className="space-y-10 text-[15px] leading-relaxed text-zinc-700">

            <Section title="How we protect your data">
              <p>
                LeaderLeads is a product of LeaderHQ, operated by Know Freedom Technologies.
                We apply the following measures to keep your data secure:
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>
                  <strong>Encryption in transit.</strong> All data between your device and
                  our servers is encrypted using TLS 1.2 or higher. We do not serve the
                  application over unencrypted HTTP.
                </li>
                <li>
                  <strong>Encryption at rest.</strong> Stored data — including contact
                  records, card content, and lead information — is encrypted at rest in our
                  database infrastructure.
                </li>
                <li>
                  <strong>Access controls.</strong> Internal access to production data is
                  restricted to authorised personnel on a need-to-know basis. We do not
                  grant broad database access to staff without a legitimate operational
                  requirement.
                </li>
                <li>
                  <strong>Authentication.</strong> User accounts are protected by
                  password-plus-OTP two-factor authentication. Passwords are hashed using
                  industry-standard algorithms; we never store plaintext passwords.
                </li>
                <li>
                  <strong>Vendor security.</strong> We use reputable, SOC 2-compliant
                  infrastructure providers. Third-party services we integrate with are
                  assessed for security posture before use.
                </li>
              </ul>
            </Section>

            <Section title="Lawful basis for processing (GDPR Article 6)">
              <p>
                If you are located in the European Economic Area, the United Kingdom, or
                another jurisdiction covered by GDPR-equivalent legislation, we process your
                personal data on the following lawful bases:
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>
                  <strong>Contract performance.</strong> Processing necessary to provide the
                  LeaderLeads service you have signed up for — creating your card, storing
                  your lead inbox, sending Memory Moment emails.
                </li>
                <li>
                  <strong>Legitimate interests.</strong> Processing necessary for fraud
                  prevention, security monitoring, and product improvement — where those
                  interests are not overridden by your rights.
                </li>
                <li>
                  <strong>Consent.</strong> Where we send optional marketing communications,
                  we do so only with your consent, which you may withdraw at any time.
                </li>
                <li>
                  <strong>Legal obligation.</strong> Processing required to comply with
                  applicable law.
                </li>
              </ul>
            </Section>

            <Section title="Your rights as a data subject">
              <p>
                Under GDPR (and equivalent legislation), you have the following rights
                regarding your personal data. To exercise any of them, email us at{' '}
                <a
                  href="mailto:privacy@leaderhq.io"
                  className="font-medium text-brand-green hover:underline"
                >
                  privacy@leaderhq.io
                </a>{' '}
                with your request. We will respond within 30 days.
              </p>
              <ul className="mt-3 space-y-3 pl-5 list-disc">
                <li>
                  <strong>Right of access.</strong> You may request a copy of the personal
                  data we hold about you.
                </li>
                <li>
                  <strong>Right to rectification.</strong> You may ask us to correct
                  inaccurate or incomplete data. Most card and profile data can be corrected
                  directly in your dashboard.
                </li>
                <li>
                  <strong>Right to erasure ("right to be forgotten").</strong> You may
                  request deletion of your account and associated personal data. We will
                  action this within 30 days, subject to any legal retention obligations.
                </li>
                <li>
                  <strong>Right to data portability.</strong> You may request your data in a
                  structured, machine-readable format (JSON or CSV).
                </li>
                <li>
                  <strong>Right to restrict processing.</strong> You may ask us to pause
                  processing of your data while a dispute is resolved.
                </li>
                <li>
                  <strong>Right to object.</strong> You may object to processing based on
                  legitimate interests, including any direct marketing.
                </li>
                <li>
                  <strong>Rights related to automated decision-making.</strong> We do not
                  make decisions about you solely by automated means that produce legal or
                  similarly significant effects.
                </li>
              </ul>
            </Section>

            <Section title="Data retention">
              <p>
                We retain your personal data for as long as your account is active and for a
                reasonable period afterward to allow for account recovery, dispute resolution,
                and legal compliance. Specifically:
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>Account and card data: retained for the life of your account plus 90 days after deletion request.</li>
                <li>Lead and contact records: retained with your account; deleted on account erasure request.</li>
                <li>Memory Moment images: retained until you delete them or request account erasure.</li>
                <li>Transactional emails and logs: retained for up to 12 months for fraud and security purposes.</li>
                <li>Billing records: retained for 7 years as required by applicable financial regulations.</li>
              </ul>
            </Section>

            <Section title="Sub-processors and third-party services">
              <p>
                We use the following categories of third-party processors to operate
                LeaderLeads. Each is bound by a data processing agreement consistent with
                GDPR requirements:
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li><strong>Cloud infrastructure:</strong> servers, databases, and object storage</li>
                <li><strong>Transactional email:</strong> delivery of OTP codes, Memory Moment emails, and account notifications (Postmark)</li>
                <li><strong>Payment processing:</strong> Stripe — we do not store card numbers; all payment data is handled by Stripe directly</li>
                <li><strong>Analytics:</strong> aggregated, anonymised product usage analytics only — no personally identifiable data shared</li>
              </ul>
              <p className="mt-3">
                A full list of sub-processors is available on request at{' '}
                <a
                  href="mailto:privacy@leaderhq.io"
                  className="font-medium text-brand-green hover:underline"
                >
                  privacy@leaderhq.io
                </a>
                .
              </p>
            </Section>

            <Section title="Data Processing Agreement (DPA)">
              <p>
                If you use LeaderLeads in a business context and require a Data Processing
                Agreement for your own GDPR compliance, email{' '}
                <a
                  href="mailto:privacy@leaderhq.io"
                  className="font-medium text-brand-green hover:underline"
                >
                  privacy@leaderhq.io
                </a>{' '}
                with "DPA Request" in the subject line. We will provide a signed DPA within
                5 business days.
              </p>
            </Section>

            <Section title="Supervisory authority">
              <p>
                If you are in the EEA or UK and believe we have not handled your data
                lawfully, you have the right to lodge a complaint with your local data
                protection supervisory authority. In the United States, please contact us
                directly at{' '}
                <a
                  href="mailto:privacy@leaderhq.io"
                  className="font-medium text-brand-green hover:underline"
                >
                  privacy@leaderhq.io
                </a>{' '}
                and we will work to resolve your concern promptly.
              </p>
            </Section>

            <Section title="Contact">
              <address className="not-italic">
                <strong>LeaderHQ / Know Freedom Technologies</strong>
                <br />
                30 N. Gould Street, Suite N
                <br />
                Sheridan, WY 82801
                <br />
                <a
                  href="mailto:privacy@leaderhq.io"
                  className="font-medium text-brand-green hover:underline"
                >
                  privacy@leaderhq.io
                </a>
              </address>
            </Section>

          </div>
        </article>
      </main>
      <SiteFooter
        productSuffix="Leads"
        columns={[{"heading":"Product","links":[{"label":"How It Works","href":"/how-it-works"},{"label":"Memory Moment","href":"/memory-moment"},{"label":"Event Mode","href":"/how-it-works#event-mode"},{"label":"Pricing","href":"/pricing"},{"label":"System Status","href":"https://leaderhq.io/status"}]},{"heading":"Solutions","links":[{"label":"Network Marketing","href":"/for-network-marketing"},{"label":"Conferences & Events","href":"/for-conferences"},{"label":"Summer Sales","href":"/for-summer-sales"},{"label":"Sales Teams","href":"/for-teams"},{"label":"Blog & Resources","href":"/blog"}]},{"heading":"Company","links":[{"label":"About LeaderHQ","href":"/about"},{"label":"Contact","href":"/contact"},{"label":"Privacy Policy","href":"/privacy"},{"label":"Terms of Service","href":"/terms"},{"label":"Security & GDPR","href":"/security"}]}]}
      />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold tracking-tight text-brand-navy">{title}</h2>
      {children}
    </section>
  );
}
