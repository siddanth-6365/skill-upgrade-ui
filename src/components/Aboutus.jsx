"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const videoVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }, // Slide to final position
  hidden: { x: "-20%", opacity: 0 }, // Initially hidden at its final position (no leftward slide)
};

const Aboutus = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 }); // Observe section with 50% visibility trigger

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="aboutus"
      className="p-2 md:mt-4 "
      style={{ fontFamily: "Cambria, Georgia, serif" }}
    >
      <div>
        <h1 className="text-center text-3xl lg:text-4xl font-semibold">
          Learn from the experts with our specialised courses
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row md:p-16 p-12">
        <div className="w-full lg:w-1/2 md:p-4 p-2 order-2 lg:order-1">
          <h1 className="text-center text-2xl lg:text-3xl underline font-bold ">
            About Us
          </h1>
          <p className="text-base lg:text-xl  mt-4">
            “Hello Everyone” Welcome to the world of learning. You are in the
            right place to learn new skills and to always stay ahead of the
            curve. We welcome you to “SKILLUPGRADE”, your destination to
            lifelong learning and professional development. We SKILLUPGRADE
            believe that each one of you has the potential to learn new skills
            and grow at new heights. SKILLUPGRADE academy provides a better
            platform designed to accommodate all levels of learners. Our
            user-friendly interface ensures that navigating through our
            extensive library of courses is effortless, allowing all of you to
            focus on what matters the most.
          </p>
          {/* <button className="bg-violet-400 p-2 rounded-md mt-4 w-full lg:w-auto">
            <a href="/aboutus" className="text-xl underline">
              Read More
            </a>
          </button> */}
        </div>
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0"
          ref={ref}
          animate={controls}
          initial="hidden" // Start animation from hidden state at final position
          variants={videoVariant}
        >
          <video
            className="rounded-lg max-w-full h-auto"
            // src="/demov1.mp4"
            src="https://video.wixstatic.com/video/f7c979_8041ca73bcca4e5eb6722ee958cc9757/480p/mp4/file.mp4"
            controls
            loop
            autoPlay
          ></video>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Aboutus;
