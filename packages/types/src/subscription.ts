/**
 * Identifies which Leader Suite product a subscription or JWT is associated
 * with. `'bundle'` covers all products under a single Stripe subscription.
 */
export type ProductSlug = 'leaderhq' | 'leadersend' | 'leadercal' | 'leaderdc' | 'bundle';

/** Feature tier. `'pro'` unlocks higher limits and advanced features. */
export type Tier = 'starter' | 'pro';

/**
 * Mirrors the Stripe subscription lifecycle.
 * `'past_due'` means the last payment failed but the subscription hasn't been
 * canceled yet — the user should be prompted to update their payment method.
 */
export type SubscriptionStatus = 'active' | 'canceled' | 'past_due';

/** A user's active Stripe subscription for one Leader Suite product. */
export interface Subscription {
  /** Stripe subscription ID (`sub_…`). */
  id: string;
  product: ProductSlug;
  tier: Tier;
  status: SubscriptionStatus;
}
