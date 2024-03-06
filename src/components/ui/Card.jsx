import React from "react";

export const Card = ({ card, key, isThree }) => {
  return (
    <>
      <div
        className={`max-w-sm mx-auto overflow-hidden rounded-xl shadow-xl p-4  `}
        key={key}
      >
        <img
          className="object-cover object-center w-full h-64 rounded-lg"
          src={card.imgUrl}
          alt={card.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{card.title}</div>
          <p className="text-gray-700 text-base">{card.description}</p>
          <div className="mt-4 text-center">
            <button className="bg-[#7c51f0] hover:bg-[#6c46d5] text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
