import Icon, { type IconName } from './Icon'
import Logo from './Logo'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Internship', href: '#internship' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Services', href: '#services' },
]

const socialLinks: { label: string; icon: IconName; color: string }[] = [
  { label: 'LinkedIn', icon: 'linkedin', color: 'bg-[#1678ce]' },
  { label: 'Instagram', icon: 'instagram', color: 'bg-[#d93242]' },
  { label: 'YouTube', icon: 'youtube', color: 'bg-[#d52d31]' },
  { label: 'Facebook', icon: 'facebook', color: 'bg-[#2876bb]' },
]

const footerHeadingClassName = [
  'mb-[9px] text-[10px] font-bold',
  'sm:mb-[7px] sm:text-[8.5px]',
  'md:mb-[clamp(7px,1vw,14px)] md:text-[clamp(8.5px,1.1vw,15px)]',
].join(' ')

const contactDetailClassName = [
  'flex items-center gap-[5px] text-[9px] leading-[13px]',
  'sm:text-[7.5px] sm:leading-[9px]',
  'md:gap-2 md:text-[clamp(7.5px,.95vw,13px)] md:leading-[1.3]',
].join(' ')

const contactIconClassName =
  'h-3 w-3 shrink-0 md:h-[clamp(10px,1.3vw,18px)] md:w-[clamp(10px,1.3vw,18px)]'

const quickLinkClassName =
  'text-[9px] text-white transition-colors hover:text-[#ef555a] sm:text-[7.5px] md:text-[clamp(7.5px,.95vw,13px)]'

const socialLinkClassName = [
  'flex h-[21px] w-[21px] items-center justify-center rounded-full',
  'text-white transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110',
  'md:h-[clamp(21px,2.75vw,38px)] md:w-[clamp(21px,2.75vw,38px)]',
].join(' ')

export default function Footer() {
  return (
    <footer className="h-auto bg-[#101b3e] text-white" id="contact">
      <div className="grid h-auto grid-cols-2 gap-x-[18px] gap-y-6 bg-[#101b3e] px-5 py-6 sm:min-h-[64px] sm:grid-cols-[90px_1.25fr_1.1fr_1fr] sm:items-start sm:gap-0 sm:px-5 sm:pb-2 sm:pt-[10px] md:min-h-[clamp(64px,8.5vw,120px)] md:grid-cols-[minmax(150px,1fr)_1.6fr_1.5fr_1fr] md:px-[clamp(38px,5vw,68px)] md:pb-[clamp(5px,.7vw,10px)] md:pt-[clamp(8px,1vw,14px)]">
        <div className="col-span-full pt-0.5 sm:col-span-1">
          <Logo compact light />
        </div>

        <div>
          <h3 className={footerHeadingClassName}>Get in Touch</h3>
          <p className={`${contactDetailClassName} mb-[5px] sm:mb-[3px] md:mb-[clamp(2px,.3vw,4px)]`}>
            <Icon className={contactIconClassName} name="mapPin" />
            Kolkata, West Bengal, India
          </p>
          <a
            className={`${contactDetailClassName} mb-[5px] text-white sm:mb-[3px] md:mb-[clamp(2px,.3vw,4px)]`}
            href="tel:+919905515370"
          >
            <Icon className={contactIconClassName} name="phone" />
            +91 99055 15370
          </a>
          <a
            className={`${contactDetailClassName} mb-[5px] text-white sm:mb-0 md:mb-[clamp(2px,.3vw,4px)]`}
            href="mailto:info@asrtechsolutions.com"
          >
            <Icon className={contactIconClassName} name="mail" />
            info@asrtechsolutions.com
          </a>
        </div>

        <div>
          <h3 className={footerHeadingClassName}>Quick Links</h3>
          <div className="grid grid-cols-2 gap-[5px] sm:grid-cols-[repeat(2,minmax(74px,1fr))] sm:gap-y-1 md:gap-y-[clamp(2px,.3vw,4px)]">
            {quickLinks.map((link) => (
              <a className={quickLinkClassName} href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className={footerHeadingClassName}>Follow Us</h3>
          <div className="flex gap-1.5 md:gap-[clamp(6px,.8vw,11px)]">
            {socialLinks.map((social) => (
              <a
                aria-label={social.label}
                className={`${socialLinkClassName} ${social.color}`}
                href="#"
                key={social.label}
              >
                <Icon className="h-[55%] w-[55%]" name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-h-[46px] flex-wrap items-center justify-between gap-2 bg-[#15264c] px-4 py-[9px] text-[8px] text-[#c3c9d7] sm:h-[16px] sm:min-h-0 sm:flex-nowrap sm:px-[38px] sm:py-0 sm:text-[7.5px] md:h-[clamp(16px,2.1vw,30px)] md:px-[clamp(38px,5vw,68px)] md:text-[clamp(7.5px,.95vw,13px)]">
        <p className="m-0">© 2026 ASR Tech Solutions. All Rights Reserved.</p>
        <div className="flex gap-[10px] md:gap-4">
          <a className="text-[#c3c9d7] transition-colors hover:text-[#ef555a]" href="#">
            Privacy Policy
          </a>
          <a className="text-[#c3c9d7] transition-colors hover:text-[#ef555a]" href="#">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}
