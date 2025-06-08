import Image from "next/image";

function Benefits() {
  return (
    <section className="">
      <div className="flex flex-col  gap-10 py-8 lg:py-30 px-4 sm:px-14 lg:px-24">
        <h1 className="text-center font-bold text-2xl md:text-3xl">
          Key Benefits at a Glance
        </h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {[
            {
              icon: "/Performance.svg",
              title: "Performance That Wins Clicks",
              description:
                "Sub-2-second load times for better UX and SEO rankings.",
            },
            {
              icon: "/Scalable.svg",
              title: "Scalable from Day One",
              description:
                "Future-proof builds using React, Next.js, and Jamstack architecture.",
            },
            {
              icon: "/Engine.svg",
              title: "Built for Search Engines",
              description:
                "Schema, semantic HTML, and Core Web Vitals baked in.",
            },
            {
              icon: "/Perfect.svg",
              title: "Perfect on Every Screen",
              description:
                "Mobile-first, responsive, and fluid across devices.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 border border-[#898686]  w-full rounded-md py-3 px-3  lg:px-4 lg:py-6 text-center"
            >
              <div className="bg-[#0059F133] w-12 h-12 rounded-full flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                />
              </div>
              <h2 className="font-medium text-lg md:text-xl">{item.title}</h2>
              <p className="text-base text-gray-700  leading-snug ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
