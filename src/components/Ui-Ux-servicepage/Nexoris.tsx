import Image from "next/image";
import { CgCheckO } from "react-icons/cg";

function Nexoris() {
  return (
    <section className="flex items-center justify-center py-20 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-28 max-w-7xl w-full">
        {/* Text Section */}
        <div className="flex flex-col gap-6 w-full lg:w-[45rem]">
          <h3 className="text-2xl sm:text-3xl lg:text-[3rem] font-bold text-center lg:text-left max-w-[100%] mx-auto lg:mx-0">
            Why Choose Nexoris for UI/UX Design?
          </h3>

          <div className="flex flex-col gap-8 max-w-[90%] mx-auto lg:mx-0">
            <div className="flex items-start gap-4">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-base sm:text-lg">
                Deep product thinking, not just pretty visuals
              </p>
            </div>

            <div className="flex items-start gap-4">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-base sm:text-lg">
                Research-driven design grounded in real user behavior
              </p>
            </div>

            <div className="flex items-start gap-4">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-base sm:text-lg">
                Clear handoff process from design to development.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-base sm:text-lg">
                End-to-end involvement, from concept to launch to iteration
              </p>
            </div>

            <div className="flex items-start gap-4">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-base sm:text-lg">
                Fast turnaround without sacrificing craft
              </p>
            </div>
          </div>
        </div>

        {/* Image and Testimonial */}
        <div className="relative flex items-center justify-center w-full max-w-[28rem]">
          <Image
            src="/ManChoose.png"
            alt="Service Image"
            width={300}
            height={100}
            className="w-full h-130 rounded-4xl"
          />
          <div className="absolute bottom-30 w-[90%] bg-white rounded-xl py-1 px-4 flex flex-col gap-3 shadow-md">
            <p className="text-sm sm:text-base italic">
              “Our mobile app used to be a source of complaints. Nexoris turned
              it into one of our biggest growth channels with 5x more engagement
              and zero major bugs after launch.”
            </p>
            <h2 className="font-bold text-base sm:text-lg italic">
              — Maria O., Product Lead at FintaGo
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nexoris;
