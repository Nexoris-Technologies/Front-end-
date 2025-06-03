import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function ProblemWeSolve() {
  return (
    <section className="py-[1rem] lg:py-[7rem]">
      <h3 className="text-[24px] md:text-[40px] font-bold text-center mb-[4rem]">
        Problem We Solve
      </h3>

      {/* DESKTOP STATIC VIEW: Visible from md and up */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[24px] md:pl-2 mx-auto max-w-[1224px]">
        {/* First card */}
        <div className="flex flex-col gap-[16px] p-[8px] w-[260px] md:w-[225px] border-t-[18px] rounded-tl-[16px] rounded-tr-[16px] border-t-[#543CDA] shadow-2xl">
          <Image src="/Speaker icon.svg" alt="speaker" width={32} height={32} />
          <p className="text-[16px] md:text-[18px]">
            Our team wastes hours on manual steps that should be automated.
          </p>
        </div>
        {/* Second card */}
        <div className="flex flex-col gap-[16px] p-[8px] w-[260px] md:w-[225px] border-t-[18px] rounded-tl-[16px] rounded-tr-[16px] border-t-[#FD9300] shadow-2xl">
          <Image src="/Speaker icon.svg" alt="speaker" width={32} height={32} />
          <p className="text-[16px] md:text-[18px]">
            Off-the-shelf software doesn’t fit our needs and keeps breaking
            things.
          </p>
        </div>
        {/* Third card */}
        <div className="flex flex-col gap-[16px] p-[8px] w-[260px] md:w-[225px] border-t-[18px] rounded-tl-[16px] rounded-tr-[16px] border-t-[#54C300] shadow-2xl">
          <Image src="/Speaker icon.svg" alt="speaker" width={32} height={32} />
          <p className="text-[16px] md:text-[18px]">
            We need to centralize operations across departments and systems.
          </p>
        </div>
        {/* Fourth card */}
        <div className="flex flex-col gap-[16px] p-[8px] w-[260px] md:w-[225px] border-t-[18px] rounded-tl-[16px] rounded-tr-[16px] border-t-[#0059F1] shadow-2xl">
          <Image src="/Speaker icon.svg" alt="speaker" width={32} height={32} />
          <p className="text-[16px] md:text-[18px]">
            There’s no real visibility into our workflows, data, or timelines.
          </p>
        </div>
        {/* Fifth card */}
        <div className="flex flex-col gap-[16px] p-[8px] w-[260px] md:w-[225px] border-t-[18px] rounded-tl-[16px] rounded-tr-[16px] border-t-[#B901F6] shadow-2xl">
          <Image src="/Speaker icon.svg" alt="speaker" width={32} height={32} />
          <p className="text-[16px] md:text-[18px]">
            We want to launch a new platform, but lack the dev team to execute
            it.
          </p>
        </div>
      </div>

      {/* MOBILE MARQUEE VIEW: Only visible below md */}
      <div className="block md:hidden mt-[2rem]">
        <Marquee>
          <div className="flex gap-[16px] px-4">
            {/* First card */}
            <div className="flex flex-col gap-[16px] p-[8px] w-[260px] border-t-[18px] rounded-tl-[16px] rounded-tr-[16px] border-t-[#543CDA] shadow-2xl">
              <Image
                src="/Speaker icon.svg"
                alt="speaker"
                width={32}
                height={32}
              />
              <p className="text-[16px]">
                Our team wastes hours on manual steps that should be automated.
              </p>
            </div>
            {/* Second card */}
            <div className="flex flex-col gap-[16px] p-[8px] w-[260px] border-t-[18px] rounded-tl-[16px] rounded-tr-[16px] border-t-[#FD9300] shadow-2xl">
              <Image
                src="/Speaker icon.svg"
                alt="speaker"
                width={32}
                height={32}
              />
              <p className="text-[16px]">
                Off-the-shelf software doesn’t fit our needs and keeps breaking
                things.
              </p>
            </div>
            {/* Third card */}
            <div className="flex flex-col gap-[16px] p-[8px] w-[260px] border-t-[18px] rounded-tl-[16px] rounded-tr-[16px] border-t-[#54C300] shadow-2xl">
              <Image
                src="/Speaker icon.svg"
                alt="speaker"
                width={32}
                height={32}
              />
              <p className="text-[16px]">
                We need to centralize operations across departments and systems.
              </p>
            </div>
            {/* Fourth card */}
            <div className="flex flex-col gap-[16px] p-[8px] w-[260px] border-t-[18px] rounded-tl-[16px] rounded-tr-[16px] border-t-[#0059F1] shadow-2xl">
              <Image
                src="/Speaker icon.svg"
                alt="speaker"
                width={32}
                height={32}
              />
              <p className="text-[16px]">
                There’s no real visibility into our workflows, data, or
                timelines.
              </p>
            </div>
            {/* Fifth card */}
            <div className="flex flex-col gap-[16px] p-[8px] w-[260px] border-t-[18px] rounded-tl-[16px] rounded-tr-[16px] border-t-[#B901F6] shadow-2xl">
              <Image
                src="/Speaker icon.svg"
                alt="speaker"
                width={32}
                height={32}
              />
              <p className="text-[16px]">
                We want to launch a new platform, but lack the dev team to
                execute it.
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
