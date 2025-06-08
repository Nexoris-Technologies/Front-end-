import { TbPointFilled } from "react-icons/tb";

export default function ScalePlan() {
  return (
    <section className="bg-[#EAE8F7] rounded-none lg:rounded-[50px]">
      <div className="flex flex-col px-4 sm:px-6 lg:px-24 py-10 lg:py-20 gap-10 lg:gap15">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto">
          <h2 className="text-[22px] md:text-[36px] font-extrabold">
            Plan That Scale With You
          </h2>
          <p className="text-sm md:text-lg text-gray-700">
            Whether you&apos;re just getting started or ready to dominate your
            market, our SEO and content plans are built to match your ambition.
            Every tier is backed by expert strategy, technical precision, and
            measurable results.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="flex flex-col flex-wrap justify-center lg:flex-row gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 p-6 border border-[#543CDA]/70 rounded-[10px] flex-1 bg-white"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-lg md:text-2xl font-semibold">
                  {plan.title}
                </h2>
                <p className="text-xs md:text-base text-gray-600">
                  {plan.description}
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex flex-col gap-2 text-sm md:text-base">
                  <h6 className="text-[#543CDA] font-semibold">{plan.price}</h6>
                  {plan.features.map((feature, i) => (
                    <p key={i} className="flex items-start gap-2">
                      <TbPointFilled className="mt-[2px]" />
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col gap-2 text-sm md:text-base">
                  <h6 className="text-[#543CDA] font-semibold">Best For</h6>
                  {plan.bestFor.map((item, i) => (
                    <p key={i} className="flex items-start gap-2">
                      <TbPointFilled className="mt-[2px]" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <button className="py-3 px-6 rounded-md bg-[#543CDA] cursor-pointer text-white text-sm md:text-base font-medium w-full max-w-xs">
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    title: "Starter: Foundation & Fixes",
    description:
      "Perfect for early-stage teams that need solid SEO fundamentals and reliable content output.",
    price: "Starting at $1,500/month",
    features: [
      "Technical SEO Audit",
      "Core Web Vitals Optimization",
      "Keyword Research (up to 10 target terms)",
      "On-Page SEO Optimization (up to 5 key pages)",
      "1x Monthly Blog Post (1,000 words)",
      "SEO Performance Dashboard & Monthly Report",
    ],
    bestFor: [
      "Startups launching a new site",
      "Founders seeking visibility without complexity",
      "Brands needing to fix slow or underperforming pages",
    ],
    cta: "Get Started",
  },
  {
    title: "Growth: Rank & Scale",
    description:
      "Ideal for growing businesses ready to expand reach, outrank competitors, and turn traffic into leads.",
    price: "Starting at $3,500/month",
    features: [
      "Everything in Starter",
      "4x Monthly Content Pieces (blogs, landing pages, or guides)",
      "Internal Linking & Topic Cluster Strategy",
      "Full Site SEO Overhaul",
      "Schema Markup Implementation",
      "Conversion-Focused Content Review",
      "Competitor Keyword & Gap Analysis",
    ],
    bestFor: [
      "Marketing teams scaling content",
      "SaaS and Direct-to-Consumer brands focused on inbound",
      "Companies stuck on page 2 of Google",
    ],
    cta: "Scale Your Content",
  },
  {
    title: "Enterprise: Content Engine",
    description:
      "For high-velocity teams who want full-stack SEO execution and content that drives pipeline at scale.",
    price: "Custom Pricing Based on Scope",
    features: [
      "Everything in Growth",
      "Custom Editorial Calendar & Quarterly Roadmap",
      "8+ Monthly Content Assets (SEO blogs, case studies, landing pages)",
      "Programmatic SEO & Multi-location Pages",
      "Digital PR & Link Building Support",
      "Quarterly Strategy Sessions & KPI Reviews",
      "Integration with Product, Sales, and Marketing",
    ],
    bestFor: [
      "Large-scale SEO campaigns",
      "Teams with complex content ops or multi-language sites",
      "Enterprises targeting competitive or global keywords",
    ],
    cta: "Get Started",
  },
];
