import { IoIosRocket } from "react-icons/io";
import { HiChartBar } from "react-icons/hi2";
import { PiBankBold } from "react-icons/pi";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

function BuiltFor() {
  return (
    <section className="bg-[#EAE8F7] py-32 w-full flex flex-col items-center justify-center gap-8 mt-10">
      
      {/* Top Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center gap-10 container mx-auto px-4 lg:px-40">
        {/* Card 1 */}
<<<<<<< HEAD
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-8 w-[421px] h-[405px] max-w-md bg-white shadow-2xl rounded-md pb-[6rem]">
          <IoIosRocket className="w-[60px] h-[60px] text-[#543CDA]" />
          <h3 className="font-bold text-[25px] text-[#543CDA] text-center">Startups & Founders</h3>
          <p className="text-center w-[335px] font-[400]">
=======
        <div className="flex flex-col items-center justify-center px-6 pb-8 gap-4 w-[421px] h-[405px] max-w-md bg-white shadow-2xl rounded-md">
          <IoIosRocket className="w-[60px] h-[60px] text-[#543CDA]" />
          <h3 className="font-bold text-[25px] text-[#543CDA] text-center">Startups & Founders</h3>
          <p className="text-center w-[335px]">
>>>>>>> origin/master
          You have a bold idea and need a technical partner to bring it to life. From MVP to launch and beyond. Whether you’re building your first product or pivoting to a new direction, we’ll help you move fast, build smart, and avoid costly mistakes.
          </p>
        </div>

        {/* Arrow Image */}
        <div className="hidden lg:block">
          <Image src="/double_arrows_up.svg" alt="Double Arrows" width={800} height={288} className="pt-24" />
        </div>

        {/* Card 2 */}
<<<<<<< HEAD
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-8 w-[421px] h-[405px] max-w-md bg-white shadow-2xl rounded-md pb-[6rem]">
          <HiChartBar className="w-[60px] h-[60px] text-[#543CDA]" />
          <h3 className="font-bold text-[25px] text-[#543CDA] text-center">Growing Businesses</h3>
          <p className="text-center w-[320px] font-[400]">
=======
        <div className="flex flex-col items-center justify-center px-6 pb-8 gap-4 w-[421px] h-[405px] max-w-md bg-white shadow-2xl rounded-md">
          <HiChartBar className="w-[60px] h-[60px] text-[#543CDA]" />
          <h3 className="font-bold text-[25px] text-[#543CDA] text-center">Growing Businesses</h3>
          <p className="text-center w-[336px]">
>>>>>>> origin/master
          Your business is scaling and your tech needs to keep up. We help growing teams modernize their systems, automate workflows, and build tools that support the next stage of growth.
          </p>
        </div>
      </section>

      {/* Middle Title & Text */}
      <div className="flex flex-col items-center justify-center my-12 px-4 text-center">
        <h1 className="text-[#543CDA] font-bold text-[25px]">Who We’re Built For</h1>
<<<<<<< HEAD
        <p className="font-[400] text-[18px] w-[380px] max-w-xl">
=======
        <p className="font-[400] text-[18px] w-[370px]">
>>>>>>> origin/master
          At Nexoris, we partner with ambitious teams across different industries and stages of growth. While each client is unique, most fall into one of these four categories:
        </p>
      </div>

      {/* Bottom Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center gap-10 container mx-auto px-4 lg:px-40">
        {/* Card 3 */}
<<<<<<< HEAD
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-8 w-[421px] h-[405px] max-w-md bg-white shadow-2xl rounded-md">
=======
        <div className="flex flex-col items-center justify-center px-6 pb-8 gap-4 w-[421px] h-[405px] max-w-md bg-white shadow-2xl rounded-md">
>>>>>>> origin/master
          <PiBankBold className="w-[60px] h-[60px] text-[#543CDA]" />
          <h3 className="font-bold text-[25px] text-[#543CDA] text-center">Agencies, Consultants & Partners</h3>
          <p className="text-center w-[310px] font-[400]">
            You serve your own clients and need a reliable tech team to back you up. We collaborate behind the scenes to deliver white-label development, co-branded apps, and seamless handovers.
          </p>
        </div>

        {/* Arrow Image */}
        <div className="hidden lg:block">
          <Image src="/double_arrows_down.svg" alt="Double Arrows" width={800} height={288} className="pb-24" />
        </div>

        {/* Card 4 */}
<<<<<<< HEAD
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-8 w-[421px] h-[405px] max-w-md bg-white shadow-2xl rounded-md">
=======
        <div className="flex flex-col items-center justify-center px-6 pb-8 gap-4 w-[421px] h-[405px] max-w-md bg-white shadow-2xl rounded-md">
>>>>>>> origin/master
          <TbTriangleSquareCircleFilled className="w-[60px] h-[60px] text-[#543CDA]" />
          <h3 className="font-bold text-[25px] text-[#543CDA] text-center">Enterprises & Institutions</h3>
          <p className="text-center w-[310px] font-[400]">
            You need custom, secure, and scalable solutions to support operations at scale. We bring technical expertise, design clarity, and long-term support to complex digital transformations.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <div className="flex flex-col items-center justify-center mt-16 px-4 text-center">
        <h1 className="font-bold text-[25px] text-[#543CDA]">Not Sure Where You Fit In?</h1>
        <p className="max-w-2xl">
          That&#39;s okay. We work with a wide range of businesses, and we’d love to hear your story. Tell us what you're working on, and we&#39;ll figure out how to help.
        </p>
        <Link href="#" className="text-[#543CDA] font-bold text-[17px] mt-6 py-3 px-6 border border-[#543CDA] rounded-md">
          Let's Talk
        </Link>
      </div>
    </section>
  );
}

export default BuiltFor;
