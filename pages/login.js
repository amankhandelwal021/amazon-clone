import Image from "next/image";
import React from "react";
import Header from "../components/Header";

const Login = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center mt-4 justify-center h-72">
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2019/11/Amazon-logo.png"
            alt=""
            height={100}
            width={200}
          />
          <p className="text-lg font-semibold italic" >
            This is the Amazon clone, made just for the learning purpose...
          </p>
        </div>

        <a
          href=""
          className="my-5 relative inline-flex items-center px-12 py-3 overflow-hidden text-base font-semibold text-amazon_blue border-2 border-gray-200 rounded-full hover:text-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-amazon_blue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
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
          <span className="relative">Sign In With Google</span>
        </a>
      </div>
    </div>
  );
};

export default Login;
