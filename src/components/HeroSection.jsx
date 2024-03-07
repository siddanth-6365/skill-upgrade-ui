"use client"
import React, { useState, useEffect }  from "react"
import Image from "next/image";

function HeroSection() {
  const roleArray = ["Information technology",
    "EC & EEE",
    "MECHANICAL "];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => prevIndex + 1);
    }, 400); // Adjust the interval to control the speed of the animation

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLetterIndex >= roleArray[currentRoleIndex].length + 1) {
      setCurrentLetterIndex(0);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roleArray.length);
    }
  }, [currentLetterIndex, currentRoleIndex, roleArray]);

  useEffect(() => {
    setDisplayText(roleArray[currentRoleIndex].slice(0, currentLetterIndex));
  }, [currentLetterIndex, currentRoleIndex, roleArray]);

  return (
    <section
      className="flex flex-col justify-center md:flex-row h-screen w-full items-center bg-cover bg-center bg-no-repeat bg-fixed  "
      style={{
        backgroundImage: `url("/gradientbg.webp")`,
      }}
    >
      <div className="flex flex-col md:flex-row md:px-2 px-6 md:items-center w-full md:w-1/2 ">
        <div className="font-serif md:ml-16 text-left  text-white text-[50px] md:text-[100px] ">
          <h1>Upgrade</h1>
          <h1 className="text-gray-300">Your Skills</h1>
          <h1 className="text-gray-300">With Us!</h1>
          <h1 className="text-xl md:text-4xl text-gray-400"> Wheather it is {displayText}</h1>
        
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="w-full md:w-3/4 mx-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
          <Image
            layout="responsive"
            width={800}
            height={600}
            alt="Picture of the author"
            src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=85"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
