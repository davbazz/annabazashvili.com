import Link from "next/link";

export default function ContactButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Link
      href="/contact"
      className="w-28 rounded-md  border-[1px] border-main bg-main py-2 text-center text-[12px] font-[600] text-secondary hover:bg-secondary hover:text-main lg:w-36 lg:px-4 lg:text-sm xl:w-52 xl:py-3 xl:text-base"
    >
      {children}
    </Link>
  );
}
