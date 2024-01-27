import { Montserrat } from "next/font/google";

import Container from "@/components/shared/ui/container/component";
import Blob from "@/components/shared/ui/svg/blob/component";
import ContactButton from "@/components/shared/ui/buttons/contactButton/component";
import PricingButton from "@/components/shared/ui/buttons/pricingButton/component";

const montserrat = Montserrat({ weight: ["700"], subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="h-auto pt-28 md:pt-32 xl:h-screen xl:pt-44 2xl:h-auto 2xl:pt-48">
      <Container>
        <div className="relative flex w-full items-start justify-between">
          <div className="flex w-[60%] flex-col text-nowrap gap-12 xl:gap-16">
            <h1
              className={`${montserrat.className} inline-block text-[22px] leading-[34px] sm:text-3xl font-[700] sm:leading-[40px] xl:text-4xl xl:leading-[48px]`}
            >
              <span className="italic">Guiding</span> Minds,{" "}
              <span className="italic">Inspiring</span>
              <br className="sm:hidden" /> Hope:
              <br />
              Journey to Mental Wellness
              <br />
              Begins <span className="italic">Here</span>.
            </h1>
            <h3 className="inline-block w-[210px] font-[500] sm:w-[300px] text-wrap text-sm italic leading-6 md:w-[360px] lg:w-[420px] xl:w-[480px] xl:text-base xl:leading-7">
              Discover a path to greater well-being with my professional
              counseling services. Your mental health matters and I'am here to
              help you thrive.
            </h3>
            <div className="mt-8 flex gap-4 md:mt-12 xl:mt-20 text-nowrap w-[320px] sm:w-auto">
              <ContactButton>Contact me</ContactButton>
              <PricingButton />
            </div>
          </div>

          <div className="relative -ml-7 -mr-0 mt-14 sm:-ml-4 flex h-[150%] w-[150%] items-center justify-center md:mt-12 md:-ml-6 lg:ml-0 md:h-[300px] md:w-[300px] lg:-mr-10 lg:-mt-12 lg:h-[460px] lg:w-[460px] xl:-mt-20 xl:h-[700px] xl:w-[700px]">
            <Blob />
            <iframe
              className="z-10 mt-[70px] -ml-4 h-[170px] sm:mt-20 md:mt-8 md:ml-0 lg:mt-0 lg:h-[240px] xl:-mt-20 xl:h-[330px]"
              src="https://lottie.host/embed/fe1c5292-aa40-41cc-9325-f3f51d21e420/kFlWgWr3Jz.json"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
