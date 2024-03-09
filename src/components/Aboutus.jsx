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
        <h1 className="text-center text-4xl lg:text-5xl ">
          Learn from the experts with our specialised courses
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row md:p-16 p-8">
        <div className="w-full lg:w-1/2 md:p-4 p-2 order-2 lg:order-1">
          <div className="mx-auto mt-4 max-w-7xl  px-2 md:px-6 lg:px-8 ">
            <h2 className="text-3xl  text-left font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-left text-md md:text-2xl leading-6 md:leading-8 text-gray-600">
              <b>SkillUpgrade</b> : Invest in yourself. <br />
              In the era of developing world, <b>SkillUpgrade</b> stands out as
              the key to unlock your potential and make you stand out from the
              rat race of the world. That's why we bring you a dynamic learning
              ecosystem to empower lifelong learners like you. Our interactive
              learning system supports enthusiastic learners with a seamless
              experience with accessible courses. Join us now and kickstart your
              educational journey!
            </p>
          </div>
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
