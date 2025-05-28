import { TbPointFilled } from "react-icons/tb";

export default function ScalePlan() {
  return (
    <section className="bg-[#EAE8F7] lg:rounded-[50px]">
      {/* Main section */}
      <div className="flex flex-col py-[2rem] lg:py-[5rem] gap-[2rem] lg:gap-[5rem]">
        {/* Housing the Plan header and the paragraph text */}
        <div className="flex flex-col items-center justify-center gap-[1rem]">
          <h2 className=" text-[22px] md:text-[40px] font-extrabold">
            Plan That Scale With You
          </h2>
          <p className="text-[11px] md:text-[18px] text-center w-[335px] lg:w-[1130px]">
            Whether you&apos;re just getting started or ready to dominate your
            market, our SEO and content plans are built to match your ambition.
            Every tier is backed by expert strategy, technical precision, and
            measurable results.
          </p>
        </div>

        {/* Housing all the large cards */}
        <div className="flex flex-col gap-[14px]">
          {/* the first large card*/}
          <div className="flex flex-col  mx-auto gap-[78px] py-[42px] px-[23px] border-[1px] border-[#543CDA]/70 rounded-[10px] w-[343px] lg:w-[1130px]">
            <div className="flex flex-col gap-[.6rem]">
              <h2 className="text-[20px] lg:text-[32px] font-semibold">
                Starter: Foundation & Fixes
              </h2>
              <p className="text-[10px] w-[256px] lg:w-full lg:text-[16px]">
                Perfect for early-stage teams that need solid SEO fundamentals
                and reliable content output.
              </p>
            </div>

            {/* Housing informations that will be flexed */}
            <div className=" flex flex-col lg:flex-row gap-[2rem] lg:gap-[13rem]">
              {/* The first part of the information */}
              <div className="flex flex-col gap-[9px]">
                <h6 className="text-[18px] md:text-[18px] text-[#543CDA]">
                  Starting at $1,500/month
                </h6>
                <p className=" text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Technical SEO Audit
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Core Web Vitals Optimization
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Keyword Research (up to 10 target terms)
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  On-Page SEO Optimization (up to 5 key pages)
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  1x Monthly Blog Post (1,000 words)
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  SEO Performance Dashboard & Monthly Report
                </p>
              </div>

              {/* The second part of the info */}
              <div className="flex flex-col gap-[9px]">
                <h6 className="text-[18px] text-[#543CDA]">Best For</h6>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Startups launching a new site
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Founders seeking visibility without complexity
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Brands needing to fix slow or underperforming pages
                </p>
              </div>
            </div>

            {/* Get started button */}
            <div className="py-[20px] px-[31px] rounded-[8px] mx-auto bg-[#543CDA] w-[289px] flex items-center justify-center">
              <button className="text-[17px] text-[#FFFFFF]">
                Get Started
              </button>
            </div>
          </div>

          {/* The second large card */}
          <div className="flex flex-col  mx-auto gap-[78px] py-[42px] px-[23px] border-[1px] border-[#543CDA]/70 rounded-[10px] w-[343px] lg:w-[1130px]">
            <div className="flex flex-col gap-[.6rem]">
              <h2 className="text-[20px] lg:text-[32px] font-semibold">
                 Growth: Rank & Scale
              </h2>
              <p className="text-[10px] w-[256px] lg:w-full lg:text-[16px]">
                Ideal for growing businesses ready to expand reach, outrank
                competitors, and turn traffic into leads.
              </p>
            </div>

            {/* Housing informations that will be flexed */}
            <div className=" flex flex-col lg:flex-row gap-[2rem]  lg:gap-[7rem]">
              {/* The first part of the information */}
              <div className="flex flex-col gap-[9px]">
                <h6 className="text-[18px] md:text-[18px] text-[#543CDA]">
                  Starting at $3,500/month
                </h6>
                <p className=" text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Everything in Starter
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  4x Monthly Content Pieces (blogs, landing pages, or guides)
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Internal Linking & Topic Cluster Strategy
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Full Site SEO Overhaul
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Schema Markup Implementation
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Conversion-Focused Content Review
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Competitor Keyword & Gap Analysis
                </p>
              </div>

              {/* The second part of the info */}
              <div className="flex flex-col gap-[9px]">
                <h6 className="text-[18px] text-[#543CDA]">Best For</h6>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Marketing teams scaling content
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  SaaS and Direct-to-Consumer brands focused on inbound
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Companies stuck on page 2 of Google
                </p>
              </div>
            </div>

            {/* Get started button */}
            <div className="py-[20px] px-[31px] rounded-[8px] mx-auto bg-[#543CDA] w-[289px] flex items-center justify-center">
              <button className="text-[17px] text-[#FFFFFF]">
                Scale Your Content
              </button>
            </div>
          </div>

          {/* Housing the third card */}

          <div className="flex flex-col  mx-auto gap-[78px] py-[42px] px-[23px] border-[1px] border-[#543CDA]/70 rounded-[10px] w-[343px] lg:w-[1130px]">
            <div className="flex flex-col gap-[.6rem]">
              <h2 className="text-[20px] lg:text-[32px] font-semibold">
                Enterprise: Content Engine
              </h2>
              <p className="text-[10px] w-[256px] lg:w-full lg:text-[16px]">
                For high-velocity teams who want full-stack SEO execution and
                content that drives pipeline at scale.
              </p>
            </div>

            {/* Housing informations that will be flexed */}
            <div className=" flex flex-col lg:flex-row gap-[2rem] lg:gap-[7rem]">
              {/* The first part of the information */}
              <div className="flex flex-col gap-[9px]">
                <h6 className="text-[18px] md:text-[18px] text-[#543CDA]">
                  Custom Pricing Based on Scope
                </h6>
                <p className=" text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Everything in Growth
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Custom Editorial Calendar & Quarterly Roadmap
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  8+ Monthly Content Assets (SEO blogs, case studies, landing
                  pages)
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Programmatic SEO & Multi-location Pages
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Digital PR & Link Building Support
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Quarterly Strategy Sessions & KPI Reviews
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Integration with Product, Sales, and Marketing
                </p>
              </div>

              {/* The second part of the info */}
              <div className="flex flex-col gap-[9px]">
                <h6 className="text-[18px] text-[#543CDA]">Best For</h6>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Large-scale SEO campaigns
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Teams with complex content ops or multi-language sites
                </p>
                <p className="text-[11px] md:text-[16px] flex items-center gap-[9px] ">
                  <span>
                    <TbPointFilled />
                  </span>
                  Enterprises targeting competitive or global keywords
                </p>
              </div>
            </div>

            {/* Get started button */}
            <div className="py-[20px] px-[31px] rounded-[8px] mx-auto bg-[#543CDA] w-[289px] flex items-center justify-center">
              <button className="text-[17px] text-[#FFFFFF]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
