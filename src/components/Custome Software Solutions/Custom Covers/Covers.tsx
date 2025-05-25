import Image from "next/image";

export default function CustomCoverService() {
  return (
    <section className="bg-[#EAE8F7]">
      {/* Housing all */}
      <div className="flex flex-col gap-[24px] md:gap-[32px] py-[5rem]">
        <h3 className="text-[24px] lg:text-[40px] font-bold text-center">
          What This Service Covers
        </h3>

        {/* Housing the cards */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mx-auto  lg:w-[1224px]">
          {/* first card */}
          <div className="flex  gap-[16px] rounded-[8px] p-[12px] bg-[#FFFFFF] w-[343px] lg:w-[392px]">
            <Image
              src="/dounle check black.svg"
              alt="check black"
              width={24}
              height={24}
            />
            <p className="text-[16px] md:text-[18px]">
              Custom Internal Tools and Admin Panels
            </p>
          </div>
          {/* second card */}
          <div className="flex gap-[16px] rounded-[8px] p-[12px] bg-[#FFFFFF] w-[343px] lg:w-[392px]">
            <Image
              src="/dounle check black.svg"
              alt="check black"
              width={24}
              height={24}
            />
            <p className="text-[16px] md:text-[18px]">
              Client Portals and Partner Dashboards
            </p>
          </div>
          {/* third card */}
          <div className="flex gap-[16px] rounded-[8px] p-[12px] bg-[#FFFFFF] w-[343px] lg:w-[392px]">
            <Image
              src="/dounle check black.svg"
              alt="check black"
              width={24}
              height={24}
            />
            <p className="text-[16px] md:text-[18px]">
              Multi-Tenant SaaS Platforms
            </p>
          </div>
          {/* fourth card */}
          <div className="flex gap-[16px] rounded-[8px] p-[12px] bg-[#FFFFFF] w-[343px] lg:w-[392px]">
            <Image
              src="/dounle check black.svg"
              alt="check black"
              width={24}
              height={24}
            />
            <p className="text-[16px] md:text-[18px]">
              Business Process Automation Systems
            </p>
          </div>
          {/* fifth card */}
          <div className="flex gap-[16px] rounded-[8px] p-[12px] bg-[#FFFFFF] w-[343px] lg:w-[392px]">
            <Image
              src="/dounle check black.svg"
              alt="check black"
              width={24}
              height={24}
            />
            <p className="text-[16px] md:text-[18px]">
              Workflow Orchestration and Approval Chains
            </p>
          </div>
          {/* sixth card */}
          <div className="flex gap-[16px] rounded-[8px] p-[12px] bg-[#FFFFFF] w-[343px] lg:w-[392px]">
            <Image
              src="/dounle check black.svg"
              alt="check black"
              width={24}
              height={24}
            />
            <p className="text-[16px] md:text-[18px]">
              Smart System Workflows and Data Connectivity
            </p>
          </div>
          {/* seven card */}
          <div className="flex gap-[16px] rounded-[8px] p-[12px] bg-[#FFFFFF] w-[343px] lg:w-[392px]">
            <Image
              src="/dounle check black.svg"
              alt="check black"
              width={24}
              height={24}
            />
            <p className="text-[16px] md:text-[18px]">
              Role-Based Access and Security Protocols
            </p>
          </div>
          {/* eight card */}
          <div className="flex gap-[16px] rounded-[8px] p-[12px] bg-[#FFFFFF] w-[343px] lg:w-[392px]">
            <Image
              src="/dounle check black.svg"
              alt="check black"
              width={24}
              height={24}
            />
            <p className="text-[16px] md:text-[18px]">
              Data Modeling, Storage, and Reporting
            </p>
          </div>
          {/* nineth card */}
          <div className="flex gap-[16px] rounded-[8px] p-[12px] bg-[#FFFFFF] w-[343px] lg:w-[392px]">
            <Image
              src="/dounle check black.svg"
              alt="check black"
              width={24}
              height={24}
            />
            <p className="text-[16px] md:text-[18px]">
              Custom CMS/Back Office Tools
            </p>
          </div>
          {/* tenth card */}
          <div className="flex gap-[16px] rounded-[8px] p-[12px] bg-[#FFFFFF] w-[343px] lg:w-[392px]">
            <Image
              src="/dounle check black.svg"
              alt="check black"
              width={24}
              height={24}
            />
            <p className="text-[16px] md:text-[18px]">
              Code Audits, Technical Architecture, and DevOps Setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
