import Image from "next/image";

export default function SeoProblemsSolves() {
  return (
    <section>
      {/* Housing all section */}
      <div className="flex flex-col gap-[2rem] mt-[2rem] lg:gap-[4rem] py-[2rem] lg:py-[5rem]">
        <h2 className="text-[22px] md:text-[40px] font-extrabold text-[#543CDA] text-center">
          Problems We Solve
        </h2>

        {/* Problems we solve image */}
        <div className="flex flex-col lg:flex-row gap-[95px] lg:gap-[82px] mx-auto">
          <div className="rounded-[10px] w-[343px] h-[280px] md:w-[529px] md:h-[540px]">
            <Image
              src="/seo-problem-image.webp"
              alt="Solved problems image"
              width={529}
              height={540}
            />
          </div>
          {/* Solved problems textes */}
          <div className="flex gap-[1.5rem] lg:gap-[51px] flex-col">
            {/* first text pair */}
            <div className=" flex items-center gap-[23px]">
              <div className="w-[56] h-[55px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/question marks icons.svg"
                  alt="question icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] md:text-[20px] font-bold w-[250px]  md:w-[490px] lg:w-[500px]">
                Our traffic is flat and we’re not showing up for important
                keywords.
              </p>
            </div>
            {/* second text pair */}
            <div className=" flex items-center gap-[23px]">
              <div className="w-[56] h-[55px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/question marks icons.svg"
                  alt="question icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] md:text-[20px] font-bold w-[250px]  md:w-[490px] lg:w-[500px]">
                We’ve published dozens of blogs but aren’t seeing any leads.
              </p>
            </div>
            {/* third text pair */}
            <div className=" flex items-center gap-[23px]">
              <div className="w-[56] h-[55px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/question marks icons.svg"
                  alt="question icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] md:text-[20px] font-bold w-[250px]  md:w-[490px] lg:w-[500px]">
                Our website takes forever to load and fails Core Web Vitals.
              </p>
            </div>
            {/* fourth text pair */}
            <div className=" flex items-center gap-[23px]">
              <div className="w-[56] h-[55px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/question marks icons.svg"
                  alt="question icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] md:text-[20px] font-bold w-[250px]  md:w-[490px] lg:w-[500px]">
                We don’t know which keywords to target or how to structure our
                pages.
              </p>
            </div>
            {/* fifth text pair */}
            <div className=" flex items-center gap-[23px]">
              <div className="w-[56] h-[55px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/question marks icons.svg"
                  alt="question icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] md:text-[20px] font-bold w-[250px] md:w-[490px] lg:w-[450px]">
                We want to improve search visibility but don’t have the in-house
                expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
