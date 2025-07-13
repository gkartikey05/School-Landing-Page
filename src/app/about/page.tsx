"use client";

import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import Image from "next/image";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import Footer from "@/components/Footer";

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function About() {
  return (
    <div
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-800 text-justify min-h-screen`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 w-full">
        <StickyHeader />
        <StickyHeaderTwo />
      </header>

      {/* Admission Enquiry button position is fixed */}
      <Link
        href="/admission_enquiry"
        className="fixed rotate-90 top-72 -left-[77px] text-xs animate-pulse flex items-center bg-red-700 text-white px-3 py-1 font-light rounded-t-xl border border-white cursor-pointer z-50 md:top-72 md:-left-[77px] sm:top-32 sm:-left-[60px] lg:top-80 lg:-left-[90px] xl:top-96 xl:-left-[100px]"
      >
        ADMISSION ENQUIRY <FiArrowUpRight className="text-lg" />
      </Link>

      {/* About Background image */}
      <Image
        className="w-full h-40 sm:h-64 md:h-80 lg:h-96 object-cover"
        src={
          "https://img.freepik.com/premium-photo/kids-school-zest_1260728-28217.jpg?w=826"
        }
        alt="about background image"
        width={3000}
        height={3000}
      />

      {/* About Description */}
      <section className="mx-2 sm:mx-4 md:mx-8 xl:py-16 lg:py-10 md:py-10 py-4">
        <Fade direction="down" triggerOnce={true}>
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            About <span className="text-[#1B6B8F] font-bold">Us</span>
          </h1>
        </Fade>
        <div className="flex flex-col md:flex-row justify-between items-center xl:mt-5 xl:gap-14 lg:mt-4 lg:gap-10 md:mt-2 md:gap-8 gap-4">
          <p className="w-full md:w-[60%] xl:w-[55%] text-xs sm:text-sm md:text-base xl:text-[17px] h-auto md:h-48 lg:h-80 xl:h-full overflow-y-auto">
            Atlantic Global School is built on the strong foundation of the
            Pacific Group, the esteemed promoters of Delhi Public School
            Indirapuram (established in 2003) and Delhi Public School Raj Nagar
            Extension (established in 2015). As a state-of-the-art institution
            under the group&apos;s own banner, the school is set amidst 10 acres
            of lush greenery, providing an inspiring environment for learning.
            With a distinguished faculty, world-class sports facilities that
            meet international standards, and a wide array of global academic
            programs, Atlantic Global School is a dream destination for modern
            learners. It offers excellence in academics, sports, extracurricular
            activities, life skills, soft skills, international programs, and
            cutting-edge technology. Guided by the principles of passion and
            compassion—passion for meaningful initiatives and compassion for all
            living beings—the school is deeply committed to the United
            Nations&apos; Sustainable Development Goals (SDGs). Through
            proactive initiatives, it fosters awareness and action among
            students, parents, and stakeholders. In this nurturing and inclusive
            ecosystem, students develop both intellectual and emotional
            strength, empowering them to overcome life&apos;s challenges with
            confidence, resilience, and a strong sense of purpose.
          </p>

          <Fade
            direction="right"
            triggerOnce={true}
            className="w-full md:w-[40%] lg:w-[45%] xl:w-[45%]"
          >
            <div className="relative bg-gradient-to-b from-blue-500 to-yellow-400 py-2 sm:py-3 md:py-3 xl:py-7 pr-2 sm:pr-3 md:pr-3 xl:pr-7">
              <Image
                className="w-full h-32 sm:h-40 md:h-56 lg:h-72 xl:h-auto object-cover bg-white"
                src={
                  "https://img.freepik.com/premium-photo/group-diverse-kids-studio-portrait_53876-79141.jpg?w=1060"
                }
                alt="about section image"
                width={1000}
                height={1000}
              />
              <span className="absolute w-[40%] h-full border-white py-1 pl-1 top-0 left-0"></span>
            </div>
          </Fade>
        </div>
      </section>

      {/* Moto Section */}
      <section className="flex flex-col md:flex-row justify-between items-center mx-2 sm:mx-4 md:mx-10 lg:mx-16 xl:mx-18 gap-4 md:gap-14 lg:gap-18 xl:gap-30 py-4 md:py-10 lg:py-10 xl:py-16">
        <Fade
          direction="left"
          triggerOnce={true}
          className="w-full md:w-[48%] lg:w-[45%] xl:w-[50%]"
        >
          <Image
            className="shadow-2xl w-full h-32 sm:h-40 md:h-56 lg:h-72 xl:h-auto object-cover"
            src={
              "https://img.freepik.com/free-vector/kids-teacher-poster_1284-12408.jpg?t=st=1743672786~exp=1743676386~hmac=7cb991835cafcce517ecac83d2142339684b5356e5006610f651dae56bbc4f53&w=740"
            }
            alt=""
            width={1000}
            height={1000}
          />
        </Fade>
        <div className="w-full md:w-[52%] lg:w-[55%] xl:w-[50%]">
          <Fade direction="up" triggerOnce={true}>
            <h2 className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-xl mb-2 lg:mb-7 md:font-bold md:mb-4">
              The school&apos;s motto, mission, and core values reflect a deep
              commitment to positive initiatives and kindness toward all beings,
              big and small.
            </h2>
          </Fade>
          <h3 className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px] mb-1 lg:mb-4 md:font-bold md:mb-2">
            The school&apos;s motto, mission, and core values reflect a deep
            commitment to positive initiatives and kindness toward all beings,
            big and small.
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px] h-auto md:h-60 lg:h-75 xl:h-full overflow-y-auto">
            At Atlantic Global School, we strive to create a dynamic learning
            environment that extends beyond the classroom, offering diverse
            opportunities for holistic growth. Our institution has become the
            preferred choice for modern learners who seek excellence without
            compromise. Our mission is to nurture global citizens who actively
            contribute to society. With state-of-the-art infrastructure and
            innovative technology, we bring academic concepts to life through
            experiential learning. The school fosters a collaborative atmosphere
            where students of all abilities engage in small group activities,
            enhancing their self-confidence, communication, and critical
            thinking skills. This approach ensures they develop both
            intellectual and emotional strength, equipping them to navigate
            life&apos;s challenges with resilience and wisdom. Guided by the
            principles of passion and compassion—passion for meaningful
            initiatives and compassion for all living beings—the school is
            deeply committed to the United Nations&apos; Sustainable Development
            Goals (SDGs). Through proactive initiatives, it fosters awareness
            and action among students, parents, and stakeholders. In this
            nurturing and inclusive ecosystem, students develop both
            intellectual and emotional strength, empowering them to overcome
            life&apos;s challenges with confidence, resilience, and a strong
            sense of purpose.
          </p>
        </div>
      </section>

      {/* Emblem Section */}
      <section className="flex flex-col md:flex-row w-full h-auto md:gap-5 py-4 md:py-8 px-2 md:px-8 bg-green-600 gap-4">
        <div className="w-full md:w-[40%] lg:w-[50%]">
          <Fade direction="left" triggerOnce={true}>
            <h2 className="font-bold text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 md:mb-3">
              Our Emblem
            </h2>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px]">
              The school&apos;s logo is a powerful representation of its vision
              and values. Designed in the form of a sacred mark traditionally
              worn on the forehead, it symbolizes the institution&apos;s
              deep-rooted commitment to instilling Indian cultural values and
              principles in every student. Additionally, its resemblance to a
              blooming sapling reflects the school&apos;s dedication to
              continuous growth, progress, and the steady achievement of its
              goals. The vibrant colors of the logo embody energy, enthusiasm,
              and the school&apos;s unwavering belief in a harmonious, inclusive
              society where diversity is embraced, and individuals coexist with
              mutual respect. Pacific World School is committed to providing
              equal opportunities, quality education, and meaningful exposure to
              all members of its community, including students, teachers, and
              support staff, fostering an environment of collaboration and
              shared growth.
            </p>
          </Fade>
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-[60%] lg:w-[50%] gap-2 md:gap-1">
          <div className="w-full h-full shadow-xl bg-white px-2 py-2 sm:px-3 sm:py-2 md:px-3 md:py-2 lg:px-4 lg:py-3 xl:px-5 xl:py-4 rounded-lg md:max-w-[50%]">
            <Fade direction="up" triggerOnce={true}>
              <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-1 lg:mb-3.5 md:mb-4">
                Our Mission
              </h3>
              <div className="relative h-full overflow-hidden">
                <div className="marquee-vertical-mission">
                  <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px]">
                    Pacific World School aspires to be a premier hub of
                    educational excellence, dedicated to the holistic
                    development of the mind, body, and soul while nurturing
                    compassionate, innovative, and globally conscious citizens.
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="w-full h-full shadow-xl bg-white px-2 py-2 sm:px-3 sm:py-2 md:px-3 md:py-2 lg:px-4 lg:py-3 xl:px-5 xl:py-4 rounded-lg md:max-w-[50%]">
            <Fade direction="up" triggerOnce={true}>
              <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-1 lg:mb-3.5 md:mb-4">
                Our Vision
              </h3>
              <div className="relative h-full overflow-hidden">
                <div className="marquee-vertical-vision">
                  <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px]">
                    We aspire… therefore, we achieve! At Pacific World School,
                    we are dedicated to delivering a high-quality education that
                    fosters a transformative learning experience for every
                    student. Our school provides a safe, nurturing, and joyful
                    environment where students are empowered to grow into
                    principled, compassionate, and well-rounded individuals,
                    ready to make meaningful contributions to society.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
