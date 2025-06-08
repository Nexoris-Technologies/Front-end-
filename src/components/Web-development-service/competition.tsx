"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Button/Button";

import { motion } from "framer-motion";

function Competition() {
  return (
    <section className=" flex  py-24 px-6 sm:px-10 lg:px-25 bg-white">
      <div className="w-full ">
        <div className="flex flex-col items-center gap-8 text-center ">
          {/* Badge */}
          <h4 className="bg-[#0059F11A] py-2 px-6 rounded-full text-[#0059F1] font-bold text-sm sm:text-base">
            Website Development
          </h4>

          {/* Heading and Paragraph */}
          <div className="flex flex-col  gap-4 w-full ">
            <h1 className="font-bold text-[32px] sm:text-3xl lg:text-5xl text-[#543CDA]">
              Build Websites That <br /> Outrun the Competition.
            </h1>
            <p className="font-normal text-[16px] sm:text-base text-primary px-2">
              At Nexoris, we don’t just build websites—we create lightning-fast,
              Google- <br /> optimized digital experiences that scale with your
              business and help you attract, <br /> engage, and convert more
              customers.
            </p>
          </div>

          {/* Button */}
          <Link href="#">
            <Button className="flex items-center gap-3 bg-[#543CDA] py- sm:px-18 rounded-md text-white font-bold text-[14px] sm:text-base">
              Let’s Build Yours <BsArrowRight className="text-sm" />
            </Button>
          </Link>

          {/* Image */}
          <div className=" relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/ServiceImage2.svg"
                alt="Service Image"
                width={1100}
                height={702}
                className="w-full  object-cover rounded-md"
                priority // Optional: preloads for better performance
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competition;
