import Image from "next/image";
import { LuCircleCheckBig } from "react-icons/lu";

export default function SeoHelp() {
  return (
    <section className="bg-[#EAE8F7] w-full">
      {/* Housing all */}
      <div className="flex flex-col  gap-10  py-8 lg:py-[5rem] ">
        <h3 className="text-center text-[22px] md:text-[40px] text-[#543CDA] font-extrabold">
          Who We Help
        </h3>
        {/* Housing the check image and the textes */}
        <div className=" flex flex-col gap-10 lg:gap-20 items-center xl:flex-row px-4 sm:px-14 lg:px-24  ">
          {/* Housing the main image image and p-text */}

          <div className="flex flex-col gap-[2.8rem] mt-[.7rem] md:gap-20 xl:w-1/2 ">
            <p className="text-[13px] md:text-[18px] flex  items-center gap-3">
              <span className="text-[30px] text-violet-700">
                <LuCircleCheckBig />
              </span>
              Startups launching new websites or products and need traffic.
            </p>
            <p className="text-[13px] md:text-[18px] flex items-center gap-3">
              <span className="text-[30px] text-violet-700">
                <LuCircleCheckBig />
              </span>
              Marketers overwhelmed by outdated content, poor rankings, or
              unclear strategy.
            </p>
            <p className="text-[13px] md:text-[18px]  flex items-center gap-3">
              <span className="text-[30px] text-violet-700">
                <LuCircleCheckBig />
              </span>
              Agencies seeking white-label SEO and content delivery without
              micro-managing freelancers.
            </p>
            <p className="text-[13px] md:text-[18px]  flex items-center gap-3">
              <span className="text-[30px] text-violet-700">
                <LuCircleCheckBig />
              </span>
              Founders struggling with visibility despite having a great product
              or offer
            </p>
            <p className="text-[13px] md:text-[18px]  flex items-center gap-3">
              <span className="text-[30px] text-violet-700">
                <LuCircleCheckBig />
              </span>
              Teams with broken content workflows or poor search engine
              performance
            </p>
          </div>

          {/* Who er help image */}
          <div className=" w-full sm:h-[435px] lg:h-[540px] xl:w-1/2  order-1 lg:order-2 relative overflow-hidden rounded-xl ">
            <Image
              src="/shelp.webp"
              alt="Seo Help image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
