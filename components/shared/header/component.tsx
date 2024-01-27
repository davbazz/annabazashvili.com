"use client";

import { Montserrat } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

import navbarData from "@/stores/data/shared/header/navbar.json";
import Container from "../ui/container/component";
import Hamburger from "../ui/svg/hamburger/component";
import Cancel from "../ui/svg/cancel/component";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-6 z-20 w-full text-secondary">
      <Container>
        <div
          className={`flex items-center justify-between bg-main px-6 py-[9px] xl:py-[10px] ${
            isOpen ? "rounded-t-md md:rounded-md" : "rounded-md"
          }`}
        >
          <a href="/">
            <h2
              className={`${montserrat.className} text-bold text-base lg:text-lg`}
            >
              Anna Bazashvili
            </h2>
          </a>

          {/* desktop navbar*/}
          <nav className="hidden gap-3 text-[12px] font-[600] md:flex lg:text-sm">
            {navbarData.map((data) => (
              <Link
                href={data.path}
                className="rounded-md px-2 py-1 hover:bg-secondary/30 xl:py-2"
              >
                {data.name}
              </Link>
            ))}
          </nav>

          {/* hamburger / cancel icons*/}
          <div
            className="-mr-2 cursor-pointer rounded-md py-1 hover:bg-secondary/30 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Cancel /> : <Hamburger />}
          </div>
        </div>

        {/* mobile navbar*/}
        {isOpen && (
          <div className="w-full rounded-b-md bg-main px-5 py-[1px] md:hidden">
            <nav className="flex flex-col gap-2 border-t-[1px] border-secondary py-3 text-[13px] md:text-sm font-[600]">
              {navbarData.map((data) => (
                <Link
                  href={data.path}
                  className="-ml-2 rounded-md p-2 hover:bg-secondary/30"
                >
                  {data.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
