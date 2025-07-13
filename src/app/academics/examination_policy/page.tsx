"use client"

import Footer from "@/components/Footer"
import StickyHeader from "@/components/StickyHeader"
import StickyHeaderTwo from "@/components/StickyHeaderTwo"
import { Lexend } from "next/font/google"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Examination_Policy(){
  return (
    <div
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-800 text-justify`}
    >
      {/* Header Section */}
      <header>
        <StickyHeader />
        <StickyHeaderTwo />
      </header>

      {/* Admission Process Background image */}
      <Image
        className="w-full"
        src={
          "https://img.freepik.com/premium-photo/kids-school-competence_1260728-27060.jpg?w=826"
        }
        alt="about background image"
        width={3000}
        height={3000}
      />

      {/* Admission Enquiry Form Section */}
      <section className="xl:mx-16 xl:py-16 lg:mx-12 lg:py-10 md:mx-8 md:py-10">
        <Fade direction="left" triggerOnce={true}>
          <h1 className="font-semibold xl:text-4xl lg:text-3xl md:text-2xl">
            Admission Procedure & Age{" "}
            <span className="text-[#1B6B8F] font-bold">Criteria</span>
          </h1>
          <h2 className="xl:text-xl lg:text-lg md:-mt-1">
            Admission Age Criteria
          </h2>
        </Fade>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}