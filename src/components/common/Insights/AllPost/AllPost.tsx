import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const cardsData = [
  {
    image: "/insight1.jpg",
    time: "5 min read",
    title: "Why Speed Still Wins",
    paragraph:
      "Users bounce. Google penalizes. And “we’ll fix it later”  becomes “we’re bleeding traffic.”",
    height: "h-[12rem]",
  },
  {
    image: "/insight2.jpg",
    time: "7 min read",
    title: "The Hidden Cost of Tech Debt",
    paragraph:
      "You won’t notice it on Day 1. But you’ll pay for it in every sprint.",
    height: "h-[12rem]",
  },
  {
    image: "/insight3.jpg",
    time: "6 min read",
    title: "What Startups Miss in V1",
    paragraph:
      "A rushed MVP can haunt you for years.These are the silent killers we catch early and how we solve them",
    height: "h-[12rem]",
  },
  {
    image: "/insight1.jpg",
    time: "5 min read",
    title: "Why Speed Still Wins",
    paragraph:
      "Users bounce. Google penalizes. And “we’ll fix it later” becomes “we’re bleeding traffic.”",
    height: "h-[12rem]",
  },
  {
    image: "/insight2.jpg",
    time: "7 min read",
    title: "The Hidden Cost of Tech Debt",
    paragraph:
      "You won’t notice it on Day 1. But you’ll pay for it in every sprint.",
    height: "h-[12rem]",
  },
  {
    image: "/insight3.jpg",
    time: "6 min read",
    title: "What Startups Miss in V1",
    paragraph:
      "A rushed MVP can haunt you for years.These are the silent killers we catch early and how we solve them",
    height: "h-[12rem]",
  },
];

function Card({ image, title, time, paragraph }) {
  return (
    <div className="rounded-2xl shadow hover:shadow-lg transition h-50rem w-full lg:w-[90%]">
      <div className="relative w-full" style={{ height: '300px' }}>
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover rounded-tr-2xl rounded-tl-2xl"
  />
</div>
    <div className="px-8 py-12">
    <div className="py-12 flex flex-col gap-4">
     <p className="text-sm text-gray-500 font-bold">{time}</p>
     <h3 className="text-lg font-bold mt-2 text-[#543CDA] w-[25rem]">{title}</h3>
      <p className="text-base mt-1 w-[15rem] lg:w-[20rem]">{paragraph}</p>
     </div>
     <Link href="#" className="underline flex items-center gap-4 text-[#543CDA]">
     Read More <FaArrowRight />
     </Link>
    </div>

    </div>
  );
}

export default function AllPost() {
  return (
    <section className="container mx-auto flex flex-col gap-8">
      <div className="">
        <h2 className="font-bold text-[#543CDA] text-xl">All Posts</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center container mx-auto">
     {cardsData.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          time={item.time}
          paragraph={item.paragraph}
        />
      ))}
     </div>

      <div className="bg-[#EAE8F7] container mx-auto flex items-center justify-center py-8">
        <Link href="#">
        <button className="text-[#543CDA] uppercase font-bold cursor-pointer">Load More</button>
        </Link>
      </div>
      </div>
    </section>
  );
}
