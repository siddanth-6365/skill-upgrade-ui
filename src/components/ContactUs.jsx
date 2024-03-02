"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const svgVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: -20 },
};
const formVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: 10 },
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

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    console.log(data);

    // try {
    //   const response = await fetch("/api/sendMail", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   if (response.ok) {
    //     console.log("Email sent successfully");
    //     // Optionally, reset form fields here
    //   } else {
    //     console.error("Failed to send email");
    //   }
    // } catch (error) {
    //   console.error("Error sending email:", error);
    // }
  };

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
        >
          <Image
            layout="responsive"
            width={600}
            height={600}
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
        >
          <section className=" -900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-[#7c51f0]  ">
                Send me a message!
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-800   sm:text-xl">
                Got a question or proposal, or just want to say hello? Go ahead.
              </p>

              <form
                action="#"
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700  "
                  >
                    Your Name
                  </label>

                  <input
                    type="name"
                    name="name"
                    id="name"
                    className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  white "
                    placeholder="name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700  "
                  >
                    Your email
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  white "
                    placeholder="name@mail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-700  gray-300"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-700  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500    "
                    placeholder="Let us know how can i help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700  gray-400"
                  >
                    Your message
                  </label>

                  <textarea
                    id="email_body"
                    name="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <div className="flex justify-center items-center">
                  <button className="bg-[#7c51f0] text-white p-4 rounded-lg text-xl">
                    Shoot
                  </button>
                </div>
              </form>
            </div>
          </section>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Form;
