import Image from "next/image";

export default function SeoKey() {
  return (
    <section>
      {/* Housing everything */}
      <div className="flex flex-col gap-6 sm:gap-15 lg:gap-20 xl:flex-row py-10 w-full mt-5 sm:mt-20 lg:mt-30 px-4 sm:px-14 lg:px-24">
        {/* Key image */}
        <div className="relative overflow-hidden rounded-[24px] min-h-[300px] w-full  h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] mx-auto lg:mx-0 xl:w-1/2">
          <Image
            src="/Seo-key-image.webp"
            alt="Key Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Key Texts */}
        <div className="flex flex-col gap-[1rem] lg:gap-10 xl:w-1/2">
          <h2 className="text-[22px] md:text-[40px] font-extrabold">
            Key Benefits at a Glance
          </h2>
          <div className="flex flex-col gap-7 lg:gap-10">
            {/* First text pair */}
            <div className="flex flex-col max-w-xl">
              <h3 className="text-[15px] md:text-[25px] font-semibold">
                SEO That Compounds
              </h3>
              <p className="text-[11px] md:text-[15px]">
                We fix technical issues, optimize structure, and improve
                authority, so you rank higher and stay there.
              </p>
            </div>
            {/* Second text pair */}
            <div className="flex flex-col max-w-xl">
              <h3 className="text-[15px] md:text-[25px] font-semibold">
                Content That Converts
              </h3>
              <p className="text-[11px] md:text-[15px] ">
                Every word is engineered for humans and search engines, with a
                strong focus on intent and action.
              </p>
            </div>
            {/* Third text pair */}
            <div className="flex flex-col max-w-xl">
              <h3 className="text-[15px] md:text-[25px] font-semibold">
                Built for Discovery
              </h3>
              <p className="text-[11px] md:text-[15px] ">
                 From schema markup to internal linking, we optimize for
                visibility across Google, Bing, and AI-powered search.
              </p>
            </div>
            {/* Fourth text pair */}
            <div className="flex flex-col max-w-xl">
              <h3 className="text-[15px] md:text-[25px] font-semibold">
                Fast, Aligned Execution
              </h3>
              <p className="text-[11px] md:text-[15px] ">
                Whether you need 5 pages or 50, our editorial systems scale to
                match your roadmap and business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
