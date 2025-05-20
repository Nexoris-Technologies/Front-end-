"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#080C12] py-[10px]   rounded-bl-[20px] rounded-br-[20px] fixed top-0 left-0 right-0 z-50 ">
      <div className="flex justify-between items-center w-full   px-4 py-3  h-[60px] md:h-[116px] container  mx-auto">
        {/* Hamburger icon */}
        <div className="md:hidden flex-shrink-0 flex items-center bg-white">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        {/* company logo */}
        <Image
          src="/nexoris_logo_black_bg_with_tagkine_042915-Photoroom 1 (1).webp"
          alt="Logo"
          width={140}
          height={92}
          style={{ objectFit: "contain" }}
          className="w-[59.16px] h-auto md:w-[140px] md:h-[92px] object-contain"
        />

        {/* Nav Links */}

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row md:block`}
        >
          <ul
            className="flex absolute top-[100%] left-0 right-0 z-50 w-full  bg-red-800  flex-col md:flex-row items-center md:static md:bg-transparent  gap-[37px] text-gray-300 cursor-pointer md:w-[463px]
       md:h-[26px] text-[17px] font-medium"
          >
            <li>
              <Link
                href={"/"}
                className="hover:underline decoration-[#9747FF] decoration-2 decoration-solid hover:font-semibold hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="hover:underline decoration-[#9747FF] decoration-2 decoration-solid hover:font-semibold hover:text-white flex items-center justify-center gap-1"
              >
                Services
                <span>
                  <Image
                    src="/Arrow - Down 2.png"
                    alt="arrow down"
                    width={17}
                    height={17}
                  />
                </span>
              </Link>
            </li>

            <li>
              <Link
                href={"/"}
                className="hover:underline decoration-[#9747FF] decoration-2 decoration-solid hover:font-semibold hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="hover:underline decoration-[#9747FF] decoration-2 decoration-solid hover:font-semibold hover:text-white"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="hover:underline decoration-[#9747FF] decoration-2 decoration-solid hover:font-semibold hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Quote button */}
        <div className=" flex-shrink-0 bg-[#543CDA] rounded-md py-1 px-3 md:py-[12px] md:px-[34px] flex justify-center items-center ">
          <button className="text-[#ffffff] font-semibold text-[12px] md:text-[17px]  leading-[100%] w-[80px] h-[20px]  md:w-[98px] md:h-[26px]">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}

// border rounded-[8px] py-[12px] px-[34px] w-[160px] h-[35px] md:w-[166px] md:h-[50px]
