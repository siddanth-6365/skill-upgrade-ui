import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export const Card = ({ card, key }) => {
  const truncatedDescription =
    card.description.length > 200
      ? card.description.slice(0, 200) + "..."
      : card.description;

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const containerRef = useRef(null);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`max-w-sm mx-auto flex flex-col justify-between overflow-hidden rounded-xl shadow-xl p-4 bg-gray-200  `}
        key={key}
      >
        <div>
          <Link href={`/courses?id=${card.id}`}>
            <img
              ref={containerRef}
              className="object-cover object-center w-full h-64 rounded-lg"
              src={card.backgroundImage}
              alt={card.title}
            />
          </Link>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{card.title}</div>
          <p className="text-gray-700 text-base">{truncatedDescription}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link href={`/courses/${card.id}`}>
            <button className="bg-[#7c51f0] hover:bg-[#6c46d5] text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </Link>
          <div className="text-right">
            <h6 className="text-gray-700 text-xl font-sans">
              {`₹${card.price} `} <br />
              <span className="line-through text-lg text-gray-500">
                {card.price * 2}
              </span>
            </h6>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
