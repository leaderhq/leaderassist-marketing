'use client'

import Link from 'next/link'

interface MarketingButtonProps {
  variant?: 'primary' | 'secondary'
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function MarketingButton({ variant = 'primary', href, children, className, onClick }: MarketingButtonProps) {
  const base = variant === 'primary'
    ? 'rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green/90'
    : 'rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-navy/90'
  const cls = [base, className].filter(Boolean).join(' ')
  if (href) return <Link href={href} className={cls}>{children}</Link>
  return <button type="button" onClick={onClick} className={cls}>{children}</button>
}
