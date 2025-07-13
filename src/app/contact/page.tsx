"use client";

import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import { Lexend } from "next/font/google";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Contact() {
  return (
    <div
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-800 text-justify`}
    >
      {/* Header Section */}
      <header>
        <StickyHeader />
        <StickyHeaderTwo />
      </header>

      {/* Admission Enquiry button position is fixed */}
      <Link
        href="/admission_enquiry"
        className="fixed rotate-90 top-72 -left-[77px] text-xs animate-pulse flex items-center bg-red-700 text-white px-3 py-1 font-light rounded-t-xl border border-white cursor-pointer z-99"
      >
        ADMISSION ENQUIRY <FiArrowUpRight className="text-lg" />
      </Link>

      {/* Contact Section */}
      <section>
        <div className="bg-[#083342] w-full h-16 sm:h-20 md:h-20 lg:h-26 xl:h-33"></div>
        <Fade direction="down" triggerOnce={true}>
          <h1 className="text-center font-bold xl:py-14 xl:text-4xl lg:py-12 lg:text-3xl md:py-10 md:text-2xl">
            Contact Us
          </h1>
        </Fade>

        <div className="flex flex-col md:flex-row justify-center text-white gap-4 md:gap-0">
          <div className="w-full md:w-[40%] bg-[#083342] p-4 sm:p-6 md:pt-8 md:px-8 lg:p-10 xl:p-12 mb-4 md:mb-0">
            <Fade direction="left" triggerOnce={true}>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold lg:tracking-normal md:tracking-tight">
                  Contact Information
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px] -mt-1 lg:tracking-normal md:tracking-tight md:-mt-1.5">
                  Connect with us for a live chat
                </p>
              </div>

              <div className="flex items-center gap-2 md:gap-3 xl:text-xl xl:mt-16 lg:gap-5 lg:font-normal lg:mt-14 md:mt-12 md:font-light">
                <FaPhone />{" "}
                <span className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-lg">
                  9876543210
                </span>
              </div>

              <div className="flex items-center gap-2 md:gap-3 xl:text-2xl xl:mt-8 lg:gap-5 lg:font-normal lg:mt-6 md:mt-4 md:tracking-tight md:font-light md:text-lg">
                <IoIosMail />{" "}
                <span className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-lg">
                  info@atlanticglobalschool.com
                </span>
              </div>

              <div className="flex items-center gap-2 md:gap-3 xl:text-2xl xl:mt-8 lg:gap-5 lg:font-normal lg:mt-6 md:mt-4 md:tracking-tight md:font-light md:text-lg">
                <FaLocationDot />{" "}
                <span className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-lg">
                  Address: 6th floor, Eldeco Tower, Vibhuti Khand, Gomti Nagar,
                  Lucknow - 226010
                </span>
              </div>
            </Fade>
          </div>

          <div className="w-full md:w-[60%] h-64 sm:h-80 md:h-100 border border-gray-300 p-4 sm:p-6 md:p-8">
            <iframe
              className="w-full h-full rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1706.3404895406184!2d81.00507714727566!3d26.86767726552762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a3f8fe3c5%3A0x6203fcb26fed2dcc!2sEighteen%20Pixels%20India%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1743998947774!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
