import Image from "next/image";

export default function Love() {
  return (
    <section className="w-full bg-[#EAE8F7] flex justify-center items-center mt-[3rem] md:mt-[40px] lg:mt-[7rem] px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-center gap-10 md:gap-14">
        {/* Image Section */}
        <div className="w-full max-w-[511px]">
          <Image
            src="/Meeting image.webp"
            alt="meeting-image"
            width={511}
            height={569}
            className="rounded-[10px] w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full max-w-2xl flex flex-col justify-center items-center md:items-start gap-10 mt-10 md:mt-0">
          <h2 className="font-extrabold  md:max-w-[750px] text-[22px] leading-[32px] md:text-[40px] md:leading-[55px] text-center md:text-left tracking-tight">
            What You&apos;ll Actually Love About Working With Us
          </h2>

          <div className="w-full flex flex-col gap-6 justify-center items-center md:items-start ">
            {/* Section 1 */}
            <div>
              <h3 className="font-semibold text-[16px] md:text-[25px] leading-[25px] md:leading-[35px] text-center md:text-left text-[#000000]">
                Built for What&apos;s Next
              </h3>
              <p className="text-[11px] w-[330px] md:w-[550px] md:text-[15px] leading-[20px] md:leading-[26px] text-center md:text-left mt-1">
                Every product we build is designed to scale with you. So when
                growth comes, you&apos;re ready, not rebuilding.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="font-semibold text-[16px] md:text-[25px] leading-[25px] md:leading-[35px] text-center md:text-left text-[#000000]">
                Tailored, Not Templated
              </h3>
              <p className="text-[11px] w-[330px] md:w-[450px] md:text-[15px] leading-[20px] md:leading-[26px] text-center md:text-left mt-1">
                No cookie-cutter shortcuts. Everything is crafted around your
                brand, your workflows, and your specific goals.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-semibold text-[16px] md:text-[25px] leading-[25px] md:leading-[35px] text-center md:text-left text-[#000000]">
                Stable from Day One
              </h3>
              <p className="text-[11px] w-[320px] md:w-[490px] md:text-[15px] leading-[20px] md:leading-[26px] text-center md:text-left mt-1">
                Our code is pressure-tested, production-ready, and resilient,
                built for real-world traffic, not just polished demos.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="font-semibold text-[16px] md:text-[25px] leading-[25px] md:leading-[35px] text-center md:text-left text-[#000000]">
                Tech That Feels Human
              </h3>
              <p className="text-[11px] w-[300px] md:w-[550px] md:text-[15px] leading-[20px] md:leading-[26px] text-center md:text-left mt-1">
                From your team to your users, everything we build is smooth,
                intuitive, and just works without a user manual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
