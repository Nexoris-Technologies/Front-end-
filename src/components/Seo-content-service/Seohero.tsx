import Image from "next/image";
import Button from "../Button/Button";

export default function SeoHero() {
  return (
    <section className="relative w-full bg-[#d7d2f9]">
      <div className="relative xl:z-0  flex flex-col  lg:flex-row  px-4 sm:px-14 lg:px-24">
        {/* Left side - text */}
        <div className="flex flex-col items-center lg:items-start gap-[2rem]   py-[4rem]  z-10">
          <div>
            <p className="py-2 lg:py-[4px] px-[24px] bg-[#0059F1]/10 text-[#0059F1]  rounded-[20px]">
              SEO and Content Marketing
            </p>
          </div>
          <h1 className="text-[24px] lg:text-[48px] font-extrabold text-[#543CDA] max-w-xl ">
            Rank Higher. Convert Faster. Grow Smarter
          </h1>
          <p className="text-[18px] max-w-xl">
            At Nexoris, we combine technical SEO and high-converting content to
            drive visibility, clicks, and compounding growth. So your site
            doesn&apos;t just rank, it performs.
          </p>

          <div className="rounded-[8px] py-2 lg:py-[12px] px-[31px] bg-[#543CDA] ">
            <Button className="text-[17px] font-bold text-[#FFFFFF]">
              Let&apos;s optimize Your Growth
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[18px] font-semibold">Trusted by 50+ brands</p>
            <p className="text-[18px] w-[350px] lg:w-[450px] font-semibold">
              Used by growth-driven teams in SaaS, healthtech, and digital
              commerce.
            </p>
          </div>

          <div className="flex gap-[4rem] w-[300px] lg:w-full">
            <div>
              <h1 className="text-[30px] text-[#543CDA]">3X</h1>
              <p className="text-[15px]">Content ROI within 6 months.</p>
            </div>
            <div>
              <h1 className="text-[30px] text-[#543CDA]">+40%</h1>
              <p className="text-[15px]">Average increase in organic traffic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width hero background */}
      <div className="absolute top-0 right-0 bottom-[6%] left-1/2 seo--hero hidden lg:block z-0"></div>
      {/* Section for the Kiwi, cash etc images */}
       <div className="pt-[4rem] pb-[1rem] px-4 sm:px-6 lg:px-23">
               <div className=" flex -mb-[5rem] h-[48px]  md:w-full  rounded-[15px] md:h-[118px] bg-[#F9F9FA]">
                 {/* Housing the various cards where flex will be done */}
                 <div className=" flex items-center gap-6 sm:gap-10 lg:gap-19 px-2 mx-auto">
                   <div className=" w-[51px] h-[12.75px]  md:w-[110px] md:h-[38px]">
                     <Image
                       src="/Kiwi.webp"
                       alt="Kiwi-image"
                       width={152}
                       height={38}
                     />
                   </div>
                   <div className="w-[53px] h-[16px]  md:w-[110px] md:h-[48px]">
                     <Image
                       src="/me-direct.webp"
                       alt="Direct-image"
                       width={161}
                       height={48}
                     />
                   </div>
                   <div className="w-[42.37] h-[16.7px] md:w-[100] md:h-[48px]">
                     <Image
                       src="/Cash-image.webp"
                       alt="Cash-image"
                       width={122.88}
                       height={48}
                     />
                   </div>
                   <div className=" w-[42px] h-[8px] md:w-[84px] md:h-[16px]">
                     <Image
                       src="/Booking.webp"
                       alt="booking-image"
                       width={84}
                       height={16}
                     />
                   </div>
                   <div className=" w-[50.9px] h-[16.7px] md:w-[84] md:h-[16px]">
                     <Image
                       src="/rails.webp"
                       alt="/rails.webp"
                       width={84}
                       height={16}
                     />
                   </div>
                 </div>
               </div>
             </div>
    </section>
  );
}
