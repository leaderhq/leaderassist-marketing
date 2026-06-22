'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Tiny scroll-in reveal: fades + lifts its children the first time they enter
 * the viewport, then disconnects. Respects `prefers-reduced-motion` (the CSS
 * transition is suppressed there) and renders visible immediately if
 * IntersectionObserver is unavailable, so content is never trapped hidden.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li'
}) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            obs.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`fade-in-motion${className ? ` ${className}` : ''}`}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(16px)',
        transition: 'opacity 600ms ease, transform 600ms ease',
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </Tag>
  )
}
