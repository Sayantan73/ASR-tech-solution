import Icon from './Icon'

export default function InternshipBanner() {
  return (
    <section
      className="relative mx-auto mt-0 h-[176px] w-[calc(100%_-_32px)] overflow-hidden rounded-[13px] bg-[#c92d36] text-white sm:mt-[3px] sm:h-[97px] sm:w-[calc(100%_-_40px)] md:mt-[clamp(3px,.4vw,6px)] md:h-[clamp(97px,12.6vw,180px)] md:w-[calc(100%_-_62px)] md:max-w-[1440px] md:rounded-[clamp(13px,1.7vw,22px)]"
      id="internship"
    >
      <div className="absolute bottom-0 left-0 h-full w-[34%] [clip-path:polygon(0_0,58%_0,100%_100%,0_100%)] sm:w-[220px] md:w-[clamp(220px,29vw,400px)]">
        <img
          className="h-full w-full object-cover [object-position:50%_30%]"
          src="/assets/students.jpg"
          alt="Students participating in internship program"
        />
      </div>
      <div className="relative z-[2] ml-[34%] mt-4 flex items-start gap-[6px] sm:ml-[clamp(230px,30vw,255px)] sm:mt-0 sm:pr-[125px] sm:items-center sm:gap-2 md:ml-[clamp(245px,32vw,440px)] md:pr-[clamp(125px,18vw,220px)] md:gap-[clamp(8px,1vw,14px)]">
        <Icon className="mt-px h-4 w-4 shrink-0 text-white sm:h-[18px] sm:w-[18px] md:h-[clamp(18px,2.3vw,31px)] md:w-[clamp(18px,2.3vw,31px)]" name="graduation" />
        <div>
          <p className="mb-0.5 pt-1 text-[10px] font-bold sm:text-[10px] md:mb-[clamp(2px,.25vw,4px)] md:pt-[clamp(4px,.5vw,7px)] md:text-[clamp(10px,1.3vw,18px)]">
            Internship Program
          </p>
          <h2 className="m-0 max-w-[210px] text-[clamp(15px,4.5vw,19px)] leading-[1.15] font-bold sm:max-w-none sm:text-[19px] sm:leading-[21px] md:text-[clamp(19px,2.5vw,34px)] md:leading-[1.12]">Kickstart Your Tech Career</h2>
          <h3 className="mt-1 max-w-[185px] text-[9px] leading-[13px] font-normal sm:mt-1 sm:max-w-none sm:text-[8.5px] sm:leading-3 md:mt-[clamp(4px,.5vw,7px)] md:text-[clamp(8.5px,1.1vw,15px)] md:leading-[1.4] max-[380px]:[&_br]:hidden">
            Hands-on training, real-time projects and mentorship
            <br />
            from industry experts.
          </h3>
        </div>
      </div>
      <a
        className="group absolute bottom-[15px] right-[14px] z-[3] flex h-[29px] w-24 items-center justify-center rounded-full bg-white text-[8.5px] font-bold text-[#d32d34] transition-all duration-200 hover:scale-[1.04] hover:bg-[#dff3ff] hover:text-[#17324d] hover:shadow-[0_6px_18px_rgba(0,0,0,.24)] active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-auto sm:right-[29px] sm:top-1/2 sm:-translate-y-1/2 md:right-[clamp(29px,3.8vw,52px)] md:h-[clamp(29px,3.8vw,52px)] md:w-[clamp(96px,12.5vw,170px)] md:text-[clamp(8.5px,1.1vw,15px)]"
        href="#contact"
      >
        Apply Now
        <Icon className="ml-2 h-3 w-3 transition-transform duration-200 group-hover:translate-x-1 md:h-4 md:w-4" name="arrowRight" />
      </a>
    </section>
  )
}
