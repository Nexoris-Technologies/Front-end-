import Image from "next/image";

export default function What() {
  return (
    <section className=" w-full">
      {/* Housing the What images and textes */}
      <div className="flex flex-col lg:flex-row  gap-10 lg:gap-15  lg:py-10 px-4 lg:px-4">
        {/* The image */}
        <div className="w-full flex lg:justify-end order-2 lg:order-1  lg:w-1/2">
          <div className="relative w-full  aspect-[3/4] lg:aspect-auto overflow-hidden rounded-2xl">
            <Image
              src="/What-we-image.webp"
              alt="What Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Housing What makes us different */}
        <div className="flex flex-col  order-1 lg:order-2 gap-4 lg:gap-[38px] lg:w-1/2">
          <h3 className=" md:w-full text-xl lg:text-4xl font-bold ">
            What Makes Us Diffferent
          </h3>

          {/* first section */}
          <div className="flex gap-3 ">
            <div>
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                width={40}
                height={24}
              />
            </div>
            <div>
              <p className="text-lg ">
                <span className="font-semibold  pr-2">
                  We don’t just launch. We stay:
                </span>
                The work doesn’t end at deployment. You’ll have ongoing support,
                real improvements, and a team that grows with you.
              </p>
            </div>
          </div>
          {/* second section */}
          <div className="flex gap-3 ">
            <div>
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                width={40}
                height={24}
              />
            </div>
            <div>
              <p className="text-lg  ">
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
          <div className="flex gap-3">
            <div>
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                width={30}
                height={24}
              />
            </div>
            <div>
              <p className="text-lg ">
                <span className="font-semibold pr-2">
                  Complexity, made simple:
                </span>
                Forget the jargon. Expect clarity, straight answers, and clean
                execution every step of the way.
              </p>
            </div>
          </div>
          {/* fourth section */}
          <div className="flex gap-3">
            <div>
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                width={40}
                height={24}
              />
            </div>
            <div>
              <p className="text-lg ">
                <span className="font-semibold pr-2">
                  Quality isn’t negotiable:
                </span>
                Every detail is tested. Every feature is refined. Only the kind
                of work we’d proudly use ourselves ever gets shipped.
              </p>
            </div>
          </div>
          {/* fifth section */}
          <div className="flex gap-3">
            <div>
              <Image
                src="/check-icon.svg"
                alt="check-icon"
                width={40}
                height={24}
              />
            </div>
            <div>
              <p className="text-lg ">
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
