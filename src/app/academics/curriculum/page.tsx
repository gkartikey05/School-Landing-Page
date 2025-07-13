"use client";

import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Description_Image from "../../../components/assets/girl-watching-boy-lowering-pipette-into-flask-two.jpg";
import CraftTopImage from "../../../components/assets/crafts top.jpg";
import CraftBottomOneImage from "../../../components/assets/crafts bottom one.jpg";
import CraftBottomTwoImage from "../../../components/assets/crafts bottom two.jpg";
import { Fade } from "react-awesome-reveal";
import { Lexend } from "next/font/google";
import Footer from "@/components/Footer";

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Curriculum() {
  return (
    <div
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-800 text-justify min-h-screen`}
    >
      {/* Header Section */}
      <header className="sticky top-0 z-50 w-full">
        <StickyHeader />
        <StickyHeaderTwo />
      </header>

      {/* Admission Enquiry button position is fixed */}
      <Link
        href="/admission_enquiry"
        className="fixed rotate-90 top-72 -left-[78px] text-xs animate-pulse flex items-center bg-red-700 text-white px-3 py-1 font-light rounded-t-xl border border-white cursor-pointer z-50 md:top-72 md:-left-[78px] sm:top-32 sm:-left-[60px] lg:top-80 lg:-left-[90px] xl:top-96 xl:-left-[100px]"
      >
        ADMISSION ENQUIRY <FiArrowUpRight className="text-lg" />
      </Link>

      {/* Acddemics Background image */}
      <Image
        className="w-full h-40 sm:h-64 md:h-80 lg:h-96 object-cover"
        src={
          "https://img.freepik.com/premium-photo/photograph-indian-school-girl-aged-1215_1177187-43828.jpg?w=826"
        }
        alt="about background image"
        width={1000}
        height={1000}
      />

      {/* Academics Description */}
      <section className="mx-2 sm:mx-4 md:mx-9 lg:mx-12 xl:mx-20 py-4 md:py-10 lg:py-10 xl:py-16">
        <div>
          <Fade direction="left" triggerOnce={true}>
            <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Academics{" "}
              <span className="text-[#1B6B8F] font-bold">Innovators</span>
            </h1>
            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:-mt-1">
              Fueling Intellectual Growth at Atlantic Global School
            </h2>
          </Fade>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 xl:gap-0 xl:mt-0 lg:mt-7 lg:gap-5 md:mt-5 md:gap-3">
            <Fade direction="up" triggerOnce={true}>
              <p className="w-full md:w-[80%] xl:w-[90%] text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px] h-auto md:h-48 lg:h-80 xl:h-full overflow-y-auto">
                Atlantic Global School is committed to crafting a
                forward-thinking curriculum that shapes students into
                well-rounded, future-ready individuals capable of thriving in an
                ever-evolving educational landscape. Aligned with the principles
                of the National Curriculum Framework (NCF 2023) and the National
                Education Policy 2020 (NEP 2020), our curriculum is thoughtfully
                structured to deliver meaningful and impactful learning
                experiences. We emphasize innovative and learner-centric
                teaching methodologies that empower educators to profoundly
                influence student growth. The curriculum integrates hands-on
                activities, digital literacy, and experiential learning
                strategies that go beyond conventional boundaries. By blending
                academics with the arts, sports, and real-world experiences, we
                promote both interdisciplinary and multidisciplinary learning,
                encouraging creativity, collaboration, and critical thinking.
                This transformative approach moves away from rote memorization
                and embraces competency-based education, focused on building
                essential skills and capacities required in today&apos;s dynamic
                world.
                <br />
                <br />
                At Atlantic Global School, we nurture each student&apos;s
                passion and curiosity, instilling a love for lifelong learning
                and preparing them to face the future with confidence,
                adaptability, and purpose.
              </p>
            </Fade>

            <Fade direction="right" triggerOnce={true}>
              <Image
                alt=""
                src={Description_Image}
                className="justify-self-end shadow-2xl w-full h-32 sm:h-40 md:h-56 lg:h-72 xl:h-auto object-cover"
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section
        className={`bg-linear-to-r from-blue-500 to-cyan-200 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-5 xl:gap-8 pt-4 md:pt-12 lg:pt-14 xl:pt-20 pb-4 md:pb-5 lg:pb-6.5 xl:pb-7 px-2 md:px-12 xl:px-20`}
      >
        <Fade
          direction="left"
          triggerOnce={true}
          className="w-full md:w-[50%] lg:w-[37%] xl:w-[45%]"
        >
          <div className="flex flex-col justify-between h-full gap-2 lg:py-2 md:py-2">
            <Image
              src={
                "https://img.freepik.com/free-photo/it-s-time-start-new-school-year_329181-10456.jpg?t=st=1743748598~exp=1743752198~hmac=0670944e2181a42322697797bb2e764184e24d6faa4e80effbac7eb63f6af781&w=996"
              }
              alt=""
              width={1000}
              height={1000}
              className="self-end shadow-2xl w-full h-32 sm:h-40 md:h-56 lg:h-72 xl:h-auto object-cover md:rounded"
            />
            <Image
              src={
                "https://img.freepik.com/free-photo/smiling-students-with-backpacks_1098-1220.jpg?t=st=1743748558~exp=1743752158~hmac=47e9c258956d1a146b7bc1d776b363325ae1e0b8037137dbd9606ddefac7f83e&w=996"
              }
              alt=""
              width={1000}
              height={1000}
              className="shadow-2xl w-full h-32 sm:h-40 md:h-56 lg:h-72 xl:h-auto object-cover md:rounded"
            />
          </div>
        </Fade>

        <div className="w-full md:w-[57%] lg:w-[63%] xl:w-[55%]">
          <Fade direction="down" triggerOnce={true}>
            <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
              The Primary Learning Curriculum
            </h1>
            <h2 className="font-light text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl md:-mt-1.5">
              Flourishing Foundations
            </h2>
          </Fade>

          <Fade direction="right" triggerOnce={true}>
            <ul className="list-disc text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px] leading-4 xl:leading-5 mt-2 md:mt-3 xl:mt-5 ml-2 md:ml-4 xl:ml-5">
              <li>
                The curriculum creates a joyful and engaging learning
                experience, ensuring that our youngest Pacificans embark on
                their educational journey with curiosity and enthusiasm.
              </li>
              <li>
                A nurturing and supportive environment fosters self-confidence,
                resilience, and a love for lifelong learning.
              </li>
              <li>
                Emphasizes overall well-being by promoting physical health,
                fitness, and mental wellness.
              </li>
              <li>
                Bridges the gap between theory and practice by integrating
                real-world applications, making learning relevant, meaningful,
                and exciting.
              </li>
              <li>
                Encourages hands-on, experiential learning, allowing young minds
                to explore, experiment, and discover concepts actively.
              </li>
              <li>
                Develops critical thinking, creativity, and problem-solving
                skills, preparing students for future challenges.
              </li>
              <li>
                Celebrates diversity and cultivates an inclusive culture where
                every child feels valued, fostering empathy, understanding, and
                appreciation of different cultures.
              </li>
              <li>
                Focuses on holistic development by nurturing intellectual,
                cognitive, social, physical, and emotional growth.
              </li>
              <li>
                Implements a Continuous and Comprehensive Evaluation system to
                personalize learning, ensuring tailored instruction that meets
                each student’s unique needs and potential.
              </li>
            </ul>
          </Fade>
        </div>
      </section>

      {/* Foundation Two Section */}
      <section className="mx-2 sm:mx-4 md:mx-9 lg:mx-12 xl:mx-20 py-4 md:py-12 lg:py-14 xl:pt-18 xl:pb-16">
        <div>
          <Fade direction="up" triggerOnce={true}>
            <h1 className="font-semibold xl:text-4xl lg:text-3xl md:text-2xl md:tracking-tight">
              The Primary{" "}
              <span className="text-[#1B6B8F] font-bold">
                Advancement Program
              </span>
            </h1>
            <h2 className="xl:text-xl lg:text-lg md:-mt-1">
              Unlocking Potential
            </h2>
          </Fade>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 xl:-mt-5 xl:gap-28 lg:mt-2 lg:gap-25 lg:mx-6 md:mt-2 md:gap-14 md:mx-5">
          <ul className="list-disc w-full md:w-[65%] xl:w-[45%] text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px]">
            <Fade direction="left" triggerOnce={true}>
              <li>
                The Preparatory Stage curriculum is designed to equip students
                with essential 21st-century skills, enabling them to excel in an
                ever-evolving educational landscape.
              </li>
              <li>
                It nurtures scientific inquiry, critical thinking, creativity,
                innovation, collaboration, and problem-solving, while also
                fostering awareness of the Sustainable Development Goals (SDGs).
              </li>
              <li>
                Inclusivity remains at the core, encouraging students of diverse
                abilities to learn and grow together in a supportive
                environment.
              </li>
              <li>
                The curriculum immerses students in India’s rich heritage and
                cultural traditions, instilling a deep sense of pride and
                connection to their roots.
              </li>
            </Fade>
          </ul>

          <div className="flex flex-col w-full md:w-[50%] xl:w-[40%] gap-2 lg:gap-3">
            <Fade direction="right" triggerOnce={true}>
              <Image
                src={CraftTopImage}
                alt=""
                className="w-full h-24 sm:h-32 md:h-40 lg:h-56 xl:h-64 object-cover shadow-lg"
              />
              <div className="flex justify-center gap-2 lg:gap-3">
                <Image
                  src={CraftBottomOneImage}
                  alt=""
                  className="shadow-lg w-1/2 h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 object-cover"
                />
                <Image
                  src={CraftBottomTwoImage}
                  alt=""
                  className="shadow-lg w-1/2 h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 object-cover"
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex flex-col md:flex-row justify-between gap-4 xl:gap-5 lg:gap-4 md:mx-8 md:gap-3 md:mb-12 py-4">
        <div className="w-full md:w-[50%] border border-gray-200 shadow-lg p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg">
          <Fade direction="up" triggerOnce={true}>
            <Image
              src={
                "https://img.freepik.com/free-photo/long-shot-kids-protecting-themselves-with-face-masks_23-2148672177.jpg?t=st=1743760135~exp=1743763735~hmac=44e3e754270894b3cf625c7a0808286a047c6a943f5ae0a080f9eb9ded8c909e&w=1380"
              }
              alt=""
              width={1000}
              height={1000}
              className="shadow-xl w-full h-32 sm:h-40 md:h-56 lg:h-72 xl:h-auto object-cover rounded-t"
            />
            <div className="mx-2 md:mx-4 lg:mx-6 xl:mx-8">
              <h2 className="font-semibold text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl mt-2 md:mt-4 lg:mt-5 xl:mt-8 tracking-tight">
                The Middle School{" "}
                <span className="text-[#1B6B8F] font-bold">Curriculum</span>
              </h2>
              <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-1 md:-mt-2 lg:-mt-1.5 xl:-mt-1">
                Exploring Growth
              </h3>
              <ul className="list-disc justify-self-end w-full xl:w-[97%] lg:w-[96%] md:w-[94%] text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px] mt-2 md:mt-3 lg:mt-5 xl:mt-6">
                <li>
                  Designed on the foundation of in-depth research and
                  inquiry-based learning, providing students with opportunities
                  to enhance their learning journey.
                </li>
                <li>
                  Emphasizes experiential learning to deepen conceptual
                  understanding, forming a strong base for secondary education.
                </li>
                <li>
                  Recognizing the transition into teenage years, the curriculum
                  incorporates engaging workshops, class discussions, and
                  counseling sessions as essential components of the learning
                  experience.
                </li>
                <li>
                  Encourages active participation in inter-school competitions,
                  CBSE events, MUNs, and sports to nurture students&apos;
                  talents and boost their confidence.
                </li>
                <li>
                  Aims to shape happy, well-rounded individuals with strong
                  values and a positive outlook on life.
                </li>
              </ul>
            </div>
          </Fade>
        </div>

        <div className="w-full md:w-[50%] border border-gray-200 shadow-lg p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg mt-4 md:mt-0">
          <Fade direction="up" triggerOnce={true}>
            <Image
              src={
                "https://img.freepik.com/free-photo/view-diverse-adolescents-practicing-health-wellness-activities-themselves-their-community_23-2151416236.jpg?t=st=1743760234~exp=1743763834~hmac=d4987b97f6db694ba20d10bb3279ae3996245649274dbd7d335e036f1300c0a8&w=1380"
              }
              alt=""
              width={1000}
              height={1000}
              className="shadow-xl w-full h-32 sm:h-40 md:h-56 lg:h-72 xl:h-auto object-cover rounded-t"
            />

            <div className="mx-2 md:mx-4 lg:mx-6 xl:mx-8">
              <h2 className="font-semibold text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl mt-2 md:mt-4 lg:mt-5 xl:mt-8 tracking-tight">
                The Secondary Stage{" "}
                <span className="text-[#1B6B8F] font-bold">Curriculum</span>
              </h2>
              <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-1 md:-mt-2 lg:-mt-1.5 xl:-mt-1">
                Breaking Barriers
              </h3>
              <ul className="list-disc justify-self-end w-full xl:w-[97%] lg:w-[96%] md:w-[94%] text-xs sm:text-sm md:text-base lg:text-sm xl:text-[16px] mt-2 md:mt-3 lg:mt-5 xl:mt-6">
                <li>Rooted in research and collaborative learning.</li>
                <li>
                  Emphasizes experiential, integrated, inquiry-led, and
                  project-based approaches.
                </li>
                <li>
                  Enriches learning with arts and sports-based activities.
                </li>
                <li>Incorporates educational trips and hands-on excursions.</li>
                <li>
                  Fosters adaptability, emotional intelligence, and resilience.
                </li>
                <li>
                  Strengthens public speaking skills and conflict resolution
                  strategies.
                </li>
                <li>Promotes global awareness and essential life skills.</li>
                <li>Prioritizes stress management and emotional well-being.</li>
                <li>
                  Encourages participation in CBSE competitions, inter-school
                  events, and exchange programs.
                </li>
                <li>
                  Strives to nurture responsible global citizens who positively
                  impact society.
                </li>
                <li>Upholds a holistic approach to student development.</li>
              </ul>
            </div>
          </Fade>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
