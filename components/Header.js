import Image from "next/image";
import React from "react";
import { LocationMarkerIcon, SearchIcon, ShoppingCartIcon, MenuAlt1Icon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className='sticky top-0 z-50'>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            className="cursor-pointer"
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="items-center flex">
          <div className="mr-0 sm:mr-2">
            <LocationMarkerIcon className="h-5 w-5 text-white hidden sm:block" />
          </div>
          <div className="flex flex-col text-white items-start headerOption">
            <div className="text-[10px] sm:text-[12px]">
              <p>Deliver to Aman</p>
            </div>
            <div className="font-bold text-[11px] sm:text-[13px]">
              <p>Alwar 301001</p>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md ml-5 flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-600 hover:transition-all">
            <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
            <SearchIcon className="h-12 p-4 "/>
        </div>
        <div className="text-white text-[13px] mx-4 flex flex-col items-start headerOption">
            <div className="text-[10px] sm:text-[12px]">
              <p>Hello, Aman</p>
            </div>
            <div className="font-bold text-[11px] sm:text-[13px]">
              <p>Account & Lists</p>
            </div>
        </div>
        <div className="text-white text-[13px] mx-4 flex-col items-start headerOption hidden md:flex">
            <div className="text-[12px]">
              <p>Returns</p>
            </div>
            <div className="font-bold text-[13px]">
              <p>& Orders</p>
            </div>
        </div>
        <div className="text-white flex items-end pr-3 relative">
            <span className="bg-yellow-400 h-5 w-5 text-black font-bold text-sm flex justify-center absolute my-[-1px] top-0 right-[1px] md:right-8 md:my-0 sm:right-8 sm-my-0 rounded-full items-center">0</span>
        <ShoppingCartIcon className="h-9 w-9"/>
        <p className="text-[14px] font-bold mt-5 hidden sm:block">Cart</p>
        </div>
      </div>
      <div className="bg-amazon_blue text-white flex p-2 items-center space-x-4 text-[12px] sm:text-[15px]">
            <MenuAlt1Icon className="h-5 w-5 hover:cursor-pointer"/>
            <p className="hidden sm:flex hover:cursor-pointer">All</p>
            <p className="hover:cursor-pointer">Amazon Prime</p>
            <p className="hover:cursor-pointer">Todays Best</p>
            <p className="hidden sm:flex hover:cursor-pointer">Fresh</p>
            <p className="hover:cursor-pointer">Amazon Pay</p>
            <p className='hidden md:flex hover:cursor-pointer'>Gift Card</p>
            <p className='hidden md:flex hover:cursor-pointer'>Electronics</p>
            <p className='hidden md:flex hover:cursor-pointer'>Home Appliance</p>
            <p className='hidden lg:flex hover:cursor-pointer'>Laptop</p>
            <p className='hidden lg:flex hover:cursor-pointer'>Smartphone</p>
            <p className='hidden lg:flex hover:cursor-pointer'>Accessories</p>
        </div>
    </header>
  );
};

export default Header;
