/* LeaderLeads service worker — installability + graceful offline.
 *
 * Deliberately conservative: it does NOT cache HTML/API/auth responses (those
 * are dynamic and user-specific). It only precaches the offline fallback and
 * serves it when a navigation fails with no network. The fetch handler's
 * presence is what makes the app installable. Bump CACHE to invalidate. */
const CACHE = 'leaderleads-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.add(OFFLINE_URL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  // Only intervene on page navigations: try the network, fall back to the
  // offline page when there's no connection. Everything else passes through.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match(OFFLINE_URL)),
    );
  }
});
