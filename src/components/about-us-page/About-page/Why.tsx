import Image from "next/image";

export default function Why() {
  return (
    <section>
      {/* Housing All what we do */}
      <div className="flex flex-col lg:flex-row gap-20 md:gap-20 items-center justify-center mt-8 lg:mt-25  mx-auto container max-w-7xl">
        {/* Housing Why we do ALL textes */}
        <div className="flex flex-col gap-6 max-w-xl  ">
          {/* Housing Why we do */}
          <div className="flex flex-col gap-5 w-[353px] md:w-full md:gap-[16px] border-[1px] p-5 rounded-2xl border-[#898989]/40">
            <h3 className="text-xl md:text-3xl font-semibold ">Why We Do It</h3>
            <div className="  md:text-lg sm:w-[400px]  ">
              Why We Do It Because we believe every business deserves technology
              that works without headaches.
              <p className=" w-[300px] sm:w-[370px] md:w-[490px]">
                Too many companies are stuck with rigid tools, broken workflows,
                or disjointed systems. We’re here to change that. At Nexoris, we
                care about clean code and seamless
              </p>
              <p className="w-[330px] md:w-[490px]">
                interfaces, but we care even more about the people who use them.
                That’s why we stay curious, ask better questions, and never cut
                corners.
              </p>
              <p className="w-[330px] md:w-[480px]">
                We don’t build quick fixes. We build long-term foundations for
                growth.
              </p>
            </div>
          </div>
          {/* Housing Our Vision */}
          <div className="flex flex-col gap-2 w-[353px] md:w-full md:gap-3 border-[1px] p-4 rounded-2xl border-[#898989]/40">
            <h3 className="text-xl md:text-3xl font-semibold">Our Vision</h3>
            <p className=" md:text-lg  md:w-[490px]">
              To become the most trusted tech partner for businesses seeking
              smart, scalable, and human-centered digital solutions.
            </p>
          </div>
          {/* Housing Our Mission */}
          <div className="flex flex-col w-[353px] md:w-full gap-2 md:gap-3 border-[1px] p-2 rounded-xl border-[#898989]/40">
            <h3 className="text-lg md:text-3xl font-semibold">Our Mission</h3>
            <p className="  md:text-lg md:w-[490px]">
              To help businesses thrive by delivering simple, secure, and
              sustainable digital tools built with care, backed by strategy, and
              designed to grow.
            </p>
          </div>
        </div>

        {/* Housing Why we do image */}
        <div className="rounded-[24px] w-[360px] h-[454px] md:w-[560px] md:h-[741px] relative overflow-hidden">
          <Image
            src="/Why-we-image.webp"
            alt="Why we do Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
