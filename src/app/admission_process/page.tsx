"use client";

import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import { Lexend } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Admission_Process() {
  return (
    <div
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-800 text-justify min-h-screen`}
    >
      {/* Header Section */}
      <header>
        <StickyHeader />
        <StickyHeaderTwo />
      </header>

      {/* Admission Process Background image */}
      <Image
        className="w-full h-40 sm:h-64 md:h-80 lg:h-96 object-cover"
        src={
          "https://img.freepik.com/premium-photo/kids-school-creativity_1260728-26581.jpg?w=826"
        }
        alt="about background image"
        width={3000}
        height={3000}
      />

      {/* Admission Process Section */}
      <section className="mx-2 sm:mx-4 md:mx-12 lg:mx-16 xl:mx-20 py-4 md:py-10 lg:py-14 xl:py-18">
        <Fade direction="down" triggerOnce={true}>
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Admission Procedure & Age{" "}
            <span className="text-[#1B6B8F] font-bold">Criteria</span>
          </h1>
        </Fade>

        <Fade direction="left" triggerOnce={true}>
          <h2 className="font-semibold mt-2 sm:mt-4 md:mt-4 lg:mt-5 xl:mt-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Admission Age Criteria:
          </h2>

          <ul className="list-disc text-xs sm:text-sm md:text-base lg:text-sm xl:text-[15px] xl:leading-7 mt-2 sm:mt-2 md:mt-2 lg:mt-3 xl:mt-3 md:w-5/6">
            <li>
              <strong>Nursery Admission Age Eligibility</strong> – The child
              must have completed 3 years of age by <strong>31st March</strong>{" "}
              of the academic session <strong>2025–26</strong>.
            </li>
            <li>
              <strong>Admissions to Higher Classes</strong> are subject to{" "}
              <strong>seat availability</strong> in the respective class.
            </li>
            <li>
              For higher class admissions, the child must have successfully
              completed the <strong>previous grade</strong> from a{" "}
              <strong>recognized school</strong> affiliated with{" "}
              <strong>CBSE, ICSE, or any other approved board</strong>.
            </li>
          </ul>
        </Fade>

        {/* Age Eligibility Criteria */}
        <Fade direction="up" triggerOnce={true}>
          <h2 className="font-semibold mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            AGE ELIGIBILITY CRITERIA FOR ADMISSION TO ACADEMIC
            <br />
            YEAR 2025-26
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4.5 mt-2 sm:mt-4 md:mt-4 lg:mt-5 xl:mt-6">
            <div className="flex flex-col justify-center items-center border border-red-500 shadow-lg box-border h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44 text-xs sm:text-sm md:text-base lg:text-[15px] xl:text-lg w-full sm:w-1/3">
              <strong className="">Nursery</strong> 3 Years
            </div>
            <div className="flex flex-col justify-center items-center border border-red-500 shadow-lg box-border h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44 text-xs sm:text-sm md:text-base lg:text-[15px] xl:text-lg w-full sm:w-1/3">
              <strong className="">LKG</strong> 4 Years
            </div>
            <div className="flex flex-col justify-center items-center border border-red-500 shadow-lg box-border h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44 text-xs sm:text-sm md:text-base lg:text-[15px] xl:text-lg w-full sm:w-1/3">
              <strong className="">UKG</strong> 5 Years
            </div>
          </div>
        </Fade>

        {/* Online Apply Procedure */}
        <Fade direction="left" triggerOnce={true}>
          <h2 className="font-semibold mt-6 sm:mt-8 md:mt-9 lg:mt-12 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Apply Online Procedure for Nursery School Admission 2025-26:
          </h2>

          <ul className="list-disc text-xs sm:text-sm md:text-base lg:text-sm xl:text-[15px] xl:leading-7 mt-2 sm:mt-3 md:mt-3 lg:mt-4 xl:mt-4 md:w-5/6">
            <li>
              <strong>For Classes Nursery to IX</strong>: The Online
              Registration Form for admissions to Classes Nursery to IX for the
              academic session{" "}
              <strong className="font-semibold">2025–26</strong> is now
              available.
            </li>
            <li>
              <strong>Requirements</strong>: A valid{" "}
              <strong className="font-semibold">mobile number</strong> and{" "}
              <strong className="font-semibold">email ID</strong> of the
              parents, along with a{" "}
              <strong className="font-semibold">
                passport-size photograph
              </strong>{" "}
              of each parent and the child, are mandatory.
            </li>
            <li>
              <strong>Payment Options</strong>: The registration fee can be paid
              using a{" "}
              <strong className="font-semibold">
                Debit Card, Credit Card, or through Net Banking
              </strong>
              .
            </li>
            <li>
              <strong>Submission & Confirmation</strong>: After filling and
              submitting the form, a{" "}
              <strong className="font-semibold">
                system-generated Registration Number
              </strong>{" "}
              will be sent via <strong className="font-semibold">SMS</strong>{" "}
              (to the provided mobile number) and also shared on the{" "}
              <strong className="font-semibold">
                registered email address
              </strong>{" "}
              mentioned in the form.
            </li>
          </ul>
        </Fade>

        {/* Terms & Conditions */}
        <Fade direction="left" triggerOnce={true}>
          <h2 className="font-semibold mt-6 sm:mt-8 md:mt-9 lg:mt-12 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Terms & Conditions and Instructions for Filling up the <br />
            Online form / Pay
          </h2>

          <ul className="list-disc text-xs sm:text-sm md:text-base lg:text-sm xl:text-[15px] xl:leading-7 mt-2 sm:mt-3 md:mt-3 lg:mt-4 xl:mt-4 md:w-5/6">
            <li>
              This is the{" "}
              <strong className="font-semibold">
                official online Registration Form
              </strong>{" "}
              for{" "}
              <strong className="font-semibold">
                Atlantic Global School, Noida Extension (Greater Noida West)
              </strong>
              . Kindly read the instructions thoroughly before proceeding to
              avoid any chances of rejection.
            </li>
            <li>
              Simply provide the required information by filling in the
              designated fields.
            </li>
            <li>
              All <strong className="font-semibold">mandatory fields</strong>{" "}
              must be completed. For fields that do not apply to you, please
              write <strong className="font-semibold">&quot;NA&quot;</strong>.
            </li>
            <li>
              Avoid using the{" "}
              <strong className="font-semibold">ENTER key</strong> to move
              between fields. Instead, use the{" "}
              <strong className="font-semibold">TAB key</strong> or your{" "}
              <strong className="font-semibold">mouse</strong> for navigation.
            </li>
            <li>
              Once the form is fully filled, click on the{" "}
              <strong className="font-semibold">
                &quot;Final Submit&quot;
              </strong>{" "}
              button to complete your registration and to print the submitted
              form.
            </li>
            <li>
              A <strong className="font-semibold">Registration Number</strong>{" "}
              will be instantly generated and an{" "}
              <strong className="font-semibold">acknowledgment email</strong>{" "}
              with the form details will be sent to your registered email ID.
            </li>
            <li>
              To ensure the form is accepted, please{" "}
              <strong className="font-semibold">
                do not submit multiple forms for a single applicant
              </strong>
              .
            </li>
            <li>
              Forms that are{" "}
              <strong className="font-semibold">incomplete</strong> will
              automatically be rejected by the system.
            </li>
            <li>
              Note that the{" "}
              <strong className="font-semibold">
                registration fee is non-refundable
              </strong>
              . Therefore, kindly provide{" "}
              <strong className="font-semibold">
                accurate and truthful information
              </strong>{" "}
              about the child and the parents.
            </li>
            <li>
              At the time of the interaction, parents are required to carry:
              <ul className="list-disc text-xs sm:text-sm md:text-base lg:text-sm xl:text-[15px] xl:leading-7 mt-1 mb-1 sm:mb-0.5 md:w-5/6 md:mt-0.5 md:ml-4">
                <li>
                  The child&apos;s{" "}
                  <strong className="font-semibold">
                    original Birth Certificate
                  </strong>
                  ,
                </li>
                <li>
                  A{" "}
                  <strong className="font-semibold">
                    passport-size photograph
                  </strong>{" "}
                  of both parents and the child,
                </li>
                <li>
                  A{" "}
                  <strong className="font-semibold">
                    printed copy of the submitted Registration Form
                  </strong>
                  .
                </li>
              </ul>
              <p className="mb-1 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-3">
                Any{" "}
                <strong className="font-semibold">
                  false, misleading, or withheld information
                </strong>{" "}
                will lead to immediate disqualification of the form.
              </p>
            </li>
            <li>
              The school will{" "}
              <strong className="font-semibold">not be liable</strong> for any{" "}
              <strong className="font-semibold">loss or damage</strong>{" "}
              resulting from a{" "}
              <strong className="font-semibold">declined transaction</strong>{" "}
              due to the cardholder exceeding their preset limit with the
              acquiring bank.
            </li>
            <li>
              For any admission-related queries, please write to us at:{" "}
              <strong className="font-semibold text-[#1B6B8F]">
                admission@atlanticglobalschool.com
              </strong>
            </li>
            <li>
              <Link href="#">
                <strong className="font-semibold text-[#1B6B8F]">
                  Terms & Conditions apply
                </strong>
              </Link>
              .
            </li>
          </ul>
        </Fade>

        {/* Admission Enquiry Button */}
        <div className="text-center mt-4 md:mt-5">
          <Fade direction="up" triggerOnce={true}>
            <Link href="/admission_enquiry">
              <button className="focus:outline-3 focus:outline-green-200 text-white bg-green-500 hover:duration-200 hover:bg-green-600 shadow-lg text-xs sm:text-sm md:text-base xl:text-[16px] px-3 sm:px-4 xl:px-5 py-1.5 sm:py-2 lg:py-2 xl:py-2.5 rounded">
                ADMISSION ENQUIRY
              </button>
            </Link>
          </Fade>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
