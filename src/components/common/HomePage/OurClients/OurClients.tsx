// "use client";
// import Image from "next/image";
// import { IoStarSharp } from "react-icons/io5";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useRef } from "react";

// const testimonials = [
//   {
//     name: "Damilola E.",
//     role: "CTO, Medirect",
//     image: "/client1.jpg",
//     quote:
//       "Before Nexoris, we were firefighting bugs every week. Now we deploy confidently and sleep better.",
//   },
//   {
//     name: "John A.",
//     role: "CTO, NovaBuild",
//     image: "/client2.jpg",
//     quote:
//       "Our site used to take 9 seconds to load. We lost users constantly. Nexoris rebuilt everything.",
//   },
//   {
//     name: "Maria O.",
//     role: "Product Lead, FintaGo",
//     image: "/client3.jpg",
//     quote:
//       "Crashes were a daily thing. Since switching to Nexoris, users are actually sending compliments.",
//   },
// ];

// // Single Card Component
// const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
//   <div className="min-w-[90%] sm:min-w-[320px] max-w-sm bg-[#EAE8F7] rounded-md shadow mx-2 sm:mx-4 flex-shrink-0 p-6 flex flex-col items-center gap-4 sm:gap-6">
//     <div className="flex flex-col justify-center items-center">
//       <Image
//         src={testimonial.image}
//         alt={testimonial.name}
//         width={240}
//         height={240}
//         className="w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] rounded-full"
//       />
//       <h3 className="text-[#543CDA] font-semibold text-xl sm:text-2xl mt-2">{testimonial.name}</h3>
//       <p className="text-base sm:text-lg text-center">{testimonial.role}</p>
//     </div>
//     <p className="text-center text-sm sm:text-base">{testimonial.quote}</p>
//     <div className="flex text-[#543CDA]">
//       {[...Array(5)].map((_, i) => (
//         <IoStarSharp key={i} />
//       ))}
//     </div>
//   </div>
// );

// // Carousel Component
// export default function TestimonialCarousel() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     const container = scrollRef.current;
//     if (container) {
//       const scrollAmount = container.offsetWidth / 1.2;
//       container.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="container mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col items-center gap-10 my-16 sm:my-20">
//       {/* Section Heading */}
//       <div className="text-center flex flex-col gap-3 sm:gap-4">
//         <h1 className="font-extrabold text-2xl sm:text-4xl text-[#543CDA]">
//           What Our Clients Say After the Panic Fades
//         </h1>
//         <p className="font-medium text-base sm:text-xl text-[#262128] max-w-3xl mx-auto">
//           At Nexoris Technologies, our greatest measure of success is the satisfaction of our clients. Here’s what they have to say about working with us.
//         </p>
//       </div>

//       {/* Carousel Container */}
//       <div className="w-full max-w-6xl flex flex-col items-center gap-6 sm:gap-8">
//         <div className="relative w-full overflow-x-hidden">
//           <div
//             ref={scrollRef}
//             className="flex w-full overflow-x-auto scrollbar-hide px-2 sm:px-4 py-4 scroll-smooth snap-x snap-mandatory"
//           >
//             {testimonials.map((t, i) => (
//               <div key={i} className="snap-start">
//                 <TestimonialCard testimonial={t} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex gap-4 sm:gap-6">
//           <button
//             className="border-2 border-[#543CDA] w-10 h-10 flex items-center justify-center rounded-full"
//             onClick={() => scroll("left")}
//           >
//             <FaArrowLeft className="text-[#543CDA]" />
//           </button>
//           <button
//             className="border-2 border-[#543CDA] w-10 h-10 flex items-center justify-center rounded-full"
//             onClick={() => scroll("right")}
//           >
//             <FaArrowRight className="text-[#543CDA]" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import Image from "next/image";
// import { IoStarSharp } from "react-icons/io5";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useRef } from "react";

