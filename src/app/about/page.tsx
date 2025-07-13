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
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-800 text-justify`}
    >
      {/* Header */}
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

      {/* About Background image */}
      <Image
        className="w-full"
        src={
          "https://img.freepik.com/premium-photo/kids-school-zest_1260728-28217.jpg?w=826"
        }
        alt="about background image"
        width={3000}
        height={3000}
      />

      {/* About Description */}
      <section className="mx-8 xl:py-16 lg:py-10 md:py-10">
        <Fade direction="down" triggerOnce={true}>
          <h1 className="font-semibold xl:text-4xl lg:text-3xl md:text-2xl">
            About <span className="text-[#1B6B8F] font-bold">Us</span>
          </h1>
        </Fade>
        <div className="flex justify-between items-center xl:mt-5 xl:gap-14 lg:mt-4 lg:gap-10 md:mt-2 md:gap-8">
          <p className="xl:w-[55%] xl:text-[17px] xl:h-full lg:w-[55%] md:w-[60%] lg:text-sm lg:h-80 lg:overflow-y-auto md:text-xs md:h-48 md:overflow-y-auto">
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
            className="xl:w-[45%] lg:w-[45%] md:w-[40%]"
          >
            <div className="relative bg-gradient-to-b from-blue-500 to-yellow-400 xl:py-7 xl:pr-7 lg:py-5 lg:pr-5 md:py-3 md:pr-3">
              <Image
                className="w-full h-auto xl:py-1 xl:pr-1 lg:py-1 lg:pr-1 md:py-0.5 md:pr-0.5 bg-white"
                src={
                  "https://img.freepik.com/premium-photo/group-diverse-kids-studio-portrait_53876-79141.jpg?w=1060"
                }
                alt="about section image"
                width={1000}
                height={1000}
              />
              <span className="absolute w-[40%] h-full border-white py-1 pl-1 top-0 left-0 xl:border-y-28 lg:border-y-20 md:border-y-12"></span>
            </div>
          </Fade>
        </div>
      </section>

      {/* Moto Section */}
      <section className="flex justify-between items-center xl:mx-18 xl:gap-30 xl:py-16 lg:mx-16 lg:gap-18 lg:py-10 md:mx-10 md:gap-14 md:py-10">
        <Fade
          direction="left"
          triggerOnce={true}
          className="xl:w-[50%] lg:w-[45%] md:w-[48%]"
        >
          <Image
            className="shadow-2xl md:w-full"
            src={
              "https://img.freepik.com/free-vector/kids-teacher-poster_1284-12408.jpg?t=st=1743672786~exp=1743676386~hmac=7cb991835cafcce517ecac83d2142339684b5356e5006610f651dae56bbc4f53&w=740"
            }
            alt=""
            width={1000}
            height={1000}
          />
        </Fade>
        <div className="xl:w-[50%] lg:w-[55%] md:w-[52%]">
          <Fade direction="up" triggerOnce={true}>
            <h2 className="xl:text-xl lg:text-[16px] lg:mb-7 md:font-bold md:text-sm md:mb-4">
              The school&apos;s motto, mission, and core values reflect a deep
              commitment to positive initiatives and kindness toward all beings,
              big and small.
            </h2>
          </Fade>
          <h3 className="xl:text-[16px] lg:text-sm lg:mb-4 md:font-bold md:text-xs md:mb-2">
            The school&apos;s motto, mission, and core values reflect a deep
            commitment to positive initiatives and kindness toward all beings,
            big and small.
          </h3>
          <p className="xl:text-[16px] xl:h-full lg:text-sm lg:h-75 lg:overflow-y-auto md:text-xs md:h-60 md:overflow-y-auto">
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
      <section className="flex w-full h-[20%] md:gap-5 md:py-8 md:px-8 bg-green-600">
        <div className="lg:w-[50%] md:w-[40%]">
          <Fade direction="left" triggerOnce={true}>
            <h2 className="font-bold text-white xl:text-3xl lg:text-2xl md:text-xl md:mb-3">
              Our Emblem
            </h2>
            <p className="text-white xl:text-[16px] lg:text-sm md:text-xs">
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

        <div className="flex  lg:w-[50%] md:w-[60%] md:gap-1">
          <div className="w-full h-full shadow-xl bg-white xl:px-5 xl:py-4 lg:px-4 lg:py-3 md:px-3 md:py-2 lg:rounded-lg md:max-w-[50%] md:rounded">
            <Fade direction="up" triggerOnce={true}>
              <h3 className="font-bold xl:text-xl lg:text-lg lg:mb-3.5 md:mb-4">
                Our Mission
              </h3>
              <div className="relative h-full overflow-hidden">
                <div className="marquee-vertical-mission">
                  <p className="xl:text-[16px] lg:text-sm md:text-xs">
                    Pacific World School aspires to be a premier hub of
                    educational excellence, dedicated to the holistic
                    development of the mind, body, and soul while nurturing
                    compassionate, innovative, and globally conscious citizens.
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="w-full h-full shadow-xl bg-white xl:px-5 xl:py-4 lg:px-4 lg:py-3 md:px-3 md:py-2 lg:rounded-lg md:max-w-[50%] md:rounded">
            <Fade direction="up" triggerOnce={true}>
              <h3 className="font-bold xl:text-xl lg:text-lg lg:mb-3.5 md:mb-4">
                Our Vision
              </h3>
              <div className="relative h-full overflow-hidden">
                <div className="marquee-vertical-vision">
                  <p className="xl:text-[16px] lg:text-sm md:text-xs">
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
