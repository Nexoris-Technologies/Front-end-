import Image from "next/image";
import { CgCheckO } from "react-icons/cg";

function Nexoris() {
  return (
    <section className="flex items-center justify-center py-10 md:py-20 px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 container mx-auto  ">
        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-lg">
          <h3 className=" lg:text-4xl font-bold text-center lg:text-left ">
            Why Choose Nexoris for UI/UX Design?
          </h3>

          <div className="flex flex-col gap-8 ">
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
        <div className="w-[343px] h-[420px] md:w-[550px] md:h-[600px] relative overflow-hidden ">
          <Image
            src="/uichoose.webp"
            alt="Service Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Nexoris;
