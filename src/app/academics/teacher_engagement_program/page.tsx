"use client";

import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import { Lexend } from "next/font/google";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Teacher_Engagement_Program() {
  return (
    <div
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-800 text-justify`}
    >
      {/* Header Section */}
      <header>
        <StickyHeader />
        <StickyHeaderTwo />
      </header>

      {/* Admission Process Background image */}
      <Image
        className="w-full"
        src={
          "https://img.freepik.com/premium-photo/quotheartfelt-teachers-day-tribute-rural-classroomquot_1280275-333747.jpg?w=826"
        }
        alt="about background image"
        width={6000}
        height={3000}
      />

      {/* Teacher Engagement Program Section */}
      <section className="xl:mx-16 xl:pt-12 xl:pb-16 lg:mx-12 lg:pt-10 lg:pb-14 md:mx-8 md:pt-8 md:pb-12">
        <div>
          <Fade direction="down" triggerOnce={true}>
            <h1 className="font-semibold xl:text-4xl lg:text-3xl md:text-2xl">
              Teacher Engagement{" "}
              <span className="text-[#1B6B8F] font-bold">Program</span>
            </h1>
          </Fade>
        </div>

        <Fade direction="up" triggerOnce={true} duration={1000} delay={300}>
          <div
            id="cards-container"
            className="flex flex-wrap justify-between xl:gap-10 xl:mt-6 lg:gap-8 lg:mt-5 md:gap-6 md:mt-4"
          >
            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/premium-photo/explaining-lesson-using-board-group-children-students-class-school-with-teacher_146671-70092.jpg?w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                In Service Teachers Training on Integration of Activities in
                Early Years
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/free-photo/medium-shot-people-celebrating-with-tasty-cake_23-2149295536.jpg?t=st=1744351405~exp=1744355005~hmac=f33c0862b794d876ec15a248d2e51146dc5e73982914ade244b198e9e984858d&w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                Teachers Training on Classroom Management
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/premium-photo/diverse-schoolchildren-male-teacher-studying-plants-elementary-school-class-with-copy-space_13339-343816.jpg?w=900"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                Awareness session on children protection and safety for the
                staff Years
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/free-photo/portrait-male-professor-teaching-school_23-2150911625.jpg?t=st=1744351572~exp=1744355172~hmac=65281f601c65660209e87312f5a338a72b259c8bacc7277386e18ec7c32dda04&w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                First Aid Safety, Equipping Individuals with Life Saving Skills
                Years
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/free-photo/portrait-professor-work-educational-system_23-2151737254.jpg?t=st=1744351599~exp=1744355199~hmac=47ee4ce49630999d7cfd453f6e96ecb13600573937c3b39a28777282c88f45a1&w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                National Curriculum Framework, Revolutionising Foundational
                Learning
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/premium-photo/abstract-people-lecture-seminar-room-education-training-concept_124865-3750.jpg?w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                Training on Self Defence
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/premium-photo/pretty-teacher-talking-young-pupils-classroom_13339-263998.jpg?w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                Seminar on NEP
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/free-photo/side-view-young-people-church-praying_23-2150870055.jpg?t=st=1744351742~exp=1744355342~hmac=2559c0ee19249e06a46d03aac87ab1a143c5c1b936292618cad3903485f65cce&w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                Staff Zumba Session
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/premium-photo/standing-explaining-lesson-by-using-whiteboard-group-children-students-class-school-with-teacher_146671-70097.jpg?w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                Two Day Transformational Workshop on WOW@Work (Ways of Winning
                at Work)
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/free-photo/smiling-teacher-sitting-table_23-2147885359.jpg?t=st=1744351824~exp=1744355424~hmac=c2889bc1eb048c41984c3b78387defaf274c7aaf8099c3cf870469914d7556c7&w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                In Service Teacher Training on National Curriculum Framework for
                Preparatory Stage
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/premium-photo/teacher-teaching-classroom-created-with-generative-ai_115122-98798.jpg?w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                Teacher Engagement Workshop on - MS Office
              </h3>
            </div>

            <div
              id="cards"
              className="border border-gray-300 w-[31%] rounded-lg xl:shadow-xl lg:shadow-lg md:shadow-md"
            >
              <Image
                src={
                  "https://img.freepik.com/premium-photo/pupils-listening-their-teacher-chalkboard_13339-165181.jpg?w=996"
                }
                alt="Card Image"
                width={2000}
                height={2000}
                className="aspect-auto rounded-t-lg"
              />
              <h3 className="text-center font-semibold py-2 px-3 lg:text-sm lg:py-1.5 lg:px-2 md:text-xs md:py-1 md:px-1">
                Teacher Engagement Workshop on Phonics
              </h3>
            </div>
          </div>
        </Fade>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
