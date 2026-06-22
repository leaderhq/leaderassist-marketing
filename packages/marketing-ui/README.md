# @leader/marketing-ui

Shared marketing shell components for every Leader Suite product. All marketing pages across the suite use this package — nav, footer, animations, and the CTA button atom.

**LeaderLeads is the canonical visual reference.** When in doubt, check how `apps/leaderleads/app/page.tsx` uses these components.

---

## Adding to a new app

### 1. Add the dependency

In your app's `package.json`:

```json
"dependencies": {
  "@leader/marketing-ui": "*"
}
```

### 2. Add to transpilePackages

In your app's `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  transpilePackages: [
    "@leader/marketing-ui",
    // ...other packages
  ],
}
```

### 3. Run install from monorepo root

```bash
npm install
```

---

## Components

### `<SuiteBar />`

The top green band that links to other Leader Suite products. **Only include this on apps that are part of the core suite.** If your app is a standalone or white-label product, omit it.

```tsx
import { SuiteBar } from '@leader/marketing-ui'

// Renders above <SiteNav /> — no props needed
<SuiteBar />
```

Apps that use it: LeaderLeads, LeaderAffiliate, LeaderCal, LeaderSend, LeaderHQ.

---

### `<SiteNav />`

The main sticky navigation band — logo/wordmark, nav links, CTA button, mobile menu.

```tsx
import { SiteNav } from '@leader/marketing-ui'

<SiteNav
  productSuffix="Send"
  links={[
    { label: 'Features', href: '/features' },
    { label: 'Pricing',  href: '/pricing' },
    { label: 'About',    href: '/about' },
  ]}
  ctaLabel="Start free"
  ctaHref="/signup"
  loginHref="/login"
/>
```

| Prop | Type | Required | Default |
|---|---|---|---|
| `productSuffix` | `string` | Yes | — |
| `links` | `SiteNavLink[]` | Yes | — |
| `wordmarkSrc` | `string` | No | `/brand/Leader{productSuffix}_wordmark.svg` |
| `ctaLabel` | `string` | No | `"Get started free"` |
| `ctaHref` | `string` | No | `"/signup"` |
| `loginHref` | `string` | No | `"/login"` |
| `solutionsLinks` | `SiteNavLink[]` | No | `[]` |
| `mobileExtraLinks` | `SiteNavLink[]` | No | `[]` |

**`wordmarkSrc`** auto-derives from `productSuffix` using the `/brand/Leader{productSuffix}_wordmark.svg` convention. Override only if your wordmark lives at a non-standard path.

**`SiteNavLink` type:**
```ts
interface SiteNavLink {
  href: string
  label: string
  children?: Array<{ label: string; href: string; description?: string }>
}
```

---

### `<SiteFooter />`

Four-column footer with the product wordmark, link columns, address, and copyright.

```tsx
import { SiteFooter } from '@leader/marketing-ui'

<SiteFooter
  productSuffix="Send"
  columns={[
    {
      heading: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing',  href: '/pricing' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog',  href: '/blog' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms',   href: '/terms' },
      ],
    },
  ]}
/>
```

| Prop | Type | Required | Default |
|---|---|---|---|
| `productSuffix` | `string` | Yes | — |
| `columns` | `SiteFooterColumn[]` | Yes | — |
| `wordmarkSrc` | `string` | No | `/brand/Leader{productSuffix}_wordmark.svg` |
| `address` | `string` | No | `"30 N. Gould Street, Suite N\nSheridan, WY 82801"` |
| `supportEmail` | `string` | No | `"support@leaderhq.io"` |

---

### `<FadeIn />`

Wraps any section in a subtle scroll-triggered fade-up animation. Use on every marketing section for the consistent "clean and alive" feel.

```tsx
import { FadeIn } from '@leader/marketing-ui'

<FadeIn>
  <section className="...">
    {/* your content */}
  </section>
