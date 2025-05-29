'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';

const tools = [
  { name: 'VS Code', image: '/vs-code-logo.png' },
  { name: 'GitLab', image: '/gitlab-icon-logo.png' },
  { name: 'Figma', image: '/figma-logo.png' },
  { name: 'Python', image: '/python-logo.png' },
  { name: 'Adobe XD', image: '/adobe-xd-logo.png' },
  { name: 'Adobe XD', image: '/adobe-xd-logo.png' },
];

const ToolCard = ({ tool, isActive }: { tool: typeof tools[0]; isActive: boolean }) => (
  <div
    className={`group relative w-24 sm:w-28 md:w-32 aspect-square bg-purple-6 rounded-lg overflow-hidden shadow flex items-center justify-center transition-all duration-300 ${
      isActive ? 'scale-120 z-10' : 'scale-90'
    } cursor-pointer`}
    aria-label={tool.name}
  >
    <Image
      src={tool.image}
      alt={`${tool.name} Logo`}
      width={120}
      height={120}
      className="w-14 h-14 sm:w-16 sm:h-16 object-contain group-hover:opacity-0 transition-opacity duration-300"
      priority
    />
    <div className="absolute inset-0 bg-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white px-2 text-center">
      <span className="font-bold text-base sm:text-lg transform group-hover:scale-110 transition-transform">
        {tool.name}
      </span>
    </div>
  </div>
);

export default function Tools() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section
      className="flex flex-col items-center mx-auto overflow-hidden justify-center px-4 sm:px-6 py-24 gap-10 bg-white w-full"
      aria-labelledby="tools-heading"
    >
      <div className="text-center space-y-2 w-full max-w-3xl mx-auto">
        <h2
          id="tools-heading"
          className="text-primary-purple font-extrabold text-xl sm:text-2xl md:text-2xl leading-snug"
        >
          We Use Tools That Power the World&apos;s Best Products
        </h2>
        <p className="text-sm sm:text-base font-medium text-purple-dark">
          We don&apos;t chase trends — we use modern, proven technologies that scale beautifully and stay maintainable.
        </p>
      </div>

      {/* Swiper */}
      <div className="w-full flex justify-center my-8">
        <div className="w-full max-w-[1280px] mx-auto">
          {swiperReady && (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={4}
              slidesPerView={3}
              centeredSlides
              loop
              speed={700}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
              // @ts-expect-error - Swiper types don't include navigation DOM refs
              swiper.params.navigation.prevEl = prevRef.current;

              // @ts-expect-error - Swiper types don't include navigation DOM refs
              swiper.params.navigation.nextEl = nextRef.current;

              }}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              className="!overflow-visible"
            >
              {tools.map((tool, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  {({ isActive }) => <ToolCard tool={tool} isActive={isActive} />}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>

      {/* Arrows below */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          ref={prevRef}
          aria-label="Previous Tool"
          className="w-9 h-9 flex items-center justify-center border-2 border-primary-purple text-primary-purple rounded-full hover:bg-primary-purple hover:text-purple-6 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          aria-label="Next Tool"
          className="w-9 h-9 flex items-center justify-center border-2 border-primary-purple text-primary-purple rounded-full hover:bg-primary-purple hover:text-purple-6 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Footer */}
      <div className="text-center space-y-2 max-w-lg">
        <h3 className="font-bold text-lg sm:text-xl text-primary-purple">
          Have a preferred stack or legacy codebase?
        </h3>
        <p className="text-sm sm:text-base text-purple-dark font-medium">
          We&apos;ll meet you where you are and help take it where it needs to go.
        </p>
      </div>
    </section>
  );
}
