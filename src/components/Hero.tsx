import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import Logo from './Logo'

const typewriterCopy = 'Digital World'
const heroStats = [
  { value: 100, label: 'Happy Clients', icon: 'users' },
  { value: 150, label: 'Projects Delivered', icon: 'layers' },
  { value: 10, label: 'Years of Experience', icon: 'trophy' },
] as const

export default function Hero() {
  const [typedCopy, setTypedCopy] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [counts, setCounts] = useState(() => heroStats.map(() => 0))
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frame = window.requestAnimationFrame(() => {
        setTypedCopy(typewriterCopy)
        setIsTyping(false)
      })
      return () => window.cancelAnimationFrame(frame)
    }

    let characterIndex = 0
    let timeoutId = 0

    const typeNextCharacter = () => {
      characterIndex += 1
      setTypedCopy(typewriterCopy.slice(0, characterIndex))

      if (characterIndex === typewriterCopy.length) {
        setIsTyping(false)
        return
      }

      timeoutId = window.setTimeout(typeNextCharacter, 75)
    }

    timeoutId = window.setTimeout(typeNextCharacter, 75)
    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const statsElement = statsRef.current
    if (!statsElement) return

    const targets = heroStats.map(({ value }) => value)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      const frame = window.requestAnimationFrame(() => setCounts(targets))
      return () => window.cancelAnimationFrame(frame)
    }

    let animationFrame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return

      observer.disconnect()
      const startedAt = performance.now()
      const duration = 1300

      const animateCounts = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 3
        setCounts(targets.map((target) => Math.round(target * easedProgress)))

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animateCounts)
        }
      }

      animationFrame = window.requestAnimationFrame(animateCounts)
    }, { threshold: 0.25 })

    observer.observe(statsElement)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="relative flex h-auto flex-col overflow-hidden bg-[#f1f2f4] sm:h-[234px] sm:flex-row md:h-[clamp(234px,30.5vw,440px)]" id="home">
      <div className="relative z-[3] w-full px-[22px] pb-5 pt-[30px] sm:w-[51%] sm:pb-0 sm:pl-6 sm:pr-0 sm:pt-6 md:pl-[clamp(46px,6vw,92px)] md:pt-[clamp(24px,3.2vw,46px)]">
        <p className="mb-3 flex items-center gap-[7px] text-[12px] font-extrabold text-[#202638] sm:mb-[7px] sm:text-[10px] md:mb-[clamp(7px,1vw,14px)] md:gap-[clamp(7px,.9vw,12px)] md:text-[clamp(10px,1.25vw,17px)]"><span className="h-[13px] w-[3px] bg-[#d02c32] md:h-[clamp(13px,1.7vw,21px)] md:w-1" /> Welcome to ASR Tech Solutions</p>
        <h1 className="m-0 text-[clamp(27px,7vw,36px)] leading-[1.08] tracking-[-1px] text-[#0f1729] sm:text-[clamp(23px,3.3vw,26px)] sm:leading-[1.12] md:text-[clamp(25px,3.4vw,48px)] md:tracking-[-.04em]">
          Innovative Tech Solutions<br />
          for a{' '}
          <em className="not-italic text-[#df3036]">
            <span className="sr-only">{typewriterCopy}</span>
            <span aria-hidden="true" className="inline-grid align-baseline">
              <span className="invisible col-start-1 row-start-1 whitespace-nowrap">{typewriterCopy}</span>
              <span className="relative col-start-1 row-start-1 justify-self-start whitespace-nowrap">
                {typedCopy}
                {isTyping && <span className="absolute -right-[3px] top-0 animate-pulse motion-reduce:animate-none">|</span>}
              </span>
            </span>
          </em>
        </h1>
        <p className="my-3 mb-4 text-[13px] leading-[1.5] text-[#242936] sm:mb-[9px] sm:mt-2 sm:text-[10.5px] sm:leading-[14px] md:mb-[clamp(9px,1.4vw,20px)] md:mt-[clamp(8px,1.2vw,17px)] md:text-[clamp(10.5px,1.2vw,17px)] md:leading-[1.35] max-[380px]:[&_br]:hidden">
          We build modern, scalable and user-friendly digital solutions<br />that help businesses grow and succeed.
        </p>
        <div className="flex gap-[10px] md:gap-[clamp(10px,1.3vw,18px)]">
          <a className="flex h-9 w-[126px] items-center justify-center rounded-full bg-[#d2383b] text-[11px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(190,45,47,.24)] sm:h-6 sm:w-[96px] sm:text-[9px] md:h-[clamp(24px,3.2vw,44px)] md:w-[clamp(96px,13vw,172px)] md:text-[clamp(9px,1vw,14px)]" href="#services">
            Our Services <Icon className="ml-[7px] h-3 w-3 md:ml-2 md:h-[clamp(12px,1.4vw,19px)] md:w-[clamp(12px,1.4vw,19px)]" name="arrowRight" />
          </a>
          <a className="flex h-9 w-[114px] items-center justify-center rounded-full border border-[#40475a] bg-white text-[11px] font-bold text-[#232836] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(19,24,58,.12)] sm:h-6 sm:w-[86px] sm:text-[9px] md:h-[clamp(24px,3.2vw,44px)] md:w-[clamp(86px,11.5vw,160px)] md:text-[clamp(9px,1vw,14px)]" href="#about">About Us</a>
        </div>
        <div ref={statsRef} className="mt-[21px] flex justify-between sm:mt-4 sm:justify-start md:mt-[clamp(16px,2.1vw,30px)]">
          {heroStats.map((stat, index) => (
            <div className="flex w-auto items-center gap-[3px] text-[#d63035] sm:w-[clamp(90px,14.2vw,109px)] sm:gap-[6px] md:w-[clamp(90px,14.2vw,190px)] md:gap-[clamp(6px,.8vw,11px)]" key={stat.label}>
              <Icon className="h-[18px] w-[18px] sm:h-6 sm:w-6 md:h-[clamp(24px,3vw,40px)] md:w-[clamp(24px,3vw,40px)]" name={stat.icon} />
              <p className="m-0 flex flex-col text-[#111]">
                <span className="sr-only">{stat.value}+</span>
                <strong aria-hidden="true" className="text-[13px] leading-[1] md:text-[clamp(13px,1.7vw,23px)]">{counts[index]}+</strong>
                <span className="mt-[3px] text-[7px] sm:text-[7.5px] md:mt-1 md:text-[clamp(7.5px,.9vw,12px)]">{stat.label}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-[clamp(205px,62vw,300px)] w-full overflow-hidden sm:h-full sm:w-[49%]" aria-label="Professional working on a laptop">
        <div className="absolute -bottom-5 -left-3 z-[1] h-40 w-[190px] skew-x-[-25deg] rotate-[-8deg] bg-[#dc3038] sm:left-[-12px] md:h-[clamp(160px,21vw,290px)] md:w-[clamp(190px,25vw,340px)]" />
        <div className="absolute left-[12%] top-[-78px] z-[3] h-[260px] w-[68px] rotate-[32deg] [clip-path:polygon(0_0,100%_0,35%_100%,0_100%)] bg-[#dc3038] opacity-95 sm:left-8 md:left-[clamp(32px,4.2vw,58px)] md:top-[clamp(-136px,-10vw,-78px)] md:h-[clamp(260px,34vw,460px)] md:w-[clamp(68px,8.85vw,120px)]" />
        <img className="absolute bottom-0 right-0 z-[2] h-full w-[84%] object-cover [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)] [object-position:50%_36%] sm:w-full sm:[object-position:54%_18%] transition-transform duration-500 hover:scale-[1.025]" src="/assets/hero-woman.jpg" alt="Technology professional at work" />
        <div className="absolute bottom-[14px] right-4 z-[4] flex h-10 w-[58px] skew-x-[-5deg] items-center justify-center rounded-[3px] bg-white shadow-[0_3px_12px_rgba(0,0,0,.12)] sm:bottom-6 sm:right-[25px] md:bottom-[clamp(24px,3vw,42px)] md:right-[clamp(25px,3.2vw,46px)] md:h-[clamp(40px,5.2vw,70px)] md:w-[clamp(58px,7.5vw,100px)]">
          <Logo className="w-[85%] md:w-[84%]" />
        </div>
      </div>
    </section>
  )
}
