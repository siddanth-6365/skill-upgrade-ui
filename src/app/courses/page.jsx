"use client";
import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
// import { useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import courseData from "@/data/courseData.json";

const LandingPage = () => {
  const [data, setData] = useState({});
  // const searchParams = useSearchParams();
  const searchParams = new URLSearchParams(document.location.search);
  const courseId = searchParams.get("id");

  useEffect(() => {
    const course = courseData.find((course) => course.id == courseId);
    setData(course);
  }, [courseData, courseId]);

  return (
    <>
       <Suspense fallback={<div>Loading...</div>}> 
       {
        data && <CourseContent data={data} />
       }
      
      </Suspense>
      
        

    </>
  );
};

export default LandingPage;

const CourseContent = ({ data }) => {
  return (
    <>
      <div className="bg-cover bg-center h-screen min-h-screen relative">
        <Image
          src={data.backgroundImage}
          alt="Landing page background"
          fill={true}
          objectFit="cover"
          priority
        />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col   md:flex-row items-center justify-between h-full px-6 py-16 md:px-20 md:py-40">
          <div className="text-white text-center md:text-left z-[1] ">
            <h1 className="text-4xl font-bold md:text-6xl leading-tight">
              {data.title} Traineeship Program
            </h1>
            <p className="mt-6 leading-relaxed md:text-xl">{data.tagLine}</p>
            <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <button className="btn bg-[#7c51f0] btn-outline px-6 py-3 text-base font-medium rounded-md">
                Join Us
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg px-8 py-12 shadow-md md:w-1/2 mt-8 md:mt-0 z-[1]">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc space-y-2">
              <li>Live conversations with industry professionals</li>
              <li>Project support and Guidance</li>
              <li>Access to Specialized Course Materials</li>
              <li>25+ Hours of Learning</li>
              <li> Certificates from reputable MNC's around the world</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 flex justify-center items-center">
        <div className="md:w-[70%] w-full">
          <h2 className="md:text-4xl text-2xl text-center font-semibold mb-4">
            Mastering {data.title} Magic
          </h2>
          <p className="md:text-xl text-md leading-relaxed">
            {data.description}
          </p>

          <h2 className="md:text-4xl text-2xl text-center font-semibold mt-8 mb-4">
            Overview
          </h2>
          <p className="md:text-xl text-md leading-relaxed">{data.overView}</p>
        </div>
      </div>

      <div className="md:mt-6 mt-4 px-6 flex flex-col justify-center items-center   w-full">
        <div className="flex flex-col justify-center items-center md:p-6 p-2">
          <h1 className="font-bold text-center text-3xl md:text-5xl">
            Course Overview
          </h1>
          <p className="md:max-w-[80%]  text-xl text-center">
            A comprehensive and dynamic syllabus designed to empower your skills
            and propel your success in every aspect of your professional and
            personal development.
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible className=" bg-gray-200 p-4">
            {data &&
              data.faq &&
              data.faq.map((faqItem) => (
                <AccordionItem
                  className="w-[300px] md:w-[600px]"
                  value={faqItem.id}
                  key={faqItem.id}
                >
                  <AccordionTrigger className="text-xl focus:outline-none">
                    {faqItem.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xl pt-4">
                    {faqItem.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>

      <div className="mt-16 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Start Your Journey Today
        </h2>
        <p className="text-xl leading-relaxed">
          Don't wait any longer. Embark on your machine learning journey today
          and unlock a world of possibilities!
        </p>
      </div>
    </>
  );
};
