import Image from "next/image";

function WhyChoose() {
  return (
    <section className="flex  ">
      <div className="flex flex-col  mx-auto items-center lg:flex-row gap-12 lg:gap-[30px]  py-[14rem] ">
        {/* Text Section */}
        <div className="flex flex-col  gap-[32px] relative">
          <h2 className="absolute bottom-[110%] w-[350px] lg:w-[600px] text-[22px]  lg:text-[32px] font-extrabold  lg:text-left  ">
            Why Choose Nexoris for SEO & Content Marketing?
          </h2>
          {/* Housing the paragraph texes */}
          <div className="flex flex-col gap-[1rem]  lg:gap-[45px]  ">
            {/* first text */}
            <div className="flex items-center gap-[16px]">
              <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/check icon Blue.svg"
                  alt="Icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="w-[233px] md:w-full font-bold text-[13px] md:text-[20px] lg:w-[500px]">
                Strategy-first approach tailored to your business goals.
              </p>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/check icon Blue.svg"
                  alt="Icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="w-[233px] md:w-full font-bold text-[13px] md:text-[20px] lg:w-[500px]">
                Editorial systems that scale without sacrificing quality.
              </p>
            </div>

            <div className="flex  items-center gap-[16px]">
              <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/check icon Blue.svg"
                  alt="Icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="w-[233px] text-[13px] font-bold md:text-[20px] md:w-[500px]">
                Real SEO expertise, not content mills or AI shortcuts.
              </p>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/check icon Blue.svg"
                  alt="Icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] w-[233px] md:w-full font-bold md:text-[20px] lg:w-[500px]">
                Built-in technical SEO support to strengthen every word you
                publish.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
                <Image
                  src="/check icon Blue.svg"
                  alt="Icon"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-[13px] w-[233px] font-bold md:w-full md:text-[20px] lg:w-[500px]">
                We don’t just write content, we build engines of growth.
              </p>
            </div>
          </div>
        </div>

        {/* Image and Testimonial */}
        <div className="w-[344px] h-[280px]  md:w-[530px] md:h-[540px]">
          <Image
            src="/seo-choose-image.webp"
            alt="Service Image"
            width={530}
            height={540}
            className="rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
