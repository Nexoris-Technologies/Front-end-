// import Image from "next/image";
// import Link from "next/link";
// import Marquee from "react-fast-marquee";
// import { BsArrowRight } from "react-icons/bs";

// function Experiences() {
//   return (
//     <section className="my-24 flex justify-center py-20 px-4 bg-white">
//       <div className="flex items-center justify-center w-full max-w-7xl">
//         <div className="flex flex-col items-center gap-8 text-center">
//           {/* Badge */}
//           <h4 className="bg-[#0059F11A] py-2 px-6 rounded-full text-[#0059F1] font-bold text-sm sm:text-base">
//            UI/UX Design
//           </h4>

//           {/* Heading and Paragraph */}
//           <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
//             <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl text-[#543CDA]">
//              Design Experiences That Keep <br /> People Coming Back
//             </h1>
//             <p className="font-normal text-sm sm:text-base text-gray-700 px-2">
//             At Nexoris, we craft intuitive interfaces and user journeys that turn first-time visitors into loyal users, driven <br /> by insight, built for clarity, and tailored to your business goals.
//             </p>
//           </div>

//           {/* Button */}
//           <Link href="#">
//             <button className="flex items-center gap-2 bg-[#543CDA] py-4 sm:px-12 rounded-md text-white font-bold text-sm sm:text-base">
//             Let’s Design Something Better <BsArrowRight className="text-lg" />
//             </button>
//           </Link>

//           {/* Image */}
//           <Marquee speed={60} gradient={false} className="w-full">
//         <div className="flex items-end gap-12">
//           <Image src="/Frame1.svg" alt="Service Logo 1" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//           <Image src="/Frame2.svg" alt="Service Logo 2" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//           <Image src="/Frame3.svg" alt="Service Logo 3" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//           <Image src="/Frame4.svg" alt="Service Logo 4" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//           <Image src="/Frame5.svg" alt="Service Logo 5" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//           <Image src="/Frame6.svg" alt="Service Logo 6" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//           <Image src="/Frame7.svg" alt="Service Logo 7" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
//         </div>
//       </Marquee>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experiences;

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { BsArrowRight } from "react-icons/bs";

function Experiences() {
  const images = [
    { src: "/uimage1.webp", alt: "Service image 1" },
    { src: "/uimage2.webp", alt: "Service image 2" },
    { src: "/uimage3.webp", alt: "Service image 3" },
    { src: "/uimage4.webp", alt: "Service image 4" },
    { src: "/uimage5.webp", alt: "Service image 5" },
    { src: "/uimage6.webp", alt: "Service image 6" },
    { src: "/uimage7.webp", alt: "Service image 7" },
  ];

  return (
    <section className="my-24 flex justify-center py-20 px-4 bg-white">
      <div className="flex items-center justify-center w-full max-w-7xl">
        <div className="flex flex-col items-center gap-8 text-center w-full">
          {/* Badge */}
          <h4 className="bg-[#0059F11A] py-2 px-6 rounded-full text-[#0059F1] font-bold text-sm sm:text-base">
            UI/UX Design
          </h4>

          {/* Heading and Paragraph */}
          <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl text-[#543CDA]">
              Design Experiences That Keep <br /> People Coming Back
            </h1>
            <p className="font-normal text-sm sm:text-base text-gray-700 px-2">
              At Nexoris, we craft intuitive interfaces and user journeys that
              turn first-time visitors into loyal users, driven <br /> by
              insight, built for clarity, and tailored to your business goals.
            </p>
          </div>

          {/* Button */}
          <Link href="#">
            <button className="flex items-center gap-2 bg-[#543CDA] py-4 px-8 sm:px-12 rounded-md text-white font-bold text-sm sm:text-base">
              Let’s Design Something Better <BsArrowRight className="text-lg" />
            </button>
          </Link>

          {/* Marquee with Images */}
          <div className="w-full mt-8">
            <Marquee speed={60} gradient={false} className="w-full">
              <div className="flex items-end gap-12">
                {images.map((img, index) => (
                  <Image
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    width={180}
                    height={100}
                    loading="eager"
                    priority={index < 2}
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg"
                    className="w-32 sm:w-40 lg:w-48 h-auto"
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
