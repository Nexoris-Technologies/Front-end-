import Image from "next/image";

function Contact() {
  return (
    <section className="">
      {/* Housing all.. Contact Us and the forms */}
      <div className="container mx-auto flex flex-col justify-center items-center gap-4rem mt-[4rem] md:mt-[14rem]">
        {/* housing the Contact us */}
        <div className="rounded-[10px] bg-[#543CDA]/70 py-[2rem] w-full hidden md:block">
          <h1 className="text-white text-[18px] md:text-[56px] font-bold text-center ">
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
                Whether you’re launching a new product, modernizing legacy
                infrastructure, or building your next big idea, our team is
                ready.
              </p>
            </div>
          </div>

          {/* Let's talk and Quick Message section */}
          <div className="w-full md:max-w-[1224px] md:h-[756px] flex flex-col items-center  it md:flex-row gap-[24px] px-4 ">
            {/* Lets Talk */}
            <div className="w-[345px] md:max-w-[496px] order-2 md:order-1 h-[565px] md:h-[550px] rounded-[16px] border-[1px] py-[24px] px-[16px] flex-1 flex-col gap-[32px] border-[#D9D9D9] bg-[#D9D9D9]/4 ">
              {/* Housing Let's Talk and paragraph */}
              <div className=" flex flex-col gap-[8px]">
                <h3 className="text-[24px] md:text-[32px]  font-semibold text-[#000000]">
                  Let's Talk
                </h3>

                {/* paragraph */}
                <div>
                  <p className="text-[16px]  text-[#000000]">
                    Have a challenge worth solving? Let’s explore it together.
                  </p>
                </div>
              </div>

              {/* Emails, Phone, Office section */}
              <div className="w-[311px] md:max-w-[464px] flex flex-col gap-[24px]">
                {/* Email section */}
                <div className=" flex gap-[16px]  items-center">
                  <div>
                    <Image
                      src="/Email.svg"
                      alt="Email-icon"
                      width={60}
                      height={60}
                    />
                  </div>
                  {/* Email us text */}
                  <div className=" ">
                    <h5 className="text-[20px]  font-medium">Email Us</h5>
                    <p className="text-[14px] md:text-[16px]">
                      hello@nexoristech.com
                    </p>
                  </div>
                </div>
                {/* Call section */}
                <div className=" flex  items-center gap-[16px]">
                  <div>
                    <Image src="/Call.svg" alt="Call" width={60} height={60} />
                  </div>

                  {/* Housing the phone and number */}
                  <div>
                    <h5 className="text-[20px] font-medium text-[#000000]">
                      Phone
                    </h5>
                    <p className="text-[14px] md:text-[16px] text-[#000000]">
                      +234 (0) 9138133224
                    </p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-center gap-[16px]">
                  <div>
                    <Image
                      src="/Location.svg"
                      alt="Location"
                      width={65}
                      height={65}
                    />
                  </div>
                  {/* office address and location */}
                  <div>
                    <div>
                      <h5 className="font-medium text-[20px] leading-[32px] text-[#000000]">
                        Office Address
                      </h5>

                      <p className="text-[16px] w-[230px] text-[#000000]">
                        Lekki, Lagos, Nigeria
                      </p>
                    </div>
                    <p className="w-[235px] md:w-[280px]">
                      (Remote-first, serving clients globally)
                    </p>
                  </div>
                </div>
              </div>

              {/* Businesss sect */}
              <div className="w-[311px] md:w-[464px] flex justify-center items-center gap-[16px]">
                <div>
                  <Image src="/Clock.svg" alt="Clock" width={60} height={60} />
                </div>

                {/* business and paragraph */}
                <div className="w-[235px] md:w-[388px] flex flex-col gap-[4px]">
                  <div>
                    <h3 className="font-medium text-[20px] leading-[32px] text-[#000000]">
                      Business Hours
                    </h3>
                    <p className="text-[16px] leading-[26px] text-[#000000]">
                      Monday - Friday
                    </p>
                  </div>
                  <p className=" text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-[#000000] w-[200px]">
                    Timezone-friendly scheduling available worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Message section */}

            {/* Overall div housing the header, p, inputs, I agree and message button */}
            <div className="w-[343px] md:max-w-[704px] order-1 md:order-2  h-[960px] md:h-[756px] rounded-[16px] border-[1px] py-[24px] px-[16px] flex flex-col  items-center gap-[32px] border-[#D9D9D9] bg-[#D9D9D9]/4">
              {/* Housing the Quick message and the P tag */}
              <div className="w-full md:max-w-[672px] flex flex-col gap-[16px]">
                <h3 className="font-semibold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-[#000000]">
                  Quick Message
                </h3>
                <p className="text-[16px] leading-[26px] w-[311px] md:w-[625px] tracking-wide ">
                  Tell us what you're working on. A dedicated member of our team
                  will respond within one business day.
                </p>
              </div>

              {/* Housing the Inputs */}
              <div className="w-[311px] md:max-w-[672px] flex flex-col  gap-[16px]">
                {/* Housing the first name and the last name Input */}
                <div className="flex flex-col md:flex-row gap-[24px] items-center">
                  {/* First Name input */}
                  <div className=" flex flex-col gap-[8px]">
                    <label
                      htmlFor="First Name"
                      className="text-[16px] leading-[26px] md:leading-[16px] text-[#000000]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-[300px] h-[40px] rounded-[4px] border-[1px] focus:outline-none px-3 border-[#8F9092]/40"
                    />
                  </div>

                  {/* Last Name */}
                  <div className=" flex flex-col gap-[8px]">
                    <label
                      htmlFor="Last Name"
                      className="text-[16px] leading-[26px] md:leading-[16px] text-[#000000]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-[300px] h-[40px] rounded-[4px] border-[1px] focus:outline-none px-3 border-[#8F9092]/40"
                    />
                  </div>
                </div>
                {/* Housing the Email and Phone Number Input */}
                <div className="flex flex-col md:flex-row gap-[24px] items-center">
                  {/* Email input */}
                  <div className=" flex flex-col gap-[8px]">
                    <label
                      htmlFor="Email"
                      className="text-[16px] leading-[26px] md:leading-[16px] text-[#000000]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="w-[300px] h-[40px] rounded-[4px] border-[1px] focus:outline-none px-3 border-[#8F9092]/40"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className=" flex flex-col gap-[8px]">
                    <label
                      htmlFor="First Name"
                      className="text-[16px] leading-[26px] md:leading-[16px] text-[#000000]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+234"
                      className="w-[300px] h-[40px] rounded-[4px] border-[1px] focus:outline-none px-3 border-[#8F9092]/40"
                    />
                  </div>
                </div>

                {/* Housing the What subject */}
                <div className=" max-w-[672px] flex flex-col gap-[8px]">
                  <label
                    htmlFor="select Subject"
                    className=" w-[113px]leading-[26px] text-[#000000]"
                  >
                    select Subject
                  </label>
                  <div className="max-w-[672px] flex items-center relative">
                    <input
                      type=""
                      placeholder="select a subject"
                      className=" w-full h-[40px] rounded-[4px] border-[1px] px-3 border-[#879092]/40  focus:outline-none"
                    />
                    <span className="absolute left-[95%] w-[16px] h-[16px] md:w-[24px] md:h-[24px] ">
                      <Image
                        src="/chevron-down.svg"
                        alt="Arrow down"
                        width={24}
                        height={24}
                      />
                    </span>
                  </div>
                </div>

                {/* Housing the message text area */}
                <div className=" md:max-w-[672px] flex flex-col gap-[8px]">
                  <label
                    htmlFor="Message"
                    className="w-[72px]  leading-[26px] text-[#000000]"
                  >
                    Message
                  </label>
                  <textarea
                    name="Message"
                    id="Message"
                    placeholder="Please describe what you need in detail"
                    className="w-[311px] md:max-w-[672px] h-[120px] rounded-[4px] border-[1px] border-[#8F9092]/40 focus:outline-none px-3 py-3"
                  ></textarea>
                </div>

                {/* Checkbox and text beside it  */}
                <div className="w-[311px] md:max-w-[531px] flex items-center gap-[16px]">
                  <input
                    type="checkbox"
                    className="w-[24px] h-[24px] rounded-[4px] border-[1px] border-[#000000]"
                  />
                  <label
                    htmlFor="agreement"
                    className="max-w-[491px] text-[14px] md:text-[18px] leading-[22px] md:leading-[24px] text-[#000000] font-semibold"
                  >
                    I agree to be contacted by nexoris regarding my request
                  </label>
                </div>

                {/* Send message button */}
                <div className=" w-full md:w-[194px] mt-3 h-[44px] md:h-[56px] rounded-[8px] py-[17px]  md:py-[21.5px] px-[32px] flex items-center justify-center bg-[#543CDA]">
                  <button className="font-bold text-[18px]  leading-[24px] text-[#FFFFFF]">
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
