import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SeoCovers() {
  return (
    <section>
      {/* Housing all */}
      <div className="lg:flex flex-col lg:py-[3rem] mt-[4rem] lg:gap-[4rem] ">
        <h3 className="text-[22px] md:text-[40px] text-[#543CDA]/90 font-extrabold text-center">
          What This Service Covers
        </h3>

        {/* Housing all the cards */}
        <div className="hidden  lg:flex flex-wrap justify-center gap-[15px] max-w-[1440px] mx-auto">
          {/* first card */}
          <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
            <Image
              src="/num1-white.svg"
              alt="numb white"
              width={86}
              height={86}
            />
            <h5 className="text-[#FFFFFF] w-[227px] text-center">
              Technical SEO Audits & Core Web Vitals Optimization
            </h5>
          </div>
          {/* second card */}
          <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
            <Image
              src="/num2-white.svg"
              alt="numb white"
              width={86}
              height={86}
            />
            <h5 className="text-[#FFFFFF] w-[227px] text-center">
              Keyword Research & Search Intent Mapping
            </h5>
          </div>
          {/* third card */}
          <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
            <Image
              src="/num3-white.svg"
              alt="numb white"
              width={86}
              height={86}
            />
            <h5 className="text-[#FFFFFF] w-[227px] text-center">
              Content Calendar & Editorial Strategy
            </h5>
          </div>
          {/* fourth card */}
          <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
            <Image
              src="/num4-white.svg"
              alt="numb white"
              width={86}
              height={86}
            />
            <h5 className="text-[#FFFFFF] w-[227px] text-center">
              SEO Copywriting (Landing Pages, Blogs, Category Pages)
            </h5>
          </div>
          {/* fifth card */}
          <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
            <Image
              src="/num5-white.svg"
              alt="numb white"
              width={86}
              height={86}
            />
            <h5 className="text-[#FFFFFF] w-[227px] text-center">
              CMS Content Structuring & Optimization
            </h5>
          </div>
          {/* six card */}
          <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
            <Image
              src="/num6-white.svg"
              alt="numb white"
              width={86}
              height={86}
            />
            <h5 className="text-[#FFFFFF] w-[227px] text-center">
              On-Page SEO & Internal Linking Strategy
            </h5>
          </div>
          {/* seven card */}
          <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
            <Image
              src="/num7-white.svg"
              alt="numb white"
              width={86}
              height={86}
            />
            <h5 className="text-[#FFFFFF] w-[227px] text-center">
              Link Building & Authority Gap Analysis
            </h5>
          </div>
          {/* eightcard */}
          <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
            <Image
              src="/num8-white.svg"
              alt="numb white"
              width={86}
              height={86}
            />
            <h5 className="text-[#FFFFFF] w-[227px] text-center">
              Ongoing Performance Monitoring & Reporting
            </h5>
          </div>
          {/* nine card */}
          <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
            <Image
              src="/num9-white.svg"
              alt="numb white"
              width={86}
              height={86}
            />
            <h5 className="text-[#FFFFFF] w-[227px] text-center">
              Local SEO & Google Business Profile Optimization
            </h5>
          </div>
          {/* ten card */}
          <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
            <Image
              src="/num10-white.svg"
              alt="numb white"
              width={86}
              height={86}
            />
            <h5 className="text-[#FFFFFF] w-[227px] text-center">
              Schema Markup & Semantic HTML Implementation
            </h5>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <Marquee>
        {/* Housing all */}
        <div className="lg:hidden flex flex-col py-[2rem] gap-[4rem]">
          {/* Housing all the cards */}
          <div className="flex flex-wrap justify-center gap-[15px]  mx-auto">
            {/* first card */}
            <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
              <Image
                src="/num1-white.svg"
                alt="numb white"
                width={86}
                height={86}
              />
              <h5 className="text-[#FFFFFF] w-[227px] text-center">
                Technical SEO Audits & Core Web Vitals Optimization
              </h5>
            </div>
            {/* second card */}
            <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
              <Image
                src="/num2-white.svg"
                alt="numb white"
                width={86}
                height={86}
              />
              <h5 className="text-[#FFFFFF] w-[227px] text-center">
                Keyword Research & Search Intent Mapping
              </h5>
            </div>
            {/* third card */}
            <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
              <Image
                src="/num3-white.svg"
                alt="numb white"
                width={86}
                height={86}
              />
              <h5 className="text-[#FFFFFF] w-[227px] text-center">
                Content Calendar & Editorial Strategy
              </h5>
            </div>
            {/* fourth card */}
            <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
              <Image
                src="/num4-white.svg"
                alt="numb white"
                width={86}
                height={86}
              />
              <h5 className="text-[#FFFFFF] w-[227px] text-center">
                SEO Copywriting (Landing Pages, Blogs, Category Pages)
              </h5>
            </div>
            {/* fifth card */}
            <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
              <Image
                src="/num5-white.svg"
                alt="numb white"
                width={86}
                height={86}
              />
              <h5 className="text-[#FFFFFF] w-[227px] text-center">
                CMS Content Structuring & Optimization
              </h5>
            </div>
            {/* six card */}
            <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
              <Image
                src="/num6-white.svg"
                alt="numb white"
                width={86}
                height={86}
              />
              <h5 className="text-[#FFFFFF] w-[227px] text-center">
                On-Page SEO & Internal Linking Strategy
              </h5>
            </div>
            {/* seven card */}
            <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
              <Image
                src="/num7-white.svg"
                alt="numb white"
                width={86}
                height={86}
              />
              <h5 className="text-[#FFFFFF] w-[227px] text-center">
                Link Building & Authority Gap Analysis
              </h5>
            </div>
            {/* eightcard */}
            <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
              <Image
                src="/num8-white.svg"
                alt="numb white"
                width={86}
                height={86}
              />
              <h5 className="text-[#FFFFFF] w-[227px] text-center">
                Ongoing Performance Monitoring & Reporting
              </h5>
            </div>
            {/* nine card */}
            <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
              <Image
                src="/num9-white.svg"
                alt="numb white"
                width={86}
                height={86}
              />
              <h5 className="text-[#FFFFFF] w-[227px] text-center">
                Local SEO & Google Business Profile Optimization
              </h5>
            </div>
            {/* ten card */}
            <div className=" py-[20px] rounded-[10px] flex flex-col items-center gap-[25px] bg-[#543CDA]/70 w-[295px]">
              <Image
                src="/num10-white.svg"
                alt="numb white"
                width={86}
                height={86}
              />
              <h5 className="text-[#FFFFFF] w-[227px] text-center">
                Schema Markup & Semantic HTML Implementation
              </h5>
            </div>
            <div className="w-[295px]"></div>
          </div>
        </div>
      </Marquee>
    </section>
  );
}
