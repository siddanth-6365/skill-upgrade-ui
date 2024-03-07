import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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

function Slider(){
  return (
    <div className="mt-12 text-center">
      <Marquee direction="left" speed={60} delay={1}>
        {
          logos.map((logo,index)=>(
            <div key={index} className="mx-8">
              <Image src={logo} width={40} height={40} alt="Logo" className=" w-24" />
            </div>
          ))
        }
      </Marquee>
    </div>
  )
}

export default Slider;