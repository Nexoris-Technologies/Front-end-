import Image from "next/image";

export default function CustomBenefits() {
  return (
    <section className="">
      {/* Housing the phone Icon, h3 and the cards */}
      <div className="flex flex-col items-center gap-[60px] py-[3rem] lg:pt-[4rem] ">
        {/* Housing the Benefit text */}
        <div>
          <h3 className="font-bold text-[24px] lg:text-[40px] text-center">
            Key Benefits at a Glance
          </h3>
        </div>
        {/* Housing the four cards */}
        <div className="flex flex-col lg:flex-row gap-[24px]  ">
          {/* First card */}
          <div className="flex flex-col gap-[10px] bg-[#FFFFFF] shadow-2xl p-4 border-t-[#543CDA] rounded-tl-[16px] rounded-tr-[16px]  border-t-12">
            <Image src="/Number 1.svg" alt="Number 1" width={40} height={40} />
            <p className="text-[18px] w-[330px] lg:w-[252px]">
              Custom-Fit to Your Workflow: Built specifically around your
              workflows, not the other way around.
            </p>
          </div>
          {/* Secondcard */}
          <div className="flex flex-col gap-[10px] bg-[#FFFFFF] shadow-2xl p-4 border-t-[#543CDA] rounded-tl-[16px] rounded-tr-[16px]  border-t-12">
            <Image src="/Number 2.svg" alt="Number 1" width={40} height={40} />
            <p className="text-[18px] w-[330px] lg:w-[240px]">
              Designed to Scale with You: Flexible foundations that grow as your
              team, data, and needs evolve.
            </p>
          </div>
          {/* Third card */}
          <div className="flex flex-col gap-[10px] bg-[#FFFFFF] shadow-2xl p-4 border-t-[#543CDA] rounded-tl-[16px] rounded-tr-[16px]  border-t-12">
            <Image src="/Number 3.svg" alt="Number 1" width={40} height={40} />
            <p className="text-[18px] w-[330px] lg:w-[252px]">
              Seamless System Integration: We connect your CRMs, ERPs, APIs, and
              third-party platforms securely.
            </p>
          </div>
          {/* Fourth card */}
          <div className="flex flex-col gap-[10px] bg-[#FFFFFF] shadow-2xl p-4 border-t-[#543CDA] rounded-tl-[16px] rounded-tr-[16px]  border-t-12">
            <Image src="/Number 4.svg" alt="Number 1" width={40} height={40} />
            <p className="text-[18px] w-[340px] lg:w-[250px]">
              Built for Operational Impact: Reduce manual processes, automate
              repetitive tasks, and uncover new efficiencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
