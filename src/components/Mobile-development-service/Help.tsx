import Image from "next/image";

export default function Help() {
  return (
    <section>
      {/* Housing Whoe we help Text and the flex section */}
      <div className="pt-[5rem] lg:pt-[12rem] flex flex-col gap-[60px] px-2">
        {/* Housing who we help */}
        <div>
          <h3 className="text-[24px] md:text-[45px] font-bold text-center">
            Who We Help
          </h3>
        </div>
        {/* Housing  the Phone and flexed texes*/}
        <div className="flex flex-col lg:flex-row items-center px-6  lg:items-start justify-center mx-auto container gap-[22px]">
          {/* Housing the first 3 texes */}
          <div className="flex flex-col gap-[32px]">
            {/* The first text */}
            <div className=" flex items-center gap-[16px]">
              <div>
                <Image
                  src="/check single.svg"
                  alt="Single check"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-[16px] md:w-[330px]">
                  Startups with bold app ideas but limited time to hit the
                  market
                </p>
              </div>
            </div>
            {/* The second text */}
            <div className=" flex items-center gap-[16px]">
              <div>
                <Image
                  src="/check single.svg"
                  alt="Single check"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-[16px] md:w-[340px]">
                  Product teams looking to rebuild outdated mobile experiences
                </p>
              </div>
            </div>
            {/* The third text */}
            <div className=" flex items-center gap-[16px]">
              <div>
                <Image
                  src="/check single.svg"
                  alt="Single check"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-[16px] md:w-[320px]">
                  Health, fintech, or logistics companies needing secure, stable
                  apps
                </p>
              </div>
            </div>
          </div>
          {/* Housing the Image of the PHONE */}
          <div className="order-3 lg:order-2">
            <Image
              src="/Phone image.webp"
              alt="Phone Image"
              width={320}
              height={572}
            />
          </div>
          {/* Housing the second row textes */}
          <div className="flex order-2 lg:order-3 flex-col gap-[32px]">
            {/* The fourth text */}
            <div className=" flex items-center gap-[16px]">
              <div>
                <Image
                  src="/check single.svg"
                  alt="Single check"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-[16px] md:w-[420px] tracking-wider">
                  Businesses ready to turn their web platforms into full mobile
                  solutions
                </p>
              </div>
            </div>
            {/* The fifth text */}
            <div className=" flex items-center gap-[16px]">
              <div>
                <Image
                  src="/check single.svg"
                  alt="Single check"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-[16px] md:w-[420px] tracking-wider">
                  Founders ready to upgrade their MVPs into full-scale mobile
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
