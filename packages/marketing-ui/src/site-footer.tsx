import Link from 'next/link'

// Four-column footer with the Leader Suite wordmark in the brand column. Pure
// presentation — no client state needed, so this stays a server component.

type FooterLink = { href: string; label: string; badge?: string; external?: boolean }

export interface SiteFooterColumn {
  heading: string
  links: Array<{ label: string; href: string; badge?: string; external?: boolean }>
}

export interface SocialLink {
  label: string
  href: string
  glyph: string
}

export interface SiteFooterProps {
  productSuffix: string
  wordmarkSrc?: string
  columns: SiteFooterColumn[]
  address?: string
  supportEmail?: string
  socialLinks?: SocialLink[]
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h5 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">{title}</h5>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link
              href={link.href}
              className="text-sm text-zinc-700 transition-colors hover:text-brand-green"
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
              {link.badge && (
                <span className="ml-2 rounded-full bg-brand-green px-2 py-0.5 text-[10px] font-bold text-white">
                  {link.badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter({
  productSuffix,
  wordmarkSrc = `/brand/Leader${productSuffix}_wordmark.svg`,
  columns,
  address = '30 N. Gould Street, Suite N\nSheridan, WY 82801',
  supportEmail = 'support@leaderhq.io',
  socialLinks = [],
}: SiteFooterProps) {
  const addressLines = address.split('\n')

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        {/* Columns row: Brand / Product / Solutions / Company. Follow Us
            icons no longer live in this row — they moved to the copyright
            band at the very bottom of the footer. */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green"
              aria-label={`Leader${productSuffix} home`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={wordmarkSrc}
                alt={`Leader${productSuffix}`}
                style={{ width: 'auto', display: 'block' }}
                className="h-9 sm:h-11"
              />
            </Link>
            <address className="mt-5 text-sm not-italic leading-relaxed text-zinc-600">
              {addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < addressLines.length - 1 && <br />}
                </span>
              ))}
            </address>
            <a
              href={`mailto:${supportEmail}`}
              className="mt-2 inline-block text-sm text-zinc-600 transition-colors hover:text-brand-green"
            >
              {supportEmail}
            </a>
          </div>

          {columns.map((col) => (
            <FooterColumn key={col.heading} title={col.heading} links={col.links} />
          ))}
        </div>
      </div>

      {/* Copyright bar — very bottom. Now also houses the social icons on
          the right; copyright text on the left. White background separates
          it visually from the advertising band above. */}
      <div className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-zinc-500 md:flex-row md:px-6">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} LeaderHQ, a division of Know Freedom Technologies. All rights reserved.
          </p>
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-xs font-semibold text-zinc-600 transition-colors hover:border-brand-green hover:text-brand-navy"
                >
                  {s.glyph}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
