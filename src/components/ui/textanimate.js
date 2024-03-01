"use client"
import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TextScrollAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = document.querySelectorAll(".reveal-type");

    textElements.forEach((element) => {
      const text = element.textContent;
      element.innerHTML = ""; // Clear the content

      // Wrap each character in a span
      const chars = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        return span;
      });

      // Append the spans to the element
      chars.forEach((char) => {
        element.appendChild(char);
      });

      // Apply GSAP animation to each span
      gsap.fromTo(
        chars,
        {
          color: element.dataset.bgColor,
        },
        {
          color: element.dataset.fgColor,
          duration: 0.7,
          stagger: 0.02,
          scrollTrigger: {
            trigger: element,
            start: "top 40%",
            end: "top 20%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });
  }, []);

  // const lenis = useLenis(({ scroll }) => {
  //   // console.log(scroll); // This will log the scroll event
  // });

  return (
    <ReactLenis root={true}>
      <h1>Upgrade</h1>
      <h1 className="reveal-type" data-bg-color="gray" data-fg-color="white">
        Your Skills
      </h1>
      <h1 className="reveal-type" data-bg-color="gray" data-fg-color="white">
        With Us!
      </h1>
    </ReactLenis>
  );
}

export default TextScrollAnimation;
