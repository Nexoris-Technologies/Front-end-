"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Collapse, theme } from "antd";

const text = `We build internal tools, SaaS products, operational dashboards, customer portals, and more tailored entirely to your workflow, users, and data.`;

const getItems = (panelStyle: React.CSSProperties) => [
  {
    key: "1",
    label: (
      <span className="font-bold text-lg sm:text-xl text-[#543CDA]">
        What kind of software do you build?
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
        Do you work with existing systems and APIs?
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
        How long does a typical custom build take?
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
        Can you support and scale our product after launch?
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
        Is custom software more expensive than off-the-shelf tools?
      </span>
    ),
    children: (
      <p className="text-[#543CDA] font-medium text-sm sm:text-base">{text}</p>
    ),
    style: panelStyle,
  },
];

const FaqsCustom = () => {
  const { token } = theme.useToken();
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    borderRadius: token.borderRadiusLG,
    border: "1.6px solid #543CDA",
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:py-32 py-6 bg-white">
      <div className="flex flex-col gap-[40px]">
        <div className="text-center">
          <h1 className="font-extrabold text-[#543CDA] mb-[3rem] text-[40px] text-center sm:text-2xl lg:text-3xl">
            FAQs
          </h1>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <div
                className="w-5 h-5 flex items-center justify-center rounded-md bg-[#543CDA]/40 transition-transform duration-300"
                style={{
                  transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                <IoIosArrowForward className="text-white" />
              </div>
            )}
            expandIconPosition="end"
            style={{ background: token.colorBgContainer }}
            items={getItems(panelStyle)}
          />
        </div>
      </div>
    </section>
  );
};

export default FaqsCustom;
