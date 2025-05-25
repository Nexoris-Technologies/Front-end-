import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section>
      {/* Housing What we do */}
      <div className="flex flex-col items-center gap-[48px] mt-8 md:mt-[13rem] lg:mt-[17rem] w-full mx-auto">
        {/* Housing What we do and paragraph text */}
        <div className="flex flex-col  gap-[16px]">
          <h3 className="text-[24px] md:text-[48px] text-center font-semibold text-[#000000]">
            What We Do
          </h3>
          <p className="text-[16px] w-[300px] md:w-full md:text-[18px] text-center text-[#000000]">
            We help you build, scale, and optimize the digital tools your
            business needs to move forward.
          </p>
        </div>

        {/* Cards in what we do */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[28px] ">
          {/* Housing the first card */}
          <div className="flex flex-col items-center gap-[26px] p-[8px]">
            <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
              <Image
                src="/We do 1.svg"
                alt="First image"
                width={60}
                height={60}
              />
            </div>

            {/* Product development text */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[18px] md:text-[20px] font-medium text-center">
                Product Development
              </h3>
              <p className="text-[16px] md:text-[16px] text-center w-[343px] md:w-[240px]">
                We develop websites, mobile apps, and custom software from
                scratch, built to perform, scale, and evolve with your business.
              </p>
            </div>
          </div>
          {/* Housing the second card */}
          <div className="flex flex-col items-center gap-[26px] p-[8px]">
            <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
              <Image
                src="/We do 2.svg"
                alt="First image"
                width={60}
                height={60}
              />
            </div>

            {/* Design & strategy text */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[18px] md:text-[20px] font-medium text-center">
                Design & Strategy
              </h3>
              <p className="text-[14px] md:text-[16px] w-[300px] md:w-[260px] text-center">
                Our team combines clean UI/UX design with strategic thinking to
                deliver products that aren’t just beautiful, but genuinely
                useful.
              </p>
            </div>
          </div>
          {/* Housing the third card */}
          <div className="flex flex-col items-center gap-[26px] p-[8px]">
            <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
              <Image
                src="/We do 3.svg"
                alt="First image"
                width={60}
                height={60}
              />
            </div>

            {/* Businesss Tools text */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="font-medium text-[18px] md:text-[20px] text-center ">
                Business Tools & Automation
              </h3>
              <p className="text-[14px] md:text-[16px] w-[300px] md:w-[290px] text-center">
                From cloud storage to secure logins, from integrations to
                automation, we streamline your backend so you can focus on what
                matters.
              </p>
            </div>
          </div>
          {/* Housing the fourth card */}
          <div className="flex flex-col items-center gap-[26px] p-[8px]">
            <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
              <Image
                src="/We do 4.svg"
                alt="First image"
                width={60}
                height={60}
              />
            </div>

            {/* Ongoing Support text */}
            <div className="flex flex-col items-center gap-[16px]">
              <h3 className="text-[16px] md:text-[20px] text-center font-medium">
                Ongoing Support
              </h3>
              <p className="text-[14px] md:text-[16px] w-[300px] md:w-[260px] text-center">
                We don’t disappear after delivery. We monitor, test, update, and
                improve because your tools should keep getting better over time.
              </p>
            </div>
          </div>
        </div>

        <button className="bg-[#543CDA]  text-[#FFFFFF] rounded-[8px] py-[14px] text-[14px] md:text-[18px] md:py-[21.5px] w-[350px]  md:w-[260px] flex justify-center mb-9 items-center gap-[10px]">
          Get In Touch
          <span>
            <Image
              src="/Arrow right.svg"
              alt="arrow right"
              width={16}
              height={16}
            />
          </span>
        </button>
      </div>
    </section>
  );
}
