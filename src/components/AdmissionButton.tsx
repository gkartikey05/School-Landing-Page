"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const AdmissionButton = () => {
  return (
    <Link
      href={"/admission_enquiry"}
      className="fixed flex items-center animate-pulse bg-red-700 text-white font-light rounded-t-xl border border-white cursor-pointer z-50
        px-2 py-1 text-xs sm:px-3 sm:text-sm md:px-4 md:text-base
        rotate-0 left-1/2 -translate-x-1/2 bottom-4 sm:rotate-90 sm:top-72 sm:-left-[77px] sm:bottom-auto"
    >
      ADMISSION ENQUIRY <FiArrowUpRight className="text-base sm:text-lg ml-1" />
    </Link>
  );
};

export default AdmissionButton;
