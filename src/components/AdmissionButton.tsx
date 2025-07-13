"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const AdmissionButton = () => {
  return (
    <Link
      href={"/admission_enquiry"}
      className="fixed rotate-90 top-72 -left-[77px] text-xs animate-pulse flex items-center bg-red-700 text-white px-3 py-1 font-light rounded-t-xl border border-white cursor-pointer z-99"
    >
      ADMISSION ENQUIRY <FiArrowUpRight className="text-lg" />
    </Link>
  );
};

export default AdmissionButton;
