# leader-leads-marketing

LeaderLeads public marketing site — leaderleads.io

Public routes only. The authenticated app lives at leads.leaderhq.io (leader-leads-app).

## Routes

- `/` — homepage
- `/about`, `/blog`, `/blog/[slug]`, `/contact` — content pages
- `/how-it-works`, `/memory-moment`, `/pricing` — product pages
- `/for-conferences`, `/for-network-marketing`, `/for-summer-sales`, `/for-teams` — use-case pages
- `/privacy`, `/terms`, `/security`, `/release-notes` — legal / info pages
- `/tuesday-preview` — internal preview page
- `/c/[slug]`, `/c/[slug]/qr` — public digital card viewer (no auth required)
- `/join` — referral landing page (stores `dc_ref` cookie, then forwards to the app)

## Packages (local workspaces)

- `packages/marketing-ui` — fade-in, typewriter-headline, site-nav, site-footer, suite-bar, marketing-button, icons
- `packages/ui` — generic button, card, input, code components
- `packages/types` — shared TypeScript types

## Deployment

Deployed on Vercel. Push to `main` triggers production deploy.
