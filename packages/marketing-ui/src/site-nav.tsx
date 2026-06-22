'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface SiteNavLink {
  href: string
  label: string
  children?: Array<{ label: string; href: string; description?: string }>
}

export interface SiteNavProps {
  productSuffix: string
  wordmarkSrc?: string
  links: SiteNavLink[]
  solutionsLinks?: SiteNavLink[]
  mobileExtraLinks?: SiteNavLink[]
  ctaLabel?: string
  ctaHref?: string
  loginHref?: string
}

/** Chevron arrow used as the Solutions dropdown indicator. */
function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform ${open ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function SiteNav({
  productSuffix,
  wordmarkSrc = `/brand/Leader${productSuffix}_wordmark.svg`,
  links,
  solutionsLinks = [],
  mobileExtraLinks = [],
  ctaLabel = 'Get started free',
  ctaHref = '/signup',
  loginHref = '/login',
}: SiteNavProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const solutionsRef = useRef<HTMLDivElement>(null)

  // Highlight the link whose route matches the current path. Exact match for
  // '/' (home) and prefix match for everything else so /blog/[slug] still
  // shows Blog as active.
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  // Solutions is "active" whenever the user is on any vertical page so the
  // trigger styles match the rest of the nav.
  const solutionsActive = solutionsLinks.some((l) => isActive(l.href))

  // Separate the links into left (before Solutions) and right (after Solutions).
  // Convention: links with hasDropdown=true are the Solutions trigger; everything
  // before it is DESKTOP_LEFT, everything after is DESKTOP_RIGHT.
  const solutionsTriggerIdx = links.findIndex((l) => l.children !== undefined || l.href === '#')
  const desktopLeft = solutionsTriggerIdx >= 0 ? links.slice(0, solutionsTriggerIdx) : links
  const desktopRight = solutionsTriggerIdx >= 0 ? links.slice(solutionsTriggerIdx + 1) : []
  const hasSolutions = solutionsTriggerIdx >= 0 && solutionsLinks.length > 0

  // Close the Solutions dropdown when the user clicks elsewhere on the page or
  // taps Escape — standard accessible menu behavior.
  useEffect(() => {
    if (!solutionsOpen) return
    const onDocClick = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSolutionsOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [solutionsOpen])

  // Closing the menu after a tap keeps mobile nav feeling like a real app
  // instead of a hash-routed SPA where links left it hanging open.
  const closeMobile = () => setMobileOpen(false)

  // All desktop links (for mobile active-state check)
  const allDesktopLinks = [...desktopLeft, ...desktopRight]

  // Mobile extra links that don't appear in the desktop nav
  const mobileOnlyLinks = mobileExtraLinks.filter(
    (l) => !allDesktopLinks.some((d) => d.href === l.href),
  )

  return (
    <nav className="border-b border-zinc-200 bg-zinc-50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green"
          aria-label={`Leader${productSuffix} home`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={wordmarkSrc}
            alt={`Leader${productSuffix}`}
            style={{ width: 'auto', display: 'block' }}
            className="h-7 sm:h-9"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {desktopLeft.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href) ? 'text-brand-green' : 'text-zinc-700 hover:text-brand-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {hasSolutions && (
            // Solutions dropdown. The wrapper holds the trigger + the popout
            // panel; group-hover keeps it open while the cursor is over
            // either, and the useState path supports keyboard + tap.
            <div
              ref={solutionsRef}
              className="group relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSolutionsOpen((o) => !o)}
                aria-haspopup="menu"
                aria-expanded={solutionsOpen}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                  solutionsActive || solutionsOpen ? 'text-brand-green' : 'text-zinc-700 hover:text-brand-navy'
                }`}
              >
                Solutions
                <ChevronDown open={solutionsOpen} />
              </button>

              {solutionsOpen && (
                <div
                  role="menu"
                  // NOTE: no margin-top here. The panel sits flush against
                  // the trigger so the cursor never crosses a dead zone
                  // when moving from "Solutions" down into the items —
                  // any gap triggers onMouseLeave on the wrapper and the
                  // panel disappears before you can click. The visual
                  // breathing room comes from pt-2 ON the panel (inside
                  // the wrapper) instead of mt-2 between them.
                  className="absolute left-0 top-full w-64 overflow-hidden rounded-xl border border-zinc-200 bg-white pt-2 shadow-lg"
                >
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      onClick={() => setSolutionsOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium ${
                        isActive(link.href)
                          ? 'bg-brand-green/10 text-brand-green'
                          : 'text-zinc-700 hover:bg-zinc-50 hover:text-brand-navy'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {desktopRight.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href) ? 'text-brand-green' : 'text-zinc-700 hover:text-brand-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={ctaHref}
            className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green/90"
          >
            {ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md lg:hidden"
        >
          <span className={`block h-0.5 w-6 bg-brand-navy transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-brand-navy transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-brand-navy transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {allDesktopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`rounded-md px-3 py-2 text-base font-medium ${
                  isActive(link.href) ? 'bg-brand-green/10 text-brand-green' : 'text-zinc-800 hover:bg-zinc-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {hasSolutions && (
              <>
                {/* Solutions group — header + indented verticals. Tap the
                    header for visual hierarchy; the items themselves are the
                    actual links. */}
                <div className="mt-2 px-3 pt-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Solutions
                </div>
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className={`rounded-md px-6 py-2 text-base font-medium ${
                      isActive(link.href) ? 'bg-brand-green/10 text-brand-green' : 'text-zinc-800 hover:bg-zinc-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            )}

            {mobileOnlyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`rounded-md px-3 py-2 text-base font-medium ${
                  isActive(link.href) ? 'bg-brand-green/10 text-brand-green' : 'text-zinc-800 hover:bg-zinc-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <Link
              href={ctaHref}
              onClick={closeMobile}
              className="rounded-full bg-brand-green px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {ctaLabel}
            </Link>
            <a
              href={loginHref}
              className="rounded-full bg-brand-navy px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Client Login
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
