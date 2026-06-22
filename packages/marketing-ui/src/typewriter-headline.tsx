'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Rotating typewriter headline for Leader Suite marketing pages.
 *
 * Renders a static prefix in brand-navy and an animated suffix in brand-green
 * that types a phrase, holds, deletes, and cycles to the next phrase forever.
 *
 * Dependency-free — no third-party typewriter libraries. Cleanup on unmount.
 *
 * @param staticPrefix  The unchanging opening clause.
 * @param phrases       The rotating phrases that follow the prefix.
 * @param className     Tailwind classes applied to the wrapping <h1>. Color
 *   comes from CSS — .headline-static / .headline-rotate in globals.css.
 */
export function TypewriterHeadline({
  className = '',
  staticPrefix = 'Never lose a lead',
  phrases = DEFAULT_PHRASES,
}: {
  className?: string
  staticPrefix?: string
  phrases?: readonly string[]
}) {
  const [displayed, setDisplayed] = useState('')
  const phraseIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function tick() {
      const phrase = phrases[phraseIdx.current] ?? ''

      if (!deleting.current) {
        charIdx.current++
        setDisplayed(phrase.slice(0, charIdx.current))

        if (charIdx.current === phrase.length) {
          deleting.current = true
          timer.current = setTimeout(tick, PAUSE_AFTER)
          return
        }
      } else {
        charIdx.current--
        setDisplayed(phrase.slice(0, charIdx.current))

        if (charIdx.current === 0) {
          deleting.current = false
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length
          timer.current = setTimeout(tick, PAUSE_BEFORE)
          return
        }
      }

      timer.current = setTimeout(tick, deleting.current ? SPEED_DELETE : SPEED_TYPE)
    }

    timer.current = setTimeout(tick, 600)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [phrases])

  return (
    <h1 className={`hero-headline ${className}`.trim()}>
      <span className="headline-static">{staticPrefix}</span>
      <span className="headline-rotate">
        {displayed}
        <span className="typewriter-cursor" aria-hidden="true" />
      </span>
    </h1>
  )
}

/**
 * Default rotating phrases — LeaderLeads-themed. Override via the `phrases`
 * prop when porting this component to another Leader Suite product.
 */
const DEFAULT_PHRASES = [
  'at an event.',
  'at a conference.',
  'at a door.',
  'at a home show.',
  'in a parking lot.',
  'at a trade show.',
  'at a sales call.',
] as const

/** Milliseconds per character typed. */
const SPEED_TYPE = 68
/** Milliseconds per character deleted (snappier than typing). */
const SPEED_DELETE = 36
/** Hold time after a phrase is fully typed. */
const PAUSE_AFTER = 2200
/** Brief breath before the next phrase starts. */
const PAUSE_BEFORE = 380
