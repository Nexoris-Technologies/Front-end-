'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'Ifeanyi E.',
    role: 'CEO, Medirect',
    image: '/images/client1.webp',
    quote: 'Before Nexoris, we were firefighting bugs every week. Now we deploy confidently and sleep better.',
  },
  {
    name: 'John A.',
    role: 'CTO, NovaBuild',
    image: '/images/client2.webp',
    quote: 'Our site used to take 9 seconds to load. Nexoris rebuilt everything. Now under 2s, conversions tripled.',
  },
  {
    name: 'Maria O.',
    role: 'Product Lead, FintaGo',
    image: '/images/client3.webp',
    quote: 'Crashes were a daily thing. Support tickets piled up. Now users are sending compliments.',
  },
  {
    name: 'Tunde K.',
    role: 'CEO, PayFleet',
    image: '/images/client4.webp',
    quote: 'Our mobile app no longer crashes under peak traffic. Nexoris changed the game.',
  },
  {
    name: 'Esther N.',
    role: 'Growth Lead, Bravura',
    image: '/images/client5.webp',
    quote: 'We scaled from MVP to platform fast. Clean execution, clear communication, solid results.',
  },
];

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const FallbackImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="96px"
      onError={() => setImgSrc('/images/fallback-client.webp')}
      className="rounded-full object-cover object-top"
    />
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <article
    className="bg-purple-6 rounded-xl shadow-md p-6 flex flex-col justify-between items-center text-center h-full min-h-[22rem]"
    aria-label={`Testimonial from ${testimonial.name}`}
  >
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
      <FallbackImage src={testimonial.image} alt={`Photo of ${testimonial.name}`} />
    </div>

    <div className="flex flex-col items-center gap-1">
      <h3 className="text-primary-purple font-bold text-base sm:text-lg">{testimonial.name}</h3>
      <p className="text-purple-dark text-sm sm:text-base font-medium">{testimonial.role}</p>
    </div>

    <p className="text-purple-dark text-sm sm:text-base leading-relaxed max-w-xs my-4">{testimonial.quote}</p>

    <div className="flex justify-center text-primary-purple" aria-label="5-star rating">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className="w-4 h-4" />
      ))}
    </div>
  </article>
);

export default function TestimonialCarousel() {
  return (
    <section
      className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      aria-labelledby="testimonial-heading"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2
          id="testimonial-heading"
          className="text-primary-purple font-bold text-2xl sm:text-4xl mb-4"
        >
          What Our Clients Say After the Panic Fades
        </h2>
        <p className="text-purple-dark text-base sm:text-lg font-medium">
          At Nexoris Technologies, our greatest measure of success is the satisfaction of our clients.
          Here&apos;s what they have to say about working with us.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, A11y]}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.custom-swiper-next',
          prevEl: '.custom-swiper-prev',
        }}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-16"
        aria-label="Client testimonials carousel"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="h-full">
            <div className="h-full w-full flex">
              <TestimonialCard testimonial={t} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center gap-6">
        <button
          className="custom-swiper-prev bg-background border border-gray-300 hover:border-primary-purple hover:bg-[#f4f1ff] text-primary-purple p-3 rounded-full shadow-sm transition-all"
          aria-label="Previous testimonial"
        >
          <FaArrowLeft className="w-4 h-4" />
        </button>
        <button
          className="custom-swiper-next bg-background border border-gray-300 hover:border-primary-purple hover:bg-[#f4f1ff] text-primary-purple p-3 rounded-full shadow-sm transition-all"
          aria-label="Next testimonial"
        >
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
