"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    name: "Damilola E.",
    role: "CTO, Medirect",
    image: "/client1.jpg",
    quote:
      "Before Nexoris, we were firefighting bugs every week. Now we deploy confidently and sleep better.",
  },
  {
    name: "John A.",
    role: "CTO, NovaBuild",
    image: "/client2.jpg",
    quote:
      "Our site used to take 9 seconds to load. We lost users constantly. Nexoris rebuilt everything, we’re now under 2s, and conversions tripled.",
  },
  {
    name: "Maria O.",
    role: "Product Lead, FintaGo",
    image: "/client3.jpg",
    quote:
      "Crashes were a daily thing. Support tickets piled up. Since switching to Nexoris, users are actually sending compliments. Never thought I’d see that.",
  },
];

// Single Card Component
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-[#EAE8F7] rounded-md shadow p-6 flex flex-col items-center justify-center gap-8 sm:gap-6 max-w-sm sm:max-w-md mx-auto h-[28rem]">
    <div className="flex flex-col justify-center items-center gap-2">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={240}
        height={240}
        className="w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] rounded-full"
      />
      <h3 className="text-[#543CDA] font-semibold text-xl sm:text-2xl mt-2">{testimonial.name}</h3>
      <p className="text-base sm:text-lg text-center">{testimonial.role}</p>
    </div>
    <p className="text-center text-sm sm:text-base w-[19rem]">{testimonial.quote}</p>
    <div className="flex text-[#543CDA]">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  </div>
);

// Carousel Component
export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth / 1.2;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Track active card based on scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;

      const index = Math.round(scrollLeft / (containerWidth / 1.2));
      setActiveIndex(index);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  // Dot navigation scroll
  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = index * (container.offsetWidth / 1.2);
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-12 lg:py-24 w-full max-w-7xl flex flex-col items-center gap-10 my-16 sm:my-20">
      {/* Section Heading */}
      <div className="text-center flex flex-col gap-3 sm:gap-4">
        <h1 className="font-extrabold text-2xl sm:text-4xl text-[#543CDA]">
          What Our Clients Say After the Panic Fades
        </h1>
        <p className="font-medium text-base sm:text-xl text-[#262128] max-w-3xl mx-auto">
          At Nexoris Technologies, our greatest measure of success is the satisfaction of our clients. Here’s what they have to say about working with us.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="w-full flex flex-col items-center gap-6 sm:gap-8">
        <div className="relative w-full overflow-x-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden scrollbar-hide px-4 sm:px-6 py-4 scroll-smooth snap-x snap-mandatory w-full"
          >
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 snap-center px-2 sm:px-4 w-[90vw] sm:w-auto">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-3 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === i ? "bg-[#543CDA]" : "bg-gray-400"
              }`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