// const testimonials = [
//   {
//     name: "Damilola E.",
//     role: "CTO, Medirect",
//     image: "/client1.jpg",
//     quote:
//       "Before Nexoris, we were firefighting bugs every week. Now we deploy confidently and sleep better.",
//   },
//   {
//     name: "John A.",
//     role: "CTO, NovaBuild",
//     image: "/client2.jpg",
//     quote:
//       "Our site used to take 9 seconds to load. We lost users constantly. Nexoris rebuilt everything.",
//   },
//   {
//     name: "Maria O.",
//     role: "Product Lead, FintaGo",
//     image: "/client3.jpg",
//     quote:
//       "Crashes were a daily thing. Since switching to Nexoris, users are actually sending compliments.",
//   },
// ];

// // Testimonial Card Component
// const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
//   <div className="w-[100vw] sm:min-w-[80%] md:min-w-[60%] max-w-none bg-[#EAE8F7] rounded-md shadow mx-auto sm:mx-4 flex-shrink-0 p-6 flex flex-col items-center gap-4 sm:gap-6 snap-center px-10">
//     <div className="flex flex-col justify-center items-center">
//       <Image
//         src={testimonial.image}
//         alt={testimonial.name}
//         width={240}
//         height={240}
//         className="w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] rounded-full"
//       />
//       <h3 className="text-[#543CDA] font-semibold text-xl sm:text-2xl mt-2">{testimonial.name}</h3>
//       <p className="text-base sm:text-lg text-center">{testimonial.role}</p>
//     </div>
//     <p className="text-center text-sm sm:text-base">{testimonial.quote}</p>
//     <div className="flex text-[#543CDA]">
//       {[...Array(5)].map((_, i) => (
//         <IoStarSharp key={i} />
//       ))}
//     </div>
//   </div>
// );

// // Carousel Component
// export default function TestimonialCarousel() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     const container = scrollRef.current;
//     if (container) {
//       const scrollAmount = container.offsetWidth;
//       container.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="container mx-auto px-0 sm:px-6 lg:px-12 w-full flex flex-col items-center gap-10 my-16 sm:my-20">
//       {/* Section Heading */}
//       <div className="text-center flex flex-col gap-3 sm:gap-4 px-4 sm:px-0">
//         <h1 className="font-extrabold text-2xl sm:text-4xl text-[#543CDA]">
//           What Our Clients Say After the Panic Fades
//         </h1>
//         <p className="font-medium text-base sm:text-xl text-[#262128] max-w-3xl mx-auto">
//           At Nexoris Technologies, our greatest measure of success is the satisfaction of our clients. Here’s what they have to say about working with us.
//         </p>
//       </div>

//       {/* Carousel Container */}
//       <div className="w-full max-w-6xl flex flex-col items-center gap-6 sm:gap-8">
//         <div className="relative w-full overflow-x-hidden">
//           <div
//             ref={scrollRef}
//             className="flex w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
//           >
//             {testimonials.map((t, i) => (
//               <div key={i} className="flex-shrink-0 w-full">
//                 <TestimonialCard testimonial={t} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex gap-4 sm:gap-6">
//           <button
//             className="border-2 border-[#543CDA] w-10 h-10 flex items-center justify-center rounded-full"
//             onClick={() => scroll("left")}
//           >
//             <FaArrowLeft className="text-[#543CDA]" />
//           </button>
//           <button
//             className="border-2 border-[#543CDA] w-10 h-10 flex items-center justify-center rounded-full"
//             onClick={() => scroll("right")}
//           >
//             <FaArrowRight className="text-[#543CDA]" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa6";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useEffect, useRef, useState } from "react";

// const testimonials = [
//   {
//     name: "Damilola E.",
//     role: "CTO, Medirect",
//     image: "/client1.jpg",
//     quote:
//       "Before Nexoris, we were firefighting bugs every week. Now we deploy confidently and sleep better.",
//   },
//   {
//     name: "John A.",
//     role: "CTO, NovaBuild",
//     image: "/client2.jpg",
//     quote:
//       "Our site used to take 9 seconds to load. We lost users constantly. Nexoris rebuilt everything.",
//   },
//   {
//     name: "Maria O.",
//     role: "Product Lead, FintaGo",
//     image: "/client3.jpg",
//     quote:
//       "Crashes were a daily thing. Since switching to Nexoris, users are actually sending compliments.",
//   },
// ];

