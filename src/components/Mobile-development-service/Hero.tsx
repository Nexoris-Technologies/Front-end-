import Image from "next/image";
import Button from "../Button/Button";

export default function HeroPage() {
  return (
    <main>
      <section className="bg-[#543CDA]/20 relative">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center  lg:mt-[4rem] mx-auto lg:max-w-[1224px] px-6 pt-32 lg:pt-20">
          {/* Left Content */}
          <div className="flex flex-col gap-8 max-w-xl w-full">
            {/* Tag */}
            <div className="rounded-[20px] border w-max py-1 px-6 border-[#0059F1]/10 bg-[#0059F1]/10">
              <h6 className="text-sm text-[#0059F1] font-semibold">
                Mobile Development
              </h6>
            </div>

            {/* Heading and Description */}
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-2xl md:text-4xl leading-snug">
                Build Mobile Apps That People Keep Coming Back To
              </h1>
              <p className="text-sm md:text-lg text-gray-800">
                At Nexoris, we design and engineer mobile apps that feel fast,
                look beautiful, and function flawlessly — tailored for iOS,
                Android, and the humans who use them.
              </p>
            </div>

            {/* Button */}
            <div>
              <Button className="bg-[#543CDA] text-white rounded-md py-3 px-6 md:py-3 md:px-14 text-sm md:text-lg flex items-center gap-2">
                Let&apos;s Build Your App
                <Image
                  src="/Arrow right.svg"
                  alt="arrow right"
                  width={16}
                  height={16}
                />
              </Button>
            </div>

            {/* Hero Cards */}
            <div className="flex  gap-3 md:gap-10">
              {/* Card 1 */}
              <div className="max-w-[180px] text-sm md:text-base text-gray-800 border-r border-[#543CDA]">
                Trusted by 40+ teams across finance, logistics, health, and
                retail.
              </div>
              {/* Card 2 */}
              <div className="max-w-[160px] text-sm md:text-base text-gray-800 border-r border-[#543CDA]">
                Top ratings for UX, scalability, and long-term stability.
              </div>
              {/* Card 3 */}
              <div className="max-w-[160px] text-sm md:text-base text-gray-800 ">
                90% of our apps go live in under 10 weeks.
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-[500px] md:max-w-[700px] lg:max-w-[600px] xl:max-w-[720px] aspect-[3/2] rounded-[16px] overflow-hidden">
            <Image
              src="/Service-hero-image.webp"
              alt="Service hero image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section for the Kiwi, cash etc images */}
        <div className="pt-[4rem] pb-[1rem] max-w-[25rem] md:max-w-[100rem] lg:max-w-[80rem] mx-auto lg:mr-[17rem] px-4">
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
                  src="/rails.webp"
                  alt="/rails.webp"
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
