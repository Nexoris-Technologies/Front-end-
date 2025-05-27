import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#EAE8F7] w-full">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-[calc(27.4%-335px)] w-[1500px] h-[180vh] z-0 bg-[repeating-linear-gradient(to_right,_rgba(0,89,241,0.10)_0px,_rgba(0,89,241,0.10)_1px,_transparent_-1px,_transparent_99.9px)]"></div>

        {/* Housing both the hero page and the icons borders */}
        <div className="   container mx-auto">
          {/* Housing only the heropage(textes, images) where the lines will be applied to */}
          <div className=" relative flex flex-col lg:flex-row h-auto justify-center items-center gap-[90px] md:gap-[24px]  px-4  md:py-36">
            {/* The first part of the hero section */}
            <div className=" flex-1 md:basis-1/2 flex flex-col justify-center   gap-[40px] md:gap-[90px]">
              {/* h1 text */}
              {/* To properly gap the header, p and button seperate from the others */}
              <div className="flex flex-col justify-center gap-[25px]">
                <div className=" max-w-[390px] text-center md:text-left  md:max-w-[670px] ">
                  <h1 className="font-extrabold text-[28px] leading-[36px] md:text-[48px] md:leading-[55px] tracking-tightest text-[#08101D]">
                    You Dream It. We Build It Right. From Day One.
                  </h1>
                </div>
                {/* Paragraph text */}
                <div className="max-w-[362px]   text-center md:text-left  md:max-w-[536px] ">
                  <p className="text-[16px] leading-[27px] md:text-[18px] md:leading-[32px] tracking-wider ">
                    You've been sketching, pitching, overthinking. Maybe even
                    burned by slow devs or unstable builds. At Nexoris, we don’t
                    just launch MVPs, we build fast, scalable products that are
                    easy to grow, easy to love, and ready for whatever’s next.
                  </p>
                </div>
                {/* build button */}
                <div className="w-[208px] md:w-[289px] mx-auto md:mx-0 rounded-[8px] py-[20px] px-[31px] flex items-center justify-center gap-[10px] bg-[#543CDA]">
                  <button className="w-[160px] text-[11px] md:w-[228px]  md:text-[17px] leading-[100%] tracking-wide text-[#FFFFFF] font-medium ">
                    Let's Build Something Great
                  </button>
                </div>
              </div>

              {/* Growing teams */}
              {/* Housing the growing team */}
              <div>
                {/*Paragraph text  */}
                {/* wrapping the trusted and the growing terms for a proper gapping */}
                <div className="flex flex-col  justify-center gap-[12px]">
                  <div className="w-[268px] md:w-[303px] mx-auto md:mx-0 ">
                    <p className="text-[16px] md:text-[18px] leading-[32px] tracking-wide">
                      Trusted by 50+ fast-growing teams
                    </p>
                  </div>

                  {/* Housing the figures and textes */}
                  <div className=" w-[315px] mx-auto md:mx-0 md:w-[480px]  flex justify-center items-center gap-[20px] md:gap-[48px]">
                    {/* housing 3-seconds */}
                    <div className="w-[100px]  md:w-[138px]  flex flex-col justify-center items-center gap-[11px]">
                      <h2 className=" text-[22px] md:text-[30px] leading-[100%] tracking-tighter w-[136px]">
                        3-seconds
                      </h2>
                      <div className="w-[130px]  md:w-[140px] ">
                        <p className="text-[10px] md:text-[15px] leading-[26px] md:tracking-wide">
                          Average Load Time
                        </p>
                      </div>
                    </div>
                    {/* Housing the 40+ */}
                    <div className="w-[56px]  md:w-[84px]  flex flex-col justify-center items-center gap-[11px]">
                      <div className="w-[56px] md:w-[84px] ">
                        <h2 className="text-[20px] md:text-[30px] leading-[100%] tracking-wide">
                          +40%
                        </h2>
                      </div>
                      <div className="md:w-[80px] ">
                        <p className="text-[10px] md:text-[15px] leading-[26px] tracking-wide">
                          SEO uplift
                        </p>
                      </div>
                    </div>
                    {/* housing the Zero-crash */}
                    <div className="w-[115px]  md:w-[158px]  flex flex-col justify-center items-center gap-[11px]">
                      <div className="w-[115px]  md:w-[158px]  ">
                        <h2 className="text-[22px] md:text-[30px] leading-[100%] tracking-wide">
                          Zero-crash
                        </h2>
                      </div>
                      <div className="w-[57px] md:w-[87px] ">
                        <p className="text-[10px] md:text-[15px] leading-[26px] tracking-wide">
                          Mobile apps
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            {/* housing the image and the cards placed at absolute positions*/}

            <div className="relative ">
              <div className="absolute inset-0 z-0 py-[6rem] bg-[#543CDA] blur-[103px] opacity-35"></div>
              <div className="relative ">
                <Image
                  src="/Hero-image.webp"
                  alt="Hero-image"
                  width={695}
                  height={369}
                />

                {/* First semi card at diffeent angles */}
                <div className=" w-[160px] h-[68px] py-[7px] px-[19px] md:w-[280px] md:h-[106px] rounded-[20px] md:py-[15px] flex flex-col justify-center items-center gap-[10px] bg-[#ffffff] absolute -top-[5%] left-[55%] md:-top-[1%] md:left-[62%] transform -translate-y-1/2 ">
                  <div className="w-[24.42px] h-[23.50px] absolute top-[12px] md:top-[14px] text-[22px]  md:left-1/2 transform md:-translate-x-1/2 text-[#543CDA]  ">
                    <Image
                      src="/shield-check--shield-protection-security-defend-crime-war-cover-check.svg"
                      alt="Shield check"
                      width={18.42}
                      height={19.35}
                      className="w-[15px] h-[16px]"
                    />
                  </div>
                  <div className="w-[123px] h-[30px] md:w-[245px] md:h-[45px] mt-[2rem]">
                    <p className="text-center  tracking-widest text-[7px] md:text-[12px] leading-[10px] md:leading-[15px]  text-[#080C11]">
                      Nexoris is 100% Tested and Trusted and we will take your
                      dreams and build something
                    </p>
                  </div>
                  <div className="  ">
                    <div className="w-[25px] h-[25px] md:w-[37px] md:h-[37px] absolute left-[-12%] md:-left-[27px] top-[40px]  rotate-[-8deg]">
                      <Image
                        src="/cursor-arrow-1.svg"
                        alt="cursor-arrow-1"
                        width={37.63}
                        height={37.38}
                      />
                    </div>
                  </div>
                </div>

                {/* Secong semi card */}
                <div className="w-[177px] h-[77px] md:w-[335px] md:h-[131px]  md:p-4 py-[7px] px-[19px] md:px-[13px] flex flex-col gap-[12px] md:gap-[35px] rounded-[20px] absolute top-[102%]  md:top-[98%] -left-[2%] md:left-[-8%] -translate-y-1/2 bg-[#ffffff]">
                  <div className="w-[153px] h-[24px]">
                    <p className=" text-[7px] leading-[10px] md:w-[310px] md:h-[57px] md:leading-[14px] md:text-[11px] text-[#080C11]">
                      “Before Nexoris, we were constantly patching bugs and
                      bleeding traffic. They rebuilt our site from scratch. Now
                      we rank in Google’s top 7. And conversions? Tripled.”
                    </p>
                  </div>
                  <div className="flex gap-[8px] w-[78px] h-[25px] md-[126px] md:h-[45px]">
                    <Image
                      src="/Ellipse 1.webp"
                      alt="Card-image"
                      width={45}
                      height={45}
                      className="rounded-full w-[26px] h-[25px] mt-2 md:w-[45px] md:h-[45px]"
                    />

                    <div className="flex flex-col justify-center  w-[30px] h-[29px] md:w-[73px] md:h-[44px] ">
                      <div className="w-[29px] h-[10px] md:w-[68px] md:h-[30px]">
                        <h1 className="font-semibold text-[6px] md:text-[12px] leading-[10px] md:leading-[30px]   text-[#000000] tracking-wide">
                          Damilola E.
                        </h1>
                      </div>
                      <div className="w-[44px] h-[10px] md:w-[73px] md:h-[26px]">
                        <p className=" text-[7px] leading-[10px] md:text-[11px] md:leading-[30px] tracking-tight ">
                          CTO, Medirect
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}

                  <div className="  ">
                    <div className=" absolute -left-[8%] md:left-[-8%] top-[60%] md:top-[50%] rotate-[-8deg]">
                      <Image
                        src="/cursor-arrow 2.svg"
                        alt="cursor-arrow 2"
                        width={37.2}
                        height={37.02}
                        className="w-[25px] h-[25px] md:w-[37.2px] md:h-[37.2px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section for the Kiwi, cash etc images */}
      <div className="pt-[4rem] pb-[1rem] max-w-[30rem] md:max-w-[97rem] mx-auto px-4">
        <div className=" flex items-center justify-center -mb-[5rem] h-[48px]  md:w-full  rounded-[15px] md:h-[118px] bg-[#F9F9FA]">
          {/* Housing the various cards where flex will be done */}
          <div className="w-[229px] h-[16.7px] md:w-[1150px] md:h-[48px] flex justify-center items-center gap-[18px] md:gap-[3rem] lg:gap-[110px] px-2">
            <div className=" w-[51px] h-[12.75px] md:w-[152px] md:h-[38px]">
              <Image
                src="/Kiwi.webp"
                alt="Kiwi-image"
                width={152}
                height={38}
              />
            </div>
            <div className="w-[53px] h-[16px]  md:w-[161px] md:h-[48px]">
              <Image
                src="/me-direct.webp"
                alt="Direct-image"
                width={161}
                height={48}
              />
            </div>
            <div className="w-[42.37] h-[16.7px] md:w-[122.88] md:h-[48px]">
              <Image
                src="/Cash-image.webp"
                alt="Cash-image"
                width={122.88}
                height={48}
              />
            </div>
            <div className=" w-[42px] h-[8px] md:w-[84px] md:h-[16px]">
              <Image
                src="/Booking.webp"
                alt="booking-image"
                width={84}
                height={16}
              />
            </div>
            <div className=" w-[50.9px] h-[16.7px] md:w-[84] md:h-[16px]">
              <Image
                src="/Group 96.webp"
                alt="Rails-image"
                width={84}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
