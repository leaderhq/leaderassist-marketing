import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visible label rendered above the input. Also used to derive `htmlFor` when no explicit `id` is provided. */
  label?: string;
  /**
   * Validation error message. When present, the input border turns red and the
   * message is rendered in a `role="alert"` span so screen readers announce it
   * immediately — no focus change required by the user.
   */
  error?: string;
}

/**
 * Labeled text input with built-in accessible error display.
 *
 * If `id` is omitted and `label` is provided, the `id` is derived from the
 * label text (lowercased, spaces replaced with hyphens) to keep the
 * `<label htmlFor>` association intact.
 */
export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className ?? ''}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
