"use client"
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
          <p className="mt-6 md:text-xl text-md leading-6 md:leading-8 text-gray-600">
            Our mission is simple and efficient: to strengthen individuals
            worldwide to unlock their full potential through user-friendly,
            personalized, and interactive learning experiences. We are dedicated
            to democratizing education by providing a different range of
            high-quality courses, tools, and resources that inspire lifelong
            learning of every individual and their personal growth. By promoting
            a dynamic and supportive learning community, we aim to cultivate the
            skills, knowledge, and confidence necessary for success in an
            ever-evolving global landscape. We believe in the power of
            innovation to transform businesses and improve lives.
          </p>
        </div>
        <div className="mx-auto  max-w-7xl  px-6 lg:px-8 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            WHAT WE OFFER
          </h2>
          <p className="mt-6 md:text-xl text-md leading-6 md:leading-8 text-gray-600">
            SkillUpgrade offers a wide and varied range of courses covering
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
