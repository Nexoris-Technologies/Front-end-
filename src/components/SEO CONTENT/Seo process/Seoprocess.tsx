import Image from "next/image";

export default function SeoProcess() {
  return (
    <section className="bg-[#EAE8F7] rounded-[50px]">
      {/* Housing all section */}
      <div className="flex flex-col py-[3rem] mt-[4rem] md:py-[6rem] gap-[50px] ">
        <h2 className="text-[22px] md:text-[40px] font-extrabold text-center">
          Our Process
        </h2>

        {/* Housing the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto">
          {/* Housing the first card */}
          <div className="flex flex-col items-center gap-[22px] py-[36px] rounded-[10px] border-[1px] border-[#543CDA] w-[255px] md:w-[358px]">
            <div className="w-[81px] h-[75px] md:w-[101px] md:h-[100px]">
              <Image
                src="/Blue Circle icon.svg"
                alt="blue icon"
                width={101}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center gap-[11px] md:gap-[14px]">
              <h3 className="text-[#543CDA] w-[200px] md:w-full text-[16px] md:text-[25px] font-semibold text-center">
                Audit What’s Holding You Back
              </h3>
              <p className="text-[11px] md:text-[15px] text-center w-[230px] md:w-[300px]">
                We begin with a full SEO and content health check to uncover
                what’s hurting your visibility, engagement, and conversions.
              </p>
            </div>
          </div>
          {/* Housing the second card */}
          <div className="flex flex-col items-center gap-[22px] py-[36px] rounded-[10px] border-[1px] border-[#543CDA] w-[255px] md:w-[358px]">
            <div className="w-[81px] h-[75px] md:w-[101px] md:h-[100px]">
              <Image
                src="/Blue Circle icon.svg"
                alt="blue icon"
                width={101}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center gap-[14px]">
              <h3 className="text-[#543CDA] w-[200px] text-[16px] md:text-[25px] font-semibold text-center md:w-[300px]">
                Strategize Around Your Goals
              </h3>
              <p className="text-[11px] md:text-[15px] w-[200px] text-center md:w-[300px]">
                Together, we define the target keywords, search intents, and
                content structure needed to align with your funnel and business
                model
              </p>
            </div>
          </div>
          {/* Housing the  card */}
          <div className="flex flex-col items-center gap-[22px] py-[36px] rounded-[10px] border-[1px] border-[#543CDA] w-[255px] md:w-[358px]">
            <div className="w-[81px] h-[75px] md:w-[101px] md:h-[100px]">
              <Image
                src="/Blue Circle icon.svg"
                alt="blue icon"
                width={101}
                height={100}
              />
            </div>
            <div className=" flex flex-col items-center gap-[15px]">
              <h3 className="text-[#543CDA] text-[16px] w-[200px] md:text-[25px] font-semibold text-center md:w-[300px]">
                Plan Content That Performs
              </h3>
              <p className="text-[11px] w-[200px] md:text-[15px] text-center md:w-[340px]">
                We create a tailored roadmap for landing pages, blog posts,
                pillar content, and more, built to outrank competitors and
                resonate with readers
              </p>
            </div>
          </div>

          {/* Housing the fourth card */}
          <div className="flex flex-col items-center gap-[22px] py-[36px] rounded-[10px] border-[1px] border-[#543CDA] w-[255px] md:w-[358px]">
            <div className="w-[81px] h-[75px] md:w-[101px] md:h-[100px]">
              <Image
                src="/Blue Circle icon.svg"
                alt="blue icon"
                width={101}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center gap-[15px]">
              <h3 className="text-[#543CDA] text-[16px] md:text-[25px] font-semibold text-center w-[200px]">
                Execute with Precision
              </h3>
              <p className=" text-[11px] w-[200px] md:text-[15px] text-center md:w-[290px]">
                Our team writes, optimizes, and publishes content that’s not
                just readable, but clickable, shareable, and valuable
              </p>
            </div>
          </div>
          {/* Housing the fifth card */}
          <div className="flex flex-col items-center gap-[22px] py-[36px] rounded-[10px] border-[1px] border-[#543CDA] w-[255px] md:w-[358px]">
            <div className="w-[81px] h-[75px] md:w-[101px] md:h-[100px]">
              <Image
                src="/Blue Circle icon.svg"
                alt="blue icon"
                width={101}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center gap-[15px]">
              <h3 className="text-[#543CDA] text-[16px] md:text-[25px] font-semibold text-center w-[200px]">
                Track, Learn, and Refine
              </h3>
              <p className="text-[11px] w-[200px] md:text-[15px] text-center md:w-[310px]">
                We monitor rankings, engagement, and conversion metrics,
                continuously refining our approach for long-term SEO momentum
              </p>
            </div>
          </div>
          {/* Housing the sixth card */}
          <div className="flex flex-col items-center gap-[22px] py-[36px] rounded-[10px] border-[1px] border-[#543CDA] w-[255px] md:w-[358px]">
            <div className="w-[81px] h-[75px] md:w-[101px] md:h-[100px]">
              <Image
                src="/Blue Circle icon.svg"
                alt="blue icon"
                width={101}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#543CDA] text-[16px] md:text-[25px] font-semibold text-center">
                Scale What Works
              </h3>
              <p className="text-[11px] w-[200px] md:text-[15px] text-center md:w-[290px]">
                Once we’ve found the winning formula, we scale the strategy.
                More content, more reach, more results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
