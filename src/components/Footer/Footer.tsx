import Image from "next/image";

export default function Footer() {
  return (
    <main className="bg-[#000000] ">
      {/* Housing the logos, texts and th copyright text */}
      <div className="flex flex-col gap-[24px]">
        {/* Housing all sections in the footer section */}
        <div className="flex flex-col lg:flex-row  mx-auto gap-[132px] py-[3rem]">
          {/* Housing the Nexosris logos */}
          <div className="flex flex-col gap-[36px]">
            <Image
              src="/nexoris_logo_black_bg_with_tagkine_042915-Photoroom 1 (1).webp"
              alt="nexoris logo"
              width={140}
              height={92}
            />
            {/* the social media logos */}

            <div className="flex  gap-[16px]">
              <Image
                src="/Facebook Icon.svg"
                alt="facebook"
                width={50}
                height={50}
              />
              <Image src="/X icon.svg" alt="X" width={50} height={50} />
              <Image
                src="/Instagram icon.svg"
                alt="instagram"
                width={50}
                height={50}
              />
              <Image src="/In icon.svg" alt="in" width={50} height={50} />

              <Image
                src="/tiktok icon.svg"
                alt="tiktok"
                width={50}
                height={50}
              />
            </div>
          </div>
          {/* Housing the Company */}
          <div className="flex  flex-col gap-[18px] md:gap-[58px]">
            <div>
              <h3 className="text-[#898686] text-[22px] md:text-[25px] font-semibold">
                Company
              </h3>
            </div>
            <div className="flex flex-col gap-[24px] text-[18px] text-[#FFFFFF]">
              <h6>Home</h6>
              <h6>About Us</h6>
              <h6>Contact Us</h6>
              <h6>Careers</h6>
              <h6>Insights</h6>
            </div>
          </div>
          {/* Housing the Services */}
          <div className="flex flex-col gap-[18px] md:gap-[36px]">
            <div>
              <h3 className="text-[#898686] text-[22px] md:text-[25px] font-semibold">
                Services
              </h3>
            </div>
            <div className="flex flex-col gap-[24px] text-[18px] text-[#FFFFFF]">
              <h6>Web Development</h6>
              <h6>UI/UX Design and Consulting</h6>
              <h6>Mobile Application</h6>
              <h6>SEO and Content Marketing</h6>
              <h6>Product Design and Management</h6>
              <h6>Custom Software Solution</h6>
              <h6>Digital Transformation</h6>
            </div>
          </div>

          {/* Housing Resources */}
          <div className="flex flex-col gap-[18px] md:gap-[36px]">
            <div>
              <h3 className="text-[#898686] text-[22px] md:text-[25px] font-semibold">
                Resources
              </h3>
            </div>

            <div className=" flex flex-col gap-[24px] text-[18px] text-[#FFFFFF]">
              <h6>Privacy Policy</h6>
              <h6>Cookie Policy</h6>
              <h6>Terms of Service</h6>
            </div>
          </div>
        </div>

        <div className="w-full h-0.5 bg-gray-500"></div>
        {/* Housing the copywrite text */}
        <div>
          <h3 className="text-[16px] text-[#FFFFFF] flex justify-center">
            © 2025 Copyright, Nexoris
          </h3>
        </div>
      </div>
    </main>
  );
}
