import { useEffect, useRef, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = revealRef.current
    if (!element || !('IntersectionObserver' in window)) return

    element.classList.add(
      'opacity-0',
      'translate-y-[22px]',
      'transition-all',
      'duration-[650ms]',
      'ease-[cubic-bezier(.2,.75,.25,1)]',
      'motion-reduce:opacity-100',
      'motion-reduce:translate-y-0',
      'motion-reduce:transition-none',
    )
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove('opacity-0', 'translate-y-[22px]')
          element.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(element)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div className="flow-root" ref={revealRef}>{children}</div>
}
