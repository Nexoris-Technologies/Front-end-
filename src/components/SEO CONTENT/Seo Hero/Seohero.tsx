import Image from "next/image";

export default function SeoHero() {
  return (
    <section className="bg-[#d7d2f9]">
      {/* Housing all */}
      <div className="flex py-[14rem] mx-auto justify-center gap-[6rem]">
        {/* housing the text area */}
        <div className="flex flex-col gap-[2rem]">
          <div>
            <h6 className="py-[4px] px-[24px] bg-[#0059F1]/10 text-[#0059F1] w-[254px] rounded-[20px]">
              SEO and Content Marketing
            </h6>
          </div>
          <h1 className="text-[48px] font-extrabold text-[#543CDA] w-[600px]">
            Rank Higher. Convert Faster. Grow Smarter
          </h1>
          <p className="text-[18px] w-[490px]">
            At Nexoris, we combine technical SEO and high-converting content to
            drive visibility, clicks, and compounding growth. So your site
            doesn’t just rank, it performs.
          </p>
          {/* Hero button */}
          <div className="rounded-[8px] py-[20px] px-[31px] bg-[#543CDA] w-[289px]">
            <button className="text-[17px] font-bold text-[#FFFFFF]">
              Let's optimize Your Growth
            </button>
          </div>

          {/* Trusted brands */}
          <div className="flex flex-col gap-3">
            <p className="text-[18px]  font-semibold">Trusted by 50+ brands</p>
            <p className="text-[18px] w-[450px]  font-semibold">
              Used by growth-driven teams in SaaS, healthtech, and digital
              commerce.
            </p>
          </div>
          {/* housing the 3x 40+ */}
          <div className="flex gap-[4rem]">
            <div>
              <h1 className="text-[30px] text-[#543CDA]">3X</h1>
              <p className="text-[15px]">Content ROI within 6 months.</p>
            </div>
            <div>
              <h1 className="text-[30px] text-[#543CDA]">+40%</h1>
              <p className="text-[15px]">Average increase in organic traffic</p>
            </div>
          </div>
        </div>

        {/* Hero Images */}
        <div className="relative overflow-hidden ">
          <Image
            src="/Seo Hero Image.webp"
            alt="seo image"
            width={695}
            height={369}
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-[#EAE8F7]/70"></div>
        </div>
      </div>
    </section>
  );
}
