import Link from 'next/link'

export default function ContactButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Link
      href="/contact"
      className="inline-block w-40 rounded-md border-[1px] border-main bg-main py-3 text-center text-sm font-[600] text-secondary hover:bg-secondary hover:text-main lg:px-4 xl:w-52 xl:text-base"
    >
      {children}
    </Link>
  )
}
