import Image from "next/image";

export default function Why() {
  return (
    <section className=" w-full">
      <div className="flex flex-col lg:flex-row  gap-6 lg:gap-15 px-4 sm:px-6 lg:px-4 py-20 w-full">
        {/* Text Column */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          {/* Group of all three cards */}
          <div className="flex flex-col gap-8 h-full">
            {/* Why We Do It */}
            <div className="flex flex-col gap-5 border p-6 rounded-2xl border-[#898989]/40 bg-white/10 flex-1">
              <h3 className="text-xl md:text-3xl font-semibold">
                Why We Do It
              </h3>
              <div className="text-base md:text-lg leading-7 md:leading-8 space-y-4">
                <p>
                  We do it because we believe every business deserves technology
                  that works without headaches.
                </p>
                <p>
                  Too many companies are stuck with rigid tools, broken
                  workflows, or disjointed systems. We’re here to change that.
                  At Nexoris, we care about clean code and seamless interfaces,
                  but we care even more about the people who use them.
                </p>
                <p>
                  That’s why we stay curious, ask better questions, and never
                  cut corners. We don’t build quick fixes. We build long-term
                  foundations for growth.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="flex flex-col gap-4 p-6 border rounded-2xl border-[#898989]/40 bg-white/10 flex-1">
              <h3 className="text-xl md:text-3xl font-semibold">Our Vision</h3>
              <p className="text-base md:text-lg">
                To become the most trusted tech partner for businesses seeking
                smart, scalable, and human-centered digital solutions.
              </p>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col gap-4 p-6 border rounded-2xl border-[#898989]/40 bg-white/10 flex-1">
              <h3 className="text-xl md:text-3xl font-semibold">Our Mission</h3>
              <p className="text-base md:text-lg">
                To help businesses thrive by delivering simple, secure, and
                sustainable digital tools built with care, backed by strategy,
                and designed to grow.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex lg:justify-end lg:w-1/2">
          <div className="relative w-full   aspect-[3/4] lg:aspect-auto overflow-hidden rounded-2xl">
            <Image
              src="/Why-we-image.webp"
              alt="Why we do Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
