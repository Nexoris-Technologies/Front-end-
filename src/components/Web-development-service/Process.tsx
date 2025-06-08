import Image from "next/image";

export default function CustomProcess() {
  return (
    <section className="bg-[#543CDA]/68 ">
      <div className=" py-14 flex flex-col px-4 md:px-14 lg:px-24   gap-12 ">
        <h2
          style={{ color: "#FFFFFF" }}
          className=" text-2xl md:text-4xl font-bold text-center"
        >
          Our Process
        </h2>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 lg:gap-8 ">
          {[
            {
              step: "1",
              title: "Discover Your Edge",
              description:
                "We start by deeply understanding your goals, users, and pain points so we can design a site that works exactly the way your team and customers need it to.",
              image: "/1 bdash.svg",
            },
            {
              step: "2",
              title: "Plan for Scale",
              description:
                "Together, we define the right tech stack, content structure, and architecture that supports your growth now and in the future.",
              image: "/2 bdash.svg",
            },
            {
              step: "3",
              title: "Design with Intent",
              description:
                "Every layout, interaction, and component is crafted to reflect your brand, engage your users, and guide them toward action.",
              image: "/3 bdash.svg",
            },
            {
              step: "4",
              title: "Build with Precision",
              description:
                "We write clean, modular, high-performance code that integrates seamlessly across frontend and backend, optimized for speed and stability.",
              image: "/4 bdash.svg",
            },
            {
              step: "5",
              title: "Test, Refine, and Assure Quality",
              description:
                "From usability and SEO to performance and accessibility, we run detailed QA checks on every component across devices, browsers, and breakpoints.",
              image: "/5 bdash.svg",
            },
            {
              step: "6",
              title: "Launch & Support",
              description:
                "Once your site is live, we don’t disappear. We provide technical documentation, performance monitoring, and ongoing support to keep things running smoothly.",
              image: "/6 bdash.svg",
            },
          ].map(({ step, title, description, image }, i) => (
            <div
              key={i}
              className="flex flex-col bg-[#543CDA]/10 border border-white/60 p-4   rounded-2xl gap-6"
            >
              <div className=" h-[40px] md:h-[60px]">
                <Image
                  src={image}
                  alt={`${step} dash`}
                  width={360}
                  height={60}
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <p className="text-white text-base leading-relaxed lg:max-w-sm ">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

//    {
//      step: "1",
//      title: "Discover Your Edge",
//      description:
//        "We start by deeply understanding your goals, users, and pain points so we can design a site that works exactly the way your team and customers need it to.",
//    },
//    {
//      step: "2",
//      title: "Plan for Scale",
//      description:
//        "Together, we define the right tech stack, content structure, and architecture that supports your growth now and in the future.",
//    },
//    {
//      step: "3",
//      title: "Design with Intent",
//      description:
//        "Every layout, interaction, and component is crafted to reflect your brand, engage your users, and guide them toward action.",
//    },
//    {
//      step: "4",
//      title: "Build with Precision",
//      description:
//        "We write clean, modular, high-performance code that integrates seamlessly across frontend and backend, optimized for speed and stability.",
//    },
//    {
//      step: "5",
//      title: "Test, Refine, and Assure Quality",
//      description:
//        "From usability and SEO to performance and accessibility, we run detailed QA checks on every component across devices, browsers, and breakpoints.",
//    },
//    {
//      step: "6",
//      title: "Launch & Support",
//      description:
//        "Once your site is live, we don’t disappear. We provide technical documentation, performance monitoring, and ongoing support to keep things running smoothly.",
//    },
//  ];

//  return (
//    <section className="bg-[#543CDACC] px-4">
//      <div className="flex flex-col items-center gap-10 py-16 md:py-20 max-w-7xl mx-auto">
//        <h1 className="text-white font-bold text-2xl md:text-3xl">Our Process</h1>

//        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//          {steps.map(({ step, title, description }, index) => (
//            <div
//              key={index}
//              className="flex flex-col gap-4 border border-white rounded-lg p-6 bg-[#ffffff0a] backdrop-blur-sm"
//            >
//              <div className="w-12 h-12">
//                <div className="relative bg-white rounded-full w-full h-full flex items-center justify-center">
//                  <div className="absolute top-[0.1rem] left-[0.1rem] bg-[#543CDACC] rounded-full w-full h-full flex items-center justify-center">
//                    <h2 className="text-white font-bold">{step}</h2>
//                  </div>
//                  <span><Image src="/Line35.svg" alt="Line" width={200} height={800} /></span>
//                </div>
//              </div>

//              <div className="flex flex-col gap-3">
//                <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
//                <h5 className="text-white text-sm md:text-base leading-relaxed">
//                  {description}
//                </h5>
//              </div>
//            </div>
//          ))}
//        </div>
//      </div>
//    </section>
//  );
// }

// export default Process;
