import Image from "next/image";

function Contact() {
  return (
    <section className="">
      {/* Housing all.. Contact Us and the forms */}
      <div className="container mx-auto  flex flex-col justify-center items-center gap-4rem mt-[4rem] ">
        {/* housing the Contact us */}
        <div className="rounded-[10px] bg-[#543CDA] py-[2rem] lg:w-full hidden md:block">
          <h1 className="text-white  md:text-[18px] lg:text-[56px] font-bold text-center ">
            Contact Us
          </h1>
        </div>

        {/* Housing the Get in touch, the p-tag, the cards and the button */}
        <div className="flex flex-col gap-[60px]">
          {/* Housing Get in touch and the paragraph text */}
          <div className="flex flex-col justify-center items-center gap-[24px] mt-[3rem]">
            <div className="max-w-[20rem] md:max-w-[50rem]">
              <h3 className="text-[24px] md:text-[40px] text-center font-bold leading-[32px] md:leading-[48px]">
                Get in Touch with Nexoris Technologies
              </h3>
            </div>
            <div className="max-w-[19rem] md:max-w-[65rem]">
              <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-center">
                At Nexoris, we work with ambitious companies around the world to
                design, build, and scale digital solutions that make an impact.
                Whether you&apos;re launching a new product, modernizing legacy
                infrastructure, or building your next big idea, our team is
                ready.
              </p>
            </div>
          </div>

          {/* Let’s Talk & Quick Message Section */}
          <div className="w-full max-w-[1224px] md:mb-[5rem] mb-[2rem]  flex flex-col lg:flex-row gap-[24px] px-4">
            {/* Let’s Talk */}
            <div className="flex-1 rounded-[16px] md:h-[514px] order-2  md:order-1 border border-[#D9D9D9] bg-[#D9D9D9]/4 p-6 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] md:text-[32px] font-semibold text-[#000000]">
                  Let&apos;s Talk
                </h3>
                <p className="text-[16px] text-[#000000]">
                  Have a challenge worth solving? Let&apos;s explore it together.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <Image src="/Email.svg" alt="Email" width={40} height={40} />
                  <div>
                    <h5 className="text-[18px] font-medium">Email Us</h5>
                    <p className="text-[16px]">hello@nexoristech.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <Image src="/Call.svg" alt="Call" width={40} height={40} />
                  <div>
                    <h5 className="text-[18px] font-medium">Phone</h5>
                    <p className="text-[16px]">+234 (0) 9138133224</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <Image
                    src="/Location.svg"
                    alt="Location"
                    width={40}
                    height={40}
                  />
                  <div>
                    <h5 className="text-[18px] font-medium">Office Address</h5>
                    <p className="text-[16px]">Lekki, Lagos, Nigeria</p>
                    <p className="text-[14px]">
                      (Remote-first, serving clients globally)
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <Image src="/Clock.svg" alt="Clock" width={40} height={40} />
                  <div>
                    <h5 className="text-[18px] font-medium">Business Hours</h5>
                    <p className="text-[16px]">Monday - Friday</p>
                    <p className="text-[14px]">
                      Timezone-friendly scheduling available worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="flex-1 rounded-[16px] h-[700px] order-1 md:order-1 border border-[#D9D9D9] bg-[#D9D9D9]/4 p-6 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] md:text-[32px] font-semibold text-[#000000]">
                  Quick Message
                </h3>
                <p className="text-[16px] text-[#000000]">
                  Tell us what you&apos;re working on. A dedicated member of our team
                  will respond within one business day.
                </p>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-4">
                {/* First & Last Name */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="border border-[#8F9092]/40 px-3 py-2 rounded"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="border border-[#8F9092]/40 px-3 py-2 rounded"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <label>Email</label>
                    <input
                      type="email"
                      className="border border-[#8F9092]/40 px-3 py-2 rounded"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      placeholder="+234"
                      className="border border-[#8F9092]/40 px-3 py-2 rounded"
                    />
                  </div>
                </div>

                {/* Subject Select */}
                <div className="flex flex-col gap-2">
                  <label>Select Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select a subject"
                      className="w-full border border-[#8F9092]/40 px-3 py-2 rounded"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Image
                        src="/chevron-down.svg"
                        alt="Down"
                        width={20}
                        height={20}
                      />
                    </span>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label>Message</label>
                  <textarea
                    placeholder="Please describe what you need in detail"
                    className="w-full border border-[#8F9092]/40 px-3 py-2 rounded"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <label className="text-sm font-medium">
                    I agree to be contacted by Nexoris regarding my request
                  </label>
                </div>

                {/* Button */}
                <div className="md:mt-[2rem]">
                  <button className="bg-[#543CDA] text-white font-bold text-[16px] px-6 py-3 md:py-3 md:px-8 rounded w-full md:w-[200px]">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
