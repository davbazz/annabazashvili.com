import { Montserrat } from 'next/font/google'

import Container from '@/components/shared/ui/container/component'
import Blob from '@/components/shared/ui/svg/blob/component'
import ContactButton from '@/components/shared/ui/buttons/contactButton/component'
import PricingButton from '@/components/shared/ui/buttons/pricingButton/component'

const montserrat = Montserrat({ weight: ['700'], subsets: ['latin'] })

export default function Hero() {
  return (
    <div className="h-auto pt-28 md:pt-32 xl:h-screen xl:pt-44 2xl:h-auto 2xl:pt-48">
      <Container>
        <div className="relative flex w-full items-start justify-between">
          <div className="flex w-[60%] flex-col gap-12 text-nowrap xl:gap-16">
            <h1
              className={`${montserrat.className} inline-block w-[400px] text-[21px] font-[700] leading-[34px] sm:w-auto sm:text-3xl sm:leading-[40px] xl:text-4xl xl:leading-[48px]`}
            >
              <span className="italic">Guiding</span> Minds,{' '}
              <span className="italic">Inspiring</span> Hope:
              <br />
              Journey to Mental Wellness
              <br />
              Begins <span className="italic">Here</span>.
            </h1>
            <h3 className="inline-block w-auto text-wrap text-sm font-[500] italic leading-6 sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px] xl:text-base xl:leading-7">
              Discover a path to <br className="sm:hidden" /> greater well-being{' '}
              <br className="sm:hidden" />
              with my professional <br className="sm:hidden" /> counseling
              services. Your <br className="sm:hidden" /> mental health matters
              and <br className="sm:hidden" /> I'am here to help you thrive.
            </h3>
            <div className="mt-8 flex w-[320px] gap-4 text-nowrap sm:w-auto md:mt-12 xl:mt-20">
              <ContactButton>Contact me</ContactButton>
              <PricingButton />
            </div>
          </div>

          <div className="relative -ml-12 -mr-0 mt-14 flex h-[150%] w-[150%] items-center justify-center sm:-ml-4 md:-ml-6 md:mt-12 md:h-[300px] md:w-[300px] lg:-mr-10 lg:-mt-12 lg:ml-0 lg:h-[460px] lg:w-[460px] xl:-mt-20 xl:h-[700px] xl:w-[700px]">
            <Blob />
            <iframe
              className="z-10 -ml-4 mt-[70px] h-[170px] sm:mt-20 md:ml-0 md:mt-8 lg:mt-0 lg:h-[240px] xl:-mt-20 xl:h-[330px]"
              src="https://lottie.host/embed/fe1c5292-aa40-41cc-9325-f3f51d21e420/kFlWgWr3Jz.json"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
