"use client";
import React from "react";
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
  return (
    <div className="slider bg-whitesmoke p-8 mt-8">
      <div className="slide-track w-full flex gap-12 overflow-hidden">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="slide "
            style={{ animation: "scroll 60s linear infinite" }}
          >
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
