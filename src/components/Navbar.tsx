import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import Logo from './Logo'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Internship', href: '#internship' },
  { label: 'Contact', href: '#contact' },
]

const headerClassName =
  'relative z-20 flex min-h-[68px] flex-nowrap items-center justify-between bg-white px-4 py-2 md:h-[clamp(50px,6.5vw,86px)] md:min-h-0 md:px-[38px] md:py-0'

const desktopNavClassName =
  'hidden h-full w-auto flex-1 items-center justify-center gap-[clamp(16px,3vw,44px)] md:flex'

const desktopLinkClassName =
  'relative flex h-full items-center text-[10px] font-bold text-[#262b3a] transition-colors hover:text-[#cf2027] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#cf2027] after:transition-all after:content-[\'\'] hover:after:w-full md:after:bottom-[clamp(17px,2.2vw,30px)] md:text-[clamp(10px,1.05vw,16px)]'

const mobileLinkClassName =
  'flex min-h-12 items-center rounded-xl px-4 text-base font-semibold transition-colors hover:bg-[#fff1f2] hover:text-[#cf2027]'

const mobileContactLinkClassName =
  'flex h-12 items-center justify-center gap-2 rounded-full bg-[#be2d2f] text-sm font-bold text-white transition-colors hover:bg-[#a9232c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cf2027]'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements =
        panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      <header className={headerClassName}>
        <a
          aria-label="ASR Tech Solutions home"
          className="w-auto md:w-[clamp(150px,18vw,250px)]"
          href="#home"
        >
          <Logo />
        </a>

        <nav className={desktopNavClassName} aria-label="Main navigation">
          {navigationLinks.map(({ label, href }) => (
            <a
              className={`${desktopLinkClassName} ${label === 'Home' ? 'after:w-full text-[#cf2027]' : ''}`}
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          aria-controls={menuOpen ? 'mobile-navigation' : undefined}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#17213a] transition-colors hover:bg-[#f2f4f8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cf2027] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          <Icon className="h-6 w-6" name={menuOpen ? 'close' : 'menu'} />
        </button>

        <a
          className="hidden h-8 min-w-[104px] items-center justify-center gap-[5px] rounded-full bg-[#be2d2f] text-[10px] font-bold text-white shadow-[0_3px_8px_rgba(190,45,47,.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(190,45,47,.24)] md:flex md:h-[clamp(24px,3.2vw,44px)] md:min-w-[clamp(91px,12vw,150px)] md:text-[clamp(9px,.9vw,14px)]"
          href="#contact"
        >
          <Icon className="h-3 w-3" name="send" />
          Get in Touch
        </a>
      </header>

      {menuOpen && (
        <>
          <button
            aria-label="Close navigation menu"
            className="fixed inset-0 z-40 border-0 bg-[#0f1729]/50 p-0 backdrop-blur-[2px] md:hidden"
            onClick={closeMenu}
            tabIndex={-1}
            type="button"
          />

          <aside
            aria-label="Mobile navigation"
            aria-modal="true"
            className="fixed inset-y-0 right-0 z-50 flex h-full w-[min(86vw,340px)] flex-col bg-white shadow-2xl md:hidden"
            id="mobile-navigation"
            ref={panelRef}
            role="dialog"
          >
            <div className="flex items-center justify-between border-b border-[#e8eaf0] px-5 py-4">
              <Logo className="w-[106px]" />
              <button
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#17213a] transition-colors hover:bg-[#f2f4f8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cf2027]"
                onClick={closeMenu}
                ref={closeButtonRef}
                type="button"
              >
                <Icon className="h-5 w-5" name="close" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-4 py-5" aria-label="Mobile navigation links">
              {navigationLinks.map(({ label, href }) => (
                <a
                  className={`${mobileLinkClassName} ${label === 'Home' ? 'bg-[#fff1f2] text-[#cf2027]' : 'text-[#202638]'}`}
                  href={href}
                  key={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="mt-auto px-5 pb-6 pt-4">
              <a className={mobileContactLinkClassName} href="#contact" onClick={closeMenu}>
                <Icon className="h-4 w-4" name="send" />
                Get in Touch
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  )
}
