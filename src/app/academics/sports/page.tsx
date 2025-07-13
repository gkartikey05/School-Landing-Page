"use client";

import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import { Lexend } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import ImageOne from "../../../components/assets/specialized sports image one.jpg";
import ImageTwo from "../../../components/assets/specialized sports image two.jpg";
import ImageThree from "../../../components/assets/specialized sports image three.jpg";
import { useEffect } from "react";
import { initLightboxJS, SlideshowLightbox } from "lightbox.js-react";

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Sports() {
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
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-700 text-justify min-h-screen`}
    >
      {/* Header Section */}
      <header>
        <StickyHeader />
        <StickyHeaderTwo />
      </header>

      {/* Sports Page Background image */}
      <Image
        className="w-full h-40 sm:h-64 md:h-80 lg:h-96 object-cover"
        src={
          "https://blog.globalindianschool.org/hubfs/ITGF%202017/ITGF-sack%20race.jpg"
        }
        alt="about background image"
        width={3000}
        height={3000}
      />

      {/* Sports Section */}
      <main className="relative flex flex-col md:flex-row divide-x-0 md:divide-x-1">
        {/* Fixed Sidebar Section */}
        <div className="sticky top-10 divide-gray-300 bg-[#f8f6f6] xl:pt-15 lg:pt-13 md:pt-10 md:min-w-[22.5%]">
          {/* Scrollable Area */}
          <div className="flex flex-col w-full h-screen divide-y-2">
            <Link
              href={"#houses"}
              className="tracking-tight xl:mx-4 lg:py-2.5 lg:mx-3 lg:text-sm md:py-2 md:mx-2.5 md:text-xs"
            >
              Houses
            </Link>
            <Link
              href={"#hobby_clubs"}
              className="tracking-tight xl:mx-4 lg:py-2.5 lg:mx-3 lg:text-sm md:py-2 md:mx-2.5 md:text-xs"
            >
              Hobby Clubs
            </Link>
            <Link
              href={"#specialized_sports"}
              className="tracking-tight xl:mx-4 lg:py-2.5 lg:mx-3 lg:text-sm md:py-2 md:mx-2.5 md:text-xs"
            >
              Specialized Sports
            </Link>
            <Link
              href={"#trips_excursions"}
              className="tracking-tight xl:mx-4 lg:py-2.5 lg:mx-3 lg:text-sm md:py-2 md:mx-2.5 md:text-xs"
            >
              Trips and Excursions
            </Link>
            <Link
              href={"#partner_program"}
              className="tracking-tight xl:mx-4 lg:py-2.5 lg:mx-3 lg:text-sm md:py-2 md:mx-2.5 md:text-xs"
            >
              Partner Program
            </Link>
            <Link
              href={"#community_service_and_social_work"}
              className="tracking-tight xl:mx-4 lg:py-2.5 lg:mx-3 lg:text-sm md:py-2 md:mx-2.5 md:text-xs"
            >
              Community Service and Social Work
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-2 sm:mx-4 md:mx-7 lg:mx-8.5 xl:mx-10">
          {/* House Section */}
          <section id="houses">
            <div>
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <h1 className="font-semibold xl:text-4xl xl:pt-16 lg:text-3xl lg:pt-14 md:text-2xl md:pt-11">
                  House{" "}
                  <span className="text-[#1B6B8F] font-semibold">System</span>
                </h1>
              </Fade>

              <Fade
                direction="right"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <p className="xl:mt-5 xl:text-[16px] lg:mt-4 lg:text-sm md:mt-3 md:text-xs">
                  At Atlantic Global School, the House System plays a vital role
                  in shaping our school culture. It builds a strong sense of
                  belonging, teamwork, and friendly competition among students.
                  From Class I onwards, each student becomes a proud member of
                  one of three houses — their second family within the school
                  community.
                </p>
              </Fade>
            </div>

            <div>
              <h3 className="font-sem rounded-b-lgibold xl:mt-5 xl:mb-2 xl:text-xl lg:text-lg lg:mt-4 lg:mb-1.5 md:mt-3 md:mb-1 md:text-sm">
                These houses are:-
              </h3>

              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <div className="flex flex-col md:flex-row xl:gap-5 md:gap-3 gap-2">
                  <div className="w-full md:w-1/4 border shadow-xl text-white rounded-lg py-2 md:py-3 lg:py-4 xl:py-5 bg-red-700 mb-2 md:mb-0">
                    <h4 className="font-bold xl:tracking-wider xl:px-5 xl:pb-2 xl:text-lg lg:px-4 lg:pb-1.5 lg:text-[16px] md:px-3 md:pb-1 md:text-sm text-center">
                      Red House
                    </h4>
                    <p className="xl:px-5 xl:text-[16px] lg:px-4 lg:text-sm md:px-3 md:text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Perferendis at doloribus officia est rerum unde cum
                      repellat corrupti quidem omnis, deserunt nihil minima
                      numquam, sequi, cupiditate quaerat?
                    </p>
                  </div>
                  <div className="w-full md:w-1/4 border shadow-xl text-white rounded-lg py-2 md:py-3 lg:py-4 xl:py-5 bg-green-700 mb-2 md:mb-0">
                    <h4 className="font-bold xl:tracking-wider xl:px-5 xl:pb-2 xl:text-lg lg:px-4 lg:pb-1.5 lg:text-[16px] md:px-3 md:pb-1 md:text-sm text-center">
                      Green House
                    </h4>
                    <p className="xl:px-5 xl:text-[16px] lg:px-4 lg:text-sm md:px-3 md:text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Perferendis at doloribus officia est rerum unde cum
                      repellat corrupti quidem omnis, deserunt nihil minima
                      numquam, sequi, cupiditate quaerat?
                    </p>
                  </div>
                  <div className="w-full md:w-1/4 border shadow-xl text-white rounded-lg py-2 md:py-3 lg:py-4 xl:py-5 bg-blue-700 mb-2 md:mb-0">
                    <h4 className="font-bold xl:tracking-wider xl:px-5 xl:pb-2 xl:text-lg lg:px-4 lg:pb-1.5 lg:text-[16px] md:px-3 md:pb-1 md:text-sm text-center">
                      Blue House
                    </h4>
                    <p className="xl:px-5 xl:text-[16px] lg:px-4 lg:text-sm md:px-3 md:text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Perferendis at doloribus officia est rerum unde cum
                      repellat corrupti quidem omnis, deserunt nihil minima
                      numquam, sequi, cupiditate quaerat?
                    </p>
                  </div>
                  <div className="w-full md:w-1/4 border shadow-xl text-white rounded-lg py-2 md:py-3 lg:py-4 xl:py-5 bg-yellow-700">
                    <h4 className="font-bold xl:tracking-wider xl:px-5 xl:pb-2 xl:text-lg lg:px-4 lg:pb-1.5 lg:text-[16px] md:px-3 md:pb-1 md:text-sm text-center">
                      Yellow House
                    </h4>
                    <p className="xl:px-5 xl:text-[16px] lg:px-4 lg:text-sm md:px-3 md:text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Perferendis at doloribus officia est rerum unde cum
                      repellat corrupti quidem omnis, deserunt nihil minima
                      numquam, sequi, cupiditate quaerat?
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div>
              <h2 className="font-semibold xl:text-2xl xl:mt-8 lg:text-xl lg:mt-7 md:text-lg md:mt-6">
                Objectives of the House System
              </h2>

              <ul className="xl:text-[16px] xl:mt-3 xl:leading-5.5 lg:text-sm lg:mt-2.5 lg:leading-5 md:text-xs md:mt-2 md:leading-4.5">
                <li>
                  <strong>Inspire Teamwork:</strong> Inter-house competitions
                  encourage collaboration and a strong sense of unity among
                  students.
                </li>
                <li>
                  <strong>Cultivate Leadership:</strong> Student-led houses
                  offer valuable opportunities to take initiative and grow as
                  confident leaders.
                </li>
                <li>
                  <strong>Support Holistic Growth:</strong> A wide range of
                  activities helps students thrive both academically and
                  socially, promoting all-round development.
                </li>
                <li>
                  <strong>Strengthen Community Bonds:</strong> The house system
                  creates a close-knit environment where students build
                  meaningful friendships and a strong support network.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold xl:text-2xl xl:mt-8 lg:text-xl lg:mt-7 md:text-lg md:mt-6">
                House Activities
              </h2>

              <p className="xl:text-[16px] xl:mt-3 xl:leading-5.5 lg:text-sm lg:mt-2.5 lg:leading-5 md:text-xs md:mt-2 md:leading-4.5">
                Our house activities are varied and thoughtfully designed to
                engage students with a wide range of interests and talents.
                These include:
              </p>

              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <div className="flex flex-col md:flex-row justify-between gap-2 xl:mt-3.5 xl:gap-5 lg:mt-3 lg:gap-4 md:gap-3 md:mt-2.5">
                  <div className="border rounded shadow-lg px-2 md:px-3 lg:px-4 xl:px-5 py-2 md:py-2 lg:py-3 xl:py-4 mb-2 md:mb-0">
                    <h3 className="font-sem rounded-b-lgibold xl:text-lg lg:text-[16px] lg:tracking-normal md:text-sm md:tracking-tighter">
                      Sports Competitions:
                    </h3>
                    <p className="xl:text-[16px] xl:mt-2.5 lg:text-sm lg:mt-2 md:text-xs md:mt-1.5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum numquam tempora quaerat, provident doloremque esse hic
                      debitis deleniti voluptatibus porro?
                    </p>
                  </div>
                  <div className="border rounded shadow-lg px-2 md:px-3 lg:px-4 xl:px-5 py-2 md:py-2 lg:py-3 xl:py-4 mb-2 md:mb-0">
                    <h3 className="font-sem rounded-b-lgibold xl:text-lg lg:text-[16px] lg:tracking-normal md:text-sm md:tracking-tighter">
                      Academic Challenges:
                    </h3>
                    <p className="xl:text-[16px] xl:mt-2.5 lg:text-sm lg:mt-2 md:text-xs md:mt-1.5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum numquam tempora quaerat, provident doloremque esse hic
                      debitis deleniti voluptatibus porro?
                    </p>
                  </div>
                  <div className="border rounded shadow-lg px-2 md:px-3 lg:px-4 xl:px-5 py-2 md:py-2 lg:py-3 xl:py-4">
                    <h3 className="font-sem rounded-b-lgibold xl:text-lg lg:text-[16px] lg:tracking-normal md:text-sm md:tracking-tighter">
                      Cultural Events:
                    </h3>
                    <p className="xl:text-[16px] xl:mt-2.5 lg:text-sm lg:mt-2 md:text-xs md:mt-1.5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum numquam tempora quaerat, provident doloremque esse hic
                      debitis deleniti voluptatibus porro?
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div>
              <h2 className="font-semibold xl:text-2xl xl:mt-8 lg:text-xl lg:mt-7 md:text-lg md:mt-6">
                Leadership and Mentorship
              </h2>

              <p className="xl:text-[16px] xl:mt-3 xl:leading-5.5 lg:text-sm lg:mt-2.5 lg:leading-5 md:text-xs md:mt-2 md:leading-4.5">
                Each house is led by a committed team of headmasters or
                headmistresses, supported by student leaders including house
                captains and prefects. Together, they play an essential role in
                planning events, mentoring peers, and nurturing a positive,
                inclusive house spirit.
                <br />
                <br />
                At Atlantic Global School, the House System is more than a
                tradition — it’s a dynamic part of our identity. It empowers
                students to grow into well-rounded individuals, equipping them
                with lifelong skills like leadership, collaboration, and
                resilience that extend far beyond the classroom.
              </p>
            </div>
          </section>

          {/* Hobby Clubs Section */}
          <section id="hobby_clubs">
            <div>
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <h1 className="font-semibold xl:text-4xl xl:pt-16 lg:text-3xl lg:pt-14 md:text-2xl md:pt-11">
                  Hobby{" "}
                  <span className="text-[#1B6B8F] font-semibold">Clubs</span>
                </h1>
              </Fade>

              <Fade
                direction="right"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <p className="xl:mt-5 xl:text-[16px] lg:mt-4 lg:text-sm md:mt-3 md:text-xs">
                  To nurture curiosity and active participation, we’ve
                  integrated a vibrant Club System into the curriculum for
                  Classes II to XI. These clubs are designed to inspire
                  self-motivation and hands-on learning, encouraging students to
                  become eager explorers. Each club focuses on developing a
                  broad range of skills, offering children meaningful
                  opportunities to discover their interests and unlock their
                  full potential.
                </p>
              </Fade>
            </div>

            <div>
              <h3 className="font-sem rounded-b-lgibold xl:mt-5 xl:mb-2 xl:text-xl lg:text-lg lg:mt-4 lg:mb-1.5 md:mt-3 md:mb-1 md:text-sm">
                These clubs are:-
              </h3>

              {/* First Club */}
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <div className="flex justify-between xl:mt-4 xl:gap-5 lg:mt-3 lg:gap-4 md:mt-2 md:gap-3">
                  <div className="w-[50%] flex flex-col justify-between xl:gap-5 lg:gap-4 md:gap-3">
                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#ffba06] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          EXPRESSIONS
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Painting & Sculpture Club
                        </p>
                      </div>

                      <div className="w-[50%] bg-[#a9d63b] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          MUSIC CLUB
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Tempo, Percussion, Chords & Craftsmen
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#907ee2] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          PIXEL
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Photography and Media Club
                        </p>
                      </div>
                      <div className="w-[50%] bg-[#e868a7] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          DANCE CLUB
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Zeal, Mudra, Synergy, Nritya, Boogle Woogle
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50%]">
                    <Image
                      src={
                        "https://img.freepik.com/free-photo/young-kids-performing-play-theatre-stage-celebrate-world-theatre-day_23-2151163727.jpg?t=st=1744205049~exp=1744208649~hmac=682ec34d67d1e08787a55414c8fccbeb485586bfb4db3fea6955795e53dd0e97&w=740"
                      }
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </Fade>

              {/* Second Club */}
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <div className="flex justify-between xl:mt-20 xl:gap-5 lg:mt-15 lg:gap-4 md:mt-10 md:gap-3">
                  <div className="w-[50%]">
                    <Image
                      src={
                        "https://www.adityabirlaworldacademy.com/images/sports/5c5bca0c7364bsports07.png"
                      }
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="w-[50%] flex flex-col justify-between xl:gap-5 lg:gap-4 md:gap-3">
                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#00c3c9] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          ABHIVYAKTI
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Dramatic Club
                        </p>
                      </div>

                      <div className="w-[50%] bg-[#ec4b4b] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          ARTICULATE
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Public Speaking & Podcasting Club
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#e8996d] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          EUREKA
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Stem club
                        </p>
                      </div>
                      <div className="w-[50%] bg-[#a9d63b] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          PITWIT
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Science Olympiad Club
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>

              {/* Third Club */}
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <div className="flex justify-between xl:mt-20 xl:gap-5 lg:mt-15 lg:gap-4 md:mt-10 md:gap-3">
                  <div className="w-[50%] flex flex-col justify-between xl:gap-5 lg:gap-4 md:gap-3">
                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#ff9900] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          CIPHER
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Coding Club
                        </p>
                      </div>

                      <div className="w-[50%] bg-[#00c3c9] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          FRANCAIS
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          French Language Club
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#907ee2] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          DEUTSCHE
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          German Language Club
                        </p>
                      </div>
                      <div className="w-[50%] bg-[#a9d63b] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          MATH-E-MAGIC
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Logical Reasoning Club
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50%]">
                    <Image
                      src={
                        "https://www.jaipuriaschools.ac.in/wp-content/uploads/2020/11/l2.jpg"
                      }
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </Fade>

              {/* Fourth Club */}
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <div className="flex justify-between xl:mt-20 xl:gap-5 lg:mt-15 lg:gap-4 md:mt-10 md:gap-3">
                  <div className="w-[50%]">
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmab_e0o63zWgdWeZoBqfRoVb8pVxkuEUzFQ&s"
                      }
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="w-[50%] flex flex-col justify-between xl:gap-5 lg:gap-4 md:gap-3">
                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#f4a876] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          CAFETERINA
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          DIY Club
                        </p>
                      </div>

                      <div className="w-[50%] bg-[#e868a7] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          ROBOTICS CLUB
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Robotics Club
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#ff9900] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          CHEF CHIEFS
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Fireless Cooking Club
                        </p>
                      </div>
                      <div className="w-[50%] bg-[#ec4b4b] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          GRAPHIEN
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Cartography
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>

              {/* Five Club */}
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <div className="flex justify-between xl:mt-20 xl:gap-5 lg:mt-15 lg:gap-4 md:mt-10 md:gap-3">
                  <div className="w-[50%] flex flex-col justify-between xl:gap-5 lg:gap-4 md:gap-3">
                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#f4a876] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          ELECTORAL LITERACY
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Model United Nation
                        </p>
                      </div>

                      <div className="w-[50%] bg-[#00c3c9] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          ANIME
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Animation & Scratch Club
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#ec4b4b] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          SHARK TANKK
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Financial Literacy & Entrepreneurship
                        </p>
                      </div>
                      <div className="w-[50%] bg-[#907ee2] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          JOURNALISM
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Media Minds
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50%]">
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWNtlrgKGfA5wMRlH_CG86BqBir168tS9fg&s"
                      }
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </Fade>

              {/* Sixth Club */}
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <div className="flex justify-between xl:mt-20 xl:gap-5 lg:mt-15 lg:gap-4 md:mt-10 md:gap-3">
                  <div className="w-[50%]">
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IHoor7gC5LTDI9aHnKhbZmgCO9fsX2OUgg&s"
                      }
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="w-[50%] flex flex-col justify-between xl:gap-5 lg:gap-4 md:gap-3">
                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#00c3c9] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          SCIENCE CLUB
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Dramatic Club
                        </p>
                      </div>

                      <div className="w-[50%] bg-[#ec4b4b] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          SOCIAL CLUB
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Welfare Club
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between h-[50%] xl:gap-5 lg:gap-4 md:gap-3">
                      <div className="w-[50%] bg-[#e8996d] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          MORAL CLUB
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          Also a Social Club
                        </p>
                      </div>
                      <div className="w-[50%] bg-[#a9d63b] text-white text-center content-center shadow-lg rounded-lg xl:px-4 lg:px-3 md:px-2">
                        <h4 className="font-bold xl:text-lg xl:tracking-normal lg:text-[16px] lg:tracking-tight md:text-sm md:tracking-tighter">
                          GENERAL CLUB
                        </h4>
                        <p className="xl:text-[16px] xl:mt-2 lg:text-sm lg:mt-1.5 md:text-xs md:mt-1">
                          General Club
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </section>

          {/* Specialized Sports */}
          <section id="specialized_sports">
            <div>
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <h1 className="font-semibold xl:text-4xl xl:pt-16 lg:text-3xl lg:pt-14 md:text-2xl md:pt-11">
                  Specialized{" "}
                  <span className="text-[#1B6B8F] font-semibold">Sports</span>
                </h1>
              </Fade>

              <Fade
                direction="right"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <p className="xl:mt-5 xl:text-[16px] lg:mt-4 lg:text-sm md:mt-3 md:text-xs">
                  At Atlantic Global School, we believe that sports play a vital
                  role in nurturing not just physical fitness, but also
                  essential life skills. Through sports, students learn the true
                  spirit of sportsmanship, dedication, leadership, social
                  interaction, and core values — all of which help them grow
                  into confident and effective team players.
                </p>
              </Fade>
            </div>

            <Fade direction="up" triggerOnce={true} duration={1000} delay={300}>
              <div>
                <div className="flex flex-col md:flex-row justify-center gap-2 xl:mt-10 xl:mx-7 xl:gap-6 lg:mt-8 lg:mx-6 lg:gap-5 md:mt-6 md:mx-5 md:gap-4">
                  <div className="flex flex-col w-full md:w-[47.3%] lg:w-[47.4%] xl:w-[47.65%] gap-2 md:gap-4 lg:gap-5 xl:gap-6">
                    <Image
                      src={ImageOne}
                      alt="Image One"
                      width={1000}
                      height={1000}
                      className="border shadow-lg xl:rounded-xl lg:rounded-lg md:rounded-md"
                    />
                    <Image
                      src={ImageTwo}
                      alt="Image Two"
                      width={1000}
                      height={1000}
                      className="border shadow-lg xl:rounded-xl lg:rounded-lg md:rounded-md"
                    />
                  </div>
                  <div className="w-full md:w-[55%] mt-2 md:mt-0">
                    <Image
                      src={ImageThree}
                      alt="Image Three"
                      width={1000}
                      height={1000}
                      className="border shadow-lg xl:rounded-xl lg:rounded-lg md:rounded-md"
                    />
                  </div>
                </div>
              </div>
            </Fade>

            <div className="xl:mt-20 lg:mt-15 md:mt-10">
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <h2 className="font-semibold xl:text-3xl xl:mt-8 lg:text-2xl lg:mt-7 md:text-xl md:mt-6">
                  Sports facilities offered are
                </h2>
              </Fade>

              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <div className="flex flex-wrap justify-between gap-2 xl:mt-7 lg:mt-5 md:mt-3">
                  <div className="aspect-square text-center font-bold w-[48%] sm:w-[30%] md:w-[22.5%] mb-2 xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://img.freepik.com/free-photo/portrait-athlete-competing-olympic-games-tournament_23-2151470889.jpg?t=st=1744271437~exp=1744275037~hmac=0921201c6c3c3f1e57b4d7cd8a584f4bd01fc78994935ba1a336af40df097fc0&w=740"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] rounded-b-lg -mt-4 text-xs sm:text-sm md:text-[11px] lg:text-[13px] xl:text-[16px]">
                      Taekwondo
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://img.freepik.com/free-photo/smiling-portrait-girl-holding-two-crossed-badmintons_23-2147904660.jpg?t=st=1744272072~exp=1744275672~hmac=a7012a4f7c81231a48c2dc7ca0114b4afcb7452362a655bfaa0957813ea74426&w=740"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Badminton
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://img.freepik.com/free-photo/long-shot-boy-with-roller-blades_23-2148268034.jpg?t=st=1744272133~exp=1744275733~hmac=45d836701654ada561f5f3340039cc6a8873bc4e4bc3cc17d24c47037b95240a&w=740"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Skating
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://img.freepik.com/free-photo/tennis-player-court_23-2147661775.jpg?t=st=1744272194~exp=1744275794~hmac=c056537fbc6fbf9f529a0dcde6eefe705cf5bd121583cf2d8f5ed657921f0aa9&w=740"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Lawn Tennis
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://img.freepik.com/free-photo/side-view-young-woman-training-wooden-pieces_23-2148752876.jpg?t=st=1744272244~exp=1744275844~hmac=ddf823899ba373276f3435ce42f6eb6ba98ec579c4d1e3b4752a9cb043658d3d&w=740"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Gymnastics
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://img.freepik.com/free-photo/cricket-player-action-with-bat-3d-illustration_1057-32268.jpg?t=st=1744272576~exp=1744276176~hmac=e929c5e03645329ceeadc5e7ffc9996fc536d8d7d520b2bebdc866d63d55721e&w=740"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Cricket
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://img.freepik.com/free-photo/front-view-smiley-woman-holding-ball_23-2148634576.jpg?t=st=1744272636~exp=1744276236~hmac=85bf85751c8f2b4013712aa70626e866f3f34d0be25ad1ed754af2efad382366&w=740"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Football
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://img.freepik.com/free-photo/basketball-player-kissing-ball_23-2147644380.jpg?t=st=1744272680~exp=1744276280~hmac=df91236ea5f60673ff1373ccef2d51aaa6256dc9ab8aff875f29100568385e9f&w=740"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Basketball
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://cdn.shopify.com/s/files/1/0595/1845/1879/files/2023_Butterfly_Fall_Cary_Cup_-_Day_2_764.jpg"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Table Tennis
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://img.freepik.com/free-photo/portrait-women-competing-olympic-games_23-2151450189.jpg?t=st=1744274901~exp=1744278501~hmac=3eec7415ae50b43cce13e83ff171f45d488655ad4cf1b5ffe0236e62b34d4b40&w=740"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Athletics
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYCErDNayaVTGuYdJlocP09bt1cUL6Ox7iw&s"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Chess
                    </h3>
                  </div>
                  <div className="aspect-square text-center font-bold w-[22.5%] xl:mb-7 lg:mb-5.5 md:mb-4 md:tracking-wide">
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbidqDcGbh3xH4gH1Jhp6X5ehzDb3MBD4Jg&s"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="shadow-xl xl:rounded-lg md:rounded-md"
                    />
                    <h3 className="relative text-white bg-[#083342] xl:rounded-b-lg xl:-mt-6 xl:text-[16px] lg:-mt-4.5 lg:text-[13px] md:rounded-b-md md:-mt-4 md:text-[11px]">
                      Yoga
                    </h3>
                  </div>
                </div>
              </Fade>
            </div>
          </section>

          {/* Trips and Excursions */}
          <section id="trips_excursions">
            <div>
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <h1 className="font-semibold xl:text-4xl xl:pt-16 lg:text-3xl lg:pt-14 md:text-2xl md:pt-11">
                  Trips &{" "}
                  <span className="text-[#1B6B8F] font-semibold">
                    Excursions
                  </span>
                </h1>
              </Fade>
            </div>

            {/* Lightbox */}
            <Fade direction="up" triggerOnce={true} duration={1000} delay={300}>
              <div className="flex justify-start xl:gap-11 xl:mt-10 lg:gap-9 lg:mt-8 md:gap-7 md:mt-6">
                <div className="border border-gray-300 xl:rounded-lg lg:rounded-md md:w-1/3 md:rounded">
                  <SlideshowLightbox
                    lightboxIdentifier="lightbox1"
                    framework="next"
                    images={images}
                    className="cursor-pointer"
                  >
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjIyZytALsaGwIHpBg9ltPpAlEd90zHFb0g&s"
                      }
                      alt="Cover Image"
                      width={2000}
                      height={2000}
                      className="xl:rounded-t-lg lg:rounded-t-md md:rounded-t"
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

                  <div className="md:px-4">
                    <h4 className="text-center xl:my-2.5 lg:text-[16px] lg:my-2 md:my-1.5 md:text-sm md:font-semibold">
                      History Diaries Educational Trip
                    </h4>
                  </div>
                </div>

                <div className="border border-gray-300 xl:rounded-lg lg:rounded-md md:w-1/3 md:rounded">
                  <SlideshowLightbox
                    lightboxIdentifier="lightbox2"
                    framework="next"
                    images={images}
                    className="cursor-pointer"
                  >
                    <Image
                      src="https://media.self.com/photos/5b048339fb856d7d3d02375d/1:1/w_3660,h_3660,c_limit/first-backpacking-trip.jpg"
                      alt="Cover Image"
                      width={2000}
                      height={2000}
                      className="xl:rounded-t-lg lg:rounded-t-md md:rounded-t"
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

                  <div className="md:px-4">
                    <h4 className="text-center xl:my-2.5 lg:text-[16px] lg:my-2 md:my-1.5 md:text-sm md:font-semibold">
                      Sonaghat Chail Adventure Champ
                    </h4>
                  </div>
                </div>

                <div className="border border-gray-300 xl:rounded-lg lg:rounded-md md:w-1/3 md:rounded">
                  <SlideshowLightbox
                    lightboxIdentifier="lightbox2"
                    framework="next"
                    images={images}
                    className="cursor-pointer"
                  >
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOnHZe0EkitKqrJ2YkQGR7lnFT2owkhKK2A&s"
                      alt="Cover Image"
                      width={2000}
                      height={2000}
                      className="xl:rounded-t-lg lg:rounded-t-md md:rounded-t"
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

                  <div className="md:px-4">
                    <h4 className="text-center xl:my-2.5 lg:text-[16px] lg:my-2 md:my-1.5 md:text-sm md:font-semibold">
                      Kanatal Adventure Camp
                    </h4>
                  </div>
                </div>
              </div>
            </Fade>
          </section>

          {/* Partner Program */}
          <section id="partner_program">
            <div>
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <h1 className="font-semibold xl:text-4xl xl:pt-16 xl:-mb-6 lg:text-3xl lg:pt-14 lg:-mb-4 md:text-2xl md:pt-11 md:-mb-2">
                  Partner{" "}
                  <span className="text-[#1B6B8F] font-semibold">Program</span>
                </h1>
              </Fade>
            </div>

            <Fade
              direction="right"
              triggerOnce={true}
              duration={1000}
              delay={300}
            >
              <div className="xl:mt-12 lg:mt-10 md:mt-8">
                <h2 className="font-semibold xl:text-3xl lg:text-2xl md:text-xl">
                  IAYP:
                </h2>
                <p className="xl:text-lg lg:-mt-2 lg:text-[16px] md:-mt-1.5 md:text-sm">
                  Unlock a World of Opportunities
                </p>
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6yjjklMEc6GVpzaB-sEKwGD6GWxpz2kn7Q&s"
                  }
                  alt=""
                  width={2000}
                  height={2000}
                  className="w-[85%] lg:mt-2 md:mt-2 md:rounded-md"
                />
              </div>
            </Fade>

            <Fade
              direction="right"
              triggerOnce={true}
              duration={1000}
              delay={300}
            >
              <div className="xl:mt-12 lg:mt-10 md:mt-8">
                <h2 className="font-semibold xl:text-3xl xl:mt-4 lg:text-2xl lg:mt-3 md:text-xl md:mt-2">
                  SILVERZONE OLYMPIADS:
                </h2>
                <p className="xl:text-lg lg:-mt-2 lg:text-[16px] md:-mt-1.5 md:text-sm">
                  Great Competition Outcomes Follow Through Preparation
                </p>
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wqwgDA5L1O2-mxRkYMOk36tmkq5sSHhvmg&s"
                  }
                  alt=""
                  width={2000}
                  height={2000}
                  className="w-[85%] lg:mt-2 md:mt-2 md:rounded-md"
                />
              </div>
            </Fade>

            <Fade
              direction="right"
              triggerOnce={true}
              duration={1000}
              delay={300}
            >
              <div className="xl:mt-12 lg:mt-10 md:mt-8">
                <h2 className="font-semibold xl:text-3xl xl:mt-4 lg:text-2xl lg:mt-3 md:text-xl md:mt-2">
                  AFS:
                </h2>
                <p className="xl:text-lg lg:-mt-2 lg:text-[16px] md:-mt-1.5 md:text-sm">
                  Curating Active Global Citizens through Intercultural Programs
                </p>
                <Image
                  src={
                    "https://static.pib.gov.in/WriteReadData/userfiles/image/Pix(1)Y36Z.jpg"
                  }
                  alt=""
                  width={2000}
                  height={2000}
                  className="w-[85%] lg:mt-2 md:mt-2 md:rounded-md"
                />
              </div>
            </Fade>

            <Fade
              direction="right"
              triggerOnce={true}
              duration={1000}
              delay={300}
            >
              <div className="xl:mt-12 lg:mt-10 md:mt-8">
                <h2 className="font-semibold xl:text-3xl xl:mt-4 lg:text-2xl lg:mt-3 md:text-xl md:mt-2">
                  IIAGSN:
                </h2>
                <p className="xl:text-lg lg:-mt-2 lg:text-[16px] md:-mt-1.5 md:text-sm">
                  Connecting Schools in India and America for a Greener and
                  Sustainable Future
                </p>
                <Image
                  src={
                    "https://www.csmssengg.org/images/tnp/tnpgallery/INFOSYS_Mumbai28-30.01.2020/DSC_6285.JPG"
                  }
                  alt=""
                  width={2000}
                  height={2000}
                  className="w-[85%] lg:mt-2 md:mt-2 md:rounded-md"
                />
              </div>
            </Fade>

            <Fade
              direction="right"
              triggerOnce={true}
              duration={1000}
              delay={300}
            >
              <div className="xl:mt-12 lg:mt-10 md:mt-8">
                <h2 className="font-semibold xl:text-3xl xl:mt-4 lg:text-2xl lg:mt-3 md:text-xl md:mt-2">
                  1M1B ABFRL Sustainability Accelerator Program:
                </h2>
                <p className="xl:text-lg lg:-mt-2 lg:text-[16px] md:-mt-1.5 md:text-sm">
                  Cultivating Green Leaders: Building Sustainability Skills and
                  Opportunities for a Better Future:
                </p>
                <Image
                  src={
                    "https://wbuhs.ac.in/wp-content/uploads/2023/06/RIS_5395.jpg"
                  }
                  alt=""
                  width={2000}
                  height={2000}
                  className="w-[85%] lg:mt-2 md:mt-2 md:rounded-md"
                />
              </div>
            </Fade>
          </section>

          {/* Community and Social work Section */}
          <section id="community_service_and_social_work">
            <div>
              <Fade
                direction="up"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <h1 className="font-semibold xl:text-4xl xl:pt-16 lg:text-3xl lg:pt-14 md:text-2xl md:pt-11">
                  Community Service &{" "}
                  <span className="text-[#1B6B8F] font-semibold">
                    Social Work
                  </span>
                </h1>
              </Fade>

              <Fade
                direction="right"
                triggerOnce={true}
                duration={1000}
                delay={300}
              >
                <p className="font-semibold xl:mt-2 xl:text-[16px] lg:mt-4 lg:text-sm md:mt-3 md:text-xs">
                  &quot;Small acts when multiplied by millions of people, can
                  transform the world&quot; - Howard Zinn
                </p>
              </Fade>
            </div>

            {/* Community Cards Section */}
            <div className="flex flex-col items-center mx-auto xl:mt-2 xl:mb-15 lg:mt-1.5 lg:mb-12 md:mt-1 md:mb-9">
              {/* First Card */}
              <div className="flex items-center xl:w-[75%] xl:gap-5 xl:mt-10 lg:gap-4 lg:mt-8 md:w-[90%] md:gap-3 md:mt-6">
                <div className="w-1/2">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    duration={1000}
                    delay={300}
                  >
                    <div className="bg-[#eff0f1] border xl:rounded-lg xl:p-4 lg:p-3 md:rounded-md md:p-2">
                      <h2 className="font-bold xl:px-5 xl:text-lg lg:px-4 lg:text-[16px] md:px-3 md:text-sm text-center">
                        Vriksharopan Samaroh
                      </h2>
                      <p className="xl:mt-2 xl:text-[14px] lg:mt-4 lg:text-sm md:mt-3 md:text-[10px]">
                        As part of our Earth Day celebrations, Pacific World
                        School organized the ‘Vriksharopan Samaroh’—a tree
                        planting initiative aimed at fostering a deeper bond
                        between students and nature. Joined by our Chairperson,
                        Ms. Santosh Bansal, Pro-Vice Chairperson, Ms. Nidhi
                        Bansal, and Principal, Ms. Pooja Bose, students
                        enthusiastically planted saplings on campus. This
                        meaningful effort reflects our ongoing commitment to
                        creating a greener, healthier planet for future
                        generations.
                      </p>
                    </div>
                  </Fade>
                </div>

                <div className="w-[51.5%]">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    duration={1000}
                    delay={300}
                  >
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-ivkIFohob4APy-fzVEALQ5tuvTCA7pt5Q&s"
                      }
                      alt="Vriksharopan Samaroh Image"
                      width={2000}
                      height={2000}
                      className="xl:rounded-lg md:rounded-md"
                    />
                  </Fade>
                </div>
              </div>

              {/* Second Card */}
              <div className="flex items-center xl:w-[75%] xl:gap-5 xl:mt-10 lg:gap-4 lg:mt-8 md:w-[90%] md:gap-3 md:mt-6">
                <div className="w-[51.5%]">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    duration={1000}
                    delay={300}
                  >
                    <Image
                      src={
                        "https://cdn.sanity.io/images/ftjhtw5n/production/04c9a0febc23b2e8ec3db954015a83866cd6f35f-3024x3024.jpg?w=3840&h=3840&q=70&fit=crop&crop=center&auto=format"
                      }
                      alt="Vriksharopan Samaroh Image"
                      width={2000}
                      height={2000}
                      className="xl:rounded-lg md:rounded-md"
                    />
                  </Fade>
                </div>

                <div className="w-1/2">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    duration={1000}
                    delay={300}
                  >
                    <div className="bg-[#eff0f1] border xl:rounded-lg xl:p-4 lg:p-3 md:rounded-md md:p-2">
                      <h2 className="font-bold xl:px-5 xl:text-lg lg:px-4 lg:text-[16px] md:px-3 md:text-sm text-center">
                        Save Soil – SDG Goal
                      </h2>
                      <p className="xl:mt-2 xl:text-[14px] lg:mt-4 lg:text-sm md:mt-3 md:text-[10px]">
                        Atlantic Global School, in collaboration with the Isha
                        Foundation’s global ‘Save Soil’ movement — now active in
                        over 27 countries — conducted an impactful awareness
                        campaign on campus. Mr. Vatsal and Ms. Florina,
                        representatives of the movement, shared a powerful video
                        presentation highlighting the urgent issue of soil
                        degradation. They also encouraged students to write
                        letters to the Prime Minister, advocating for action on
                        this vital cause.
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>

              {/* Third Card */}
              <div className="flex items-center xl:w-[75%] xl:gap-5 xl:mt-10 lg:gap-4 lg:mt-8 md:w-[90%] md:gap-3 md:mt-6">
                <div className="w-1/2">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    duration={1000}
                    delay={300}
                  >
                    <div className="bg-[#eff0f1] border xl:rounded-lg xl:p-4 lg:p-3 md:rounded-md md:p-2">
                      <h2 className="font-bold xl:px-5 xl:text-lg lg:px-4 lg:text-[16px] md:px-3 md:text-sm text-center">
                        Caring to Share Week
                      </h2>
                      <p className="xl:mt-2 xl:text-[14px] lg:mt-4 lg:text-sm md:mt-3 md:text-[10px]">
                        There’s no greater joy than bringing a smile to
                        someone’s face. While cities grow with towering
                        skyscrapers, many still live in the shadows of
                        underprivileged communities. At Pacific World School, we
                        believe in the power of sharing — especially when we
                        have more than enough. In the week leading up to Diwali,
                        our students came together to collect books, clothes,
                        stationery, biscuits, chocolates, and other packaged
                        food items, which were then donated to children from
                        less privileged backgrounds.
                      </p>
                    </div>
                  </Fade>
                </div>

                <div className="w-[51.5%]">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    duration={1000}
                    delay={300}
                  >
                    <Image
                      src={
                        "https://www.usatoday.com/gcdn/-mm-/ebf1a7a0cbe37ff421bdfb019e9283f02cf642ff/c=864-0-4320-3456/local/-/media/2015/07/10/Wilmington/B9318024754Z.1_20150710165048_000_G9KBAAPRT.1-0.jpg"
                      }
                      alt="Vriksharopan Samaroh Image"
                      width={2000}
                      height={2000}
                      className="xl:rounded-lg md:rounded-md"
                    />
                  </Fade>
                </div>
              </div>

              {/* Fourth Card */}
              <div className="flex items-center xl:w-[75%] xl:gap-5 xl:mt-10 lg:gap-4 lg:mt-8 md:w-[90%] md:gap-3 md:mt-6">
                <div className="w-[51.5%]">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    duration={1000}
                    delay={300}
                  >
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhEX7R_JK0nkhodCj-7bzNhMBB3NylReMyQ&s"
                      }
                      alt="Vriksharopan Samaroh Image"
                      width={2000}
                      height={2000}
                      className="xl:rounded-lg md:rounded-md"
                    />
                  </Fade>
                </div>

                <div className="w-1/2">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    duration={1000}
                    delay={300}
                  >
                    <div className="bg-[#eff0f1] border xl:rounded-lg xl:p-4 lg:p-3 md:rounded-md md:p-2">
                      <h2 className="font-bold xl:px-5 xl:text-lg lg:px-4 lg:text-[16px] md:px-3 md:text-sm text-center">
                        Active Global Citizens
                      </h2>
                      <p className="xl:mt-2 xl:text-[14px] lg:mt-4 lg:text-sm md:mt-3 md:text-[10px]">
                        On Friday, 28th April 2023, Pacific World School, in
                        collaboration with AFS, organized a meaningful community
                        service initiative to celebrate Active Global Citizens.
                        Student volunteers from Classes VIII and IX visited
                        Light De Literacy, a school for underprivileged
                        children, where they spent heartfelt time engaging with
                        the students. The Pacificans conducted interactive
                        sessions, teaching the children how to draw the map of
                        India, and hosted a lively talent show featuring dance
                        and music.
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>

              {/* Fifth Card */}
              <div className="flex items-center xl:w-[75%] xl:gap-5 xl:mt-10 lg:gap-4 lg:mt-8 md:w-[90%] md:gap-3 md:mt-6">
                <div className="w-1/2">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    duration={1000}
                    delay={300}
                  >
                    <div className="bg-[#eff0f1] border xl:rounded-lg xl:p-4 lg:p-3 md:rounded-md md:p-2">
                      <h2 className="font-bold xl:px-5 xl:text-lg lg:px-4 lg:text-[16px] md:px-3 md:text-sm text-center">
                        Paper Recycling
                      </h2>
                      <p className="xl:mt-2 xl:text-[14px] lg:mt-4 lg:text-sm md:mt-3 md:text-[10px]">
                        A Paper Recycling Plant has been established on the
                        school campus, where Pacificians actively recycle waste
                        paper to create eco-friendly items such as greeting
                        cards, folders, bookmarks, gift tags, and more.
                      </p>
                    </div>
                  </Fade>
                </div>

                <div className="w-[51.5%]">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    duration={1000}
                    delay={300}
                  >
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkUhbhEjbMoDPrHcesOCHoqMkFCeKJ2q58DA&s"
                      }
                      alt="Vriksharopan Samaroh Image"
                      width={2000}
                      height={2000}
                      className="xl:rounded-lg md:rounded-md"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
