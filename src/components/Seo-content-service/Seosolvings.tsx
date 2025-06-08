import Image from "next/image";

export default function SeoProblemsSolves() {
  return (
    <section>
      {/* Housing all section */}
      <div className="flex flex-col gap-[2rem] mt-[2rem] lg:gap-[4rem] py-[2rem] lg:py-12 px-4 sm:px-14 lg:px-24">
        <h2 className="text-[22px] md:text-[40px] font-extrabold text-[#543CDA] text-center">
          Problems We Solve
        </h2>

        {/* Problems we solve image */}
        <div className="flex flex-col  xl:flex-row gap-12 lg:gap-30 ">
          <div className="relative overflow-hidden rounded-[24px] min-h-[300px] w-full  h-[420px] sm:h-[500px] md:h-[600px] lg:h-[580px] mx-auto lg:mx-0 xl:w-1/2">
            <Image
              src="/seo-problem-image.webp"
              alt="Solved problems image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Solved problems textes */}
          <div className="flex gap-[1.5rem] lg:gap-5 xl:gap-16 flex-col  xl:w-1/2">
            {/* first text pair */}
            <div className=" flex items-center gap-4">
              <div className="w-[56] h-[55px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/question marks icons.svg"
                  alt="question icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] md:text-[20px] font-bold xl:max-w-lg ">
                Our traffic is flat and we’re not showing up for important
                keywords.
              </p>
            </div>
            {/* second text pair */}
            <div className=" flex items-center gap-4">
              <div className="w-[56] h-[55px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/question marks icons.svg"
                  alt="question icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] md:text-[20px] font-bold xl:max-w-lg ">
                We&apos;ve published dozens of blogs but aren’t seeing any leads.
              </p>
            </div>
            {/* third text pair */}
            <div className=" flex items-center gap-4">
              <div className="w-[56] h-[55px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/question marks icons.svg"
                  alt="question icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] md:text-[20px] font-bold  xl:max-w-lg ">
                Our website takes forever to load and fails Core Web Vitals.
              </p>
            </div>
            {/* fourth text pair */}
            <div className=" flex items-center gap-4">
              <div className="w-[56] h-[55px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/question marks icons.svg"
                  alt="question icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] md:text-[20px] font-bold  xl:max-w-lg">
                We don’t know which keywords to target or how to structure our
                pages.
              </p>
            </div>
            {/* fifth text pair */}
            <div className=" flex items-center gap-4">
              <div className="w-[56] h-[55px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/question marks icons.svg"
                  alt="question icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] md:text-[20px] font-bold  xl:max-w-lg">
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
