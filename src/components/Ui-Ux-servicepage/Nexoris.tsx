"use client";
import Image from "next/image";
import { CgCheckO } from "react-icons/cg";

function Choose() {
  return (
    <section className="w-full bg-[#EAE8F7] py-16 ">
      <div className="flex flex-col items-center justify-between xl:flex-row w-full px-6 sm:px-14 gap-8 lg:gap-20 xl:gap-40 lg:px-24">
        {/* Text Section */}
        <div className="flex flex-col gap-10 lg:gap-12 w-full xl:w-1/2">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Why Choose Nexoris for UI/UX Design?
          </h3>

          <div className="flex flex-col gap-4 lg:gap-8 ">
            {[
              " Deep product thinking, not just pretty visuals",
              "    Research-driven design grounded in real user behavior",
              "   Clear handoff process from design to development.",
              "  End-to-end involvement, from concept to launch to iteration",
              "  Fast turnaround without sacrificing craft",
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
          <div className=" relative overflow-hidden rounded-[24px] min-h-[300px] w-full  h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] mx-auto lg:mx-0">
            <Image
              src="/uichoose.webp"
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

//               <p className="text-[1.7rem]">
//                 <CgCheckO />
//               </p>
//               {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
//               <p className="text-base sm:text-lg">
//
//               </p>
//             </div>

//             <div className="flex items-start gap-4">
//               <p className="text-[1.7rem]">
//                 <CgCheckO />
//               </p>
//               {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
//               <p className="text-base sm:text-lg">
//
//               </p>
//             </div>

//             <div className="flex items-start gap-4">
//               <p className="text-[1.7rem]">
//                 <CgCheckO />
//               </p>
//               {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
//               <p className="text-base sm:text-lg">
//
//               </p>
//             </div>

//             <div className="flex items-start gap-4">
//               <p className="text-[1.7rem]">
//                 <CgCheckO />
//               </p>
//               {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
//               <p className="text-base sm:text-lg">
//
//               </p>
//             </div>

//             <div className="flex items-start gap-4">
//               <p className="text-[1.7rem]">
//                 <CgCheckO />
//               </p>
//               {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
//               <p className="text-base sm:text-lg">
//
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Image and Testimonial */}
//         <div className="w-[343px] h-[420px] md:w-[550px] md:h-[600px] relative overflow-hidden ">
//           <Image
//             src="/uichoose.webp"
//             alt="Service Image"
//             fill
//             style={{ objectFit: "cover" }}
//             className="rounded-2xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Nexoris;
