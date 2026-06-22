const NAVY = '#0d1b2e';
const GREEN = '#5cb85c';
const BLUE = '#1862ea';

interface TaskItem {
  title: string;
  status: 'todo' | 'in_progress' | 'done';
  priority: 'high' | 'medium' | 'low';
  assignee: string;
  due: string;
}

const TASKS: TaskItem[] = [
  { title: 'Follow up with Alex Leader', status: 'in_progress', priority: 'high', assignee: 'JD', due: 'Today' },
  { title: 'Send proposal to Summit Team', status: 'todo', priority: 'high', assignee: 'ML', due: 'Tomorrow' },
  { title: 'Review Q2 pipeline report', status: 'todo', priority: 'medium', assignee: 'JD', due: 'Jun 24' },
  { title: 'Onboard Northwind reps', status: 'done', priority: 'medium', assignee: 'SA', due: 'Jun 20' },
  { title: 'Schedule board prep call', status: 'todo', priority: 'low', assignee: 'JD', due: 'Jun 27' },
];

const STATUS_LABEL: Record<TaskItem['status'], string> = {
  todo: 'To Do',
  in_progress: 'In Progress',
  done: 'Done',
};

const PRIORITY_COLOR: Record<TaskItem['priority'], string> = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#6b7280',
};

export function TaskListMock() {
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
      {/* App header bar */}
      <div style={{ background: NAVY, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ width: 22, height: 3, borderRadius: 2, background: BLUE }} />
          <div style={{ width: 17, height: 3, borderRadius: 2, background: '#fff', marginLeft: 3 }} />
          <div style={{ width: 12, height: 3, borderRadius: 2, background: GREEN, marginLeft: 6 }} />
        </div>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: '-0.3px' }}>
          Leader<span style={{ color: GREEN }}>Task</span>
        </span>
        <div style={{ flex: 1 }} />
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700, color: '#fff',
        }}>JD</div>
      </div>

      {/* Workspace & list header */}
      <div style={{ padding: '12px 18px 8px', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          My Workspace
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginTop: 2 }}>My Tasks</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          {['All', 'In Progress', 'High Priority'].map((tab, i) => (
            <div
              key={tab}
              style={{
                padding: '3px 10px',
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 600,
                background: i === 0 ? NAVY : '#f3f4f6',
                color: i === 0 ? '#fff' : '#6b7280',
              }}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Task list */}
      <div style={{ padding: '8px 0' }}>
        {TASKS.map((task, i) => (
          <div
            key={task.title}
            style={{
              padding: '9px 18px',
              borderBottom: i < TASKS.length - 1 ? '1px solid #f0f2f7' : 'none',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              opacity: task.status === 'done' ? 0.55 : 1,
            }}
          >
            {/* Status circle */}
            <div style={{
              marginTop: 2,
              width: 16,
              height: 16,
              borderRadius: '50%',
              border: task.status === 'done' ? 'none' : `2px solid ${task.status === 'in_progress' ? BLUE : '#d1d5db'}`,
              background: task.status === 'done' ? GREEN : task.status === 'in_progress' ? `${BLUE}18` : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {task.status === 'done' && (
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {task.status === 'in_progress' && (
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: BLUE }} />
              )}
            </div>

            {/* Task content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 12.5,
                fontWeight: 600,
                color: task.status === 'done' ? '#9ca3af' : NAVY,
                textDecoration: task.status === 'done' ? 'line-through' : 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {task.title}
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 4, alignItems: 'center' }}>
                {/* Priority dot */}
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: PRIORITY_COLOR[task.priority],
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: 10.5, color: '#9ca3af' }}>{STATUS_LABEL[task.status]}</span>
                <span style={{ fontSize: 10.5, color: '#d1d5db' }}>·</span>
                <span style={{ fontSize: 10.5, color: '#9ca3af' }}>{task.due}</span>
              </div>
            </div>

            {/* Assignee avatar */}
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              background: task.assignee === 'JD' ? BLUE : task.assignee === 'ML' ? '#7c3aed' : '#06b6d4',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, fontWeight: 700, color: '#fff',
              flexShrink: 0,
            }}>
              {task.assignee}
            </div>
          </div>
        ))}
      </div>

      {/* Add task bar */}
      <div style={{
        padding: '10px 18px',
        borderTop: '1px solid #e5e7eb',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <div style={{
          width: 20, height: 20, borderRadius: '50%',
          border: '1.5px dashed #d1d5db',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1 }}>+</span>
        </div>
        <span style={{ fontSize: 12, color: '#9ca3af' }}>Add a task…</span>
      </div>
    </div>
  );
}
