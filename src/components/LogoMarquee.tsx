"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";

const logos = [
  { src: "/Kiwi.webp", alt: "Kiwi" },
  { src: "/me-direct.webp", alt: "Me Direct" },
  { src: "/Cash-image.webp", alt: "Cash" },
  { src: "/Booking.webp", alt: "Booking" },
  { src: "/rails.webp", alt: "Rails" },
];

export default function LogoMarquee() {
  return (
    <div className="w-full py-6 px-4 rounded-lg overflow-hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={32}
        slidesPerView="auto"
        loop={true}
        freeMode={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        className="flex items-center"
      >
        {[...logos, ...logos].map((logo, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex items-center justify-center"
          >
            <div className="w-[28vw] max-w-[120px] h-[32px] relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 120px, 28vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