// const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
//   <div className="flex-shrink-0 snap-center px-2 sm:px-4 w-full sm:w-auto">
//     <div className="bg-[#EAE8F7] rounded-md shadow py-20 px-8 flex flex-col items-center gap-4 md:gap-12 lg:gap-12 sm:gap-6 max-w-5xl sm:max-w-md mx-auto">
//       <div className="flex flex-col justify-center items-center">
//         <Image
//           src={testimonial.image}
//           alt={testimonial.name}
//           width={240}
//           height={240}
//           className="w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] rounded-full"
//         />
//         <h3 className="text-[#543CDA] font-semibold text-xl sm:text-2xl mt-2">{testimonial.name}</h3>
//         <p className="text-base sm:text-lg text-center">{testimonial.role}</p>
//       </div>
//       <p className="text-center text-sm sm:text-base">{testimonial.quote}</p>
//       <div className="flex text-[#543CDA]">
//         {[...Array(5)].map((_, i) => (
//           <FaStar key={i} />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default function TestimonialCarousel() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const scroll = (direction: "left" | "right") => {
//     const container = scrollRef.current;
//     if (container) {
//       const scrollAmount = container.offsetWidth;
//       container.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const goToIndex = (index: number) => {
//     const container = scrollRef.current;
//     if (container) {
//       container.scrollTo({
//         left: index * container.offsetWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Update active dot index on scroll
//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const scrollLeft = container.scrollLeft;
//       const width = container.offsetWidth;
//       const index = Math.round(scrollLeft / width);
//       setActiveIndex(index);
//     };

//     container.addEventListener("scroll", handleScroll);
//     return () => container.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="w-full overflow-hidden flex flex-col items-center gap-10 my-16 sm:my-20">
//       {/* Section Heading */}
//       <div className="text-center flex flex-col gap-3 sm:gap-4 px-4">
//         <h1 className="font-extrabold text-2xl sm:text-4xl text-[#543CDA]">
//           What Our Clients Say After the Panic Fades
//         </h1>
//         <p className="font-medium text-base sm:text-xl text-[#262128] max-w-3xl mx-auto">
//           At Nexoris Technologies, our greatest measure of success is the satisfaction of our clients. Here’s what they have to say about working with us.
//         </p>
//       </div>

//       {/* Carousel Container */}
//       <div className="relative w-full">
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto scrollbar-hide px-4 sm:px-6 py-4 scroll-smooth snap-x snap-mandatory w-full"
//         >
//           {testimonials.map((t, i) => (
//             <TestimonialCard key={i} testimonial={t} />
//           ))}
//         </div>

//         {/* Dot Indicators */}
//         <div className="flex justify-center mt-4 gap-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToIndex(index)}
//               className={`w-3 h-3 rounded-full ${
//                 activeIndex === index ? "bg-[#543CDA]" : "bg-[#C4C4C4]"
//               } transition-all`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


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
      "Our site used to take 9 seconds to load. We lost users constantly. Nexoris rebuilt everything.",
  },
  {
    name: "Maria O.",
    role: "Product Lead, FintaGo",
    image: "/client3.jpg",
    quote:
      "Crashes were a daily thing. Since switching to Nexoris, users are actually sending compliments.",
  },
];

// Single Card Component
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-[#EAE8F7] rounded-md shadow p-6 flex flex-col items-center gap-4 sm:gap-6 max-w-sm sm:max-w-md mx-auto">
    <div className="flex flex-col justify-center items-center">
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
    <p className="text-center text-sm sm:text-base">{testimonial.quote}</p>
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
    <section className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl flex flex-col items-center gap-10 my-16 sm:my-20">
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
            className="flex overflow-x-auto scrollbar-hide px-4 sm:px-6 py-4 scroll-smooth snap-x snap-mandatory w-full"
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
