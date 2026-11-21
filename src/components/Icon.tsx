import type { ReactNode } from 'react'

export type IconName =
  | 'users'
  | 'layers'
  | 'trophy'
  | 'code'
  | 'mobile'
  | 'cloud'
  | 'monitor'
  | 'graduation'
  | 'target'
  | 'eye'
  | 'diamond'
  | 'mapPin'
  | 'phone'
  | 'mail'
  | 'send'
  | 'arrowRight'
  | 'linkedin'
  | 'instagram'
  | 'youtube'
  | 'facebook'

type IconProps = {
  name: IconName
  className?: string
  size?: number
}

const paths: Record<IconName, ReactNode> = {
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20v-1.5a6.5 6.5 0 0 1 13 0V20zM16 5.2a3.5 3.5 0 0 1 0 6.7M18 14a5 5 0 0 1 3.5 4.8V20h-3" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
      <path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H3v2a5 5 0 0 0 5 5M17 6h4v2a5 5 0 0 1-5 5M12 14v4M8 21h8M10 18h4" />
    </>
  ),
  code: <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 3l-4 18" />,
  mobile: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 18h4" />
    </>
  ),
  cloud: <path d="M7.5 19h10a4.5 4.5 0 0 0 .4-9 6.5 6.5 0 0 0-12.4 1A4.2 4.2 0 0 0 7.5 19Z" />,
  monitor: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="1.5" />
      <path d="M9 21h6M12 17v4" />
    </>
  ),
  graduation: (
    <>
      <path d="m2 9 10-5 10 5-10 5L2 9ZM6 11v5c3.5 2.7 8.5 2.7 12 0v-5M22 9v6" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
      <path d="m14 10 6-6M17 4h3v3" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  diamond: <path d="M3 8 6.5 3h11L21 8l-9 13L3 8Zm0 0h18M6.5 3 9 8l3 13 3-13 2.5-5" />,
  mapPin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />,
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  send: <path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13" />,
  arrowRight: <path d="M4 12h16M13 5l7 7-7 7" />,
  linkedin: (
    <>
      <path d="M6.5 10v8M6.5 6.5v.1M10.5 18v-4.2a3 3 0 0 1 6 0V18M10.5 10v8" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.8" r=".7" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M14.5 22v-8h3l.5-4h-3.5V8c0-1.2.4-2 2-2h1.7V2.4c-.8-.1-1.8-.2-3-.2-3 0-5.2 1.8-5.2 5.3V10H7v4h3v8h4.5Z" fill="currentColor" stroke="none" />,
}

export default function Icon({ name, className, size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
