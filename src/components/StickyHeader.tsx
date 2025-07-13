"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { GrGallery } from "react-icons/gr";

const StickyHeader = () => {
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
      className={`fixed top-0 left-0 w-full z-50 bg-[#000000ab] shadow-md flex justify-between items-center text-white scroll-smooth transition-transform duration-500 ${
        isAtTop ? "translate-y-0" : "-translate-y-full"
      } xl:py-2 xl:px-3 lg:py-2 lg:px-2 md:py-1.5 md:text-[10px] md:px-1 xs`}
    >
      <div className="flex items-center xl:text-sm xl:font-semibold lg:text-xs lg:font-normal lg:divide-x-2 md:font-light md:divide-x-1">
        <span className="xl:py-2 xl:px-3 lg:py-1 lg:px-3 md:px-1.5 md:py-0.5">
          School Code : 12345
        </span>
        <Link
          href={"#"}
          className="xl:py-2 xl:px-3 lg:py-1 lg:px-3 md:px-1.5 md:py-0.5"
        >
          CBSE Affiliaton No.: 1234567
        </Link>
        <Link
          href={"#"}
          className="xl:py-2 xl:px-3 lg:py-1 lg:px-3 md:px-1.5 md:py-0.5"
        >
          Newsletter
        </Link>
      </div>

      <div className="flex items-center xl:text-sm xl:font-semibold lg:text-xs lg:font-normal lg:divide-x-2 md:divide-x-1">
        <Link
          href={"/"}
          id="home"
          className="flex justify-center gap-1 items-center xl:py-2 xl:px-4 lg:py-1 lg:px-3 md:px-1.5 md:py-0.5"
        >
          <FiHome />
          Home
        </Link>

        <Link
          href={"/about"}
          className="flex justify-center gap-1 items-center xl:py-2 xl:px-4 lg:py-1 lg:px-3 md:px-1.5 md:py-0.5"
        >
          <IoBookOutline />
          About Us
        </Link>

        <Link
          href={"/gallery"}
          className="flex justify-center gap-1 items-center xl:py-2 xl:px-4 lg:py-1 lg:px-3 md:px-1.5 md:py-0.5"
        >
          <GrGallery />
          Our Gallery
        </Link>

        <Link
          href="/contact"
          className="flex justify-center gap-1 items-center xl:py-2 xl:px-4 lg:py-1 lg:px-3 md:px-1.5 md:py-0.5"
        >
          <IoMdContact />
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default StickyHeader;
