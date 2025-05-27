import Image from "next/image";

export default function Who() {
  return (
    <section>
      {/* Housing who we are section */}
      <div className="flex flex-col gap-[100px] mt-[8rem] lg:mt-[14rem]">
        {/* Housing WHO WE ARE */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[3rem] md:gap-[8rem]">
          <div className="rounded-[16px] order-2 lg:order-1  w-[343px] h-[245px] md:w-[580px] md:h-[383px]">
            <Image
              src="/Who-first.webp"
              alt="who-we-are-first"
              width={580}
              height={383}
            />
          </div>

          {/* Who we are textes */}
          <div className="flex flex-col order-1 md:order-1  lg:order-2 gap-[16px] ">
            <h1 className="text-[24px] md:text-[48px] font-semibold  text-[#000000]">
              Who We Are
            </h1>
            <div className="text-[16px] md:text-[18px] 2 flex flex-col gap-2 text-[#000000] w-[330px] tracking-wide  md:w-[570px] ">
              <p className="md:w-[530px]">
                Nexoris Technologies Ltd is a modern tech company made up of
                developers, designers, engineers, analysts, and product
                strategists united by one purpose: helping businesses succeed
                through powerful digital products.
              </p>
              <p className="md:w-[530px]">
                We collaborate with startups, scale-ups, and enterprise teams to
                design and develop web platforms, mobile apps, and custom
                systems that solve real problems efficiently, securely, and
                beautifully.
              </p>
              <p className="md:w-[550px]">
                Whether you're starting from scratch or transforming an existing
                solution, our cross-functional team ensures every product we
                deliver is functional, future-ready, and people-centered.
              </p>
              <p className="md:w-[550px]">
                We take the time to understand your business, not just your
                brief because technology is only valuable when it supports real
                goals.
              </p>
            </div>
          </div>
        </div>

        {/* Housing our story */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[3rem] md:gap-[8rem]">
          {/* Our Story textes */}
          <div className="flex flex-col gap-[16px] ">
            <h1 className="text-[24px] md:text-[48px] font-semibold  text-[#000000]">
              Our Story
            </h1>
            <div className="md:text-[16px] text-[18px] text-[#000000] w-[340px] flex flex-col gap-2 md:w-[580px] ">
              <p>
                We started Nexoris because we’ve lived the frustration of laggy
                systems, missed deadlines, and tech teams that just don’t
                listen. We knew there had to be a better way. So, we built it.
              </p>
              <p>
                From day one, our mission has been clear: deliver top-tier
                digital solutions, communicate like real partners, and treat
                every project like it matters because it does.
              </p>
              <p>
                Today, we work with businesses across industries and borders,
                helping them design smarter workflows, launch better products,
                and grow without limits.
              </p>
            </div>
          </div>

          {/* Our story images */}
          <div className="rounded-[16px]  w-[343px] h-[245px] md:w-[580px] md:h-[305px]">
            <Image
              src="/Who-second.webp"
              alt="who-we-are-second"
              width={580}
              height={305}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
