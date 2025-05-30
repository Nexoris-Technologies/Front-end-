import Image from "next/image";

export default function CustomProcess() {
  return (
    <section className="bg-[#543CDA]/68">
      {/* Overall */}
      <div className="flex flex-col gap-[60px] py-[5rem]">
        <h2
          style={{ color: "#FFFFFF" }}
          className="text-[24px] md:text-[40px] font-bold text-center "
        >
          Our Process
        </h2>
        {/* housing the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] md:gap-[24px] mx-auto max-w-[1224px] px-4">
          {/* first card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#FFFFFF]/60 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/1 bdash.svg" alt="1 dash" width={360} height={60} />
            </div>

            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h3
                style={{ color: "#FFFFFF" }}
                className="text-[24px] font-bold"
              >
                Discover Your Edge
              </h3>
              <p style={{ color: "#FFFFFF" }} className="text-[16px] w-[320px]">
                We start by deeply understanding your goals, users, and pain
                points so we can design a site that works exactly the way your
                team and customers need it to.
              </p>
            </div>
          </div>
          {/* second card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#FFFFFF]/60 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/2 bdash.svg" alt="1 dash" width={360} height={60} />
            </div>
            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h3
                style={{ color: "#FFFFFF" }}
                className="text-[24px] font-bold"
              >
                Plan for Scale
              </h3>
              <p style={{ color: "#FFFFFF" }} className="text-[16px] w-[320px]">
                Together, we define the right tech stack, content structure, and
                architecture that supports your growth now and in the future.
              </p>
            </div>
          </div>
          {/* third card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#FFFFFF]/60 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/3 bdash.svg" alt="1 dash" width={360} height={60} />
            </div>
            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h3
                style={{ color: "#FFFFFF" }}
                className="text-[24px] font-bold"
              >
                Design with Intent
              </h3>
              <p style={{ color: "#FFFFFF" }} className="text-[16px] w-[320px]">
                Every layout, interaction, and component is crafted to reflect
                your brand, engage your users, and guide them toward action.
              </p>
            </div>
          </div>
          {/* fourth card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#FFFFFF]/60 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/4 bdash.svg" alt="1 dash" width={360} height={60} />
            </div>
            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h3
                style={{ color: "#FFFFFF" }}
                className="text-[24px] font-bold"
              >
                Build with Precision
              </h3>
              <p style={{ color: "#FFFFFF" }} className="text-[16px] w-[320px]">
                We write clean, modular, high-performance code that integrates
                seamlessly across frontend and backend, optimized for speed and
                stability.
              </p>
            </div>
          </div>
          {/* fifth card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#FFFFFF]/60 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/5 bdash.svg" alt="1 dash" width={360} height={60} />
            </div>
            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h3
                style={{ color: "#FFFFFF" }}
                className="text-[24px] font-bold"
              >
                Test, Refine, and Assure Quality
              </h3>
              <p style={{ color: "#FFFFFF" }} className="text-[16px] w-[320px]">
                From usability and SEO to performance and accessibility, we run
                detailed QA checks on every component across devices, browsers,
                and breakpoints.
              </p>
            </div>
          </div>
          {/* sixth card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#FFFFFF]/60 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/6 bdash.svg" alt="1 dash" width={360} height={60} />
            </div>
            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h3
                style={{ color: "#FFFFFF" }}
                className="text-[24px] font-bold"
              >
                Launch & Support
              </h3>
              <p style={{ color: "#FFFFFF" }} className="text-[16px] w-[320px]">
                Once your site is live, we don&apos;t disappear. We provide
                technical documentation, performance monitoring, and ongoing
                support to keep things running smoothly.
              </p>
            </div>
          </div>
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
