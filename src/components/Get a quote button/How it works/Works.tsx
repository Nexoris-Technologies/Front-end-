import Image from "next/image";

export default function Works() {
  return (
    <section>
      {/* Housing How it works and the cards */}

      <div className="flex flex-col items-center justify-center gap-[10px] md:gap-[40px] my-[5rem] mt-[8rem]  max-w-[1224px] container mx-auto">
        <h3 className="text-[24px] md:text-[40px] font-bold tracking-wide">
          How It Works
        </h3>

        {/* housing the cards */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-[32px] md:gap-[4rem] ">
          {/* first card */}
          <div className="w-[288px] h-[246px] gap-[24px] flex flex-col justify-center items-center">
            <Image src="/Number 1.svg" alt="Number 1" width={60} height={60} />
            <div className="flex flex-col gap-[20px] md:gap-[40px] justify-center items-center">
              <h3 className="text-[18px] md:text-[24px] font-semibold text-center">
                Initial Review
              </h3>

              <p className="w-[250px] text-[14px] md:text-[16px] text-center">
                We assess your goals, budget, and timeline to perfectly
                understand what you’re building, and why.
              </p>
            </div>
          </div>

          {/* second card */}
          <div className="w-[288px] h-[246px] gap-[24px] flex flex-col justify-center items-center">
            <Image
              src="/Number 2.svg"
              alt="Number 2"
              width={60}
              height={60}
              className="mb-2"
            />
            <div className="flex flex-col  gap-[20px] md:gap-[40px] justify-center items-center">
              <h3 className="text-[18px] md:text-[24px] font-semibold text-center">
                Tailored Proposal
              </h3>

              <p className="w-[260px] text-[14px] md:text-[16px] text-center">
                You'll receive a clear, itemized quote based on your
                requirements. No vague estimates. No hidden fees.
              </p>
            </div>
          </div>

          {/* Third card */}
          <div className="w-[288px] h-[246px] gap-[24px] flex flex-col justify-center items-center">
            <Image src="/Number 3.svg" alt="Number 3" width={60} height={60} />
            <div className="flex flex-col gap-[16px] justify-center items-center">
              <h3 className="text-[18px] md:text-[24px] font-semibold text-center">
                Timezone-Friendly Collaboration
              </h3>

              <p className="w-[270px] text-[14px] md:text-[16px] text-center">
                Wherever you're based, we'll align availability to meet you on
                your terms, virtually, and on your schedule.
              </p>
            </div>
          </div>
          <div>
            {/* fourth card */}
            <div className="w-[288px] h-[246px] gap-[24px] flex flex-col justify-center items-center">
              <Image
                src="/Number 4.svg"
                alt="Number 4"
                width={60}
                height={60}
              />
              <div className="flex flex-col  gap-[20px] md:gap-[35px] justify-center items-center">
                <h3 className="text-[18px] md:text-[24px] font-semibold text-center">
                  Kickoff & Onbording
                </h3>

                <p className="w-[270px] text-[14px] md:text-[16px] mt-2 text-center">
                  Once approved, we move very fast with the right tools,
                  workflows, and people in place from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
