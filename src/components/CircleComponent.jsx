"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUs from "./AboutUs";

const CircleComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = document.querySelector(".wrapper");
    const circle = wrapper.querySelector(".back");
    const aboutUs = wrapper.querySelector(".about-us");

    gsap.set(aboutUs, { autoAlpha: 0 }); // Hide AboutUs initially

    ScrollTrigger.create({
      trigger: wrapper,
      start: "top center",
      end: "bottom center",
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to(circle, { scale: 10, duration: 1 });
          gsap.to(aboutUs, { autoAlpha: 1, duration: 1 });
        }
         //else {
        //   gsap.to(circle, { scale: 1, duration: 1 });
        //   gsap.to(aboutUs, { autoAlpha: 0, duration: 1 });
        // }
      },
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="back"></div>
      <div className="about-us">
        <AboutUs />
      </div>
    </div>
  );
};

export default CircleComponent;
