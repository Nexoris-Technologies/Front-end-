'use client';

import Link from 'next/link';
import { IoIosRocket } from 'react-icons/io';
import { HiChartBar } from 'react-icons/hi2';
import { PiBankBold } from 'react-icons/pi';
import { TbTriangleSquareCircleFilled } from 'react-icons/tb';

const personas = [
  {
    icon: IoIosRocket,
    title: 'Startups & Founders',
    description:
      "You have a bold idea and need a technical partner to bring it to life. From MVP to launch and beyond. Whether you're building your first product or pivoting to a new direction, we'll help you move fast, build smart, and avoid costly mistakes.",
    group: 'A',
  },
  {
    icon: HiChartBar,
    title: 'Growing Businesses',
    description:
      'Your business is scaling and your tech needs to keep up. We help growing teams modernize their systems, automate workflows, and build tools that support the next stage of growth.',
    group: 'B',
  },
  {
    icon: PiBankBold,
    title: 'Agencies, Consultants & Partners',
    description:
      'You serve your own clients and need a reliable tech team to back you up. We collaborate behind the scenes to deliver white-label development, co-branded apps, and seamless handovers.',
    group: 'B',
  },
  {
    icon: TbTriangleSquareCircleFilled,
    title: 'Enterprises & Institutions',
    description:
      'You need custom, secure, and scalable solutions to support operations at scale. We bring technical expertise, design clarity, and long-term support to complex digital transformations.',
    group: 'A',
  },
];

export default function BuiltFor() {
  return (
    <section
      id="built-for"
      aria-labelledby="built-for-heading"
      className="bg-purple-6 py-12 sm:py-16 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Title */}
        <header className="text-center mb-16">
          <h2
            id="built-for-heading"
            className="text-[#20194b] text-2xl md:text-3xl font-bold mb-4"
          >
            Who We&apos;re Built For
          </h2>
          <p className="text-gray-800 text-base md:text-lg max-w-2xl mx-auto">
            At Nexoris, we partner with ambitious teams across different industries and stages of growth. While each client is unique, most fall into one of these four categories:
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {personas.map(({ icon: Icon, title, description, group }, index) => {
            const isGroupA = group === 'A';

            const baseStyle = isGroupA
              ? 'bg-primary-purple text-purple-50'
              : 'bg-white text-primary-purple';

            return (
              <div
                key={index}
                className={`group flex flex-col items-center text-center px-6 py-10 shadow-lg rounded-lg cursor-pointer transition-colors duration-300
                ${baseStyle} hover:bg-black hover:text-white`}
              >
                <Icon
                  className="w-[60px] h-[60px] mb-4 transition-colors duration-300 group-hover:text-white"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed max-w-xs transition-colors duration-300 group-hover:text-white">
                  {description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-primary-purple">
            Not Sure Where You Fit In?
          </h3>
          <p className="mt-2 text-gray-800 text-base">
            That&apos;s okay. We work with a wide range of businesses, and we&apos;d love to hear your story. Tell us what you&apos;re working on, and we&apos;ll figure out how to help.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-block mt-6 text-primary-purple font-bold border border-primary-purple rounded-md px-6 py-3 hover:bg-primary-purple hover:text-purple-6 transition"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
