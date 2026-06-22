/** Minimal user record returned from `/api/core/auth/me`. */
export interface User {
  /** UUID primary key in `core.users`. */
  id: string;
  email: string;
  /** Display name; null when the user hasn't set one yet. */
  name: string | null;
}

/**
 * Claims embedded in every Leader Suite JWT.
 *
 * `sub` is the user's UUID from `core.users`.
 * `product` is the `ProductSlug` the token is scoped to — a token issued for
 * `"leadertask"` must not be accepted by LeaderLeads middleware.
 */
export interface JwtPayload {
  /** User UUID (`core.users.id`). */
  sub: string;
  email: string;
  /** The `ProductSlug` this token is scoped to. Absent on bare identity tokens. */
  product?: string;
  /** Issued-at epoch seconds (standard JWT claim). */
  iat?: number;
  /** Expiry epoch seconds (standard JWT claim). */
  exp?: number;
}

/**
 * Body sent to `/api/core/auth/exchange` to trade a cross-app SSO token for a
 * product-scoped session JWT.
 *
 * `product` must be a valid `ProductSlug`. Passing the wrong slug produces a
 * valid-looking token scoped to the wrong product — callers should derive this
 * from the app's own config, not from user input.
 */
export interface SsoCallbackParams {
  /** Short-lived SSO token issued by LeaderHQ after the user authenticates. */
  token: string;
  /** Target product slug, e.g. `"leadertask"`. */
  product: string;
}
