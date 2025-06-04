"use client";

import Image from "next/image";

const sections = [
  {
    title: "Built for What’s Next",
    description:
      "Every product we build is designed to scale with you. So when growth comes, you're ready, not rebuilding.",
    width: "w-[330px] md:w-[550px]",
  },
  {
    title: "Tailored, Not Templated",
    description:
      "No cookie-cutter shortcuts. Everything is crafted around your brand, your workflows, and your specific goals.",
    width: "w-[330px] md:w-[450px]",
  },
  {
    title: "Stable from Day One",
    description:
      "Our code is pressure-tested, production-ready, and resilient, built for real-world traffic, not just polished demos.",
    width: "w-[320px] md:w-[490px]",
  },
  {
    title: "Tech That Feels Human",
    description:
      "From your team to your users, everything we build is smooth, intuitive, and just works without a user manual.",
    width: "w-[300px] md:w-[550px]",
  },
];

export default function Love() {
  return (
    <section
      id="why-youll-love-us"
      aria-labelledby="love-heading"
      className="w-full bg-purple-6 flex justify-center items-center rounded mt-12 md:mt-16 px-4 sm:px-6 lg:px-8 py-10"
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-14">
        {/* Visual */}
        <figure className="w-full">
          <Image
            src="/Meeting-image.webp"
            alt="Team members in a collaborative meeting session"
            width={511}
            height={569}
            className="rounded-lg w-full h-auto object-cover"
            priority
          />
        </figure>

        {/* Content */}
        <div className="w-full max-w-2xl flex flex-col justify-center items-center md:items-start gap-10 mt-10 md:mt-0 container mx-auto ">
          <div className="text-center md:text-left ">
            <h2
              id="love-heading"
              className="font-extrabold text-[1.25rem] md:text-[2rem] leading-[2rem] md:leading-[2.5rem] tracking-tight text-background"
            >
              What You&apos;ll Actually Love About Working With Us
            </h2>
          </div>

          <div className="w-full flex flex-col gap-6">
            {sections.map(({ title, description, width }, index) => (
              <article
                key={index}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <h3 className="font-bold text-base md:text-xl text-[#543CDA]">
                  {title}
                </h3>
                <p
                  className={`text-sm md:text-base mt-1 text-purple-dark  ${width}`}
                >
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
