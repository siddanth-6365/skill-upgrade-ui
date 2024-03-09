"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About2 = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col justify-center items-center p-8 gap-8"
        style={{
          fontFamily: "Cambria, Georgia, serif",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <div className="mx-auto  max-w-7xl  px-6 lg:px-8 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            OUR MISSION
          </h2>
          <p className="mt-6 md:text-2xl text-lg leading-6 md:leading-8 text-gray-600">
            We're not just another course website. We're your personal launchpad
            to skyrocket your skills. We believe learning should be engaging,
            fun, and empowering, propelling you towards lifelong growth and
            career mastery. We prove that <b>SkillUpgrade</b> is your shortcut to
            mastering new skills and becoming a total pro, all while having a
            blast!
          </p>
        </div>
        <div className="mx-auto  max-w-7xl  px-6 lg:px-8 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            WHAT WE OFFER
          </h2>
          <p className="mt-6 md:text-2xl text-md leading-6 md:leading-8 text-gray-600">
          <b>SkillUpgrade</b> offers a wide and varied range of courses covering
            different topics such as Programming, Design, etc. Whether you are
            looking to master a new skill, explore a new hobby, acquire
            proficiency in a new skill, attain proficiency in a new competency,
            or enhance your professional expertise, we have the resources and
            support you need to succeed in your career.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default About2;
