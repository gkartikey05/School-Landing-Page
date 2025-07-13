"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import "animate.css";
import { IBM_Plex_Sans, Pacifico, Lexend } from "next/font/google";
import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { TbMessageCircle } from "react-icons/tb";
import { BsCalendar2Check } from "react-icons/bs";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Footer from "@/components/Footer";

const VideoPlayer = dynamic(() => import("../components/VideoPlayer"), {
  ssr: false, // Ensures the component is loaded only on the client-side
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const [apiOne, setApiOne] = useState<CarouselApi>();
  const [currentOne, setCurrentOne] = useState(0);

  const [apiTwo, setApiTwo] = useState<CarouselApi>();
  const [currentTwo, setCurrentTwo] = useState(0);

  const [apiThree, setApiThree] = useState<CarouselApi>();
  const [currentThree, setCurrentThree] = useState(0);

  const [apiFour, setApiFour] = useState<CarouselApi>();
  const [currentFour, setCurrentFour] = useState(0);

  const [apiFive, setApiFive] = useState<CarouselApi>();
  const [currentFive, setCurrentFive] = useState(0);

  useEffect(() => {
    if (!apiOne) {
      return;
    }
    setCurrentOne(apiOne.selectedScrollSnap());
    apiOne.on("select", () => {
      setCurrentOne(apiOne.selectedScrollSnap());
    });

    if (!apiTwo) {
      return;
    }
    setCurrentTwo(apiTwo.selectedScrollSnap());
    apiTwo.on("select", () => {
      setCurrentTwo(apiTwo.selectedScrollSnap());
    });

    if (!apiThree) {
      return;
    }
    setCurrentThree(apiThree.selectedScrollSnap());
    apiThree.on("select", () => {
      setCurrentThree(apiThree.selectedScrollSnap());
    });

    if (!apiFour) {
      return;
    }
    setCurrentFour(apiFour.selectedScrollSnap());
    apiFour.on("select", () => {
      setCurrentFour(apiFour.selectedScrollSnap());
    });

    if (!apiFive) {
      return;
    }
    setCurrentFive(apiFive.selectedScrollSnap());
    apiFive.on("select", () => {
      setCurrentFive(apiFive.selectedScrollSnap());
    });
  }, [apiOne, apiTwo, apiThree, apiFour, apiFive]);

  return (
    <div className={`${lexend.className} overflow-x-hidden scroll-smooth`}>
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

      {/* Background Video */}
      <main className="flex justify-center items-center bg-black">
        <VideoPlayer src="/assets/videos/background_video.mp4" />
      </main>

      {/* Newsletter */}
      <section className="bg-blue-500 font-bold text-white overflow-hidden lg:text-sm">
        <motion.div
          className="py-3 text-white lg:py-2"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <span className="border-l-4 border-r-4 border-yellow-400 font-[700] pl-8 pr-8">
            This Website is underdevelopment, please try to coperate. Thank You
          </span>
        </motion.div>
      </section>

      {/* Principle Section */}
      <section id="moto" className="relative h-screen pt-20 w-full text-center">
        <Fade direction="up" triggerOnce={true}>
          <h2 className="text-center text-4xl font-semibold tracking-wider text-gray-800 mb-10 lg:text-3xl lg:tracking-normal">
            Our Principles! Perfection, Compassion, Encouragement
          </h2>
        </Fade>

        {/* 50% on small screens and 100% on larger screens. */}
        <Fade direction="up" triggerOnce={true}>
          <div id="achievements" className="flex justify-center">
            <Carousel
              setApi={setApiOne}
              opts={{
                align: "start",
                loop: true,
              }}
              className="max-w-[85%] w-full"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/1">
                  <div>
                    <Card>
                      <CardContent className="flex items-center justify-between h-96 rounded-xl gap-2 bg-linear-to-b from-[#afcdff] to-[#fff]">
                        <div className="w-[50%] py-52">
                          <h1
                            className={`text-[#ff7f50] text-6xl py-5 ${ibmPlexSans.className} ${pacifico.className} lg:text-5xl`}
                          >
                            Perfection
                          </h1>
                          <p className="text-lg px-20 font-semibold tracking-wide lg:text-[14px] lg:px-10 lg:tracking-normal">
                            &quot;We pursue mastery, motivating every student to
                            attain their utmost potential and uphold the finest
                            standards in all their efforts.&quot;
                          </p>
                        </div>
                        <span className="w-[50%] flex justify-end">
                          <Image
                            className="rounded-xl h-96"
                            src="https://img.freepik.com/free-photo/young-kids-performing-play-theatre-stage-celebrate-Global-theatre-day_23-2151163672.jpg?t=st=1743492301~exp=1743495901~hmac=3dc81ac9d7728b7f89255485cfcdab3da763c83ec21a1a0e9ec9d06374c74389&w=740"
                            alt="images"
                            width="600"
                            height="400"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/1">
                  <div className="p-1">
                    <Card className="p-0">
                      <CardContent className="flex items-center justify-between h-96 rounded-xl gap-2 bg-linear-to-b from-[#afcdff] to-[#fff] p-0">
                        <div className="w-[50%] py-52">
                          <h1
                            className={`text-[#ff7f50] text-6xl py-5 ${ibmPlexSans.className} ${pacifico.className} lg:text-5xl`}
                          >
                            Compassion
                          </h1>
                          <p className="text-lg px-20 font-semibold tracking-wide lg:text-[14px] lg:px-10 lg:tracking-normal">
                            &quot;At Atlantic Global School, we cultivate young
                            intellects by encouraging discovery, innovation, and
                            wisdom, fostering self-assurance, kindness, and a
                            promising future.&quot;
                          </p>
                        </div>
                        <span className="w-[50%] flex justify-end">
                          <Image
                            className="rounded-xl h-96"
                            src="https://img.freepik.com/free-photo/young-kids-performing-play-theatre-stage-celebrate-Global-theatre-day_23-2151163734.jpg?t=st=1743492272~exp=1743495872~hmac=0cc2a993d4db2c80207793b46627a3678201ebece21fc4f12154d41dcbcf1d0e&w=740"
                            alt="images"
                            width="600"
                            height="400"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/1">
                  <div className="p-1">
                    <Card className="p-0">
                      <CardContent className="flex items-center justify-between h-96 rounded-xl gap-2 bg-linear-to-b from-[#afcdff] to-[#fff] p-0">
                        <div className="w-[50%] py-52">
                          <h1
                            className={`text-[#ff7f50] text-6xl py-5 ${ibmPlexSans.className} ${pacifico.className} lg:text-5xl`}
                          >
                            Encouragement
                          </h1>
                          <p className="text-lg px-20 font-semibold tracking-wide lg:text-[14px] lg:px-10 lg:tracking-normal">
                            &quot;We equip students with the confidence and
                            independence to lead and shape their own
                            future..&quot;
                          </p>
                        </div>
                        <span className="w-[50%] flex justify-end">
                          <Image
                            className="rounded-xl h-96"
                            src="https://img.freepik.com/free-photo/kids-performing-play-stage-word-theatre-day_23-2151163757.jpg?t=st=1743492232~exp=1743495832~hmac=f710ac1c9e01e6ffdd24e21e6e394186e7569a3e93dddaf879726e057c490f7f&w=740"
                            alt="images"
                            width="600"
                            height="400"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Fade>

        {/* Buttons for carousel */}
        <div className="flex justify-center items-center gap-2">
          <span
            onClick={() => apiOne?.scrollTo(currentOne - 1)}
            className="absolute left-14 top-80 bg-blue-500 text-gray-100 w-10 h-10 box-border flex justify-center items-center rounded-full cursor-pointer lg:left-9"
          >
            <FaArrowLeftLong className="text-lg" />
          </span>
          <span
            onClick={() => apiOne?.scrollTo(currentOne + 1)}
            className="absolute right-14 top-80 bg-blue-500 text-gray-100 w-10 h-10 box-border flex justify-center items-center rounded-full cursor-pointer lg:right-9"
          >
            <FaArrowRightLong className="text-lg" />
          </span>
        </div>
      </section>

      {/* Achievement Section */}
      <section
        id="achievement"
        className={`relative h-screen pt-24 w-full text-center bg-[url("https://img.freepik.com/premium-vector/modern-minimalistic-soft-blue-white-gradient-color-abstract-background_1120863-1210.jpg?w=1380")] animate__animated animate__fadeInUp`}
      >
        <Fade direction="up" triggerOnce={true}>
          <h2 className="text-4xl font-semibold tracking-wider text-gray-800 mb-10 animate__animated animate__fadeInUp">
            Our Achievements
          </h2>
        </Fade>

        {/* 50% on small screens and 25% on larger screens. */}
        <Fade direction="up" triggerOnce={true}>
          <div id="achievements" className="flex justify-center">
            <Carousel
              setApi={setApiTwo}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flexitems-center justify-center p-0">
                        <span className="text-4xl font-semibold">
                          <Image
                            className="text-4xl rounded-lg"
                            src="https://img.freepik.com/free-photo/best-friends-graduation-ceremony-having-fun_23-2148505279.jpg?t=st=1743231888~exp=1743235488~hmac=040ecb4c5765a6cc08fab83944c684cd69de4a944bb9625b5e3db99cbb598986&w=740"
                            alt="images"
                            width="600"
                            height="600"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0">
                        <span className="text-4xl font-semibold">
                          <Image
                            className="text-4xl rounded-lg"
                            src="https://img.freepik.com/premium-photo/boy-holding-trophy-that-says-school_1097935-4935.jpg?w=740"
                            alt="images"
                            width="600"
                            height="600"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0">
                        <span className="text-4xl font-semibold">
                          <Image
                            className="text-4xl rounded-lg"
                            src="https://img.freepik.com/free-vector/flat-illustration-Globalal-day-education-event_23-2149956158.jpg?t=st=1743491474~exp=1743495074~hmac=193b6e44bc155a62c090f736619138ea7441f6d8579f39143fb85692a98e1898&w=740"
                            alt="images"
                            width="600"
                            height="600"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0">
                        <span className="text-4xl font-semibold">
                          <Image
                            className="text-4xl rounded-lg"
                            src="https://img.freepik.com/free-vector/happy-cartoon-character-winning-prize_23-2147892030.jpg?t=st=1743491512~exp=1743495112~hmac=3b82b5665f5504463f438504fb8c0775a60b3a0ba8c461933a0eda1fe5f4d7bb&w=740"
                            alt="images"
                            width="600"
                            height="600"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0">
                        <span className="text-4xl font-semibold">
                          <Image
                            className="text-4xl rounded-lg"
                            src="https://img.freepik.com/free-photo/best-friends-graduation-ceremony-having-fun_23-2148505279.jpg?t=st=1743231888~exp=1743235488~hmac=040ecb4c5765a6cc08fab83944c684cd69de4a944bb9625b5e3db99cbb598986&w=740"
                            alt="images"
                            width="600"
                            height="600"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0">
                        <span className="text-4xl font-semibold">
                          <Image
                            className="text-4xl rounded-lg"
                            src="https://img.freepik.com/premium-photo/boy-holding-trophy-that-says-school_1097935-4935.jpg?w=740"
                            alt="images"
                            width="600"
                            height="600"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0">
                        <span className="text-4xl font-semibold">
                          <Image
                            className="text-4xl rounded-lg"
                            src="https://img.freepik.com/free-vector/flat-illustration-Globalal-day-education-event_23-2149956158.jpg?t=st=1743491474~exp=1743495074~hmac=193b6e44bc155a62c090f736619138ea7441f6d8579f39143fb85692a98e1898&w=740"
                            alt="images"
                            width="600"
                            height="600"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0">
                        <span className="text-4xl font-semibold">
                          <Image
                            className="text-4xl rounded-lg"
                            src="https://img.freepik.com/free-vector/happy-cartoon-character-winning-prize_23-2147892030.jpg?t=st=1743491512~exp=1743495112~hmac=3b82b5665f5504463f438504fb8c0775a60b3a0ba8c461933a0eda1fe5f4d7bb&w=740"
                            alt="images"
                            width="600"
                            height="600"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Fade>

        {/* Buttons for carousel */}
        <div className="flex justify-center items-center gap-2">
          <span
            onClick={() => apiTwo?.scrollTo(currentTwo - 1)}
            className="absolute left-12 top-72 bg-blue-500 text-gray-100 w-10 h-10 box-border flex justify-center items-center rounded-full cursor-pointer"
          >
            <FaArrowLeftLong className="text-lg" />
          </span>
          <span
            onClick={() => apiTwo?.scrollTo(currentTwo + 1)}
            className="absolute right-12 top-72 bg-blue-500 text-gray-100 w-10 h-10 box-border flex justify-center items-center rounded-full cursor-pointer"
          >
            <FaArrowRightLong className="text-lg" />
          </span>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why_choose"
        className={`h-screen pt-24 w-full text-center bg-[url('https://img.freepik.com/free-vector/dark-background-with-dynamic-shapes_361591-3105.jpg?t=st=1743492720~exp=1743496320~hmac=73aa589f4dc469315b32b45615bfe084f4945e97ac914b0d7f5cf684f6e27eff&w=826')] animate__animated animate__fadeInUp`}
      >
        <Fade direction="up" triggerOnce={true}>
          <h2 className="text-center text-4xl font-bold tracking-wider text-white mb-10 animate__animated animate__fadeInUp">
            Why choose Atlantic Global School?
          </h2>
        </Fade>

        {/* 50% on small screens and 25% on larger screens. */}
        <Fade direction="up" triggerOnce={true}>
          <div id="choose" className="flex justify-center">
            <Carousel
              setApi={setApiThree}
              opts={{
                align: "start",
                loop: true,
              }}
              className="max-w-[90%] w-full"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div>
                    <Card>
                      <CardContent className="flex justify-center">
                        <span className="text-2xl text-left font-semibold p-0.5 pb-3">
                          <Image
                            className="rounded-t-lg"
                            src="https://img.freepik.com/premium-photo/cartoon-image-two-kids-with-glasses-girl-with-glasses-back-school_588614-345.jpg?w=740"
                            alt="images"
                            width="300"
                            height="300"
                          />
                          <p className="text-[16px] font-bold text-left pt-2 ml-2 -mb-2">
                            Future Proof
                          </p>
                          <button
                            className="text-[16px] mt-4 ml-2 w-32 h-10 rounded box-border font-bold bg-fuchsia-600 text-white hover:bg-fuchsia-700"
                            onClick={() => setShowContent(!showContent)}
                          >
                            <Link href={"#"}>Learn More</Link>
                          </button>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div>
                    <Card>
                      <CardContent className="flex justify-center aspect-square">
                        <span className="text-2xl text-left font-semibold p-0.5 pb-3">
                          <Image
                            className="rounded-t-lg"
                            src="https://img.freepik.com/free-photo/portrait-smiley-boy-climbing_23-2148598844.jpg?t=st=1743493551~exp=1743497151~hmac=61ed5329d44d6cfff8ffb5bed1b38cd9ec489f7f5a431e28a7a872c7622d956f&w=740"
                            alt="images"
                            width="300"
                            height="300"
                          />
                          <p className="text-[16px] font-bold text-left pt-2 ml-2 -mb-2">
                            Sporty Environment
                          </p>
                          <button
                            className="text-[16px] mt-4 ml-2 w-32 h-10 rounded box-border font-bold bg-fuchsia-600 text-white hover:bg-fuchsia-700"
                            onClick={() => setShowContent(!showContent)}
                          >
                            <Link href={"#"}>Learn More</Link>
                          </button>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div>
                    <Card>
                      <CardContent className="flex justify-center aspect-square">
                        <span className="text-2xl text-left font-semibold p-0.5 pb-3">
                          <Image
                            className="rounded-t-lg"
                            src="https://img.freepik.com/free-photo/girl-female-teacher-doing-science-experiments-with-microscope_23-2148799254.jpg?t=st=1743493592~exp=1743497192~hmac=3b188224b8137e9a0675be3070ad47ca998dea4d827a50a89297a11bbcc774a2&w=740"
                            alt="images"
                            width="300"
                            height="300"
                          />
                          <p className="text-[16px] font-bold text-left pt-2 ml-2 -mb-2">
                            Excellence in Academic
                          </p>
                          <button
                            className="text-[16px] mt-4 ml-2 w-32 h-10 rounded box-border font-bold bg-fuchsia-600 text-white hover:bg-fuchsia-700"
                            onClick={() => setShowContent(!showContent)}
                          >
                            <Link href={"#"}>Learn More</Link>
                          </button>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div>
                    <Card>
                      <CardContent className="flex justify-center aspect-square">
                        <span className="text-2xl text-left font-semibold p-0.5 pb-3">
                          <Image
                            className="rounded-t-lg"
                            src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951283.jpg?t=st=1743493883~exp=1743497483~hmac=572ce8b8cb1c4c40064d999d4c5ec365f9f15239c76eb13214c16c89ca058ec9&w=740"
                            alt="images"
                            width="300"
                            height="300"
                          />
                          <p className="text-[16px] font-bold text-left pt-2 ml-2 -mb-2">
                            Leading Conferences
                          </p>
                          <button
                            className="text-[16px] mt-4 ml-2 w-32 h-10 rounded box-border font-bold bg-fuchsia-600 text-white hover:bg-fuchsia-700"
                            onClick={() => setShowContent(!showContent)}
                          >
                            <Link href={"#"}>Learn More</Link>
                          </button>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div>
                    <Card>
                      <CardContent className="flex justify-center aspect-square">
                        <span className="text-2xl text-left font-semibold p-0.5 pb-3">
                          <Image
                            className="rounded-t-lg"
                            src="https://img.freepik.com/premium-photo/cartoon-image-two-kids-with-glasses-girl-with-glasses-back-school_588614-345.jpg?w=740"
                            alt="images"
                            width="300"
                            height="300"
                          />
                          <p className="text-[16px] font-bold text-left pt-2 ml-2 -mb-2">
                            Future Proof
                          </p>
                          <button
                            className="text-[16px] mt-4 ml-2 w-32 h-10 rounded box-border font-bold bg-fuchsia-600 text-white hover:bg-fuchsia-700"
                            onClick={() => setShowContent(!showContent)}
                          >
                            <Link href={"#"}>Learn More</Link>
                          </button>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div>
                    <Card>
                      <CardContent className="flex justify-center aspect-square">
                        <span className="text-2xl text-left font-semibold p-0.5 pb-3">
                          <Image
                            className="rounded-t-lg"
                            src="https://img.freepik.com/free-photo/portrait-smiley-boy-climbing_23-2148598844.jpg?t=st=1743493551~exp=1743497151~hmac=61ed5329d44d6cfff8ffb5bed1b38cd9ec489f7f5a431e28a7a872c7622d956f&w=740"
                            alt="images"
                            width="300"
                            height="300"
                          />
                          <p className="text-[16px] font-bold text-left pt-2 ml-2 -mb-2">
                            Sporty Environment
                          </p>
                          <button
                            className="text-[16px] mt-4 ml-2 w-32 h-10 rounded box-border font-bold bg-fuchsia-600 text-white hover:bg-fuchsia-700"
                            onClick={() => setShowContent(!showContent)}
                          >
                            <Link href={"#"}>Learn More</Link>
                          </button>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div>
                    <Card>
                      <CardContent className="flex justify-center aspect-square">
                        <span className="text-2xl text-left font-semibold p-0.5 pb-3">
                          <Image
                            className="rounded-t-lg"
                            src="https://img.freepik.com/free-photo/girl-female-teacher-doing-science-experiments-with-microscope_23-2148799254.jpg?t=st=1743493592~exp=1743497192~hmac=3b188224b8137e9a0675be3070ad47ca998dea4d827a50a89297a11bbcc774a2&w=740"
                            alt="images"
                            width="300"
                            height="300"
                          />
                          <p className="text-[16px] font-bold text-left pt-2 ml-2 -mb-2">
                            Excellence in Academic
                          </p>
                          <button
                            className="text-[16px] mt-4 ml-2 w-32 h-10 rounded box-border font-bold bg-fuchsia-600 text-white hover:bg-fuchsia-700"
                            onClick={() => setShowContent(!showContent)}
                          >
                            <Link href={"#"}>Learn More</Link>
                          </button>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                  <div>
                    <Card>
                      <CardContent className="flex justify-center aspect-square">
                        <span className="text-2xl text-left font-semibold p-0.5 pb-3">
                          <Image
                            className="rounded-t-lg"
                            src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951283.jpg?t=st=1743493883~exp=1743497483~hmac=572ce8b8cb1c4c40064d999d4c5ec365f9f15239c76eb13214c16c89ca058ec9&w=740"
                            alt="images"
                            width="300"
                            height="300"
                          />
                          <p className="text-[16px] font-bold text-left pt-2 ml-2 -mb-2">
                            Leading Conferences
                          </p>
                          <button
                            className="text-[16px] mt-4 ml-2 w-32 h-10 rounded box-border font-bold bg-fuchsia-600 text-white hover:bg-fuchsia-700"
                            onClick={() => setShowContent(!showContent)}
                          >
                            <Link href={"#"}>Learn More</Link>
                          </button>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Fade>

        {/* Buttons for carousel */}
        <div className="flex justify-center items-center gap-2">
          <span
            onClick={() => apiThree?.scrollTo(currentThree - 1)}
            className="absolute left-0 top-[310px]"
          >
            <RiArrowLeftSLine className="text-8xl text-blue-500 cursor-pointer" />
          </span>
          <span
            onClick={() => apiThree?.scrollTo(currentThree + 1)}
            className="absolute right-0 top-[310px]"
          >
            <RiArrowRightSLine className="text-8xl text-blue-500 cursor-pointer" />
          </span>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section
        id="gallery"
        className={`h-full px-[75px] pt-20 animate__animated animate__fadeInUp bg-[url("https://img.freepik.com/premium-photo/wallpaper-black-white-background-modern-backdrop-abstract-lines-abstract-fold-3d-illustration_357568-5250.jpg?w=1380")]`}
      >
        <Fade direction="up" triggerOnce={true}>
          <div className="pb-4">
            <h2 className="text-[32px] font-bold tracking-wide -mb-1.5 text-[#333] animate__animated animate__fadeInDown">
              Our Video Catalog
            </h2>
            <p className="text-[16px] text-[#333] mb-2.5 animate__animated animate__fadeInDown">
              Dive into our expansive video gallery, where captivating content
              awaits you, blending inspiration with entertainment.
            </p>
          </div>
        </Fade>

        {/* 33% on small and larger screens. */}
        <Fade direction="up" triggerOnce={true}>
          <div id="achievements" className="flex justify-start">
            <Carousel
              setApi={setApiFour}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-full relative -mt-2 pb-4 "
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                  <div className="mt-4">
                    <Card className="rounded-none">
                      <CardContent className="flex justify-center items-center bg-[#e6e6e6] h-1/2">
                        <span className="text-2xl text-left font-semibold">
                          <iframe
                            width="380"
                            height="250"
                            src="https://www.youtube.com/embed/awKm7nu6J-g?si=ETUy_13UdPpEH-TC"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-full"
                          ></iframe>
                          <h3 className="text-[16px] text-[#3f8dae] font-semibold text-left pt-4 ml-2">
                            Our Premises
                          </h3>
                          <p className="text-xs text-left mt-0.5 mx-2 mb-2.5 hyphens-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque, obcaecati quis laborum, accusamus
                            corporis, blanditiis iste omnis cupiditate itaque
                            sit numquam!
                          </p>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                  <div className="p-0 mt-4">
                    <Card>
                      <CardContent className="flex h justify-center items-center bg-[#e6e6e6]">
                        <span className="text-2xl text-left font-semibold">
                          <iframe
                            width="380"
                            height="250"
                            src="https://www.youtube.com/embed/awKm7nu6J-g?si=ETUy_13UdPpEH-TC"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-full"
                          ></iframe>
                          <h3 className="text-[16px] text-[#3f8dae] font-semibold text-left pt-4 ml-2">
                            Our Faculty
                          </h3>
                          <p className="text-xs text-left mt-0.5 mx-2 mb-2.5 hyphens-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque, obcaecati quis laborum, accusamus
                            corporis, blanditiis iste omnis cupiditate itaque
                            sit numquam!
                          </p>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                  <div className="p-0 mt-4">
                    <Card>
                      <CardContent className="flex h justify-center items-center bg-[#e6e6e6]">
                        <span className="text-2xl text-left font-semibold">
                          <iframe
                            width="380"
                            height="250"
                            src="https://www.youtube.com/embed/awKm7nu6J-g?si=ETUy_13UdPpEH-TC"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-full"
                          ></iframe>
                          <h3 className="text-[16px] text-[#3f8dae] font-semibold text-left pt-4 ml-2">
                            Our Students
                          </h3>
                          <p className="text-xs text-left mt-0.5 mx-2 mb-2.5 hyphens-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque, obcaecati quis laborum, accusamus
                            corporis, blanditiis iste omnis cupiditate itaque
                            sit numquam!
                          </p>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                  <div className="p-0 mt-4">
                    <Card>
                      <CardContent className="flex h justify-center items-center bg-[#e6e6e6]">
                        <span className="text-2xl text-left font-semibold">
                          <iframe
                            width="380"
                            height="250"
                            src="https://www.youtube.com/embed/awKm7nu6J-g?si=ETUy_13UdPpEH-TC"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-full"
                          ></iframe>
                          <h3 className="text-[16px] text-[#3f8dae] font-semibold text-left pt-4 ml-2">
                            Our Students
                          </h3>
                          <p className="text-xs text-left mt-0.5 mx-2 mb-2.5 hyphens-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque, obcaecati quis laborum, accusamus
                            corporis, blanditiis iste omnis cupiditate itaque
                            sit numquam!
                          </p>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Fade>

        {/* Buttons for carousel */}
        <div className="flex justify-center items-center gap-2">
          <span
            onClick={() => apiFour?.scrollTo(currentFour - 1)}
            className="absolute right-32 top-32 bg-blue-500 text-gray-100 w-10 h-10 box-border flex justify-center items-center rounded-full cursor-pointer"
          >
            <FaArrowLeftLong className="text-lg" />
          </span>
          <span
            onClick={() => apiFour?.scrollTo(currentFour + 1)}
            className="absolute right-20 top-32 bg-blue-500 text-gray-100 w-10 h-10 box-border flex justify-center items-center rounded-full cursor-pointer"
          >
            <FaArrowRightLong className="text-lg" />
          </span>
        </div>

        {/* Explore Button */}
        <Fade direction="up" triggerOnce={true}>
          <div className="text-center pb-5">
            <button className="px-7 py-3 mb-16 bg-fuchsia-600 text-white rounded-full">
              <Link
                href={"#"}
                target="_blank"
                className="flex items-center justify-center"
              >
                EXPLORE OUR CHANNEL <FiArrowUpRight className="text-2xl" />
              </Link>
            </button>
          </div>
        </Fade>
      </section>

      {/* Testimonial Section */}
      <section
        id="testimonials"
        className={`flex items-start justify-between relative gap-5 px-[90px] pt-20 bg-cyan-600 w-full max-h-[420px] text-center animate__animated animate__fadeInUp -mt-12 mb-48`}
      >
        <div className="w-3/6">
          <h2 className="px-3 mb-12 text-[26px] font-bold text-left text-white">
            Parents Testimonials
          </h2>
          {/* 100% on small and larger screens. */}
          <div>
            <Carousel
              setApi={setApiFive}
              opts={{
                align: "start",
                loop: true,
              }}
              className="relative max-w-full mx-2"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/1 lg:basis-1/1">
                  <div className="max-w-full w-full p-1">
                    <Card>
                      <CardContent className="bg-[#E9EAEC] rounded-2xl flex aspect-auto">
                        <span className="w-full p-[50px] text-2xl text-left font-semibold ">
                          <TbMessageCircle className="text-7xl text-blue-600" />
                          <h3 className="py-3 text-[#333] text-[26px] font-bold ">
                            Great environment
                          </h3>
                          <p className="text-[18px] text-[#333] pb-[20px]">
                            Our experience in altantic Global school has been
                            exceptional. Teachers are truly invested in our
                            child&apos;s education and his growth as a learner.
                          </p>
                          <div className="text-[14px] mt-4">
                            Rabab Mehdi
                            <br />I H
                          </div>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/1 lg:basis-1/1">
                  <div className="max-w-full w-full p-1">
                    <Card>
                      <CardContent className="bg-[#E9EAEC] rounded-2xl flex aspect-auto">
                        <span className="w-full p-[50px] text-2xl text-left font-semibold ">
                          <TbMessageCircle className="text-7xl text-blue-600" />
                          <h3 className="py-3 text-[#333] text-[26px] font-bold ">
                            Global class facilities
                          </h3>
                          <p className="text-[18px] text-[#333] pb-[20px]">
                            Atlantic Global School is the best school in
                            Lucknow, offering Global-class facilities, the best
                            teaching faculty, and an activity based curriculam
                            for holistic learning
                          </p>
                          <div className="text-[14px] mt-4">
                            Aradhya Singh
                            <br />I H
                          </div>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/1 lg:basis-1/1">
                  <div className="max-w-full w-full p-1">
                    <Card>
                      <CardContent className="bg-[#E9EAEC] rounded-2xl flex aspect-auto">
                        <span className="w-full p-[50px] text-2xl text-left font-semibold ">
                          <TbMessageCircle className="text-7xl text-blue-600" />
                          <h3 className="py-3 text-[#333] text-[26px] font-bold ">
                            Strong leadership team
                          </h3>
                          <p className="text-[18px] text-[#333] pb-[20px]">
                            Our experience with the school has been exceptional,
                            thanks to its strong leadership team and a staff
                            that is truly friendly and supportive.
                          </p>
                          <div className="text-[14px] mt-4">
                            Ziad Ul Haque
                            <br />
                            II A
                          </div>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/1 lg:basis-1/1">
                  <div className="max-w-full w-full p-1">
                    <Card>
                      <CardContent className="bg-[#E9EAEC] rounded-2xl flex aspect-auto">
                        <span className="w-full p-[50px] text-2xl text-left font-semibold ">
                          <TbMessageCircle className="text-7xl text-blue-600" />
                          <h3 className="py-3 text-[#333] text-[26px] font-bold ">
                            Best Teaching
                          </h3>
                          <p className="text-[18px] text-[#333] pb-[20px]">
                            We are very satisfied with the teaching at Atlantic
                            Global School. The engaging approach has helped
                            Anika grow, boosting her confidence, communication
                            and academics.
                          </p>
                          <div className="text-[14px] mt-4">
                            Anika Gupta
                            <br />
                            VI B
                          </div>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Buttons for carousel */}
        <div className="flex justify-center items-center gap-2">
          <span
            onClick={() => apiFive?.scrollTo(currentFive - 1)}
            className="absolute left-16 top-[120px] bg-gray-400 text-gray-100 w-10 h-10 box-border flex justify-center items-center rounded-full cursor-pointer"
          >
            <FaArrowLeftLong className="text-lg" />
          </span>
          <span
            onClick={() => apiFive?.scrollTo(currentFive + 1)}
            className="absolute left-28 top-[120px] bg-gray-400 text-white w-10 h-10 box-border flex justify-center items-center rounded-full cursor-pointer"
          >
            <FaArrowRightLong className="text-lg" />
          </span>
        </div>

        <div className="w-3/6 text-left pb-18">
          <h2 className="px-3 mb-[42px] text-[26px] font-bold text-left text-white">
            Upcoming Events/Calendar
          </h2>

          <div className="bg-[#E9EAEC] rounded-lg max-h-[450px] h-[379px]">
            <div className="relative mt-2 h-full overflow-hidden">
              <div className="marquee-vertical-events">
                <div className="p-[40px] ">
                  <div className="flex gap-1">
                    <BsCalendar2Check className="min-h-5 min-w-5 h-5 w-5 text-blue-600 -mt-0.5" />
                    <span className="text-[300] text-sm pb-[20px]">
                      Parents can visit the school campus from Monday to
                      Saturday between 9.00 am and 2.00 pm. Parents can connect
                      with the admission team at 8899117704/ 8800013174 or mail
                      us at admission@pacificGlobalschool.com
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <BsCalendar2Check className="min-h-5 min-w-5 h-5 w-5 text-blue-600 -mt-0.5" />
                    <span className="text-[300] text-sm pb-[20px]">
                      Limited seats available for the session 2024-25.You can
                      contact 8899117704 or 8800013174 for any queries regarding
                      admissions.
                    </span>
                  </div>
                  <div className="flex gap-1 overflow-y-auto">
                    <BsCalendar2Check className="min-h-5 min-w-5 h-5 w-5 text-blue-600 -mt-0.5" />
                    <span className="text-[300] text-sm pb-[20px]">
                      Parents can visit the school campus from Monday to
                      Saturday between 9.00 am and 2.00 pm. Parents can connect
                      with the admission team at 8899117704/ 8800013174 or mail
                      us at admission@pacificGlobalschool.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        className={`bg-[url("https://img.freepik.com/free-photo/low-rise-building_1127-3268.jpg?t=st=1743406655~exp=1743410255~hmac=529afef574b2de6d106826d23a7667b9ece8df53f8694b2b65015114d0c528e9&w=996")] px-28 py-12 max-w-full bg-no-repeat bg-center bg-cover`}
      >
        <Fade direction="down" triggerOnce={true}>
          <h1 className="text-center mt-10 text-[36px] text-white font-[900] mb-2 ">
            Leadership Team
          </h1>
        </Fade>

        <Fade direction="up" triggerOnce={true}>
          <div className="flex mt-6 bg-white">
            <div className="flex flex-col items-center w-1/3 py-20 border-r border-gray-200">
              <Image
                className="rounded-full"
                src={
                  "https://img.freepik.com/free-photo/view-3d-man-working-justice-law-field_23-2151228052.jpg?t=st=1743251117~exp=1743254717~hmac=769fe0e4d576b62464dafded500613c70211ec1e509a45c916f35a9cffda1495&w=740"
                }
                alt="Principal Image"
                width="150"
                height="150"
              />
              <h4 className="font-[600] pt-4 text-[16px]">Mr. AI Bose</h4>
              <p className="font-[500] text-center px-10 text-[14px] mt-0.5">
                Chairperson Atlantic Global School
              </p>
            </div>

            <div className="flex flex-col items-center w-1/3 py-20 border-r border-gray-200">
              <Image
                className="rounded-full"
                src={
                  "https://img.freepik.com/premium-photo/man-suit-with-word-green-background_1239757-13452.jpg?w=740"
                }
                alt="Principal Image"
                width="150"
                height="150"
              />
              <h4 className="font-[600] pt-4 text-[16px]">Mr. AI Roy</h4>
              <p className="font-[500] text-center px-10 text-[14px] mt-0.5">
                Principal Atlantic Global School
              </p>
            </div>

            <div className="flex flex-col items-center w-1/3 py-20 border-r border-gray-200">
              <Image
                className="rounded-full"
                src={
                  "https://img.freepik.com/premium-photo/male-teacher-wallpaper_1114367-841.jpg?w=740"
                }
                alt="Principal Image"
                width="150"
                height="150"
              />
              <h4 className="font-[600] pt-4 text-[16px]">Mr. AI Saksena</h4>
              <p className="font-[500] text-center px-10 text-[14px] mt-0.5">
                Vice Principal Atlantic Global School
              </p>
            </div>
          </div>
        </Fade>

        <div className="text-center mt-16 mb-14 text-white font-extrabold">
          <Link
            href={"#"}
            className="px-5 py-4 border-2 border-white rounded-full"
          >
            VIEW OUR TEAM
          </Link>
        </div>
      </section>

      {/* Partner Section */}
      <section className="mx-6 py-16">
        <Fade direction="down" triggerOnce={true}>
          <h1 className="text-center text-[36px] text-gray-800 font-bold ">
            Our Education Partner
          </h1>
        </Fade>

        <Fade direction="up" triggerOnce={true}>
          <div className="flex justify-between items-center mt-5">
            <Image
              className="h-24 w-56 -mr-5"
              alt=""
              src={
                "https://w7.pngwing.com/pngs/480/214/png-transparent-stanford-university-logo-horizontal.png"
              }
              width="250"
              height="80"
            />
            <Image
              className="h-44 w-46 -mr-5"
              alt=""
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwHwBZ67bOk67BI9bl6z_mNYlgfO80O7kZw&s"
              }
              width="120"
              height="120"
            />
            <Image
              className="h-36 w-40"
              alt=""
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwR1p5ZBJ1JPDcm-ZDln9GeWWDiXXG_sLKEQ&s"
              }
              width="180"
              height="100"
            />
            <Image
              className="h-36 w-40"
              alt=""
              src={
                "https://static.vecteezy.com/system/resources/thumbnails/046/006/102/small/education-logo-design-template-for-school-and-organization-vector.jpg"
              }
              width="250"
              height="50"
            />
            <Image
              className="h-20 w-60"
              alt=""
              src={
                "https://tisbadlapur.edu.in/wp-content/uploads/2023/10/cropped-Thanekar-International-School-Logo-Final-1-e1697712922602.png"
              }
              width="250"
              height="80"
            />
            <Image
              className="h-28 w-36"
              alt=""
              src={
                "https://assets.zigchat.com/channel-media/r6RRcUdyCmjBq9ALMWGxynphnXLaQwGhVM1llVP31730712377960/BIS_LOGO_Transparent.png"
              }
              width="250"
              height="80"
            />
          </div>
        </Fade>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
