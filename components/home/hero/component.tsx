import { Montserrat } from "next/font/google";

import Container from "@/components/shared/ui/container/component";
import Blob from "@/components/shared/ui/svg/blob/component";
import ContactButton from "@/components/shared/ui/buttons/contactButton/component";
import PricingButton from "@/components/shared/ui/buttons/pricingButton/component";

const montserrat = Montserrat({ weight: ["700"], subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="h-auto border-b-2 border-red-400 pt-28 lg:pt-32 xl:h-screen xl:pt-48 2xl:h-auto">
      <Container>
        <div className="display flex w-full items-start justify-between">
          <div className="flex w-[60%] flex-col gap-8 text-nowrap lg:gap-12 xl:gap-16">
            <h1
              className={`${montserrat.className} inline-block text-xl leading-[28px] md:text-2xl font-[700] md:leading-[34px] lg:text-3xl lg:leading-[40px] xl:text-4xl xl:leading-[44px]`}
            >
              <span className="italic">Guiding</span> Minds,{" "}
              <span className="italic">Inspiring</span> Hope:
              <br />
              Journey to Mental Wellness
              <br />
              Begins <span className="italic">Here</span>.
            </h1>
            <h3 className=" text-[12px] italic leading-[18px] md:leading-5 lg:text-sm lg:leading-6 xl:text-base xl:leading-7 w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px] inline-block text-wrap">
              Discover a path to greater well-being with my professional
              counseling services. Your mental health matters and I'am here to
              help you thrive.
            </h3>
            <div className="mt-8 flex gap-4 lg:mt-12 xl:mt-20">
              <ContactButton>Contact me</ContactButton>
              <PricingButton />
            </div>
          </div>

          <div className="relative -mt-8 -ml-4 -mr-0 md:-mt-4 flex h-[300px] w-[300px] items-center justify-center lg:-mr-12 lg:-mt-12 lg:h-[460px] lg:w-[460px] xl:-mt-20 xl:h-[700px] xl:w-[700px]">
            <Blob />
            <iframe
              className="z-10 mt-8 h-[170px] lg:mt-0 xl:-mt-20 lg:h-[240px] xl:h-[330px]"
              src="https://lottie.host/embed/fe1c5292-aa40-41cc-9325-f3f51d21e420/kFlWgWr3Jz.json"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
