import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const cardsData = [
  {
    image: "/insight1.jpg",
    time: "5 min read",
    title: "Why Speed Still Wins",
    paragraph:
      "Users bounce. Google penalizes. And 'we’ll fix it later' becomes 'we’re bleeding traffic.'",
  },
  {
    image: "/insight2.jpg",
    time: "7 min read",
    title: "The Hidden Cost of Tech Debt",
    paragraph:
      "You won’t notice it on Day 1. But you’ll pay for it in every sprint.",
  },
  {
    image: "/insight3.jpg",
    time: "6 min read",
    title: "What Startups Miss in V1",
    paragraph:
      "A rushed MVP can haunt you for years. These are the silent killers we catch early and how we solve them.",
  },
];

function BigCard({ image, title, time, paragraph }) {
  return (
    <div className="rounded-2xl shadow hover:shadow-lg transition overflow-hidden w-full">
      {/* Image on top */}
      <div className="relative w-full h-116">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      {/* Text */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-white font-bold bg-[#543CDA] px-3 py-1 rounded">
            {time}
          </h3>
          <h3 className="text-sm text-[#543CDA] font-bold">May 19</h3>
        </div>
        <h3 className="text-lg font-bold text-[#543CDA]">{title}</h3>
        <p className="text-sm text-gray-700">{paragraph}</p>
        <Link
          href="#"
          className="underline flex items-center font-bold gap-2 text-[#543CDA] text-sm"
        >
          View <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

function SmallCard({ image, title, time, paragraph }) {
  return (
    <div className="flex rounded-2xl shadow hover:shadow-lg transition w-full overflow-hidden">
      {/* Image on the left */}
      <div className="relative w-1/3 h-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-l-2xl"
        />
      </div>

      {/* Text on the right */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs text-white font-bold bg-[#543CDA] px-2 py-1 rounded">
              {time}
            </h3>
            <h3 className="text-xs text-[#543CDA] font-bold">May 19</h3>
          </div>
          <h3 className="text-sm font-bold text-[#543CDA] mb-1">{title}</h3>
          <p className="text-xs text-gray-700 line-clamp-2 font-bold">{paragraph}</p>
          <ul className="flex gap-8">
           <li className="font-bold text-[#0059F1]">Tech</li>
           <li className="font-bold text-[#0059F1]">Web Design</li>
           <li className="font-bold text-[#0059F1]">UI/IX design</li>
          </ul>
        </div>
        <Link
          href="#"
          className="underline flex items-center font-bold gap-2 text-[#543CDA] text-xs mt-2"
        >
          View <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default function AllPost() {
  return (
    <section className="container mx-auto flex flex-col gap-16 mb-18">
     <div className="">
     <nav>
       <ul className="flex items-center justify-start gap-4 md:justify-center overflow-x-auto md:overflow-visible px-2">
         <li className="whitespace-nowrap text-[#543CDA] font-bold hover:text-white hover:bg-[#543CDA] py-2 px-4 rounded-2xl">
           All
         </li>
         <li className="whitespace-nowrap text-[#543CDA] font-bold hover:text-white hover:bg-[#543CDA] py-2 px-4 rounded-2xl">
           Product Design
         </li>
         <li className="whitespace-nowrap text-[#543CDA] font-bold hover:text-white hover:bg-[#543CDA] py-2 px-4 rounded-2xl">
           Tech
         </li>
         <li className="whitespace-nowrap text-[#543CDA] font-bold hover:text-white hover:bg-[#543CDA] py-2 px-4 rounded-2xl">
           Web Development
         </li>
         <li className="whitespace-nowrap text-[#543CDA] font-bold hover:text-white hover:bg-[#543CDA] py-2 px-4 rounded-2xl">
           SEO
         </li>
         <li className="whitespace-nowrap text-[#543CDA] font-bold hover:text-white hover:bg-[#543CDA] py-2 px-4 rounded-2xl">
           Mobile Development
         </li>
       </ul>
      </nav>

     </div>
      <div className="">
      <h2 className="font-bold text-[#543CDA] text-2xl mb-8">Recent Posts</h2>

<div className="flex flex-col md:flex-row gap-8">
  {/* Left: Big single card */}
  <div className="md:w-1/2">
    <BigCard
      image="/insight1.jpg"
      title="Featured: Why Speed Still Wins"
      time="5 min read"
      paragraph="Users bounce. Google penalizes. And 'we’ll fix it later' becomes 'we’re bleeding traffic.'"
    />
  </div>

  {/* Right: Multiple small cards */}
  <div className="md:w-1/2 flex flex-col gap-4">
    {cardsData.map((item, index) => (
      <SmallCard
        key={index}
        image={item.image}
        title={item.title}
        time={item.time}
        paragraph={item.paragraph}
      />
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
