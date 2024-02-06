import Link from "next/link";

import ArrowRight from "../../svg/arrowRight/component";

export default function PricingButton() {
  return (
    <Link
      href="/pricing"
      className="flex w-[138px] items-center gap-3 rounded-md bg-transparent px-8 py-3 text-sm font-[600] text-tertiary duration-200 hover:justify-start hover:gap-5 hover:bg-main/50 lg:w-[144px] lg:gap-4 lg:text-sm lg:hover:gap-6 xl:w-[204px] xl:px-14 xl:py-3 xl:text-base"
    >
      <p>Prices</p>
      <ArrowRight />
    </Link>
  );
}
