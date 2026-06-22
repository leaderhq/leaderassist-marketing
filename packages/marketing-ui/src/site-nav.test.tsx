// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SiteNav } from './site-nav';
import type { SiteNavLink } from './site-nav';

// --- module mocks --------------------------------------------------------

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    className,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    [k: string]: unknown;
  }) => (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  ),
}));

const mockUsePathname = vi.fn<() => string>();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

// --- helpers -------------------------------------------------------------

const NAV_LINKS: SiteNavLink[] = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '#', label: 'Solutions' },
  { href: '/blog', label: 'Blog' },
];

const SOLUTIONS_LINKS: SiteNavLink[] = [
  { href: '/for-conferences', label: 'Conferences' },
  { href: '/for-teams', label: 'Teams' },
];

function setup(pathname = '/') {
  mockUsePathname.mockReturnValue(pathname);
  const user = userEvent.setup();
  return { user };
}

// --- tests ---------------------------------------------------------------

describe('SiteNav', () => {
  beforeEach(() => mockUsePathname.mockReturnValue('/'));

  it('renders the wordmark as a home link', () => {
    setup();
    render(<SiteNav productSuffix="Leads" links={NAV_LINKS} />);

    expect(screen.getByRole('link', { name: /leaderleads home/i })).toHaveAttribute('href', '/');
  });

  it('uses the productSuffix in the wordmark alt text', () => {
    setup();
    render(<SiteNav productSuffix="Cal" links={NAV_LINKS} />);

    expect(screen.getByAltText('LeaderCal')).toBeInTheDocument();
  });

  it('renders all provided nav links on desktop', () => {
    setup();
    render(<SiteNav productSuffix="Leads" links={NAV_LINKS} />);

    expect(screen.getByRole('link', { name: 'How It Works' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
  });

  it('renders the CTA button with the correct label and href', () => {
    setup();
    render(
      <SiteNav
        productSuffix="Leads"
        links={NAV_LINKS}
        ctaLabel="Get Started"
        ctaHref="/signup"
      />,
    );

    const ctaLinks = screen.getAllByRole('link', { name: /get started/i });
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1);
    expect(ctaLinks[0]).toHaveAttribute('href', '/signup');
  });

  it('mobile menu is hidden initially', () => {
    setup();
    render(<SiteNav productSuffix="Leads" links={NAV_LINKS} />);

    // The mobile nav panel only appears when open; Blog should not be in a mobile panel
    expect(screen.queryByRole('link', { name: 'Blog', hidden: false })).toBeInTheDocument();
    // Hamburger button starts with aria-expanded false
    expect(screen.getByRole('button', { name: /toggle navigation/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('hamburger click opens the mobile menu', async () => {
    const { user } = setup();
    render(<SiteNav productSuffix="Leads" links={NAV_LINKS} loginHref="/login" />);

    await user.click(screen.getByRole('button', { name: /toggle navigation/i }));

    expect(screen.getByRole('button', { name: /toggle navigation/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(screen.getByRole('link', { name: /client login/i })).toBeInTheDocument();
  });

  it('clicking a nav link in the mobile menu closes the menu', async () => {
    const { user } = setup();
    render(<SiteNav productSuffix="Leads" links={NAV_LINKS} />);

    await user.click(screen.getByRole('button', { name: /toggle navigation/i }));

    // Two "Blog" links exist when mobile menu is open: [0] = desktop nav, [1] = mobile panel.
    // Use fireEvent to fire only the click handler without triggering jsdom navigation.
    fireEvent.click(screen.getAllByRole('link', { name: 'Blog' })[1]!);

    expect(screen.getByRole('button', { name: /toggle navigation/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('Solutions dropdown is not rendered when solutionsLinks is empty', () => {
    setup();
    render(<SiteNav productSuffix="Leads" links={NAV_LINKS} solutionsLinks={[]} />);

    expect(screen.queryByRole('button', { name: /solutions/i })).not.toBeInTheDocument();
  });

  it('Solutions dropdown opens on mouse enter', async () => {
    const { user } = setup();
    render(
      <SiteNav
        productSuffix="Leads"
        links={NAV_LINKS}
        solutionsLinks={SOLUTIONS_LINKS}
      />,
    );

    await user.hover(screen.getByRole('button', { name: /solutions/i }));

    // Items inside the dropdown carry role="menuitem" per the component markup.
    expect(screen.getByRole('menuitem', { name: 'Conferences' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Teams' })).toBeInTheDocument();
  });

  it('Solutions dropdown closes when Escape is pressed', async () => {
    const { user } = setup();
    render(
      <SiteNav
        productSuffix="Leads"
        links={NAV_LINKS}
        solutionsLinks={SOLUTIONS_LINKS}
      />,
    );

    await user.hover(screen.getByRole('button', { name: /solutions/i }));
    expect(screen.getByRole('menuitem', { name: 'Conferences' })).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByRole('menuitem', { name: 'Conferences' })).not.toBeInTheDocument();
  });

  it('Solutions dropdown closes when clicking outside', () => {
    setup();
    render(
      <div>
        <SiteNav
          productSuffix="Leads"
          links={NAV_LINKS}
          solutionsLinks={SOLUTIONS_LINKS}
        />
        <p data-testid="outside">Outside</p>
      </div>,
    );

    // Use fireEvent.click so only the onClick handler fires — userEvent.click
    // cascades a mouseenter first which toggles the state back to closed.
    fireEvent.click(screen.getByRole('button', { name: /solutions/i }));
    expect(screen.getByRole('menuitem', { name: 'Conferences' })).toBeInTheDocument();

    // The component listens for `mousedown` on document to detect outside clicks.
    fireEvent.mouseDown(screen.getByTestId('outside'));

    expect(screen.queryByRole('menuitem', { name: 'Conferences' })).not.toBeInTheDocument();
  });

  it('marks the exact "/" path as active only on the home route', () => {
    setup('/');
    const { rerender } = render(
      <SiteNav
        productSuffix="Leads"
        links={[{ href: '/', label: 'Home' }, ...NAV_LINKS]}
      />,
    );

    // Home link is active on "/"
    expect(screen.getAllByRole('link', { name: 'Home' })[0]).toHaveClass('text-brand-green');

    // On a sub-page, "/" should not be active
    mockUsePathname.mockReturnValue('/blog');
    rerender(
      <SiteNav
        productSuffix="Leads"
        links={[{ href: '/', label: 'Home' }, ...NAV_LINKS]}
      />,
    );
    expect(screen.getAllByRole('link', { name: 'Home' })[0]).not.toHaveClass('text-brand-green');
  });

  it('marks a nav link active when the pathname starts with its href', () => {
    setup('/blog/some-post');
    render(<SiteNav productSuffix="Leads" links={NAV_LINKS} />);

    // "Blog" link (href="/blog") should be active on "/blog/some-post"
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveClass('text-brand-green');
  });

  it('renders the login link with the correct href in the mobile menu', async () => {
    const { user } = setup();
    render(
      <SiteNav
        productSuffix="Leads"
        links={NAV_LINKS}
        loginHref="https://leads.leaderhq.io/login"
      />,
    );

    await user.click(screen.getByRole('button', { name: /toggle navigation/i }));

    expect(screen.getByRole('link', { name: /client login/i })).toHaveAttribute(
      'href',
      'https://leads.leaderhq.io/login',
    );
  });
});
