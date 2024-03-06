"use client";
import React, { useEffect, useState } from "react";
import Heading from "./ui/heading";
import courseData from "@/data/homeCourses.json";
import { Card } from "./ui/Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const courseVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { x: "-20%", opacity: 0 },
};

const CoursePage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 }); // Observe section with 50% visibility trigger

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(courseData);
  }, []);

  return (
    <>
      <div id="courses" className="">
        <Heading heading={"Our Courses"} />
        <motion.div className=" mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses &&
            courses.map((course) => {
              return <Card card={course} key={course.id} isThree={true} />;
            })}
        </motion.div>
      </div>
    </>
  );
};

export default CoursePage;
