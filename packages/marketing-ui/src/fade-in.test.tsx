// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { FadeIn } from './fade-in';

// Shared IntersectionObserver mock — lets individual tests trigger callbacks.
type IOCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
let capturedCallback: IOCallback | null = null;
let observeMock: ReturnType<typeof vi.fn>;
let disconnectMock: ReturnType<typeof vi.fn>;

function installIOMock() {
  observeMock = vi.fn();
  disconnectMock = vi.fn();
  capturedCallback = null;

  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(cb: IOCallback) {
        capturedCallback = cb;
      }
      observe = observeMock;
      disconnect = disconnectMock;
      unobserve = vi.fn();
    },
  );
}

function fireIntersection(isIntersecting: boolean) {
  act(() => {
    capturedCallback?.(
      [{ isIntersecting } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );
  });
}

beforeEach(installIOMock);
afterEach(() => vi.unstubAllGlobals());

describe('FadeIn', () => {
  it('renders its children', () => {
    render(<FadeIn>Hello world</FadeIn>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('starts with opacity 0 and a translateY transform before the element enters the viewport', () => {
    render(<FadeIn data-testid="box">Content</FadeIn>);

    const el = screen.getByText('Content');
    expect(el).toHaveStyle({ opacity: '0', transform: 'translateY(16px)' });
  });

  it('becomes visible (opacity 1, no transform) when IntersectionObserver fires with isIntersecting true', () => {
    render(<FadeIn>Content</FadeIn>);

    fireIntersection(true);

    expect(screen.getByText('Content')).toHaveStyle({ opacity: '1', transform: 'none' });
  });

  it('stays hidden when IntersectionObserver fires with isIntersecting false', () => {
    render(<FadeIn>Hidden</FadeIn>);

    fireIntersection(false);

    expect(screen.getByText('Hidden')).toHaveStyle({ opacity: '0' });
  });

  it('disconnects the observer once the element becomes visible', () => {
    render(<FadeIn>Content</FadeIn>);

    fireIntersection(true);

    expect(disconnectMock).toHaveBeenCalledOnce();
  });

  it('shows content immediately when IntersectionObserver is not available (SSR fallback)', () => {
    vi.stubGlobal('IntersectionObserver', undefined);

    render(<FadeIn>SSR content</FadeIn>);

    expect(screen.getByText('SSR content')).toHaveStyle({ opacity: '1' });
  });

  it('renders as a <div> by default', () => {
    const { container } = render(<FadeIn>Div content</FadeIn>);

    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('renders as <section> when as="section"', () => {
    const { container } = render(<FadeIn as="section">Section content</FadeIn>);

    expect(container.firstChild?.nodeName).toBe('SECTION');
  });

  it('renders as <li> when as="li"', () => {
    const { container } = render(
      <ul>
        <FadeIn as="li">List item</FadeIn>
      </ul>,
    );

    expect(container.querySelector('li')).toBeInTheDocument();
  });

  it('forwards className to the wrapper element', () => {
    const { container } = render(<FadeIn className="my-custom-class">X</FadeIn>);

    expect(container.firstChild).toHaveClass('my-custom-class');
  });

  it('applies the delay in the transition-delay style', () => {
    render(<FadeIn delay={200}>Delayed</FadeIn>);

    expect(screen.getByText('Delayed')).toHaveStyle({ transitionDelay: '200ms' });
  });
});
