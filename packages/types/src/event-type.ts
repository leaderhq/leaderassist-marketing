/**
 * EventType — the bookable meeting template an owner publishes.
 *
 * Shared between the API (persistence + validation), the dashboard editor
 * (form binding), and the resolver (slot math). zod is the single source of
 * truth so every consumer agrees on the same shape, including runtime guards
 * at trust boundaries.
 */
import { z } from 'zod';

export const LocationTypeSchema = z.enum([
  'in_person',
  'phone',
  'google_meet',
  'zoom',
  'custom',
]);
export type LocationType = z.infer<typeof LocationTypeSchema>;

export const CustomQuestionTypeSchema = z.enum([
  'short',
  'long',
  'select',
  'phone',
  'email',
]);
export type CustomQuestionType = z.infer<typeof CustomQuestionTypeSchema>;

/**
 * A question the owner adds to their booking form.
 * `options` is only meaningful when `type === 'select'`; it should be omitted
 * for all other question types.
 */
export const CustomQuestionSchema = z.object({
  id: z.string().min(1),
  /** Prompt shown to the booker, e.g. "What is this meeting about?". */
  label: z.string().min(1),
  type: CustomQuestionTypeSchema,
  required: z.boolean(),
  /** Choices for `type === 'select'` questions. */
  options: z.array(z.string()).optional(),
});
export type CustomQuestion = z.infer<typeof CustomQuestionSchema>;

/**
 * URL-safe slug. Lowercase + hyphen-only; the public booking URL is
 * `/{ownerHandle}/{slug}`, so any character that needs encoding gets rejected
 * here before it can confuse downstream routing or analytics.
 */
export const EventTypeSlugSchema = z
  .string()
  .min(1)
  .max(80)
  .regex(/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, 'must be lowercase, hyphen-separated');

export const EventTypeSchema = z.object({
  id: z.string().uuid(),
  ownerUserId: z.string().uuid(),
  slug: EventTypeSlugSchema,
  name: z.string().min(1).max(120),
  durationMinutes: z.number().int().min(5).max(480),
  color: z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/, 'must be a 6-digit hex color (e.g. #0d1b2e)'),
  locationType: LocationTypeSchema,
  customQuestions: z.array(CustomQuestionSchema),
  /** If set, the booker is sent here after confirming — overrides the default confirmation page. */
  redirectUrl: z.string().url().optional(),
  /**
   * Grid cadence — the slot grid advances by this many minutes.
   * A 30-minute duration with a 15-minute interval offers 9:00, 9:15, 9:30 …
   */
  intervalMinutes: z.number().int().min(5).max(120),
  /** When true, the event type is unlisted — only reachable via direct link. */
  secret: z.boolean(),
  /** Optional cap on confirmed bookings per owner-local day. */
  maxPerDay: z.number().int().positive().optional(),
  /** How close to "now" a viewer can book — protects against ambush bookings. */
  minLeadTimeMinutes: z.number().int().min(0),
  /** How far into the future the booking grid extends. */
  maxFutureDays: z.number().int().min(1).max(365),
});
export type EventType = z.infer<typeof EventTypeSchema>;
