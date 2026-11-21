import Logo from './Logo'
import Icon from './Icon'

export default function Navbar() {
  const navLink = 'relative flex h-full items-center text-[10px] font-bold text-[#262b3a] transition-colors hover:text-[#cf2027] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#cf2027] after:transition-all after:content-[\'\'] hover:after:w-full md:after:bottom-[clamp(17px,2.2vw,30px)] md:text-[clamp(10px,1.05vw,16px)]'

  return (
    <header className="relative z-20 flex min-h-[92px] flex-wrap items-center justify-between gap-y-1.5 bg-white px-5 py-2.5 md:h-[clamp(50px,6.5vw,86px)] md:min-h-0 md:flex-nowrap md:px-[38px] md:py-0">
      <a className="w-auto md:w-[clamp(150px,18vw,250px)]" href="#home" aria-label="ASR Tech Solutions home"><Logo /></a>
      <nav className="order-3 flex h-7 w-full items-center justify-between gap-2 md:order-none md:h-full md:w-auto md:flex-1 md:justify-center md:gap-[clamp(16px,3vw,44px)]" aria-label="Main navigation">
        <a className={`${navLink} after:w-full text-[#cf2027]`} href="#home">Home</a>
        <a className={navLink} href="#about">About Us</a>
        <a className={navLink} href="#services">Services</a>
        <a className={navLink} href="#internship">Internship</a>
        <a className={navLink} href="#contact">Contact</a>
      </nav>
      <a className="flex h-8 min-w-[104px] items-center justify-center gap-[5px] rounded-full bg-[#be2d2f] text-[10px] font-bold text-white shadow-[0_3px_8px_rgba(190,45,47,.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(190,45,47,.24)] md:h-[clamp(24px,3.2vw,44px)] md:min-w-[clamp(91px,12vw,150px)] md:text-[clamp(9px,.9vw,14px)]" href="#contact">
        <Icon className="h-3 w-3" name="send" /> Get in Touch
      </a>
    </header>
  )
}
