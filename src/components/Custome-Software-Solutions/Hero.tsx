'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import Breadcrumbs from '@/components/Breadcrumbs';

const techStacks = [
  { name: 'React', src: '/images/react.svg' },
  { name: 'Python', src: '/python-logo.png' },
  { name: 'Node.js', src: '/images/nodejs.svg' },
  { name: 'Next.js', src: '/images/next-js.svg' },
  { name: 'HTML', src: '/images/html.svg' },
  { name: 'Firebase', src: '/images/firebase.svg' },
  { name: 'Strapi', src: '/images/strapi.svg' },
];

export default function CustomSoftwareHero() {
  const breadcrumbs = [
    { name: 'Home', href: '/', isCurrentPage: false },
    { name: 'Custom Software Solutions', href: '/custom-software-solutions', isCurrentPage: true },
  ];

  return (
    <div className="relative overflow-hidden w-full px-4 md:px-6 lg:px-12 xl:px-20">
      {/* Breadcrumbs - Top Left (always visible) */}
      <div className="hidden md:block absolute top-4  sm:top-6 z-30 font-poppins">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>

      {/* Hero content */}
      <div className="container mx-auto text-center px-4 py-12 sm:py-24 relative z-20">
        {/* Label */}
        <div className="hidden lg:flex justify-center mb-4">
          <span className="text-sm font-medium font-poppins text-[#0059F1] bg-blue-50 px-4 py-1 rounded-full">
            Custom Software Solution
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary-purple max-w-4xl mx-auto font-inter">
          Build Software That Solves Your Real Business Problems
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-purple-dark max-w-2xl mx-auto">
          Nexoris designs and builds custom platforms, internal tools, and enterprise systems that automate workflows, eliminate bottlenecks, and move your business forward — on your terms.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#543CDA] text-white hover:bg-[#432bb6] font-poppins transition-colors text-sm sm:text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#543CDA]"
            aria-label="Talk to our custom software team"
          >
            Let’s Build Your Solution
            <BsArrowRight className="text-lg leading-none translate-y-[1px]" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Floating Logos - Hidden on mobile */}
      <div className="absolute inset-0 hidden sm:block z-10 pointer-events-none">
        {techStacks.map((stack, i) => (
          <div
            key={i}
            className={`absolute w-10 h-10 md:w-12 md:h-12 opacity-40 hover:opacity-60 transition-all duration-300 ${getPositionClass(i)}`}
          >
            <Image
              src={stack.src.startsWith('/') ? stack.src : `/${stack.src}`}
              alt={stack.name || 'Tech logo'}
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Smarter logo positioning to avoid hero content
function getPositionClass(index: number) {
  const positions = [
    'top-[12%] left-[6%]',
    'top-[12%] right-[6%]',
    'top-[40%] left-[10%]',
    'bottom-[20%] left-[10%]',
    'bottom-[10%] right-[6%]',
    'top-[13%] right-[35%]',
    'bottom-[10%] left-[20%]',
  ];
  return positions[index % positions.length];
}
