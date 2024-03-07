'use client'
import React, { useEffect, useState } from "react";
import Heading from "./ui/heading";
import { Card } from "./ui/Card";
import { motion } from "framer-motion";
import courseData from '@/data/courseData.json';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(courseData);
  }, []);

  return (
    <>
      <div id="courses" className="">
        <Heading heading={"Our Courses"} />
        <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2, ease: "easeOut" } }} // Easing function for ease-in and ease-out
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut", delay: index * 0.1 } }} // Easing function for ease-in and ease-out
              className="w-full"
            >
              <Card card={course} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default CoursePage;
