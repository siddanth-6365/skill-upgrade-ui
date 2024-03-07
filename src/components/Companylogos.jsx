"use client";
import React, { useRef } from "react";
import Image from "next/image";

// Array of logos
const logos = [
  "https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png",
  "https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png",
  "https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png",
];

function Slider() {
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      if (sliderRef.current.scrollLeft === sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
        sliderRef.current.scrollLeft = 0;
      }
    }
  };

  return (
    <div className="slider bg-whitesmoke p-8 mt-8 overflow-hidden relative">
      <div
        ref={sliderRef}
        className="slide-track flex overflow-x-auto"
        onScroll={handleScroll}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="slide flex-shrink-0">
            <Image
              layout="responsive"
              src={logo}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
