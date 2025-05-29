'use client';

import React from 'react';
import { Collapse, theme } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';

// Type for FAQ items
interface Faq {
  question: string;
  answer: string;
}

interface FaqsProps {
  faqs: Faq[];
}

const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    borderRadius: token.borderRadiusLG,
    border: '1.6px solid #543CDA',
  };

  const getItems = (panelStyle: React.CSSProperties) =>
    faqs.map((faq, index) => ({
      key: `${index + 1}`,
      label: (
        <h3 className="font-bold text-base sm:text-xl text-purple-dark">
          {faq.question}
        </h3>
      ),
      children: (
        <p className="text-purple-dark font-medium text-sm sm:text-base">
          {faq.answer}
        </p>
      ),
      style: panelStyle,
    }));

  return (
    <section
      className="px-4 sm:px-6 md:px-8 py-16 bg-background"
      aria-labelledby="faq-heading"
    >
      <div className="text-center mb-10">
        <h2
          id="faq-heading"
          className="font-extrabold text-primary-purple text-xl sm:text-2xl lg:text-2xl"
        >
          FAQs: Real Answers, No Fluff
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full bg-primary-purple transition-transform duration-300 ${
                isActive ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <IoIosArrowDown className="text-white text-xl" />
            </div>
          )}
          expandIconPosition="end"
          style={{ background: token.colorBgContainer }}
          items={getItems(panelStyle)}
        />
      </div>
    </section>
  );
};

export default function FaqsWrapper() {
  const faqs: Faq[] = [
    {
      question: 'How long does it take to build?',
      answer:
        'Most MVPs take 3–6 weeks. Full-scale products land between 10–16. We give you a clear timeline, no black holes.',
    },
    {
      question: 'Can you work with what we already have?',
      answer:
        'Absolutely. If your current build is solid, we’ll build on it. If it’s slowing you down, we’ll help rebuild cleaner, faster, better.',
    },
    {
      question: 'Will we be able to manage things ourselves?',
      answer:
        'Yes. We set you up with a custom or headless CMS so you’re not stuck waiting on devs for every change.',
    },
    {
      question: 'Do you work with global teams?',
      answer:
        'All the time. We support clients across Africa, Europe, North America, and anywhere good ideas live.',
    },
    {
      question: 'How much will it cost?',
      answer:
        'Projects start around $2,000. No vague hourly rates. Just clear, scope-based pricing you can plan around.',
    },
  ];

  return <Faqs faqs={faqs} />;
}
