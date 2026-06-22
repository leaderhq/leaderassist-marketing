import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter } from '@leader/marketing-ui';

const APP_URL = 'https://cal.leaderhq.io';

export const metadata: Metadata = {
  title: 'Blog — LeaderCal',
  description: 'Insights, guides, and best practices for leaders who want to own their calendar.',
};

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
      { label: 'Pricing', href: '/pricing' },
      { label: 'System Status', href: 'https://leaderhq.io/status', external: true },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About LeaderHQ', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function BlogPage() {
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
        <section style={{ background: '#0d1b2e' }}>
          <div className="mx-auto max-w-[720px] px-4 py-24 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
              Coming soon
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              The LeaderCal Blog
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
              Insights, guides, and scheduling strategies for leaders who
              want their calendar to work as hard as they do. Check back soon.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110"
            >
              ← Back to LeaderCal
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter productSuffix="Cal" columns={FOOTER_COLUMNS} />
    </div>
  );
}
