import React from 'react';
import { Card } from 'antd';
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

const { Meta } = Card;

function Insight() {
  return (
    <section className='flex flex-col gap-12 items-center justify-center bg-[#EAE8F7] py-12 lg:py-32 px-4'>
      <h2 className='font-extrabold text-3xl text-[#543CDA] text-center'>Insights From The Nexoris Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Card 1 */}
        <Card
          hoverable
          className="w-full"
          cover={
            <Image
              alt="Insight 1"
              src="/insight1.jpg"
              width={350}
              height={288}
              className="h-[18rem] w-full object-cover"
            />
          }
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-medium">5 min read</h2>
            <h1 className="text-lg font-semibold text-[#543CDA]">Why Speed Still Wins</h1>
            <p className="text-sm text-gray-700">
              Users bounce. Google penalizes. And “we’ll fix it later” becomes “we’re bleeding traffic.”
            </p>
          </div>
          <div>
            <Link href="#" className="text-[#543CDA] text-sm underline mt-2 flex items-center gap-2">
              <span className="text-[#543CDA]">Read More</span> <FaArrowRight className='text-[#543CDA]' />
            </Link>
          </div>
        </Card>

        {/* Card 2 */}
        <Card
          hoverable
          className="w-full"
          cover={
            <Image
              alt="Insight 2"
              src="/insight2.jpg"
              width={350}
              height={288}
              className="h-[18rem] w-full object-cover"
            />
          }
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-medium">7 min read</h2>
            <h1 className="text-lg font-semibold text-[#543CDA]">The Hidden Cost of Tech Debt</h1>
            <p className="text-sm text-gray-700">
              You won’t notice it on Day 1. But you’ll pay for it in every sprint.
            </p>
          </div>
          <div>
            <Link href="#" className="text-[#543CDA] text-sm underline mt-2 flex items-center gap-2">
            <span className="text-[#543CDA]">Read More</span> <FaArrowRight className='text-[#543CDA]' />
            </Link>
          </div>
        </Card>

        {/* Card 3 */}
        <Card
          hoverable
          className="w-full"
          cover={
            <Image
              alt="Insight 3"
              src="/insight3.jpg"
              width={350}
              height={288}
              className="h-[18rem] w-full object-cover"
            />
          }
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-medium">6 min read</h2>
            <h1 className="text-lg font-semibold text-[#543CDA]">What Startups Miss in V1</h1>
            <p className="text-sm text-gray-700">
              A rushed MVP can haunt you for years. These are the silent killers we catch early and how we solve them.
            </p>
          </div>
          <div>
            <Link href="#" className="text-[#543CDA] text-sm underline mt-2 flex items-center gap-2">
            <span className="text-[#543CDA]">Read More</span> <FaArrowRight className='text-[#543CDA]' />
            </Link>
          </div>
        </Card>
      </div>

      <Link href="#" className='bg-[#543CDA] text-white py-3 px-16 rounded-md'>
        View All
      </Link>
    </section>
  );
}

export default Insight;
