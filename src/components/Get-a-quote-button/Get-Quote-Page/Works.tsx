import Image from "next/image";

export default function Works() {
  return (
    <section className="">
      {/* Housing How it works and the cards */}

      <div className="flex flex-col  gap-4 md:gap-12 py-10 lg:py-14  ">
        <h3 className="text-xl md:text-4xl font-bold tracking-wide text-center">
          How It Works
        </h3>

        {/* housing the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6  mx-auto md:mx-0 px-4">
          {/* first card */}
          <div className="gap-[24px] flex flex-col justify-center items-center">
            <Image src="/Number 1.svg" alt="Number 1" width={60} height={60} />
            <div className="flex flex-col gap-[20px] md:gap-[20px] justify-center items-center">
              <h3 className="text-[18px] md:text-[24px] font-semibold text-center">
                Initial Review
              </h3>

              <p className=" max-w-sm text-[14px] md:text-[16px] text-center">
                We assess your goals, budget, and timeline to perfectly
                understand what you&apos;re building, and why.
              </p>
            </div>
          </div>

          {/* second card */}
          <div className=" gap-[24px] flex flex-col justify-center items-center">
            <Image
              src="/Number 2.svg"
              alt="Number 2"
              width={60}
              height={60}
              className="mb-2"
            />
            <div className="flex flex-col  gap-[20px] md:gap-[20px] justify-center items-center">
              <h3 className="text-[18px] md:text-[24px] font-semibold text-center">
                Tailored Proposal
              </h3>

              <p className="max-w-sm text-[14px] md:text-[16px] text-center">
                You&apos;ll receive a clear, itemized quote based on your
                requirements. No vague estimates. No hidden fees.
              </p>
            </div>
          </div>

          {/* Third card */}
          <div className=" gap-[24px] flex flex-col justify-center items-center">
            <Image src="/Number 3.svg" alt="Number 3" width={60} height={60} />
            <div className="flex flex-col gap-[20px] justify-center items-center">
              <h3 className="text-[18px] md:text-[24px] font-semibold text-center">
                Timezone-Friendly Collaboration
              </h3>

              <p className="max-w-sm text-[14px] md:text-[16px] text-center">
                Wherever you&apos;re based, we&apos;ll align availability to
                meet you on your terms, virtually, and on your schedule.
              </p>
            </div>
          </div>
          <div>
            {/* fourth card */}
            <div className=" gap-[24px] flex flex-col justify-center items-center">
              <Image
                src="/Number 4.svg"
                alt="Number 4"
                width={60}
                height={60}
              />
              <div className="flex flex-col  gap-[20px] md:gap-[15px] justify-center items-center">
                <h3 className="text-[18px] md:text-[24px] font-semibold text-center">
                  Kickoff & Onbording
                </h3>

                <p className=" text-[14px] md:text-[16px] mt-2 text-center">
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
