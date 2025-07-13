"use client";

import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import { Lexend } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FiArrowUpRight } from "react-icons/fi";
import { initLightboxJS, SlideshowLightbox } from "lightbox.js-react";
import { useEffect, useState } from "react";

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Gallery() {
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

      {/* Gallery Background image */}
      <Image
        className="w-full h-40 sm:h-64 md:h-80 lg:h-96 xl:h-screen object-cover"
        src={
          "https://img.freepik.com/free-photo/old-masters-picture-gallery-dresden-night_1398-2646.jpg?t=st=1744009521~exp=1744013121~hmac=b07acb871b940ab2145cdf6862ac764d20829faff6b5d12ed4466bec8bf1b154&w=1380"
        }
        alt="about background image"
        width={3000}
        height={3000}
      />

      {/* Gallery Section */}
      <section className="mx-2 sm:mx-4 md:mx-8 lg:mx-10 xl:mx-16 py-4 md:py-8 lg:py-10 xl:py-12">
        <Fade direction="down" triggerOnce={true}>
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
            Atlantic Global School{" "}
            <span className="text-[#1B6B8F] font-semibold">Photo Gallery</span>
          </h1>
        </Fade>

        <Fade direction="up" triggerOnce={true}>
          <div className="flex flex-col sm:flex-row xl:gap-4 xl:mt-7 lg:gap-3 lg:mt-6 md:gap-2 md:mt-5 gap-2 sm:gap-3">
            <button
              onClick={() => setFilter("all")}
              className="bg-[#1B6B8F] hover:opacity-80 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:duration-500 focus:ease-in-out text-white border cursor-pointer text-xs sm:text-sm md:text-base xl:text-[16px] px-2 sm:px-3 xl:px-4 py-1 sm:py-2 md:py-2 rounded mb-2 sm:mb-0"
            >
              SHOW ALL
            </button>
            <button
              onClick={() => setFilter("2024")}
              className="border cursor-pointer hover:opacity-80 hover:bg-gray-200 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:duration-500 focus:ease-in-out text-xs sm:text-sm md:text-base xl:text-[16px] px-2 sm:px-3 xl:px-4 py-1 sm:py-2 md:py-2 rounded mb-2 sm:mb-0"
            >
              SESSION 2024-2025
            </button>
            <button
              onClick={() => setFilter("2023")}
              className="border cursor-pointer hover:opacity-80 hover:bg-gray-200 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:duration-500 focus:ease-in-out text-xs sm:text-sm md:text-base xl:text-[16px] px-2 sm:px-3 xl:px-4 py-1 sm:py-2 md:py-2 rounded mb-2 sm:mb-0"
            >
              SESSION 2023-2024
            </button>
            <button
              onClick={() => setFilter("2022")}
              className="border cursor-pointer hover:opacity-80 hover:bg-gray-200 focus:outline-none focus:ring-3 focus:ring-blue-200 focus:duration-500 focus:ease-in-out text-xs sm:text-sm md:text-base xl:text-[16px] px-2 sm:px-3 xl:px-4 py-1 sm:py-2 md:py-2 rounded"
            >
              SESSION 2022-2023
            </button>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce={true}>
          <div className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-5 lg:mt-4 md:mt-3">
            {/* SESSION 2024-2025 */}
            {(filter === "all" || filter === "2024") && (
              <div className="border border-gray-300 rounded-lg w-full sm:w-1/2 md:w-1/3 mb-2 sm:mb-0">
                <SlideshowLightbox
                  lightboxIdentifier="lightbox1"
                  framework="next"
                  images={images}
                  className="cursor-pointer"
                >
                  <Image
                    src={
                      "https://img.freepik.com/premium-photo/historical-administrative-buildings-vyborg-russia_533998-14589.jpg?w=826"
                    }
                    alt="Gallery Background"
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

                <div className="px-2 py-2 xl:px-6 xl:pb-4 lg:px-5 lg:pb-3 md:px-4 md:pb-2">
                  <h4 className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                    Memories
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-lg">
                    School Memories with Students
                  </p>
                </div>
              </div>
            )}

            {/* SESSION 2023-2024 */}
            {(filter === "all" || filter === "2023") && (
              <div className="border border-gray-300 rounded-lg w-full sm:w-1/2 md:w-1/3 mb-2 sm:mb-0">
                <SlideshowLightbox
                  lightboxIdentifier="lightbox2"
                  framework="next"
                  images={images}
                  className="cursor-pointer"
                >
                  <Image
                    src="https://img.freepik.com/premium-photo/large-sized-long-building-childs_1106124-7.jpg?w=826"
                    alt="Session 2023-2024"
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

                <div className="px-2 py-2 xl:px-6 xl:pb-4 lg:px-5 lg:pb-3 md:px-4 md:pb-2">
                  <h4 className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                    Memories
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-lg">
                    School Memories with Faculty
                  </p>
                </div>
              </div>
            )}

            {/* SESSION 2022-2023 */}
            {(filter === "all" || filter === "2022") && (
              <div className="border border-gray-300 rounded-lg w-full sm:w-1/2 md:w-1/3">
                <SlideshowLightbox
                  lightboxIdentifier="lightbox2"
                  framework="next"
                  images={images}
                  className="cursor-pointer"
                >
                  <Image
                    src="https://img.freepik.com/premium-photo/building-against-blue-sky_1048944-17035886.jpg?w=1380"
                    alt="Session 2023-2024"
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

                <div className="px-2 py-2 xl:px-6 xl:pb-4 lg:px-5 lg:pb-3 md:px-4 md:pb-2">
                  <h4 className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                    Memories
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-lg">
                    School Memories with Both
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
