import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

export default function Help() {
  return (
    <section>
      {/* Housing who we help text, and all and cards */}
      <div className="flex flex-col gap-[40px] py-10 lg:py-[6rem]">
        <div>
          <h3 className="text-[32px] lg:text-[48px] font-bold text-center">
            Who We Help
          </h3>
        </div>

        {/* Housing the main Nexoris Solution and the cards */}
        <div className="flex flex-col mx-auto">
          {/* Housing the NEXORIS SOLUTION */}
          <div className="flex flex-col items-center gap-[12px] p-3 lg:p-5 rounded-[12px] lg:rounded-[24px] bg-[#543CDA] w-[339px]">
            <h3 className="text-[24px] lg:text-[32px] font-bold text-[#FFFFFF]">
              Nexoris Solutions
            </h3>
            <h6 className="text-[16px] text-center text-[#FFFFFF]">
              Custom Software
            </h6>
          </div>
          {/* The border */}
          <div className="h-0.5 mx-auto rotate-90 mt-[3rem]  w-[8rem] bg-[#543CDA]/70"></div>
        </div>

        {/* Cards */}
        {/* Housing all cards desktop */}
        <div className=" hidden lg:flex lg:flex-wrap justify-center gap-[24px] mt-5 mx-auto lg:w-[1224px]">
          {/* Housing first card */}
          <div className="relative flex gap-6 w-[253px] lg:w-[392px] border-[1px] border-[#D9D9D9] py-[24px] px-[40px] rounded-[8px]  ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#543CDA] rounded-full"></div>
            <span className="text-[#543CDA] ">
              <GoDotFill size={24} />
            </span>
            <p className="text-[16px] lg:text-[18px]">
              Operations teams drowning in spreadsheets and manual workflows
            </p>
          </div>
          {/* Housing first card */}
          <div className="relative flex gap-6 w-[253px] lg:w-[392px] border-[1px] border-[#D9D9D9] py-[24px] px-[40px] rounded-[8px] ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#543CDA] rounded-full"></div>
            <span className="text-[#543CDA] w-[16px] h-[16px]">
              <GoDotFill size={24} />
            </span>
            <p className="text-[16px] lg:text-[18px]">
              Mid-sized businesses with fragmented tools and disconnected
              systems
            </p>
          </div>
          {/* Housing first card */}
          <div className="relative flex gap-6 w-[253px] lg:w-[392px] border-[1px] border-[#D9D9D9] py-[24px] px-[40px] rounded-[8px] ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#543CDA] rounded-full"></div>
            <span className="text-[#543CDA] w-[16px] h-[16px]">
              <GoDotFill size={24} />
            </span>
            <p className="text-[16px] lg:text-[18px]">
              Product owners struggling with rigid off-the-shelf software
            </p>
          </div>
          {/* Housing first card */}
          <div className="relative flex gap-6 w-[253px] lg:w-[392px] border-[1px] border-[#D9D9D9] py-[24px] px-[40px] rounded-[8px] ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#543CDA] rounded-full"></div>
            <span className="text-[#543CDA] w-[16px] h-[16px]">
              <GoDotFill size={24} />
            </span>
            <p className="text-[16px] lg:text-[18px]">
              CEOs ready to digitize core processes and create a competitive
              edge
            </p>
          </div>
          {/* Housing first card */}
          <div className="relative flex gap-6 w-[253px] lg:w-[392px] border-[1px] border-[#D9D9D9] py-[24px] px-[40px] rounded-[8px] ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#543CDA] rounded-full"></div>
            <span className="text-[#543CDA] w-[16px] h-[16px]">
              <GoDotFill size={24} />
            </span>
            <p className="text-[16px] lg:text-[18px]">
              CTOs looking for a trusted build partner to execute a custom
              vision
            </p>
          </div>
        </div>

        {/* housing the cards for MOBILE */}
        <div className="lg:hidden  w-full overflow-hidden">
          <Marquee>
            <div
              className="flex lg:flex-wrap justify-center gap-[40px] mt-7
             mx-auto lg:w-[1224px]"
            >
              {/* Housing first card */}
              <div className="relative flex gap-6 w-[253px] lg:w-[392px] border-[1px] border-[#D9D9D9] py-[24px] px-5 rounded-[8px]  ">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#543CDA] rounded-full"></div>
                <span className="text-[#543CDA] ">
                  <GoDotFill size={24} />
                </span>
                <p className="text-[16px] lg:text-[18px]">
                  Operations teams drowning in spreadsheets and manual workflows
                </p>
              </div>
              {/* Housing first card */}
              <div className="relative flex gap-6 w-[253px] lg:w-[392px] border-[1px] border-[#D9D9D9] py-[24px] px-5 rounded-[8px] ">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#543CDA] rounded-full"></div>
                <span className="text-[#543CDA] w-[16px] h-[16px]">
                  <GoDotFill size={24} />
                </span>
                <p className="text-[16px] lg:text-[18px]">
                  Mid-sized businesses with fragmented tools and disconnected
                  systems
                </p>
              </div>
              {/* Housing first card */}
              <div className="relative flex gap-6 w-[253px] lg:w-[392px] border-[1px] border-[#D9D9D9] py-[24px] px-5 rounded-[8px] ">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#543CDA] rounded-full"></div>
                <span className="text-[#543CDA] w-[16px] h-[16px]">
                  <GoDotFill size={24} />
                </span>
                <p className="text-[16px] lg:text-[18px]">
                  Product owners struggling with rigid off-the-shelf software
                </p>
              </div>
              {/* Housing first card */}
              <div className="relative flex gap-6 w-[253px] lg:w-[392px] border-[1px] border-[#D9D9D9] py-[24px] px-5 rounded-[8px] ">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#543CDA] rounded-full"></div>
                <span className="text-[#543CDA] w-[16px] h-[16px]">
                  <GoDotFill size={24} />
                </span>
                <p className="text-[16px] lg:text-[18px]">
                  CEOs ready to digitize core processes and create a competitive
                  edge
                </p>
              </div>
              {/* Housing first card */}
              <div className="relative flex gap-6 w-[253px] lg:w-[392px] border-[1px] border-[#D9D9D9] py-[24px] px-[40px] rounded-[8px] ">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#543CDA] rounded-full"></div>
                <span className="text-[#543CDA] w-[16px] h-[16px]">
                  <GoDotFill size={24} />
                </span>
                <p className="text-[16px] lg:text-[18px]">
                  CTOs looking for a trusted build partner to execute a custom
                  vision
                </p>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
