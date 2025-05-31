import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function CustomLogo() {
  return (
    <section>
      {/* housing the paragraph text and the logos */}
      <div className="flex flex-col items-center gap-[40px]  py-[4rem]">
        {/* Housing the paragraph texts */}

        <ul className="list-disc pl-5 space-y-3 w-[303px] mx-auto md:w-[540px] ">
          <ul className="list-disc pl-5 mt-2">
            <li>
              Built for operators across logistics, energy, finance, and
              education.
            </li>
          </ul>
          <li>
            Trusted to streamline workflows, cut overhead, and power critical
            systems
            <ul className="list-disc pl-5 mt-2">
              <li>
                85% of clients launch their first MVP or internal product in
                6–12 weeks.
              </li>
            </ul>
          </li>
        </ul>

        <Marquee>
          <div>
            {/* Housing the various cards where flex will be done */}
            <div className=" flex justify-center items-center gap-[45px] lg:gap-[90px] w-[700px] h-auto l lg:w-full   px-2">
              <div className="  md:w-[204px] md:h-[60px]">
                <Image
                  src="/Kiwi.webp"
                  alt="Kiwi-image"
                  width={204}
                  height={60}
                />
              </div>
              <div className="  ">
                <Image
                  src="/me-direct.webp"
                  alt="Direct-image"
                  width={201}
                  height={60}
                />
              </div>
              <div className=" ">
                <Image
                  src="/Cash-image.webp"
                  alt="Cash-image"
                  width={201}
                  height={60}
                />
              </div>
              <div className=" ">
                <Image
                  src="/Booking.webp"
                  alt="booking-image"
                  width={260}
                  height={60}
                />
              </div>
              <div className=" ">
                <Image
                  src="/rails.webp"
                  alt="Rails-image"
                  width={125}
                  height={20}
                />
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
