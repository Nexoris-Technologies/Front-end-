import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section className="">
      {/* Housing What we do */}
      <div className="flex flex-col  lg:gap-8 mt-20 md:mt-15 lg:mt-40 py-4 lg:py-5  ">
        {/* Housing What we do and paragraph text */}
        <div className="flex flex-col mx-auto gap-2 lg:gap-6">
          <h3 className="text-2xl md:text-5xl text-center font-semibold text-[#000000]">
            What We Do
          </h3>
          <p className="text-xl w-[300px] md:w-full md:text-xl text-center text-[#000000]">
            We help you build, scale, and optimize the digital tools your
            business needs to move forward.
          </p>
        </div>

        {/* Cards in what we do */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2 lg:gap-8">
          {/* Housing the first card */}
          <div className="flex flex-col items-center gap-6 p-3">
            <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
              <Image
                src="/We-do-1.svg"
                alt="First image"
                width={60}
                height={60}
              />
            </div>

            {/* Product development text */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg md:text-xl font-medium text-center">
                Product Development
              </h3>
              <p className=" md:text-md text-center ">
                We develop websites, mobile apps, and custom software from
                scratch, built to perform, scale, and evolve with your business.
              </p>
            </div>
          </div>
          {/* Housing the second card */}
          <div className="flex flex-col items-center gap-6 p-3">
            <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
              <Image
                src="/We-do-2.svg"
                alt="First image"
                width={60}
                height={60}
              />
            </div>

            {/* Design & strategy text */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg md:text-xl font-medium text-center">
                Design & Strategy
              </h3>
              <p className="md:text-md text-center ">
                Our team combines clean UI/UX design with strategic thinking to
                deliver products that aren’t just beautiful, but genuinely
                useful.
              </p>
            </div>
          </div>
          {/* Housing the third card */}
          <div className="flex flex-col items-center gap-6 p-3">
            <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
              <Image
                src="/We-do-3.svg"
                alt="First image"
                width={60}
                height={60}
              />
            </div>

            {/* Businesss Tools text */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg md:text-xl font-medium text-center">
                Business Tools & Automation
              </h3>
              <p className="md:text-md text-center ">
                From cloud storage to secure logins, from integrations to
                automation, we streamline your backend so you can focus on what
                matters.
              </p>
            </div>
          </div>
          {/* Housing the fourth card */}
          <div className="flex flex-col items-center gap-6 p-3">
            <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
              <Image
                src="/We-do-4.svg"
                alt="First image"
                width={60}
                height={60}
              />
            </div>

            {/* Ongoing Support text */}
            <div className="flex flex-col items-center gap-[16px]">
              <h3 className="text-lg md:text-xl font-medium text-center">
                Ongoing Support
              </h3>
              <p className="md:text-md text-center lg:max-w-sm">
                We don’t disappear after delivery. We monitor, test, update, and
                improve because your tools should keep getting better over time.
              </p>
            </div>
          </div>
        </div>

        <Button className="bg-[#543CDA]  text-[#FFFFFF] rounded-[8px] py-3 text-[14px] md:text-[18px] md:py-3  flex mx-auto items-center justify-center gap-8">
          <Link href="/contact-us">Get In Touch</Link>
          <span>
            <Image
              src="/Arrow right.svg"
              alt="arrow right"
              width={16}
              height={16}
            />
          </span>
        </Button>
      </div>
    </section>
  );
}
