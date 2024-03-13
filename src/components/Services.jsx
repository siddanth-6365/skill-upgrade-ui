"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ServiceItem({ title, description, icon, color }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex flex-col items-center mb-4 md:mb-0 relative">
      <div
        className={`w-32 p-8 flex justify-center items-center rounded-full mb-2 md:mb-4 relative`}
        style={{ zIndex: 1 }}
      >
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
            isHovered ? "bg-gray-200" : `bg-${color}`
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ borderRadius: "50%" }}
        >
          <motion.div whileHover={{ scale: 2 }} whileTap={{ scale: 1 }}>
            {icon}
          </motion.div>
        </div>
      </div>
      <div
        className={`w-36 h-36 absolute border-2 border-dotted border-transparent rounded-full animate-rotateCircle`}
        style={{ borderColor: color }}
      ></div>
      <h3 className="text-base md:mt-2 mt-4 md:text-lg text-center font-medium text-gray-800 mb-1">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "FREE DEMO CLASSES",
      description: "Before enrolling, a free DEMO lesson is provided.",
      color: "#146ef7",
      icon: (
        <svg
          stroke="currentColor"
          fill="#146ef7"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"></path>
        </svg>
      ),
    },
    {
      title: "JOB ORIENTED COURSES",
      description:
        "Be Practical offers career-focused training with hand-picked job oriented courses ",
      color: "#1ea528",
      icon: (
        <svg
          stroke="currentColor"
          fill="#1ea528"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"></path>
        </svg>
      ),
    },
    {
      title: "BACKUP CLASSES",
      description: "Missed classes are covered by backup classes",
      color: "#bb4846",
      icon: (
        <svg
          stroke="currentColor"
          fill="#bb4846"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"></path>
          </g>
        </svg>
      ),
    },
    {
      title: "FREE TECHNICAL SUPPORT",
      description: "Connect to technical discussion boards for project help.",
      color: "#fac210",
      icon: (
        <svg
          stroke="currentColor"
          fill="#fac210"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"
          ></path>
        </svg>
      ),
    },
    {
      title: "REAL TIME PROJECTS",
      description: "Gain world-class exposure with our real- time projects",
      color: "#2b3b9a",
      icon: (
        <svg
          stroke="currentColor"
          fill="#2b3b9a"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"></path>
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
        </svg>
      ),
    },
    {
      title: "FREE HR SESSIONS",
      description: "Before you join, you receive a complimentary HR session.",
      color: "#775e75",
      icon: (
        <svg
          stroke="currentColor"
          fill="#775e75"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"></path>
        </svg>
      ),
    },
    {
      title: "EVALUATION PROCESS",

      description: "After the course, each student is assessed",
      color: "#745c65",
      icon: (
        <svg
          stroke="currentColor"
          fill="#745c65"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
          <path
            fillRule="evenodd"
            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
          ></path>
          <path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"></path>
        </svg>
      ),
    },
    {
      title: "INTERVIEW TIPS",
      description: "Our HR Team Provides you with Interview Tips",
      color: "#6c6087",
      icon: (
        <svg
          stroke="currentColor"
          fill="#6c6087"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"></path>
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"></path>
        </svg>
      ),
    },
    {
      title: "DEDICATED HR",
      description: "Dedicated HR to take care of interviews & Job.",
      color: "#d2373e",
      icon: (
        <svg
          stroke="currentColor"
          fill="#d2373e"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"></path>
        </svg>
      ),
    },
    {
      title: "DEDICATED TRAINERS",
      description: "Dedicated & experienced trainers in Be Practical",
      color: "#a34e36",
      icon: (
        <svg
          stroke="currentColor"
          fill="#a34e36"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"
          ></path>
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"></path>
        </svg>
      ),
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="mx-auto max-w-8xl px-4  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-8">
      {services.map((service) => (
        <ServiceItem key={service.title} {...service} />
      ))}
    </div>
  );
}

export default Services;
