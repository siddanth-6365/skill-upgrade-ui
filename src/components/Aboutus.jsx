"use client"
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
    <motion.section id="aboutus" className="p-2 md:mt-4 ">
      <div>
        <h1 className="text-center text-3xl lg:text-4xl font-semibold">
          Learn from the experts with our specialised courses
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row md:p-16 p-12">
        <div className="w-full lg:w-1/2 md:p-4 p-2 order-2 lg:order-1">
          <h1 className="text-center text-2xl lg:text-3xl underline font-bold font-mono">
            About Us
          </h1>
          <p className="text-base lg:text-xl  mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            atque id eligendi consequatur ex reprehenderit blanditiis delectus
            aut magni provident. Perspiciatis necessitatibus vitae
            reprehenderit, quis labore quisquam quas facilis voluptatem
            obcaecati enim quam quia quod repellat blanditiis expedita
            perferendis a aliquam doloribus, doloremque odit. Neque alias
            dolores quod quam veniam. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Natus laboriosam, dolorem rem quia assumenda
            saepe! Nobis deleniti earum beatae vel?
          </p>
          <button className="bg-violet-400 p-2 rounded-md mt-4 w-full lg:w-auto">
            <a href="/aboutus" className="text-xl underline">
              Read More
            </a>
          </button>
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
            src="/demov1.mp4"
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
