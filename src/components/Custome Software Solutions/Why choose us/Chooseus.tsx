import Image from "next/image";

export default function WhyChooseCustom() {
  return (
    <section className=" bg-[#EAE8F7] ">
      <div className="flex flex-col justify-center items-center  lg:flex-row gap-12 lg:gap-[30px]   py-[6rem] ">
        {/* Text Section */}
        <div className="flex flex-col gap-[32px]  lg:max-w-[1224px] px-4 md:px-0">
          <h1 className="text-[24px] md:w-[600px] md:text-[28px] lg:text-[32px] font-bold text-center md:text-left leading-snug">
            Why Choose Nexoris for Custom Software Development?
          </h1>

          {/* Paragraph section */}
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[16px] items-start">
              <Image src="/subtract.svg" alt="Icon" width={24} height={24} />
              <p className="text-[16px] md:text-[18px]">
                We don’t just code, we solve problems that hurt your business
              </p>
            </div>

            <div className="flex gap-[16px] items-start">
              <Image src="/subtract.svg" alt="Icon" width={24} height={24} />
              <p className="text-[16px] md:text-[18px]">
                Deep focus on systems thinking and operational value
              </p>
            </div>

            <div className="flex gap-[16px] items-start">
              <Image src="/subtract.svg" alt="Icon" width={24} height={24} />
              <p className="text-[16px] md:text-[18px]">
                UX designed for the way your team actually works
              </p>
            </div>

            <div className="flex gap-[16px] items-start">
              <Image src="/subtract.svg" alt="Icon" width={24} height={24} />
              <p className="text-[16px] md:text-[18px]">
                Senior engineers who can build, integrate, and scale complex
                platforms
              </p>
            </div>

            <div className="flex gap-[16px] items-start">
              <Image src="/subtract.svg" alt="Icon" width={24} height={24} />
              <p className="text-[16px] md:text-[18px]">
                Long-term partnership, from V1 to full enterprise transformation
              </p>
            </div>
          </div>
        </div>

        {/* Image and Testimonial */}
        <div className="w-[343px] h-[420px]  md:w-[600px] md:h-[600px]">
          <Image
            src="/mobile app photo.webp"
            alt="Service Image"
            width={600}
            height={600}
            className="rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
}
