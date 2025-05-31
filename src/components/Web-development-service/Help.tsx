"use client";
import Image from "next/image";

function Help() {
  return (
    <section className="flex items-center justify-center py-20 px-4 bg-white">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl w-full">
        {/* Image Section */}
        <div className="w-full flex justify-center lg:justify-start">
          <Image
            src="/ServiceImage1.svg"
            alt="Service Image"
            width={280}
            height={280}
            className="w-full max-w-2xl lg:max-w-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 w-full">
          <h2
            style={{ color: "#000000" }}
            className="text-2xl sm:text-4xl lg:text-4xl font-bold"
          >
            Who we Help?
          </h2>

          <div className="flex flex-col lg:gap-4 gap-8">
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
