import Image from "next/image";

export default function SeoHelp() {
  return (
    <section className="bg-[#EAE8F7] w-full  ">
      {/* Housing all */}
      <div className="flex flex-col justify-center items-center gap-[3rem] mx-auto container py-8 lg:py-[5rem]">
        <h3 className="text-center text-[22px] md:text-[40px] text-[#543CDA] font-extrabold">
          Who We Help
        </h3>
        {/* Housing the check image and the textes */}
        <div className=" flex flex-col items-center gap-15 lg:gap-[8rem] lg:flex-row  px-4 ">
          {/* Housing the main image image and p-text */}
          <div className="flex mt-[4rem] lg:mt-[.2rem]  gap-[1rem] lg:gap-5   order-2 lg:order-1">
            <div className="w-[56px] h-[375px] md:w-[85px] md:h-[636px]">
              <Image
                src="/Seohelp check image.svg"
                alt="Seo check image"
                width={86}
                height={636}
              />
            </div>
            <div className="flex flex-col  justify-center gap-[2.8rem] mt-[.7rem] md:gap-[4.8rem]">
              <p className="text-[13px] md:text-[20px] w-[270px] md:w-[402px]">
                Startups launching new websites or products and need traffic.
              </p>
              <p className="text-[13px] md:text-[20px] w-[270px] md:w-[402px]">
                Marketers overwhelmed by outdated content, poor rankings, or
                unclear strategy.
              </p>
              <p className="text-[13px] md:text-[20px] w-[270px] md:w-[420px]">
                Agencies seeking white-label SEO and content delivery without
                micro-managing freelancers.
              </p>
              <p className="text-[13px] md:text-[20px] w-[270px] md:w-[402px]">
                Founders struggling with visibility despite having a great
                product or offer
              </p>
              <p className="text-[13px] md:text-[20px] w-[270px] md:w-[402px]">
                Teams with broken content workflows or poor search engine
                performance
              </p>
            </div>
          </div>

          {/* Who er help image */}
          <div className=" w-[343px] h-[280px] md:w-[529px] md:h-[540px]  order-1 lg:order-2">
            <Image
              src="/shelp.webp"
              alt="Seo Help image"
              width={529}
              height={540}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
