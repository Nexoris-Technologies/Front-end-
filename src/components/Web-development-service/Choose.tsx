import Image from "next/image";

function Choose() {
  return (
    <section className="flex items-center justify-center py-20 bg-[#EAE8F7] px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-28 max-w-7xl w-full">
        {/* Text Section */}
        <div className="flex flex-col gap-6 w-full lg:w-[45rem]">
          <h1 className="text-2xl sm:text-3xl lg:text-[3rem] font-bold text-center lg:text-left max-w-[90%] mx-auto lg:mx-0">
            Why Choose Nexoris for Web Development?
          </h1>

          <div className="flex flex-col gap-8 max-w-[90%] mx-auto lg:mx-0">
            <div className="flex items-start gap-4">
              <Image src="/subtract.svg" alt="Icon" width={24} height={24} />
              <p className="text-base sm:text-lg">
                100% custom code, zero drag-and-drop fluff.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Image src="/subtract.svg" alt="Icon" width={24} height={24} />
              <p className="text-base sm:text-lg">
                Sites optimized to pass Google’s Core Web Vitals with flying colors.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Image src="/subtract.svg" alt="Icon" width={24} height={24} />
              <p className="text-base sm:text-lg">
                Strategy-first builds that align UX, SEO, and business growth.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Image src="/subtract.svg" alt="Icon" width={24} height={24} />
              <p className="text-base sm:text-lg">
                Long-term partners, not just launch-and-leave developers.
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
              “The Nexoris team rebuilt our site from scratch and helped us climb
              from page 6 to the top 3 on Google all while improving speed and
              conversions.”
            </p>
            <h2 className="font-bold text-base sm:text-lg">
              — John A., CTO at NovaBuild
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
