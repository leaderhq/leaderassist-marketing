// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MarketingButton } from './marketing-button';

vi.mock('next/link', () => ({
  default: ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  ),
}));

describe('MarketingButton', () => {
  it('renders a <button> when no href is provided', () => {
    render(<MarketingButton>Click me</MarketingButton>);

    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('renders a link when href is provided', () => {
    render(<MarketingButton href="/pricing">See Pricing</MarketingButton>);

    const link = screen.getByRole('link', { name: /see pricing/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/pricing');
  });

  it('fires onClick when the button is clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<MarketingButton onClick={onClick}>Go</MarketingButton>);
    await user.click(screen.getByRole('button', { name: /go/i }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('primary variant carries the brand-green class', () => {
    render(<MarketingButton>Primary</MarketingButton>);

    expect(screen.getByRole('button')).toHaveClass('bg-brand-green');
  });

  it('secondary variant carries the brand-navy class', () => {
    render(<MarketingButton variant="secondary">Secondary</MarketingButton>);

    expect(screen.getByRole('button')).toHaveClass('bg-brand-navy');
  });

  it('merges an extra className onto the element', () => {
    render(<MarketingButton className="mt-4">Styled</MarketingButton>);

    expect(screen.getByRole('button')).toHaveClass('mt-4');
  });

  it('renders children content', () => {
    render(<MarketingButton>Book a demo</MarketingButton>);

    expect(screen.getByText('Book a demo')).toBeInTheDocument();
  });
});
