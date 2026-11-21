import Icon, { type IconName } from './Icon'

const services: { title: string; text: string; icon: IconName }[] = [
  { title: 'Web Development', text: 'Custom, responsive and high-performance websites for your business.', icon: 'code' },
  { title: 'Mobile App Development', text: 'Feature-rich Android & iOS apps that deliver great user experiences.', icon: 'mobile' },
  { title: 'Cloud & DevOps', text: 'Scalable, secure and cost-effective cloud solutions for modern businesses.', icon: 'cloud' },
  { title: 'IT Consulting', text: 'Strategic technology guidance to optimize and grow your business.', icon: 'monitor' },
]

export default function Services() {
  return (
    <section className="h-auto bg-white px-0 py-[26px] sm:min-h-[clamp(207px,27vw,262px)] sm:pb-[14px] sm:pt-[14px] md:min-h-[clamp(207px,27vw,420px)] md:pb-[clamp(14px,2vw,30px)] md:pt-[clamp(14px,1.8vw,28px)]" id="services">
      <div className="px-[18px] text-center">
        <p className="mb-1 text-[11px] font-extrabold text-[#d32e34] sm:text-[10px] md:mb-[clamp(2px,.3vw,4px)] md:text-[clamp(10px,1.25vw,17px)]"><span className="mx-[5px] inline-block h-0.5 w-[18px] align-middle bg-[#d32e34] md:mx-[clamp(5px,.7vw,9px)] md:w-[clamp(18px,2.3vw,31px)]" /> Our Services <span className="mx-[5px] inline-block h-0.5 w-[18px] align-middle bg-[#d32e34] md:mx-[clamp(5px,.7vw,9px)] md:w-[clamp(18px,2.3vw,31px)]" /></p>
        <h2 className="m-0 text-[27px] leading-8 font-bold text-[#10172a] sm:text-2xl sm:leading-7 md:text-[clamp(24px,3.1vw,42px)] md:leading-[1.2]">What We Do</h2>
        <h3 className="mt-1 text-[11px] leading-4 font-normal text-[#343a48] sm:text-[9px] md:mt-[clamp(2px,.3vw,4px)] md:text-[clamp(9px,1.15vw,16px)] md:leading-[1.25]">End-to-end technology solutions to transform your ideas into reality.</h3>
      </div>
      <div className="mx-auto mt-5 grid h-auto w-[calc(100%_-_32px)] grid-cols-2 gap-3 sm:mt-[13px] sm:w-[calc(100%_-_40px)] sm:grid-cols-2 sm:gap-2 md:mt-[clamp(10px,1.3vw,18px)] md:w-[calc(100%_-_62px)] md:max-w-[1440px] md:grid-cols-4 md:gap-[clamp(8px,1vw,14px)]">
        {services.map((service) => (
          <article className="group relative h-[166px] rounded-lg border border-[#f1f1f1] bg-[#fff4f5] px-[10px] py-[14px] shadow-[0_2px_8px_rgba(21,31,58,.04)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_14px_28px_rgba(21,31,58,.12)] even:bg-[#eef7ff] sm:h-[clamp(117px,14.2vw,157px)] sm:px-3 sm:pb-2 sm:pt-[11px] sm:even:bg-[#eef7ff] md:h-[clamp(109px,14.2vw,220px)] md:rounded-[clamp(8px,1vw,14px)] md:px-[clamp(14px,1.8vw,24px)] md:pb-2 md:pt-[clamp(8px,1vw,16px)]" key={service.title}>
            <Icon className="mb-[7px] h-8 w-8 text-[#df3036] transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-110 sm:mb-[5px] sm:h-6 sm:w-6 md:mb-[clamp(3px,.4vw,6px)] md:h-[clamp(20px,2.6vw,36px)] md:w-[clamp(20px,2.6vw,36px)]" name={service.icon} />
            <h4 className="mb-[7px] text-[11px] leading-4 font-bold text-[#10172a] sm:mb-[5px] sm:text-[11px] sm:leading-[13px] md:mb-[clamp(4px,.5vw,7px)] md:text-[clamp(11px,1.45vw,21px)] md:leading-[1.15] max-[380px]:text-[11px]">{service.title}</h4>
            <p className="m-0 max-w-[145px] text-[10px] leading-[14px] text-[#303644] max-[380px]:leading-[13px] sm:line-clamp-2 sm:text-[8.5px] sm:leading-3 md:line-clamp-3 md:max-w-[260px] md:text-[clamp(8px,1vw,14px)] md:leading-[1.25]">{service.text}</p>
            <a className="absolute bottom-[10px] right-[10px] flex h-5 w-5 items-center justify-center rounded-full bg-[#e12c32] text-white transition-transform duration-200 group-hover:translate-x-[3px] md:bottom-[clamp(8px,1vw,14px)] md:right-[clamp(10px,1.3vw,18px)] md:h-[clamp(20px,2.6vw,36px)] md:w-[clamp(20px,2.6vw,36px)]" href="#contact" aria-label={`Learn more about ${service.title}`}>
              <Icon className="h-3 w-3 md:h-[clamp(12px,1.55vw,21px)] md:w-[clamp(12px,1.55vw,21px)]" name="arrowRight" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
