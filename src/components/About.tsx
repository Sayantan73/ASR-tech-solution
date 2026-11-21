import Icon from './Icon'
import Logo from './Logo'

export default function About() {
  return (
    <section className="mx-auto flex h-auto w-[calc(100%_-_32px)] flex-col gap-[14px] bg-white pb-[27px] pt-6 sm:w-[calc(100%_-_40px)] sm:flex-row sm:items-start sm:gap-0 sm:pb-0 sm:pt-[14px] md:min-h-[clamp(158px,20.6vw,300px)] md:w-[calc(100%_-_62px)] md:max-w-[1440px] md:pb-[clamp(10px,1.3vw,19px)] md:pt-[clamp(14px,1.8vw,26px)]" id="about">
      <div className="relative h-[clamp(165px,48vw,230px)] w-full shrink-0 overflow-hidden rounded-2xl bg-[#e4e7eb] sm:h-[127px] sm:w-[40%] sm:rounded-[18px] md:h-[clamp(127px,16.5vw,238px)] md:w-[42%] md:rounded-[clamp(14px,2.2vw,28px)]">
        <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.045]" src="/assets/office.jpg" alt="ASR Tech Solutions modern office" />
        <div className="absolute left-1/2 top-1/2 flex h-[50px] w-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[3px] bg-white/95 md:h-[clamp(50px,6.5vw,88px)] md:w-[clamp(82px,10.7vw,145px)]">
          <Logo className="w-[82%]" />
        </div>
      </div>
      <div className="w-full px-0 sm:w-[60%] sm:pl-[18px] sm:pt-[10px] md:w-[58%] md:pl-[clamp(25px,3.2vw,44px)] md:pt-[clamp(10px,1.3vw,18px)]">
        <p className="mb-[3px] text-[9px] font-extrabold text-[#d32e34] md:mb-[clamp(3px,.4vw,6px)] md:text-[clamp(9px,1.15vw,16px)]"><span className="mr-1.5 inline-block h-[10px] w-[3px] align-middle bg-[#d32e34] md:mr-[clamp(6px,.8vw,11px)] md:h-[clamp(10px,1.3vw,18px)] md:w-1" /> About Us</p>
        <h2 className="m-0 text-2xl leading-7 font-bold text-[#10172a] sm:text-xl sm:leading-[23px] md:text-[clamp(20px,2.6vw,36px)] md:leading-[1.2]">Who We Are</h2>
        <p className="mb-0 mt-1 max-w-none text-[11px] leading-4 text-[#343947] sm:max-w-[390px] sm:text-[8.5px] sm:leading-[11px] md:mt-[clamp(4px,.5vw,7px)] md:max-w-full md:text-[clamp(8.5px,1.1vw,15px)] md:leading-[1.35]">ASR Tech Solutions is a technology-driven company dedicated to delivering high-quality digital solutions. We combine innovation, expertise and a client-first approach to turn ideas into impactful products.</p>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-[13px] sm:gap-[5px] md:mt-[clamp(13px,1.7vw,23px)] md:gap-[clamp(5px,.7vw,10px)] max-[380px]:grid-cols-1">
          <div className="flex items-start gap-[5px] md:gap-[clamp(6px,.8vw,11px)]">
            <Icon className="h-5 w-5 shrink-0 text-[#eb3037] md:h-[clamp(21px,2.7vw,37px)] md:w-[clamp(21px,2.7vw,37px)]" name="target" />
            <p className="m-0 flex flex-col"><strong className="text-[9px] leading-3 md:text-[clamp(8.5px,1.1vw,15px)] md:leading-[1.2]">Our Mission</strong><span className="mt-[3px] max-w-[110px] text-[8px] leading-[11px] md:mt-[clamp(3px,.4vw,6px)] md:max-w-[180px] md:text-[clamp(7.5px,.95vw,13px)] md:leading-[1.3] max-[380px]:max-w-none">Deliver reliable and innovative solutions.</span></p>
          </div>
          <div className="flex items-start gap-[5px] md:gap-[clamp(6px,.8vw,11px)]">
            <Icon className="h-5 w-5 shrink-0 text-[#df3036] md:h-[clamp(21px,2.7vw,37px)] md:w-[clamp(21px,2.7vw,37px)]" name="eye" />
            <p className="m-0 flex flex-col"><strong className="text-[9px] leading-3 md:text-[clamp(8.5px,1.1vw,15px)] md:leading-[1.2]">Our Vision</strong><span className="mt-[3px] max-w-[110px] text-[8px] leading-[11px] md:mt-[clamp(3px,.4vw,6px)] md:max-w-[180px] md:text-[clamp(7.5px,.95vw,13px)] md:leading-[1.3] max-[380px]:max-w-none">To be a trusted global technology partner.</span></p>
          </div>
          <div className="flex items-start gap-[5px] md:gap-[clamp(6px,.8vw,11px)]">
            <Icon className="h-5 w-5 shrink-0 text-[#d93238] md:h-[clamp(21px,2.7vw,37px)] md:w-[clamp(21px,2.7vw,37px)]" name="diamond" />
            <p className="m-0 flex flex-col"><strong className="text-[9px] leading-3 md:text-[clamp(8.5px,1.1vw,15px)] md:leading-[1.2]">Our Values</strong><span className="mt-[3px] max-w-[110px] text-[8px] leading-[11px] md:mt-[clamp(3px,.4vw,6px)] md:max-w-[180px] md:text-[clamp(7.5px,.95vw,13px)] md:leading-[1.3] max-[380px]:max-w-none">Innovation, Quality, Transparency &amp; Growth.</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
