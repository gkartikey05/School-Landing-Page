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
        <div className="bg-[#083342] w-full xl:h-33 lg:h-26 md:h-20"></div>
        <Fade direction="down" triggerOnce={true}>
          <h1 className="text-center font-bold xl:py-14 xl:text-4xl lg:py-12 lg:text-3xl md:py-10 md:text-2xl">
            Contact Us
          </h1>
        </Fade>

        <div className="flex justify-center text-white">
          <div className="w-[40%] bg-[#083342] xl:p-12 lg:p-10 md:pt-8 md:px-8">
            <Fade direction="left" triggerOnce={true}>
              <div>
                <h2 className="xl:text-3xl lg:text-2xl lg:tracking-normal md:text-xl md:font-semibold md:tracking-tight">
                  Contact Information
                </h2>
                <p className="xl:text-[16px] xl:-mt-1 lg:text-sm lg:-mt-1 lg:tracking-normal md:text-xs md:tracking-tight md:-mt-1.5">
                  Connect with us for a live chat
                </p>
              </div>

              <div className="flex items-center xl:text-xl xl:mt-16 lg:gap-5 lg:font-normal lg;mt-14 md:gap-3 md:mt-12 md:font-light">
                <FaPhone />{" "}
                <span className="xl:text-lg lg:text-[16px] md:text-sm">
                  9876543210
                </span>
              </div>

              <div className="flex items-center xl:text-2xl xl:mt-8 lg:gap-5 lg:font-normal lg:mt-6 md:gap-3 md:mt-4 md:tracking-tight md:font-light md:text-lg">
                <IoIosMail />{" "}
                <span className="xl:text-lg lg:text-[16px] md:text-sm">
                  info@atlanticglobalschool.com
                </span>
              </div>

              <div className="flex items-center xl:text-2xl xl:mt-8 lg:gap-5 lg:font-normal lg:mt-6 md:gap-3 md:mt-4 md:tracking-tight md:font-light md:text-lg">
                <FaLocationDot />{" "}
                <span className="xl:text-lg lg:text-[16px] md:text-sm">
                  Address: 6th floor, Eldeco Tower, Vibhuti Khand, Gomti Nagar,
                  Lucknow - 226010
                </span>
              </div>
            </Fade>
          </div>

          <div className="w-[60%] h-100 border border-gray-300 p-8">
            <iframe
              className="w-full h-full"
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
