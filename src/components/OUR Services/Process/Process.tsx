import Image from "next/image";

export default function OurProcess() {
  return (
    <section>
      {/* Housing all Process section */}
      <div className="flex flex-col gap-[40px] py-[3rem] lg:py-[6rem]">
        <h3 className="text-[24px] md:text-[40px] font-bold text-center">
          Our Process
        </h3>

        {/* Housing all cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[16px] max-w-[1224px] items-center mx-auto">
          {/* First card (col 1) */}
          <div className="flex flex-col items-center gap-[24px] w-[288px] ">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image
                src="/Tennis bat.svg"
                alt="Tennis"
                width={56}
                height={56}
              />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Define the Vision
            </h6>
            <p className="text-[16px] text-center">
              We get aligned on your app's core purpose, user flows, and success
              metrics.
            </p>
          </div>

          {/* Arrow after first card */}
          <div className="flex justify-center items-center w-[60px] h-[3px] lg:w-[148px] lg:h-[3px] rotation-3">
            <Image
              src="/Long arrow right.svg"
              alt="arrow right"
              width={148}
              height={3}
            />
          </div>

          {/* Second card  */}
          <div className="flex flex-col items-center gap-[24px] w-[288px] ">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image
                src="/Tennis bat.svg"
                alt="Tennis"
                width={56}
                height={56}
              />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Architect the Stack
            </h6>
            <p className="text-[14px] md:text-[16px] text-center w-[243px]">
              Together we select the tools and structure that ensure performance
              and maintainability.
            </p>
          </div>

          {/* Arrow after second card  */}
          <div className="flex justify-center items-center">
            <Image
              src="/Long arrow right.svg"
              alt="arrow right"
              width={148}
              height={3}
            />
          </div>

          {/* Third card  */}
          <div className="flex flex-col items-center gap-[24px] w-[288px] ">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image
                src="/Tennis bat.svg"
                alt="Tennis"
                width={56}
                height={56}
              />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Prototype and Iterate
            </h6>
            <p className="text-[14px] md:text-[16px] text-center w-[243px]">
              We turn wireframes into clickable mockups, refining user journeys
              before writing a line of code.
            </p>
          </div>

          {/* empty grid */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Arrow down under third card  */}
          <div className="flex justify-center pt-4  ml-[3rem] py-4">
            <Image
              src="/Long arrow down.svg"
              alt="Long arrow down"
              width={20}
              height={40}
              className=""
            />
          </div>

          {/* fourth card */}

          <div className="flex flex-col items-center gap-[24px] w-[288px]">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image
                src="/Tennis bat.svg"
                alt="Tennis"
                width={56}
                height={56}
              />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Launch and Maintain
            </h6>
            <p className="text-[14px] md:text-[16px] text-center w-[243px]">
              From app store approvals to post-launch updates, we’ve got you
              covered.
            </p>
          </div>

          {/* Arrow after first card */}
          <div className="flex justify-center items-center">
            <Image
              src="/Long arrow right.svg"
              alt="arrow right"
              width={148}
              height={3}
            />
          </div>
          {/* fifth card */}

          <div className="flex flex-col items-center gap-[24px] w-[288px] col-span-1">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image
                src="/Tennis bat.svg"
                alt="Tennis"
                width={56}
                height={56}
              />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Test on Real Devices
            </h6>
            <p className="text-[14px] md:text-[16px] text-center w-[263px]">
              We run functionality, UX, and edge-case tests across both iOS and
              Android.
            </p>
          </div>

          {/* Arrow after first card */}
          <div className="flex justify-center items-center">
            <Image
              src="/Long arrow right.svg"
              alt="arrow right"
              width={148}
              height={3}
            />
          </div>
          {/* sixth card */}

          <div className="flex flex-col items-center gap-[24px] w-[288px] col-span-1">
            <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
              <Image
                src="/Tennis bat.svg"
                alt="Tennis"
                width={56}
                height={56}
              />
            </div>
            <h6 className="text-[20px] md:text-[24px] font-bold text-center">
              Develop for Scale
            </h6>
            <p className="text-[14px] md:text-[16px] text-center w-[243px]">
              Our engineers build the frontend, connect your APIs, and optimize
              every frame for speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
