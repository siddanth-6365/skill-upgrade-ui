"use client";
import React, { useEffect, useState } from "react";
import Heading from "./ui/heading";
import courseData from "@/data/courses.json";
import { Card } from "./ui/Card";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(courseData);
  }, []);
  return (
    <>
      <div id="courses" className="">
        <Heading heading={"Our Courses"} />
        <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses &&
            courses.map((course) => {
              return <Card card={course} key={course.id} isThree={true} />;
              // if (course.key <= 3) {
              //   return <Card card={course} key={course.id} isThree={true} />;
              // } else {
              //   return <Card card={course} key={course.id} isThree={false} />;
              // }
            })}
        </div>
      </div>
    </>
  );
};

export default CoursePage;
