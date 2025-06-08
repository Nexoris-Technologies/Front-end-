"use client";
import Image from "next/image";

function Help() {
  return (
    <section className="flex w-full lg:py-20 px-4 sm:px-14 lg:px-25 ">
      <div className="flex flex-col-reverse xl:flex-row  gap-12 lg:gap-16 xl:gap-30  w-full">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-[24px] min-h-[300px] w-full  h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] mx-auto lg:mx-0 xl:w-1/2">
          <Image
            src="/ServiceImage1.svg"
            alt="Service Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col lg:gap-8 xl:gap-15 w-full xl:w-1/2 max-w-2xl">
          <h2
            style={{ color: "#000000" }}
            className="text-[24px] sm:text-4xl lg:text-4xl font-bold"
          >
            Who we Help?
          </h2>

          <div className="flex flex-col xl:gap-14 lg:gap-8  ">
            {[
              "Startups needing a site live in weeks, not months.",
              "Growing brands tired of bloated themes and dev bottlenecks.",
              "Enterprise embracing headless architecture and want flexibility without compromise.",
              "Your existing website is slow, outdated, and undermining the credibility you’ve worked hard to build.",
              "SaaS teams or marketing departments dealing with outdated tools and a slow website that holds them back.",
              "You need a fast, flexible site that’s easy to update, quick to launch, and built to grow with you.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <Image
                  src="/icon.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <p className="text-base sm:text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
