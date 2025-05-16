"use client";
import Image from "next/image";
import MoonwakeLogo from "../../../../public/moonwake_logo.png";
import Link from "next/link";
import Menu from "./Menu";
import { useState } from "react";
import { cn } from "../../../../utils/twMerge";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<"open" | "closed">("closed");

  return (
    <>
      <div
        className={cn(
          "w-full max-w-[1440px] h-[120px] md:h-auto flex items-center justify-between gap-[15px] md:gap-0 px-[15px] md:px-[25px] py-[25px] md:py-[35px] z-50 bg-white",
          menuOpen === "open" && "fixed top-0"
        )}
      >
        <div className="w-full hidden md:flex items-center gap-[15px] z-50">
          <Link href="/">
            <Image
              src={MoonwakeLogo}
              alt="Moonwake Games Logo"
              className="w-full max-w-[190px]"
            />
          </Link>
          <div className="h-full flex flex-col justify-center items-start">
            <Link
              href="/"
              className="text-2xl lg:text-4xl font-bold text-moon_night relative z-10"
            >
              Moonwake Games
            </Link>
            <p className="text-sm lg:text-base text-moon_darkblue">
              1101 W 400 S #302 Springville, Utah –{" "}
              <a href="tel:801-515-6079" className="text-nowrap">
                801-515-6079
              </a>
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-end gap-[25px] lg:gap-[50px] w-full text-moon_night text-lg z-50">
          <Link href="/" className="relative group">
            <div className="w-[64px] relative h-full flex items-center justify-center bg-white z-50 rounded-[5px] group-hover:shadow-lg group-hover:-translate-y-0.5 px-2 py-1 transition-all duration-300 ease-in-out group-active:translate-y-0 group-active:shadow-none group-active:duration-[25ms]">
              <p>Home</p>
            </div>
            <span className="w-[97%] h-[97%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-moon_yellow z-0 group-hover:w-[calc(100%+4px)] group-hover:h-[calc(100%+2px)] transition-all duration-200 ease-in-out rounded-[5px] group-active:w-[97%] group-active:h-[97%] group-active:duration-[25ms]" />
          </Link>
          <Link href="/calendar" className="relative group">
            <div className="w-[92px] relative h-full flex items-center justify-center bg-white z-50 rounded-[5px] group-hover:shadow-lg group-hover:-translate-y-0.5 px-2 py-1 transition-all duration-300 ease-in-out group-active:translate-y-0 group-active:shadow-none group-active:duration-[25ms]">
              <p>Calendar</p>
            </div>
            <span className="w-[97%] h-[97%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-moon_yellow z-0 group-hover:w-[calc(100%+4px)] group-hover:h-[calc(100%+2px)] transition-all duration-200 ease-in-out rounded-[5px] group-active:w-[97%] group-active:h-[97%] group-active:duration-[25ms]" />
          </Link>
          <Link href="/shop-policies" className="relative group">
            <div className="w-[128px] relative h-full flex items-center justify-center bg-white z-50 rounded-[5px] group-hover:shadow-lg group-hover:-translate-y-0.5 px-2 py-1 transition-all duration-300 ease-in-out group-active:translate-y-0 group-active:shadow-none group-active:duration-[25ms]">
              <p>Store Policies</p>
            </div>
            <span className="w-[97%] md h-[97%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-moon_yellow z-0 group-hover:w-[calc(100%+4px)] group-hover:h-[calc(100%+2px)] transition-all duration-200 ease-in-out rounded-[5px] group-active:w-[97%] group-active:h-[97%] group-active:duration-[25ms]" />
          </Link>
        </div>

        <div className="flex md:hidden justify-end items-center gap-[10px] w-full z-50">
          <Link href="/">
            <Image
              src={MoonwakeLogo}
              alt="Moonwake Games Logo"
              className="w-[65px] min-[460px]:max-w-[128px]"
            />
          </Link>
          <div className="w-full flex justify-between items-center z-50">
            <div className="h-full flex flex-col justify-center items-start mr-[15px] min-[460px]:mr-[25px]">
              <Link
                href="/"
                className="text-lg min-[460px]:text-2xl lg:text-4xl font-bold text-moon_night relative z-10"
              >
                Moonwake Games
              </Link>
              <p className="text-xs min-[460px]:text-sm lg:text-base text-moon_darkblue">
                1101 W 400 S #302 Springville, Utah –{" "}
                <a href="tel:801-515-6079" className="text-nowrap">
                  801-515-6079
                </a>
              </p>
            </div>
            <Menu open={menuOpen} setOpen={setMenuOpen} />
          </div>
        </div>
      </div>

      {menuOpen === "open" && <div className="bg-white h-[120px] w-full" />}
    </>
  );
};

export default Header;
