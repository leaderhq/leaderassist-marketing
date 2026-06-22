'use client'

export interface SuiteBarProps {
  appUrl: string
  loginLabel?: string
}

export function SuiteBar({ appUrl, loginLabel = 'Client Login' }: SuiteBarProps) {
  return (
    <div className="bg-brand-green text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-4 py-1.5 text-xs md:px-6">
        <a
          href={`${appUrl}/login`}
          className="font-medium tracking-wide hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {loginLabel} →
        </a>
      </div>
    </div>
  )
}
