// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SiteFooter } from './site-footer';
import type { SiteFooterColumn } from './site-footer';

vi.mock('next/link', () => ({
  default: ({ href, children, className, ...rest }: { href: string; children: React.ReactNode; className?: string; [k: string]: unknown }) => (
    <a href={href} className={className} {...rest}>{children}</a>
  ),
}));

const COLUMNS: SiteFooterColumn[] = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

describe('SiteFooter', () => {
  it('renders the product wordmark as a link to /', () => {
    render(<SiteFooter productSuffix="Leads" columns={COLUMNS} />);

    const wordmarkLink = screen.getByRole('link', { name: /leaderleads home/i });
    expect(wordmarkLink).toHaveAttribute('href', '/');
  });

  it('renders each column heading', () => {
    render(<SiteFooter productSuffix="Leads" columns={COLUMNS} />);

    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
  });

  it('renders every link in every column', () => {
    render(<SiteFooter productSuffix="Leads" columns={COLUMNS} />);

    expect(screen.getByRole('link', { name: 'How It Works' })).toHaveAttribute('href', '/how-it-works');
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '/pricing');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
  });

  it('renders the default address', () => {
    render(<SiteFooter productSuffix="Leads" columns={COLUMNS} />);

    expect(screen.getByText(/30 N. Gould Street/)).toBeInTheDocument();
    expect(screen.getByText(/Sheridan, WY 82801/)).toBeInTheDocument();
  });

  it('renders a custom address when provided', () => {
    render(
      <SiteFooter
        productSuffix="Leads"
        columns={COLUMNS}
        address={'123 Main St\nAnytown, CA 90210'}
      />,
    );

    expect(screen.getByText(/123 Main St/)).toBeInTheDocument();
    expect(screen.getByText(/Anytown, CA 90210/)).toBeInTheDocument();
  });

  it('renders the support email as a mailto link', () => {
    render(<SiteFooter productSuffix="Leads" columns={COLUMNS} />);

    const emailLink = screen.getByRole('link', { name: /support@leaderhq\.io/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:support@leaderhq.io');
  });

  it('renders a custom support email when provided', () => {
    render(
      <SiteFooter
        productSuffix="Leads"
        columns={COLUMNS}
        supportEmail="help@example.com"
      />,
    );

    expect(screen.getByRole('link', { name: /help@example\.com/i })).toHaveAttribute(
      'href',
      'mailto:help@example.com',
    );
  });

  it('includes the current year in the copyright notice', () => {
    render(<SiteFooter productSuffix="Leads" columns={COLUMNS} />);

    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('uses the productSuffix in the wordmark alt text', () => {
    render(<SiteFooter productSuffix="Cal" columns={COLUMNS} />);

    expect(screen.getByAltText('LeaderCal')).toBeInTheDocument();
  });
});
