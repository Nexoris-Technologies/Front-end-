"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Collapse, theme } from "antd";

const text = `Yes. We’re used to collaborating with PMs, engineers, and other designers who can either lead the design or plug in as needed.`;

const getItems = (panelStyle: {
  marginBottom: number;
  borderRadius: number;
  border: string;
}) => [
  {
    key: "1",
    label: (
      <span className="font-bold text-lg sm:text-xl text-[#543CDA]">
        Can you work with our existing product team?
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
        Do you offer standalone design audits?
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
        How long does a typical design engagement take?
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
        Can you design and hand off in Figma?
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
        Do you offer branding too?
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
    <section className="px-4 sm:px-6 md:px-8 lg:py-32 py-10 bg-white">
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-[#543CDA] text-xl sm:text-2xl lg:text-3xl">
          FAQs
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto">
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
