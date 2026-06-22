import type { JSX } from 'react';


/**
 * Every icon name supported by {@link MarketingIcon}. Names are semantic so
 * data files (feature lists, plan tables, blog cards) read naturally — e.g.
 * `{ icon: 'tap', ... }` rather than `{ icon: '👆', ... }`.
 *
 * These are the monochrome brand-green replacements for the full-color emoji
 * that used to live on the marketing pages. Keep this union in sync with the
 * switch statement in `MarketingIcon`.
 */
export type MarketingIconName =
  | 'tap'
  | 'bell'
  | 'phone'
  | 'users'
  | 'pin'
  | 'handshake'
  | 'bolt'
  | 'gift'
  | 'camera'
  | 'envelope'
  | 'building'
  | 'clipboard'
  | 'home'
  | 'bar-chart'
  | 'gear'
  | 'document'
  | 'trending-up'
  | 'target'
  | 'tent'
  | 'trophy'
  | 'calendar'
  | 'video'
  | 'clock'
  | 'link'
  | 'check-circle'
  | 'share';

/** Props for {@link MarketingIcon}. */
export interface MarketingIconProps {
  /** Which icon to render. See {@link MarketingIconName}. */
  name: MarketingIconName;
  /** Square edge length in px. Defaults to 24 — matches the in-house NavIcon. */
  size?: number;
  /** Optional class names forwarded to the root `<svg>`. */
  className?: string;
}


/**
 * Inline stroke-based SVG icon for marketing pages.
 *
 * Visual aesthetic mirrors `NavIcon` in `app/dashboard/sidebar.tsx`:
 * 24x24 viewBox, `stroke="currentColor"`, `strokeWidth={1.8}`, round caps and
 * joins, no fills. Color is inherited from the parent via `currentColor`, so
 * wrap in a `text-brand-green` (or any color) container:
 *
 * ```tsx
 * <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
 *   <MarketingIcon name="tap" size={24} />
 * </div>
 * ```
 *
 * Marked `aria-hidden` because these are decorative — labels live in
 * neighbouring text. No external SVG libraries; everything is inline.
 */
