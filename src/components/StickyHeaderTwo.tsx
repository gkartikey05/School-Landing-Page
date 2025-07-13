"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LOGO from "./assets/school logo.avif";
import Drawer from "./Drawer";

const StickyHeaderTwo = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const currentY = window.scrollY;
    setIsAtTop(currentY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed right-0 flex justify-between items-center gap-1 z-40 w-full transition-transform duration-300 ${
        isAtTop
          ? "translate-y-0 bg-[#000000ab] sm:bg-transparent"
          : "xl:-translate-y-13 bg-[#000000ab] lg:-translate-y-10 md:-translate-y-7.5"
      } px-1.5 py-1 xl:top-13 xl:px-12 xl:py-1 lg:top-10 lg:px-8 lg:py-1 md:top-7.5 md:px-3 md:py-0.5`}
    >
      <div className="flex items-center gap-1 lg:gap-2">
        <Image
          src={LOGO}
          alt="Logo"
          className="w-8 h-8 xl:w-10 xl:h-10 lg:h-9 lg:w-9 md:w-7 md:h-7"
        />
        <div>
          <h2 className="text-white text-lg -mt-1 xl:font-bold xl:tracking-wider xl:text-2xl lg:font-semibold lg:-mt-0.5 lg:tracking-wider lg:text-xl md:tracking-wide md:-mt-0.5 md:text-lg">
            ATLANTIC
          </h2>
          <h3 className="text-white text-sm -mt-2.5 xl:tracking-tight xl:text-[16px] xl:font-semibold lg:-mt-1.5 lg:tracking-tighter lg:text-sm md:tracking-tighter md:text-xs md:-mt-2">
            GLOBAL SCHOOL
          </h3>
        </div>
      </div>

      <div>
        <Drawer />
      </div>
    </header>
  );
};

export default StickyHeaderTwo;
