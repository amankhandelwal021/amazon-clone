import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const [ratings] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white p-5 z-30 justify-center rounded-md">
      <p className="absolute top-3 right-3 text-sm italic font-semibold rounded-full bg-yellow-400 p-2">
        {category}
      </p>

      <div className="mt-9 flex flex-col items-center">
        <Image
          src={image}
          height={150}
          width={150}
          objectFit="contain"
          alt=""
        />
      </div>

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(ratings)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-400" key={i} />
          ))}
      </div>

      <p className="text-sm my-2 line-clamp-2">{description}</p>

      <div className="mb-3 font-semibold">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/2560px-Amazon_Prime_Logo.svg.png"
            alt=""
            className="w-10 h-6"
          />
          <p className="text-sm text-gray-500">Eligible For FREE Delivery</p>
        </div>
      )}

      <a
        href=""
        className="mt-4 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black text-sm transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white group"
      >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-400 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            className="w-5 h-5 text-amazon_blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            className="w-5 h-5 text-amazon_blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-black">
          Add To Cart
        </span>
      </a>

      {/* <button className="p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm active:from-yellow-500 mt-4">
        Add To Cart
      </button> */}
    </div>
  );
};

export default ProductCard;
