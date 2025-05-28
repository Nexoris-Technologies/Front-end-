import Image from "next/image";

export default function MakeQuote() {
  return (
    <section className="">
      {/* Get a quote, h3 and p-text */}
      <div className="flex flex-col gap-[16px] md:gap-[40px] items-center justify-center mt-[4.6rem] px-6 md:px-12 ">
        {/* Image */}
        <div className="lg:hidden pt-[.6rem]">
          <Image
            src="/Get A Quote.webp"
            alt="Get Quote image"
            width={375}
            height={553}
            className="rounded-[10px]"
          />
        </div>

        {/* Get a quote */}
        <div className="rounded-[10px] md:bg-[#543CDA] py-[2rem] px-[1rem] w-full max-w-[1400px] hidden md:block ">
          <h1 className="font-bold text-[32px] md:text-[56px] md:text-[#FFFFFF] text-center">
            Get a Quote
          </h1>
        </div>

        {/* Housing the h3 and the paragraph text */}
        <div className="md:flex flex-col gap-[32px] justify-center items-center max-w-[805px] text-center hidden">
          <h3 className="font-semibold text-[20px] md:text-[32px] md:max-w-[750px] text-center">
            Let&apos;s bring structure to ambition, one smart decision at a time.
          </h3>
          <p className="text-[18px] md:max-w-[700px] text-center">
            From startup concepts to enterprise transformations, Nexoris helps
            turn vision into roadmaps and roadmaps into results. Whether you&apos;re
            building a custom platform, optimizing performance, or launching
            your next product, our quoting process is fast, transparent, and
            built around you.
          </p>
          <p className="text-[18px] md:max-w-[700px] text-center">
            We know choosing a tech partner is a big step. Our job is to make it
            easier, not harder. Let&apos;s define the path forward, clearly,
            confidently, and with total transparency.
          </p>
        </div>
      </div>
    </section>
  );
}
