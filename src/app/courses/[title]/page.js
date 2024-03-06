import React from 'react';
import Image from 'next/image';
import courseData from '@/data/courseData.json';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LandingPage = () => {
    return (
        <>
            <div className="bg-cover bg-center h-screen min-h-screen relative">
                <Image
                    src="/background.avif"
                    alt="Landing page background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="flex flex-col   md:flex-row items-center justify-between h-full px-6 py-16 md:px-20 md:py-40">
                    <div className="text-white text-center md:text-left z-[1] ">
                        <h1 className="text-4xl font-bold md:text-6xl leading-tight">
                        Data Science Traineeship Program
                        </h1>
                        <p className="mt-6 leading-relaxed md:text-xl">
                            Harness the power of machine learning to make informed decisions and solve complex problems.
                        </p>
                        <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                            {/* <button className="btn bg-[#7c51f0] btn-primary px-6 py-3 text-base font-medium rounded-md md:mr-4">
                                Get Started
                            </button> */}
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
            <div className='md:w-[70%] w-full'>
                <h2 className="md:text-4xl text-2xl text-center font-semibold mb-4">Mastering Machine Learning Magic</h2>
                <p className="md:text-xl text-md leading-relaxed">
                    Dive into the world of machine learning! Unravel the secrets of algorithms and data with our expert-led courses. Enroll now for a brighter, tech-fueled future!
                </p>

                <h2 className="md:text-4xl text-2xl text-center font-semibold mt-8 mb-4">Overview</h2>
                <p className="md:text-xl text-md leading-relaxed">
                    Our comprehensive course takes you on a thorough exploration of machine learning. Start with the fundamentals of Python and progress to complex algorithms like Linear Regression and Random Forests. Discover the wonders of Natural Language Processing, become an expert in Neural Networks, and use well-known libraries to implement ideas practically. Capstone projects with real-world scenarios solidify your learning and prepare you for success in the field. Join us to unlock your potential!
                </p>
                </div>
            </div>

            <div className="md:mt-6 mt-4 px-6 flex flex-col justify-center items-center   w-full">
                <div className='flex flex-col justify-center items-center md:p-6 p-2'>
                    <h1 className='font-bold text-center text-3xl md:text-5xl'>Course Overview</h1>
                    <p className='md:max-w-[80%]  text-xl text-center'>A comprehensive and dynamic syllabus designed to empower your skills and propel your success in every aspect of your professional and personal development.</p>
                </div>
                <Accordion type="single" collapsible className="md:w-[70%] bg-gray-200 p-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl focus:outline-none">
                            Is it accessible?
                        </AccordionTrigger>
                        <AccordionContent className="text-xl pt-4">
                            Yes. It adheres to the WAI-ARIA design pattern for optimal usability.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl focus:outline-none">
                            Is it styled?
                        </AccordionTrigger>
                        <AccordionContent className="text-xl pt-4">
                            Yes. It comes with default styles and also allows for easy customization via CSS.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl focus:outline-none">
                            Can it be customized?
                        </AccordionTrigger>
                        <AccordionContent className="text-xl pt-4">
                            Absolutely. You can customize the appearance and behavior according to your project's needs.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="mt-16 px-6">
                <h2 className="text-2xl font-semibold mb-4">Start Your Journey Today</h2>
                <p className="text-xl leading-relaxed">
                    Don't wait any longer. Embark on your machine learning journey today and unlock a world of possibilities!
                </p>
            </div>
        </>
    );
};

export default LandingPage;