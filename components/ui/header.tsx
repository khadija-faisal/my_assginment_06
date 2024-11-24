"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function Header() {
  const [isClick, setisClick] = useState(false);

  const toggleNav = (): void => {
    setisClick(!isClick);
  };
  return (
    <header className=" flex flex-col gap-2">
      <div className=" h-[54px] hidden  lg:flex items-center justify-center bg-[#F7F7F7]">
        <div className=" w-[90%] flex justify-between items-center">
          <div className=" flex gap-3">
            <span className=" text-sm">Phone Number: 956 742 455 678</span> |
            <span className=" text-sm ">Email:info@ddsgnr.com</span>
          </div>
          <div className=" flex gap-3">
            <Image
              src={"/images/Facebook.svg"}
              alt="icon"
              height={20}
              width={20}
            />
            <Image
              src={"/images/Instagram.svg"}
              alt="icon"
              height={20}
              width={20}
            />
            <Image
              src={"/images/Twitter.svg"}
              alt="icon"
              height={20}
              width={20}
            />
            <Image
              src={"/images/Vector.svg"}
              alt="icon"
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>
      <div className=" h-[72px] flex items-center justify-center bg-[#F7F7F7]">
        <div className=" h-[44px] w-[90%] justify-between flex items-center">
          <div className="flex gap-1">
            <Image src={"/images/logo.svg"} alt="logo" height={30} width={32} />
            <span className=" text-[25px] font-bold">Ddsgnr</span>
          </div>
          <nav className=" bg-[#FFFFFF] gap-2 flex items-center">
            <ul className=" lg:flex xl:gap-14 lg:gap-7 hidden  items-center  px-4">
              <li>
                {" "}
                <Link href="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Courses</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Services</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Achievement</Link>
              </li>
              <li>
                {" "}
                <Link href="/">About Us</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Testimonial</Link>
              </li>
            </ul>
            <div className="hidden lg:flex gap-4 ">
              <button className=" rounded-lg py-[8px] px-[20px] border border-[#000000]">
                Login
              </button>
              <button className=" rounded-lg py-[8px] px-[20px] border bg-[#000000] text-white">
                Sign Up
              </button>
            </div>
          </nav>
          <div className=" flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500"
              onClick={toggleNav}
            >
              {isClick ? (
                <Image
                  src={"/images/x-solid.svg"}
                  alt="menu"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src={"/images/bars-solid.svg"}
                  alt="menu"
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div>
          <div className=" bg-[#F7F7F7]pb-5  sm:px-3">
            <ul className=" flex flex-col items-center p-3 bg-[#F7F7F7]  gap-5 border-b border-b-gray-900">
              <li className="hover:text-lack hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-black hover:underline">
                <Link href="/">Courses</Link>
              </li>
              <li className="hover:text-black hover:underline">
                <Link href="/">Services</Link>
              </li>
              <li className="hover:text-black hover:underline">
                <Link href="/">Achievement</Link>
              </li>
              <li className="hover:text-black hover:underline">
                <Link href="/">About Us</Link>
              </li>
              <li className="hover:text-black-700 hover:underline">
                <Link href="/">Testimonial</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
