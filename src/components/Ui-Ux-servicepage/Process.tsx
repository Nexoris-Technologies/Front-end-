import Image from "next/image";

export default function OurProcess() {
  return (
    <section className="from-[#543CDA] bg-gradient-to-b">
      {/* Housing all Process section */}
      <div className="flex flex-col gap-[40px] py-[3rem] lg:py-[6rem]">
        <h3 className="text-[24px] md:text-[40px] font-bold text-center">
          Our Process
        </h3>

        {/* Housing all cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-[1224px] items-center mx-auto">
          {/* First card (col 1) */}
          <div className="flex flex-col items-center gap-[24px] w-[320px] ">
            <div className="flex items-center justify-center flex-col gap-4 bg-white rounded-2xl p-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
                <h1 className="font-bold text-3xl">1</h1>
              </div>
              <h3 className="font-bold text-xl">Understand the User</h3>
              <p className="text-center">
                 We talk to real users, audit current flows, and find what’s not
                working.
              </p>
            </div>
          </div>

          {/* Arrow after first card */}
          <div className="flex justify-center items-center w-auto lg:ml-20">
            <Image
              src="/Group 422.svg"
              alt="Arrow"
              width={100}
              height={100}
              className="rotate-90 lg:rotate-0"
            />
          </div>

          {/* Second card  */}
          <div className="flex flex-col items-center gap-[24px] w-[320px] ">
            <div className="flex items-center justify-center flex-col gap-4 bg-white rounded-2xl p-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
                <h1 className="font-bold text-3xl">2</h1>
              </div>
              <h3 className="font-bold text-xl">Define the Journey</h3>
              <p className="text-center">
                 We map user paths and design information architecture that
                supports decision-making.
              </p>
            </div>
          </div>

          {/* Arrow after second card  */}
          <div className="flex justify-center items-center w-auto lg:ml-20">
            <Image
              src="/Group 422.svg"
              alt="Arrow"
              width={100}
              height={100}
              className="rotate-90 lg:rotate-0"
            />
          </div>

          {/* Third card  */}
          <div className="flex flex-col items-center gap-[24px] w-[320px] ">
            <div className="flex items-center justify-center flex-col gap-4 bg-white rounded-2xl p-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
                <h1 className="font-bold text-3xl">3</h1>
              </div>
              <h3 className="font-bold text-xl">Sketch, Test, Refine</h3>
              <p className="text-center">
                 Rapid wireframes evolve into high-fidelity screens with user
                feedback baked in.
              </p>
            </div>
          </div>

          {/* empty grid */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>

          {/* Arrow down under third card  */}
          <div className="flex justify-center items-center w-auto lg:ml-20">
            <Image
              src="/Group 492.svg"
              alt="Arrow"
              width={40}
              height={40}
              className="text-end rotate-0"
            />
          </div>

          {/* fourth card */}

          <div className="flex flex-col items-center gap-[24px] w-[320px] ">
            <div className="flex items-center justify-center flex-col gap-4 bg-white rounded-2xl p-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
                <h1 className="font-bold text-3xl">4</h1>
              </div>
              <h3 className="font-bold text-xl">Launch and Learn</h3>
              <p className="text-center">
                 Post-launch, we gather usage insights and iterate to improve
                retention and conversion.
              </p>
            </div>
          </div>

          {/* Arrow after first card */}
          <div className="flex justify-center items-center w-auto lg:ml-20">
            <Image
              src="/Group 491.svg"
              alt="Arrow"
              width={100}
              height={100}
              className="-rotate-90 lg:rotate-0"
            />
          </div>

          {/* fifth card */}

          <div className="flex flex-col items-center gap-[24px] w-[320px] ">
            <div className="flex items-center justify-center flex-col gap-4 bg-white rounded-2xl p-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
                <h1 className="font-bold text-3xl">5</h1>
              </div>
              <h3 className="font-bold text-xl">Collaborate with Devs:</h3>
              <p className="text-center">
                Everything’s annotated and export-ready, no design lost in
                translation.
              </p>
            </div>
          </div>

          {/* Arrow after first card */}
          <div className="flex justify-center items-center w-auto lg:ml-20">
            <Image
              src="/Group 491.svg"
              alt="Arrow"
              width={100}
              height={100}
              className="-rotate-90 lg:rotate-0"
            />
          </div>

          {/* sixth card */}

          <div className="flex flex-col items-center gap-[24px] w-[320px] ">
            <div className="flex items-center justify-center flex-col gap-4 bg-white rounded-2xl p-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
                <h1 className="font-bold text-3xl">6</h1>
              </div>
              <h3 className="font-bold text-xl">Build the System</h3>
              <p className="text-center">
                Components, states, and styles are organized into scalable
                libraries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
