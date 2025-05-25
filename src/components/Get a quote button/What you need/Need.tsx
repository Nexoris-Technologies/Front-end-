import Image from "next/image";

export default function Needs() {
  return (
    <section className="bg-[#EAE8F7] py-16 ">
      {/* hOUSING ALL  */}
      <div className=" container mx-auto px-4">
        {/* Housing Tell us what you need and the paragraph text */}
        <div className="flex flex-col justify-center items-center h-[343px] gap-[24px] md:gap-[32px]">
          <h3 className="text-[24px] md:text-[40px] font-bold mt-[4rem]">
            Tell Us What You Need
          </h3>
          <p className="text-[18px] text-center max-w-[700px]">
            Fill out the short form below, and a Nexoris strategist will respond
            within 1–2 business days.No pressure. Just clear, human answers from
            a Nexoris expert. You bring the vision. We’ll bring the code,
            clarity, and commitment.
          </p>
        </div>

        {/* Housing quote request form section */}
        <div className="flex flex-col gap-[32px]    mt-[4rem] rounded-[16px] p-[24px] bg-[#FFFFFF] max-w-[728px] mx-auto w-full">
          <div>
            <h3 className="font-semibold text-[32px] ">Quote Request Form</h3>
          </div>
          {/* Housing the form */}
          <div className="flex flex-col gap-[24px]  ">
            {/* Housing both the fullname and the lastname */}
            <div className="flex flex-col md:flex-row gap-[24px]">
              {/* Housing the full name */}
              <div className="flex flex-col gap-[8px] flex-1">
                <label htmlFor="Full name" className="text-[16px] ">
                  First Name
                </label>
                <input
                  type="text"
                  className="focus:outline-none h-[40px]  w-full  border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem]"
                />
              </div>
              {/* Housing the lastname */}
              <div className="flex flex-col gap-[8px] flex-1">
                <label htmlFor="Last name" className="text-[16px] ">
                  Last Name
                </label>
                <input
                  type="text"
                  className="focus:outline-none h-[40px]  w-full   border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem]"
                />
              </div>
            </div>

            {/* Housing company name */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="Full name" className="text-[16px] ">
                Company Name
              </label>
              <input
                type="text"
                className="focus:outline-none h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] "
              />
            </div>

            {/* select a solution */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="Solution" className="text-[16px] ">
                What solution are you exploring today?
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="select a solution"
                  className="focus:outline-none h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem]"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] md:w-[24px] md:h-[24px]">
                  <Image
                    src="/chevron-down.svg"
                    alt="arrow down"
                    width={24}
                    height={24}
                  />
                </span>
              </div>
            </div>

            {/* Budget range & Preferred Timeline */}
            <div className="flex flex-col md:flex-row gap-[24px]">
              {/* Housing the Budget Range */}
              <div className="flex flex-col gap-[8px] flex-1">
                <label htmlFor="Budget Range" className="text-[16px] ">
                  Budget Range (Optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="select a solution"
                    className="focus:outline-none h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 class w-[16px] h-[16px] md:w-[24px] md:h-[24px]">
                    <Image
                      src="/chevron-down.svg"
                      alt="arrow down"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
              {/* Housing the preferred Timeline */}
              <div className="flex flex-col gap-[8px] flex-1">
                <label htmlFor="Full name" className="text-[16px] ">
                  Preferred Timeline
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="select Timeline"
                    className="focus:outline-none h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] md:w-[24px] md:h-[24px]">
                    <Image
                      src="/chevron-down.svg"
                      alt="arrow down"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Time zone */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="Full name" className="text-[16px] ">
                Time Zone
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="select a time zone"
                  className="focus:outline-none h-[40px] w-full  border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem]"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] md:w-[24px] md:h-[24px]">
                  <Image
                    src="/chevron-down.svg"
                    alt="arrow down"
                    width={24}
                    height={24}
                  />
                </span>
              </div>
            </div>

            {/* Product description and checkbox */}
            <div className="flex flex-col gap-2">
              <label>Product Description / Goals</label>
              <textarea
                placeholder="Please describe what you need in detail"
                className="w-full border border-[#8F9092]/40 px-3 h-[60px] md:h-[120px] py-2 rounded focus:outline-none"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-4">
              <input type="checkbox" className="mt-1 w-[24px] h-[24px]" />
              <label className="text-[18px] font-semibold tracking-wide">
                I agree to be contacted by Nexoris regarding my request
              </label>
            </div>

            {/* Button */}
            <div className="  flex justify-center items-center">
              <button className="bg-[#543CDA] text-white font-bold text-[16px] px-6 py-3 md:py-4 md:px-10 rounded mt-3  flex items-center gap-4">
                Submit Quote Request{" "}
                <span>
                  <Image
                    src="/Arrow right.svg"
                    alt="arrow right"
                    width={16}
                    height={16}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/*Housing  Not just a quote */}
        <div className="mt-[5rem] flex flex-col justify-center items-center gap-[1rem]">
          <h3 className="text-[20px] md:text-[32px] font-semibold text-center">
            Not Just a Quote, But a Smarter Beninning
          </h3>
          <p className="text-[16px] md:text-[18px] text-center md:max-w-[620px]">
            At Nexoris, we don’t just price projects, we help shape them. From
            the first message to final deployment, we work as your strategic
            technology partner.
          </p>
          <p className="text-[14px] md:text-[18px] font-semibold text-center md:max-w-[620px] tracking-tight">
            Let's turn ambition into architecture, clearly, confidently, and
            fast.
          </p>
        </div>
      </div>
    </section>
  );
}
