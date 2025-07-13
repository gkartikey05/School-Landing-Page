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
        className="fixed rotate-90 top-72 -left-[78px] text-xs animate-pulse flex items-center bg-red-700 text-white px-3 py-1 font-light rounded-t-xl border border-white cursor-pointer z-99"
      >
        ADMISSION ENQUIRY <FiArrowUpRight className="text-lg" />
      </Link>

      {/* Acddemics Background image */}
      <Image
        className="w-full"
        src={
          "https://img.freepik.com/premium-photo/photograph-indian-school-girl-aged-1215_1177187-43828.jpg?w=826"
        }
        alt="about background image"
        width={1000}
        height={1000}
      />

      {/* Academics Description */}
      <section className="xl:mx-20 xl:py-16 lg:mx-12 lg:py-10 md:mx-9 md:py-10">
        <div>
          <Fade direction="left" triggerOnce={true}>
            <h1 className="font-semibold xl:text-4xl lg:text-3xl md:text-2xl">
              Academics{" "}
              <span className="text-[#1B6B8F] font-bold">Innovators</span>
            </h1>
            <h2 className="xl:text-xl lg:text-lg md:-mt-1">
              Fueling Intellectual Growth at Atlantic Global School
            </h2>
          </Fade>

          <div className="flex justify-between items-center xl:gap-0 xl:mt-0 lg:mt-7 lg:gap-5 md:mt-5 md:gap-3">
            <Fade direction="up" triggerOnce={true}>
              <p className="xl:w-[90%] xl:text-[16px] xl:h-full lg:text-sm md:w-[80%] md:text-xs">
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
                className="justify-self-end shadow-2xl xl:w-9/12 md:w-full"
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section
        className={`bg-linear-to-r from-blue-500 to-cyan-200 w-full flex justify-between xl:gap-8 xl:pt-20 xl:pb-7 xl:px-20 lg:pt-14 lg:pb-6.5 lg:gap-5 md:gap-6 md:pt-12 md:pb-5 md:px-12`}
      >
        <Fade
          direction="left"
          triggerOnce={true}
          className="xl:w-[45%] lg:w-[37%] md:w-[50%]"
        >
          <div className="flex flex-col justify-between h-full lg:py-2 md:py-2">
            <Image
              src={
                "https://img.freepik.com/free-photo/it-s-time-start-new-school-year_329181-10456.jpg?t=st=1743748598~exp=1743752198~hmac=0670944e2181a42322697797bb2e764184e24d6faa4e80effbac7eb63f6af781&w=996"
              }
              alt=""
              width={1000}
              height={1000}
              className="self-end shadow-2xl xl:w-[68%] lg:w-[75%] md:w-[70%] md:rounded"
            />
            <Image
              src={
                "https://img.freepik.com/free-photo/smiling-students-with-backpacks_1098-1220.jpg?t=st=1743748558~exp=1743752158~hmac=47e9c258956d1a146b7bc1d776b363325ae1e0b8037137dbd9606ddefac7f83e&w=996"
              }
              alt=""
              width={1000}
              height={1000}
              className="shadow-2xl xl:w-[68%] lg:w-[75%] md:w-[70%] md:rounded"
            />
          </div>
        </Fade>

        <div className="xl:w-[55%] lg:w-[63%] md:w-[57%]">
          <Fade direction="down" triggerOnce={true}>
            <h1 className="font-semibold xl:text-3xl lg:text-2xl md:text-xl">
              The Primary Learning Curriculum
            </h1>
            <h2 className="font-light xl:text-2xl lg:text-xl md:text-lg md:-mt-1.5">
              Flourishing Foundations
            </h2>
          </Fade>

          <Fade direction="right" triggerOnce={true}>
            <ul className="list-disc xl:leading-5 xl:text-[16px] xl:mt-5 xl:ml-5 lg:leading-3.75 lg:text-sm md:leading-3.25 md:mt-3 md:text-[11px] md:ml-4">
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
      <section className="xl:mx-20 xl:pt-18 xl:pb-16 lg:mx-12 lg:py-14 md:mx-9 md:py-12">
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

        <div className="flex justify-between items-center xl:-mt-5 xl:gap-28 lg:mt-2 lg:gap-25 lg:mx-6 md:mt-2 md:gap-14 md:mx-5">
          <ul className="list-disc xl:text-[16px] xl:w-[45%] lg:text-sm md:w-[65%] md:text-xs">
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

          <div className="flex flex-col xl:w-[40%] lg:gap-3 md:w-[50%] md:gap-2">
            <Fade direction="right" triggerOnce={true}>
              <Image src={CraftTopImage} alt="" className="w-full shadow-lg" />
              <div className="flex justify-center lg:gap-3 md:gap-2">
                <Image
                  src={CraftBottomOneImage}
                  alt=""
                  className="shadow-lg md:w-[48.5%]"
                />
                <Image
                  src={CraftBottomTwoImage}
                  alt=""
                  className="shadow-lg md:w-[48.5%]"
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex justify-between xl:gap-5 lg:gap-4 md:mx-8 md:gap-3 md:mb-12">
        <div className="w-[50%] border border-gray-200 shadow-lg xl:p-5 xl:rounded-lg lg:p-4 md:p-3 md:rounded">
          <Fade direction="up" triggerOnce={true}>
            <Image
              src={
                "https://img.freepik.com/free-photo/long-shot-kids-protecting-themselves-with-face-masks_23-2148672177.jpg?t=st=1743760135~exp=1743763735~hmac=44e3e754270894b3cf625c7a0808286a047c6a943f5ae0a080f9eb9ded8c909e&w=1380"
              }
              alt=""
              width={1000}
              height={1000}
              className="shadow-xl xl:rounded-t-lg md:rounded-t"
            />
            <div className="xl:mx-8 lg:mx-6 md:mx-4">
              <h2 className="xl:text-2xl lg:text-xl xl:mt-8 lg:tracking-normal lg:mt-5 md:font-bold md:text-lg md:tracking-tighter md:mt-4">
                The Middle School{" "}
                <span className="text-[#1B6B8F] font-bold">Curriculum</span>
              </h2>
              <h3 className="font-semibold xl:text-xl xl:-mt-1 lg:text-lg lg:-mt-1.5 md:-mt-2">
                Exploring Growth
              </h3>
              <ul className="list-disc justify-self-end xl:w-[97%] xl:text-[16px] xl:mt-6 lg:w-[96%] lg:text-sm lg:mt-5 md:w-[94%] md:text-xs md:mt-3">
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

        <div className="w-[50%] border border-gray-200 shadow-lg xl:p-5 xl:rounded-lg lg:p-4 md:p-3 md:rounded">
          <Fade direction="up" triggerOnce={true}>
            <Image
              src={
                "https://img.freepik.com/free-photo/view-diverse-adolescents-practicing-health-wellness-activities-themselves-their-community_23-2151416236.jpg?t=st=1743760234~exp=1743763834~hmac=d4987b97f6db694ba20d10bb3279ae3996245649274dbd7d335e036f1300c0a8&w=1380"
              }
              alt=""
              width={1000}
              height={1000}
              className="shadow-xl xl:rounded-t-lg md:rounded-t"
            />

            <div className="xl:mx-8 lg:mx-6 md:mx-4">
              <h2 className="xl:text-2xl lg:text-xl xl:mt-8 lg:tracking-normal lg:mt-5 md:font-bold md:text-lg md:tracking-tighter md:mt-4">
                The Secondary Stage{" "}
                <span className="text-[#1B6B8F] font-bold">Curriculum</span>
              </h2>
              <h3 className="font-semibold xl:text-xl xl:-mt-1 lg:text-lg lg:-mt-1.5 md:-mt-2">
                Breaking Barriers
              </h3>
              <ul className="list-disc justify-self-end xl:w-[97%] xl:text-[16px] xl:mt-6 lg:w-[96%] lg:text-sm lg:mt-5 md:w-[94%] md:text-xs md:mt-3">
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
