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
            Why Choose Nexoris for Mobile App Development?
          </h3>

          <div className="flex flex-col gap-4 lg:gap-8 ">
            {[
              "  Native-quality performance with cross-platform efficiency",
              "  Built-in support for app store approvals and launch logistics",
              " Expertise in integrating secure backends, even with legacy systems",
              "    Human-centered UX that puts your users first",
              ,
              " Long-term support, from v1 to v10",
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
              src="/mobile-app-photo.webp"
              alt="mobile Image"
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
// import { CgCheckO } from "react-icons/cg";

// function WhyChoose() {
//   return (
//     <section className="flex bg-[#EAE8F7] ">
//       <div className="flex flex-col container mx-auto items-center justify-center lg:flex-row gap-12 lg:gap-12  py-20 ">
//         {/* Text Section */}
//         <div className="flex flex-col  gap-8 max-w-xl ">
//           <h1 className="w-[350px] lg:w-[600px] text-[24px] lg:text-[32px] font-bold  lg:text-left  ">
//
//           </h1>
//           {/* Housing the paragraph texes */}
//           <div className="flex flex-col  gap-[24px]  ">
//             {/* first text */}
//             <div className="flex gap-[16px]">
//               <p className="text-[1.7rem]">
//                 <CgCheckO />
//               </p>
//               {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
//               <p className="text-[16px] md:text-[18px] w-[243px] lg:w-full ">
//                 Native-quality performance with cross-platform efficiency
//               </p>
//             </div>

//             <div className="flex gap-[16px]">
//               <p className="text-[1.7rem]">
//                 <CgCheckO />
//               </p>
//               {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
//               <p className="w-[233px] md:w-full text-[16px] md:text-[18px]">
//                 Built-in support for app store approvals and launch logistics
//               </p>
//             </div>

//             <div className="flex gap-[16px]">
//               <p className="text-[1.7rem]">
//                 <CgCheckO />
//               </p>
//               {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
//               <p className="w-[233px] text-[16px] md:text-[18px] md:w-[500px]">
//                 Expertise in integrating secure backends, even with legacy
//                 systems
//               </p>
//             </div>

//             <div className="flex gap-[16px]">
//               <p className="text-[1.7rem]">
//                 <CgCheckO />
//               </p>
//               {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
//               <p className="text-[16px] w-[233px] md:w-full md:text-[18px]">
//                 Human-centered UX that puts your users first
//               </p>
//             </div>
//             <div className="flex gap-[16px]">
//               <p className="text-[1.7rem]">
//                 <CgCheckO />
//               </p>
//               {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
//               <p className="text-[16px] w-[233px] md:w-full md:text-[18px]">
//                 Long-term support, from v1 to v10
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Image and Testimonial */}
//         <div className="w-[400px] h-[420px]  md:w-[600px] md:h-[600px] px-4 lg:px-0 relative overflow-hidden">
//           <Image
//             src="/mobile-app-photo.webp"
//             alt="Service Image"
//             fill
//             style={{ objectFit: "cover" }}
//             className="rounded-[24px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChoose;
