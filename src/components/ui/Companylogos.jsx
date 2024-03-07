import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
  "https://www.iima.ac.in/themes/iima/images/logo.svg",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
  "https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/logo.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  "https://www.iitkgp.ac.in//assets/pages/images/logo.png",
];
const logos2 = [
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
  "https://www.iima.ac.in/themes/iima/images/logo.svg",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
  "https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/logo.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  "https://www.iitkgp.ac.in//assets/pages/images/logo.png",
];

function Slider() {
  return (
    <div className="mt-12 ">
     <div>
      <h1 className="text-4xl font-bold text-center mb-6"> Our Alumni Works At </h1>
      </div>
      <Marquee direction="left" speed={60} delay={1}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Logo"
              className=" w-24"
            />
          </div>
        ))}
      </Marquee>
    
    </div>
  );
}

export default Slider;
