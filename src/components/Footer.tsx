import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { TiVendorAndroid } from "react-icons/ti";

export default function Footer() {
  return (
    <div>
      {/* Quick Links Section */}
      <section
        id="contact"
        className="flex justify-around items-start bg-[#f8f6f6] w-full xl:gap-5 xl:pt-16 xl:pb-9 md:px-10 md:pt-10 md:pb-7"
      >
        <div>
          <h3 className="text-[#212529] font-semibold xl:text-2xl xl:mb-7 lg:text-xl md:mb-4 md:text-lg">
            QUICK LINKS
          </h3>
          <Link
            href={"/about"}
            className="block text-[#333] font-medium hover:text-blue-600 xl:text-[16px] xl:mb-4 lg:text-sm md:text-xs md:mb-3"
          >
            About Us
          </Link>
          <Link
            href={"/admission_enquiry"}
            className="block text-[#333] font-medium hover:text-blue-600 xl:text-[16px] xl:mb-4 lg:text-sm md:text-xs md:mb-3"
          >
            Admissions
          </Link>
          <Link
            href={"/curriculum"}
            className="block text-[#333] font-medium hover:text-blue-600 xl:text-[16px] xl:mb-4 lg:text-sm md:text-xs md:mb-3"
          >
            Academics
          </Link>
          <Link
            href={"#"}
            className="block text-[#333] font-medium hover:text-blue-600 xl:text-[16px] xl:mb-4 lg:text-sm md:text-xs md:mb-3"
          >
            Career
          </Link>
          <Link
            href={"#"}
            className="block text-[#333] font-medium hover:text-blue-600 xl:text-[16px] xl:mb-4 lg:text-sm md:text-xs md:mb-3"
          >
            Blog
          </Link>
          <Link
            href={"#"}
            className="block text-[#333] font-medium hover:text-blue-600 xl:text-[16px] lg:text-sm md:text-xs"
          >
            Transfer Certificate
          </Link>
        </div>

        <div>
          <h3 className="text-[#212529] font-semibold xl:mb-7 xl:text-2xl lg:text-xl md:text-lg md:mb-4">
            CONTACT US
          </h3>

          <div className="block text-[#333] font-medium xl:text-[16px] xl:mb-4 lg:text-sm md:text-xs md:mb-3">
            Admission:{" "}
            <span className="text-blue-600 font-bold xl:text-[16px] lg:text-sm md:text-xs">
              9876543210
            </span>
          </div>

          <div className="block text-[#333] font-medium xl:text-[16px] xl:mb-4 lg:text-sm md:text-xs md:mb-3">
            Frontdesk:
          </div>

          <div className="block text-[#333] font-medium xl:text-[16px] xl:mb-5 lg:text-sm lg:mb-4 md:text-xs md:mb-3">
            Email:{" "}
            <span className="text-blue-600 font-bold xl:text-[16px] lg:text-sm md:text-xs md:tracking-tighter">
              info@atlanticglobalschool.com
            </span>
          </div>

          <div className="flex justify-start xl:gap-6 lg:gap-5 md:gap-4">
            <Link
              href={"#"}
              className="xl:text-4xl lg:text-3xl md:text-2xl text-blue-600"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href={"#"}
              className="xl:text-4xl lg:text-3xl md:text-2xl text-red-500"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"#"}
              className="xl:text-4xl lg:text-3xl md:text-2xl text-blue-800"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"#"}
              className="xl:text-4xl lg:text-3xl md:text-2xl text-red-500"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-[#212529] font-semibold xl:mb-7 xl:text-2xl lg:text-xl md:text-lg md:mb-4">
            Gallery
          </h3>
          <Link
            href={"/gallery"}
            className="block text-sm text-[#333] font-medium hover:text-blue-600 xl:text-[16px] xl:mb-4 lg:text-sm md:text-xs md:mb-3"
          >
            Gallery
          </Link>
          <Link
            href={"/awards_achievements"}
            className="block text-sm text-[#333] font-medium hover:text-blue-600 xl:text-[16px] xl:mb-4 lg:text-sm md:text-xs md:mb-3"
          >
            Awards and Achievements
          </Link>
        </div>

        <div>
          <h3 className="text-[#212529] mx-auto font-semibold xl:mb-8 xl:text-2xl lg:text-xl md:text-lg md:mb-4">
            Mobile App
          </h3>

          <Link href={"#"}>
            <button className="flex items-center justify-center box-border bg-lime-300 text-white rounded xl:w-32 xl:h-15 xl:mb-5 lg:mb-4 md:w-24 md:h-11 md:mb-3">
              <TiVendorAndroid className="xl:text-5xl lg:text-4xl md:text-3xl" />
              <span className="px-1 xl:text-xl lg:text-[15px] md:text-sm">
                Android
              </span>
            </button>
          </Link>
          <Link href={"#"}>
            <button className="flex items-center justify-center box-border gap-1 bg-black text-white md:rounded xl:w-32 xl:h-15 md:w-24 md:h-11 md:mb-3">
              <FaApple className="xl:text-4xl lg:text-3xl md:text-2xl" />
              <span className="px-1 xl:text-xl md:text-[16px]">iOS</span>
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-linear-to-r from-[#3fb6bc] to-[#69e59b]">
        <div className="text-white text-center font-semibold xl:py-4 xl:text-sm lg:py-3.5 lg:text-xs md:py-2 md:text-[11px]">
          Copyright © Pacific Global School 2020 | All Rights Reserved | Terms
          and Conditions | Privacy Policy
        </div>
      </section>
    </div>
  );
}
