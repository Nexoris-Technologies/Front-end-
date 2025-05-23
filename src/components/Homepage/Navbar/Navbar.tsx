"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  // For special pages
  const pathname = usePathname();

  const specialPages = pathname === "/quote";

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#080C12] py-[10px]   rounded-bl-[20px] rounded-br-[20px] fixed top-0 left-0 right-0 z-50 ">
      <div className="flex justify-between items-center w-full   px-4 py-3  h-[60px] md:h-[116px] container  mx-auto">
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
          } flex-col md:flex-row lg:block`}
        >
          <ul
            className="flex absolute top-[100%] left-0 right-0 z-50 w-full  bg-red-800  flex-col md:flex-row items-center md:static md:bg-transparent  gap-[37px] text-gray-300 cursor-pointer md:w-[563px]
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
                href={"/service"}
                className="hover:underline decoration-[#9747FF] decoration-2 decoration-solid hover:font-semibold hover:text-white "
              >
                <div className="relative group flex items-center justify-center gap-1">
                  Services
                  <span>
                    <Image
                      src="/Arrow - Down 2.png"
                      alt="arrow down"
                      width={17}
                      height={17}
                    />
                  </span>
                  <div className="absolute left-0 right-[-210%] mt-[24rem] bg-[#FFFFFF] text-[#543CDA] shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50 flex flex-col gap-2 duration-200 rounded-[10px]">
                    <Link
                      className="block px-4 py-2 w-40 text-[14px] hover:underline "
                      href={"/"}
                    >
                      Web Development
                    </Link>
                    <div className="decoration-2 h-0.5 border-gray-300 border-[1px] border-b w-[14rem]  mx-auto "></div>
                    <Link
                      className="block px-4 py-2 w-64 text-[14px] hover:underline decoration-2 decoration-[#9747FF]"
                      href={"/mobile-app-development"}
                    >
                      Mobile App Development
                    </Link>

                    <div className="decoration-2 h-0.5 border-gray-300 border-[1px] border-b w-[14rem]   mx-auto "></div>
                    <Link
                      className="block px-4 py-2 w-64 text-[14px] hover:underline decoration-2 decoration-[#9747FF]"
                      href={"/"}
                    >
                      UI/UX Design & Consulting
                    </Link>

                    <div className="decoration-2 h-0.5 border-gray-300 border-[1px] border-b w-[14rem] flex justify-center items-center  mx-auto "></div>
                    <Link
                      className="block px-4 py-2 w-64 text-[14px] hover:underline decoration-2 decoration-[#9747FF]"
                      href={"/"}
                    >
                      SEO & Content Marketing
                    </Link>

                    <div className="decoration-2 h-0.5 border-gray-300 border-[1px] border-b w-[14rem] flex justify-center items-center  mx-auto "></div>
                    <Link
                      className="block px-4 py-2 w-64 text-[14px] hover:underline decoration-2 decoration-[#9747FF]"
                      href={"/"}
                    >
                      Custom Software Solutions
                    </Link>

                    <div className="decoration-2 h-0.5 border-gray-300 border-[1px] border-b w-[14rem] flex justify-center items-center  mx-auto "></div>
                    <Link
                      className="block px-4 py-2 w-64 text-[14px] hover:underline decoration-2 decoration-[#9747FF]"
                      href={"/"}
                    >
                      Product Design & Management
                    </Link>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                href={"/about-us"}
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
                Insights
              </Link>
            </li>
            <li>
              <Link
                href={"/contact-us"}
                className="hover:underline decoration-[#9747FF] decoration-2 decoration-solid hover:font-semibold hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Quote button */}
        {!specialPages && (
          <div className=" flex-shrink-0 bg-[#543CDA] rounded-md py-1 px-3 md:py-[12px] md:px-[34px] ">
            <Link
              href={"/quote"}
              className="text-[#ffffff] font-semibold text-[12px] md:text-[17px]  w-[70px]   md:w-[98px] flex items-center justify-center "
            >
              Get a Quote
            </Link>
          </div>
        )}

        {/* Hamburger icon */}
        <div className="visible lg:hidden flex-shrink-0 flex items-center bg-white">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
}
