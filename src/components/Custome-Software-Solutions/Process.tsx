'use client';

import {
  Briefcase,
  Map,
  MousePointerClick,
  Code2,
  ShieldCheck,
  Rocket,
} from 'lucide-react';

const steps = [
  {
    icon: <Briefcase className="w-6 h-6 text-[#543CDA]" />,
    title: 'Understand the Mission',
    description: 'We immerse ourselves in your business, pain points, and process gaps.',
  },
  {
    icon: <Map className="w-6 h-6 text-[#543CDA]" />,
    title: 'Map the Solution',
    description: 'Together we define system requirements, roles, integrations, and success metrics.',
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-[#543CDA]" />,
    title: 'Prototype and Validate',
    description: 'We create clickable flows to stress-test ideas before investing in full dev.',
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#543CDA]" />,
    title: 'Develop and Integrate',
    description: 'Our team builds modular, secure systems and connects your data sources and tools.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#543CDA]" />,
    title: 'Test for Real-World Use',
    description: 'From permission handling to edge-case flows, we validate across user roles.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#543CDA]" />,
    title: 'Launch & Support',
    description: 'We deploy your product, train your team, and stay on to support, iterate, and improve.',
  },
];

export default function CustomProcess() {
  return (
    <div
      aria-labelledby="process-title"
      role="region"
      className="bg-gradient-to-br from-[#F4F5FF] to-[#EAE8F7] py-12 w-full px-4 md:px-6 lg:px-12 xl:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="process-title"
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          How We Build Together
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base">
          Our process is collaborative, iterative, and tailored to your vision — from discovery to delivery.
        </p>
      </div>

      {/* Desktop Timeline View */}
      <div className="hidden lg:grid grid-cols-6 gap-6 relative z-0 mt-16">
        <div className="absolute top-[58px] left-0 w-full h-1 bg-[#C7C5E6] z-0" />
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center text-center px-2"
          >
            <div className="w-12 h-12 bg-white border-2 border-[#543CDA] rounded-full flex items-center justify-center shadow-md mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 max-w-[200px] mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Tablet & Mobile View */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-10 text-left max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-full border-2 border-[#543CDA] flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              {step.icon}
            </div>
            <div>
              <h3 className="text-md font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