</FadeIn>
```

No props. Wraps `children`. This is what makes marketing pages feel polished vs. static — use it on every section.

---

### `<TypewriterHeadline />`

Animated typewriter hero headline. Cycles through phrases in brand-green below a static prefix. Used in the hero of most marketing pages.

```tsx
import { TypewriterHeadline } from '@leader/marketing-ui'

<TypewriterHeadline />
// Renders: "Never lose a lead" + rotating suffix
```

| Prop | Type | Required | Default |
|---|---|---|---|
| `className` | `string` | No | `""` |

The phrases are defined inside the component. To change them for a specific product, fork the component locally rather than adding a prop — the phrases are brand copy, not configuration.

---

### `<MarketingButton />`

The CTA button atom. Two variants: primary (green) and secondary (navy). Renders as a `<Link>` when `href` is provided, `<button>` otherwise.

```tsx
import { MarketingButton } from '@leader/marketing-ui'

// Primary CTA (green)
<MarketingButton href="/signup">Get started free</MarketingButton>

// Secondary (navy)
<MarketingButton variant="secondary" href="/login">Sign in</MarketingButton>

// As a button (no href)
<MarketingButton onClick={handleClick}>Learn more</MarketingButton>
```

| Prop | Type | Required | Default |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary'` | No | `'primary'` |
| `href` | `string` | No | — |
| `children` | `React.ReactNode` | Yes | — |
| `className` | `string` | No | — |
| `onClick` | `() => void` | No | — |

---

## Standard page shell

Every Leader Suite marketing page follows this structure:

```tsx
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui'

const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing',  href: '/pricing' },
  { label: 'About',    href: '/about' },
]

const FOOTER_COLUMNS = [
  { heading: 'Product', links: [{ label: 'Features', href: '/features' }] },
  { heading: 'Company', links: [{ label: 'About',    href: '/about' }] },
  { heading: 'Legal',   links: [{ label: 'Privacy',  href: '/privacy' }, { label: 'Terms', href: '/terms' }] },
]

export default function Page() {
  return (
    <>
      <SuiteBar />                        {/* omit if not a core suite app */}
      <SiteNav
        productSuffix="YourProduct"
        links={NAV_LINKS}
        ctaLabel="Get started free"
        ctaHref="/signup"
        loginHref="/login"
      />

      <main>
        <FadeIn>
          <section>{/* hero */}</section>
        </FadeIn>
        <FadeIn>
          <section>{/* features */}</section>
        </FadeIn>
        {/* wrap every section in <FadeIn> */}
      </main>

      <SiteFooter productSuffix="YourProduct" columns={FOOTER_COLUMNS} />
    </>
  )
}
```

---

## Auth on marketing pages

Marketing pages are public — no session check needed. For auth UI (sign-in, sign-up, OTP verification), use the `password-otp-google-auth` Leader skill. That skill provides the canonical patterns for every auth surface across the suite.

See `packages/auth-server/` for the server-side `getSession()` helper used in protected app routes.

---

## Wordmark convention

Each product must have its wordmark SVG at `public/brand/Leader{productSuffix}_wordmark.svg`. The `wordmarkSrc` prop on `SiteNav` and `SiteFooter` defaults to this path automatically — you only need to pass it explicitly if your wordmark is somewhere else.

Existing wordmarks: `LeaderLeads_wordmark.svg`, `LeaderHQ_wordmark.svg`, `LeaderAffiliate_wordmark.svg`, `LeaderCal_wordmark.svg`, `LeaderSend_wordmark.svg`.

---

## Changing a component

Edit the source file in `packages/marketing-ui/src/`. The change propagates to every app on the next build — no per-app updates needed. This is the whole point of the package.

If a product needs a one-off variation (different phrase list, custom wordmark treatment), do it with props if the interface supports it, or keep a local override in that app's `_marketing/` folder and don't delete `icons.tsx` / `mocks.tsx`.
