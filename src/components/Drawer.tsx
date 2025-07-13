"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { GiHamburgerMenu, GiTrophyCup } from "react-icons/gi";
import { IoIosArrowDown, IoMdContact } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import { GrGallery } from "react-icons/gr";

export default function RightSideDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div>
      <Button
        onClick={() => setIsOpen(true)}
        className="box-border bg-blue-500 hover:bg-blue-600 rounded w-10 h-7 sm:w-10 sm:h-7 md:w-10 md:h-7 lg:w-10 lg:h-7 xl:w-11 xl:h-9 mr-0 sm:-mr-3 md:-mr-1 lg:-mr-4 xl:-mr-6 flex items-center justify-center"
      >
        <GiHamburgerMenu className="text-base sm:text-lg md:text-xl" />
      </Button>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-screen bg-[#000000ab] overflow-y-auto w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] p-2 sm:p-3 md:p-4 pt-4 z-50"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute border rounded text-white top-2 right-1.5 py-0.5 px-2 sm:top-2 sm:right-4 sm:py-1 sm:px-2 md:top-1 md:right-2 md:py-0.5 md:px-2 lg:top-2.5 lg:right-4 lg:py-0.5 xl:top-2.5 xl:right-6"
        >
          <X size={22} className="sm:size-6" />
        </button>
        <ul className="mt-8 sm:mt-10 text-xs sm:text-sm md:text-base text-white">
          <li>
            <Link
              href="/"
              className="block p-2 pl-3 hover:bg-blue-600 hover:rounded-full"
            >
              <FiHome className="inline mr-1" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block p-2 pl-3 hover:bg-blue-600 hover:rounded-full"
            >
              <IoBookOutline className="inline mr-1" />
              About Us
            </Link>
          </li>
          <li>
            <button
              onClick={() => toggleDropdown(2)}
              className=" flex items-center justify-between p-2 w-full text-left pl-3 hover:bg-blue-600 hover:rounded-full"
            >
              <div>
                <FaSchool className="inline mr-1" />
                Academics
              </div>
              <IoIosArrowDown />
            </button>
            {openDropdown === 2 && (
              <ul className="ml-2">
                <li>
                  <Link
                    href="/academics/curriculum"
                    className="block p-2 ml-4 pl-3 hover:bg-blue-600 hover:rounded-full"
                  >
                    Our Curriculum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academics/sports"
                    className="block p-2 ml-4 pl-3 hover:bg-blue-600 hover:rounded-full"
                  >
                    Specialized Sports
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academics/teacher_engagement_program"
                    className="block p-2 ml-4 pl-3 hover:bg-blue-600 hover:rounded-full"
                  >
                    Teacher Engagement Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academics/examination_policy"
                    className="block p-2 ml-4 pl-3 hover:bg-blue-600 hover:rounded-full"
                  >
                    Examination policy
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/admission_process"
              className="block p-2 pl-3 hover:bg-blue-600 hover:rounded-full"
            >
              <FaBook className="inline mr-1" />
              Admission Process
            </Link>
          </li>
          <li>
            <Link
              href="/awards_achievements"
              className="block p-2 pl-3 hover:bg-blue-600 hover:rounded-full"
            >
              <GiTrophyCup className="inline mr-1" />
              Awards and Achievements
            </Link>
          </li>
          <li>
            <Link
              href="/committee"
              className="block p-2 pl-3 hover:bg-blue-600 hover:rounded-full"
            >
              <MdGroups className="inline mr-1" />
              Committees
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block p-2 pl-3 hover:bg-blue-600 hover:rounded-full"
            >
              <IoMdContact className="inline mr-1" />
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="block p-2 pl-3 hover:bg-blue-600 hover:rounded-full"
            >
              <GrGallery className="inline mr-1" />
              Our Gallery
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
