/**
 * Pure CSS/SVG product mocks for the LeaderCal marketing page.
 * No stock photos, no AI faces. The CalendarBookingMock shows what a leader's
 * booking page actually looks like — profile card, meeting types, calendar
 * grid, time slots. Decorative only: hidden from assistive tech.
 */

const NAVY = '#0d1b2e';
const GREEN = '#5cb85c';

/** A calendar grid cell for the booking mock. */
function CalCell({
  day,
  active,
  selected,
  muted,
}: {
  day: number | null;
  active?: boolean;
  selected?: boolean;
  muted?: boolean;
}) {
  if (!day) return <div />;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: '50%',
        fontSize: 11,
        fontWeight: selected ? 700 : active ? 600 : 400,
        color: selected ? '#fff' : active ? NAVY : '#a1a1aa',
        background: selected ? GREEN : active ? 'color-mix(in srgb, #5cb85c 12%, transparent)' : 'transparent',
        cursor: active ? 'pointer' : 'default',
      }}
    >
      {day}
    </div>
  );
}

/**
 * A booking calendar mock — the hero visual for LeaderCal. Shows a leader's
 * public booking page: profile header, meeting type pills, June calendar grid,
 * and available time slots for the selected day.
 */
export function CalendarBookingMock() {
  // June 2026 starts on Monday (ISO week layout: Mon–Sun)
  const weeks = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, null, null, null, null, null],
  ] as (number | null)[][];

  // Available days (has open slots)
  const available = new Set([3, 5, 10, 12, 17, 19, 24, 26]);
  const selectedDay = 17;

  return (
    <div
      aria-hidden
      style={{
        width: 300,
        maxWidth: '100%',
        background: '#fff',
        borderRadius: 20,
        boxShadow: `0 25px 50px -12px ${NAVY}40, 0 8px 20px -8px ${NAVY}20`,
        overflow: 'hidden',
        userSelect: 'none',
        fontFamily: 'inherit',
      }}
    >
      {/* Profile header */}
      <div style={{ background: NAVY, padding: '18px 20px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Avatar placeholder */}
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #5cb85c 0%, #0160ed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 15,
              fontWeight: 700,
              color: '#fff',
              flexShrink: 0,
              border: '2px solid rgba(255,255,255,0.25)',
            }}
          >
            AL
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
              Alex Leader
            </p>
            <p style={{ margin: 0, fontSize: 10, color: '#94a3b8', lineHeight: 1.4 }}>
              VP of Sales · Summit Team
            </p>
          </div>
        </div>
      </div>

      {/* Meeting type pills */}
      <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid #f4f4f5' }}>
        <p style={{ margin: '0 0 8px', fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#a1a1aa' }}>
          Choose a meeting type
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[
            { label: 'Executive 1:1', duration: '30 min', selected: true },
            { label: 'Strategy Session', duration: '60 min', selected: false },
            { label: 'Board Prep', duration: '90 min', selected: false },
          ].map((t) => (
            <div
              key={t.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '7px 10px',
                borderRadius: 8,
                border: t.selected ? `1.5px solid ${GREEN}` : '1.5px solid #e4e4e7',
                background: t.selected ? 'color-mix(in srgb, #5cb85c 8%, #fff)' : '#fafafa',
              }}
            >
              <span style={{ fontSize: 11, fontWeight: t.selected ? 600 : 400, color: t.selected ? NAVY : '#52525b' }}>
                {t.label}
              </span>
              <span style={{ fontSize: 10, color: t.selected ? GREEN : '#a1a1aa', fontWeight: 500 }}>
                {t.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div style={{ padding: '12px 16px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: NAVY }}>June 2026</span>
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: '#f4f4f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#71717a' }}>‹</div>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: '#f4f4f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#71717a' }}>›</div>
          </div>
        </div>

        {/* Day labels Mon–Sun */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <div key={i} style={{ textAlign: 'center', fontSize: 9, fontWeight: 600, color: '#a1a1aa' }}>{d}</div>
          ))}
        </div>

        {/* Calendar cells */}
        {weeks.map((week, wi) => (
          <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 2 }}>
            {week.map((day, di) => (
              <div key={di} style={{ display: 'flex', justifyContent: 'center' }}>
                <CalCell
                  day={day}
                  active={day !== null && available.has(day)}
                  selected={day === selectedDay}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Time slots for selected day */}
      <div style={{ padding: '6px 16px 14px', borderTop: '1px solid #f4f4f5' }}>
        <p style={{ margin: '0 0 6px', fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#a1a1aa' }}>
          Wed, Jun 17 — Available times
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['9:00 AM', '10:30 AM', '2:00 PM'].map((t, i) => (
            <div
              key={t}
              style={{
                padding: '6px 10px',
                borderRadius: 7,
                background: i === 0 ? GREEN : '#f4f4f5',
                fontSize: 10,
                fontWeight: 600,
                color: i === 0 ? '#fff' : '#52525b',
                textAlign: 'center',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
