# LeaderLeads — Version 0.1 Release Notes
**Beta Review · June 2026**

This document covers every feature included in Version 0.1. Please confirm each item works as described and note any issues.

---

## Marketing Site (leaderleads.io)

### Pages
- [ ] **Home** (`/`) — Hero section, feature highlights, competitor comparison table (LeaderLeads vs Popl vs Blinq vs HiHello), call to action
- [ ] **How It Works** (`/how-it-works`) — Step-by-step walkthrough of the card, Event Mode, and Memory Moment
- [ ] **Memory Moment** (`/memory-moment`) — Feature deep-dive: photo + shared memory email
- [ ] **For Network Marketing** (`/for-network-marketing`) — Landing page for MLM/direct sales reps
- [ ] **For Conferences & Events** (`/for-conferences`) — Landing page for conference networkers
- [ ] **For Summer Sales** (`/for-summer-sales`) — Landing page for seasonal door-to-door teams
- [ ] **For Teams** (`/for-teams`) — Landing page for team managers
- [ ] **Pricing** (`/pricing`) — Free vs Pro plan comparison ($8/month)
- [ ] **About** (`/about`) — Company overview
- [ ] **Contact** (`/contact`) — Contact form
- [ ] **Blog** (`/blog`) — 20 articles with category filters and B&W sketch illustrations
- [ ] **Blog posts** — Each of the 20 articles opens and reads correctly

### Legal / Compliance
- [ ] **Privacy Policy** (`/privacy`) — Full GDPR-compliant privacy policy
- [ ] **Terms of Service** (`/terms`) — Terms and conditions
- [ ] **Security & GDPR** (`/security`) — Data protection, lawful basis, all 7 data subject rights, sub-processors, DPA availability

### Navigation
- [ ] **Top nav** — Logo, How It Works, Memory Moment, Solutions dropdown, Blog, Get Your Free Card CTA, Client Login
- [ ] **Footer** — All links navigate correctly; Event Mode links to `/how-it-works#event-mode`

---

## Authentication (leads.leaderhq.io)

### Signup (`/signup`)
- [ ] Create account with first name, last name, phone number, email, password (all fields validate)
- [ ] Password strength indicators (8+ chars, letter, uppercase, number, special char, match)
- [ ] Phone number validates for selected country
- [ ] OTP email verification — 5-digit code sent to email
- [ ] Google OAuth signup — "Continue with Google" button
- [ ] After signup → lands on Dashboard and onboarding tour starts
- [ ] Referral attribution — if you signed up via someone's invite link, they see you in their team immediately

### Login (`/login`)
- [ ] Sign in with email + password
- [ ] OTP step required after password
- [ ] Google OAuth login — existing accounts can sign in with Google
- [ ] "Forgot password?" link works

### Password Reset (`/forgot-password`, `/reset`)
- [ ] Enter email → receive reset email
- [ ] Enter new password → log in with new credentials

---

## Dashboard App (leads.leaderhq.io/dashboard)

### Dashboard Home (`/dashboard`)
- [ ] Overview card showing card views, lead count, and Memory Moments count
- [ ] Quick links to main features
- [ ] Onboarding tour fires on first login (not on subsequent logins)

### My Card (`/dashboard/my-card`)
- [ ] Create a digital business card (display name, title, company, phone, email, website links)
- [ ] Card URL / slug — customizable, unique
- [ ] Accent color picker
- [ ] Publish / unpublish toggle
- [ ] Photo upload (JPEG, PNG, or WebP, max 5 MB)
- [ ] Live card preview updates as you type
- [ ] Save changes button saves successfully
- [ ] Share panel — copy link, Share (native), Text (mobile), QR code, Add to Apple Wallet, Add to Google Wallet

### Event Mode (`/dashboard/event`)
- [ ] Full-screen QR code display
- [ ] QR code is scannable by another phone
- [ ] Scanning the QR on another device opens the card

### Leads (`/dashboard/leads`) — **Pro feature**
- [ ] Lead inbox lists everyone who has scanned your card
- [ ] Each lead shows name, contact info, date/time
- [ ] Leads require Pro plan — free users see upgrade prompt

### Memory Moments (`/dashboard/memories`) — **Pro feature**
- [ ] List of all captured Memory Moments
- [ ] Capture new Memory Moment (`/dashboard/memories/new`) — take a photo, confirm contact details, send email to both people
- [ ] Each Memory Moment shows the photo, contact name, date, and location
- [ ] Memory Moments require Pro plan — free users see upgrade prompt

### My Team (`/dashboard/team`)
- [ ] Your personal invite link is displayed (`leads.leaderhq.io/join?ref=your-slug`)
- [ ] Copy link button works
- [ ] Share invite button works (native share on mobile)
- [ ] Text invite button visible on mobile
- [ ] Team roster lists everyone who signed up via your invite link with their name, card URL, and join date
- [ ] Team count badge on sidebar nav updates correctly

### Account (`/dashboard/account`)
- [ ] Displays email address you are signed in as
- [ ] Billing section shows current plan (Free or Pro)
- [ ] Upgrade to Pro / manage subscription accessible
- [ ] Version number displayed at bottom

### Upgrade (`/dashboard/upgrade`)
- [ ] Free vs Pro plan comparison
- [ ] "Upgrade to Pro" button initiates Stripe checkout
- [ ] After payment → plan updates to Pro

### Support (`/dashboard/support`)
- [ ] Support contact form submits without error

### Install Prompt (mobile only)
- [ ] "Install LeaderLeads" prompt appears on **mobile** after completing the onboarding tour
- [ ] Prompt does **not** appear on desktop
- [ ] "Install" button triggers device install
- [ ] "Not now" dismisses the prompt and it does not reappear

---

## Public Card View (`leads.leaderhq.io/[slug]`)
- [ ] Visiting a published card URL shows the card with name, title, company, links, photo
- [ ] "Save Contact" button downloads a .vcf contact file
- [ ] QR code on the card is correct
- [ ] Unpublished cards show a "cards aren't visible publicly" notice to the owner and a not-found page to others

---

## Known Limitations (not bugs)
- Lead inbox, Memory Moments require Pro plan ($8/month)
- Add to Apple Wallet / Google Wallet requires PassKit integration (coming in a future update)

---

*LeaderLeads Version 0.1 · Beta · June 2026*
