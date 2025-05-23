'use client'
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Collapse, theme } from 'antd';

const text = `Most MVPs take 3–6 weeks. Full-scale products land between 10–16. 
We give you a clear timeline, no black holes.`;

const getItems = (panelStyle) => [
  {
    key: '1',
    label: <span className='font-bold text-lg sm:text-xl text-[#543CDA]'>How long does it take to build?</span>,
    children: <p className='text-[#543CDA] font-medium text-sm sm:text-base'>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <span className='font-bold text-lg sm:text-xl text-[#543CDA]'>Can you work with what we already have?</span>,
    children: <p className='text-[#543CDA] font-medium text-sm sm:text-base'>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <span className='font-bold text-lg sm:text-xl text-[#543CDA]'>Will we be able to manage things ourselves?</span>,
    children: <p className='text-[#543CDA] font-medium text-sm sm:text-base'>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: <span className='font-bold text-lg sm:text-xl text-[#543CDA]'>Do you work with global teams?</span>,
    children: <p className='text-[#543CDA] font-medium text-sm sm:text-base'>{text}</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: <span className='font-bold text-lg sm:text-xl text-[#543CDA]'>How much will it cost?</span>,
    children: <p className='text-[#543CDA] font-medium text-sm sm:text-base'>{text}</p>,
    style: panelStyle,
  },
];

const Faqs = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    borderRadius: token.borderRadiusLG,
    border: '1.6px solid #543CDA',
  };

  return (
    <section className='px-4 sm:px-6 md:px-8 lg:py-32 py-16 bg-white'>
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-[#543CDA] text-xl sm:text-2xl lg:text-3xl">
          FAQs: Real Answers, No Fluff
        </h1>
      </div>

<<<<<<< HEAD
      <div className="w-full max-w-5xl mx-auto">
=======
      <div className="w-full max-w-6xl mx-auto">
>>>>>>> origin/master
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <div
              className="w-5 h-5 flex items-center justify-center rounded-md bg-[#543CDA]/40 transition-transform duration-300"
              style={{ transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)' }}
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
