import type { MetadataRoute } from 'next';

/**
 * PWA manifest — makes LeaderLeads installable ("Add to Home Screen") with a
 * standalone, app-like shell. Next serves this at /manifest.webmanifest.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LeaderLeads',
    short_name: 'LeaderLeads',
    description:
      'Your digital business card that captures every lead and remembers where you met.',
    start_url: '/dashboard',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#0d1b2e',
    categories: ['business', 'productivity'],
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      {
        src: '/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
