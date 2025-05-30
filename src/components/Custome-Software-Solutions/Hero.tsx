import Image from "next/image";
import Button from "../Button/Button";

export default function CustomeHeroPage() {
  return (
    <section>
      {/* Housing heropage all */}
      <div className="flex flex-col mt-[8rem] md:mt-[12rem] py-[2rem] lg:py-[3rem] gap-[40px] lg:gap-[10px] ">
        {/* Housing the custom software, the header text, the paragraph text and button  */}
        <div className="flex flex-col justify-center items-center mx-auto gap-[32px]">
          <div className="w-[248px] rounded-[20px] py-[4px] px-[24px] flex  gap-[10px]  bg-[#0059F1]/10 ">
            <h3 className="text-[14px] lg:text-[16px] text-[#0059F1]">
              Custom Software Solution
            </h3>
          </div>
          {/* Build software heading text */}
          <div className="w-[343px] lg:w-[900px]">
            <h1 className=" text-[32px] lg:text-[56px]  font-bold text-center ">
              Build Software That Solves Your Real Business Problems
            </h1>
          </div>
          <div className="">
            <p className="text-[16px] md:text-[18px] text-center w-[300px] lg:w-[800px]">
              Nexoris designs and builds custom platforms, internal tools, and
              enterprise systems that automate workflows, eliminate bottlenecks,
              and move your business forward — on your terms.
            </p>
          </div>
          <div className=" flex justify-center items-center gap-2 bg-[#543CDA] text-[#FFFFFF] lg:py-[14px] md:py-[21.5px] px-[32px] rounded-[8px] w-[275px] lg:w-[340px]">
            <Button className="text-[14px] lg:text-[18px]">
              Let&apos;s Build Your Solution
            </Button>
            <span>
              <Image
                src="/Arrow right.svg"
                alt="Arrow right"
                width={16}
                height={16}
              />
            </span>
          </div>
        </div>
        {/* Housing the hero image */}
        <div className="rounded-[24px] flex mx-auto w-[344px] h-[111px] md:w-[1224px] md:h-[400px] ">
          <Image
            src="/Custom-hero image.webp"
            alt=""
            width={1224}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
