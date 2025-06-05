"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Collapse, theme } from "antd";

const text = `We tailor our tech stack based on what’s best for your business goals, users, and long-term vision. While we often work with frameworks like React, Next.js, TypeScript, Tailwind CSS, and headless CMS platforms such as Strapi or Sanity, the stack we recommend will always depend on what solves your problem most effectively.`;

const getItems = (panelStyle: {
  marginBottom: number;
  borderRadius: number;
  border: string;
}) => [
  {
    key: "1",
    label: (
      <span className="font-bold text-lg sm:text-xl text-[#543CDA]">
        Do you only work with startups?
      </span>
    ),
    children: (
      <p className="text-[#543CDA] font-medium text-sm sm:text-base">{text}</p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: (
      <span className="font-bold text-lg sm:text-xl text-[#543CDA]">
        How fast can you build a website?
      </span>
    ),
    children: (
      <p className="text-[#543CDA] font-medium text-sm sm:text-base">{text}</p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: (
      <span className="font-bold text-lg sm:text-xl text-[#543CDA]">
        Do you offer redesigns or modernizations?
      </span>
    ),
    children: (
      <p className="text-[#543CDA] font-medium text-sm sm:text-base">{text}</p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: (
      <span className="font-bold text-lg sm:text-xl text-[#543CDA]">
        What’s the average cost of a project?
      </span>
    ),
    children: (
      <p className="text-[#543CDA] font-medium text-sm sm:text-base">{text}</p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: (
      <span className="font-bold text-lg sm:text-xl text-[#543CDA]">
        Can I manage the site myself after launch?
      </span>
    ),
    children: (
      <p className="text-[#543CDA] font-medium text-sm sm:text-base">{text}</p>
    ),
    style: panelStyle,
  },
];

const Faqs = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    borderRadius: token.borderRadiusLG,
    border: "1.6px solid #543CDA",
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 lg:py-32 py-16 bg-white">
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-[#543CDA] text-xl sm:text-2xl lg:text-3xl">
          FAQs
        </h1>
      </div>

      <div className="container lg:w-310 mx-auto">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <div
              className="w-5 h-5 flex items-center justify-center rounded-md bg-[#543CDA] transition-transform duration-300"
              style={{ transform: isActive ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              <IoIosArrowForward className="text-white" />
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

export default Faqs;
