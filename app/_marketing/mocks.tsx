const NAVY = '#06163E';
const GREEN = '#5CAC23';
const BLUE = '#1862EA';

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

const MESSAGES: ChatMessage[] = [
  {
    role: 'user',
    text: 'Who on my team needs follow-up today?',
  },
  {
    role: 'assistant',
    text: '3 leads from last week have no follow-up task yet: Alex Leader (Summit), Maria Chen (Apex), and Tom Bridges (Vertex). Want me to create tasks for all three?',
  },
  {
    role: 'user',
    text: 'Draft a follow-up message for Alex.',
  },
  {
    role: 'assistant',
    text: 'Hey Alex — great connecting at Summit last week. Wanted to follow up and see if you had any questions about getting started. Happy to jump on a quick call this week. Let me know what works!',
  },
];

export function AiChatMock() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 340,
        maxWidth: '100%',
        background: '#f6f8fb',
        borderRadius: 18,
        boxShadow: '0 24px 64px rgba(6,22,62,0.18), 0 2px 8px rgba(6,22,62,0.08)',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* App header */}
      <div style={{ background: NAVY, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ width: 22, height: 3, borderRadius: 2, background: BLUE }} />
          <div style={{ width: 17, height: 3, borderRadius: 2, background: '#fff', marginLeft: 3 }} />
          <div style={{ width: 12, height: 3, borderRadius: 2, background: GREEN, marginLeft: 6 }} />
        </div>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: '-0.3px' }}>
          Leader<span style={{ color: GREEN }}>Assist</span>
        </span>
        <div style={{ flex: 1 }} />
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700, color: '#fff',
        }}>JD</div>
      </div>

      {/* Context bar */}
      <div style={{ padding: '8px 14px', background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: 6 }}>
        {['LeaderLeads', 'LeaderCal', 'LeaderTask'].map((ctx, i) => (
          <div key={ctx} style={{
            padding: '2px 8px', borderRadius: 20, fontSize: 10, fontWeight: 600,
            background: i === 0 ? `${GREEN}18` : '#f3f4f6',
            color: i === 0 ? GREEN : '#9ca3af',
            border: i === 0 ? `1px solid ${GREEN}40` : '1px solid #e5e7eb',
          }}>{ctx}</div>
        ))}
      </div>

      {/* Chat messages */}
      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {MESSAGES.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
            alignItems: 'flex-end',
            gap: 8,
          }}>
            {msg.role === 'assistant' && (
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                background: NAVY, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill={GREEN} />
                </svg>
              </div>
            )}
            <div style={{
              maxWidth: '80%',
              padding: '8px 12px',
              borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
              background: msg.role === 'user' ? BLUE : '#fff',
              border: msg.role === 'assistant' ? '1px solid #e5e7eb' : 'none',
              fontSize: 12,
              lineHeight: 1.5,
              color: msg.role === 'user' ? '#fff' : NAVY,
              fontWeight: msg.role === 'user' ? 500 : 400,
            }}>
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%',
            background: NAVY, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill={GREEN} />
            </svg>
          </div>
          <div style={{
            padding: '10px 14px', borderRadius: '14px 14px 14px 4px',
            background: '#fff', border: '1px solid #e5e7eb',
            display: 'flex', gap: 4, alignItems: 'center',
          }}>
            {[0, 1, 2].map((d) => (
              <div key={d} style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#d1d5db',
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div style={{
        padding: '10px 14px',
        borderTop: '1px solid #e5e7eb',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <div style={{
          flex: 1, padding: '8px 12px',
          borderRadius: 20, border: '1px solid #e5e7eb',
          fontSize: 12, color: '#9ca3af',
          background: '#f9fafb',
        }}>
          Ask LeaderAssist anything…
        </div>
        <div style={{
          width: 30, height: 30, borderRadius: '50%',
          background: GREEN,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
