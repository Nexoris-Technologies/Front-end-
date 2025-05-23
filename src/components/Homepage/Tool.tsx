"use client";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const tools = [
  { name: "Visual Studio Code", image: "/vs-code-logo.png" },
  { name: "GitLab", image: "/gitlab_icon-logo.png" },
  { name: "Figma", image: "/figma-logo.png" },
  { name: "Python", image: "/python-logo.png" },
  { name: "Adobe XD", image: "/adobe-xd-logo.png" },
  { name: "Adobe XD", image: "/adobe-xd-logo.png" },
];

const ToolCard = ({ tool }: { tool: typeof tools[0] }) => (
  <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-[#EAE8F7] rounded-lg overflow-hidden group shadow-md flex items-center justify-center flex-shrink-0 mx-2">
    <Image
      src={tool.image}
      alt={`${tool.name}-Logo`}
      width={240}
      height={288}
      className="w-16 h-16 object-contain"
    />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-sm sm:text-base font-semibold text-center px-2">{tool.name}</p>
    </div>
  </div>
);

function Tools() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth / 1.5;
      container.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
<<<<<<< HEAD:src/components/Homepage/Tool.tsx
    <section className="flex flex-col items-center justify-center  sm:px-6 py-36 gap-12 w-full bg-white">
=======
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 py-32 gap-12 w-full bg-white">
>>>>>>> origin/master:src/components/common/HomePage/Tools/Tool.tsx
      {/* Header */}
      <div className="text-center space-y-2 w-full">
        <h2 className="text-[#543CDA] font-extrabold text-xl sm:text-2xl md:text-3xl leading-snug">
          We Use Tools That Power the World's Best Products
        </h2>
        <p className="text-sm sm:text-base font-medium text-gray-700">
          We don't chase trends, we use modern, proven technologies that scale beautifully and stay maintainable.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-5xl">
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden scrollbar-hide scroll-smooth px-2 sm:px-4 py-4 snap-x snap-mandatory"
          >
            {tools.map((tool, index) => (
              <div key={index} className="snap-start">
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={() => scroll("left")}
            className="border-2 border-[#543CDA] w-8 h-8 flex items-center justify-center rounded-full"
          >
            <FaArrowLeft className="text-[#543CDA]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="border-2 border-[#543CDA] w-8 h-8 flex items-center justify-center rounded-full"
          >
            <FaArrowRight className="text-[#543CDA]" />
          </button>
        </div>
      </div>

      {/* Footer text */}
      <div className="text-center space-y-2 max-w-lg mt-6">
        <h1 className="font-bold text-lg sm:text-xl text-[#543CDA]">
          Have a preferred stack or legacy codebase?
        </h1>
        <p className="text-sm sm:text-base text-gray-800 font-medium">
          We'll meet you where you are and help take it where it needs to go.
        </p>
      </div>
    </section>
  );
}

export default Tools;
