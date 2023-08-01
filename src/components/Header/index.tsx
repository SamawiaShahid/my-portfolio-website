"use client"
import Link from "next/link";
import { useState } from "react"
import {RxHamburgerMenu} from "react-icons/rx"
import {GrClose} from "react-icons/gr"
import React from "react";
import Image from "next/image";

const Header =()=>{
  const [isHeader, setIsHeader] = useState<Boolean>(false);
  console.log(isHeader);
  const toggleHeader = () => {
    setIsHeader(!isHeader);
  };
  
    return(
      <div className="">
      <header className="flex justify-center">
        <div className="hidden lg:block text-xl lg:mt-10 space-x-8 px-7">
            <Link href="#home">Home</Link>
            <Link href="#skills">Skills</Link>         
            <Link href="#About">About</Link>
            <Link href="#signin">Sign In</Link>
            <Link href="#contacts">Contact Us</Link>
          </div>
      </header>
      <div className="visible lg:hidden">
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
                type="button" className="inline-flex items-center p-2 mt-8 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:ring-gray-200 dark:text-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggleHeader}>
           <RxHamburgerMenu className="h-8 w-8"/>  
        </button>
        <div className="flex justify-end text-2xl ">
        <h1 className="mr-8 font-bold -mt-[40px]">Portfolio</h1></div>
        <aside id="default-sidebar" className={isHeader ? "visible top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0" : "hidden"} aria-label="Sidebar">
          <ul>
            <li className=" ml-20 text-base space-y-3 font-bold">
              <Link href="#home">Home</Link>
            </li>
            <li className=" ml-20 text-base space-y-3 font-bold">
              <Link href="#skills">Skills</Link>
            </li>
            <li className=" ml-20 text-base space-y-3 font-bold">
              <Link href="#About">About</Link>
            </li>
            <li className=" ml-20 text-base space-y-3 font-bold">
              <Link href="#signin">Sign In</Link>
            </li>
            <li className=" ml-20 text-base space-y-3 font-bold">
              <Link href="#contacts">Contact Us</Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
    
    )
}
export default Header;