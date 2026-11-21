type LogoProps = {
  compact?: boolean
  light?: boolean
  className?: string
}

export default function Logo({ compact = false, light = false, className = '' }: LogoProps) {
  const width = compact
    ? 'w-[90px] md:w-[clamp(90px,11vw,150px)]'
    : 'w-[106px] md:w-[clamp(106px,13.8vw,180px)]'

  return (
    <svg
      className={`block h-auto overflow-visible ${className || width}`}
      viewBox="0 0 160 64"
      role="img"
      aria-label="ASR Tech Solutions"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M111 22c14-3 24-11 34-21-1 16-10 27-27 31l-13 2Z" fill="#65c8e8" />
      <text x="5" y="43" fill="#e51f2b" fontFamily="Arial, Helvetica, sans-serif" fontSize="48" fontStyle="italic" fontWeight="900" letterSpacing="-5">ASR</text>
      <path d="M12 46h98l10-6" fill="none" stroke="#e51f2b" strokeWidth="4" />
      <text x="22" y="59" fill={light ? '#fff' : '#171717'} fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="800" letterSpacing=".3">Tech Solutions</text>
    </svg>
  )
}
