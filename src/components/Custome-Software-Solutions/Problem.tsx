'use client';

import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useRef, useState } from 'react';

const problems = [
  {
    text: 'Our team wastes hours on manual steps that should be automated.',
    color: '#543CDA',
  },
  {
    text: 'Off-the-shelf software doesn’t fit our needs and keeps breaking things.',
    color: '#FD9300',
  },
  {
    text: 'We need to centralize operations across departments and systems.',
    color: '#54C300',
  },
  {
    text: 'There’s no real visibility into our workflows, data, or timelines.',
    color: '#0059F1',
  },
  {
    text: 'We want to launch a new platform, but lack the dev team to execute it.',
    color: '#B901F6',
  },
];

function ProblemCard({ text, color }: { text: string; color: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center gap-4 p-4 h-[200px] rounded-t-2xl shadow-2xl border-t-[18px] bg-background"
      style={{ borderTopColor: color }}
    >
      <Image
        src="/Speaker icon.svg"
        alt="Problem speaker icon"
        width={32}
        height={32}
        priority
      />
      <p className="text-[16px] md:text-[18px] text-gray-800">{text}</p>
    </div>
  );
}

export default function ProblemWeSolve() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div
      aria-labelledby="problem-title"
      className="w-full px-4 md:px-6 lg:px-12 xl:px-20 bg-background py-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="problem-title"
          className="text-2xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          Problem We Solve
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {problems.map((item, idx) => (
            <ProblemCard key={idx} text={item.text} color={item.color} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <div className="flex justify-center">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              loop
              centeredSlides
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{
                el: '.custom-swiper-pagination',
                clickable: true,
              }}
              onSwiper={setSwiperInstance}
              className="w-full"
            >
              {problems.map((item, idx) => (
                <SwiperSlide key={idx} className="flex justify-center">
                  <ProblemCard text={item.text} color={item.color} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Pagination Dots */}
          <div className="custom-swiper-pagination flex justify-center gap-2 mt-4" />

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <button
              ref={prevRef}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Previous slide"
            >
              <FaArrowLeft className="text-xl text-gray-700" />
            </button>
            <button
              ref={nextRef}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Next slide"
            >
              <FaArrowRight className="text-xl text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
