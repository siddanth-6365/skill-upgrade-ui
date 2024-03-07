import Link from "next/link";
import React from "react";

export const Card = ({ card, key }) => {
  const truncatedDescription =
  card.description.length > 220
    ? card.description.slice(0, 200) + "..."
    : card.description;

  return (
    <>
      <div
        className={`max-w-sm mx-auto overflow-hidden rounded-xl shadow-xl p-4  `}
        key={key}
      >
        <img
          className="object-cover object-center w-full h-64 rounded-lg"
          src={card.backgroundImage}
          alt={card.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{card.title}</div>
          <p className="text-gray-700 h-32 text-base">{truncatedDescription}</p>
          <div className=" flex items-center justify-evenly gap-5 mt-4 text-center">
            <Link href={`/courses?id=${card.id}`}><button className="bg-[#7c51f0] hover:bg-[#6c46d5] text-white font-bold py-2 px-4 rounded">
              Read More
            </button></Link>
          
            <h6 className="font-semibold text-xl">{card.price}</h6>
            
          </div>
        </div>
      </div>
    </>
  );
};
