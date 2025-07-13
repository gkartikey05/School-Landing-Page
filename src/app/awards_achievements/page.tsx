"use client";

import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import { initLightboxJS, SlideshowLightbox } from "lightbox.js-react";
import { Lexend } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FiArrowUpRight } from "react-icons/fi";

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Awards_Achievement() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  });

  const images = [
    {
      src: "https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Mountains with clouds",
    },
    {
      src: "https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Mountains with clear blue sky in background",
    },
    {
      src: "https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Blue lake surrounded by mountains",
    },
  ];

  return (
    <div
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-800`}
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

      {/* Gallery Background image */}
      <Image
        className="w-full -mt-4"
        src={
          "https://pwsbackend.eighteenpixels.in/storage/uploads/1743848250_cbse-banner-6.png"
        }
        alt="about background image"
        width={3000}
        height={3000}
      />

      {/* Gallery Section */}
      <section className="xl:pt-12 xl:pb-20 lg:mx-10 lg:py-10 md:mx-8 md:py-8">
        <Fade direction="down" triggerOnce={true}>
          <h1 className="font-semibold xl:text-3xl lg:text-2xl md:text-xl">
            Atlantic Global School{" "}
            <span className="text-[#1B6B8F] font-semibold">
              Awards & Achievements
            </span>
          </h1>
        </Fade>

        <Fade direction="up" triggerOnce={true}>
          <div className="flex xl:gap-4 xl:mt-7 lg:gap-3 lg:mt-6 md:gap-2 md:mt-5">
            <button
              onClick={() => setFilter("all")}
              className="bg-[#1B6B8F] hover:opacity-80 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:duration-500 focus:ease-in-out text-white border cursor-pointer xl:text-[16px] xl:px-4 lg:text-sm md:text-xs md:py-2 md:px-3 md:rounded"
            >
              SHOW ALL
            </button>
            <button
              onClick={() => setFilter("school")}
              className="border cursor-pointer hover:opacity-80 hover:bg-gray-200 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:duration-500 focus:ease-in-out xl:text-[16px] xl:px-4 lg:text-sm md:text-xs md:py-2 md:px-3 md:rounded"
            >
              SCHOOL ACHIEVEMENTS/AWARDS
            </button>
            <button
              onClick={() => setFilter("student")}
              className="border cursor-pointer hover:opacity-80 hover:bg-gray-200 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:duration-500 focus:ease-in-out xl:text-[16px] xl:px-4 lg:text-sm md:text-xs md:py-2 md:px-3 md:rounded"
            >
              STUDENTS ACHIEVEMENTS/AWARDS
            </button>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce={true}>
          <div className="flex justify-start gap-5 lg:mt-10 md:mt-7">
            {/* School Awards/Achievement */}
            {(filter === "all" || filter === "school") && (
              <div className="border border-gray-300 lg:rounded-lg md:w-1/4 md:rounded">
                <SlideshowLightbox
                  lightboxIdentifier="lightbox1"
                  framework="next"
                  images={images}
                  className="cursor-pointer"
                >
                  <Image
                    src={
                      "https://img.freepik.com/free-photo/front-view-female-doctor-sitting-with-christmas-presents-tree-yellow-desk_179666-10497.jpg?t=st=1744356228~exp=1744359828~hmac=64aae5880ce8af199df02af87d8c685a94e1be956ac798900e96bee22df19ffb&w=996"
                    }
                    alt="Christmas Event Cover Image"
                    width={500}
                    height={500}
                    className="lg:rounded-t-lg md:rounded-t"
                    data-lightboxjs="lightbox1" // important for triggering lightbox
                  />
                  {images.map((image) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      height={200}
                      width={200}
                      data-lightboxjs="lightbox1"
                      quality={80}
                      className="hidden"
                    />
                  ))}
                </SlideshowLightbox>

                <div className="xl:px-4 xl:pb-4 lg:px-3 lg:pb-3 md:px-2 md:pb-2">
                  <h4 className="xl:mt-3 xl:text-lg lg:text-[16px] lg:mt-2 md:mt-1 md:text-xs md:font-semibold">
                    Christmas Celebration
                  </h4>
                  <p className="xl:text-[16px] xl:leading-4 lg:text-sm  md:text-xs">
                    School Celebrating Christmas Events
                  </p>
                </div>
              </div>
            )}

            {/* Student Awards/Achievement */}
            {(filter === "all" || filter === "student") && (
              <div className="border border-gray-300 lg:rounded-lg md:w-1/4 md:rounded">
                <SlideshowLightbox
                  lightboxIdentifier="lightbox2"
                  framework="next"
                  images={images}
                  className="cursor-pointer"
                >
                  <Image
                    src="https://img.freepik.com/free-photo/answering-lesson_1098-14613.jpg?t=st=1744356313~exp=1744359913~hmac=c81c38cc7e2004ceaf93557d7ac5ce15af979064d37d22c50523654ea322cfe9&w=900"
                    alt="Inter-House Competition Cover Image"
                    width={500}
                    height={500}
                    className="lg:rounded-t-lg md:rounded-t"
                    data-lightboxjs="lightbox2"
                  />
                  {images.map((image) => (
                    <Image
                      key={image.src + "2023"}
                      src={image.src}
                      alt={image.alt}
                      height={200}
                      width={200}
                      data-lightboxjs="lightbox2"
                      quality={80}
                      className="hidden"
                    />
                  ))}
                </SlideshowLightbox>

                <div className="xl:px-4 xl:pb-4 lg:px-3 lg:pb-3 md:px-2 md:pb-2">
                  <h4 className="xl:mt-3 xl:text-lg lg:text-[16px] lg:mt-2 md:mt-1 md:text-xs md:font-semibold">
                    Inter-House Competition
                  </h4>
                  <p className="xl:text-[16px] xl:leading-4 lg:text-sm md:text-xs">
                    Students Engaging in Inter-House Competition
                  </p>
                </div>
              </div>
            )}
          </div>
        </Fade>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
