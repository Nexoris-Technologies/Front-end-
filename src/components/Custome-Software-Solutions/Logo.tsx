import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function CustomLogo() {
  return (
    <section className="py-4 mt-4 w-full px-4 md:px-6 lg:px-11 xl:px-19">
      {/* housing the paragraph text and the logos */}
      <div className="mx-auto px-4">

        <div className="flex flex-col gap-y-2 text-purple-dark" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-md)' }}>
        {/* Housing the paragraph texts */}
        
        <span className="flex gap-4">
          <CircleCheckBig className="text-primary-purple"/>
          <p>Built for operators across logistics, energy, finance, and education.</p>
        </span>
        <span className="flex gap-4">
          <CircleCheckBig className="text-primary-purple"/>
          <p> Trusted to streamline workflows, cut overhead, and power critical systems.</p>
        </span>
        <span className="flex gap-4">
          <CircleCheckBig className="text-primary-purple"/>
          <p>85% of clients launch their first MVP or internal product in 6–12 weeks.</p>
        </span>
      </div>
        <Marquee>
          <div>
            {/* Housing the various cards where flex will be done */}
            <div className=" flex justify-center items-center gap-10 h-auto l lg:w-full mt-4 lg:mt-12 px-2">
              <div className="">
                <Image
                  src="/Kiwi.webp"
                  alt="Kiwi-image"
                  width={120}
                  height={30}
                />
              </div>
              <div className="  ">
                <Image
                  src="/me-direct.webp"
                  alt="Direct-image"
                  width={120}
                  height={30}
                />
              </div>
              <div className=" ">
                <Image
                  src="/Cash-image.webp"
                  alt="Cash-image"
                  width={120}
                  height={30}
                />
              </div>
              <div className=" ">
                <Image
                  src="/Booking.webp"
                  alt="booking-image"
                  width={120}
                  height={30}
                />
              </div>
              <div className=" ">
                <Image
                  src="/rails.webp"
                  alt="Rails-image"
                  width={120}
                  height={30}
                />
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
