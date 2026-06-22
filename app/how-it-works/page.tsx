import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://leads.leaderhq.io';

export const metadata: Metadata = {
  title: 'How It Works — LeaderLeads',
  description:
    'From handshake to Leader CRM in one tap. Five steps, under two minutes to set up — see exactly how LeaderLeads captures, stamps, and follows up on every lead.',
  alternates: { canonical: '/how-it-works' },
};

const LINK_CLASS = 'text-brand-green font-semibold hover:underline';

const STEPS: { n: number; title: string; body: React.ReactNode }[] = [
  {
    n: 1,
    title: 'Create your card in 60 seconds',
    body: 'Click "Get Your Free Card," add your name, title, and contact info. Your professional digital card is live immediately. No design skills, no waiting period, no credit card required. Just a card that works.',
  },
  {
    n: 2,
    title: 'Add to your wallet. Activate Event Mode.',
    body: "Add your card to Apple Wallet or Google Wallet — one tap and it's there permanently, available even with no signal. Then activate Event Mode: one tap turns your entire screen into a high-contrast QR that anyone can scan from their camera app with no download required.",
  },
  {
    n: 3,
    title: 'Share at any event — QR, text, link, or phone tap',
    body: (
      <>
        At your next meeting, expo, conference, or door-to-door stop, share however fits the
        moment. Hold up the QR screen. Text the link. Or use NFC — Near-Field Communication, the built-in feature on most modern smartphones that transfers your contact in one touch, no scanning required. Think of it like a digital handshake: two phones tap and it&apos;s done.{' '}
        <Link href="/how-it-works#event-mode" className={LINK_CLASS}>
          Event Mode
        </Link>{' '}
        means the person you&apos;re talking to saves your contact in seconds
        with no friction on their end — no app, no login, no steps.
      </>
    ),
  },
  {
    n: 4,
    title: 'Memory Moment — stamp the meeting (Pro)',
    body: (
      <>
        For your warmest conversations, take a quick photo together.{' '}
        <Link href="/memory-moment" className={LINK_CLASS}>
          Memory Moment
        </Link>{' '}
        stamps the date, time, and location and emails it to both of you within
        seconds. They have the context. You have the opener. Tuesday&apos;s
        follow-up writes itself before you&apos;ve opened a blank email.
      </>
    ),
  },
  {
    n: 5,
    title: 'Follow up with everyone. Miss no one.',
    body: (
      <>
        Your lead inbox captures every person who engages with your card,
        organized by timestamp. Your running list is always current and ready
        to work. Contacts flow natively into{' '}
        <Link href="/for-teams" className={LINK_CLASS}>
          Leader CRM
        </Link>{' '}
        — the CRM built for the Leader Suite — or connect to Salesforce,
        HubSpot, and hundreds of other tools via{' '}
        <a
          href="https://zapier.com"
          target="_blank"
          rel="noreferrer"
          className={LINK_CLASS}
        >
          Zapier
        </a>
        . The reconstruction work that used to take an hour after every event
        now takes minutes.
      </>
    ),
  },
];

const FAQS = [
  {
    q: 'Do they need to download an app?',
    a: "No. Never. The person receiving your card needs only a phone camera to scan your QR code. No app, no account, no friction on their side. That's intentional — every extra step they have to take is a lead you lose before the conversation even ends.",
  },
  {
    q: 'What if the venue wifi goes down?',
    a: 'Two things work completely offline after you\'ve opened them once. Event Mode saves your card locally the first time you load it — after that, the QR generates on-device with no server call, no wifi, no signal required. Your digital wallet card (Apple Wallet or Google Wallet) is stored on your device the moment you add it, available even in airplane mode. Open Event Mode once before you leave for the venue and you\'re covered. Hold up the screen, they scan, done.',
  },
  {
    q: 'How does Memory Moment work exactly?',
    a: 'Memory Moment requires a contact first — the person needs to have scanned your card so they exist in your leads. Once they do, open that lead, tap Add Memory Moment, and it opens your camera. Take the photo together right there in the moment. LeaderLeads automatically stamps the date, time, and location on the image and emails it to both of you within seconds. No editing, no uploading, no extra steps from either side.',
  },
  {
    q: 'How does it flow into my CRM?',
    a: "Every contact that engages with your card appears in your lead inbox with a timestamp. If you want it fully automatic — contacts flowing into your CRM the moment someone scans your card — that requires LeaderCRM, which is built to work hand-in-hand with LeaderLeads. For any other system (Salesforce, HubSpot, etc.) you export or upload your contacts manually, or set up a Zapier automation yourself. Zapier can handle the transfer once configured, but it is not automatic out of the box.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl="https://cal.leaderhq.io" />
      <SiteNav
        productSuffix="Leads"
        links={[{ label: "How It Works", href: "/how-it-works" }, { label: "Memory Moment", href: "/memory-moment" }, { label: "Solutions", href: "#" }, { label: "Blog", href: "/blog" }]}
        ctaLabel="Get Your Free Card"
        ctaHref="/signup"
        loginHref="https://leads.leaderhq.io/login"
      />
      <main className="flex-1">
        <Hero />
        <Steps />
        <Faqs />
        <CtaBand />
      </main>
      <SiteFooter
        productSuffix="Leads"
        columns={[{"heading":"Product","links":[{"label":"How It Works","href":"/how-it-works"},{"label":"Memory Moment","href":"/memory-moment"},{"label":"Event Mode","href":"/how-it-works#event-mode"},{"label":"Pricing","href":"/pricing"},{"label":"System Status","href":"https://leaderhq.io/status"}]},{"heading":"Solutions","links":[{"label":"Network Marketing","href":"/for-network-marketing"},{"label":"Conferences & Events","href":"/for-conferences"},{"label":"Summer Sales","href":"/for-summer-sales"},{"label":"Sales Teams","href":"/for-teams"},{"label":"Blog & Resources","href":"/blog"}]},{"heading":"Company","links":[{"label":"About LeaderHQ","href":"/about"},{"label":"Contact","href":"/contact"},{"label":"Privacy Policy","href":"/privacy"},{"label":"Terms of Service","href":"/terms"},{"label":"Security & GDPR","href":"/security"}]}]}
      />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="text-white"
      style={{ background: '#0d1b2e' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
            Simple by design
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            From handshake to CRM
            <br />
            in one tap.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Five steps. Under two minutes for setup. Works for the life of the
            card — no maintenance, no reprints, no expiration.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
      <ol className="space-y-10">
        {STEPS.map((step, i) => (
          <FadeIn as="li" key={step.n} delay={i * 60}>
            <div className="flex gap-5 sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green text-lg font-bold text-white shadow-md shadow-brand-green/30">
                {step.n}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">{step.body}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}

function Faqs() {
  return (
    <section
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #0d1b2e 4%, #fff)' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 sm:px-6 sm:py-24">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Questions we hear every time
          </h2>
        </FadeIn>
        <dl className="mt-12 space-y-6">
          {FAQS.map((faq, i) => (
            <FadeIn
              key={faq.q}
              delay={i * 60}
              className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
            >
              <dt className="text-base font-bold text-brand-navy">{faq.q}</dt>
              <dd className="mt-2 leading-relaxed text-zinc-600">{faq.a}</dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section style={{ background: '#0d1b2e' }}>
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Ready to see it in action?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your card is free. Setup is 60 seconds.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            Your next event is the test. Show up with a system instead of a
            stack of paper.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/login`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Your Free Card
            </a>
            <Link
              href="/pricing"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See Pricing →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
