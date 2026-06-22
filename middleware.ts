import { NextRequest, NextResponse } from 'next/server';

/**
 * Marketing-only middleware — all routes are public.
 *
 * Authentication was removed when the app routes (dashboard, login, signup,
 * etc.) were split into the separate leader-leads-app repo. This site hosts
 * only the public marketing pages and the public card viewer (/c/[slug]).
 */
export default function middleware(_req: NextRequest): NextResponse {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|sw.js|offline.html|brand/|marketing/|.*\\.svg$|.*\\.png$|.*\\.jpe?g$|.*\\.webmanifest$).*)'],
};
