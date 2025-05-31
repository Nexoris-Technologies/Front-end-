// import Image from "next/image";
// import Marquee from "react-fast-marquee";

// function Operators() {
//   return (
//     <section className="sm:py-12 flex flex-col gap-10 items-center justify-center px-4 sm:px-8 bg-white">
//       <div className="">
//       <ul className="list-disc list-inside text-center max-w-[42rem] flex flex-col gap-2 text-sm sm:text-base md:text-lg font-bold">
//       <li>Built for operators across logistics, energy, finance, and education.</li>
//       <li>Trusted to streamline workflows, cut overhead, and power critical systems.</li>
//       <li>85% of clients launch their first MVP or internal product in 6–12 weeks.</li>
//       </ul>
//       </div>

//       <Marquee speed={60} gradient={false} className="w-full">
//         <div className="flex gap-10 items-center">
//           <Image src="/SLogo1.svg" alt="Service Logo 1" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//           <Image src="/SLogo2.svg" alt="Service Logo 2" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//           <Image src="/SLogo3.svg" alt="Service Logo 3" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//           <Image src="/SLogo4.svg" alt="Service Logo 4" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//           <Image src="/SLogo5.svg" alt="Service Logo 5" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//         </div>
//       </Marquee>
//     </section>
//   );
// }

// export default Operators;

"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

function Operators() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint (~1024px)
    };

    // Run on mount
    handleResize();

    // Listen for resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logos = [
    { src: "/SLogo1.svg", alt: "Service Logo 1" },
    { src: "/SLogo2.svg", alt: "Service Logo 2" },
    { src: "/SLogo3.svg", alt: "Service Logo 3" },
    { src: "/Booking.webp", alt: "Service Logo 4" },
    { src: "/SLogo5.svg", alt: "Service Logo 5" },
  ];

  return (
    <section className="sm:py-12 flex flex-col gap-10 items-center justify-center px-4 sm:px-8 bg-white">
      <div>
        <ul className="list-disc list-inside text-center max-w-[42rem] flex flex-col gap-2 text-sm sm:text-base md:text-lg font-bold">
          <li>
            Built for operators across logistics, energy, finance, and
            education.
          </li>
          <li>
            Trusted to streamline workflows, cut overhead, and power critical
            systems.
          </li>
          <li>
            85% of clients launch their first MVP or internal product in 6–12
            weeks.
          </li>
        </ul>
      </div>

      {isSmallScreen ? (
        <Marquee speed={60} gradient={false} className="w-full">
          <div className="flex gap-10 items-center">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={100}
                className="w-32 sm:w-40 lg:w-48 h-auto"
              />
            ))}
          </div>
        </Marquee>
      ) : (
        <div className="flex gap-10 items-center flex-wrap justify-center w-full">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={100}
              className="w-32 sm:w-40 lg:w-48 h-auto"
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Operators;
