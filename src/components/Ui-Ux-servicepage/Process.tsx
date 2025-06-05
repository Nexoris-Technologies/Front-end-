import Image from "next/image";

export default function OurProcess() {
  return (
    <section className="bg-gradient-to-b from-[#543CDA]/60 to-[#543cda]/10 ">
      <div className="flex flex-col gap-10 md:gap-20 py-[3rem] lg:py-[6rem] ">
        <h3
          // style={{ color: "#FFFFFF" }}
          className="text-[24px] md:text-[40px] font-bold text-center"
        >
          Our Process
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[1rem]   mx-auto lg:w-300 px-12">
          {/* First card */}
          <div className="flex flex-col items-center gap-[24px] w-[288px] border-1 border-gray-100 p-3 rounded-xl bg-white ">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image src="/roundp1.svg" alt="Tennis" width={56} height={56} />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Understand the User
            </h6>
            <p className="text-[16px] text-center">
               We talk to real users, audit current flows, and find what’s not
              working.
            </p>
          </div>

          {/* Arrow after first card */}
          <div className="flex justify-center items-center">
            {/* Mobile down arrow */}
            <div className="flex lg:hidden">
              <Image
                src="/Group 492.svg"
                alt="arrow down"
                width={20}
                height={40}
                className="w-[40px] h-[80px] lg:w-[20px] lg:h-[40px]"
              />
            </div>
            {/* Desktop horizontal arrow */}
            <div className="hidden lg:flex">
              <Image
                src="/Group 422.svg"
                alt="arrow right"
                width={76}
                height={40}
              />
            </div>
          </div>

          {/* Second card */}
          <div className="flex flex-col items-center gap-[24px] w-[288px] border-1 border-gray-100 p-3 rounded-xl bg-white">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image src="/roundp2.svg" alt="Tennis" width={56} height={56} />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Define the Journey
            </h6>
            <p className="text-[14px] md:text-[16px] text-center w-[243px]">
              We map user paths and design information architecture that
              supports decision-making.
            </p>
          </div>

          {/* Arrow after second card */}
          <div className="flex justify-center items-center">
            <div className="flex lg:hidden">
              <Image
                src="/Group 492.svg"
                alt="arrow down"
                width={20}
                height={40}
                className="w-[40px] h-[80px] lg:w-[20px] lg:h-[40px]"
              />
            </div>
            <div className="hidden lg:flex">
              <Image
                src="/Group 422.svg"
                alt="arrow right"
                width={76}
                height={40}
              />
            </div>
          </div>

          {/* Third card */}
          <div className="flex flex-col items-center gap-[24px] w-[288px] border-1 border-gray-100 p-3 rounded-xl bg-white">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image src="/roundp3.svg" alt="Tennis" width={56} height={56} />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Sketch, Test, Refine
            </h6>
            <p className="text-[14px] md:text-[16px] text-center w-[243px]">
              Rapid wireframes evolve into high-fidelity screens with user
              feedback baked in.
            </p>
          </div>
          {/* for mobile view alone */}
          <div className=" lg:hidden justify-center ml-29 lg:pt-4 lg:ml-[3rem] lg:py-4">
            <Image
              src="/Group 492.svg"
              alt="Long arrow down"
              width={20}
              height={40}
              className="w-[40px] h-[80px] lg:w-[20px] lg:h-[40px]"
            />
          </div>
          {/* Empty cells for layout alignment */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>

          {/* Arrow down under third card */}
          <div className=" hidden  lg:flex justify-center lg:pt-4 lg:ml-[3rem] lg:py-4  ">
            <Image
              src="/Group 492.svg"
              alt="Long arrow down"
              width={30}
              height={30}
            />
          </div>

          {/* Fourth card */}
          <div className="flex flex-col  items-center gap-[24px] w-[288px] border-1 border-gray-100 p-3 rounded-xl bg-white">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image src="/roundp4.svg" alt="Tennis" width={56} height={56} />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Build the system
            </h6>
            <p className="text-[14px] md:text-[16px] text-center w-[243px]">
              Components, states, and styles are organized into scalable
              libraries.
            </p>
          </div>
          <div className="flex ml-29 lg:hidden">
            <Image
              src="/Group 492.svg"
              alt="arrow down"
              width={20}
              height={40}
              className="w-[40px] h-[80px] lg:w-[20px] lg:h-[40px]"
            />
          </div>

          {/* Arrow after fourth card */}
          <div className="flex justify-center items-center">
            <div className="hidden order- lg:flex">
              <Image
                src="/Group 491.svg"
                alt="arrow left"
                width={76}
                height={40}
              />
            </div>
          </div>

          {/* Fifth card */}
          <div className="flex flex-col items-center gap-[24px] w-[288px] col-span-1 border-1 border-gray-100 p-3 rounded-xl bg-white">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image src="/roundp5.svg" alt="Tennis" width={56} height={56} />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Collaborate with Devs
            </h6>
            <p className="text-[14px] md:text-[16px] text-center w-[263px]">
               Everything’s annotated and export-ready, no design lost in
              translation.
            </p>
          </div>
          <div className="flex ml-29 lg:hidden">
            <Image
              src="/Group 492.svg"
              alt="arrow down"
              width={20}
              height={40}
              className="w-[40px] h-[80px] lg:w-[20px] lg:h-[40px]"
            />
          </div>

          {/* Arrow after fifth card */}
          <div className="flex justify-center items-center">
            <div className="hidden lg:flex">
              <Image
                src="/Group 491.svg"
                alt="arrow left"
                width={76}
                height={40}
              />
            </div>
          </div>

          {/* Sixth card */}
          <div className="flex flex-col  items-center  gap-[24px] w-[288px] col-span-1 border-1 border-gray-100 p-3 rounded-xl bg-white">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image src="/roundp6.svg" alt="Tennis" width={56} height={56} />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Launch and Learn
            </h6>
            <p className="text-[14px] md:text-[16px] text-center w-[243px]">
              Post-launch, we gather usage insights and iterate to improve
              retention and conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
