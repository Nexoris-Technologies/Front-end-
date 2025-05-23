// import Image from "next/image";
// import Marquee from "react-fast-marquee";

// function BackedBy () {
//  return(
//   <section className="h-[15rem] py-12 flex flex-col gap-10 items-center justify-center sm:px-8">
//    <p className="text-center w-[33rem] text-[1rem] font-bold">Backed by 50+ brands. 3-second load times. 40% average SEO uplift.
//    Used by leading brands across SaaS, fintech, and logistics.</p>

//    <Marquee speed={60} gradient={false} className="flex gap-10">
//     <div className="flex gap-12 items-center justify-start">
//     <div className=""><Image src="/SLogo1.svg" alt="Service Logo" width={280} height={200}/></div>
//     <div className=""><Image src="/SLogo2.svg" alt="Service Logo" width={280} height={200}/></div>
//     <div className=""><Image src="/SLogo3.svg" alt="Service Logo" width={280} height={200}/></div>
//     <div className=""><Image src="/SLogo4.svg" alt="Service Logo" width={280} height={200}/></div>
//     <div className=""><Image src="/SLogo5.svg" alt="Service Logo" width={280} height={200}/></div>
//     </div>
//    </Marquee>
//   </section>
//  );
// };

// export default BackedBy;

import Image from "next/image";
import Marquee from "react-fast-marquee";

function BackedBy() {
  return (
    <section className="sm:py-12 flex flex-col gap-10 items-center justify-center px-4 sm:px-8 bg-white">
      <p className="text-center max-w-[38rem] text-sm sm:text-base md:text-lg font-bold">
        Backed by 50+ brands. 3-second load times. 40% average SEO uplift.
        Used by leading brands across SaaS, fintech, and logistics.
      </p>

      <Marquee speed={60} gradient={false} className="w-full">
        <div className="flex gap-10 items-center">
          <Image src="/SLogo1.svg" alt="Service Logo 1" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
          <Image src="/SLogo2.svg" alt="Service Logo 2" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
          <Image src="/SLogo3.svg" alt="Service Logo 3" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
          <Image src="/SLogo4.svg" alt="Service Logo 4" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
          <Image src="/SLogo5.svg" alt="Service Logo 5" width={180} height={100} className="w-32 sm:w-40 lg:w-48 h-auto" />
        </div>
      </Marquee>
    </section>
  );
}

export default BackedBy;
