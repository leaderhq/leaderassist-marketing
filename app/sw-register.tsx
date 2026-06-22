'use client';

import { useEffect } from 'react';

/**
 * Registers the service worker on the client (production only — a SW in dev
 * fights HMR). Renders nothing. Failures are swallowed: a missing SW just means
 * no offline fallback, never a broken app.
 */
export function SwRegister() {
  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' &&
      'serviceWorker' in navigator
    ) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);
  return null;
}
