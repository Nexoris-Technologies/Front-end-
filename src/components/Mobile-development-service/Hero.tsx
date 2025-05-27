import Image from "next/image";

export default function HeroPage() {
  return (
    <main>
      <section className="bg-[#543CDA]/32  relative">
        {/* Housing the hero textes and the image */}
        <div className="flex  flex-col lg:flex-row md:gap-[4rem] items-center  mx-auto w-full container pt-[12rem] lg:pt-[5rem]  ">
          {/* Housing Hero header, paragraph text, button and the 3 cards */}
          <div className="flex flex-col gap-[32px]">
            {/* Housing the mobile development */}
            <div className="rounded-[20px] border w-[199px] py-[4px]  px-[24px] border-[#0059F1]/10  bg-[#0059F1]/10">
              <h6 className="text-[16px]  text-[#0059F1] font-semibold ">
                Mobile Devlopment
              </h6>
            </div>
            {/* Housing the header text and the paragrap text */}
            <div className="flex flex-col gap-[20px] ">
              <h1 className="font-bold text-[24px] md:text-[40px] w-[350px] lg:w-[600px]">
                Build Mobile Apps That People Keep Coming Back To
              </h1>
              <p className="text-[14px] md:text-[18px] w-[300px] md:w-[550px]">
                 At Nexoris, we design and engineer mobile apps that feel fast,
                look beautiful, and function flawlessly, tailored for iOS,
                Android, and the humans who use them.
              </p>
            </div>
            {/* Housing the hero button */}
            <div>
              <button className="bg-[#543CDA]  text-[#FFFFFF] rounded-[8px] py-[14px] text-[14px] md:text-[18px] md:py-[21.5px]  w-[200px]  md:w-[260px] flex justify-center items-center gap-[10px]">
                Let's Build You App
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

            {/* Hero cards */}
            <div className="flex flex-row gap-[1rem] md:gap-[40px]">
              {/* first card */}
              <div className="border-r-1 border-[#543CDA]">
                <p className="text-[14px] md:text-[16px] w-[100px] md:w-[170px]">
                  Trusted by 40+ teams across finance, logistics, health, and
                  retail.
                </p>
              </div>
              {/* second card */}
              <div className="border-r-1 border-[#543CDA]">
                <p className="text-[14px] md:text-[16px] w-[85px] md:w-[140px]">
                  Top ratings for UX, scalability, and long-term stability.
                </p>
              </div>
              {/* Third card */}
              <div className="">
                <p className="text-[14px] md:text-[16px] w-[90px] md:w-[165px]">
                  90% of our apps go live in under 10 weeks.
                </p>
              </div>
            </div>
          </div>

          {/* Housing the hero Image */}
          <div className="relative w-[344px] h-[111px] md:w-full md:h-[300px] lg:w-[1224px] lg:h-[490px] rounded-[16px] overflow-hidden">
            <Image
              src="/Service-hero-image.webp"
              alt="Service hero image"
              fill
              className="object-cover rounded-[16px]"
            />
          </div>
        </div>

        {/* Section for the Kiwi, cash etc images */}
        <div className="pt-[4rem] pb-[1rem] max-w-[30rem] md:max-w-[100rem] lg:max-w-[98rem] mx-auto lg:mr-[10rem] px-4">
          <div className=" flex items-center justify-center -mb-[5rem] h-[48px]  md:w-full  rounded-[15px] md:h-[118px] bg-[#F9F9FA]">
            {/* Housing the various cards where flex will be done */}
            <div className="w-[229px] h-[16.7px] md:w-[1150px] md:h-[48px] flex justify-center items-center gap-[18px] md:gap-[2rem] lg:gap-[110px] px-2">
              <div className=" w-[51px] h-[12.75px] md:w-[152px] md:h-[38px]">
                <Image
                  src="/Kiwi.webp"
                  alt="Kiwi-image"
                  width={152}
                  height={38}
                />
              </div>
              <div className="w-[53px] h-[16px]  md:w-[161px] md:h-[48px]">
                <Image
                  src="/me-direct.webp"
                  alt="Direct-image"
                  width={161}
                  height={48}
                />
              </div>
              <div className="w-[42.37] h-[16.7px] md:w-[122.88] md:h-[48px]">
                <Image
                  src="/Cash-image.webp"
                  alt="Cash-image"
                  width={122.88}
                  height={48}
                />
              </div>
              <div className=" w-[42px] h-[8px] md:w-[84px] md:h-[16px]">
                <Image
                  src="/Booking.webp"
                  alt="booking-image"
                  width={84}
                  height={16}
                />
              </div>
              <div className=" w-[50.9px] h-[16.7px] md:w-[84] md:h-[16px]">
                <Image
                  src="/Group 96.webp"
                  alt="Rails-image"
                  width={84}
                  height={16}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
