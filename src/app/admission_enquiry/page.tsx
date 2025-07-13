"use client";

import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import StickyHeaderTwo from "@/components/StickyHeaderTwo";
import { Lexend } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Fade } from "react-awesome-reveal";

// Load Lexend with specific styles
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export default function Admission_Enquiry() {
  const router = useRouter(); // Initialize useRouter
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    grade: "",
    previousSchool: "",
    email: "",
    studentPhone: "",
    fatherName: "",
    motherName: "",
    fatherPhone: "",
    motherPhone: "",
    fatherEmail: "",
    motherEmail: "",
    streetOne: "",
    streetTwo: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    admissionInterest: "",
    hearAbout: "",
    visitSchool: "",
    visitDate: "",
    enquiry: "",
  });

  interface FormData {
    firstName: string;
    lastName: string;
    dob: string;
    gender: string;
    grade: string;
    previousSchool: string;
    email: string;
    studentPhone: string;
    fatherName: string;
    motherName: string;
    fatherPhone: string;
    motherPhone: string;
    fatherEmail: string;
    motherEmail: string;
    streetOne: string;
    streetTwo: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    admissionInterest: string;
    hearAbout: string;
    visitSchool: string;
    visitDate: string;
    enquiry: string;
  }

  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show the popup
    setShowPopup(true);

    // Redirect to the home page after 2 seconds
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div
      className={`${lexend.className} overflow-x-hidden scroll-smooth text-gray-700 text-justify`}
    >
      {/* Header Section */}
      <header>
        <StickyHeader />
        <StickyHeaderTwo />
      </header>

      {/* Admission Enquiry Background */}
      <div className="bg-[#083342] w-full xl:h-26.5 lg:h-22 md:h-17"></div>

      {/* Admission Enquiry Form Section */}
      <section className="bg-[#f3f3fe] xl:px-16 xl:pt-14 xl:pb-16 lg:px-12 lg:pt-12 lg:pb-14 md:px-8 md:pt-10 md:pb-12">
        <Fade direction="up" triggerOnce={true}>
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-4/6 bg-white rounded shadow-lg xl:py-8 lg:py-6 md:py-4">
              <h2 className="font-semibold xl:border-b-3 xl:text-3xl xl:px-10 xl:pb-6 lg:text-2xl lg:px-8 lg:pb-5 md:border-b-2 md:text-xl md:px-6 md:pb-4">
                School Admission Enquiry Form
              </h2>
              <form
                onSubmit={handleSubmit}
                className="xl:px-10 lg:px-8 md:px-6"
              >
                {/* Student Personal Information */}
                <h3 className="border-b-2 font-semibold xl:mt-5 xl:pb-3 xl:mb-6 xl:text-xl lg:text-lg md:mt-3 md:pb-2 md:mb-3">
                  Student Information
                </h3>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="firstName"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="lastName"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="dob"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="gender"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      {/* Add more grade options as needed */}
                    </select>
                  </div>
                </div>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="grade"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Current Grade/Class
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    >
                      <option value="" disabled>
                        Select grade
                      </option>
                      <option value="nursery">Nursery</option>
                      <option value="lkg">LKG</option>
                      <option value="ukg">UKG</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      {/* Add more grade options as needed */}
                    </select>
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="previousSchool"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Previous School (if applicable)
                    </label>
                    <input
                      type="text"
                      id="previousSchool"
                      name="previousSchool"
                      placeholder="Enter school name"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="email"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="studentPhone"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="studentPhone"
                      name="studentPhone"
                      placeholder="Enter phone number"
                      value={formData.studentPhone}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>
                </div>

                {/* Parents/Guardian Information */}
                <h3 className="border-b-2 font-semibold xl:mt-5 xl:pb-3 xl:mb-6 xl:text-xl lg:text-lg md:mt-3 md:pb-2 md:mb-3">
                  Parents/Guardian Information
                </h3>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="fatherName"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Father/Guardian Name
                    </label>
                    <input
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      placeholder="Enter father or guardian name"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="motherName"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Mother/Guardian Name
                    </label>
                    <input
                      type="text"
                      id="motherName"
                      name="motherName"
                      placeholder="Enter mother or guardian name"
                      value={formData.motherName}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="fatherPhone"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Father&apos;s Phone Number
                    </label>
                    <input
                      type="tel"
                      id="fatherPhone"
                      name="fatherPhone"
                      placeholder="Enter phone number"
                      value={formData.fatherPhone}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="motherPhone"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Mother&apos;s Phone Number
                    </label>
                    <input
                      type="tel"
                      id="motherPhone"
                      name="motherPhone"
                      placeholder="Enter phone number"
                      value={formData.motherPhone}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="fatherEmail"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Father&apos;s Email Address
                    </label>
                    <input
                      type="tel"
                      id="fatherEmail"
                      name="fatherEmail"
                      placeholder="Enter email address"
                      value={formData.fatherEmail}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="motherEmail"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Mother&apos;s Email Address
                    </label>
                    <input
                      type="tel"
                      id="motherEmail"
                      name="motherEmail"
                      placeholder="Enter email address"
                      value={formData.motherEmail}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <h3 className="border-b-2 font-semibold xl:mt-5 xl:pb-3 xl:mb-6 xl:text-xl lg:text-lg md:mt-3 md:pb-2 md:mb-3">
                  Address Information
                </h3>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="streetOne"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Street Line 1
                    </label>
                    <input
                      type="text"
                      id="streetOne"
                      name="streetOne"
                      placeholder="Enter street line 1 name"
                      value={formData.streetOne}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="streetTwo"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Street Line 2
                    </label>
                    <input
                      type="text"
                      id="streetTwo"
                      name="streetTwo"
                      placeholder="Enter street line 2 name"
                      value={formData.streetTwo}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="area"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Area/Locality
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      placeholder="Enter area/locality name"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="city"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      City/District
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter city/district name"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="state"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Enter state name"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="pincode"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      placeholder="Enter pincode name"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>
                </div>

                {/* Enquiry Details */}
                <h3 className="border-b-2 font-semibold xl:mt-5 xl:pb-3 xl:mb-6 xl:text-xl lg:text-lg md:mt-3 md:pb-2 md:mb-3">
                  Enquiry Details
                </h3>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="admissionInterest"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Interested Academic Year for Admission
                    </label>
                    <input
                      type="text"
                      id="admissionInterest"
                      name="admissionInterest"
                      placeholder="e.g. 2025"
                      value={formData.admissionInterest}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="hearAbout"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      How did you hear about our school?
                    </label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    >
                      <option value="" disabled>
                        Please Select
                      </option>
                      <option value="mouthWord">Word of Mouth</option>
                      <option value="onlineSearch">Online Search</option>
                      <option value="socialMedia">Social Media</option>
                      <option value="schoolWebsite">School Website</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between items-center xl:gap-4 lg:gap-3 md:gap-2">
                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="visitSchool"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Would you like to schedule a visit to the school?
                    </label>
                    <select
                      id="visitSchool"
                      name="visitSchool"
                      value={formData.visitSchool}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    >
                      <option value="" disabled>
                        Please Select
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div className="w-1/2 xl:mb-6 lg:mb-5 md:mb-4">
                    <label
                      htmlFor="visitDate"
                      className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                    >
                      Preferred date for a school visit
                    </label>
                    <input
                      type="date"
                      id="visitDate"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleChange}
                      required
                      className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="enquiry"
                    className="block font-medium xl:text-[15px] xl:mb-0.5 lg:text-sm lg:mb-1 md:mb-0.5 md:text-[11px] md:tracking-tight"
                  >
                    Enquiry Details
                  </label>
                  <textarea
                    id="enquiry"
                    name="enquiry"
                    placeholder="Please share your queries or additional information about the admission process..."
                    value={formData.enquiry}
                    onChange={handleChange}
                    required
                    className="w-full border rounded focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 xl:px-3 xl:py-1 xl:placeholder:text-[15px] xl:text-[15px] lg:px-3 lg:py-1 lg:placeholder:text-sm lg:text-sm md:px-2 md:py-0.5 md:placeholder:text-[11px] md:text-[11px]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors xl:w-46 xl:py-2 xl:text-[15px] lg:w-40 lg:py-1.5 lg:text-sm md:w-34 md:py-1 md:text-xs"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </Fade>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-lg font-semibold">Submit Successfully</h2>
            <p className="mt-2">
              You will be redirected to the home page shortly.
            </p>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
