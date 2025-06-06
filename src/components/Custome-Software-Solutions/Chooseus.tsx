'use client';

import Image from 'next/image';
import { CgCheckO } from 'react-icons/cg';

export default function WhyChooseCustom() {
  const benefits = [
    'We don’t just code, we solve problems that hurt your business',
    'Deep focus on systems thinking and operational value',
    'UX designed for the way your team actually works',
    'Senior engineers who can build, integrate, and scale complex platforms',
    'Long-term partnership, from V1 to full enterprise transformation',
  ];

  return (
    <div
      aria-labelledby="why-custom-title"
      className="bg-[#F6F5FC] py-20 px-4 md:px-6 xl:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-12 items-center xl:items-start">
        {/* Text Section */}
        <div className="w-full xl:w-1/2 flex flex-col gap-6 text-center xl:text-left">
          <h2
            id="why-custom-title"
            className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight"
          >
            Why Choose Nexoris for Custom Software Development?
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto xl:mx-0">
            We build scalable, intuitive, and future-ready systems tailored to your business goals — not someone else’s template.
          </p>

          <ul className="flex flex-col gap-4 mt-2" role="list">
            {benefits.map((point, index) => (
              <li key={index} className="flex items-start gap-3 justify-start">
                <span className="text-[#543CDA] text-2xl mt-1">
                  <CgCheckO aria-hidden="true" />
                </span>
                <p className="text-gray-800 text-base text-left md:text-lg leading-snug">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full xl:w-1/2 max-w-lg mx-auto xl:mx-0">
          <div className="rounded-3xl overflow-hidden shadow-md border border-[#ddd]">
            <Image
              src="/images/ceo.webp"
              alt="Developer team building custom software at Nexoris"
              width={600}
              height={600}
              className="object-cover w-full h-auto"
              priority
              sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
