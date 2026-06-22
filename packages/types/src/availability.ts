/**
 * Owner-side availability + slot shapes consumed by the resolver and editors.
 *
 * Times are stored as `HH:MM` strings in the owner's IANA timezone — the
 * resolver hydrates them into DateTimes per-day. Slots, by contrast, are
 * always UTC ISO strings on the wire: the viewer's browser is responsible
 * for projecting into the viewer's zone for display.
 */
import { z } from 'zod';

/** `HH:MM` 24-hour, e.g. "09:00" or "17:30". */
export const TimeOfDaySchema = z
  .string()
  .regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'must be HH:MM 24-hour');
export type TimeOfDay = z.infer<typeof TimeOfDaySchema>;

export const TimeIntervalSchema = z
  .object({
    start: TimeOfDaySchema,
    end: TimeOfDaySchema,
  })
  .refine((iv) => iv.start < iv.end, { message: 'start must precede end' });
export type TimeInterval = z.infer<typeof TimeIntervalSchema>;

/** ISO weekday: 0 = Sunday … 6 = Saturday. */
export const WeekdaySchema = z.number().int().min(0).max(6);
export type Weekday = z.infer<typeof WeekdaySchema>;

/**
 * Repeating availability for one day of the week.
 * Multiple intervals model a split day (e.g. "9–12 and 14–17").
 */
export const WeeklyRuleSchema = z.object({
  weekday: WeekdaySchema,
  intervals: z.array(TimeIntervalSchema),
});
export type WeeklyRule = z.infer<typeof WeeklyRuleSchema>;

/** `YYYY-MM-DD` in the owner's timezone. */
export const DateStringSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'must be YYYY-MM-DD');
export type DateString = z.infer<typeof DateStringSchema>;

/**
 * Per-day override. `intervals: null` explicitly marks the day as closed —
 * we need the tri-state because "no override" and "closed all day" mean
 * different things to the resolver.
 */
export const DateOverrideSchema = z.object({
  date: DateStringSchema,
  intervals: z.array(TimeIntervalSchema).nullable(),
});
export type DateOverride = z.infer<typeof DateOverrideSchema>;

/**
 * A recurring deep-work window the owner wants kept free of bookings.
 * Focus blocks are subtracted from weekly rules before slot candidates are
 * generated — they behave like internal busy time, not calendar events.
 * `label` is display-only (e.g. "Deep work").
 */
export const FocusBlockSchema = z.object({
  weekday: WeekdaySchema,
  start: TimeOfDaySchema,
  end: TimeOfDaySchema,
  label: z.string().optional(),
});
export type FocusBlock = z.infer<typeof FocusBlockSchema>;

/**
 * The full availability configuration persisted for one owner.
 *
 * `weekly` and `overrides` define when the owner is open.
 * `bufferBeforeMin` / `bufferAfterMin` expand busy blocks so back-to-back
 * bookings leave travel/prep time.
 * `leadTimeMin` prevents last-minute bookings; `maxFutureDays` caps how far
 * out the calendar grid extends.
 */
export const AvailabilityRulesSchema = z.object({
  ownerUserId: z.string().uuid(),
  /** IANA zone name, e.g. "America/Denver". */
  ianaTz: z.string().min(1),
  weekly: z.array(WeeklyRuleSchema),
  overrides: z.array(DateOverrideSchema),
  /** Minutes to block before an existing event — travel/prep buffer. */
  bufferBeforeMin: z.number().int().min(0),
  /** Minutes to block after an existing event — wind-down buffer. */
  bufferAfterMin: z.number().int().min(0),
  focusBlocks: z.array(FocusBlockSchema),
  /**
   * If set, no slot may start before this time on any day — used to protect
   * mornings ("no meetings before 10am") without rewriting every weekly rule.
   */
  noMeetingMorningsUntil: TimeOfDaySchema.optional(),
  /** Minimum notice before a slot can be booked, in minutes. */
  leadTimeMin: z.number().int().min(0),
  /** How many days ahead the booking grid is visible; capped at 365. */
  maxFutureDays: z.number().int().min(1).max(365),
});
export type AvailabilityRules = z.infer<typeof AvailabilityRulesSchema>;

/** Resolved bookable slot — UTC on the wire, always. */
export const SlotSchema = z.object({
  startIso: z.string().datetime({ offset: true }),
  endIso: z.string().datetime({ offset: true }),
});
export type Slot = z.infer<typeof SlotSchema>;
