import Image from "next/image";

export default function Who() {
  return (
    <section>
      {/* Housing who we are and Our story section */}
      <div className="flex flex-col gap-20 lg:gap-50 mt-16 lg:mt-50">
        {/* Housing WHO WE ARE */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-14">
          <div className="w-[343px] h-[245px] order-2 md:order-1 md:w-[580px] md:h-[383px] overflow-hidden relative">
            <Image
              src="/Who-first.webp"
              alt="who-we-are-first"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-3xl"
            />
          </div>

          {/* Who we are textes */}
          <div className="flex flex-col max-w-xl order-1 md:order-1  px-6 md:px-0 lg:order-2 gap-4  lg:gap-8 ">
            <h1 className="text-xl md:text-5xl font-semibold  text-[#000000]">
              Who We Are
            </h1>
            <div className="text-md md:text-lg 2 flex flex-col gap-2 text-[#000000] ">
              <p className="">
                Nexoris Technologies Ltd is a modern tech company made up of
                developers, designers, engineers, analysts, and product
                strategists united by one purpose: helping businesses succeed
                through powerful digital products.
              </p>
              <p className="">
                We collaborate with startups, scale-ups, and enterprise teams to
                design and develop web platforms, mobile apps, and custom
                systems that solve real problems efficiently, securely, and
                beautifully.
              </p>
              <p className="">
                Whether you&apos;re starting from scratch or transforming an
                existing solution, our cross-functional team ensures every
                product we deliver is functional, future-ready, and
                people-centered.
              </p>
              <p className="">
                We take the time to understand your business, not just your
                brief because technology is only valuable when it supports real
                goals.
              </p>
            </div>
          </div>
        </div>

        {/* Housing our story */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-9 md:gap-16">
          {/* Our Story textes */}
          <div className="flex flex-col gap-3 lg:gap-8 ">
            <h1 className="text-xl md:text-5xl font-semibold  text-[#000000]">
              Our Story
            </h1>
            <div className="text-md md:text-lg  text-[#000000] max-w-[340px] flex flex-col gap-2 md:max-w-[580px] ">
              <p>
                We started Nexoris because we&apos;ve lived the frustration of
                laggy systems, missed deadlines, and tech teams that just
                don&apos;t listen. We knew there had to be a better way. So, we
                built it.
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
          <div className=" w-[343px] h-[245px] md:w-[580px] md:h-[350px] relative overflow-hidden">
            <Image
              src="/Who-second.webp"
              alt="who-we-are-second"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
