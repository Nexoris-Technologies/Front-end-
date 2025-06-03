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
            a Nexoris expert. You bring the vision. We&apos;ll bring the code,
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
            {/* Housing both the fullname and the email */}
            <div className="flex flex-col md:flex-row gap-[24px]">
              {/* Housing the full name */}
              <div className="flex flex-col gap-[8px] flex-1">
                <label htmlFor="Full name" className="text-[16px] ">
                  Full Name
                </label>
                <input
                  id="Full name"
                  type="text"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 h-[40px]  w-full  border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem]"
                  required
                />
              </div>
              {/* Housing the email */}
              <div className="flex flex-col gap-[8px] flex-1">
                <label htmlFor="Email" className="text-[16px] ">
                  Email
                </label>
                <input
                  id="Email"
                  type="email"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 h-[40px]  w-full   border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem]"
                  required
                />
              </div>
            </div>

            {/* Housing company name */}
            <div className="flex flex-col gap-[8px] ">
              <label htmlFor="Company name" className="text-[16px] ">
                Company Name
              </label>
              <input
                id="Company name"
                type="text"
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] "
                required
              />
            </div>

            {/* select a solution */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="Solution" className="text-[16px] ">
                What solution are you exploring today?
              </label>
              <div className="relative">
                <select
                  name="Solution"
                  id="Solution"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] appearance-none"
                >
                  <option value="none" selected disabled>
                    Select a solution
                  </option>
                  <option value="Core Web Development Solutions">
                    Core Web Development Solutions
                  </option>
                  <option value="Modern Frontend & Backend Solutions">
                    Modern Frontend & Backend Solutions
                  </option>
                  <option value="Performance and Growth Solutions">
                    Performance and Growth Solutions
                  </option>
                  <option value="Security & Compliance">
                    Security & Compliance
                  </option>
                  <option value="Hosting and DevOps">Hosting and DevOps</option>
                  <option value="Others">Others</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] md:w-[24px] md:h-[24px] pointer-events-none">
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
                    id="Budget Range"
                    type="text"
                    className="h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] appearance-none truncate overflow-hidden whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {/* Housing the preferred Timeline */}
              <div className="flex flex-col gap-[8px] flex-1">
                <label htmlFor="Preferred Timeline" className="text-[16px] ">
                  Preferred Timeline
                </label>
                <div className="relative">
                  <select
                    name="Preferred Timeline"
                    id="Preferred Timeline"
                    className="h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] appearance-none truncate overflow-hidden whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="none" selected disabled>
                      Select Timeline
                    </option>
                    <option value="Asap">Asap (1 - 2 weeks)</option>
                    <option value="Short Term">Short Term (2 - 4 weeks)</option>
                    <option value="Standard">Standard (1 - 2 months)</option>
                    <option value="Long Term">Long Term (2 - 4 months)</option>
                    <option value="Flexible / Not sure">
                      Flexible / Not sure
                    </option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] md:w-[24px] md:h-[24px] pointer-events-none">
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
              <label htmlFor="Time Zone" className="text-[16px] ">
                Time Zone
              </label>
              <div className="relative">
                <select
                  name="Time Zone"
                  id="Time Zone"
                  className="h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] appearance-none truncate overflow-hidden whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="none" selected disabled>
                    Select your Time zone
                  </option>
                  <option value="-12:00">
                    (GMT-12:00) International Date Line West
                  </option>
                  <option value="-11:00">
                    (GMT-11:00) Midway Island, Samoa
                  </option>
                  <option value="-10:00">(GMT-10:00) Hawaii</option>
                  <option value="-09:00">(GMT-09:00) Alaska</option>
                  <option value="-08:00">
                    (GMT-08:00) Pacific Time (US & Canada)
                  </option>
                  <option value="-07:00">
                    (GMT-07:00) Mountain Time (US & Canada)
                  </option>
                  <option value="-06:00">
                    (GMT-06:00) Central Time (US & Canada), Mexico City
                  </option>
                  <option value="-05:00">
                    (GMT-05:00) Eastern Time (US & Canada), Bogota, Lima
                  </option>
                  <option value="-04:00">
                    (GMT-04:00) Atlantic Time (Canada), Caracas
                  </option>
                  <option value="-03:00">
                    (GMT-03:00) Buenos Aires, Greenland
                  </option>
                  <option value="-02:00">(GMT-02:00) Mid-Atlantic</option>
                  <option value="-01:00">
                    (GMT-01:00) Azores, Cape Verde Is.
                  </option>
                  <option value="+00:00">
                    (GMT+00:00) London, Lisbon, Casablanca
                  </option>
                  <option value="+01:00">
                    (GMT+01:00) Berlin, Rome, Paris, Madrid
                  </option>
                  <option value="+02:00">
                    (GMT+02:00) Athens, Jerusalem, Cairo
                  </option>
                  <option value="+03:00">
                    (GMT+03:00) Nairobi, Moscow, Baghdad
                  </option>
                  <option value="+03:30">(GMT+03:30) Tehran</option>
                  <option value="+04:00">(GMT+04:00) Dubai, Baku</option>
                  <option value="+04:30">(GMT+04:30) Kabul</option>
                  <option value="+05:00">(GMT+05:00) Islamabad, Karachi</option>
                  <option value="+05:30">
                    (GMT+05:30) India Standard Time (Mumbai, Delhi)
                  </option>
                  <option value="+06:00">(GMT+06:00) Almaty, Dhaka</option>
                  <option value="+07:00">(GMT+07:00) Bangkok, Jakarta</option>
                  <option value="+08:00">
                    (GMT+08:00) Beijing, Perth, Singapore
                  </option>
                  <option value="+09:00">(GMT+09:00) Tokyo, Seoul</option>
                  <option value="+09:30">(GMT+09:30) Adelaide, Darwin</option>
                  <option value="+10:00">(GMT+10:00) Sydney, Guam</option>
                  <option value="+11:00">
                    (GMT+11:00) Magadan, Solomon Is.
                  </option>
                  <option value="+12:00">(GMT+12:00) Auckland, Fiji</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] md:w-[24px] md:h-[24px] pointer-events-none">
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
                className="w-full border border-[#8F9092]/40 px-3 h-[60px] md:h-[120px] py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            At Nexoris, we don&apos;t just price projects, we help shape them.
            From the first message to final deployment, we work as your
            strategic technology partner.
          </p>
          <p className="text-[14px] md:text-[18px] font-semibold text-center md:max-w-[620px] tracking-tight">
            Let&apos;s turn ambition into architecture, clearly, confidently,
            and fast.
          </p>
        </div>
      </div>
    </section>
  );
}