import Image from "next/image";

export default function What() {
  return (
    <section className="">
      {/* Housing the What images and textes */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[5rem] md:mt-[4rem] lg:mt-[12rem] ">
        {/* The image */}
        <div className="rounded-[24px] order-2 lg:order-1 w-[343px] h-[240px] md:w-[590px] md:h-[630px] ">
          <Image
            src="/What-we-image.webp"
            alt="What Image"
            width={560}
            height={617}
          />
        </div>

        {/* Housing What makes us different */}
        <div className="flex flex-col  order-1 lg:order-2 gap-[38px] ">
          <h3 className="w-[343px] md:w-full text-[40px] font-bold ">
            What Makes Us Diffferent
          </h3>

          {/* first section */}
          <div className="flex gap-[12px] ">
            <div>
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[18px] w-[298.5px] md:w-[520px]">
                <span className="font-semibold  pr-2">
                  We don’t just launch. We stay:
                </span>
                The work doesn’t end at deployment. You’ll have ongoing support,
                real improvements, and a team that grows with you.
              </p>
            </div>
          </div>
          {/* second section */}
          <div className="flex gap-[12px] ">
            <div>
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[18px] w-[300px] md:w-[500px] ">
                <span className="font-semibold pr-2">
                  More than partners, but a part of your team:
                </span>
                By understanding how your business truly operates, we build
                solutions that actually fit not just technically, but
                strategically.
              </p>
            </div>
          </div>
          {/* Third section */}
          <div className="flex gap-[12px]">
            <div>
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[18px] w-[300px] md:w-[500px]">
                <span className="font-semibold pr-2">
                  Complexity, made simple:
                </span>
                Forget the jargon. Expect clarity, straight answers, and clean
                execution every step of the way.
              </p>
            </div>
          </div>
          {/* fourth section */}
          <div className="flex gap-[12px]">
            <div>
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[18px] w-[280px] md:w-[500px]">
                <span className="font-semibold pr-2">
                  Quality isn’t negotiable:
                </span>
                Every detail is tested. Every feature is refined. Only the kind
                of work we’d proudly use ourselves ever gets shipped.
              </p>
            </div>
          </div>
          {/* fifth section */}
          <div className="flex gap-[12px]">
            <div>
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[18px] w-[290px] md:w-[500px]">
                <span className="font-semibold pr-2">
                  Technology built for real people:
                </span>
                Because tools should feel natural, not forced. The experiences
                we create work beautifully for your team and your users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
