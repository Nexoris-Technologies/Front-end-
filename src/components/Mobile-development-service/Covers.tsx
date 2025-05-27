import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function ServiceCovers() {
  return (
    <section className="bg-[#EAE8f7]">
      {/* General housing section */}
      <div className="flex flex-col justify-center items-center gap-[40px] py-[6rem]">
        <h3 className="text-[24px] md:text-[40px] font-bold text-center">
          What This Service Covers
        </h3>
        {/* Housing the cards */}

        <div className="hidden  md:flex flex-wrap justify-center gap-[24px] max-w-[1224px]">
          {/* The first card */}
          <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
            <div className="">
              <Image src="/num 1-blue.svg" alt="num 1" width={60} height={60} />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-center">
                iOS and Android App Development
              </p>
            </div>
          </div>
          {/* The second card */}
          <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
            <div className="">
              <Image
                src="/num 2 -blue.svg"
                alt="num 1"
                width={60}
                height={60}
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-center">
                Flutter and React Native Builds
              </p>
            </div>
          </div>
          {/* The third card */}
          <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
            <div className="">
              <Image
                src="/num 3 -blue.svg"
                alt="num 1"
                width={60}
                height={60}
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-center">
                Custom API Integration and Backend Sync
              </p>
            </div>
          </div>
          {/* The fourth card */}
          <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
            <div className="">
              <Image
                src="/num 4 -blue.svg"
                alt="num 1"
                width={60}
                height={60}
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-center">
                App Store and Play Store Submission Support
              </p>
            </div>
          </div>
          {/* The fifth card */}
          <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
            <div className="">
              <Image
                src="/num 5 -blue.svg"
                alt="num 1"
                width={60}
                height={60}
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-center">
                Push Notifications and Messaging
              </p>
            </div>
          </div>
          {/* The sixth card */}
          <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
            <div className="">
              <Image
                src="/num 6 -blue.svg"
                alt="num 1"
                width={60}
                height={60}
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-center">
                Offline Mode and Caching Capabilities
              </p>
            </div>
          </div>
          {/* The seventh card */}
          <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
            <div className="">
              <Image
                src="/num 7 -blue.svg"
                alt="num 1"
                width={60}
                height={60}
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-center">
                In-App Payments and Subscription Handling
              </p>
            </div>
          </div>
          {/* The eight card */}
          <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
            <div className="">
              <Image
                src="/num 8 -blue.svg"
                alt="num 1"
                width={60}
                height={60}
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-center">
                User Authentication and Access Control
              </p>
            </div>
          </div>
          {/* The nineth card */}
          <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
            <div className="">
              <Image
                src="/num 9 -blue.svg"
                alt="num 1"
                width={60}
                height={60}
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-center">
                Performance and Crash Monitoring (Firebase, Sentry)
              </p>
            </div>
          </div>
          {/* The tenth card */}
          <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
            <div className="">
              <Image
                src="/num 10 -blue.svg"
                alt="num 1"
                width={60}
                height={60}
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold text-center">
                Accessibility and Mobile UX Compliance
              </p>
            </div>
          </div>
        </div>

        {/* For the mobile view */}
        <div className=" w-full overflow-hidden">
          <Marquee className=" ">
            <div className=" flex md:hidden  gap-[40px] ">
              {/* The first card */}
              <div className="flex flex-col items-center gap-[10px] md:gap-[24px] rounded-[24px] md:rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
                <div className=" w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
                  <Image
                    src="/num 1-blue.svg"
                    alt="num 1"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-center">
                    iOS and Android App Development
                  </p>
                </div>
              </div>
              {/* The second card */}
              <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
                <div className="">
                  <Image
                    src="/num 2 -blue.svg"
                    alt="num 1"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-center">
                    Flutter and React Native Builds
                  </p>
                </div>
              </div>
              {/* The third card */}
              <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
                <div className="">
                  <Image
                    src="/num 3 -blue.svg"
                    alt="num 1"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-center">
                    Custom API Integration and Backend Sync
                  </p>
                </div>
              </div>
              {/* The fourth card */}
              <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
                <div className="">
                  <Image
                    src="/num 4 -blue.svg"
                    alt="num 1"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-center">
                    App Store and Play Store Submission Support
                  </p>
                </div>
              </div>
              {/* The fifth card */}
              <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
                <div className="">
                  <Image
                    src="/num 5 -blue.svg"
                    alt="num 1"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-center">
                    Push Notifications and Messaging
                  </p>
                </div>
              </div>
              {/* The sixth card */}
              <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
                <div className="">
                  <Image
                    src="/num 6 -blue.svg"
                    alt="num 1"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-center">
                    Offline Mode and Caching Capabilities
                  </p>
                </div>
              </div>
              {/* The seventh card */}
              <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
                <div className="">
                  <Image
                    src="/num 7 -blue.svg"
                    alt="num 1"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-center">
                    In-App Payments and Subscription Handling
                  </p>
                </div>
              </div>
              {/* The eight card */}
              <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
                <div className="">
                  <Image
                    src="/num 8 -blue.svg"
                    alt="num 1"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-center">
                    User Authentication and Access Control
                  </p>
                </div>
              </div>
              {/* The nineth card */}
              <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
                <div className="">
                  <Image
                    src="/num 9 -blue.svg"
                    alt="num 1"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-center">
                    Performance and Crash Monitoring (Firebase, Sentry)
                  </p>
                </div>
              </div>
              {/* The tenth card */}
              <div className="flex flex-col items-center gap-[24px] rounded-[24px] py-[24px] px-[16px] w-[288px] shadow-2xl bg-[#FFFFFF] ">
                <div className="">
                  <Image
                    src="/num 10 -blue.svg"
                    alt="num 1"
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-center">
                    Accessibility and Mobile UX Compliance
                  </p>
                </div>
              </div>
              <div className="w-[295px]"></div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
