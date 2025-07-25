"use client";

import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import { Lexend } from "next/font/google";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Committee() {
  return (
    <div
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-800 text-justify min-h-screen`}
    >
      {/* Header Section */}
      <header>
        <StickyHeader />
        <StickyHeaderTwo />
      </header>

      {/* Admission Process Background image */}
      <Image
        className="w-full h-40 sm:h-64 md:h-80 lg:h-96 object-cover"
        src={
          "https://img.freepik.com/premium-photo/kids-school-competence_1260728-27060.jpg?w=826"
        }
        alt="about background image"
        width={3000}
        height={3000}
      />

      {/* Admission Enquiry Form Section */}
      <section className="mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 py-4 md:py-10 lg:py-10 xl:py-16">
        <Fade direction="left" triggerOnce={true}>
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Admission Procedure & Age{" "}
            <span className="text-[#1B6B8F] font-bold">Criteria</span>
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:-mt-1">
            Admission Age Criteria
          </h2>
        </Fade>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
