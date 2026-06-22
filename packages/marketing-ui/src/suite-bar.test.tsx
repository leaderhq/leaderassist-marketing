// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SuiteBar } from './suite-bar';

const APP_URL = 'https://leads.leaderhq.io';

describe('SuiteBar', () => {
  it('renders a Client Login link', () => {
    render(<SuiteBar appUrl={APP_URL} />);

    expect(screen.getByRole('link', { name: /client login/i })).toBeInTheDocument();
  });

  it('points the login link to the appUrl prop', () => {
    render(<SuiteBar appUrl={APP_URL} />);

    expect(screen.getByRole('link', { name: /client login/i })).toHaveAttribute(
      'href',
      `${APP_URL}/login`,
    );
  });

  it('uses a custom loginLabel when provided', () => {
    render(<SuiteBar appUrl={APP_URL} loginLabel="Member Login" />);

    expect(screen.getByRole('link', { name: /member login/i })).toBeInTheDocument();
  });

  it('renders correctly for a different product appUrl', () => {
    render(<SuiteBar appUrl="https://task.leaderhq.io" />);

    expect(screen.getByRole('link', { name: /client login/i })).toHaveAttribute(
      'href',
      'https://task.leaderhq.io/login',
    );
  });
});
