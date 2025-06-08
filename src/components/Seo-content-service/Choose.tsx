"use client";
import Image from "next/image";
import { CgCheckO } from "react-icons/cg";

function Choose() {
  return (
    <section className="w-full  ">
      <div className="flex flex-col  items-center justify-between xl:flex-row w-full py-4 sm:py-8 lg:py-30 px-6 sm:px-14 gap-8 lg:gap-20 xl:gap-48 lg:px-24">
        {/* Text Section */}
        <div className="flex flex-col gap-10 lg:gap-12 w-full xl:w-1/2">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Why Choose Nexoris for SEO & Content Marketing?
          </h3>

          <div className="flex flex-col gap-4 lg:gap-8 ">
            {[
              "   Strategy-first approach tailored to your business goals.",
              "     Editorial systems that scale without sacrificing quality.",
              "  Real SEO expertise, not content mills or AI shortcuts.",
              "      Built-in technical SEO support to strengthen every word you",
              "      We don’t just write content, we build engines of growth.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <p className="text-[1.7rem] text-[#000]">
                  <CgCheckO />
                </p>
                <p className="text-md lg:text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full xl:w-1/2 flex ">
          <div className="relative overflow-hidden rounded-[24px] min-h-[300px] w-full  h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] mx-auto lg:mx-0">
            <Image
              src="/schoose.webp"
              alt="Service Image"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;

// import Image from "next/image";

// function WhyChoose() {
//   return (
//     <section className="flex  ">
//       <div className="flex flex-col   lg:flex-row gap-12 lg:gap-[30px] py-35 lg:py-[10rem] lg:px-24 ">
//         {/* Text Section */}
//         <div className="flex flex-col  gap-[32px] relative">
//           <h2 className="absolute bottom-[110%]  text-[22px]  lg:text-[32px] font-extrabold  lg:text-left  ">
//
//           </h2>
//           {/* Housing the paragraph texes */}
//           <div className="flex flex-col gap-[1rem]  lg:gap-[45px]  ">
//             {/* first text */}
//             <div className="flex items-center gap-[16px]">
//               <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
//                 <Image
//                   src="/check icon Blue.svg"
//                   alt="Icon"
//                   width={64}
//                   height={64}
//                 />
//               </div>
//               <p className=" md:w-full font-bold text-[13px] md:text-[20px] ">
//
//               </p>
//             </div>

//             <div className="flex items-center gap-[16px]">
//               <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
//                 <Image
//                   src="/check icon Blue.svg"
//                   alt="Icon"
//                   width={64}
//                   height={64}
//                 />
//               </div>
//               <p className=" w-full font-bold text-[13px] md:text-[20px] ">
//
//               </p>
//             </div>

//             <div className="flex  items-center gap-[16px]">
//               <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
//                 <Image
//                   src="/check icon Blue.svg"
//                   alt="Icon"
//                   width={64}
//                   height={64}
//                 />
//               </div>
//               <p className="w-[233px] text-[13px] font-bold md:text-[20px] md:w-[500px]">
//
//               </p>
//             </div>

//             <div className="flex items-center gap-[16px]">
//               <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
//                 <Image
//                   src="/check icon Blue.svg"
//                   alt="Icon"
//                   width={64}
//                   height={64}
//                 />
//               </div>
//               <p className="text-[13px] w-[233px] md:w-full font-bold md:text-[20px] lg:w-[500px]">
//
//                 publish.
//               </p>
//             </div>
//             <div className="flex items-center gap-[16px]">
//               <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
//                 <Image
//                   src="/check icon Blue.svg"
//                   alt="Icon"
//                   width={64}
//                   height={64}
//                 />
//               </div>
//               <p className="text-[13px] w-[233px] font-bold md:w-full md:text-[20px] lg:w-[500px]">
//
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Image and Testimonial */}
//         <div className="w-[344px] h-[280px]  md:w-[630px] md:h-[540px] lg:w-1/2">
//           <Image
//             src=""
//             alt="Service Image"
//             width={530}
//             height={540}
//             className="rounded-[24px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChoose;
