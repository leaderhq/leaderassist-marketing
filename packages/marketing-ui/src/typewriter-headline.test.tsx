// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { TypewriterHeadline } from './typewriter-headline';

beforeEach(() => vi.useFakeTimers());
afterEach(() => {
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});

describe('TypewriterHeadline', () => {
  it('renders the static "Never lose a lead" prefix', () => {
    render(<TypewriterHeadline />);

    expect(screen.getByText('Never lose a lead')).toBeInTheDocument();
  });

  it('renders a blinking cursor that is hidden from assistive technology', () => {
    render(<TypewriterHeadline />);

    // The cursor is purely decorative — it must be aria-hidden.
    const cursor = document.querySelector('.typewriter-cursor');
    expect(cursor).toBeInTheDocument();
    expect(cursor).toHaveAttribute('aria-hidden', 'true');
  });

  it('starts with an empty animated phrase', () => {
    render(<TypewriterHeadline />);

    // The rotating span contains only the cursor; no phrase text yet.
    const rotateSpan = document.querySelector('.headline-rotate');
    expect(rotateSpan?.textContent?.replace('', '').trim()).toBe('');
  });

  it('types the first character after the initial delay', () => {
    render(<TypewriterHeadline />);

    // Initial pause before typing starts (600ms)
    act(() => vi.advanceTimersByTime(600));
    // One character at SPEED_TYPE (68ms)
    act(() => vi.advanceTimersByTime(68));

    const rotateSpan = document.querySelector('.headline-rotate');
    // The first phrase is "at an event." — first char is "a"
    expect(rotateSpan?.textContent?.replace('', '')).toMatch(/^a/i);
  });

  it('builds up the full first phrase one character at a time', () => {
    render(<TypewriterHeadline />);

    const FIRST_PHRASE = 'at an event.';
    const SPEED_TYPE = 68;
    const INITIAL_DELAY = 600;

    act(() => vi.advanceTimersByTime(INITIAL_DELAY + SPEED_TYPE * FIRST_PHRASE.length));

    const rotateSpan = document.querySelector('.headline-rotate');
    expect(rotateSpan?.textContent?.replace('', '')).toBe(FIRST_PHRASE);
  });

  it('starts deleting after the hold pause and removes characters', () => {
    render(<TypewriterHeadline />);

    const FIRST_PHRASE = 'at an event.';
    const SPEED_TYPE = 68;
    const SPEED_DELETE = 36;
    const INITIAL_DELAY = 600;
    const PAUSE_AFTER = 2200;

    // Type the full first phrase
    act(() => vi.advanceTimersByTime(INITIAL_DELAY + SPEED_TYPE * FIRST_PHRASE.length));
    // Wait through the hold pause + one delete tick
    act(() => vi.advanceTimersByTime(PAUSE_AFTER + SPEED_DELETE));

    const rotateSpan = document.querySelector('.headline-rotate');
    const text = rotateSpan?.textContent?.replace('', '') ?? '';
    // Should have deleted one character — shorter than the full phrase
    expect(text.length).toBeLessThan(FIRST_PHRASE.length);
  });

  it('applies the className prop to the <h1> element', () => {
    render(<TypewriterHeadline className="text-5xl font-extrabold" />);

    const h1 = document.querySelector('h1');
    expect(h1).toHaveClass('text-5xl', 'font-extrabold');
  });

  it('cleans up the timer on unmount without throwing', () => {
    const { unmount } = render(<TypewriterHeadline />);

    act(() => vi.advanceTimersByTime(600));
    // Unmounting while a timer is pending should not cause errors.
    expect(() => unmount()).not.toThrow();
  });
});
