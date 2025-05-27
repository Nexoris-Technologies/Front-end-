import Image from "next/image";

export default function SeoKey() {
  return (
    <section>
      {/* Housing everything */}
      <div className="flex flex-col lg:flex-row gap-[7rem] md:gap-[6.2rem] justify-center items-center md:text-left py-[12rem]">
        {/* Key image */}
        <div className="w-[343px] h-[280px] md:w-[529px] md:h-[540px]">
          <Image
            src="/Seo key image.webp"
            alt="Key Image"
            width={529}
            height={540}
          />
        </div>

        {/* Key Texts */}
        <div className="flex flex-col gap-[1rem] lg:gap-[50px]">
          <h2 className="text-[22px] md:text-[40px] font-extrabold">
            Key Benefits at a Glance
          </h2>
          <div className="flex flex-col gap-[23px]">
            {/* First text pair */}
            <div className="flex flex-col">
              <h3 className="text-[15px] md:text-[25px] font-semibold">
                SEO That Compounds
              </h3>
              <p className="text-[11px] md:text-[15px] w-[343px] md:w-[523px]">
                We fix technical issues, optimize structure, and improve
                authority, so you rank higher and stay there.
              </p>
            </div>
            {/* Second text pair */}
            <div className="flex flex-col">
              <h3 className="text-[15px] md:text-[25px] font-semibold">
                Content That Converts
              </h3>
              <p className="text-[11px] md:text-[15px] w-[343px] md:w-[523px]">
                Every word is engineered for humans and search engines, with a
                strong focus on intent and action.
              </p>
            </div>
            {/* Third text pair */}
            <div className="flex flex-col">
              <h3 className="text-[15px] md:text-[25px] font-semibold">
                Built for Discovery
              </h3>
              <p className="text-[11px] md:text-[15px] w-[343px] md:w-[523px]">
                 From schema markup to internal linking, we optimize for
                visibility across Google, Bing, and AI-powered search.
              </p>
            </div>
            {/* Fourth text pair */}
            <div className="flex flex-col">
              <h3 className="text-[15px] md:text-[25px] font-semibold">
                Fast, Aligned Execution
              </h3>
              <p className="text-[11px] md:text-[15px] w-[343px] md:w-[523px]">
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
