import Image from "next/image";

export default function Who() {
  return (
    <section className=" w-full">
      {/* Housing the Who we are section */}
      <div className="flex flex-col gap-20 mt-16 px-4 lg:px-8 w-full">
        {/* Who We Are section */}
        <div className="flex flex-col lg:flex-row gap-9 lg:gap-16 w-full">
          {/* Image */}
          <div className="w-full max-w-full h-[245px] sm:h-[395px] lg:h-[383px] lg:w-1/2 overflow-hidden relative order-2 lg:order-1">
            <Image
              src="/Who-first.webp"
              alt="who-we-are-first"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-3xl"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4 md:gap-8 order-1 lg:order-2 w-full lg:w-1/2 text-[#000000]">
            <h1 className="text-xl md:text-5xl font-semibold">Who We Are</h1>
            <div className="text-md md:text-lg flex flex-col gap-2">
              <p>
                Nexoris Technologies Ltd is a modern tech company made up of
                developers, designers, engineers, analysts, and product
                strategists united by one purpose: helping businesses succeed
                through powerful digital products.
              </p>
              <p>
                We collaborate with startups, scale-ups, and enterprise teams to
                design and develop web platforms, mobile apps, and custom
                systems that solve real problems efficiently, securely, and
                beautifully.
              </p>
              <p>
                Whether you&apos;re starting from scratch or transforming an
                existing solution, our cross-functional team ensures every
                product we deliver is functional, future-ready, and
                people-centered.
              </p>
              <p>
                We take the time to understand your business, not just your
                brief because technology is only valuable when it supports real
                goals.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story section */}
        <div className="flex flex-col lg:flex-row gap-9 lg:gap-16 w-full">
          {/* Text */}
          <div className="flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2 text-[#000000]">
            <h1 className="text-xl md:text-5xl font-semibold">Our Story</h1>
            <div className="text-md md:text-lg flex flex-col gap-2">
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

          {/* Image */}
          <div className="w-full max-w-full h-[245px] sm:h-[395px] lg:h-[383px] lg:w-1/2 overflow-hidden relative">
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
