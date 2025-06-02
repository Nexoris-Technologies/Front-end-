"use client";

import Image from "next/image";
import Link from "next/link";
import LogoMarquee from "@/components/LogoMarquee";

export default function Hero() {
  return (
    <>
      <section
        className="bg-purple-6 w-full overflow-hidden py-12"
        aria-label="Hero Section"
      >
        {/* Decorative background pattern */}
        <div className="relative">
          {/* Main Container */}
          <div className="relative container mx-auto px-6 lg:px-12 xl:px-20 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-[60px] md:gap-[24px] py-20 mx-auto w-full">
              {/* Left Section */}
              <div className="flex-1 flex flex-col justify-center gap-[40px] md:gap-[90px] container mx-auto">
                <div className="flex flex-col justify-center gap-[25px]">
                  <div className="max-w-[670px] text-center md:text-left">
                    <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl   lg:leading-[3rem] tracking-tightest text-purple-dark">
                      You Dream It. We Build It Right. From Day One.
                    </h1>
                  </div>
                  <div className=" w-full lg:max-w-[536px] text-center md:text-left">
                    <p className="text-purple-dark text-base font-poppins">
                      You&apos;ve been sketching, pitching, overthinking. Maybe
                      even burned by slow devs or unstable builds. At Nexoris,
                      we don&apos;t just launch MVPs, we build fast, scalable
                      products that are easy to grow, easy to love, and ready
                      for whatever&apos;s next.
                    </p>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row lg:block gap-x-12 items-center content-center">
                    <Link
                      href="/contact-us"
                      className="w-fit mt-12 md:mt-0 lg:h-auto rounded-lg py-3 lg:py-5 px-4 lg:px-8 flex items-center justify-center bg-primary-purple hover:bg-primary-blue mx-auto md:mx-0 leading-[100%] tracking-wide text-purple-6 cursor-pointer font-medium"
                    >
                      Let&apos;s Build Something Great
                    </Link>

                    {/* Social Proof */}
                    <div className="flex flex-col justify-center gap-y-4 md:gap-x[12px] mt-4">
                      <p className="text-base font-semibold font-poppins text-purple-dark text-center md:text-left w-full max-w-[303px]">
                        Trusted by 50+ fast-growing teams
                      </p>
                      <div className="flex gap-x-4 md:gap-x-15 items-center mt-2">
                        <div className="flex flex-col">
                          <h2 className="text-base lg:text-xl font-bold">
                            3-seconds
                          </h2>
                          <p className="text-sm text-purple-dark">
                            Average Load Time
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <h2 className="text-base lg:text-xl font-bold">
                            +40%
                          </h2>
                          <p className="text-sm text-purple-dark">SEO uplift</p>
                        </div>
                        <div className="flex flex-col">
                          <h2 className="text-base lg:text-xl font-bold">
                            Zero-crash
                          </h2>
                          <p className="text-sm text-purple-dark">
                            Mobile apps
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="relative flex-1 flex justify-center items-center">
                <div className="absolute inset-0 z-0 py-[6rem] bg-primary-purple blur-[103px] opacity-35"></div>
                <div className="relative w-full">
                  <Image
                    src="/Hero-image.webp"
                    alt="Hero image"
                    width={695}
                    height={369}
                    className="w-full h-auto"
                  />
                  <div className="hidden absolute -top-[5%] left-[55%] md:-top-[1%] md:left-[48%] transform -translate-y-1/2 w-[160px] h-[3rem] lg:w-[220px] xl:w-[280px] md:h-[106px] rounded-[20px] bg-white lg:flex flex-col items-center justify-center gap-[10px] px-[19px] py-[7px] md:py-[15px]">
                    <Image
                      src="/shield-check--shield-protection-security-defend-crime-war-cover-check.svg"
                      alt="Shield check"
                      width={15}
                      height={16}
                      className="absolute top-[12px] md:top-[14px] left-1/2 transform -translate-x-1/2 text-[#543CDA]"
                    />
                    <p className="text-[7px] md:text-[12px] leading-[10px] md:leading-[15px] tracking-widest text-center mt-[2rem]">
                      Nexoris is 100% Tested and Trusted and we will take your
                      dreams and build something
                    </p>
                    <div className="absolute left-[-12%] md:-left-[27px] top-[40px] rotate-[-8deg]">
                      <Image
                        src="/cursor-arrow-1.svg"
                        alt="Cursor arrow"
                        width={37.63}
                        height={37.38}
                      />
                    </div>
                  </div>
                  <div className="hidden absolute top-[100%] md:top-[100%] -left-[2%] md:left-[-8%] -translate-y-1/2 w-[10rem] h-[5rem] md:w-[335px] md:h-[7rem] bg-white rounded-[1rem] px-[1rem] py-0.5 md:p-4 lg:flex flex-col gap-0.5">
                    <p className="text-[7px] md:text-[11px] leading-[10px] md:leading-[14px] text-[#080C11]">
                      &quot;Before Nexoris, we were constantly patching bugs and
                      bleeding traffic. They rebuilt our site from scratch. Now
                      we rank in Google&#39;s top 7. And conversions?
                      Tripled.&quot;
                    </p>
                    <div className="flex items-center gap-x-0.5">
                      <Image
                        src="/Ellipse1.webp"
                        alt="Client image"
                        width={40}
                        height={40}
                        className="rounded-full w-[1.5rem] h-[1.5rem] md:w-[2.5rem] md:h-[2.5rem]"
                      />
                      <div className="flex flex-col justify-center">
                        <p className="text-[6px] md:text-[12px] mt-2 font-semibold text-[#000]">
                          Damilola E.
                        </p>
                        <p className="text-[7px] md:text-[11px] leading-[10px] md:leading-[30px] tracking-tight">
                          CTO, Medirect
                        </p>
                      </div>
                    </div>
                    <div className="absolute -left-[8%] md:left-[-8%] top-[60%] md:top-[50%] rotate-[-8deg]">
                      <Image
                        src="/cursor-arrow 2.svg"
                        alt="Cursor arrow 2"
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
        {/* Client Logos */}
        <div className="hidden absolute shadow-purple-dark left-0 right-0 shadow  translate-y-1/2 z-5 bg-white rounded-lg overflow-hidden w-[85%] mx-auto h-20 lg:flex items-center content-center">
          <LogoMarquee />
        </div>
      </section>
    </>
  );
}

// xl:bottom-[-8%] bottom-[50%]
