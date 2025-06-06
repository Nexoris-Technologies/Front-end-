'use client';

import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { generateStaticPageSchema } from '@/lib/seo/schemaSchema';

const faqs = [
  {
    question: 'What kind of software do you build?',
    answer:
      'We build internal tools, SaaS products, operational dashboards, customer portals, and more tailored entirely to your workflow, users, and data.',
  },
  {
    question: 'Do you work with existing systems and APIs?',
    answer:
      'Yes — we can integrate with CRMs, ERPs, databases, cloud platforms, and any REST or GraphQL API you already use.',
  },
  {
    question: 'How long does a typical custom build take?',
    answer:
      'It depends on the scope. MVPs can launch in 6–10 weeks. Larger enterprise builds may take 3–6 months with staged releases.',
  },
  {
    question: 'Can you support and scale our product after launch?',
    answer:
      'Absolutely. We offer long-term support, product iteration, and infrastructure scaling as part of our delivery model.',
  },
  {
    question: 'Is custom software more expensive than off-the-shelf tools?',
    answer:
      'Custom software costs more upfront but saves you long-term pain from limitations, licensing, and process misfits.',
  },
];

export default function FaqsCustom() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="faqs"
      aria-labelledby="faq-heading"
      role="region"
      className="bg-white px-4 sm:px-6 md:px-8 pt-16 pb-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateStaticPageSchema({
              pageTitle: 'Custom Software Development FAQs',
              slug: 'custom-software-faqs',
              description:
                'Common questions and expert answers about custom software solutions at Nexoris Technologies.',
              faqs,
            }),
            null,
            2
          ),
        }}
        key="faq-schema"
      />

      <div className="max-w-5xl mx-auto">
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-[#543CDA] mb-8"
        >
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#543CDA] rounded-lg transition"
              >
                <div className="flex items-center justify-between px-4 py-2 w-full">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                    className="text-left flex-grow text-lg sm:text-xl text-purple-dark cursor-pointer"
                  >
                    {faq.question}
                  </button>
                  <span
                    onClick={() => toggle(index)}
                    className={`flex-none w-10 h-10 rounded-full bg-primary-purple flex items-center justify-center cursor-pointer transition-transform duration-300 ${
                      isOpen ? 'rotate-270' : 'rotate-90'
                    }`}
                  >
                    <IoIosArrowForward className="text-white text-xl leading-none" />
                  </span>
                </div>

                <div
                  id={`faq-content-${index}`}
                  className={`px-4 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <p className="text-gray-700 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
