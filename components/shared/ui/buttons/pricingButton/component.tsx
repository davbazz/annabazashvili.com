import Link from "next/link";

import ArrowRight from "../../svg/arrowRight/component";

export default function PricingButton() {
  return (
    <Link
      href="/pricing"
      className="flex w-[108px] items-center gap-3 lg:gap-4 rounded-md bg-transparent px-5 py-2 text-[12px] font-[600] text-tertiary duration-200 hover:justify-start hover:gap-5 lg:hover:gap-6 hover:bg-main/50 lg:w-[144px] lg:px-8 lg:text-sm xl:w-[204px] xl:px-14 xl:py-3 xl:text-base"
    >
      <p>Prices</p>
      <ArrowRight />
    </Link>
  );
}
