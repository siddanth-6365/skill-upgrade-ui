"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const svgVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: 0 },
};
const formVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: 0 },
};

const Form = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const form = useRef();

  return (
    <>
      <motion.section
        className="flex flex-col md:flex-row"
        id="contactus"
        ref={ref}
      >
        <motion.div
          className="w-full mt-4 md:w-1/2 h-1/2 flex justify-center items-center"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={svgVariant}
          style={{ visibility: inView ? "visible" : "hidden" }}
        >
          <Image
            width={600}
            height={500}
            src="/contact.jpg"
            alt="about"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 h-1/2 grid justify-center p-2"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={formVariant}
          style={{ visibility: inView ? "visible" : "hidden" }}
        >
          <section className="" style={{ fontFamily: "Cambria, Georgia, serif" }}>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-gray-700  ">
                Contact Us
              </h2>
              <p className="mb-4 lg:mb-16 font-light text-center text-gray-800   sm:text-xl">
                Got a question or just want to say hello? Go ahead.
              </p>
              <div className="mb-6 text-xl text-gray-800 font-semibold">
            <p className="text-gray-500">Email: <span className="text-gray-900 ">contact@skillupgrade.com</span></p>
            <p className="text-gray-500">Phone No: <span className="text-gray-900 ">+91 82173 90082 , +91 86189 74304</span></p>
            <p className="text-gray-500">
              Operating hours:  <span className="text-gray-900 ">All days - 9am to 9pm.</span>
            </p>
          </div>
          <p className="text-lg text-gray-500">
            For further information, feel free to contact us via email or phone. We are always
            available to assist you. Stay updated by joining our Telegram channel, WhatsApp
            group, and following us on Instagram and Facebook for the latest updates and
            workshops.
          </p>
            
            </div>
          </section>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Form;
