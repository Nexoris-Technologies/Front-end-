import Image from "next/image";

export default function About() {
  return (
    <section className="container">
      {/* Housing the About us, h3, p, images and the button */}
      <div className=" mt-[8rem] lg: w-full mx-auto px-[4rem] md:px-[1.7rem] ">
        {/* Housing About Us  */}
        <div className="rounded-[10px] bg-[#543CDA] flex items-center justify-center  md:py-[2rem]">
          <h3 className="font-bold text-[35px] md:text-[56px] text-center text-[#FFFFFF]">
            About Us
          </h3>
        </div>

        {/* Housing the hero-section and images */}
        <div className="flex flex-col justify-center items-center lg:flex-row gap-[2rem] md:gap-[5rem] lg:gap-[12rem] mt-[3rem]">
          {/* housing smart solution and the p-tag and the button*/}
          <div className="flex flex-col  gap-[16px] ">
            <h3 className="text-[24px] md:text-[32px] font-bold w-[310px] md:w-[530px] tracking-tight">
              Smart solutions. Trusted team. Built to grow with you.
            </h3>
            <p className="text-[16px] md:text-[18px] w-[300px] md:w-[520px]">
              At Nexoris, we believe technology should simplify and not
              complicate how you work. It should help your team move faster,
              your customers stay longer, and your business scale with
              confidence. <br /> That’s why we don’t just build software, we
              build partnerships. The kind rooted in clarity, care, and a shared
              mission: turning bold ideas into real-world solutions.
            </p>

            <button className="bg-[#543CDA] text-[#FFFFFF] rounded-[8px] py-[10px] text-[14px] md:text-[18px] md:py-[21.5px] w-[200px]  md:w-[300px] flex justify-center items-center gap-[10px]">
              GET STARTED
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

          {/* Hero images */}
          <div className="flex gap-4  md:gap-10">
            {/* First image */}
            <div className="w-[164px] h-[176px] md:w-[260px] md:h-[260px] relative md:mt-[6.9rem]">
              <Image
                src="/about us first.webp"
                alt="about-us-first"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Second image */}
            <div className="w-[164px] h-[176px] md:w-[260px] md:h-[369px] relative">
              <Image
                src="/about us second.webp"
                alt="about-us-second"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
