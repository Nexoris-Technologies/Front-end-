import Image from "next/image";

export default function CustomProcess() {
  return (
    <section>
      {/* Overall */}
      <div className="flex flex-col gap-[60px] py-[5rem]">
        <h3 className="text-[24px] md:text-[40px] font-bold text-center ">
          Our Process
        </h3>
        {/* housing the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] md:gap-[24px] mx-auto max-w-[1224px] px-4">
          {/* first card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#543CDA]/40 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/1 dash.svg" alt="1 dash" width={360} height={60} />
            </div>

            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h6 className="text-[24px] font-bold">Understand the Mission</h6>
              <p className="text-[16px] w-[300px]">
                We immerse ourselves in your business, pain points, and process
                gaps.
              </p>
            </div>
          </div>
          {/* second card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#543CDA]/40 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/2 dash.svg" alt="1 dash" width={360} height={60} />
            </div>
            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h6 className="text-[24px] font-bold">Map the Solution</h6>
              <p className="text-[16px] w-[300px]">
                Together we define system requirements, roles, integrations, and
                success metrics.
              </p>
            </div>
          </div>
          {/* third card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#543CDA]/40 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/3 dash.svg" alt="1 dash" width={360} height={60} />
            </div>
            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h6 className="text-[24px] font-bold">Prototype and Validate</h6>
              <p className="text-[16px] w-[300px]">
                We create clickable flows to stress-test ideas before investing
                in full dev.
              </p>
            </div>
          </div>
          {/* fourth card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#543CDA]/40 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/4 dash.svg" alt="1 dash" width={360} height={60} />
            </div>
            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h6 className="text-[24px] font-bold">Develop and Integrate</h6>
              <p className="text-[16px] w-[300px]">
                Our team builds modular, secure systems and connects your data
                sources and tools.
              </p>
            </div>
          </div>
          {/* fifth card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#543CDA]/40 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/5 dash.svg" alt="1 dash" width={360} height={60} />
            </div>
            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h6 className="text-[24px] font-bold">Test for Real-World Use</h6>
              <p className="text-[16px] w-[300px]">
                From permission handling to edge-case flows, we validate across
                user roles.
              </p>
            </div>
          </div>
          {/* first card */}
          <div className="flex flex-col border-[1px] bg-[#543CDA]/10 border-[#543CDA]/40 py-[32px] px-[16px] rounded-[16px] w-[343px] md:w-[392px] gap-[24px]">
            <div className="w-[311px] h-[40px] md:w-[360px] md:h-[60px]">
              <Image src="/6 dash.svg" alt="1 dash" width={360} height={60} />
            </div>
            {/* Housing h6 and p-tag */}
            <div className="flex flex-col gap-[24px]">
              <h6 className="text-[24px] font-bold">Launch & Support</h6>
              <p className="text-[16px] w-[300px]">
                We deploy your product, train your team, and stay on to support,
                iterate, and improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