export function MarketingIcon({
  name,
  size = 24,
  className,
}: MarketingIconProps): JSX.Element {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className,
  };

  switch (name) {
    case 'tap':
      // Index finger tapping — pointing up with a thumb fold.
      return (
        <svg {...common}>
          <path d="M10 11V5.5a1.7 1.7 0 0 1 3.4 0V12" />
          <path d="M13.4 10.5a1.6 1.6 0 0 1 3.2 0V13" />
          <path d="M16.6 11.5a1.6 1.6 0 0 1 3.2 0v4a6 6 0 0 1-6 6h-1.3a5 5 0 0 1-3.6-1.5l-4.4-4.4a1.6 1.6 0 0 1 2.3-2.3L9 13.5V8.5a1.6 1.6 0 0 1 3.2 0V12" />
        </svg>
      );
    case 'bell':
      return (
        <svg {...common}>
          <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" />
          <path d="M10.5 20.5a2 2 0 0 0 3 0" />
        </svg>
      );
    case 'phone':
      // Smartphone outline.
      return (
        <svg {...common}>
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
          <path d="M10.5 18.5h3" />
        </svg>
      );
    case 'users':
      // Two overlapping people silhouettes.
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M3.5 19v-1a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v1" />
          <path d="M16 5.4a3 3 0 0 1 0 5.6" />
          <path d="M17.5 14.2A4 4 0 0 1 20.5 18v1" />
        </svg>
      );
    case 'pin':
      // Location pin with inner dot.
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case 'handshake':
      return (
        <svg {...common}>
          <path d="M2.5 13.5 6 10l3 1 3.5-3 3.5 3 3 1 2.5 2.5" />
          <path d="M8 15.5l2.5 2.5a1.5 1.5 0 0 0 2.3-.2l4.7-5" />
          <path d="M13 16.5l1.8 1.8a1.4 1.4 0 0 0 2.1-.1L19 16" />
          <path d="M2.5 13.5 4 15M21.5 13.5 20 15" />
        </svg>
      );
    case 'bolt':
      // Lightning bolt.
      return (
        <svg {...common}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
        </svg>
      );
    case 'gift':
      return (
        <svg {...common}>
          <rect x="3.5" y="8.5" width="17" height="12.5" rx="1.5" />
          <path d="M3.5 8.5h17M12 8.5V21" />
          <path d="M12 8.5S9.5 8.5 8.2 7.2a2 2 0 0 1 2.8-2.8C12.3 5.7 12 8.5 12 8.5z" />
          <path d="M12 8.5s2.5 0 3.8-1.3a2 2 0 0 0-2.8-2.8C11.7 5.7 12 8.5 12 8.5z" />
        </svg>
      );
    case 'camera':
      return (
        <svg {...common}>
          <path d="M3 8.5h3.5l1.5-2h8l1.5 2H21V19a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19z" />
          <circle cx="12" cy="13.5" r="3.8" />
        </svg>
      );
    case 'envelope':
      return (
        <svg {...common}>
          <rect x="3" y="5.5" width="18" height="13" rx="1.8" />
          <path d="m3.5 6.5 8.5 7 8.5-7" />
        </svg>
      );
    case 'building':
      // Office building with windows.
      return (
        <svg {...common}>
          <rect x="4.5" y="3" width="15" height="18" rx="1" />
          <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
          <path d="M10.5 21v-3h3v3" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg {...common}>
          <rect x="5.5" y="4.5" width="13" height="17" rx="1.8" />
          <rect x="9" y="2.5" width="6" height="4" rx="1" />
          <path d="M9 11h6M9 14.5h6M9 18h4" />
        </svg>
      );
    case 'home':
      return (
        <svg {...common}>
          <path d="M3.5 11 12 4l8.5 7" />
          <path d="M5.5 9.7V20h13V9.7" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case 'bar-chart':
      return (
        <svg {...common}>
          <path d="M3.5 20.5h17" />
          <rect x="6" y="11" width="3" height="9" rx="0.5" />
          <rect x="11" y="6.5" width="3" height="13.5" rx="0.5" />
          <rect x="16" y="14" width="3" height="6" rx="0.5" />
        </svg>
      );
    case 'gear':
      // Cog wheel — 8 teeth.
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3" />
        </svg>
      );
    case 'document':
      // Paper sheet with folded corner.
      return (
        <svg {...common}>
          <path d="M6 2.5h8L19 7.5V21a.5.5 0 0 1-.5.5h-12A.5.5 0 0 1 6 21z" />
          <path d="M14 2.5V7.5h5" />
          <path d="M9 12.5h6M9 16h6M9 19h4" />
        </svg>
      );
    case 'trending-up':
      // Rising line chart with arrowhead.
      return (
        <svg {...common}>
          <path d="M3.5 17.5 9 12l3.5 3.5L20 8" />
          <path d="M15 8h5v5" />
        </svg>
      );
    case 'target':
      // Concentric circles with center dot.
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5.5" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'tent':
      // Event/festival tent.
      return (
        <svg {...common}>
          <path d="M3 20.5 12 4l9 16.5" />
          <path d="M12 4v16.5" />
          <path d="M8.5 20.5 12 15l3.5 5.5" />
        </svg>
      );
    case 'trophy':
      return (
        <svg {...common}>
          <path d="M8 4.5h8v5a4 4 0 0 1-8 0z" />
          <path d="M8 6H5.5v2A2.5 2.5 0 0 0 8 10.5M16 6h2.5v2A2.5 2.5 0 0 1 16 10.5" />
          <path d="M10 13.5h4l-.5 3.5h-3z" />
          <path d="M8 20.5h8" />
          <path d="M12 17v3.5" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="16" rx="2" />
          <path d="M3.5 10h17M8.5 5V3M15.5 5V3" />
          <path d="M7.5 14h.01M12 14h.01M16.5 14h.01M7.5 17.5h.01M12 17.5h.01" />
        </svg>
      );
    case 'video':
      return (
        <svg {...common}>
          <rect x="2" y="7" width="13" height="10" rx="2" />
          <path d="M15 10l7-3v10l-7-3V10z" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5.5l3.5 2" />
        </svg>
      );
    case 'link':
      return (
        <svg {...common}>
          <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1.72 1.72" />
          <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1.72-1.72" />
        </svg>
      );
    case 'check-circle':
      return (
        <svg {...common}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </svg>
      );
    case 'share':
      return (
        <svg {...common}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.59 13.51 15.42 17.49M15.41 6.51 8.59 10.49" />
        </svg>
      );
  }
}
