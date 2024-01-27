export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto w-[calc(100%-30px)] sm:w-[calc(100%-60px)] md:w-[calc(100%-120px)] lg:w-[84%] xl:w-[1140px]">
      {children}
    </section>
  )
}
