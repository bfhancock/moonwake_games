"use client";
import Image from "next/image";
import MoonwakeLogo from "../../../public/moonwake_logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full max-w-[1440px] flex items-center justify-between px-[15px] md:px-[25px] mt-[35px]">
      <div className="w-full flex items-center gap-[15px]">
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
            className="text-4xl font-bold text-moon_night relative z-10"
          >
            Moonwake Games
          </Link>
          <p className="text-base text-moon_darkblue">
            1101 W 400 S #302 Springville, Utah –{" "}
            <a href="tel:801-515-6079">801-515-6079</a>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-[50px] w-full text-moon_night text-lg">
        <Link href="/" className="relative group">
          <div className="w-full relative h-full flex items-center justify-center bg-white z-50 rounded-[5px] group-hover:shadow-lg group-hover:-translate-y-0.5 px-2 py-1 transition-all duration-300 ease-in-out group-active:translate-y-0 group-active:shadow-none">
            <p>Home</p>
          </div>
          <span className="w-[97%] h-[97%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-moon_yellow z-0 group-hover:w-[calc(100%+2px)] group-hover:h-[calc(100%+2px)] transition-all duration-200 ease-in-out rounded-[5px] group-active:w-[97%] group-active:h-[97%]" />
        </Link>
        <Link href="/calendar" className="relative group">
          <div className="w-full relative h-full flex items-center justify-center bg-white z-50 rounded-[5px] group-hover:shadow-lg group-hover:-translate-y-0.5 px-2 py-1 transition-all duration-300 ease-in-out group-active:translate-y-0 group-active:shadow-none">
            <p>Calendar</p>
          </div>
          <span className="w-[97%] h-[97%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-moon_yellow z-0 group-hover:w-[calc(100%+2px)] group-hover:h-[calc(100%+2px)] transition-all duration-200 ease-in-out rounded-[5px] group-active:w-[97%] group-active:h-[97%]" />
        </Link>
        <Link href="/shop-policys" className="relative group">
          <div className="w-full relative h-full flex items-center justify-center bg-white z-50 rounded-[5px] group-hover:shadow-lg group-hover:-translate-y-0.5 px-2 py-1 transition-all duration-300 ease-in-out group-active:translate-y-0 group-active:shadow-none">
            <p>Store Policies</p>
          </div>
          <span className="w-[97%] h-[97%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-moon_yellow z-0 group-hover:w-[calc(100%+2px)] group-hover:h-[calc(100%+2px)] transition-all duration-200 ease-in-out rounded-[5px] group-active:w-[97%] group-active:h-[97%]" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
