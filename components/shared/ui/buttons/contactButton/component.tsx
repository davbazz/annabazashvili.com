import Link from "next/link";

export default function ContactButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Link
      href="/contact"
      className="w-40 rounded-md border-[1px] border-main bg-main py-2 text-center text-sm font-[600] text-secondary hover:bg-secondary hover:text-main lg:px-4 xl:w-52 xl:py-3 xl:text-base inline-block"
    >
      {children}
    </Link>
  );
}
