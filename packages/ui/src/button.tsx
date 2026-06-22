import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style of the button.
   * - `primary`: solid blue fill — use for the main call-to-action on a surface.
   * - `secondary`: light gray fill — use for supporting or destructive-cancel actions.
   */
  variant?: 'primary' | 'secondary';
  /**
   * When `true`, the button is disabled AND its children are replaced with a
   * spinner + "Loading…" label. This is a behavioral change, not just visual —
   * the original children are unmounted while loading is active.
   */
  loading?: boolean;
}

/**
 * Shared button primitive used across all leader-suite apps.
 *
 * Forwards all native `<button>` attributes. The `disabled` prop and the
 * `loading` prop both disable the element; either one is sufficient.
 */
export function Button({
  variant = 'primary',
  loading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400',
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className ?? ''}`}
      disabled={disabled ?? loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading...
        </span>
      ) : children}
    </button>
  );
}
